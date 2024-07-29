import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';



const container = document.getElementById('root');
const root = createRoot(container!); // Создаем корень
root.render(<App />);
