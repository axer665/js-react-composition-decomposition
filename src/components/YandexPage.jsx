//Главная страница поиска
import BannerMarketing from "./BannerMarketing";
import News from "./News";
import Search from "./Search";
import YandexAdvertising from "./YandexAdvertising";
import InfoBlocks from "./Info";

export default function YandexPage() {

    const data = {
        news: [
            {
                favicon: {
                    src: '',
                    alt: '',
                },
                title: '',
            }
        ],
        assets: [{
            name: '',
            cost: '',
            difference: '',
        }],
        advertising: {
            text: '', 
            src: '', 
            title: '',
        },
        banner: {
            href: '#',
            src: '', 
            alt: '',
        },
        infoBlocks: [
            {
                type: 'weather',
                title: 'Погода',
                href: '#',
                url: '', 
                temp: '', 
                text: '',
            },
            {
                type: 'visit',
                title: 'Посещаемое',
                listLink: [
                    {
                        href: '#',
                        bold: '',
                        text: 'Недвижжимость - о сталинках',
                    },
                    {
                        href: '#',
                        bold: '',
                        text: 'Маркет - люстры и светильники',
                    },
                    {
                        href: '#',
                        bold: '',
                        text: 'Авто.ру - привод 4Х4 до 500 000',
                    },
                ], 
            },
            {
                type: 'map',
                title: 'Карта Германии',
                listLink: [
                    {
                        href: '#',
                        text: '',
                    },
                ], 
            },
            {
                type: 'TVprogram',
                title: 'Телепрограмма',
                listLink: [
                    {
                        href: '#',
                        time: '',
                        program: 'ТНТ.Best',
                        chanel: '',
                    },
                    {
                        href: '#',
                        time: '',
                        program: 'Джинглики',
                        chanel: '',
                    },
                    {
                        href: '#',
                        time: '',
                        program: 'Наедине со всеми',
                        chanel: '',
                    },
                ], 
            },
            {
                type: 'broadcast',
                title: 'Эфир',
                listLink: [
                    {
                        href: '#',
                        icon: '',
                        name: 'Управление как искусство',
                        category: '',
                    },
                    {
                        href: '#',
                        icon: '',
                        name: 'Ночь. Мир в это время',
                        category: '',
                    },
                    {
                        href: '#',
                        icon: '',
                        name: 'Андрей Возн...',
                        category: '',
                    },
                ], 
            },
        ]
    }

    return (
        <>
            <div className="page-top">
                <News {...data}>
                    {data.news.map(item => <li key={item.title}><img src={item.favicon.src} alt={item.favicon.alt}/><a href="#">{item.title}</a></li>)}
                </News>
                <YandexAdvertising advertising={data.advertising}/>
            </div>
            <Search>

            </Search>
            <div className="page-bottom">
                <BannerMarketing banner={data.banner}/>
                <InfoBlocks {...data}>

                </InfoBlocks>
            </div>
            
        </>
    )
}