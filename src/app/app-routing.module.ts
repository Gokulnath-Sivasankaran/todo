import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddNoteComponent } from './screens/add-note/add-note.component';

const routes: Routes = [
  // {path:'', redirectTo:'home', component: HomeComponent, pathMatch: 'full'},
  { path:'home', component: HomeComponent},
  {path: 'add-note', component: AddNoteComponent},
  // { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
