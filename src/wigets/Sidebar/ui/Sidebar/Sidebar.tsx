import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import {useState} from "react";
import {ThemeSwitcher} from "wigets/ThemeSwitcher";
import {TranslateSwitcher} from "wigets/TranslateSwitcher/TranslateSwitcher";
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const {t} = useTranslation('translation')
    const [collapsed, setCollapsed] = useState(false);
    const label = collapsed ? t('Развернуть') : t('Свернуть');
    const onToggle = () => {
        setCollapsed(prevState => !prevState);
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>{label}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <TranslateSwitcher className={cls.lang}/>
            </div>

        </div>
    );
};

