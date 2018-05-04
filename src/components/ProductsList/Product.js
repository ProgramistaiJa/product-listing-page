import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

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
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            image: props.product.images.domino
        };
        this.handleClickScout = this.handleClickScout.bind(this);
        this.handleClickDomino = this.handleClickDomino.bind(this);
        this.handleClickBebop = this.handleClickBebop.bind(this);
        this.handleClickJetty = this.handleClickJetty.bind(this);
    }


    handleClickScout () {
        const { product } = this.props;
        this.setState({image: `${product.images.scout}`})
    }
    handleClickDomino () {
        const { product } = this.props;
        this.setState({image: `${product.images.domino}`})
    }
    handleClickBebop () {
        const { product } = this.props;
        this.setState({image: `${product.images.bebop}`})
    }
    handleClickJetty () {
        const { product } = this.props;
        this.setState({image: `${product.images.jetty}`})
    }

    render () {
        const { product, classes } = this.props;
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
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            className={classes.button}
                            mini
                            variant="fab"
                            color="primary"
                            aria-label="add"
                            onClick={this.handleClickDomino}
                        >d</Button>
                        <Button
                            className={classes.button}
                            mini
                            variant="fab"
                            color="primary"
                            aria-label="add"
                            onClick={this.handleClickScout}
                        >s</Button>
                        <Button
                            className={classes.button}
                            mini
                            variant="fab"
                            color="primary"
                            aria-label="add"
                            onClick={this.handleClickBebop}
                        >b</Button>
                        <Button
                            className={classes.button}
                            mini
                            variant="fab"
                            color="primary"
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