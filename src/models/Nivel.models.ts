import { Column, Table, Model, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";




@Table
export class Nivel extends Model<Nivel>{



    @Column
    descr_nivel: string



}


