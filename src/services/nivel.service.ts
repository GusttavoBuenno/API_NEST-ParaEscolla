import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Nivel } from "src/models/nivel.model";


@Injectable()
export class NivelService {

    constructor(
        @InjectModel(Nivel)
        private nivelModel: typeof Nivel
    ) { }

    async buscarNivel(): Promise<Nivel[]> {
        return this.nivelModel.findAll();
    }

    async criaNivel(nivel): Promise<Nivel> {
        return this.nivelModel.create(nivel)
    }

}