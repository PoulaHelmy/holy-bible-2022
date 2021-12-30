import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeYoutubeUrl'
})
export class SafeYoutubeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url: string): any {
    if (url !== null && /^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.?be)\/.+$/.test(url)) {
      const newURL = url.split('=');
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${newURL[1]}?loop=1&modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&theme=light&autohide=0`);
    } else {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/LdgBV8qAxC8?loop=1&modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&theme=light&autohide=0`);
    }
  }
}
