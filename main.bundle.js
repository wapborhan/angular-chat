webpackJsonp([1],{

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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <chat-page></chat-page>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_chat_example_data__ = __webpack_require__("../../../../../src/app/data/chat-example-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_users_service__ = __webpack_require__("../../../../../src/app/user/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thread_threads_service__ = __webpack_require__("../../../../../src/app/thread/threads.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_messages_service__ = __webpack_require__("../../../../../src/app/message/messages.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(messagesService, threadsService, usersService) {
        this.messagesService = messagesService;
        this.threadsService = threadsService;
        this.usersService = usersService;
        __WEBPACK_IMPORTED_MODULE_1__data_chat_example_data__["a" /* ChatExampleData */].init(messagesService, threadsService, usersService);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__message_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__message_messages_service__["a" /* MessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__thread_threads_service__["a" /* ThreadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__thread_threads_service__["a" /* ThreadsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__user_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_users_service__["a" /* UsersService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_users_service__ = __webpack_require__("../../../../../src/app/user/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__thread_threads_service__ = __webpack_require__("../../../../../src/app/thread/threads.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_messages_service__ = __webpack_require__("../../../../../src/app/message/messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_message_chat_message_component__ = __webpack_require__("../../../../../src/app/chat-message/chat-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_thread_chat_thread_component__ = __webpack_require__("../../../../../src/app/chat-thread/chat-thread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_nav_bar_chat_nav_bar_component__ = __webpack_require__("../../../../../src/app/chat-nav-bar/chat-nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chat_threads_chat_threads_component__ = __webpack_require__("../../../../../src/app/chat-threads/chat-threads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat_window_chat_window_component__ = __webpack_require__("../../../../../src/app/chat-window/chat-window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__chat_page_chat_page_component__ = __webpack_require__("../../../../../src/app/chat-page/chat-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_from_now_pipe__ = __webpack_require__("../../../../../src/app/pipes/from-now.pipe.ts");
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
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__chat_message_chat_message_component__["a" /* ChatMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__chat_thread_chat_thread_component__["a" /* ChatThreadComponent */],
            __WEBPACK_IMPORTED_MODULE_10__chat_nav_bar_chat_nav_bar_component__["a" /* ChatNavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__chat_threads_chat_threads_component__["a" /* ChatThreadsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__chat_window_chat_window_component__["a" /* ChatWindowComponent */],
            __WEBPACK_IMPORTED_MODULE_13__chat_page_chat_page_component__["a" /* ChatPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pipes_from_now_pipe__["a" /* FromNowPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__message_messages_service__["a" /* MessagesService */], __WEBPACK_IMPORTED_MODULE_5__thread_threads_service__["a" /* ThreadsService */], __WEBPACK_IMPORTED_MODULE_4__user_users_service__["a" /* UsersService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat-message/chat-message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-message/chat-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"msg-container\"\n     [ngClass]=\"{'base-sent': !incoming, 'base-receive': incoming}\">\n\n  <div class=\"avatar\"\n       *ngIf=\"!incoming\">\n    <img src=\"{{message.author.avatarSrc}}\">\n  </div>\n\n  <div class=\"messages\"\n    [ngClass]=\"{'msg-sent': !incoming, 'msg-receive': incoming}\">\n    <p>{{message.text}}</p>\n    <p class=\"time\">{{message.sender}} • {{message.sentAt | fromNow}}</p>\n  </div>\n\n  <div class=\"avatar\"\n       *ngIf=\"incoming\">\n    <img src=\"{{message.author.avatarSrc}}\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat-message/chat-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_users_service__ = __webpack_require__("../../../../../src/app/user/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_message_model__ = __webpack_require__("../../../../../src/app/message/message.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatMessageComponent = (function () {
    function ChatMessageComponent(UsersService) {
        this.UsersService = UsersService;
    }
    ChatMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.UsersService.currentUser
            .subscribe(function (user) {
            _this.currentUser = user;
            if (_this.message.author && user) {
                _this.incoming = _this.message.author.id !== user.id;
            }
        });
    };
    return ChatMessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]) === "function" && _a || Object)
], ChatMessageComponent.prototype, "message", void 0);
ChatMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'chat-message',
        template: __webpack_require__("../../../../../src/app/chat-message/chat-message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-message/chat-message.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_users_service__["a" /* UsersService */]) === "function" && _b || Object])
], ChatMessageComponent);

