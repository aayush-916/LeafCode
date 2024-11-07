import React, { useState } from 'react';
import styles from './Admin.module.css';

function Admin() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error messages

    try {
      const response = await fetch(`https://backend-leafcode.onrender.com/admin?user=${user}&password=${password}`);
      const result = await response.json();

      if (response.ok) {
        setData(result);
        setAuthenticated(true); // Hide login form
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles["admin-container"]}>
      {!authenticated ? (
        // Login Form
        <form onSubmit={handleLogin} className={styles["login-form"]}>
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {error && <p className={styles["error-message"]}>{error}</p>}
        </form>
      ) : (
        // Display Data after Successful Login
        <div className={styles["data-container"]}>
          <h2>DataBase</h2>
          {data.length > 0 ? (
            <div className={styles["data-table"]}>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id} className={styles["data-row"]}>
                      <td>{item.name}</td>
                      <td>{item.number}</td>
                      <td>{item.email}</td>
                      <td>{item.message}</td>
                      <td>{new Date(item.date).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No messages found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Admin;
