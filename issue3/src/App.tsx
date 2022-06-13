import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LoaderOverlay } from './components/LoaderOverlay';
import { Draft } from './pages/Draft';
import { List } from './pages/List';
import { Request } from './pages/Request';
import rootStore from './stores/rootStore';

export const App = () => {
  useEffect(() => {
    rootStore.dictionaryStore.loadDictionaries().then(() => {
      rootStore.dictionaryStore.loadBrands();
    });

    rootStore.requestStore.loadRequests();
  }, []);

  return (
    <>
      <Header />
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<List store={rootStore} />} />
          <Route
            path='/request/:reqId'
            element={<Request store={rootStore} />}
          />
          <Route path='/draft' element={<Draft store={rootStore} />} />
        </Routes>
      </div>
      <Footer />
      <LoaderOverlay show={false} />
    </>
  );
};
