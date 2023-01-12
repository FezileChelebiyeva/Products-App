import "./App.css";
import Routing from "./routing";
import "./assets/sass/base/_global.scss";
import Header from "./layout/header";
import Footer from "./layout/footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
