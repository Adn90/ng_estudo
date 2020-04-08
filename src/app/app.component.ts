import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public color = "roxo";

  public nome = "CanalGeekDev";

  public info = {"id": 1, "nome": "João" , "idade": 31};

  public date = new Date();
}
