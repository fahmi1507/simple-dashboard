import moment from 'moment'

export const config = {
    locale: {
        cancelLabel: 'Cancel',
        applyLabel: 'Apply',
        format: 'DD MMM YYYY',
        customRangeLabel: 'Pilih rentang',
        daysOfWeek: [
            'Su',
            'Mo',
            'Tu',
            'We',
            'Th',
            'Fr',
            'Sa',
        ],
        monthNames: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ],

    },
    opens: 'left',
    showCustomRangeLabel: false,
    alwaysShowCalendars: true,
    maxDate: moment().subtract(1, 'days'),
    maxSpan: {
        'months': 6,
    }
};

export const calendarRanges = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(7, 'days'), moment().subtract(1, 'days')],
    'Last 30 Days': [moment().subtract(30, 'days'), moment().subtract(1, 'days')],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
};