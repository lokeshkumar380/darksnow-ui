import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Checkboxes from "./checkbox";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 700,
    height: 500
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  control: {
    padding: theme.spacing(8)
  }
}));

const tileData = [
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
    title: "Bird",
    author: "authorone"
  },
  {
    url:
      "https://images.bewakoof.com/uploads/grid/app/underslider-desk-1578655850.gif",
    title: "Bird",
    author: "author2"
  },
  {
    url:
      "https://images.bewakoof.com/uploads/grid/app/decade-desktop-1578548230.jpg",
    title: "Bird",
    author: "author3"
  },
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
    title: "Bird",
    author: "author4"
  },
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
    title: "Bird",
    author: "author5"
  },
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
    title: "Bird",
    author: "author6"
  }
];
export default function TitlebarGridList(props) {
  const [spacing, setSpacing] = React.useState(5);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} cols={4}>
        <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
          <ListSubheader component="div">Latest Designs</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.author} spacing={spacing}>
            <img src={tile.url} alt={tile.title}></img>
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <Checkboxes
                    value={tile}
                    onSelectImage={props.onSelectImage}
                  />
                  <Link href={tile.url}>
                    <InfoIcon />
                  </Link>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
