import React, { Fragment, useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RecipeCard from '../components/RecipeCard';
import CustomAppBar from '../components/CustomAppBar';
import { downloadRecipes } from '../data/RecipeSearchData';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { getPathnameSegment } from '../utils/urlUtils';

//Global state for search page
var lastFetchCache = [];

export default function SearchPage() {
    const classes = useStyles();
    const history = useHistory();
    const [recipes, setRecipes] = useState(lastFetchCache);
    const [phrase, setPhrase] = useState(getPathnameSegment(2)); //TODO: use query string

    const fetchRecipes = () => {
        let p = phrase
        if (p === undefined || p === null || p.length === 0) {
            p = "shrimp"
        }

        downloadRecipes(p, 0, 100)
            .then(recipes => {
                if (recipes === undefined) console.log("Failed to fetch (wrong keys?)");
                else {
                    setRecipes(recipes);
                    lastFetchCache = recipes;
                }
            })
    }

    //Fetch data on mount, only if cache does not contain anything
    useEffect(() => {
        if (recipes.length === 0)
            fetchRecipes();
    }, []);

    //Prevent the following effect, from running on mount
    const isMounted = useRef(false);
    //Fetch new data, when phrase changes
    useEffect(() => {
        if (isMounted.current === true) {
            fetchRecipes();
        }
        else {
            isMounted.current = true;
        }
    }, [phrase]);

    const OnSearchClick = (input) => {
        history.replace({ pathname: '/search/' + input });
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