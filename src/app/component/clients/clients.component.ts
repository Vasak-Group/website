import { Component, OnInit } from '@angular/core';
import clients from "../../../assets/data/clients.json"

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clientsList;

  constructor() {
    this.clientsList = clients.list;
    console.log(this.clientsList.filter((elem) =>{elem.show}))
  }

  ngOnInit(): void {

  }

}
