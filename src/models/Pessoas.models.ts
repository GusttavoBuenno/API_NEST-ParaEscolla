import { Table, Model, Column, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Matricula } from "./Matricula.models";
import { Turma } from "./Turma.models";






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
    docente_id: number

    @ForeignKey(() => Matricula)
    estudante_id: Matricula

}





