import RecipeCard from '../components/RecipeCard'
import React from 'react';
import CustomAppBar from '../components/CustomAppBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

//This Example is testing screen, after create list screen fell free to delete this.
//There is only example how to pass OnClickItem method and where add json item.
export default function Example () {

    const styles = useStyles();
    let history = useHistory();

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

    //Pass there json item to render. 
    //Item is comes from RecipeCard, if there will be store this json use item.
    //Another delete this
    const OnClickItem = (item) => {
        history.push({
            pathname: '/recipeDetail',
            state: {
                json: recipe
            }
        })
    }

    return (
        <div className={styles.container}>
            <CustomAppBar search={(output) => console.log(output)}/>

            <h2>There is only example for testing navigation between item list and RecipeDetails</h2>
            <RecipeCard 
                title="test" 
                subTitle="subtitle"
                image="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg" 
                onClick={OnClickItem}
            />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: 50,
    },
}))