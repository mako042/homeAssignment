import TvListing from "./tvListing";
import PhoneListing from "./phoneListing";
import LaptopListing from "./laptopListing";
import Cart from "./cart";

function Content({ pageType, setPageType, cart, setCart }) {
  return (
    <>
      {pageType === 'tv' && <TvListing cart={cart} setCart={setCart} pageType={pageType} setPageType={setPageType} />}
      {pageType === 'phone' && <PhoneListing cart={cart} setCart={setCart} pageType={pageType} setPageType={setPageType} />}
      {pageType === 'laptop' && <LaptopListing cart={cart} setCart={setCart} pageType={pageType} setPageType={setPageType} />}
      {pageType === 'cart' && <Cart cart={cart} setCart={setCart} setPageType={setPageType} />}
    </>
  );
}

export default Content;
