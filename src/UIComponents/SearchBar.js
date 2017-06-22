import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckboxChanged = this.handleCheckboxChanged.bind(this);
        this.handleSearchStringChanged = this.handleSearchStringChanged.bind(this);
    }

    render() {
        //var stateVars = this.props.stateVars;
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={this.props.stateVars.filterText}
                        onChange={this.handleSearchStringChanged}/> 
                        <br />
                    <input 
                        type="checkbox" 
                        checked={this.props.stateVars.inStockOnly}
                        onChange={this.handleCheckboxChanged}/>
                        {' '}
                        Only show products in stock.
                </form>
            </div>
        );
    }

    handleCheckboxChanged(event) {
        this.props.updateCheckboxState(event.target.checked);
    }

    handleSearchStringChanged(event) {
        this.props.updateSearchboxText(event.target.value);
    }
}

export default SearchBar;