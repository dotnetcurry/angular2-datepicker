import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {DatepickerModule} from 'ng2-bootstrap';
@NgModule({
    imports: [BrowserModule, FormsModule, DatepickerModule.forRoot()],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
