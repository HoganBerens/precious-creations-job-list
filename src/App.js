import "../src/stylesheets/App.css";
import AddStudent from "./pages/AddStudent";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addStudent" element={<AddStudent />} />
      </Routes>
    </main>
  );
}

export default App;