var _a, _b;
//# sourceMappingURL=chat-message.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-nav-bar/chat-nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-nav-bar/chat-nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"https://ng-book.com/2\">\n        <img src=\"assets/images/logos/ng-book-2-minibook.png\"/>\n         ng-book 2\n      </a>\n    </div>\n    <p class=\"navbar-text navbar-right\">\n      <button class=\"btn btn-primary\" type=\"button\">\n        Messages <span class=\"badge\">{{ unreadMessagesCount }}</span>\n      </button>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/chat-nav-bar/chat-nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thread_threads_service__ = __webpack_require__("../../../../../src/app/thread/threads.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_messages_service__ = __webpack_require__("../../../../../src/app/message/messages.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatNavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatNavBarComponent = (function () {
    function ChatNavBarComponent(messagesService, threadsService) {
        this.messagesService = messagesService;
        this.threadsService = threadsService;
    }
    ChatNavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messagesService.messages
            .combineLatest(this.threadsService.currentThread, function (messages, currentThread) {
            return [currentThread, messages];
        })
            .subscribe(function (_a) {
            var currentThread = _a[0], messages = _a[1];
            _this.unreadMessagesCount =
                __WEBPACK_IMPORTED_MODULE_1_lodash__["reduce"](messages, function (sum, m) {
                    var messageIsInCurrentThread = m.thread &&
                        currentThread &&
                        (currentThread.id === m.thread.id);
                    // note: in a "real" app you should also exclude
                    // messages that were authored by the current user b/c they've
                    // already been "read"
                    if (m && !m.isRead && !messageIsInCurrentThread) {
                        sum = sum + 1;
                    }
                    return sum;
                }, 0);
        });
    };
    return ChatNavBarComponent;
}());
ChatNavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'chat-nav-bar',
        template: __webpack_require__("../../../../../src/app/chat-nav-bar/chat-nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-nav-bar/chat-nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__message_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__message_messages_service__["a" /* MessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__thread_threads_service__["a" /* ThreadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__thread_threads_service__["a" /* ThreadsService */]) === "function" && _b || Object])
], ChatNavBarComponent);

var _a, _b;
//# sourceMappingURL=chat-nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-page/chat-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-page/chat-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <chat-nav-bar></chat-nav-bar>\n  <div class=\"container\">\n    <chat-threads></chat-threads>\n    <chat-window></chat-window>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat-page/chat-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatPageComponent = (function () {
    function ChatPageComponent() {
    }
    ChatPageComponent.prototype.ngOnInit = function () {
    };
    return ChatPageComponent;
}());
ChatPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'chat-page',
        template: __webpack_require__("../../../../../src/app/chat-page/chat-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-page/chat-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChatPageComponent);

//# sourceMappingURL=chat-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-thread/chat-thread.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-thread/chat-thread.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"media conversation\">\n  <div class=\"pull-left\">\n    <img class=\"media-object avatar\"\n         src=\"{{thread.avatarSrc}}\">\n  </div>\n  <div class=\"media-body\">\n    <h5 class=\"media-heading contact-name\">{{thread.name}}\n      <span *ngIf=\"selected\">&bull;</span>\n    </h5>\n    <small class=\"message-preview\">{{thread.lastMessage.text}}</small>\n  </div>\n  <a (click)=\"clicked($event)\" class=\"div-link\">Select</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat-thread/chat-thread.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thread_threads_service__ = __webpack_require__("../../../../../src/app/thread/threads.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thread_thread_model__ = __webpack_require__("../../../../../src/app/thread/thread.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatThreadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatThreadComponent = (function () {
    function ChatThreadComponent(threadsService) {
        this.threadsService = threadsService;
        this.selected = false;
    }
    ChatThreadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.threadsService.currentThread
            .subscribe(function (currentThread) {
            _this.selected = currentThread &&
                _this.thread &&
                (currentThread.id === _this.thread.id);
        });
    };
    ChatThreadComponent.prototype.clicked = function (event) {
        this.threadsService.setCurrentThread(this.thread);
        event.preventDefault();
    };
    return ChatThreadComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__thread_thread_model__["a" /* Thread */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__thread_thread_model__["a" /* Thread */]) === "function" && _a || Object)
], ChatThreadComponent.prototype, "thread", void 0);
ChatThreadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'chat-thread',
        template: __webpack_require__("../../../../../src/app/chat-thread/chat-thread.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-thread/chat-thread.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__thread_threads_service__["a" /* ThreadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__thread_threads_service__["a" /* ThreadsService */]) === "function" && _b || Object])
], ChatThreadComponent);

