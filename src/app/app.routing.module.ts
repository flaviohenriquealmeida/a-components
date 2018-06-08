import { Routes } from '@angular/router';
import { HtmlControlsComponent } from './html-controls-component/html-controls.component';

export const routes: Routes = [
    { path: 'html', component: HtmlControlsComponent },
    { path: '**', component: HtmlControlsComponent }   
];