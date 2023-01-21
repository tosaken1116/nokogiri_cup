import { useUploadArticle } from "./hooks";
export default function AddArticle() {
    const { uploadArticle } = useUploadArticle();
    const handleUpload = () => {
        uploadArticle({
            variables: {
                title: "testtitle",
                caption: "testCaption",
                authorId: "2",
                createdAt: "2023/1/30",
            },
        });
    };
    return (
        <div>
            <button onClick={() => handleUpload()}>click!</button>
        </div>
    );
}
