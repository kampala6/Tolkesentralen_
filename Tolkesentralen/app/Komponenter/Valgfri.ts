// Denne klassen er praktisk vis man trenger å bruke samme komponent flere ganger. (child.ts)
import {Component, OnInit} from "@angular/core";

@Component({
    selector: "valgfri",  // Komponenten kan brukes ved å lage taggen: <valgfri><valgfri (i parent.ts view) />
    styles: [`label {color:darkorange;}`],
    template: `<p>Masse muligheter her<p>`
   
})
    
export class Valgfri implements OnInit {

    constructor() {}
    ngOnInit() { }

}