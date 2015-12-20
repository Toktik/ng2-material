System.register("ng2-material/components/button/button.ts", ["angular2/core.js", "angular2/src/facade/async.js", "angular2/src/facade/lang.js", "ng2-material/core/util/ink.ts"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, async_1, lang_1, core_2, ink_1;
    var MdButton, MdAnchor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (ink_1_1) {
                ink_1 = ink_1_1;
            }],
        execute: function() {
            // TODO(jelbourn): Make the `isMouseDown` stuff done with one global listener.
            MdButton = (function () {
                function MdButton(_element) {
                    this._element = _element;
                    /** Whether a mousedown has occured on this element in the last 100ms. */
                    this.isMouseDown = false;
                    /** Whether the button has focus from the keyboard (not the mouse). Used for class binding. */
                    this.isKeyboardFocused = false;
                }
                MdButton.prototype.onMousedown = function (event) {
                    var _this = this;
                    // We only *show* the focus style when focus has come to the button via the keyboard.
                    // The Material Design spec is silent on this topic, and without doing this, the
                    // button continues to look :active after clicking.
                    // @see http://marcysutton.com/button-focus-hell/
                    this.isMouseDown = true;
                    async_1.TimerWrapper.setTimeout(function () {
                        _this.isMouseDown = false;
                    }, 100);
                    if (this._element && ink_1.Ink.canApply(this._element.nativeElement)) {
                        ink_1.Ink.rippleEvent(this._element.nativeElement, event);
                    }
                };
                MdButton.prototype.onFocus = function () {
                    this.isKeyboardFocused = !this.isMouseDown;
                };
                MdButton.prototype.onBlur = function () {
                    this.isKeyboardFocused = false;
                };
                MdButton = __decorate([
                    core_1.Component({
                        selector: '[md-button]:not(a), [md-fab]:not(a), [md-raised-button]:not(a)',
                        host: {
                            '(mousedown)': 'onMousedown($event)',
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()',
                            '[class.md-button-focus]': 'isKeyboardFocused',
                        },
                    }),
                    core_1.View({
                        templateUrl: 'ng2-material/components/button/button.html',
                        //styleUrls: ['ng2-material/components/button/button.css'],
                        encapsulation: core_1.ViewEncapsulation.None,
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_2.ElementRef !== 'undefined' && core_2.ElementRef) === 'function' && _a) || Object])
                ], MdButton);
                return MdButton;
                var _a;
            })();
            exports_1("MdButton", MdButton);
            MdAnchor = (function (_super) {
                __extends(MdAnchor, _super);
                function MdAnchor() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(MdAnchor.prototype, "disabled", {
                    get: function () {
                        return this.disabled_;
                    },
                    set: function (value) {
                        // The presence of *any* disabled value makes the component disabled, *except* for false.
                        this.disabled_ = lang_1.isPresent(value) && this.disabled !== false;
                    },
                    enumerable: true,
                    configurable: true
                });
                MdAnchor.prototype.onClick = function (event) {
                    // A disabled anchor shouldn't navigate anywhere.
                    if (this.disabled) {
                        event.preventDefault();
                    }
                };
                /** Invoked when a change is detected. */
                MdAnchor.prototype.ngOnChanges = function (_) {
                    // A disabled anchor should not be in the tab flow.
                    this.tabIndex = this.disabled ? -1 : 0;
                };
                Object.defineProperty(MdAnchor.prototype, "isAriaDisabled", {
                    /** Gets the aria-disabled value for the component, which must be a string for Dart. */
                    get: function () {
                        return this.disabled ? 'true' : 'false';
                    },
                    enumerable: true,
                    configurable: true
                });
                MdAnchor = __decorate([
                    core_1.Component({
                        selector: 'a[md-button], a[md-raised-button], a[md-fab]',
                        inputs: ['disabled'],
                        host: {
                            '(click)': 'onClick($event)',
                            '(mousedown)': 'onMousedown()',
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()',
                            '[tabIndex]': 'tabIndex',
                            '[class.md-button-focus]': 'isKeyboardFocused',
                            '[attr.aria-disabled]': 'isAriaDisabled',
                        },
                    }),
                    core_1.View({
                        templateUrl: 'ng2-material/components/button/button.html',
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdAnchor);
                return MdAnchor;
            })(MdButton);
            exports_1("MdAnchor", MdAnchor);
        }
    }
});

System.register("ng2-material/components/content/content.ts", ["angular2/core.js"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MdContent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * @name mdContent
             *
             * @description
             * The `<md-content>` directive is a container element useful for scrollable content
             *
             * @usage
             *
             * - Add the `[layout-padding]` attribute to make the content padded.
             *
             * <hljs lang="html">
             *  <md-content layout-padding>
             *      Lorem ipsum dolor sit amet, ne quod novum mei.
             *  </md-content>
             * </hljs>
             *
             */
            MdContent = (function () {
                function MdContent() {
                }
                MdContent = __decorate([
                    core_1.Directive({ selector: 'md-content' }), 
                    __metadata('design:paramtypes', [])
                ], MdContent);
                return MdContent;
            })();
            exports_1("MdContent", MdContent);
        }
    }
});

