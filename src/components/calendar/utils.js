import moment from 'moment'

export const config = {
    locale: {
        cancelLabel: 'Cancel',
        applyLabel: 'Apply',
        format: 'DD MMM YYYY',
        customRangeLabel: 'Custom',
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
    showCustomRangeLabel: true,
    alwaysShowCalendars: true,
    maxDate: moment().subtract(1, 'days'),
};

export const calendarRanges = {
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(7, 'days'), moment().subtract(1, 'days')],
    'Last 30 Days': [moment().subtract(30, 'days'), moment().subtract(1, 'days')],
    'This Month': [moment().startOf('month'), moment().subtract(1, 'days')],
};