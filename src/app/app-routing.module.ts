import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LivestreamComponent } from './livestream/livestream.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  { path: '', component: SidenavComponent },
  { path: 'livform', component: LivestreamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
