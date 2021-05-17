import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router-dom';
import * as st from '../storage';
import { RecipeDataContext } from '../data/RecipeDataContext';

export default function RecipeDetails() {

    //returns false if recipe is not found in the favourites dictionary
    //otherwise true
    const isFavouriteInit = () => {
        let fv = st.getItem("favourites");
        if (fv === null)
            return false;
        return fv[currentRecipe.uri] !== undefined;
    }

    const onFABClick = () => {
        let fv = st.getItem("favourites");
        if (fv === null)
            st.setItem("favourites", {}); //create a new favourites dictionary if one does not exist
        //use dict to reduce lookup time to O(1)
        if (fv[currentRecipe.uri] !== undefined) {
            delete fv[currentRecipe.uri] //if currentRecipe is already in the dictionary
            setIsFavourite(false);
            //remove it.
        }
        else {
            fv[currentRecipe.uri] = currentRecipe; //otherwise add it 
            setIsFavourite(true);
        }
        st.setItem("favourites", fv); //update item after modification
    }

    const styles = useStyles();
    const { currentRecipe } = useContext(RecipeDataContext);
    const history = useHistory()
    const OnClickClose = () => { history.goBack(); }
    const [isFavourite, setIsFavourite] = useState(isFavouriteInit());

    return (
        <div className={styles.container}>

            {/* {Image & icons} */}

            <div className={styles.imageBox}>
                <div className={styles.details}>
                    <Button onClick={() => OnClickClose()} className={styles.IconLeft}><CloseIcon /></Button>
                    <Button className={styles.IconRight}><LinkIcon /></Button>
                </div>
                <img className={styles.image} src={currentRecipe.image} alt="recipe" />
            </div>

            {/* {Title} */}

            <div className={styles.safeArea}>
                <Typography className={styles.title}>{currentRecipe.title}</Typography>
                <div className={styles.details}>
                    <Typography className={styles.detailsLeft}>{currentRecipe.calories}</Typography>
                    <Typography className={styles.detailsRight}>{currentRecipe.servings}</Typography>
                </div>
            </div>

            {/* {Ingredients} */}

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography>Ingredients</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>List Of Ingredients</Typography>
                </AccordionDetails>
            </Accordion>

            {/* {Description} */}

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography>Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={styles.description}>{currentRecipe.description}</Typography>
                </AccordionDetails>
            </Accordion>

            {/* {Nutrition} */}

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography>Nutrients Info</Typography>
                </AccordionSummary>
                <div className={styles.safeArea}>
                    {currentRecipe.nutrients.map((e, key) => {
                        return (
                            <AccordionDetails key={key}>
                                <div className={styles.nutrition}>
                                    <Typography className={styles.detailsLeft}>{e.label}</Typography>
                                    <Typography className={styles.detailsRight}>{e.quantity} {e.unit}</Typography>
                                </div>
                            </AccordionDetails>
                        )
                    })}
                </div>
            </Accordion>

            {/* Add Favorites button */}

            <Fab onClick={onFABClick} className={styles.floatingButton} color="secondary">
                {isFavourite ? <DeleteIcon /> : <FavoriteIcon />}
            </Fab>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: 50,
    },
    imageBox: {
        position: 'relative',
        textAlign: 'center',
    },
    image: {
        width: '100%',
    },
    IconLeft: {
        position: 'absolute',
        top: 8,
        left: 16,
        color: 'white',
    },
    IconRight: {
        position: 'absolute',
        top: 8,
        right: 16,
        color: 'white',
    },
    title: {
        fontSize: 28,
        textAlign: 'start',
        fontWeight: 'bold'
    },
    safeArea: {
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 5,
        marginBottom: 50
    },
    details: {
        width: '100%',
        justifyContent: 'space-between',
    },
    nutrition: {
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: -15,
    },
    detailsLeft: {
        float: 'left',
        display: "inline",
        width: '48%',
        textAlign: 'start',
        fontSize: 15
    },
    detailsRight: {
        float: 'right',
        display: "inline",
        width: '48%',
        textAlign: 'end',
        fontSize: 15
    },
    description: {
        fontSize: 15,
        textAlign: 'start'
    },
    floatingButton: {
        position: 'fixed',
        bottom: 15,
        right: 15,
    }
}))
