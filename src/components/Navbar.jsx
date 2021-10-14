import React from "react";
import { CAvatar, CNavbar } from "@coreui/react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { AiFillHome } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import jobIcon from "../assets/icons/jobs.png";
import { BsChatDotsFill, BsFillBellFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import "./Navbar.css";

export default function Navbar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  return (
    <div
      className="container-fluid fixed-top"
      style={{ borderBottom: "2px solid #f3f2f0", backgroundColor: "#ffffff" }}
    >
      <div
        className="container"
        style={{
          height: "52px",
          display: "flex",
          marginTop: "10px",
          marginRight: "40px",
        }}
      >
        {/* <div style={{ width: "1128px", alignItems: "center" }}> */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
          style={{
            width: "34px",
            height: "34px",
          }}
        />
        <Search
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#eef3f7",
            paddingRight: "40px",
            height: "38px",
            marginLeft: "10px",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <div
          style={{
            height: "52px",
            width: "fit-content",
            marginLeft: "340px",
          }}
          className="menuFull"
        >
          <center>
            <AiFillHome
              style={{ width: "22px", height: "19px", marginLeft: "2px" }}
            />
          </center>
          <center>
            <p className="menufont">Home</p>
          </center>
        </div>

        <div
          style={{
            height: "52px",
            width: "30px",
            marginLeft: "35px",
          }}
          className="menuFull"
        >
          <center>
            <MdPeopleAlt
              style={{ width: "22px", height: "19px", marginLeft: "6px" }}
            />
          </center>
          <center>
            <p className="menufont">People</p>
          </center>
        </div>

        <div
          style={{
            height: "52px",
            width: "30px",
            marginLeft: "35px",
          }}
          className="menuFull"
        >
          <center>
            <img
              src={jobIcon}
              alt=""
              width="22px"
              height="19px"
              style={{ marginLeft: "3px" }}
            />
          </center>
          <center>
            <p className="menufont">Jobs</p>
          </center>
        </div>
        <div
          style={{
            height: "52px",
            width: "fit-content",
            marginLeft: "15px",
          }}
          className="menuFull"
        >
          <center>
            <BsChatDotsFill
              style={{ width: "20px", height: "19px", marginLeft: "5px" }}
            />
          </center>
          <center>
            <p className="menufont">Messaging</p>
          </center>
        </div>

        <div
          style={{
            height: "52px",
            width: "fit-content",
            marginLeft: "18px",
          }}
          className="menuFull"
        >
          <center>
            <BsFillBellFill
              style={{ width: "20px", height: "19px", marginLeft: "3px" }}
            />
          </center>
          <center>
            <p className="menufont">Notifications</p>
          </center>
        </div>

        <div
          style={{
            height: "52px",
            width: "fit-content",
            marginLeft: "18px",
            borderBottom: "none",
          }}
          className="menuFull"
        >
          <center>
            <CAvatar
              src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
              style={{ width: "20px", height: "19px", marginLeft: "-5px" }}
            />
          </center>
          <center>
            <p className="menufont">
              Me <IoMdArrowDropdown />
            </p>
          </center>
        </div>
        <div class="vl"></div>
        <div
          style={{
            height: "52px",
            width: "fit-content",
            marginLeft: "18px",
            borderBottom: "none",
          }}
          className="menuFull"
        >
          <center>
            <CgMenuGridR
              style={{ width: "20px", height: "19px", marginLeft: "-15px" }}
            />
          </center>
          <center>
            <p className="menufont">
              Work <IoMdArrowDropdown />
            </p>
          </center>
        </div>
        {/* </div> */}
        <div
          style={{
            height: "52px",
            width: "fit-content",
            marginLeft: "18px",
            borderBottom: "none",
            color: "#C89D7C",
            lineHeight: "2px",
            marginTop: "15px",
          }}
          className="menuFull menufont"
        >
          <center>
            <p style={{ color: "#C89D7C" }}>Try Premium for</p>
          </center>
          <center>
            <p> Free</p>
          </center>
        </div>
      </div>
    </div>
  );
}
