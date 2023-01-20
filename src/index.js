import React from 'react';
// import { HeroesApp } from './HeroesApp';

import { createRoot } from 'react-dom/client';
import { HeroesApp } from './HeroesApp';
// import { BasicosRouterDom } from './reactRouterDom v6/BasicosRouterDom';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<HeroesApp/>);

