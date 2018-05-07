import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {products} from '../../utilitys/constants/products';
import Product from './Product';
import Grid from 'material-ui/Grid';
import { styles } from './style';
import { connect } from 'react-redux';


class ProductsList extends React.Component {

    categoriesFilter(product, categories){
        return categories && categories.length > 0
            ? categories.some(category => category === product.category)
            : true
    }
    colorsFilter(product, colors){

        return colors && colors.length > 0
            ? colors.some(color => product[`${color}`] )
            : true
    }
    render () {
        const { classes, colors, categories } = this.props;
        // const categories = [];
        // const colors = [];
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

const mapStateToProps = state => ({
    colors: state.color
});

export default connect(mapStateToProps)(withStyles(styles)(ProductsList))