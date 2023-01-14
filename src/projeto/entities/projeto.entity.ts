import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty()
  id: number;

  @Column({ length: 50, nullable: false })
  @ApiProperty()
  nomeProjeto: string;

  @IsNotEmpty()
  @Column({ length: 5000, nullable: false })
  @ApiProperty()
  logoProjeto: string;

  @IsNotEmpty()
  @Column({ length: 5000, nullable: false })
  @ApiProperty()
  linkProjeto: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  @ApiProperty()
  pitProjeto: string;

  @OneToOne(() => GrupoPi)
  @JoinColumn()
  @ApiProperty({ type: () => GrupoPi })
  grupoPi: GrupoPi;
}
