import { Body, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Matricula } from "../models/Matricula.models";


@Injectable()

export class MatriculaService {
    constructor(
        @InjectModel(Matricula)
        private matriculaModel: typeof Matricula
    ) { }

    async buscaMatricula(): Promise<Matricula[]> {
        return this.matriculaModel.findAll();
    }

    async criaMatricula(matricula): Promise<Matricula> {
        return this.matriculaModel.create(matricula)
    }
}