(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\RUNT\Desktop\JULY\front-end\Proyecto 2\Parcial2\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** ws (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebase: {
          apiKey: "AIzaSyDSgQ6Ufb3_yl2Hoe5H_gxPD0MATrR7f7o",
          authDomain: "suanfanzon-28eaa.firebaseapp.com",
          databaseURL: "https://suanfanzon-28eaa.firebaseio.com",
          projectId: "suanfanzon-28eaa",
          storageBucket: "suanfanzon-28eaa.appspot.com",
          messagingSenderId: "515272969133",
          appId: "1:515272969133:web:13c8368b659875e94eef24",
          measurementId: "G-31MSSZ260Y"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Dw5M":
    /*!***************************************************!*\
      !*** ./src/app/pages/private/home/home.module.ts ***!
      \***************************************************/

    /*! exports provided: HomeModule */

    /***/
    function Dw5M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component */
      "dsDk");
      /* harmony import */


      var _components_inbox_chat_inbox_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/inbox-chat/inbox-chat.component */
      "W3qU");
      /* harmony import */


      var _components_chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/chat-area/chat-area.component */
      "jvv+");
      /* harmony import */


      var _components_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/chat-message/chat-message.component */
      "vNkp");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_addContact_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/addContact/add-contact/add-contact.component */
      "M+IE");

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
      HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function HomeModule_Factory(t) {
          return new (t || HomeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _components_inbox_chat_inbox_chat_component__WEBPACK_IMPORTED_MODULE_3__["InboxChatComponent"], _components_chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_4__["ChatAreaComponent"], _components_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_5__["ChatMessageComponent"], _components_addContact_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_7__["AddContactComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _components_inbox_chat_inbox_chat_component__WEBPACK_IMPORTED_MODULE_3__["InboxChatComponent"], _components_chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_4__["ChatAreaComponent"], _components_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_5__["ChatMessageComponent"], _components_addContact_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_7__["AddContactComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "FlBv":
    /*!************************************************************!*\
      !*** ./src/app/shared/services/contact/contact.service.ts ***!
      \************************************************************/

    /*! exports provided: ContactService */

    /***/
    function FlBv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactService", function () {
        return ContactService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);

      var ContactService = /*#__PURE__*/function () {
        function ContactService() {
          _classCallCheck(this, ContactService);

          this.baseref = firebase__WEBPACK_IMPORTED_MODULE_1__["database"]().ref('items');
        }

        _createClass(ContactService, [{
          key: "getContacts",
          value: function getContacts(Email) {
            this.baseref.on("child_added", function (snapshot) {
              if (Email == snapshot.val().email) {
                return snapshot.val().contactos;
              }
            });
          }
        }, {
          key: "getUserActive",
          value: function getUserActive(Email) {}
        }, {
          key: "getContactUser",
          value: function getContactUser(Email) {}
        }]);

        return ContactService;
      }();

      ContactService.ɵfac = function ContactService_Factory(t) {
        return new (t || ContactService)();
      };

      ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ContactService,
        factory: ContactService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "IYfF":
    /*!*************************************************!*\
      !*** ./src/app/shared/services/auth.service.ts ***!
      \*************************************************/

    /*! exports provided: AuthService */

    /***/
    function IYfF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/firestore */
      "5x/H");

      var AuthService = /*#__PURE__*/function () {
        function AuthService() {
          _classCallCheck(this, AuthService);
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(user, lista) {
            var existe = false;
            var posicion = -1;

            for (var i = 0; i < lista.length; i++) {
              if (user.email === lista[i].email || user.telefono === lista[i].telefono) {
                existe = true;
                posicion = i;
              }
            }

            if (existe) {
              if (user.password === lista[posicion].password) {
                this.user = user; // window.localStorage.setItem('user', JSON.stringify(this.user));

                window.localStorage.setItem('user', JSON.stringify(this.user));
              } else {
                alert("La contraseña o el usuario que ingresaste son incorrectos.");
              }
            } else {
              alert("El usuario que ingreso no se encuentra registrado.");
            }
          }
        }, {
          key: "isLogged",
          value: function isLogged() {
            var user = window.localStorage.getItem('user') || undefined;
            var isLogged = user ? true : false;
            if (isLogged) this.user = JSON.parse(user);
            return isLogged;
          }
        }, {
          key: "logout",
          value: function logout() {
            window.localStorage.clear();
            window.location.href = '';
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)();
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "LjFu":
    /*!*********************************************!*\
      !*** ./src/app/shared/guards/auth.guard.ts ***!
      \*********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function LjFu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "IYfF");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authService = authService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var isLogged = this.authService.isLogged(); // console.log(`Existe una sesión de usaurio? ${isLogged}`);

            if (!isLogged) {
              this.router.navigate(['login']);
              return false;
            }

            return true;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "M+IE":
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/private/home/components/addContact/add-contact/add-contact.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: AddContactComponent */

    /***/
    function MIE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddContactComponent", function () {
        return AddContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_register_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/register/register.service */
      "tET3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AddContactComponent = /*#__PURE__*/function () {
        function AddContactComponent(registerService) {
          _classCallCheck(this, AddContactComponent);

          this.registerService = registerService;
        }

        _createClass(AddContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listofusers = this.registerService.PullRegister();
          }
        }, {
          key: "Agregar",
          value: function Agregar() {
            var exist = false;

            for (var i = 0; i < this.listofusers.length; i++) {
              if (this.Email == this.listofusers[i].email || this.numero == this.listofusers[i].telefono) {
                exist = true;
              }
            }

            if (exist) {
              // console.log("Existe: "+exist);
              this.registerService.update(this.Email, this.numero);
            } else {
              alert("Este usuario no se encuentra registrado");
            }
          }
        }, {
          key: "cerrarModal",
          value: function cerrarModal() {
            document.getElementById("addContact").style.display = 'none';
          }
        }]);

        return AddContactComponent;
      }();

      AddContactComponent.ɵfac = function AddContactComponent_Factory(t) {
        return new (t || AddContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_register_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"]));
      };

      AddContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddContactComponent,
        selectors: [["app-add-contact"]],
        decls: 26,
        vars: 2,
        consts: [["id", "addContact"], [1, "container"], [1, "equis", 3, "click"], [1, "field"], [1, "control", "has-icons-left", "has-icons-right"], ["id", "email", "type", "text", "placeholder", "Email", 1, "input", 3, "ngModel", "ngModelChange"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-envelope"], [1, "icon", "is-small", "is-right"], [1, "fas", "fa-check"], ["id", "numero", "type", "text", "placeholder", "phone Number", 1, "input", 3, "ngModel", "ngModelChange"], [1, "buttons"], [1, "button", "is-info", 3, "click"]],
        template: function AddContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddContactComponent_Template_div_click_2_listener() {
              return ctx.cerrarModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "x");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddContactComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.Email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddContactComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.numero = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddContactComponent_Template_button_click_24_listener() {
              return ctx.Agregar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.numero);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
        styles: ["#addContact[_ngcontent-%COMP%] {\n  position: fixed;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n  left: 0;\n  z-index: 25;\n}\n#addContact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  width: 500px;\n  height: 500px;\n  background-color: gray;\n  border-radius: 15px;\n}\n#addContact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .equis[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  right: 0;\n  color: white;\n  width: 50px;\n  height: 50px;\n  font-size: 25px;\n  font-weight: bold;\n  cursor: pointer;\n}\n#addContact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .equis[_ngcontent-%COMP%]:hover {\n  font-size: 30px;\n}\n#addContact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 50px;\n  font-size: 50px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ob21lL2NvbXBvbmVudHMvYWRkQ29udGFjdC9hZGQtY29udGFjdC9hZGQtY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFBUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDWjtBQUFZO0VBQ0ksZUFBQTtBQUVoQjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvaG9tZS9jb21wb25lbnRzL2FkZENvbnRhY3QvYWRkLWNvbnRhY3QvYWRkLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWRkQ29udGFjdHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC4zKTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAyNTtcclxuICAgIFxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogZ3JheSwgJGFscGhhOiAxKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIC5lcXVpc3tcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm90dG9tOjUwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddContactComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-contact',
            templateUrl: './add-contact.component.html',
            styleUrls: ['./add-contact.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_services_register_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MyXD":
    /*!*************************************************************!*\
      !*** ./src/app/pages/public/register/register.component.ts ***!
      \*************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function MyXD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var src_app_shared_services_register_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/register/register.service */
      "tET3");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(router, authService, registerService) {
          _classCallCheck(this, RegisterComponent);

          this.router = router;
          this.authService = authService;
          this.registerService = registerService;
          this.baseref = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('items');
          this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            //telefono: new FormControl( '', Validators.compose([Validators.minLength(10), Validators.required])),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[+]+[0-9]+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7)])),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z ]+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z ]+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            vpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
          });
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.authService.isLogged()) {
              // console.log("Existe usuario");
              // console.log(window.localStorage.getItem("user"));
              this.router.navigate(['/']);
            } else {
              console.log("No Existe usuario");
            }

            this.listaRegistro = this.registerService.PullRegister();
            console.log(this.listaRegistro);
          }
        }, {
          key: "doRegister",
          value: function doRegister(e) {
            e.preventDefault();
            var user = {
              email: this.userForm.controls.email.value,
              username: this.userForm.controls.username.value,
              telefono: this.userForm.controls.telefono.value.replace(" ", ""),
              lname: this.userForm.controls.lname.value,
              password: this.userForm.controls.password.value,
              name: this.userForm.controls.name.value,
              contactos: [""]
            };
            console.log(this.userForm.status);
            var emailExist = false;
            var telExist = false;

            if (this.userForm.status == "INVALID") {
              // alert("nel perro");
              if (this.userForm.controls.password.value == this.userForm.controls.vpassword.value) {
                alert(this.Validaciones(user));
              } else {
                alert("Las contraseñas no coinciden");
              }

              console.log(this.userForm);
            } else {
              for (var i = 0; i < this.listaRegistro.length; i++) {
                if (this.userForm.controls.email.value === this.listaRegistro[i].email) {
                  emailExist = true;
                }

                if (this.userForm.controls.telefono.value === this.listaRegistro[i].telefono) {
                  telExist = true;
                }
              }

              if (emailExist || telExist) {
                if (emailExist) {
                  alert("Su email ya se encuentra registrado");
                } else {
                  alert("Su telefono ya se encuentra registrado");
                }
              } else {
                if (this.userForm.controls.vpassword.value === this.userForm.controls.password.value) {
                  this.baseref.push(user);
                  this.listaRegistro.push(user);
                  user.password = undefined;
                  this.authService.login(user, this.listaRegistro);
                  this.router.navigate(['/']);
                } else {
                  alert("La contraseña no coincide"); // this.router.navigate(['/register']);
                }
              }
            }
          }
        }, {
          key: "goToLogin",
          value: function goToLogin() {
            this.router.navigate(['/login']);
          }
        }, {
          key: "Validaciones",
          value: function Validaciones(user) {
            console.log("Validando..."); //email

            if (user.email.includes("@")) {
              // console.log("incluye @");
              if (user.email.indexOf("@") != 0) {
                // console.log("hay algo antes del @");
                if (user.email.includes(".")) {
                  // console.log("Incluye .");
                  if (user.email.indexOf(".") - user.email.indexOf("@") == 1) {
                    return "Digite un dominio de correo válido";
                  } else {
                    // console.log("El dominio es valido");
                    if (user.email.lastIndexOf(".") < user.email.length - 1) {
                      if (user.email.includes(' ')) {
                        return "El correo no debe tener espacios";
                      } else {
                        console.log("Todo correcto"); // console.log("Esta bien");
                      }
                    } else {
                      return "Digite un servidor valido para el correo example@correo.es";
                    }
                  }
                } else {
                  return "El correo debe incluir .";
                }
              } else {
                return "el correo debe tener algo antes del @";
              }
            } else {
              return "el correo no incluye @";
            } //fin validacion correo
            //validacion username


            if (user.username.length > 20 || user.username.length < 6) {
              return "El username debe tener minimo 6 caracteres y máximo 20 caracteres";
            } //fin validacion username
            // validacion password


            if (user.password.length < 6) {
              return "La contraseña debe contener minimo 6 caracteres";
            } //fin de contraseña
            //validacion nombre


            for (var i = 0; i < user.name.length; i++) {
              if (user.name[i].toUpperCase() == user.name[i].toLowerCase() && user.name[i] != " ") {
                return "El nombre no debe tener numeros ni simbolos, solo letras y/o espacios";
              }
            } // fin validacion nombre
            // validacion apellido


            for (var _i = 0; _i < user.lname.length; _i++) {
              if (user.lname[_i].toUpperCase() == user.lname[_i].toLowerCase() && user.lname[_i] != " ") {
                return "El apellido no debe tener numeros ni simbolos, solo letras y/o espacios";
              }
            } //fin validacion apellido
            // validacion telefono


            if (user.telefono.length > 20 || user.telefono.length < 7) {
              return "El telefono debe contener minimo 7 cifras o máximo 20";
            } else {
              for (var _i2 = 0; _i2 < user.telefono.length; _i2++) {
                if (Number.isNaN(parseInt(user.telefono[_i2])) == true && user.telefono[_i2] != "+") {
                  return "El telefono no debe tener letras ni simbolos, solo numeros (se vale el '+' en caso del codigo internacional)";
                }
              }
            }

            return "Contacte con los desarrolladores, los campos estan bien";
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_register_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 71,
        vars: 8,
        consts: [[1, "appContainer"], [1, "topColorBox"], [1, "bottomColorBox"], [1, "header"], ["xmlns", "http://www.w3.org/2000/svg", "width", "39", "height", "39", "viewBox", "0 0 39 39"], ["fill", "#00E676", "d", "M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"], ["fill", "#FFF", "d", "M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"], [1, "appTitle"], [1, "box"], [1, "media"], [1, "media-content"], [1, "content"], [3, "formGroup"], [1, "field"], [1, "control", "has-icons-left", "has-icons-right"], ["formControlName", "email", "type", "email", "placeholder", "Example_es@domain.net", 1, "input", 3, "value"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-envelope"], [1, "icon", "is-small", "is-right"], [1, "fas", "fa-check"], [1, "control", "has-icons-left"], ["formControlName", "username", "type", "text", "placeholder", "UserName_1625", 1, "input", 3, "value"], [1, "fas", "fa-lock"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "input", 3, "value"], ["type", "password", "formControlName", "vpassword", "placeholder", "Verify Password", 1, "input", 3, "value"], ["formControlName", "name", "type", "text", "placeholder", "Name1 Name2", 1, "input", 3, "value"], ["formControlName", "lname", "type", "text", "placeholder", "LastName SecLastName", 1, "input", 3, "value"], ["formControlName", "telefono", "type", "text", "placeholder", "+1 302 521 326", 1, "input", 3, "value"], [1, "buttons"], [1, "button", "is-info", 3, "click"], [1, "button", "is-success", 3, "click"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SUANFANZAPP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "article", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Username ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Password (min-length 6 characters) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Verify Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Name (Without symbols or numbers) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Last Name (without symbols or numbers) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Phone Number (No letters, min-length 7 numbers) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_67_listener($event) {
              return ctx.doRegister($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_69_listener() {
              return ctx.goToLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Back to Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.userForm.controls.email.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.userForm.controls.username.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.userForm.controls.password.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.userForm.controls.vpassword.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.userForm.controls.name.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.userForm.controls.lname.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.userForm.controls.telefono.value);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["@font-face {\n  font-family: sfProTextRegular;\n  src: url(/assets/fonts/SFProTextRegular.ttf);\n}\n@font-face {\n  font-family: sfProTextMedium;\n  src: url(/assets/fonts/SFProTextMedium.ttf);\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.appContainer[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n}\n.appContainer[_ngcontent-%COMP%]   .topColorBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 222px;\n  background: #00BFA5;\n}\n.appContainer[_ngcontent-%COMP%]   .bottomColorBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100% - 222px);\n  background: #D3DBD9;\n}\n.appContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  margin-top: 27px;\n  margin-bottom: 28px;\n  margin-left: 26.5%;\n  top: 0;\n  z-index: 2;\n}\n.appContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .appTitle[_ngcontent-%COMP%] {\n  margin-left: 14px;\n  color: white;\n  font-size: 14px;\n  font-family: sfProTextMedium;\n  font-weight: bold;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  width: 65%;\n  position: absolute;\n  padding: 70px;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #2C948A;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-success[_ngcontent-%COMP%] {\n  width: 140px;\n  background: #03D755;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksNkJBQUE7RUFDQSw0Q0FBQTtBQUZKO0FBS0E7RUFDSSw0QkFBQTtFQUNBLDJDQUFBO0FBSEo7QUFNQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFKSjtBQU9BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSko7QUFLSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUtJO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUtJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFIUjtBQUlRO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQWpEQTtFQWtEQSxpQkFBQTtBQUZaO0FBS0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBSFI7QUFTNEI7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFQaEM7QUFTNEI7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFQaEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYm9keUZvbnQ6IHNmUHJvVGV4dFJlZ3VsYXI7XHJcbiR0aXRsZUZvbnQ6IHNmUHJvVGV4dE1lZGl1bTtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHNmUHJvVGV4dFJlZ3VsYXI7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1NGUHJvVGV4dFJlZ3VsYXIudHRmKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc2ZQcm9UZXh0TWVkaXVtO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9TRlByb1RleHRNZWRpdW0udHRmKTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmFwcENvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAudG9wQ29sb3JCb3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjIycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwQkZBNTtcclxuICAgIH1cclxuICAgIC5ib3R0b21Db2xvckJveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMjJweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0QzREJEOTtcclxuICAgIH1cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNi41JTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAuYXBwVGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0bGVGb250O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm94IHtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBwYWRkaW5nOiA3MHB4O1xyXG4gICAgICAgIC5tZWRpYSB7XHJcbiAgICAgICAgICAgIC5tZWRpYS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAuZmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXMtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyQzk0OEE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXMtc3VjY2VzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwM0Q3NTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: src_app_shared_services_register_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QuX9":
    /*!*******************************************************!*\
      !*** ./src/app/pages/public/login/login.component.ts ***!
      \*******************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function QuX9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var src_app_shared_services_register_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/register/register.service */
      "tET3");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, authService, registerService) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.authService = authService;
          this.registerService = registerService;
          this.baseref = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('items');
          this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
          });
          this.title = "Hola Mundo";
          this.color = "red";
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.authService.isLogged()) {
              // console.log("Existe usuario");
              // console.log(window.localStorage.getItem("user"));
              this.router.navigate(['/']);
            } else {
              console.log("No Existe usuario");
            }

            this.listofusers = this.registerService.PullRegister(); // console.log("oninit");
          }
        }, {
          key: "goToRegister",
          value: function goToRegister() {
            this.router.navigate(['/register']);
          }
        }, {
          key: "doLogin",
          value: function doLogin() {
            var user = {
              email: this.userForm.controls.email.value,
              password: this.userForm.controls.password.value,
              name: '',
              lname: '',
              telefono: this.userForm.controls.email.value,
              username: '',
              contactos: [""]
            };
            this.authService.login(user, this.listofusers);
            var islogged = this.authService.isLogged(); // user.password = undefined;
            // this.listofusers = undefined;

            if (islogged) {
              // console.log("esta logiao");
              this.router.navigate(['/']);
            } else {
              // console.log("NO esta logiao");
              this.router.navigate(['/login']);
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_register_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 32,
        vars: 3,
        consts: [[1, "appContainer"], [1, "topColorBox"], [1, "bottomColorBox"], [1, "header"], ["xmlns", "http://www.w3.org/2000/svg", "width", "39", "height", "39", "viewBox", "0 0 39 39"], ["fill", "#00E676", "d", "M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"], ["fill", "#FFF", "d", "M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"], [1, "appTitle"], [1, "box"], [1, "media"], [1, "media-content"], [1, "content"], [3, "formGroup"], [1, "field"], [1, "control", "has-icons-left", "has-icons-right"], ["id", "email", "type", "text", "placeholder", "Email/phone Number", "formControlName", "email", 1, "input", 3, "value"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-envelope"], [1, "icon", "is-small", "is-right"], [1, "fas", "fa-check"], [1, "control", "has-icons-left"], ["id", "password", "type", "password", "placeholder", "Password", "formControlName", "password", 1, "input", 3, "value"], [1, "fas", "fa-lock"], [1, "buttons"], [1, "button", "is-info", 3, "click"], [1, "button", "is-success", 3, "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SUANFANZAPP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "article", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_28_listener() {
              return ctx.goToRegister();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_30_listener() {
              return ctx.doLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.userForm.controls.email.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.userForm.controls.password.value);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["@font-face {\n  font-family: sfProTextRegular;\n  src: url(/assets/fonts/SFProTextRegular.ttf);\n}\n@font-face {\n  font-family: sfProTextMedium;\n  src: url(/assets/fonts/SFProTextMedium.ttf);\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.appContainer[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n}\n.appContainer[_ngcontent-%COMP%]   .topColorBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 222px;\n  background: #00BFA5;\n}\n.appContainer[_ngcontent-%COMP%]   .bottomColorBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100% - 222px);\n  background: #D3DBD9;\n}\n.appContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  margin-top: 27px;\n  margin-bottom: 28px;\n  margin-left: 26.5%;\n  top: 0;\n  z-index: 2;\n}\n.appContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .appTitle[_ngcontent-%COMP%] {\n  margin-left: 14px;\n  color: white;\n  font-size: 14px;\n  font-family: sfProTextMedium;\n  font-weight: bold;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  width: 65%;\n  position: absolute;\n  padding: 70px;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #2C948A;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-success[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #03D755;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksNkJBQUE7RUFDQSw0Q0FBQTtBQUZKO0FBS0E7RUFDSSw0QkFBQTtFQUNBLDJDQUFBO0FBSEo7QUFNQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFKSjtBQU9BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSko7QUFLSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUtJO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUtJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFIUjtBQUlRO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQWpEQTtFQWtEQSxpQkFBQTtBQUZaO0FBS0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBSFI7QUFTNEI7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFQaEM7QUFTNEI7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFQaEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wdWJsaWMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYm9keUZvbnQ6IHNmUHJvVGV4dFJlZ3VsYXI7XHJcbiR0aXRsZUZvbnQ6IHNmUHJvVGV4dE1lZGl1bTtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHNmUHJvVGV4dFJlZ3VsYXI7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1NGUHJvVGV4dFJlZ3VsYXIudHRmKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc2ZQcm9UZXh0TWVkaXVtO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9TRlByb1RleHRNZWRpdW0udHRmKTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmFwcENvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAudG9wQ29sb3JCb3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjIycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwQkZBNTtcclxuICAgIH1cclxuICAgIC5ib3R0b21Db2xvckJveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMjJweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0QzREJEOTtcclxuICAgIH1cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNi41JTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAuYXBwVGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0bGVGb250O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm94IHtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBwYWRkaW5nOiA3MHB4O1xyXG4gICAgICAgIC5tZWRpYSB7XHJcbiAgICAgICAgICAgIC5tZWRpYS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAuZmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXMtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyQzk0OEE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXMtc3VjY2VzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwM0Q3NTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: src_app_shared_services_register_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/firestore */
      "5x/H");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); //JP


      var AppComponent = function AppComponent(firestore) {
        _classCallCheck(this, AppComponent);

        this.title = 'Suanfanzapp';
        this.items = firestore.collection('items').valueChanges(); //JP
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "W3qU":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/private/home/components/inbox-chat/inbox-chat.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: InboxChatComponent */

    /***/
    function W3qU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InboxChatComponent", function () {
        return InboxChatComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var InboxChatComponent = /*#__PURE__*/function () {
        function InboxChatComponent() {
          _classCallCheck(this, InboxChatComponent);

          this.isRead = undefined;
        }

        _createClass(InboxChatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.readStatusColor = this.isRead && this.isRead !== "false" ? "#50C2F7" : "#ABABAB";
          }
        }]);

        return InboxChatComponent;
      }();

      InboxChatComponent.ɵfac = function InboxChatComponent_Factory(t) {
        return new (t || InboxChatComponent)();
      };

      InboxChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InboxChatComponent,
        selectors: [["app-inbox-chat"]],
        inputs: {
          profilePic: "profilePic",
          name: "name",
          msgTime: "msgTime",
          msgPreview: "msgPreview",
          isRead: "isRead"
        },
        decls: 15,
        vars: 5,
        consts: [[1, "inboxChat1"], [1, "profileInboxContainer"], ["alt", "", "srcset", "", 1, "profileInbox", 3, "src"], [1, "inboxInfoContainer"], [1, "detailsContainer"], [1, "namePersonChat"], [1, "messageTime"], [1, "chatContainer"], [1, "chatStatus"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 18 18", "width", "18", "height", "18"], ["d", "M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"], [1, "chatPreview"]],
        template: function InboxChatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msgTime);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.readStatusColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msgPreview);
          }
        },
        styles: [".inboxChat1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 72px;\n  background: white;\n  display: flex;\n  cursor: pointer;\n}\n.inboxChat1[_ngcontent-%COMP%]:hover {\n  background: #F5F5F5;\n}\n.inboxChat1[_ngcontent-%COMP%]   .profileInboxContainer[_ngcontent-%COMP%] {\n  width: 77px;\n  height: 72px;\n  padding: 0 15px 0 13px;\n  display: flex;\n  align-items: center;\n}\n.inboxChat1[_ngcontent-%COMP%]   .profileInboxContainer[_ngcontent-%COMP%]   .profileInbox[_ngcontent-%COMP%] {\n  width: 49px;\n  height: 49px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%] {\n  height: 72px;\n  padding: 0 15px 0 0;\n  margin-right: 6px;\n  display: flex;\n  justify-content: center;\n  flex-flow: column;\n  flex-grow: 1;\n  border-bottom: 1px solid rgba(145, 145, 145, 0.2);\n}\n.inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n}\n.inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%]   .namePersonChat[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: black;\n  flex-grow: 1;\n  font-family: sfProTextMedium;\n  cursor: pointer;\n}\n.inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%]   .messageTime[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #878787;\n  font-family: sfProTextMedium;\n  cursor: pointer;\n}\n.inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .chatContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n}\n.inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .chatContainer[_ngcontent-%COMP%]   .chatStatus[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-right: 2px;\n}\n.inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .chatContainer[_ngcontent-%COMP%]   .chatPreview[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6F6F6F;\n  font-family: sfProTextMedium;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ob21lL2NvbXBvbmVudHMvaW5ib3gtY2hhdC9pbmJveC1jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBRko7QUFHSTtFQUNJLG1CQUFBO0FBRFI7QUFHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBWjtBQUdJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpREFBQTtBQURSO0FBRVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFBWjtBQUNZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBeENKO0VBeUNJLGVBQUE7QUFDaEI7QUFDWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBOUNKO0VBK0NJLGVBQUE7QUFDaEI7QUFFUTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQUFaO0FBQ1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ2hCO0FBQ1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQTdESjtFQThESSxlQUFBO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ob21lL2NvbXBvbmVudHMvaW5ib3gtY2hhdC9pbmJveC1jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJvZHlGb250OiBzZlByb1RleHRSZWd1bGFyO1xyXG4kdGl0bGVGb250OiBzZlByb1RleHRNZWRpdW07XHJcblxyXG4uaW5ib3hDaGF0MSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZUluYm94Q29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNzdweDtcclxuICAgICAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgMTNweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLnByb2ZpbGVJbmJveCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0OXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ5cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbmJveEluZm9Db250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogNzJweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHggMCAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRjb2xvcjogIzkxOTE5MSwgJGFscGhhOiAwLjIpO1xyXG4gICAgICAgIC5kZXRhaWxzQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICAgICAgLm5hbWVQZXJzb25DaGF0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0bGVGb250O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tZXNzYWdlVGltZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzg3ODc4NztcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0bGVGb250O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGF0Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAgICAgICAgICAuY2hhdFN0YXR1c3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNoYXRQcmV2aWV3IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNkY2RjZGO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRsZUZvbnQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InboxChatComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-inbox-chat',
            templateUrl: './inbox-chat.component.html',
            styleUrls: ['./inbox-chat.component.scss']
          }]
        }], function () {
          return [];
        }, {
          profilePic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          msgTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          msgPreview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isRead: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "WnqB":
    /*!******************************************************!*\
      !*** ./src/app/shared/services/chat/chat.service.ts ***!
      \******************************************************/

    /*! exports provided: ChatService */

    /***/
    function WnqB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatService", function () {
        return ChatService;
      });
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! socket.io-client */
      "gFX4");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ChatService = /*#__PURE__*/function () {
        function ChatService() {
          _classCallCheck(this, ChatService);
        }

        _createClass(ChatService, [{
          key: "connect",
          value: function connect() {
            var _this = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0__('https://suanfanzapp2.loca.lt'); //lt -p 3000 -s suanfanzapp2

              _this.socket.on('connect', function () {
                observer.next();
              });
            });
          }
        }, {
          key: "getNewMsgs",
          value: function getNewMsgs() {
            var _this2 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this2.socket.on("newMsg", function (msg) {
                observer.next(msg);
              });
            });
          }
        }, {
          key: "sendMsg",
          value: function sendMsg(msg) {
            this.socket.emit('newMsg', msg);
          }
        }, {
          key: "disconnect",
          value: function disconnect() {
            this.socket.disconnect();
          }
        }]);

        return ChatService;
      }();

      ChatService.ɵfac = function ChatService_Factory(t) {
        return new (t || ChatService)();
      };

      ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ChatService,
        factory: ChatService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/public/login/login.component */
      "QuX9");
      /* harmony import */


      var _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/public/register/register.component */
      "MyXD");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/analytics */
      "h+eY");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d"); //firebase
      //JP
      //JP
      //JP
      //JP
      // import{AngularFireModule} from 'angularfire2';
      // import{AngularFireDatabaseModule} from 'angularfire2/database';
      //servicio book
      // import {BookService} from './shared/services/book/book.service';
      // import { BooksComponent } from './book/books.component';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [// BookService
        ],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"] // AngularFireModule.initializeApp(environment.firebaseConfig),
        // AngularFireDatabaseModule
        ]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"], //JP
          _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"] // AngularFireModule.initializeApp(environment.firebaseConfig),
          // AngularFireDatabaseModule
          ]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"] // AngularFireModule.initializeApp(environment.firebaseConfig),
            // AngularFireDatabaseModule
            ],
            providers: [// BookService
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "dsDk":
    /*!******************************************************!*\
      !*** ./src/app/pages/private/home/home.component.ts ***!
      \******************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function dsDk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var src_app_shared_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/chat/chat.service */
      "WnqB");
      /* harmony import */


      var src_app_shared_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/contact/contact.service */
      "FlBv");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_addContact_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/addContact/add-contact/add-contact.component */
      "M+IE");
      /* harmony import */


      var _components_chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/chat-area/chat-area.component */
      "jvv+");
      /* harmony import */


      var _components_inbox_chat_inbox_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/inbox-chat/inbox-chat.component */
      "W3qU");

      function HomeComponent_app_inbox_chat_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-inbox-chat", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_app_inbox_chat_33_Template_app_inbox_chat_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onSelectInbox(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var inbox_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profilePic", inbox_r1.icon)("name", inbox_r1.title)("msgTime", inbox_r1.lastMsg)("msgPreview", inbox_r1.msgPreview)("isRead", inbox_r1.isRead);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(authService, chatService, contactService) {
          _classCallCheck(this, HomeComponent);

          this.authService = authService;
          this.chatService = chatService;
          this.contactService = contactService;
          this.subscriptionList = {
            connection: undefined,
            msgs: undefined
          }; // chats: Array<ChatI> = [
          //     {
          //     title: "Santi",
          //     icon: "/assets/img/ppRightBar.png",
          //     isRead: true,
          //     msgPreview: "entonces ando usando fotos reales hahaha",
          //     lastMsg: "11:13",
          //     msgs: [
          //       { content: "Lorem ipsum dolor amet", isRead: true, isMe: true, time: "7:24" },
          //       { content: "Qué?", isRead: true, isMe: false, time: "7:25" },
          //     ]
          //   },
          //   {
          //     title: "Pablo Bejarano",
          //     icon: "/assets/img/ppInbox.png",
          //     isRead: true,
          //     msgPreview: "Estrenando componente",
          //     lastMsg: "18:30",
          //     msgs: []
          //   },
          //   {
          //     title: "Pablo Bejarano 2",
          //     icon: "/assets/img/ppInbox.png",
          //     isRead: true,
          //     msgPreview: "Nice front 😎",
          //     lastMsg: "23:30",
          //     msgs: []
          //   }
          // ];

          this.currentChat = {
            title: "",
            icon: "",
            msgs: []
          };
          this.chats = [];
          this.listofcontacts = [];
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initChat();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroySubscriptionList();
            this.chatService.disconnect();
          }
        }, {
          key: "initChat",
          value: function initChat() {
            var user;
            var loged = window.localStorage.getItem('user').split('","')[0].split('":"')[1].replace('"', "");
            console.log(this.contactService.getContacts(loged)); // for (let i = 0; i < this.listofusers.length; i++) {
            //   console.log(i, " en for ", this.listofusers[i].email);
            //   if (loged.includes(this.listofusers[i].email) || loged.includes(this.listofusers[i].telefono)) {
            //     user = this.listofusers[i];
            //     console.log("Logeadito - ", user.username);
            //   }
            // }
            // for (let c = 0; c < this.listofusers.length; c++) {
            //   if (user.contactos.includes(this.listofusers[c].email)) {
            //     let chatin: ChatI = {
            //       title: this.listofusers[c].name + this.listofusers[c].lname,
            //       icon: "",
            //       msgPreview: "Aun sin preview",
            //       isRead: false,
            //       lastMsg: "El Last",
            //       msgs: [{
            //         content: "El Mensaje",
            //         time: "me recibe?",
            //         isRead: false,
            //         owner: this.listofusers[c].email,
            //         isMe: true
            //       }],
            //     }
            //     this.chats.push(chatin);
            //     console.log(chatin);
            //     console.log("chatin");
            //   }
            // }
            // if (this.chats.length > 0) {
            //   this.currentChat.title = this.chats[0].title;
            //   this.currentChat.icon = this.chats[0].icon;
            //   this.currentChat.msgs = this.chats[0].msgs;
            // }
            // this.subscriptionList.connection = this.chatService.connect().subscribe(_ => {
            //   console.log("Nos conectamos");
            //   this.subscriptionList.msgs = this.chatService.getNewMsgs().subscribe((msg: MessageI) => {
            //     msg.isMe = this.currentChat.title === msg.owner ? true : false;
            //     this.currentChat.msgs.push(msg);
            //   });
            // });
          }
        }, {
          key: "onSelectInbox",
          value: function onSelectInbox(index) {
            this.currentChat.title = this.chats[index].title;
            this.currentChat.icon = this.chats[index].icon;
            this.currentChat.msgs = this.chats[index].msgs;
          }
        }, {
          key: "addContacto",
          value: function addContacto() {
            document.getElementById("addContact").style.display = 'flex';
          }
        }, {
          key: "doLogout",
          value: function doLogout() {
            this.authService.logout();
          }
        }, {
          key: "destroySubscriptionList",
          value: function destroySubscriptionList() {
            var exceptList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            for (var _i3 = 0, _Object$keys = Object.keys(this.subscriptionList); _i3 < _Object$keys.length; _i3++) {
              var key = _Object$keys[_i3];

              if (this.subscriptionList[key] && exceptList.indexOf(key) === -1) {
                this.subscriptionList[key].unsubscribe();
              }
            }
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 37,
        vars: 4,
        consts: [["id", "app"], [1, "leftBigContainer"], [1, "topBarLeft"], [1, "tbLeftContainer"], [1, "profileContainer"], ["src", "/assets/img/pp.png", "alt", "", "srcset", "", 1, "profile"], [1, "leftRightIcons"], [1, "statusContainer"], ["id", "df9d3429-f0ef-48b5-b5eb-f9d27b2deba6", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["fill", "#919191", "d", "M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"], ["fill", "#009588", "d", "M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"], [1, "newChatContainer"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["fill", "#919191", "d", "M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"], [1, "leftMore"], ["fill", "#919191", "d", "M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"], [1, "logout"], [1, "botonAddC", 3, "click"], [1, "botonlgot", 3, "click"], [1, "searchBarContainer"], [1, "searchIcon"], ["fill", "#919191", "d", "M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"], [1, "searchBarText"], [1, "searchBar"], [1, "inboxChat"], [3, "profilePic", "name", "msgTime", "msgPreview", "isRead", "click", 4, "ngFor", "ngForOf"], [1, "rightBigContainer"], [3, "title", "icon", "msgs"], [3, "profilePic", "name", "msgTime", "msgPreview", "isRead", "click"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pre", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_pre_click_20_listener() {
              return ctx.addContacto();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_pre_click_23_listener() {
              return ctx.doLogout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Log out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Search or start new chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, HomeComponent_app_inbox_chat_33_Template, 1, 5, "app-inbox-chat", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-add-contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-chat-area", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chats);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.currentChat.title)("icon", ctx.currentChat.icon)("msgs", ctx.currentChat.msgs);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_addContact_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_5__["AddContactComponent"], _components_chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_6__["ChatAreaComponent"], _components_inbox_chat_inbox_chat_component__WEBPACK_IMPORTED_MODULE_7__["InboxChatComponent"]],
        styles: ["@font-face {\n  font-family: sfProTextRegular;\n  src: url(/assets/fonts/SFProTextRegular.ttf);\n}\n@font-face {\n  font-family: sfProTextMedium;\n  src: url(/assets/fonts/SFProTextMedium.ttf);\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n#app[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  background: #E5DDD5;\n  font-family: sfProTextRegular;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 30%;\n  width: 100%;\n  height: 100%;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 59px;\n  background: #EDEDED;\n  padding: 10px 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 59px;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  flex-grow: 1;\n  align-items: center;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .statusContainer[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .statusContainer[_ngcontent-%COMP%]:active {\n  background: #D5D5D5;\n  border-radius: 50%;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .newChatContainer[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 0 0 0 10px;\n  padding: 8px;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .newChatContainer[_ngcontent-%COMP%]:active {\n  background: #D5D5D5;\n  border-radius: 50%;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .leftMore[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  margin: 0 0 0 10px;\n  padding: 8px;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .leftMore[_ngcontent-%COMP%]:active {\n  background: #D5D5D5;\n  border-radius: 50%;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .leftMore[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 0px;\n  background: #EDEDED;\n  z-index: 20;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .leftMore[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  position: relative;\n  background: none;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .leftMore[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: none;\n  font-family: sfProTextMedium;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .leftMore[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #D5D5D5;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .leftMore[_ngcontent-%COMP%]:hover   .logout[_ngcontent-%COMP%] {\n  display: block;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .searchBarContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1;\n  background: #F6F6F6;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .searchBarContainer[_ngcontent-%COMP%]   .searchIcon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  left: 24px;\n  position: absolute;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .searchBarContainer[_ngcontent-%COMP%]   .searchBarText[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  position: absolute;\n  left: 77px;\n  color: #919191;\n  cursor: text;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .searchBarContainer[_ngcontent-%COMP%]   .searchBar[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 35px;\n  padding: 0 32px 0 65px;\n  background: white;\n  border-radius: 100px;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100% - 108px);\n  background: white;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 72px;\n  background: white;\n  display: flex;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]:hover {\n  background: #F5F5F5;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .profileInboxContainer[_ngcontent-%COMP%] {\n  width: 77px;\n  height: 72px;\n  padding: 0 15px 0 13px;\n  display: flex;\n  align-items: center;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .profileInboxContainer[_ngcontent-%COMP%]   .profileInbox[_ngcontent-%COMP%] {\n  width: 49px;\n  height: 49px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%] {\n  height: 72px;\n  padding: 0 15px 0 0;\n  margin-right: 6px;\n  display: flex;\n  justify-content: center;\n  flex-flow: column;\n  flex-grow: 1;\n  border-bottom: 1px solid rgba(145, 145, 145, 0.2);\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%]   .namePersonChat[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: black;\n  flex-grow: 1;\n  font-family: sfProTextMedium;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%]   .messageTime[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #878787;\n  font-family: sfProTextMedium;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .chatContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .chatContainer[_ngcontent-%COMP%]   .chatStatus[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-right: 2px;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .chatContainer[_ngcontent-%COMP%]   .chatPreview[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6F6F6F;\n  font-family: sfProTextMedium;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .rightBigContainer[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 70%;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSw2QkFBQTtFQUNBLDRDQUFBO0FBRko7QUFLQTtFQUNJLDRCQUFBO0VBQ0EsMkNBQUE7QUFISjtBQU1BO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQUpKO0FBT0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkExQk87QUFzQlg7QUFLSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSFI7QUFJUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRlo7QUFHWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURoQjtBQUVnQjtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQXBCO0FBQ29CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDeEI7QUFFZ0I7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBcEI7QUFDb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ3hCO0FBQXdCO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUU1QjtBQUNvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUN4QjtBQUF3QjtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFFNUI7QUFDb0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUN4QjtBQUF3QjtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFFNUI7QUFBd0I7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRTVCO0FBRDRCO0VBQ0ksaUJBQUE7RUFLQSxrQkFBQTtFQUNBLGdCQUFBO0FBRGhDO0FBSmdDO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtBQU1wQztBQUZnQztFQUNJLG1CQUFBO0FBSXBDO0FBQzRCO0VBQ0ksY0FBQTtBQUNoQztBQU1RO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUpaO0FBS1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFIaEI7QUFLWTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFIaEI7QUFLWTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSGhCO0FBT1E7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQUxaO0FBTVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFKaEI7QUFLZ0I7RUFDSSxtQkFBQTtBQUhwQjtBQUtnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIcEI7QUFJb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZ4QjtBQUtnQjtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7QUFIcEI7QUFJb0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFGeEI7QUFHd0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFyTWhCO0VBc01nQixlQUFBO0FBRDVCO0FBR3dCO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSw0QkEzTWhCO0VBNE1nQixlQUFBO0FBRDVCO0FBSW9CO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FBRnhCO0FBR3dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUQ1QjtBQUd3QjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBMU5oQjtFQTJOZ0IsZUFBQTtBQUQ1QjtBQVNJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFQUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJvZHlGb250OiBzZlByb1RleHRSZWd1bGFyO1xyXG4kdGl0bGVGb250OiBzZlByb1RleHRNZWRpdW07XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzZlByb1RleHRSZWd1bGFyO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9TRlByb1RleHRSZWd1bGFyLnR0Zik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHNmUHJvVGV4dE1lZGl1bTtcclxuICAgIHNyYzogdXJsKC9hc3NldHMvZm9udHMvU0ZQcm9UZXh0TWVkaXVtLnR0Zik7XHJcbn1cclxuXHJcbioge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbiNhcHAge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNFNURERDU7XHJcbiAgICBmb250LWZhbWlseTogJGJvZHlGb250O1xyXG4gICAgLmxlZnRCaWdDb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBmbGV4LXNocmluazogMTtcclxuICAgICAgICBmbGV4LWJhc2lzOiAzMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC50b3BCYXJMZWZ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTlweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VERURFRDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLnRiTGVmdENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTlweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sZWZ0UmlnaHRJY29ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0dXNDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Q1RDVENTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubmV3Q2hhdENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNENUQ1RDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnRNb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRDVENUQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5sb2dvdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0VERURFRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzZlByb1RleHRNZWRpdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRDVENUQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxvZ291dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoQmFyQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDlweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y2RjZGNjtcclxuICAgICAgICAgICAgLnNlYXJjaEljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWFyY2hCYXJUZXh0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNzdweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTE5MTkxO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWFyY2hCYXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzJweCAwIDY1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmluYm94Q2hhdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwOHB4KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIC5pbmJveENoYXQxIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcm9maWxlSW5ib3hDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzJweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHggMCAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZUluYm94IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmluYm94SW5mb0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yOiAjOTE5MTkxLCAkYWxwaGE6IDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgLmRldGFpbHNDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAubmFtZVBlcnNvbkNoYXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRsZUZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2VUaW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODc4Nzg3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRsZUZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYXRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGF0U3RhdHVze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hhdFByZXZpZXcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2RjZGNkY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGxlRm9udDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHRCaWdDb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBmbGV4LXNocmluazogMTtcclxuICAgICAgICBmbGV4LWJhc2lzOiA3MCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: src_app_shared_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
          }, {
            type: src_app_shared_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jvv+":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/private/home/components/chat-area/chat-area.component.ts ***!
      \********************************************************************************/

    /*! exports provided: ChatAreaComponent */

    /***/
    function jvv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatAreaComponent", function () {
        return ChatAreaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/chat/chat.service */
      "WnqB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../chat-message/chat-message.component */
      "vNkp");

      function ChatAreaComponent_app_chat_message_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chat-message", 23);
        }

        if (rf & 2) {
          var msg_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", msg_r1.content)("time", msg_r1.time)("isMe", msg_r1.isMe)("isRead", msg_r1.isRead);
        }
      }

      var ChatAreaComponent = /*#__PURE__*/function () {
        function ChatAreaComponent(chatService) {
          _classCallCheck(this, ChatAreaComponent);

          this.chatService = chatService;
          this.title = "";
          this.icon = "";
          this.msgs = [];
        }

        _createClass(ChatAreaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "sendMsg",
          value: function sendMsg() {
            var msg = {
              content: this.msg,
              isMe: true,
              time: "8:58",
              isRead: false,
              owner: this.title
            };
            this.chatService.sendMsg(msg);
            this.msg = "";
          }
        }]);

        return ChatAreaComponent;
      }();

      ChatAreaComponent.ɵfac = function ChatAreaComponent_Factory(t) {
        return new (t || ChatAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]));
      };

      ChatAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChatAreaComponent,
        selectors: [["app-chat-area"]],
        inputs: {
          title: "title",
          icon: "icon",
          msgs: "msgs"
        },
        decls: 27,
        vars: 4,
        consts: [[1, "topBarRight"], [1, "tbRightContainer"], [1, "profilePicContainer"], ["alt", "", "srcset", "", 1, "profilePic", 3, "src"], [1, "namePersonChat"], [1, "rightRightIcons"], [1, "searchIconRight"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["fill", "#919191", "d", "M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"], [1, "rightMore"], ["fill", "#919191", "d", "M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"], [1, "chat"], [3, "content", "time", "isMe", "isRead", 4, "ngFor", "ngForOf"], [1, "sendMessageForm"], [1, "leftMessageFormIcons"], [1, "smileyContainer"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "26", "height", "26"], ["fill", "#919191", "d", "M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"], [1, "clipContainer"], ["fill", "#919191", "d", "M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"], ["type", "text", "placeholder", "Type a message", 1, "typeMessageForm", 3, "ngModel", "keyup.enter", "ngModelChange"], [1, "microphoneContainer"], ["fill", "#919191", "d", "M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"], [3, "content", "time", "isMe", "isRead"]],
        template: function ChatAreaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChatAreaComponent_app_chat_message_14_Template, 1, 4, "app-chat-message", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ChatAreaComponent_Template_input_keyup_enter_23_listener() {
              return ctx.sendMsg();
            })("ngModelChange", function ChatAreaComponent_Template_input_ngModelChange_23_listener($event) {
              return ctx.msg = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.msgs);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.msg);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_4__["ChatMessageComponent"]],
        styles: [".topBarRight[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 59px;\n  background: #EDEDED;\n  border-left: 1px solid #DADADA;\n  padding: 10px 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 59px;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%]   .profilePicContainer[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 40px;\n  padding: 0 15px 0 0;\n  display: flex;\n  align-items: center;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%]   .profilePicContainer[_ngcontent-%COMP%]   .profilePic[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%]   .namePersonChat[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: black;\n  font-family: sfProTextMedium;\n  flex-grow: 1;\n  cursor: pointer;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%]   .rightRightIcons[_ngcontent-%COMP%] {\n  height: 40px;\n  margin-left: 20px;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%]   .rightRightIcons[_ngcontent-%COMP%]   .searchIconRight[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n  cursor: pointer;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%]   .rightRightIcons[_ngcontent-%COMP%]   .searchIconRight[_ngcontent-%COMP%]:active {\n  background: #D5D5D5;\n  border-radius: 50%;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%]   .rightRightIcons[_ngcontent-%COMP%]   .rightMore[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n  cursor: pointer;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%]   .rightRightIcons[_ngcontent-%COMP%]   .rightMore[_ngcontent-%COMP%]:active {\n  background: #D5D5D5;\n  border-radius: 50%;\n}\n.chat[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100% - 133px);\n  background: #E5DDD5;\n  padding-top: 20px;\n}\n.chat[_ngcontent-%COMP%]   .chatDateContainer[_ngcontent-%COMP%] {\n  height: 32px;\n  margin: 12px 0;\n  padding-left: 9%;\n  padding-right: 9%;\n  display: flex;\n  justify-content: center;\n}\n.chat[_ngcontent-%COMP%]   .chatDateContainer[_ngcontent-%COMP%]   .chatDate[_ngcontent-%COMP%] {\n  height: 32px;\n  display: flex;\n  align-items: center;\n  font-size: 12.5px;\n  font-family: sfProTextMedium;\n  background: #E2F3FB;\n  border-radius: 7.5px;\n  padding: 5px 12px 6px;\n  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n}\n.sendMessageForm[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 62px;\n  padding: 5px 10px;\n  background: #F0F0F0;\n  border-left: 1px solid #DADADA;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sendMessageForm[_ngcontent-%COMP%]   .leftMessageFormIcons[_ngcontent-%COMP%] {\n  width: 94px;\n  height: 52px;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n}\n.sendMessageForm[_ngcontent-%COMP%]   .leftMessageFormIcons[_ngcontent-%COMP%]   .smileyContainer[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 8px;\n  cursor: pointer;\n}\n.sendMessageForm[_ngcontent-%COMP%]   .leftMessageFormIcons[_ngcontent-%COMP%]   .clipContainer[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 8px;\n  cursor: pointer;\n}\n.sendMessageForm[_ngcontent-%COMP%]   .leftMessageFormIcons[_ngcontent-%COMP%]   .clipContainer[_ngcontent-%COMP%]:active {\n  background: #D5D5D5;\n  border-radius: 50%;\n}\n.sendMessageForm[_ngcontent-%COMP%]   .typeMessageForm[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  height: 42px;\n  margin: 5px 10px;\n  padding: 9px 12px 11px;\n  border-radius: 21px;\n  background: white;\n}\n.sendMessageForm[_ngcontent-%COMP%]   .typeMessageForm[_ngcontent-%COMP%]   .messageFormText[_ngcontent-%COMP%] {\n  height: 20px;\n  font-size: 14.2px;\n  font-family: sfProTextRegular;\n  color: #919191;\n  cursor: text;\n}\n.sendMessageForm[_ngcontent-%COMP%]   .microphoneContainer[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ob21lL2NvbXBvbmVudHMvY2hhdC1hcmVhL2NoYXQtYXJlYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURSO0FBRVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQVo7QUFDWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ2hCO0FBRVE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQWpDQTtFQWtDQSxZQUFBO0VBQ0EsZUFBQTtBQUFaO0FBRVE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFaO0FBQ1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ2hCO0FBQWdCO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUVwQjtBQUNZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNoQjtBQUFnQjtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFFcEI7QUFJQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQVI7QUFDUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQW5GQTtFQW9GQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtBQUNaO0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBREo7QUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUNRO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNaO0FBQ1E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDWjtBQUFZO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUVoQjtBQUVJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFSO0FBQ1E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFySUQ7RUFzSUMsY0FBQTtFQUNBLFlBQUE7QUFDWjtBQUVJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUFSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ob21lL2NvbXBvbmVudHMvY2hhdC1hcmVhL2NoYXQtYXJlYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRib2R5Rm9udDogc2ZQcm9UZXh0UmVndWxhcjtcclxuJHRpdGxlRm9udDogc2ZQcm9UZXh0TWVkaXVtO1xyXG5cclxuLnRvcEJhclJpZ2h0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1OXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0VERURFRDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0RBREFEQTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAudGJSaWdodENvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1OXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5wcm9maWxlUGljQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDU1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLnByb2ZpbGVQaWMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hbWVQZXJzb25DaGF0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0bGVGb250O1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0UmlnaHRJY29ucyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5zZWFyY2hJY29uUmlnaHQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Q1RDVENTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0TW9yZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRDVENUQ1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uY2hhdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTMzcHgpO1xyXG4gICAgYmFja2dyb3VuZDogI0U1RERENTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLmNoYXREYXRlQ29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA5JTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA5JTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC5jaGF0RGF0ZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMi41cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0bGVGb250O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTJGM0ZCO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3LjVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEycHggNnB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OjAgMXB4IC41cHggcmdiYShibGFjaywuMTMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5zZW5kTWVzc2FnZUZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGMEYwRjA7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNEQURBREE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC5sZWZ0TWVzc2FnZUZvcm1JY29ucyB7XHJcbiAgICAgICAgd2lkdGg6IDk0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAuc21pbGV5Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNsaXBDb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Q1RDVENTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50eXBlTWVzc2FnZUZvcm0ge1xyXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDlweCAxMnB4IDExcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAubWVzc2FnZUZvcm1UZXh0IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0LjJweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRib2R5Rm9udDtcclxuICAgICAgICAgICAgY29sb3I6ICM5MTkxOTE7XHJcbiAgICAgICAgICAgIGN1cnNvcjogdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWljcm9waG9uZUNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatAreaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chat-area',
            templateUrl: './chat-area.component.html',
            styleUrls: ['./chat-area.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]
          }];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          msgs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "tET3":
    /*!**************************************************************!*\
      !*** ./src/app/shared/services/register/register.service.ts ***!
      \**************************************************************/

    /*! exports provided: RegisterService */

    /***/
    function tET3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
        return RegisterService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);

      var RegisterService = /*#__PURE__*/function () {
        function RegisterService() {
          _classCallCheck(this, RegisterService);

          this.baseref = firebase__WEBPACK_IMPORTED_MODULE_1__["database"]().ref('items');
          this.idUsuario = '';
        }

        _createClass(RegisterService, [{
          key: "PullRegister",
          value: function PullRegister() {
            // console.log("PullRegister");
            var users = [];
            this.baseref.on('child_added', function (snapshot) {
              users.push(snapshot.val());
            });
            return users;
          }
        }, {
          key: "update",
          value: function update(Email, Numero) {
            var _this3 = this;

            if (Email == "" && Numero == "") {
              alert("Debes ingresar al menos un dato para agregar el contacto");
            } else {
              var user = window.localStorage.getItem('user').split('","');
              var activeuser;
              var insertuser;
              this.baseref.on('child_added', function (snapshot) {
                if (user[0].includes(snapshot.val().email) || user[0].includes(snapshot.val().telefono)) {
                  _this3.idUsuario = snapshot.ref.key;
                  activeuser = snapshot.val();
                }

                if (snapshot.val().email == Email || snapshot.val().telefono == Numero) {
                  insertuser = snapshot.val();
                }
              });
              console.log("Usuario: " + user);
              console.log("Llave: " + this.idUsuario);

              if (activeuser == insertuser || activeuser.contactos.includes(insertuser.email)) {
                alert("No puedes repetir contactos ni agregarte a ti mismo");
              } else {
                activeuser.contactos[activeuser.contactos.length] = insertuser.email;
                this.baseref.child(this.idUsuario).update(activeuser);
                alert("Contacto agregado");
              }
            }
          }
        }]);

        return RegisterService;
      }();

      RegisterService.ɵfac = function RegisterService_Factory(t) {
        return new (t || RegisterService)();
      };

      RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RegisterService,
        factory: RegisterService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vNkp":
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/private/home/components/chat-message/chat-message.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ChatMessageComponent */

    /***/
    function vNkp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatMessageComponent", function () {
        return ChatMessageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ChatMessageComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.time);
        }
      }

      function ChatMessageComponent__svg_svg_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx_r1.isRead ? "#50C2F7" : "#ABABAB");
        }
      }

      var ChatMessageComponent = /*#__PURE__*/function () {
        function ChatMessageComponent() {
          _classCallCheck(this, ChatMessageComponent);
        }

        _createClass(ChatMessageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChatMessageComponent;
      }();

      ChatMessageComponent.ɵfac = function ChatMessageComponent_Factory(t) {
        return new (t || ChatMessageComponent)();
      };

      ChatMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChatMessageComponent,
        selectors: [["app-chat-message"]],
        inputs: {
          content: "content",
          time: "time",
          isMe: "isMe",
          isRead: "isRead"
        },
        decls: 6,
        vars: 7,
        consts: [[1, "messageTimeContainer"], ["class", "messageTimeChat", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 16 15", "width", "16", "height", "15", 4, "ngIf"], [1, "messageTimeChat"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 16 15", "width", "16", "height", "15"], ["d", "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"]],
        template: function ChatMessageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatMessageComponent_div_4_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatMessageComponent__svg_svg_5_Template, 2, 1, "svg", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isMe ? "messageRightContainer" : "messageLeftContainer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isMe ? "messageTextRight" : "messageTextLeft");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMe);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMe);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".messageRightContainer[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2px;\n  padding-left: 9%;\n  padding-right: 9%;\n  display: flex;\n  justify-content: flex-end;\n}\n.messageRightContainer[_ngcontent-%COMP%]   .messageTextRight1[_ngcontent-%COMP%] {\n  max-width: 65%;\n  display: flex;\n  align-items: center;\n  font-size: 14.2px;\n  font-family: sfProTextMedium;\n  background: #DBF8C6;\n  border-radius: 7.5px 0 7.5px 7.5px;\n  padding: 6px 7px 8px 9px;\n  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n  flex-grow: 0.1;\n}\n.messageRightContainer[_ngcontent-%COMP%]   .messageTimeContainer[_ngcontent-%COMP%] {\n  position: relative;\n  height: 15px;\n  margin-bottom: 1px;\n  padding-right: 12px;\n  display: flex;\n  align-self: flex-end;\n  left: -45px;\n}\n.messageRightContainer[_ngcontent-%COMP%]   .messageTimeContainer[_ngcontent-%COMP%]   .messageTimeChat[_ngcontent-%COMP%] {\n  margin-right: 2px;\n  font-size: 11px;\n  color: #9AAE8C;\n}\n.messageRightContainer[_ngcontent-%COMP%]   .rightTail[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 83px;\n}\n.messageRightContainer[_ngcontent-%COMP%]   .messageTextRight[_ngcontent-%COMP%] {\n  max-width: 65%;\n  display: flex;\n  align-items: center;\n  font-size: 14.2px;\n  font-family: sfProTextMedium;\n  background: #DBF8C6;\n  border-radius: 7.5px;\n  padding: 6px 7px 8px 9px;\n  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n  flex-grow: 0.1;\n}\n.messageLeftContainer[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2px;\n  padding-left: 9%;\n  padding-right: 9%;\n  display: flex;\n}\n.messageLeftContainer[_ngcontent-%COMP%]   .messageTextLeft1[_ngcontent-%COMP%] {\n  max-width: 65%;\n  display: flex;\n  align-items: center;\n  font-size: 14.2px;\n  font-family: sfProTextMedium;\n  background: white;\n  border-radius: 0 7.5px 7.5px 7.5px;\n  padding: 6px 7px 8px 9px;\n  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n  flex-grow: 0.1;\n}\n.messageLeftContainer[_ngcontent-%COMP%]   .messageTimeChat[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-self: flex-end;\n  font-size: 11px;\n  color: #C1C1C1;\n  left: 54.5%;\n}\n.messageLeftContainer[_ngcontent-%COMP%]   .leftTail[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 515px;\n}\n.messageLeftContainer[_ngcontent-%COMP%]   .messageTextLeft[_ngcontent-%COMP%] {\n  max-width: 65%;\n  display: flex;\n  align-items: center;\n  font-size: 14.2px;\n  font-family: sfProTextMedium;\n  background: white;\n  border-radius: 7.5px;\n  padding: 6px 7px 8px 9px;\n  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n  flex-grow: 0.1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ob21lL2NvbXBvbmVudHMvY2hhdC1tZXNzYWdlL2NoYXQtbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBRko7QUFHSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQWRJO0VBZUosbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxjQUFBO0FBRFI7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBRFI7QUFFUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBWjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBRFI7QUFHSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQTVDSTtFQTZDSixtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7QUFEUjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBREo7QUFFSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQS9ESTtFQWdFSixpQkFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBQVI7QUFFSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQXZGSTtFQXdGSixpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvaG9tZS9jb21wb25lbnRzL2NoYXQtbWVzc2FnZS9jaGF0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYm9keUZvbnQ6IHNmUHJvVGV4dFJlZ3VsYXI7XHJcbiR0aXRsZUZvbnQ6IHNmUHJvVGV4dE1lZGl1bTtcclxuXHJcbi5tZXNzYWdlUmlnaHRDb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDklO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAubWVzc2FnZVRleHRSaWdodDEge1xyXG4gICAgICAgIG1heC13aWR0aDogNjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE0LjJweDtcclxuICAgICAgICBmb250LWZhbWlseTogJHRpdGxlRm9udDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjREJGOEM2O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDcuNXB4IDAgNy41cHggNy41cHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDdweCA4cHggOXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6MCAxcHggLjVweCByZ2JhKGJsYWNrLC4xMyk7XHJcbiAgICAgICAgZmxleC1ncm93OiAuMTtcclxuICAgIH1cclxuICAgIC5tZXNzYWdlVGltZUNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgIGxlZnQ6IC00NXB4O1xyXG4gICAgICAgIC5tZXNzYWdlVGltZUNoYXR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOUFBRThDO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodFRhaWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogODNweDtcclxuICAgIH1cclxuICAgIC5tZXNzYWdlVGV4dFJpZ2h0IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDY1JTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNC4ycHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRsZUZvbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0RCRjhDNjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA3LjVweDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggN3B4IDhweCA5cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzowIDFweCAuNXB4IHJnYmEoYmxhY2ssLjEzKTtcclxuICAgICAgICBmbGV4LWdyb3c6IC4xO1xyXG4gICAgfVxyXG59XHJcbi5tZXNzYWdlTGVmdENvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDklO1xyXG4gICAgcGFkZGluZy1yaWdodDogOSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLm1lc3NhZ2VUZXh0TGVmdDEge1xyXG4gICAgICAgIG1heC13aWR0aDogNjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE0LjJweDtcclxuICAgICAgICBmb250LWZhbWlseTogJHRpdGxlRm9udDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDcuNXB4IDcuNXB4IDcuNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCA3cHggOHB4IDlweDtcclxuICAgICAgICBib3gtc2hhZG93OjAgMXB4IC41cHggcmdiYShibGFjaywuMTMpO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogLjE7XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZVRpbWVDaGF0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBjb2xvcjogI0MxQzFDMTtcclxuICAgICAgICBsZWZ0OiA1NC41JTtcclxuICAgIH1cclxuICAgIC5sZWZ0VGFpbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUxNXB4O1xyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2VUZXh0TGVmdCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2NSU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQuMnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0bGVGb250O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDcuNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCA3cHggOHB4IDlweDtcclxuICAgICAgICBib3gtc2hhZG93OjAgMXB4IC41cHggcmdiYShibGFjaywuMTMpO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogLjE7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMessageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chat-message',
            templateUrl: './chat-message.component.html',
            styleUrls: ['./chat-message.component.scss']
          }]
        }], function () {
          return [];
        }, {
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isMe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isRead: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_private_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/private/home/home.component */
      "dsDk");
      /* harmony import */


      var _pages_private_home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/private/home/home.module */
      "Dw5M");
      /* harmony import */


      var _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/public/login/login.component */
      "QuX9");
      /* harmony import */


      var _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/public/register/register.component */
      "MyXD");
      /* harmony import */


      var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/guards/auth.guard */
      "LjFu");

      var routes = [{
        path: '',
        component: _pages_private_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
      }, {
        path: 'login',
        component: _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'register',
        component: _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
      }, {
        path: '**',
        redirectTo: '/'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _pages_private_home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _pages_private_home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _pages_private_home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map