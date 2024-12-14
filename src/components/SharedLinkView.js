import React, { useEffect, useState } from 'react';
import { viewFile } from '../services/api';
import { useParams } from 'react-router-dom';

const SharedLinkView = () => {
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await viewFile(id);
        console.log('Fetched file:', response);
        
        const blob = new Blob([response.data]);
        const url = URL.createObjectURL(blob);
        setFile(url);

        const contentType = response.headers['content-type'];
        setFileType(contentType);
      } catch (error) {
        console.error('Error fetching file:', error);
      }
    };
    fetchData();
  }, [id]);

  if (!file) return <p>Loading...</p>;

  const isImage = fileType.startsWith('image/');

  return (
    <div>
      {isImage ? (
        <img src={file} alt="Shared File" style={{ maxWidth: '100%' }} />
      ) : (
        <video controls src={file} style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
};

export default SharedLinkView;
