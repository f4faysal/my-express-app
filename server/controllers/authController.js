const users = [
  {
    id: "1",
    name: "Faysal Hossain",
    email: "faysal@faysal.com",
    password: "password",
  },
];

export const loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.json({
      user: { id: user.id, name: user.name },
      token: "fake-jwt-token",
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
