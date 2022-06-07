import Navbar from './Components/NavbarComponent';
import Home from './Components/HomeComponent';
import Create from './Components/CreateComponent';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Footer from './Components/FooterComponent';
import Edit from './Components/EditComponent';
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
