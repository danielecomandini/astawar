import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#227788' }}>
        <Toolbar>
          {/* Titolo a sinistra */}
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Asta War
          </Typography>

          {/* Spazio elastico */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Menu di navigazione */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              component={NavLink}
              to="/"
              color="inherit"
              sx={{
                '&.active': {
                  borderBottom: '2px solid #FFA733',
                },
              }}
            >
              Dashboard
            </Button>
            <Button
              component={NavLink}
              to="/settings"
              color="inherit"
              sx={{
                '&.active': {
                  borderBottom: '2px solid #FFA733',
                },
              }}
            >
              Settings
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Container per il contenuto delle pagine */}
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
