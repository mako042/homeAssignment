import ProductListing from "./ProductListing";
import Cart from "./cart";

function Content({ pageType, setPageType, cart, setCart }) {
  return (
    <>
      {(pageType !== 'cart') && (
        <ProductListing category={pageType} cart={cart} setCart={setCart} />
      )}
      {pageType === 'cart' && <Cart cart={cart} setCart={setCart} setPageType={setPageType} />}
    </>
  );
}

export default Content;
