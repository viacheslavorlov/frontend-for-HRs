import { ToggleFeature } from '@/shared/lib/features/ToggleFeature/ToggleFeature';
import { NewSidebar } from './NewSideBar';
import { SidebarDeprecated } from './SidebareDeprecated';


export const Sidebar = () => {
	
	return (
		<ToggleFeature
			feature={'isNewDesign'}
			on={<NewSidebar />}
			off={<SidebarDeprecated />}
		/>
	);
};
