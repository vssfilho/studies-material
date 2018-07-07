import React from 'react';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';

export function InputFinanceiroReal(props) {

    const { inputRef, onChange, ...other } = props;

    function currencyBrazil(val) {
        if (Number(val) === 0) {
            return null;
        }
        var tmp = Number(val) + '';
        if (tmp.length < 3) {
            while (tmp.length < 3) { tmp = "0" + tmp; }
        }
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if (tmp.length > 6) {
            tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }
        return "R$ " + tmp;
    }

    return (
        <NumberFormat
            {...other}
            ref={inputRef}
            onValueChange={(values, e) => {
                onChange({
                    target: {
                        value: (values.value / 100),
                    },
                });
            }}
            format={currencyBrazil}
        />
    );

}

export function InputTelefoneFixo(props) {

    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'_'}
            showMask

        />
    );
}

export function InputTelefoneMovel(props) {

    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'_'} // \u2000 para espaço em branco
            showMask
        />
    );
}