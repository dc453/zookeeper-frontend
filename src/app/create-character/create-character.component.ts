import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hunter } from '../hunter';

import { HunterService } from '../hunter.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent {

  hunterInfo!: Hunter;
  hunterType: string = "";

  constructor(
    private hunterService: HunterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const hunterType = this.route.snapshot.paramMap.get('hunterType')!;
    this.hunterService.getHunter(hunterType)
      .subscribe(data => {
        this.hunterInfo = data;
        this.hunterType = data.name;
      });
  }

}
