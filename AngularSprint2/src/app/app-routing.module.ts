import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DCComponent } from './dc/dc.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MarvelComponent } from './marvel/marvel.component';

const routes: Routes = [
  {path:"",component:HomePageComponent },
  {path:"Marvel",component:MarvelComponent },
  {path:"DC",component:DCComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
