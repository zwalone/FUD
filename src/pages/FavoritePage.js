import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';
import CustomAppBar from '../components/CustomAppBar';

export default function FavoritePage() {
    const classes = useStyles();

    return(
        <Fragment>
            <CustomAppBar onSearch={() => {}}/>
            <div className={classes.root}>
                <p>Favorite Page</p>
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