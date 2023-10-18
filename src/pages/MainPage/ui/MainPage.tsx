import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('новый перевод')}
        </div>
    );
};

export default MainPage;
