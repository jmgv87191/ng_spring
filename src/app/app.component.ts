import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {


  title = 'spring_repaso';
  visible: boolean = true;
  subtitle = 'esto viene desde el padre'

  nombres:string[] = ['juan','pedro','alo','ese']

  setVisible(){
    this.visible = this.visible? false : true
  }




}