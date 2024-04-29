import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App'

const root = document.getElementById('root') as HTMLElement;
const rootContainer = createRoot(root);

rootContainer.render(
    <App />
);
