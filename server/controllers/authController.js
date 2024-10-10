

const users = [
  {
    id: "123",
    name: "Faysal Hossain",
    email: "faysal@faysal.com",
    password: "password",
  },
];

export const loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate JWT token
  const token = sign({ userId: user.id }, "your_secret_key", {
    expiresIn: "1h",
  });

  // Return user info and cart
  res.json({
    token,
    user: { id: user.id, email: user.email },
   
  });
};
