import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import appConfig from './config/app'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProjectModule } from './projects/project.module'

@Module({
  imports: [ConfigModule.forRoot({
    load: [appConfig],
  }), ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
