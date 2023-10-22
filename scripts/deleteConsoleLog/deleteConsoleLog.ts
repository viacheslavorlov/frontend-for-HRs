import { Project, SyntaxKind } from "ts-morph";

// Путь к вашему проекту
const projectPath = 'src';

// Создаем экземпляр проекта
const project = new Project();

// Загружаем проект
project.addSourceFilesAtPaths([`${projectPath}/**/*.ts`, `${projectPath}/**/*.tsx`]);

// Обходим все исходные файлы проекта
project.getSourceFiles().forEach(sourceFile => {
	// Ищем все вызовы console.log()
	const consoleLogs = sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression)
		.filter(callExpression => callExpression.getExpression().getText() === "console.log");
	
	// Удаляем вызовы console.log()
	consoleLogs.forEach(consoleLog => {
		consoleLog.replaceWithText('');
	});
});

// Сохраняем изменения
project.saveSync();