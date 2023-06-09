import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../Constaints/baseUrl';
function SliderUpdate() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch the existing record data from the API
    axios
      .get(baseUrl + `/getSliderById/${id}`)
      .then((response) => {
        setTitle(response.data.title);

        axios
          .get(baseUrl + '/' + response.data.image, {
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
      formData.append('title', title);
      formData.append('image', file);
      console.log(id);
      const response = await axios.put(baseUrl + `/updateSlider/` + id, formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      navigate('/SliderList');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Update Slider</h1>
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

export default SliderUpdate;
