import { openModalCadastro } from '../actions/form';


export default class FormApi {

    constructor() {
        this.dados = [{
            nome: 'Valter',
            data_nascimento: "",
            sexo: 'M',
            salario: 100.12
        }, {
            nome: 'Jessica',
            data_nascimento: "",
            sexo: 'F',
            salario: 123.21
        }];
    }

    //getListDados() {
        //Pubsub.subscribe('get-dados', (topico, fotos) => {
        //    callback(fotos);
        //});
    //}


    static openModalCadastro() {
        return dispatch => {
            dispatch(openModalCadastro(true));
            return null;
        }
    }

}