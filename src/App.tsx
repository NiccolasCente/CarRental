// Essential Imports
import "bootstrap/dist/css/bootstrap.min.css";

//Sections Imports
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CarReservation from "./components/Section/CarReservation";
import TravelPlanning from "./components/Section/TravelPlanning";

function App() {
  

  return (
    <>
      <Header />
      <Main />
      <CarReservation />
      <TravelPlanning />
    </>
  )
}

export default App
