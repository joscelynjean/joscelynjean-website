import { AppMaterialModule } from './../../../app-material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSummaryComponent } from './project-summary.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProjectSummaryComponent', () => {
  let component: ProjectSummaryComponent;
  let fixture: ComponentFixture<ProjectSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule, HttpClientTestingModule],
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
});
