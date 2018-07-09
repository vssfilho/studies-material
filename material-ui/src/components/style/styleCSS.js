import { css } from 'glamor';
import purple from '@material-ui/core/colors/purple';

export const classButtonPrimary = css({
    background: 'linear-gradient(45deg, #E53935 30%, #F44336 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontWeight: 'bold',
}).toString();

export const classButtonSecondary = css({
    background: '#1B5E20',
    background: 'linear-gradient(45deg, #1B5E20 30%, #43A047 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontWeight: 'bold',
}).toString();

export const cssLabel = css({
    '&$cssFocused': {
        color: purple[500],
    },
}).toString();

export const cssFocused = css({
}).toString();

export const classInputText = css({
    fontSize: 16,
}).toString();