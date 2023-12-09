import "../stylesheets/Dashboard.css";
import { Link } from "react-router-dom";
import { jobs } from "../utils/jobs";

const Dashboard = () => {
  const handleAssignJobs = () => {};

  return (
    <div>
      <div>Dashboard</div>
      <Link to={"/addStudent"}>Add Student</Link>
      <button onClick={handleAssignJobs}>Assign Jobs</button>
      {}
    </div>
  );
};

export default Dashboard;
