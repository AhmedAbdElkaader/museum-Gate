import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosDetComponent } from './Detels/videos-det/videos-det.component';
import { VideosListComponent } from './Pages/videos-list/videos-list.component';


const routes: Routes = [
  { path: "", component: VideosListComponent },
  { path: "Mussem", component: VideosListComponent },
  { path: 'Mussemdet/:id', component: VideosDetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
