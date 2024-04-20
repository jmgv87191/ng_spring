import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit  {

  counter:number = 0;
  @Input() title:string = '';
  @Output() emmitCounter:EventEmitter<number> = new EventEmitter

  ngOnInit(): void {
    this.counter = Number(sessionStorage.getItem('counter'));
  }
  


  setCounter(){
    this.counter = this.counter + 1;
    sessionStorage.setItem('counter',String(this.counter));
    this.emmitCounter.emit( Number(sessionStorage.getItem('counter')) )
  }

}
