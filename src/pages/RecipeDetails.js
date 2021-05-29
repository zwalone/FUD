import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
    Accordion as MuiAccordion,
    Typography,
    AccordionSummary as MuiAccordionSummary,
    AccordionDetails as MuiAccordionDetails,
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
import { downloadRecipeByID } from "../data/RecipeSearchData"

const Accordion = withStyles({
    root: {
        '&:before': {
            backgroundColor: "white",
        },
        '&$expanded': {
            margin: 0,
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        minHeight: 0,
        '&$expanded': {
            minHeight: 0,
        },
    },
    content: {
        margin: 0,
        '&$expanded': {
            margin: 0,
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles({
    root: {
        paddingRight: "1em",
        paddingLeft: "1em",
        paddingTop: 0,
        paddingBottom: 0,
    },
})(MuiAccordionDetails);


//returns false if recipe is not found in the favourites dictionary
//otherwise true
const isFavouriteInit = (recipe) => {
    let favs = storage.getItem("favourites");
    if (favs === null)
        return false;
    return favs[recipe?.uri] !== undefined;
}

export default function RecipeDetails() {
    const history = useHistory();
    const styles = useStyles();
    const [recipe, setRecipe] = useState(history?.location?.state?.recipe);
    const [ingredients, setIngredients] = useState(recipe?.ingredients);
    const [isFavourite, setIsFavourite] = useState(isFavouriteInit(recipe));



    useEffect(() => {
        if (recipe === undefined) {
            //fetch recipe using URL
            let n = window.location.href.search("recipeDetails") + "recipeDetails".length + 1;
            let uri = window.location.href.slice(n);
            downloadRecipeByID(uri).then(x => {
                setRecipe(x)
            });
        }
    }, [])


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

    const OnClickClose = () => {
        history.goBack();
    };


    if (recipe === null || recipe === undefined) {
        return (<></>);
    }
    console.log(recipe)
    return (
        <div className={styles.container}>
            {/* {Image & icons} */}

            <div className={styles.imageBox}>
                <div className={styles.icons}>
                    <Button onClick={() => OnClickClose()} className={styles.IconLeft}>
                        <CloseIcon />
                    </Button>
                    <Button href={`${recipe?.url}`} className={styles.IconRight}>
                        <LinkIcon />
                    </Button>
                </div>
                <img className={styles.image} src={recipe?.image} alt="recipe" />
            </div>

            {/* {Title} */}

            <div className={styles.safeArea}>
                <Typography className={styles.title}>{recipe?.label}</Typography>
                <div className={styles.details}>
                    <Typography className={styles.detailsLeft}>
                        {recipe?.calories}
                    </Typography>
                    <Typography className={styles.detailsRight}>
                        {recipe?.servings}
                    </Typography>
                </div>
            </div>


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



            {/* {Ingredients} */}

            <Accordion elevation={0}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography variant="h6">Ingredients</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {(recipe?.ingredients != undefined) ? <IngredientsList
                        ingredients={ingredients}
                        setIngredients={(ingred) => {
                            setIngredients(ingred);
                        }}
                    /> : null}

                </AccordionDetails>
            </Accordion>


            {/* {Nutrients} */}

            <Accordion elevation={0}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography variant="h6">Nutrients Info</Typography>
                </AccordionSummary>
                <div className={styles.safeArea}>
                    {recipe?.nutrients?.map((e, key) => {
                        return (
                            <AccordionDetails key={key} className={styles.accordionDetails}>
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
        overflowX: "hidden",
    },
    imageBox: {
        position: "relative",
        height: 192,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        zIndex: -1,
    },
    icons: {
        width: "100%",
        justifyContent: "space-between",
    },
    IconLeft: {
        position: "absolute",
        top: 8,
        left: 0,
        color: "white",
    },
    IconRight: {
        position: "absolute",
        top: 8,
        right: 0,
        color: "white",
    },
    title: {
        fontSize: "1.75em",
        textAlign: "start",
        fontWeight: "bold",
        lineHeight: "1.0em",
        paddingTop: "0.5em",
    },
    safeArea: {
        paddingLeft: "1em",
        paddingRight: "1em",
        display: "flex",
        flexDirection: "column",
    },
    details: {
        paddingTop: "0.5em",
        paddingBottom: "0.5em",
        width: "100%",
        justifyContent: "space-between",
    },
    nutrition: {
        width: "100%",
        justifyContent: "space-between",
    },
    detailsLeft: {
        float: "left",
        display: "inline",
        width: "50%",
        textAlign: "start",
        fontSize: "1em",
    },
    detailsRight: {
        float: "right",
        display: "inline",
        width: "50%",
        textAlign: "end",
        fontSize: "1em",
    },
    description: {
        fontSize: "1em",
        textAlign: "start",
    },
    floatingButton: {
        position: "fixed",
        bottom: 16,
        right: 16,
    },
}));
