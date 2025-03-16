import { createContext, useState, useEffect, useContext } from "react";
import { getGames } from "../services/api";


const GamesContext = createContext();

export const useGamesContext = () => useContext(GamesContext)

function GamesProvider({children}) {

  const [games, setGames] = useState([]);   
  const [loading, setLoading] = useState(true);
  const [fetchSuccess, setFetchSuccess] = useState(true);

  function handleQuery(queryResponse){
    setGames(queryResponse)
  }

  function handleLoad(loading){
    setLoading(loading)
  }

  useEffect(() => {
      const fetchGames = async () => {
          try{
            const data = await getGames();
            console.log("This is data from App.jsx: ", data)
            if (data.length === 0){setFetchSuccess(false)}
            setGames(data);
          } catch (err) {
            console.log(err)

          } finally {
            setLoading(false)
          }   
      };
      fetchGames();   // fetches games from IGDB using api
  }, []);

    const value = {
        games,
        loading,
        handleQuery,
        handleLoad,
        fetchSuccess
    }

    return <GamesContext.Provider value={value}>
        {children}
    </GamesContext.Provider>

}

export default GamesProvider