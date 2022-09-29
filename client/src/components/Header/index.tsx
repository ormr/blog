import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { ToolbarUser } from './Tools/User';

const settings = [
  {
    name: 'Profile',
    path: '/profile',
  },
  {
    name: 'Logout',
    path: '/logout',
  },
];

export const Header = () => {

  return (
    <AppBar color="primary" position="static" sx={{ boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Blog
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/create"
            sx={{
              mr: 2,
              flexGrow: 10,
              display: { xs: 'none', md: 'flex' },
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Create post
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Something
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <ToolbarUser />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
