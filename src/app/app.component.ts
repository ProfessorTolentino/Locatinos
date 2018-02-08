import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'locatinos-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem vindo ao Locatinos - Sua locadora de carros online!'

  constructor() { }

  ngOnInit() {
  }

}
