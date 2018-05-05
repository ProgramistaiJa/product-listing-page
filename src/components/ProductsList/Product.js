import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import ColorsButtons from "./ColorsButtons";
import {styles} from './style'


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: props.product.domino.image,
            price: props.product.domino.price
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, image, price) {
        this.setState({
            image: `${image}`,
            price: `${price}`
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
                    <ColorsButtons
                        product={product}
                        classes={classes}
                        handleClick={this.handleClick}
                    />
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