import { AppMaterialModule } from './../../../../../app-material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSummaryComponent } from './project-summary.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProjectTestingModule } from '../../../tests/project-testing.module';

describe('ProjectSummaryComponent', () => {
  let component: ProjectSummaryComponent;
  let fixture: ComponentFixture<ProjectSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule, HttpClientTestingModule, ProjectTestingModule],
      declarations: [ProjectSummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should loads github projects during init.', () => {
    expect(component.githubProjects.length).toBe(3);
  });

});