System.register("ng2-material/components/dialog/dialog.ts", ["angular2/core.js", "angular2/src/facade/async.js", "angular2/src/facade/lang.js", "angular2/src/platform/dom/dom_adapter.js", "ng2-material/core/key_codes.ts"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, async_1, lang_1, dom_adapter_1, key_codes_1;
    var MdDialog, MdDialogRef, MdDialogConfig, MdDialogContainer, MdDialogContent, MdBackdrop;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (dom_adapter_1_1) {
                dom_adapter_1 = dom_adapter_1_1;
            },
            function (key_codes_1_1) {
                key_codes_1 = key_codes_1_1;
            }],
        execute: function() {
            // TODO(jelbourn): Opener of dialog can control where it is rendered.
            // TODO(jelbourn): body scrolling is disabled while dialog is open.
            // TODO(jelbourn): Don't manually construct and configure a DOM element. See #1402
            // TODO(jelbourn): Wrap focus from end of dialog back to the start. Blocked on #1251
            // TODO(jelbourn): Focus the dialog element when it is opened.
            // TODO(jelbourn): Real dialog styles.
            // TODO(jelbourn): Pre-built `alert` and `confirm` dialogs.
            // TODO(jelbourn): Animate dialog out of / into opening element.
            /**
             * Service for opening modal dialogs.
             */
            MdDialog = (function () {
                function MdDialog(loader) {
                    this.componentLoader = loader;
                }
                /**
                 * Opens a modal dialog.
                 * @param type The component to open.
                 * @param elementRef The logical location into which the component will be opened.
                 * @param options
                 * @returns Promise for a reference to the dialog.
                 */
                MdDialog.prototype.open = function (type, elementRef, options) {
                    var _this = this;
                    if (options === void 0) { options = null; }
                    var config = lang_1.isPresent(options) ? options : new MdDialogConfig();
                    // Create the dialogRef here so that it can be injected into the content component.
                    var dialogRef = new MdDialogRef();
                    var bindings = core_1.Injector.resolve([core_1.provide(MdDialogRef, { useValue: dialogRef })]);
                    var backdropRefPromise = this._openBackdrop(elementRef, bindings);
                    // First, load the MdDialogContainer, into which the given component will be loaded.
                    return this.componentLoader.loadNextToLocation(MdDialogContainer, elementRef)
                        .then(function (containerRef) {
                        // TODO(tbosch): clean this up when we have custom renderers
                        // (https://github.com/angular/angular/issues/1807)
                        // TODO(jelbourn): Don't use direct DOM access. Need abstraction to create an element
                        // directly on the document body (also needed for web workers stuff).
                        // Create a DOM node to serve as a physical host element for the dialog.
                        var dialogElement = containerRef.location.nativeElement;
                        dom_adapter_1.DOM.appendChild(dom_adapter_1.DOM.query('body'), dialogElement);
                        // TODO(jelbourn): Do this with hostProperties (or another rendering abstraction) once
                        // ready.
                        if (lang_1.isPresent(config.width)) {
                            dom_adapter_1.DOM.setStyle(dialogElement, 'width', config.width);
                        }
                        if (lang_1.isPresent(config.height)) {
                            dom_adapter_1.DOM.setStyle(dialogElement, 'height', config.height);
                        }
                        dialogRef.containerRef = containerRef;
                        // Now load the given component into the MdDialogContainer.
                        return _this.componentLoader.loadNextToLocation(type, containerRef.instance.contentRef, bindings)
                            .then(function (contentRef) {
                            // Wrap both component refs for the container and the content so that we can return
                            // the `instance` of the content but the dispose method of the container back to the
                            // opener.
                            dialogRef.contentRef = contentRef;
                            containerRef.instance.dialogRef = dialogRef;
                            backdropRefPromise.then(function (backdropRef) {
                                dialogRef.whenClosed.then(function (_) { backdropRef.dispose(); });
                            });
                            return dialogRef;
                        });
                    });
                };
                /** Loads the dialog backdrop (transparent overlay over the rest of the page). */
                MdDialog.prototype._openBackdrop = function (elementRef, bindings) {
                    return this.componentLoader.loadNextToLocation(MdBackdrop, elementRef, bindings)
                        .then(function (componentRef) {
                        // TODO(tbosch): clean this up when we have custom renderers
                        // (https://github.com/angular/angular/issues/1807)
                        var backdropElement = componentRef.location.nativeElement;
                        dom_adapter_1.DOM.addClass(backdropElement, 'md-backdrop');
                        dom_adapter_1.DOM.appendChild(dom_adapter_1.DOM.query('body'), backdropElement);
                        return componentRef;
                    });
                };
                MdDialog.prototype.alert = function (message, okMessage) {
                    throw 'Not implemented';
                };
                MdDialog.prototype.confirm = function (message, okMessage, cancelMessage) {
                    throw 'Not implemented';
                };
                MdDialog = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.DynamicComponentLoader !== 'undefined' && core_1.DynamicComponentLoader) === 'function' && _a) || Object])
                ], MdDialog);
                return MdDialog;
                var _a;
            })();
            exports_1("MdDialog", MdDialog);
            /**
             * Reference to an opened dialog.
             */
            MdDialogRef = (function () {
                function MdDialogRef() {
                    this._contentRef = null;
                    this.containerRef = null;
                    this.isClosed = false;
                    this.contentRefDeferred = async_1.PromiseWrapper.completer();
                    this.whenClosedDeferred = async_1.PromiseWrapper.completer();
                }
                Object.defineProperty(MdDialogRef.prototype, "contentRef", {
                    set: function (value) {
                        this._contentRef = value;
                        this.contentRefDeferred.resolve(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdDialogRef.prototype, "instance", {
                    /** Gets the component instance for the content of the dialog. */
                    get: function () {
                        if (lang_1.isPresent(this._contentRef)) {
                            return this._contentRef.instance;
                        }
                        // The only time one could attempt to access this property before the value is set is if an
                        // access occurs during
                        // the constructor of the very instance they are trying to get (which is much more easily
                        // accessed as `this`).
                        throw "Cannot access dialog component instance *from* that component's constructor.";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdDialogRef.prototype, "whenClosed", {
                    /** Gets a promise that is resolved when the dialog is closed. */
                    get: function () {
                        return this.whenClosedDeferred.promise;
                    },
                    enumerable: true,
                    configurable: true
                });
                /** Closes the dialog. This operation is asynchronous. */
                MdDialogRef.prototype.close = function (result) {
                    var _this = this;
                    if (result === void 0) { result = null; }
                    this.contentRefDeferred.promise.then(function (_) {
                        if (!_this.isClosed) {
                            _this.isClosed = true;
                            _this.containerRef.dispose();
                            _this.whenClosedDeferred.resolve(result);
                        }
                    });
                };
                return MdDialogRef;
            })();
            exports_1("MdDialogRef", MdDialogRef);
            /** Confiuration for a dialog to be opened. */
            MdDialogConfig = (function () {
                function MdDialogConfig() {
                    // Default configuration.
                    this.width = null;
                    this.height = null;
                }
                return MdDialogConfig;
            })();
            exports_1("MdDialogConfig", MdDialogConfig);
            /**
             * Container for user-provided dialog content.
             */
            MdDialogContainer = (function () {
                function MdDialogContainer() {
                    this.contentRef = null;
                    this.dialogRef = null;
                }
                MdDialogContainer.prototype.wrapFocus = function () {
                    // Return the focus to the host element. Blocked on #1251.
                };
                MdDialogContainer.prototype.documentKeypress = function (event) {
                    if (event.keyCode == key_codes_1.KeyCodes.ESCAPE) {
                        this.dialogRef.close();
                    }
                };
                MdDialogContainer = __decorate([
                    core_1.Component({
                        selector: 'md-dialog-container',
                        host: {
                            'class': 'md-dialog',
                            'tabindex': '0',
                            '(body:keydown)': 'documentKeypress($event)',
                        },
                    }),
                    core_1.View({
                        encapsulation: core_1.ViewEncapsulation.None,
                        templateUrl: 'ng2-material/components/dialog/dialog.html',
                        directives: [core_1.forwardRef(function () { return MdDialogContent; })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdDialogContainer);
                return MdDialogContainer;
            })();
            /**
             * Simple decorator used only to communicate an ElementRef to the parent MdDialogContainer as the
             * location
             * for where the dialog content will be loaded.
             */
            MdDialogContent = (function () {
                function MdDialogContent(dialogContainer, elementRef) {
                    dialogContainer.contentRef = elementRef;
                }
                MdDialogContent = __decorate([
                    core_1.Directive({
                        selector: 'md-dialog-content',
                    }),
                    __param(0, core_1.Host()),
                    __param(0, core_1.SkipSelf()), 
                    __metadata('design:paramtypes', [MdDialogContainer, (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
                ], MdDialogContent);
                return MdDialogContent;
                var _a;
            })();
            /** Component for the dialog "backdrop", a transparent overlay over the rest of the page. */
            MdBackdrop = (function () {
                function MdBackdrop(dialogRef) {
                    this.dialogRef = dialogRef;
                }
                MdBackdrop.prototype.onClick = function () {
                    // TODO(jelbourn): Use MdDialogConfig to capture option for whether dialog should close on
                    // clicking outside.
                    this.dialogRef.close();
                };
                MdBackdrop = __decorate([
                    core_1.Component({
                        selector: 'md-backdrop',
                        host: {
                            '(click)': 'onClick()',
                        },
                    }),
                    core_1.View({ template: '', encapsulation: core_1.ViewEncapsulation.None }), 
                    __metadata('design:paramtypes', [MdDialogRef])
                ], MdBackdrop);
                return MdBackdrop;
            })();
        }
    }
});

System.register("ng2-material/components/divider/divider.ts", ["angular2/core.js"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var MdDivider;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            /**
             * @name mdDivider
             *
             * @description
             * Dividers group and separate content within lists and page layouts using strong visual and spatial distinctions. This divider is a thin rule, lightweight enough to not distract the user from content.
             *
             * @param {boolean=} md-inset Add this attribute to activate the inset divider style.
             * @usage
             * <hljs lang="html">
             * <md-divider></md-divider>
             *
             * <md-divider md-inset></md-divider>
             * </hljs>
             *
             */
            MdDivider = (function () {
                function MdDivider() {
                }
                MdDivider = __decorate([
                    core_1.Component({ selector: 'md-divider' }),
                    core_1.View({ template: '', encapsulation: core_2.ViewEncapsulation.None }), 
                    __metadata('design:paramtypes', [])
                ], MdDivider);
                return MdDivider;
            })();
            exports_1("MdDivider", MdDivider);
        }
    }
});

System.register("ng2-material/components/grid_list/grid_list.ts", ["angular2/core.js", "angular2/src/facade/collection.js", "angular2/src/facade/lang.js", "angular2/src/facade/math.js"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, collection_1, lang_1, math_1;
    var RowHeightMode, MdGridList, MdGridTile, TileCoordinator, Position, TileStyle;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (math_1_1) {
                math_1 = math_1_1;
            }],
        execute: function() {
            // TODO(jelbourn): Set appropriate aria attributes for grid list elements.
            // TODO(jelbourn): Animations.
            // TODO(jelbourn): Conditional (responsive) column count / row size.
            // TODO(jelbourn): Re-layout on window resize / media change (debounced).
            // TODO(jelbourn): gridTileHeader and gridTileFooter.
            /** Row hieght mode options. Use a static class b/c TypeScript enums are strictly number-based. */
            RowHeightMode = (function () {
                function RowHeightMode() {
                }
                RowHeightMode.FIT = 'fit';
                RowHeightMode.FIXED = 'fixed';
                RowHeightMode.RATIO = 'ratio';
                return RowHeightMode;
            })();
            MdGridList = (function () {
                function MdGridList() {
                    this.tiles = [];
                    this.rows = 0;
                }
                Object.defineProperty(MdGridList.prototype, "cols", {
                    get: function () {
                        return this._cols;
                    },
                    set: function (value) {
                        this._cols = lang_1.isString(value) ? lang_1.NumberWrapper.parseInt(value, 10) : value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdGridList.prototype, "rowHeight", {
                    /** Set internal representation of row height from the user-provided value. */
                    set: function (value) {
                        if (value === RowHeightMode.FIT) {
                            this.rowHeightMode = RowHeightMode.FIT;
                        }
                        else if (lang_1.StringWrapper.contains(value, ':')) {
                            var ratioParts = value.split(':');
                            if (ratioParts.length !== 2) {
                                throw "md-grid-list: invalid ratio given for row-height: \"" + value + "\"";
                            }
                            this.rowHeightMode = RowHeightMode.RATIO;
                            this.rowHeightRatio =
                                lang_1.NumberWrapper.parseFloat(ratioParts[0]) / lang_1.NumberWrapper.parseFloat(ratioParts[1]);
                        }
                        else {
                            this.rowHeightMode = RowHeightMode.FIXED;
                            this.fixedRowHeight = value;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                MdGridList.prototype.ngAfterContentChecked = function () {
                    this.layoutTiles();
                };
                /** Computes and applies the size and position for all children grid tiles. */
                MdGridList.prototype.layoutTiles = function () {
                    var tracker = new TileCoordinator(this.cols, this.tiles);
                    this.rows = tracker.rowCount;
                    for (var i = 0; i < this.tiles.length; i++) {
                        var pos = tracker.positions[i];
                        var tile = this.tiles[i];
                        tile.style = this.getTileStyle(tile, pos.row, pos.col);
                    }
                };
                /**
                 * Adds a tile to the grid-list.
                 * @param tile
                 */
                MdGridList.prototype.addTile = function (tile) {
                    this.tiles.push(tile);
                };
                /**
                 * Removes a tile from the grid-list.
                 * @param tile
                 */
                MdGridList.prototype.removeTile = function (tile) {
                    collection_1.ListWrapper.remove(this.tiles, tile);
                };
                /**
                 * Computes the amount of space a single 1x1 tile would take up (width or height).
                 * Used as a basis for other calculations.
                 * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
                 * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
                 * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
                 */
                MdGridList.prototype.getBaseTileSize = function (sizePercent, gutterFraction) {
                    // Take the base size percent (as would be if evenly dividing the size between cells),
                    // and then subtracting the size of one gutter. However, since there are no gutters on the
                    // edges, each tile only uses a fration (gutterShare = numGutters / numCells) of the gutter
                    // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
                    // edge evenly among the cells).
                    return "(" + sizePercent + "% - ( " + this.gutterSize + " * " + gutterFraction + " ))";
                };
                /**
                 * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
                 * @param offset Number of tiles that have already been rendered in the row/column.
                 * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
                 * @return Position of the tile as a CSS calc() expression.
                 */
                MdGridList.prototype.getTilePosition = function (baseSize, offset) {
                    // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
                    // row/column (offset).
                    return "calc( (" + baseSize + " + " + this.gutterSize + ") * " + offset + " )";
                };
                /**
                 * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
                 * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
                 * @param span The tile's rowspan or colspan.
                 * @return Size of the tile as a CSS calc() expression.
                 */
                MdGridList.prototype.getTileSize = function (baseSize, span) {
                    return "calc( (" + baseSize + " * " + span + ") + (" + (span - 1) + " * " + this.gutterSize + ") )";
                };
                /** Gets the style properties to be applied to a tile for the given row and column index. */
                MdGridList.prototype.getTileStyle = function (tile, rowIndex, colIndex) {
                    // Percent of the available horizontal space that one column takes up.
                    var percentWidthPerTile = 100 / this.cols;
                    // Fraction of the vertical gutter size that each column takes up.
                    // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.
                    var gutterWidthFractionPerTile = (this.cols - 1) / this.cols;
                    // Base horizontal size of a column.
                    var baseTileWidth = this.getBaseTileSize(percentWidthPerTile, gutterWidthFractionPerTile);
                    // The width and horizontal position of each tile is always calculated the same way, but the
                    // height and vertical position depends on the rowMode.
                    var tileStyle = new TileStyle();
                    tileStyle.left = this.getTilePosition(baseTileWidth, colIndex);
                    tileStyle.width = this.getTileSize(baseTileWidth, tile.colspan);
                    if (this.rowHeightMode == RowHeightMode.FIXED) {
                        // In fixed mode, simply use the given row height.
                        tileStyle.top = this.getTilePosition(this.fixedRowHeight, rowIndex);
                        tileStyle.height = this.getTileSize(this.fixedRowHeight, tile.rowspan);
                    }
                    if (this.rowHeightMode == RowHeightMode.RATIO) {
                        var percentHeightPerTile = percentWidthPerTile / this.rowHeightRatio;
                        var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidthFractionPerTile);
                        // Use paddingTop and marginTop to maintain the given aspect ratio, as
                        // a percentage-based value for these properties is applied versus the *width* of the
                        // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties
                        tileStyle.marginTop = this.getTilePosition(baseTileHeight, rowIndex);
                        tileStyle.paddingTop = this.getTileSize(baseTileHeight, tile.rowspan);
                    }
                    if (this.rowHeightMode == RowHeightMode.FIT) {
                        // Percent of the available vertical space that one row takes up.
                        var percentHeightPerTile = 100 / this.cols;
                        // Fraction of the horizontal gutter size that each column takes up.
                        var gutterHeightFractionPerTile = (this.rows - 1) / this.rows;
                        // Base vertical size of a column.
                        var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightFractionPerTile);
                        tileStyle.top = this.getTilePosition(baseTileHeight, rowIndex);
                        tileStyle.height = this.getTileSize(baseTileHeight, tile.rowspan);
                    }
                    return tileStyle;
                };
                MdGridList = __decorate([
                    core_1.Component({ selector: 'md-grid-list', inputs: ['cols', 'rowHeight', 'gutterSize'] }),
                    core_1.View({
                        templateUrl: 'ng2-material/components/grid_list/grid_list.html',
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdGridList);
                return MdGridList;
            })();
            exports_1("MdGridList", MdGridList);
            MdGridTile = (function () {
                function MdGridTile(gridList) {
                    this.gridList = gridList;
                    // Tiles default to 1x1, but rowspan and colspan can be changed via binding.
                    this.rowspan = 1;
                    this.colspan = 1;
                    this.style = new TileStyle();
                }
                Object.defineProperty(MdGridTile.prototype, "rowspan", {
                    get: function () {
                        return this._rowspan;
                    },
                    set: function (value) {
                        this._rowspan = lang_1.isString(value) ? lang_1.NumberWrapper.parseInt(value, 10) : value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdGridTile.prototype, "colspan", {
                    get: function () {
                        return this._colspan;
                    },
                    set: function (value) {
                        this._colspan = lang_1.isString(value) ? lang_1.NumberWrapper.parseInt(value, 10) : value;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Change handler invoked when bindings are resolved or when bindings have changed.
                 * Notifies grid-list that a re-layout is required.
                 */
                MdGridTile.prototype.ngOnChanges = function (_) {
                    if (!this.isRegisteredWithGridList) {
                        this.gridList.addTile(this);
                        this.isRegisteredWithGridList = true;
                    }
                };
                /**
                 * Destructor function. Deregisters this tile from the containing grid-list.
                 */
                MdGridTile.prototype.ngOnDestroy = function () {
                    this.gridList.removeTile(this);
                };
                MdGridTile = __decorate([
                    core_1.Component({
                        selector: 'md-grid-tile',
                        inputs: ['rowspan', 'colspan'],
                        host: {
                            'role': 'listitem',
                            '[style.height]': 'style.height',
                            '[style.width]': 'style.width',
                            '[style.top]': 'style.top',
                            '[style.left]': 'style.left',
                            '[style.marginTop]': 'style.marginTop',
                            '[style.paddingTop]': 'style.paddingTop',
                        }
                    }),
                    core_1.View({
                        templateUrl: 'ng2-material/components/grid_list/grid_tile.html',
                        encapsulation: core_1.ViewEncapsulation.None
                    }),
                    __param(0, core_1.SkipSelf()),
                    __param(0, core_1.Host()), 
                    __metadata('design:paramtypes', [MdGridList])
                ], MdGridTile);
                return MdGridTile;
            })();
            exports_1("MdGridTile", MdGridTile);
            /**
             * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
             * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
             * because the tiles can have a rowspan.
             *
             * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
             * large enough to accomodate it so that the tiles still render in the same order in which they
             * are given.
             *
             * The basis of the algorithm is the use of an array to track the already placed tiles. Each
             * element of the array corresponds to a column, and the value indicates how many cells in that
             * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
             * decrements each value in the tracking array (indicating that the column is one cell closer to
             * being free).
             */
            TileCoordinator = (function () {
                function TileCoordinator(numColumns, tiles) {
                    var _this = this;
                    this.columnIndex = 0;
                    this.rowIndex = 0;
                    this.tracker = collection_1.ListWrapper.createFixedSize(numColumns);
                    collection_1.ListWrapper.fill(this.tracker, 0);
                    this.positions = tiles.map(function (tile) { return _this._trackTile(tile); });
                }
                Object.defineProperty(TileCoordinator.prototype, "rowCount", {
                    /** Gets the number of rows occupied by tiles. */
                    get: function () {
                        return this.rowIndex + 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                TileCoordinator.prototype._trackTile = function (tile) {
                    if (tile.colspan > this.tracker.length) {
                        throw "Tile with colspan " + tile.colspan + " is wider\n          than grid with cols=\"" + this.tracker.length + "\".";
                    }
                    // Start index is inclusive, end index is exclusive.
                    var gapStartIndex = -1;
                    var gapEndIndex = -1;
                    // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.
                    do {
                        // If we've reached the end of the row, go to the next row
                        if (this.columnIndex + tile.colspan > this.tracker.length) {
                            this._nextRow();
                            continue;
                        }
                        gapStartIndex = collection_1.ListWrapper.indexOf(this.tracker, 0, this.columnIndex);
                        // If there are no more empty spaces in this row at all, move on to the next row.
                        if (gapStartIndex == -1) {
                            this._nextRow();
                            continue;
                        }
                        gapEndIndex = this._findGapEndIndex(gapStartIndex);
                        // If a gap large enough isn't found, we want to start looking immediately after the current
                        // gap on the next iteration.
                        this.columnIndex = gapStartIndex + 1;
                    } while (gapEndIndex - gapStartIndex < tile.colspan);
                    // We now have a space big enough for this tile, so place it.
                    this._markTilePosition(gapStartIndex, tile);
                    // The next time we look for a gap, the search will start at columnIndex, which should be
                    // immediately after the tile that has just been placed.
                    this.columnIndex = gapStartIndex + tile.colspan;
                    return new Position(this.rowIndex, gapStartIndex);
                };
                /** Move "down" to the next row. */
                TileCoordinator.prototype._nextRow = function () {
                    this.columnIndex = 0;
                    this.rowIndex++;
                    // Decrement all spaces by one to reflect moving down one row.
                    for (var i = 0; i < this.tracker.length; i++) {
                        this.tracker[i] = math_1.Math.max(0, this.tracker[i] - 1);
                    }
                };
                /**
                 * Finds the end index (exclusive) of a gap given the index from which to start looking.
                 * The gap ends when a non-zero value is found.
                 */
                TileCoordinator.prototype._findGapEndIndex = function (gapStartIndex) {
                    for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
                        if (this.tracker[i] != 0) {
                            return i;
                        }
                    }
                    // The gap ends with the end of the row.
                    return this.tracker.length;
                };
                /** Update the tile tracker to account for the given tile in the given space. */
                TileCoordinator.prototype._markTilePosition = function (start, tile) {
                    for (var i = 0; i < tile.colspan; i++) {
                        this.tracker[start + i] = tile.rowspan;
                    }
                };
                return TileCoordinator;
            })();
            /** Simple data structure for tile position (row, col). */
            Position = (function () {
                function Position(row, col) {
                    this.row = row;
                    this.col = col;
                }
                return Position;
            })();
            /** Simple data structure for style values to be applied to a tile. */
            TileStyle = (function () {
                function TileStyle() {
                }
                return TileStyle;
            })();
            exports_1("TileStyle", TileStyle);
        }
    }
});

System.register("ng2-material/components/icon/icon.ts", ["angular2/core.js"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MdIcon;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MdIcon = (function () {
                function MdIcon() {
                }
                MdIcon = __decorate([
                    core_1.Directive({
                        selector: '[md-icon], .md-icon',
                        host: {
                            '[class.material-icons]': 'true'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdIcon);
                return MdIcon;
            })();
            exports_1("MdIcon", MdIcon);
        }
    }
});

System.register("ng2-material/components/input/input.ts", ["angular2/core.js", "angular2/src/facade/async.js"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, async_1, core_2;
    var MdInputContainer, MdInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            // TODO(jelbourn): validation (will depend on Forms API).
            // TODO(jelbourn): textarea resizing
            // TODO(jelbourn): max-length counter
            // TODO(jelbourn): placeholder property
            MdInputContainer = (function () {
                function MdInputContainer(id) {
                    // The MdInput or MdTextarea inside of this container.
                    this._input = null;
                    // Whether the input inside of this container has a non-empty value.
                    this.inputHasValue = false;
                    // Whether the input inside of this container has focus.
                    this.inputHasFocus = false;
                }
                MdInputContainer.prototype.ngAfterContentChecked = function () {
                    // Enforce that this directive actually contains a text input.
                    if (this._input === null) {
                        throw 'No <input> or <textarea> found inside of <md-input-container>';
                    }
                };
                /** Registers the child MdInput or MdTextarea. */
                MdInputContainer.prototype.registerInput = function (input) {
                    var _this = this;
                    if (this._input !== null) {
                        throw 'Only one text input is allowed per <md-input-container>.';
                    }
                    this._input = input;
                    this.inputHasValue = input.value != '';
                    // Listen to input changes and focus events so that we can apply the appropriate CSS
                    // classes based on the input state.
                    async_1.ObservableWrapper.subscribe(input.mdChange, function (value) { _this.inputHasValue = value != ''; });
                    async_1.ObservableWrapper.subscribe(input.mdFocusChange, function (hasFocus) { return _this.inputHasFocus = hasFocus; });
                };
                MdInputContainer = __decorate([
                    core_1.Directive({
                        selector: 'md-input-container',
                        host: {
                            '[class.md-input-has-value]': 'inputHasValue',
                            '[class.md-input-focused]': 'inputHasFocus',
                        }
                    }),
                    __param(0, core_1.Attribute('id')), 
                    __metadata('design:paramtypes', [String])
                ], MdInputContainer);
                return MdInputContainer;
            })();
            exports_1("MdInputContainer", MdInputContainer);
            MdInput = (function () {
                function MdInput(value, container, id) {
                    // Events emitted by this directive. We use these special 'md-' events to communicate
                    // to the parent MdInputContainer.
                    this.mdChange = new async_1.EventEmitter();
                    this.mdFocusChange = new async_1.EventEmitter();
                    this.value = value == null ? '' : value;
                    container.registerInput(this);
                }
                MdInput.prototype.updateValue = function (event) {
                    this.value = event.target.value;
                    async_1.ObservableWrapper.callEmit(this.mdChange, this.value);
                };
                MdInput.prototype.setHasFocus = function (hasFocus) {
                    async_1.ObservableWrapper.callEmit(this.mdFocusChange, hasFocus);
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], MdInput.prototype, "value", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', (typeof (_a = typeof async_1.EventEmitter !== 'undefined' && async_1.EventEmitter) === 'function' && _a) || Object)
                ], MdInput.prototype, "mdChange", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', (typeof (_b = typeof async_1.EventEmitter !== 'undefined' && async_1.EventEmitter) === 'function' && _b) || Object)
                ], MdInput.prototype, "mdFocusChange", void 0);
                MdInput = __decorate([
                    core_1.Directive({
                        selector: 'md-input-container input',
                        host: {
                            'class': 'md-input',
                            '(input)': 'updateValue($event)',
                            '(focus)': 'setHasFocus(true)',
                            '(blur)': 'setHasFocus(false)'
                        }
                    }),
                    __param(0, core_1.Attribute('value')),
                    __param(1, core_1.SkipSelf()),
                    __param(1, core_1.Host()),
                    __param(2, core_1.Attribute('id')), 
                    __metadata('design:paramtypes', [String, MdInputContainer, String])
                ], MdInput);
                return MdInput;
                var _a, _b;
            })();
            exports_1("MdInput", MdInput);
        }
    }
});

System.register("ng2-material/components/list/list.ts", ["angular2/core.js", "angular2/src/platform/dom/dom_adapter.js"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dom_adapter_1, core_2, core_3, core_4;
    var MdList, MdListItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
                core_4 = core_1_1;
            },
            function (dom_adapter_1_1) {
                dom_adapter_1 = dom_adapter_1_1;
            }],
        execute: function() {
            /**
             * @description
             * The `<md-list>` directive is a list container for 1..n `<md-list-item>` tags.
             *
             * @usage
             * <hljs lang="html">
             * <md-list>
             *   <md-list-item class="md-2-line" ng-repeat="item in todos">
             *     <md-checkbox ng-model="item.done"></md-checkbox>
             *     <div class="md-list-item-text">
             *       <h3>{{item.title}}</h3>
             *       <p>{{item.description}}</p>
             *     </div>
             *   </md-list-item>
             * </md-list>
             * </hljs>
             */
            MdList = (function () {
                function MdList() {
                }
                MdList = __decorate([
                    core_1.Directive({
                        selector: 'md-list',
                        host: {
                            'role': 'list'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdList);
                return MdList;
            })();
            exports_1("MdList", MdList);
            /**
             * @description
             * The `<md-list-item>` directive is a container intended for row items in a `<md-list>` container.
             * The `md-2-line` and `md-3-line` classes can be added to a `<md-list-item>`
             * to increase the height with 22px and 40px respectively.
             *
             * ## CSS
             * `.md-avatar` - class for image avatars
             *
             * `.md-avatar-icon` - class for icon avatars
             *
             * `.md-offset` - on content without an avatar
             *
             * @usage
             * <hljs lang="html">
             *  <md-list>
             *    <md-list-item>
             *      <img class="md-avatar" ng-src="path/to/img"/>
             *      <span>Item content in list</span>
             *    </md-list-item>
             *    <md-list-item>
             *      <md-icon class="md-avatar-icon" md-svg-icon="communication:phone"></md-icon>
             *      <span>Item content in list</span>
             *    </md-list-item>
             *  </md-list>
             * </hljs>
             *
             */
            MdListItem = (function () {
                function MdListItem(_element) {
                    this._element = _element;
                }
                MdListItem.prototype.ngAfterViewInit = function () {
                    this.setupToggleAria();
                };
                MdListItem.prototype.setupToggleAria = function () {
                    var toggleTypes = ['md-switch', 'md-checkbox'];
                    var toggle;
                    var el = this._element.nativeElement;
                    for (var i = 0, toggleType; toggleType = toggleTypes[i]; ++i) {
                        if (toggle = dom_adapter_1.DOM.querySelector(el, toggleType)) {
                            if (!toggle.hasAttribute('aria-label')) {
                                var p = dom_adapter_1.DOM.querySelector(el, 'p');
                                if (!p)
                                    return;
                                toggle.setAttribute('aria-label', 'Toggle ' + p.textContent);
                            }
                        }
                    }
                };
                MdListItem = __decorate([
                    core_3.Component({
                        selector: 'md-list-item',
                        host: {
                            'role': 'listitem'
                        },
                        properties: ['wrap']
                    }),
                    core_4.View({
                        templateUrl: 'ng2-material/components/list/list_item.html'
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_2.ElementRef !== 'undefined' && core_2.ElementRef) === 'function' && _a) || Object])
                ], MdListItem);
                return MdListItem;
                var _a;
            })();
            exports_1("MdListItem", MdListItem);
        }
    }
});

System.register("ng2-material/components/progress_linear/progress_linear.ts", ["angular2/core.js", "angular2/src/facade/lang.js", "angular2/src/facade/math.js"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, lang_1, lang_2, math_1, core_2;
    var ProgressMode, MdProgressLinear;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
                lang_2 = lang_1_1;
            },
            function (math_1_1) {
                math_1 = math_1_1;
            }],
        execute: function() {
            /** Different display / behavior modes for progress_linear. */
            ProgressMode = (function () {
                function ProgressMode() {
                }
                ProgressMode.DETERMINATE = 'determinate';
                ProgressMode.INDETERMINATE = 'indeterminate';
                ProgressMode.BUFFER = 'buffer';
                ProgressMode.QUERY = 'query';
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], ProgressMode, "DETERMINATE", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], ProgressMode, "INDETERMINATE", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], ProgressMode, "BUFFER", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], ProgressMode, "QUERY", void 0);
                ProgressMode = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [])
                ], ProgressMode);
                return ProgressMode;
            })();
            MdProgressLinear = (function () {
                function MdProgressLinear(mode) {
                    this.primaryBarTransform = '';
                    this.secondaryBarTransform = '';
                    this.mode = lang_2.isPresent(mode) ? mode : ProgressMode.DETERMINATE;
                }
                /** Clamps a value to be between 0 and 100. */
                MdProgressLinear.clamp = function (v) {
                    return math_1.Math.max(0, math_1.Math.min(100, v));
                };
                Object.defineProperty(MdProgressLinear.prototype, "value", {
                    get: function () {
                        return this.value_;
                    },
                    set: function (v) {
                        if (lang_2.isPresent(v)) {
                            this.value_ = MdProgressLinear.clamp(v);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                MdProgressLinear.prototype.ngOnChanges = function (_) {
                    // If the mode does not use a value, or if there is no value, do nothing.
                    if (this.mode === ProgressMode.QUERY || this.mode === ProgressMode.INDETERMINATE ||
                        lang_2.isBlank(this.value)) {
                        return;
                    }
                    this.primaryBarTransform = this.transformForValue(this.value);
                    // The bufferValue is only used in buffer mode.
                    if (this.mode === ProgressMode.BUFFER) {
                        this.secondaryBarTransform = this.transformForValue(this.bufferValue);
                    }
                };
                /** Gets the CSS `transform` property for a progress bar based on the given value (0 - 100). */
                MdProgressLinear.prototype.transformForValue = function (value) {
                    // TODO(jelbourn): test perf gain of caching these, since there are only 101 values.
                    var scale = value / 100;
                    var translateX = (value - 100) / 2;
                    return "translateX(" + translateX + "%) scale(" + scale + ", 1)";
                };
                __decorate([
                    core_2.Input('value'), 
                    __metadata('design:type', Number)
                ], MdProgressLinear.prototype, "value_", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Number)
                ], MdProgressLinear.prototype, "bufferValue", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], MdProgressLinear.prototype, "mode", void 0);
                MdProgressLinear = __decorate([
                    core_1.Component({
                        selector: 'md-progress-linear',
                        inputs: ['value', 'bufferValue'],
                        host: {
                            'role': 'progressbar',
                            'aria-valuemin': '0',
                            'aria-valuemax': '100',
                            '[attr.aria-valuenow]': 'value'
                        }
                    }),
                    core_1.View({
                        templateUrl: 'ng2-material/components/progress_linear/progress_linear.html',
                        directives: [],
                        encapsulation: core_1.ViewEncapsulation.None
                    }),
                    __param(0, core_1.Attribute('mode')), 
                    __metadata('design:paramtypes', [String])
                ], MdProgressLinear);
                return MdProgressLinear;
            })();
            exports_1("MdProgressLinear", MdProgressLinear);
        }
    }
});

System.register("ng2-material/components/progress_circular/progress_circular.ts", ["angular2/core.js", "ng2-material/components/progress_linear/progress_linear.ts"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, progress_linear_1;
    var MdProgressCircular;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (progress_linear_1_1) {
                progress_linear_1 = progress_linear_1_1;
            }],
        execute: function() {
            MdProgressCircular = (function (_super) {
                __extends(MdProgressCircular, _super);
                function MdProgressCircular() {
                    _super.apply(this, arguments);
                }
                MdProgressCircular = __decorate([
                    core_1.Component({ selector: 'md-progress-circular' }),
                    core_1.View({
                        templateUrl: 'ng2-material/components/progress_circular/progress_circular.html',
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdProgressCircular);
                return MdProgressCircular;
            })(progress_linear_1.MdProgressLinear);
            exports_1("MdProgressCircular", MdProgressCircular);
        }
    }
});

System.register("ng2-material/components/radio/radio_button.ts", ["angular2/core.js", "angular2/src/facade/lang.js", "angular2/src/facade/async.js", "ng2-material/components/radio/radio_dispatcher.ts", "ng2-material/core/key_codes.ts"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, lang_1, async_1, radio_dispatcher_1, key_codes_1, core_2;
    var _uniqueIdCounter, MdRadioGroup, MdRadioButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (radio_dispatcher_1_1) {
                radio_dispatcher_1 = radio_dispatcher_1_1;
            },
            function (key_codes_1_1) {
                key_codes_1 = key_codes_1_1;
            }],
        execute: function() {
            // TODO(jdd): [disabled] style
            // TODO(jelbourn): Behaviors to test
            // Radios set default tab index iff not in parent group
            // Radios are unique-select
            // Radio updates parent group's value
            // Change to parent group's value updates the selected child radio
            // Radio name is pulled on parent group
            // Radio group changes on arrow keys
            // Radio group skips disabled radios on arrow keys
            _uniqueIdCounter = 0;
            MdRadioGroup = (function () {
                function MdRadioGroup(tabindex, disabled, radioDispatcher) {
                    /** The HTML name attribute applied to radio buttons in this group. */
                    this.name_ = "md-radio-group-" + _uniqueIdCounter++;
                    /** Array of child radio buttons. */
                    this.radios_ = [];
                    this.disabled_ = false;
                    /** The ID of the selected radio button. */
                    this.selectedRadioId = '';
                    this.change = new async_1.EventEmitter();
                    this.radioDispatcher = radioDispatcher;
                    // The simple presence of the `disabled` attribute dictates disabled state.
                    this.disabled = lang_1.isPresent(disabled);
                    // If the user has not set a tabindex, default to zero (in the normal document flow).
                    this.tabindex = lang_1.isPresent(tabindex) ? lang_1.NumberWrapper.parseInt(tabindex, 10) : 0;
                }
                Object.defineProperty(MdRadioGroup.prototype, "value", {
                    get: function () {
                        return this.value_;
                    },
                    set: function (value) {
                        var button = this.getChildByValue(value);
                        this.value_ = value;
                        if (button) {
                            this.selectedRadioId = button.id;
                            this.activedescendant = button.id;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /** Gets the name of this group, as to be applied in the HTML 'name' attribute. */
                MdRadioGroup.prototype.getName = function () {
                    return this.name_;
                };
                Object.defineProperty(MdRadioGroup.prototype, "disabled", {
                    get: function () {
                        return this.disabled_;
                    },
                    set: function (value) {
                        this.disabled_ = lang_1.isPresent(value) && value !== false;
                    },
                    enumerable: true,
                    configurable: true
                });
                /** Change handler invoked when bindings are resolved or when bindings have changed. */
                MdRadioGroup.prototype.ngOnChanges = function (_) {
                    var _this = this;
                    // If the component has a disabled attribute with no value, it will set disabled = ''.
                    this.disabled = lang_1.isPresent(this.disabled) && this.disabled !== false;
                    // If the value of this radio-group has been set or changed, we have to look through the
                    // child radio buttons and select the one that has a corresponding value (if any).
                    if (lang_1.isPresent(this.value) && this.value !== '') {
                        this.radioDispatcher.notify(this.name_);
                        this.radios_.forEach(function (radio) {
                            if (radio.value === _this.value) {
                                radio.checked = true;
                                _this.selectedRadioId = radio.id;
                                _this.activedescendant = radio.id;
                            }
                        });
                    }
                };
                /** Update the value of this radio group from a child md-radio being selected. */
                MdRadioGroup.prototype.updateValue = function (value, id) {
                    this.value = value;
                    this.selectedRadioId = id;
                    this.activedescendant = id;
                    async_1.ObservableWrapper.callEmit(this.change, value);
                };
                /** Registers a child radio button with this group. */
                MdRadioGroup.prototype.register = function (radio) {
                    this.radios_.push(radio);
                };
                /** Handles up and down arrow key presses to change the selected child radio. */
                MdRadioGroup.prototype.onKeydown = function (event) {
                    if (this.disabled) {
                        return;
                    }
                    switch (event.keyCode) {
                        case key_codes_1.KeyCodes.UP:
                            this.stepSelectedRadio(-1);
                            event.preventDefault();
                            break;
                        case key_codes_1.KeyCodes.DOWN:
                            this.stepSelectedRadio(1);
                            event.preventDefault();
                            break;
                    }
                };
                // TODO(jelbourn): Replace this with a findIndex method in the collections facade.
                MdRadioGroup.prototype.getSelectedRadioIndex = function () {
                    for (var i = 0; i < this.radios_.length; i++) {
                        if (this.radios_[i].id === this.selectedRadioId) {
                            return i;
                        }
                    }
                    return -1;
                };
                /**
                 * Return a child radio by its value.
                 */
                MdRadioGroup.prototype.getChildByValue = function (value) {
                    for (var i = 0; i < this.radios_.length; i++) {
                        if (this.radios_[i].value === value) {
                            return this.radios_[i];
                        }
                    }
                    return null;
                };
                /** Steps the selected radio based on the given step value (usually either +1 or -1). */
                MdRadioGroup.prototype.stepSelectedRadio = function (step) {
                    var index = this.getSelectedRadioIndex() + step;
                    if (index < 0 || index >= this.radios_.length) {
                        return;
                    }
                    var radio = this.radios_[index];
                    // If the next radio is line is disabled, skip it (maintaining direction).
                    if (radio.disabled) {
                        this.stepSelectedRadio(step + (step < 0 ? -1 : 1));
                        return;
                    }
                    this.radioDispatcher.notify(this.name_);
                    radio.checked = true;
                    async_1.ObservableWrapper.callEmit(this.change, null);
                    this.value = radio.value;
                    this.selectedRadioId = radio.id;
                    this.activedescendant = radio.id;
                };
                __decorate([
                    core_2.Input('value'), 
                    __metadata('design:type', Object)
                ], MdRadioGroup.prototype, "value_", void 0);
                __decorate([
                    core_2.Output('valueChange'), 
                    __metadata('design:type', (typeof (_a = typeof async_1.EventEmitter !== 'undefined' && async_1.EventEmitter) === 'function' && _a) || Object)
                ], MdRadioGroup.prototype, "change", void 0);
                MdRadioGroup = __decorate([
                    core_1.Component({
                        selector: 'md-radio-group',
                        inputs: ['disabled', 'value'],
                        host: {
                            'role': 'radiogroup',
                            '[attr.aria-disabled]': 'disabled',
                            '[attr.aria-activedescendant]': 'activedescendant',
                            // TODO(jelbourn): Remove ^ when event retargeting is fixed.
                            '(keydown)': 'onKeydown($event)',
                            '[tabindex]': 'tabindex',
                        }
                    }),
                    core_1.View({
                        templateUrl: 'ng2-material/components/radio/radio_group.html',
                        encapsulation: core_1.ViewEncapsulation.None
                    }),
                    __param(0, core_1.Attribute('tabindex')),
                    __param(1, core_1.Attribute('disabled')), 
                    __metadata('design:paramtypes', [String, String, (typeof (_b = typeof radio_dispatcher_1.MdRadioDispatcher !== 'undefined' && radio_dispatcher_1.MdRadioDispatcher) === 'function' && _b) || Object])
                ], MdRadioGroup);
                return MdRadioGroup;
                var _a, _b;
            })();
            exports_1("MdRadioGroup", MdRadioGroup);
            MdRadioButton = (function () {
                function MdRadioButton(radioGroup, id, value, tabindex, radioDispatcher) {
                    // Assertions. Ideally these should be stripped out by the compiler.
                    // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
                    var _this = this;
                    this.radioGroup = radioGroup;
                    this.radioDispatcher = radioDispatcher;
                    this.value = value ? value : null;
                    this.checked = false;
                    this.id = lang_1.isPresent(id) ? id : "md-radio-" + _uniqueIdCounter++;
                    // Whenever a radio button with the same name is checked, uncheck this radio button.
                    radioDispatcher.listen(function (name) {
                        if (name === _this.name) {
                            _this.checked = false;
                        }
                    });
                    // When this radio-button is inside of a radio-group, the group determines the name.
                    if (lang_1.isPresent(radioGroup)) {
                        this.name = radioGroup.getName();
                        this.radioGroup.register(this);
                    }
                    // If the user has not set a tabindex, default to zero (in the normal document flow).
                    if (!lang_1.isPresent(radioGroup)) {
                        this.tabindex = lang_1.isPresent(tabindex) ? lang_1.NumberWrapper.parseInt(tabindex, 10) : 0;
                    }
                    else {
                        this.tabindex = -1;
                    }
                }
                /** Change handler invoked when bindings are resolved or when bindings have changed. */
                MdRadioButton.prototype.ngOnInit = function () {
                    if (lang_1.isPresent(this.radioGroup)) {
                        this.name = this.radioGroup.getName();
                    }
                };
                /** Whether this radio button is disabled, taking the parent group into account. */
                MdRadioButton.prototype.isDisabled = function () {
                    // Here, this.disabled may be true/false as the result of a binding, may be the empty string
                    // if the user just adds a `disabled` attribute with no value, or may be absent completely.
                    // TODO(jelbourn): If someone sets `disabled="disabled"`, will this work in dart?
                    return this.disabled || (lang_1.isPresent(this.disabled) && lang_1.StringWrapper.equals(this.disabled, '')) ||
                        (lang_1.isPresent(this.radioGroup) && this.radioGroup.disabled);
                };
                Object.defineProperty(MdRadioButton.prototype, "disabled", {
                    get: function () {
                        // True if self or parent group are disabled.
                        return this.disabled_ || (this.radioGroup && this.radioGroup.disabled);
                    },
                    set: function (value) {
                        this.disabled_ = lang_1.isPresent(value) && value !== false;
                    },
                    enumerable: true,
                    configurable: true
                });
                /** Select this radio button. */
                MdRadioButton.prototype.select = function (event) {
                    if (this.isDisabled()) {
                        event.stopPropagation();
                        return;
                    }
                    // Notifiy all radio buttons with the same name to un-check.
                    this.radioDispatcher.notify(this.name);
                    this.checked = true;
                    if (lang_1.isPresent(this.radioGroup)) {
                        this.radioGroup.updateValue(this.value, this.id);
                    }
                };
                /** Handles pressing the space key to select this focused radio button. */
                MdRadioButton.prototype.onKeydown = function (event) {
                    if (event.keyCode === key_codes_1.KeyCodes.SPACE) {
                        event.preventDefault();
                        this.select(event);
                    }
                };
                MdRadioButton = __decorate([
                    core_1.Component({
                        selector: 'md-radio-button',
                        inputs: ['id', 'name', 'value', 'checked', 'disabled'],
                        host: {
                            'role': 'radio',
                            '[id]': 'id',
                            '[tabindex]': 'tabindex',
                            '[attr.aria-checked]': 'checked',
                            '[attr.aria-disabled]': 'disabled',
                            '(keydown)': 'onKeydown($event)',
                            '(click)': 'select($event)'
                        }
                    }),
                    core_1.View({
                        templateUrl: 'ng2-material/components/radio/radio_button.html',
                        directives: [],
                        encapsulation: core_1.ViewEncapsulation.None
                    }),
                    __param(0, core_1.Optional()),
                    __param(0, core_1.SkipSelf()),
                    __param(0, core_1.Host()),
                    __param(1, core_1.Attribute('id')),
                    __param(2, core_1.Attribute('value')),
                    __param(3, core_1.Attribute('tabindex')), 
                    __metadata('design:paramtypes', [MdRadioGroup, String, String, String, (typeof (_a = typeof radio_dispatcher_1.MdRadioDispatcher !== 'undefined' && radio_dispatcher_1.MdRadioDispatcher) === 'function' && _a) || Object])
                ], MdRadioButton);
                return MdRadioButton;
                var _a;
            })();
            exports_1("MdRadioButton", MdRadioButton);
        }
    }
});

System.register("ng2-material/components/radio/radio_dispatcher.ts", ["angular2/core.js"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MdRadioDispatcher;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * Class for radio buttons to coordinate unique selection based on name.
             * Indended to be consumed as an Angular service.
             */
            MdRadioDispatcher = (function () {
                function MdRadioDispatcher() {
                    this.listeners_ = [];
                }
                /** Notify other nadio buttons that selection for the given name has been set. */
                MdRadioDispatcher.prototype.notify = function (name) {
                    this.listeners_.forEach(function (listener) { return listener(name); });
                };
                /** Listen for future changes to radio button selection. */
                MdRadioDispatcher.prototype.listen = function (listener) {
                    this.listeners_.push(listener);
                };
                MdRadioDispatcher = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MdRadioDispatcher);
                return MdRadioDispatcher;
            })();
            exports_1("MdRadioDispatcher", MdRadioDispatcher);
        }
    }
});

System.register("ng2-material/core/key_codes.ts", ["angular2/src/facade/lang.js"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var lang_1;
    var KeyCodes;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            // Can't use an enum because Dart doesn't support enum initializers.
            KeyCodes = (function () {
                function KeyCodes() {
                }
                KeyCodes.ESCAPE = 27;
                KeyCodes.SPACE = 32;
                KeyCodes.UP = 38;
                KeyCodes.DOWN = 40;
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "ESCAPE", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "SPACE", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "UP", void 0);
                __decorate([
                    lang_1.CONST(), 
                    __metadata('design:type', Object)
                ], KeyCodes, "DOWN", void 0);
                KeyCodes = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [])
                ], KeyCodes);
                return KeyCodes;
            })();
            exports_1("KeyCodes", KeyCodes);
        }
    }
});

