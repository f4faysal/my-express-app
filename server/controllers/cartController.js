let cart = [];

export const getCart = (req, res) => {
  if (cart.length === 0) {
    return res.status(200).json({ message: "Your cart is empty", cart });
  }

  return res.status(200).json({ message: "Cart retrieved successfully", cart });
};

export const cartSync = (req, res) => {
  const items = req.body; // Item []

  // Validate the request
  if (!items) {
    return res.status(400).json({ message: "Invalid cart item" });
  }

  // Check if the item already exists in the cart
  items.forEach((item) => {
    const index = cart.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      cart[index].quantity += item.quantity;
    } else {
      cart.push(item);
    }
  });

  return res.json({ message: "Cart updated", cart });
};
