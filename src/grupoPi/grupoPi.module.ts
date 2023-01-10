import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GrupoPi } from "./entities/grupoPi.entity";

@Module({
    
    imports:[TypeOrmModule.forFeature([GrupoPi])],
    providers:[],
    controllers:[],
    exports:[TypeOrmModule]

})

export class GrupoPiModule{}