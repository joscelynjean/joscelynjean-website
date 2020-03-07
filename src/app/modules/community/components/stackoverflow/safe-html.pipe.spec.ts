import { async, TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {
  let domSanitizer: DomSanitizer;
  let pipe: SafeHtmlPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: DomSanitizer, useValue: {
          sanitize: () => 'safeString',
          bypassSecurityTrustHtml: () => 'safeString'
        }
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    domSanitizer = TestBed.get(DomSanitizer);
    pipe = new SafeHtmlPipe(domSanitizer);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should bypass angular security and make string safe', () => {
    const someSafeString = '&quot;&eacute;&agrave;&amp;';
    let result = pipe.transform(someSafeString);
    expect(result).toEqual('safeString');

    const someUnsafeString = '&lt;script&gt;alert(&quot;unsafe&quot;);&lt;/script&gt;';
    result = pipe.transform(someUnsafeString);
    expect(result).toEqual('safeString');
  });
});
