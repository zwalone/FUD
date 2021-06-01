import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Accordion as MuiAccordion,
    Typography,
    AccordionSummary as MuiAccordionSummary,
    AccordionDetails as MuiAccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import { useHistory } from 'react-router-dom';
import { IngredientsList } from '../components/IngredientsList';
import { Favourites } from '../utils/storage';
import { downloadRecipeByID } from '../data/RecipeSearchData';

const Accordion = withStyles({
    root: {
        '&:before': {
            backgroundColor: 'white',
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
        paddingRight: '1em',
        paddingLeft: '1em',
        paddingTop: 0,
        paddingBottom: 0,
    },
})(MuiAccordionDetails);



export default function RecipeDetails() {
    const history = useHistory();
    const styles = useStyles();

    const [isFavourite, setIsFavourite] = useState(
      Favourites.isFav(history.location.state.recipe.uri)
    );

    const [recipe, setRecipe] = useState(
        Favourites.get(history.location.state.recipe.uri) ||
        history.location.state.recipe
    );

    const setIngredients = (ingreds) =>{
        let rec = {...recipe};
        rec.ingredients = ingreds;
        Favourites.set(rec)
        setRecipe(rec)
}

const loadRecipe = (uri) => {
  let url = "http://www.edamam.com/ontologies/" + uri;
  if (Favourites.isFav(url) && !recipe?.ingredients[0]?.name) {
    setRecipe(Favourites.get(url));
  } else if (!recipe) {
    (async () =>
      await downloadRecipeByID(url).then((x) => {

        setRecipe(x);
      }))();
  }
};

    useEffect(() => {
    let n = window.location.href.search(
    "recipeDetails"
    ) +
    "recipeDetails".length +
    1;
    let uri = window.location.href.slice(n);
    
    loadRecipe(uri)
    }, [recipe, loadRecipe])


    
  

    const onFABClick = () => {
        if (isFavourite){
            setIsFavourite(false);
            Favourites.drop(recipe)
        }
        else{
            setIsFavourite(true);
            Favourites.set(recipe)
            setRecipe(Favourites.get(recipe.uri))
            
        }
    }

    const OnClickClose = () => {
        history.goBack(); 
    };

    if (recipe === null || recipe === undefined) {
        return (<></>);
    }
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
                <img className={styles.image} src={recipe?.image} alt='recipe' />
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

            {/* {Ingredients} */}

            <Accordion elevation={0}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1bh-content'
                    id='panel1bh-header'
                >
                    <Typography variant='h6'>Ingredients</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {(recipe.ingredients) && <IngredientsList
                    checkable={isFavourite}
                        ingredients={recipe.ingredients}
                        setIngredients={(ingred) => {
                            setIngredients(ingred);
                        }}
                    />}

                </AccordionDetails>
            </Accordion>

            {/* {Nutrients} */}

            <Accordion elevation={0}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1bh-content'
                    id='panel1bh-header'
                >
                    <Typography variant='h6'>Nutrients Info</Typography>
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

            {/* Add Favourites button */}

            <Fab onClick={onFABClick} className={styles.floatingButton} color='secondary'>
                {isFavourite ? <DeleteIcon /> : <FavoriteIcon />}
            </Fab>
        </div>
    );
}

const useStyles = makeStyles({
    container: {
        marginBottom: 50,
        overflowX: 'hidden',
    },
    imageBox: {
        position: 'relative',
        height: 192,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        zIndex: -1,
    },
    icons: {
        width: '100%',
        justifyContent: 'space-between',
    },
    IconLeft: {
        position: 'absolute',
        top: 8,
        left: 0,
        color: 'white',
    },
    IconRight: {
        position: 'absolute',
        top: 8,
        right: 0,
        color: 'white',
    },
    title: {
        fontSize: '1.75em',
        textAlign: 'start',
        fontWeight: 'bold',
        lineHeight: '1.0em',
        paddingTop: '0.5em',
    },
    safeArea: {
        paddingLeft: '1em',
        paddingRight: '1em',
        display: 'flex',
        flexDirection: 'column',
    },
    details: {
        paddingTop: '0.5em',
        paddingBottom: '0.5em',
        width: '100%',
        justifyContent: 'space-between',
    },
    nutrition: {
        width: '100%',
        justifyContent: 'space-between',
    },
    detailsLeft: {
        float: 'left',
        display: 'inline',
        width: '50%',
        textAlign: 'start',
        fontSize: '1em',
    },
    detailsRight: {
        float: 'right',
        display: 'inline',
        width: '50%',
        textAlign: 'end',
        fontSize: '1em',
    },
    description: {
        fontSize: '1em',
        textAlign: 'start',
    },
    floatingButton: {
        position: 'fixed',
        bottom: 16,
        right: 16,
    },
});
