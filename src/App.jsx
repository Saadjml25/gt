import React, { useState } from 'react';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Inventory from './scenes/inventory';
import Contacts from './scenes/contatcs';
import FAQ from './scenes/faq';
import Form from './scenes/form';
import Bar from './scenes/bar';
import Pie from './scenes/pie';
import Line from './scenes/line';
import Calendar from './scenes/calendar';
import { Routes, Route } from 'react-router-dom';
import Login from './scenes/login/Login';
import Team from './scenes/team/index'

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isAuthenticated ? (
            <>
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/Inventory" element={<Inventory />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/calendar" element={<Calendar />} />
                </Routes>
              </main>
            </>
          ) : (
            <Login setIsAuthenticated={setIsAuthenticated}
            isAuthenticated={isAuthenticated} />
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;