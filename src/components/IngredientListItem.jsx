// Custom App Bar with a "Recipes" title and clickable SearchIcon,
// which is responsible for showing Search Bar. The component has
// been implemented on the basis of: https://material-ui.com/components/app-bar/



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox';


const PurpleCheckBox = styled(Checkbox)`
            color: #6200EE !important;
            backgroundColor: #6200EE !important;
`


export function IngredientListItem({checkable,ingredient, setChecked}) {
    const classes = useClasses();
    
    return (
      <div className={classes.root}>
        <div className={classes.lineKeeper}>
          {checkable && (
            <PurpleCheckBox
              checked={ingredient.checked}
              onChange={() => {
                setChecked();
                console.log(ingredient.checked);
              }}
              className={classes.checkBox}
            />
          )}
            <div className={classes.name}>{ingredient.name.length > 45
              ? ingredient.name.slice(0, 43) + "..."
              : ingredient.name}</div>
        </div>
      </div>
    );
}


const useClasses = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  separator: {
    height: "1px",
    backgroundColor: "#999999",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "12px",
    marginBottom: "0px",
  },
  invisibleSeparator: {
    height: "1px",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "12px",
    marginBottom: "0px",
  },
  lineKeeper: {
    width: "100%",
    height: "30px",
    clear: "both",
  },
  checkBox: {
    float: "left",
  },
  name: {
    float: "left",
    fontSize: "12px",
    marginTop: "15px",
    marginBottom: "15px",
  },
}));
  