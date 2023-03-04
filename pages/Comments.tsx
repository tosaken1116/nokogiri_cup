import { Box, Divider, List, ListItem, Stack, Typography } from "@mui/material";
import Icon from "../components/common/Icon";
type CommentRowProps = {
    iconPath: string;
    comment: string;
    createdAt: string;
    userName: string;
};
export default function Comments() {
    const demodata = [
        {
            iconPath:
                "https://hackznokogiritosaken1116.blob.core.windows.net/hackznokogiricontainer/cat.png",
            userName: "user1",
            comment: "testcomment",
            createdAt: "2023-02-03 12:34:56",
        },
        {
            iconPath:
                "https://hackznokogiritosaken1116.blob.core.windows.net/hackznokogiricontainer/cat.png",
            userName: "user1",
            comment: "testcomment",
            createdAt: "2023-02-03 12:34:56",
        },
        {
            iconPath:
                "https://hackznokogiritosaken1116.blob.core.windows.net/hackznokogiricontainer/cat.png",
            userName: "user1",
            comment: "testcomment",
            createdAt: "2023-02-03 12:34:56",
        },
        {
            iconPath:
                "https://hackznokogiritosaken1116.blob.core.windows.net/hackznokogiricontainer/cat.png",
            userName: "user1",
            comment: "testcomment",
            createdAt: "2023-02-03 12:34:56",
        },
        {
            iconPath:
                "https://hackznokogiritosaken1116.blob.core.windows.net/hackznokogiricontainer/cat.png",
            userName: "user1",
            comment: "testcomment",
            createdAt: "2023-02-03 12:34:56",
        },
        {
            iconPath:
                "https://hackznokogiritosaken1116.blob.core.windows.net/hackznokogiricontainer/cat.png",
            userName: "user1",
            comment: "testcomment",
            createdAt: "2023-02-03 12:34:56",
        },
        {
            iconPath:
                "https://hackznokogiritosaken1116.blob.core.windows.net/hackznokogiricontainer/cat.png",
            userName: "user1",
            comment: "testcomment",
            createdAt: "2023-02-03 12:34:56",
        },
        {
            iconPath:
                "https://hackznokogiritosaken1116.blob.core.windows.net/hackznokogiricontainer/cat.png",
            userName: "user1",
            comment: "testcomment",
            createdAt: "2023-02-03 12:34:56",
        },
    ];
    return (
        <Box sx={{ width: "100%" }}>
            <List sx={{ overflow: "auto", maxHeight: "80vh" }}>
                {demodata.map((comment, index) => (
                    <ListItem key={index}>
                        <CommentRow {...comment}></CommentRow>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
const CommentRow = ({
    iconPath,
    comment,
    createdAt,
    userName,
}: CommentRowProps) => {
    return (
        <Box sx={{ width: "100%" }}>
            <Stack direction="row" p={2}>
                <Box sx={{ alignSelf: "center" }}>
                    <Icon
                        iconPath={
                            "https://hackznokogiritosaken1116.blob.core.windows.net/hackznokogiricontainer/cat.png"
                        }
                        size="l"
                    />
                </Box>
                <Stack ml={2}>
                    <Typography>{userName}</Typography>
                    <Typography>{comment}</Typography>
                    <Typography variant="caption">{createdAt}</Typography>
                </Stack>
            </Stack>
            <Divider></Divider>
        </Box>
    );
};
