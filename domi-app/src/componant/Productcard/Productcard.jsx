import './Productcard.css'

export const Productcard = ({ product }) => {
     const { id, name, image, oldPrice, newPrice, discount, rating } = product;

     return (
          <div class="card card-vertical d-flex direction-column relative shadow">
               <div class="card-image-container">
                    <img class="card-image" src={image} alt={name} />
               </div>
               <div class="card-details">
                    <div class="card-title">Premium Collection</div>
                    <div class="card-description">
                         <p class="card-des">{name}</p>
                         <p class="card-price d-flex">
                              Rs. {newPrice}
                              <span class="price-strike-through">Rs. {oldPrice}</span>
                              <span class="discount">({discount}% OFF)</span>
                         </p>
                    </div>
                    <div class="cta-btn">
                         <button class="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                              Add To Cart
                         </button>
                    </div>
               </div>
          </div>
     );
};
