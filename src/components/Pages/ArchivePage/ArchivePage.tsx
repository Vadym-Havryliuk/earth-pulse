import './ArchivePage.css';

const ArchivePage = () => {
    return (
        <div className="archive-page page">
            <h1 className="archive-page__heading heading">Архів подій</h1>
            <div className="archive-page__filter">
                <select className="archive-page__region select">
                    <option value="all">Усі</option>
                    <option value="japan">Японія</option>
                    <option value="indonesia">Індонезія</option>
                    <option value="chile">Чилі</option>
                    <option value="turkey">Туреччина</option>
                    <option value="new-zealand">Нова Зеландія</option>
                    <option value="alaska">Аляска</option>
                </select>
                <select className="archive-page__magnitude select">
                    <option value="M0">M 0</option>
                    <option value="M4">M 4</option>
                    <option value="M5">M 5</option>
                    <option value="M6">M 6</option>
                </select>
            </div>
            <section className="card archive-card" aria-label="Архів подій">
                <table className="archive-table">
                    <thead>
                        <tr>
                            <th scope="col">Регіон</th>
                            <th scope="col">Магнітуда</th>
                            <th scope="col">Глибина</th>
                            <th scope="col">Давність</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Японія</td>
                            <td><span className="badge">M 5.8</span></td>
                            <td>35 км</td>
                            <td>12 хв</td>
                        </tr>
                        <tr>
                            <td>Чилі</td>
                            <td><span className="badge">M 4.9</span></td>
                            <td>62 км</td>
                            <td>36 хв</td>
                        </tr>
                        <tr>
                            <td>Індонезія</td>
                            <td><span className="badge">M 6.1</span></td>
                            <td>28 км</td>
                            <td>1 год</td>
                        </tr>
                        <tr>
                            <td>Туреччина</td>
                            <td><span className="badge">M 4.4</span></td>
                            <td>10 км</td>
                            <td>2 год</td>
                        </tr>
                        <tr>
                            <td>Нова Зеландія</td>
                            <td><span className="badge">M 5.2</span></td>
                            <td>48 км</td>
                            <td>3 год</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <div className="archive-page__list-switcher">
                <button></button>
            </div>
        </div>
    )
}

export default ArchivePage;