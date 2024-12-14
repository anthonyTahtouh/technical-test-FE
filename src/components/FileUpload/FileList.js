import React from "react";
import { useNavigate } from "react-router-dom";

const FileList = ({ files }) => {
  const navigate = useNavigate();
  if (!files.length) return <p>No files uploaded yet.</p>;

  return (
    <ul>
      {files.map((file) => {
        console.log("Returned file:", file);

        const goToViewPage = () => {
          navigate(`/view/${file._id}`);
        };

        return (
          <li key={file._id || file.filename}>
            <p>{file.name}</p>
            <p>Tags: {file.tags.join(", ")}</p>
            <p>Views: {file.views}</p>
            <button onClick={goToViewPage}>Go to View Page</button>
            <a
              href={file.sharedLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              View File
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default FileList;
