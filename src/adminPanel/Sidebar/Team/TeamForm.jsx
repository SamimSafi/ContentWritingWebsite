import React, { useState } from 'react';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';

function TeamForm({ loadTeam, setShowModel }) {
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [position, setPosition] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('image', file);
      formData.append('position', position);
      formData.append('description', description);

      const response = await axios.post('http://localhost:8081/team', formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      loadTeam();
      setLoading(false);
      setShowModel();
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }} className="flex items-center flex-col">
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Add Slider</h1>
      {loading === false ? (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="Name" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Name
            </label>
            <input
              type="text"
              id="title"
              name="name"
              value={name}
              onChange={handleNameChange}
              style={{
                border: '1px solid #D1D5DB',
                borderRadius: '0.25rem',
                padding: '0.5rem',
                width: '100%',
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="Position" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Position
            </label>
            <input
              type="text"
              id="title"
              name="position"
              value={position}
              onChange={handlePositionChange}
              style={{
                border: '1px solid #D1D5DB',
                borderRadius: '0.25rem',
                padding: '0.5rem',
                width: '100%',
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="Description" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Description
            </label>
            <input
              type="text"
              id="title"
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

export default TeamForm;
