import { Table, Model, Column, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Col } from "sequelize/types/lib/utils";




@Table
export class Pessoas extends Model {
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
    estudante_id: string

    @BelongsTo(() => Matricula)
    matricula: Matricula

}

@Table
class Matricula extends Model {
    @Column
    name: string

    @HasMany(() => Matricula)
    matriculas: Matricula[]
}



