import { Request, Response } from "express"

const userCreateController = async(req: Request, res: Response) => {
    return res.send(req.body)
}

export default userCreateController