export const getGames = async (query = "") => {
    const url = `http://localhost:5000/api/games`; // Your backend proxy URL
    console.log(`THIS IS THE URL: ${url}`)

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

        // Transform the data to match the structure
        const games = data.map((game) => ({
            id: game.id,
            title: game.title, 
            imgUrl: game.imgUrl, // Ensure there's a cover image
            releaseDate: game.releaseDate, // Handle release date
            slug: game.slug
        }));

        console.log("this is games from api.js: ", games)

        return games;
    } catch (error) {
        console.error("Error fetching games: ", error);
        return [];
    }
};
