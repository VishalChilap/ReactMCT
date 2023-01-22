import "../index.css";
import { useContext } from "react";
import Context from "./Context";
export default function Navbar({ changeMode }) {
  const mode = useContext(Context);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{
          color: mode ? "white" : "black",
          backgroundColor: mode ? "black" : "whitesmoke",
        }}
      >
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">TextUtils</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  Home
                </span>
              </li>
            </ul>
          </div>
          <div className="left">
            <button
              className="changeMode"
              onClick={changeMode}
              style={{
                backgroundColor: mode ? "white" : "black",
                color: mode ? "black" : "white"
              }}
            >
              {mode ? "Light" : "Dark"}
            </button>
            <label className="form-check-label" for="flexSwitchCheckChecked">
              Enable {mode ? "LightMode" : "DarkMode"}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
