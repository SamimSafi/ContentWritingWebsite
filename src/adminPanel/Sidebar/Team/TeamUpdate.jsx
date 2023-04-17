import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../Constaints/baseUrl';
function TeamUpdate() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the existing record data from the API
    axios
      .get(baseUrl + `/getTeamId/${id}`)
      .then((response) => {
        setName(response.data.name);
        setPosition(response.data.position);
        setDescription(response.data.description);

        axios
          .get(baseUrl + response.data.image, {
            responseType: 'blob',
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          })
          .then((response) => {
            const reader = new FileReader();
            reader.readAsDataURL(response.data);
            reader.onload = () => {
              setFile(reader.result);
              console.log(reader.result);
            };
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('position', position);
      formData.append('description', description);
      formData.append('image', file);
      const response = await axios.put(baseUrl + `/updateTeam/` + id, formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      navigate('/TeamList');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Update Slider</h1>
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
    </div>
  );
}

export default TeamUpdate;
