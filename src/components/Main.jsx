import React, { useEffect, useState } from "react";
import axios from "axios";

const TimelineList = () => {
    const [objects, setObjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchObjects = async () => {
            try {
                const response = await axios.get('https://arthurfrost.qflo.co.za/php/getTimeline.php');
                setObjects(response.data.Timeline);
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
    <ul>
        {objects.map(object =>(
            <span key={object.id}>
                <h1>{object.Title}</h1>
                {/* <img src={object.Image} /> */}
                <audio src={object.Audio}></audio>
            </span>
        ))}
    </ul>
);
};

export default TimelineList;