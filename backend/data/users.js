import bycript from "bcryptjs";

const users = [
  {
    name: "Admin user",
    email: "admin@email.com",
    password: bycript.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "Ratul hassan",
    email: "ratul@email.com",
    password: bycript.hashSync("123456"),
    isAdmin: false,
  },
  {
    name: "Mitul Haque",
    email: "mitul@email.com",
    password: bycript.hashSync("123456"),
    isAdmin: false,
  },
];

export default users;
