import React, { Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import RecipeCard from '../components/RecipeCard';
import CustomAppBar from '../components/CustomAppBar';
import { RecipeDataContext } from '../data/RecipeDataContext';
import { Grid } from '@material-ui/core';

// GridList used in this component bases on: https://material-ui.com/components/grid-list/
export default function SearchPage() {
    const classes = useStyles();
    const { recipes, setPhrase } = useContext(RecipeDataContext);
    return (
        <Fragment>
            <CustomAppBar onSearch={input => setPhrase(input)}/>
            <div className={classes.root}>
                <Grid container spacing={1} justify='center'>
                {recipes.map(recipe => 
                    <Grid item xs={6}>
                        <RecipeCard
                            title={recipe.label} subTitle={recipe.calories} 
                            image={recipe.image} key={recipe.url} 
                            onClick={() => {console.log(recipe)}}/>
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