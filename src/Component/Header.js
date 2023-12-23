import React from 'react'
import Avatar from "@mui/material/Avatar";
import { deepOrange} from "@mui/material/colors";

const Header = () => {
  return (
    <>
      <div className="main-div-header container-fluid">
        <div className="child-div-header">
          <Avatar sx={{ bgcolor: deepOrange[400], width: 46, height: 46 }}>
            MD
          </Avatar>
          <div className="child-sub-div my-2 me-3">Help ?</div>
        </div>
      </div>
    </>
  );
}

export default Header
