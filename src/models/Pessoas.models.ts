import { Table, Model, Column, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Matricula } from "./Matricula.models";






@Table
export class Pessoas extends Model<Pessoas> {
    @Column
    nome: string;
    allowNull: false;


    @Column
    email: string;

    @Column

    ativo: number;

    @Column
    role: string

    @ForeignKey(() => Matricula)
    @Column
    nivel_id: number

    @BelongsTo(() => Matricula)
    estudante_id: Matricula

}





