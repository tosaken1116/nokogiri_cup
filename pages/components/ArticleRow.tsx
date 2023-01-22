import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ArticleProps } from "../../Types/type";

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
                    src={process.env.NEXT_PUBLIC_FILE_URL + fileId}
                    alt=""
                ></Image>
                <Stack spacing={2}>
                    <Typography variant="h5">{title}</Typography>
                    <Stack direction="row">
                        <Stack>
                            <Stack direction="row">
                                <Image
                                    width={32}
                                    height={16}
                                    src=""
                                    alt=""
                                ></Image>
                                <Typography>{authorId}</Typography>
                            </Stack>
                            <Typography>
                                投稿日:{createdAt.split("T")[0]}
                            </Typography>
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
