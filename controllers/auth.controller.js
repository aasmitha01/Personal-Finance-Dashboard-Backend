import supabase from "../config/supabase.js";
import { sendWelcomeEmail } from "../utils/sendEmail.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/* ================= REGISTER ================= */

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          name,
          email,
          password: hashedPassword,
        },
      ])
      .select();

    if (error) {
  if (error.code === "23505") {
    return res.status(400).json({
      message: "Email already registered",
    });
  }

  return res.status(400).json({
    message: error.message,
  });
}

    // send mail (background)
    sendWelcomeEmail(email, name);

    res.json({ message: "User registered successfully" });

  } catch (err) {
    console.log("Register Error:", err.message);
    res.status(500).json({ error: "Registration failed" });
  }
};

/* ================= LOGIN ================= */

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email);

    if (error || users.length === 0)
      return res.status(400).json({ message: "User not found" });

    const user = users[0];

    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword)
      return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token, user });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};