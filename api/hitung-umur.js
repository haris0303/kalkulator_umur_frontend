export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method tidak diizinkan" });
  }

  const { birthday } = req.body;

  if (!birthday) {
    return res.status(400).json({ message: "Tanggal lahir wajib diisi" });
  }

  const currentDate = new Date();
  const birthdayDate = new Date(birthday);

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();

  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return res.status(200).json({ age });
}