var _a, _b;
//# sourceMappingURL=chat-thread.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-threads/chat-threads.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-threads/chat-threads.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- conversations -->\n<div class=\"row\">\n  <div class=\"conversation-wrap\">\n\n    <chat-thread\n         *ngFor=\"let thread of threads | async\"\n         [thread]=\"thread\">\n    </chat-thread>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat-threads/chat-threads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thread_threads_service__ = __webpack_require__("../../../../../src/app/thread/threads.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatThreadsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatThreadsComponent = (function () {
    function ChatThreadsComponent(threadsService) {
        this.threadsService = threadsService;
        this.threads = threadsService.orderedThreads;
    }
    return ChatThreadsComponent;
}());
ChatThreadsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'chat-threads',
        template: __webpack_require__("../../../../../src/app/chat-threads/chat-threads.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-threads/chat-threads.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__thread_threads_service__["a" /* ThreadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__thread_threads_service__["a" /* ThreadsService */]) === "function" && _a || Object])
], ChatThreadsComponent);

var _a;
//# sourceMappingURL=chat-threads.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-window/chat-window.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-window/chat-window.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-window-container\">\n  <div class=\"chat-window\">\n    <div class=\"panel-container\">\n      <div class=\"panel panel-default\">\n\n        <div class=\"panel-heading top-bar\">\n          <div class=\"panel-title-container\">\n            <h3 class=\"panel-title\">\n              <span class=\"glyphicon glyphicon-comment\"></span>\n              Chat - {{currentThread.name}}\n            </h3>\n          </div>\n          <div class=\"panel-buttons-container\">\n            <!-- you could put minimize or close buttons here -->\n          </div>\n        </div>\n\n        <div class=\"panel-body msg-container-base\">\n          <chat-message\n          *ngFor=\"let message of messages | async\"\n          [message]=\"message\">\n        </chat-message>\n      </div>\n\n      <div class=\"panel-footer\">\n        <div class=\"input-group\">\n          <input type=\"text\"\n          class=\"chat-input\"\n          placeholder=\"Write your message here...\"\n          (keydown.enter)=\"onEnter($event)\"\n          [(ngModel)]=\"draftMessage.text\" />\n          <span class=\"input-group-btn\">\n            <button class=\"btn-chat\"\n            (click)=\"onEnter($event)\"\n            >Send</button>\n          </span>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat-window/chat-window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_users_service__ = __webpack_require__("../../../../../src/app/user/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thread_threads_service__ = __webpack_require__("../../../../../src/app/thread/threads.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_message_model__ = __webpack_require__("../../../../../src/app/message/message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_messages_service__ = __webpack_require__("../../../../../src/app/message/messages.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatWindowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatWindowComponent = (function () {
    function ChatWindowComponent(messagesService, threadsService, UsersService, el) {
        this.messagesService = messagesService;
        this.threadsService = threadsService;
        this.UsersService = UsersService;
        this.el = el;
    }
    ChatWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages = this.threadsService.currentThreadMessages;
        this.draftMessage = new __WEBPACK_IMPORTED_MODULE_3__message_message_model__["a" /* Message */]();
        this.threadsService.currentThread.subscribe(function (thread) {
            _this.currentThread = thread;
        });
        this.UsersService.currentUser
            .subscribe(function (user) {
            _this.currentUser = user;
        });
        this.messages
            .subscribe(function (messages) {
            setTimeout(function () {
                _this.scrollToBottom();
            });
        });
    };
    ChatWindowComponent.prototype.onEnter = function (event) {
        this.sendMessage();
        event.preventDefault();
    };
    ChatWindowComponent.prototype.sendMessage = function () {
        var m = this.draftMessage;
        m.author = this.currentUser;
        m.thread = this.currentThread;
        m.isRead = true;
        this.messagesService.addMessage(m);
        this.draftMessage = new __WEBPACK_IMPORTED_MODULE_3__message_message_model__["a" /* Message */]();
    };
    ChatWindowComponent.prototype.scrollToBottom = function () {
        var scrollPane = this.el
            .nativeElement.querySelector('.msg-container-base');
        scrollPane.scrollTop = scrollPane.scrollHeight;
    };
    return ChatWindowComponent;
}());
ChatWindowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'chat-window',
        template: __webpack_require__("../../../../../src/app/chat-window/chat-window.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-window/chat-window.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__message_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__message_messages_service__["a" /* MessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__thread_threads_service__["a" /* ThreadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__thread_threads_service__["a" /* ThreadsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__user_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_users_service__["a" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _d || Object])
], ChatWindowComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=chat-window.component.js.map

