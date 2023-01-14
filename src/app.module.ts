import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { GrupoPiModule } from './grupoPi/grupoPi.module';
import { projetoModule } from './projeto/projeto.module';
import { TurmaModule } from './turma/turma.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '14253500',
    //   database: 'db_hackathon',
    //   entities: [Turma, GrupoPi, Projeto],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
      autoLoadEntities: true,
    }),
    TurmaModule,
    GrupoPiModule,
    projetoModule,
  ],

  controllers: [AppController],
  providers: [],
})
export class AppModule {}
