import { User } from '@/entities/User';
import { ArticleBlockType, ArticleType } from '../consts/articleConst';

export interface ArticleBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleTextBlock extends ArticleBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface ArticleImageBlock extends ArticleBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock;

export interface Article {
    id: string;
    title: string;
    user: User;
    subtitle: string;
    img: string;
    views: number;
    userId: string;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
