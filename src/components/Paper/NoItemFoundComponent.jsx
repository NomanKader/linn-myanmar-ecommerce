import React from 'react';
import { Typography, Paper } from '@mui/material';

const containerStyle = {
  display: 'flex',
  marginTop:30,
  flex:1,
  justifyContent:'center'
};

const paperStyle = {
  padding: 10,
  textAlign: 'center',
  color: 'text.secondary',
};

const emojiStyle = {
  fontSize: 20,
  marginBottom: 1,
  fontWeight:'bold'
};

const NoItemFoundComponent = () => {
  return (
    <div style={containerStyle}>
      <Paper elevation={3} style={paperStyle}>
        <Typography variant="h5" gutterBottom>
          <span style={emojiStyle}>အချက်အလက်များမရှိပါ။</span>
        </Typography>
      </Paper>
    </div>
  );
};

export default NoItemFoundComponent;
