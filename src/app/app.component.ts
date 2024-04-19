import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'spring_repaso';
  visible: boolean = true;

  nombres:string[] = ['juan','pedro','alo','ese']

  setVisible(){
    this.visible = this.visible? false : true
  }




}