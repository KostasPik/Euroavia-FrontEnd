import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import Departments from './pages/Departments';
import News from './pages/News';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import New from './pages/New';
import { LangProvider } from './context/LangContext';
import Event from './pages/Event';
import Sponsors from './pages/Sponsors';
import Atlas from './pages/Atlas';

function App() {
  return (
    <div className="App">
        <Router>
          <LangProvider>

              <Navbar />

              <Routes>
                <Route path='/'  element={<Landing />} />
                <Route path='/teams/'  element={<Departments />} />
                <Route path='/news/'  element={<News />}/>
                <Route path='/news/:postSlug/'  element={<New />}/>
                <Route path='/event/:postSlug/' element={<Event />} />
                <Route path='/sponsors/' element={<Sponsors />} />
                <Route path='/atlas/' element={<Atlas/>}/>
              </Routes>

              <Footer />
          </LangProvider>
        </Router>
    </div>
  );

}

export default App;
