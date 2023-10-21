import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './Cart.css'




function Cart({title,price,stock}) {

    let [stockCount, setstockCount] = useState(stock)

    function decresestock(){
        if (stockCount > 0) {
            setstockCount(stockCount - 1);
          }
    }
    
    return (

        

        <>
            {/* <div className='img'>
                <h2 className='textline'>Workout videos</h2>
                <h2 className='textline'>for every fitness</h2>
                <h2 className='textline'>level.</h2>
                <h2 className='textline'>Absolutely free.</h2>
                <h4 className='textline'>Earn your WORKOUT COMPLETE™</h4>
            </div> */}
            
            <div className='cart'>
                <h1 className='titel'>{title}</h1>
                <p className='price'>${price}</p>
                <p className='price'> Instock: {stockCount}</p>
                <button onClick={decresestock} className='btn' >Buy Now</button>

            </div>
        </>
    )
}

Cart.propTypes={
    title:PropTypes.string,
    price:PropTypes.number,
    Instock:PropTypes.number
}
Cart.defaultProps = {
    title:'Shirt',
    stock:0
}

export default Cart
