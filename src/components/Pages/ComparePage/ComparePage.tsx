import './ComparePage.css';

const ComparePage = () => {
    return (
        <div className="compare-page page">
            <h1 className="compare-page__heading heading">Порівняння регіонів</h1>
            <div className="compare-page__compare-controls">
                <select className="compare-page__region select">
                    <option value="japan">Японія</option>
                    <option value="indonesia">Індонезія</option>
                    <option value="chile">Чилі</option>
                    <option value="turkey">Туреччина</option>
                    <option value="new-zealand">Нова Зеландія</option>
                    <option value="alaska">Аляска</option>
                </select>
                <span className="compare-page__vs">vs</span>
                <select className="compare-page__region select">
                    <option value="japan">Японія</option>
                    <option value="indonesia">Індонезія</option>
                    <option value="chile" selected>Чилі</option>
                    <option value="turkey">Туреччина</option>
                    <option value="new-zealand">Нова Зеландія</option>
                    <option value="alaska">Аляска</option>
                </select>
            </div>
            <section className="compare-page__compare-card">
                <div className="compare-page__row">
                    <p className="compare-page__label">Подій (у вибірці)</p>
                    <div className="compare-page__line">
                        <b className="compare-page__value">3</b>
                        <div className="bar">
                            <div className="bar__fill"></div>
                        </div>
                        <div className="bar">
                            <div className="bar__fill bar__fill_blue"></div>
                        </div>
                        <b className="compare-page__value">3</b>
                    </div>
                </div>
                <div className="compare-page__row">
                    <p className="compare-page__label">Найсильніша подія</p>
                    <div className="compare-page__line">
                        <b className="compare-page__value">5.8</b>
                        <div className="bar">
                            <div className="bar__fill"></div>
                        </div>
                        <div className="bar">
                            <div className="bar__fill bar__fill_blue"></div>
                        </div>
                        <b className="compare-page__value">5</b>
                    </div>
                </div>
                <div className="compare-page__row">
                    <p className="compare-page__label">Середня глибина, км</p>
                    <div className="compare-page__line">
                        <b className="compare-page__value">40</b>
                        <div className="bar">
                            <div className="bar__fill"></div>
                        </div>
                        <div className="bar">
                            <div className="bar__fill bar__fill_blue"></div>
                        </div>
                        <b className="compare-page__value">45</b>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ComparePage;