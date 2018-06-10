import { Routes } from '@angular/router';
import { HtmlControlsComponent } from './html-controls-component/html-controls.component';
import { ComponentShowCaseComponent } from './component-show-case/component-show-case.component';

export const routes: Routes = [
    { path: 'html', component: HtmlControlsComponent },
    { path: 'show-case', component: ComponentShowCaseComponent },
    { path: '**', component: HtmlControlsComponent }   
];