import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { ArticleProps, User } from "../../Types/type";
import { ProfilePopOver } from "../Profile/ProfilePopover";
import Icon from "./Icon";

export default function UserCard({
    userName,
    iconPath,
    authorId,
}: User & Pick<ArticleProps, "authorId">) {
    const [anchorElement, setAnchorElement] =
        useState<HTMLButtonElement | null>(null);
    return (
        <Box>
            <ProfilePopOver
                authorId={authorId}
                anchorElement={anchorElement}
                closePopOver={() => setAnchorElement(null)}
            ></ProfilePopOver>
            <Button
                sx={{ textTransform: "none" }}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    setAnchorElement(e.currentTarget)
                }
            >
                <Stack direction="row" spacing={1}>
                    <Icon iconPath={iconPath ?? ""} size="s" />
                    <Typography>{userName}</Typography>
                </Stack>
            </Button>
        </Box>
    );
}
