import { Component, OnInit } from '@angular/core';
import socials from '../../../assets/data/social.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socialList = socials.list;

  constructor() { }

  ngOnInit(): void {
  }

}
