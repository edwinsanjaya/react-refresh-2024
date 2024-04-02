import React from 'react';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

const myStyle = {
  fontFamily: '"Source Sans 3", sans-serif',
  fontOpticalSizing: 'auto',
  fontWeight: 500,
  fontStyle: 'normal'
};

const CustomListItemText = ({ label, value, icon }) => {
  return (
    <ListItem>
      {icon && (
        <ListItemIcon>
          {icon}
        </ListItemIcon>
      )}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {label && <Typography style={myStyle} variant="body2" color="textSecondary">
          {label}
        </Typography>}
        <Typography style={myStyle} variant="subtitle1">
          {value}
        </Typography>
      </div>
    </ListItem>
  );
};

export default CustomListItemText;