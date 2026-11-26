import { Link } from 'react-router-dom';

import type { MapePageProps } from '../../App/App';

import './MapPage.css';

const MapPage = ({quake}: MapePageProps) => {
    return (
        <div className="map-page page">
            <h1 className="map-page__heading heading">Live-карта подій</h1>
            <p className="map-page__description description">Землетруси за обраний період. Натисніть подію, щоб відкрити деталі. Дані умовні.</p>
            <div className="map-page__buttons">
                <button className="map-page__button">24 години</button>
                <button className="map-page__button active">7 днів</button>
                <button className="map-page__button">30 днів</button>
            </div>
            <label htmlFor="magnitude" className="map-page__label">
                Мінімальна магнітуда: <b id="mv">M 4.0</b>
            </label>
            <input
                className="map-page__range"
                type="range"
                id="magnitude"
                min="0"
                max="7"
                step="0.5"
                value="4"
            />
            <div className="map-page__main-content">
                <div className="map-page__map">
                    <div className="map-page__map-image"></div>
                </div>
                <div className="map-page__events">
                    <h2 className="map-page__events-heading">Події (12)</h2>
                    <div className="main-page__events-wrapper">
                        {
                            quake.map(item => (
                                <Link className="main-page__item" to={`/event/${item.id}`}>
                                    <span className="main-page__badge">M {item.magnitude}</span>
                                    <span className="main-page__sp">
                                        <b>{item.region}</b><br/>
                                        <span className="main-page__mute">глибина {item.deep} км · {item.time} тому</span>
                                    </span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapPage;