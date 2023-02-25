import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Login } from './components/Login/Login'
import { MainView } from './components/MainView/MainView'
import { Movies } from './components/Movies/Movies'
import { Tvseries } from './components/Tvseries/Tvseries'
import { Bookmarked } from './components/Bookmarked/Bookmarked'
import { Home } from './components/Home/Home'

function App() {

  return (
    <div className="App font-Outfit">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/" element={<MainView/>}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/home/movies" element={<Movies/>}/>
            <Route path="/home/tvseries" element={<Tvseries/>}/>
            <Route path="/home/bookmarked" element={<Bookmarked/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
