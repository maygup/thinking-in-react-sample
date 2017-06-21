import React from 'react';

class ProductRow extends React.Component {

    render() {
        var stocked = this.props.product.stocked;
        var stockedstyle;
        if(!stocked) {
            stockedstyle = { color: "red" };
        } else {
            stockedstyle = {};
        }
        
        return (
            <tr style={stockedstyle}>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}

export default ProductRow;