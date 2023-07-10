import { Component, OnInit } from '@angular/core';
import { Fleur } from '../entities';
import { ActivatedRoute } from '@angular/router';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-single-flower',
  templateUrl: './single-flower.component.html',
  styleUrls: ['./single-flower.component.scss'],
})
export class SingleFlowerComponent implements OnInit {
  fleur: Fleur;
  editing = false;

  constructor(private route: ActivatedRoute, private service: FlowerService) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.service
        .fetchOne(params['id'])
        .subscribe((data) => (this.fleur = data))
    );
  }

  updateFleur(fleur: Fleur) {
    this.service.update(fleur).subscribe((data) => (this.fleur = data));
    this.service.update(fleur).subscribe((data) => {
      this.fleur = data;
      this.editing = false;
    });
  }
}
