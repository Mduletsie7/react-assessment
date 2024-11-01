// Media.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/Media.css';
import AudioPlayer from './AudioPlayer';

const DailyCommunion = () => {
    const [objects, setObjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchObjects = async () => {
            try {
                const response = await axios.get('https://arthurfrost.qflo.co.za/php/getTimeline.php');
                const filteredResponse = response.data.Timeline.filter(object => object.Category === "Daily Communion");
                const limitResponse = filteredResponse.slice(0, 3);
                setObjects(limitResponse);
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
        <div className="media">
          <h1>Daily Communion</h1>
          <p>Take a moment to sit back and feed the spirit with the Good Word. New Audio added daily.</p>
          <div className="album-list">
            {objects.map((object) => (
              <div key={object.id} className="album-item">
                <img className="communion-icon" src={`${object.Icon}`} alt={`Icon for ${object.Title}`} />
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
    
    export default DailyCommunion;