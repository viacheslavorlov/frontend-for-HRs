import { ToggleFeature } from '@/shared/lib/features/ToggleFeature/ToggleFeature';
import { NavbarDeprecated } from './NavbarDeprecated/NavbarDeprecated';
import { NewNavbar } from './NewNavbar/NewNavbar';

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;
    return (
        <ToggleFeature
            feature={'isNewDesign'}
            on={<NewNavbar className={className} />}
            off={<NavbarDeprecated className={className} />}
        />
    );
};
