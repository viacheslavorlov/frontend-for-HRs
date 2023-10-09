import fs from 'fs';

function generateReactComponent(componentName: string) {
    const componentContent = `import React from 'react';

function ${componentName}() {
  return (
    <div>
      <h1>${componentName}</h1>
    </div>
  );
}

export default ${componentName};
`;

    const fileName = `${componentName}.tsx`;

    fs.writeFile(fileName, componentContent, (err) => {
        if (err) {
            console.error('Ошибка при создании компонента:', err);
        } else {
            console.log(`Компонент ${componentName} успешно создан в файле ${fileName}`);
        }
    });
}

// Получаем название компонента из аргументов командной строки
const componentName = process.argv[2];

if (!componentName) {
    console.error('Пожалуйста, укажите название компонента в аргументах командной строки.');
    process.exit(1);
}

generateReactComponent(componentName);
