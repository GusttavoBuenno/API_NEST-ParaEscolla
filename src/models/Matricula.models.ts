import { Table, Model, Column, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";




@Table
export class Matricula extends Model<Matricula>{

    @Column
    estudante_id: number

    @Column
    status: string

    @Column
    turma_id: number

    @ForeignKey(() => Pessoas)
    @Column
    nivel_id: number

    @BelongsTo(() => Pessoas)
    pessoas: Pessoas
}

@Table
class Pessoas extends Model {
    @Column
    name: string

    @HasMany(() => Pessoas)
    pessoas: Pessoas[]
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