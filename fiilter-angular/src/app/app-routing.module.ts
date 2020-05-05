import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiisContainerComponent } from './components/fiis-container/fiis-container.component';
import { FiisTableComponent } from './components/fiis-table/fiis-table.component';


const routes: Routes = [
  { path:'', component:FiisContainerComponent},
  { path:'table', component:FiisTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
