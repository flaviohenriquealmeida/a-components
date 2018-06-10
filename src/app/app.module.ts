import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HtmlControlsModule } from './html-controls-component/html-controls-component.module';
import { routes } from './app.routing.module';
import { SelectModule } from './shared/select/select.module';
import { CheckboxComponent } from './shared/checkbox/checkbox.component';
import { DataTableModule } from './shared/data-table/data-table.module';
import { CheckboxModule } from './shared/checkbox/checkbox.module';
import { ComponentShowCaseModule } from './component-show-case/component-show-case.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HtmlControlsModule,
    ComponentShowCaseModule,
    SelectModule,
    CheckboxModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
