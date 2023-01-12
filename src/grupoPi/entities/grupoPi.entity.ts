import { IsNotEmpty } from 'class-validator';
import { Turma } from 'src/turma/entities/turma.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Projeto } from '../../projeto/entities/projeto.entity';

@Entity({ name: 'tb_grupopi' })
export class GrupoPi {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  numeroGrupo: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  maisInfos: string;

  @OneToOne(() => Projeto)
  projeto: Projeto;

  @ManyToOne(() => Turma, (turma) => turma.grupoPi)
  turma: Turma;
}
