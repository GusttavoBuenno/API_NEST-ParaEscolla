import { Controller, Get, Post, Body } from "@nestjs/common";
import { Matricula } from "src/models/matricula.model";
import { MatriculaService } from "src/services/matricula.service";


@Controller('matricula')

export class MatriculaController {
    constructor(private matriculaService: MatriculaService) {

    }

    @Get()
    async buscaMatricula(): Promise<Matricula[]> {
        return this.matriculaService.buscaMatricula();
    }

    @Post()
    async criaTurmas(@Body() matricula: Matricula) {
        this.matriculaService.criaMatricula(matricula)
    }

}