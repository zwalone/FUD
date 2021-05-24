import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RecipeCard from '../components/RecipeCard';
import CustomAppBar from '../components/CustomAppBar';
import { downloadRecipes } from '../data/RecipeSearchData';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function SearchPage() {
    const classes = useStyles();
    const history = useHistory();
    const [recipes, setRecipes] = useState([]);
    const [phrase, setPhrase] = useState(history.location.pathname.replace(/\//g, "")); //TODO: use query string

    //Fetch new data, when phrase changes
    useEffect(() => {
        downloadRecipes(phrase.length === 0 ? "shrimp" : phrase, 0, 100)
            .then(recipes => {
                if (recipes === undefined) console.log("Failed to fetch (wrong keys?)");
                else setRecipes(recipes);
            })
    }, [phrase]);


    const OnSearchClick = (input) => {
        history.replace({ pathname: '/' + input });
        setPhrase(input);
    }

    const OnClickItem = (item) => {
        let parts = item.uri.split('/');
        let lastSegment = parts.pop() || parts.pop(); //handle trailing slashes
        history.push({ pathname: '/recipeDetails/' + lastSegment, state: { recipe: item } })
    }

    return (
        <Fragment>
            <CustomAppBar onSearch={input => OnSearchClick(input)} />
            <div className={classes.root}>
                <Grid container spacing={1} justify='center'>
                    {recipes.map(recipe =>
                        <Grid item xs={6} key={recipe.url}>
                            <RecipeCard
                                title={recipe.label} subTitle={recipe.calories}
                                image={recipe.image} key={recipe.url}
                                onClick={() => OnClickItem(recipe)} />
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