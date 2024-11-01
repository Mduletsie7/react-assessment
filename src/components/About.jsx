// About.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
    const [objects, setObjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchObjects = async () => {
            try {
                const response = await axios.get('https://arthurfrost.qflo.co.za/php/getTimeline.php');
                setObjects(response.data.Body);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
    };

    fetchObjects();
}, []);

if (loading) return <p>Loading. . .</p>;
if (error) return <p>Error: {error}</p>
  
    return (
        <div className="notable-credits">
          <div className="album-list">
            {objects.map((object) => (
              <div key={object.id} className="album-item">
                <img src={`${object.Icon}`} alt={`Icon for ${object.Title}`} />
                <AudioPlayer audioSource={`${object.Audio}`} />
                <div className="album-info">
                  <strong>{object.Title}</strong> {object.CreateDate}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default About;