import { componentRender } from 'shared/config/tests/componentRender/ComponentRender';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { screen } from '@testing-library/react';
import { ProfileType } from 'entities/Profile';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { EditableProfileCard } from './EditableProfileCard';
import { profileReducer } from '../model/slice/profileSlice';

const profile: ProfileType = {
    id: '1',
    first: 'admin',
    last: 'admin',
    age: 465,
    currency: Currency.USD,
    country: Country.Kazakhstan,
    city: 'Moscow',
    username: 'admin213',
    avatar: 'adasdfasdfasdf',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('Режим рид онли должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));
        expect(screen.getByTestId('EditableProfileCard.CancelButton')).toBeInTheDocument();
    });

    test('при отмене значепния должны обнульяться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

        await userEvent.clear(screen.getByTestId('EditableProfileCard.FirstName'));
        await userEvent.clear(screen.getByTestId('EditableProfileCard.LastName'));

        await userEvent.type(screen.getByTestId('EditableProfileCard.FirstName'), 'user');
        await userEvent.type(screen.getByTestId('EditableProfileCard.LastName'), 'user');

        expect(screen.getByTestId('EditableProfileCard.FirstName')).toHaveValue('user');
        expect(screen.getByTestId('EditableProfileCard.LastName')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCard.CancelButton'));
        expect(screen.getByTestId('EditableProfileCard.FirstName')).toHaveValue('admin');
        expect(screen.getByTestId('EditableProfileCard.LastName')).toHaveValue('admin');
    });

    test('должна быть ошибка', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

        await userEvent.clear(screen.getByTestId('EditableProfileCard.FirstName'));

        await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('запрос отправлен на сервер', async () => {
        const mockedApiPut = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

        await userEvent.clear(screen.getByTestId('EditableProfileCard.FirstName'));
        await userEvent.type(screen.getByTestId('EditableProfileCard.FirstName'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));
        expect(mockedApiPut).toHaveBeenCalled();
    });
});
