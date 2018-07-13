import React, { Component } from 'react';

import $ from 'jquery';
import 'fullcalendar'
import 'fullcalendar/dist/fullcalendar.css'

export default class CalendarioView extends Component {

    componentDidMount() {
        $('#calendar').fullCalendar({
            fixedWeekCount: false,
            showNonCurrentDates: false,
            /*
            header: { center: 'month, agendaWeek' },
            views: {
                basic: {
                    // options apply to basicWeek and basicDay views
                },
                agenda: {
                    // options apply to agendaWeek and agendaDay views
                },
                month: { // name of view
                    titleFormat: 'YYYY, MM, DD'
                    // other view-specific options here
                },
                week: {
                    // options apply to basicWeek and agendaWeek views
                },
                day: {
                    // options apply to basicDay and agendaDay views
                }
            },
            dayClick: function (date, jsEvent, view) {
                console.log('clicked on ' + date.format());
            },
            */
        });
    }

    render() {
        return (
            <div id="calendar"></div>
        );
    }

}