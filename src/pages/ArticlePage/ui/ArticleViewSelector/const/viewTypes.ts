import { ArticleView } from 'entities/Article';
import Small from 'shared/assets/SmallCards.svg';
import Big from 'shared/assets/BigCards.svg';

export const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: Small,
    },
    {
        view: ArticleView.BIG,
        icon: Big,
    },
];
