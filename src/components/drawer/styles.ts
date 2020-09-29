import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
    },
    list: {
      width: 300,
    },
    header: {
      fontSize: 20,
      display: "flex",
      justifyContent: "space-between",
    },
    color: {
      width: 50,
      height: 30,
      textAlign: "center",
      paddingTop: 17,
      marginRight: 50,
      marginBottom: 10,
    },
  })
);

export default useStyles;
