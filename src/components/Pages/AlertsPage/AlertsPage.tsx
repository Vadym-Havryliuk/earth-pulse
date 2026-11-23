import './AlertsPage.css';

const AlertsPage = () => {
    return (
        <div className="alerts-page page">
            <h1 className="alerts-page__heading heading">Сповіщення</h1>
            <p className="alerts-page__description description">Правила підписок: регіон, поріг магнітуди й канал.</p>
            <div className="alerts-page__parameters">
                <select className="alerts-page__region select">
                    <option value="japan">Японія</option>
                    <option value="indonesia">Індонезія</option>
                    <option value="chile">Чилі</option>
                    <option value="turkey">Туреччина</option>
                    <option value="new-zealand">Нова Зеландія</option>
                    <option value="alaska">Аляска</option>
                </select>
                <select className="alerts-page__number select">
                    <option value="4">4</option>
                    <option value="5" selected>5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                <select className="alerts-page__email-push select">
                    <option value="email">Email</option>
                    <option value="push">Push</option>
                </select>
                <button className="alerts-page__rule-button">+ Додати правило</button>
            </div>
            <ul className="alerts-page__rules">
                <li className="alerts-page__rule">
                    <b className="alerts-page__region">Японія</b>
                    <span className="alerts-page__condition">M 5+ · Email</span>
                    <label className="alerts-page__active">
                        <input type="checkbox" checked />
                        Активне
                    </label>
                    <button type="button" className="alerts-page__delete">Видалити</button>
                </li>
                <li className="alerts-page__rule">
                    <b className="alerts-page__region">Чилі</b>
                    <span className="alerts-page__condition">M 6+ · Push</span>
                    <label className="alerts-page__active">
                        <input type="checkbox" checked />
                        Активне
                    </label>
                    <button type="button" className="alerts-page__delete">Видалити</button>
                </li>
            </ul>
        </div>
    )
}

export default AlertsPage;