export function form(state = [], action) {

    if (action.type === 'OPEN_MODAL_CADASTRO') {
        return action.openModalForm;
    }

    return state;

}