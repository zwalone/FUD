import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//title: string,
//subtitle: string
//onClick: () => void 
//image: string, link to an image or image object (more info at https://material-ui.com/api/card-media/)
export default function RecipeCard ({ title, subTitle, image, onClick }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} 
            onClick={() => {onClick()}}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography variant="h6" align="left" noWrap={true}>
                        {title}
                    </Typography>
                    <Typography variant="body2" align="left">
                        {subTitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth: 192,
        height: 'fit-content'
    },
    media: {
        height: 194,
    },
});