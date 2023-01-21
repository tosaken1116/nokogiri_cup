import styled from '@emotion/styled'
import { Avatar, Box, Button, Drawer, IconButton } from "@mui/material"

const users: string[] = [
    "U", "S", "E", "R"
];

type thisProps = {
    userDatas: {
        Name: string,
        Icon: string
    }[]
};


const UserAvatar = styled(Avatar)`
    width: 64px;
    height: 64px;
    cursor: pointer;
    margin: 6px;
`;
export const Sidebar = (props: thisProps)=>{
    return(
        <Box boxShadow={5} sx={{zIndex: 1300, minHeight: "100vh", width: "fit-content" ,border: "2", padding: "2px"}}>
            {props.userDatas.map((data)=><UserAvatar src={data.Icon} alt={data.Name} />)}
        </Box>
    )
}