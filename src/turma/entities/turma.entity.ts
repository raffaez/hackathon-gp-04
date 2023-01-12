import { IsNotEmpty } from 'class-validator';
import { GrupoPi } from 'src/grupoPi/entities/grupoPi.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_turma' })
export class Turma {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  descricao: string;

  @IsNotEmpty()
  @Column({ default: true })
  isAtivo: boolean;

  @OneToMany(() => GrupoPi, (grupoPi) => grupoPi.turma)
  grupoPi: GrupoPi[];
}
