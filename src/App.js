import Mandato from "./Mandato";
import Timer from "./Timer";
import Reloj from "./reloj"
import ControlSesion from "./ControlSesion";
import Login from "./Login";
import Search from "./views/search";
import Row from "./Row"
import requests from "./Requests"


function App() {
  return (
  <div className="App">
    <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals}/> 
    <Row title="Tending Now" fetchURL={requests.fetchTrending} /> 


    
   
  </div>
  )

}

export default App;
