import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import Departments from './pages/Departments';
import News from './pages/News';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import New from './pages/New';
import LangContext, { LangProvider } from './context/LangContext';
import Event from './pages/Event';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div className="App">
        <Router>
          <LangProvider>

              <Navbar />

              <Routes>
                <Route path='/' exact element={<Landing />} />
                <Route path='/teams/' exact element={<Departments />} />
                <Route path='/news/' exact element={<News />}/>
                <Route path='/news/:postSlug/' exact element={<New />}/>
                <Route path='/event/:postSlug/' exact element={<Event />} />
              </Routes>

              <Footer />
          </LangProvider>
        </Router>
    </div>
  );

}

export default App;
