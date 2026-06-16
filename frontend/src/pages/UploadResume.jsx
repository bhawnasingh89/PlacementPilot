// import { useState } from "react";
// import axios from "axios";

// function UploadResume() {
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState("");

//   const handleUpload = async () => {
//     if (!file) {
//       return setMessage("Please select a resume");
//     }

//     const formData = new FormData();
//     formData.append("resume", file);

//     try {
//       const token = localStorage.getItem("token");

//       const res = await axios.post(
//         "http://localhost:5000/api/resume/upload",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setMessage(res.data.message);
//     } catch (error) {
//       setMessage("Upload failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Resume</h2>

//       <input
//         type="file"
//         accept=".pdf"
//         onChange={(e) => setFile(e.target.files[0])}
//       />

//       <button onClick={handleUpload}>
//         Upload Resume
//       </button>

//       <p>{message}</p>
//     </div>
//   );
// }

// export default UploadResume;

import { useState } from "react";
import axios from "axios";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) {
      return setMessage("Please select a resume");
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(res.data.message);
    } catch (error) {
      setMessage("Upload failed");
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <h2 className="upload-title">Upload Resume</h2>

        <p className="upload-subtitle">
          Upload your latest PDF resume to begin your
          placement preparation journey.
        </p>

        <div className="upload-box">
          <input
            className="file-input"
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />

          {file && (
            <p className="file-name">
              {file.name}
            </p>
          )}
        </div>

        <button
          className="upload-btn"
          onClick={handleUpload}
        >
          Upload Resume
        </button>

        {message && (
          <p
            className={`message ${
              message.includes("failed") ||
              message.includes("select")
                ? "error"
                : "success"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default UploadResume;