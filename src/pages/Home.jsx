import { getGames } from "../services/api"
import GameCard from "../components/GameCard"
import SearchBar from "../components/SearchBar";
import { useState } from "react"
import { useGamesContext } from "../contexts/GamesContext"
import "../css/Home.css"


function Home() {

    const { games, loading, handleQuery, handleLoad, fetchSuccess } = useGamesContext();
    
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = async (e) => {
        try {
          handleLoad(true)
          e.preventDefault()
          const queryResponse = await getGames(searchQuery)
          handleQuery(queryResponse)
        } catch (err){
          console.log(err)
        }
        finally {
          handleLoad(false)
        }
    }

    function updateSearchQuery(value){
      setSearchQuery(value)
    }

    return (
        <>

        < SearchBar handleSearch={handleSearch} updateSearchQuery={updateSearchQuery} searchQuery={searchQuery}/>

        <div className="container">
          { !fetchSuccess ? (<p className="failed-fetch-text">Failed to fetch games. Please refresh to try again.</p>) :
            (
              loading ? (
                <div>
                  <p className="loading-text">Loading...</p>
                </div>
                ) : (
              <div className="row">
                {games.map((game) => (
                  <div className="col-lg-3 col-sm-6 game-card-container d-flex justify-content-center" key={game.id}>
                    <GameCard 
                      game={game}
                      key={game.id}
                    />
                  </div>
                ))}
              </div>
              )
            )
          }
          
        </div>
        </>
    )
}

export default Home