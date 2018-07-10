import React, { Component } from 'react';
import FormElemets from './FormElements';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { SearchState, IntegratedFiltering, PagingState, IntegratedPaging } from '@devexpress/dx-react-grid';
import { Grid, Table, Toolbar, SearchPanel, TableHeaderRow, PagingPanel } from '@devexpress/dx-react-grid-material-ui';
import { SearchPanelInput } from '../utils/SearchPanelInput';
import { Pagination } from '../utils/Pagination';


import FormApi from '../api/FormApi';

import { classButtonPrimary } from '../style/styleCSS';

class IndexForm extends Component {

    constructor(props) {
        super(props);
        this.openModalCadastro = this.openModalCadastro.bind(this);
        this.state = {
            columns: [
                { name: 'name', title: 'Name' },
                { name: 'sex', title: 'Sex' },
                { name: 'city', title: 'City' },
                { name: 'car', title: 'Car' },
            ],
            rows: [
                { id: 0, name: 'Paul', sex: 'Male', city: 'Paris', car: 'Nissan Altima' },
                { id: 1, name: 'Sandra', sex: 'Female', city: 'Las Vegas', car: 'Audi A4' },
                { id: 2, name: 'Mark', sex: 'Male', city: 'Paris', car: 'Honda Accord' },
                { id: 3, name: 'Paul', sex: 'Male', city: 'Paris', car: 'Nissan Altima' },
                { id: 4, name: 'Linda', sex: 'Female', city: 'Austin', car: 'Toyota Corolla' },
                { id: 5, name: 'Robert', sex: 'Male', city: 'Las Vegas', car: 'Chevrolet Cruze' },
                { id: 6, name: 'Paul', sex: 'Male', city: 'Paris', car: 'Nissan Altima' },
                { id: 7, name: 'Sandra', sex: 'Female', city: 'Las Vegas', car: 'Audi A4' },
                { id: 8, name: 'Mark', sex: 'Male', city: 'Paris', car: 'Honda Accord' },
                { id: 9, name: 'Paul', sex: 'Male', city: 'Paris', car: 'Nissan Altima' },
                { id: 10, name: 'Linda', sex: 'Female', city: 'Austin', car: 'Toyota Corolla' },
                { id: 11, name: 'Robert', sex: 'Male', city: 'Las Vegas', car: 'Chevrolet Cruze' },
                { id: 12, name: 'Paul', sex: 'Male', city: 'Paris', car: 'Nissan Altima' },
                { id: 13, name: 'Sandra', sex: 'Female', city: 'Las Vegas', car: 'Audi A4' },
                { id: 14, name: 'Mark', sex: 'Male', city: 'Paris', car: 'Honda Accord' },
                { id: 15, name: 'Paul', sex: 'Male', city: 'Paris', car: 'Nissan Altima' },
                { id: 16, name: 'Linda', sex: 'Female', city: 'Austin', car: 'Toyota Corolla' },
                { id: 17, name: 'Robert', sex: 'Male', city: 'Las Vegas', car: 'Chevrolet Cruze' },
            ],
            currentPage: 0,
            pageSize: 5,
            pageSizes: [5, 10, 15],
        };

        this.changeCurrentPage = currentPage => this.setState({ currentPage });
        this.changePageSize = pageSize => this.setState({ pageSize });

    }

    openModalCadastro(event) {
        event.preventDefault();
        this.props.store.dispatch(FormApi.openModalCadastro(true));
    }

    render() {

        const { rows, columns, pageSize, pageSizes, currentPage, } = this.state;

        return (
            <div>
                <Button className={classButtonPrimary} variant="contained" onClick={this.openModalCadastro}>
                    Abrir Form Cadastro
                </Button>
                <FormElemets store={this.props.store} />
                <br />
                <br />
                <Paper>
                    <Grid
                        rows={rows}
                        columns={columns} >
                        <PagingState
                            currentPage={currentPage}
                            pageSize={pageSize}
                        />
                        <SearchState />
                        <IntegratedPaging />
                        <IntegratedFiltering />
                        <Table />
                        <TableHeaderRow />
                        <Toolbar />
                        <SearchPanel inputComponent={SearchPanelInput} />
                        <PagingPanel pageSizes={pageSizes}  containerComponent={Pagination}/>
                    </Grid>

                </Paper>
            </div>
        );
    }

}

export default IndexForm;