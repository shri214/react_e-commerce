import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import { NavLink } from 'react-router-dom';
import './style.css';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        <ListIcon className="icons" />
      </Button>
      <Drawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
        <div className="listOfLink">
          <NavLink to={'/registration'}>Sing Up</NavLink>
          <NavLink to={'/login'}>Login</NavLink>
          <NavLink to={'/profile'}>Profile</NavLink>
          <NavLink to={'/store'}>Store</NavLink>
          <NavLink to={'/cart'}>Cart</NavLink>
        </div>
      </Drawer>
    </div>
  );
}
