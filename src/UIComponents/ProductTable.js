import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {

    render() {
        var width = {
                        width: "20%"
        };

        var categories = [
            "Sporting Goods",
            "Electronics"
        ];

        var products = [
            {name:"Football", price:"$49.99"},
            {name:"Baseball", price:"$9.99"},
            {name:"Basketball", price:"$29.99"},
            {name:"Ipod Touch", price:"$99.99"},
            {name:"iPhone 5", price:"$399.99"},
            {name:"Nexus 7", price:"$199.99"}
        ];
        return (
            <div>
                <table style={width}>
                    <tr>
                        <th>Name</th>
                        <th>Price</th> 
                    </tr>
                    <ProductCategoryRow category={categories[0]}/>
                    <ProductRow product={products[0]}/>
                    <ProductRow product={products[1]}/>
                    <ProductRow product={products[2]}/>
                    <ProductCategoryRow category={categories[1]}/>
                    <ProductRow product={products[3]}/>
                    <ProductRow product={products[4]}/>
                    <ProductRow product={products[5]}/>
                </table>
            </div>
        );
    }
}

export default ProductTable;