import '../Product/style.scss';

function Product(props){
    let product = props.product
    return(
        <div className="  product-blok ">
            <div className='g-background-img product-img' style={{backgroundImage:`url('${product.img}')`}}></div>
            <div className='g-flex-direction g-justify-evenly g-align-center blog-texts'>
                <p className='g-text-center blog-sum'>{product.sum}</p>
                <p className='g-text-center blog-info'>{product.name}</p>
                <p className='g-text-center info-text'>{product.text}</p>

            </div>

        </div>
    )
}

export default Product