import { Table, Model, Column, ForeignKey, BelongsTo, HasMany, getAssociations } from "sequelize-typescript";
import { Pessoas } from "./Pessoas.models";
import { Turma } from "./Turma.models";



@Table
export class Matricula extends Model<Pessoas>{



    @Column
    status: string

    @ForeignKey(() => Pessoas)
    @Column
    turma_id: number

    @BelongsTo(() => Pessoas)
    pessoas: Pessoas


    @Column
    estudante_id: number







}


