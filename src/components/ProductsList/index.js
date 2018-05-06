import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {products} from '../../utilitys/products';
import Product from './Product';
import Grid from 'material-ui/Grid';
import { styles } from './style'

// const styles = theme => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         height: 140,
//         width: 100,
//     },
//     control: {
//         padding: theme.spacing.unit * 2,
//     },
// });



class ProductsList extends React.Component {

    categoriesFilter(product, categories){
        return categories.length > 0
            ? categories.some(category => category === product.category)
            : true
    }
    colorsFilter(product, colors){
        colors.length>0 && console.log(product[`${colors[0]}`]);

        return colors.length > 0
            ? colors.some(color => product[`${color}`] )
            : true
    }
    render () {
        const { classes } = this.props;
        const categories = [];
        const colors = ["scout", "jetty"];
        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={16}>
                        {
                            products
                                .filter(product => this.categoriesFilter(product, categories))
                                .filter(product => this.colorsFilter(product, colors))
                                .map(product=>(
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