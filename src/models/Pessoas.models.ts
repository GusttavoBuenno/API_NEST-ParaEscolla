import { Table, Model, Column, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Matricula } from "./Matricula.models";
import { Nivel } from "./Nivel.models";
import { Turma } from "./Turma.models";






@Table
export class Pessoas extends Model<Matricula> {
    @Column
    nome: string;
    allowNull: false;


    @Column
    email: string;

    @Column

    ativo: number;

    @Column
    role: string


    @HasMany(() => Matricula)
    matriculas: Matricula[]




}





