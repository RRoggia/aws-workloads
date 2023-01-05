import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/model/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(@InjectRepository(Project)
  private projectRepository: Repository<Project>) { }

  getProjects(): Promise<Project[]> {
    return this.projectRepository.find();
  }
}
