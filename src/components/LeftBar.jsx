import React from "react";
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import { BsFillBookmarkFill } from "react-icons/bs";
import "./LeftBar.css";
export default function LeftBar() {
  return (
    <div style={{ float: "left" }}>
      <CCard style={{ width: "16rem", borderRadius: "10px" }}>
        <CCardImage
          orientation="top"
          src="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
          style={{
            height: "55px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        />
        <center>
          <CCardImage
            style={{
              borderRadius: "50%",
              width: "75px",
              height: "75px",
              justifyContent: "center",
              marginTop: "-45px",
              border: "3px solid #ffffff",
            }}
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          />
        </center>
        <CCardBody>
          <div style={{ marginBottom: "25px", marginTop: "10px" }}>
            <CCardTitle
              style={{
                textAlign: "center",
                fontSize: "16px",
                lineHeight: "10px",
              }}
            >
              Sakthi Naveen
            </CCardTitle>
            <CCardText style={{ textAlign: "center", fontSize: "12px" }}>
              React Developer
            </CCardText>
          </div>
          <hr
            style={{
              width: "16rem",
              marginLeft: "-17.0px",
              opacity: 0.5,
              color: "grey",
            }}
          />
          <CCardText>
            <div
              className="onhovclorbckchnge"
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "12px",
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  lineHeight: "2px",
                  fontSize: "12px",
                }}
              >
                <p style={{}}>Connections</p>
                <p
                  style={{
                    marginTop: "8px",
                    fontWeight: "bold",
                    width: "fit-content",
                  }}
                >
                  Grow your network
                </p>
              </div>
              <div
                style={{
                  marginLeft: "80px",
                  color: "#405980",
                  fontWeight: "bold",
                }}
              >
                <p>33</p>
              </div>
            </div>
          </CCardText>
          <CCardText>
            <div
              className="onhovclorbckchnge"
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "12px",
              }}
            >
              <div
                style={{
                  lineHeight: "2px",
                  fontSize: "12px",
                }}
              >
                <p
                  style={{
                    marginTop: "8px",
                    width: "fit-content",
                  }}
                >
                  Who Viewed your Profile
                </p>
              </div>
              <div
                style={{
                  marginLeft: "60px",
                  color: "#405980",
                  fontWeight: "bold",
                }}
              >
                <p>10</p>
              </div>
            </div>
          </CCardText>
          <hr
            style={{
              width: "16rem",
              marginLeft: "-17.0px",
              opacity: 0.5,
              color: "grey",
            }}
          />
          <CCardText>
            <div
              className="onhovclorbckchnge"
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "12px",
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  lineHeight: "2px",
                  fontSize: "12px",
                }}
              >
                <p style={{}}>Access exclusive tools & insights</p>
                <p
                  style={{
                    marginTop: "8px",
                    fontWeight: "bold",
                    width: "fit-content",
                  }}
                >
                  Try Premium for Free
                </p>
              </div>
            </div>
          </CCardText>
          <hr
            style={{
              width: "16rem",
              marginLeft: "-17.0px",
              opacity: 0.5,
              color: "grey",
            }}
          />
          <CCardText style={{ marginBottom: "-15px", paddingBottom: "-25px" }}>
            <p
              style={{
                marginTop: "8px",
                fontWeight: "bold",
                width: "fit-content",
                fontSize: "12px",
              }}
            >
              <BsFillBookmarkFill
                style={{
                  opacity: 0.5,
                  width: "15px",
                  height: "15px",
                  marginRight: "10px",
                }}
              />
              Try Premium for Free
            </p>
          </CCardText>
        </CCardBody>
      </CCard>
      <div style={{ marginTop: "10px" }}></div>
      <CCard style={{ width: "16rem" }}>
        <CCardBody>
          <CCardText style={{ marginBottom: "-15px", paddingBottom: "-25px" }}>
            <p
              style={{
                marginTop: "8px",
                fontWeight: "bold",
                width: "fit-content",
                fontSize: "12px",
                color: "#0d6efd",
                marginBottom: "10px",
              }}
            >
              Groups
            </p>
            <div
              className="onhovclorbckchnge"
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "12px",
              }}
            >
              <div
                style={{
                  lineHeight: "2px",
                  fontSize: "12px",
                }}
              >
                <p
                  style={{
                    marginTop: "8px",
                    width: "fit-content",
                    color: "#0d6efd",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Events
                </p>
              </div>
              <div
                style={{
                  marginLeft: "170px",
                  color: "#405980",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginTop: "-8px",
                }}
              >
                <p>+</p>
              </div>
            </div>
            <p
              style={{
                fontWeight: "bold",
                width: "fit-content",
                fontSize: "12px",
                color: "#0d6efd",
                marginTop: "-8px",
                marginBottom: "40px",
              }}
            >
              Followed Hashtags
            </p>
          </CCardText>

          <hr
            style={{
              width: "16rem",
              marginLeft: "-17.0px",
              opacity: 0.5,
              color: "grey",
            }}
          />
          <div className="onhovclorbckchnge">
            <CCardText
              style={{
                textAlign: "center",
                padding: "-5px",
                fontWeight: "bold",
                color: "#939393",
                backgroundColor: "#ffffff",
              }}
            >
              Discover more
            </CCardText>
          </div>
        </CCardBody>
      </CCard>
    </div>
  );
}
