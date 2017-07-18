import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Player } from '../player'

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  game = 'game1';
  gamedisplay = 1;
  players = [];
  constructor(private _apiService:ApiService) { }

  ngOnInit() {
    this._apiService.retrieveAll()
    .then( players => {this.players = players; console.log(this.players)})
    .catch( err => {console.log(err)})
  }

  setGame(game){
    console.log("in click game func", game)
    this.game = game;
  }

  playing(player){
    player.games[this.game] = "playing";
    this._apiService.update(player)
    this._apiService.retrieveAll()
    .then( players => {this.players = players; console.log(this.players)})
    .catch( err => {console.log(err)})
  }
  notPlaying(player){
    player.games[this.game]= "notPlaying";
    this._apiService.update(player)
    this._apiService.retrieveAll()
    .then( players => {this.players = players; console.log(this.players)})
    .catch( err => {console.log(err)})
  }

  undecided(player){
    player.games[this.game] = "undecided"
    this._apiService.update(player)
    this._apiService.retrieveAll()
    .then( players => {this.players = players; console.log(this.players)})
    .catch( err => {console.log(err)})
  }
}
