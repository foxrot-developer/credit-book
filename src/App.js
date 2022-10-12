import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { ProSidebarProvider } from 'react-pro-sidebar';

import NavigationRoutes from './routes/NavigationRoutes';

function App() {

  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
    localStorage.setItem('lang', 'en')
  }, [i18n]);

  return (
    <ProSidebarProvider>
      <Router>
        <NavigationRoutes />
      </Router>
    </ProSidebarProvider>
  );
}

export default App;
