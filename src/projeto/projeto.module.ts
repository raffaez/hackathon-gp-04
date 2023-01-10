import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Projeto } from "./entities/projeto.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Projeto])],
    providers:[],
    controllers:[],
    exports:[TypeOrmModule]
})
export class projetoModule{}