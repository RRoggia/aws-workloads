import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Project } from 'src/model/project.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ProjectService {

  constructor(@InjectRepository(Project)
  private projectRepository: Repository<Project>) { }

  getProjects(): Promise<Project[]> {
    return this.projectRepository.find()
  }

  getProject(id: number): Promise<Project> {
    return this.projectRepository.findOneBy({ id })
  }

  createProject(p: Project): Promise<Project>{
    const e = this.projectRepository.create(p)
    return this.projectRepository.save(e)
  }

  async deleteProject(id: number): Promise<void> {
    await this.projectRepository.delete(id)
  }
}
