import React from 'react';
import './header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isOver: false
        };
    }

    render() {

        return (
            <th className={`head column${this.props.column} 
                                        ${this.props.isColumOver ? 'head-over' : ''} 
                                        ${this.state.isOver ? 'head-over' : ''}
                                        ${!this.props.isVisible ? 'head-min' : ''}`}
                onMouseOver={ () => this.setState({ isOver: true })}
                onMouseOut={ () => this.setState({ isOver: false })}><span>{ this.props.name }</span></th>
        )
    }
}

export default Header;
