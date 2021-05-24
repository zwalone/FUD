import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Accordion,
    Typography,
    AccordionSummary,
    AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import LinkIcon from "@material-ui/icons/Link";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Fab from "@material-ui/core/Fab";
import { useHistory } from "react-router-dom";
import { IngredientsList } from "../components/IngredientsList";
import * as storage from '../utils/storage'


export default function RecipeDetails() {

    const history = useHistory();
    const styles = useStyles();
    const [recipe, setRecipe] = useState(history.location.state.recipe);
    //TODO: recipe setting effect in case of location state failure



    //returns false if recipe is not found in the favourites dictionary
    //otherwise true
    const isFavouriteInit = () => {
        let favs = storage.getItem("favourites");
        if (favs === null)
            return false;
        return favs[recipe?.uri] !== undefined;
    }

    const onFABClick = () => {
        let favs = storage.getItem("favourites");
        if (favs === null)
            storage.setItem("favourites", {}); //create a new favourites dictionary if one does not exist
        //use dict to reduce lookup time to O(1)
        if (favs[recipe.uri] !== undefined) {
            delete favs[recipe.uri] //if recipe is already in the dictionary
            setIsFavourite(false);
            //remove it.
        }
        else {
            favs[recipe.uri] = recipe; //otherwise add it 
            setIsFavourite(true);
        }
        storage.setItem("favourites", favs); //update item after modification
    }


    const [ingredients, setIngredients] = useState(recipe?.ingredients);
    const [isFavourite, setIsFavourite] = useState(isFavouriteInit());
    const OnClickClose = () => {
        history.goBack();
    };


    if (recipe === null) {
        history.goBack();
        return (<></>);
    }


    return (
        <div className={styles.container}>
            {/* {Image & icons} */}

            <div className={styles.imageBox}>
                <div className={styles.details}>
                    <Button onClick={() => OnClickClose()} className={styles.IconLeft}>
                        <CloseIcon />
                    </Button>
                    <Button className={styles.IconRight}>
                        <LinkIcon />
                    </Button>
                </div>
                <img className={styles.image} src={recipe?.image} alt="recipe" />
            </div>

            {/* {Title} */}

            <div className={styles.safeArea}>
                <Typography className={styles.title}>{recipe?.title}</Typography>
                <div className={styles.details}>
                    <Typography className={styles.detailsLeft}>
                        {recipe?.calories}
                    </Typography>
                    <Typography className={styles.detailsRight}>
                        {recipe?.servings}
                    </Typography>
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
                    <IngredientsList
                        ingredients={ingredients}
                        setIngredients={(ingred) => {
                            setIngredients(ingred);
                            console.log(ingredients);
                        }}
                    />
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
                    <Typography className={styles.description}>
                        {recipe?.description}
                    </Typography>
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
                    {recipe?.nutrients.map((e, key) => {
                        return (
                            <AccordionDetails key={key}>
                                <div className={styles.nutrition}>
                                    <Typography className={styles.detailsLeft}>
                                        {e.label}
                                    </Typography>
                                    <Typography className={styles.detailsRight}>
                                        {e.quantity} {e.unit}
                                    </Typography>
                                </div>
                            </AccordionDetails>
                        );
                    })}
                </div>
            </Accordion>

            {/* Add Favorites button */}

            <Fab onClick={onFABClick} className={styles.floatingButton} color="secondary">
                {isFavourite ? <DeleteIcon /> : <FavoriteIcon />}
            </Fab>
        </div>
    );

}

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: 50,
    },
    imageBox: {
        position: "relative",
        textAlign: "center",
    },
    image: {
        width: "100%",
    },
    IconLeft: {
        position: "absolute",
        top: 8,
        left: 16,
        color: "white",
    },
    IconRight: {
        position: "absolute",
        top: 8,
        right: 16,
        color: "white",
    },
    title: {
        fontSize: 28,
        textAlign: "start",
        fontWeight: "bold",
    },
    safeArea: {
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 5,
        marginBottom: 50,
    },
    details: {
        width: "100%",
        justifyContent: "space-between",
    },
    nutrition: {
        width: "100%",
        justifyContent: "space-between",
        marginBottom: -15,
    },
    detailsLeft: {
        float: "left",
        display: "inline",
        width: "48%",
        textAlign: "start",
        fontSize: 15,
    },
    detailsRight: {
        float: "right",
        display: "inline",
        width: "48%",
        textAlign: "end",
        fontSize: 15,
    },
    description: {
        fontSize: 15,
        textAlign: "start",
    },
    floatingButton: {
        position: "fixed",
        bottom: 15,
        right: 15,
    },
}));
