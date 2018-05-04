import React, { Component } from 'react';
import '../scss/App.css';
import ProductsList from "./ProductsList";
import ProductsFilters from "./ProductsFilters";
import PageHeader from "./PageHeader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader/>
        <ProductsFilters/>
        <ProductsList/>
      </div>
    );
  }
}
export default App;
