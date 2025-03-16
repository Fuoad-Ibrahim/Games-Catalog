import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Favorites from './pages/Favorites.jsx'
import NavBar from './components/NavBar.jsx'
import FavoritesProvider from './contexts/favoritesContext.jsx';
import GamesProvider from './contexts/GamesContext.jsx'
import "./css/App.css"

function App() {

  return (
    <GamesProvider>
    <FavoritesProvider>
      <div className="app-container">
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorites favorites={[]} />}></Route>
        </Routes>
        </div>
      </FavoritesProvider>
      </GamesProvider>
  )

}

export default App
