import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locatinos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  title="Locatinos"
  subTitle="Sua locadora de carros online!"

  constructor() { }

  ngOnInit() {
  }

}
