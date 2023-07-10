import { Component, OnInit } from '@angular/core';
import { Fleur } from '../entities';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.scss'],
})
export class FlowerComponent implements OnInit {
  list: Fleur[] = [];

  constructor(private service: FlowerService) {} //this is an injection

  ngOnInit(): void {
    this.service.fetchAll().subscribe((data) => (this.list = data));
  }
  toList(fleur: Fleur) {
    this.service.add(fleur).subscribe((data) => this.list.push(data)); //adds persist
  }
}
