import { Sequelize } from 'sequelize'
import setting from '../setting'

const modeServer: any = {
  development: {
    host: setting.DB_USERNAME_DEV,
    dialect: setting.DB_DIALECT_DEV,
    username: setting.DB_USERNAME_DEV,
    password: setting.DB_PASSWORD_DEV,
    database: setting.DB_NAME_DEV,
  },
  test: {
    host: setting.DB_USERNAME_TEST,
    dialect: setting.DB_DIALECT_TEST,
    username: setting.DB_USERNAME_TEST,
    password: setting.DB_PASSWORD_TEST,
    database: setting.DB_NAME_TEST,
  },
  production: {
    host: setting.DB_USERNAME_PROD,
    dialect: setting.DB_DIALECT_PROD,
    username: setting.DB_USERNAME_PROD,
    password: setting.DB_PASSWORD_PROD,
    database: setting.DB_NAME_PROD,
  },
}

const config = modeServer[setting.NODE_ENV]
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect:
      config.dialect /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  },
)

export default sequelize
