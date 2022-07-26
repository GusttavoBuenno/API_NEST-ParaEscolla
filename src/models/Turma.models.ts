import { Table, Model, Column, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";



@Table

export class Turma extends Model<Turma> {
    @ForeignKey(() => Matricula)
    @Column

    docente_id: number;

    @Column

    data_inicio: Date;


    @BelongsTo(() => Matricula)
    matricula: Matricula

}

@Table
class Matricula extends Model {
    @Column
    estudante_id: number

    @HasMany(() => Turma)
    turma: Turma[]
}

