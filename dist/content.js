/*! For license information please see content.js.LICENSE.txt */
(() => {
  'use strict';
  function e(t) {
    return (
      (e =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      e(t)
    );
  }
  var t = function (e) {
      var t,
        n = location.host.split('.'),
        r = location.protocol + '//',
        o = n[0].includes('town');
      return (
        (t = n[0].includes('web')
          ? 'web.'.concat(n[1])
          : o
            ? ''.concat(n[0], 'edit').concat(e ? 'dlo' : 'dli')
            : 'edit'.concat(e ? 'dlo' : 'dli')),
        ''
          .concat(r)
          .concat(
            t,
            '.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/Site%20settings/Dictionary/'
          )
      );
    },
    n = function () {
      var e = function (e) {
        var t = document.getElementById(e);
        t && t.remove();
      };
      e('findTextInDictionaries'), e('findTextInDictionariesStyle');
    },
    r = function (e, t) {
      var n = document.getElementById(e);
      return n || ((n = t()), document.body.appendChild(n)), n;
    },
    o = function (e) {
      var t,
        n,
        o = r('findTextInDictionaries', function () {
          var e = document.createElement('div');
          return (e.id = 'findTextInDictionaries'), e;
        });
      (o.innerText = ''),
        (t = r('findTextInDictionariesStyle', function () {
          var e = document.createElement('style');
          return (e.id = 'findTextInDictionariesStyle'), e;
        })),
        (n =
          '\n        #findTextInDictionaries {\n          position: fixed;\n          z-index: 1000000001;\n          left: 0;\n          top: 100vh;\n          font-size: 12px;\n          line-height: 1.2;\n          background: #ededed;\n          padding: 15px 20px;\n          box-shadow: 0 1px 13px 1px #ccc;\n          max-height: 95vh;\n          max-width: 95vw;\n        }\n        \n        #findTextInDictionaries::after {\n          position: absolute;\n          z-index: 1000000000;\n          content: "'.concat(
            e.length,
            '";\n          top: -35px;\n          left: 10px;\n          width: 40px;\n          height: 40px;\n          background: #bdffe5;\n          color: black;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          border-radius: 50% 50% 0 0;\n        }\n        \n        #findTextInDictionaries:hover {\n          top: auto;\n          bottom: 0;\n          overflow: auto;\n        }\n        \n        #findTextInDictionaries a {\n          text-decoration: none;\n        }\n        \n        #findTextInDictionaries a:hover {\n          text-decoration: underline;\n        }\n        \n        #findTextInDictionaries p {\n          background: white;\n          padding: 10px;\n          margin-bottom: 5px;\n        }\n        \n        #findTextInDictionaries a {\n          margin: 0 0 5px 10px;\n          display: inline-block;\n        }\n        '
          )),
        (t.innerText = n),
        e.forEach(function (e) {
          var t = e.txt,
            n = e.url,
            r = e.key,
            i = document.createElement('div'),
            a = document.createElement('p'),
            c = document.createElement('a');
          (a.innerText = t),
            (c.href = n),
            (c.target = '_blank'),
            (c.text = r),
            i.appendChild(a),
            i.appendChild(c),
            o.appendChild(i);
        });
    };
  function i(e) {
    return (
      (i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      i(e)
    );
  }
  function a() {
    a = function () {
      return t;
    };
    var e,
      t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value;
        },
      c = 'function' == typeof Symbol ? Symbol : {},
      u = c.iterator || '@@iterator',
      s = c.asyncIterator || '@@asyncIterator',
      l = c.toStringTag || '@@toStringTag';
    function d(e, t, n) {
      return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
    }
    try {
      d({}, '');
    } catch (e) {
      d = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function h(e, t, n, r) {
      var i = t && t.prototype instanceof x ? t : x,
        a = Object.create(i.prototype),
        c = new j(r || []);
      return o(a, '_invoke', { value: T(e, n, c) }), a;
    }
    function p(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) };
      } catch (e) {
        return { type: 'throw', arg: e };
      }
    }
    t.wrap = h;
    var f = 'suspendedStart',
      y = 'suspendedYield',
      m = 'executing',
      v = 'completed',
      g = {};
    function x() {}
    function w() {}
    function b() {}
    var E = {};
    d(E, u, function () {
      return this;
    });
    var k = Object.getPrototypeOf,
      L = k && k(k(_([])));
    L && L !== n && r.call(L, u) && (E = L);
    var S = (b.prototype = x.prototype = Object.create(E));
    function C(e) {
      ['next', 'throw', 'return'].forEach(function (t) {
        d(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function F(e, t) {
      function n(o, a, c, u) {
        var s = p(e[o], e, a);
        if ('throw' !== s.type) {
          var l = s.arg,
            d = l.value;
          return d && 'object' == i(d) && r.call(d, '__await')
            ? t.resolve(d.__await).then(
                function (e) {
                  n('next', e, c, u);
                },
                function (e) {
                  n('throw', e, c, u);
                }
              )
            : t.resolve(d).then(
                function (e) {
                  (l.value = e), c(l);
                },
                function (e) {
                  return n('throw', e, c, u);
                }
              );
        }
        u(s.arg);
      }
      var a;
      o(this, '_invoke', {
        value: function (e, r) {
          function o() {
            return new t(function (t, o) {
              n(e, r, t, o);
            });
          }
          return (a = a ? a.then(o, o) : o());
        },
      });
    }
    function T(t, n, r) {
      var o = f;
      return function (i, a) {
        if (o === m) throw new Error('Generator is already running');
        if (o === v) {
          if ('throw' === i) throw a;
          return { value: e, done: !0 };
        }
        for (r.method = i, r.arg = a; ; ) {
          var c = r.delegate;
          if (c) {
            var u = I(c, r);
            if (u) {
              if (u === g) continue;
              return u;
            }
          }
          if ('next' === r.method) r.sent = r._sent = r.arg;
          else if ('throw' === r.method) {
            if (o === f) throw ((o = v), r.arg);
            r.dispatchException(r.arg);
          } else 'return' === r.method && r.abrupt('return', r.arg);
          o = m;
          var s = p(t, n, r);
          if ('normal' === s.type) {
            if (((o = r.done ? v : y), s.arg === g)) continue;
            return { value: s.arg, done: r.done };
          }
          'throw' === s.type && ((o = v), (r.method = 'throw'), (r.arg = s.arg));
        }
      };
    }
    function I(t, n) {
      var r = n.method,
        o = t.iterator[r];
      if (o === e)
        return (
          (n.delegate = null),
          ('throw' === r && t.iterator.return && ((n.method = 'return'), (n.arg = e), I(t, n), 'throw' === n.method)) ||
            ('return' !== r &&
              ((n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          g
        );
      var i = p(o, t.iterator, n.arg);
      if ('throw' === i.type) return (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), g;
      var a = i.arg;
      return a
        ? a.done
          ? ((n[t.resultName] = a.value),
            (n.next = t.nextLoc),
            'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
            (n.delegate = null),
            g)
          : a
        : ((n.method = 'throw'), (n.arg = new TypeError('iterator result is not an object')), (n.delegate = null), g);
    }
    function P(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
    }
    function O(e) {
      var t = e.completion || {};
      (t.type = 'normal'), delete t.arg, (e.completion = t);
    }
    function j(e) {
      (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(P, this), this.reset(!0);
    }
    function _(t) {
      if (t || '' === t) {
        var n = t[u];
        if (n) return n.call(t);
        if ('function' == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            a = function n() {
              for (; ++o < t.length; ) if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
              return (n.value = e), (n.done = !0), n;
            };
          return (a.next = a);
        }
      }
      throw new TypeError(i(t) + ' is not iterable');
    }
    return (
      (w.prototype = b),
      o(S, 'constructor', { value: b, configurable: !0 }),
      o(b, 'constructor', { value: w, configurable: !0 }),
      (w.displayName = d(b, l, 'GeneratorFunction')),
      (t.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor;
        return !!t && (t === w || 'GeneratorFunction' === (t.displayName || t.name));
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : ((e.__proto__ = b), d(e, l, 'GeneratorFunction')),
          (e.prototype = Object.create(S)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      C(F.prototype),
      d(F.prototype, s, function () {
        return this;
      }),
      (t.AsyncIterator = F),
      (t.async = function (e, n, r, o, i) {
        void 0 === i && (i = Promise);
        var a = new F(h(e, n, r, o), i);
        return t.isGeneratorFunction(n)
          ? a
          : a.next().then(function (e) {
              return e.done ? e.value : a.next();
            });
      }),
      C(S),
      d(S, l, 'Generator'),
      d(S, u, function () {
        return this;
      }),
      d(S, 'toString', function () {
        return '[object Generator]';
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.push(r);
        return (
          n.reverse(),
          function e() {
            for (; n.length; ) {
              var r = n.pop();
              if (r in t) return (e.value = r), (e.done = !1), e;
            }
            return (e.done = !0), e;
          }
        );
      }),
      (t.values = _),
      (j.prototype = {
        constructor: j,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(O),
            !t)
          )
            for (var n in this) 't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ('throw' === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function o(r, o) {
            return (c.type = 'throw'), (c.arg = t), (n.next = r), o && ((n.method = 'next'), (n.arg = e)), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              c = a.completion;
            if ('root' === a.tryLoc) return o('end');
            if (a.tryLoc <= this.prev) {
              var u = r.call(a, 'catchLoc'),
                s = r.call(a, 'finallyLoc');
              if (u && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!s) throw new Error('try statement without catch or finally');
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n];
            if (o.tryLoc <= this.prev && r.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ('break' === e || 'continue' === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = e), (a.arg = t), i ? ((this.method = 'next'), (this.next = i.finallyLoc), g) : this.complete(a)
          );
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg;
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
            g
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), O(n), g;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var r = n.completion;
              if ('throw' === r.type) {
                var o = r.arg;
                O(n);
              }
              return o;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (t, n, r) {
          return (
            (this.delegate = { iterator: _(t), resultName: n, nextLoc: r }), 'next' === this.method && (this.arg = e), g
          );
        },
      }),
      t
    );
  }
  function c(e, t, n, r, o, i, a) {
    try {
      var c = e[i](a),
        u = c.value;
    } catch (e) {
      return void n(e);
    }
    c.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function u(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, o) {
        var i = e.apply(t, n);
        function a(e) {
          c(i, r, o, a, u, 'next', e);
        }
        function u(e) {
          c(i, r, o, a, u, 'throw', e);
        }
        a(void 0);
      });
    };
  }
  var s = (function () {
    var e = u(
      a().mark(function e(t) {
        return a().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (document.querySelector(t)) {
                  e.next = 5;
                  break;
                }
                return (
                  (e.next = 3),
                  new Promise(function (e) {
                    return requestAnimationFrame(e);
                  })
                );
              case 3:
                e.next = 0;
                break;
              case 5:
                return e.abrupt('return', document.querySelector(t));
              case 6:
              case 'end':
                return e.stop();
            }
        }, e);
      })
    );
    return function (t) {
      return e.apply(this, arguments);
    };
  })();
  function l() {
    return (l = u(
      a().mark(function e() {
        var t, n, r, o, i;
        return a().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ('github.com' !== location.host || !location.search.includes('?newBranch=')) {
                  e.next = 14;
                  break;
                }
                return (
                  (t = new URLSearchParams(location.search)),
                  (n = t.get('newBranch')),
                  (e.next = 5),
                  s('[app-name="repos-branches"] button')
                );
              case 5:
                return (
                  null == (r = e.sent) || r.click(), (e.next = 9), s('[role=dialog][data-focus-trap="active"] input')
                );
              case 9:
                (o = e.sent) &&
                  setTimeout(function () {
                    o.setAttribute('value', n),
                      ['input', 'change', 'keyup'].forEach(function (e) {
                        var t = new Event(e, { bubbles: !0, cancelable: !0 });
                        o.dispatchEvent(t);
                      });
                  }, 500),
                  (i = new URL(window.location)).searchParams.delete('newBranch'),
                  history.pushState({}, '', i);
              case 14:
              case 'end':
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  var d = '',
    h = !1,
    p = '500px;',
    f = function () {
      document.querySelectorAll('.scContentControlSelectedList').forEach(function (e) {
        if (!e.classList.contains('ChromeExtensionAddUrlToTreeListIds')) {
          var t = e.querySelectorAll('select option'),
            n = e.parentElement.querySelector('.scContentControlTreeListHelp');
          n &&
            0 !== t.length &&
            (e.classList.add('ChromeExtensionAddUrlToTreeListIds'),
            t.forEach(function (e) {
              var t,
                r =
                  null === (t = e.value) || void 0 === t || null === (t = t.split('|')) || void 0 === t ? void 0 : t[1];
              r &&
                e.addEventListener('click', function () {
                  var e = new URL(location.href);
                  e.searchParams.set('fo', r),
                    n.innerHTML.includes(r) ||
                      (n.innerHTML = ''
                        .concat(n.innerHTML, ' <a href="')
                        .concat(e.href, '" target="_blank" style="margin-left: 10px;">')
                        .concat(r, '</a>'));
                });
            }));
        }
      });
    },
    y = function () {
      return document.querySelector('.scContentTreeNodeActive span').innerText;
    },
    m = function () {
      return document.querySelector('.scEditorQuickInfo tr:nth-child(3) .scEditorHeaderQuickInfoInput').value;
    },
    v = function () {
      var e = y();
      if (e !== d) {
        d = e;
        var t = document.querySelector('#bookmarkLink'),
          n = document.querySelector('#bookmarkStyle');
        t ||
          (((t = document.createElement('a')).id = 'bookmarkLink'),
          document.querySelector('body').appendChild(t),
          ((n = document.createElement('style')).id = 'bookmarkStyle'),
          document.querySelector('body').appendChild(n)),
          (t.href =
            "javascript:window.location.href=window.location.origin+'/sitecore/shell/Applications/Content Editor.aspx?sc_bw=1&fo=".concat(
              m(),
              "'"
            )),
          (t.innerHTML = e),
          (n.innerHTML =
            "\n      #bookmarkLink {\n          position: fixed;\n          z-index: 1000000;\n          top: 11px;\n          left: 60px;\n          cursor: pointer;\n          height: 30px;\n          display: flex;\n          align-items: center;\n          font-size: 10px;\n          font-weight: 500;\n          font-family: 'Montserrat', 'Open Sans', Helvetica, Arial, sans-serif;\n          background: black;\n          color: white;\n          padding: 0 8px 0 7px;\n          box-shadow: 0 0 0px 1px #585858;\n          border-radius: 3px;\n          text-decoration: none;\n          line-height: 15px;\n      }\n    ");
      }
    },
    g = function () {
      document
        .querySelectorAll('.scEditorSectionPanelCell .scContentControl.scContentControlTreelist')
        .forEach(function (e) {
          220 === e.clientHeight && (e.style.height = '400px');
        });
    },
    x = function () {
      var e = document.querySelectorAll('.scEditorFieldMarkerInputCell textarea');
      if (0 !== e.length) {
        if (!document.getElementById('fixInputCellTextArea')) {
          var t = document.createElement('style');
          (t.id = 'fixInputCellTextArea'),
            (t.innerHTML =
              '\n      .monospace-font {font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;}\n    '),
            document.querySelector('body').appendChild(t);
        }
        e.forEach(function (e) {
          e.classList.contains('monospace-font') ||
            (e.classList.add('monospace-font'),
            e.setAttribute('spellcheck', !1),
            e.addEventListener('focus', function () {
              (this.style.height = '800px'), (this.style.fontSize = '13px'), (this.style.lineHeight = '1.45');
            }),
            e.addEventListener('blur', function () {
              this.style = 'height: '.concat(p);
            }));
        });
      }
    },
    w = function () {
      if (document.querySelector('[id*="Section_Data"]')) {
        var e = document.querySelector('[id*="Section_Data"]').parentElement.querySelector('.scContentControlTreelist');
        e && (e.style = 'height: '.concat(p));
      }
    },
    b = function e() {
      var t = document.querySelector('#ChromeExtensionForSitecoreFavoritesStyle');
      t ||
        (((t = document.createElement('style')).id = 'ChromeExtensionForSitecoreFavoritesStyle'),
        document.querySelector('body').appendChild(t),
        (t.innerHTML =
          '\n      .sc-globalHeader {\n        z-index: 101;\n      }\n      \n      #ChromeExtensionForSitecoreFavorites {\n        position: relative;\n        cursor: pointer;\n      }\n      #ChromeExtensionForSitecoreFavoritesPopup {\n        position: absolute;\n        z-index: 100000;\n        background: #2b2b2b;\n        top: 50px;\n        right: 10px;\n        min-width: 200px;\n        text-align: left;\n        padding: 0 5px 6px;\n      }\n      \n      .ChromeExtensionForSitecoreFavoritesPopupItem {\n        position: relative;\n        height: auto;\n        padding: 6px 7px;\n        line-height: 1.4;\n        font-size: 12px;\n        cursor: pointer;\n        padding-right: 35px;\n        white-space: nowrap;\n      }\n      .ChromeExtensionForSitecoreFavoritesPopupItem:hover {\n        background: black;\n        text-decoration: underline;\n      }\n      \n      .ChromeExtensionForSitecoreFavoritesPopupItem span.ChromeExtensionForSitecoreFavoritesPopupItemRemove {\n        position: absolute;\n        z-index: 1;\n        top: 5px;\n        right: 5px;\n        background: black;\n        width: 18px;\n        height: 18px;\n        text-align: center;\n      }\n      \n      .ChromeExtensionForSitecoreFavoritesPopupItem span.ChromeExtensionForSitecoreFavoritesPopupItemRemove:hover {\n        background: red; \n      }\n      \n      .ChromeExtensionForSitecoreFavoritesPopupItem span.ChromeExtensionForSitecoreFavoritesPopupItemParent {\n        color: #969696;\n      }\n    \n      #ChromeExtensionForSitecoreFavoritesPopupAddFavorite {\n        height: auto;\n        padding: 6px 7px;\n        line-height: 1.4;\n        font-size: 12px;\n        cursor: pointer;\n        background: red;\n        white-space: nowrap;\n      }')),
        chrome.storage.sync.get('favorites', function (t) {
          var n = t.favorites;
          (n = n || []).length > 1 &&
            (n = n.sort(function (e, t) {
              return e.path > t.path ? 1 : -1;
            }));
          var r = document.querySelector('.sc-accountInformation'),
            o = document.querySelector('#ChromeExtensionForSitecoreFavorites'),
            i = document.querySelector('#ChromeExtensionForSitecoreFavoritesPopup');
          if (
            (o ||
              (((o = document.createElement('li')).id = 'ChromeExtensionForSitecoreFavorites'),
              (o.innerText = 'Favorites'),
              r.insertBefore(o, r.firstChild),
              o.addEventListener('click', function () {
                (h = !h), e();
              })),
            !h && i && o.removeChild(i),
            h)
          ) {
            i ||
              (((i = document.createElement('div')).id = 'ChromeExtensionForSitecoreFavoritesPopup'), o.appendChild(i)),
              n.forEach(function (t) {
                var r = document.querySelector('[ChromeExtensionForSitecoreFavoritesPopupItem="'.concat(t.path, '"]'));
                if (!r) {
                  ((r = document.createElement('div')).className = 'ChromeExtensionForSitecoreFavoritesPopupItem'),
                    r.setAttribute('ChromeExtensionForSitecoreFavoritesPopupItem', t.path),
                    r.addEventListener('click', function () {
                      window.location.href = ''
                        .concat(location.origin)
                        .concat(location.pathname, '?sc_bw=1&fo=')
                        .concat(t.path);
                    }),
                    r.appendChild(
                      (function (e) {
                        var t = e.path.split('/');
                        t.pop(), (t = t.join('/')), (t = ''.concat(t, '/ '));
                        var n = document.createElement('span');
                        return (
                          (n.className = 'ChromeExtensionForSitecoreFavoritesPopupItemParent'), (n.innerText = t), n
                        );
                      })(t)
                    ),
                    r.appendChild(
                      (function (e) {
                        var t = document.createElement('span');
                        return (t.innerText = e.label), t;
                      })(t)
                    );
                  var o = document.createElement('span');
                  (o.className = 'ChromeExtensionForSitecoreFavoritesPopupItemRemove'),
                    (o.innerText = 'x'),
                    o.addEventListener('click', function () {
                      (n = n.filter(function (e) {
                        return e !== t;
                      })),
                        chrome.storage.sync.set({ favorites: n }),
                        i.removeChild(r),
                        e();
                    }),
                    r.appendChild(o),
                    i.appendChild(r);
                }
              });
            var a = document.querySelector('[ChromeExtensionForSitecoreFavoritesPopupItem = "'.concat(m(), '"]')),
              c = document.getElementById('ChromeExtensionForSitecoreFavoritesPopupAddFavorite');
            c && i.removeChild(c),
              a ||
                (((c = document.createElement('div')).id = 'ChromeExtensionForSitecoreFavoritesPopupAddFavorite'),
                (c.innerText = 'Add '.concat(y(), ' ? ')),
                c.addEventListener('click', function (t) {
                  n.push({ label: y(), path: m() }), chrome.storage.sync.set({ favorites: n }), e();
                }),
                i.appendChild(c));
          }
        });
    },
    E = function () {
      var e,
        t = null === (e = document.getElementById('EditorFrames')) || void 0 === e ? void 0 : e.querySelector('div'),
        n = 'none' !== (null == t ? void 0 : t.style.display),
        r = null == t ? void 0 : t.querySelector('table.scEditorQuickInfo tbody');
      if (null != t && t.id && n && r && !r.querySelector('#scToolMediaPath')) {
        var o = document.createElement('tr');
        o.id = 'scToolMediaPath';
        var i = document.createElement('td'),
          a = document.createElement('td'),
          c = (document.createElement('style'), document.createElement('input'));
        c.setAttribute('readonly', 'readonly'),
          c.setAttribute('onclick', 'javascript:this.select();return false'),
          (c.value = '-/media/' + t.id.replace('FContent', '') + '.ashx'),
          (i.innerText = 'Relativ sti:'),
          a.appendChild(c),
          o.appendChild(i),
          o.appendChild(a),
          r.appendChild(o);
      }
    },
    k = function () {
      var e, t;
      location.host.endsWith('danskespil.dk') &&
        (decodeURIComponent(location.pathname).match(/\/sitecore\/shell\/applications\/content[- ]editor\.aspx/i) &&
          ((function () {
            var e = 400;
            (document.cookie = 'scContentEditorFoldersWidth='.concat(
              e,
              '; expires=Thu, 31 Dec 2100 12:00:00 UTC; path=/'
            )),
              (document.querySelector('#ContentTreePanel').style.width = ''.concat(e, 'px')),
              (document.querySelector('.splitter-bar-vertical').style.left = ''.concat(e, 'px'));
            var t = document.querySelector('#ContentEditor');
            (t.style.width = parseInt(t.style.width) - e + parseInt(t.style.left) + 'px'),
              (t.style.left = ''.concat(e, 'px'));
          })(),
          (t = (e = document.querySelectorAll('.scContentTreeNodeActive')[0]).parentElement.querySelector('img')) &&
            t.click(),
          e && e.parentElement && e.parentElement.scrollIntoView(),
          v(),
          setInterval(f, 500),
          setInterval(g, 500),
          setInterval(x, 500),
          setInterval(v, 500),
          setInterval(w, 500),
          b(),
          document.addEventListener('click', function () {
            return setTimeout(b, 500);
          })),
        decodeURIComponent(location.pathname).match(
          /\/sitecore\/shell\/applications\/content[- ]manager\/default\.aspx/i
        ) && setInterval(E, 500));
    };
  function L() {
    var e = document.querySelector('#issuedetails #type-val'),
      t = document.querySelector('.issue-link'),
      n = document.querySelector('#summary-val');
    if (
      (document.querySelector('.ghx-columns .ghx-issue.ghx-selected') &&
        ((e = document.querySelector('.ghx-issue.ghx-selected .ghx-type')),
        (t = document.querySelector('.ghx-issue.ghx-selected .ghx-key')),
        (n = document.querySelector('.ghx-issue.ghx-selected .ghx-summary'))),
      e && t && n)
    )
      return (
        'bug' === (e = (e = (e = e.innerText || e.title).trim().toLowerCase()).replace(/story/, 'feature')) &&
          (e = 'bugfix'),
        (t = t.innerText.trim()),
        (n = n.innerText
          .toLowerCase()
          .replace(/[^a-z ]/g, '-')
          .replace(/ /g, '-')
          .replace(/--+/g, '-')),
        ''.concat(e, '/').concat(t, '-').concat(n).slice(0, 50).replace(/-$/, '')
      );
  }
  window.makeBranchName = L;
  const S = L;
  function C(e) {
    return (
      (C =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      C(e)
    );
  }
  function F() {
    F = function () {
      return t;
    };
    var e,
      t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value;
        },
      i = 'function' == typeof Symbol ? Symbol : {},
      a = i.iterator || '@@iterator',
      c = i.asyncIterator || '@@asyncIterator',
      u = i.toStringTag || '@@toStringTag';
    function s(e, t, n) {
      return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
    }
    try {
      s({}, '');
    } catch (e) {
      s = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function l(e, t, n, r) {
      var i = t && t.prototype instanceof v ? t : v,
        a = Object.create(i.prototype),
        c = new j(r || []);
      return o(a, '_invoke', { value: T(e, n, c) }), a;
    }
    function d(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) };
      } catch (e) {
        return { type: 'throw', arg: e };
      }
    }
    t.wrap = l;
    var h = 'suspendedStart',
      p = 'suspendedYield',
      f = 'executing',
      y = 'completed',
      m = {};
    function v() {}
    function g() {}
    function x() {}
    var w = {};
    s(w, a, function () {
      return this;
    });
    var b = Object.getPrototypeOf,
      E = b && b(b(_([])));
    E && E !== n && r.call(E, a) && (w = E);
    var k = (x.prototype = v.prototype = Object.create(w));
    function L(e) {
      ['next', 'throw', 'return'].forEach(function (t) {
        s(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function S(e, t) {
      function n(o, i, a, c) {
        var u = d(e[o], e, i);
        if ('throw' !== u.type) {
          var s = u.arg,
            l = s.value;
          return l && 'object' == C(l) && r.call(l, '__await')
            ? t.resolve(l.__await).then(
                function (e) {
                  n('next', e, a, c);
                },
                function (e) {
                  n('throw', e, a, c);
                }
              )
            : t.resolve(l).then(
                function (e) {
                  (s.value = e), a(s);
                },
                function (e) {
                  return n('throw', e, a, c);
                }
              );
        }
        c(u.arg);
      }
      var i;
      o(this, '_invoke', {
        value: function (e, r) {
          function o() {
            return new t(function (t, o) {
              n(e, r, t, o);
            });
          }
          return (i = i ? i.then(o, o) : o());
        },
      });
    }
    function T(t, n, r) {
      var o = h;
      return function (i, a) {
        if (o === f) throw new Error('Generator is already running');
        if (o === y) {
          if ('throw' === i) throw a;
          return { value: e, done: !0 };
        }
        for (r.method = i, r.arg = a; ; ) {
          var c = r.delegate;
          if (c) {
            var u = I(c, r);
            if (u) {
              if (u === m) continue;
              return u;
            }
          }
          if ('next' === r.method) r.sent = r._sent = r.arg;
          else if ('throw' === r.method) {
            if (o === h) throw ((o = y), r.arg);
            r.dispatchException(r.arg);
          } else 'return' === r.method && r.abrupt('return', r.arg);
          o = f;
          var s = d(t, n, r);
          if ('normal' === s.type) {
            if (((o = r.done ? y : p), s.arg === m)) continue;
            return { value: s.arg, done: r.done };
          }
          'throw' === s.type && ((o = y), (r.method = 'throw'), (r.arg = s.arg));
        }
      };
    }
    function I(t, n) {
      var r = n.method,
        o = t.iterator[r];
      if (o === e)
        return (
          (n.delegate = null),
          ('throw' === r && t.iterator.return && ((n.method = 'return'), (n.arg = e), I(t, n), 'throw' === n.method)) ||
            ('return' !== r &&
              ((n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          m
        );
      var i = d(o, t.iterator, n.arg);
      if ('throw' === i.type) return (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), m;
      var a = i.arg;
      return a
        ? a.done
          ? ((n[t.resultName] = a.value),
            (n.next = t.nextLoc),
            'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
            (n.delegate = null),
            m)
          : a
        : ((n.method = 'throw'), (n.arg = new TypeError('iterator result is not an object')), (n.delegate = null), m);
    }
    function P(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
    }
    function O(e) {
      var t = e.completion || {};
      (t.type = 'normal'), delete t.arg, (e.completion = t);
    }
    function j(e) {
      (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(P, this), this.reset(!0);
    }
    function _(t) {
      if (t || '' === t) {
        var n = t[a];
        if (n) return n.call(t);
        if ('function' == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < t.length; ) if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
              return (n.value = e), (n.done = !0), n;
            };
          return (i.next = i);
        }
      }
      throw new TypeError(C(t) + ' is not iterable');
    }
    return (
      (g.prototype = x),
      o(k, 'constructor', { value: x, configurable: !0 }),
      o(x, 'constructor', { value: g, configurable: !0 }),
      (g.displayName = s(x, u, 'GeneratorFunction')),
      (t.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor;
        return !!t && (t === g || 'GeneratorFunction' === (t.displayName || t.name));
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : ((e.__proto__ = x), s(e, u, 'GeneratorFunction')),
          (e.prototype = Object.create(k)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      L(S.prototype),
      s(S.prototype, c, function () {
        return this;
      }),
      (t.AsyncIterator = S),
      (t.async = function (e, n, r, o, i) {
        void 0 === i && (i = Promise);
        var a = new S(l(e, n, r, o), i);
        return t.isGeneratorFunction(n)
          ? a
          : a.next().then(function (e) {
              return e.done ? e.value : a.next();
            });
      }),
      L(k),
      s(k, u, 'Generator'),
      s(k, a, function () {
        return this;
      }),
      s(k, 'toString', function () {
        return '[object Generator]';
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.push(r);
        return (
          n.reverse(),
          function e() {
            for (; n.length; ) {
              var r = n.pop();
              if (r in t) return (e.value = r), (e.done = !1), e;
            }
            return (e.done = !0), e;
          }
        );
      }),
      (t.values = _),
      (j.prototype = {
        constructor: j,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(O),
            !t)
          )
            for (var n in this) 't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ('throw' === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function o(r, o) {
            return (c.type = 'throw'), (c.arg = t), (n.next = r), o && ((n.method = 'next'), (n.arg = e)), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              c = a.completion;
            if ('root' === a.tryLoc) return o('end');
            if (a.tryLoc <= this.prev) {
              var u = r.call(a, 'catchLoc'),
                s = r.call(a, 'finallyLoc');
              if (u && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!s) throw new Error('try statement without catch or finally');
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n];
            if (o.tryLoc <= this.prev && r.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ('break' === e || 'continue' === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = e), (a.arg = t), i ? ((this.method = 'next'), (this.next = i.finallyLoc), m) : this.complete(a)
          );
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg;
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
            m
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), O(n), m;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var r = n.completion;
              if ('throw' === r.type) {
                var o = r.arg;
                O(n);
              }
              return o;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (t, n, r) {
          return (
            (this.delegate = { iterator: _(t), resultName: n, nextLoc: r }), 'next' === this.method && (this.arg = e), m
          );
        },
      }),
      t
    );
  }
  function T(e, t, n, r, o, i, a) {
    try {
      var c = e[i](a),
        u = c.value;
    } catch (e) {
      return void n(e);
    }
    c.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function I(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, o) {
        var i = e.apply(t, n);
        function a(e) {
          T(i, r, o, a, c, 'next', e);
        }
        function c(e) {
          T(i, r, o, a, c, 'throw', e);
        }
        a(void 0);
      });
    };
  }
  var P = (function () {
      var e = I(
        F().mark(function e(t) {
          return F().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (document.querySelector(t)) {
                    e.next = 5;
                    break;
                  }
                  return (
                    (e.next = 3),
                    new Promise(function (e) {
                      return requestAnimationFrame(e);
                    })
                  );
                case 3:
                  e.next = 0;
                  break;
                case 5:
                  return e.abrupt('return', document.querySelector(t));
                case 6:
                case 'end':
                  return e.stop();
              }
          }, e);
        })
      );
      return function (t) {
        return e.apply(this, arguments);
      };
    })(),
    O = (function () {
      var e = I(
        F().mark(function e() {
          var t, n;
          return F().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), P('.aui-toolbar2-primary');
                case 2:
                  return (
                    (t = e.sent),
                    (n = t.querySelector('#dsChromeExtensionJiraToolbar')) ||
                      (((n = document.createElement('div')).id = 'dsChromeExtensionJiraToolbar'),
                      n.classList.add('aui-buttons'),
                      t.appendChild(n)),
                    e.abrupt('return', n)
                  );
                case 6:
                case 'end':
                  return e.stop();
              }
          }, e);
        })
      );
      return function () {
        return e.apply(this, arguments);
      };
    })();
  function j() {
    return location.host.includes('jira.danskespil.dk') && location.pathname.startsWith('/browse/');
  }
  var _ = (function () {
    var e = I(
      F().mark(function e(t, n) {
        var r, o;
        return F().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), O();
              case 2:
                (r = e.sent),
                  (o = document.createElement('a')).classList.add('aui-button'),
                  (o.innerText = t),
                  o.addEventListener('click', n),
                  r.appendChild(o);
              case 8:
              case 'end':
                return e.stop();
            }
        }, e);
      })
    );
    return function (t, n) {
      return e.apply(this, arguments);
    };
  })();
  function q(e) {
    return (
      (q =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            }),
      q(e)
    );
  }
  function N() {
    N = function () {
      return t;
    };
    var e,
      t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value;
        },
      i = 'function' == typeof Symbol ? Symbol : {},
      a = i.iterator || '@@iterator',
      c = i.asyncIterator || '@@asyncIterator',
      u = i.toStringTag || '@@toStringTag';
    function s(e, t, n) {
      return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
    }
    try {
      s({}, '');
    } catch (e) {
      s = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function l(e, t, n, r) {
      var i = t && t.prototype instanceof v ? t : v,
        a = Object.create(i.prototype),
        c = new P(r || []);
      return o(a, '_invoke', { value: C(e, n, c) }), a;
    }
    function d(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) };
      } catch (e) {
        return { type: 'throw', arg: e };
      }
    }
    t.wrap = l;
    var h = 'suspendedStart',
      p = 'suspendedYield',
      f = 'executing',
      y = 'completed',
      m = {};
    function v() {}
    function g() {}
    function x() {}
    var w = {};
    s(w, a, function () {
      return this;
    });
    var b = Object.getPrototypeOf,
      E = b && b(b(O([])));
    E && E !== n && r.call(E, a) && (w = E);
    var k = (x.prototype = v.prototype = Object.create(w));
    function L(e) {
      ['next', 'throw', 'return'].forEach(function (t) {
        s(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function S(e, t) {
      function n(o, i, a, c) {
        var u = d(e[o], e, i);
        if ('throw' !== u.type) {
          var s = u.arg,
            l = s.value;
          return l && 'object' == q(l) && r.call(l, '__await')
            ? t.resolve(l.__await).then(
                function (e) {
                  n('next', e, a, c);
                },
                function (e) {
                  n('throw', e, a, c);
                }
              )
            : t.resolve(l).then(
                function (e) {
                  (s.value = e), a(s);
                },
                function (e) {
                  return n('throw', e, a, c);
                }
              );
        }
        c(u.arg);
      }
      var i;
      o(this, '_invoke', {
        value: function (e, r) {
          function o() {
            return new t(function (t, o) {
              n(e, r, t, o);
            });
          }
          return (i = i ? i.then(o, o) : o());
        },
      });
    }
    function C(t, n, r) {
      var o = h;
      return function (i, a) {
        if (o === f) throw new Error('Generator is already running');
        if (o === y) {
          if ('throw' === i) throw a;
          return { value: e, done: !0 };
        }
        for (r.method = i, r.arg = a; ; ) {
          var c = r.delegate;
          if (c) {
            var u = F(c, r);
            if (u) {
              if (u === m) continue;
              return u;
            }
          }
          if ('next' === r.method) r.sent = r._sent = r.arg;
          else if ('throw' === r.method) {
            if (o === h) throw ((o = y), r.arg);
            r.dispatchException(r.arg);
          } else 'return' === r.method && r.abrupt('return', r.arg);
          o = f;
          var s = d(t, n, r);
          if ('normal' === s.type) {
            if (((o = r.done ? y : p), s.arg === m)) continue;
            return { value: s.arg, done: r.done };
          }
          'throw' === s.type && ((o = y), (r.method = 'throw'), (r.arg = s.arg));
        }
      };
    }
    function F(t, n) {
      var r = n.method,
        o = t.iterator[r];
      if (o === e)
        return (
          (n.delegate = null),
          ('throw' === r && t.iterator.return && ((n.method = 'return'), (n.arg = e), F(t, n), 'throw' === n.method)) ||
            ('return' !== r &&
              ((n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          m
        );
      var i = d(o, t.iterator, n.arg);
      if ('throw' === i.type) return (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), m;
      var a = i.arg;
      return a
        ? a.done
          ? ((n[t.resultName] = a.value),
            (n.next = t.nextLoc),
            'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
            (n.delegate = null),
            m)
          : a
        : ((n.method = 'throw'), (n.arg = new TypeError('iterator result is not an object')), (n.delegate = null), m);
    }
    function T(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
    }
    function I(e) {
      var t = e.completion || {};
      (t.type = 'normal'), delete t.arg, (e.completion = t);
    }
    function P(e) {
      (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(T, this), this.reset(!0);
    }
    function O(t) {
      if (t || '' === t) {
        var n = t[a];
        if (n) return n.call(t);
        if ('function' == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < t.length; ) if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
              return (n.value = e), (n.done = !0), n;
            };
          return (i.next = i);
        }
      }
      throw new TypeError(q(t) + ' is not iterable');
    }
    return (
      (g.prototype = x),
      o(k, 'constructor', { value: x, configurable: !0 }),
      o(x, 'constructor', { value: g, configurable: !0 }),
      (g.displayName = s(x, u, 'GeneratorFunction')),
      (t.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor;
        return !!t && (t === g || 'GeneratorFunction' === (t.displayName || t.name));
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : ((e.__proto__ = x), s(e, u, 'GeneratorFunction')),
          (e.prototype = Object.create(k)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      L(S.prototype),
      s(S.prototype, c, function () {
        return this;
      }),
      (t.AsyncIterator = S),
      (t.async = function (e, n, r, o, i) {
        void 0 === i && (i = Promise);
        var a = new S(l(e, n, r, o), i);
        return t.isGeneratorFunction(n)
          ? a
          : a.next().then(function (e) {
              return e.done ? e.value : a.next();
            });
      }),
      L(k),
      s(k, u, 'Generator'),
      s(k, a, function () {
        return this;
      }),
      s(k, 'toString', function () {
        return '[object Generator]';
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.push(r);
        return (
          n.reverse(),
          function e() {
            for (; n.length; ) {
              var r = n.pop();
              if (r in t) return (e.value = r), (e.done = !1), e;
            }
            return (e.done = !0), e;
          }
        );
      }),
      (t.values = O),
      (P.prototype = {
        constructor: P,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(I),
            !t)
          )
            for (var n in this) 't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ('throw' === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function o(r, o) {
            return (c.type = 'throw'), (c.arg = t), (n.next = r), o && ((n.method = 'next'), (n.arg = e)), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              c = a.completion;
            if ('root' === a.tryLoc) return o('end');
            if (a.tryLoc <= this.prev) {
              var u = r.call(a, 'catchLoc'),
                s = r.call(a, 'finallyLoc');
              if (u && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!s) throw new Error('try statement without catch or finally');
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n];
            if (o.tryLoc <= this.prev && r.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ('break' === e || 'continue' === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = e), (a.arg = t), i ? ((this.method = 'next'), (this.next = i.finallyLoc), m) : this.complete(a)
          );
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg;
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
            m
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), I(n), m;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var r = n.completion;
              if ('throw' === r.type) {
                var o = r.arg;
                I(n);
              }
              return o;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (t, n, r) {
          return (
            (this.delegate = { iterator: O(t), resultName: n, nextLoc: r }), 'next' === this.method && (this.arg = e), m
          );
        },
      }),
      t
    );
  }
  function A(e, t, n, r, o, i, a) {
    try {
      var c = e[i](a),
        u = c.value;
    } catch (e) {
      return void n(e);
    }
    c.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function D(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, o) {
        var i = e.apply(t, n);
        function a(e) {
          A(i, r, o, a, c, 'next', e);
        }
        function c(e) {
          A(i, r, o, a, c, 'throw', e);
        }
        a(void 0);
      });
    };
  }
  var G,
    M,
    B,
    z = function (e) {
      var t = document.querySelector(e);
      t && (t.style.display = 'none');
    },
    H = [
      '#header',
      '#footer',
      '.aui-sidebar-wrapper',
      '.command-bar',
      '#details-module',
      '#viewissuesidebar',
      '#activitymodule .horizontal-tabs',
      '.aui-page-header-image',
      '#attachmentmodule',
    ],
    K = (function () {
      var e = D(
        N().mark(function e() {
          return N().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    Promise.all(
                      H.map(
                        (function () {
                          var e = D(
                            N().mark(function e(t) {
                              return N().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), P(t);
                                    case 2:
                                    case 'end':
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      )
                    )
                  );
                case 2:
                case 'end':
                  return e.stop();
              }
          }, e);
        })
      );
      return function () {
        return e.apply(this, arguments);
      };
    })(),
    U = (function () {
      var e = D(
        N().mark(function e() {
          var t, n;
          return N().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    H.map(function (e) {
                      return z(e);
                    }),
                    z('#linkingmodule'),
                    z('#jpo-child-issues-web-panel'),
                    (e.next = 5),
                    P('.aui-page-panel')
                  );
                case 5:
                  return (e.sent.style = 'padding-left: 0'), (e.next = 8), P('.aui-page-header-main');
                case 8:
                  return (
                    (e.sent.style = 'display: flex; flex-direction: column-reverse'), (e.next = 11), P('.issue-view')
                  );
                case 11:
                  return (e.sent.style = 'height: unset'), (e.next = 14), P('.issue-main-column');
                case 14:
                  return (
                    (e.sent.style =
                      'display: grid; grid-column-gap: 40px; grid-template-columns: 1fr 1fr; grid-template-areas: "description activity" "description add-comments";'),
                    (e.next = 17),
                    P('#descriptionmodule')
                  );
                case 17:
                  return (e.sent.style = 'grid-area: description'), (e.next = 20), P('#activitymodule');
                case 20:
                  return (e.sent.style = 'grid-area: activity'), (e.next = 23), P('#addcomment');
                case 23:
                  return (e.sent.style = 'grid-area: add-comments'), (e.next = 26), P('#descriptionmodule');
                case 26:
                  return (t = e.sent), (e.next = 29), P('#attachment_thumbnails');
                case 29:
                  (n = e.sent), t.appendChild(n);
                case 31:
                case 'end':
                  return e.stop();
              }
          }, e);
        })
      );
      return function () {
        return e.apply(this, arguments);
      };
    })();
  function W() {
    return (W = D(
      N().mark(function e() {
        return N().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                j() &&
                  K().then(function () {
                    _('Focus', U);
                  });
              case 1:
              case 'end':
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  !(function () {
    if (location.host.endsWith('danskespil.dk') && !location.pathname.startsWith('/sitecore/')) {
      var e = !1;
      document.addEventListener('keydown', function (t) {
        'KeyG' === t.code &&
          !0 === t.ctrlKey &&
          (t.preventDefault(),
          (function (e) {
            var t = document.getElementById('gridDesktop'),
              n = document.getElementById('gridMobile'),
              r = document.getElementById('gridStyle');
            t ||
              (function () {
                var e = document.createElement('table');
                e.id = 'gridDesktop';
                var t = document.createElement('tr'),
                  n = document.createElement('td'),
                  r = document.createElement('td'),
                  o = document.createElement('td'),
                  i = document.createElement('td'),
                  a = document.createElement('td'),
                  c = document.createElement('td'),
                  u = document.createElement('td'),
                  s = document.createElement('td'),
                  l = document.createElement('td'),
                  d = document.createElement('td'),
                  h = document.createElement('td'),
                  p = document.createElement('td'),
                  f = document.createElement('td'),
                  y = document.createElement('td');
                t.appendChild(n),
                  t.appendChild(r),
                  t.appendChild(o),
                  t.appendChild(i),
                  t.appendChild(a),
                  t.appendChild(c),
                  t.appendChild(u),
                  t.appendChild(s),
                  t.appendChild(l),
                  t.appendChild(d),
                  t.appendChild(h),
                  t.appendChild(p),
                  t.appendChild(f),
                  t.appendChild(y),
                  e.appendChild(t),
                  document.body.appendChild(e);
              })(),
              n ||
                (function () {
                  var e = document.createElement('table');
                  e.id = 'gridMobile';
                  var t = document.createElement('tr'),
                    n = document.createElement('td'),
                    r = document.createElement('td'),
                    o = document.createElement('td');
                  t.appendChild(n), t.appendChild(r), t.appendChild(o), e.appendChild(t), document.body.appendChild(e);
                })(),
              r ||
                (function () {
                  var e = document.createElement('style');
                  (e.id = 'gridStyle'),
                    (e.innerHTML =
                      '\n@media (max-width: 1023px) {\n  #gridMobile {\n    display: none;\n    pointer-events: none;\n    position: fixed;\n    z-index: 1000;\n    inset: 0;\n    opacity: 0.5;\n    width: 100%;\n  }\n  \n  body.show-grid #gridMobile {\n    display: table;\n  }\n  \n  #gridMobile td:first-child {\n    width: var(--grid-margin, 2rem);\n    background: rgba(255,0,0,0.5);\n    height: 100vh;\n  }\n  \n  #gridMobile td:last-child {\n    width: var(--grid-margin, 2rem);\n    background: rgba(255,0,0,0.5);\n    height: 100vh;\n  }\n}\n    \n@media (min-width: 1024px) {\n  #gridDesktop {\n    display: none;\n    pointer-events: none;\n    position: fixed;\n    z-index: 1000;\n    top: -2px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: max(calc(1024px - 4rem), min(calc(100vw - 4rem), 1120px));\n    height: 105vh;\n    opacity: 0.5;\n    box-shadow: inset 0 0 0 1px rgba(255,0,0,0.5);\n  }\n  \n  body.show-grid #gridDesktop {\n    display: table;\n  }\n  \n  #gridDesktop td {\n    width: calc(100% / 14);\n    box-shadow: inset 0 0 0 0.5px rgba(255,0,0,0.5);\n    background: rgba(255,0,0,0.05);\n  }\n  \n  #gridDesktop td:nth-child(odd) {\n    background: rgba(255,0,0,0.15);\n  }\n}\n    '),
                    document.body.appendChild(e);
                })(),
              document.body.classList.toggle('show-grid', e);
          })((e = !e)));
      });
    }
  })(),
    location.host.endsWith('danskespil.dk') &&
      !location.pathname.startsWith('/sitecore/') &&
      document.addEventListener('selectionchange', function () {
        var r = window.getSelection().toString().toLowerCase();
        if ((null == r ? void 0 : r.length) > 4) {
          for (
            var i = {},
              a = function (e) {
                var t = e.key,
                  n = e.key2,
                  r = e.key3,
                  o = e.key4,
                  a = e.key5,
                  c = e.key6,
                  u = e.key7,
                  s = e.key8,
                  l = e.res,
                  d = e.dictionaryKey;
                (t = t ? t + '/' : ''),
                  (n = n ? n + '/' : ''),
                  (r = r ? r + '/' : ''),
                  (o = o ? o + '/' : ''),
                  (a = a ? a + '/' : ''),
                  (c = c ? c + '/' : ''),
                  (u = u ? u + '/' : ''),
                  (s = s ? s + '/' : '');
                var h = d.includes('-DLO-'),
                  p = d.split('path=/')[1].split('&')[0] + '/';
                i[p + n + r + o + a + c + u + s] = { isDlo: h, res: l };
              },
              c = 0,
              u = [];
            localStorage.key(c);

          ) {
            var s = localStorage.key(c);
            s.includes('/dlo/scapi/common/dictionary/dictionary') && u.push(s), c++;
          }
          u.forEach(function (t) {
            var n = JSON.parse(localStorage.getItem(t));
            'object' === e(n) &&
              Object.keys(n).forEach(function (e) {
                n[e] &&
                  ('string' == typeof n[e] &&
                    n[e].toLowerCase().includes(r) &&
                    a({ key: e, res: n[e], dictionaryKey: t }),
                  Object.keys(n[e]).forEach(function (o) {
                    'string' == typeof n[e][o] &&
                      n[e][o].toLowerCase().includes(r) &&
                      a({ key: e, key2: o, res: n[e][o], dictionaryKey: t }),
                      Object.keys(n[e][o]).forEach(function (i) {
                        'string' == typeof n[e][o][i] &&
                          n[e][o][i].toLowerCase().includes(r) &&
                          a({ key: e, key2: o, key3: i, res: n[e][o][i], dictionaryKey: t }),
                          Object.keys(n[e][o][i]).forEach(function (c) {
                            'string' == typeof n[e][o][i][c] &&
                              n[e][o][i][c].toLowerCase().includes(r) &&
                              a({ key: e, key2: o, key3: i, key4: c, res: n[e][o][i][c], dictionaryKey: t }),
                              Object.keys(n[e][o][i][c]).forEach(function (u) {
                                'string' == typeof n[e][o][i][c][u] &&
                                  n[e][o][i][c][u].toLowerCase().includes(r) &&
                                  a({
                                    key: e,
                                    key2: o,
                                    key3: i,
                                    key4: c,
                                    key5: u,
                                    res: n[e][o][i][c][u],
                                    dictionaryKey: t,
                                  }),
                                  Object.keys(n[e][o][i][c][u]).forEach(function (s) {
                                    'string' == typeof n[e][o][i][c][u][s] &&
                                      n[e][o][i][c][u][s].toLowerCase().includes(r) &&
                                      a({
                                        key: e,
                                        key2: o,
                                        key3: i,
                                        key4: c,
                                        key5: u,
                                        key6: s,
                                        res: n[e][o][i][c][u][s],
                                        dictionaryKey: t,
                                      }),
                                      Object.keys(n[e][o][i][c][u][s]).forEach(function (l) {
                                        'string' == typeof n[e][o][i][c][u][s][l] &&
                                          n[e][o][i][c][u][s][l].toLowerCase().includes(r) &&
                                          a({
                                            key: e,
                                            key2: o,
                                            key3: i,
                                            key4: c,
                                            key5: u,
                                            key6: s,
                                            key7: l,
                                            res: n[e][o][i][c][u][s][l],
                                            dictionaryKey: t,
                                          }),
                                          Object.keys(n[e][o][i][c][u][s][l]).forEach(function (d) {
                                            'string' == typeof n[e][o][i][c][u][s][l][d] &&
                                              n[e][o][i][c][u][s][l][d].toLowerCase().includes(r) &&
                                              a({
                                                key: e,
                                                key2: o,
                                                key3: i,
                                                key4: c,
                                                key5: u,
                                                key6: s,
                                                key7: l,
                                                key8: d,
                                                res: n[e][o][i][c][u][s][l][d],
                                                dictionaryKey: t,
                                              });
                                          });
                                      });
                                  });
                              });
                          });
                      });
                  }));
              });
          });
          var l = [];
          if (Object.keys(i).length > 150) return;
          Object.keys(i).forEach(function (e) {
            var n = t(i[e].isDlo) + e;
            l.push({ txt: i[e].res, url: n, key: e });
          }),
            o(l);
        } else n();
      }),
    (function () {
      l.apply(this, arguments);
    })(),
    'complete' === document.readyState || 'interactive' === document.readyState
      ? k()
      : document.addEventListener('DOMContentLoaded', k),
    j() &&
      (location.pathname.includes('/IU-') ||
        location.pathname.includes('/FOR-') ||
        location.pathname.includes('/CW-')) &&
      ((G =
        'tivoli' ===
        (null === (B = document.getElementById('customfield_13101-val')) || void 0 === B
          ? void 0
          : B.innerText.toLowerCase())
          ? 'tivolicasino-website'
          : 'danskespil-website'),
      (M = S()) &&
        _('Create Branch', function () {
          window.open('https://github.com/ds-itu-frontend-service/'.concat(G, '/branches?newBranch=').concat(M));
        })),
    (function () {
      W.apply(this, arguments);
    })(),
    (function () {
      if (location.host.endsWith('danskespil.dk') && !location.pathname.startsWith('/sitecore/')) {
        var e = document.getElementById('sitecoreDeveloperErrorStyle');
        e || (((e = document.createElement('style')).id = 'sitecoreDeveloperErrorStyle'), document.body.appendChild(e)),
          (e.innerHTML =
            '\n      .alert.alert-error:has(.developer-alert) {\n        background: #9b59b6;\n        color: white;\n        font-size: 13px;\n        line-height: 1.5;\n        padding: 10px;\n    }');
      }
    })(),
    location.host.endsWith('danskespil.dk') &&
      document.addEventListener('keydown', function (e) {
        'F2' === e.key &&
          (alert('F2 was pressed'),
          chrome.runtime.sendMessage({ action: 'callMyFunction' }, function (e) {
            console.error('xxx CALLING MY FUNCTION xxx', e);
          }));
      });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXJKLE1BQUEsS0FBQUQsVUFBQSxDR25DQTJNLEdDYk8sV0FDTCxHQUFJNVYsU0FBU0MsS0FBSytQLFNBQVMsbUJBQXFCaFEsU0FBU3lPLFNBQVM2QyxXQUFXLGNBQWUsQ0FDMUYsSUFBSWxRLEVBQVFULFNBQVNDLGVBQWUsK0JBRS9CUSxLQUNIQSxFQUFRVCxTQUFTSSxjQUFjLFVBQ3pCTixHQUFLLDhCQUNYRSxTQUFTSyxLQUFLQyxZQUFZRyxJQUc1QkEsRUFBTWlMLFVBQVksNkxBUXBCLENBQ0YsQ0RMQXdKLEdBRUk3VixTQUFTQyxLQUFLK1AsU0FBUyxrQkFDekJyUCxTQUFTd0wsaUJBQWlCLFdBQVcsU0FBVXhCLEdBQzNCLE9BQWRBLEVBQU03SSxNQUVSZ1UsTUFBTSxrQkFFTnJJLE9BQU9zSSxRQUFRQyxZQUFZLENBQUVDLE9BQVEsbUJBQW9CLFNBQVVDLEdBQ2pFQyxRQUFRdk4sTUFBTSw4QkFBK0JzTixFQUMvQyxJQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9Db250ZW50U2NyaXB0cy9EUy9Ec0ZpbmREaWN0aW9uYXJ5LmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvQ29udGVudFNjcmlwdHMvR2l0aHViL0dpdEh1YkNyZWF0ZUJyYW5jaC5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL1NpdGVjb3JlTGF5b3V0SW1wcm92ZW1lbnRzLmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvTWFrZUJyYW5jaE5hbWUuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9Db250ZW50U2NyaXB0cy9KaXJhL0ppcmEuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9Db250ZW50U2NyaXB0cy9KaXJhL0ZvY3VzT25UYXNrLmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvQ29udGVudFNjcmlwdHMvSmlyYS9TaG93Q3JlYXRlQnJhbmNoTGluay5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL0NvbnRlbnRTY3JpcHRzL0RTL0FkZEdyaWQuanMiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvQ29udGVudFNjcmlwdHMvRFMvU2l0ZWNvcmVEZXZlbG9wZXJFcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmaW5kVGV4dEluRGljdGlvbmFyaWVzID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2hTdHJpbmcgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChzZWFyY2hTdHJpbmc/Lmxlbmd0aCA+IDQpIHtcbiAgICBsZXQgcmVzdWx0cyA9IHt9O1xuXG4gICAgY29uc3Qgb3V0cHV0ID0gKHsga2V5LCBrZXkyLCBrZXkzLCBrZXk0LCBrZXk1LCBrZXk2LCBrZXk3LCBrZXk4LCByZXMsIGRpY3Rpb25hcnlLZXkgfSkgPT4ge1xuICAgICAga2V5ID0ga2V5ID8ga2V5ICsgJy8nIDogJyc7XG4gICAgICBrZXkyID0ga2V5MiA/IGtleTIgKyAnLycgOiAnJztcbiAgICAgIGtleTMgPSBrZXkzID8ga2V5MyArICcvJyA6ICcnO1xuICAgICAga2V5NCA9IGtleTQgPyBrZXk0ICsgJy8nIDogJyc7XG4gICAgICBrZXk1ID0ga2V5NSA/IGtleTUgKyAnLycgOiAnJztcbiAgICAgIGtleTYgPSBrZXk2ID8ga2V5NiArICcvJyA6ICcnO1xuICAgICAga2V5NyA9IGtleTcgPyBrZXk3ICsgJy8nIDogJyc7XG4gICAgICBrZXk4ID0ga2V5OCA/IGtleTggKyAnLycgOiAnJztcblxuICAgICAgY29uc3QgaXNEbG8gPSBkaWN0aW9uYXJ5S2V5LmluY2x1ZGVzKCctRExPLScpO1xuXG4gICAgICBjb25zdCByZWdpb24gPSBkaWN0aW9uYXJ5S2V5LnNwbGl0KCdwYXRoPS8nKVsxXS5zcGxpdCgnJicpWzBdICsgJy8nO1xuXG4gICAgICByZXN1bHRzW3JlZ2lvbiArIGtleTIgKyBrZXkzICsga2V5NCArIGtleTUgKyBrZXk2ICsga2V5NyArIGtleThdID0ge1xuICAgICAgICBpc0RsbyxcbiAgICAgICAgcmVzLFxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgbGV0IGluZGV4S2V5ID0gMDtcbiAgICBjb25zdCBkaWN0aW9uYXJ5S2V5cyA9IFtdO1xuXG4gICAgd2hpbGUgKGxvY2FsU3RvcmFnZS5rZXkoaW5kZXhLZXkpKSB7XG4gICAgICBjb25zdCBzdG9yYWdlS2V5ID0gbG9jYWxTdG9yYWdlLmtleShpbmRleEtleSk7XG5cbiAgICAgIGlmIChzdG9yYWdlS2V5LmluY2x1ZGVzKCcvZGxvL3NjYXBpL2NvbW1vbi9kaWN0aW9uYXJ5L2RpY3Rpb25hcnknKSkge1xuICAgICAgICBkaWN0aW9uYXJ5S2V5cy5wdXNoKHN0b3JhZ2VLZXkpO1xuICAgICAgfVxuXG4gICAgICBpbmRleEtleSsrO1xuICAgIH1cblxuICAgIGRpY3Rpb25hcnlLZXlzLmZvckVhY2goKGRpY3Rpb25hcnlLZXkpID0+IHtcbiAgICAgIGNvbnN0IHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRpY3Rpb25hcnlLZXkpKTtcblxuICAgICAgaWYgKHR5cGVvZiBzICE9PSAnb2JqZWN0JykgcmV0dXJuO1xuXG4gICAgICBPYmplY3Qua2V5cyhzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKCFzW2tleV0pIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mIHNba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoc1trZXldLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICByZXM6IHNba2V5XSxcbiAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKHNba2V5XSkuZm9yRWFjaCgoa2V5MikgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgb3V0cHV0KHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXSxcbiAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBPYmplY3Qua2V5cyhzW2tleV1ba2V5Ml0pLmZvckVhY2goKGtleTMpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdW2tleTNdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBpZiAoc1trZXldW2tleTJdW2tleTNdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICBrZXkyLFxuICAgICAgICAgICAgICAgICAga2V5MyxcbiAgICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdW2tleTNdLFxuICAgICAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzW2tleV1ba2V5Ml1ba2V5M10pLmZvckVhY2goKGtleTQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICAgICAga2V5MyxcbiAgICAgICAgICAgICAgICAgICAga2V5NCxcbiAgICAgICAgICAgICAgICAgICAgcmVzOiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF0sXG4gICAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF0pLmZvckVhY2goKGtleTUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCh7XG4gICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgICAgICAga2V5MyxcbiAgICAgICAgICAgICAgICAgICAgICBrZXk0LFxuICAgICAgICAgICAgICAgICAgICAgIGtleTUsXG4gICAgICAgICAgICAgICAgICAgICAgcmVzOiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV0sXG4gICAgICAgICAgICAgICAgICAgICAgZGljdGlvbmFyeUtleSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdKS5mb3JFYWNoKChrZXk2KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5MixcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk0LFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTYsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXM6IHNba2V5XVtrZXkyXVtrZXkzXVtrZXk0XVtrZXk1XVtrZXk2XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdKS5mb3JFYWNoKChrZXk3KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl1ba2V5N10udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddKS5mb3JFYWNoKChrZXk4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzW2tleV1ba2V5Ml1ba2V5M11ba2V5NF1ba2V5NV1ba2V5Nl1ba2V5N11ba2V5OF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddW2tleThdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5NCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5NyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlczogc1trZXldW2tleTJdW2tleTNdW2tleTRdW2tleTVdW2tleTZdW2tleTddW2tleThdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXTtcbiAgICBpZiAoT2JqZWN0LmtleXMocmVzdWx0cykubGVuZ3RoID4gMTUwKSByZXR1cm47XG4gICAgT2JqZWN0LmtleXMocmVzdWx0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBnZXREaWN0aW9uYXJ5VXJsKHJlc3VsdHNba2V5XS5pc0RsbykgKyBrZXk7XG4gICAgICBjb250ZW50LnB1c2goeyB0eHQ6IHJlc3VsdHNba2V5XS5yZXMsIHVybCwga2V5IH0pO1xuICAgIH0pO1xuXG4gICAgZmlsbERpY3Rpb25hcnkoY29udGVudCk7XG4gIH0gZWxzZSB7XG4gICAgY2xlYXJGaWxsRGljdGlvbmFyeSgpO1xuICB9XG59O1xuXG5jb25zdCBnZXREaWN0aW9uYXJ5VXJsID0gKGlzRGxvKSA9PiB7XG4gIGNvbnN0IGhvc3RQYXJ0cyA9IGxvY2F0aW9uLmhvc3Quc3BsaXQoJy4nKTtcbiAgY29uc3QgcHJvdG9jb2wgPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLyc7XG4gIGNvbnN0IGlzVG93bkVudiA9IGhvc3RQYXJ0c1swXS5pbmNsdWRlcygndG93bicpO1xuICBjb25zdCBpc0RldkVudiA9IGhvc3RQYXJ0c1swXS5pbmNsdWRlcygnd2ViJyk7XG4gIGxldCBlbnZQYXJ0O1xuXG4gIGlmIChpc0RldkVudikge1xuICAgIGVudlBhcnQgPSBgd2ViLiR7aG9zdFBhcnRzWzFdfWA7XG4gIH0gZWxzZSBpZiAoaXNUb3duRW52KSB7XG4gICAgZW52UGFydCA9IGAke2hvc3RQYXJ0c1swXX1lZGl0JHtpc0RsbyA/ICdkbG8nIDogJ2RsaSd9YDtcbiAgfSBlbHNlIHtcbiAgICBlbnZQYXJ0ID0gYGVkaXQke2lzRGxvID8gJ2RsbycgOiAnZGxpJ31gO1xuICB9XG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7ZW52UGFydH0uZGFuc2tlc3BpbC5kay9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCUyMEVkaXRvci5hc3B4P3NjX2J3PTEmZm89L3NpdGVjb3JlL2NvbnRlbnQvRGFuc2tlU3BpbC9TaXRlJTIwc2V0dGluZ3MvRGljdGlvbmFyeS9gO1xufTtcblxuY29uc3QgY2xlYXJGaWxsRGljdGlvbmFyeSA9ICgpID0+IHtcbiAgY29uc3QgcmVtb3ZlRWxlbWVudEJ5SWQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoZWwpIGVsLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJlbW92ZUVsZW1lbnRCeUlkKCdmaW5kVGV4dEluRGljdGlvbmFyaWVzJyk7XG4gIHJlbW92ZUVsZW1lbnRCeUlkKCdmaW5kVGV4dEluRGljdGlvbmFyaWVzU3R5bGUnKTtcbn07XG5cbmNvbnN0IGVuc3VyZUVsZW1lbnQgPSAoaWQsIGNyZWF0ZUVsZW1lbnQpID0+IHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBpZiAoIWVsKSB7XG4gICAgZWwgPSBjcmVhdGVFbGVtZW50KCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gIH1cbiAgcmV0dXJuIGVsO1xufTtcblxuY29uc3Qgc2V0U3R5bGUgPSAoc3R5bGUsIGNzcykgPT4ge1xuICBzdHlsZS5pbm5lclRleHQgPSBjc3M7XG59O1xuXG5jb25zdCBmaWxsRGljdGlvbmFyeSA9IChjb250ZW50KSA9PiB7XG4gIGNvbnN0IGVsID0gZW5zdXJlRWxlbWVudCgnZmluZFRleHRJbkRpY3Rpb25hcmllcycsICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaWQgPSAnZmluZFRleHRJbkRpY3Rpb25hcmllcyc7XG4gICAgcmV0dXJuIGRpdjtcbiAgfSk7XG4gIGVsLmlubmVyVGV4dCA9ICcnO1xuXG4gIGNvbnN0IHN0eWxlID0gZW5zdXJlRWxlbWVudCgnZmluZFRleHRJbkRpY3Rpb25hcmllc1N0eWxlJywgKCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlRWwuaWQgPSAnZmluZFRleHRJbkRpY3Rpb25hcmllc1N0eWxlJztcbiAgICByZXR1cm4gc3R5bGVFbDtcbiAgfSk7XG5cbiAgc2V0U3R5bGUoXG4gICAgc3R5bGUsXG4gICAgYFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllcyB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDAwMDAwMDE7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDEwMHZoO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDEzcHggMXB4ICNjY2M7XG4gICAgICAgICAgbWF4LWhlaWdodDogOTV2aDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDk1dnc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNmaW5kVGV4dEluRGljdGlvbmFyaWVzOjphZnRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDAwMDAwMDA7XG4gICAgICAgICAgY29udGVudDogXCIke2NvbnRlbnQubGVuZ3RofVwiO1xuICAgICAgICAgIHRvcDogLTM1cHg7XG4gICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2JkZmZlNTtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMCAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllczpob3ZlciB7XG4gICAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjZmluZFRleHRJbkRpY3Rpb25hcmllcyBhOmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2ZpbmRUZXh0SW5EaWN0aW9uYXJpZXMgcCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNmaW5kVGV4dEluRGljdGlvbmFyaWVzIGEge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDVweCAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICBgXG4gICk7XG5cbiAgY29udGVudC5mb3JFYWNoKCh7IHR4dCwgdXJsLCBrZXkgfSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBwLmlubmVyVGV4dCA9IHR4dDtcbiAgICBhLmhyZWYgPSB1cmw7XG4gICAgYS50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBhLnRleHQgPSBrZXk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgIGRpdi5hcHBlbmRDaGlsZChhKTtcbiAgICBlbC5hcHBlbmRDaGlsZChkaXYpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cERzRmluZERpY3Rpb25hcnkoKSB7XG4gIGlmIChsb2NhdGlvbi5ob3N0LmVuZHNXaXRoKCdkYW5za2VzcGlsLmRrJykgJiYgIWxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9zaXRlY29yZS8nKSkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGZpbmRUZXh0SW5EaWN0aW9uYXJpZXMpO1xuICB9XG59XG4iLCJjb25zdCB3YWl0Rm9yRWxlbWVudCA9IGFzeW5jIChzZWxlY3RvcikgPT4ge1xuICB3aGlsZSAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXNvbHZlKSk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldHVwR2l0aHViQ3JlYXRlQnJhbmNoKCkge1xuICBpZiAobG9jYXRpb24uaG9zdCA9PT0gJ2dpdGh1Yi5jb20nICYmIGxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnP25ld0JyYW5jaD0nKSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcbiAgICBjb25zdCBuZXdCcmFuY2ggPSBwYXJhbXMuZ2V0KCduZXdCcmFuY2gnKTtcblxuICAgIGNvbnN0IGN0YSA9IGF3YWl0IHdhaXRGb3JFbGVtZW50KCdbYXBwLW5hbWU9XCJyZXBvcy1icmFuY2hlc1wiXSBidXR0b24nKTtcbiAgICBjdGE/LmNsaWNrKCk7XG4gICAgY29uc3QgaW5wdXQgPSBhd2FpdCB3YWl0Rm9yRWxlbWVudCgnW3JvbGU9ZGlhbG9nXVtkYXRhLWZvY3VzLXRyYXA9XCJhY3RpdmVcIl0gaW5wdXQnKTtcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBTZXQgdGhlIHZhbHVlIGF0dHJpYnV0ZSBkaXJlY3RseVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbmV3QnJhbmNoKTtcblxuICAgICAgICAvLyBEaXNwYXRjaCBldmVudHNcbiAgICAgICAgY29uc3QgZXZlbnRzVG9EaXNwYXRjaCA9IFsnaW5wdXQnLCAnY2hhbmdlJywgJ2tleXVwJ107XG4gICAgICAgIGV2ZW50c1RvRGlzcGF0Y2guZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnRUeXBlLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSk7XG4gICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbik7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ25ld0JyYW5jaCcpO1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKTtcbiAgfVxufVxuIiwibGV0IHByZXZpb3VzU2VsZWN0ZWRTaXRlY29yZUlkID0gJyc7XG5sZXQgc2hvd0Zhdm9yaXRlc1BvcHVwID0gZmFsc2U7XG5sZXQgZGVmYXVsdFRleHRBcmVhSGVpZ2h0ID0gJzUwMHB4Oyc7XG5cbmNvbnN0IGFkZFVybFRvVHJlZUxpc3RJZHMgPSAoKSA9PiB7XG4gIGNvbnN0IHRyZWVMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY0NvbnRlbnRDb250cm9sU2VsZWN0ZWRMaXN0Jyk7XG5cbiAgdHJlZUxpc3RzLmZvckVhY2goKHRyZWVMaXN0KSA9PiB7XG4gICAgaWYgKHRyZWVMaXN0LmNsYXNzTGlzdC5jb250YWlucygnQ2hyb21lRXh0ZW5zaW9uQWRkVXJsVG9UcmVlTGlzdElkcycpKSByZXR1cm47XG5cbiAgICBjb25zdCBvcHRpb25zID0gdHJlZUxpc3QucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0IG9wdGlvbicpO1xuICAgIGNvbnN0IGhlbHAgPSB0cmVlTGlzdC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY0NvbnRlbnRDb250cm9sVHJlZUxpc3RIZWxwJyk7XG5cbiAgICBpZiAoIWhlbHAgfHwgb3B0aW9ucy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIHRyZWVMaXN0LmNsYXNzTGlzdC5hZGQoJ0Nocm9tZUV4dGVuc2lvbkFkZFVybFRvVHJlZUxpc3RJZHMnKTtcblxuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IG9wdGlvbi52YWx1ZT8uc3BsaXQoJ3wnKT8uWzFdO1xuICAgICAgaWYgKCFpZCkgcmV0dXJuO1xuXG4gICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG4gICAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdmbycsIGlkKTtcbiAgICAgICAgaWYgKGhlbHAuaW5uZXJIVE1MLmluY2x1ZGVzKGlkKSkgcmV0dXJuO1xuXG4gICAgICAgIGhlbHAuaW5uZXJIVE1MID0gYCR7aGVscC5pbm5lckhUTUx9IDxhIGhyZWY9XCIke3VybC5ocmVmfVwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHg7XCI+JHtpZH08L2E+YDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHN0cmV0Y2hDb2x1bW4gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbHVtbldpZHRoID0gNDAwO1xuICBkb2N1bWVudC5jb29raWUgPSBgc2NDb250ZW50RWRpdG9yRm9sZGVyc1dpZHRoPSR7Y29sdW1uV2lkdGh9OyBleHBpcmVzPVRodSwgMzEgRGVjIDIxMDAgMTI6MDA6MDAgVVRDOyBwYXRoPS9gO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ29udGVudFRyZWVQYW5lbCcpLnN0eWxlLndpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BsaXR0ZXItYmFyLXZlcnRpY2FsJykuc3R5bGUubGVmdCA9IGAke2NvbHVtbldpZHRofXB4YDtcbiAgY29uc3QgZWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0NvbnRlbnRFZGl0b3InKTtcbiAgZWRpdG9yLnN0eWxlLndpZHRoID0gcGFyc2VJbnQoZWRpdG9yLnN0eWxlLndpZHRoKSAtIGNvbHVtbldpZHRoICsgcGFyc2VJbnQoZWRpdG9yLnN0eWxlLmxlZnQpICsgJ3B4JztcbiAgZWRpdG9yLnN0eWxlLmxlZnQgPSBgJHtjb2x1bW5XaWR0aH1weGA7XG59O1xuXG5jb25zdCBzY3JvbGxUb0l0ZW0gPSAoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY0NvbnRlbnRUcmVlTm9kZUFjdGl2ZScpWzBdO1xuICBjb25zdCB0b2dnbGVBcnJvdyA9IHNlbGVjdGVkSXRlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICB0b2dnbGVBcnJvdyAmJiB0b2dnbGVBcnJvdy5jbGljaygpO1xuICBzZWxlY3RlZEl0ZW0gJiYgc2VsZWN0ZWRJdGVtLnBhcmVudEVsZW1lbnQgJiYgc2VsZWN0ZWRJdGVtLnBhcmVudEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbn07XG5cbmNvbnN0IGdldEFjdGl2ZVRyZWVOb2RlVGV4dCA9ICgpID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY0NvbnRlbnRUcmVlTm9kZUFjdGl2ZSBzcGFuJykuaW5uZXJUZXh0O1xufTtcblxuY29uc3QgZ2V0QWN0aXZlVHJlZU5vZGVQYXRoID0gKCkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjRWRpdG9yUXVpY2tJbmZvIHRyOm50aC1jaGlsZCgzKSAuc2NFZGl0b3JIZWFkZXJRdWlja0luZm9JbnB1dCcpLnZhbHVlO1xufTtcblxuY29uc3QgYWRkQm9va21hcmsgPSAoKSA9PiB7XG4gIGNvbnN0IHNpdGVjb3JlVGV4dCA9IGdldEFjdGl2ZVRyZWVOb2RlVGV4dCgpO1xuICBpZiAoc2l0ZWNvcmVUZXh0ID09PSBwcmV2aW91c1NlbGVjdGVkU2l0ZWNvcmVJZCkgcmV0dXJuO1xuICBwcmV2aW91c1NlbGVjdGVkU2l0ZWNvcmVJZCA9IHNpdGVjb3JlVGV4dDtcblxuICBsZXQgYm9va21hcmtMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2ttYXJrTGluaycpO1xuICBsZXQgYm9va21hcmtTdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29rbWFya1N0eWxlJyk7XG5cbiAgaWYgKCFib29rbWFya0xpbmspIHtcbiAgICBib29rbWFya0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYm9va21hcmtMaW5rLmlkID0gJ2Jvb2ttYXJrTGluayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGJvb2ttYXJrTGluayk7XG4gICAgYm9va21hcmtTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgYm9va21hcmtTdHlsZS5pZCA9ICdib29rbWFya1N0eWxlJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoYm9va21hcmtTdHlsZSk7XG4gIH1cblxuICBib29rbWFya0xpbmsuaHJlZiA9IGBqYXZhc2NyaXB0OndpbmRvdy5sb2NhdGlvbi5ocmVmPXdpbmRvdy5sb2NhdGlvbi5vcmlnaW4rJy9zaXRlY29yZS9zaGVsbC9BcHBsaWNhdGlvbnMvQ29udGVudCBFZGl0b3IuYXNweD9zY19idz0xJmZvPSR7Z2V0QWN0aXZlVHJlZU5vZGVQYXRoKCl9J2A7XG4gIGJvb2ttYXJrTGluay5pbm5lckhUTUwgPSBzaXRlY29yZVRleHQ7XG5cbiAgYm9va21hcmtTdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAjYm9va21hcmtMaW5rIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgei1pbmRleDogMTAwMDAwMDtcbiAgICAgICAgICB0b3A6IDExcHg7XG4gICAgICAgICAgbGVmdDogNjBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAnT3BlbiBTYW5zJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHggMCA3cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDBweCAxcHggIzU4NTg1ODtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgfVxuICAgIGA7XG59O1xuXG5jb25zdCBpbmNyZWFzZUhlaWdodE9uVHJlZUxpc3RzID0gKCkgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NFZGl0b3JTZWN0aW9uUGFuZWxDZWxsIC5zY0NvbnRlbnRDb250cm9sLnNjQ29udGVudENvbnRyb2xUcmVlbGlzdCcpXG4gICAgLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmNsaWVudEhlaWdodCA9PT0gMjIwKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzQwMHB4JztcbiAgICAgIH1cbiAgICB9KTtcbn07XG5cbmNvbnN0IGZpeElucHV0Q2VsbFRleHRBcmVhID0gKCkgPT4ge1xuICBjb25zdCB0eHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjRWRpdG9yRmllbGRNYXJrZXJJbnB1dENlbGwgdGV4dGFyZWEnKTtcbiAgaWYgKHR4dHMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZml4SW5wdXRDZWxsVGV4dEFyZWEnKSkge1xuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5pZCA9ICdmaXhJbnB1dENlbGxUZXh0QXJlYSc7XG4gICAgc3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgLm1vbm9zcGFjZS1mb250IHtmb250LWZhbWlseTogQ29uc29sYXMsIE1vbmFjbywgXCJBbmRhbGUgTW9ub1wiLCBcIlVidW50dSBNb25vXCIsIG1vbm9zcGFjZTt9XG4gICAgYDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgdHh0cy5mb3JFYWNoKCh0eHQpID0+IHtcbiAgICBpZiAodHh0LmNsYXNzTGlzdC5jb250YWlucygnbW9ub3NwYWNlLWZvbnQnKSkgcmV0dXJuO1xuXG4gICAgdHh0LmNsYXNzTGlzdC5hZGQoJ21vbm9zcGFjZS1mb250Jyk7XG4gICAgdHh0LnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsIGZhbHNlKTtcblxuICAgIHR4dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gJzgwMHB4JztcbiAgICAgIHRoaXMuc3R5bGUuZm9udFNpemUgPSAnMTNweCc7XG4gICAgICB0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPSAnMS40NSc7XG4gICAgfSk7XG5cbiAgICB0eHQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc3R5bGUgPSBgaGVpZ2h0OiAke2RlZmF1bHRUZXh0QXJlYUhlaWdodH1gOyAvLyBGcm9tIGVubGFyZ2VUcmVlbGlzdCgpIGZ1bmN0aW9uIGJlbG93LlxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGVubGFyZ2VUcmVlbGlzdCA9ICgpID0+IHtcbiAgY29uc3QgZGF0YVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWQqPVwiU2VjdGlvbl9EYXRhXCJdJyk7XG4gIGlmICghZGF0YVNlY3Rpb24pIHJldHVybjtcbiAgbGV0IGRhdGFUcmVlbGlzdCA9IGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJ1tpZCo9XCJTZWN0aW9uX0RhdGFcIl0nKVxuICAgIC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY0NvbnRlbnRDb250cm9sVHJlZWxpc3QnKTtcbiAgaWYgKCFkYXRhVHJlZWxpc3QpIHJldHVybjtcbiAgZGF0YVRyZWVsaXN0LnN0eWxlID0gYGhlaWdodDogJHtkZWZhdWx0VGV4dEFyZWFIZWlnaHR9YDtcbn07XG5cbmNvbnN0IGdldEZhdm9yaXRlSXRlbUxhYmVsID0gKGZhdm9yaXRlKSA9PiB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLmlubmVyVGV4dCA9IGZhdm9yaXRlLmxhYmVsO1xuICByZXR1cm4gc3Bhbjtcbn07XG5cbmNvbnN0IGdldEZhdm9yaXRlSXRlbVBhcmVudFRleHQgPSAoZmF2b3JpdGUpID0+IHtcbiAgbGV0IHBhdGggPSBmYXZvcml0ZS5wYXRoLnNwbGl0KCcvJyk7XG4gIHBhdGgucG9wKCk7XG4gIHBhdGggPSBwYXRoLmpvaW4oJy8nKTtcbiAgcGF0aCA9IGAke3BhdGh9LyBgO1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi5jbGFzc05hbWUgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW1QYXJlbnQnO1xuICBzcGFuLmlubmVyVGV4dCA9IHBhdGg7XG4gIHJldHVybiBzcGFuO1xufTtcblxuY29uc3QgYWRkRmF2b3JpdGVzID0gKCkgPT4ge1xuICBsZXQgZmF2b3JpdGVzU3R5bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNTdHlsZScpO1xuXG4gIGlmICghZmF2b3JpdGVzU3R5bGUpIHtcbiAgICBmYXZvcml0ZXNTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgZmF2b3JpdGVzU3R5bGUuaWQgPSAnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNTdHlsZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGZhdm9yaXRlc1N0eWxlKTtcbiAgICBmYXZvcml0ZXNTdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAuc2MtZ2xvYmFsSGVhZGVyIHtcbiAgICAgICAgei1pbmRleDogMTAxO1xuICAgICAgfVxuICAgICAgXG4gICAgICAjQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXMge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgICNDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxMDAwMDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyYjJiMmI7XG4gICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDAgNXB4IDZweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDZweCA3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgICAgLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0gc3Bhbi5DaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbVJlbW92ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5DaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwSXRlbSBzcGFuLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtUmVtb3ZlOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmVkOyBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLkNocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtIHNwYW4uQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW1QYXJlbnQge1xuICAgICAgICBjb2xvcjogIzk2OTY5NjtcbiAgICAgIH1cbiAgICBcbiAgICAgICNDaHJvbWVFeHRlbnNpb25Gb3JTaXRlY29yZUZhdm9yaXRlc1BvcHVwQWRkRmF2b3JpdGUge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDZweCA3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9YDtcbiAgfVxuXG4gIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdmYXZvcml0ZXMnLCAoeyBmYXZvcml0ZXMgfSkgPT4ge1xuICAgIGZhdm9yaXRlcyA9IGZhdm9yaXRlcyB8fCBbXTtcbiAgICBpZiAoZmF2b3JpdGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZhdm9yaXRlcyA9IGZhdm9yaXRlcy5zb3J0KChhLCBiKSA9PiAoYS5wYXRoID4gYi5wYXRoID8gMSA6IC0xKSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWNjSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy1hY2NvdW50SW5mb3JtYXRpb24nKTtcbiAgICBsZXQgZmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzJyk7XG4gICAgbGV0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXAnKTtcblxuICAgIGlmICghZmF2KSB7XG4gICAgICBmYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgZmF2LmlkID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzJztcbiAgICAgIGZhdi5pbm5lclRleHQgPSAnRmF2b3JpdGVzJztcbiAgICAgIGFjY0luZm8uaW5zZXJ0QmVmb3JlKGZhdiwgYWNjSW5mby5maXJzdENoaWxkKTtcbiAgICAgIGZhdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2hvd0Zhdm9yaXRlc1BvcHVwID0gIXNob3dGYXZvcml0ZXNQb3B1cDtcbiAgICAgICAgYWRkRmF2b3JpdGVzKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXNob3dGYXZvcml0ZXNQb3B1cCAmJiBwb3B1cCkge1xuICAgICAgZmF2LnJlbW92ZUNoaWxkKHBvcHVwKTtcbiAgICB9XG5cbiAgICBpZiAoc2hvd0Zhdm9yaXRlc1BvcHVwKSB7XG4gICAgICBpZiAoIXBvcHVwKSB7XG4gICAgICAgIHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcHVwLmlkID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXAnO1xuICAgICAgICBmYXYuYXBwZW5kQ2hpbGQocG9wdXApO1xuICAgICAgfVxuXG4gICAgICBmYXZvcml0ZXMuZm9yRWFjaCgoZmF2b3JpdGUpID0+IHtcbiAgICAgICAgbGV0IGYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW09XCIke2Zhdm9yaXRlLnBhdGh9XCJdYCk7XG5cbiAgICAgICAgaWYgKCFmKSB7XG4gICAgICAgICAgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGYuY2xhc3NOYW1lID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtJztcbiAgICAgICAgICBmLnNldEF0dHJpYnV0ZSgnQ2hyb21lRXh0ZW5zaW9uRm9yU2l0ZWNvcmVGYXZvcml0ZXNQb3B1cEl0ZW0nLCBmYXZvcml0ZS5wYXRoKTtcblxuICAgICAgICAgIGYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke2xvY2F0aW9uLm9yaWdpbn0ke2xvY2F0aW9uLnBhdGhuYW1lfT9zY19idz0xJmZvPSR7ZmF2b3JpdGUucGF0aH1gO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZi5hcHBlbmRDaGlsZChnZXRGYXZvcml0ZUl0ZW1QYXJlbnRUZXh0KGZhdm9yaXRlKSk7XG4gICAgICAgICAgZi5hcHBlbmRDaGlsZChnZXRGYXZvcml0ZUl0ZW1MYWJlbChmYXZvcml0ZSkpO1xuXG4gICAgICAgICAgbGV0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICByZW1vdmUuY2xhc3NOYW1lID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtUmVtb3ZlJztcbiAgICAgICAgICByZW1vdmUuaW5uZXJUZXh0ID0gJ3gnO1xuICAgICAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGZhdm9yaXRlcyA9IGZhdm9yaXRlcy5maWx0ZXIoKGYpID0+IGYgIT09IGZhdm9yaXRlKTtcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgZmF2b3JpdGVzIH0pO1xuICAgICAgICAgICAgcG9wdXAucmVtb3ZlQ2hpbGQoZik7XG4gICAgICAgICAgICBhZGRGYXZvcml0ZXMoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGYuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChmKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBpc0l0ZW1Jbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBJdGVtID0gXCIke2dldEFjdGl2ZVRyZWVOb2RlUGF0aCgpfVwiXWBcbiAgICAgICk7XG4gICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBBZGRGYXZvcml0ZScpO1xuXG4gICAgICBpZiAoYWRkQnV0dG9uKSBwb3B1cC5yZW1vdmVDaGlsZChhZGRCdXR0b24pO1xuXG4gICAgICBpZiAoIWlzSXRlbUluTWVudSkge1xuICAgICAgICBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkQnV0dG9uLmlkID0gJ0Nocm9tZUV4dGVuc2lvbkZvclNpdGVjb3JlRmF2b3JpdGVzUG9wdXBBZGRGYXZvcml0ZSc7XG4gICAgICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSBgQWRkICR7Z2V0QWN0aXZlVHJlZU5vZGVUZXh0KCl9ID8gYDtcbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgICAgZmF2b3JpdGVzLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IGdldEFjdGl2ZVRyZWVOb2RlVGV4dCgpLFxuICAgICAgICAgICAgcGF0aDogZ2V0QWN0aXZlVHJlZU5vZGVQYXRoKCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBmYXZvcml0ZXMgfSk7XG4gICAgICAgICAgYWRkRmF2b3JpdGVzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGFkZEltYWdlRGlyZWN0VXJsID0gKCkgPT4ge1xuICBsZXQgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdFZGl0b3JGcmFtZXMnKT8ucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gIGxldCBpc1Zpc2libGUgPSBpdGVtPy5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZSc7XG4gIGNvbnN0IHRhYmxlID0gaXRlbT8ucXVlcnlTZWxlY3RvcigndGFibGUuc2NFZGl0b3JRdWlja0luZm8gdGJvZHknKTtcblxuICBpZiAoaXRlbT8uaWQgJiYgaXNWaXNpYmxlICYmIHRhYmxlICYmICF0YWJsZS5xdWVyeVNlbGVjdG9yKCcjc2NUb29sTWVkaWFQYXRoJykpIHtcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgdHIuaWQgPSAnc2NUb29sTWVkaWFQYXRoJztcbiAgICBjb25zdCB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgJ2phdmFzY3JpcHQ6dGhpcy5zZWxlY3QoKTtyZXR1cm4gZmFsc2UnKTtcbiAgICBpbnB1dC52YWx1ZSA9ICctL21lZGlhLycgKyBpdGVtLmlkLnJlcGxhY2UoJ0ZDb250ZW50JywgJycpICsgJy5hc2h4JztcblxuICAgIHRkMS5pbm5lclRleHQgPSAnUmVsYXRpdiBzdGk6JztcbiAgICB0ZDIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkMSk7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZCh0cik7XG4gIH1cbn07XG5cbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gIGlmIChsb2NhdGlvbi5ob3N0LmVuZHNXaXRoKCdkYW5za2VzcGlsLmRrJykpIHtcbiAgICBpZiAoISFkZWNvZGVVUklDb21wb25lbnQobG9jYXRpb24ucGF0aG5hbWUpLm1hdGNoKC9cXC9zaXRlY29yZVxcL3NoZWxsXFwvYXBwbGljYXRpb25zXFwvY29udGVudFstIF1lZGl0b3JcXC5hc3B4L2kpKSB7XG4gICAgICBzdHJldGNoQ29sdW1uKCk7XG4gICAgICBzY3JvbGxUb0l0ZW0oKTtcbiAgICAgIGFkZEJvb2ttYXJrKCk7XG4gICAgICBzZXRJbnRlcnZhbChhZGRVcmxUb1RyZWVMaXN0SWRzLCA1MDApO1xuICAgICAgc2V0SW50ZXJ2YWwoaW5jcmVhc2VIZWlnaHRPblRyZWVMaXN0cywgNTAwKTtcbiAgICAgIHNldEludGVydmFsKGZpeElucHV0Q2VsbFRleHRBcmVhLCA1MDApO1xuICAgICAgc2V0SW50ZXJ2YWwoYWRkQm9va21hcmssIDUwMCk7XG5cbiAgICAgIHNldEludGVydmFsKGVubGFyZ2VUcmVlbGlzdCwgNTAwKTtcblxuICAgICAgYWRkRmF2b3JpdGVzKCk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldFRpbWVvdXQoYWRkRmF2b3JpdGVzLCA1MDApKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhIWRlY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5wYXRobmFtZSkubWF0Y2goXG4gICAgICAgIC9cXC9zaXRlY29yZVxcL3NoZWxsXFwvYXBwbGljYXRpb25zXFwvY29udGVudFstIF1tYW5hZ2VyXFwvZGVmYXVsdFxcLmFzcHgvaVxuICAgICAgKVxuICAgICkge1xuICAgICAgc2V0SW50ZXJ2YWwoYWRkSW1hZ2VEaXJlY3RVcmwsIDUwMCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBTaXRlY29yZUxheW91dEltcHJvdmVtZW50cygpIHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgIC8vIERvY3VtZW50IGlzIGFscmVhZHkgcmVhZHkgdG8gZ28sIHJ1biB5b3VyIGNvZGVcbiAgICBpbml0aWFsaXplKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBET01Db250ZW50TG9hZGVkXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemUpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBtYWtlQnJhbmNoTmFtZSgpIHtcbiAgbGV0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXNzdWVkZXRhaWxzICN0eXBlLXZhbCcpO1xuICBsZXQgaXNzdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXNzdWUtbGluaycpO1xuICBsZXQgc3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdW1tYXJ5LXZhbCcpO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2h4LWNvbHVtbnMgLmdoeC1pc3N1ZS5naHgtc2VsZWN0ZWQnKSkge1xuICAgIHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2h4LWlzc3VlLmdoeC1zZWxlY3RlZCAuZ2h4LXR5cGUnKTtcbiAgICBpc3N1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naHgtaXNzdWUuZ2h4LXNlbGVjdGVkIC5naHgta2V5Jyk7XG4gICAgc3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naHgtaXNzdWUuZ2h4LXNlbGVjdGVkIC5naHgtc3VtbWFyeScpO1xuICB9XG5cbiAgaWYgKCEodHlwZSAmJiBpc3N1ZSAmJiBzdW1tYXJ5KSkgcmV0dXJuO1xuXG4gIHR5cGUgPSB0eXBlLmlubmVyVGV4dCB8fCB0eXBlLnRpdGxlO1xuICB0eXBlID0gdHlwZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgdHlwZSA9IHR5cGUucmVwbGFjZSgvc3RvcnkvLCAnZmVhdHVyZScpO1xuXG4gIGlmICh0eXBlID09PSAnYnVnJykgdHlwZSA9ICdidWdmaXgnO1xuXG4gIGlzc3VlID0gaXNzdWUuaW5uZXJUZXh0LnRyaW0oKTtcblxuICBzdW1tYXJ5ID0gc3VtbWFyeS5pbm5lclRleHRcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9bXmEteiBdL2csICctJylcbiAgICAucmVwbGFjZSgvIC9nLCAnLScpXG4gICAgLnJlcGxhY2UoLy0tKy9nLCAnLScpO1xuXG4gIHJldHVybiBgJHt0eXBlfS8ke2lzc3VlfS0ke3N1bW1hcnl9YC5zbGljZSgwLCA1MCkucmVwbGFjZSgvLSQvLCAnJyk7XG59XG5cbi8vIEFkZCB0byB3aW5kb3csIGFzIGl0J3MgdXNlZCBpbiBKaXJhTWFrZUJSYW5jaE5hbWUuanMuXG53aW5kb3cubWFrZUJyYW5jaE5hbWUgPSBtYWtlQnJhbmNoTmFtZTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZUJyYW5jaE5hbWU7XG4iLCJleHBvcnQgY29uc3Qgd2FpdEZvckVsZW1lbnQgPSBhc3luYyAoc2VsZWN0b3IpID0+IHtcbiAgd2hpbGUgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzb2x2ZSkpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn07XG5cbmNvbnN0IGdldFRvb2xiYXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHRvb2xCYXIgPSBhd2FpdCB3YWl0Rm9yRWxlbWVudCgnLmF1aS10b29sYmFyMi1wcmltYXJ5Jyk7XG4gIGxldCBjdGFDb250YWluZXIgPSB0b29sQmFyLnF1ZXJ5U2VsZWN0b3IoJyNkc0Nocm9tZUV4dGVuc2lvbkppcmFUb29sYmFyJyk7XG5cbiAgaWYgKCFjdGFDb250YWluZXIpIHtcbiAgICBjdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdGFDb250YWluZXIuaWQgPSAnZHNDaHJvbWVFeHRlbnNpb25KaXJhVG9vbGJhcic7XG4gICAgY3RhQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2F1aS1idXR0b25zJyk7XG4gICAgdG9vbEJhci5hcHBlbmRDaGlsZChjdGFDb250YWluZXIpO1xuICB9XG5cbiAgcmV0dXJuIGN0YUNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhZ2VBSmlyYVRhc2soKSB7XG4gIHJldHVybiBsb2NhdGlvbi5ob3N0LmluY2x1ZGVzKCdqaXJhLmRhbnNrZXNwaWwuZGsnKSAmJiBsb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvYnJvd3NlLycpO1xufVxuXG5leHBvcnQgY29uc3QgaXNKaXJhSVUgPSAoKSA9PiBsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnL0lVLScpO1xuZXhwb3J0IGNvbnN0IGlzSmlyYUZPUiA9ICgpID0+IGxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCcvRk9SLScpO1xuZXhwb3J0IGNvbnN0IGlzSmlyYUNXID0gKCkgPT4gbG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJy9DVy0nKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNUQUluVG9vbGJhciA9IGFzeW5jIChsYWJlbCwgZm4pID0+IHtcbiAgY29uc3QgdG9vbEJhciA9IGF3YWl0IGdldFRvb2xiYXIoKTtcbiAgY29uc3QgY3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjdGEuY2xhc3NMaXN0LmFkZCgnYXVpLWJ1dHRvbicpO1xuICBjdGEuaW5uZXJUZXh0ID0gbGFiZWw7XG4gIGN0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZuKTtcbiAgdG9vbEJhci5hcHBlbmRDaGlsZChjdGEpO1xufTtcbiIsImltcG9ydCB7IGlzUGFnZUFKaXJhVGFzaywgY3JlYXRlQ1RBSW5Ub29sYmFyLCB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJy4vSmlyYSc7XG5cbmNvbnN0IGhpZGUgPSAoc2VsZWN0b3IpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgaWYgKGVsKSBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuY29uc3QgYXN5bmNTZWxlY3RvcnNUb0hpZGUgPSBbXG4gICcjaGVhZGVyJyxcbiAgJyNmb290ZXInLFxuICAnLmF1aS1zaWRlYmFyLXdyYXBwZXInLFxuICAnLmNvbW1hbmQtYmFyJyxcbiAgJyNkZXRhaWxzLW1vZHVsZScsXG4gICcjdmlld2lzc3Vlc2lkZWJhcicsXG4gICcjYWN0aXZpdHltb2R1bGUgLmhvcml6b250YWwtdGFicycsXG4gICcuYXVpLXBhZ2UtaGVhZGVyLWltYWdlJyxcbiAgJyNhdHRhY2htZW50bW9kdWxlJyxcbl07XG5cbmNvbnN0IGhhc0FsbEFzeW5jRWxlbWVudHMgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IFByb21pc2UuYWxsKFxuICAgIGFzeW5jU2VsZWN0b3JzVG9IaWRlLm1hcChhc3luYyAoc2VsZWN0b3IpID0+IHtcbiAgICAgIGF3YWl0IHdhaXRGb3JFbGVtZW50KHNlbGVjdG9yKTtcbiAgICB9KVxuICApO1xufTtcblxuY29uc3QgdG9nZ2xlRWxlbWVudHNWaXNpYmlsaXR5ID0gYXN5bmMgKCkgPT4ge1xuICBhc3luY1NlbGVjdG9yc1RvSGlkZS5tYXAoKHNlbGVjdG9yKSA9PiBoaWRlKHNlbGVjdG9yKSk7XG5cbiAgaGlkZSgnI2xpbmtpbmdtb2R1bGUnKTtcbiAgaGlkZSgnI2pwby1jaGlsZC1pc3N1ZXMtd2ViLXBhbmVsJyk7XG5cbiAgKGF3YWl0IHdhaXRGb3JFbGVtZW50KCcuYXVpLXBhZ2UtcGFuZWwnKSkuc3R5bGUgPSAncGFkZGluZy1sZWZ0OiAwJztcbiAgKGF3YWl0IHdhaXRGb3JFbGVtZW50KCcuYXVpLXBhZ2UtaGVhZGVyLW1haW4nKSkuc3R5bGUgPSAnZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlJztcbiAgKGF3YWl0IHdhaXRGb3JFbGVtZW50KCcuaXNzdWUtdmlldycpKS5zdHlsZSA9ICdoZWlnaHQ6IHVuc2V0JztcblxuICAoYXdhaXQgd2FpdEZvckVsZW1lbnQoJy5pc3N1ZS1tYWluLWNvbHVtbicpKS5zdHlsZSA9XG4gICAgJ2Rpc3BsYXk6IGdyaWQ7IGdyaWQtY29sdW1uLWdhcDogNDBweDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImRlc2NyaXB0aW9uIGFjdGl2aXR5XCIgXCJkZXNjcmlwdGlvbiBhZGQtY29tbWVudHNcIjsnO1xuICAoYXdhaXQgd2FpdEZvckVsZW1lbnQoJyNkZXNjcmlwdGlvbm1vZHVsZScpKS5zdHlsZSA9ICdncmlkLWFyZWE6IGRlc2NyaXB0aW9uJztcbiAgKGF3YWl0IHdhaXRGb3JFbGVtZW50KCcjYWN0aXZpdHltb2R1bGUnKSkuc3R5bGUgPSAnZ3JpZC1hcmVhOiBhY3Rpdml0eSc7XG4gIChhd2FpdCB3YWl0Rm9yRWxlbWVudCgnI2FkZGNvbW1lbnQnKSkuc3R5bGUgPSAnZ3JpZC1hcmVhOiBhZGQtY29tbWVudHMnO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gYXdhaXQgd2FpdEZvckVsZW1lbnQoJyNkZXNjcmlwdGlvbm1vZHVsZScpO1xuICBjb25zdCBhdHRhY2htZW50cyA9IGF3YWl0IHdhaXRGb3JFbGVtZW50KCcjYXR0YWNobWVudF90aHVtYm5haWxzJyk7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGF0dGFjaG1lbnRzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgaWYgKGlzUGFnZUFKaXJhVGFzaygpKSB7XG4gICAgaGFzQWxsQXN5bmNFbGVtZW50cygpLnRoZW4oKCkgPT4ge1xuICAgICAgY3JlYXRlQ1RBSW5Ub29sYmFyKCdGb2N1cycsIHRvZ2dsZUVsZW1lbnRzVmlzaWJpbGl0eSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBtYWtlQnJhbmNoTmFtZSBmcm9tICcuLi8uLi9NYWtlQnJhbmNoTmFtZSc7XG5pbXBvcnQgeyBpc1BhZ2VBSmlyYVRhc2ssIGlzSmlyYUlVLCBpc0ppcmFGT1IsIGNyZWF0ZUNUQUluVG9vbGJhciwgaXNKaXJhQ1cgfSBmcm9tICcuL0ppcmEnO1xuXG5jb25zdCBjcmVhdGVDVEEgPSAocmVwbykgPT4ge1xuICBjb25zdCBicmFuY2hOYW1lID0gbWFrZUJyYW5jaE5hbWUoKTtcbiAgaWYgKCFicmFuY2hOYW1lKSByZXR1cm47XG5cbiAgY3JlYXRlQ1RBSW5Ub29sYmFyKCdDcmVhdGUgQnJhbmNoJywgKCkgPT4ge1xuICAgIHdpbmRvdy5vcGVuKGBodHRwczovL2dpdGh1Yi5jb20vZHMtaXR1LWZyb250ZW5kLXNlcnZpY2UvJHtyZXBvfS9icmFuY2hlcz9uZXdCcmFuY2g9JHticmFuY2hOYW1lfWApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q3JlYXRlQnJhbmNoTGluaygpIHtcbiAgaWYgKGlzUGFnZUFKaXJhVGFzaygpICYmIChpc0ppcmFJVSgpIHx8IGlzSmlyYUZPUigpIHx8IGlzSmlyYUNXKCkpKSB7XG4gICAgY29uc3QgaXNUaXZvbGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tZmllbGRfMTMxMDEtdmFsJyk/LmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpID09PSAndGl2b2xpJyB8fCBmYWxzZTtcbiAgICBsZXQgcmVwbyA9IGlzVGl2b2xpID8gJ3Rpdm9saWNhc2luby13ZWJzaXRlJyA6ICdkYW5za2VzcGlsLXdlYnNpdGUnO1xuXG4gICAgY3JlYXRlQ1RBKHJlcG8pO1xuICB9XG59XG4iLCJmdW5jdGlvbiBjcmVhdGVHcmlkRGVza3RvcEVsZW1lbnQoKSB7XG4gIGNvbnN0IGdyaWREZXNrdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgZ3JpZERlc2t0b3AuaWQgPSAnZ3JpZERlc2t0b3AnO1xuICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIGNvbnN0IHRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb25zdCB0ZDExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgdGQxMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkMTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb25zdCB0ZDE0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblxuICB0ci5hcHBlbmRDaGlsZCh0ZDEpO1xuICB0ci5hcHBlbmRDaGlsZCh0ZDIpO1xuICB0ci5hcHBlbmRDaGlsZCh0ZDMpO1xuICB0ci5hcHBlbmRDaGlsZCh0ZDQpO1xuICB0ci5hcHBlbmRDaGlsZCh0ZDUpO1xuICB0ci5hcHBlbmRDaGlsZCh0ZDYpO1xuICB0ci5hcHBlbmRDaGlsZCh0ZDcpO1xuICB0ci5hcHBlbmRDaGlsZCh0ZDgpO1xuICB0ci5hcHBlbmRDaGlsZCh0ZDkpO1xuICB0ci5hcHBlbmRDaGlsZCh0ZDEwKTtcbiAgdHIuYXBwZW5kQ2hpbGQodGQxMSk7XG4gIHRyLmFwcGVuZENoaWxkKHRkMTIpO1xuICB0ci5hcHBlbmRDaGlsZCh0ZDEzKTtcbiAgdHIuYXBwZW5kQ2hpbGQodGQxNCk7XG5cbiAgZ3JpZERlc2t0b3AuYXBwZW5kQ2hpbGQodHIpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdyaWREZXNrdG9wKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JpZE1vYmlsZUVsZW1lbnQoKSB7XG4gIGNvbnN0IGdyaWRNb2JpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICBncmlkTW9iaWxlLmlkID0gJ2dyaWRNb2JpbGUnO1xuICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIGNvbnN0IHRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIHRyLmFwcGVuZENoaWxkKHRkMSk7XG4gIHRyLmFwcGVuZENoaWxkKHRkMik7XG4gIHRyLmFwcGVuZENoaWxkKHRkMyk7XG4gIGdyaWRNb2JpbGUuYXBwZW5kQ2hpbGQodHIpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdyaWRNb2JpbGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkU3R5bGVFbGVtZW50KCkge1xuICBjb25zdCBncmlkU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBncmlkU3R5bGUuaWQgPSAnZ3JpZFN0eWxlJztcbiAgZ3JpZFN0eWxlLmlubmVySFRNTCA9IGBcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgI2dyaWRNb2JpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgaW5zZXQ6IDA7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBib2R5LnNob3ctZ3JpZCAjZ3JpZE1vYmlsZSB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cbiAgXG4gICNncmlkTW9iaWxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogdmFyKC0tZ3JpZC1tYXJnaW4sIDJyZW0pO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDAsMCwwLjUpO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgXG4gICNncmlkTW9iaWxlIHRkOmxhc3QtY2hpbGQge1xuICAgIHdpZHRoOiB2YXIoLS1ncmlkLW1hcmdpbiwgMnJlbSk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMCwwLDAuNSk7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuICAgIFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAjZ3JpZERlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgdG9wOiAtMnB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2lkdGg6IG1heChjYWxjKDEwMjRweCAtIDRyZW0pLCBtaW4oY2FsYygxMDB2dyAtIDRyZW0pLCAxMTIwcHgpKTtcbiAgICBoZWlnaHQ6IDEwNXZoO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgyNTUsMCwwLDAuNSk7XG4gIH1cbiAgXG4gIGJvZHkuc2hvdy1ncmlkICNncmlkRGVza3RvcCB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cbiAgXG4gICNncmlkRGVza3RvcCB0ZCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDE0KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwLjVweCByZ2JhKDI1NSwwLDAsMC41KTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwwLDAsMC4wNSk7XG4gIH1cbiAgXG4gICNncmlkRGVza3RvcCB0ZDpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMCwwLDAuMTUpO1xuICB9XG59XG4gICAgYDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChncmlkU3R5bGUpO1xufVxuXG5jb25zdCB0b2dnbGVHcmlkID0gKHNob3dHcmlkKSA9PiB7XG4gIGxldCBncmlkRGVza3RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmlkRGVza3RvcCcpO1xuICBsZXQgZ3JpZE1vYmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmlkTW9iaWxlJyk7XG4gIGxldCBncmlkU3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JpZFN0eWxlJyk7XG5cbiAgaWYgKCFncmlkRGVza3RvcCkgY3JlYXRlR3JpZERlc2t0b3BFbGVtZW50KCk7XG4gIGlmICghZ3JpZE1vYmlsZSkgY3JlYXRlR3JpZE1vYmlsZUVsZW1lbnQoKTtcbiAgaWYgKCFncmlkU3R5bGUpIGNyZWF0ZUdyaWRTdHlsZUVsZW1lbnQoKTtcblxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZ3JpZCcsIHNob3dHcmlkKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEFkZEdyaWQoKSB7XG4gIGlmIChsb2NhdGlvbi5ob3N0LmVuZHNXaXRoKCdkYW5za2VzcGlsLmRrJykgJiYgIWxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9zaXRlY29yZS8nKSkge1xuICAgIGxldCBzaG93R3JpZCA9IGZhbHNlO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdLZXlHJyAmJiBldmVudC5jdHJsS2V5ID09PSB0cnVlKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNob3dHcmlkID0gIXNob3dHcmlkO1xuICAgICAgICB0b2dnbGVHcmlkKHNob3dHcmlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgc2V0dXBBZGRHcmlkIH0gZnJvbSAnLi9Db250ZW50U2NyaXB0cy9EUy9BZGRHcmlkJztcbmltcG9ydCB7IHNldHVwRHNGaW5kRGljdGlvbmFyeSB9IGZyb20gJy4vQ29udGVudFNjcmlwdHMvRFMvRHNGaW5kRGljdGlvbmFyeSc7XG5pbXBvcnQgeyBzZXR1cERzU2l0ZWNvcmVEZXZlbG9wZXJFcnJvciB9IGZyb20gJy4vQ29udGVudFNjcmlwdHMvRFMvU2l0ZWNvcmVEZXZlbG9wZXJFcnJvcic7XG5pbXBvcnQgeyBzZXR1cEdpdGh1YkNyZWF0ZUJyYW5jaCB9IGZyb20gJy4vQ29udGVudFNjcmlwdHMvR2l0aHViL0dpdEh1YkNyZWF0ZUJyYW5jaCc7XG5pbXBvcnQgeyBzZXR1cFNpdGVjb3JlTGF5b3V0SW1wcm92ZW1lbnRzIH0gZnJvbSAnLi9TaXRlY29yZUxheW91dEltcHJvdmVtZW50cyc7XG5pbXBvcnQgeyBzaG93Q3JlYXRlQnJhbmNoTGluayB9IGZyb20gJy4vQ29udGVudFNjcmlwdHMvSmlyYS9TaG93Q3JlYXRlQnJhbmNoTGluayc7XG5pbXBvcnQgYWRkRm9jdXNPblRhc2tDVEEgZnJvbSAnLi9Db250ZW50U2NyaXB0cy9KaXJhL0ZvY3VzT25UYXNrJztcblxuc2V0dXBBZGRHcmlkKCk7XG5zZXR1cERzRmluZERpY3Rpb25hcnkoKTtcbnNldHVwR2l0aHViQ3JlYXRlQnJhbmNoKCk7XG5zZXR1cFNpdGVjb3JlTGF5b3V0SW1wcm92ZW1lbnRzKCk7XG5zaG93Q3JlYXRlQnJhbmNoTGluaygpO1xuYWRkRm9jdXNPblRhc2tDVEEoKTtcbnNldHVwRHNTaXRlY29yZURldmVsb3BlckVycm9yKCk7XG5cbmlmIChsb2NhdGlvbi5ob3N0LmVuZHNXaXRoKCdkYW5za2VzcGlsLmRrJykpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdGMicpIHtcbiAgICAgIC8vIERvIHNvbWV0aGluZyB3aGVuIEYyIGlzIHByZXNzZWRcbiAgICAgIGFsZXJ0KCdGMiB3YXMgcHJlc3NlZCcpO1xuXG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ2NhbGxNeUZ1bmN0aW9uJyB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcigneHh4IENBTExJTkcgTVkgRlVOQ1RJT04geHh4JywgcmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzZXR1cERzU2l0ZWNvcmVEZXZlbG9wZXJFcnJvcigpIHtcbiAgaWYgKGxvY2F0aW9uLmhvc3QuZW5kc1dpdGgoJ2RhbnNrZXNwaWwuZGsnKSAmJiAhbG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL3NpdGVjb3JlLycpKSB7XG4gICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGVjb3JlRGV2ZWxvcGVyRXJyb3JTdHlsZScpO1xuXG4gICAgaWYgKCFzdHlsZSkge1xuICAgICAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGUuaWQgPSAnc2l0ZWNvcmVEZXZlbG9wZXJFcnJvclN0eWxlJztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cblxuICAgIHN0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgIC5hbGVydC5hbGVydC1lcnJvcjpoYXMoLmRldmVsb3Blci1hbGVydCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOWI1OWI2O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9YDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImdldERpY3Rpb25hcnlVcmwiLCJpc0RsbyIsImVudlBhcnQiLCJob3N0UGFydHMiLCJsb2NhdGlvbiIsImhvc3QiLCJzcGxpdCIsInByb3RvY29sIiwiaXNUb3duRW52IiwiaW5jbHVkZXMiLCJjb25jYXQiLCJjbGVhckZpbGxEaWN0aW9uYXJ5IiwicmVtb3ZlRWxlbWVudEJ5SWQiLCJpZCIsImVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImVuc3VyZUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiZmlsbERpY3Rpb25hcnkiLCJjb250ZW50Iiwic3R5bGUiLCJjc3MiLCJkaXYiLCJpbm5lclRleHQiLCJzdHlsZUVsIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9yZWYyIiwidHh0IiwidXJsIiwia2V5IiwicCIsImEiLCJocmVmIiwidGFyZ2V0IiwidGV4dCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwid2FpdEZvckVsZW1lbnQiLCJfcmVmIiwiX2NhbGxlZSIsInNlbGVjdG9yIiwiX2NvbnRleHQiLCJxdWVyeVNlbGVjdG9yIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3giLCJfc2V0dXBHaXRodWJDcmVhdGVCcmFuY2giLCJfY2FsbGVlMiIsInBhcmFtcyIsIm5ld0JyYW5jaCIsImN0YSIsImlucHV0IiwiX2NvbnRleHQyIiwic2VhcmNoIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ2V0IiwiY2xpY2siLCJzZXRUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwiZXZlbnRUeXBlIiwiZXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsIlVSTCIsIndpbmRvdyIsInNlYXJjaFBhcmFtcyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJwcmV2aW91c1NlbGVjdGVkU2l0ZWNvcmVJZCIsInNob3dGYXZvcml0ZXNQb3B1cCIsImRlZmF1bHRUZXh0QXJlYUhlaWdodCIsImFkZFVybFRvVHJlZUxpc3RJZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidHJlZUxpc3QiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm9wdGlvbnMiLCJoZWxwIiwicGFyZW50RWxlbWVudCIsImFkZCIsIm9wdGlvbiIsIl9vcHRpb24kdmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0IiwiaW5uZXJIVE1MIiwiZ2V0QWN0aXZlVHJlZU5vZGVUZXh0IiwiZ2V0QWN0aXZlVHJlZU5vZGVQYXRoIiwiYWRkQm9va21hcmsiLCJzaXRlY29yZVRleHQiLCJib29rbWFya0xpbmsiLCJib29rbWFya1N0eWxlIiwiaW5jcmVhc2VIZWlnaHRPblRyZWVMaXN0cyIsImVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJoZWlnaHQiLCJmaXhJbnB1dENlbGxUZXh0QXJlYSIsInR4dHMiLCJ0aGlzIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZW5sYXJnZVRyZWVsaXN0IiwiZGF0YVRyZWVsaXN0IiwiYWRkRmF2b3JpdGVzIiwiZmF2b3JpdGVzU3R5bGUiLCJjaHJvbWUiLCJzdG9yYWdlIiwic3luYyIsImZhdm9yaXRlcyIsInNvcnQiLCJiIiwicGF0aCIsImFjY0luZm8iLCJmYXYiLCJwb3B1cCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImZhdm9yaXRlIiwiY2xhc3NOYW1lIiwib3JpZ2luIiwicGF0aG5hbWUiLCJqb2luIiwic3BhbiIsImdldEZhdm9yaXRlSXRlbVBhcmVudFRleHQiLCJsYWJlbCIsImdldEZhdm9yaXRlSXRlbUxhYmVsIiwiZmlsdGVyIiwiaXNJdGVtSW5NZW51IiwiYWRkQnV0dG9uIiwiZXYiLCJhZGRJbWFnZURpcmVjdFVybCIsIl9kb2N1bWVudCRnZXRFbGVtZW50QiIsIml0ZW0iLCJpc1Zpc2libGUiLCJkaXNwbGF5IiwidGFibGUiLCJ0ciIsInRkMSIsInRkMiIsInJlcGxhY2UiLCJpbml0aWFsaXplIiwic2VsZWN0ZWRJdGVtIiwidG9nZ2xlQXJyb3ciLCJlbmRzV2l0aCIsImRlY29kZVVSSUNvbXBvbmVudCIsIm1hdGNoIiwiY29sdW1uV2lkdGgiLCJjb29raWUiLCJ3aWR0aCIsImxlZnQiLCJlZGl0b3IiLCJwYXJzZUludCIsInN0cmV0Y2hDb2x1bW4iLCJzY3JvbGxJbnRvVmlldyIsInNldEludGVydmFsIiwibWFrZUJyYW5jaE5hbWUiLCJpc3N1ZSIsInN1bW1hcnkiLCJ0aXRsZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsImdldFRvb2xiYXIiLCJ0b29sQmFyIiwiY3RhQ29udGFpbmVyIiwiaXNQYWdlQUppcmFUYXNrIiwic3RhcnRzV2l0aCIsImNyZWF0ZUNUQUluVG9vbGJhciIsIl9yZWYzIiwiX2NhbGxlZTMiLCJfY29udGV4dDMiLCJfeDIiLCJfeDMiLCJyZXBvIiwiYnJhbmNoTmFtZSIsImhpZGUiLCJhc3luY1NlbGVjdG9yc1RvSGlkZSIsImhhc0FsbEFzeW5jRWxlbWVudHMiLCJhbGwiLCJtYXAiLCJ0b2dnbGVFbGVtZW50c1Zpc2liaWxpdHkiLCJkZXNjcmlwdGlvbiIsImF0dGFjaG1lbnRzIiwiX3JlZjQiLCJfY2FsbGVlNCIsIl9jb250ZXh0NCIsInNob3dHcmlkIiwiY29kZSIsImN0cmxLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImdyaWREZXNrdG9wIiwiZ3JpZE1vYmlsZSIsImdyaWRTdHlsZSIsInRkMyIsInRkNCIsInRkNSIsInRkNiIsInRkNyIsInRkOCIsInRkOSIsInRkMTAiLCJ0ZDExIiwidGQxMiIsInRkMTMiLCJ0ZDE0IiwiY3JlYXRlR3JpZERlc2t0b3BFbGVtZW50IiwiY3JlYXRlR3JpZE1vYmlsZUVsZW1lbnQiLCJjcmVhdGVHcmlkU3R5bGVFbGVtZW50IiwidG9nZ2xlIiwidG9nZ2xlR3JpZCIsInNldHVwQWRkR3JpZCIsInNlYXJjaFN0cmluZyIsImdldFNlbGVjdGlvbiIsInRvU3RyaW5nIiwicmVzdWx0cyIsIm91dHB1dCIsImtleTIiLCJrZXkzIiwia2V5NCIsImtleTUiLCJrZXk2Iiwia2V5NyIsImtleTgiLCJyZXMiLCJkaWN0aW9uYXJ5S2V5IiwicmVnaW9uIiwiaW5kZXhLZXkiLCJkaWN0aW9uYXJ5S2V5cyIsImxvY2FsU3RvcmFnZSIsInN0b3JhZ2VLZXkiLCJKU09OIiwicGFyc2UiLCJnZXRJdGVtIiwic2V0dXBHaXRodWJDcmVhdGVCcmFuY2giLCJyZWFkeVN0YXRlIiwib3BlbiIsImFkZEZvY3VzT25UYXNrQ1RBIiwic2V0dXBEc1NpdGVjb3JlRGV2ZWxvcGVyRXJyb3IiLCJhbGVydCIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsImFjdGlvbiIsInJlc3BvbnNlIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=
