import React, { useState } from 'react';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';
import { baseUrl } from '../../Constaints/baseUrl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { IconPicker } from 'react-fa-icon-picker'

function SocialMediaForm({ loadSocialMedia, setShowModel }) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState("");
 
  //Get all the Font Awesome icons
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(baseUrl + '/socialMedia', {icon,name,url});
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      loadSocialMedia();
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

export default SocialMediaForm;
