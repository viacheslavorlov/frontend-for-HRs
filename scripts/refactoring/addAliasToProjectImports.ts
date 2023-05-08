import { Project } from 'ts-morph';

const project = new Project();
project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx']);
const sourceFiles = project.getSourceFiles();

sourceFiles.forEach((file) => {
    const layers = ['shared', 'entities', 'features', 'widgets', 'pages', 'app'];
    const imports = file.getImportDeclarations();
    imports.forEach((item) => {
        const value = item.getModuleSpecifierValue();
        if (layers.some((layer) => value.startsWith(layer))) {
            item.setModuleSpecifier(`@/${value}`);
        }
        if (value.startsWith('src')) {
            item.setModuleSpecifier(value.replace('src', '@'));
        }
    });
});
project.save();
