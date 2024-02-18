import React from 'react';
import { Typography, Paper } from '@mui/material';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const paperStyle = {
  padding: 3,
  textAlign: 'center',
  color: 'text.secondary',
};

const emojiStyle = {
  fontSize: '2rem',
  marginBottom: 1,
};

const NoItemFoundComponent = () => {
  return (
    <div style={containerStyle}>
      <Paper elevation={3} style={paperStyle}>
        <Typography variant="h5" gutterBottom>
          <span style={emojiStyle}>😢</span> No items found with the applied filter
        </Typography>
        <Typography variant="body1">
          Try adjusting your filter criteria or explore other options.
        </Typography>
      </Paper>
    </div>
  );
};

export default NoItemFoundComponent;
