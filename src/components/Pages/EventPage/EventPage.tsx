import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import type { EventPageProps } from '../../App/App';

import './EventPage.css';

const EventPage = ({quake}: EventPageProps) => {
    const { id } = useParams();

    return (
        <div className="event-page page">
            <Link to="/" className="event-page__link">&larr; До карти</Link>
            <div className="event-page__heading">
                <span className="badge">M 5.8</span>
                <h1 className="heading">Японія</h1>
            </div>
            <div className="event-page__parameters">
                <div className="event-page__parameter">
                    <span className="event-page__property">Глибина</span>
                    <b className="event-page__value">35 км</b>
                </div>
                <div className="event-page__parameter">
                    <span className="event-page__property">Давність</span>
                    <b className="event-page__value">12 хв</b>
                </div>
                <div className="event-page__parameter">
                    <span className="event-page__property">Регіон</span>
                    <b className="event-page__value">Японія</b>
                </div>
            </div>
            <button className="event-page__button">Сповіщати про афтершоки</button>
        </div>
    )
}

export default EventPage;