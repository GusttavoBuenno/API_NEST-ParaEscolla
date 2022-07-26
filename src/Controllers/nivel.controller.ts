import { Controller, Get, Put, Body, Post } from "@nestjs/common";
import { Nivel } from "../models/Nivel.models";
import { NivelService } from "src/services/nivel.service";


@Controller('nivel')

export class NivelController {
    constructor(private nivelService: NivelService) {

    }

    @Get()
    async buscarNivel(): Promise<Nivel[]> {
        return this.nivelService.buscarNivel();
    }

    @Post()
    async criaNivel(@Body() nivel: Nivel) {
        this.nivelService.criaNivel(nivel)
    }

}