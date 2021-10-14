import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import { FcGallery, FcStart, FcCalendar } from "react-icons/fc";
import Posts from "./Posts";
import VideoPosts from "./VideoPosts";

export default function CenterBar() {
  return (
    <div style={{ float: "none", padding: "10px" }}>
      <CCard style={{ width: "38rem", borderRadius: "10px" }}>
        <CCardBody>
          <div style={{ display: "flex" }}>
            <div>
              <CCardImage
                style={{
                  borderRadius: "50%",
                  width: "55px",
                  height: "55px",
                  justifyContent: "center",
                  border: "3px solid #ffffff",
                }}
                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="  start a post"
                style={{
                  width: "28rem",
                  marginLeft: "10px",
                  padding: "10px",
                  borderRadius: "50px",
                  border: "0.1px solid #bbbbbb",
                }}
              />
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", padding: "10px" }}
            onClick={() => {
              alert("photo");
            }}
            className="buton"
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <FcGallery
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              />
              <div style={{ marginTop: "0px" }}>Photo</div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "45px",
              }}
              className="buton"
            >
              <FcStart
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              />
              <div style={{ marginTop: "0px" }}>Videos</div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "45px",
              }}
              className="buton"
            >
              <FcCalendar
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              />
              <div style={{ marginTop: "0px" }}>Event</div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "55px",
              }}
              className="buton"
            >
              <FcGallery
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              />
              <div style={{ marginTop: "0px" }}>Write Article</div>
            </div>
          </div>
        </CCardBody>
      </CCard>
      <Posts />
      <Posts />
      <Posts />
      <VideoPosts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
}
