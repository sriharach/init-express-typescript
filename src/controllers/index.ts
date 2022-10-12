import { NextFunction, Response, Request } from "express"


export const index = (_req: Request, _res: Response, _next: NextFunction) => {
  try {
    _res.send('eeeee')
  } catch (error) {
    _next(error)
  }
}
