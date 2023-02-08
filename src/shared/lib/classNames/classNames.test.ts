import { classNames } from './classNames';

describe('classNames testing', () => {
    test('classNames with single prop', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('classNames with first prop & empty object & without third prop', () => {
        expect(classNames('someClass', {})).toBe('someClass');
    });
    test('classNames with first prop & empty object & with [] third prop', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass');
    });
    test('classNames with first prop & empty object & with third prop', () => {
        expect(classNames('someClass', {}, ['class2', 'class3']))
            .toBe('someClass class2 class3');
    });
    test('classNames with first prop &  object mods & with third prop', () => {
        expect(classNames('someClass', {
            secondPropClass: false, secondPropClass2: true,
        }, ['class2', 'class3']))
            .toBe('someClass class2 class3 secondPropClass2');
    });
    test('classNames with first prop &  object mods with "undefined" & with third prop', () => {
        expect(classNames('someClass', {
            secondPropClass: true, secondPropClass2: undefined,
        }, [undefined, 'class3']))
            .toBe('someClass class3 secondPropClass');
    });
});
