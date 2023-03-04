import { Paper, Popover, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ProfilePopOverProps } from "../../Types/type";
import Icon from "../common/Icon";

export default function ProfilePopOver({
    anchorElement,
    closePopOver,
}: ProfilePopOverProps) {
    const userData = {
        userName: "testuser",
        icon: "https://hackznokogiritosaken1116.blob.core.windows.net/hackznokogiricontainer/cat.png",
        lebel: "https://hackznokogiritosaken1116.blob.core.windows.net/hackznokogiricontainer/cat.png",

        language: "Piet",
        career: "10",
        occupation: "student",
    };
    return (
        <Popover
            open={Boolean(anchorElement)}
            onClose={closePopOver}
            anchorEl={anchorElement}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
        >
            <Link href="./Login">
                <Paper sx={{ width: "240px", height: "140px" }}>
                    <Stack direction="row" p={2} spacing={2}>
                        <Stack spacing={1}>
                            <Icon iconPath={userData.icon} size="medium" />
                            <Image
                                width={20}
                                height={20}
                                src={userData.lebel}
                                alt=""
                                className="rounded-full"
                            ></Image>
                        </Stack>
                        <Stack spacing={1}>
                            <Typography variant="h6">
                                {userData.userName}
                            </Typography>
                            <Stack spacing={0.5} pl={0.5}>
                                <Typography variant="caption">
                                    使用言語:{userData.language}
                                </Typography>
                                <Typography variant="caption">
                                    開発歴:{userData.career}
                                </Typography>
                                <Typography variant="caption">
                                    職業:{userData.occupation}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Paper>
            </Link>
        </Popover>
    );
}
