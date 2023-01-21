import { Avatar, Box, Button, Divider, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material"
import { useState } from "react"

type UserData = {
	name: string,
	icon: string
}
type ThisProps = {
	userData: UserData,
	Articles: {
		title: string,
		image: string,
		at: string,
		by: UserData
		urls: string[]
	}[]
}

export const Homepage = (props: ThisProps)=>{
	const sortTypes :string[] = [
		"新着順", "古い順"
	]
	const [sortType, setSortType] = useState(sortTypes[0]);
	const HandleChangeSort = (event: SelectChangeEvent) =>{
		setSortType(event.target.value);
		switch(sortType) {
			case "新着順":
				props.Articles.sort((a,b)=>a.at < b.at ? -1: 1)
				break;
			case "古い順":
				props.Articles.sort((a,b)=>a.at < b.at ? 1: -1)
				break;
		}
	}
    return(
      <Stack>
        <Stack direction="row" justifyContent="space-between" sx={{backgroundColor: "#ddd", padding: "6px"}}>
          <Stack alignItems="center" spacing="6px" direction="row">
          	<Box fontSize="16px">{props.userData.name}さんのポートフォリオ</Box>
            <Avatar src={props.userData.icon} alt={props.userData.name}/>
          </Stack>
					<FormControl variant="standard" sx={{m:1, minWidth: 120, backgroundColor: "white"}}>
						<InputLabel id="slectSortTypeLabel">Sort</InputLabel>
						<Select
							labelId="selectSortTypeLabel"
							id="selectSortType"
							value={sortType}
							onChange={HandleChangeSort}
							label="Age"
						>
							{sortTypes.map((st)=>{
								if(st !== sortType) return<MenuItem value={st}>{st}</MenuItem>
							})}
						</Select>
					</FormControl>
        </Stack>
				<Stack width="fit-content" sx={{borderRight: 2,borderColor: "#ddd" , width: "fit-content", height: "100vh"}}>
					{props.Articles.map((data)=>(
						<Stack justifyContent="flex-start" direction="row" alignItems="center" sx={{width: "679px", height: "177px", borderBottom: 2, borderColor: "#ddd"}}>
							<img src={data.image} alt="image" style={{width: "160px", height: "120px", borderRadius: "8px", margin: 0, paddingLeft: "15px", paddingRight: "30px"}}/>
							<Stack>
								<p style={{fontSize: "32px"}}>{data.title}</p>
								<Stack direction="row">
									<div style={{paddingRight: "20px"}}>
										<Stack direction="row" alignItems="center" spacing={10}>
											<Avatar src={data.by.icon} alt={data.by.name} sx={{width: "30px", height: "30px", marginRight: "10px"}}/>
											<p style={{fontSize: "16px", padding: 0, margin: 0}}>{data.by.name}</p>
										</Stack>
										<p style={{fontSize: "16px", padding: 0, margin: 0}}>createdat:{data.at}</p>
									</div>
									<Stack direction="row" spacing={3}>
									{data.urls.map((url)=>
										<Button variant="contained" href={url} sx={{borderRadius: "50%", background: "#ddd", ":hover":{background: "#ccc"}}}/>)}
									</Stack>
								</Stack>
							</Stack>
							
						</Stack>
					))}
				</Stack>
      </Stack>
    )
}