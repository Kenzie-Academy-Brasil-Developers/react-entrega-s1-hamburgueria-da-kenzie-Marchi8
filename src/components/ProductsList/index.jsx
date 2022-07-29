import Product from "../Product"
import "./styles.css"

function ProductsList({ products, handleClick }) {
    return (
        <ul className="products-ul">
            {products.map((product) =>
                <Product handleClick={handleClick}
                    key={product.id}
                    product={product}></Product>
            )}
        </ul>

    )
}

export default ProductsList