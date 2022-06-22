import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="continer">
        <Form />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
