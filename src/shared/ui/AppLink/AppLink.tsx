import {classNames} from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import {Link, LinkProps} from "react-router-dom";
import {FC, PropsWithChildren} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme
}


export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
    const {to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...rest
    } = props


    return <Link
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        to={to}
        {...rest}
    >
        {children}
    </Link>
}