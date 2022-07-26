import { Body, Controller, Get, Post } from "@nestjs/common";
import { Turma } from "src/models/turma.model";
import { TurmaService } from "src/services/turma.service";


@Controller('turma')
export class TurmaController {
    constructor(private turmaService: TurmaService) {

    }

    @Get()
    async buscaTurmas(): Promise<Turma[]> {
        return this.turmaService.buscarTurmas();
    }

    @Post()
    async criaTurma(@Body() turma: Turma) {
        this.turmaService.criaTurma(turma)
    }
}