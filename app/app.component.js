System.register(["@angular/core", "./person.model"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, person_model_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (person_model_1_1) {
                person_model_1 = person_model_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                    this.date = new Date();
                    this.minDate = new Date();
                    this.person = new person_model_1.Person(0, '', new Date());
                    this.persons = new Array();
                    this.minDate.setDate(this.date.getDate() - 1);
                    this.person = new person_model_1.Person(0, '', new Date());
                }
                AppComponent.prototype.ngOnInit = function () { };
                AppComponent.prototype.clear = function () {
                    this.person = new person_model_1.Person(0, '', new Date());
                };
                AppComponent.prototype.save = function () {
                    this.persons.push(this.person);
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-data',
                    templateUrl: './app/myapp.html'
                }),
                __metadata("design:paramtypes", [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
