/**
 * Created by rahul on 7/21/16.
 */
import {Component} from '@angular/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';

const HEROES:Hero[]=[
  {id:11,name:'Krishnasree Menon'},
  {id:22,name:'Rahul Krishna'},
  {id:33,name:'Zia Krishna'},
  {id:44,name:'Zihaan Krishna'},
  {id:55,name:'Neeraja Nair'},
  {id:66,name:'Malavika Jayasree'},
  {id:77,name:'Belgi Prem'},
  {id:88,name:'Toni Christo Abraham'},
  {id:89,name:'Akhi Eldho John'},
  {id:12,name:'Joel Ninan Varghese'},
  {id:13,name:'Hrishikesh P. Menon'},
  {id:99,name:'Arjun Das'},
  {id:14,name:'Thejus Varghese'},
  {id:15,name:'Devi Priya'},
  {id:16,name:'Devika'},
  {id:17,name:'Aneetta'}
];


@Component({
    selector:'my-app',
    template:`
          <div class="well">
          <h1>Welcome to the {{title}}</h1>
          </div>
           <my-hero-details [hero]="selectedHero"></my-hero-details>
          <div class="row">
          <div class="col m3 s12" *ngFor="let hero of heroes" [class.selected]="hero===selectedHero" (click)="onSelect(hero)" >
            <div class="card red s12" >
              <div class="card-content">
              <div class="card-title">{{hero.name}}</div>
              </div>
            </div>
            </div>
          </div>
            
          `,
          styles:[`
            .card{
                color:#0a0a0a; font-family: Lato; cursor:pointer;
            }
            .selected .card{
              box-shadow: 0 0 10px 0; opacity: 0.9;
            }
          `],
          directives:[HeroDetailComponent]
})

export class AppComponent {
  title='Tour of Heroes';
  public heroes=HEROES;
  selectedHero:Hero;
  onSelect(hero:Hero){this.selectedHero=hero;}
}

