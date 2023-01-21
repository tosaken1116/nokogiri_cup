import styled from '@emotion/styled'
import { Button, Stack } from "@mui/material"

const IconBtn = styled(Button)`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin: 6px;
    background: #ddd;
    :hover{
        background: #ccc;
    }
`;
export const Sidebar = ()=>{
    return(
        <Stack boxShadow={5} sx={{ zIndex: 1300, minHeight: "100vh", width: "fit-content" ,border: "2", padding: "2px"}}>
            <IconBtn variant='contained'/>
            <IconBtn variant='contained'/>
            <IconBtn variant='contained'/>
            <IconBtn variant='contained'/>
            <IconBtn variant='contained'/>
        </Stack>
    )
}