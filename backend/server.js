const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

app.use(cors());
app.use(express.json());

app.get('/api/weather', async (req, res) => {
  const { city } = req.query;
  
  if (!city) {
    return res.status(400).json({
      success: false,
      message: 'City parameter is required'
    });
  }
  
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: API_KEY
      }
    });
    
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      
      if (status === 404) {
        return res.status(404).json({
          success: false,
          message: 'City not found'
        });
      }
      
      return res.status(status).json({
        success: false,
        message: error.response.data.message || 'Error fetching weather data'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to connect to weather service'
    });
  }
});

app.get('/current', async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: 'Latitude and longitude required' });
  }

  try {
    const weatherRes = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${lat},${lon}`
    );

    const weatherData = await weatherRes.json();
    res.json(weatherData);
  } catch (error) {
    console.error('Weather fetch failed:', error);
    res.status(500).json({ error: 'Weather API error' });
  }
});

app.get('/', (req, res) => {
  res.send('Weather Dashboard API is running');
});

app.get('/api/wake', (req, res) => {
  res.status(200).json({ status: 'Server is awake' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
