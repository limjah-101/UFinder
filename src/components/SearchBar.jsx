import React, { Component } from 'react';
import '../index.css';

class SearchBar extends Component {
    state = { 
        searchTerm: ''
    }
    onInputChange = e => {
        let inputValue = e.target.value;
        this.setState({ searchTerm: inputValue })
        
    }
    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.searchTerm);        
        this.setState({ searchTerm: '' });        
    }
    render() { 
        return ( 
            <div className="searchBar">
                <form onSubmit={this.onFormSubmit}>
                    <h3>Search video</h3>
                    <input 
                        type="text" 
                        value={this.state.searchTerm}
                        onChange={ this.onInputChange }
                    />                    
                </form>
            </div>
        );
    }
}
 
export default SearchBar;