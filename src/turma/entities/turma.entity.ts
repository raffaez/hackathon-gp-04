import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { GrupoPi } from 'src/grupoPi/entities/grupoPi.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_turma' })
export class Turma {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  @ApiProperty()
  descricao: string;

  @IsNotEmpty()
  @Column({ default: true })
  @ApiProperty()
  isAtivo: boolean;

  @OneToMany(() => GrupoPi, (grupoPi) => grupoPi.turma)
  @ApiProperty({ type: () => GrupoPi })
  grupoPi: GrupoPi[];
}
