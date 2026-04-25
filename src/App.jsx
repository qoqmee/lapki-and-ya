import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import GiveHomePage from './pages/GiveHomePage';
import PartnersPage from './pages/PartnersPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import DocumentsPage from './pages/DocumentsPage';
import FoundHomePage from './pages/FoundHomePage';
import NewsPage from './pages/NewsPage';
import News4 from './pages/News4';
import News3 from './pages/News3';
import News2 from './pages/News2';
import News1 from './pages/News1';


const App = () => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/givehome" element={<GiveHomePage />} />
            <Route path='/partners' element={<PartnersPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/about' element={<AboutPage />} /> 
            <Route path='/documents' element={<DocumentsPage />} />
            <Route path='/newhome' element={<FoundHomePage />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/news/1' element={<News1 />} />
            <Route path='/news/2' element={<News2 />} />
            <Route path='/news/3' element={<News3 />} />
            <Route path='/news/4' element={<News4 />} />
          
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;