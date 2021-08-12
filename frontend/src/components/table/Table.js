import Header from '../header/Header';
import FirstCell from '../first-cell/FirstCell';
import Cell from '../cell/Cell';
import React from 'react';
import './table.css';
import ProgrammesService from '../../services/programmes.service';

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: Array(10).fill(null),
            rows: Array(7).fill(null),
            cells: Array(9*7).fill(null),
            themes: [],
            partis: []
        };
    }

    componentDidMount( ) {
        
        const programmesService = new ProgrammesService();

        programmesService.themes$.subscribe(themes => {

            this.setState({
                themes
            });
        })

        programmesService.partis$.subscribe(partis => {

            console.log(partis)
            this.setState({
                partis
            });
        })
    }
    
    renderHeaders() {

        const headers = [
            <Header isColumOver={this.state.columns[1]} column={1} name={''}></Header>
        ]
        for(let i = 0; i < this.state.themes.length; i++) {

            headers.push(<Header isColumOver={this.state.columns[i+2]} column={i+2} name={this.state.themes[i]}></Header>)
        };

        return headers;
    }

    renderFirstCell(rowIndex) {

        return <FirstCell parti={this.state.partis[rowIndex-1]} isCellOver={ this.state.cells[10*rowIndex*1] }isRowOver={ this.state.rows[rowIndex] } isColumOver={this.state.columns[1]} column={1} onMouseOver={() => this.handleMouseOver(1, rowIndex)} onMouseOut={ () => this.handleMouseOut(1, rowIndex)}></FirstCell>;
    }

    render() {

        return (
            <table>
                <thead>
                    <tr>
                        { 
                            this.renderHeaders()
                        }
                    </tr>
                </thead>
                 <tbody>
                    <tr>
                        { this.renderFirstCell(1) }
                        <Cell isCellOver={ this.state.cells[1*2] }isRowOver={ this.state.rows[1] } isColumOver={this.state.columns[2]} column={2} onMouseOver={() => this.handleMouseOver(2, 1)} onMouseOut={ () => this.handleMouseOut(2, 1)}></Cell>
                        <Cell isCellOver={ this.state.cells[1*3] }isRowOver={ this.state.rows[1] } isColumOver={this.state.columns[3]} column={3} onMouseOver={() => this.handleMouseOver(3, 1)} onMouseOut={ () => this.handleMouseOut(3, 1)}></Cell>
                        <Cell isCellOver={ this.state.cells[1*4] }isRowOver={ this.state.rows[1] } isColumOver={this.state.columns[4]} column={4} onMouseOver={() => this.handleMouseOver(4, 1)} onMouseOut={ () => this.handleMouseOut(4, 1)}></Cell>
                        <Cell isCellOver={ this.state.cells[1*5] }isRowOver={ this.state.rows[1] } isColumOver={this.state.columns[5]} column={5} onMouseOver={() => this.handleMouseOver(5, 1)} onMouseOut={ () => this.handleMouseOut(5, 1)}></Cell>
                        <Cell isCellOver={ this.state.cells[1*6] }isRowOver={ this.state.rows[1] } isColumOver={this.state.columns[6]} column={6} onMouseOver={() => this.handleMouseOver(6, 1)} onMouseOut={ () => this.handleMouseOut(6, 1)}></Cell>
                        <Cell isCellOver={ this.state.cells[1*7] }isRowOver={ this.state.rows[1] } isColumOver={this.state.columns[7]} column={7} onMouseOver={() => this.handleMouseOver(7, 1)} onMouseOut={ () => this.handleMouseOut(7, 1)}></Cell>
                        <Cell isCellOver={ this.state.cells[1*8] }isRowOver={ this.state.rows[1] } isColumOver={this.state.columns[8]} column={8} onMouseOver={() => this.handleMouseOver(8, 1)} onMouseOut={ () => this.handleMouseOut(8, 1)}></Cell>
                        <Cell isCellOver={ this.state.cells[1*9] }isRowOver={ this.state.rows[1] } isColumOver={this.state.columns[9]} column={9} onMouseOver={() => this.handleMouseOver(9, 1)} onMouseOut={ () => this.handleMouseOut(9, 1)}></Cell>
                        <Cell isCellOver={ this.state.cells[1*10] }isRowOver={ this.state.rows[1] } isColumOver={this.state.columns[10]} column={10} onMouseOver={() => this.handleMouseOver(10, 1)} onMouseOut={ () => this.handleMouseOut(10, 1)}></Cell>
                    </tr>
                    <tr>
                        { this.renderFirstCell(2) }
                        <Cell isCellOver={ this.state.cells[10*1 + 2] }isRowOver={ this.state.rows[2] } isColumOver={this.state.columns[2]} column={2} onMouseOver={() => this.handleMouseOver(2, 2)} onMouseOut={ () => this.handleMouseOut(2, 2)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*1 + 3] }isRowOver={ this.state.rows[2] } isColumOver={this.state.columns[3]} column={3} onMouseOver={() => this.handleMouseOver(3, 2)} onMouseOut={ () => this.handleMouseOut(3, 2)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*1 + 4] }isRowOver={ this.state.rows[2] } isColumOver={this.state.columns[4]} column={4} onMouseOver={() => this.handleMouseOver(4, 2)} onMouseOut={ () => this.handleMouseOut(4, 2)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*1 + 5] }isRowOver={ this.state.rows[2] } isColumOver={this.state.columns[5]} column={5} onMouseOver={() => this.handleMouseOver(5, 2)} onMouseOut={ () => this.handleMouseOut(5, 2)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*1 + 6] }isRowOver={ this.state.rows[2] } isColumOver={this.state.columns[6]} column={6} onMouseOver={() => this.handleMouseOver(6, 2)} onMouseOut={ () => this.handleMouseOut(6, 2)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*1 + 7] }isRowOver={ this.state.rows[2] } isColumOver={this.state.columns[7]} column={7} onMouseOver={() => this.handleMouseOver(7, 2)} onMouseOut={ () => this.handleMouseOut(7, 2)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*1 + 8] }isRowOver={ this.state.rows[2] } isColumOver={this.state.columns[8]} column={8} onMouseOver={() => this.handleMouseOver(8, 2)} onMouseOut={ () => this.handleMouseOut(8, 2)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*1 + 9] }isRowOver={ this.state.rows[2] } isColumOver={this.state.columns[9]} column={9} onMouseOver={() => this.handleMouseOver(9, 2)} onMouseOut={ () => this.handleMouseOut(9, 2)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*1 + 10] }isRowOver={ this.state.rows[2] } isColumOver={this.state.columns[10]} column={10} onMouseOver={() => this.handleMouseOver(10, 2)} onMouseOut={ () => this.handleMouseOut(10, 2)}></Cell>
                    </tr>
                    <tr>
                        { this.renderFirstCell(3) }
                        <Cell isCellOver={ this.state.cells[10*2 + 2] }isRowOver={ this.state.rows[3] } isColumOver={this.state.columns[2]} column={2} onMouseOver={() => this.handleMouseOver(2, 3)} onMouseOut={ () => this.handleMouseOut(2, 3)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*2 + 3] }isRowOver={ this.state.rows[3] } isColumOver={this.state.columns[3]} column={3} onMouseOver={() => this.handleMouseOver(3, 3)} onMouseOut={ () => this.handleMouseOut(3, 3)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*2 + 4] }isRowOver={ this.state.rows[3] } isColumOver={this.state.columns[4]} column={4} onMouseOver={() => this.handleMouseOver(4, 3)} onMouseOut={ () => this.handleMouseOut(4, 3)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*2 + 5] }isRowOver={ this.state.rows[3] } isColumOver={this.state.columns[5]} column={5} onMouseOver={() => this.handleMouseOver(5, 3)} onMouseOut={ () => this.handleMouseOut(5, 3)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*2 + 6] }isRowOver={ this.state.rows[3] } isColumOver={this.state.columns[6]} column={6} onMouseOver={() => this.handleMouseOver(6, 3)} onMouseOut={ () => this.handleMouseOut(6, 3)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*2 + 7] }isRowOver={ this.state.rows[3] } isColumOver={this.state.columns[7]} column={7} onMouseOver={() => this.handleMouseOver(7, 3)} onMouseOut={ () => this.handleMouseOut(7, 3)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*2 + 8] }isRowOver={ this.state.rows[3] } isColumOver={this.state.columns[8]} column={8} onMouseOver={() => this.handleMouseOver(8, 3)} onMouseOut={ () => this.handleMouseOut(8, 3)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*2 + 9] }isRowOver={ this.state.rows[3] } isColumOver={this.state.columns[9]} column={9} onMouseOver={() => this.handleMouseOver(9, 3)} onMouseOut={ () => this.handleMouseOut(9, 3)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*2 + 10] }isRowOver={ this.state.rows[3] } isColumOver={this.state.columns[10]} column={10} onMouseOver={() => this.handleMouseOver(10, 3)} onMouseOut={ () => this.handleMouseOut(10, 3)}></Cell>
                    </tr>
                    <tr>
                        { this.renderFirstCell(4) }
                        <Cell isCellOver={ this.state.cells[10*3 + 2] }isRowOver={ this.state.rows[4] } isColumOver={this.state.columns[2]} column={2} onMouseOver={() => this.handleMouseOver(2, 4)} onMouseOut={ () => this.handleMouseOut(2, 4)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*3 + 3] }isRowOver={ this.state.rows[4] } isColumOver={this.state.columns[3]} column={3} onMouseOver={() => this.handleMouseOver(3, 4)} onMouseOut={ () => this.handleMouseOut(3, 4)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*3 + 4] }isRowOver={ this.state.rows[4] } isColumOver={this.state.columns[4]} column={4} onMouseOver={() => this.handleMouseOver(4, 4)} onMouseOut={ () => this.handleMouseOut(4, 4)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*3 + 5] }isRowOver={ this.state.rows[4] } isColumOver={this.state.columns[5]} column={5} onMouseOver={() => this.handleMouseOver(5, 4)} onMouseOut={ () => this.handleMouseOut(5, 4)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*3 + 6] }isRowOver={ this.state.rows[4] } isColumOver={this.state.columns[6]} column={6} onMouseOver={() => this.handleMouseOver(6, 4)} onMouseOut={ () => this.handleMouseOut(6, 4)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*3 + 7] }isRowOver={ this.state.rows[4] } isColumOver={this.state.columns[7]} column={7} onMouseOver={() => this.handleMouseOver(7, 4)} onMouseOut={ () => this.handleMouseOut(7, 4)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*3 + 8] }isRowOver={ this.state.rows[4] } isColumOver={this.state.columns[8]} column={8} onMouseOver={() => this.handleMouseOver(8, 4)} onMouseOut={ () => this.handleMouseOut(8, 4)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*3 + 9] }isRowOver={ this.state.rows[4] } isColumOver={this.state.columns[9]} column={9} onMouseOver={() => this.handleMouseOver(9, 4)} onMouseOut={ () => this.handleMouseOut(9, 4)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*3 + 10] }isRowOver={ this.state.rows[4] } isColumOver={this.state.columns[10]} column={10} onMouseOver={() => this.handleMouseOver(10, 4)} onMouseOut={ () => this.handleMouseOut(10, 4)}></Cell>
                    </tr>
                    <tr>
                        <FirstCell isCellOver={ this.state.cells[10*4 + 1] }isRowOver={ this.state.rows[5] } isColumOver={this.state.columns[1]} column={1} onMouseOver={() => this.handleMouseOver(1, 5)} onMouseOut={ () => this.handleMouseOut(1, 5)}></FirstCell>
                        <Cell isCellOver={ this.state.cells[10*4 + 2] }isRowOver={ this.state.rows[5] } isColumOver={this.state.columns[2]} column={2} onMouseOver={() => this.handleMouseOver(2, 5)} onMouseOut={ () => this.handleMouseOut(2, 5)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*4 + 3] }isRowOver={ this.state.rows[5] } isColumOver={this.state.columns[3]} column={3} onMouseOver={() => this.handleMouseOver(3, 5)} onMouseOut={ () => this.handleMouseOut(3, 5)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*4 + 4] }isRowOver={ this.state.rows[5] } isColumOver={this.state.columns[4]} column={4} onMouseOver={() => this.handleMouseOver(4, 5)} onMouseOut={ () => this.handleMouseOut(4, 5)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*4 + 5] }isRowOver={ this.state.rows[5] } isColumOver={this.state.columns[5]} column={5} onMouseOver={() => this.handleMouseOver(5, 5)} onMouseOut={ () => this.handleMouseOut(5, 5)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*4 + 6] }isRowOver={ this.state.rows[5] } isColumOver={this.state.columns[6]} column={6} onMouseOver={() => this.handleMouseOver(6, 5)} onMouseOut={ () => this.handleMouseOut(6, 5)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*4 + 7] }isRowOver={ this.state.rows[5] } isColumOver={this.state.columns[7]} column={7} onMouseOver={() => this.handleMouseOver(7, 5)} onMouseOut={ () => this.handleMouseOut(7, 5)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*4 + 8] }isRowOver={ this.state.rows[5] } isColumOver={this.state.columns[8]} column={8} onMouseOver={() => this.handleMouseOver(8, 5)} onMouseOut={ () => this.handleMouseOut(8, 5)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*4 + 9] }isRowOver={ this.state.rows[5] } isColumOver={this.state.columns[9]} column={9} onMouseOver={() => this.handleMouseOver(9, 5)} onMouseOut={ () => this.handleMouseOut(9, 5)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*4 + 10] }isRowOver={ this.state.rows[5] } isColumOver={this.state.columns[10]} column={10} onMouseOver={() => this.handleMouseOver(10, 5)} onMouseOut={ () => this.handleMouseOut(10, 5)}></Cell>
                    </tr>
                    <tr>
                        <FirstCell isCellOver={ this.state.cells[10*5 + 1] }isRowOver={ this.state.rows[6] } isColumOver={this.state.columns[1]} column={1} onMouseOver={() => this.handleMouseOver(1,)} onMouseOut={ () => this.handleMouseOut(1,)}></FirstCell>
                        <Cell isCellOver={ this.state.cells[10*5 + 2] }isRowOver={ this.state.rows[6] } isColumOver={this.state.columns[2]} column={2} onMouseOver={() => this.handleMouseOver(2,)} onMouseOut={ () => this.handleMouseOut(2,)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*5 + 3] }isRowOver={ this.state.rows[6] } isColumOver={this.state.columns[3]} column={3} onMouseOver={() => this.handleMouseOver(3,)} onMouseOut={ () => this.handleMouseOut(3,)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*5 + 4] }isRowOver={ this.state.rows[6] } isColumOver={this.state.columns[4]} column={4} onMouseOver={() => this.handleMouseOver(4,)} onMouseOut={ () => this.handleMouseOut(4,)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*5 + 5] }isRowOver={ this.state.rows[6] } isColumOver={this.state.columns[5]} column={5} onMouseOver={() => this.handleMouseOver(5,)} onMouseOut={ () => this.handleMouseOut(5,)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*5 + 6] }isRowOver={ this.state.rows[6] } isColumOver={this.state.columns[6]} column={6} onMouseOver={() => this.handleMouseOver(6,)} onMouseOut={ () => this.handleMouseOut(6,)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*5 + 7] }isRowOver={ this.state.rows[6] } isColumOver={this.state.columns[7]} column={7} onMouseOver={() => this.handleMouseOver(7,)} onMouseOut={ () => this.handleMouseOut(7,)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*5 + 8] }isRowOver={ this.state.rows[6] } isColumOver={this.state.columns[8]} column={8} onMouseOver={() => this.handleMouseOver(8,)} onMouseOut={ () => this.handleMouseOut(8,)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*5 + 9] }isRowOver={ this.state.rows[6] } isColumOver={this.state.columns[9]} column={9} onMouseOver={() => this.handleMouseOver(9,)} onMouseOut={ () => this.handleMouseOut(9,)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*5 + 10] }isRowOver={ this.state.rows[6] } isColumOver={this.state.columns[10]} column={10} onMouseOver={() => this.handleMouseOver(10,)} onMouseOut={ () => this.handleMouseOut(10,)}></Cell>
                    </tr>
                    <tr>
                        <FirstCell isCellOver={ this.state.cells[10*6 + 1] }isRowOver={ this.state.rows[7] } isColumOver={this.state.columns[1]} column={1} onMouseOver={() => this.handleMouseOver(1, 7)} onMouseOut={ () => this.handleMouseOut(1, 7)}></FirstCell>
                        <Cell isCellOver={ this.state.cells[10*6 + 2] }isRowOver={ this.state.rows[7] } isColumOver={this.state.columns[2]} column={2} onMouseOver={() => this.handleMouseOver(2, 7)} onMouseOut={ () => this.handleMouseOut(2, 7)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*6 + 3] }isRowOver={ this.state.rows[7] } isColumOver={this.state.columns[3]} column={3} onMouseOver={() => this.handleMouseOver(3, 7)} onMouseOut={ () => this.handleMouseOut(3, 7)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*6 + 4] }isRowOver={ this.state.rows[7] } isColumOver={this.state.columns[4]} column={4} onMouseOver={() => this.handleMouseOver(4, 7)} onMouseOut={ () => this.handleMouseOut(4, 7)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*6 + 5] }isRowOver={ this.state.rows[7] } isColumOver={this.state.columns[5]} column={5} onMouseOver={() => this.handleMouseOver(5, 7)} onMouseOut={ () => this.handleMouseOut(5, 7)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*6 + 6] }isRowOver={ this.state.rows[7] } isColumOver={this.state.columns[6]} column={6} onMouseOver={() => this.handleMouseOver(6, 7)} onMouseOut={ () => this.handleMouseOut(6, 7)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*6 + 7] }isRowOver={ this.state.rows[7] } isColumOver={this.state.columns[7]} column={7} onMouseOver={() => this.handleMouseOver(7, 7)} onMouseOut={ () => this.handleMouseOut(7, 7)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*6 + 8] }isRowOver={ this.state.rows[7] } isColumOver={this.state.columns[8]} column={8} onMouseOver={() => this.handleMouseOver(8, 7)} onMouseOut={ () => this.handleMouseOut(8, 7)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*6 + 9] }isRowOver={ this.state.rows[7] } isColumOver={this.state.columns[9]} column={9} onMouseOver={() => this.handleMouseOver(9, 7)} onMouseOut={ () => this.handleMouseOut(9, 7)}></Cell>
                        <Cell isCellOver={ this.state.cells[10*6 + 10] }isRowOver={ this.state.rows[7] } isColumOver={this.state.columns[10]} column={10} onMouseOver={() => this.handleMouseOver(10, 7)} onMouseOut={ () => this.handleMouseOut(10, 7)}></Cell>
                    </tr>
                 </tbody>
            </table>
                
        );
    }

    handleMouseOver(columnIndex, rowIndex) {
        const columns = this.state.columns.slice();    
        columns[columnIndex] = true;    
        this.setState({columns: columns});

        const rows = this.state.rows.slice();    
        rows[rowIndex] = true;    
        this.setState({rows: rows});

        const cells = this.state.cells.slice();    
        cells[10 * (rowIndex - 1) + columnIndex] = true;    
        this.setState({cells: cells});
    }

    handleMouseOut(columnIndex, rowIndex) {
        const columns = this.state.columns.slice();    
        columns[columnIndex] = false;
        this.setState({columns: columns});

        const rows = this.state.rows.slice();    
        rows[rowIndex] = false;    
        this.setState({rows: rows});

        const cells = this.state.cells.slice();    
        cells[10 * (rowIndex - 1) + columnIndex] = false;    
        this.setState({cells: cells});
    }
}

export default Table;