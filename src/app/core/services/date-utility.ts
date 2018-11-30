import * as moment from 'moment';

export const convertDateToReadableForm = (str) => {
    return str ? moment(str).format('DD.MM.YYYY') : str;
};

export const convertDateToAPIReadableFormat = (str) => {
    return moment(str).format('YYYY-MM-DDTHH:mm:ssZ');
};

