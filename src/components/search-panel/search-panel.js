import React, { Component } from 'react';
import './search-panel.css';


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    // Одинаковые названия функций 1 работать будет локально, 2 приходит из другого компонента
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term)
    }
    
    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                // Локальная
                onChange={this.onUpdateSearch}
                />
        )
    }
}

export default SearchPanel;