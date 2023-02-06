import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { SelectCharacterComponent } from './select-character/select-character.component';

const routes: Routes = [
  { path: '', component: SelectCharacterComponent },
  { path: 'new', component: CreateCharacterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
