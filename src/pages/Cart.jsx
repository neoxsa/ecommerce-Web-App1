import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { Trash } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, updateQty } from "../features/productToCart";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartProduct = useSelector((state) => state.ProductToCart.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subTotal = cartProduct.reduce(
    (total, item) => total + item.price.sellingPrice * item.qty.quantity,
    0,
  );

  const notify = () => toast("Removed from cart!", { type: "error" });

  return (
    <>
      <Breadcrumb toRoute="/cart" pageName="Cart" />

      <ToastContainer
        role="status"
        position="top-center"
        hideProgressBar={true}
        autoClose={1000}
        pauseOnHover={false}
        theme="colored"
        toastStyle={{
          backgroundColor: "#FFF8E1",
          color: "#EF5350",
          border: "1px solid teal",
        }}
        closeButton={false}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          <div className="w-full lg:w-2/3">
            {/* Header */}
            <div className="hidden sm:grid grid-cols-5 gap-4 items-center p-4 bg-amber-50 rounded-lg text-sm font-medium">
              <div>Product</div>
              <div>Name</div>
              <div>Price</div>
              <div>Qty.</div>
              <div>Remove</div>
            </div>

            {/* Empty Cart Message */}
            {cartProduct.length === 0 && (
              <div className="text-gray-400 text-2xl sm:text-3xl font-medium text-center py-12">
                Cart Empty
              </div>
            )}

            <div className="space-y-4 mt-4">
              {cartProduct.map((product) => (
                <div
                  key={product.id.productId}
                  className="bg-white rounded-lg relative flex justify-center shadow-sm p-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">

                    <div className="col-span-2 sm:col-span-1 ">
                      <img
                        className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg mx-auto"
                        src={product.image.productImage1}
                        alt={product.name.productTitle}
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <p className="text-sm font-medium text-center inline-flex flex-wrap w-52 sm:w-auto">
                        {product.name.productTitle}
                      </p>
                    </div>

                    <div className="text-sm font-medium">
                      ${product.price.sellingPrice}
                    </div>

                    <div>
                      <div className="inline-flex items-center border border-gray-200 rounded-md">
                        <button
                          type="button"
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 cursor-pointer"
                          onClick={() =>
                            dispatch(
                              updateQty({
                                productId: product.id.productId,
                                quantity: product.qty.quantity > 1 ? product.qty.quantity - 1 : 1,
                              }),
                            )}>
                          -
                        </button>
                        <span className="w-10 text-center border-x py-1">
                          {product.qty.quantity}
                        </span>
                        <button
                          type="button"
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 cursor-pointer"
                          onClick={() =>
                            dispatch(
                              updateQty({
                                productId: product.id.productId,
                                quantity: product.qty.quantity + 1,
                              }),
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-center absolute right-0 top-0 sm:relative">
                      <button
                        type="button"
                        className="p-2 hover:text-red-500 transition-colors"
                        onClick={() => {
                          dispatch(removeProduct(product.id.productId));
                          notify();
                        }}
                      >
                        <Trash className="w-5 h-5 cursor-pointer" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="bg-amber-50 rounded-lg p-6 sticky top-4">
              <h2 className="text-2xl font-medium mb-6">Cart Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total</span>
                  <span className="font-medium text-teal-800">${subTotal}</span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    cartProduct.length > 0 && navigate("/checkout")
                  }
                  className={`w-full py-3 px-4 rounded-lg transition-all duration-200
                    ${cartProduct.length > 0
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
