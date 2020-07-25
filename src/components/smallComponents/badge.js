import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


  
export default function badges() {
//edit

  
  return (
    <IconButton aria-label="cart" style={{ color: 'white' , marginRight : 20  }}>
      <StyledBadge badgeContent={5} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}