/***/ }),

/***/ "../../../../../src/app/data/chat-example-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user_model__ = __webpack_require__("../../../../../src/app/user/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thread_thread_model__ = __webpack_require__("../../../../../src/app/thread/thread.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_message_model__ = __webpack_require__("../../../../../src/app/message/message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatExampleData; });
/* tslint:disable:max-line-length */




// the person using the app us Juliet
var me = new __WEBPACK_IMPORTED_MODULE_0__user_user_model__["a" /* User */]('Juliet', 'assets/images/avatars/female-avatar-1.png');
var ladycap = new __WEBPACK_IMPORTED_MODULE_0__user_user_model__["a" /* User */]('Lady Capulet', 'assets/images/avatars/female-avatar-2.png');
var echo = new __WEBPACK_IMPORTED_MODULE_0__user_user_model__["a" /* User */]('Echo Bot', 'assets/images/avatars/male-avatar-1.png');
var rev = new __WEBPACK_IMPORTED_MODULE_0__user_user_model__["a" /* User */]('Reverse Bot', 'assets/images/avatars/female-avatar-4.png');
var wait = new __WEBPACK_IMPORTED_MODULE_0__user_user_model__["a" /* User */]('Waiting Bot', 'assets/images/avatars/male-avatar-2.png');
var tLadycap = new __WEBPACK_IMPORTED_MODULE_1__thread_thread_model__["a" /* Thread */]('tLadycap', ladycap.name, ladycap.avatarSrc);
var tEcho = new __WEBPACK_IMPORTED_MODULE_1__thread_thread_model__["a" /* Thread */]('tEcho', echo.name, echo.avatarSrc);
var tRev = new __WEBPACK_IMPORTED_MODULE_1__thread_thread_model__["a" /* Thread */]('tRev', rev.name, rev.avatarSrc);
var tWait = new __WEBPACK_IMPORTED_MODULE_1__thread_thread_model__["a" /* Thread */]('tWait', wait.name, wait.avatarSrc);
var initialMessages = [
    new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]({
        author: me,
        sentAt: __WEBPACK_IMPORTED_MODULE_3_moment__().subtract(45, 'minutes').toDate(),
        text: 'Yet let me weep for such a feeling loss.',
        thread: tLadycap
    }),
    new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]({
        author: ladycap,
        sentAt: __WEBPACK_IMPORTED_MODULE_3_moment__().subtract(20, 'minutes').toDate(),
        text: 'So shall you feel the loss, but not the friend which you weep for.',
        thread: tLadycap
    }),
    new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]({
        author: echo,
        sentAt: __WEBPACK_IMPORTED_MODULE_3_moment__().subtract(1, 'minutes').toDate(),
        text: "I'll echo whatever you send me",
        thread: tEcho
    }),
    new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]({
        author: rev,
        sentAt: __WEBPACK_IMPORTED_MODULE_3_moment__().subtract(3, 'minutes').toDate(),
        text: "I'll reverse whatever you send me",
        thread: tRev
    }),
    new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]({
        author: wait,
        sentAt: __WEBPACK_IMPORTED_MODULE_3_moment__().subtract(4, 'minutes').toDate(),
        text: "I'll wait however many seconds you send to me before responding. Try sending '3'",
        thread: tWait
    }),
];
var ChatExampleData = (function () {
    function ChatExampleData() {
    }
    ChatExampleData.init = function (messagesService, threadsService, UsersService) {
        // TODO make `messages` hot
        messagesService.messages.subscribe(function () { return ({}); });
        // set "Juliet" as the current user
        UsersService.setCurrentUser(me);
        // create the initial messages
        initialMessages.map(function (message) { return messagesService.addMessage(message); });
        threadsService.setCurrentThread(tEcho);
        this.setupBots(messagesService);
    };
    ChatExampleData.setupBots = function (messagesService) {
        // echo bot
        messagesService.messagesForThreadUser(tEcho, echo)
            .forEach(function (message) {
            messagesService.addMessage(new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]({
                author: echo,
                text: message.text,
                thread: tEcho
            }));
        }, null);
        // reverse bot
        messagesService.messagesForThreadUser(tRev, rev)
            .forEach(function (message) {
            messagesService.addMessage(new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]({
                author: rev,
                text: message.text.split('').reverse().join(''),
                thread: tRev
            }));
        }, null);
        // waiting bot
        messagesService.messagesForThreadUser(tWait, wait)
            .forEach(function (message) {
            var waitTime = parseInt(message.text, 10);
            var reply;
            if (isNaN(waitTime)) {
                waitTime = 0;
                reply = "I didn't understand " + message.text + ". Try sending me a number";
            }
            else {
                reply = "I waited " + waitTime + " seconds to send you this.";
            }
            setTimeout(function () {
                messagesService.addMessage(new __WEBPACK_IMPORTED_MODULE_2__message_message_model__["a" /* Message */]({
                    author: wait,
                    text: reply,
                    thread: tWait
                }));
            }, waitTime * 1000);
        }, null);
    };
    return ChatExampleData;
}());

