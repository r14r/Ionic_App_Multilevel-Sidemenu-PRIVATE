import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  loadChildren: './pages/home/home.module#HomePageModule' },
    { path: 'demo1', loadChildren: './pages/demo/1/page.module#Demo1PageModule' },
    { path: 'demo2', loadChildren: './pages/demo/2/page.module#Demo2PageModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
