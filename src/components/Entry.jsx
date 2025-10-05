import mark from '../assets/location.png'

export default function Entry(props) {
    return (
        <article className="entry flex">
            <img src={props.img.src} alt={props.img.alt && props.img.alt}/>
            <div className="info flex flex-col gap-4 p-2">
                <div className="location flex flex-wrap align-center gap-2">
                    <img src={mark} alt="Location Mark"/>
                    <span>{props.country}</span>
                    <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                </div>
                <h2 className="spot">{props.title}</h2>
                <span className="dates">{props.dates}</span>
                <p className="about">
                    {props.text}
                </p>
            </div>
        </article>
    )
}