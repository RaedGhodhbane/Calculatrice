import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculatrice';
  resultat = '';

supp () {
  this.resultat = '';
}

saisie (input:string) {
  if(!isNaN(parseFloat(this.resultat[this.resultat.length-1])) || !isNaN(parseFloat(input)) )
          this.resultat = this.resultat + input ;
}

egal () {
  this.resultat = eval(this.resultat);
}
}
