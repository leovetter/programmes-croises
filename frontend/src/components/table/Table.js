import Header from '../header/Header';
import FirstCell from '../first-cell/FirstCell';
import Cell from '../cell/Cell';
import React from 'react';
import './table.css';
import ProgrammesService from '../../services/programmes.service';
import { combineLatest } from 'rxjs';

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [],
            rows: [],
            cells: [],
            themes: [],
            partis: [],
            defaultColumns: []
        };
    }

    componentDidMount( ) {
        
        const programmesService = new ProgrammesService();

        combineLatest([
            programmesService.themes$,
            programmesService.partis$
        ]).subscribe(([themes, partis]) => {

            this.setState({
                partis
            });

            this.setState({
                themes
            });

            if (themes.length !== 0 && partis.length !== 0) {

                const defaultColumns = [];
                while(defaultColumns.length < 3) {
                    var r = Math.floor(Math.random() * themes.length - 1) + 1;
                    if (defaultColumns.indexOf(r) === -1) defaultColumns.push(r);
                }

                this.setState({
                    defaultColumns,
                    columns: Array(themes.length).fill(false),
                    rows: Array(partis.length).fill(false),
                    cells: Array(themes.length * partis.length).fill(false),
                });
            }
        })
    }
    
    renderHeaders() {

        const headers = [
            <Header isColumOver={this.state.columns[0]} column={0} name={''}></Header>
        ]
        for(let i = 1; i < this.state.themes.length; i++) {

            if (this.state.defaultColumns.includes(i)) {

                headers.push(<Header isColumOver={this.state.columns[i]} 
                                     column={i} 
                                     name={this.state.themes[i]}
                                     isVisible={true}>
                            </Header>)
            } else {
                headers.push(<Header isColumOver={this.state.columns[i]} 
                                     column={i} 
                                     name={this.state.themes[i]}
                                     isVisible={false}>
                            </Header>)
            }
            
        };

        return headers;
    }

    renderRow() {

        const rows = [];
        for(let i = 0; i < this.state.partis.length; i++) {

            const cells = [];
            for(let j = 0; j < this.state.themes.length; j++) {

                if(j === 0) {

                    cells.push(<FirstCell parti={this.state.partis[i]} 
                                        isCellOver={ this.state.cells[(this.state.themes.length + 1)*i+j] }
                                        isRowOver={ this.state.rows[i] } 
                                        isColumOver={this.state.columns[j]} 
                                        column={j} 
                                        onMouseOver={() => this.handleMouseOver(j, i)} 
                                        onMouseOut={ () => this.handleMouseOut(j, i)}>
                                </FirstCell>)

                } else {

                    if (this.state.defaultColumns.includes(j)) {

                        cells.push(<Cell isCellOver={ this.state.cells[(this.state.themes.length + 1)*i+j] }
                                        isRowOver={ this.state.rows[i] } 
                                        isColumOver={this.state.columns[j]} 
                                        isVisible={true}
                                        column={j} 
                                        onMouseOver={() => this.handleMouseOver(j, i)} 
                                        onMouseOut={ () => this.handleMouseOut(j, i)}>
                                    </Cell>)
                    } else {

                        cells.push(<Cell isCellOver={ this.state.cells[(this.state.themes.length + 1)*i+j] }
                                        isRowOver={ this.state.rows[i] } 
                                        isColumOver={this.state.columns[j]} 
                                        isVisible={false}
                                        column={j} 
                                        onMouseOver={() => this.handleMouseOver(j, i)} 
                                        onMouseOut={ () => this.handleMouseOut(j, i)}>
                                    </Cell>)
                    }
                    
                    
                }
                
            }

            rows.push(<tr>{ cells }</tr>)
        }

        return rows
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
                        { 
                            this.renderRow() 
                        }
                 </tbody>
            </table>
                
        );
    }

    handleMouseOver(columnIndex, rowIndex) {

        console.log(columnIndex)
        console.log(rowIndex)

        const columns = this.state.columns.slice();    
        columns[columnIndex] = true;    
        this.setState({columns});

        const rows = this.state.rows.slice();    
        rows[rowIndex] = true;    
        this.setState({rows});

        const cells = this.state.cells.slice();    
        cells[(this.state.themes.length + 1) * rowIndex + columnIndex] = true;
        this.setState({cells});
    }

    handleMouseOut(columnIndex, rowIndex) {

        const columns = this.state.columns.slice();    
        columns[columnIndex] = false;
        this.setState({columns});

        const rows = this.state.rows.slice();    
        rows[rowIndex] = false;    
        this.setState({rows});

        const cells = this.state.cells.slice();    
        cells[(this.state.themes.length + 1) * rowIndex + columnIndex] = false;    
        this.setState({cells});
    }
}

export default Table;