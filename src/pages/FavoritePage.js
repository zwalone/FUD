import { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import * as st from '../storage';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { RecipeDataContext } from '../data/RecipeDataContext';

export default function FavoritePage() {
    const classes = useStyles();
    const fv = st.getItem("favourites");
    const { setCurrentRecipe } = useContext(RecipeDataContext);
    const history = useHistory();

    const OnClickItem = (item) => {
        setCurrentRecipe(item);
        history.push({ pathname: '/recipeDetails' })
    }

    const createRecipeDetails = () => {
        if (fv === null)
            return [];
        var result = [];
        for (let key in fv) {
            let val = fv[key];
            result.push(

                <Grid item xs={6} key={val.url}>
                    <RecipeCard
                        title={val.label} subTitle={val.calories}
                        image={val.image} key={val.url}
                        onClick={() => OnClickItem(val)} />
                </Grid>
            )
        }
        return result;
    }

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={1} justify='center'>
                    {createRecipeDetails()}
                </Grid>
            </div>
        </>
    )
}

const useStyles = makeStyles({
    root: {
        margin: 8,
        minHeight: '100vh',
    },
});