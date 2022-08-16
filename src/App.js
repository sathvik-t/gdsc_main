import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Teams from "./components/Teams";
import Announcements from "./components/Announcements";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Teams />
      <Announcements />
      <Footer />
    </div>
  )
}

export default App;