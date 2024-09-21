// Essential Imports
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/Hooks/ScrollToTop";

// Sections Imports
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CarReservation from "./components/Section/CarReservation";
import TravelPlanning from "./components/Section/TravelPlanning";
import CarRentalPage from "./components/Section/CarRentalPage";
import AboutUs from "./components/Section/AboutUs";
import Testimonials from "./components/Section/Testimonials";
import Footer from "./components/Footer/Footer";

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
        <Footer />
        <ScrollToTop /> 
      </>
    </Router>
  );
}

export default App;
