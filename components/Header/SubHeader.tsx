import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSearchParams } from "../../Hooks/hooks";
export default function SubHeader() {
    const router = useRouter();
    const [searchWord, setSearchWord] = useState("");
    const { setMediaFilterParams } = useSearchParams();
    const handleSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMediaFilterParams({ searchWord: e.target.value });
    };
    return (
        <Box>
            <Stack p={2}>
                <Box>
                    {router.pathname == "/Search" ? (
                        <Box>
                            <TextField
                                label="検索"
                                value={searchWord}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    setSearchWord(e.target.value);
                                    handleSearchWord(e);
                                }}
                            ></TextField>
                            <SearchIcon />
                        </Box>
                    ) : (
                        <></>
                    )}
                </Box>
                <Stack>
                    <Button></Button>
                </Stack>
            </Stack>
        </Box>
    );
}
