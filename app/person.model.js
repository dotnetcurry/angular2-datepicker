System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters: [],
        execute: function () {
            Person = (function () {
                function Person(personId, personName, registrationDate) {
                    this.personId = personId;
                    this.personName = personName;
                    this.registrationDate = registrationDate;
                }
                return Person;
            }());
            exports_1("Person", Person);
        }
    };
});
