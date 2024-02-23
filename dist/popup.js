/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './src/ChromeTools.js':
      /*!****************************!*\
  !*** ./src/ChromeTools.js ***!
  \****************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getCurrentTab: () => /* binding */ getCurrentTab,
          /* harmony export */
        });
        function _typeof(o) {
          '@babel/helpers - typeof';
          return (
            (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype
                      ? 'symbol'
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          'use strict';
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = 'function' == typeof Symbol ? Symbol : {},
            a = i.iterator || '@@iterator',
            c = i.asyncIterator || '@@asyncIterator',
            u = i.toStringTag || '@@toStringTag';
          function define(t, e, r) {
            return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
          }
          try {
            define({}, '');
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, '_invoke', { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: 'normal', arg: t.call(e, r) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          e.wrap = wrap;
          var h = 'suspendedStart',
            l = 'suspendedYield',
            f = 'executing',
            s = 'completed',
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p));
          function defineIteratorMethods(t) {
            ['next', 'throw', 'return'].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ('throw' !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && 'object' == _typeof(h) && n.call(h, '__await')
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke('next', t, i, a);
                      },
                      function (t) {
                        invoke('throw', t, i, a);
                      }
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke('throw', t, i, a);
                      }
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, '_invoke', {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw new Error('Generator is already running');
              if (o === s) {
                if ('throw' === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ('normal' === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                'throw' === p.type && ((o = s), (n.method = 'throw'), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ('throw' === n &&
                  e.iterator['return'] &&
                  ((r.method = 'return'), (r.arg = t), maybeInvokeDelegate(e, r), 'throw' === r.method)) ||
                  ('return' !== n &&
                    ((r.method = 'throw'),
                    (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = 'throw'),
                (r.arg = new TypeError('iterator result is not an object')),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = 'normal'), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(pushTryEntry, this), this.reset(!0);
          }
          function values(e) {
            if (e || '' === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ('function' == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; ) if (n.call(e, o)) return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + ' is not iterable');
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, 'constructor', { value: GeneratorFunctionPrototype, configurable: !0 }),
            o(GeneratorFunctionPrototype, 'constructor', { value: GeneratorFunction, configurable: !0 }),
            (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, 'GeneratorFunction')),
            (e.isGeneratorFunction = function (t) {
              var e = 'function' == typeof t && t.constructor;
              return !!e && (e === GeneratorFunction || 'GeneratorFunction' === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype), define(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, 'Generator'),
            define(g, a, function () {
              return this;
            }),
            define(g, 'toString', function () {
              return '[object Generator]';
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this) 't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (a.type = 'throw'), (a.arg = e), (r.next = n), o && ((r.method = 'next'), (r.arg = t)), !!o;
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ('root' === i.tryLoc) return handle('end');
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, 'catchLoc'),
                      u = n.call(i, 'finallyLoc');
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u) throw new Error('try statement without catch or finally');
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                  }
                }
                i && ('break' === t || 'continue' === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                      : 'normal' === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ('throw' === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
                  'next' === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }
        function _nonIterableRest() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === 'Object' && o.constructor) n = o.constructor.name;
          if (n === 'Map' || n === 'Set') return Array.from(o);
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _iterableToArrayLimit(r, l) {
          var t = null == r ? null : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
          if (null != t) {
            var e,
              n,
              i,
              u,
              a = [],
              f = !0,
              o = !1;
            try {
              if (((i = (t = t.call(r)).next), 0 === l)) {
                if (Object(t) !== t) return;
                f = !1;
              } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
            } catch (r) {
              (o = !0), (n = r);
            } finally {
              try {
                if (!f && null != t['return'] && ((u = t['return']()), Object(u) !== u)) return;
              } finally {
                if (o) throw n;
              }
            }
            return a;
          }
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
              }
              _next(undefined);
            });
          };
        }
        function getCurrentTab() {
          return _getCurrentTab.apply(this, arguments);
        }
        function _getCurrentTab() {
          _getCurrentTab = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
              var queryOptions, _yield$chrome$tabs$qu, _yield$chrome$tabs$qu2, tab;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      queryOptions = {
                        active: true,
                        lastFocusedWindow: true,
                      }; // `tab` will either be a `tabs.Tab` instance or `undefined`.
                      _context.next = 3;
                      return chrome.tabs.query(queryOptions);
                    case 3:
                      _yield$chrome$tabs$qu = _context.sent;
                      _yield$chrome$tabs$qu2 = _slicedToArray(_yield$chrome$tabs$qu, 1);
                      tab = _yield$chrome$tabs$qu2[0];
                      return _context.abrupt('return', tab);
                    case 7:
                    case 'end':
                      return _context.stop();
                  }
              }, _callee);
            })
          );
          return _getCurrentTab.apply(this, arguments);
        }

        /***/
      },

    /***/ './src/CurrentVersion.js':
      /*!*******************************!*\
  !*** ./src/CurrentVersion.js ***!
  \*******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ updateVersionButton: () => /* binding */ updateVersionButton,
          /* harmony export */
        });
        function _typeof(o) {
          '@babel/helpers - typeof';
          return (
            (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype
                      ? 'symbol'
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          'use strict';
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = 'function' == typeof Symbol ? Symbol : {},
            a = i.iterator || '@@iterator',
            c = i.asyncIterator || '@@asyncIterator',
            u = i.toStringTag || '@@toStringTag';
          function define(t, e, r) {
            return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
          }
          try {
            define({}, '');
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, '_invoke', { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: 'normal', arg: t.call(e, r) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          e.wrap = wrap;
          var h = 'suspendedStart',
            l = 'suspendedYield',
            f = 'executing',
            s = 'completed',
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p));
          function defineIteratorMethods(t) {
            ['next', 'throw', 'return'].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ('throw' !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && 'object' == _typeof(h) && n.call(h, '__await')
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke('next', t, i, a);
                      },
                      function (t) {
                        invoke('throw', t, i, a);
                      }
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke('throw', t, i, a);
                      }
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, '_invoke', {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw new Error('Generator is already running');
              if (o === s) {
                if ('throw' === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ('normal' === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                'throw' === p.type && ((o = s), (n.method = 'throw'), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ('throw' === n &&
                  e.iterator['return'] &&
                  ((r.method = 'return'), (r.arg = t), maybeInvokeDelegate(e, r), 'throw' === r.method)) ||
                  ('return' !== n &&
                    ((r.method = 'throw'),
                    (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = 'throw'),
                (r.arg = new TypeError('iterator result is not an object')),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = 'normal'), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(pushTryEntry, this), this.reset(!0);
          }
          function values(e) {
            if (e || '' === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ('function' == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; ) if (n.call(e, o)) return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + ' is not iterable');
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, 'constructor', { value: GeneratorFunctionPrototype, configurable: !0 }),
            o(GeneratorFunctionPrototype, 'constructor', { value: GeneratorFunction, configurable: !0 }),
            (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, 'GeneratorFunction')),
            (e.isGeneratorFunction = function (t) {
              var e = 'function' == typeof t && t.constructor;
              return !!e && (e === GeneratorFunction || 'GeneratorFunction' === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype), define(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, 'Generator'),
            define(g, a, function () {
              return this;
            }),
            define(g, 'toString', function () {
              return '[object Generator]';
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this) 't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (a.type = 'throw'), (a.arg = e), (r.next = n), o && ((r.method = 'next'), (r.arg = t)), !!o;
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ('root' === i.tryLoc) return handle('end');
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, 'catchLoc'),
                      u = n.call(i, 'finallyLoc');
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u) throw new Error('try statement without catch or finally');
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                  }
                }
                i && ('break' === t || 'continue' === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                      : 'normal' === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ('throw' === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
                  'next' === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
              }
              _next(undefined);
            });
          };
        }
        var isVersionLower = function isVersionLower(userVersion, newVersion) {
          var userParts = userVersion.split('.').map(Number);
          var newParts = newVersion.split('.').map(Number);
          for (var i = 0; i < Math.max(userParts.length, newParts.length); i++) {
            var userPart = userParts[i] || 0;
            var newPart = newParts[i] || 0;
            if (userPart < newPart) return true;
            if (userPart > newPart) return false;
          }
          return false;
        };
        var getGithubLatestRelease = /*#__PURE__*/ (function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
              var gitHubApiUrl, gitHubResponse, releases;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      gitHubApiUrl = 'https://api.github.com/repos/tennisfar/DS-Chrome-Udvidelse/releases';
                      _context.next = 3;
                      return fetch(gitHubApiUrl);
                    case 3:
                      gitHubResponse = _context.sent;
                      _context.next = 6;
                      return gitHubResponse.json();
                    case 6:
                      releases = _context.sent;
                      return _context.abrupt('return', releases[0]);
                    case 8:
                    case 'end':
                      return _context.stop();
                  }
              }, _callee);
            })
          );
          return function getGithubLatestRelease() {
            return _ref.apply(this, arguments);
          };
        })();
        var getLocalVersion = /*#__PURE__*/ (function () {
          var _ref2 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
              var localDataUrl, localDataResponse, localData;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      localDataUrl = '/manifest.json';
                      _context2.next = 3;
                      return fetch(localDataUrl);
                    case 3:
                      localDataResponse = _context2.sent;
                      _context2.next = 6;
                      return localDataResponse.json();
                    case 6:
                      localData = _context2.sent;
                      return _context2.abrupt('return', localData.version);
                    case 8:
                    case 'end':
                      return _context2.stop();
                  }
              }, _callee2);
            })
          );
          return function getLocalVersion() {
            return _ref2.apply(this, arguments);
          };
        })();
        function updateVersionButton() {
          return _updateVersionButton.apply(this, arguments);
        }
        function _updateVersionButton() {
          _updateVersionButton = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3() {
              var updateDiv, _githubLatestRelease$, githubLatestRelease, githubVersion, localVersion, url, message;
              return _regeneratorRuntime().wrap(
                function _callee3$(_context3) {
                  while (1)
                    switch ((_context3.prev = _context3.next)) {
                      case 0:
                        updateDiv = document.querySelector('#updateStatus');
                        _context3.prev = 1;
                        _context3.next = 4;
                        return getGithubLatestRelease();
                      case 4:
                        githubLatestRelease = _context3.sent;
                        githubVersion =
                          githubLatestRelease === null ||
                          githubLatestRelease === void 0 ||
                          (_githubLatestRelease$ = githubLatestRelease.tag_name) === null ||
                          _githubLatestRelease$ === void 0
                            ? void 0
                            : _githubLatestRelease$.replace('v', '');
                        _context3.next = 8;
                        return getLocalVersion();
                      case 8:
                        localVersion = _context3.sent;
                        if (isVersionLower(localVersion, githubVersion)) {
                          url = githubLatestRelease.html_url;
                          message = 'Opdater til v. '.concat(githubVersion, ' (du har ').concat(localVersion, ')');
                        } else {
                          url = 'https://github.com/tennisfar/DS-Chrome-Udvidelse/releases';
                          message = 'Version '.concat(localVersion);
                        }
                        updateDiv.innerText = message;
                        updateDiv.addEventListener('click', function () {
                          return window.open(url);
                        });
                        _context3.next = 17;
                        break;
                      case 14:
                        _context3.prev = 14;
                        _context3.t0 = _context3['catch'](1);
                        updateDiv.style.display = 'none';
                      case 17:
                      case 'end':
                        return _context3.stop();
                    }
                },
                _callee3,
                null,
                [[1, 14]]
              );
            })
          );
          return _updateVersionButton.apply(this, arguments);
        }

        /***/
      },

    /***/ './src/OpenPageInExperienceEditor.js':
      /*!*******************************************!*\
  !*** ./src/OpenPageInExperienceEditor.js ***!
  \*******************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ setupOpenPageInExperienceEditor: () => /* binding */ setupOpenPageInExperienceEditor,
          /* harmony export */
        });
        function _typeof(o) {
          '@babel/helpers - typeof';
          return (
            (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype
                      ? 'symbol'
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }
        function _nonIterableRest() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === 'Object' && o.constructor) n = o.constructor.name;
          if (n === 'Map' || n === 'Set') return Array.from(o);
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _iterableToArrayLimit(r, l) {
          var t = null == r ? null : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
          if (null != t) {
            var e,
              n,
              i,
              u,
              a = [],
              f = !0,
              o = !1;
            try {
              if (((i = (t = t.call(r)).next), 0 === l)) {
                if (Object(t) !== t) return;
                f = !1;
              } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
            } catch (r) {
              (o = !0), (n = r);
            } finally {
              try {
                if (!f && null != t['return'] && ((u = t['return']()), Object(u) !== u)) return;
              } finally {
                if (o) throw n;
              }
            }
            return a;
          }
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        function _regeneratorRuntime() {
          'use strict';
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = 'function' == typeof Symbol ? Symbol : {},
            a = i.iterator || '@@iterator',
            c = i.asyncIterator || '@@asyncIterator',
            u = i.toStringTag || '@@toStringTag';
          function define(t, e, r) {
            return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
          }
          try {
            define({}, '');
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, '_invoke', { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: 'normal', arg: t.call(e, r) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          e.wrap = wrap;
          var h = 'suspendedStart',
            l = 'suspendedYield',
            f = 'executing',
            s = 'completed',
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p));
          function defineIteratorMethods(t) {
            ['next', 'throw', 'return'].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ('throw' !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && 'object' == _typeof(h) && n.call(h, '__await')
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke('next', t, i, a);
                      },
                      function (t) {
                        invoke('throw', t, i, a);
                      }
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke('throw', t, i, a);
                      }
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, '_invoke', {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw new Error('Generator is already running');
              if (o === s) {
                if ('throw' === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ('normal' === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                'throw' === p.type && ((o = s), (n.method = 'throw'), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ('throw' === n &&
                  e.iterator['return'] &&
                  ((r.method = 'return'), (r.arg = t), maybeInvokeDelegate(e, r), 'throw' === r.method)) ||
                  ('return' !== n &&
                    ((r.method = 'throw'),
                    (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = 'throw'),
                (r.arg = new TypeError('iterator result is not an object')),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = 'normal'), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(pushTryEntry, this), this.reset(!0);
          }
          function values(e) {
            if (e || '' === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ('function' == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; ) if (n.call(e, o)) return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + ' is not iterable');
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, 'constructor', { value: GeneratorFunctionPrototype, configurable: !0 }),
            o(GeneratorFunctionPrototype, 'constructor', { value: GeneratorFunction, configurable: !0 }),
            (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, 'GeneratorFunction')),
            (e.isGeneratorFunction = function (t) {
              var e = 'function' == typeof t && t.constructor;
              return !!e && (e === GeneratorFunction || 'GeneratorFunction' === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype), define(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, 'Generator'),
            define(g, a, function () {
              return this;
            }),
            define(g, 'toString', function () {
              return '[object Generator]';
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this) 't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (a.type = 'throw'), (a.arg = e), (r.next = n), o && ((r.method = 'next'), (r.arg = t)), !!o;
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ('root' === i.tryLoc) return handle('end');
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, 'catchLoc'),
                      u = n.call(i, 'finallyLoc');
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u) throw new Error('try statement without catch or finally');
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                  }
                }
                i && ('break' === t || 'continue' === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                      : 'normal' === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ('throw' === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
                  'next' === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
              }
              _next(undefined);
            });
          };
        }
        function getCurrentTab() {
          return _getCurrentTab.apply(this, arguments);
        }
        function _getCurrentTab() {
          _getCurrentTab = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3() {
              var queryOptions, _yield$chrome$tabs$qu, _yield$chrome$tabs$qu2, tab;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1)
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      queryOptions = {
                        active: true,
                        lastFocusedWindow: true,
                      }; // `tab` will either be a `tabs.Tab` instance or `undefined`.
                      _context3.next = 3;
                      return chrome.tabs.query(queryOptions);
                    case 3:
                      _yield$chrome$tabs$qu = _context3.sent;
                      _yield$chrome$tabs$qu2 = _slicedToArray(_yield$chrome$tabs$qu, 1);
                      tab = _yield$chrome$tabs$qu2[0];
                      return _context3.abrupt('return', tab);
                    case 7:
                    case 'end':
                      return _context3.stop();
                  }
              }, _callee3);
            })
          );
          return _getCurrentTab.apply(this, arguments);
        }
        var handleEnableCta = /*#__PURE__*/ (function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(cta) {
              var _tab$url, _tab$url2;
              var tab;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return getCurrentTab();
                    case 2:
                      tab = _context.sent;
                      if (
                        tab !== null &&
                        tab !== void 0 &&
                        (_tab$url = tab.url) !== null &&
                        _tab$url !== void 0 &&
                        _tab$url.includes('danskespil.dk') &&
                        !(
                          tab !== null &&
                          tab !== void 0 &&
                          (_tab$url2 = tab.url) !== null &&
                          _tab$url2 !== void 0 &&
                          _tab$url2.includes('/sitecore/')
                        )
                      ) {
                        cta.removeAttribute('disabled');
                      }
                    case 4:
                    case 'end':
                      return _context.stop();
                  }
              }, _callee);
            })
          );
          return function handleEnableCta(_x) {
            return _ref.apply(this, arguments);
          };
        })();
        var handleOpenPageInExperienceEditor = /*#__PURE__*/ (function () {
          var _ref2 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
              var tab;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.next = 2;
                      return getCurrentTab();
                    case 2:
                      tab = _context2.sent;
                      chrome.scripting.executeScript({
                        target: {
                          tabId: tab.id,
                        },
                        function: function _function() {
                          var sitecoreId = sessionStorage.getItem('page_id');
                          var lo = window.location.origin;
                          var cl = document.body.classList;
                          var isDlo = cl.contains('dlo');
                          var isDli = cl.contains('dli');
                          var reg = isDli ? 'dli' : 'dlo';
                          if (lo.includes('town')) lo = lo.replace('.dan', 'edit' + reg + '.dan');
                          if (lo.includes('//da')) lo = lo.replace('//dan', '//edit' + reg + '.dan');
                          lo += '/?sc_mode=edit';
                          window.open(''.concat(lo, '&sc_itemid=').concat(sitecoreId), '_blank');
                        },
                      });
                    case 4:
                    case 'end':
                      return _context2.stop();
                  }
              }, _callee2);
            })
          );
          return function handleOpenPageInExperienceEditor() {
            return _ref2.apply(this, arguments);
          };
        })();
        function setupOpenPageInExperienceEditor() {
          document.addEventListener('DOMContentLoaded', function () {
            var cta = document.querySelector('#openInExperienceEditor');
            handleEnableCta(cta);
            cta.addEventListener('click', function () {
              handleOpenPageInExperienceEditor();
            });
          });
        }

        /***/
      },

    /***/ './src/OpenPageInSitecore.js':
      /*!***********************************!*\
  !*** ./src/OpenPageInSitecore.js ***!
  \***********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ setupOpenPageInSitecore: () => /* binding */ setupOpenPageInSitecore,
          /* harmony export */
        });
        function _typeof(o) {
          '@babel/helpers - typeof';
          return (
            (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype
                      ? 'symbol'
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }
        function _nonIterableRest() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === 'Object' && o.constructor) n = o.constructor.name;
          if (n === 'Map' || n === 'Set') return Array.from(o);
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _iterableToArrayLimit(r, l) {
          var t = null == r ? null : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
          if (null != t) {
            var e,
              n,
              i,
              u,
              a = [],
              f = !0,
              o = !1;
            try {
              if (((i = (t = t.call(r)).next), 0 === l)) {
                if (Object(t) !== t) return;
                f = !1;
              } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
            } catch (r) {
              (o = !0), (n = r);
            } finally {
              try {
                if (!f && null != t['return'] && ((u = t['return']()), Object(u) !== u)) return;
              } finally {
                if (o) throw n;
              }
            }
            return a;
          }
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        function _regeneratorRuntime() {
          'use strict';
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = 'function' == typeof Symbol ? Symbol : {},
            a = i.iterator || '@@iterator',
            c = i.asyncIterator || '@@asyncIterator',
            u = i.toStringTag || '@@toStringTag';
          function define(t, e, r) {
            return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
          }
          try {
            define({}, '');
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, '_invoke', { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: 'normal', arg: t.call(e, r) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          e.wrap = wrap;
          var h = 'suspendedStart',
            l = 'suspendedYield',
            f = 'executing',
            s = 'completed',
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p));
          function defineIteratorMethods(t) {
            ['next', 'throw', 'return'].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ('throw' !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && 'object' == _typeof(h) && n.call(h, '__await')
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke('next', t, i, a);
                      },
                      function (t) {
                        invoke('throw', t, i, a);
                      }
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke('throw', t, i, a);
                      }
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, '_invoke', {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw new Error('Generator is already running');
              if (o === s) {
                if ('throw' === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ('normal' === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                'throw' === p.type && ((o = s), (n.method = 'throw'), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ('throw' === n &&
                  e.iterator['return'] &&
                  ((r.method = 'return'), (r.arg = t), maybeInvokeDelegate(e, r), 'throw' === r.method)) ||
                  ('return' !== n &&
                    ((r.method = 'throw'),
                    (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = 'throw'),
                (r.arg = new TypeError('iterator result is not an object')),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = 'normal'), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(pushTryEntry, this), this.reset(!0);
          }
          function values(e) {
            if (e || '' === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ('function' == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; ) if (n.call(e, o)) return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + ' is not iterable');
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, 'constructor', { value: GeneratorFunctionPrototype, configurable: !0 }),
            o(GeneratorFunctionPrototype, 'constructor', { value: GeneratorFunction, configurable: !0 }),
            (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, 'GeneratorFunction')),
            (e.isGeneratorFunction = function (t) {
              var e = 'function' == typeof t && t.constructor;
              return !!e && (e === GeneratorFunction || 'GeneratorFunction' === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype), define(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, 'Generator'),
            define(g, a, function () {
              return this;
            }),
            define(g, 'toString', function () {
              return '[object Generator]';
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this) 't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (a.type = 'throw'), (a.arg = e), (r.next = n), o && ((r.method = 'next'), (r.arg = t)), !!o;
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ('root' === i.tryLoc) return handle('end');
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, 'catchLoc'),
                      u = n.call(i, 'finallyLoc');
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u) throw new Error('try statement without catch or finally');
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                  }
                }
                i && ('break' === t || 'continue' === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                      : 'normal' === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ('throw' === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
                  'next' === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
              }
              _next(undefined);
            });
          };
        }
        function getCurrentTab() {
          return _getCurrentTab.apply(this, arguments);
        }
        function _getCurrentTab() {
          _getCurrentTab = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3() {
              var queryOptions, _yield$chrome$tabs$qu, _yield$chrome$tabs$qu2, tab;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1)
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      queryOptions = {
                        active: true,
                        lastFocusedWindow: true,
                      }; // `tab` will either be a `tabs.Tab` instance or `undefined`.
                      _context3.next = 3;
                      return chrome.tabs.query(queryOptions);
                    case 3:
                      _yield$chrome$tabs$qu = _context3.sent;
                      _yield$chrome$tabs$qu2 = _slicedToArray(_yield$chrome$tabs$qu, 1);
                      tab = _yield$chrome$tabs$qu2[0];
                      return _context3.abrupt('return', tab);
                    case 7:
                    case 'end':
                      return _context3.stop();
                  }
              }, _callee3);
            })
          );
          return _getCurrentTab.apply(this, arguments);
        }
        var handleEnableCta = /*#__PURE__*/ (function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(cta) {
              var _tab$url, _tab$url2;
              var tab;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return getCurrentTab();
                    case 2:
                      tab = _context.sent;
                      if (
                        tab !== null &&
                        tab !== void 0 &&
                        (_tab$url = tab.url) !== null &&
                        _tab$url !== void 0 &&
                        _tab$url.includes('danskespil.dk') &&
                        !(
                          tab !== null &&
                          tab !== void 0 &&
                          (_tab$url2 = tab.url) !== null &&
                          _tab$url2 !== void 0 &&
                          _tab$url2.includes('/sitecore/')
                        )
                      ) {
                        cta.removeAttribute('disabled');
                      }
                    case 4:
                    case 'end':
                      return _context.stop();
                  }
              }, _callee);
            })
          );
          return function handleEnableCta(_x) {
            return _ref.apply(this, arguments);
          };
        })();
        var handleOpenPageInSitecore = /*#__PURE__*/ (function () {
          var _ref2 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
              var tab;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.next = 2;
                      return getCurrentTab();
                    case 2:
                      tab = _context2.sent;
                      chrome.scripting.executeScript({
                        target: {
                          tabId: tab.id,
                        },
                        function: function _function() {
                          var sitecoreId = sessionStorage.getItem('page_id');
                          var lo = window.location.origin;
                          var cl = document.body.classList;
                          var isDlo = cl.contains('dlo');
                          var isDli = cl.contains('dli');
                          var reg = isDli ? 'dli' : 'dlo';
                          if (lo.includes('town')) lo = lo.replace('.dan', 'edit' + reg + '.dan');
                          if (lo.includes('//da')) lo = lo.replace('//dan', '//edit' + reg + '.dan');
                          lo += '/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1';
                          window.open(''.concat(lo, '&fo=').concat(sitecoreId), '_blank');
                        },
                      });
                    case 4:
                    case 'end':
                      return _context2.stop();
                  }
              }, _callee2);
            })
          );
          return function handleOpenPageInSitecore() {
            return _ref2.apply(this, arguments);
          };
        })();
        function setupOpenPageInSitecore() {
          document.addEventListener('DOMContentLoaded', function () {
            var cta = document.querySelector('#openInSitecore');
            handleEnableCta(cta);
            cta.addEventListener('click', function () {
              handleOpenPageInSitecore();
            });
          });
        }

        /***/
      },

    /***/ './src/OpenSitecore.js':
      /*!*****************************!*\
  !*** ./src/OpenSitecore.js ***!
  \*****************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ setupOpenSitecore: () => /* binding */ setupOpenSitecore,
          /* harmony export */
        });
        function setupOpenSitecore() {
          document.querySelector('#openSitecoreProdDli').addEventListener('click', function () {
            window.open(
              'https://editdli.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
            );
          });
          document.querySelector('#openSitecoreProdDlo').addEventListener('click', function () {
            window.open(
              'https://editdlo.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
            );
          });
          document.querySelector('#openSitecoreTown21Dli').addEventListener('click', function () {
            window.open(
              'https://town21editdli.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
            );
          });
          document.querySelector('#openSitecoreTown21Dlo').addEventListener('click', function () {
            window.open(
              'https://town21editdlo.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
            );
          });
          document.querySelector('#openSitecoreDev').addEventListener('click', function () {
            window.open(
              'https://web.develop.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
            );
          });
          document.querySelector('#openSitecoreTrunk').addEventListener('click', function () {
            window.open(
              'https://web.trunk.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
            );
          });
        }

        /***/
      },

    /***/ './src/Settings.js':
      /*!*************************!*\
  !*** ./src/Settings.js ***!
  \*************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ setupSettings: () => /* binding */ setupSettings,
          /* harmony export */
        });
        var handleDelete = function handleDelete(elName, showSettings, showButtons) {
          var el = document.getElementById(elName);
          if (!el) return;
          if (!showSettings) {
            el.style.display = showButtons[elName] ? 'block' : 'none';
            return;
          }
          if (showSettings) {
            el.classList.toggle('is-danger', !showButtons[elName]);
            el.querySelector('button.delete').addEventListener('click', function (ev) {
              ev.stopPropagation();
              showButtons[elName] = !showButtons[elName];
              chrome.storage.sync.set({
                showButtons: showButtons,
              });
              location.reload();
            });
          }
        };
        var handleHideBlock = function handleHideBlock(elNames, blockEl, showSettings, showButtons) {
          if (showSettings) return;
          var hideBlock = true;
          elNames.forEach(function (elName) {
            if (showButtons[elName]) hideBlock = false;
          });
          if (hideBlock) {
            document.getElementById(blockEl).style.display = 'none';
          }
          return hideBlock;
        };
        function setupSettings() {
          chrome.storage.sync.get('showSettings', function (_ref) {
            var showSettings = _ref.showSettings;
            var content = document.querySelector('.is-ancestor');
            content.classList.toggle('show-settings', showSettings);
            if (showSettings) {
              var disabledButtons = document.querySelectorAll('.button[disabled]');
              disabledButtons.forEach(function (button) {
                button.removeAttribute('disabled');
              });
            }
            document.getElementById('settingsCta').addEventListener('click', function () {
              showSettings = !showSettings;
              chrome.storage.sync.set({
                showSettings: showSettings,
              });
              location.reload();
            });
            chrome.storage.sync.get('showButtons', function (_ref2) {
              var showButtons = _ref2.showButtons;
              var danskeSpilButtons = ['showSitecoreComponents', 'openInSitecore', 'openInExperienceEditor'];
              danskeSpilButtons.forEach(function (button) {
                return handleDelete(button, showSettings, showButtons);
              });
              var hideDanskeSpilButtons = handleHideBlock(
                danskeSpilButtons,
                'danskeSpilButtons',
                showSettings,
                showButtons
              );
              var jiraButtons = [
                'openMyJira',
                'openJiraBoardDli',
                'openJiraBoardDlo',
                'openJiraBoardFOR',
                'makeJiraDli',
                'makeJiraDlo',
                'makeJiraFOR',
                'makeJira',
              ];
              jiraButtons.forEach(function (button) {
                return handleDelete(button, showSettings, showButtons);
              });
              var hideJiraButtons = handleHideBlock(jiraButtons, 'jiraButtons', showSettings, showButtons);
              var sitecoreButtons = [
                'openSitecoreProdDli',
                'openSitecoreProdDlo',
                'openSitecoreTown21Dli',
                'openSitecoreTown21Dlo',
                'openSitecoreDev',
                'openSitecoreTrunk',
              ];
              sitecoreButtons.forEach(function (button) {
                return handleDelete(button, showSettings, showButtons);
              });
              var hideSitecoreButtons = handleHideBlock(sitecoreButtons, 'sitecoreButtons', showSettings, showButtons);
              var hiddenBlocks = [hideDanskeSpilButtons, hideJiraButtons, hideSitecoreButtons].filter(function (value) {
                return value === true;
              }).length;
              var container = document.getElementById('container');
              if (hiddenBlocks === 0) {
                container.style.width = '769px';
              } else {
                container.style.width = '300px';
              }

              // const debug = document.querySelector('#debug');
              // debug.innerHTML = JSON.stringify(hiddenBlocks, null, 2);
            });
          });
        }

        /***/
      },

    /***/ './src/ShowComponents.js':
      /*!*******************************!*\
  !*** ./src/ShowComponents.js ***!
  \*******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ setupShowComponents: () => /* binding */ setupShowComponents,
          /* harmony export */
        });
        /* harmony import */ var _ChromeTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./ChromeTools */ './src/ChromeTools.js'
        );
        function _typeof(o) {
          '@babel/helpers - typeof';
          return (
            (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype
                      ? 'symbol'
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          'use strict';
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = 'function' == typeof Symbol ? Symbol : {},
            a = i.iterator || '@@iterator',
            c = i.asyncIterator || '@@asyncIterator',
            u = i.toStringTag || '@@toStringTag';
          function define(t, e, r) {
            return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
          }
          try {
            define({}, '');
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, '_invoke', { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: 'normal', arg: t.call(e, r) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          e.wrap = wrap;
          var h = 'suspendedStart',
            l = 'suspendedYield',
            f = 'executing',
            s = 'completed',
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p));
          function defineIteratorMethods(t) {
            ['next', 'throw', 'return'].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ('throw' !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && 'object' == _typeof(h) && n.call(h, '__await')
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke('next', t, i, a);
                      },
                      function (t) {
                        invoke('throw', t, i, a);
                      }
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke('throw', t, i, a);
                      }
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, '_invoke', {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw new Error('Generator is already running');
              if (o === s) {
                if ('throw' === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ('normal' === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                'throw' === p.type && ((o = s), (n.method = 'throw'), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ('throw' === n &&
                  e.iterator['return'] &&
                  ((r.method = 'return'), (r.arg = t), maybeInvokeDelegate(e, r), 'throw' === r.method)) ||
                  ('return' !== n &&
                    ((r.method = 'throw'),
                    (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = 'throw'),
                (r.arg = new TypeError('iterator result is not an object')),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = 'normal'), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(pushTryEntry, this), this.reset(!0);
          }
          function values(e) {
            if (e || '' === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ('function' == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; ) if (n.call(e, o)) return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + ' is not iterable');
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, 'constructor', { value: GeneratorFunctionPrototype, configurable: !0 }),
            o(GeneratorFunctionPrototype, 'constructor', { value: GeneratorFunction, configurable: !0 }),
            (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, 'GeneratorFunction')),
            (e.isGeneratorFunction = function (t) {
              var e = 'function' == typeof t && t.constructor;
              return !!e && (e === GeneratorFunction || 'GeneratorFunction' === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype), define(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, 'Generator'),
            define(g, a, function () {
              return this;
            }),
            define(g, 'toString', function () {
              return '[object Generator]';
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this) 't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (a.type = 'throw'), (a.arg = e), (r.next = n), o && ((r.method = 'next'), (r.arg = t)), !!o;
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ('root' === i.tryLoc) return handle('end');
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, 'catchLoc'),
                      u = n.call(i, 'finallyLoc');
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u) throw new Error('try statement without catch or finally');
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                  }
                }
                i && ('break' === t || 'continue' === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                      : 'normal' === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ('throw' === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
                  'next' === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
              }
              _next(undefined);
            });
          };
        }

        var handleEnableCta = /*#__PURE__*/ (function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(cta) {
              var _tab$url, _tab$url2;
              var tab;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return (0, _ChromeTools__WEBPACK_IMPORTED_MODULE_0__.getCurrentTab)();
                    case 2:
                      tab = _context.sent;
                      if (
                        tab !== null &&
                        tab !== void 0 &&
                        (_tab$url = tab.url) !== null &&
                        _tab$url !== void 0 &&
                        _tab$url.includes('danskespil.dk') &&
                        !(
                          tab !== null &&
                          tab !== void 0 &&
                          (_tab$url2 = tab.url) !== null &&
                          _tab$url2 !== void 0 &&
                          _tab$url2.includes('/sitecore/')
                        )
                      ) {
                        cta.removeAttribute('disabled');
                      }
                    case 4:
                    case 'end':
                      return _context.stop();
                  }
              }, _callee);
            })
          );
          return function handleEnableCta(_x) {
            return _ref.apply(this, arguments);
          };
        })();
        var handleShowComponents = function handleShowComponents() {
          chrome.tabs.query(
            {
              active: true,
              currentWindow: true,
            },
            function (tabs) {
              chrome.scripting.executeScript({
                target: {
                  tabId: tabs[0].id,
                },
                function: function _function() {
                  var dsSC;
                  var nextElShouldBeMarked;
                  var foundName;
                  var foundId;
                  var found = [];
                  var sitecoreUrl;
                  var resizeTimeout;
                  var dsSCExist;

                  // toggle
                  dsSCExist = document.querySelector('#dsSC');
                  if (!!dsSCExist) {
                    dsSCExist.remove();
                    return;
                  }
                  var addStyle = function addStyle() {
                    var style = document.querySelector('#dsSCStyle');
                    if (!!style) style.remove();
                    style = document.createElement('style');
                    style.id = 'dsSCStyle';
                    style.innerText =
                      "\n        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=block');\n        \n        .dsSC__item {\n          cursor: pointer;\n          position: absolute;\n          z-index: 10000000;\n          height: 30px;\n          display: flex;\n          align-items: center;\n          font-size: 10px;\n          font-weight: 500;\n          font-family: 'Montserrat', 'Open Sans', Helvetica, Arial, sans-serif;\n          background: black;\n          color: white;\n          padding: 0 8px 0 10px;\n          box-shadow: 0 0 0 1px #585858;\n          border-radius: 3px;\n          text-decoration: none;\n          line-height: 15px;\n        }\n        \n        .dsSC__item-close {\n          position: relative;\n          width: 30px;\n          height: 30px;\n          background: #222;\n          margin: 0 -8px 0 10px;\n        }\n        \n        .dsSC__item-close::before,\n        .dsSC__item-close::after {\n          position: absolute;\n          top: 14px;\n          left: 10px;\n          content: \"\";\n          width: 10px;\n          height: 2px;\n          background: white;\n          transform: rotate(45deg);\n        }\n        \n        .dsSC__item-close::after {\n          transform: rotate(-45deg);\n        }\n        \n        .dsSC__item-close:hover {\n          background: red;\n        }\n        \n        .dsSC__item img {\n          height: 15px;\n          width: 15px;\n          margin-right: 5px;\n        }\n        \n        .dsSC__target {\n          filter: blur(2px) !important;\n        }\n        \n        .dsSC__toggle {\n          position: fixed;\n          bottom: 5px;\n          right: 5px;\n          background: black;\n          width: 25px;\n          height: 25px;\n          z-index: 1000000000;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          border-radius: 3px;\n          cursor: pointer;\n          opacity: 0.3;\n        }\n        \n        .dsSC__toggle:hover {\n          opacity: 1;\n        }\n        \n        .dsSC__toggle img {\n          height: 15px;\n          width: 15px;\n        }\n        \n        .dsSC--hidden {\n          display: none;\n        }\n        ".replace(
                        /\n/g,
                        ''
                      );
                    document.body.appendChild(style);
                  };
                  var reset = function reset() {
                    dsSCExist = document.querySelector('#dsSC');
                    if (!!dsSCExist) dsSCExist.remove();
                    dsSC = document.createElement('div');
                    dsSC.id = 'dsSC';
                  };
                  var getSitecoreUrl = function getSitecoreUrl() {
                    var dlo = [
                      'alt-eller-intet',
                      'eurojackpot',
                      'keno',
                      'lotto',
                      'vikinglotto',
                      'plus-abonnement',
                      'quick',
                      'spil-sammen',
                      'roed-konto',
                    ];
                    var host = window.location.host
                      .replace(/danskespil\.dk/, '')
                      .toLowerCase()
                      .replace(/\.$/, '');
                    var region = window.location.pathname.replace(/^\//, '').replace(/\/.*$/, '').toLowerCase();
                    var dliOrDlo = dlo.indexOf(region) > -1 ? 'editdlo' : 'editdli';
                    dliOrDlo = host === 'web.develop' || host === 'web.trunk' ? '' : dliOrDlo;
                    sitecoreUrl = 'https://'
                      .concat(host)
                      .concat(dliOrDlo, '.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=');
                  };
                  var checkForId = function checkForId(child) {
                    var nodeValue = child.nodeValue;
                    if (nodeValue.match(/^[^\/].*({.*})/)) {
                      nextElShouldBeMarked = true;
                      foundName = nodeValue.replace(/{.*}/, '').trim();
                      foundId = nodeValue.match(/{.*}/)[0];
                    }
                  };
                  var outputComments = function outputComments(node) {
                    // initialise the child node
                    var child = node.firstChild;
                    var prevPositions = [];

                    // loop while the child node exists
                    while (child) {
                      if (child === document.body.lastChild) {
                        // found.map((item) => console.error(item.name, parseInt(item.top)))
                        document.body.appendChild(dsSC);
                      }

                      // determine the type of the node
                      switch (child.nodeType) {
                        // if the node is an element node, recurse into it
                        case Node.ELEMENT_NODE:
                          if (nextElShouldBeMarked) {
                            var childTopPos = child.getBoundingClientRect().top + 10 + window.scrollY;
                            var childLeftPos = child.getBoundingClientRect().left + 10 + window.scrollX;
                            if (childLeftPos < 10) childLeftPos = 10;
                            var strippedId = 'dsSCId' + foundId.replace('{', '').replace('}', '').toLowerCase();
                            var el = document.createElement('a');
                            el.href = ''.concat(sitecoreUrl).concat(foundId);
                            el.target = 'dsSitecore';
                            el.classList.add('dsSC__item');
                            el.draggable = true;
                            el.setAttribute('dsSCId', strippedId);
                            child.classList.add(strippedId);
                            if (prevPositions.includes(''.concat(childTopPos, ',').concat(childLeftPos))) {
                              childTopPos += 18;
                              childLeftPos += 18;
                            }
                            prevPositions.push(''.concat(childTopPos, ',').concat(childLeftPos));
                            el.style.top = childTopPos + 'px';
                            el.style.left = childLeftPos + 'px';
                            el.innerHTML = ''.concat(
                              foundName
                                .replace(/View$/, '')
                                .split(/(?=[A-Z])/)
                                .join(' ')
                            );
                            var close = document.createElement('span');
                            close.classList.add('dsSC__item-close');
                            el.appendChild(close);
                            close.addEventListener('click', function (ev) {
                              ev.preventDefault();
                              ev.target.parentElement.style.display = 'none';
                            });
                            el.onmouseover = function (ev) {
                              var target = document.querySelector('.'.concat(ev.target.getAttribute('dsSCId')));
                              target && target.classList.add('dsSC__target');
                            };
                            el.onmouseout = function (ev) {
                              var target = document.querySelector('.'.concat(ev.target.getAttribute('dsSCId')));
                              target && target.classList.remove('dsSC__target');
                            };
                            dsSC.appendChild(el);
                            nextElShouldBeMarked = false;
                            found.push({
                              name: foundName,
                              id: foundId,
                              top: childTopPos,
                            });
                          }
                          outputComments(child);
                          break;

                        // if the node is a comment node, output its value
                        case Node.COMMENT_NODE:
                          checkForId(child);
                          break;
                      }

                      // move to the next child node
                      child = child.nextSibling;
                    }
                  };
                  var init = function init() {
                    reset();
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(function () {
                      return outputComments(document.body);
                    }, 200);
                  };
                  addStyle();
                  getSitecoreUrl();
                  init();
                  window.onresize = function () {
                    return init();
                  };
                  window.onscroll = function () {
                    return init();
                  };
                },
              });
            }
          );
        };
        function setupShowComponents() {
          var showComponentsCta = document.querySelector('#showSitecoreComponents');
          handleEnableCta(showComponentsCta);
          showComponentsCta.addEventListener('click', function () {
            handleShowComponents();
          });
        }

        /***/
      },

    /***/ './src/popup/style.scss':
      /*!******************************!*\
  !*** ./src/popup/style.scss ***!
  \******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!****************************!*\
  !*** ./src/popup/popup.js ***!
  \****************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./style.scss */ './src/popup/style.scss'
    );
    /* harmony import */ var _CurrentVersion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../CurrentVersion */ './src/CurrentVersion.js'
    );
    /* harmony import */ var _OpenSitecore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../OpenSitecore */ './src/OpenSitecore.js'
    );
    /* harmony import */ var _OpenPageInExperienceEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../OpenPageInExperienceEditor */ './src/OpenPageInExperienceEditor.js'
    );
    /* harmony import */ var _OpenPageInSitecore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../OpenPageInSitecore */ './src/OpenPageInSitecore.js'
    );
    /* harmony import */ var _ShowComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../ShowComponents */ './src/ShowComponents.js'
    );
    /* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Settings */ './src/Settings.js'
    );

    // import { jiraMakeBranch } from '../JiraMakeBranch';

    (0, _CurrentVersion__WEBPACK_IMPORTED_MODULE_1__.updateVersionButton)();
    // jiraMakeBranch();
    (0, _OpenSitecore__WEBPACK_IMPORTED_MODULE_2__.setupOpenSitecore)();
    (0, _OpenPageInExperienceEditor__WEBPACK_IMPORTED_MODULE_3__.setupOpenPageInExperienceEditor)();
    (0, _OpenPageInSitecore__WEBPACK_IMPORTED_MODULE_4__.setupOpenPageInSitecore)();
    (0, _ShowComponents__WEBPACK_IMPORTED_MODULE_5__.setupShowComponents)();
    (0, _Settings__WEBPACK_IMPORTED_MODULE_6__.setupSettings)();
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNwQyxJQUFNQyxpQkFBaUIsR0FBRzVJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHlCQUF5QixDQUFDO0VBQzNFWSxlQUFlLENBQUMrSCxpQkFBaUIsQ0FBQztFQUVsQ0EsaUJBQWlCLENBQUNySSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNoRHNFLG9CQUFvQixDQUFDLENBQUM7RUFDeEIsQ0FBQyxDQUFDO0FBQ0o7Ozs7Ozs7Ozs7O0FDL1FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05zQjtBQUNrQztBQUN4RDtBQUNvRDtBQUM0QjtBQUNoQjtBQUNSO0FBQ1o7QUFFNUN6RixvRUFBbUIsQ0FBQyxDQUFDO0FBQ3JCO0FBQ0F1RCxnRUFBaUIsQ0FBQyxDQUFDO0FBQ25CSCw0RkFBK0IsQ0FBQyxDQUFDO0FBQ2pDRSw0RUFBdUIsQ0FBQyxDQUFDO0FBQ3pCaUcsb0VBQW1CLENBQUMsQ0FBQztBQUNyQjlFLHdEQUFhLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9DaHJvbWVUb29scy5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL0N1cnJlbnRWZXJzaW9uLmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvT3BlblBhZ2VJbkV4cGVyaWVuY2VFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9PcGVuUGFnZUluU2l0ZWNvcmUuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9PcGVuU2l0ZWNvcmUuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL1Nob3dDb21wb25lbnRzLmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvc3R5bGUuc2Nzcz8wNjQyIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3BvcHVwL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50VGFiKCkge1xuICBsZXQgcXVlcnlPcHRpb25zID0geyBhY3RpdmU6IHRydWUsIGxhc3RGb2N1c2VkV2luZG93OiB0cnVlIH07XG4gIC8vIGB0YWJgIHdpbGwgZWl0aGVyIGJlIGEgYHRhYnMuVGFiYCBpbnN0YW5jZSBvciBgdW5kZWZpbmVkYC5cbiAgbGV0IFt0YWJdID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkocXVlcnlPcHRpb25zKTtcbiAgcmV0dXJuIHRhYjtcbn1cbiIsImNvbnN0IGlzVmVyc2lvbkxvd2VyID0gKHVzZXJWZXJzaW9uLCBuZXdWZXJzaW9uKSA9PiB7XG4gIGNvbnN0IHVzZXJQYXJ0cyA9IHVzZXJWZXJzaW9uLnNwbGl0KCcuJykubWFwKE51bWJlcik7XG4gIGNvbnN0IG5ld1BhcnRzID0gbmV3VmVyc2lvbi5zcGxpdCgnLicpLm1hcChOdW1iZXIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5tYXgodXNlclBhcnRzLmxlbmd0aCwgbmV3UGFydHMubGVuZ3RoKTsgaSsrKSB7XG4gICAgY29uc3QgdXNlclBhcnQgPSB1c2VyUGFydHNbaV0gfHwgMDtcbiAgICBjb25zdCBuZXdQYXJ0ID0gbmV3UGFydHNbaV0gfHwgMDtcblxuICAgIGlmICh1c2VyUGFydCA8IG5ld1BhcnQpIHJldHVybiB0cnVlO1xuICAgIGlmICh1c2VyUGFydCA+IG5ld1BhcnQpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBnZXRHaXRodWJMYXRlc3RSZWxlYXNlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBnaXRIdWJBcGlVcmwgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy90ZW5uaXNmYXIvRFMtQ2hyb21lLVVkdmlkZWxzZS9yZWxlYXNlcyc7XG4gIGNvbnN0IGdpdEh1YlJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2l0SHViQXBpVXJsKTtcbiAgY29uc3QgcmVsZWFzZXMgPSBhd2FpdCBnaXRIdWJSZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiByZWxlYXNlc1swXTtcbn07XG5cbmNvbnN0IGdldExvY2FsVmVyc2lvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbG9jYWxEYXRhVXJsID0gJy9tYW5pZmVzdC5qc29uJztcbiAgY29uc3QgbG9jYWxEYXRhUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsb2NhbERhdGFVcmwpO1xuICBjb25zdCBsb2NhbERhdGEgPSBhd2FpdCBsb2NhbERhdGFSZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBsb2NhbERhdGEudmVyc2lvbjtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVWZXJzaW9uQnV0dG9uKCkge1xuICBjb25zdCB1cGRhdGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlU3RhdHVzJyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBnaXRodWJMYXRlc3RSZWxlYXNlID0gYXdhaXQgZ2V0R2l0aHViTGF0ZXN0UmVsZWFzZSgpO1xuICAgIGNvbnN0IGdpdGh1YlZlcnNpb24gPSBnaXRodWJMYXRlc3RSZWxlYXNlPy50YWdfbmFtZT8ucmVwbGFjZSgndicsICcnKTtcbiAgICBjb25zdCBsb2NhbFZlcnNpb24gPSBhd2FpdCBnZXRMb2NhbFZlcnNpb24oKTtcbiAgICBsZXQgdXJsO1xuICAgIGxldCBtZXNzYWdlO1xuXG4gICAgaWYgKGlzVmVyc2lvbkxvd2VyKGxvY2FsVmVyc2lvbiwgZ2l0aHViVmVyc2lvbikpIHtcbiAgICAgIHVybCA9IGdpdGh1YkxhdGVzdFJlbGVhc2UuaHRtbF91cmw7XG4gICAgICBtZXNzYWdlID0gYE9wZGF0ZXIgdGlsIHYuICR7Z2l0aHViVmVyc2lvbn0gKGR1IGhhciAke2xvY2FsVmVyc2lvbn0pYDtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS90ZW5uaXNmYXIvRFMtQ2hyb21lLVVkdmlkZWxzZS9yZWxlYXNlcyc7XG4gICAgICBtZXNzYWdlID0gYFZlcnNpb24gJHtsb2NhbFZlcnNpb259YDtcbiAgICB9XG4gICAgdXBkYXRlRGl2LmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gICAgdXBkYXRlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gd2luZG93Lm9wZW4odXJsKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB1cGRhdGVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuIiwiYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFRhYigpIHtcbiAgbGV0IHF1ZXJ5T3B0aW9ucyA9IHsgYWN0aXZlOiB0cnVlLCBsYXN0Rm9jdXNlZFdpbmRvdzogdHJ1ZSB9O1xuICAvLyBgdGFiYCB3aWxsIGVpdGhlciBiZSBhIGB0YWJzLlRhYmAgaW5zdGFuY2Ugb3IgYHVuZGVmaW5lZGAuXG4gIGxldCBbdGFiXSA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHF1ZXJ5T3B0aW9ucyk7XG4gIHJldHVybiB0YWI7XG59XG5cbmNvbnN0IGhhbmRsZUVuYWJsZUN0YSA9IGFzeW5jIChjdGEpID0+IHtcbiAgY29uc3QgdGFiID0gYXdhaXQgZ2V0Q3VycmVudFRhYigpO1xuXG4gIGlmICh0YWI/LnVybD8uaW5jbHVkZXMoJ2RhbnNrZXNwaWwuZGsnKSAmJiAhdGFiPy51cmw/LmluY2x1ZGVzKCcvc2l0ZWNvcmUvJykpIHtcbiAgICBjdGEucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVPcGVuUGFnZUluRXhwZXJpZW5jZUVkaXRvciA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdGFiID0gYXdhaXQgZ2V0Q3VycmVudFRhYigpO1xuXG4gIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xuICAgICAgbGV0IHNpdGVjb3JlSWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwYWdlX2lkJyk7XG4gICAgICBsZXQgbG8gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgICAgbGV0IGNsID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3Q7XG4gICAgICBsZXQgaXNEbG8gPSBjbC5jb250YWlucygnZGxvJyk7XG4gICAgICBsZXQgaXNEbGkgPSBjbC5jb250YWlucygnZGxpJyk7XG4gICAgICBsZXQgcmVnID0gaXNEbGkgPyAnZGxpJyA6ICdkbG8nO1xuXG4gICAgICBpZiAobG8uaW5jbHVkZXMoJ3Rvd24nKSkgbG8gPSBsby5yZXBsYWNlKCcuZGFuJywgJ2VkaXQnICsgcmVnICsgJy5kYW4nKTtcbiAgICAgIGlmIChsby5pbmNsdWRlcygnLy9kYScpKSBsbyA9IGxvLnJlcGxhY2UoJy8vZGFuJywgJy8vZWRpdCcgKyByZWcgKyAnLmRhbicpO1xuXG4gICAgICBsbyArPSAnLz9zY19tb2RlPWVkaXQnO1xuXG4gICAgICB3aW5kb3cub3BlbihgJHtsb30mc2NfaXRlbWlkPSR7c2l0ZWNvcmVJZH1gLCAnX2JsYW5rJyk7XG4gICAgfSxcbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBPcGVuUGFnZUluRXhwZXJpZW5jZUVkaXRvcigpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BlbkluRXhwZXJpZW5jZUVkaXRvcicpO1xuICAgIGhhbmRsZUVuYWJsZUN0YShjdGEpO1xuXG4gICAgY3RhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaGFuZGxlT3BlblBhZ2VJbkV4cGVyaWVuY2VFZGl0b3IoKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50VGFiKCkge1xuICBsZXQgcXVlcnlPcHRpb25zID0geyBhY3RpdmU6IHRydWUsIGxhc3RGb2N1c2VkV2luZG93OiB0cnVlIH07XG4gIC8vIGB0YWJgIHdpbGwgZWl0aGVyIGJlIGEgYHRhYnMuVGFiYCBpbnN0YW5jZSBvciBgdW5kZWZpbmVkYC5cbiAgbGV0IFt0YWJdID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkocXVlcnlPcHRpb25zKTtcbiAgcmV0dXJuIHRhYjtcbn1cblxuY29uc3QgaGFuZGxlRW5hYmxlQ3RhID0gYXN5bmMgKGN0YSkgPT4ge1xuICBjb25zdCB0YWIgPSBhd2FpdCBnZXRDdXJyZW50VGFiKCk7XG5cbiAgaWYgKHRhYj8udXJsPy5pbmNsdWRlcygnZGFuc2tlc3BpbC5kaycpICYmICF0YWI/LnVybD8uaW5jbHVkZXMoJy9zaXRlY29yZS8nKSkge1xuICAgIGN0YS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZU9wZW5QYWdlSW5TaXRlY29yZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdGFiID0gYXdhaXQgZ2V0Q3VycmVudFRhYigpO1xuXG4gIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xuICAgICAgbGV0IHNpdGVjb3JlSWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwYWdlX2lkJyk7XG4gICAgICBsZXQgbG8gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgICAgbGV0IGNsID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3Q7XG4gICAgICBsZXQgaXNEbG8gPSBjbC5jb250YWlucygnZGxvJyk7XG4gICAgICBsZXQgaXNEbGkgPSBjbC5jb250YWlucygnZGxpJyk7XG4gICAgICBsZXQgcmVnID0gaXNEbGkgPyAnZGxpJyA6ICdkbG8nO1xuXG4gICAgICBpZiAobG8uaW5jbHVkZXMoJ3Rvd24nKSkgbG8gPSBsby5yZXBsYWNlKCcuZGFuJywgJ2VkaXQnICsgcmVnICsgJy5kYW4nKTtcbiAgICAgIGlmIChsby5pbmNsdWRlcygnLy9kYScpKSBsbyA9IGxvLnJlcGxhY2UoJy8vZGFuJywgJy8vZWRpdCcgKyByZWcgKyAnLmRhbicpO1xuXG4gICAgICBsbyArPSAnL3NpdGVjb3JlL3NoZWxsL0FwcGxpY2F0aW9ucy9Db250ZW50JTIwRWRpdG9yLmFzcHg/c2NfYnc9MSc7XG5cbiAgICAgIHdpbmRvdy5vcGVuKGAke2xvfSZmbz0ke3NpdGVjb3JlSWR9YCwgJ19ibGFuaycpO1xuICAgIH0sXG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwT3BlblBhZ2VJblNpdGVjb3JlKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGN0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuSW5TaXRlY29yZScpO1xuICAgIGhhbmRsZUVuYWJsZUN0YShjdGEpO1xuXG4gICAgY3RhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaGFuZGxlT3BlblBhZ2VJblNpdGVjb3JlKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldHVwT3BlblNpdGVjb3JlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BlblNpdGVjb3JlUHJvZERsaScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvdy5vcGVuKFxuICAgICAgJ2h0dHBzOi8vZWRpdGRsaS5kYW5za2VzcGlsLmRrL3NpdGVjb3JlL3NoZWxsL0FwcGxpY2F0aW9ucy9Db250ZW50JTIwRWRpdG9yLmFzcHg/c2NfYnc9MSZmbz0vc2l0ZWNvcmUvY29udGVudC9EYW5za2VTcGlsL2hvbWUnXG4gICAgKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW5TaXRlY29yZVByb2REbG8nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cub3BlbihcbiAgICAgICdodHRwczovL2VkaXRkbG8uZGFuc2tlc3BpbC5kay9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCUyMEVkaXRvci5hc3B4P3NjX2J3PTEmZm89L3NpdGVjb3JlL2NvbnRlbnQvRGFuc2tlU3BpbC9ob21lJ1xuICAgICk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuU2l0ZWNvcmVUb3duMjFEbGknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cub3BlbihcbiAgICAgICdodHRwczovL3Rvd24yMWVkaXRkbGkuZGFuc2tlc3BpbC5kay9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCUyMEVkaXRvci5hc3B4P3NjX2J3PTEmZm89L3NpdGVjb3JlL2NvbnRlbnQvRGFuc2tlU3BpbC9ob21lJ1xuICAgICk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuU2l0ZWNvcmVUb3duMjFEbG8nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cub3BlbihcbiAgICAgICdodHRwczovL3Rvd24yMWVkaXRkbG8uZGFuc2tlc3BpbC5kay9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCUyMEVkaXRvci5hc3B4P3NjX2J3PTEmZm89L3NpdGVjb3JlL2NvbnRlbnQvRGFuc2tlU3BpbC9ob21lJ1xuICAgICk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuU2l0ZWNvcmVEZXYnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cub3BlbihcbiAgICAgICdodHRwczovL3dlYi5kZXZlbG9wLmRhbnNrZXNwaWwuZGsvc2l0ZWNvcmUvc2hlbGwvQXBwbGljYXRpb25zL0NvbnRlbnQlMjBFZGl0b3IuYXNweD9zY19idz0xJmZvPS9zaXRlY29yZS9jb250ZW50L0RhbnNrZVNwaWwvaG9tZSdcbiAgICApO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BlblNpdGVjb3JlVHJ1bmsnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cub3BlbihcbiAgICAgICdodHRwczovL3dlYi50cnVuay5kYW5za2VzcGlsLmRrL3NpdGVjb3JlL3NoZWxsL0FwcGxpY2F0aW9ucy9Db250ZW50JTIwRWRpdG9yLmFzcHg/c2NfYnc9MSZmbz0vc2l0ZWNvcmUvY29udGVudC9EYW5za2VTcGlsL2hvbWUnXG4gICAgKTtcbiAgfSk7XG59XG4iLCJjb25zdCBoYW5kbGVEZWxldGUgPSAoZWxOYW1lLCBzaG93U2V0dGluZ3MsIHNob3dCdXR0b25zKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxOYW1lKTtcblxuICBpZiAoIWVsKSByZXR1cm47XG5cbiAgaWYgKCFzaG93U2V0dGluZ3MpIHtcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gc2hvd0J1dHRvbnNbZWxOYW1lXSA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHNob3dTZXR0aW5ncykge1xuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWRhbmdlcicsICFzaG93QnV0dG9uc1tlbE5hbWVdKTtcblxuICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5kZWxldGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBzaG93QnV0dG9uc1tlbE5hbWVdID0gIXNob3dCdXR0b25zW2VsTmFtZV07XG4gICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IHNob3dCdXR0b25zIH0pO1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZUhpZGVCbG9jayA9IChlbE5hbWVzLCBibG9ja0VsLCBzaG93U2V0dGluZ3MsIHNob3dCdXR0b25zKSA9PiB7XG4gIGlmIChzaG93U2V0dGluZ3MpIHJldHVybjtcbiAgbGV0IGhpZGVCbG9jayA9IHRydWU7XG5cbiAgZWxOYW1lcy5mb3JFYWNoKChlbE5hbWUpID0+IHtcbiAgICBpZiAoc2hvd0J1dHRvbnNbZWxOYW1lXSkgaGlkZUJsb2NrID0gZmFsc2U7XG4gIH0pO1xuXG4gIGlmIChoaWRlQmxvY2spIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChibG9ja0VsKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgcmV0dXJuIGhpZGVCbG9jaztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFNldHRpbmdzKCkge1xuICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnc2hvd1NldHRpbmdzJywgKHsgc2hvd1NldHRpbmdzIH0pID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlzLWFuY2VzdG9yJyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LXNldHRpbmdzJywgc2hvd1NldHRpbmdzKTtcblxuICAgIGlmIChzaG93U2V0dGluZ3MpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b25bZGlzYWJsZWRdJyk7XG4gICAgICBkaXNhYmxlZEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3NDdGEnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHNob3dTZXR0aW5ncyA9ICFzaG93U2V0dGluZ3M7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IHNob3dTZXR0aW5ncyB9KTtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ3Nob3dCdXR0b25zJywgKHsgc2hvd0J1dHRvbnMgfSkgPT4ge1xuICAgICAgY29uc3QgZGFuc2tlU3BpbEJ1dHRvbnMgPSBbJ3Nob3dTaXRlY29yZUNvbXBvbmVudHMnLCAnb3BlbkluU2l0ZWNvcmUnLCAnb3BlbkluRXhwZXJpZW5jZUVkaXRvciddO1xuICAgICAgZGFuc2tlU3BpbEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBoYW5kbGVEZWxldGUoYnV0dG9uLCBzaG93U2V0dGluZ3MsIHNob3dCdXR0b25zKSk7XG4gICAgICBjb25zdCBoaWRlRGFuc2tlU3BpbEJ1dHRvbnMgPSBoYW5kbGVIaWRlQmxvY2soZGFuc2tlU3BpbEJ1dHRvbnMsICdkYW5za2VTcGlsQnV0dG9ucycsIHNob3dTZXR0aW5ncywgc2hvd0J1dHRvbnMpO1xuXG4gICAgICBjb25zdCBqaXJhQnV0dG9ucyA9IFtcbiAgICAgICAgJ29wZW5NeUppcmEnLFxuICAgICAgICAnb3BlbkppcmFCb2FyZERsaScsXG4gICAgICAgICdvcGVuSmlyYUJvYXJkRGxvJyxcbiAgICAgICAgJ29wZW5KaXJhQm9hcmRGT1InLFxuICAgICAgICAnbWFrZUppcmFEbGknLFxuICAgICAgICAnbWFrZUppcmFEbG8nLFxuICAgICAgICAnbWFrZUppcmFGT1InLFxuICAgICAgICAnbWFrZUppcmEnLFxuICAgICAgXTtcbiAgICAgIGppcmFCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gaGFuZGxlRGVsZXRlKGJ1dHRvbiwgc2hvd1NldHRpbmdzLCBzaG93QnV0dG9ucykpO1xuICAgICAgY29uc3QgaGlkZUppcmFCdXR0b25zID0gaGFuZGxlSGlkZUJsb2NrKGppcmFCdXR0b25zLCAnamlyYUJ1dHRvbnMnLCBzaG93U2V0dGluZ3MsIHNob3dCdXR0b25zKTtcblxuICAgICAgY29uc3Qgc2l0ZWNvcmVCdXR0b25zID0gW1xuICAgICAgICAnb3BlblNpdGVjb3JlUHJvZERsaScsXG4gICAgICAgICdvcGVuU2l0ZWNvcmVQcm9kRGxvJyxcbiAgICAgICAgJ29wZW5TaXRlY29yZVRvd24yMURsaScsXG4gICAgICAgICdvcGVuU2l0ZWNvcmVUb3duMjFEbG8nLFxuICAgICAgICAnb3BlblNpdGVjb3JlRGV2JyxcbiAgICAgICAgJ29wZW5TaXRlY29yZVRydW5rJyxcbiAgICAgIF07XG4gICAgICBzaXRlY29yZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBoYW5kbGVEZWxldGUoYnV0dG9uLCBzaG93U2V0dGluZ3MsIHNob3dCdXR0b25zKSk7XG4gICAgICBjb25zdCBoaWRlU2l0ZWNvcmVCdXR0b25zID0gaGFuZGxlSGlkZUJsb2NrKHNpdGVjb3JlQnV0dG9ucywgJ3NpdGVjb3JlQnV0dG9ucycsIHNob3dTZXR0aW5ncywgc2hvd0J1dHRvbnMpO1xuXG4gICAgICBjb25zdCBoaWRkZW5CbG9ja3MgPSBbaGlkZURhbnNrZVNwaWxCdXR0b25zLCBoaWRlSmlyYUJ1dHRvbnMsIGhpZGVTaXRlY29yZUJ1dHRvbnNdLmZpbHRlcihcbiAgICAgICAgKHZhbHVlKSA9PiB2YWx1ZSA9PT0gdHJ1ZVxuICAgICAgKS5sZW5ndGg7XG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICAgIGlmIChoaWRkZW5CbG9ja3MgPT09IDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gJzc2OXB4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICczMDBweCc7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnN0IGRlYnVnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlYnVnJyk7XG4gICAgICAvLyBkZWJ1Zy5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShoaWRkZW5CbG9ja3MsIG51bGwsIDIpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGdldEN1cnJlbnRUYWIgfSBmcm9tICcuL0Nocm9tZVRvb2xzJztcblxuY29uc3QgaGFuZGxlRW5hYmxlQ3RhID0gYXN5bmMgKGN0YSkgPT4ge1xuICBjb25zdCB0YWIgPSBhd2FpdCBnZXRDdXJyZW50VGFiKCk7XG5cbiAgaWYgKHRhYj8udXJsPy5pbmNsdWRlcygnZGFuc2tlc3BpbC5kaycpICYmICF0YWI/LnVybD8uaW5jbHVkZXMoJy9zaXRlY29yZS8nKSkge1xuICAgIGN0YS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZVNob3dDb21wb25lbnRzID0gKCkgPT4ge1xuICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuICAgIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYnNbMF0uaWQgfSxcbiAgICAgIGZ1bmN0aW9uOiAoKSA9PiB7XG4gICAgICAgIGxldCBkc1NDO1xuICAgICAgICBsZXQgbmV4dEVsU2hvdWxkQmVNYXJrZWQ7XG4gICAgICAgIGxldCBmb3VuZE5hbWU7XG4gICAgICAgIGxldCBmb3VuZElkO1xuICAgICAgICBsZXQgZm91bmQgPSBbXTtcbiAgICAgICAgbGV0IHNpdGVjb3JlVXJsO1xuICAgICAgICBsZXQgcmVzaXplVGltZW91dDtcbiAgICAgICAgbGV0IGRzU0NFeGlzdDtcblxuICAgICAgICAvLyB0b2dnbGVcbiAgICAgICAgZHNTQ0V4aXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RzU0MnKTtcbiAgICAgICAgaWYgKCEhZHNTQ0V4aXN0KSB7XG4gICAgICAgICAgZHNTQ0V4aXN0LnJlbW92ZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZFN0eWxlID0gKCkgPT4ge1xuICAgICAgICAgIGxldCBzdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkc1NDU3R5bGUnKTtcbiAgICAgICAgICBpZiAoISFzdHlsZSkgc3R5bGUucmVtb3ZlKCk7XG4gICAgICAgICAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgIHN0eWxlLmlkID0gJ2RzU0NTdHlsZSc7XG4gICAgICAgICAgc3R5bGUuaW5uZXJUZXh0ID0gYFxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANTAwJmRpc3BsYXk9YmxvY2snKTtcbiAgICAgICAgXG4gICAgICAgIC5kc1NDX19pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDAwMDAwO1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ09wZW4gU2FucycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDAgOHB4IDAgMTBweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzU4NTg1ODtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZHNTQ19faXRlbS1jbG9zZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgICAgICAgIG1hcmdpbjogMCAtOHB4IDAgMTBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRzU0NfX2l0ZW0tY2xvc2U6OmJlZm9yZSxcbiAgICAgICAgLmRzU0NfX2l0ZW0tY2xvc2U6OmFmdGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxNHB4O1xuICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kc1NDX19pdGVtLWNsb3NlOjphZnRlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRzU0NfX2l0ZW0tY2xvc2U6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRzU0NfX2l0ZW0gaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kc1NDX190YXJnZXQge1xuICAgICAgICAgIGZpbHRlcjogYmx1cigycHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kc1NDX190b2dnbGUge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDVweDtcbiAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwMDAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRzU0NfX3RvZ2dsZTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRzU0NfX3RvZ2dsZSBpbWcge1xuICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRzU0MtLWhpZGRlbiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBgLnJlcGxhY2UoL1xcbi9nLCAnJyk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgICAgZHNTQ0V4aXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RzU0MnKTtcbiAgICAgICAgICBpZiAoISFkc1NDRXhpc3QpIGRzU0NFeGlzdC5yZW1vdmUoKTtcbiAgICAgICAgICBkc1NDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZHNTQy5pZCA9ICdkc1NDJztcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBnZXRTaXRlY29yZVVybCA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBkbG8gPSBbXG4gICAgICAgICAgICAnYWx0LWVsbGVyLWludGV0JyxcbiAgICAgICAgICAgICdldXJvamFja3BvdCcsXG4gICAgICAgICAgICAna2VubycsXG4gICAgICAgICAgICAnbG90dG8nLFxuICAgICAgICAgICAgJ3Zpa2luZ2xvdHRvJyxcbiAgICAgICAgICAgICdwbHVzLWFib25uZW1lbnQnLFxuICAgICAgICAgICAgJ3F1aWNrJyxcbiAgICAgICAgICAgICdzcGlsLXNhbW1lbicsXG4gICAgICAgICAgICAncm9lZC1rb250bycsXG4gICAgICAgICAgXTtcbiAgICAgICAgICBjb25zdCBob3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3RcbiAgICAgICAgICAgIC5yZXBsYWNlKC9kYW5za2VzcGlsXFwuZGsvLCAnJylcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwuJC8sICcnKTtcbiAgICAgICAgICBjb25zdCByZWdpb24gPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKS5yZXBsYWNlKC9cXC8uKiQvLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBsZXQgZGxpT3JEbG8gPSBkbG8uaW5kZXhPZihyZWdpb24pID4gLTEgPyAnZWRpdGRsbycgOiAnZWRpdGRsaSc7XG4gICAgICAgICAgZGxpT3JEbG8gPSBob3N0ID09PSAnd2ViLmRldmVsb3AnIHx8IGhvc3QgPT09ICd3ZWIudHJ1bmsnID8gJycgOiBkbGlPckRsbztcbiAgICAgICAgICBzaXRlY29yZVVybCA9IGBodHRwczovLyR7aG9zdH0ke2RsaU9yRGxvfS5kYW5za2VzcGlsLmRrL3NpdGVjb3JlL3NoZWxsL0FwcGxpY2F0aW9ucy9Db250ZW50JTIwRWRpdG9yLmFzcHg/c2NfYnc9MSZmbz1gO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNoZWNrRm9ySWQgPSAoY2hpbGQpID0+IHtcbiAgICAgICAgICBjb25zdCBub2RlVmFsdWUgPSBjaGlsZC5ub2RlVmFsdWU7XG4gICAgICAgICAgaWYgKG5vZGVWYWx1ZS5tYXRjaCgvXlteXFwvXS4qKHsuKn0pLykpIHtcbiAgICAgICAgICAgIG5leHRFbFNob3VsZEJlTWFya2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvdW5kTmFtZSA9IG5vZGVWYWx1ZS5yZXBsYWNlKC97Lip9LywgJycpLnRyaW0oKTtcbiAgICAgICAgICAgIGZvdW5kSWQgPSBub2RlVmFsdWUubWF0Y2goL3suKn0vKVswXTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb3V0cHV0Q29tbWVudHMgPSAobm9kZSkgPT4ge1xuICAgICAgICAgIC8vIGluaXRpYWxpc2UgdGhlIGNoaWxkIG5vZGVcbiAgICAgICAgICBsZXQgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgY29uc3QgcHJldlBvc2l0aW9ucyA9IFtdO1xuXG4gICAgICAgICAgLy8gbG9vcCB3aGlsZSB0aGUgY2hpbGQgbm9kZSBleGlzdHNcbiAgICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZCA9PT0gZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgLy8gZm91bmQubWFwKChpdGVtKSA9PiBjb25zb2xlLmVycm9yKGl0ZW0ubmFtZSwgcGFyc2VJbnQoaXRlbS50b3ApKSlcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkc1NDKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIHRoZSBub2RlXG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgIC8vIGlmIHRoZSBub2RlIGlzIGFuIGVsZW1lbnQgbm9kZSwgcmVjdXJzZSBpbnRvIGl0XG4gICAgICAgICAgICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6XG4gICAgICAgICAgICAgICAgaWYgKG5leHRFbFNob3VsZEJlTWFya2VkKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgY2hpbGRUb3BQb3MgPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyAxMCArIHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkTGVmdFBvcyA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyAxMCArIHdpbmRvdy5zY3JvbGxYO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoY2hpbGRMZWZ0UG9zIDwgMTApIGNoaWxkTGVmdFBvcyA9IDEwO1xuXG4gICAgICAgICAgICAgICAgICBsZXQgc3RyaXBwZWRJZCA9ICdkc1NDSWQnICsgZm91bmRJZC5yZXBsYWNlKCd7JywgJycpLnJlcGxhY2UoJ30nLCAnJykudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICAgICAgZWwuaHJlZiA9IGAke3NpdGVjb3JlVXJsfSR7Zm91bmRJZH1gO1xuICAgICAgICAgICAgICAgICAgZWwudGFyZ2V0ID0gJ2RzU2l0ZWNvcmUnO1xuICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZHNTQ19faXRlbScpO1xuICAgICAgICAgICAgICAgICAgZWwuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZHNTQ0lkJywgc3RyaXBwZWRJZCk7XG4gICAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKHN0cmlwcGVkSWQpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAocHJldlBvc2l0aW9ucy5pbmNsdWRlcyhgJHtjaGlsZFRvcFBvc30sJHtjaGlsZExlZnRQb3N9YCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRUb3BQb3MgKz0gMTg7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGVmdFBvcyArPSAxODtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHByZXZQb3NpdGlvbnMucHVzaChgJHtjaGlsZFRvcFBvc30sJHtjaGlsZExlZnRQb3N9YCk7XG5cbiAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnRvcCA9IGNoaWxkVG9wUG9zICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmxlZnQgPSBjaGlsZExlZnRQb3MgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gYCR7Zm91bmROYW1lXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9WaWV3JC8sICcnKVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoLyg/PVtBLVpdKS8pXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcgJyl9YDtcblxuICAgICAgICAgICAgICAgICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnZHNTQ19faXRlbS1jbG9zZScpO1xuICAgICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICAgICAgICAgICAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBlbC5vbm1vdXNlb3ZlciA9IChldikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtldi50YXJnZXQuZ2V0QXR0cmlidXRlKCdkc1NDSWQnKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ICYmIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdkc1NDX190YXJnZXQnKTtcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBlbC5vbm1vdXNlb3V0ID0gKGV2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2V2LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RzU0NJZCcpfWApO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgJiYgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RzU0NfX3RhcmdldCcpO1xuICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgZHNTQy5hcHBlbmRDaGlsZChlbCk7XG5cbiAgICAgICAgICAgICAgICAgIG5leHRFbFNob3VsZEJlTWFya2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBmb3VuZC5wdXNoKHsgbmFtZTogZm91bmROYW1lLCBpZDogZm91bmRJZCwgdG9wOiBjaGlsZFRvcFBvcyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3V0cHV0Q29tbWVudHMoY2hpbGQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIC8vIGlmIHRoZSBub2RlIGlzIGEgY29tbWVudCBub2RlLCBvdXRwdXQgaXRzIHZhbHVlXG4gICAgICAgICAgICAgIGNhc2UgTm9kZS5DT01NRU5UX05PREU6XG4gICAgICAgICAgICAgICAgY2hlY2tGb3JJZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG1vdmUgdG8gdGhlIG5leHQgY2hpbGQgbm9kZVxuICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBvdXRwdXRDb21tZW50cyhkb2N1bWVudC5ib2R5KSwgMjAwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBhZGRTdHlsZSgpO1xuICAgICAgICBnZXRTaXRlY29yZVVybCgpO1xuXG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4gaW5pdCgpO1xuICAgICAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiBpbml0KCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFNob3dDb21wb25lbnRzKCkge1xuICBjb25zdCBzaG93Q29tcG9uZW50c0N0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93U2l0ZWNvcmVDb21wb25lbnRzJyk7XG4gIGhhbmRsZUVuYWJsZUN0YShzaG93Q29tcG9uZW50c0N0YSk7XG5cbiAgc2hvd0NvbXBvbmVudHNDdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaGFuZGxlU2hvd0NvbXBvbmVudHMoKTtcbiAgfSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCB7IHVwZGF0ZVZlcnNpb25CdXR0b24gfSBmcm9tICcuLi9DdXJyZW50VmVyc2lvbic7XG4vLyBpbXBvcnQgeyBqaXJhTWFrZUJyYW5jaCB9IGZyb20gJy4uL0ppcmFNYWtlQnJhbmNoJztcbmltcG9ydCB7IHNldHVwT3BlblNpdGVjb3JlIH0gZnJvbSAnLi4vT3BlblNpdGVjb3JlJztcbmltcG9ydCB7IHNldHVwT3BlblBhZ2VJbkV4cGVyaWVuY2VFZGl0b3IgfSBmcm9tICcuLi9PcGVuUGFnZUluRXhwZXJpZW5jZUVkaXRvcic7XG5pbXBvcnQgeyBzZXR1cE9wZW5QYWdlSW5TaXRlY29yZSB9IGZyb20gJy4uL09wZW5QYWdlSW5TaXRlY29yZSc7XG5pbXBvcnQgeyBzZXR1cFNob3dDb21wb25lbnRzIH0gZnJvbSAnLi4vU2hvd0NvbXBvbmVudHMnO1xuaW1wb3J0IHsgc2V0dXBTZXR0aW5ncyB9IGZyb20gJy4uL1NldHRpbmdzJztcblxudXBkYXRlVmVyc2lvbkJ1dHRvbigpO1xuLy8gamlyYU1ha2VCcmFuY2goKTtcbnNldHVwT3BlblNpdGVjb3JlKCk7XG5zZXR1cE9wZW5QYWdlSW5FeHBlcmllbmNlRWRpdG9yKCk7XG5zZXR1cE9wZW5QYWdlSW5TaXRlY29yZSgpO1xuc2V0dXBTaG93Q29tcG9uZW50cygpO1xuc2V0dXBTZXR0aW5ncygpO1xuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImFycjIiLCJpc0FycmF5IiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsImdldEN1cnJlbnRUYWIiLCJfZ2V0Q3VycmVudFRhYiIsIl9jYWxsZWUiLCJxdWVyeU9wdGlvbnMiLCJfeWllbGQkY2hyb21lJHRhYnMkcXUiLCJfeWllbGQkY2hyb21lJHRhYnMkcXUyIiwidGFiIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImFjdGl2ZSIsImxhc3RGb2N1c2VkV2luZG93IiwiY2hyb21lIiwidGFicyIsInF1ZXJ5IiwiaXNWZXJzaW9uTG93ZXIiLCJ1c2VyVmVyc2lvbiIsIm5ld1ZlcnNpb24iLCJ1c2VyUGFydHMiLCJzcGxpdCIsIm1hcCIsIk51bWJlciIsIm5ld1BhcnRzIiwiTWF0aCIsIm1heCIsInVzZXJQYXJ0IiwibmV3UGFydCIsImdldEdpdGh1YkxhdGVzdFJlbGVhc2UiLCJfcmVmIiwiZ2l0SHViQXBpVXJsIiwiZ2l0SHViUmVzcG9uc2UiLCJyZWxlYXNlcyIsImZldGNoIiwianNvbiIsImdldExvY2FsVmVyc2lvbiIsIl9yZWYyIiwiX2NhbGxlZTIiLCJsb2NhbERhdGFVcmwiLCJsb2NhbERhdGFSZXNwb25zZSIsImxvY2FsRGF0YSIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInZlcnNpb24iLCJ1cGRhdGVWZXJzaW9uQnV0dG9uIiwiX3VwZGF0ZVZlcnNpb25CdXR0b24iLCJfY2FsbGVlMyIsInVwZGF0ZURpdiIsIl9naXRodWJMYXRlc3RSZWxlYXNlJCIsImdpdGh1YkxhdGVzdFJlbGVhc2UiLCJnaXRodWJWZXJzaW9uIiwibG9jYWxWZXJzaW9uIiwidXJsIiwibWVzc2FnZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRhZ19uYW1lIiwicmVwbGFjZSIsImh0bWxfdXJsIiwiY29uY2F0IiwiaW5uZXJUZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsIm9wZW4iLCJ0MCIsInN0eWxlIiwiZGlzcGxheSIsImhhbmRsZUVuYWJsZUN0YSIsImN0YSIsIl90YWIkdXJsIiwiX3RhYiR1cmwyIiwiaW5jbHVkZXMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfeCIsImhhbmRsZU9wZW5QYWdlSW5FeHBlcmllbmNlRWRpdG9yIiwic2NyaXB0aW5nIiwiZXhlY3V0ZVNjcmlwdCIsInRhcmdldCIsInRhYklkIiwiaWQiLCJfZnVuY3Rpb24iLCJzaXRlY29yZUlkIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwibG8iLCJsb2NhdGlvbiIsIm9yaWdpbiIsImNsIiwiYm9keSIsImNsYXNzTGlzdCIsImlzRGxvIiwiY29udGFpbnMiLCJpc0RsaSIsInJlZyIsInNldHVwT3BlblBhZ2VJbkV4cGVyaWVuY2VFZGl0b3IiLCJoYW5kbGVPcGVuUGFnZUluU2l0ZWNvcmUiLCJzZXR1cE9wZW5QYWdlSW5TaXRlY29yZSIsInNldHVwT3BlblNpdGVjb3JlIiwiaGFuZGxlRGVsZXRlIiwiZWxOYW1lIiwic2hvd1NldHRpbmdzIiwic2hvd0J1dHRvbnMiLCJlbCIsImdldEVsZW1lbnRCeUlkIiwidG9nZ2xlIiwiZXYiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9yYWdlIiwic3luYyIsInNldCIsInJlbG9hZCIsImhhbmRsZUhpZGVCbG9jayIsImVsTmFtZXMiLCJibG9ja0VsIiwiaGlkZUJsb2NrIiwic2V0dXBTZXR0aW5ncyIsImdldCIsImNvbnRlbnQiLCJkaXNhYmxlZEJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uIiwiZGFuc2tlU3BpbEJ1dHRvbnMiLCJoaWRlRGFuc2tlU3BpbEJ1dHRvbnMiLCJqaXJhQnV0dG9ucyIsImhpZGVKaXJhQnV0dG9ucyIsInNpdGVjb3JlQnV0dG9ucyIsImhpZGVTaXRlY29yZUJ1dHRvbnMiLCJoaWRkZW5CbG9ja3MiLCJmaWx0ZXIiLCJjb250YWluZXIiLCJ3aWR0aCIsImhhbmRsZVNob3dDb21wb25lbnRzIiwiY3VycmVudFdpbmRvdyIsImRzU0MiLCJuZXh0RWxTaG91bGRCZU1hcmtlZCIsImZvdW5kTmFtZSIsImZvdW5kSWQiLCJmb3VuZCIsInNpdGVjb3JlVXJsIiwicmVzaXplVGltZW91dCIsImRzU0NFeGlzdCIsInJlbW92ZSIsImFkZFN0eWxlIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZ2V0U2l0ZWNvcmVVcmwiLCJkbG8iLCJob3N0IiwidG9Mb3dlckNhc2UiLCJyZWdpb24iLCJwYXRobmFtZSIsImRsaU9yRGxvIiwiaW5kZXhPZiIsImNoZWNrRm9ySWQiLCJjaGlsZCIsIm5vZGVWYWx1ZSIsIm1hdGNoIiwidHJpbSIsIm91dHB1dENvbW1lbnRzIiwibm9kZSIsImZpcnN0Q2hpbGQiLCJwcmV2UG9zaXRpb25zIiwibGFzdENoaWxkIiwibm9kZVR5cGUiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiY2hpbGRUb3BQb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxZIiwiY2hpbGRMZWZ0UG9zIiwibGVmdCIsInNjcm9sbFgiLCJzdHJpcHBlZElkIiwiaHJlZiIsImFkZCIsImRyYWdnYWJsZSIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImpvaW4iLCJjbG9zZSIsInByZXZlbnREZWZhdWx0IiwicGFyZW50RWxlbWVudCIsIm9ubW91c2VvdmVyIiwiZ2V0QXR0cmlidXRlIiwib25tb3VzZW91dCIsIkNPTU1FTlRfTk9ERSIsIm5leHRTaWJsaW5nIiwiaW5pdCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJvbnJlc2l6ZSIsIm9uc2Nyb2xsIiwic2V0dXBTaG93Q29tcG9uZW50cyIsInNob3dDb21wb25lbnRzQ3RhIl0sInNvdXJjZVJvb3QiOiIifQ==
