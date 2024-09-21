// Essential Imports
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

// Sections Imports
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CarReservation from "./components/Section/CarReservation";
import TravelPlanning from "./components/Section/TravelPlanning";
import CarRentalPage from "./components/Section/CarRentalPage";
import AboutUs from "./components/Section/AboutUs";
import Testimonials from "./components/Section/Testimonials";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Main />
        <CarReservation />
        <TravelPlanning />
        <CarRentalPage />
        <AboutUs />
        <Testimonials />
      </>
    </Router>
  );
}

export default App;
