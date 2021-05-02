import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image';
import {List, ListItem} from '@material-ui/core';
import { Accordion, Typography, AccordionSummary, AccordionDetails, Avatar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function RecipeDetails ({image, title, description, nutrients, kcal, sevings}){
    const styles = useStyles();

    return (
        <div >
            <div>
                <Image 
                    variant="rounded" 
                    src={image}
                />
            </div>
            <div>
                <Typography>{title}</Typography>
                <div>
                    <Typography >{kcal}kcal</Typography>
                    <Typography >{sevings}sevings</Typography>
                </div>
            </div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}              
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography>Description</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{description}</Typography>
                    </AccordionDetails>
                </Accordion>

                {/* {nutrition} */}
                
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}              
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography>Nutrients Info</Typography>
                    </AccordionSummary>
                    {nutrients.map((e, key) => {
                        return(
                            <AccordionDetails key={key}>
                                <div>
                                    <Typography>{e.label}</Typography>
                                    <Typography>{e.quantity} {e.unit}</Typography>
                                </div>
                            </AccordionDetails>
                        )
                    })}
                </Accordion>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({


}))