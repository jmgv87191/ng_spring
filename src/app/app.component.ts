import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'spring_repaso';
  visible: boolean = true;
  subtitle = 'esto viene desde el padre';
  counter:number = 0;
  nombres:string[] = ['juan','pedro','alo','ese'];

  ngOnInit(): void {
    this.counter = Number(sessionStorage.getItem('counter'))
  }

  setVisible(){
    this.visible = this.visible? false : true
  }

  setCounter( event: number ){
    this.counter = event
  }


}