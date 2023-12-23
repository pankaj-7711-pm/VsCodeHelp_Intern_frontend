import React from "react";
import Layout from "../Component/Layout";
import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import AddHomeIcon from "@mui/icons-material/AddHome";
import Calendar from "../Component/Calander";

const Homepage = () => {
  return (
    <Layout title={"Manik Dalvi"}>
      <div className="home-main-div container-fluid">
        <div className="aa">
          <div className="home-sub-div">
            <div className="doc-detail-div">
              <div className="doc-img-div">
                <Avatar
                  alt="Remy Sharp"
                  src="/docimg.webp"
                  sx={{ width: 76, height: 76 }}
                />
              </div>
              <div>
                <div>Dr. Manik Dalvi</div>
                <div>Obstetrics & Gynecology</div>
                <div>
                  <button
                    style={{
                      borderRadius: "4px",
                      padding: "2px 10px 2px 10px",
                      backgroundColor: "white",
                      border: "1px solid blue",
                      color: "blue",
                    }}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="appointment">
              <div>
                <div>Book Appointment</div>
                <div>Select Your Consultation Type</div>
                <div>Fees approx ₹ 500</div>
                <div>(pay at clinic)</div>
              </div>
              <div
                className="bb"
                style={{
                  width: "35%",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <NavLink className={"nav-main"} to={"/"}>
                  <AddHomeIcon className="audio" />
                  <span
                    className="a"
                    style={{
                      textAlign: "center",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    In-Clinic
                  </span>
                </NavLink>
                <NavLink className={"nav-main"} to={"/audio"}>
                  <CallIcon className="audio" />
                  <span
                    className="a"
                    style={{
                      textAlign: "center",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    Audio
                  </span>
                </NavLink>
                <NavLink className={"nav-main"} to={"video"}>
                  <VideocamIcon className="audio" />
                  <span
                    className="a"
                    style={{
                      textAlign: "center",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    Video
                  </span>
                </NavLink>
              </div>
            </div>
            <div className="clinic-main">
              <h5>Clinic NAME</h5>
            </div>
            <div className="check">
              <input type="radio" />
              <span>
                Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Opp.
                Bopal Nagar, Maharashtra, 421302
              </span>
            </div>
            <div className="cal">
              <Calendar />
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
