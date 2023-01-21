import React from "react";
import {useState} from "react";

export const useProfilePopOver =
(
  event: React.MouseEvent<HTMLButtonElement>
) => {
  const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(
    null
  ); 
    setAnchorElement(event.currentTarget);
  };