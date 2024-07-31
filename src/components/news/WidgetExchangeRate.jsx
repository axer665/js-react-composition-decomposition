//Виджет для отображения стоимости акций и валют в нижней части новостного блока
export default function ExchangeRate(props) {
    const { assets } = props

    return (
        <>
            {assets.map(item => 
                <div className="assets-conteiner" key={item.name}>
                    <span className="asset-name">{item.name}</span>
                    <span className="asset-cost">{item.cost}</span>
                    <span className="asset-difference">{item.difference}</span>
                </div>)}
        </>
    )
}