//# sourceMappingURL=chat-example-data.js.map

/***/ }),

/***/ "../../../../../src/app/message/message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_uuid__ = __webpack_require__("../../../../../src/app/util/uuid.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });

/**
 * Message represents one message being sent in a Thread
 */
var Message = (function () {
    function Message(obj) {
        this.id = obj && obj.id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_uuid__["a" /* uuid */])();
        this.isRead = obj && obj.isRead || false;
        this.sentAt = obj && obj.sentAt || new Date();
        this.author = obj && obj.author || null;
        this.text = obj && obj.text || null;
        this.thread = obj && obj.thread || null;
    }
    return Message;
}());

//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ "../../../../../src/app/message/messages.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesService; });
/* unused harmony export messagesServiceInjectables */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var initialMessages = [];
var MessagesService = (function () {
    function MessagesService() {
        // a stream that publishes new messages only once
        this.newMessages = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        // `updates` receives _operations_ to be applied to our `messages`
        // it's a way we can perform changes on *all* messages (that are currently
        // stored in `messages`)
        this.updates = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        // action streams
        this.create = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.markThreadAsRead = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.messages = this.updates
            .scan(function (messages, operation) {
            return operation(messages);
        }, initialMessages)
            .publishReplay(1)
            .refCount();
        // `create` takes a Message and then puts an operation (the inner function)
        // on the `updates` stream to add the Message to the list of messages.
        //
        // That is, for each item that gets added to `create` (by using `next`)
        // this stream emits a concat operation function.
        //
        // Next we subscribe `this.updates` to listen to this stream, which means
        // that it will receive each operation that is created
        //
        // Note that it would be perfectly acceptable to simply modify the
        // "addMessage" function below to simply add the inner operation function to
        // the update stream directly and get rid of this extra action stream
        // entirely. The pros are that it is potentially clearer. The cons are that
        // the stream is no longer composable.
        this.create
            .map(function (message) {
            return function (messages) {
                return messages.concat(message);
            };
        })
            .subscribe(this.updates);
        this.newMessages
            .subscribe(this.create);
        // similarly, `markThreadAsRead` takes a Thread and then puts an operation
        // on the `updates` stream to mark the Messages as read
        this.markThreadAsRead
            .map(function (thread) {
            return function (messages) {
                return messages.map(function (message) {
                    // note that we're manipulating `message` directly here. Mutability
                    // can be confusing and there are lots of reasons why you might want
                    // to, say, copy the Message object or some other 'immutable' here
                    if (message.thread.id === thread.id) {
                        message.isRead = true;
                    }
                    return message;
                });
            };
        })
            .subscribe(this.updates);
    }
    // an imperative function call to this action stream
    MessagesService.prototype.addMessage = function (message) {
        this.newMessages.next(message);
    };
    MessagesService.prototype.messagesForThreadUser = function (thread, user) {
        return this.newMessages
            .filter(function (message) {
            // belongs to this thread
            return (message.thread.id === thread.id) &&
                // and isn't authored by this user
                (message.author.id !== user.id);
        });
    };
    return MessagesService;
}());
MessagesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MessagesService);

var messagesServiceInjectables = [
    MessagesService
];
//# sourceMappingURL=messages.service.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/from-now.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromNowPipe; });
/* unused harmony export fromNowPipeInjectables */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * FromNowPipe let's us convert a date into a human-readable relative-time
 * such as "10 minutes ago".
 */
