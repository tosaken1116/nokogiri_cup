import { Typography } from "@mui/material";
import { format, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { TimeProps } from "../../Types/type";
const Date = ({ dateString }: TimeProps) => {
    const date = parseISO(dateString);
    return (
        <Typography variant="caption" sx={{ placeSelf: "center" }}>
            {format(utcToZonedTime(date, "Asia/Tokyo"), "yyyy/MM/dd HH:mm")}
        </Typography>
    );
};
export default Date;
