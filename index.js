import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import FileUpload from "express-fileupload";
import session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
dotenv.config(); // Memuat variabel lingkungan dari file .env

const app = express(); // Membuat aplikasi Express

const sessionStore = SequelizeStore(session.Store); // Mengonfigurasi session store untuk Sequelize

const store = new sessionStore({
  db: db, // Menghubungkan session store dengan database
});

// (async () => {
//   await db.sync();
// })();

// app.use(
//   session({
//     secret: process.env.SESS_SECRET, // Kunci rahasia untuk enkripsi sesi
//     resave: false, // Tidak menyimpan ulang sesi yang tidak berubah
//     saveUninitialized: true, // Menyimpan sesi baru yang belum diinisialisasi
//     store: store, // Menyimpan sesi di database menggunakan Sequelize store
//     cookie: {
//       secure: "auto", // Mengatur cookie agar hanya dikirim melalui HTTPS (otomatis tergantung pada lingkungan)
//     },
//   })
// );

// Konfigurasi middleware CORS
app.use(
  cors({
    credentials: true, // Mengizinkan pengiriman kredensial seperti cookie
    origin: "http://localhost:3000", // Mengizinkan akses hanya dari origin ini
  })
);

app.use(express.json()); // Middleware untuk parsing JSON
app.use(FileUpload()); // Middleware untuk menangani upload file
app.use(express.static("public"));
app.use(express.static("public/images/user"));

app.use(UserRoute);

//store.sync(); // Menyinkronkan tabel session dengan database

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and Running...."); // Menjalankan server pada port yang ditentukan
});
