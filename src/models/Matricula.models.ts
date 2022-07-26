import { Table, Model, Column, ForeignKey, BelongsTo, HasMany, getAssociations } from "sequelize-typescript";
import { Pessoas } from "./Pessoas.models";
import { Turma } from "./Turma.models";



@Table
export class Matricula extends Model<Matricula>{



    @Column
    status: string

    @ForeignKey(() => Turma)
    @Column
    turma_id: number

    @ForeignKey(() => Pessoas)
    @Column
    estudante_id: number

    @BelongsTo(() => Pessoas)
    pessoas: Pessoas[]






}


