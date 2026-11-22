import './MapPage.css';

const MapPage = () => {
    return (
        <div className="map-page">
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
                        <a className="main-page__item" href="#">
                            <span className="main-page__badge">M 5.8</span>
                            <span className="main-page__sp">
                                <b>Японія</b><br/>
                                <small className="main-page__mute">глибина 35 км · 12 хв тому</small>
                            </span>
                        </a>
                        <a className="main-page__item" href="#">
                            <span className="main-page__badge">M 4.9</span>
                            <span className="main-page__sp">
                                <b>Чилі</b><br/>
                                <small className="main-page__mute">глибина 62 км · 36 хв тому</small>
                            </span>
                        </a>
                        <a className="main-page__item" href="#">
                            <span className="main-page__badge">M 6.1</span>
                            <span className="main-page__sp">
                                <b>Індонезія</b><br/>
                                <small className="main-page__mute">глибина 28 км · 1 год тому</small>
                            </span>
                        </a>
                        <a className="main-page__item" href="#">
                            <span className="main-page__badge">M 4.4</span>
                            <span className="main-page__sp">
                                <b>Туреччина</b><br/>
                                <small className="main-page__mute">глибина 10 км · 2 год тому</small>
                            </span>
                        </a>
                        <a className="main-page__item" href="#">
                            <span className="main-page__badge">M 5.2</span>
                            <span className="main-page__sp">
                                <b>Нова Зеландія</b><br/>
                                <small className="main-page__mute">глибина 48 км · 3 год тому</small>
                            </span>
                        </a>
                        <a className="main-page__item" href="#">
                            <span className="main-page__badge">M 4.7</span>
                            <span className="main-page__sp">
                                <b>Аляска</b><br/>
                                <small className="main-page__mute">глибина 20 км · 5 год тому</small>
                            </span>
                        </a>
                        <a className="main-page__item" href="#">
                            <span className="main-page__badge">M 5.5</span>
                            <span className="main-page__sp">
                                <b>Японія</b><br/>
                                <small className="main-page__mute">глибина 70 км · 9 год тому</small>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapPage;