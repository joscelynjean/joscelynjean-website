import { SafeHtmlPipe } from './safe-html.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { async, TestBed } from '@angular/core/testing';

describe('SafeHtmlPipe', () => {
  let domSanitizer: DomSanitizer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: DomSanitizer, useValue: {
          sanitize: () => 'safeString',
          bypassSecurityTrustHtml: () => 'safeString'
        }
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    domSanitizer = TestBed.get(DomSanitizer);
  });

  it('create an instance', () => {
    const pipe = new SafeHtmlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
