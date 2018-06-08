import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HtmlControlsModule } from './html-controls-component/html-controls-component.module';
import { routes } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HtmlControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
