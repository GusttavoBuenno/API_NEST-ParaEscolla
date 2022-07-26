import { Column, Table, Model, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";




@Table
export class Nivel extends Model<Nivel>{

    @Column
    descr_nivel: string

    @ForeignKey(() => Turma)
    @Column
    descrID: string


    @BelongsTo(() => Turma)
    turma: Turma
}

@Table
class Turma extends Model {
    @Column
    descr_nivel: string

    @HasMany(() => Nivel)
    nivel: Nivel[]
}
