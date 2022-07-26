import { Table, Column, Model, DataType, ForeignKey } from "sequelize-typescript"


@Table

export class Matricula extends Model<Matricula>{


    @Column({
        allowNull: false,


    })
    estudante_id: string

    @Column({
        type: DataType.STRING,
    })

    status: string

    @Column({
        allowNull: false,


    })
    turma_id: string
}