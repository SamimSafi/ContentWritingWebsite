import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../Constaints/baseUrl';
import { IconPicker } from 'react-fa-icon-picker';
function SocialMediaUpdate() {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState("");
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };
  
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch the existing record data from the API
    axios
      .get(baseUrl + `/getsocialMediaById/${id}`)
      .then((response) => {
        setName(response.data.name);
        setIcon(response.data.icon);
        setUrl(response.data.url);

      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.put(baseUrl + `/updateSocialMedia/` + id, {name,icon,url});
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      navigate('/SocialMediaList');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Update Social Icon</h1>
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
            <label htmlFor="URL" style={{ display: 'block', marginBottom: '0.5rem' }}>
              URL
            </label>
            <input
              type="text"
              id="title"
              name="url"
              value={url}
              onChange={handleUrlChange}
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
              Icon
            </label>
            <input
              type="text"
              id="title"
              name="icon"
              value={icon}
              style={{
                border: '1px solid #D1D5DB',
                borderRadius: '0.25rem',
                padding: '0.5rem',
                width: '100%',
              }}
            />
            <IconPicker value={icon} onChange={(v) => setIcon(v)} />
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

export default SocialMediaUpdate;
