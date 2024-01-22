import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';

export default function CircularProgressComponent() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex',justifyContent:"center",height:'100vh',alignItems:"center" }}>
      <CircularProgress />
    </Box>
    </ThemeProvider>
  );
}