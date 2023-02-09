import { Component } from '@angular/core';
import { HunterService } from '../hunter.service';

@Component({
  selector: 'app-select-hunter-type',
  templateUrl: './select-hunter-type.component.html',
  styleUrls: ['./select-hunter-type.component.scss']
})
export class SelectHunterTypeComponent {

  hunterOptions: any;

  constructor(private hunterService: HunterService) {}

  ngOnInit() {
    this.hunterService.getHunters()
      .subscribe(hunters => {
        this.hunterOptions = hunters;
      }); 
  }

}
