import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller("/projects")
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  getProjects(): Array<Number> {
    return this.projectService.getProjects();
  }
}
