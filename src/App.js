import { useState } from "react";
import "./App.css";
import Form from "./screens/Form";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";

function App() {
  const title = useState('')
  return (
    <div className="App">
      <Navbar />
      <div className="continer">
        <div className="payment">
          <div className="title">Lorem Ipsum</div>
          <Form />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
