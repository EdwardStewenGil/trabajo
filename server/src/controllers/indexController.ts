import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.json({text: 'API is in /conceptos  ,  /cuentas  ,  /conceptocuenta  ,  /empresas  '});
    }

}

export const indexController = new IndexController;