import React, { Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RecipeCard from '../components/RecipeCard';
import CustomAppBar from '../components/CustomAppBar';
import { RecipeDataContext } from '../data/RecipeDataContext';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function SearchPage() {
    const classes = useStyles();
    const { recipes, setPhrase, setCurrentRecipe } = useContext(RecipeDataContext);
    const history = useHistory();

    const OnClickItem = (item) => {
        setCurrentRecipe(item);
        history.push({ pathname: '/recipeDetails' })
    }

    return (
        <Fragment>
            <CustomAppBar canSearch={true} onSearch={input => setPhrase(input)}/>
            <div className={classes.root}>
                <Grid container spacing={1} justify='center'>
                {recipes.map(recipe => 
                    <Grid item xs={6} key={recipe.url}>
                        <RecipeCard
                            title={recipe.label} subTitle={recipe.calories} 
                            image={recipe.image} key={recipe.url} 
                            onClick={() => OnClickItem(recipe)}/>
                    </Grid>
                )}
                </Grid>
            </div>
        </Fragment>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 8,
        minHeight: '100vh',
    },
}))