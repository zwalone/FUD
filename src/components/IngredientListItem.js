// Custom App Bar with a "Recipes" title and clickable SearchIcon,
// which is responsible for showing Search Bar. The component has
// been implemented on the basis of: https://material-ui.com/components/app-bar/



import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, AppBar, Toolbar, Typography, InputBase} from '@material-ui/core'
import styled from 'styled-components'
import CheckBox from '@material-ui/core/Checkbox';
import {SearchIcon, CloseIcon, Height} from '@material-ui/icons'


const PurpleCheckBox = styled(CheckBox)`
            color: #6200EE !important;
            backgroundColor: #6200EE !important;
`


export function IngredientListItem(props) {
    const {checkable, checked, name, amount, unit, index} = props
    const classes = useClasses();
    return(
        <div className={classes.root}>
            {index ? <div className={classes.separator}/> : <div className={classes.invisibleSeparator}/> }
            <div className={classes.lineKeeper}>
            <PurpleCheckBox checked={checked} className={classes.checkBox}/>
            <div className={classes.name}>{name}</div>
            <div className={classes.amount}>{amount} {unit}</div>
            </div>
        </div> 
    )
}


const useClasses = makeStyles((theme) => ({
    root:{ 
        position: "relative"
    },
    separator: {
        height: "1px", 
        backgroundColor: "#999999",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "12px",
        marginBottom: "0px",
    },
    invisibleSeparator: {
        height: "1px", 
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "12px",
        marginBottom: "0px",
    },
    lineKeeper:{
        width: "100%",
        height: "30px",
    },
    checkBox:{
        position: 'absolute',
        left: "0px"
    },
    name:{
        position: 'absolute',
        margin: "12px",
        left: "30px",

    },
    amount:{
        position: 'absolute',
        margin: "12px",
        right: "5px",
    }
}));
  