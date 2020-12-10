import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 360,
    margin: "auto",
  },
}));

const DisplayList = ({ selectedSongs, onRemoveSong, validate }) => {
  const classes = useStyles();
  const displayList =
    selectedSongs.length === 0 ? (
      <Typography color="textSecondary">
        No song selected
      </Typography>
    ) : (
      <List dense="true" className={classes.root}>
        {selectedSongs.map((song, index) => (
          <ListItem key={index}>
            <ListItemText primary={song} />
            <IconButton aria-label="delete" onClick={() => onRemoveSong(song)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    );
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Selected songs
        </Typography>
        {displayList}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => validate()}>
          Validate
        </Button>
      </CardActions>
    </Card>
  );
};

DisplayList.propTypes = {
  selectedSongs: PropTypes.array.isRequired,
  onRemoveSong: PropTypes.func.isRequired,
};

export default DisplayList;
