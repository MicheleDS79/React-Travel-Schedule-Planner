import { BrowserRouter } from 'react-router-dom';
import  { Calendar } from './Calendar';
import { QueryParamsCalendarController } from './QueryParamsCalendarController';
import './App';

function CalendarApp() {
    return (
        <BrowserRouter>
            <QueryParamsCalendarController />
        </BrowserRouter>
    );
}

export default CalendarApp;