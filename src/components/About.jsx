// About.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/About.css'

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
        <div className="about">
            {objects.map((object) => (
              <div key={object.id} className="about-body">
                      <div dangerouslySetInnerHTML={{ __html: object.About }} />
                      <script>{object.JS}</script>
                </div>
            ))}
        </div>
      );
    };
    
    export default About;