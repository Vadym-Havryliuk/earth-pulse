import './DataPage.css';

const DataPage = () => {
    return (
        <div className="data-page page">
            <h1 className="data-page__heading heading">Про дані</h1>
            <p className="data-page__description description">
                Звідки беруться події та які в них обмеження.
            </p>
            <div className="data-page__grid">
                <div className="data-page__card">
                    <span className="data-page__card-span">ДЖЕРЕЛО</span>
                    <h2 className="data-page__card-heading">USGS Earthquake Catalog</h2>
                    <p className="data-page__card-text">
                        Відкритий каталог землетрусів у форматі GeoJSON з фільтрами за часом, місцем і силою.
                    </p>
                </div>
                <div className="data-page__card">
                    <span className="data-page__card-span">ОНОВЛЕННЯ</span>
                    <h2 className="data-page__card-heading">Майже в реальному часі</h2>
                    <p className="data-page__card-text">
                        Нові події з’являються протягом кількох хвилин, а параметри можуть уточнюватися.
                    </p>
                </div>
            </div>
            <div className="data-page__details">
                <details>
                    <summary>
                        Чим магнітуда відрізняється від інтенсивності?
                    </summary>
                    <p>
                        Магнітуда вимірює енергію події, а інтенсивність те, як її відчули в конкретному місці.
                    </p>
                </details>
                <details>
                    <summary>
                        Чому параметри події змінюються?
                    </summary>
                    <p>
                        Спершу оцінка швидка, а згодом уточнюється після обробки даних станцій.
                    </p>
                </details>
                <details>
                    <summary>
                        Чи можна покладатися на сайт для безпеки?
                    </summary>
                    <p>
                        Ні, це освітній проєкт. У разі небезпеки дивіться офіційні повідомлення служб.
                    </p>
                </details>
            </div>
        </div>
    )
}

export default DataPage;