System.register("ng2-material/components/checkbox/checkbox.ts", ["angular2/core.js", "angular2/src/facade/lang.js", "ng2-material/core/key_codes.ts"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, lang_1, key_codes_1, lang_2, core_2;
    var MdCheckbox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
                lang_2 = lang_1_1;
            },
            function (key_codes_1_1) {
                key_codes_1 = key_codes_1_1;
            }],
        execute: function() {
            // TODO(jdd): ng-true-value, ng-false-value
            MdCheckbox = (function () {
                function MdCheckbox(tabindex) {
                    this.checkedChange = new core_2.EventEmitter();
                    this.checked = false;
                    this.tabindex = lang_1.isPresent(tabindex) ? lang_2.NumberWrapper.parseInt(tabindex, 10) : 0;
                    this.disabled_ = false;
                }
                Object.defineProperty(MdCheckbox.prototype, "disabled", {
                    get: function () {
                        return this.disabled_;
                    },
                    set: function (value) {
                        this.disabled_ = lang_1.isPresent(value) && value !== false;
                    },
                    enumerable: true,
                    configurable: true
                });
                MdCheckbox.prototype.onKeydown = function (event) {
                    if (event.keyCode === key_codes_1.KeyCodes.SPACE) {
                        event.preventDefault();
                        this.toggle(event);
                    }
                };
                MdCheckbox.prototype.toggle = function (event) {
                    if (this.disabled) {
                        event.stopPropagation();
                        return;
                    }
                    this.checked = !this.checked;
                    this.checkedChange.emit(this.checked);
                };
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_2.EventEmitter !== 'undefined' && core_2.EventEmitter) === 'function' && _a) || Object)
                ], MdCheckbox.prototype, "checkedChange", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Boolean)
                ], MdCheckbox.prototype, "checked", void 0);
                __decorate([
                    core_2.Input('disabled'), 
                    __metadata('design:type', Boolean)
                ], MdCheckbox.prototype, "disabled_", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Number)
                ], MdCheckbox.prototype, "tabindex", void 0);
                MdCheckbox = __decorate([
                    core_1.Component({
                        selector: 'md-checkbox',
                        inputs: ['checked', 'disabled'],
                        host: {
                            'role': 'checkbox',
                            '[attr.aria-checked]': 'checked',
                            '[attr.aria-disabled]': 'disabled',
                            '[tabindex]': 'tabindex',
                            '(keydown)': 'onKeydown($event)',
                        }
                    }),
                    core_1.View({
                        templateUrl: 'ng2-material/components/checkbox/checkbox.html',
                        directives: [],
                        encapsulation: core_1.ViewEncapsulation.None
                    }),
                    __param(0, core_1.Attribute('tabindex')), 
                    __metadata('design:paramtypes', [String])
                ], MdCheckbox);
                return MdCheckbox;
                var _a;
            })();
            exports_1("MdCheckbox", MdCheckbox);
        }
    }
});

