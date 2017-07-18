import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Player } from '../player'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players = [];
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this._apiService.retrieveAll()
    .then( players => {this.players = players; console.log(this.players)})
    .catch( err => {console.log(err)})
  }
  deletePlayer(player){
    console.log("in delete list component")
    let conf = confirm('Are you sure you want to delete '+player.name+'?')
    if(conf){
      this._apiService.delete(player)
      .then( players => {this.players = players})

    }
  }
}
