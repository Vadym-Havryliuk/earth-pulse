import './TimelinePage.css';

const TimelinePage = () => {
    return (
        <div className="timeline-page">
            <h1 className="timeline-page__heading heading">Таймлайн подій</h1>
            <p className="timeline-page__description description">Кількість подій за день.</p>
            <div className="timeline-page__buttons">
                <button className="timeline-page__button">24 години</button>
                <button className="timeline-page__button active">7 днів</button>
                <button className="timeline-page__button">30 днів</button>
            </div>
            <div className="timeline-page__card">
                <div className="timeline-page__graph">
                    <div className="timeline-page__activity"></div>
                    <div className="timeline-page__activity"></div>
                    <div className="timeline-page__activity"></div>
                    <div className="timeline-page__activity"></div>
                    <div className="timeline-page__activity active"></div>
                    <div className="timeline-page__activity"></div>
                    <div className="timeline-page__activity"></div>
                </div>
                <span className="timeline-page__text">Пік активності позначено акцентним кольором.</span>
            </div>
        </div>
    )
}

export default TimelinePage;