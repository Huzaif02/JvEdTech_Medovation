import React from 'react';

const RedirectButton = ({ link, text, style }) => {
  const handleRedirect = () => {
    window.location.href = link; // Redirects to the link
  };

  return (
    <button
      onClick={handleRedirect}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        textTransform: 'uppercase',
        marginTop: 0, // Remove space above
        marginBottom: '30px', // Add space below
        ...style, // Apply additional styles if provided
      }}
    >
      {text || 'Go to Link'}
    </button>
  );
};

export default RedirectButton;
