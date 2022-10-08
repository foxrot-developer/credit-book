import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

import NavigationRoutes from './routes/NavigationRoutes';

function App() {

  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n]);

  return (
    <Router>
      <NavigationRoutes />
    </Router>
  );
}

export default App;
