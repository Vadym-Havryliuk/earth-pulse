import './LearnPage.css';

const LearnPage = () => {
    return (
        <div className="learn-page page">
            <h1 className="learn-page__heading heading">Що означає магнітуда</h1>
            <p className="learn-page__description description">
                Шкала логарифмічна: кожна ціла одиниця означає приблизно в 32 рази більше енергії.
            </p>
            <div className="learn-page__magnitude-cards">
                <div className="learn-page__magnitude-card">
                    <div className="learn-page__marnitude-color"></div>
                    <h2 className="learn-page__magnitude-value">M 2–3.9</h2>
                    <p className="learn-page__magnitude-description">
                        Зазвичай не відчувається
                    </p>
                </div>
                <div className="learn-page__magnitude-card">
                    <div className="learn-page__marnitude-color"></div>
                    <h2 className="learn-page__magnitude-value">M 4–4.9</h2>
                    <p className="learn-page__magnitude-description">
                        Помітний струс, дрібні пошкодження рідкі
                    </p>
                </div>
                <div className="learn-page__magnitude-card">
                    <div className="learn-page__marnitude-color"></div>
                    <h2 className="learn-page__magnitude-value">M 5–5.9</h2>
                    <p className="learn-page__magnitude-description">
                        Слабкі споруди можуть постраждати
                    </p>
                </div>
                <div className="learn-page__magnitude-card">
                    <div className="learn-page__marnitude-color"></div>
                    <h2 className="learn-page__magnitude-value">M 6+</h2>
                    <p className="learn-page__magnitude-description">
                        Руйнівні землетруси на великих площах
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LearnPage;