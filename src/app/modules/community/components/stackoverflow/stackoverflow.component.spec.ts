import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunityTestingModule } from './../../tests/community-testing.module';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppMaterialModule } from 'src/app/app-material.module';
import { StackoverflowComponent } from './stackoverflow.component';

describe('StackoverflowComponent', () => {
  let component: StackoverflowComponent;
  let fixture: ComponentFixture<StackoverflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StackoverflowComponent],
      imports: [AppMaterialModule, HttpClientTestingModule, CommunityTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackoverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should loads stack overflow posts during init', () => {
    expect(component.stackOverflowPosts.length).toBe(2);
  });
});
