import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:3001/auth/github')
      .then(console.log('-----> Hello'))
      .then(console.log)
      .catch((error) => console.log(error));
  }, []);
  return (
    <div />
  );
}

export default App;
