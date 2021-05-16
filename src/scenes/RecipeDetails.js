import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { useHistory } from 'react-router-dom';

//Example JSON
const recipe = {
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872",
    title: "Egg Breakfast",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu ante, maximus eu dui sit amet, tempus mattis neque. Ut leo elit, gravida non sagittis ac, placerat id nibh. Donec volutpat urna ut laoreet venenatis. Nulla tempor lorem id venenatis maximus. Duis a leo vel neque auctor tincidunt. Donec ac dolor sed enim elementum tristique.",
    kcal: 320,
    sevings: 2,
    nutrients: [
      {label: "Calories", quantity: 320, unit: "kcal"},
      {label: "Protein", quantity: 30, unit: "gl"}, 
      {label: "Fat", quantity: 40, unit: "g"},
      {label: "Sugar", quantity: 85, unit: "g"},
      {label: "Sodium", quantity: 5, unit: "mg"},
      {label: "Carbohydrate ", quantity: 60, unit: "g"},
      {label: "Vitamin A", quantity: 2, unit: "ng"},
    ]
  }
//   <RecipeDetails
//   image={recipe.image}
//   title={recipe.title}
//   description={recipe.description}
//   nutrients={recipe.nutrients}
//   kcal={recipe.kcal} 
//   sevings={recipe.sevings}
// />

export default function RecipeDetails(props) {
    
    const styles = useStyles();
    const { image, title, description, nutrients, kcal, sevings } = props.location.state.json

    const history = useHistory()
    const OnClickClose = () => {
        history.goBack();
    }

    return (
        <div className={styles.container}>

            {/* {Image & icons} */}

            <div className={styles.imageBox}>
                <div className={styles.details}>
                    <Button onClick={() => OnClickClose()} className={styles.IconLeft}><CloseIcon /> </Button>
                    <Button className={styles.IconRight}><LinkIcon /> </Button>
                </div>
                <img className={styles.image} src={image} />
            </div>

             {/* {Title} */}

            <div className={styles.safeArea}>
                <Typography className={styles.title}>{title}</Typography>
                <div className={styles.details}>
                    <Typography className={styles.detailsLeft}>{kcal} kcal</Typography>
                    <Typography className={styles.detailsRight}>{sevings} sevings</Typography>
                </div>
            </div>

            {/* {Ingredients} */}

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography>Ingredients</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>List Of Ingredients</Typography>
                </AccordionDetails>
            </Accordion>

            {/* {Description} */}

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography>Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={styles.description}>{description}</Typography>
                </AccordionDetails>
            </Accordion>

            {/* {Nutrition} */}

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography>Nutrients Info</Typography>
                </AccordionSummary>
                <div className={styles.safeArea}>
                    {nutrients.map((e, key) => {
                        return (
                            <AccordionDetails key={key}>
                                <div className={styles.nutrition}>
                                    <Typography className={styles.detailsLeft}>{e.label}</Typography>
                                    <Typography className={styles.detailsRight}>{e.quantity} {e.unit}</Typography>
                                </div>
                            </AccordionDetails>
                        )
                    })}
                </div>
            </Accordion>

            {/* Add Favorites button */}

            <Fab className={styles.floatingButton}  color="secondary">
                <AddIcon />
            </Fab>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: 50,
    },
    imageBox: {
        position: 'relative',
        textAlign: 'center',
    },
    image: {
        width: '100%',
    },
    IconLeft: {
        position: 'absolute',
        top: '8px',
        left: '16px',
        color: 'white',
    },
    IconRight: {
        position: 'absolute',
        top: '8px',
        right: '16px',
        color: 'white',
    },
    title: {
        fontSize: 28,
        textAlign: 'start',
        fontWeight: 'bold'
    },
    safeArea: {
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 5,
        marginBottom: 50
    },
    details: {
        width: '100%',
        justifyContent: 'space-between',
    },
    nutrition: {
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: -15,
    },
    detailsLeft: {
        float: 'left',
        display: "inline",
        width: '48%',
        textAlign: 'start',
        fontSize: 15
    },
    detailsRight: {
        float: 'right',
        display: "inline",
        width: '48%',
        textAlign: 'end',
        fontSize: 15
    },
    description: {
        fontSize: 15,
        textAlign: 'start'
    },
    floatingButton: {
        position: 'fixed',
        bottom: 15,
        right: 15,
    }
}))
