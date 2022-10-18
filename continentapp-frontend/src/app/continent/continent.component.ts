import { Component, OnInit } from '@angular/core';
import { ContinentService } from "./continent.service";
import { Continent } from "./continent";


@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',//La propriété 'templateUrl' est configurée avec le chemin du fichier HTML du composant.
  styleUrls: ['./continent.component.css'],//La propriété 'styleUrls' prend un tableau de fichiers CSS nécessaires à notre composant.
})
export class ContinentComponent implements OnInit {
  //Pour faire de notre 'ContinentComponent' un composant angulaire, il doit être décoré avec le décorateur '@Component'.
  //Ici, notre classe de composants implémente 'OnInit',
  //nous devons donc implémenter la méthode de cycle de vie 'ngOnInit' dans notre composant.

  constructor(private ContinentService:ContinentService) { }//Injectez notre 'ContinentService'.

  Continent: Continent[] = [];//Initialisé la variable 'Continent' dans laquelle nous allons stocker notre réponse API.



  ngOnInit(): void {
    //Le 'ngOnInit' est une méthode de cycle de vie exécutée sur le composant invoqué.
    //Dans cette méthode, nous appelons notre méthode d'appel d'API.
    this.getAll();
  }

  getAll() {
    //L'appel de l'API et la réponse sont affectés à la variable "Continent"
    this.ContinentService.get().subscribe((data) => {
      this.Continent = data;
    });
  }
}
