import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { SPA}   from './SPA';
import { Valgfri}   from './Komponenter/Valgfri';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, JsonpModule, FormsModule],
    declarations: [SPA, Valgfri],
    bootstrap: [SPA]
})
export class AppModule { }

