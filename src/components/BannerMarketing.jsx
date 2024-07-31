//Модуль баннерного маркетинга
export default function BannerMarketing(props) {
    const {banner} = props
    return(
        <a className="baner-marketing-link" href={banner.href}>
            <img className="baner-image" src={banner.src} alt={banner.alt}></img>
        </a>
    )
}