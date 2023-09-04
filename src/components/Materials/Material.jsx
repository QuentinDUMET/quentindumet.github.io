import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
}); 

const MaterialsTpl = ({item}) => {

    const cookingElt = item.cooking_effect === "" ? <li>No cooking effect</li> : <li>Cooking effect : {item.cooking_effect} </li>

    const locationElt = item.common_locations.map(location => {return (<li key={location}>{location}</li>)})

    const dlcElt = item.dlc === false ? null : <li>DLC</li>

    const heartELt = item.hearts_recovered === 0 ? "None" : item.hearts_recovered

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
                <>
            <Card raised sx={{ width: 280, height: 320 }} onClick={handleClickOpen}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="260"
                    image={item.image}
                    alt={item.name}
                    />
                    <CardContent>
                    <Typography sx={{ textAlign: 'center', textTransform: 'capitalize', fontSize: 20, fontFamily: 'botwTitleFont' }} gutterBottom component="div">
                        {item.name}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle sx={{ textAlign: 'center', textTransform: 'capitalize', fontWeight: 'bold', fontSize: 24, fontFamily: 'botwTitleFont' }}>{item.name}</DialogTitle>
                <DialogContent sx={{ fontSize: 18, textAlign: 'justify' }}>
                        <img style={{ display: 'block', margin: '0 auto', borderRadius: 20 }} src={item.image} alt={item.name} />
                        <p>{item.description}</p>
                        <ul key={item.id}>
                            <li>Hearts recovered if eaten raw : {heartELt}</li>
                            {cookingElt}
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
        </>               
    )
}

export default MaterialsTpl

MaterialsTpl.propTypes = {
    item: PropTypes.object,
}