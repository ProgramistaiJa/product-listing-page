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

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 360,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const colors = [
    'BB',
    'Bebop',
    'Domino',
    'Jetty',
    'Scout',
];

const categories = [
    'Bags',
    'Backpacks',
    'Accessories',
    'Luggage',
];

class ProductsFilters extends React.Component {
    state = {
        color: [],
        category: [],
    };

    handleChangeColor = event => {
        this.setState({ color: event.target.value });
    };
    handleChangeCategory = event => {
        this.setState({ category: event.target.value });
    };

    render () {
        const { classes, theme } = this.props;
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

export default withStyles(styles, { withTheme: true })(ProductsFilters)