import logo from "/logo.png";
import "./App.css";
import Clock from "./Clock";

function App() {
  return (
    <>
      <h1>World Clock</h1>
      <div className="card">
        <Clock timeZone="Asia/Singapore" />
        <Clock timeZone="Europe/London" />
        <Clock timeZone="Asia/Tokyo" />
      </div>
    </>
  );
}

export default App;
