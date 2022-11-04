import { Response } from 'express'
import setting from '../setting'

export default (
   data: unknown,
   res: Response,
   status = setting.settingCommon.STATUS_CODE_DEFAULT,
) => {
   res.json(data).status(status)
}
