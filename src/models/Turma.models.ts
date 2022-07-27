import { Table, Model, Column, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";



@Table

export class Turma extends Model<Turma> {

    @Column

    docente_id: number;

    @Column

    data_inicio: Date;

    @Column
    nivel_id: number;




}


