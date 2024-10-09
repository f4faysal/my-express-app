// In this example, we assume you are using a database (e.g., MongoDB) and a session-based or token-based authentication system.
import Cart from "../models/Cart"; // Import your Cart model (or whatever DB you're using)

// Retrieve the user's cart from the database
export const userCart = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming req.user contains authenticated user's info
    const userCart = await Cart.findOne({ userId });

    if (!userCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.json(userCart);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve cart", error });
  }
};

// Sync the user's cart (replace the current cart with the new one)
export const userCartSync = async (req, res) => {
  const { cartItems } = req.body;

  if (!cartItems || !Array.isArray(cartItems)) {
    return res.status(400).json({ message: "Invalid cart data" });
  }

  try {
    const userId = req.user.id; // Assuming req.user contains authenticated user's info

    // Find the cart for the user, or create a new one if it doesn't exist
    let userCart = await Cart.findOne({ userId });

    if (userCart) {
      // Update the existing cart with new cart items
      userCart.items = cartItems;
    } else {
      // Create a new cart for the user
      userCart = new Cart({
        userId,
        items: cartItems,
      });
    }

    // Save the updated or new cart to the database
    await userCart.save();

    res.json({ message: "Cart synced successfully", cart: userCart });
  } catch (error) {
    res.status(500).json({ message: "Failed to sync cart", error });
  }
};
