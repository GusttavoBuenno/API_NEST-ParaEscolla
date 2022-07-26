import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Matricula } from "src/models/Matricula.models";
import { Nivel } from "src/models/Nivel.models";


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