import { StateSchema } from '@/app/providers/StoreProvider';

export const getNewArticle = (state: StateSchema) => state.newArticle?.newArticle;
export const getNewArticleTitle = (state: StateSchema) => state.newArticle?.newArticle.title;
export const getNewArticleSubtitle = (state: StateSchema) => state.newArticle?.newArticle.subtitle;
export const getNewArticleType = (state: StateSchema) => state.newArticle?.newArticle.type;
export const getNewArticleImg = (state: StateSchema) => state.newArticle?.newArticle.img;
export const getNewArticleCreatedAt = (state: StateSchema) => state.newArticle?.newArticle.createdAt;
export const getNewArticleBlocks = (state: StateSchema) => state.newArticle?.newArticle.blocks;
