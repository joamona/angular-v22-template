import { Routes } from '@angular/router';
import { Home } from './components/home/home';  
import { Help } from './components/help/help';
import { About } from './components/about/about';
import { SumForm } from './components/forms/sum-form/sum-form';
import { MapComponent } from './components/map/map.component';


export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'help', component: Help},
    {path: 'about', component: About},
    {path: 'sum-form', component: SumForm},
    {path: 'map', component: MapComponent},
];
