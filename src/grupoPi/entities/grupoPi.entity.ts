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
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_grupopi' })
export class GrupoPi {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  @ApiProperty()
  numeroGrupo: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  @ApiProperty()
  maisInfos: string;

  @OneToOne(() => Projeto)
  @ApiProperty({ type: () => Projeto })
  projeto: Projeto;

  @ManyToOne(() => Turma, (turma) => turma.grupoPi)
  @ApiProperty({ type: () => Turma })
  turma: Turma;
}
