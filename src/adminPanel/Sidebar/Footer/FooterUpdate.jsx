import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../Constaints/baseUrl';
function FooterUpdate() {
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };
  const navigate = useNavigate();
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  useEffect(() => {
    // Fetch the existing record data from the API
    axios
      .get(baseUrl + `/getFooterId/${id}`)
      .then((response) => {
        setCompany(response.data.company);
        setAddress(response.data.address);
        setEmail(response.data.email);
        setPhone(response.data.phone);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.put(baseUrl + `/updateFooter/` + id, {
        company,
        address,
        email,
        phone,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      navigate('/FooterList');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Update Footer</h1>
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
    </div>
  );
}

export default FooterUpdate;
