import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LoaderOverlay } from './components/LoaderOverlay';
import { Form } from './pages/Form';
import { Home } from './pages/Home';
import { Request } from './pages/Request';

export const App = () => {
  return (
    <>
      <Header />
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/request/:id' element={<Request />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </div>
      <Footer />
      <LoaderOverlay show={false} />
    </>
  );
};
