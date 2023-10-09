import { Node, Project, SyntaxKind } from 'ts-morph';

const featureNameForRemove = process.argv[2];
const featureState = process.argv[3];

if (!featureNameForRemove) {
    throw new Error('Введите название фичи для удаления');
}

if (!featureState) {
    throw new Error('Введите состояние фичи: on/off');
}

if (featureState !== 'on' && featureState !== 'off') {
    throw new Error('Введите состояние фичи: on/off');
}

const project = new Project();
project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx']);
const sourceFiles = project.getSourceFiles();

function isToggleFunction(node: Node) {
    let isToggleFeatures = false;
    node.forEachChild((child) => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeatures') {
            isToggleFeatures = true;
        }
    });
    return isToggleFeatures;
}

sourceFiles.forEach((file) => {
    file.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
            if (!objectOptions) return;

            const offFunctionProperty = objectOptions.getProperty('off');
            const onFunctionProperty = objectOptions.getProperty('on');
            const featureNameProperty = objectOptions.getProperty('name');

            const onFunction = onFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const offFunction = offFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const featueName = featureNameProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            if (featueName !== featureNameForRemove) return;

            if (featureState === 'on') {
                node.replaceWithText(onFunction?.getBody().getText() ?? '');
            }
            if (featureState === 'off') {
                node.replaceWithText(offFunction?.getBody().getText() ?? '');
            }
        }
    });
});

project.save();
