import React, { useState } from 'react';
import { uploadFile } from '../../services/api';

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState('');

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('tags', tags);

    try {
      await uploadFile(formData);
      alert('File uploaded successfully');
    } catch (error) {
      alert('Error uploading file');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*,video/*" onChange={handleFileChange} required />
      <input
        type="text"
        placeholder="Enter tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUploader;
