import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from './../../../../app-material.module';
import { CommunityModule } from './../../../community/community.module';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileModule } from 'src/app/modules/profile/profile.module';
import { ProjectModule } from 'src/app/modules/projects/project.module';
import { SummaryComponent } from './summary.component';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AppMaterialModule, ProfileModule, ProjectModule, CommunityModule],
      declarations: [SummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
