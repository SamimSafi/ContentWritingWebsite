import React, { useState } from 'react';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';
import { baseUrl } from '../../Constaints/baseUrl';

function FooterForm({ loadFooter, setShowModel }) {
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(baseUrl + '/footer', {
        company,
        address,
        email,
        phone,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      loadFooter();
      setLoading(false);
      setShowModel();
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }} className="flex items-center flex-col">
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Add Slider</h1>
      {loading === false ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="Company" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Company
            </label>
            <input
              type="text"
              id="title"
              name="company"
              value={company}
              onChange={handleCompanyChange}
              style={{
                border: '1px solid #D1D5DB',
                borderRadius: '0.25rem',
                padding: '0.5rem',
                width: '100%',
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="Address" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Address
            </label>
            <input
              type="text"
              id="title"
              name="address"
              value={address}
              onChange={handleAddressChange}
              style={{
                border: '1px solid #D1D5DB',
                borderRadius: '0.25rem',
                padding: '0.5rem',
                width: '100%',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="Email" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Email
            </label>
            <input
              type="text"
              id="title"
              name="email"
              value={email}
              onChange={handleEmailChange}
              style={{
                border: '1px solid #D1D5DB',
                borderRadius: '0.25rem',
                padding: '0.5rem',
                width: '100%',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="Phone" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Phone
            </label>
            <input
              type="text"
              id="title"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              style={{
                border: '1px solid #D1D5DB',
                borderRadius: '0.25rem',
                padding: '0.5rem',
                width: '100%',
              }}
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

export default FooterForm;
