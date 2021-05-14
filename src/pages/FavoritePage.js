import { Fragment } from 'react';
import CustomAppBar from '../components/CustomAppBar';

export default function FavoritePage() {
    return(
        <Fragment>
            <CustomAppBar onSearch={() => {}}/>
            <p>Favorite Page</p>
        </Fragment>
    )
}