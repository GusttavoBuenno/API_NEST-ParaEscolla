import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pessoas } from './models/pessoas.model';
import { PessoasController } from './Controllers/pessoas.controller';
import { PessoasService } from './services/pessoas.service';
import { TurmaController } from './Controllers/turma.controller';
import { TurmaService } from './services/turma.service';
import { Turma } from './models/turma.model';
import { Matricula } from './models/matricula.model';
import { Nivel } from './models/nivel.model';
import { NivelController } from './Controllers/nivel.controller';
import { MatriculaController } from './Controllers/matricula.controller';
import { NivelService } from './services/nivel.service';
import { MatriculaService } from './services/matricula.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'guhzika10',
      database: 'alunos_js',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Pessoas, Turma, Matricula, Nivel])
  ],
  controllers: [AppController, PessoasController, TurmaController, NivelController, MatriculaController],
  providers: [AppService, PessoasService, TurmaService, NivelService, MatriculaService],
})
export class AppModule { }