System.register("ng2-material/components/switcher/switch.ts", ["angular2/core.js", "ng2-material/components/checkbox/checkbox.ts"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, checkbox_1;
    var MdSwitch;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (checkbox_1_1) {
                checkbox_1 = checkbox_1_1;
            }],
        execute: function() {
            // TODO(jelbourn): add gesture support
            // TODO(jelbourn): clean up CSS.
            MdSwitch = (function (_super) {
                __extends(MdSwitch, _super);
                function MdSwitch(tabindex) {
                    _super.call(this, tabindex);
                }
                MdSwitch = __decorate([
                    core_1.Component({
                        selector: 'md-switch',
                        inputs: ['checked', 'disabled'],
                        host: {
                            'role': 'checkbox',
                            '[attr.aria-checked]': 'checked',
                            '[attr.aria-disabled]': 'disabled_',
                            '(keydown)': 'onKeydown($event)',
                            '(click)': 'toggle($event)'
                        }
                    }),
                    core_1.View({
                        templateUrl: 'ng2-material/components/switcher/switch.html',
                        directives: [],
                        encapsulation: core_1.ViewEncapsulation.None
                    }),
                    __param(0, core_1.Attribute('tabindex')), 
                    __metadata('design:paramtypes', [String])
                ], MdSwitch);
                return MdSwitch;
            })(checkbox_1.MdCheckbox);
            exports_1("MdSwitch", MdSwitch);
        }
    }
});

