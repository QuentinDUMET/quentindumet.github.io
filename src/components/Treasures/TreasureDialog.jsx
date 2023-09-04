import * as React from 'react';
import PropTypes from 'prop-types'
import { useState, useEffect } from "react"

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
}); 

const TreasureDialog = ({ chest }) => {

  const locationElt = chest.common_locations === null ? <li> ??? </li> : chest.common_locations.map(location => {return (<li key={location}>{location}</li>)})

  const dlcElt = chest.dlc === false ? null : <li>DLC</li>

  const dropsElt = (
    <li> Drops : 
      <ul>
        {chest.drops.map(drop => (<li key={drop}>{drop}</li>))}
      </ul>
    </li>
  )

    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 300);
      return () => clearTimeout(timer);
    }, [chest])
    
  return (
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle sx={{ textAlign: 'center', textTransform: 'capitalize', fontWeight: 'bold', fontSize: 24 }}>{chest.name}</DialogTitle>
      <DialogContent sx={{ fontSize: 18, textAlign: 'justify' }}>
        <img style={{ display: 'block', margin: '0 auto', borderRadius: 20 }} src={chest.image} alt={chest.name} />
        <p>{chest.description}</p>
        <ul key={chest.id}>
          {dropsElt}
          <li>Location :
            <ul>
              {locationElt}
            </ul>
          </li>
          {dlcElt}
        </ul>
      </DialogContent>
      <DialogActions>
          <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
    )
}

export default TreasureDialog

TreasureDialog.propTypes = {
  chest: PropTypes.object,
};