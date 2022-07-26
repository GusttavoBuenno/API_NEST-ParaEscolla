import { Table, Model, Column, DataType, } from "sequelize-typescript";
import { Nivel } from "./nivel.model";

@Table
export class Pessoas extends Model<Pessoas> {
    @Column({
        type: DataType.STRING(60),
        allowNull: false,
    })
    nome: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    ativo: number;

    @Column({
        type: DataType.STRING,

    })
    role: string;




}