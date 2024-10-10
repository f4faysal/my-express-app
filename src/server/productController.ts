const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    description:
      "Experience crystal clear sound with our wireless headphones. Equipped with noise cancellation and up to 20 hours of battery life.",
    shortDescription: "Wireless headphones with noise cancellation.",
    images: [
      "https://via.placeholder.com/400x400?text=Headphones+1",
      "https://via.placeholder.com/400x400?text=Headphones+2",
      "https://via.placeholder.com/400x400?text=Headphones+3",
    ],
    category: "Electronics",
    brandName: "SoundPro",
    otherInfo: {
      weight: "250g",
      dimensions: "20x15x10 cm",
      color: "Black",
      warranty: "1 Year",
    },
  },
  {
    id: "2",
    name: "Smartphone",
    price: 799.99,
    description:
      "This smartphone comes with a 6.5-inch display, a powerful processor, and a 128GB storage capacity for all your apps and photos.",
    shortDescription:
      "Latest smartphone with 128GB storage and high-quality camera.",
    images: [
      "https://via.placeholder.com/400x400?text=Smartphone+1",
      "https://via.placeholder.com/400x400?text=Smartphone+2",
      "https://via.placeholder.com/400x400?text=Smartphone+3",
    ],
    category: "Mobile Phones",
    brandName: "TechBrand",
    otherInfo: {
      weight: "180g",
      dimensions: "16x7x0.8 cm",
      color: "Blue",
      batteryLife: "24 hours",
      warranty: "2 Years",
    },
  },
  {
    id: "3",
    name: "Gaming Laptop",
    price: 1499.99,
    description:
      "A powerful gaming laptop with a 15.6-inch display, Intel i7 processor, and 16GB RAM for an immersive gaming experience.",
    shortDescription: "Gaming laptop with Intel i7 and 16GB RAM.",
    images: [
      "https://via.placeholder.com/400x400?text=Laptop+1",
      "https://via.placeholder.com/400x400?text=Laptop+2",
      "https://via.placeholder.com/400x400?text=Laptop+3",
    ],
    category: "Computers",
    brandName: "GamePower",
    otherInfo: {
      weight: "2.5kg",
      dimensions: "35x25x2 cm",
      processor: "Intel i7",
      memory: "16GB RAM",
      warranty: "2 Years",
    },
  },
  {
    id: "4",
    name: "Smartwatch",
    price: 199.99,
    description:
      "Keep track of your fitness goals with this smartwatch, featuring heart rate monitoring, GPS, and up to 7 days of battery life.",
    shortDescription: "Smartwatch with heart rate monitoring and GPS.",
    images: [
      "https://via.placeholder.com/400x400?text=Smartwatch+1",
      "https://via.placeholder.com/400x400?text=Smartwatch+2",
      "https://via.placeholder.com/400x400?text=Smartwatch+3",
    ],
    category: "Wearables",
    brandName: "FitTech",
    otherInfo: {
      weight: "50g",
      dimensions: "4x4x1 cm",
      color: "Black",
      batteryLife: "7 days",
      warranty: "1 Year",
    },
  },
  {
    id: "5",
    name: "Bluetooth Speaker",
    price: 49.99,
    description:
      "Portable Bluetooth speaker with powerful sound and waterproof design, perfect for outdoor adventures.",
    shortDescription: "Waterproof Bluetooth speaker with 10-hour battery life.",
    images: [
      "https://via.placeholder.com/400x400?text=Speaker+1",
      "https://via.placeholder.com/400x400?text=Speaker+2",
      "https://via.placeholder.com/400x400?text=Speaker+3",
    ],
    category: "Audio",
    brandName: "SoundWave",
    otherInfo: {
      weight: "300g",
      dimensions: "15x10x8 cm",
      batteryLife: "10 hours",
      warranty: "1 Year",
    },
  },
  {
    id: "6",
    name: "4K TV",
    price: 999.99,
    description:
      "Enjoy stunning visuals with this 55-inch 4K Ultra HD TV, featuring HDR and built-in smart functionality.",
    shortDescription:
      "55-inch 4K Ultra HD TV with HDR and smart functionality.",
    images: [
      "https://via.placeholder.com/400x400?text=TV+1",
      "https://via.placeholder.com/400x400?text=TV+2",
      "https://via.placeholder.com/400x400?text=TV+3",
    ],
    category: "Home Entertainment",
    brandName: "VisionTech",
    otherInfo: {
      weight: "12kg",
      dimensions: "123x72x8 cm",
      resolution: "4K Ultra HD",
      warranty: "3 Years",
    },
  },
  {
    id: "7",
    name: "DSLR Camera",
    price: 649.99,
    description:
      "Capture stunning photos and videos with this 24MP DSLR camera, featuring interchangeable lenses and 4K video recording.",
    shortDescription: "24MP DSLR camera with 4K video recording.",
    images: [
      "https://via.placeholder.com/400x400?text=Camera+1",
      "https://via.placeholder.com/400x400?text=Camera+2",
      "https://via.placeholder.com/400x400?text=Camera+3",
    ],
    category: "Cameras",
    brandName: "PhotoMaster",
    otherInfo: {
      weight: "1kg",
      dimensions: "14x10x8 cm",
      resolution: "24MP",
      warranty: "2 Years",
    },
  },
  {
    id: "8",
    name: "Gaming Chair",
    price: 199.99,
    description:
      "Ergonomically designed gaming chair with adjustable height, reclining feature, and built-in lumbar support.",
    shortDescription: "Ergonomic gaming chair with lumbar support.",
    images: [
      "https://via.placeholder.com/400x400?text=Chair+1",
      "https://via.placeholder.com/400x400?text=Chair+2",
      "https://via.placeholder.com/400x400?text=Chair+3",
    ],
    category: "Furniture",
    brandName: "ComfortZone",
    otherInfo: {
      weight: "15kg",
      dimensions: "65x60x120 cm",
      color: "Black/Red",
      warranty: "1 Year",
    },
  },
  {
    id: "9",
    name: "Action Camera",
    price: 299.99,
    description:
      "Waterproof action camera with 4K video recording, perfect for capturing all your outdoor adventures.",
    shortDescription: "Waterproof 4K action camera for outdoor adventures.",
    images: [
      "https://via.placeholder.com/400x400?text=Action+Camera+1",
      "https://via.placeholder.com/400x400?text=Action+Camera+2",
      "https://via.placeholder.com/400x400?text=Action+Camera+3",
    ],
    category: "Cameras",
    brandName: "AdventureCam",
    otherInfo: {
      weight: "150g",
      dimensions: "6x4x3 cm",
      batteryLife: "4 hours",
      warranty: "1 Year",
    },
  },
  {
    id: "10",
    name: "Electric Scooter",
    price: 499.99,
    description:
      "Electric scooter with a top speed of 25 km/h and a range of up to 30 km, ideal for city commuting.",
    shortDescription: "Electric scooter with 25 km/h speed and 30 km range.",
    images: [
      "https://via.placeholder.com/400x400?text=Scooter+1",
      "https://via.placeholder.com/400x400?text=Scooter+2",
      "https://via.placeholder.com/400x400?text=Scooter+3",
    ],
    category: "Outdoor",
    brandName: "EcoRide",
    otherInfo: {
      weight: "12kg",
      dimensions: "110x40x120 cm",
      batteryLife: "30 km",
      warranty: "1 Year",
    },
  },
];

