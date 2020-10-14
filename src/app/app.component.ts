import { Component , OnInit} from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  template: `<app-customers></app-customers> `
})
export class AppComponent implements  OnInit {


  ngOnInit(): void {


  }

}
