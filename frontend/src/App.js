import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://backend:5000")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>🚀 DevOps Demo App</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p className="message">{data?.message}</p>
            <p className="env">Environment: {data?.environment}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;