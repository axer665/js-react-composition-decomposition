//Новостной блок
import ExchangeRate from "./news/WidgetExchangeRate";
export default function News(props) {

    const { assets } = props;
    const { children } = props;
    const date = new Date();

    return(
        <div className="news-block">
            <div className="news-block-titles">
                {props.news.map(item => <a className="title" key={item.title} href="#">{item.title}</a>)}
                <div className="date-now">{date.now}</div>
            </div>
            <ul className="news">
                {children}
            </ul>
            <ExchangeRate assets={assets}/>
        </div>
    )
}