import React from 'react';
import './first-cell.css';

class FirstCell extends React.Component {

    render() {

        return (
            <td className={`first-cell column${this.props.column} ${this.props.isColumOver ? 'over' : ''} ${this.props.isRowOver ? 'over' : ''} ${this.props.isCellOver ? 'cell-over' : ''}`} 
                onMouseOver={() => this.props.onMouseOver()}
                onMouseOut={() => this.props.onMouseOut()}>EELV</td>
        )
    }
}

export default FirstCell;