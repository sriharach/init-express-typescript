import { Sequelize } from 'sequelize'
import setting from '../setting'

const modeServer: any = {
  development: {
    host: setting.settingDatabase.DB_USERNAME_DEV,
    dialect: setting.settingDatabase.DB_DIALECT_DEV,
    username: setting.settingDatabase.DB_USERNAME_DEV,
    password: setting.settingDatabase.DB_PASSWORD_DEV,
    database: setting.settingDatabase.DB_NAME_DEV,
  },
  test: {
    host: setting.settingDatabase.DB_USERNAME_TEST,
    dialect: setting.settingDatabase.DB_DIALECT_TEST,
    username: setting.settingDatabase.DB_USERNAME_TEST,
    password: setting.settingDatabase.DB_PASSWORD_TEST,
    database: setting.settingDatabase.DB_NAME_TEST,
  },
  production: {
    host: setting.settingDatabase.DB_USERNAME_PROD,
    dialect: setting.settingDatabase.DB_DIALECT_PROD,
    username: setting.settingDatabase.DB_USERNAME_PROD,
    password: setting.settingDatabase.DB_PASSWORD_PROD,
    database: setting.settingDatabase.DB_NAME_PROD,
  },
}

const config = modeServer[setting.settingCommon.NODE_ENV]
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
