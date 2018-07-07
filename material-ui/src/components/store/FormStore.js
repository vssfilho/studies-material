import Pubsub from 'pubsub-js';

export default class FormStore {

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

    getListDados() {
        Pubsub.subscribe('get-dados', (topico, fotos) => {
            callback(fotos);
        });
    }


}