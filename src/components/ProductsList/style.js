import orange from "material-ui/colors/orange";
import grey from "material-ui/colors/grey";
import indigo from "material-ui/colors/indigo";
import red from "material-ui/colors/red";

export const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    // paper: {
    //     height: 140,
    //     width: 100,
    //     padding: theme.spacing.unit * 2,
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // },
    card: {
        width: 400,
        height: 450,
        padding: 10
    },
    media: {
        height: 0,
        paddingTop: '75%', // 4:9
    },
    button: {
        margin: theme.spacing.unit,

    },
    cssScout: {
        color: theme.palette.getContrastText(orange[500]),
        backgroundColor: orange[500],
        '&:hover': {
            backgroundColor: orange[700],
        },
    },
    cssDomino: {
        color: theme.palette.getContrastText(grey[600]),
        backgroundColor: grey[600],
        '&:hover': {
            backgroundColor: grey[700],
        },
    },
    cssBebop: {
        color: theme.palette.getContrastText(red[600]),
        backgroundColor: red[600],
        '&:hover': {
            backgroundColor: red[700],
        },
    },
    cssJetty: {
        color: theme.palette.getContrastText(indigo[600]),
        backgroundColor: indigo[600],
        '&:hover': {
            backgroundColor: indigo[700],
        },
    },
    cssBB: {
        color: theme.palette.getContrastText(grey[800]),
        backgroundColor: grey[800],
        '&:hover': {
            backgroundColor: grey[900],
        },
    },
});