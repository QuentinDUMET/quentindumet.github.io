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

const MonsterDialog = ({ enemy }) => {

  const locationElt = enemy.common_locations === null ? <li> ??? </li> : enemy.common_locations.map(location => {return (<li key={location}>{location}</li>)})

  const dlcElt = enemy.dlc === false ? null : <li>DLC</li>

  const dropsElt = enemy.drops === null || enemy.drops.length === 0 ? <li>No drops</li> : (
    <li> Drops : 
      <ul>
        {enemy.drops.map(drop => (<li key={drop}>{drop}</li>))}
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
    }, [enemy])
    
  return (
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle sx={{ textAlign: 'center', textTransform: 'capitalize', fontWeight: 'bold', fontSize: 24 }}>{enemy.name}</DialogTitle>
      <DialogContent sx={{ fontSize: 18, textAlign: 'justify' }}>
        <img style={{ display: 'block', margin: '0 auto', borderRadius: 20 }} src={enemy.image} alt={enemy.name} />
        <p>{enemy.description}</p>
        <ul key={enemy.id}>
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

export default MonsterDialog

MonsterDialog.propTypes = {
    enemy: PropTypes.object,
};