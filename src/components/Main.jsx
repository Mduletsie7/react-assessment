import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

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
                <img src={object.Image} />
            </span>
        ))}
    </ul>
);
};

export default TimelineList;