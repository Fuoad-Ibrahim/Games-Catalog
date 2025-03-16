import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env)

// Middleware
app.use(cors());
app.use(express.json());

// IGDB API Credentials
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const IGDB_API_URL = 'https://api.igdb.com/v4/games';

// Function to fetch the access token from Twitch API
const getAccessToken = async () => {
    try {
        const response = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`, {
            method: 'POST',
        });

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error);
        throw new Error('Unable to fetch access token');
    }
};

// Fetch games from IGDB
app.post('/api/games', async (req, res) => {
    console.log("Received request for games"); // Check if request is hitting here

    try {
        const accessToken = await getAccessToken();
        console.log("Access Token:", accessToken); // Log the token for debugging

        // Construct the body for the IGDB API request
        let body = "fields id,name,cover.image_id,release_dates.y,slug; limit 35;";

        // If query is provided, include the search
        if (req.body.query) {
            body += ` search "${req.body.query}";`;  // This should append search for specific games
        }

        const response = await fetch(IGDB_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': CLIENT_ID,
                'Authorization': `Bearer ${accessToken}`,
            },
            body: body,
        });

        if (!response.ok) {
            // Read the response text or JSON, whichever the IGDB API returns
            const errorText = await response.text();  // If the error is plain text
            const errorJson = await response.json().catch(() => null);  // If the error is in JSON format
        
            // Log both the raw error text and the parsed JSON if available
            console.error("IGDB API Error Response Text:", errorText);
            console.error("IGDB API Error Response JSON:", errorJson);
        
            // Throw the error with a detailed message
            throw new Error(`IGDB API Error: ${response.statusText} - ${errorText || JSON.stringify(errorJson)}`);
        }
        

        const data = await response.json();
        // console.log("Fetched data from IGDB API:", data); // Log raw data from IGDB

        // Remove games that dont have image or release data
        const filteredData = data.filter(game => 
            game.cover  && 
            game.release_dates && game.release_dates[0] && game.release_dates[0].y 
        );

        const games = filteredData.map(game => ({
            id: game.id,
            title: game.name,
            imgUrl: game.cover ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg` : '',
            releaseDate: game.release_dates ? game.release_dates[0].y : 'Coming soon',
            slug: game.slug
        }));

        console.log("Transformed games data:", games); // Log the transformed games data

        res.json(games); // Return the data to the frontend
    } catch (error) {
        console.error('Error fetching games:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
