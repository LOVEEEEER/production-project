import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({className}) => {
    const {t} = useTranslation()

    const handleReloadPage = () => {
        location.reload()
    }

    return <div className={classNames(cls.PageError, {}, [className])}>
        <p>{t("Произошла не предвиденая ошибка")}</p>
        <Button onClick={handleReloadPage}>
            {t('Обновить страницу')}
        </Button>
    </div>
}