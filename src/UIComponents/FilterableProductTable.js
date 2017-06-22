import React from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            inStockOnly: false
        };

        this.handleUpdateCheckboxStateChange = this.handleUpdateCheckboxStateChange.bind(this);
        this.handleUpdateSearchboxTextChange = this.handleUpdateSearchboxTextChange.bind(this);
    }

    render() {
        var response = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ];
        var apiData = response;
        var productTableProps = {
            jsonData: apiData,
            stateVars: this.state
        };
        return (
            <div>
                <SearchBar 
                    stateVars={this.state} 
                    updateCheckboxState={this.handleUpdateCheckboxStateChange} 
                    updateSearchboxText={this.handleUpdateSearchboxTextChange}/>
                <ProductTable 
                    ptprops={productTableProps}/>
            </div>
        );
    }

    handleUpdateCheckboxStateChange(check) {
        this.setState({
            inStockOnly: check
        });
    }

    handleUpdateSearchboxTextChange(text) {
        this.setState({
            filterText: text
        });
    }
}

export default FilterableProductTable;