import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
    const [uploaded, setUploaded] = useState(false);

useEffect(() => {
  const fetchStatus = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/resume/status",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUploaded(res.data.uploaded);
    } catch (error) {
      console.log(error);
    }
  };

  fetchStatus();
}, []);
  return (
    <div className="dashboard">
      <h1>Welcome to PlacementPilot</h1>

      <div className="dashboard-card">
        <h3>Resume Status</h3>
        <p>No Resume Uploaded</p>

        <Link to="/upload-resume">
          <button>Upload Resume</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;