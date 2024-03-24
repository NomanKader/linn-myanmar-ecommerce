import React from 'react';
import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'white',
  },
}));

const PointHistoryList = ({ pointHistory }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {pointHistory.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {item.type === 'up' ? (
                <ArrowUpwardIcon style={{ color: 'green' }} />
              ) : (
                <ArrowDownwardIcon style={{ color: 'red' }} />
              )}
            </ListItemIcon>
            <ListItemText
              primary={item.date}
              secondary={`${item.description} - ${item.points}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PointHistoryList;
