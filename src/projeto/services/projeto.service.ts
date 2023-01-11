import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Projeto } from '../entities/projeto.entity';

@Injectable()
export class ProjetoService {
  nomeRepository: any;
  constructor(
    @InjectRepository(Projeto)
    private projetoRepository: Repository<Projeto>,
  ) {}

  async findAll(): Promise<Projeto[]> {
    return await this.projetoRepository.find();
  }

  async findById(id: number): Promise<Projeto> {
    const projeto = await this.projetoRepository.findOne({
      where: {
        id,
      },
    });

    if (!projeto)
      throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);
    return projeto;
  }

  async findByNome(nome: string): Promise<Projeto[]> {
    return await this.nomeRepository.find({
      where: {
        Projeto: ILike(`%${nome}`),
      },
    });
  }
}
