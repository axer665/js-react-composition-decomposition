//Поисковый блок
export default function Search() {
    return(
        <div className="search-block">
            <div className="logo">
                <a className="logo-link" href='#'>
                    <img className="logo-image" src='...' alt='logo'></img>
                </a>
            </div>
            <form className="search-form">
                <ul className="search-category-list">
                    <li className="search-category-item">
                        <a className="search-category-link" href='#'>Видео</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href='#'>Картинки</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href='#'>Новости</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href='#'>Карты</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href='#'>Маркет</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href='#'>Переводчик</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href='#'>Эфир</a>
                    </li>
                    <span className="search-still">ещё</span>
                </ul>
                <input className="search-input"></input>
                <button className="btn-search">Найти</button>
            </form>
            <span className="search-postscript">Найдется все. Например, <a className="search-postscript-link" href='#'>фаза луны, сегодня</a></span>
        </div>
        
        
    )
}