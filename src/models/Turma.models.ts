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




// @Table
// class Player extends Model {
//   @Column
//   name: string

//   @Column
//   num: number

//   @ForeignKey(() => Team)
//   @Column
//   teamId: number

//   @BelongsTo(() => Team)
//   team: Team
// }

// @Table
// class Team extends Model {
//   @Column
//   name: string

//   @HasMany(() => Player)
//   players: Player[]
// }