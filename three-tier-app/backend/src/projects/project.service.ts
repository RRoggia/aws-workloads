import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService {
  getProjects(): Array<Number> {
    return [123,345];
  }
}
