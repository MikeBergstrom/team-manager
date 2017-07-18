import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Player } from '../player'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  player = new Player();
  constructor(private _apiService: ApiService, private _router:Router) { }

  ngOnInit() {
  }

  addPlayer(){
    console.log("add player function")
    this._apiService.create(this.player);
    this.player = new Player();
    this._router.navigateByUrl('/')
  }
}
