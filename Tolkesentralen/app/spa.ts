import {Component, OnInit} from "@angular/core";
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import "rxjs/add/operator/map";
import {Bestilling} from "./Bestilling";
import {Day} from "./Day";
import {Headers} from "@angular/http";



@Component({
    selector: "min-app",
    templateUrl: "./app/SPA.html",
    styles: [`label, th {color:darkorange; `],
})

export class SPA {

     // Single Page Application
    
    divBook: boolean;
    navbar: boolean;
    skjemaS2: FormGroup; 
    skjemaS3: FormGroup; 
    
    constructor(private _http: Http, private fb: FormBuilder) {

        this.skjemaS2 = fb.group({
            personnr: ["", Validators.pattern("[0-9]{11}")],
            email: ["", Validators.pattern("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")],
            tlf: ["", Validators.pattern("[0-9]{8,12}")],
            test: [""]
        });

        this.skjemaS3 = fb.group({
            fornavn: ["", Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")],
            etternavn: ["", Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")],
            adresse: ["", Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-. ]{2,30}")],
            postnr: ["", Validators.pattern("[0-9]{4}")],
            poststed: ["", Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")]
        });
    }

    ngOnInit() {
        this.divBook = true;
        this.navbar = true;
    }

    

   
}