import React, {memo} from 'react';
import {useTranslation} from "react-i18next";


const MainPage = memo(() => {
    const {t, i18n} = useTranslation('main')

    return (
        <div>
            {t('Главная')}
        </div>
    );
});

export default MainPage;
