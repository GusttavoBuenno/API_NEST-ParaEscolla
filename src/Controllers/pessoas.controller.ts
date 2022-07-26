import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Pessoas } from '../models/Pessoas.models';
import { PessoasService } from "../services/pessoas.service";

@Controller('Pessoas')
export class PessoasController {
    constructor(private pessoasService: PessoasService) {

    }

    @Get()
    async obterTodos(): Promise<Pessoas[]> {
        return this.pessoasService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Pessoas> {
        return this.pessoasService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() Pessoas: Pessoas) {
        this.pessoasService.criar(Pessoas);
    }

    @Put()
    async alterar(@Body() livro: Pessoas): Promise<[number, Pessoas[]]> {
        return this.pessoasService.alterar(livro);
    }

    @Delete(':id')
    async apagar(@Param() params) {
        this.pessoasService.apagar(params.id);
    }
}