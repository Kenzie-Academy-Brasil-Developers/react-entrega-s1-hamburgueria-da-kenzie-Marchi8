import "./styles.css"

function Product({ handleClick, id, product }) {
    return (
        <li className="products-li" key={id}>
            <div className="product-div">
                <img className="product-img" src={product.img} alt="Product-Img" />
                <div className="product-section">
                    <h2 className="product-title">{product.name}</h2>
                    <p className="product-category">{product.category}</p>
                    <span className="product-price">R$ {product.price.toFixed(2)}</span>
                    <button className="product-button"
                        onClick={() => handleClick(product.id)}>Adicionar</button>
                </div>
            </div>
        </li>
    )
}

export default Product