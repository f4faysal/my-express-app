let orders = [];

export const checkout = (req, res) => {
  const { cartItems } = req.body;
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const newOrder = { id: orders.length + 1, items: cartItems, total };
  orders.push(newOrder);

  res.json({ message: 'Order processed', order: newOrder });
};
