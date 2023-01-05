import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { Project } from 'src/model/project.entity';
import { ProjectService } from './project.service';

@Controller("/projects")
export class ProjectController {
  constructor(private readonly projectService: ProjectService) { }

  @Get()
  getProjects(): Promise<Project[]> {
    return this.projectService.getProjects();
  }
  @Get(":id")
  getProject(@Param('id') id: number): Promise<Project> {
    return this.projectService.getProject(id);
  }

  @Post()
  @HttpCode(201)
  createProject(@Body() project: Project): Promise<Project> {
    return this.projectService.createProject(project)
  }

  @Delete(":id")
  deleteProject(@Param('id') id: number): Promise<void> {
    return this.projectService.deleteProject(id)
  }
}
