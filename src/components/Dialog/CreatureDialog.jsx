import * as React from 'react';
import { useState } from "react"

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
}); 

const CreatureDialog = ({ creature }) => {

    const cookingElt = creature.cooking_effect !== undefined && creature.cooking_effect !== "" ? <li>Cooking effect : {creature.cooking_effect} </li> : <li>No cooking effect</li>

    const locationElt = creature.common_locations === null ? <li> ??? </li> : creature.common_locations.map(location => {return (<li key={location}>{location}</li>)})

    const dlcElt = creature.dlc === false ? null : <li>DLC</li>

    const edibleElt = creature.edible === true && creature.hearts_recovered !== 0 ? <li>Hearts recovered : {creature.hearts_recovered}</li> : <li>Non-food</li>

    const dropsElt =  creature.drops !== undefined && creature.drops !== null && creature.drops.length !== 0 ? (
        <li> Drops : 
            <ul>
                {creature.drops.map(drop => (<li key={drop}>{drop}</li>))}
            </ul>
        </li>
    ) :
    <li>No drops</li> 

    const [open, setOpen] = useState(true)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle sx={{ textAlign: 'center', textTransform: 'capitalize', fontWeight: 'bold', fontSize: 24 }}>{creature.name}</DialogTitle>
            <DialogContent sx={{ fontSize: 18, textAlign: 'justify' }}>
                <img style={{ display: 'block', margin: '0 auto', borderRadius: 20 }} src={creature.image} alt={creature.name} />
                <p>{creature.description}</p>
                <ul key={creature.id}>
                    {edibleElt}
                    {cookingElt}
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
                <Button onClick={handleClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreatureDialog