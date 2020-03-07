import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { mockedProjects } from '../tests/project-testing.service';
import { ProjectService } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(ProjectService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert response to projects', done => {
    const data = { data: mockedProjects };
    service.getGithubProjects().subscribe(projects => {
      expect(projects.length).toBe(mockedProjects.length);
      expect(projects).toEqual(mockedProjects);
      done();
    });

    const request = httpMock.expectOne(req => req.url === service.gitHubUrl);
    expect(request.request.method).toBe('JSONP');
    request.flush(data);
    httpMock.verify();

  });
});
