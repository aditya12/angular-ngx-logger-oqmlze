import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'NGX-Logger';
  constructor(private logger: NGXLogger) {
    this.logger.trace('Tracing is colored blue');
    this.logger.debug('Multiple', 'Argument', 'support');
    this.logger.info('Info helps the UX');
    this.logger.log('Your log message goes here');
    this.logger.warn('Warnings are highlighted');
  }
}
