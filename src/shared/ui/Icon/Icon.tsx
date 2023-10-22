import { FC, memo, SVGProps } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { toggleFeatures } from '@/shared/lib/features';

interface IconProps extends SVGProps<SVGSVGElement> {
	className?: string;
	Svg: FC<SVGProps<SVGSVGElement>>;
	inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
	const { className, Svg, ...otherProps } = props;
	
	return (
		<Svg
			className={classNames(toggleFeatures({
				name: 'isNewDesign',
				off: () => cls.Icon,
				on: () => cls.IconRedesigned,
			}), {}, [
				className,
			])}
			{...otherProps}
		/>
	);
});