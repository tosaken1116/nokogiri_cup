import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ArticleProps } from "../../Types/type";
import { Date } from "./Date";
import Icon from "./Icon";

export default function ArticleRow({
    createdAt,
    title,
    githubUrl,
    authorId,
    caption,
    fileId = "",
}: ArticleProps) {
    return (
        <Box>
            <Stack direction="row" p={2} spacing={3}>
                <Image
                    width={100}
                    height={60}
                    src={
                        "https://hackznokogiritosaken1116.blob.core.windows.net/hackznokogiricontainer/cat.png"
                    }
                    alt=""
                    className="rounded-md"
                ></Image>
                <Stack spacing={2}>
                    <Typography variant="h5">{title}</Typography>
                    <Stack direction="row">
                        <Stack>
                            <Stack direction="row">
                                <Icon
                                    iconPath="https://hackznokogiritosaken1116.blob.core.windows.net/hackznokogiricontainer/cat.png"
                                    size="medium"
                                />
                                <Typography sx={{ alignSelf: "center" }} px={1}>
                                    {authorId}
                                </Typography>
                            </Stack>
                            <Date dateString={createdAt}></Date>
                        </Stack>
                        <Link href={githubUrl ?? ""}>
                            <GitHubIcon />
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
            <Divider variant="fullWidth" />
        </Box>
    );
}
