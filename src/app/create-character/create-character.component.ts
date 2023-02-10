import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { HunterService } from '../hunter.service';
import { Hunter } from '../hunter';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent {

  hunterInfo!: Hunter;
  hunterType: string = "";

  createCharacterForm = this.formBuilder.group({

  });

  constructor(
    private hunterService: HunterService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const hunterType = this.route.snapshot.paramMap.get('hunterType')!;
    this.hunterService.getHunter(hunterType)
      .subscribe(data => {
        this.hunterInfo = data;
      });
  }

  onSubmit(): void {

  }

}
