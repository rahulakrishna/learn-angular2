/**
 * Created by rahul on 7/24/16.
 */
import {Component,Input} from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector:'my-hero-details',
  template:`
  <div class="row" *ngIf="hero">
            <div class="well"><h1>Selected Heroes</h1></div>
            <div class="col push-m4 m4 s12">
            <div class="card col s12 green">
              <div class="card-content">
                <div class="card-title">{{hero.name}} details!</div>
                {{hero.name}}'s name is {{hero.name}}.
                You can edit it here: <input [(ngModel)]="hero.name" placeholder="name"/>
              </div>
            </div>
            </div>
          </div>
  `
})

export class HeroDetailComponent{
  @Input()
  hero:Hero;
}
