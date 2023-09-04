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

const EquipmentDialog = ({ stuff }) => {

  const statsElt = stuff.properties.attack === null ? null : 
    <li>Stats :
      <ul> 
        <li>Attack : {stuff.properties.attack} </li>
        <li>Defense : {stuff.properties.defense} </li>
      </ul> 
    </li>

  const locationElt = stuff.common_locations === null ? <li> ??? </li> : stuff.common_locations.map(location => {return (<li key={location}>{location}</li>)})

  const dlcElt = stuff.dlc === false ? null : <li>DLC</li>

  const [open, setOpen] = useState(true);

  const handleClose = () => {
      setOpen(false);
  }

  useEffect(() => {
      const timer = setTimeout(() => {
          setOpen(true);
      }, 300);
      return () => clearTimeout(timer);
  }, [stuff])
  
  return (
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle sx={{ textAlign: 'center', textTransform: 'capitalize', fontWeight: 'bold', fontSize: 24 }}>{stuff.name}</DialogTitle>
      <DialogContent sx={{ fontSize: 18, textAlign: 'justify' }}>
        <img style={{ display: 'block', margin: '0 auto', borderRadius: 20 }} src={stuff.image} alt={stuff.name} />
        <p>{stuff.description}</p>
        <ul key={stuff.id}>
          {statsElt}
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

export default EquipmentDialog

EquipmentDialog.propTypes = {
  stuff: PropTypes.object,
};