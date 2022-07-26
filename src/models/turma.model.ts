import { Table, Column, DataType, Model } from "sequelize-typescript";


@Table

export class Turma extends Model<Turma> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    docente_id: string;

    @Column({
        allowNull: false

    })
    data_inicio: string;

}