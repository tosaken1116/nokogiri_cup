export type NowPageProps = {
    nowPage: string;
    setNowPage: (nowPage: string) => void;
};

export type ProfilePopOverProps = {
    closePopOver: () => void;
    anchorElement: HTMLButtonElement | null;
};
