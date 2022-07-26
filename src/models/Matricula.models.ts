import { Table, Model, Column, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Pessoas } from "./Pessoas.models";




@Table
export class Matricula extends Model<Matricula>{

    @Column
    estudante_id: number

    @Column
    status: string

    @Column
    turma_id: number

    @ForeignKey(() => Pessoas)
    @Column
    nivel_id: number


}


