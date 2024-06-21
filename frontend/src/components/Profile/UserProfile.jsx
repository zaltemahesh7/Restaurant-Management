// UserProfile.jsx
import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className=' mb-96' style={styles.profileContainer}>
      <img src={user.image} alt="Profile" style={styles.profileImage} />
      <h2 style={styles.profileName}>{user.name}</h2>
      <p style={styles.profileEmail}>{user.email}</p>
      <p style={styles.profileBio}>{user.bio}</p>
    </div>
  );
};

const styles = {
  profileContainer: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
  },
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  profileName: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  profileEmail: {
    fontSize: '16px',
    color: '#555',
    margin: '10px 0',
  },
  profileBio: {
    fontSize: '14px',
    color: '#777',
  },
};

export default UserProfile;
