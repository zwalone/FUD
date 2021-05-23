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
        {checkable && (
          <>
            <PurpleCheckBox
              checked={ingredient.checked}
              onChange={() => {
                setChecked();
              }}
              className={classes.checkBox}
            />
            <div className={classes.nameCheckable}>{ingredient.name}</div>
          </>
        )}
        {!checkable && (
          <div className={classes.name}>{ingredient.name}</div>
        )}
      </div>
    );
}

const useClasses = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
  },
  checkBox: {
    paddingRight: "0.5em",
  },
  nameCheckable: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontSize: "1em",
  },
  name: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontSize: "1em",
    paddingLeft: "1em",
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
  },
}));