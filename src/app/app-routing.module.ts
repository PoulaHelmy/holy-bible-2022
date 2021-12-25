import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'journey1',
    loadChildren: () => import('./pages/page1/page1.module').then(m => m.Page1Module)
  },
  {
    path: 'journey2',
    loadChildren: () => import('./pages/page2/page2.module').then(m => m.Page2Module)
  },
  {
    path: 'journey3',
    loadChildren: () => import('./pages/page3/page3.module').then(m => m.Page3Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
