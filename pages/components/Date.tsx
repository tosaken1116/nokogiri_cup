import { Typography } from "@mui/material";
import { format, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { TimeProps } from "../../Types/type";
export const Date = ({ dateString }: TimeProps) => {
    const date = parseISO(dateString);
    return (
        <Typography variant="caption" sx={{ placeSelf: "center" }}>
            {format(utcToZonedTime(date, "Asia/Tokyo"), "yyyy/MM/dd HH:mm")}
        </Typography>
    );
};
