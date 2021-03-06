import React, { Fragment, useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RecipeCard from '../components/RecipeCard';
import CustomAppBar from '../components/CustomAppBar';
import { downloadRecipesQuery } from '../data/RecipeSearchData';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { getPathnameSegment } from '../utils/urlUtils';

//Global state for search page
var lastFetchCache = [];

export default function SearchPage() {
    const classes = useStyles();
    const history = useHistory();
    const [recipes, setRecipes] = useState(lastFetchCache);
    const [phrase, setPhrase] = useState(getPathnameSegment(3));

    const fetchRecipes = () => {
        let p = phrase
        if (p === undefined || p === null || p.length === 0) {
            p = 'shrimp';
        }

        downloadRecipesQuery(p, 0, 50)
            .then(recipes => {
                if (recipes === undefined) console.log('Failed to fetch (wrong keys?)');
                else {
                    setRecipes(recipes);
                    lastFetchCache = recipes;
                }
            });
    }

    //Fetch data on mount, only if cache does not contain anything
    // eslint-disable-next-line
    useEffect(() => {
        if (recipes.length === 0)
            fetchRecipes();
        // eslint-disable-next-line
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
        // eslint-disable-next-line
    }, [phrase]);

    const OnSearchClick = (input) => {
        history.replace({ pathname: '/search/' + input });
        setPhrase(input);
    }

    const OnClickItem = (item) => {
        let parts = item.uri.split("#").pop();
        history.push({
            pathname: "/recipeDetails/" + parts,
            state: { recipe: item },
        });
    };

    console.log(recipes)

    return (
        <Fragment>
            <CustomAppBar canSearch={true} onSearch={input => OnSearchClick(input)} />
            <div className={classes.root}>
                {recipes.length !== 0 ? 
                <Grid container spacing={1} justify='center'>
                    {recipes.map(recipe =>
                        <Grid item xs={6} sm={4} md={3} lg={2} key={recipe.url}>
                            <RecipeCard
                                title={recipe.label} subTitle={recipe.calories}
                                image={recipe.image} key={recipe.url}
                                onClick={() => OnClickItem(recipe)} />
                        </Grid>
                    )}
                </Grid> 
                : <p>Nothing found :(</p>}

            </div>
        </Fragment>
    )
}

const useStyles = makeStyles({
    root: {
        margin: 8,
        minHeight: '100vh',
    },
});
