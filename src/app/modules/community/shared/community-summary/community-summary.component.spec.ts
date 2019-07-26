import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppMaterialModule } from './../../../app-material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitySummaryComponent } from './community-summary.component';
import { StackoverflowComponent } from '../../stackoverflow/stackoverflow.component';
import { TwitterComponent } from '../../twitter/twitter.component';

describe('CommunitySummaryComponent', () => {
  let component: CommunitySummaryComponent;
  let fixture: ComponentFixture<CommunitySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommunitySummaryComponent, StackoverflowComponent, TwitterComponent],
      imports: [AppMaterialModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
