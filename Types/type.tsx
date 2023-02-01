export type NowPageProps = {
    nowPage: string;
    setNowPage: (nowPage: string) => void;
};

export type ProfilePopOverProps = {
    closePopOver: () => void;
    anchorElement: HTMLButtonElement | null;
};
export type ArticleProps = {
    title: string;
    caption: string;
    authorId: string;
    createdAt: string;
    githubUrl: string;
    fileId?: string;
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