System.register("ng2-material/core/util/util.ts", [], function(exports_1) {
    /**
     * Returns a function, that, as long as it continues to be invoked, will not
     * be triggered. The function will be called after it stops being called for
     * N milliseconds.
     * @param wait Integer value of msecs to delay (since last debounce reset); default value 10 msecs
     */
    function debounce(func, wait, scope) {
        var timer;
        return function debounced() {
            var context = scope, args = Array.prototype.slice.call(arguments);
            clearTimeout(timer);
            timer = setTimeout(function () {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }
    exports_1("debounce", debounce);
    /**
     * Returns a function that can only be triggered every `delay` milliseconds.
     * In other words, the function will not be called unless it has been more
     * than `delay` milliseconds since the last call.
     */
    function throttle(func, delay, scope) {
        var recent;
        return function throttled() {
            var context = scope;
            var args = arguments;
            var now = new Date().getTime();
            if (!recent || (now - recent > delay)) {
                func.apply(context, args);
                recent = now;
            }
        };
    }
    exports_1("throttle", throttle);
    function rAF(callback) {
        window.requestAnimationFrame(callback);
    }
    exports_1("rAF", rAF);
    return {
        setters:[],
        execute: function() {
        }
    }
});

System.register("ng2-material/components/toolbar/toolbar.ts", ["angular2/core.js", "ng2-material/core/util/util.ts", "angular2/src/platform/dom/dom_adapter.js"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, util_1, core_2, dom_adapter_1;
    var MdToolbar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (dom_adapter_1_1) {
                dom_adapter_1 = dom_adapter_1_1;
            }],
        execute: function() {
            /**
             * @ngdoc directive
             * @name mdToolbar
             * @description
             * `md-toolbar` is used to place a toolbar in your app.
             *
             * Toolbars are usually used above a content area to display the title of the
             * current page, and show relevant action buttons for that page.
             *
             * You can change the height of the toolbar by adding either the
             * `md-medium-tall` or `md-tall` class to the toolbar.
             *
             * @usage
             * <hljs lang="html">
             * <div layout="column" layout-fill>
             *   <md-toolbar>
             *
             *     <div class="md-toolbar-tools">
             *       <span>My App's Title</span>
             *
             *       <!-- fill up the space between left and right area -->
             *       <span flex></span>
             *
             *       <md-button>
             *         Right Bar Button
             *       </md-button>
             *     </div>
             *
             *   </md-toolbar>
             *   <md-content>
             *     Hello!
             *   </md-content>
             * </div>
             * </hljs>
             *
             * @param {boolean=} md-scroll-shrink Whether the header should shrink away as
             * the user scrolls down, and reveal itself as the user scrolls up.
             *
             * _**Note (1):** for scrollShrink to work, the toolbar must be a sibling of a
             * `md-content` element, placed before it. See the scroll shrink demo._
             *
             * _**Note (2):** The `md-scroll-shrink` attribute is only parsed on component
             * initialization, it does not watch for scope changes._
             *
             *
             * @param {number=} mdShrinkSpeed How much to change the speed of the toolbar's
             * shrinking by. For example, if 0.25 is given then the toolbar will shrink
             * at one fourth the rate at which the user scrolls down. Default 0.5.
             */
            MdToolbar = (function () {
                function MdToolbar(scrollShrink, el) {
                    this.scrollShrink = scrollShrink;
                    this.el = el;
                    this.mdShrinkSpeed = 0.5;
                    this._debouncedContentScroll = null;
                    this._debouncedUpdateHeight = null;
                    this._content = null;
                    this._toolbarHeight = 0;
                    this._cancelScrollShrink = null;
                    this._previousScrollTop = 0;
                    this._currentY = 0;
                    this._debouncedContentScroll = util_1.throttle(this.onContentScroll, 10, this);
                    this._debouncedUpdateHeight = util_1.debounce(this.updateToolbarHeight, 5 * 1000, this);
                }
                MdToolbar.prototype.ngAfterViewInit = function () {
                    this.disableScrollShrink();
                    if (this.scrollShrink === null) {
                        return;
                    }
                    // TODO(jdd): better way to find siblings?
                    this._content = dom_adapter_1.DOM.querySelector(dom_adapter_1.DOM.parentElement(this.el.nativeElement), 'md-content');
                    if (!this._content) {
                        return;
                    }
                    this._cancelScrollShrink = dom_adapter_1.DOM.onAndCancel(this._content, 'scroll', this._debouncedContentScroll);
                    dom_adapter_1.DOM.setAttribute(this._content, 'scroll-shrink', 'true');
                    util_1.rAF(this.updateToolbarHeight.bind(this));
                };
                MdToolbar.prototype.ngOnChanges = function (changes) {
                    this.updateToolbarHeight();
                };
                MdToolbar.prototype.ngOnDestroy = function () {
                    this.disableScrollShrink();
                };
                MdToolbar.prototype.disableScrollShrink = function () {
                    if (this._cancelScrollShrink) {
                        this._cancelScrollShrink();
                        this._cancelScrollShrink = null;
                    }
                };
                MdToolbar.prototype.updateToolbarHeight = function () {
                    this._toolbarHeight = dom_adapter_1.DOM.getProperty(this.el.nativeElement, 'offsetHeight');
                    // Add a negative margin-top the size of the toolbar to the content el.
                    // The content will start transformed down the toolbarHeight amount,
                    // so everything looks normal.
                    //
                    // As the user scrolls down, the content will be transformed up slowly
                    // to put the content underneath where the toolbar was.
                    var margin = (-this._toolbarHeight * this.mdShrinkSpeed) + 'px';
                    dom_adapter_1.DOM.setStyle(this._content, "margin-top", margin);
                    dom_adapter_1.DOM.setStyle(this._content, "margin-bottom", margin);
                    this.onContentScroll();
                };
                MdToolbar.prototype.onContentScroll = function (e) {
                    var _this = this;
                    var scrollTop = e ? e.target.scrollTop : this._previousScrollTop;
                    this._debouncedUpdateHeight();
                    this._currentY = Math.min(this._toolbarHeight / this.mdShrinkSpeed, Math.max(0, this._currentY + scrollTop - this._previousScrollTop));
                    var toolbarXform = "translate3d(0," + -this._currentY * this.mdShrinkSpeed + "px,0)";
                    var contentXform = "translate3d(0," + (this._toolbarHeight - this._currentY) * this.mdShrinkSpeed + "px,0)";
                    dom_adapter_1.DOM.setStyle(this._content, '-webkit-transform', contentXform);
                    dom_adapter_1.DOM.setStyle(this._content, 'transform', contentXform);
                    dom_adapter_1.DOM.setStyle(this.el.nativeElement, '-webkit-transform', toolbarXform);
                    dom_adapter_1.DOM.setStyle(this.el.nativeElement, 'transform', toolbarXform);
                    this._previousScrollTop = scrollTop;
                    util_1.rAF(function () {
                        var hasWhiteFrame = dom_adapter_1.DOM.hasClass(_this.el.nativeElement, 'md-whiteframe-z1');
                        if (hasWhiteFrame && !_this._currentY) {
                            dom_adapter_1.DOM.removeClass(_this.el.nativeElement, 'md-whiteframe-z1');
                        }
                        else if (!hasWhiteFrame && _this._currentY) {
                            dom_adapter_1.DOM.addClass(_this.el.nativeElement, 'md-whiteframe-z1');
                        }
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MdToolbar.prototype, "mdShrinkSpeed", void 0);
                MdToolbar = __decorate([
                    core_1.Directive({ selector: 'md-toolbar' }),
                    __param(0, core_1.Attribute('md-scroll-shrink')), 
                    __metadata('design:paramtypes', [Object, (typeof (_a = typeof core_2.ElementRef !== 'undefined' && core_2.ElementRef) === 'function' && _a) || Object])
                ], MdToolbar);
                return MdToolbar;
                var _a;
            })();
            exports_1("MdToolbar", MdToolbar);
        }
    }
});

System.register("ng2-material/core/util/animate.ts", ["angular2/src/platform/dom/dom_adapter.js"], function(exports_1) {
    var dom_adapter_1;
    var Animate;
    return {
        setters:[
            function (dom_adapter_1_1) {
                dom_adapter_1 = dom_adapter_1_1;
            }],
        execute: function() {
            /**
             * Provide an API for animating elements with CSS transitions
             */
            Animate = (function () {
                function Animate() {
                }
                Animate.enter = function (el, cssClass) {
                    dom_adapter_1.DOM.removeClass(el, cssClass);
                    return new Promise(function (resolve) {
                        var duration = Animate.getTransitionDuration(el, true);
                        var callTimeout = setTimeout(function () { return done(); }, duration);
                        var done = function () {
                            clearTimeout(callTimeout);
                            removeListener();
                            resolve();
                        };
                        var removeListener = dom_adapter_1.DOM.onAndCancel(el, Animate.TRANSITION_EVENT, done);
                        dom_adapter_1.DOM.addClass(el, cssClass);
                    });
                };
                Animate.leave = function (el, cssClass) {
                    return new Promise(function (resolve) {
                        var duration = Animate.getTransitionDuration(el, true);
                        var callTimeout = setTimeout(function () { return done(); }, duration);
                        var done = function () {
                            clearTimeout(callTimeout);
                            removeListener();
                            resolve();
                        };
                        var removeListener = dom_adapter_1.DOM.onAndCancel(el, Animate.TRANSITION_EVENT, done);
                        dom_adapter_1.DOM.removeClass(el, cssClass);
                    });
                };
                /**
                 * Get the duration of any transitions being applied to the given element.
                 *
                 * Based on: https://gist.github.com/snorpey/5323028
                 * @param element The element to query
                 * @param includeDelay Include any specified transition-delay value.
                 * @returns {number}
                 */
                Animate.getTransitionDuration = function (element, includeDelay) {
                    if (includeDelay === void 0) { includeDelay = false; }
                    var prefixes = ['moz', 'webkit', 'ms', 'o', 'khtml'];
                    var style = window.getComputedStyle(element);
                    for (var i = 0; i < prefixes.length; i++) {
                        var duration = style['-' + prefixes[i] + '-transition-duration'];
                        if (!duration) {
                            continue;
                        }
                        duration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
                        if (includeDelay) {
                            var delay = style['-' + prefixes[i] + '-transition-delay'];
                            if (typeof delay !== 'undefined') {
                                duration += (delay.indexOf('ms') > -1) ? parseFloat(delay) : parseFloat(delay) * 1000;
                            }
                        }
                        return duration;
                    }
                    return -1;
                };
                Animate.setTransitionDuration = function (element, delayMs) {
                    dom_adapter_1.DOM.setStyle(element, 'transition-duration', delayMs + "ms");
                };
                /* From Modernizr */
                Animate.whichTransitionEvent = function () {
                    var t;
                    var el = document.createElement('fakeelement');
                    var transitions = {
                        'transition': 'transitionend',
                        'OTransition': 'oTransitionEnd',
                        'MozTransition': 'transitionend',
                        'WebkitTransition': 'webkitTransitionEnd'
                    };
                    for (t in transitions) {
                        if (el.style[t] !== undefined) {
                            return transitions[t];
                        }
                    }
                };
                Animate.animateStyles = function (element, styles, durationMs) {
                    var saveDuration = Animate.getTransitionDuration(element);
                    Animate.setTransitionDuration(element, durationMs);
                    return new Promise(function (animResolve, animReject) {
                        var callTimeout = setTimeout(function () { return done(); }, durationMs);
                        var done = function () {
                            clearTimeout(callTimeout);
                            removeListener();
                            if (saveDuration !== -1) {
                                Animate.setTransitionDuration(element, saveDuration);
                            }
                            animResolve();
                        };
                        var removeListener = dom_adapter_1.DOM.onAndCancel(element, Animate.TRANSITION_EVENT, done);
                        Object.keys(styles).forEach(function (key) {
                            dom_adapter_1.DOM.setStyle(element, key, "" + styles[key]);
                        });
                    });
                };
                /**
                 * Set CSS styles immediately by turning off transition duration and restoring it afterward
                 */
                Animate.setStyles = function (element, styles) {
                    var saveDuration = Animate.getTransitionDuration(element);
                    Animate.setTransitionDuration(element, 0);
                    return new Promise(function (resolve, reject) {
                        Object.keys(styles).forEach(function (key) {
                            dom_adapter_1.DOM.setStyle(element, key, "" + styles[key]);
                        });
                        if (saveDuration !== -1) {
                            Animate.setTransitionDuration(element, saveDuration);
                        }
                        resolve();
                    });
                };
                /**
                 * Look up the transition event name for the browser type and cache it.
                 */
                Animate.TRANSITION_EVENT = Animate.whichTransitionEvent();
                return Animate;
            })();
            exports_1("Animate", Animate);
        }
    }
});

System.register("ng2-material/core/util/ink.ts", ["angular2/src/facade/lang.js", "angular2/src/platform/dom/dom_adapter.js", "ng2-material/core/util/animate.ts"], function(exports_1) {
    var lang_1, dom_adapter_1, animate_1;
    var Ink;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (dom_adapter_1_1) {
                dom_adapter_1 = dom_adapter_1_1;
            },
            function (animate_1_1) {
                animate_1 = animate_1_1;
            }],
        execute: function() {
            /**
             * Create ink ripples on elements in the page.
             */
            Ink = (function () {
                function Ink() {
                }
                /**
                 * Determine if ink can be applied to a given element.
                 * @param element The element to check
                 */
                Ink.canApply = function (element) {
                    return !dom_adapter_1.DOM.hasAttribute(element, 'md-no-ink');
                };
                /**
                 * Ink ripples are equal in height/width, so get the scalar size
                 * of the container.
                 *
                 * @param fit To fit the ripple to the element
                 * @param width Width of the ripple container
                 * @param height Height of the ripple container
                 * @returns {number}
                 */
                Ink.getSize = function (fit, width, height) {
                    return fit
                        ? Math.max(width, height)
                        : Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
                };
                /**
                 * Apply an ink ripple to an element at the given position.
                 *
                 * @param element The element to apply a ripple to
                 * @param x The x position inside the element for the ripple to originate from
                 * @param y The y position inside the element for the ripple to originate from
                 * @returns {Promise<void>} A promise that resolves when the ripple has faded
                 */
                Ink.ripple = function (element, x, y) {
                    var fit = lang_1.isPresent(dom_adapter_1.DOM.getAttribute(element, 'md-fab'));
                    var container = dom_adapter_1.DOM.createElement('div');
                    dom_adapter_1.DOM.addClass(container, 'md-ripple-container');
                    var ripple = dom_adapter_1.DOM.createElement('div');
                    dom_adapter_1.DOM.addClass(ripple, 'md-ripple');
                    dom_adapter_1.DOM.appendChild(container, ripple);
                    dom_adapter_1.DOM.appendChild(element, container);
                    var getHostSize = function () {
                        var elX = element.offsetWidth;
                        var elY = element.offsetHeight;
                        return Ink.getSize(fit, elX, elY);
                    };
                    var getInitialStyles = function () {
                        var size = getHostSize();
                        var color = dom_adapter_1.DOM.getComputedStyle(element).color || 'rgb(0,0,0)';
                        return {
                            'background-color': color,
                            left: (x - size / 2) + "px",
                            top: (y - size / 2) + "px",
                            width: size + "px",
                            height: size + "px",
                            opacity: 0.2,
                            transform: 'scale(0.01)'
                        };
                    };
                    return animate_1.Animate.setStyles(ripple, getInitialStyles())
                        .then(function () { return animate_1.Animate.animateStyles(ripple, {
                        left: '50%',
                        top: '50%',
                        opacity: 0.1,
                        transform: 'translate(-50%, -50%) scale(1)'
                    }, 450); })
                        .then(function () { return animate_1.Animate.animateStyles(ripple, { opacity: 0 }, 650); })
                        .then(function () { return dom_adapter_1.DOM.removeChild(element, container); });
                };
                /**
                 * Start an ink ripple from a MouseEvent.
                 *
                 * @param element The element to ripple on.
                 * @param event The mouse event to indicate where the ripple should start at
                 * @returns {Promise<void>} A promise that resolves when the ripple has faded.
                 */
                Ink.rippleEvent = function (element, event) {
                    var rippleX = event.offsetX;
                    var rippleY = event.offsetY;
                    if (element !== event.srcElement) {
                        var rect = dom_adapter_1.DOM.getBoundingClientRect(element);
                        rippleX = event.clientX - rect.left;
                        rippleY = event.clientY - rect.top;
                    }
                    return Ink.ripple(element, rippleX, rippleY);
                };
                return Ink;
            })();
            exports_1("Ink", Ink);
        }
    }
});

System.register("ng2-material/components/tabs/tabs.ts", ["angular2/core.js", "angular2/src/facade/lang.js", "ng2-material/core/util/ink.ts"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, lang_1, ink_1, core_2;
    var MdTab, MdTabs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (ink_1_1) {
                ink_1 = ink_1_1;
            }],
        execute: function() {
            // TODO: behaviors to test
            //  - Tabs will become paginated if there isn't enough room for them
            //  - You can swipe left and right on a mobile device to change tabs
            //  - You can bind the selected tab via the selected attribute on the md-tabs element
            //  - If you set the selected tab binding to -1, it will leave no tab selected
            //  - If you remove a tab, it will try to select a new one
            //  - There's an ink bar that follows the selected tab, you can turn it off if you want
            //  - If you set the disabled attribute on a tab, it becomes unselectable
            //  - If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs
            MdTab = (function () {
                function MdTab(viewContainer, disabled, templateRef) {
                    this.viewContainer = viewContainer;
                    this.templateRef = templateRef;
                    this.disabled = false;
                    this._active = false;
                    this.disabled = lang_1.isPresent(disabled);
                }
                Object.defineProperty(MdTab.prototype, "active", {
                    get: function () {
                        return this._active;
                    },
                    set: function (active) {
                        if (active == this._active)
                            return;
                        this._active = active;
                        if (active) {
                            this.viewContainer.createEmbeddedView(this.templateRef);
                        }
                        else {
                            this.viewContainer.remove(0);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MdTab.prototype, "label", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MdTab.prototype, "disabled", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean), 
                    __metadata('design:paramtypes', [Boolean])
                ], MdTab.prototype, "active", null);
                MdTab = __decorate([
                    core_1.Directive({
                        selector: '[md-tab]'
                    }),
                    __param(1, core_1.Attribute('disabled')), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object, String, (typeof (_b = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _b) || Object])
                ], MdTab);
                return MdTab;
                var _a, _b;
            })();
            exports_1("MdTab", MdTab);
            MdTabs = (function () {
                function MdTabs(noScroll) {
                    this.mdNoScroll = false;
                    this._selectedIndex = -1;
                    this.mdNoScroll = lang_1.isPresent(noScroll);
                }
                Object.defineProperty(MdTabs.prototype, "selectedIndex", {
                    get: function () {
                        return this._selectedIndex;
                    },
                    set: function (value) {
                        var panes = this.panes.toArray();
                        if (value > 0 && value < panes.length) {
                            this.select(panes[value]);
                            this._selectedIndex = value;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdTabs.prototype, "selected", {
                    get: function () {
                        var result = null;
                        this.panes.toArray().forEach(function (p) {
                            if (p.active) {
                                result = p;
                            }
                        });
                        return result;
                    },
                    enumerable: true,
                    configurable: true
                });
                MdTabs.prototype.select = function (pane) {
                    this.panes.toArray().forEach(function (p) { return p.active = p == pane; });
                };
                MdTabs.prototype.onTabClick = function (pane, event) {
                    if (event && ink_1.Ink.canApply(event.target)) {
                        ink_1.Ink.rippleEvent(event.target, event);
                    }
                    this.select(pane);
                };
                MdTabs.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    setTimeout(function () {
                        if (_this._selectedIndex === -1) {
                            _this.select(_this.panes.toArray()[0]);
                        }
                    }, 0);
                };
                __decorate([
                    core_1.ContentChildren(MdTab), 
                    __metadata('design:type', (typeof (_a = typeof core_1.QueryList !== 'undefined' && core_1.QueryList) === 'function' && _a) || Object)
                ], MdTabs.prototype, "panes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MdTabs.prototype, "mdNoScroll", void 0);
                MdTabs = __decorate([
                    core_1.Component({
                        selector: 'md-tabs',
                        templateUrl: 'ng2-material/components/tabs/tabs.html',
                        encapsulation: core_2.ViewEncapsulation.None
                    }),
                    __param(0, core_1.Attribute('mdNoScroll')), 
                    __metadata('design:paramtypes', [String])
                ], MdTabs);
                return MdTabs;
                var _a;
            })();
            exports_1("MdTabs", MdTabs);
        }
    }
});

System.register("ng2-material/all.ts", ["angular2/src/facade/lang.js", "angular2/core.js", "ng2-material/components/button/button.ts", "ng2-material/components/checkbox/checkbox.ts", "ng2-material/components/content/content.ts", "ng2-material/components/dialog/dialog.ts", "ng2-material/components/divider/divider.ts", "ng2-material/components/grid_list/grid_list.ts", "ng2-material/components/icon/icon.ts", "ng2-material/components/input/input.ts", "ng2-material/components/list/list.ts", "ng2-material/components/progress_linear/progress_linear.ts", "ng2-material/components/progress_circular/progress_circular.ts", "ng2-material/components/radio/radio_button.ts", "ng2-material/components/radio/radio_dispatcher.ts", "ng2-material/components/switcher/switch.ts", "ng2-material/components/toolbar/toolbar.ts", "ng2-material/components/tabs/tabs.ts", "angular2/compiler.js"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var lang_1, core_1, button_1, checkbox_1, content_1, divider_1, grid_list_1, icon_1, input_1, list_1, progress_linear_1, progress_circular_1, radio_button_1, radio_dispatcher_1, switch_1, toolbar_1, tabs_1, compiler_1;
    var MATERIAL_DIRECTIVES, BASE_URL, MaterialTemplateResolver, MATERIAL_PROVIDERS;
    /**
     * Specify the baseUrl to load templates and styles from.
     * @param url
     */
    function setBaseUrl(url) {
        BASE_URL = url;
    }
    exports_1("setBaseUrl", setBaseUrl);
    var exportedNames_1 = {
        'MATERIAL_DIRECTIVES': true,
        'MaterialTemplateResolver': true,
        'MATERIAL_PROVIDERS': true,
        'setBaseUrl': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
                exportStar_1(button_1_1);
            },
            function (checkbox_1_1) {
                checkbox_1 = checkbox_1_1;
                exportStar_1(checkbox_1_1);
            },
            function (content_1_1) {
                content_1 = content_1_1;
                exportStar_1(content_1_1);
            },
            function (dialog_1_1) {
                exportStar_1(dialog_1_1);
            },
            function (divider_1_1) {
                divider_1 = divider_1_1;
                exportStar_1(divider_1_1);
            },
            function (grid_list_1_1) {
                grid_list_1 = grid_list_1_1;
                exportStar_1(grid_list_1_1);
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
                exportStar_1(icon_1_1);
            },
            function (input_1_1) {
                input_1 = input_1_1;
                exportStar_1(input_1_1);
            },
            function (list_1_1) {
                list_1 = list_1_1;
                exportStar_1(list_1_1);
            },
            function (progress_linear_1_1) {
                progress_linear_1 = progress_linear_1_1;
                exportStar_1(progress_linear_1_1);
            },
            function (progress_circular_1_1) {
                progress_circular_1 = progress_circular_1_1;
                exportStar_1(progress_circular_1_1);
            },
            function (radio_button_1_1) {
                radio_button_1 = radio_button_1_1;
                exportStar_1(radio_button_1_1);
            },
            function (radio_dispatcher_1_1) {
                radio_dispatcher_1 = radio_dispatcher_1_1;
                exportStar_1(radio_dispatcher_1_1);
            },
            function (switch_1_1) {
                switch_1 = switch_1_1;
                exportStar_1(switch_1_1);
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
                exportStar_1(toolbar_1_1);
                exportStar_1(toolbar_1_1);
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (compiler_1_1) {
                compiler_1 = compiler_1_1;
            }],
        execute: function() {
            /**
             * Collection of Material Design component directives.
             */
            exports_1("MATERIAL_DIRECTIVES", MATERIAL_DIRECTIVES = lang_1.CONST_EXPR([
                button_1.MdAnchor, button_1.MdButton,
                checkbox_1.MdCheckbox,
                content_1.MdContent,
                divider_1.MdDivider,
                grid_list_1.MdGridList, grid_list_1.MdGridTile,
                icon_1.MdIcon,
                input_1.MdInput, input_1.MdInputContainer,
                list_1.MdList, list_1.MdListItem,
                progress_linear_1.MdProgressLinear,
                progress_circular_1.MdProgressCircular,
                radio_button_1.MdRadioButton, radio_button_1.MdRadioGroup,
                switch_1.MdSwitch,
                toolbar_1.MdToolbar,
                tabs_1.MdTab, tabs_1.MdTabs
            ]));
            /**
             * Reference to specified base load URL for templates and styles.
             * @private
             */
            BASE_URL = null;
            /**
             * This is a workaround to tell us where to load templates and styles from until
             * we have a better template bundling strategy.
             */
            MaterialTemplateResolver = (function (_super) {
                __extends(MaterialTemplateResolver, _super);
                function MaterialTemplateResolver() {
                    _super.apply(this, arguments);
                }
                MaterialTemplateResolver.prototype.resolve = function (baseUrl, url) {
                    if (!BASE_URL) {
                        return _super.prototype.resolve.call(this, baseUrl, url);
                    }
                    if (baseUrl.startsWith(BASE_URL)) {
                        baseUrl = baseUrl.substr(0, BASE_URL.length);
                    }
                    var result = _super.prototype.resolve.call(this, baseUrl, url);
                    if (MaterialTemplateResolver.RESOURCE_MATCHER.test(result)) {
                        return "" + BASE_URL + result;
                    }
                    return result;
                };
                MaterialTemplateResolver.RESOURCE_MATCHER = /^ng2-material\/.*?\.(html|css)$/;
                return MaterialTemplateResolver;
            })(compiler_1.UrlResolver);
            exports_1("MaterialTemplateResolver", MaterialTemplateResolver);
            /**
             * Collection of Material Design component providers.
             */
            exports_1("MATERIAL_PROVIDERS", MATERIAL_PROVIDERS = [
                radio_dispatcher_1.MdRadioDispatcher,
                core_1.provide(compiler_1.UrlResolver, { useValue: new MaterialTemplateResolver() })
            ]);
        }
    }
});

//# sourceMappingURL=ng2-material.js.map