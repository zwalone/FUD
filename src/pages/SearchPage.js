// GridList based on: https://material-ui.com/components/grid-list/

import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import RecipeCard from '../components/RecipeCard';

export default function SearchPage({recipes}) {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.root}>
                <GridList className={classes.gridList}>
                {recipes.map(recipe => <RecipeCard
                    title={recipe.label} subTitle={recipe.calories} 
                    image={recipe.image} key={recipe.uri} 
                    onClick={() => {}}/>)}
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