import React from "react";
import { FcGallery, FcStart, FcCalendar, FcLike } from "react-icons/fc";
import { BiLike } from "react-icons/bi";
import {
  FaRegHandPeace,
  FaRegCommentDots,
  FaRegThumbsUp,
} from "react-icons/fa";
import { CgMailForward } from "react-icons/cg";
import { BsEmojiSmile } from "react-icons/bs";
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import { FaGlobeAsia } from "react-icons/fa";
import { IoIosSend, IoMdPhotos } from "react-icons/io";
export default function Posts() {
  return (
    <div style={{ marginTop: "10px" }}>
      <CCard style={{ width: "38rem", borderRadius: "10px" }}>
        <CCardBody>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
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
                <div style={{ marginLeft: "8px" }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      lineHeight: "5px",
                      marginTop: "8px",
                      fontSize: "14px",
                      fontFamily:
                        '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                    }}
                  >
                    Geogeria
                  </p>
                  <p
                    style={{
                      lineHeight: "1px",
                      fontSize: "12px",
                      color: "rgba(0, 0, 0, 0.6)",
                      fontFamily:
                        '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                    }}
                  >
                    IBM Analst
                  </p>
                  <p
                    style={{
                      lineHeight: "3px",
                      fontSize: "12px",
                      color: "rgba(0, 0, 0, 0.6)",
                      fontFamily:
                        '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                    }}
                  >
                    21h.Edited{" "}
                    <FaGlobeAsia
                      style={{
                        width: "12px",
                        height: "12px",
                        marginTop: "-2px",
                      }}
                    />
                  </p>
                </div>
                <div
                  style={{
                    alignItems: "flex-end",
                    marginLeft: "22rem",
                    marginTop: "20px",
                    color: "#0d6efd",
                  }}
                >
                  <p>+ Follow</p>
                </div>
              </div>
              <div style={{ padding: "10px" }}>
                <CCardText>
                  Iam IronMan{" "}
                  <a href="#" style={{ textDecoration: "none" }}>
                    #ironman
                  </a>
                </CCardText>
              </div>
              <div style={{ margin: 0, padding: 0, width: "100%" }}>
                <CCardImage
                  alt=""
                  src="https://wallpaperaccess.com/full/1369012.jpg"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div>
                <hr
                  style={{
                    width: "38rem",
                    marginLeft: "-17.0px",
                    opacity: 0.5,
                    color: "grey",
                  }}
                />
              </div>
              <div>
                {/* like */}
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ width: "40px" }}>
                    <FaRegThumbsUp
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </div>
                  <div style={{ marginTop: "0px", marginRight: "5px" }}>
                    Like
                  </div>
                  <div style={{ marginLeft: "60px" }}>
                    <FaRegCommentDots
                      style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "10px",
                      }}
                    />
                  </div>
                  <div style={{ marginTop: "0px" }}>Comments</div>
                  <div style={{ marginLeft: "60px" }}>
                    <CgMailForward
                      style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "10px",
                      }}
                    />
                  </div>
                  <div style={{ marginTop: "0px" }}>Share</div>
                  <div style={{ marginLeft: "60px" }}>
                    <IoIosSend
                      style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "10px",
                      }}
                    />
                  </div>
                  <div style={{ marginTop: "0px" }}>Share</div>
                </div>
                {/* end */}
                <div style={{ marginTop: "30px" }}>
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
                        placeholder=" Add an Comment ..."
                        style={{
                          width: "28rem",
                          marginLeft: "10px",
                          padding: "10px",
                          borderRadius: "50px",
                          border: "0.1px solid #bbbbbb",
                        }}
                      />
                      <BsEmojiSmile
                        style={{
                          width: "20px",
                          height: "20px",
                          marginLeft: "-80px",
                        }}
                      />
                      <IoMdPhotos
                        style={{
                          width: "20px",
                          height: "20px",
                          marginLeft: "12px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </div>
  );
}
