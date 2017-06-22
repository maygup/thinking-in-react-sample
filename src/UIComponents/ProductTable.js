import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {

    render() {
        var width = {
            width: "20%"
        };

        var pdata = this.props.ptprops.jsonData;
        var stateVars = this.props.ptprops.stateVars;
        var rowsByCats = {};
        var rowsByCatsFiltered = {};

        pdata.forEach(function(item, index, array) {
            //console.log(item, index);
            if(!rowsByCats.hasOwnProperty(item.category)) {
                rowsByCats[item.category] = [];
            }

            var productdata = {};
            productdata.name = item.name;
            productdata.price = item.price;
            productdata.stocked = item.stocked;
            
            if(stateVars.inStockOnly && item.stocked === false) {
                return;
            }

            if(item.name.includes(stateVars.filterText) === false) {
                return;
            }

            rowsByCats[item.category].push(
                <ProductRow product={productdata} />
            );
        });

        let rows = [];
        let categories = Object.getOwnPropertyNames(rowsByCats);

        categories.forEach(function(item, index, array) {
            if(rowsByCats[item].length > 0) {
                rows.push(
                    <ProductCategoryRow category={item} />
                );

                rowsByCats[item].forEach(function(item, index, array){
                    rows.push(item);
                });
            }
        });

        var tableHeader = <tr>
                            <th>Name</th>
                            <th>Price</th>
                          </tr>;
        var table = <div>
                        <table style={width}>
                            {tableHeader}
                            {rows}
                        </table>
                    </div>
        return table;
    }
}

export default ProductTable;