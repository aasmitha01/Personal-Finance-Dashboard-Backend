import supabase from "../config/supabase.js";

export const getAlerts = async (req, res) => {
  const userId = req.user.id;

  const { data, error } = await supabase
    .from("alerts")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) return res.status(400).json(error);

  res.json(data);
};