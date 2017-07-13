webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-12 col-md-12 col-12\">\n\n        <!--Não montei uma imagem como logo, pois estou sem photoshop e meu pc é ubuntu -->\n        <div class=\"logo\">\n\n          <i class=\"fa fa-university\" aria-hidden=\"true\"></i>\n          <h2 class=\"title-logo\">\n            Banco do povo\n            <small>\n              Segurança e dedicação totalmente para você\n            </small>\n          </h2>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</header>\n\n<div class=\"content\">\n\n  <app-conta></app-conta>\n\n</div>\n\n<footer>\n    <span>Todos os direitos reservados &copy; Banco do povo</span>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Cinzel:400,700,900);", ""]);

// module
exports.push([module.i, "header {\n  border-top: 5px solid #299e29;\n  padding: 15px 0;\n  padding: 30px 0;\n  margin-bottom: 35px;\n  box-shadow: 1px 10px 23px -23px #000; }\n  header .logo {\n    border-style: double;\n    border-color: #41af41;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    display: table;\n    margin: 0 auto; }\n    header .logo .fa {\n      font-size: 55px;\n      color: #41af41; }\n    header .logo .title-logo {\n      font-family: \"Cinzel\", serif;\n      color: #555;\n      display: inline-block;\n      margin-bottom: 10px;\n      padding-top: 11px;\n      padding-left: 10px; }\n      header .logo .title-logo small {\n        font-family: \"Montserrat\", sans-serif;\n        font-weight: 200;\n        font-style: italic;\n        display: block;\n        font-size: 14px; }\n  header .message-top {\n    font-family: \"Montserrat\", sans-serif;\n    font-weight: 200; }\n\n.content {\n  padding: 50px 0; }\n\nfooter {\n  width: 100%;\n  height: 100px;\n  background-color: #299e29;\n  color: #fff;\n  text-align: center;\n  line-height: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conta_conta_component__ = __webpack_require__("../../../../../src/app/conta/conta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__conta_conta_component__["a" /* ContaComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/conta/conta.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"boxConta\">\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-12 col-md-12 col-12\">\n\n        <h5 class=\"title-system\">\n          Conta bancaria\n\n          <small>\n            selecione a operação desejada e informe o valor.\n          </small>\n        </h5>\n\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n\n\n      <div class=\"col-sm-12 col-md-12 col-12\">\n\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" class=\"form-gerencia\">\n\n            <div class=\"row\">\n\n                <div class=\"col-sm-6 col-md-6 col-12\">\n\n                    <label >\n\n                      Saque: <input type=\"radio\" name=\"typeAction\"\n                                    ngModel #typeAction=\"ngModel\" class=\"typeAction\" value=\"0\" required>\n\n                      Deposito: <input type=\"radio\" name=\"typeAction\"\n                                       ngModel #typeAction=\"ngModel\" class=\"typeAction\" value=\"1\" required checked=\"checked\">\n\n                    </label>\n\n                </div>\n\n                <div class=\"col-sm-6 col-md-6 col-12\">\n\n                    <label for=\"value\" class=\"label-input-text\" >\n\n                      Valor: <input type=\"number\" class=\"form-control input-text\" name=\"value\"\n                                 ngModel id=\"value\" placeholder=\"R$\" required #value=\"ngModel\">\n\n                    </label>\n\n                    <button class=\"btn btn-success\" [disabled]=\"!f.valid\">\n                      Adicionar\n                      <i class=\"fa fa-plus\"></i>\n                    </button>\n\n                </div>\n\n            </div>\n\n        </form>\n\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-12 col-md-12 col-xs-12\">\n\n        <h6 *ngIf=\"conta.length < 1\"> Nenhum movimento encontrado na conta</h6>\n\n        <div class=\"box-table-extrato\" *ngIf=\"conta.length > 0\">\n\n          <h6>Extrato bancário </h6>\n\n          <table >\n\n            <thead>\n\n              <tr>\n\n                <th>\n                  <span>Tipo</span>\n                </th>\n\n                <th>\n                  <span>Valor</span>\n                </th>\n\n                <th>\n\n                </th>\n\n              </tr>\n\n            </thead>\n\n            <tbody>\n\n                <tr *ngFor=\"let c of conta;let i = index\" [ngClass] = \"{'deposito':(c.type === '1'),'saque' : (c.type === '0')}\">\n\n                  <td >\n                    <span>{{c.type === '1'? 'Deposito' : 'Saque'}}</span>\n                  </td>\n\n                  <td>\n                    <span>{{c.view_value }}</span>\n                  </td>\n\n                  <td>\n                    <span class=\"btn btn-danger\" (click)=\"onRemove(i)\">\n                      Remover <i class=\"fa fa-times\"></i>\n                    </span>\n                  </td>\n\n                </tr>\n\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col-sm-12 col-md-12 col-12\">\n\n            <div class=\"box-total\" *ngIf=\"conta.length > 0\">\n\n              <strong>Total em conta:</strong>\n              <span>{{total.view_value}}</span>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/conta/conta.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Cinzel:400,700,900);", ""]);

// module
exports.push([module.i, "#boxConta .title-system {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  color: #444;\n  font-style: italic;\n  margin-bottom: 35px; }\n  #boxConta .title-system small {\n    font-family: \"Montserrat\", sans-serif;\n    font-weight: 300;\n    display: block; }\n\n#boxConta .form-gerencia label {\n  font-weight: 700;\n  font-family: \"Montserrat\", sans-serif; }\n  #boxConta .form-gerencia label.has-error {\n    color: #d84949; }\n  #boxConta .form-gerencia label.label-input-text {\n    line-height: 38px; }\n    #boxConta .form-gerencia label.label-input-text input {\n      width: 80%;\n      float: right; }\n      #boxConta .form-gerencia label.label-input-text input.ng-invalid.ng-touched {\n        border-color: #d84949;\n        color: #d84949; }\n\n#boxConta .box-table-extrato {\n  max-height: 340px;\n  overflow: auto;\n  display: inline-block; }\n  #boxConta .box-table-extrato table thead tr th {\n    padding: 10px 150px;\n    color: #fff;\n    background-color: #41af41;\n    border-right: 1px solid #fff;\n    font-weight: 600;\n    text-align: left; }\n  #boxConta .box-table-extrato table tbody tr td {\n    padding-left: 10px; }\n    #boxConta .box-table-extrato table tbody tr td .btn {\n      margin: 15px;\n      cursor: pointer; }\n  #boxConta .box-table-extrato table tbody tr.deposito {\n    background-color: rgba(65, 175, 65, 0.15);\n    color: #41af41;\n    font-weight: 700; }\n  #boxConta .box-table-extrato table tbody tr.saque {\n    background-color: rgba(175, 65, 89, 0.15);\n    color: #d9534f;\n    font-weight: 700; }\n\n#boxConta .box-total {\n  padding: 30px 0;\n  color: #346f88; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/conta/conta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContaComponent = (function () {
    function ContaComponent() {
        this.conta = [];
        this.total = {
            value: 0,
            view_value: ''
        };
    }
    ContaComponent.prototype.ngOnInit = function () {
    };
    ContaComponent.prototype.onSubmit = function (formulario) {
        var view_value = '' + formulario.value.value;
        view_value = view_value.split('.').length > 1 ? view_value.split('.')[0] + ',' + view_value.split('.')[1] : view_value + ',00';
        var obj = {
            type: formulario.value.typeAction,
            value: formulario.value.value,
            view_value: 'R$ ' + view_value
        };
        this.conta.push(obj);
        if (formulario.value.typeAction === '1') {
            this.total.value += parseFloat(formulario.value.value);
        }
        else {
            this.total.value -= parseFloat(formulario.value.value);
        }
        this.total.view_value = '' + this.total.value;
        this.total.view_value = this.total.view_value.split('.').length > 1 ? 'R$ ' + this.total.view_value.split('.')[0] + ',' + this.total.view_value.split('.')[1] : 'R$ ' + this.total.view_value + ',00';
        formulario.reset();
    };
    ContaComponent.prototype.onRemove = function (index) {
        var obj = this.conta[index];
        if (obj.type === '1') {
            this.total.value -= obj.value;
        }
        else {
            this.total.value += parseFloat(obj.value);
        }
        this.conta.splice(index, 1);
        this.total.view_value = '' + this.total.value;
        this.total.view_value = this.total.view_value.split('.').length > 1 ? 'R$ ' + this.total.view_value.split('.')[0] + ',' + this.total.view_value.split('.')[1] : 'R$ ' + this.total.view_value + ',00';
    };
    return ContaComponent;
}());
ContaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-conta',
        template: __webpack_require__("../../../../../src/app/conta/conta.component.html"),
        styles: [__webpack_require__("../../../../../src/app/conta/conta.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContaComponent);

//# sourceMappingURL=conta.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map