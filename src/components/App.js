import React, {Component} from 'react';
import ProductsList from "./ProductsList";
import ProductsFilters from "./ProductsFilters";
import PageHeader from "./PageHeader";
import CssBaseline from 'material-ui/CssBaseline';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <PageHeader/>
                <ProductsFilters/>
                <ProductsList/>
            </React.Fragment>
        );
    }
}
export default App;
