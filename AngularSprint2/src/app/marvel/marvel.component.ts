import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {
  heroes : any[]= []
  heroName = ""
  resetHeroes : any[]= []

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`).subscribe(data => {

        this.heroes = data.filter((hero:any) => hero.biography.publisher === "Marvel Comics").filter((hero:any) => hero.biography.name !== "" && hero.biography.name !== "-").filter((hero:any) => hero.biography.fullName !== "" && hero.biography.fullName !== "-").filter((hero:any) => hero.biography.placeOfBirth !== "" && hero.biography.placeOfBirth !== "-").filter((hero:any) => hero.biography.firstAppearance !== "" && hero.biography.firstAppearance !== "-")
        this.resetHeroes = data.filter((hero:any) => hero.biography.publisher === "Marvel Comics").filter((hero:any) => hero.biography.name !== "" && hero.biography.name !== "-").filter((hero:any) => hero.biography.fullName !== "" && hero.biography.fullName !== "-").filter((hero:any) => hero.biography.placeOfBirth !== "" && hero.biography.placeOfBirth !== "-").filter((hero:any) => hero.biography.firstAppearance !== "" && hero.biography.firstAppearance !== "-")
        console.log(data)
    })
  }
  searchHeroes(){
    console.log(this.heroName)
    this.heroes = this.resetHeroes.filter(i => i.name.includes(this.heroName))
    console.log(this.resetHeroes.filter(i => i.name.includes(this.heroName)))

  }





  


}
