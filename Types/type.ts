export type ProfilePopOverProps = {
    closePopOver: () => void;
    anchorElement: HTMLButtonElement | null;
};
export type ArticleProps = {
    title: string;
    articleId: string;
    caption: string;
    authorId?: string;
    createdAt: string;
    githubUrl: string;
    fileId?: string;
    user?: User;
};
export type User = {
    userName?: string;
    iconPath?: string;
};
export type SearchWordProps = {
    searchWord: string;
};

export type PortfolioSegmentProps = Pick<
    ArticleProps,
    "title" | "githubUrl" | "fileId" | "createdAt"
> & { articleId: string };
export type DebounceExecuteProps = {
    keyword: string;
    timeOutMillSec: number;
};
export type TimeProps = {
    dateString: string;
};
export type UserProfile = {
    id: string;
    userName?: string;
    age?: string;
    developmentAge?: string;
    selfIntroduction?: string;
    job?: string;
    language?: string;
};
export type PortfolioArticlesCardProps = Pick<
    ArticleProps,
    "articleId" | "title" | "createdAt" | "githubUrl" | "fileId"
>;
export type MarkdownModalProps = {
    modalOpen: boolean;
    closeArticle: () => void;
    loading: boolean;
    article: ArticleProps;
};
export type UseUserStatusProps = {
    userId: string;
    loginRequired: boolean;
};
