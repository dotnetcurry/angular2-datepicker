import { Component, OnInit } from '@angular/core';
import {DatepickerModule} from 'ng2-bootstrap';
import * as moment from 'moment';
import {Person} from './person.model';

@Component({
    selector: 'my-data',
    templateUrl: './app/myapp.html' 
})
export class AppComponent implements OnInit {
    person:Person;
    persons:Array<Person>;
    date:Date;
    minDate:Date;
    disabledDate:{dt:Date,mode:string};
    constructor() { 
      this.date = new Date();
      this.minDate = new Date();
      this.person = new Person(0,'',new Date());
      this.persons = new Array<Person>();     
      this.minDate.setDate(this.date.getDate()-1);
      this.person = new Person(0,'',new Date());
    }

    ngOnInit() { }

    clear(){
            this.person = new Person(0,'',new Date());     
    }
    save(){
        this.persons.push(this.person);
    }
}