import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GrupoPi } from '../entities/grupoPi.entity';
import { DeleteResult, ILike, Repository } from 'typeorm';

@Injectable()
export class GrupoPiService {
  constructor(
    @InjectRepository(GrupoPi)
    private grupoPiRepository: Repository<GrupoPi>,
  ) {}

  async findAll(): Promise<GrupoPi[]> {
    return await this.grupoPiRepository.find({
      order: {
        numeroGrupo: 'ASC',
      },
      relations: {
        turma: true,
      },
    });
  }

  async findById(id: number): Promise<GrupoPi> {
    const grupoPi = await this.grupoPiRepository.findOne({
      where: {
        id,
      },
      relations: {
        turma: true,
      },
    });

    if (!grupoPi)
      throw new HttpException('Grupo não encontrado!', HttpStatus.NOT_FOUND);
    return grupoPi;
  }

  async findByGrupo(numeroGrupo: string): Promise<GrupoPi[]> {
    return await this.grupoPiRepository.find({
      where: {
        numeroGrupo: ILike(`%${numeroGrupo}%`),
      },
      relations: {
        turma: true,
      },
    });
  }

  async findByTurma(numeroGrupo: string, turmaId: number): Promise<boolean> {
    const busca = await this.grupoPiRepository.find({
      where: {
        numeroGrupo: ILike(`%${numeroGrupo}%`),
        turma: {
          id: turmaId,
        },
      },
    });

    if (busca.length > 0) return true;

    return false;
  }

  async create(grupo: GrupoPi): Promise<GrupoPi> {
    return await this.grupoPiRepository.save(grupo);
  }

  async update(grupo: GrupoPi): Promise<GrupoPi> {
    const buscaGrupo: GrupoPi = await this.findById(grupo.id);
    if (!buscaGrupo || !grupo.id)
      throw new HttpException('Grupo não encontrado!', HttpStatus.NOT_FOUND);

    return await this.grupoPiRepository.save(grupo);
  }

  async delete(id: number): Promise<DeleteResult> {
    const buscaGrupo: GrupoPi = await this.findById(id);

    if (!buscaGrupo)
      throw new HttpException('Grupo não encontrado!', HttpStatus.NOT_FOUND);

    return await this.grupoPiRepository.delete(id);
  }
}
