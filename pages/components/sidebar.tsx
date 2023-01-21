import styled from '@emotion/styled'
import { Button, IconButton, Paper, Stack } from "@mui/material"

const SideIconButton = styled(IconButton)`
    width: 64px;
    height: 64px;
    margin: 6px;
    background: #ddd;
`;
export const Sidebar = ()=>{
    return(
        <Paper>
        <Stack alignItems="center" spacing={1.5} boxShadow={5} sx={{ zIndex: 1300, minHeight: "100vh", width: "fit-content" ,border: "2", padding: "2px"}}>
            <SideIconButton/>
            <SideIconButton/>
            <SideIconButton/>
            <SideIconButton/>
            <SideIconButton/>
        </Stack>
        </Paper>
    )
}