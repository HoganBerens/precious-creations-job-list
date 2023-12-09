import "../stylesheets/AddStudent.css";
import { Link } from "react-router-dom";

const AddStudent = () => {
  const handleAddStudent = (event) => {
    event.preventDefault();
    let prevStudents = JSON.parse(localStorage.getItem("students")) || [];
    prevStudents.push({ name: event.target[0].value, gender: event.target[1].value, prevJobs: [], currentJob: {} });
    localStorage.setItem("students", JSON.stringify(prevStudents));
    event.target[0].value = "";
    event.target[1].value = "";
  };

  return (
    <div>
      <Link to={"/"}>Back To Dashboard</Link>
      <form onSubmit={handleAddStudent}>
        <input name="Name" placeholder="Name" />
        <input name="Gender" placeholder="Gender" />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
