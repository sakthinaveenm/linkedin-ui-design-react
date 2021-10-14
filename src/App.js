import "./App.css";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import CenterBar from "./components/CenterBar";
import { CCol, CRow } from "@coreui/react";
function App() {
  return (
    <>
      <Navbar />
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#f3f2ee",
        }}
      >
        <div className="container" style={{ paddingTop: "120px" }}>
          <CRow>
            <CCol style={{ position: "static" }}>
              <LeftBar />
            </CCol>
            <CCol style={{ marginLeft: "-120px", marginTop: "-10px" }}>
              <CenterBar />
            </CCol>
            <CCol>
              <RightBar />
            </CCol>
          </CRow>
        </div>
      </div>
    </>
  );
}

export default App;
