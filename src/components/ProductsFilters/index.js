import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import { ListItemText } from 'material-ui/List';
import Select from 'material-ui/Select';
import Checkbox from 'material-ui/Checkbox';
import Chip from 'material-ui/Chip';
import { colors } from '../../utilitys/constants/colors';
import { categories } from '../../utilitys/constants/categories';
import { styles } from './styles';
import { MenuProps } from './MenuProps';
import { addColor } from '../../actions/color.actions';
import { addCategory } from '../../actions/category.actions';
import { connect } from 'react-redux';

class ProductsFilters extends React.Component {
    state = {
        color: [],
        category: [],
    };

    handleChangeColor = event => {
        // console.log({ color: event.target.value });
        const { dispatch } = this.props;
        dispatch(addColor({ color: event.target.value }));
        this.setState({ color: event.target.value });
    };
    handleChangeCategory = event => {
        const { dispatch } = this.props;
        dispatch(addCategory({ category: event.target.value }));
        this.setState({ category: event.target.value });
    };

    render () {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-checkbox">Color</InputLabel>
                    <Select
                        multiple
                        value={this.state.color}
                        onChange={this.handleChangeColor}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => (
                            <div className={classes.chips}>
                                {selected.map(value => <Chip key={value} label={value} className={classes.chip} />)}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {colors.map(color => (
                            <MenuItem key={color} value={color}>
                                <Checkbox checked={this.state.color.indexOf(color) > -1} />
                                <ListItemText primary={color} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-checkbox">Category</InputLabel>
                    <Select
                        multiple
                        value={this.state.category}
                        onChange={this.handleChangeCategory}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => (
                            <div className={classes.chips}>
                                {selected.map(value => <Chip key={value} label={value} className={classes.chip} />)}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {categories.map(category => (
                            <MenuItem key={category} value={category}>
                                <Checkbox checked={this.state.category.indexOf(category) > -1} />
                                <ListItemText primary={category} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        )
    }
}

ProductsFilters.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles, { withTheme: true })(ProductsFilters))