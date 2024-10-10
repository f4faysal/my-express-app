// Dummy cart storage
let userCartData = {};

export const getCart = (req, res) => {
  if (cart.length === 0) {
    return res.status(200).json({ message: "Your cart is empty" });
  }

  return res
    .status(200)
    .json({ message: "Cart retrieved successfully", userCartData });
};

export const cartSync = (req, res) => {
  const { userId, cart } = req.body;

  // Merge existing user cart with guest cart
  const existingCart = userCartData[userId] || [];
  const mergedCart = cart.reduce(
    (acc, guestItem) => {
      const existingItem = acc.find((item) => item.id === guestItem.id);
      if (existingItem) {
        existingItem.quantity = Math.min(
          existingItem.quantity + guestItem.quantity,
          10
        ); // Max 10 quantity
      } else {
        acc.push(guestItem);
      }
      return acc;
    },
    [...existingCart]
  );

  // Save to "database"
  userCartData[userId] = mergedCart;

  // Return the merged cart
  res.json({ cart: mergedCart });
};