var FromNowPipe = (function () {
    function FromNowPipe() {
    }
    FromNowPipe.prototype.transform = function (value, args) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow();
    };
    return FromNowPipe;
}());
FromNowPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'fromNow'
    })
], FromNowPipe);

var fromNowPipeInjectables = [
    FromNowPipe
];
//# sourceMappingURL=from-now.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/thread/thread.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_uuid__ = __webpack_require__("../../../../../src/app/util/uuid.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Thread; });

/**
 * Thread represents a group of Users exchanging Messages
 */
var Thread = (function () {
    function Thread(id, name, avatarSrc) {
        this.id = id || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_uuid__["a" /* uuid */])();
        this.name = name;
        this.avatarSrc = avatarSrc;
    }
    return Thread;
}());

//# sourceMappingURL=thread.model.js.map

/***/ }),

/***/ "../../../../../src/app/thread/threads.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thread_model__ = __webpack_require__("../../../../../src/app/thread/thread.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_messages_service__ = __webpack_require__("../../../../../src/app/message/messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadsService; });
/* unused harmony export threadsServiceInjectables */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ThreadsService = (function () {
    function ThreadsService(messagesService) {
        this.messagesService = messagesService;
        // `currentThread` contains the currently selected thread
        this.currentThread = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_2__thread_model__["a" /* Thread */]());
        this.threads = messagesService.messages
            .map(function (messages) {
            var threads = {};
            // Store the message's thread in our accumulator `threads`
            messages.map(function (message) {
                threads[message.thread.id] = threads[message.thread.id] ||
                    message.thread;
                // Cache the most recent message for each thread
                var messagesThread = threads[message.thread.id];
                if (!messagesThread.lastMessage ||
                    messagesThread.lastMessage.sentAt < message.sentAt) {
                    messagesThread.lastMessage = message;
                }
            });
            return threads;
        });
        this.orderedThreads = this.threads
            .map(function (threadGroups) {
            var threads = __WEBPACK_IMPORTED_MODULE_4_lodash__["values"](threadGroups);
            return __WEBPACK_IMPORTED_MODULE_4_lodash__["sortBy"](threads, function (t) { return t.lastMessage.sentAt; }).reverse();
        });
        this.currentThreadMessages = this.currentThread
            .combineLatest(messagesService.messages, function (currentThread, messages) {
            if (currentThread && messages.length > 0) {
                return __WEBPACK_IMPORTED_MODULE_4_lodash__["chain"](messages)
                    .filter(function (message) {
                    return (message.thread.id === currentThread.id);
                })
                    .map(function (message) {
                    message.isRead = true;
                    return message;
                })
                    .value();
            }
            else {
                return [];
            }
        });
        this.currentThread.subscribe(this.messagesService.markThreadAsRead);
    }
    ThreadsService.prototype.setCurrentThread = function (newThread) {
        this.currentThread.next(newThread);
    };
    return ThreadsService;
}());
ThreadsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__message_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__message_messages_service__["a" /* MessagesService */]) === "function" && _a || Object])
], ThreadsService);

var threadsServiceInjectables = [
    ThreadsService
];
var _a;
//# sourceMappingURL=threads.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_uuid__ = __webpack_require__("../../../../../src/app/util/uuid.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });

/**
 * A User represents an agent that sends messages
 */
var User = (function () {
    function User(name, avatarSrc) {
        this.name = name;
        this.avatarSrc = avatarSrc;
        this.id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_uuid__["a" /* uuid */])();
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/user/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* unused harmony export userServiceInjectables */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * UserService manages our current user
 */
var UsersService = (function () {
    function UsersService() {
        // `currentUser` contains the current user
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
    }
    UsersService.prototype.setCurrentUser = function (newUser) {
        this.currentUser.next(newUser);
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], UsersService);

var userServiceInjectables = [
    UsersService
];
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/util/uuid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uuid;
/* jshint bitwise:false, node:true */
/* tslint:disable:no-bitwise no-var-keyword typedef */
// taken from TodoMVC
/* jshint bitwise:false, node:true */ function uuid() {
    var i, random;
    var result = '';
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            result += '-';
        }
        result += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
            .toString(16);
    }
    return result;
}
;
//# sourceMappingURL=uuid.js.map

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

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map