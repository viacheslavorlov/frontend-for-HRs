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

//!  Для функции toggleFeatures
function isToggleFunction(node: Node) {
    let isToggleFeatures = false;
    node.forEachChild((child) => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === toggleFunctionName) {
            isToggleFeatures = true;
        }
    });
    return isToggleFeatures;
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

//------------------------------------------------------------------------------//
//! для компонента ToggleFeature 
function isToggleComponent(node: Node) {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);
    return identifier?.getText() === toggleComponentName;
}

const getAttributesByName = (jsxAttributes: JsxAttribute[], name: string) => {
    return jsxAttributes.find((node) => node.getName() === name);
};

const prepareReplaceValue = (attribute?: Node) => {
    const value = attribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText();
    if (value?.startsWith('(')) {
        return value.slice(1, -1);
    }
    return value || '';
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

    const onValue = prepareReplaceValue(onAttribute);

    const offValue = prepareReplaceValue(offAttribute);
        
    if (featureState === 'on') {
        if (onValue) {
            node.replaceWithText(onValue);
        }
    }
    if (featureState === 'off') {
        if (offValue) {
            node.replaceWithText(offValue);
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
