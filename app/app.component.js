"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by rahul on 7/21/16.
 */
var core_1 = require('@angular/core');
var hero_detail_component_1 = require('./hero-detail.component');
var HEROES = [
    { id: 11, name: 'Krishnasree Menon' },
    { id: 22, name: 'Rahul Krishna' },
    { id: 33, name: 'Zia Krishna' },
    { id: 44, name: 'Zihaan Krishna' },
    { id: 55, name: 'Neeraja Nair' },
    { id: 66, name: 'Malavika Jayasree' },
    { id: 77, name: 'Belgi Prem' },
    { id: 88, name: 'Toni Christo Abraham' },
    { id: 89, name: 'Akhi Eldho John' },
    { id: 12, name: 'Joel Ninan Varghese' },
    { id: 13, name: 'Hrishikesh P. Menon' },
    { id: 99, name: 'Arjun Das' },
    { id: 14, name: 'Thejus Varghese' },
    { id: 15, name: 'Devi Priya' },
    { id: 16, name: 'Devika' },
    { id: 17, name: 'Aneetta' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n          <div class=\"well\">\n          <h1>Welcome to the {{title}}</h1>\n          </div>\n           <my-hero-details [hero]=\"selectedHero\"></my-hero-details>\n          <div class=\"row\">\n          <div class=\"col m3 s12\" *ngFor=\"let hero of heroes\" [class.selected]=\"hero===selectedHero\" (click)=\"onSelect(hero)\" >\n            <div class=\"card red s12\" >\n              <div class=\"card-content\">\n              <div class=\"card-title\">{{hero.name}}</div>\n              </div>\n            </div>\n            </div>\n          </div>\n            \n          ",
            styles: ["\n            .card{\n                color:#0a0a0a; font-family: Lato; cursor:pointer;\n            }\n            .selected .card{\n              box-shadow: 0 0 10px 0; opacity: 0.9;\n            }\n          "],
            directives: [hero_detail_component_1.HeroDetailComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map