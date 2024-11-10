import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');
  const [image, setImage] = useState(null); // State to hold the uploaded image

  // Handle form submission
  const handleSubmit = async(e) => {

    // Here, make a request to the backend to submit the form data
    // Example using fetch
    try {
        const response = await axios.post('http://localhost:8000/register',{name,email,mobile,designation,gender,course,image})
        const {success,msg} = response.data;
        if((success)){
            console.log('Signup successful')
          }
          else{
            console.log(msg)
          }
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Mobile:
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Designation:
          <select
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            style={styles.input}
          >
            <option value="">Select Designation</option>
            <option value="Manager">Manager</option>
            <option value="Developer">Developer</option>
            <option value="Intern">Intern</option>
            <option value="Designer">Designer</option>
          </select>
        </label>

        <label style={styles.label}>
          Gender:
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === 'Male'}
              onChange={(e) => setGender(e.target.value)}
            /> Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === 'Female'}
              onChange={(e) => setGender(e.target.value)}
            /> Female
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={gender === 'Other'}
              onChange={(e) => setGender(e.target.value)}
            /> Other
          </div>
        </label>

        <label style={styles.label}>
          Course:
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Upload Image:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            style={styles.input}
          />
        </label>

        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

// Basic inline styles
const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
  },
  button: {
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#28a745',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Register;
