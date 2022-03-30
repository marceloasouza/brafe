import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import './App.css';
import Main from "./session/Main/Main";
import Flavors from "./session/Flavors/Flavors";
import Stores from "./session/Stores/Stores";
import Newsletter from "./session/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Main />
      <Flavors />
      <Stores />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
