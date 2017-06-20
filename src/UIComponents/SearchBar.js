import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="searchstr" value="Search.." /> <br />
                    <input type="checkbox" name="productsinstock" /> Only show products in stock.
                </form>
            </div>
        );
    }
}

export default SearchBar;