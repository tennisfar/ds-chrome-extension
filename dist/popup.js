/*! For license information please see popup.js.LICENSE.txt */
(() => {
  'use strict';
  function t(e) {
    return (
      (t =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      t(e)
    );
  }
  function e() {
    e = function () {
      return n;
    };
    var r,
      n = {},
      o = Object.prototype,
      i = o.hasOwnProperty,
      a =
        Object.defineProperty ||
        function (t, e, r) {
          t[e] = r.value;
        },
      c = 'function' == typeof Symbol ? Symbol : {},
      u = c.iterator || '@@iterator',
      l = c.asyncIterator || '@@asyncIterator',
      s = c.toStringTag || '@@toStringTag';
    function f(t, e, r) {
      return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
    }
    try {
      f({}, '');
    } catch (r) {
      f = function (t, e, r) {
        return (t[e] = r);
      };
    }
    function h(t, e, r, n) {
      var o = e && e.prototype instanceof w ? e : w,
        i = Object.create(o.prototype),
        c = new T(n || []);
      return a(i, '_invoke', { value: k(t, r, c) }), i;
    }
    function p(t, e, r) {
      try {
        return { type: 'normal', arg: t.call(e, r) };
      } catch (t) {
        return { type: 'throw', arg: t };
      }
    }
    n.wrap = h;
    var d = 'suspendedStart',
      y = 'suspendedYield',
      v = 'executing',
      m = 'completed',
      g = {};
    function w() {}
    function b() {}
    function x() {}
    var L = {};
    f(L, u, function () {
      return this;
    });
    var E = Object.getPrototypeOf,
      S = E && E(E(G([])));
    S && S !== o && i.call(S, u) && (L = S);
    var _ = (x.prototype = w.prototype = Object.create(L));
    function O(t) {
      ['next', 'throw', 'return'].forEach(function (e) {
        f(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function j(e, r) {
      function n(o, a, c, u) {
        var l = p(e[o], e, a);
        if ('throw' !== l.type) {
          var s = l.arg,
            f = s.value;
          return f && 'object' == t(f) && i.call(f, '__await')
            ? r.resolve(f.__await).then(
                function (t) {
                  n('next', t, c, u);
                },
                function (t) {
                  n('throw', t, c, u);
                }
              )
            : r.resolve(f).then(
                function (t) {
                  (s.value = t), c(s);
                },
                function (t) {
                  return n('throw', t, c, u);
                }
              );
        }
        u(l.arg);
      }
      var o;
      a(this, '_invoke', {
        value: function (t, e) {
          function i() {
            return new r(function (r, o) {
              n(t, e, r, o);
            });
          }
          return (o = o ? o.then(i, i) : i());
        },
      });
    }
    function k(t, e, n) {
      var o = d;
      return function (i, a) {
        if (o === v) throw new Error('Generator is already running');
        if (o === m) {
          if ('throw' === i) throw a;
          return { value: r, done: !0 };
        }
        for (n.method = i, n.arg = a; ; ) {
          var c = n.delegate;
          if (c) {
            var u = N(c, n);
            if (u) {
              if (u === g) continue;
              return u;
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg;
          else if ('throw' === n.method) {
            if (o === d) throw ((o = m), n.arg);
            n.dispatchException(n.arg);
          } else 'return' === n.method && n.abrupt('return', n.arg);
          o = v;
          var l = p(t, e, n);
          if ('normal' === l.type) {
            if (((o = n.done ? m : y), l.arg === g)) continue;
            return { value: l.arg, done: n.done };
          }
          'throw' === l.type && ((o = m), (n.method = 'throw'), (n.arg = l.arg));
        }
      };
    }
    function N(t, e) {
      var n = e.method,
        o = t.iterator[n];
      if (o === r)
        return (
          (e.delegate = null),
          ('throw' === n && t.iterator.return && ((e.method = 'return'), (e.arg = r), N(t, e), 'throw' === e.method)) ||
            ('return' !== n &&
              ((e.method = 'throw'), (e.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
          g
        );
      var i = p(o, t.iterator, e.arg);
      if ('throw' === i.type) return (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), g;
      var a = i.arg;
      return a
        ? a.done
          ? ((e[t.resultName] = a.value),
            (e.next = t.nextLoc),
            'return' !== e.method && ((e.method = 'next'), (e.arg = r)),
            (e.delegate = null),
            g)
          : a
        : ((e.method = 'throw'), (e.arg = new TypeError('iterator result is not an object')), (e.delegate = null), g);
    }
    function C(t) {
      var e = { tryLoc: t[0] };
      1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
    }
    function P(t) {
      var e = t.completion || {};
      (e.type = 'normal'), delete e.arg, (t.completion = e);
    }
    function T(t) {
      (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(C, this), this.reset(!0);
    }
    function G(e) {
      if (e || '' === e) {
        var n = e[u];
        if (n) return n.call(e);
        if ('function' == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            a = function t() {
              for (; ++o < e.length; ) if (i.call(e, o)) return (t.value = e[o]), (t.done = !1), t;
              return (t.value = r), (t.done = !0), t;
            };
          return (a.next = a);
        }
      }
      throw new TypeError(t(e) + ' is not iterable');
    }
    return (
      (b.prototype = x),
      a(_, 'constructor', { value: x, configurable: !0 }),
      a(x, 'constructor', { value: b, configurable: !0 }),
      (b.displayName = f(x, s, 'GeneratorFunction')),
      (n.isGeneratorFunction = function (t) {
        var e = 'function' == typeof t && t.constructor;
        return !!e && (e === b || 'GeneratorFunction' === (e.displayName || e.name));
      }),
      (n.mark = function (t) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : ((t.__proto__ = x), f(t, s, 'GeneratorFunction')),
          (t.prototype = Object.create(_)),
          t
        );
      }),
      (n.awrap = function (t) {
        return { __await: t };
      }),
      O(j.prototype),
      f(j.prototype, l, function () {
        return this;
      }),
      (n.AsyncIterator = j),
      (n.async = function (t, e, r, o, i) {
        void 0 === i && (i = Promise);
        var a = new j(h(t, e, r, o), i);
        return n.isGeneratorFunction(e)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
      }),
      O(_),
      f(_, s, 'Generator'),
      f(_, u, function () {
        return this;
      }),
      f(_, 'toString', function () {
        return '[object Generator]';
      }),
      (n.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return (
          r.reverse(),
          function t() {
            for (; r.length; ) {
              var n = r.pop();
              if (n in e) return (t.value = n), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (n.values = G),
      (T.prototype = {
        constructor: T,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = r),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = r),
            this.tryEntries.forEach(P),
            !t)
          )
            for (var e in this) 't' === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ('throw' === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var e = this;
          function n(n, o) {
            return (c.type = 'throw'), (c.arg = t), (e.next = n), o && ((e.method = 'next'), (e.arg = r)), !!o;
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              c = a.completion;
            if ('root' === a.tryLoc) return n('end');
            if (a.tryLoc <= this.prev) {
              var u = i.call(a, 'catchLoc'),
                l = i.call(a, 'finallyLoc');
              if (u && l) {
                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return n(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
              } else {
                if (!l) throw new Error('try statement without catch or finally');
                if (this.prev < a.finallyLoc) return n(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var n = this.tryEntries[r];
            if (n.tryLoc <= this.prev && i.call(n, 'finallyLoc') && this.prev < n.finallyLoc) {
              var o = n;
              break;
            }
          }
          o && ('break' === t || 'continue' === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
          var a = o ? o.completion : {};
          return (
            (a.type = t), (a.arg = e), o ? ((this.method = 'next'), (this.next = o.finallyLoc), g) : this.complete(a)
          );
        },
        complete: function (t, e) {
          if ('throw' === t.type) throw t.arg;
          return (
            'break' === t.type || 'continue' === t.type
              ? (this.next = t.arg)
              : 'return' === t.type
                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === t.type && e && (this.next = e),
            g
          );
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), g;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ('throw' === n.type) {
                var o = n.arg;
                P(r);
              }
              return o;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (t, e, n) {
          return (
            (this.delegate = { iterator: G(t), resultName: e, nextLoc: n }), 'next' === this.method && (this.arg = r), g
          );
        },
      }),
      n
    );
  }
  function r(t, e, r, n, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value;
    } catch (t) {
      return void r(t);
    }
    c.done ? e(u) : Promise.resolve(u).then(n, o);
  }
  function n(t) {
    return function () {
      var e = this,
        n = arguments;
      return new Promise(function (o, i) {
        var a = t.apply(e, n);
        function c(t) {
          r(a, o, i, c, u, 'next', t);
        }
        function u(t) {
          r(a, o, i, c, u, 'throw', t);
        }
        c(void 0);
      });
    };
  }
  var o = function (t, e) {
      for (
        var r = t.split('.').map(Number), n = e.split('.').map(Number), o = 0;
        o < Math.max(r.length, n.length);
        o++
      ) {
        var i = r[o] || 0,
          a = n[o] || 0;
        if (i < a) return !0;
        if (i > a) return !1;
      }
      return !1;
    },
    i = (function () {
      var t = n(
        e().mark(function t() {
          var r, n;
          return e().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 3), fetch('https://api.github.com/repos/tennisfar/DS-Chrome-Udvidelse/releases');
                case 3:
                  return (r = t.sent), (t.next = 6), r.json();
                case 6:
                  return (n = t.sent), t.abrupt('return', n[0]);
                case 8:
                case 'end':
                  return t.stop();
              }
          }, t);
        })
      );
      return function () {
        return t.apply(this, arguments);
      };
    })(),
    a = (function () {
      var t = n(
        e().mark(function t() {
          var r, n;
          return e().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 3), fetch('/manifest.json');
                case 3:
                  return (r = t.sent), (t.next = 6), r.json();
                case 6:
                  return (n = t.sent), t.abrupt('return', n.version);
                case 8:
                case 'end':
                  return t.stop();
              }
          }, t);
        })
      );
      return function () {
        return t.apply(this, arguments);
      };
    })();
  function c() {
    return (c = n(
      e().mark(function t() {
        var r, n, c, u, l, s, f;
        return e().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (r = document.querySelector('#updateStatus')), (t.prev = 1), (t.next = 4), i();
                case 4:
                  return (
                    (c = t.sent),
                    (u = null == c || null === (n = c.tag_name) || void 0 === n ? void 0 : n.replace('v', '')),
                    (t.next = 8),
                    a()
                  );
                case 8:
                  (l = t.sent),
                    o(l, u)
                      ? ((s = c.html_url), (f = 'Opdater til v. '.concat(u, ' (du har ').concat(l, ')')))
                      : ((s = 'https://github.com/tennisfar/DS-Chrome-Udvidelse/releases'), (f = 'Version '.concat(l))),
                    (r.innerText = f),
                    r.addEventListener('click', function () {
                      return window.open(s);
                    }),
                    (t.next = 17);
                  break;
                case 14:
                  (t.prev = 14), (t.t0 = t.catch(1)), (r.style.display = 'none');
                case 17:
                case 'end':
                  return t.stop();
              }
          },
          t,
          null,
          [[1, 14]]
        );
      })
    )).apply(this, arguments);
  }
  function u(t) {
    return (
      (u =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      u(t)
    );
  }
  function l(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  function s() {
    s = function () {
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
      l = i.toStringTag || '@@toStringTag';
    function f(t, e, r) {
      return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
    }
    try {
      f({}, '');
    } catch (t) {
      f = function (t, e, r) {
        return (t[e] = r);
      };
    }
    function h(t, e, r, n) {
      var i = e && e.prototype instanceof w ? e : w,
        a = Object.create(i.prototype),
        c = new T(n || []);
      return o(a, '_invoke', { value: k(t, r, c) }), a;
    }
    function p(t, e, r) {
      try {
        return { type: 'normal', arg: t.call(e, r) };
      } catch (t) {
        return { type: 'throw', arg: t };
      }
    }
    e.wrap = h;
    var d = 'suspendedStart',
      y = 'suspendedYield',
      v = 'executing',
      m = 'completed',
      g = {};
    function w() {}
    function b() {}
    function x() {}
    var L = {};
    f(L, a, function () {
      return this;
    });
    var E = Object.getPrototypeOf,
      S = E && E(E(G([])));
    S && S !== r && n.call(S, a) && (L = S);
    var _ = (x.prototype = w.prototype = Object.create(L));
    function O(t) {
      ['next', 'throw', 'return'].forEach(function (e) {
        f(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function j(t, e) {
      function r(o, i, a, c) {
        var l = p(t[o], t, i);
        if ('throw' !== l.type) {
          var s = l.arg,
            f = s.value;
          return f && 'object' == u(f) && n.call(f, '__await')
            ? e.resolve(f.__await).then(
                function (t) {
                  r('next', t, a, c);
                },
                function (t) {
                  r('throw', t, a, c);
                }
              )
            : e.resolve(f).then(
                function (t) {
                  (s.value = t), a(s);
                },
                function (t) {
                  return r('throw', t, a, c);
                }
              );
        }
        c(l.arg);
      }
      var i;
      o(this, '_invoke', {
        value: function (t, n) {
          function o() {
            return new e(function (e, o) {
              r(t, n, e, o);
            });
          }
          return (i = i ? i.then(o, o) : o());
        },
      });
    }
    function k(e, r, n) {
      var o = d;
      return function (i, a) {
        if (o === v) throw new Error('Generator is already running');
        if (o === m) {
          if ('throw' === i) throw a;
          return { value: t, done: !0 };
        }
        for (n.method = i, n.arg = a; ; ) {
          var c = n.delegate;
          if (c) {
            var u = N(c, n);
            if (u) {
              if (u === g) continue;
              return u;
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg;
          else if ('throw' === n.method) {
            if (o === d) throw ((o = m), n.arg);
            n.dispatchException(n.arg);
          } else 'return' === n.method && n.abrupt('return', n.arg);
          o = v;
          var l = p(e, r, n);
          if ('normal' === l.type) {
            if (((o = n.done ? m : y), l.arg === g)) continue;
            return { value: l.arg, done: n.done };
          }
          'throw' === l.type && ((o = m), (n.method = 'throw'), (n.arg = l.arg));
        }
      };
    }
    function N(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t)
        return (
          (r.delegate = null),
          ('throw' === n && e.iterator.return && ((r.method = 'return'), (r.arg = t), N(e, r), 'throw' === r.method)) ||
            ('return' !== n &&
              ((r.method = 'throw'), (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
          g
        );
      var i = p(o, e.iterator, r.arg);
      if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), g;
      var a = i.arg;
      return a
        ? a.done
          ? ((r[e.resultName] = a.value),
            (r.next = e.nextLoc),
            'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
            (r.delegate = null),
            g)
          : a
        : ((r.method = 'throw'), (r.arg = new TypeError('iterator result is not an object')), (r.delegate = null), g);
    }
    function C(t) {
      var e = { tryLoc: t[0] };
      1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
    }
    function P(t) {
      var e = t.completion || {};
      (e.type = 'normal'), delete e.arg, (t.completion = e);
    }
    function T(t) {
      (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(C, this), this.reset(!0);
    }
    function G(e) {
      if (e || '' === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ('function' == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function r() {
              for (; ++o < e.length; ) if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
              return (r.value = t), (r.done = !0), r;
            };
          return (i.next = i);
        }
      }
      throw new TypeError(u(e) + ' is not iterable');
    }
    return (
      (b.prototype = x),
      o(_, 'constructor', { value: x, configurable: !0 }),
      o(x, 'constructor', { value: b, configurable: !0 }),
      (b.displayName = f(x, l, 'GeneratorFunction')),
      (e.isGeneratorFunction = function (t) {
        var e = 'function' == typeof t && t.constructor;
        return !!e && (e === b || 'GeneratorFunction' === (e.displayName || e.name));
      }),
      (e.mark = function (t) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : ((t.__proto__ = x), f(t, l, 'GeneratorFunction')),
          (t.prototype = Object.create(_)),
          t
        );
      }),
      (e.awrap = function (t) {
        return { __await: t };
      }),
      O(j.prototype),
      f(j.prototype, c, function () {
        return this;
      }),
      (e.AsyncIterator = j),
      (e.async = function (t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new j(h(t, r, n, o), i);
        return e.isGeneratorFunction(r)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
      }),
      O(_),
      f(_, l, 'Generator'),
      f(_, a, function () {
        return this;
      }),
      f(_, 'toString', function () {
        return '[object Generator]';
      }),
      (e.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return (
          r.reverse(),
          function t() {
            for (; r.length; ) {
              var n = r.pop();
              if (n in e) return (t.value = n), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (e.values = G),
      (T.prototype = {
        constructor: T,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = t),
            this.tryEntries.forEach(P),
            !e)
          )
            for (var r in this) 't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ('throw' === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function o(n, o) {
            return (c.type = 'throw'), (c.arg = e), (r.next = n), o && ((r.method = 'next'), (r.arg = t)), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              c = a.completion;
            if ('root' === a.tryLoc) return o('end');
            if (a.tryLoc <= this.prev) {
              var u = n.call(a, 'catchLoc'),
                l = n.call(a, 'finallyLoc');
              if (u && l) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!l) throw new Error('try statement without catch or finally');
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
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
            (a.type = t), (a.arg = e), i ? ((this.method = 'next'), (this.next = i.finallyLoc), g) : this.complete(a)
          );
        },
        complete: function (t, e) {
          if ('throw' === t.type) throw t.arg;
          return (
            'break' === t.type || 'continue' === t.type
              ? (this.next = t.arg)
              : 'return' === t.type
                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === t.type && e && (this.next = e),
            g
          );
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), g;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ('throw' === n.type) {
                var o = n.arg;
                P(r);
              }
              return o;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (e, r, n) {
          return (
            (this.delegate = { iterator: G(e), resultName: r, nextLoc: n }), 'next' === this.method && (this.arg = t), g
          );
        },
      }),
      e
    );
  }
  function f(t, e, r, n, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value;
    } catch (t) {
      return void r(t);
    }
    c.done ? e(u) : Promise.resolve(u).then(n, o);
  }
  function h(t) {
    return function () {
      var e = this,
        r = arguments;
      return new Promise(function (n, o) {
        var i = t.apply(e, r);
        function a(t) {
          f(i, n, o, a, c, 'next', t);
        }
        function c(t) {
          f(i, n, o, a, c, 'throw', t);
        }
        a(void 0);
      });
    };
  }
  function p() {
    return d.apply(this, arguments);
  }
  function d() {
    return (d = h(
      s().mark(function t() {
        var e, r, n, o;
        return s().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (e = { active: !0, lastFocusedWindow: !0 }), (t.next = 3), chrome.tabs.query(e);
              case 3:
                return (
                  (r = t.sent),
                  (a = 1),
                  (n =
                    (function (t) {
                      if (Array.isArray(t)) return t;
                    })((i = r)) ||
                    (function (t, e) {
                      var r =
                        null == t ? null : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
                      if (null != r) {
                        var n,
                          o,
                          i,
                          a,
                          c = [],
                          u = !0,
                          l = !1;
                        try {
                          if (((i = (r = r.call(t)).next), 0 === e)) {
                            if (Object(r) !== r) return;
                            u = !1;
                          } else for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
                        } catch (t) {
                          (l = !0), (o = t);
                        } finally {
                          try {
                            if (!u && null != r.return && ((a = r.return()), Object(a) !== a)) return;
                          } finally {
                            if (l) throw o;
                          }
                        }
                        return c;
                      }
                    })(i, a) ||
                    (function (t, e) {
                      if (t) {
                        if ('string' == typeof t) return l(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return (
                          'Object' === r && t.constructor && (r = t.constructor.name),
                          'Map' === r || 'Set' === r
                            ? Array.from(t)
                            : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                              ? l(t, e)
                              : void 0
                        );
                      }
                    })(i, a) ||
                    (function () {
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      );
                    })()),
                  (o = n[0]),
                  t.abrupt('return', o)
                );
              case 7:
              case 'end':
                return t.stop();
            }
          var i, a;
        }, t);
      })
    )).apply(this, arguments);
  }
  var y = (function () {
      var t = h(
        s().mark(function t(e) {
          var r, n, o;
          return s().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), p();
                case 2:
                  null == (o = t.sent) ||
                    null === (r = o.url) ||
                    void 0 === r ||
                    !r.includes('danskespil.dk') ||
                    (null != o && null !== (n = o.url) && void 0 !== n && n.includes('/sitecore/')) ||
                    e.removeAttribute('disabled');
                case 4:
                case 'end':
                  return t.stop();
              }
          }, t);
        })
      );
      return function (e) {
        return t.apply(this, arguments);
      };
    })(),
    v = (function () {
      var t = h(
        s().mark(function t() {
          var e;
          return s().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), p();
                case 2:
                  (e = t.sent),
                    chrome.scripting.executeScript({
                      target: { tabId: e.id },
                      function: function () {
                        var t = sessionStorage.getItem('page_id'),
                          e = window.location.origin,
                          r = document.body.classList,
                          n = (r.contains('dlo'), r.contains('dli') ? 'dli' : 'dlo');
                        e.includes('town') && (e = e.replace('.dan', 'edit' + n + '.dan')),
                          e.includes('//da') && (e = e.replace('//dan', '//edit' + n + '.dan')),
                          (e += '/?sc_mode=edit'),
                          window.open(''.concat(e, '&sc_itemid=').concat(t), '_blank');
                      },
                    });
                case 4:
                case 'end':
                  return t.stop();
              }
          }, t);
        })
      );
      return function () {
        return t.apply(this, arguments);
      };
    })();
  function m(t) {
    return (
      (m =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      m(t)
    );
  }
  function g(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  function w() {
    w = function () {
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
    function l(t, e, r) {
      return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
    }
    try {
      l({}, '');
    } catch (t) {
      l = function (t, e, r) {
        return (t[e] = r);
      };
    }
    function s(t, e, r, n) {
      var i = e && e.prototype instanceof g ? e : g,
        a = Object.create(i.prototype),
        c = new T(n || []);
      return o(a, '_invoke', { value: k(t, r, c) }), a;
    }
    function f(t, e, r) {
      try {
        return { type: 'normal', arg: t.call(e, r) };
      } catch (t) {
        return { type: 'throw', arg: t };
      }
    }
    e.wrap = s;
    var h = 'suspendedStart',
      p = 'suspendedYield',
      d = 'executing',
      y = 'completed',
      v = {};
    function g() {}
    function b() {}
    function x() {}
    var L = {};
    l(L, a, function () {
      return this;
    });
    var E = Object.getPrototypeOf,
      S = E && E(E(G([])));
    S && S !== r && n.call(S, a) && (L = S);
    var _ = (x.prototype = g.prototype = Object.create(L));
    function O(t) {
      ['next', 'throw', 'return'].forEach(function (e) {
        l(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function j(t, e) {
      function r(o, i, a, c) {
        var u = f(t[o], t, i);
        if ('throw' !== u.type) {
          var l = u.arg,
            s = l.value;
          return s && 'object' == m(s) && n.call(s, '__await')
            ? e.resolve(s.__await).then(
                function (t) {
                  r('next', t, a, c);
                },
                function (t) {
                  r('throw', t, a, c);
                }
              )
            : e.resolve(s).then(
                function (t) {
                  (l.value = t), a(l);
                },
                function (t) {
                  return r('throw', t, a, c);
                }
              );
        }
        c(u.arg);
      }
      var i;
      o(this, '_invoke', {
        value: function (t, n) {
          function o() {
            return new e(function (e, o) {
              r(t, n, e, o);
            });
          }
          return (i = i ? i.then(o, o) : o());
        },
      });
    }
    function k(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === d) throw new Error('Generator is already running');
        if (o === y) {
          if ('throw' === i) throw a;
          return { value: t, done: !0 };
        }
        for (n.method = i, n.arg = a; ; ) {
          var c = n.delegate;
          if (c) {
            var u = N(c, n);
            if (u) {
              if (u === v) continue;
              return u;
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg;
          else if ('throw' === n.method) {
            if (o === h) throw ((o = y), n.arg);
            n.dispatchException(n.arg);
          } else 'return' === n.method && n.abrupt('return', n.arg);
          o = d;
          var l = f(e, r, n);
          if ('normal' === l.type) {
            if (((o = n.done ? y : p), l.arg === v)) continue;
            return { value: l.arg, done: n.done };
          }
          'throw' === l.type && ((o = y), (n.method = 'throw'), (n.arg = l.arg));
        }
      };
    }
    function N(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t)
        return (
          (r.delegate = null),
          ('throw' === n && e.iterator.return && ((r.method = 'return'), (r.arg = t), N(e, r), 'throw' === r.method)) ||
            ('return' !== n &&
              ((r.method = 'throw'), (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
          v
        );
      var i = f(o, e.iterator, r.arg);
      if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), v;
      var a = i.arg;
      return a
        ? a.done
          ? ((r[e.resultName] = a.value),
            (r.next = e.nextLoc),
            'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
            (r.delegate = null),
            v)
          : a
        : ((r.method = 'throw'), (r.arg = new TypeError('iterator result is not an object')), (r.delegate = null), v);
    }
    function C(t) {
      var e = { tryLoc: t[0] };
      1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
    }
    function P(t) {
      var e = t.completion || {};
      (e.type = 'normal'), delete e.arg, (t.completion = e);
    }
    function T(t) {
      (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(C, this), this.reset(!0);
    }
    function G(e) {
      if (e || '' === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ('function' == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function r() {
              for (; ++o < e.length; ) if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
              return (r.value = t), (r.done = !0), r;
            };
          return (i.next = i);
        }
      }
      throw new TypeError(m(e) + ' is not iterable');
    }
    return (
      (b.prototype = x),
      o(_, 'constructor', { value: x, configurable: !0 }),
      o(x, 'constructor', { value: b, configurable: !0 }),
      (b.displayName = l(x, u, 'GeneratorFunction')),
      (e.isGeneratorFunction = function (t) {
        var e = 'function' == typeof t && t.constructor;
        return !!e && (e === b || 'GeneratorFunction' === (e.displayName || e.name));
      }),
      (e.mark = function (t) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : ((t.__proto__ = x), l(t, u, 'GeneratorFunction')),
          (t.prototype = Object.create(_)),
          t
        );
      }),
      (e.awrap = function (t) {
        return { __await: t };
      }),
      O(j.prototype),
      l(j.prototype, c, function () {
        return this;
      }),
      (e.AsyncIterator = j),
      (e.async = function (t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new j(s(t, r, n, o), i);
        return e.isGeneratorFunction(r)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
      }),
      O(_),
      l(_, u, 'Generator'),
      l(_, a, function () {
        return this;
      }),
      l(_, 'toString', function () {
        return '[object Generator]';
      }),
      (e.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return (
          r.reverse(),
          function t() {
            for (; r.length; ) {
              var n = r.pop();
              if (n in e) return (t.value = n), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (e.values = G),
      (T.prototype = {
        constructor: T,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = t),
            this.tryEntries.forEach(P),
            !e)
          )
            for (var r in this) 't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ('throw' === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function o(n, o) {
            return (c.type = 'throw'), (c.arg = e), (r.next = n), o && ((r.method = 'next'), (r.arg = t)), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              c = a.completion;
            if ('root' === a.tryLoc) return o('end');
            if (a.tryLoc <= this.prev) {
              var u = n.call(a, 'catchLoc'),
                l = n.call(a, 'finallyLoc');
              if (u && l) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!l) throw new Error('try statement without catch or finally');
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
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
            (a.type = t), (a.arg = e), i ? ((this.method = 'next'), (this.next = i.finallyLoc), v) : this.complete(a)
          );
        },
        complete: function (t, e) {
          if ('throw' === t.type) throw t.arg;
          return (
            'break' === t.type || 'continue' === t.type
              ? (this.next = t.arg)
              : 'return' === t.type
                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === t.type && e && (this.next = e),
            v
          );
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), v;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ('throw' === n.type) {
                var o = n.arg;
                P(r);
              }
              return o;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (e, r, n) {
          return (
            (this.delegate = { iterator: G(e), resultName: r, nextLoc: n }), 'next' === this.method && (this.arg = t), v
          );
        },
      }),
      e
    );
  }
  function b(t, e, r, n, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value;
    } catch (t) {
      return void r(t);
    }
    c.done ? e(u) : Promise.resolve(u).then(n, o);
  }
  function x(t) {
    return function () {
      var e = this,
        r = arguments;
      return new Promise(function (n, o) {
        var i = t.apply(e, r);
        function a(t) {
          b(i, n, o, a, c, 'next', t);
        }
        function c(t) {
          b(i, n, o, a, c, 'throw', t);
        }
        a(void 0);
      });
    };
  }
  function L() {
    return E.apply(this, arguments);
  }
  function E() {
    return (E = x(
      w().mark(function t() {
        var e, r, n, o;
        return w().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (e = { active: !0, lastFocusedWindow: !0 }), (t.next = 3), chrome.tabs.query(e);
              case 3:
                return (
                  (r = t.sent),
                  (a = 1),
                  (n =
                    (function (t) {
                      if (Array.isArray(t)) return t;
                    })((i = r)) ||
                    (function (t, e) {
                      var r =
                        null == t ? null : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
                      if (null != r) {
                        var n,
                          o,
                          i,
                          a,
                          c = [],
                          u = !0,
                          l = !1;
                        try {
                          if (((i = (r = r.call(t)).next), 0 === e)) {
                            if (Object(r) !== r) return;
                            u = !1;
                          } else for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
                        } catch (t) {
                          (l = !0), (o = t);
                        } finally {
                          try {
                            if (!u && null != r.return && ((a = r.return()), Object(a) !== a)) return;
                          } finally {
                            if (l) throw o;
                          }
                        }
                        return c;
                      }
                    })(i, a) ||
                    (function (t, e) {
                      if (t) {
                        if ('string' == typeof t) return g(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return (
                          'Object' === r && t.constructor && (r = t.constructor.name),
                          'Map' === r || 'Set' === r
                            ? Array.from(t)
                            : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                              ? g(t, e)
                              : void 0
                        );
                      }
                    })(i, a) ||
                    (function () {
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      );
                    })()),
                  (o = n[0]),
                  t.abrupt('return', o)
                );
              case 7:
              case 'end':
                return t.stop();
            }
          var i, a;
        }, t);
      })
    )).apply(this, arguments);
  }
  var S = (function () {
      var t = x(
        w().mark(function t(e) {
          var r, n, o;
          return w().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), L();
                case 2:
                  null == (o = t.sent) ||
                    null === (r = o.url) ||
                    void 0 === r ||
                    !r.includes('danskespil.dk') ||
                    (null != o && null !== (n = o.url) && void 0 !== n && n.includes('/sitecore/')) ||
                    e.removeAttribute('disabled');
                case 4:
                case 'end':
                  return t.stop();
              }
          }, t);
        })
      );
      return function (e) {
        return t.apply(this, arguments);
      };
    })(),
    _ = (function () {
      var t = x(
        w().mark(function t() {
          var e;
          return w().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), L();
                case 2:
                  (e = t.sent),
                    chrome.scripting.executeScript({
                      target: { tabId: e.id },
                      function: function () {
                        var t = sessionStorage.getItem('page_id'),
                          e = window.location.origin,
                          r = document.body.classList,
                          n = (r.contains('dlo'), r.contains('dli') ? 'dli' : 'dlo');
                        e.includes('town') && (e = e.replace('.dan', 'edit' + n + '.dan')),
                          e.includes('//da') && (e = e.replace('//dan', '//edit' + n + '.dan')),
                          (e += '/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1'),
                          window.open(''.concat(e, '&fo=').concat(t), '_blank');
                      },
                    });
                case 4:
                case 'end':
                  return t.stop();
              }
          }, t);
        })
      );
      return function () {
        return t.apply(this, arguments);
      };
    })();
  function O(t) {
    return (
      (O =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      O(t)
    );
  }
  function j() {
    j = function () {
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
    function l(t, e, r) {
      return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
    }
    try {
      l({}, '');
    } catch (t) {
      l = function (t, e, r) {
        return (t[e] = r);
      };
    }
    function s(t, e, r, n) {
      var i = e && e.prototype instanceof m ? e : m,
        a = Object.create(i.prototype),
        c = new T(n || []);
      return o(a, '_invoke', { value: k(t, r, c) }), a;
    }
    function f(t, e, r) {
      try {
        return { type: 'normal', arg: t.call(e, r) };
      } catch (t) {
        return { type: 'throw', arg: t };
      }
    }
    e.wrap = s;
    var h = 'suspendedStart',
      p = 'suspendedYield',
      d = 'executing',
      y = 'completed',
      v = {};
    function m() {}
    function g() {}
    function w() {}
    var b = {};
    l(b, a, function () {
      return this;
    });
    var x = Object.getPrototypeOf,
      L = x && x(x(G([])));
    L && L !== r && n.call(L, a) && (b = L);
    var E = (w.prototype = m.prototype = Object.create(b));
    function S(t) {
      ['next', 'throw', 'return'].forEach(function (e) {
        l(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function _(t, e) {
      function r(o, i, a, c) {
        var u = f(t[o], t, i);
        if ('throw' !== u.type) {
          var l = u.arg,
            s = l.value;
          return s && 'object' == O(s) && n.call(s, '__await')
            ? e.resolve(s.__await).then(
                function (t) {
                  r('next', t, a, c);
                },
                function (t) {
                  r('throw', t, a, c);
                }
              )
            : e.resolve(s).then(
                function (t) {
                  (l.value = t), a(l);
                },
                function (t) {
                  return r('throw', t, a, c);
                }
              );
        }
        c(u.arg);
      }
      var i;
      o(this, '_invoke', {
        value: function (t, n) {
          function o() {
            return new e(function (e, o) {
              r(t, n, e, o);
            });
          }
          return (i = i ? i.then(o, o) : o());
        },
      });
    }
    function k(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === d) throw new Error('Generator is already running');
        if (o === y) {
          if ('throw' === i) throw a;
          return { value: t, done: !0 };
        }
        for (n.method = i, n.arg = a; ; ) {
          var c = n.delegate;
          if (c) {
            var u = N(c, n);
            if (u) {
              if (u === v) continue;
              return u;
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg;
          else if ('throw' === n.method) {
            if (o === h) throw ((o = y), n.arg);
            n.dispatchException(n.arg);
          } else 'return' === n.method && n.abrupt('return', n.arg);
          o = d;
          var l = f(e, r, n);
          if ('normal' === l.type) {
            if (((o = n.done ? y : p), l.arg === v)) continue;
            return { value: l.arg, done: n.done };
          }
          'throw' === l.type && ((o = y), (n.method = 'throw'), (n.arg = l.arg));
        }
      };
    }
    function N(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t)
        return (
          (r.delegate = null),
          ('throw' === n && e.iterator.return && ((r.method = 'return'), (r.arg = t), N(e, r), 'throw' === r.method)) ||
            ('return' !== n &&
              ((r.method = 'throw'), (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
          v
        );
      var i = f(o, e.iterator, r.arg);
      if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), v;
      var a = i.arg;
      return a
        ? a.done
          ? ((r[e.resultName] = a.value),
            (r.next = e.nextLoc),
            'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
            (r.delegate = null),
            v)
          : a
        : ((r.method = 'throw'), (r.arg = new TypeError('iterator result is not an object')), (r.delegate = null), v);
    }
    function C(t) {
      var e = { tryLoc: t[0] };
      1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
    }
    function P(t) {
      var e = t.completion || {};
      (e.type = 'normal'), delete e.arg, (t.completion = e);
    }
    function T(t) {
      (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(C, this), this.reset(!0);
    }
    function G(e) {
      if (e || '' === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ('function' == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function r() {
              for (; ++o < e.length; ) if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
              return (r.value = t), (r.done = !0), r;
            };
          return (i.next = i);
        }
      }
      throw new TypeError(O(e) + ' is not iterable');
    }
    return (
      (g.prototype = w),
      o(E, 'constructor', { value: w, configurable: !0 }),
      o(w, 'constructor', { value: g, configurable: !0 }),
      (g.displayName = l(w, u, 'GeneratorFunction')),
      (e.isGeneratorFunction = function (t) {
        var e = 'function' == typeof t && t.constructor;
        return !!e && (e === g || 'GeneratorFunction' === (e.displayName || e.name));
      }),
      (e.mark = function (t) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : ((t.__proto__ = w), l(t, u, 'GeneratorFunction')),
          (t.prototype = Object.create(E)),
          t
        );
      }),
      (e.awrap = function (t) {
        return { __await: t };
      }),
      S(_.prototype),
      l(_.prototype, c, function () {
        return this;
      }),
      (e.AsyncIterator = _),
      (e.async = function (t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new _(s(t, r, n, o), i);
        return e.isGeneratorFunction(r)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
      }),
      S(E),
      l(E, u, 'Generator'),
      l(E, a, function () {
        return this;
      }),
      l(E, 'toString', function () {
        return '[object Generator]';
      }),
      (e.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return (
          r.reverse(),
          function t() {
            for (; r.length; ) {
              var n = r.pop();
              if (n in e) return (t.value = n), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (e.values = G),
      (T.prototype = {
        constructor: T,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = t),
            this.tryEntries.forEach(P),
            !e)
          )
            for (var r in this) 't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ('throw' === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function o(n, o) {
            return (c.type = 'throw'), (c.arg = e), (r.next = n), o && ((r.method = 'next'), (r.arg = t)), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              c = a.completion;
            if ('root' === a.tryLoc) return o('end');
            if (a.tryLoc <= this.prev) {
              var u = n.call(a, 'catchLoc'),
                l = n.call(a, 'finallyLoc');
              if (u && l) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!l) throw new Error('try statement without catch or finally');
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
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
            (a.type = t), (a.arg = e), i ? ((this.method = 'next'), (this.next = i.finallyLoc), v) : this.complete(a)
          );
        },
        complete: function (t, e) {
          if ('throw' === t.type) throw t.arg;
          return (
            'break' === t.type || 'continue' === t.type
              ? (this.next = t.arg)
              : 'return' === t.type
                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === t.type && e && (this.next = e),
            v
          );
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), v;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ('throw' === n.type) {
                var o = n.arg;
                P(r);
              }
              return o;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (e, r, n) {
          return (
            (this.delegate = { iterator: G(e), resultName: r, nextLoc: n }), 'next' === this.method && (this.arg = t), v
          );
        },
      }),
      e
    );
  }
  function k(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n;
  }
  function N(t, e, r, n, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value;
    } catch (t) {
      return void r(t);
    }
    c.done ? e(u) : Promise.resolve(u).then(n, o);
  }
  function C() {
    return P.apply(this, arguments);
  }
  function P() {
    var t;
    return (
      (t = j().mark(function t() {
        var e, r, n, o;
        return j().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (e = { active: !0, lastFocusedWindow: !0 }), (t.next = 3), chrome.tabs.query(e);
              case 3:
                return (
                  (r = t.sent),
                  (a = 1),
                  (n =
                    (function (t) {
                      if (Array.isArray(t)) return t;
                    })((i = r)) ||
                    (function (t, e) {
                      var r =
                        null == t ? null : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
                      if (null != r) {
                        var n,
                          o,
                          i,
                          a,
                          c = [],
                          u = !0,
                          l = !1;
                        try {
                          if (((i = (r = r.call(t)).next), 0 === e)) {
                            if (Object(r) !== r) return;
                            u = !1;
                          } else for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
                        } catch (t) {
                          (l = !0), (o = t);
                        } finally {
                          try {
                            if (!u && null != r.return && ((a = r.return()), Object(a) !== a)) return;
                          } finally {
                            if (l) throw o;
                          }
                        }
                        return c;
                      }
                    })(i, a) ||
                    (function (t, e) {
                      if (t) {
                        if ('string' == typeof t) return k(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return (
                          'Object' === r && t.constructor && (r = t.constructor.name),
                          'Map' === r || 'Set' === r
                            ? Array.from(t)
                            : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                              ? k(t, e)
                              : void 0
                        );
                      }
                    })(i, a) ||
                    (function () {
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      );
                    })()),
                  (o = n[0]),
                  t.abrupt('return', o)
                );
              case 7:
              case 'end':
                return t.stop();
            }
          var i, a;
        }, t);
      })),
      (P = function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(e, r);
          function a(t) {
            N(i, n, o, a, c, 'next', t);
          }
          function c(t) {
            N(i, n, o, a, c, 'throw', t);
          }
          a(void 0);
        });
      }),
      P.apply(this, arguments)
    );
  }
  function T(t) {
    return (
      (T =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      T(t)
    );
  }
  function G() {
    G = function () {
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
    function l(t, e, r) {
      return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
    }
    try {
      l({}, '');
    } catch (t) {
      l = function (t, e, r) {
        return (t[e] = r);
      };
    }
    function s(t, e, r, n) {
      var i = e && e.prototype instanceof m ? e : m,
        a = Object.create(i.prototype),
        c = new C(n || []);
      return o(a, '_invoke', { value: O(t, r, c) }), a;
    }
    function f(t, e, r) {
      try {
        return { type: 'normal', arg: t.call(e, r) };
      } catch (t) {
        return { type: 'throw', arg: t };
      }
    }
    e.wrap = s;
    var h = 'suspendedStart',
      p = 'suspendedYield',
      d = 'executing',
      y = 'completed',
      v = {};
    function m() {}
    function g() {}
    function w() {}
    var b = {};
    l(b, a, function () {
      return this;
    });
    var x = Object.getPrototypeOf,
      L = x && x(x(P([])));
    L && L !== r && n.call(L, a) && (b = L);
    var E = (w.prototype = m.prototype = Object.create(b));
    function S(t) {
      ['next', 'throw', 'return'].forEach(function (e) {
        l(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function _(t, e) {
      function r(o, i, a, c) {
        var u = f(t[o], t, i);
        if ('throw' !== u.type) {
          var l = u.arg,
            s = l.value;
          return s && 'object' == T(s) && n.call(s, '__await')
            ? e.resolve(s.__await).then(
                function (t) {
                  r('next', t, a, c);
                },
                function (t) {
                  r('throw', t, a, c);
                }
              )
            : e.resolve(s).then(
                function (t) {
                  (l.value = t), a(l);
                },
                function (t) {
                  return r('throw', t, a, c);
                }
              );
        }
        c(u.arg);
      }
      var i;
      o(this, '_invoke', {
        value: function (t, n) {
          function o() {
            return new e(function (e, o) {
              r(t, n, e, o);
            });
          }
          return (i = i ? i.then(o, o) : o());
        },
      });
    }
    function O(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === d) throw new Error('Generator is already running');
        if (o === y) {
          if ('throw' === i) throw a;
          return { value: t, done: !0 };
        }
        for (n.method = i, n.arg = a; ; ) {
          var c = n.delegate;
          if (c) {
            var u = j(c, n);
            if (u) {
              if (u === v) continue;
              return u;
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg;
          else if ('throw' === n.method) {
            if (o === h) throw ((o = y), n.arg);
            n.dispatchException(n.arg);
          } else 'return' === n.method && n.abrupt('return', n.arg);
          o = d;
          var l = f(e, r, n);
          if ('normal' === l.type) {
            if (((o = n.done ? y : p), l.arg === v)) continue;
            return { value: l.arg, done: n.done };
          }
          'throw' === l.type && ((o = y), (n.method = 'throw'), (n.arg = l.arg));
        }
      };
    }
    function j(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t)
        return (
          (r.delegate = null),
          ('throw' === n && e.iterator.return && ((r.method = 'return'), (r.arg = t), j(e, r), 'throw' === r.method)) ||
            ('return' !== n &&
              ((r.method = 'throw'), (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
          v
        );
      var i = f(o, e.iterator, r.arg);
      if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), v;
      var a = i.arg;
      return a
        ? a.done
          ? ((r[e.resultName] = a.value),
            (r.next = e.nextLoc),
            'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
            (r.delegate = null),
            v)
          : a
        : ((r.method = 'throw'), (r.arg = new TypeError('iterator result is not an object')), (r.delegate = null), v);
    }
    function k(t) {
      var e = { tryLoc: t[0] };
      1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
    }
    function N(t) {
      var e = t.completion || {};
      (e.type = 'normal'), delete e.arg, (t.completion = e);
    }
    function C(t) {
      (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(k, this), this.reset(!0);
    }
    function P(e) {
      if (e || '' === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ('function' == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function r() {
              for (; ++o < e.length; ) if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
              return (r.value = t), (r.done = !0), r;
            };
          return (i.next = i);
        }
      }
      throw new TypeError(T(e) + ' is not iterable');
    }
    return (
      (g.prototype = w),
      o(E, 'constructor', { value: w, configurable: !0 }),
      o(w, 'constructor', { value: g, configurable: !0 }),
      (g.displayName = l(w, u, 'GeneratorFunction')),
      (e.isGeneratorFunction = function (t) {
        var e = 'function' == typeof t && t.constructor;
        return !!e && (e === g || 'GeneratorFunction' === (e.displayName || e.name));
      }),
      (e.mark = function (t) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : ((t.__proto__ = w), l(t, u, 'GeneratorFunction')),
          (t.prototype = Object.create(E)),
          t
        );
      }),
      (e.awrap = function (t) {
        return { __await: t };
      }),
      S(_.prototype),
      l(_.prototype, c, function () {
        return this;
      }),
      (e.AsyncIterator = _),
      (e.async = function (t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new _(s(t, r, n, o), i);
        return e.isGeneratorFunction(r)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
      }),
      S(E),
      l(E, u, 'Generator'),
      l(E, a, function () {
        return this;
      }),
      l(E, 'toString', function () {
        return '[object Generator]';
      }),
      (e.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return (
          r.reverse(),
          function t() {
            for (; r.length; ) {
              var n = r.pop();
              if (n in e) return (t.value = n), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (e.values = P),
      (C.prototype = {
        constructor: C,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = t),
            this.tryEntries.forEach(N),
            !e)
          )
            for (var r in this) 't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ('throw' === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;
          function o(n, o) {
            return (c.type = 'throw'), (c.arg = e), (r.next = n), o && ((r.method = 'next'), (r.arg = t)), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              c = a.completion;
            if ('root' === a.tryLoc) return o('end');
            if (a.tryLoc <= this.prev) {
              var u = n.call(a, 'catchLoc'),
                l = n.call(a, 'finallyLoc');
              if (u && l) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!l) throw new Error('try statement without catch or finally');
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
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
            (a.type = t), (a.arg = e), i ? ((this.method = 'next'), (this.next = i.finallyLoc), v) : this.complete(a)
          );
        },
        complete: function (t, e) {
          if ('throw' === t.type) throw t.arg;
          return (
            'break' === t.type || 'continue' === t.type
              ? (this.next = t.arg)
              : 'return' === t.type
                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === t.type && e && (this.next = e),
            v
          );
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), N(r), v;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ('throw' === n.type) {
                var o = n.arg;
                N(r);
              }
              return o;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (e, r, n) {
          return (
            (this.delegate = { iterator: P(e), resultName: r, nextLoc: n }), 'next' === this.method && (this.arg = t), v
          );
        },
      }),
      e
    );
  }
  function A(t, e, r, n, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value;
    } catch (t) {
      return void r(t);
    }
    c.done ? e(u) : Promise.resolve(u).then(n, o);
  }
  var I,
    F = (function () {
      var t,
        e =
          ((t = G().mark(function t(e) {
            var r, n, o;
            return G().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), C();
                  case 2:
                    null == (o = t.sent) ||
                      null === (r = o.url) ||
                      void 0 === r ||
                      !r.includes('danskespil.dk') ||
                      (null != o && null !== (n = o.url) && void 0 !== n && n.includes('/sitecore/')) ||
                      e.removeAttribute('disabled');
                  case 4:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })),
          function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(e, r);
              function a(t) {
                A(i, n, o, a, c, 'next', t);
              }
              function c(t) {
                A(i, n, o, a, c, 'throw', t);
              }
              a(void 0);
            });
          });
      return function (t) {
        return e.apply(this, arguments);
      };
    })(),
    q = function () {
      chrome.tabs.query({ active: !0, currentWindow: !0 }, function (t) {
        chrome.scripting.executeScript({
          target: { tabId: t[0].id },
          function: function () {
            var t,
              e,
              r,
              n,
              o,
              i,
              a,
              c = [];
            if ((a = document.querySelector('#dsSC'))) a.remove();
            else {
              var u,
                l,
                s,
                f,
                h = function (t) {
                  var o = t.nodeValue;
                  o.match(/^[^\/].*({.*})/) && ((e = !0), (r = o.replace(/{.*}/, '').trim()), (n = o.match(/{.*}/)[0]));
                },
                p = function i(a) {
                  for (var u = a.firstChild, l = []; u; ) {
                    switch ((u === document.body.lastChild && document.body.appendChild(t), u.nodeType)) {
                      case Node.ELEMENT_NODE:
                        if (e) {
                          var s = u.getBoundingClientRect().top + 10 + window.scrollY,
                            f = u.getBoundingClientRect().left + 10 + window.scrollX;
                          f < 10 && (f = 10);
                          var p = 'dsSCId' + n.replace('{', '').replace('}', '').toLowerCase(),
                            d = document.createElement('a');
                          (d.href = ''.concat(o).concat(n)),
                            (d.target = 'dsSitecore'),
                            d.classList.add('dsSC__item'),
                            (d.draggable = !0),
                            d.setAttribute('dsSCId', p),
                            u.classList.add(p),
                            l.includes(''.concat(s, ',').concat(f)) && ((s += 18), (f += 18)),
                            l.push(''.concat(s, ',').concat(f)),
                            (d.style.top = s + 'px'),
                            (d.style.left = f + 'px'),
                            (d.innerHTML = ''.concat(
                              r
                                .replace(/View$/, '')
                                .split(/(?=[A-Z])/)
                                .join(' ')
                            ));
                          var y = document.createElement('span');
                          y.classList.add('dsSC__item-close'),
                            d.appendChild(y),
                            y.addEventListener('click', function (t) {
                              t.preventDefault(), (t.target.parentElement.style.display = 'none');
                            }),
                            (d.onmouseover = function (t) {
                              var e = document.querySelector('.'.concat(t.target.getAttribute('dsSCId')));
                              e && e.classList.add('dsSC__target');
                            }),
                            (d.onmouseout = function (t) {
                              var e = document.querySelector('.'.concat(t.target.getAttribute('dsSCId')));
                              e && e.classList.remove('dsSC__target');
                            }),
                            t.appendChild(d),
                            (e = !1),
                            c.push({ name: r, id: n, top: s });
                        }
                        i(u);
                        break;
                      case Node.COMMENT_NODE:
                        h(u);
                    }
                    u = u.nextSibling;
                  }
                },
                d = function () {
                  (a = document.querySelector('#dsSC')) && a.remove(),
                    ((t = document.createElement('div')).id = 'dsSC'),
                    clearTimeout(i),
                    (i = setTimeout(function () {
                      return p(document.body);
                    }, 200));
                };
              (u = document.querySelector('#dsSCStyle')) && u.remove(),
                ((u = document.createElement('style')).id = 'dsSCStyle'),
                (u.innerText =
                  "\n        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=block');\n        \n        .dsSC__item {\n          cursor: pointer;\n          position: absolute;\n          z-index: 10000000;\n          height: 30px;\n          display: flex;\n          align-items: center;\n          font-size: 10px;\n          font-weight: 500;\n          font-family: 'Montserrat', 'Open Sans', Helvetica, Arial, sans-serif;\n          background: black;\n          color: white;\n          padding: 0 8px 0 10px;\n          box-shadow: 0 0 0 1px #585858;\n          border-radius: 3px;\n          text-decoration: none;\n          line-height: 15px;\n        }\n        \n        .dsSC__item-close {\n          position: relative;\n          width: 30px;\n          height: 30px;\n          background: #222;\n          margin: 0 -8px 0 10px;\n        }\n        \n        .dsSC__item-close::before,\n        .dsSC__item-close::after {\n          position: absolute;\n          top: 14px;\n          left: 10px;\n          content: \"\";\n          width: 10px;\n          height: 2px;\n          background: white;\n          transform: rotate(45deg);\n        }\n        \n        .dsSC__item-close::after {\n          transform: rotate(-45deg);\n        }\n        \n        .dsSC__item-close:hover {\n          background: red;\n        }\n        \n        .dsSC__item img {\n          height: 15px;\n          width: 15px;\n          margin-right: 5px;\n        }\n        \n        .dsSC__target {\n          filter: blur(2px) !important;\n        }\n        \n        .dsSC__toggle {\n          position: fixed;\n          bottom: 5px;\n          right: 5px;\n          background: black;\n          width: 25px;\n          height: 25px;\n          z-index: 1000000000;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          border-radius: 3px;\n          cursor: pointer;\n          opacity: 0.3;\n        }\n        \n        .dsSC__toggle:hover {\n          opacity: 1;\n        }\n        \n        .dsSC__toggle img {\n          height: 15px;\n          width: 15px;\n        }\n        \n        .dsSC--hidden {\n          display: none;\n        }\n        ".replace(
                    /\n/g,
                    ''
                  )),
                document.body.appendChild(u),
                (l = window.location.host
                  .replace(/danskespil\.dk/, '')
                  .toLowerCase()
                  .replace(/\.$/, '')),
                (s = window.location.pathname.replace(/^\//, '').replace(/\/.*$/, '').toLowerCase()),
                (f =
                  [
                    'alt-eller-intet',
                    'eurojackpot',
                    'keno',
                    'lotto',
                    'vikinglotto',
                    'plus-abonnement',
                    'quick',
                    'spil-sammen',
                    'roed-konto',
                  ].indexOf(s) > -1
                    ? 'editdlo'
                    : 'editdli'),
                (f = 'web.develop' === l || 'web.trunk' === l ? '' : f),
                (o = 'https://'
                  .concat(l)
                  .concat(f, '.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=')),
                d(),
                (window.onresize = function () {
                  return d();
                }),
                (window.onscroll = function () {
                  return d();
                });
            }
          },
        });
      });
    };
  !(function () {
    c.apply(this, arguments);
  })(),
    document.addEventListener('DOMContentLoaded', function () {
      var t = document.querySelector('#openInExperienceEditor');
      y(t),
        t.addEventListener('click', function () {
          v();
        });
    }),
    document.addEventListener('DOMContentLoaded', function () {
      var t = document.querySelector('#openInSitecore');
      S(t),
        t.addEventListener('click', function () {
          _();
        });
    }),
    F((I = document.querySelector('#showSitecoreComponents'))),
    I.addEventListener('click', function () {
      q();
    });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUMwRCxHQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9DdXJyZW50VmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL09wZW5QYWdlSW5FeHBlcmllbmNlRWRpdG9yLmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvT3BlblBhZ2VJblNpdGVjb3JlLmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvQ2hyb21lVG9vbHMuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9TaG93Q29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3BvcHVwL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlzVmVyc2lvbkxvd2VyID0gKHVzZXJWZXJzaW9uLCBuZXdWZXJzaW9uKSA9PiB7XG4gIGNvbnN0IHVzZXJQYXJ0cyA9IHVzZXJWZXJzaW9uLnNwbGl0KCcuJykubWFwKE51bWJlcik7XG4gIGNvbnN0IG5ld1BhcnRzID0gbmV3VmVyc2lvbi5zcGxpdCgnLicpLm1hcChOdW1iZXIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5tYXgodXNlclBhcnRzLmxlbmd0aCwgbmV3UGFydHMubGVuZ3RoKTsgaSsrKSB7XG4gICAgY29uc3QgdXNlclBhcnQgPSB1c2VyUGFydHNbaV0gfHwgMDtcbiAgICBjb25zdCBuZXdQYXJ0ID0gbmV3UGFydHNbaV0gfHwgMDtcblxuICAgIGlmICh1c2VyUGFydCA8IG5ld1BhcnQpIHJldHVybiB0cnVlO1xuICAgIGlmICh1c2VyUGFydCA+IG5ld1BhcnQpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBnZXRHaXRodWJMYXRlc3RSZWxlYXNlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBnaXRIdWJBcGlVcmwgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy90ZW5uaXNmYXIvRFMtQ2hyb21lLVVkdmlkZWxzZS9yZWxlYXNlcyc7XG4gIGNvbnN0IGdpdEh1YlJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2l0SHViQXBpVXJsKTtcbiAgY29uc3QgcmVsZWFzZXMgPSBhd2FpdCBnaXRIdWJSZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiByZWxlYXNlc1swXTtcbn07XG5cbmNvbnN0IGdldExvY2FsVmVyc2lvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbG9jYWxEYXRhVXJsID0gJy9tYW5pZmVzdC5qc29uJztcbiAgY29uc3QgbG9jYWxEYXRhUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsb2NhbERhdGFVcmwpO1xuICBjb25zdCBsb2NhbERhdGEgPSBhd2FpdCBsb2NhbERhdGFSZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBsb2NhbERhdGEudmVyc2lvbjtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVWZXJzaW9uQnV0dG9uKCkge1xuICBjb25zdCB1cGRhdGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlU3RhdHVzJyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBnaXRodWJMYXRlc3RSZWxlYXNlID0gYXdhaXQgZ2V0R2l0aHViTGF0ZXN0UmVsZWFzZSgpO1xuICAgIGNvbnN0IGdpdGh1YlZlcnNpb24gPSBnaXRodWJMYXRlc3RSZWxlYXNlPy50YWdfbmFtZT8ucmVwbGFjZSgndicsICcnKTtcbiAgICBjb25zdCBsb2NhbFZlcnNpb24gPSBhd2FpdCBnZXRMb2NhbFZlcnNpb24oKTtcbiAgICBsZXQgdXJsO1xuICAgIGxldCBtZXNzYWdlO1xuXG4gICAgaWYgKGlzVmVyc2lvbkxvd2VyKGxvY2FsVmVyc2lvbiwgZ2l0aHViVmVyc2lvbikpIHtcbiAgICAgIHVybCA9IGdpdGh1YkxhdGVzdFJlbGVhc2UuaHRtbF91cmw7XG4gICAgICBtZXNzYWdlID0gYE9wZGF0ZXIgdGlsIHYuICR7Z2l0aHViVmVyc2lvbn0gKGR1IGhhciAke2xvY2FsVmVyc2lvbn0pYDtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS90ZW5uaXNmYXIvRFMtQ2hyb21lLVVkdmlkZWxzZS9yZWxlYXNlcyc7XG4gICAgICBtZXNzYWdlID0gYFZlcnNpb24gJHtsb2NhbFZlcnNpb259YDtcbiAgICB9XG4gICAgdXBkYXRlRGl2LmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gICAgdXBkYXRlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gd2luZG93Lm9wZW4odXJsKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB1cGRhdGVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuIiwiYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFRhYigpIHtcbiAgbGV0IHF1ZXJ5T3B0aW9ucyA9IHsgYWN0aXZlOiB0cnVlLCBsYXN0Rm9jdXNlZFdpbmRvdzogdHJ1ZSB9O1xuICAvLyBgdGFiYCB3aWxsIGVpdGhlciBiZSBhIGB0YWJzLlRhYmAgaW5zdGFuY2Ugb3IgYHVuZGVmaW5lZGAuXG4gIGxldCBbdGFiXSA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHF1ZXJ5T3B0aW9ucyk7XG4gIHJldHVybiB0YWI7XG59XG5cbmNvbnN0IGhhbmRsZUVuYWJsZUN0YSA9IGFzeW5jIChjdGEpID0+IHtcbiAgY29uc3QgdGFiID0gYXdhaXQgZ2V0Q3VycmVudFRhYigpO1xuXG4gIGlmICh0YWI/LnVybD8uaW5jbHVkZXMoJ2RhbnNrZXNwaWwuZGsnKSAmJiAhdGFiPy51cmw/LmluY2x1ZGVzKCcvc2l0ZWNvcmUvJykpIHtcbiAgICBjdGEucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVPcGVuUGFnZUluRXhwZXJpZW5jZUVkaXRvciA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdGFiID0gYXdhaXQgZ2V0Q3VycmVudFRhYigpO1xuXG4gIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xuICAgICAgbGV0IHNpdGVjb3JlSWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwYWdlX2lkJyk7XG4gICAgICBsZXQgbG8gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgICAgbGV0IGNsID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3Q7XG4gICAgICBsZXQgaXNEbG8gPSBjbC5jb250YWlucygnZGxvJyk7XG4gICAgICBsZXQgaXNEbGkgPSBjbC5jb250YWlucygnZGxpJyk7XG4gICAgICBsZXQgcmVnID0gaXNEbGkgPyAnZGxpJyA6ICdkbG8nO1xuXG4gICAgICBpZiAobG8uaW5jbHVkZXMoJ3Rvd24nKSkgbG8gPSBsby5yZXBsYWNlKCcuZGFuJywgJ2VkaXQnICsgcmVnICsgJy5kYW4nKTtcbiAgICAgIGlmIChsby5pbmNsdWRlcygnLy9kYScpKSBsbyA9IGxvLnJlcGxhY2UoJy8vZGFuJywgJy8vZWRpdCcgKyByZWcgKyAnLmRhbicpO1xuXG4gICAgICBsbyArPSAnLz9zY19tb2RlPWVkaXQnO1xuXG4gICAgICB3aW5kb3cub3BlbihgJHtsb30mc2NfaXRlbWlkPSR7c2l0ZWNvcmVJZH1gLCAnX2JsYW5rJyk7XG4gICAgfSxcbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBPcGVuUGFnZUluRXhwZXJpZW5jZUVkaXRvcigpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BlbkluRXhwZXJpZW5jZUVkaXRvcicpO1xuICAgIGhhbmRsZUVuYWJsZUN0YShjdGEpO1xuXG4gICAgY3RhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaGFuZGxlT3BlblBhZ2VJbkV4cGVyaWVuY2VFZGl0b3IoKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50VGFiKCkge1xuICBsZXQgcXVlcnlPcHRpb25zID0geyBhY3RpdmU6IHRydWUsIGxhc3RGb2N1c2VkV2luZG93OiB0cnVlIH07XG4gIC8vIGB0YWJgIHdpbGwgZWl0aGVyIGJlIGEgYHRhYnMuVGFiYCBpbnN0YW5jZSBvciBgdW5kZWZpbmVkYC5cbiAgbGV0IFt0YWJdID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkocXVlcnlPcHRpb25zKTtcbiAgcmV0dXJuIHRhYjtcbn1cblxuY29uc3QgaGFuZGxlRW5hYmxlQ3RhID0gYXN5bmMgKGN0YSkgPT4ge1xuICBjb25zdCB0YWIgPSBhd2FpdCBnZXRDdXJyZW50VGFiKCk7XG5cbiAgaWYgKHRhYj8udXJsPy5pbmNsdWRlcygnZGFuc2tlc3BpbC5kaycpICYmICF0YWI/LnVybD8uaW5jbHVkZXMoJy9zaXRlY29yZS8nKSkge1xuICAgIGN0YS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZU9wZW5QYWdlSW5TaXRlY29yZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdGFiID0gYXdhaXQgZ2V0Q3VycmVudFRhYigpO1xuXG4gIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xuICAgICAgbGV0IHNpdGVjb3JlSWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwYWdlX2lkJyk7XG4gICAgICBsZXQgbG8gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgICAgbGV0IGNsID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3Q7XG4gICAgICBsZXQgaXNEbG8gPSBjbC5jb250YWlucygnZGxvJyk7XG4gICAgICBsZXQgaXNEbGkgPSBjbC5jb250YWlucygnZGxpJyk7XG4gICAgICBsZXQgcmVnID0gaXNEbGkgPyAnZGxpJyA6ICdkbG8nO1xuXG4gICAgICBpZiAobG8uaW5jbHVkZXMoJ3Rvd24nKSkgbG8gPSBsby5yZXBsYWNlKCcuZGFuJywgJ2VkaXQnICsgcmVnICsgJy5kYW4nKTtcbiAgICAgIGlmIChsby5pbmNsdWRlcygnLy9kYScpKSBsbyA9IGxvLnJlcGxhY2UoJy8vZGFuJywgJy8vZWRpdCcgKyByZWcgKyAnLmRhbicpO1xuXG4gICAgICBsbyArPSAnL3NpdGVjb3JlL3NoZWxsL0FwcGxpY2F0aW9ucy9Db250ZW50JTIwRWRpdG9yLmFzcHg/c2NfYnc9MSc7XG5cbiAgICAgIHdpbmRvdy5vcGVuKGAke2xvfSZmbz0ke3NpdGVjb3JlSWR9YCwgJ19ibGFuaycpO1xuICAgIH0sXG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwT3BlblBhZ2VJblNpdGVjb3JlKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGN0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuSW5TaXRlY29yZScpO1xuICAgIGhhbmRsZUVuYWJsZUN0YShjdGEpO1xuXG4gICAgY3RhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaGFuZGxlT3BlblBhZ2VJblNpdGVjb3JlKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRUYWIoKSB7XG4gIGxldCBxdWVyeU9wdGlvbnMgPSB7IGFjdGl2ZTogdHJ1ZSwgbGFzdEZvY3VzZWRXaW5kb3c6IHRydWUgfTtcbiAgLy8gYHRhYmAgd2lsbCBlaXRoZXIgYmUgYSBgdGFicy5UYWJgIGluc3RhbmNlIG9yIGB1bmRlZmluZWRgLlxuICBsZXQgW3RhYl0gPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeShxdWVyeU9wdGlvbnMpO1xuICByZXR1cm4gdGFiO1xufVxuIiwiaW1wb3J0IHsgZ2V0Q3VycmVudFRhYiB9IGZyb20gJy4vQ2hyb21lVG9vbHMnO1xuXG5jb25zdCBoYW5kbGVFbmFibGVDdGEgPSBhc3luYyAoY3RhKSA9PiB7XG4gIGNvbnN0IHRhYiA9IGF3YWl0IGdldEN1cnJlbnRUYWIoKTtcblxuICBpZiAodGFiPy51cmw/LmluY2x1ZGVzKCdkYW5za2VzcGlsLmRrJykgJiYgIXRhYj8udXJsPy5pbmNsdWRlcygnL3NpdGVjb3JlLycpKSB7XG4gICAgY3RhLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgfVxufTtcblxuY29uc3QgaGFuZGxlU2hvd0NvbXBvbmVudHMgPSAoKSA9PiB7XG4gIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sICh0YWJzKSA9PiB7XG4gICAgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgIHRhcmdldDogeyB0YWJJZDogdGFic1swXS5pZCB9LFxuICAgICAgZnVuY3Rpb246ICgpID0+IHtcbiAgICAgICAgbGV0IGRzU0M7XG4gICAgICAgIGxldCBuZXh0RWxTaG91bGRCZU1hcmtlZDtcbiAgICAgICAgbGV0IGZvdW5kTmFtZTtcbiAgICAgICAgbGV0IGZvdW5kSWQ7XG4gICAgICAgIGxldCBmb3VuZCA9IFtdO1xuICAgICAgICBsZXQgc2l0ZWNvcmVVcmw7XG4gICAgICAgIGxldCByZXNpemVUaW1lb3V0O1xuICAgICAgICBsZXQgZHNTQ0V4aXN0O1xuXG4gICAgICAgIC8vIHRvZ2dsZVxuICAgICAgICBkc1NDRXhpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHNTQycpO1xuICAgICAgICBpZiAoISFkc1NDRXhpc3QpIHtcbiAgICAgICAgICBkc1NDRXhpc3QucmVtb3ZlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkU3R5bGUgPSAoKSA9PiB7XG4gICAgICAgICAgbGV0IHN0eWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RzU0NTdHlsZScpO1xuICAgICAgICAgIGlmICghIXN0eWxlKSBzdHlsZS5yZW1vdmUoKTtcbiAgICAgICAgICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgc3R5bGUuaWQgPSAnZHNTQ1N0eWxlJztcbiAgICAgICAgICBzdHlsZS5pbm5lclRleHQgPSBgXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDAmZGlzcGxheT1ibG9jaycpO1xuICAgICAgICBcbiAgICAgICAgLmRzU0NfX2l0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogMTAwMDAwMDA7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAnT3BlbiBTYW5zJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHggMCAxMHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjNTg1ODU4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kc1NDX19pdGVtLWNsb3NlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgICAgICAgbWFyZ2luOiAwIC04cHggMCAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZHNTQ19faXRlbS1jbG9zZTo6YmVmb3JlLFxuICAgICAgICAuZHNTQ19faXRlbS1jbG9zZTo6YWZ0ZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDE0cHg7XG4gICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRzU0NfX2l0ZW0tY2xvc2U6OmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZHNTQ19faXRlbS1jbG9zZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZHNTQ19faXRlbSBpbWcge1xuICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRzU0NfX3RhcmdldCB7XG4gICAgICAgICAgZmlsdGVyOiBibHVyKDJweCkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRzU0NfX3RvZ2dsZSB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHotaW5kZXg6IDEwMDAwMDAwMDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZHNTQ19fdG9nZ2xlOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZHNTQ19fdG9nZ2xlIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZHNTQy0taGlkZGVuIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGAucmVwbGFjZSgvXFxuL2csICcnKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgICBkc1NDRXhpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHNTQycpO1xuICAgICAgICAgIGlmICghIWRzU0NFeGlzdCkgZHNTQ0V4aXN0LnJlbW92ZSgpO1xuICAgICAgICAgIGRzU0MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkc1NDLmlkID0gJ2RzU0MnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGdldFNpdGVjb3JlVXJsID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRsbyA9IFtcbiAgICAgICAgICAgICdhbHQtZWxsZXItaW50ZXQnLFxuICAgICAgICAgICAgJ2V1cm9qYWNrcG90JyxcbiAgICAgICAgICAgICdrZW5vJyxcbiAgICAgICAgICAgICdsb3R0bycsXG4gICAgICAgICAgICAndmlraW5nbG90dG8nLFxuICAgICAgICAgICAgJ3BsdXMtYWJvbm5lbWVudCcsXG4gICAgICAgICAgICAncXVpY2snLFxuICAgICAgICAgICAgJ3NwaWwtc2FtbWVuJyxcbiAgICAgICAgICAgICdyb2VkLWtvbnRvJyxcbiAgICAgICAgICBdO1xuICAgICAgICAgIGNvbnN0IGhvc3QgPSB3aW5kb3cubG9jYXRpb24uaG9zdFxuICAgICAgICAgICAgLnJlcGxhY2UoL2RhbnNrZXNwaWxcXC5kay8sICcnKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXC4kLywgJycpO1xuICAgICAgICAgIGNvbnN0IHJlZ2lvbiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpLnJlcGxhY2UoL1xcLy4qJC8sICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGxldCBkbGlPckRsbyA9IGRsby5pbmRleE9mKHJlZ2lvbikgPiAtMSA/ICdlZGl0ZGxvJyA6ICdlZGl0ZGxpJztcbiAgICAgICAgICBkbGlPckRsbyA9IGhvc3QgPT09ICd3ZWIuZGV2ZWxvcCcgfHwgaG9zdCA9PT0gJ3dlYi50cnVuaycgPyAnJyA6IGRsaU9yRGxvO1xuICAgICAgICAgIHNpdGVjb3JlVXJsID0gYGh0dHBzOi8vJHtob3N0fSR7ZGxpT3JEbG99LmRhbnNrZXNwaWwuZGsvc2l0ZWNvcmUvc2hlbGwvQXBwbGljYXRpb25zL0NvbnRlbnQlMjBFZGl0b3IuYXNweD9zY19idz0xJmZvPWA7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY2hlY2tGb3JJZCA9IChjaGlsZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vZGVWYWx1ZSA9IGNoaWxkLm5vZGVWYWx1ZTtcbiAgICAgICAgICBpZiAobm9kZVZhbHVlLm1hdGNoKC9eW15cXC9dLiooey4qfSkvKSkge1xuICAgICAgICAgICAgbmV4dEVsU2hvdWxkQmVNYXJrZWQgPSB0cnVlO1xuICAgICAgICAgICAgZm91bmROYW1lID0gbm9kZVZhbHVlLnJlcGxhY2UoL3suKn0vLCAnJykudHJpbSgpO1xuICAgICAgICAgICAgZm91bmRJZCA9IG5vZGVWYWx1ZS5tYXRjaCgvey4qfS8pWzBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvdXRwdXRDb21tZW50cyA9IChub2RlKSA9PiB7XG4gICAgICAgICAgLy8gaW5pdGlhbGlzZSB0aGUgY2hpbGQgbm9kZVxuICAgICAgICAgIGxldCBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgICAgICBjb25zdCBwcmV2UG9zaXRpb25zID0gW107XG5cbiAgICAgICAgICAvLyBsb29wIHdoaWxlIHRoZSBjaGlsZCBub2RlIGV4aXN0c1xuICAgICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkID09PSBkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgICAvLyBmb3VuZC5tYXAoKGl0ZW0pID0+IGNvbnNvbGUuZXJyb3IoaXRlbS5uYW1lLCBwYXJzZUludChpdGVtLnRvcCkpKVxuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRzU0MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgdGhlIHR5cGUgb2YgdGhlIG5vZGVcbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGQubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgLy8gaWYgdGhlIG5vZGUgaXMgYW4gZWxlbWVudCBub2RlLCByZWN1cnNlIGludG8gaXRcbiAgICAgICAgICAgICAgY2FzZSBOb2RlLkVMRU1FTlRfTk9ERTpcbiAgICAgICAgICAgICAgICBpZiAobmV4dEVsU2hvdWxkQmVNYXJrZWQpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBjaGlsZFRvcFBvcyA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIDEwICsgd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICAgICAgICBsZXQgY2hpbGRMZWZ0UG9zID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIDEwICsgd2luZG93LnNjcm9sbFg7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChjaGlsZExlZnRQb3MgPCAxMCkgY2hpbGRMZWZ0UG9zID0gMTA7XG5cbiAgICAgICAgICAgICAgICAgIGxldCBzdHJpcHBlZElkID0gJ2RzU0NJZCcgKyBmb3VuZElkLnJlcGxhY2UoJ3snLCAnJykucmVwbGFjZSgnfScsICcnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgICBlbC5ocmVmID0gYCR7c2l0ZWNvcmVVcmx9JHtmb3VuZElkfWA7XG4gICAgICAgICAgICAgICAgICBlbC50YXJnZXQgPSAnZHNTaXRlY29yZSc7XG4gICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdkc1NDX19pdGVtJyk7XG4gICAgICAgICAgICAgICAgICBlbC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkc1NDSWQnLCBzdHJpcHBlZElkKTtcbiAgICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoc3RyaXBwZWRJZCk7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChwcmV2UG9zaXRpb25zLmluY2x1ZGVzKGAke2NoaWxkVG9wUG9zfSwke2NoaWxkTGVmdFBvc31gKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFRvcFBvcyArPSAxODtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMZWZ0UG9zICs9IDE4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcHJldlBvc2l0aW9ucy5wdXNoKGAke2NoaWxkVG9wUG9zfSwke2NoaWxkTGVmdFBvc31gKTtcblxuICAgICAgICAgICAgICAgICAgZWwuc3R5bGUudG9wID0gY2hpbGRUb3BQb3MgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgZWwuc3R5bGUubGVmdCA9IGNoaWxkTGVmdFBvcyArICdweCc7XG4gICAgICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBgJHtmb3VuZE5hbWVcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1ZpZXckLywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgvKD89W0EtWl0pLylcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJyAnKX1gO1xuXG4gICAgICAgICAgICAgICAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdkc1NDX19pdGVtLWNsb3NlJyk7XG4gICAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChjbG9zZSk7XG4gICAgICAgICAgICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldi50YXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIGVsLm9ubW91c2VvdmVyID0gKGV2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2V2LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RzU0NJZCcpfWApO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgJiYgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RzU0NfX3RhcmdldCcpO1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIGVsLm9ubW91c2VvdXQgPSAoZXYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZXYudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZHNTQ0lkJyl9YCk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCAmJiB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHNTQ19fdGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICBkc1NDLmFwcGVuZENoaWxkKGVsKTtcblxuICAgICAgICAgICAgICAgICAgbmV4dEVsU2hvdWxkQmVNYXJrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGZvdW5kLnB1c2goeyBuYW1lOiBmb3VuZE5hbWUsIGlkOiBmb3VuZElkLCB0b3A6IGNoaWxkVG9wUG9zIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdXRwdXRDb21tZW50cyhjaGlsZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgLy8gaWYgdGhlIG5vZGUgaXMgYSBjb21tZW50IG5vZGUsIG91dHB1dCBpdHMgdmFsdWVcbiAgICAgICAgICAgICAgY2FzZSBOb2RlLkNPTU1FTlRfTk9ERTpcbiAgICAgICAgICAgICAgICBjaGVja0ZvcklkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbW92ZSB0byB0aGUgbmV4dCBjaGlsZCBub2RlXG4gICAgICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICAgICAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IG91dHB1dENvbW1lbnRzKGRvY3VtZW50LmJvZHkpLCAyMDApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGFkZFN0eWxlKCk7XG4gICAgICAgIGdldFNpdGVjb3JlVXJsKCk7XG5cbiAgICAgICAgaW5pdCgpO1xuICAgICAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiBpbml0KCk7XG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IGluaXQoKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwU2hvd0NvbXBvbmVudHMoKSB7XG4gIGNvbnN0IHNob3dDb21wb25lbnRzQ3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3dTaXRlY29yZUNvbXBvbmVudHMnKTtcbiAgaGFuZGxlRW5hYmxlQ3RhKHNob3dDb21wb25lbnRzQ3RhKTtcblxuICBzaG93Q29tcG9uZW50c0N0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBoYW5kbGVTaG93Q29tcG9uZW50cygpO1xuICB9KTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCB7IHVwZGF0ZVZlcnNpb25CdXR0b24gfSBmcm9tICcuLi9DdXJyZW50VmVyc2lvbic7XG4vLyBpbXBvcnQgeyBqaXJhTWFrZUJyYW5jaCB9IGZyb20gJy4uL0ppcmFNYWtlQnJhbmNoJztcbi8vIGltcG9ydCB7IHNldHVwT3BlblNpdGVjb3JlIH0gZnJvbSAnLi4vT3BlblNpdGVjb3JlJztcbmltcG9ydCB7IHNldHVwT3BlblBhZ2VJbkV4cGVyaWVuY2VFZGl0b3IgfSBmcm9tICcuLi9PcGVuUGFnZUluRXhwZXJpZW5jZUVkaXRvcic7XG5pbXBvcnQgeyBzZXR1cE9wZW5QYWdlSW5TaXRlY29yZSB9IGZyb20gJy4uL09wZW5QYWdlSW5TaXRlY29yZSc7XG5pbXBvcnQgeyBzZXR1cFNob3dDb21wb25lbnRzIH0gZnJvbSAnLi4vU2hvd0NvbXBvbmVudHMnO1xuLy8gaW1wb3J0IHsgc2V0dXBTZXR0aW5ncyB9IGZyb20gJy4uL1NldHRpbmdzJztcblxudXBkYXRlVmVyc2lvbkJ1dHRvbigpO1xuLy8gamlyYU1ha2VCcmFuY2goKTtcbi8vIHNldHVwT3BlblNpdGVjb3JlKCk7XG5zZXR1cE9wZW5QYWdlSW5FeHBlcmllbmNlRWRpdG9yKCk7XG5zZXR1cE9wZW5QYWdlSW5TaXRlY29yZSgpO1xuc2V0dXBTaG93Q29tcG9uZW50cygpO1xuLy8gc2V0dXBTZXR0aW5ncygpO1xuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwiaXNWZXJzaW9uTG93ZXIiLCJ1c2VyVmVyc2lvbiIsIm5ld1ZlcnNpb24iLCJ1c2VyUGFydHMiLCJzcGxpdCIsIm1hcCIsIk51bWJlciIsIm5ld1BhcnRzIiwiTWF0aCIsIm1heCIsInVzZXJQYXJ0IiwibmV3UGFydCIsImdldEdpdGh1YkxhdGVzdFJlbGVhc2UiLCJfcmVmIiwiX2NhbGxlZSIsImdpdEh1YlJlc3BvbnNlIiwicmVsZWFzZXMiLCJfY29udGV4dCIsImZldGNoIiwianNvbiIsImdldExvY2FsVmVyc2lvbiIsIl9yZWYyIiwiX2NhbGxlZTIiLCJsb2NhbERhdGFSZXNwb25zZSIsImxvY2FsRGF0YSIsIl9jb250ZXh0MiIsInZlcnNpb24iLCJfdXBkYXRlVmVyc2lvbkJ1dHRvbiIsIl9jYWxsZWUzIiwidXBkYXRlRGl2IiwiX2dpdGh1YkxhdGVzdFJlbGVhc2UkIiwiZ2l0aHViTGF0ZXN0UmVsZWFzZSIsImdpdGh1YlZlcnNpb24iLCJsb2NhbFZlcnNpb24iLCJ1cmwiLCJtZXNzYWdlIiwiX2NvbnRleHQzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGFnX25hbWUiLCJyZXBsYWNlIiwiaHRtbF91cmwiLCJjb25jYXQiLCJpbm5lclRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwib3BlbiIsInQwIiwic3R5bGUiLCJkaXNwbGF5IiwiZ2V0Q3VycmVudFRhYiIsIl9nZXRDdXJyZW50VGFiIiwicXVlcnlPcHRpb25zIiwiX3lpZWxkJGNocm9tZSR0YWJzJHF1IiwiX3lpZWxkJGNocm9tZSR0YWJzJHF1MiIsInRhYiIsImFjdGl2ZSIsImxhc3RGb2N1c2VkV2luZG93IiwiY2hyb21lIiwidGFicyIsInF1ZXJ5IiwiaGFuZGxlRW5hYmxlQ3RhIiwiY3RhIiwiX3RhYiR1cmwiLCJfdGFiJHVybDIiLCJpbmNsdWRlcyIsInJlbW92ZUF0dHJpYnV0ZSIsIl94IiwiaGFuZGxlT3BlblBhZ2VJbkV4cGVyaWVuY2VFZGl0b3IiLCJzY3JpcHRpbmciLCJleGVjdXRlU2NyaXB0IiwidGFyZ2V0IiwidGFiSWQiLCJpZCIsImZ1bmN0aW9uIiwic2l0ZWNvcmVJZCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImxvIiwibG9jYXRpb24iLCJvcmlnaW4iLCJjbCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZWciLCJjb250YWlucyIsImhhbmRsZU9wZW5QYWdlSW5TaXRlY29yZSIsIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyIiwibGVuIiwiYXJyMiIsIkFycmF5IiwiaXNBcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIm1pbkxlbiIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0Iiwic2hvd0NvbXBvbmVudHNDdGEiLCJoYW5kbGVTaG93Q29tcG9uZW50cyIsImN1cnJlbnRXaW5kb3ciLCJkc1NDIiwibmV4dEVsU2hvdWxkQmVNYXJrZWQiLCJmb3VuZE5hbWUiLCJmb3VuZElkIiwic2l0ZWNvcmVVcmwiLCJyZXNpemVUaW1lb3V0IiwiZHNTQ0V4aXN0IiwiZm91bmQiLCJyZW1vdmUiLCJob3N0IiwicmVnaW9uIiwiZGxpT3JEbG8iLCJjaGVja0ZvcklkIiwiY2hpbGQiLCJub2RlVmFsdWUiLCJtYXRjaCIsInRyaW0iLCJvdXRwdXRDb21tZW50cyIsIm5vZGUiLCJmaXJzdENoaWxkIiwicHJldlBvc2l0aW9ucyIsImxhc3RDaGlsZCIsImFwcGVuZENoaWxkIiwibm9kZVR5cGUiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiY2hpbGRUb3BQb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxZIiwiY2hpbGRMZWZ0UG9zIiwibGVmdCIsInNjcm9sbFgiLCJzdHJpcHBlZElkIiwidG9Mb3dlckNhc2UiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiYWRkIiwiZHJhZ2dhYmxlIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiam9pbiIsImNsb3NlIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudEVsZW1lbnQiLCJvbm1vdXNlb3ZlciIsImdldEF0dHJpYnV0ZSIsIm9ubW91c2VvdXQiLCJDT01NRU5UX05PREUiLCJuZXh0U2libGluZyIsImluaXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicGF0aG5hbWUiLCJpbmRleE9mIiwib25yZXNpemUiLCJvbnNjcm9sbCIsInVwZGF0ZVZlcnNpb25CdXR0b24iXSwic291cmNlUm9vdCI6IiJ9
