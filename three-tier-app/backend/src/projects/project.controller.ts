import { Controller, Get } from '@nestjs/common';
import { Project } from 'src/model/project.entity';
import { ProjectService } from './project.service';

@Controller("/projects")
export class ProjectController {
  constructor(private readonly projectService: ProjectService) { }

  @Get()
  getProjects(): Promise<Project[]> {
    return this.projectService.getProjects();
  }
}
