export default function Content({title, image, description}) {
    
    return (
        <div className="content-card">
            <div className="content-image">
            <img src={image} alt="" />
            </div>
            <div className="tag">
                <div className="title">
                    <p>{title}<span>.</span></p>
                </div>
                <div className="empty"></div>
            </div>
            <div className="description">
                <p>{description.before} <span>{description.span}</span> {description.after}</p>
            </div>
        </div>
    )
}