import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const url = 'https://internship-ten-red.vercel.app';

  // Handle login submission
  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   // Hardcoded credentials
  //   if (id === 'Admin' && password === 'admin123') {
  //     setIsLoggedIn(true);
  //     setError('');
  //   } else {
  //     setError('Invalid ID or Password');
  //     setIsLoggedIn(false);
  //   }
  // };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch all users
  const fetchUsers = async () => {
    try {
        const response = await axios.get(`${url}/api/users`);
        setUsers(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};


  

  // Delete user
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://internship-ten-red.vercel.app/api/users/${id}`);
      fetchUsers(); // Refresh the user list
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  // Handle updating user
  const handleUpdate = async (id) => {
    try {
      await axios.put(`https://internship-ten-red.vercel.app/api/users/${id}`, {
        name,
        email,
        mobile,
        designation,
        gender,
        course,
      });
      fetchUsers(); // Refresh the user list after update
      setEditUser(null); // Close the edit form
    } catch (error) {
      console.error("Error updating user", error);
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.designation}</td>
              <td>{user.gender}</td>
              <td>{user.course}</td>
              <td>
                <button onClick={() => setEditUser(user)}>Edit</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editUser && (
        <div className="edituser">
          <h3>Edit User</h3>
          <input
            type="text"
            value={name || editUser.name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="email"
            value={email || editUser.email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="text"
            value={mobile || editUser.mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile"
          />
          <input
            type="text"
            value={designation || editUser.designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Designation"
          />
          <input
            type="text"
            value={gender || editUser.gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="Gender"
          />
          <input
            type="text"
            value={course || editUser.course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Course"
          />
          <button onClick={() => handleUpdate(editUser._id)}>Update</button>
        </div>
      )}

      {/* <div className="loginadmin" style={{ display: isLoggedIn ? "none" : "" }}>
      {isLoggedIn ? (
        <h2>Welcome, Admin!</h2>
      ) : (
        <form onSubmit={handleLogin} >
          <h2>Login</h2>01
          {error && <p >{error}</p>}
          <label >
            ID:
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              
            />
          </label>
          <label >
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
          </label>
          <button type="submit" >Login</button>
        </form>
      )}
      </div> */}
    </div> 
  );
};

export default AdminPanel;
