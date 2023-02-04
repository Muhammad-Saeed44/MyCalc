import React, { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import {
  BrowserRouter as Router,
  Route,
  Routes,
 
 
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [abcol, setAbcol] = useState({backgroundColor:'white', color:'black'});
  const [abcoll, setAbcoll] = useState({backgroundColor:'white', color:'black'});
  const [cmode, setCmode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
 // togglemod funtction
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setCmode("light");
      setAbcol({backgroundColor:'#1b1e21', color:'white'})
      setAbcoll({backgroundColor:'#36333a', color:'white'})
      document.body.style.backgroundColor = "#1b1e32";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setCmode("dark");
      setAbcol({backgroundColor:'white', color:'black'})
      document.body.style.backgroundColor = "white";
      setAbcoll({backgroundColor:'white', color:'black'})
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <Router>
      <Navbar
        title="MyCalc"
        aboutText="About Us"
        toggleMode={toggleMode}
        mode={mode}
        color={cmode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route  path="/" element={<Textform mode={mode} abcoll={abcoll} />}></Route>
          <Route  path="/about" element={<About  aboutTex="About Us!" mode={mode} abcol={abcol} abcoll={abcoll} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
