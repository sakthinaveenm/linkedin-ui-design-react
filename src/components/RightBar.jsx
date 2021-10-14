import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import { BsFillInfoSquareFill } from "react-icons/bs";
import DummyNews from "./DummyNews";
import "./RightBar.css";
import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineArrowRight,
} from "react-icons/ai";
import OlDummy from "./OlDummy";
export default function RightBar() {
  const [display, setDisplay] = useState(false);
  return (
    <div style={{}}>
      <CCard
        style={{ width: "24rem", marginLeft: "-10px", borderRadius: "10px" }}
      >
        <CCardBody>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <CCardTitle style={{ fontSize: "16px" }}>
                Linkedin News
              </CCardTitle>
            </div>
            <div
              style={{
                marginLeft: "14rem",
                marginBottom: "10px",
                marginTop: "-5px",
              }}
            >
              <BsFillInfoSquareFill />
            </div>
          </div>
          <CCardText>
            <DummyNews />
            <DummyNews />
            <DummyNews />
            <DummyNews />
            {display ? (
              <div>
                <DummyNews />
                <DummyNews />
                <DummyNews />
                <DummyNews />
              </div>
            ) : null}
            <button
              onClick={() => {
                setDisplay(!display);
              }}
              className="showml"
              Style={{
                width: "40px",
                backgroundColor: "#ffffff",
                color: "#6e6e6e",
                border: "none",
              }}
            >
              {display ? "Show Less" : "ShowMore"}
              {display ? (
                <AiOutlineUp style={{ marginLeft: "5px" }} />
              ) : (
                <AiOutlineDown style={{ marginLeft: "5px" }} />
              )}
            </button>
          </CCardText>
        </CCardBody>
      </CCard>
      <CCard
        style={{
          width: "24rem",
          marginLeft: "-10px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <CCardBody>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <CCardTitle style={{ fontSize: "16px" }}>
                Today Top Courses
              </CCardTitle>
            </div>
            <div
              style={{
                marginLeft: "12rem",
                marginBottom: "10px",
                marginTop: "-5px",
              }}
            >
              <BsFillInfoSquareFill />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <OlDummy />
            </div>
            <div>
              <button className="showml">
                Show more on Linkedin Learning <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </CCardBody>
      </CCard>
      {/* about Accessibility HelpCenter */}
    </div>
  );
}
