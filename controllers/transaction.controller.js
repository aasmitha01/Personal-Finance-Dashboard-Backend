import supabase from "../config/supabase.js";

/* ================= GET ================= */
export const getTransactions = async (req, res) => {
  const userId = req.user.id;

  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", userId);

  if (error) return res.status(400).json({ error });

  res.json(data);
};

/* ================= ADD ================= */
export const addTransaction = async (req, res) => {
  try {
    const userId = req.user.id;
    const { type, amount, category } = req.body;

    const { data, error } = await supabase
      .from("transactions")
      .insert([{ user_id: userId, type, amount, category }]);

    if (error) throw error;

    // 🔔 ALERT RULE
    if (amount > 10000) {
      await supabase.from("alerts").insert([
        {
          user_id: userId,
          message: `⚠️ Large transaction detected: ₹${amount}`,
        },
      ]);
    }

    res.json({ message: "Transaction added", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= DELETE ================= */
export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("transactions")
      .delete()
      .eq("id", id);

    if (error) throw error;

    res.json({ message: "Transaction deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= UPDATE ================= */
export const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, amount, category } = req.body;

    const { data, error } = await supabase
      .from("transactions")
      .update({ type, amount, category })
      .eq("id", id);

    if (error) throw error;

    res.json({ message: "Transaction updated", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};