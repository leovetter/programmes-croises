import React from 'react';
import './cell.css';

class Cell extends React.Component {

    render() {

        return (
            <td className={`cell column${this.props.column} 
                                        ${this.props.isColumOver ? 'over' : ''}
                                        ${this.props.isRowOver ? 'over' : ''}
                                        ${this.props.isCellOver ? 'cell-over' : ''}
                                        ${!this.props.isVisible ? 'cell-min' : ''}`}
                onMouseOver={() => this.props.onMouseOver()}
                onMouseOut={() => this.props.onMouseOut()}>propositions</td>
        );
    }
}

export default Cell;