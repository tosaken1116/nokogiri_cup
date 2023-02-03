import { useQuery } from "@apollo/client";
import { GitHub } from "@mui/icons-material";
import { Box, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { getPortFolioByIdDoc } from "../../Hooks/hooks";

export default function Articles() {
    const { data } = useQuery(getPortFolioByIdDoc, {
        variables: { userId: "2" },
    });

    return (
        <Grid
            sx={{
                bgcolor: "lavender",
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                placeContent: "center",
            }}
        >
            {data?.article.map((article: any) => (
                <Box
                    key={article.articleId}
                    sx={{
                        m: 4,
                        boxShadow: 6,
                        bgcolor: "white",
                        display: "flex",
                        flexDirection: "column",
                        width: 300,
                        height: 400,
                    }}
                >
                    <CardContent
                        sx={{
                            m: 1,
                            display: "flex",
                            flexDirection: "column",
                            width: 300,
                            height: 200,
                            alignItems: "center",
                        }}
                    >
                        <Box sx={{ height: "200px" }}>
                            <Image
                                width={100}
                                height={60}
                                src={
                                    "https://hackznokogiritosaken1116.blob.core.windows.net/hackznokogiricontainer/cat.png"
                                }
                                alt={article.title}
                                className="rounded-md"
                            />
                        </Box>
                        <Box sx={{ color: "black" }}>
                            <Typography sx={{ m: 1, height: 80 }}>
                                {article.title}
                            </Typography>
                        </Box>
                        <Link href={article.githubUrl ?? ""}>
                            <GitHub />
                        </Link>
                    </CardContent>
                </Box>
            ))}
        </Grid>
    );
}
