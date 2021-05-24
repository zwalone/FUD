import { makeStyles } from '@material-ui/core/styles';
import * as st from '../utils/storage';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

export default function FavoritePage() {
    const classes = useStyles();
    const fv = st.getItem("favourites");
    const history = useHistory();

    const OnClickItem = (item) => {
        let parts = item.uri.split('/');
        let lastSegment = parts.pop() || parts.pop(); //handle trailing slashes
        history.push({ pathname: '/recipeDetails/' + lastSegment, state: { recipe: item } })
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