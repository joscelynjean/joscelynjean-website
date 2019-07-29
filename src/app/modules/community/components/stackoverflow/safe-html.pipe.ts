import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Used to unescape a string and trust the html that is
 * generated.
 */
@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) { }

  /**
   * Bypass the security and trust the html.
   * @param value Value to trust.
   */
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

}
