import { Component, OnInit } from '@angular/core';

export interface User {
  uid: string,
  displayName: string,
  email: string,
  photoURL: any
}

@Component({
  selector: 'app-podium',
  templateUrl: './podium.page.html',
  styleUrls: ['./podium.page.scss'],
})
export class PodiumPage implements OnInit {

  constructor() { }

  user: User

  ngOnInit() {
    this.user = {uid: '6969', displayName: 'Maikeru', email: 'michael@prietl.com', photoURL: 'https://avatars.githubusercontent.com/u/78266557?v=4'}
  }

}
