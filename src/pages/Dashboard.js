import React, { useEffect, useState } from 'react';
import { fetchFiles } from '../services/api';
import FileUploader from '../components/FileUpload/FileUploader';
import FileList from '../components/FileUpload/FileList';

const Dashboard = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchFiles();
        setFiles(data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <FileUploader />
      <FileList files={files} />
    </div>
  );
};

export default Dashboard;
