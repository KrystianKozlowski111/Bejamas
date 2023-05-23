import create from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],
      cartVisible: false,
      addToCart: (product) => {
        set((state) => {
          const existingItem = state.cartItems.find(
            (item) => item.id === product.id
          );

          if (existingItem) {
            return state;
          }

          const newCartItems = [...state.cartItems, product];
          return { cartItems: newCartItems };
        });
      },
      removeFromCart: (productId) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== productId),
        }));
      },
      clearCart: () => {
        set({ cartItems: [] });
      },
      setCartVisible: (visible) => {
        set({ cartVisible: visible });
      },
    }),
    {
      name: 'cart-storage',
      getStorage: () => sessionStorage,
    }
  )
);

export default useCartStore;
