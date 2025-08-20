import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";

function Dessert({ dessert }) {
  const { yourCart, dispatch } = useGlobalContext();
  let isAdded = yourCart.find((item) => item.id == dessert.id);

  return (
    <div className="card">
      <picture>
        <source
          media="(min-width: 400px)"
          srcSet={dessert.image.mobile}
          width={327}
          height={240}
        ></source>
        <source
          media="(min-width: 600px)"
          srcSet={dessert.image.tablet}
          width={213}
          height={212}
        ></source>
        <source
          media="(min-width: 996px)"
          srcSet={dessert.image.desktop}
          width={250}
          height={240}
        ></source>
        <img className="card__image" src={dessert.image.thumbnail} alt="" />
      </picture>
      <div className="card__buttons">
        {!isAdded && (
          <button
            onClick={() =>
              dispatch({ type: "ADD_CART", payload: { ...dessert, amount: 1 } })
            }
            className="btn card__add"
          >
            <img
              src="../images/icon-add-to-cart.svg"
              alt=""
              width={20}
              height={20}
            />
            <span>Add to Cart</span>
          </button>
        )}
        {isAdded && (
          <div className="btn card__amount__buttons">
            <button
              className="card__amount__btn"
              onClick={() => {
                if (isAdded.amount == 1) {
                  dispatch({ type: "REMOVE__CART", payload: dessert.id });
                } else {
                  dispatch({ type: "DECREMENT_AMOUNT", payload: isAdded.id });
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                viewBox="0 0 10 2"
              >
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
              </svg>
            </button>
            <span className="card__amount">{isAdded.amount}</span>
            <button
              className="card__amount__btn"
              onClick={() =>
                dispatch({ type: "INCREMENT_AMOUNT", payload: dessert.id })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="card__body">
        <p className="card__category">{dessert.category}</p>
        <p className="card__name">{dessert.name}</p>
        <p className="card__price">{formatPrice(dessert.price)}</p>
      </div>
    </div>
  );
}

export default Dessert;
