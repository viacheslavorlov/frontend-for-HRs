import path from 'path';
import { Project } from 'ts-morph';

const project = new Project({});
project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx']);
const sourceFiles = project.getSourceFiles();
const pathToShared = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(pathToShared);
const componentsDirs = sharedUiDirectory?.getDirectories();

componentsDirs?.forEach((directory) => {
    const indexFilePath = `${directory.getPath()}/index.ts`;
    const indexFile = directory.getSourceFile(indexFilePath);
    if (!indexFile) {
        const sourceCode = `export * from './${directory.getBaseName()}'`;
        const file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true });
        file.save();
    }
});

function isAbsolute(value: string) {
    const layers = ['shared', 'entities', 'features', 'widgets', 'pages', 'app'];
    return layers.some((layer) => value.startsWith(layer));
}

sourceFiles.forEach((file) => {
    const imports = file.getImportDeclarations();
    imports.forEach((importDclaration) => {
        const value = importDclaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');

        const segments = valueWithoutAlias.split('/');

        const isSharedLayer = segments?.[0] === 'shared';
        const isUiSlice = segments?.[1] === 'ui';

        if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/');

            importDclaration.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
