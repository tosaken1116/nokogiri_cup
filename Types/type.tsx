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
