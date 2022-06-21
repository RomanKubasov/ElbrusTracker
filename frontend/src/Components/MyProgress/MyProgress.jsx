import React, { useEffect } from 'react';
import axios from 'axios';

function MyProgress() {
  useEffect(() => {
    axios.get('http://localhost:3001/myprogress').then((res) => console.log(res.data));
  }, []);
  return (
    <div>MyProgress (all progress trackers)</div>
  );
}

export default MyProgress;
