import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {products} from '../../utilitys/products';
import Product from './Product';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class ProductsList extends React.Component {
    render () {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={16}>
                    {console.log(products)}
                    {
                        products.map(product=>(
                        <Product key={product.name} product={product} />
                        ))
                    }
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

ProductsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductsList)