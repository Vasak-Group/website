import { Component, OnInit } from '@angular/core';
import * as techs from '../../../assets/data/techs.json';

@Component({
  selector: 'app-tecnologys',
  templateUrl: './tecnologys.component.html',
  styleUrls: ['./tecnologys.component.css']
})
export class TecnologysComponent implements OnInit {
  techlist = techs.list

  constructor() {
    console.log(this.techlist)
  }

  ngOnInit(): void {
  }

}
