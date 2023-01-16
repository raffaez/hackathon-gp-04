import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Projeto } from '../entities/projeto.entity';
import { addHttps } from 'src/helpers/addHttps';

@Injectable()
export class ProjetoService {
  nomeRepository: any;
  constructor(
    @InjectRepository(Projeto)
    private projetoRepository: Repository<Projeto>,
  ) {}

  async findAll(): Promise<Projeto[]> {
    return await this.projetoRepository.find({
      order: {
        nomeProjeto: 'ASC',
      },
      relations: ['grupoPi', 'grupoPi.turma'],
    });
  }

  async findById(id: number): Promise<Projeto> {
    const projeto = await this.projetoRepository.findOne({
      where: {
        id,
      },
      relations: ['grupoPi', 'grupoPi.turma'],
    });

    if (!projeto)
      throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);
    return projeto;
  }

  async findByName(nome: string): Promise<Projeto[]> {
    return await this.projetoRepository.find({
      where: {
        nomeProjeto: ILike(`%${nome}%`),
      },
      relations: ['grupoPi', 'grupoPi.turma'],
    });
  }

  async findByGrupo(grupoId: number): Promise<boolean> {
    const busca = await this.projetoRepository.find({
      where: {
        grupoPi: {
          id: grupoId,
        },
      },
    });

    if (busca.length > 0) return true;

    return false;
  }

  async create(projeto: Projeto): Promise<Projeto> {
    projeto.logoProjeto = addHttps(projeto.logoProjeto);
    projeto.linkProjeto = addHttps(projeto.linkProjeto);
    projeto.pitProjeto = addHttps(projeto.pitProjeto);

    return await this.projetoRepository.save(projeto);
  }

  async update(projeto: Projeto): Promise<Projeto> {
    const buscaProjeto: Projeto = await this.findById(projeto.id);

    if (!buscaProjeto || !projeto.id)
      throw new HttpException('Turma não encontrada', HttpStatus.NOT_FOUND);

    return await this.projetoRepository.save(projeto);
  }

  async delete(id: number): Promise<DeleteResult> {
    const buscaProjeto = await this.findById(id);

    if (!buscaProjeto)
      throw new HttpException('Turma não encontrada', HttpStatus.NOT_FOUND);

    return await this.projetoRepository.delete(id);
  }
}
