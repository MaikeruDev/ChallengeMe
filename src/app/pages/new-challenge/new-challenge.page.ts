import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-challenge',
  templateUrl: './new-challenge.page.html',
  styleUrls: ['./new-challenge.page.scss'],
})
export class NewChallengePage implements OnInit {

  constructor() { }

  friends = [{uid: 'kasjldf', name: 'Mahannsen'}, {uid: 'raaaauul', name: 'RaAaAuL'}]

  ngOnInit() {
  }

}
