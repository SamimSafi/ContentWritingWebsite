import React, { useState } from 'react';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';
import { baseUrl } from '../../Constaints/baseUrl';

function AdminServices({ loadServices, setShowModel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('image', file);

      const response = await axios.post(baseUrl + '/Services', formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      loadServices();
      setLoading(false);
      setShowModel();
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }} className="flex items-center flex-col">
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Add a New Item</h1>
      {loading === false ? (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
              style={{
                border: '1px solid #D1D5DB',
                borderRadius: '0.25rem',
                padding: '0.5rem',
                width: '100%',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="description" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
              style={{
                border: '1px solid #D1D5DB',
                borderRadius: '0.25rem',
                padding: '0.5rem',
                width: '100%',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="file" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Image
            </label>
            <input
              type="file"
              id="file"
              name="image"
              onChange={handleFileChange}
              style={{ border: '1px solid #D1D5DB', borderRadius: '0.25rem', padding: '0.5rem' }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#10B981',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      ) : (
        <Bars
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}
    </div>
  );
}

export default AdminServices;
