import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Turma } from "src/models/Turma.models";


@Injectable()
export class TurmaService {

    constructor(
        @InjectModel(Turma)
        private turmaModel: typeof Turma
    ) { }

    async buscarTurmas(): Promise<Turma[]> {
        return this.turmaModel.findAll();
    }

    async criaTurma(turma): Promise<Turma> {
        return this.turmaModel.create(turma)
    }
}