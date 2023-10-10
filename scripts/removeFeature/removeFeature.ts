import { JsxAttribute, Node, Project, SyntaxKind } from 'ts-morph';

const featureNameForRemove = process.argv[2];
const featureState = process.argv[3];

const toggleFunctionName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeature';

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
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === toggleFunctionName) {
            isToggleFeatures = true;
        }
    });
    return isToggleFeatures;
}

function isToggleComponent(node: Node) {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);
    return identifier?.getText() === toggleComponentName;
}

const replaceToggleFunction = (node: Node) => {
    const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
    if (!objectOptions) return;

    const offFunctionProperty = objectOptions.getProperty('off');
    const onFunctionProperty = objectOptions.getProperty('on');
    const featureNameProperty = objectOptions.getProperty('name');

    const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
    const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
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
};

const getAttributesByName = (jsxAttributes: JsxAttribute[], name: string) => {
    return jsxAttributes.find((node) => node.getName() === name);
};

const replaceToggleComponent = (node: Node) => {
    const attributes = node?.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    const onAttribute = getAttributesByName(attributes, 'on');

    const offAttribute = getAttributesByName(attributes, 'off');

    const featureNameAttribute = getAttributesByName(attributes, 'feature');

    const featureName = featureNameAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        ?.slice(1, -1);

    if (featureName !== featureNameForRemove) return;

    const onValue = onAttribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression();

    const offValue = offAttribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression();

    if (featureState === 'on') {
        if (onValue) {
            node.replaceWithText(onValue.getText());
        }
    }
    if (featureState === 'off') {
        if (offValue) {
            node.replaceWithText(offValue.getText());
        }
    }
};

sourceFiles.forEach((file) => {
    file.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            replaceToggleFunction(node);
        }
        if (node.isKind(SyntaxKind.JsxSelfClosingElement) && isToggleComponent(node)) {
            replaceToggleComponent(node);
        }
    });
});

project.save();
