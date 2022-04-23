import { Outlet } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <div className="main-div">
      <h1 className="title">Secure URL</h1>
      <Outlet />
    </div>
  );
}