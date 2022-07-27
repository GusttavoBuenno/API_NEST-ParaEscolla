import { Column, Table, Model, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Pessoas } from "./Pessoas.models";




@Table
export class Nivel extends Model<Nivel>{


    @ForeignKey(() => Pessoas)
    @Column
    descr_nivel: string

    @BelongsTo(() => Pessoas)
    pessoas: Pessoas



}


