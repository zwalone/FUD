import { makeStyles } from '@material-ui/core/styles';
import * as storage from '../utils/storage';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import CustomAppBar from '../components/CustomAppBar';

export default function FavoritePage() {
    const classes = useStyles();
    const favs = storage.getItem('favourites');
    const history = useHistory();

    const OnClickItem = (item) => {
        let lastSegment = item.uri.split("#").pop();
        history.push({ pathname: '/recipeDetails/' + lastSegment, state: { recipe: item } });
    }

    const createRecipeDetails = () => {
        if (favs === null)
            return [];
        var result = [];
        for (let key in favs) {
            let val = favs[key];
            result.push(
                <Grid item xs={6} sm={4} md={3} lg={2} key={val.url}>
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
            <CustomAppBar canSearch={false}/>
            <div className={classes.root}>
                <Grid container spacing={1} justify='center'>
                    {createRecipeDetails()}
                </Grid>
            </div>
        </>
    );
}

const useStyles = makeStyles({
    root: {
        margin: 8,
        minHeight: '100vh',
    },
});
