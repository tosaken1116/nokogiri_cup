import { Box, Divider, List, ListItem, Stack, Typography } from "@mui/material";

//  NotificationRowProps.map((notion,index) => (
//   // eslint-disable-next-line react/jsx-key
//   <li>{notion}</li>
// ));
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
export type NotificationRowProps = {
    name: string;
    // icon:string
    noticeType: string;
};
export const Notification = () => {
    const notifications = [
        { name: "salto", noticeType: "like" },
        { name: "yamada", noticeType: "share" },
        { name: "suzuki", noticeType: "like" },
        { name: "salto", noticeType: "like" },
        { name: "yamada", noticeType: "share" },
        { name: "suzuki", noticeType: "like" },
        { name: "salto", noticeType: "like" },
        { name: "yamada", noticeType: "share" },
        { name: "suzuki", noticeType: "like" },
    ];
    return (
        <Box>
            <Box component="span" sx={{ bgcolor: "#EEEEEE" }}>
                <Typography
                    align="center"
                    variant="h5"
                    sx={{
                        color: "#333333",
                        bgcolor: "#EEEEEE",
                        textshadow: "1px 1px 3px",
                    }}
                >
                    Notice All
                </Typography>
            </Box>
            <List sx={{ overflow: "auto", maxHeight: "80vh" }}>
                {notifications.map(({ name, noticeType }, index) => (
                    <ListItem key={index}>
                        <NotificationRow name={name} noticeType={noticeType} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

const NotificationRow = ({ name, noticeType }: NotificationRowProps) => {
    return (
        <Box>
            <Stack direction="row">
                <Box sx={{ width: "64px", height: "64px" }}>
                    {noticeType == "like" ? (
                        <FavoriteIcon
                            fontSize="large"
                            sx={{ color: "#e0245e" }}
                        />
                    ) : noticeType == "share" ? (
                        <ShareIcon fontSize="large" sx={{ color: "#17bf63" }} />
                    ) : (
                        <></>
                    )}
                </Box>
                <Typography variant="h6">
                    {name}が
                    {noticeType == "like"
                        ? "いいね"
                        : noticeType == "share"
                        ? "シェア"
                        : ""}
                    しました
                </Typography>
            </Stack>
            <Divider />
        </Box>
    );
};
