import React, { Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import RecipeCard from '../components/RecipeCard';
import CustomAppBar from '../components/CustomAppBar';
import { RecipeDataContext } from '../data/RecipeDataContext';

// GridList used in this component bases on: https://material-ui.com/components/grid-list/
export default function SearchPage() {
    const classes = useStyles();
    const { recipes, setPhrase } = useContext(RecipeDataContext);
    return (
        <Fragment>
            <CustomAppBar onSearch={input => setPhrase(input)}/>
            <div className={classes.root}>
                <GridList className={classes.gridList}>
                {recipes.map(recipe => <RecipeCard
                    title={recipe.label} subTitle={recipe.calories} 
                    image={recipe.image} key={recipe.url} 
                    onClick={() => {console.log(recipe)}}/>)}
                </GridList>
            </div>
        </Fragment>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      marginTop: '5pt',
      marginBottom: '5pt'
    },
    gridList: {
      width: '100vw',
      height: '85vh',
      justifyContent: 'center'
    }
}))