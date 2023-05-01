export {
    getArticleDetailsData, getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './model/selectors/articleDetailsSelector';

export { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs';

export {
    ArticleType, ArticleView, ArticleSortField, ArticleBlockType,
} from './model/consts/articleConst';

export type { Article } from './model/types/type';
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type { ArticleDetailsSchema } from './model/types/ArticleDetailsSchema';

export { ArticleList } from './ui/ArticleList/ArticleList';
