[![linting-testing-building](https://github.com/viacheslavorlov/frontend-for-HRs/actions/workflows/main.yml/badge.svg)](https://github.com/viacheslavorlov/frontend-for-HRs/actions/workflows/main.yml)

[![Netlify Status](https://api.netlify.com/api/v1/badges/061635b6-833b-4b90-8e71-e1cd6ec89b0a/deploy-status)](https://app.netlify.com/sites/blog-on-fsd-architecture/deploys)

## Настройка и запуск проекта

```
    npm install - установка зависимостей
    npm run start:dev или  npm run vite:dev - запуск проекта и локального сервера с фейковым бекендом
```

----              -----

## Скрипты

- `"vite:production"`: "vite build", - продакшн сборка на vite
- `"vite:dev"`: "concurrently \"vite serve\" \"node ./json-server/index.js\"", - сборка для разработки на Vite
- `"start"`: "webpack serve --env port=3000", -запуск проекта на webpack
- `"start:dev:server"`: "node ./json-server/index.js", запуск ффейкового сервера
- `"start:dev"`: "concurrently \"webpack serve --env port=3000\" \"node ./json-server/index.js\"", - запуск сервера и
  сборки одновременно!!!
- `"build:production"`: "webpack --env mode=production apiUrl=https://backend-for-advanced-frontend.vercel.app/",
  продакшн сборка на webpack
- `"build:development"`: "webpack --env mode=development", сборка на webpack в режиме разработки
- `"lint:ts"`: "eslint \"**/*.{ts,tsx}\"", - проверка линтером
- `"lint:ts:fix"`: "eslint \"**/*.{ts,tsx}\" --fix", - проверка линтером с фиксом ошибок
- `"stylelint"`: "stylelint \"**/*.scss\"", запуск stylelint
- `"stylelint:fix"`: "stylelint \"**/*.scss\" --fix", запуск stylelint c фиксом ошибок
- `"unit"`: "jest --config ./config/jest/jest.config.ts --transformIgnorePatterns \\\"node_modules/(?!axios)/\\\"", юнит
  тесты
- `"storybook"`: "start-storybook -p 6006 -c ./config/storybook", запуск storybook
- `"build-storybook"`: "build-storybook -c ./config/storybook", сборка storybook
- `"loki:test"`: "npx loki test", - скриншотное тестирование на loki
- `"loki:approve"`: "npx loki approve", - одобрить измененные скриншоты
- `"visual:report:json"`: "node scripts/generate-visual-json-report.js", генерация отчета скриншотного тестирование с
  запуском сравнения скриншотов в браузере

---

## Архитектура проекта

Написание проекта проходило в соответствии с методологией Feature sliced design

Ссылка на полную документацию: [FSD](https://feature-sliced.design/ru/docs/get-started/overview)

----         ------------

## Интернационализация

Для работы с переводами в проекте использована библиотека i18next.
Файлы с переводами хранятся в папке public/locales.

Для удобства можно использовать плагин i18next для вашего редактора:
[webstorm](https://plugins.jetbrains.com/plugin/16316-easy-i18n),
[vscode](https://github.com/lokalise/i18n-ally)

Документация по библиотеке: https://www.i18next.com/

----

## Тестирование

В проекте используется 3 вида тестов:

1. Unit - тесты - `npm run unit`
2. Тесты для React-компонентов с [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
   - `npm run unit`
3. Скриншотное тестирование loki + storybook - `npm run loki:test`

--------

## Линтер

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Для контроля за соблюдением FSD архитектуры используется самодельный
eslint-plugin-[fsd-architecture-checker](https://github.com/viacheslavorlov/eslint-plugin-fsd-architecture-checker)

- public-api-import: контроль за импортом из других модулей только через из public API
- import-path-checker: запрет абсолютных путей в рамках одного модуля
- layers-import-order: проверяет правильность порядка импорта из нижних слоев в более высокие

#### Запуск линтера:

- `"lint:ts"`: "eslint \"**/*.{ts,tsx}\"", - проверка линтером
- `"lint:ts:fix"`: "eslint \"**/*.{ts,tsx}\" --fix", - проверка линтером с фиксом ошибок
- `"stylelint"`: "stylelint \"**/*.scss\"", запуск stylelint
- `"stylelint:fix"`: "stylelint \"**/*.scss\" --fix", запуск stylelint c фиксом ошибок

## Storybook

В проекте используется [storybook](https://storybook.js.org/) для описания компонентов и слежки за их визуальной
составляющей. Файлы с расширением `stories.tsx` используются для создания библеотеки компонентов storybook. 
Используются различные декораторы для имитации состояния и имитации стилей и запросов на сервер.

#### Запуск:

`npm run storybook`

#### Пример кода `stories` для компонента

```typescript jsx
// Card.stories.tsx

import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Theme} from '@/shared/const/theme/themeConst';
import {ThemeDecorator} from '@/shared/config/themeDecorator/themeDecorator';
import {Text} from '../Text/Text';
import {Card} from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        background: {control: 'background'},
    },
} as ComponentMeta<typeof Card>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardLight = Template.bind({});
CardLight.args = {
    children: <Text title="test" text="test, test"/>,
};
CardLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const CardDark = Template.bind({});
CardDark.args = {
    children: <Text title="test" text="test, test"/>,
};
CardDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CardOrange = Template.bind({});
CardOrange.args = {
    children: <Text title="test" text="test, test"/>,
};
CardOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

```


## CI\CD

Github Actions предназначен для автоматической проверки, тестирования и сборки проекта при каждом пуше или создании pull request в ветке  main .

```yaml
name: linting, testing, building
on:
    push:
        branches: [ main ]
    pull_request:
        branches: [ main ]
permissions:
    contents: write
    pages: write
    id-token: write
concurrency:
    group: "pages"
    cancel-in-progress: true
jobs:
    build-and-ui-testing:
        runs-on: ubuntu-latest
        concurrency: ci-${{ github.ref }}
        environment:
            name: github-pages
            url: ${{ steps.deployment.outputs.page_url }}
        strategy:
            matrix:
                node-version: [ 18.x ]
        steps:
            - uses: actions/checkout@v3
            - name: Staring Node.js ${{ matrix.node-version }}
              uses: actions/setup-node@v3
              with:
                  node-version: ${{ matrix.node-version }}
            - name: install modules
              run: npm ci
            - name: build production project
              run: npm run build:production
              if: always()
            - name: build storybook
              run: npm run build-storybook
              if: always()
            - name: screenshot testing
              run: npm run test:ui:ci
              if: always()
            - name: Generate HTML report
              run: npm run test:ui:report
              if: always()
            - name: move loki report
              run: mv .loki reports/
              if: always()
            - name: Setup Pages
              uses: actions/configure-pages@v2
              if: always()
            - name: Upload artifact
              uses: actions/upload-pages-artifact@v1
              if: always()
              with:
                  path: 'reports'
            - name: Deploy to GitHub Pages
              id: deployment
              if: always()
              uses: actions/deploy-pages@v1

    checks:
        runs-on: ubuntu-latest
        strategy:
            matrix:
                node-version: [ 18.x ]
        steps:
            - uses: actions/checkout@v3
            - name: Staring Node.js ${{ matrix.node-version }}
              uses: actions/setup-node@v3
              with:
                  node-version: ${{ matrix.node-version }}
            - name: install modules
              run: npm ci
            - name: linting typescript
              run: npm run lint:ts
              if: always()
            - name: linting css
              run: npm run stylelint
            - name: unit testing
              if: always()
              run: npm run unit

```

#### Триггеры

-  push : Запускает Github Actions при каждом пуше в ветку  main .
-  pull_request : Запускает Github Actions при создании pull request в ветку  main .

#### Разрешения

-  contents : Разрешает запись в содержимое репозитория.
-  pages : Разрешает запись в Github Pages.

#### Concurrency

-  group : Группа для ограничения параллельных запусков.
-  cancel-in-progress : Отменяет предыдущий запуск, если новый запуск был инициирован.

### Jobs

#### build-and-ui-testing

Задача для сборки проекта, сборки Storybook и тестирования пользовательского интерфейса.

-  runs-on : Использует последнюю версию Ubuntu.
-  concurrency : Ограничивает параллельные запуски.
-  environment : Имя и URL среды, в которой выполняется задача.
-  strategy : Матрица для запуска задачи с разными версиями Node.js (в данном случае 18.x).
-  steps : Шаги для выполнения задачи, включая установку зависимостей, сборку проекта, сборку Storybook, тестирование пользовательского интерфейса, генерацию отчетов и развертывание на Github Pages.
   
  - :) ДЛЯ ПОСМОТРА ОТЧЕТА СКРИНШОТНЫХ ТЕСТОВ МОЖНО ПЕРЕЙТИ НА https://viacheslavorlov.github.io/frontend-for-HRs/report.html
  ЕСЛИ ИМЕЮТСЯ РАЗЛИЧИЯ ПРИ СРАВНЕНИИ СКРИНШОТОВ - В ЭТОМ ФАЙЛЕ БУДУТ ПРЕДСТАВЛЕНЫ ЭТИ СРАВНЕНИЯ В УДОБНОМ ДЛЯ ПРОСМОТРА ВИДЕ 

#### checks

Задача для проверки кода на соответствие стилю и выполнения юнит-тестов.

-  runs-on : Использует последнюю версию Ubuntu.
-  strategy : Матрица для запуска задачи с разными версиями Node.js (в данном случае 18.x).
-  steps : Шаги для выполнения задачи, включая установку зависимостей, проверку TypeScript и CSS кода на соответствие стилю и выполнение юнит-тестов.

## React-hooks

### useDebounce:
Это настраиваемый React-хук, который можно использовать в функциональных компонентах React, чтобы выполнить задержку при вызове функции. Задержка выполняется при помощи функции debounce, что означает отложенное выполнение функции до тех пор, пока не пройдет определенное количество времени с момента последнего вызова. Это может быть полезно, если у вас есть дорогостоящая операция, которую вы хотите выполнить только после того, как пользователь остановится печатать на определенное количество времени, например.
Хук  useDebounce  принимает два аргумента:
-  `callback` : Это функция, которую вы хотите выполнить после задержки. Эта функция может принимать любое количество аргументов любого типа, но не возвращает никаких значений.
-  `delay` : Это количество времени (в миллисекундах), на которое вы хотите отложить выполнение функции.

```typescript

import { MutableRefObject, useCallback, useRef } from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef() as MutableRefObject<any>;

    return useCallback((...args: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}
```
   
Хук возвращает новую функцию, которую можно вызвать вместо исходной функции. Эта новая функция принимает те же аргументы, что и исходная функция, но вызывает исходную функцию только в том случае, если прошло достаточно времени с момента последнего вызова.
Под капотом хук использует хуки  `useRef`  и  `useCallback`  из React для отслеживания функции с задержкой и таймера, который определяет время ее вызова. Он возвращает новую функцию, которую можно вызвать вместо исходной функции.

### useAppDispatch:
Это настраиваемый React-хук, который можно использовать в функциональных компонентах React, чтобы получать экземпляр Redux-хранилища  `dispatch` . Экземпляр  dispatch  можно использовать для отправки действий в Redux-хранилище и изменения его состояния.
Для использования этого хука необходимо импортировать его из пакета  `react-redux` . Хук принимает обобщенный тип  `AppDispatch` , который является типом  dispatch  для вашего приложения.  
Этот хук возвращает функцию  `useDispatch`  из пакета  `react-redux` , которая возвращает экземпляр  `dispatch` . Однако, в отличие от стандартной функции  useDispatch ,  useAppDispatch  возвращает типизированный экземпляр  dispatch , который соответствует типу  AppDispatch .
Важно отметить, что для корректной работы этого хука необходимо импортировать тип  AppDispatch  из вашего файлового дерева приложения. Также, необходимо убедиться, что вы предоставили хранилище Redux через  react-redux   Provider  в вашем компоненте высшего порядка.

```typescript
import { useDispatch } from 'react-redux';
// eslint-disable-next-line fsd-architecture-checker/layers-imports-order
import { AppDispatch } from '@/app/providers/StoreProvider';

// export const useAppDispatch<AppDispatch> = useDispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
```


### useInitialEffect:
Этот хук использует встроенный хук  `useEffect` , чтобы подписаться на события жизненных циклов компонента и исполнить функцию поведения только один раз при первоначальном рендеринге компонента.
Для использования этого хука необходимо импортировать его из пакета  react . Хук принимает функцию обратного вызова  callback , которую необходимо выполнить только один раз при инициализации компонента.
Внутри хука, проверяется значение переменной  `__PROJECT` , и если оно не равно  `storybook`  и  `jest` , то вызывается переданная функция  `callback` . Это позволяет выполнять функцию поведения только в контексте вашего проекта, а не во время тестирования или других сред.
Важно отметить, что хук  `useInitialEffect`  не подписывается на обновления компонента, поэтому функция поведения может быть вызвана только один раз при инициализации компонента. Также, необходимо убедиться, что вы правильно определили значение переменной  `__PROJECT`  в вашем приложении.

```typescript
import { useEffect } from 'react';

export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (__PROJECT !== 'storybook' && __PROJECT !== 'jest') {
            callback();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
```

### useModal:
Этот хук использует другие встроенные хуки, такие как  `useState` ,  `useCallback` , и  `useEffect` , чтобы управлять состоянием модального окна, отслеживать открытие и закрытие модального окна, а также управлять его анимацией.
Для использования этого хука необходимо импортировать его из пакета  `react` . Хук принимает объект параметров  `UseModalProps` , в который можно передать функцию обратного вызова  `onClose`  для закрытия модального окна, флаг  `isOpen`  для управления состоянием открытия модального окна и задержку анимации  `animationDelay` .
Внутри хука создается состояние  `isClosing` , которое используется для определения закрытия модального окна. Создается также состояние  `isMounted` , которое определяет открытие и закрытие модального окна и используется для запуска анимации закрытия. Создается ссылка  `timerRef` , которая используется для задания задержки анимации закрытия.
Функция  `close`  обратного вызова вызывается при закрытии модального окна. Она проверяет наличие функции  `onClose` , устанавливает состояние  `isClosing`  в  `true` , и задает задержку анимации закрытия. Когда задержка заканчивается, вызывается функция  `onClose` , устанавливается состояние  `isClosing`  в  `false` .
Функция  `onKeyDown`  обратного вызова используется для закрытия модального окна клавишей Esc. Она вызывается при нажатии клавиши клавиатуры и вызывает функцию  `close` , если код нажатой клавиши равен  `'Escape'` .
Хук  `useModal`  подписывается на изменение состояния  `isOpen`  и отслеживает нажатие клавиши Esc. Он устанавливает слушатель событий клавиатуры, который отслеживает нажатие на клавишу Esc, и удаляет его, когда модальное окно закрыто. Если значение  `isOpen`  равно  `true` , устанавливается состояние  `isMounted`  в  `true` .
Хук возвращает объект, содержащий функцию  `close` , флаг  `isClosing` , который определяет закрыто ли модальное окно, и флаг  `isMounted` , который определяет открыто ли модальное окно.

```typescript
import {
    useCallback, useEffect, useRef, useState,
} from 'react';

export interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay: number;
}

export function useModal({
    animationDelay, isOpen, onClose,
}: UseModalProps) {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return { close, isClosing, isMounted };
}

```

### useTheme: 

Возвращает объект с функцией `toggleTheme` и темой. Функция `toggleTheme` изменяет тему, сохраненную в локальном хранилище, и применяет ее к телу документа (document.body). При этом происходит переключение между тремя различными темами: `LIGHT`, DARK и `ORANGE`.

Функция использует хук `useContext` для доступа к контексту `ThemeContext`, который содержит информацию о текущей теме и функции изменения темы. Значение темы и функция изменения темы присваиваются переменным `theme` и `setTheme` соответственно.

Возвращаемый объект содержит текущую тему и функцию `toggleTheme` для ее изменения. Если текущая тема не определена, устанавливается значение `LIGHT`.

```typescript
import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage/localStorage';
import { Theme } from '../../../const/theme/themeConst';
import { ThemeContext } from '../../context/ThemeContext';

interface UseThemResult {
    toggleTheme: () => void;
    theme: Theme
}

export function useTheme(): UseThemResult {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        let newTheme;
        switch (theme) {
        case Theme.LIGHT:
            newTheme = Theme.DARK;
            break;
        case Theme.DARK:
            newTheme = Theme.ORANGE;
            break;
        case Theme.ORANGE:
            newTheme = Theme.LIGHT;
            break;
        default:
            newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}

```

### useThrottle

Данный код представляет функцию `useThrottle`, которая использует хуки `useCallback` и `useRef` для создания функции, которая выполняет переданную ей функцию `callback` не чаще одного раза за определенный период времени `delay`.
Функция `useThrottle` принимает два аргумента: функцию `callback` и время задержки `delay` (в миллисекундах).
Функция использует хук `useRef` для создания ссылки на переменную trottlingRef, которая указывает, была ли уже выполнена функция `callback` или нет.
Затем функция возвращает другую функцию, которая будет вызвана при каждом вызове `useThrottle`. Если значение переменной `trottlingRef` равно `false` (т.е. функция еще не была выполнена), то выполняется переданная функция `callback` и переменная `trottlingRef` становится `true`. После задержки определенного времени, указанного в переменной `delay`, переменная `trottlingRef` устанавливается в `false`, чтобы функция `callback` могла быть выполнена повторно.
Функция `useCallback` используется для мемоизации созданной функции и оптимизации производительности. В массиве зависимостей указываются аргументы callback и `delay`, чтобы функция `useThrottle` пересоздавалась только в случае изменения этих значений.

```typescript
import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
const trottlingRef = useRef(false);

    return useCallback(
        (...args: any[]) => {
            if (!trottlingRef.current) {
                callback(...args);
                trottlingRef.current = true;
                setTimeout(() => {
                    trottlingRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );
}
```