import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import dbConfig from '../config/db'
import { ProjectController } from './project.controller'
import { ProjectService } from './project.service'

@Module({
  imports: [ConfigModule.forRoot({
    load: [dbConfig],
  })],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule { }
