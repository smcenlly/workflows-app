import { convertDateToReadableForm, convertDateToAPIReadableFormat } from './date-utility';

describe('Date Utility', () => {

    fdescribe('convertDateToReadableForm', () => {
        it('should work', () => {
            const actual = convertDateToReadableForm('2018-11-13T22:00:00+01:00')
            expect(actual).toBe('13.11.2018');
        });
    });

    fdescribe('convertDateToReadableForm', () => {
        it('should work', () => {
            const actual = convertDateToAPIReadableFormat('13.11.2018');
            expect(actual).toBe('2018-11-13T23:00:00+01:00');
        });
    });


});


