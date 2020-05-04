import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiisContainerComponent } from './components/fiis-container/fiis-container.component';


const routes: Routes = [
  { path:'', component:FiisContainerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
