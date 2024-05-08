import React, { useState, useEffect } from 'react';

const FetchHelloWorld: React.FC = () => {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001');
        const data = await response.text();  // Assuming the response is just a plain text
        setMessage(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setMessage('Failed to load message');
      }
    };

    fetchData();
  }, []);

  return <div>{message}</div>;
};

export default FetchHelloWorld;
