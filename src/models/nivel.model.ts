import { Table, Column, DataType, Model } from "sequelize-typescript";




@Table

export class Nivel extends Model<Nivel> {


    @Column({
        type: DataType.STRING
    })

    descr_nivel: string



}