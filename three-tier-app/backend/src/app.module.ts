import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import appConfig from './config/app'
import dbConfig from './config/db'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProjectModule } from './projects/project.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Project } from './model/project.entity'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, dbConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('dbHost'),
          port: configService.get('dbPort'),
          username: configService.get('dbUsername'),
          password: configService.get('dbPassword'),
          database: configService.get('dbDatabase'),
          entities: [Project],
        }
      },
      inject: [ConfigService],
    }),
    ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
