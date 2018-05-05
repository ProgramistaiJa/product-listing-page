import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from 'material-ui/Grid';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import orange from 'material-ui/colors/orange';
import red from 'material-ui/colors/red';
import grey from 'material-ui/colors/grey';
import indigo from 'material-ui/colors/indigo';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
        color: theme.palette.getContrastText(grey[800]),
        backgroundColor: grey[800],
        '&:hover': {
            backgroundColor: grey[900],
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
});


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: props.product.domino.image,
            price: props.product.domino.price
        };
        this.handleClickScout = this.handleClickScout.bind(this);
        this.handleClickDomino = this.handleClickDomino.bind(this);
        this.handleClickBebop = this.handleClickBebop.bind(this);
        this.handleClickJetty = this.handleClickJetty.bind(this);
    }


    handleClickScout() {
        const {product} = this.props;
        this.setState({
            image: `${product.scout.image}`,
            price: `${product.scout.price}`
        })
    }

    handleClickDomino() {
        const {product} = this.props;
        this.setState({
            image: `${product.domino.image}`,
            price: `${product.domino.price}`
        })
    }

    handleClickBebop() {
        const {product} = this.props;
        this.setState({
            image: `${product.bebop.image}`,
            price: `${product.bebop.price}`
        })
    }

    handleClickJetty() {
        const {product} = this.props;
        this.setState({
            image: `${product.jetty.image}`,
            price: `${product.jetty.price}`
        })
    }

    render() {
        const {product, classes} = this.props;
        return (
            <Grid item>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={`/static/images/products/${product.category}/${this.state.image}`}
                        title={`${product.name}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {product.name}
                        </Typography>
                        <Typography component="p">
                            {this.state.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            className={classNames(classes.button, classes.cssDomino)}
                            mini
                            variant="fab"
                            color="primary"
                            aria-label="add"
                            onClick={this.handleClickDomino}
                        >d</Button>
                        <Button
                            className={classNames(classes.button, classes.cssScout)}
                            mini
                            variant="fab"
                            color="scout"
                            aria-label="add"
                            onClick={this.handleClickScout}
                        >s</Button>
                        <Button
                            className={classNames(classes.button, classes.cssBebop)}
                            mini
                            variant="fab"
                            color="bebop"
                            aria-label="add"
                            onClick={this.handleClickBebop}
                        >b</Button>
                        <Button
                            className={classNames(classes.button, classes.cssJetty)}
                            mini
                            variant="fab"
                            color="jetty"
                            aria-label="add"
                            onClick={this.handleClickJetty}
                        >j</Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}

Product.propTypes = {
    classes: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired,
};

export default withStyles(styles)(Product)