// NAVBAR
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import "./Navbar.scss";

function Navbar() {
  return (
    <div class="navbar">
      {/* LEFT SIDE OF NAVBAR */}
      <div className="left">
        {/* LOGO */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>

        {/* LEFT ICONS */}
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />

        {/* SEARCH INPUT */}
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {/* RIGHT SIDE OF NAVBAR */}
      <div className="right">
        {/* RIGHT ICONS */}
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />

        {/* USER AVATAR */}
        <div className="user">
          <img
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
