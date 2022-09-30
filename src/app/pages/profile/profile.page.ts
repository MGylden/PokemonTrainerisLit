import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemons.models';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css']
})
export class ProfilePage implements OnInit {

  get user(): User | undefined {
    return this.userService.user;
  }

  get pokemon(): Pokemon[]{
    if(this.userService.user) {
      return this.userService.user.pokemon
    }
    return [];
  }

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

}
