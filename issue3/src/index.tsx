import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import initMockServer from './modules/mock.module';

if (process.env.API_MOCK == 'true') initMockServer();

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
