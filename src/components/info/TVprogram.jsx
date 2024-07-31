//Информационный блок с телепрограммой
export default function TVprogram(props) {
    const { listLink, title } = props
    return(
        <>
            <h5 className='info-title'>{title}</h5>
            <ul className="tv-program-list-links">
                {listLink.map(item => 
                    <li className="tv-program-item" key={item.program}>
                        <a className="tv-program-link" href={item.href}>
                            <span className="tv-program-time">{item.time}</span>
                            <span className="tv-program-program">{item.program}</span>
                            <span className="tv-program-chanel">{item.chanel}</span>
                        </a>
                    </li>
                )}
            </ul>
        </>
        
    )
}