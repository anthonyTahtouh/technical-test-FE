import React, { useEffect, useState } from 'react';
import { viewFile } from '../../services/api';
import { useParams } from 'react-router-dom';

const FileDetails = () => {
  const { id } = useParams();
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await viewFile(id);
        setFile(data);
      } catch (error) {
        console.error('Error fetching file:', error);
      }
    };
    fetchData();
  }, [id]);

  if (!file) return <p>Loading...</p>;

  return (
    <div>
      <h1>{file.name}</h1>
      <p>Tags: {file.tags.join(', ')}</p>
      <p>Views: {file.views}</p>
      <a href={file.sharedLink} target="_blank" rel="noopener noreferrer">
        View File
      </a>
    </div>
  );
};

export default FileDetails;
