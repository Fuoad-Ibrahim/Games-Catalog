export const getGames = async (query = "") => {
    // const url = `http://localhost:5000/api/games`; // For testing locally
    const url = 'https://games-catalog-backend.onrender.com/api/games';

    const options = {
        method: 'POST', // Use POST because your backend expects it
        headers: {
            'Content-Type': 'application/json', // Important for POST requests
        },
        body: JSON.stringify({ query }) // Send query as part of the body
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        const games = data.map((game) => ({
            id: game.id,
            title: game.title, 
            imgUrl: game.imgUrl, 
            releaseDate: game.releaseDate, 
            slug: game.slug
        }));

        console.log("this is games from api.js: ", games)

        return games;
    } catch (error) {
        console.error("Error fetching games: ", error);
        return [];
    }
};
