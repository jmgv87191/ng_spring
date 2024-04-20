import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  
  counter:number = 0;
  @Input() title:string = '';

  ngOnInit(): void {

    this.counter = Number(sessionStorage.getItem('counter'))

  }


  setCounter(){
    this.counter = this.counter + 1
    sessionStorage.setItem('counter', String(this.counter))
  }

}
