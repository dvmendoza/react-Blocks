import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Advertisement from './components/Advertisement';
import Subcontent from "./components/Subcontent"

function App() {
  return (
        <div className="marg gray pad col">
          <Header />
          <div className="row fill">
            <Navigation />
            <Main>
              <div className="row fill">
                <Subcontent />
                <Subcontent />
                <Subcontent />
              </div>
              <Advertisement />
            </Main>
          </div>
        </div>
  );
}

export default App;
