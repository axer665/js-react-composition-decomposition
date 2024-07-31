//Информационный блок наиболее посещаемых ресурсов
export default function Visit(props) {
    const { listLink, title } = props
    return(
        <>
            <h5 className='info-title'>{title}</h5>
            <ul className="visit-list-links">
                {listLink.map(item => 
                    <li className="visit-list-item" key={item.text}>
                        <a className="visit-link" href={item.href}>
                            <span className="text-bold">{item.bold}</span>
                            -
                            <span className="text">{item.text}</span>
                        </a>
                    </li>
                )}
            </ul>
        </>
        
    )
}