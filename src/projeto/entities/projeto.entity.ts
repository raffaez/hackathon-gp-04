import { IsNotEmpty } from 'class-validator';
import { GrupoPi } from 'src/grupoPi/entities/grupoPi.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tb_projeto' })
export class Projeto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: false })
  nomeProjeto: string;

  @IsNotEmpty()
  @Column({ length: 5000, nullable: false })
  logoProjeto: string;

  @IsNotEmpty()
  @Column({ length: 5000, nullable: false })
  linkProjeto: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  pitProjeto: string;

  @OneToOne(() => GrupoPi)
  @JoinColumn()
  grupoPi: GrupoPi;
}
