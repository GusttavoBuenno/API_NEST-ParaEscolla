import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Matricula } from "src/models/Matricula.models";
import { Nivel } from "src/models/Nivel.models";
import { Turma } from "src/models/Turma.models";
import { Pessoas } from "../models/Pessoas.models";

@Injectable()
export class PessoasService {
    constructor(
        @InjectModel(Pessoas)
        private pessoasModel: typeof Pessoas
    ) { }

    async obterTodos(): Promise<Pessoas[]> {
        return this.pessoasModel.findAll();
    }

    async obterUm(id: number): Promise<Pessoas> {
        return this.pessoasModel.findByPk(id);
    }

    async criar(pessoas: Pessoas) {
        this.pessoasModel.create(pessoas);
    }

    async alterar(pessoas: Pessoas): Promise<[number, Pessoas[]]> {
        return this.pessoasModel.update(pessoas, {
            where: {
                id: pessoas.id
            }
        });
    }

    async apagar(id: number) {
        const pessoas: Pessoas = await this.obterUm(id);
        pessoas.destroy();
    }
}