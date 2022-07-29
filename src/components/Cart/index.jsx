import "./styles.css"

function Cart({ currentSale, setCurrentSale }) {
    const totalValue = currentSale.reduce((acc, value) => acc + value.price, 0)
    return (
        currentSale.length > 0 ?
            <div className="cart">
                <div className="cart-title-div">
                    <p className="title-cart">Carrinho de Compras</p>
                </div>
                <ul className="cart-ul">
                    {currentSale.map((product) => {
                        return (
                            <li className="cart-li" key={product.id}>
                                <div className="product-content">
                                    <img className="cart-img" src={product.img} alt="cart-product-img" />
                                    <section className="cart-section">
                                        <h2 className="cart-product-name">{product.name}</h2>
                                        <button className="remove" onClick={() =>
                                            setCurrentSale(
                                                currentSale.filter(
                                                    removeProduct =>
                                                        removeProduct != product
                                                ))}>Remover</button>
                                        <p className="cart-category">{product.category}</p>
                                    </section>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className="line">.</div>
                <div className="total-div">
                    <section className="total-section">
                        <p className="total">Total</p>
                        <span className="value">R$ {totalValue.toFixed(2)}</span>
                    </section>
                    <button className="remove-all" onClick={() => setCurrentSale([])}>Remover todos</button>
                </div>
            </div>
            :
            <div className="cart-empty">
                <div className="cart-title-div-empty">
                    <p className="title-cart">Carrinho de Compras</p>
                </div>
                <h2 className="empty">Sua sacola está vazia</h2>
                <p className="add">Adicione itens</p>
            </div>
    )
}

export default Cart