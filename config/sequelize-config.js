import { Sequelize } from "sequelize";

const connection = new Sequelize({
  dialect: "mysql",
  timezone: "-03:00",
  database: "sistemaLoja",
  host: 'localhost',
  username: 'root',
  password: ''
});

export default connection