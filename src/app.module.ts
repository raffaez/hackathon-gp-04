import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GrupoPi } from './grupoPi/entities/grupoPi.entity';
import { GrupoPiModule } from './grupoPi/grupoPi.module';
import { Projeto } from './projeto/entities/projeto.entity';
import { projetoModule } from './projeto/projeto.module';
import { Turma } from './turma/entities/turma.entity';
import { TurmaModule } from './turma/turma.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '14253500',
      database: 'db_hackathon',
      entities: [Turma, GrupoPi, Projeto],
      synchronize: true,
    }),
    TurmaModule,
    GrupoPiModule,
    projetoModule,
  ],

  controllers: [AppController],
  providers: [],
})
export class AppModule {}
