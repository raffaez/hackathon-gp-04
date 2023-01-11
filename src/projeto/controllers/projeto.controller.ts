import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ProjetoService } from '../services/projeto.service';
import { get } from 'http';
import { Projeto } from '../entities/projeto.entity';

@Controller('/projetos')
export class ProjetoController {
  constructor(private readonly projetoService: ProjetoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Projeto[]> {
    return this.projetoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Projeto> {
    return this.projetoService.findById(id);
  }
}