// Dummy user data for login
const users = [
  {
    id: "userId",
    name: "Faysal Hossain",
    email: "faysal@faysal.com",
    password: "password",
  },
];

// Login user
export const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Check if request body exists and contains valid fields
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // Check if user exists
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate JWT token
  const token = "your_secret_key";

  // Return user info and token
  res.status(200).json({
    token,
    user: { id: user.id, email: user.email, name: user.name },
  });
};

export const user = (req, res) => {
  return res.status(200).json({
    message: "Welcome to the Docker!!! ",
    user: users,
  });
};

// Dummy cart storage (you should eventually replace this with actual DB storage)
let userCartData = {} as any;

// Get cart data for a user
export const getCart = (req, res) => {
  const cart = userCartData;

  res.status(200).json({
    message: "Cart retrieved successfully",
    cart,
  });
};

// Sync cart between guest and logged-in user
// export const cartSync = (req, res) => {
//   const { userId, cart } = req.body;

//   // Merge existing user cart with guest cart
//   const existingCart = userCartData[userId] || [];
//   const mergedCart = cart.reduce(
//     (acc, guestItem) => {
//       const existingItem = acc.find((item) => item.id === guestItem.id);
//       if (existingItem) {
//         existingItem.quantity = Math.min(
//           existingItem.quantity + guestItem.quantity,
//           10
//         ); // Max 10 quantity
//       } else {
//         acc.push(guestItem);
//       }
//       return acc;
//     },
//     [...existingCart]
//   );

//   // Save merged cart to "database"
//   userCartData[userId] = mergedCart;

//   // Return merged cart
//   res.status(200).json({ cart: mergedCart });
// };

export const cartSync = (req, res) => {
  const { userId, cart } = req.body;

  // Validate input
  if (!userId || !Array.isArray(cart)) {
    return res.status(400).json({ error: "Invalid userId or cart data" });
  }

  try {
    // Retrieve the existing user cart from in-memory storage
    const existingCart = userCartData[userId] || [];

    // Merge guest cart with user cart
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

    // Save the merged cart to "database"
    userCartData[userId] = mergedCart;

    // Return the updated cart to the client
    return res.status(200).json({ cart: mergedCart });
  } catch (error) {
    console.error("Cart sync error:", error);
    return res.status(500).json({ error: "Failed to sync cart" });
  }
};

// Orders storage
let orders = [];

// Checkout API
export const checkout = (req, res) => {
  const { cartItems, userId } = req.body;

  if (!userId || !cartItems || cartItems.length === 0) {
    return res
      .status(400)
      .json({ message: "User ID and cart items are required" });
  }

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const newOrder = {
    id: orders.length + 1,
    userId,
    items: cartItems,
    total,
    date: new Date(),
  };

  orders.push(newOrder);

  // Clear user cart after successful checkout
  userCartData[userId] = [];

  res
    .status(200)
    .json({ message: "Order processed successfully", order: newOrder });
};

// Get all products
export const getProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "All products fetched successfully",
    data: products,
  });
};

// Get a single product by ID
export const getProductById = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      status: "error",
      message: "Product not found",
    });
  }

  res.status(200).json({
    status: "success",
    message: "Product found",
    data: product,
  });
};
