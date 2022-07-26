import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Matricula } from "src/models/Matricula.models";
import { Pessoas } from "../models/Pessoas.models";

@Injectable()
export class PessoasService {
    constructor(
        @InjectModel(Pessoas)
        private pessoasModel: typeof Pessoas
    ) { }

    async obterTodos(): Promise<Pessoas[]> {
        return this.pessoasModel.findAll({ include: [Matricula] });
    }

    async obterUm(id: number): Promise<Pessoas> {
        return this.pessoasModel.findByPk(id);
    }

    async criar(livro: Pessoas) {
        this.pessoasModel.create(livro);
    }

    async alterar(livro: Pessoas): Promise<[number, Pessoas[]]> {
        return this.pessoasModel.update(livro, {
            where: {
                id: livro.id
            }
        });
    }

    async apagar(id: number) {
        const livro: Pessoas = await this.obterUm(id);
        livro.destroy();
    }
}