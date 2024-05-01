import { BrowserRouter } from 'react-router-dom';
import { QueryParamsCalendarController } from './QueryParamsCalendarController';
import './App.js';

function CalendarApp() {
    return (
        <BrowserRouter>
            <QueryParamsCalendarController />
        </BrowserRouter>
    );
}

export default CalendarApp;