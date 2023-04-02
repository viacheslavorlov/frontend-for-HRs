import { getQueryParams } from 'shared/lib/url/addQuerryParams/addQuerryParams';

describe('shared/url/addQueryParams', () => {
    test('with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });

    test('with one param', () => {
        const params = getQueryParams({
            test: 'value',
            search: 'string',
        });
        expect(params).toBe('?test=value&search=string');
    });

    test('with one param', () => {
        const params = getQueryParams({
            test: 'value',
            search: 'string',
            order: 'tolow',
        });
        expect(params).toBe('?test=value&search=string&order=tolow');
    });
});
