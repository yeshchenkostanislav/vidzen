"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

$('document').ready(function () {
    /*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
    //@ sourceMappingURL=jquery-2.0.3.min.map
    */
    (function (e, undefined) {
        var t,
            n,
            r = typeof undefined === "undefined" ? "undefined" : _typeof(undefined),
            i = e.location,
            o = e.document,
            s = o.documentElement,
            a = e.jQuery,
            u = e.$,
            l = {},
            c = [],
            p = "2.0.3",
            f = c.concat,
            h = c.push,
            d = c.slice,
            g = c.indexOf,
            m = l.toString,
            y = l.hasOwnProperty,
            v = p.trim,
            x = function x(e, n) {
            return new x.fn.init(e, n, t);
        },
            b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            w = /\S+/g,
            T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            k = /^-ms-/,
            N = /-([\da-z])/gi,
            E = function E(e, t) {
            return t.toUpperCase();
        },
            S = function S() {
            o.removeEventListener("DOMContentLoaded", S, !1), e.removeEventListener("load", S, !1), x.ready();
        };x.fn = x.prototype = { jquery: p, constructor: x, init: function init(e, t, n) {
                var r, i;if (!e) return this;if ("string" == typeof e) {
                    if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : T.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (r[1]) {
                        if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), C.test(r[1]) && x.isPlainObject(t)) for (r in t) {
                            x.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        }return this;
                    }return i = o.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = o, this.selector = e, this;
                }return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? n.ready(e) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
            }, selector: "", length: 0, toArray: function toArray() {
                return d.call(this);
            }, get: function get(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
            }, pushStack: function pushStack(e) {
                var t = x.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
            }, each: function each(e, t) {
                return x.each(this, e, t);
            }, ready: function ready(e) {
                return x.ready.promise().done(e), this;
            }, slice: function slice() {
                return this.pushStack(d.apply(this, arguments));
            }, first: function first() {
                return this.eq(0);
            }, last: function last() {
                return this.eq(-1);
            }, eq: function eq(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
            }, map: function map(e) {
                return this.pushStack(x.map(this, function (t, n) {
                    return e.call(t, n, t);
                }));
            }, end: function end() {
                return this.prevObject || this.constructor(null);
            }, push: h, sort: [].sort, splice: [].splice }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                s = arguments[0] || {},
                a = 1,
                u = arguments.length,
                l = !1;for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, a = 2), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || x.isFunction(s) || (s = {}), u === a && (s = this, --a); u > a; a++) {
                if (null != (e = arguments[a])) for (t in e) {
                    n = s[t], r = e[t], s !== r && (l && r && (x.isPlainObject(r) || (i = x.isArray(r))) ? (i ? (i = !1, o = n && x.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(l, o, r)) : r !== undefined && (s[t] = r));
                }
            }return s;
        }, x.extend({ expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""), noConflict: function noConflict(t) {
                return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = a), x;
            }, isReady: !1, readyWait: 1, holdReady: function holdReady(e) {
                e ? x.readyWait++ : x.ready(!0);
            }, ready: function ready(e) {
                (e === !0 ? --x.readyWait : x.isReady) || (x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(o, [x]), x.fn.trigger && x(o).trigger("ready").off("ready")));
            }, isFunction: function isFunction(e) {
                return "function" === x.type(e);
            }, isArray: Array.isArray, isWindow: function isWindow(e) {
                return null != e && e === e.window;
            }, isNumeric: function isNumeric(e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
            }, type: function type(e) {
                return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? l[m.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
            }, isPlainObject: function isPlainObject(e) {
                if ("object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;try {
                    if (e.constructor && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                } catch (t) {
                    return !1;
                }return !0;
            }, isEmptyObject: function isEmptyObject(e) {
                var t;for (t in e) {
                    return !1;
                }return !0;
            }, error: function error(e) {
                throw Error(e);
            }, parseHTML: function parseHTML(e, t, n) {
                if (!e || "string" != typeof e) return null;"boolean" == typeof t && (n = t, t = !1), t = t || o;var r = C.exec(e),
                    i = !n && [];return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes));
            }, parseJSON: JSON.parse, parseXML: function parseXML(e) {
                var t, n;if (!e || "string" != typeof e) return null;try {
                    n = new DOMParser(), t = n.parseFromString(e, "text/xml");
                } catch (r) {
                    t = undefined;
                }return (!t || t.getElementsByTagName("parsererror").length) && x.error("Invalid XML: " + e), t;
            }, noop: function noop() {}, globalEval: function globalEval(e) {
                var t,
                    n = eval;e = x.trim(e), e && (1 === e.indexOf("use strict") ? (t = o.createElement("script"), t.text = e, o.head.appendChild(t).parentNode.removeChild(t)) : n(e));
            }, camelCase: function camelCase(e) {
                return e.replace(k, "ms-").replace(N, E);
            }, nodeName: function nodeName(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }, each: function each(e, t, n) {
                var r,
                    i = 0,
                    o = e.length,
                    s = j(e);if (n) {
                    if (s) {
                        for (; o > i; i++) {
                            if (r = t.apply(e[i], n), r === !1) break;
                        }
                    } else for (i in e) {
                        if (r = t.apply(e[i], n), r === !1) break;
                    }
                } else if (s) {
                    for (; o > i; i++) {
                        if (r = t.call(e[i], i, e[i]), r === !1) break;
                    }
                } else for (i in e) {
                    if (r = t.call(e[i], i, e[i]), r === !1) break;
                }return e;
            }, trim: function trim(e) {
                return null == e ? "" : v.call(e);
            }, makeArray: function makeArray(e, t) {
                var n = t || [];return null != e && (j(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n;
            }, inArray: function inArray(e, t, n) {
                return null == t ? -1 : g.call(t, e, n);
            }, merge: function merge(e, t) {
                var n = t.length,
                    r = e.length,
                    i = 0;if ("number" == typeof n) for (; n > i; i++) {
                    e[r++] = t[i];
                } else while (t[i] !== undefined) {
                    e[r++] = t[i++];
                }return e.length = r, e;
            }, grep: function grep(e, t, n) {
                var r,
                    i = [],
                    o = 0,
                    s = e.length;for (n = !!n; s > o; o++) {
                    r = !!t(e[o], o), n !== r && i.push(e[o]);
                }return i;
            }, map: function map(e, t, n) {
                var r,
                    i = 0,
                    o = e.length,
                    s = j(e),
                    a = [];if (s) for (; o > i; i++) {
                    r = t(e[i], i, n), null != r && (a[a.length] = r);
                } else for (i in e) {
                    r = t(e[i], i, n), null != r && (a[a.length] = r);
                }return f.apply([], a);
            }, guid: 1, proxy: function proxy(e, t) {
                var n, r, i;return "string" == typeof t && (n = e[t], t = e, e = n), x.isFunction(e) ? (r = d.call(arguments, 2), i = function i() {
                    return e.apply(t || this, r.concat(d.call(arguments)));
                }, i.guid = e.guid = e.guid || x.guid++, i) : undefined;
            }, access: function access(e, t, n, r, i, o, s) {
                var a = 0,
                    u = e.length,
                    l = null == n;if ("object" === x.type(n)) {
                    i = !0;for (a in n) {
                        x.access(e, t, a, n[a], !0, o, s);
                    }
                } else if (r !== undefined && (i = !0, x.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
                    return l.call(x(e), n);
                })), t)) for (; u > a; a++) {
                    t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                }return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
            }, now: Date.now, swap: function swap(e, t, n, r) {
                var i,
                    o,
                    s = {};for (o in t) {
                    s[o] = e.style[o], e.style[o] = t[o];
                }i = n.apply(e, r || []);for (o in t) {
                    e.style[o] = s[o];
                }return i;
            } }), x.ready.promise = function (t) {
            return n || (n = x.Deferred(), "complete" === o.readyState ? setTimeout(x.ready) : (o.addEventListener("DOMContentLoaded", S, !1), e.addEventListener("load", S, !1))), n.promise(t);
        }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            l["[object " + t + "]"] = t.toLowerCase();
        });function j(e) {
            var t = e.length,
                n = x.type(e);return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
        }t = x(o), function (e, undefined) {
            var t,
                n,
                r,
                i,
                o,
                s,
                a,
                u,
                l,
                c,
                p,
                f,
                h,
                d,
                g,
                m,
                y,
                v = "sizzle" + -new Date(),
                b = e.document,
                w = 0,
                T = 0,
                C = st(),
                k = st(),
                N = st(),
                E = !1,
                S = function S(e, t) {
                return e === t ? (E = !0, 0) : 0;
            },
                j = typeof undefined === "undefined" ? "undefined" : _typeof(undefined),
                D = 1 << 31,
                A = {}.hasOwnProperty,
                L = [],
                q = L.pop,
                H = L.push,
                O = L.push,
                F = L.slice,
                P = L.indexOf || function (e) {
                var t = 0,
                    n = this.length;for (; n > t; t++) {
                    if (this[t] === e) return t;
                }return -1;
            },
                R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                M = "[\\x20\\t\\r\\n\\f]",
                W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                $ = W.replace("w", "w#"),
                B = "\\[" + M + "*(" + W + ")" + M + "*(?:([*^$|!~]?=)" + M + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + $ + ")|)|)" + M + "*\\]",
                I = ":(" + W + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + B.replace(3, 8) + ")*)|.*)\\)|)",
                z = RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                _ = RegExp("^" + M + "*," + M + "*"),
                X = RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                U = RegExp(M + "*[+~]"),
                Y = RegExp("=" + M + "*([^\\]'\"]*)" + M + "*\\]", "g"),
                V = RegExp(I),
                G = RegExp("^" + $ + "$"),
                J = { ID: RegExp("^#(" + W + ")"), CLASS: RegExp("^\\.(" + W + ")"), TAG: RegExp("^(" + W.replace("w", "w*") + ")"), ATTR: RegExp("^" + B), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: RegExp("^(?:" + R + ")$", "i"), needsContext: RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
                Q = /^[^{]+\{\s*\[native \w/,
                K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Z = /^(?:input|select|textarea|button)$/i,
                et = /^h\d$/i,
                tt = /'|\\/g,
                nt = RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                rt = function rt(e, t, n) {
                var r = "0x" + t - 65536;return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
            };try {
                O.apply(L = F.call(b.childNodes), b.childNodes), L[b.childNodes.length].nodeType;
            } catch (it) {
                O = { apply: L.length ? function (e, t) {
                        H.apply(e, F.call(t));
                    } : function (e, t) {
                        var n = e.length,
                            r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
                    } };
            }function ot(e, t, r, i) {
                var o, s, a, u, l, f, g, m, x, w;if ((t ? t.ownerDocument || t : b) !== p && c(t), t = t || p, r = r || [], !e || "string" != typeof e) return r;if (1 !== (u = t.nodeType) && 9 !== u) return [];if (h && !i) {
                    if (o = K.exec(e)) if (a = o[1]) {
                        if (9 === u) {
                            if (s = t.getElementById(a), !s || !s.parentNode) return r;if (s.id === a) return r.push(s), r;
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && y(t, s) && s.id === a) return r.push(s), r;
                    } else {
                        if (o[2]) return O.apply(r, t.getElementsByTagName(e)), r;if ((a = o[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(a)), r;
                    }if (n.qsa && (!d || !d.test(e))) {
                        if (m = g = v, x = t, w = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                            f = gt(e), (g = t.getAttribute("id")) ? m = g.replace(tt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", l = f.length;while (l--) {
                                f[l] = m + mt(f[l]);
                            }x = U.test(e) && t.parentNode || t, w = f.join(",");
                        }if (w) try {
                            return O.apply(r, x.querySelectorAll(w)), r;
                        } catch (T) {} finally {
                            g || t.removeAttribute("id");
                        }
                    }
                }return kt(e.replace(z, "$1"), t, r, i);
            }function st() {
                var e = [];function t(n, r) {
                    return e.push(n += " ") > i.cacheLength && delete t[e.shift()], t[n] = r;
                }return t;
            }function at(e) {
                return e[v] = !0, e;
            }function ut(e) {
                var t = p.createElement("div");try {
                    return !!e(t);
                } catch (n) {
                    return !1;
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null;
                }
            }function lt(e, t) {
                var n = e.split("|"),
                    r = e.length;while (r--) {
                    i.attrHandle[n[r]] = t;
                }
            }function ct(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);if (r) return r;if (n) while (n = n.nextSibling) {
                    if (n === t) return -1;
                }return e ? 1 : -1;
            }function pt(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();return "input" === n && t.type === e;
                };
            }function ft(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
                };
            }function ht(e) {
                return at(function (t) {
                    return t = +t, at(function (n, r) {
                        var i,
                            o = e([], n.length, t),
                            s = o.length;while (s--) {
                            n[i = o[s]] && (n[i] = !(r[i] = n[i]));
                        }
                    });
                });
            }s = ot.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;return t ? "HTML" !== t.nodeName : !1;
            }, n = ot.support = {}, c = ot.setDocument = function (e) {
                var t = e ? e.ownerDocument || e : b,
                    r = t.defaultView;return t !== p && 9 === t.nodeType && t.documentElement ? (p = t, f = t.documentElement, h = !s(t), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function () {
                    c();
                }), n.attributes = ut(function (e) {
                    return e.className = "i", !e.getAttribute("className");
                }), n.getElementsByTagName = ut(function (e) {
                    return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length;
                }), n.getElementsByClassName = ut(function (e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
                }), n.getById = ut(function (e) {
                    return f.appendChild(e).id = v, !t.getElementsByName || !t.getElementsByName(v).length;
                }), n.getById ? (i.find.ID = function (e, t) {
                    if (_typeof(t.getElementById) !== j && h) {
                        var n = t.getElementById(e);return n && n.parentNode ? [n] : [];
                    }
                }, i.filter.ID = function (e) {
                    var t = e.replace(nt, rt);return function (e) {
                        return e.getAttribute("id") === t;
                    };
                }) : (delete i.find.ID, i.filter.ID = function (e) {
                    var t = e.replace(nt, rt);return function (e) {
                        var n = _typeof(e.getAttributeNode) !== j && e.getAttributeNode("id");return n && n.value === t;
                    };
                }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                    return _typeof(t.getElementsByTagName) !== j ? t.getElementsByTagName(e) : undefined;
                } : function (e, t) {
                    var n,
                        r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);if ("*" === e) {
                        while (n = o[i++]) {
                            1 === n.nodeType && r.push(n);
                        }return r;
                    }return o;
                }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                    return _typeof(t.getElementsByClassName) !== j && h ? t.getElementsByClassName(e) : undefined;
                }, g = [], d = [], (n.qsa = Q.test(t.querySelectorAll)) && (ut(function (e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll(":checked").length || d.push(":checked");
                }), ut(function (e) {
                    var n = t.createElement("input");n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:");
                })), (n.matchesSelector = Q.test(m = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut(function (e) {
                    n.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", I);
                }), d = d.length && RegExp(d.join("|")), g = g.length && RegExp(g.join("|")), y = Q.test(f.contains) || f.compareDocumentPosition ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                } : function (e, t) {
                    if (t) while (t = t.parentNode) {
                        if (t === e) return !0;
                    }return !1;
                }, S = f.compareDocumentPosition ? function (e, r) {
                    if (e === r) return E = !0, 0;var i = r.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(r);return i ? 1 & i || !n.sortDetached && r.compareDocumentPosition(e) === i ? e === t || y(b, e) ? -1 : r === t || y(b, r) ? 1 : l ? P.call(l, e) - P.call(l, r) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
                } : function (e, n) {
                    var r,
                        i = 0,
                        o = e.parentNode,
                        s = n.parentNode,
                        a = [e],
                        u = [n];if (e === n) return E = !0, 0;if (!o || !s) return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : l ? P.call(l, e) - P.call(l, n) : 0;if (o === s) return ct(e, n);r = e;while (r = r.parentNode) {
                        a.unshift(r);
                    }r = n;while (r = r.parentNode) {
                        u.unshift(r);
                    }while (a[i] === u[i]) {
                        i++;
                    }return i ? ct(a[i], u[i]) : a[i] === b ? -1 : u[i] === b ? 1 : 0;
                }, t) : p;
            }, ot.matches = function (e, t) {
                return ot(e, null, null, t);
            }, ot.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Y, "='$1']"), !(!n.matchesSelector || !h || g && g.test(t) || d && d.test(t))) try {
                    var r = m.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
                } catch (i) {}return ot(t, p, null, [e]).length > 0;
            }, ot.contains = function (e, t) {
                return (e.ownerDocument || e) !== p && c(e), y(e, t);
            }, ot.attr = function (e, t) {
                (e.ownerDocument || e) !== p && c(e);var r = i.attrHandle[t.toLowerCase()],
                    o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !h) : undefined;return o === undefined ? n.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null : o;
            }, ot.error = function (e) {
                throw Error("Syntax error, unrecognized expression: " + e);
            }, ot.uniqueSort = function (e) {
                var t,
                    r = [],
                    i = 0,
                    o = 0;if (E = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(S), E) {
                    while (t = e[o++]) {
                        t === e[o] && (i = r.push(o));
                    }while (i--) {
                        e.splice(r[i], 1);
                    }
                }return e;
            }, o = ot.getText = function (e) {
                var t,
                    n = "",
                    r = 0,
                    i = e.nodeType;if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
                            n += o(e);
                        }
                    } else if (3 === i || 4 === i) return e.nodeValue;
                } else for (; t = e[r]; r++) {
                    n += o(t);
                }return n;
            }, i = ot.selectors = { cacheLength: 50, createPseudo: at, match: J, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
                        return e[1] = e[1].replace(nt, rt), e[3] = (e[4] || e[5] || "").replace(nt, rt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                    }, CHILD: function CHILD(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]), e;
                    }, PSEUDO: function PSEUDO(e) {
                        var t,
                            n = !e[5] && e[2];return J.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && V.test(n) && (t = gt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                    } }, filter: { TAG: function TAG(e) {
                        var t = e.replace(nt, rt).toLowerCase();return "*" === e ? function () {
                            return !0;
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                    }, CLASS: function CLASS(e) {
                        var t = C[e + " "];return t || (t = RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && C(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || _typeof(e.getAttribute) !== j && e.getAttribute("class") || "");
                        });
                    }, ATTR: function ATTR(e, t, n) {
                        return function (r) {
                            var i = ot.attr(r, e);return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
                        };
                    }, CHILD: function CHILD(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;return 1 === r && 0 === i ? function (e) {
                            return !!e.parentNode;
                        } : function (t, n, u) {
                            var l,
                                c,
                                p,
                                f,
                                h,
                                d,
                                g = o !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = a && t.nodeName.toLowerCase(),
                                x = !u && !a;if (m) {
                                if (o) {
                                    while (g) {
                                        p = t;while (p = p[g]) {
                                            if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        }d = g = "only" === e && !d && "nextSibling";
                                    }return !0;
                                }if (d = [s ? m.firstChild : m.lastChild], s && x) {
                                    c = m[v] || (m[v] = {}), l = c[e] || [], h = l[0] === w && l[1], f = l[0] === w && l[2], p = h && m.childNodes[h];while (p = ++h && p && p[g] || (f = h = 0) || d.pop()) {
                                        if (1 === p.nodeType && ++f && p === t) {
                                            c[e] = [w, h, f];break;
                                        }
                                    }
                                } else if (x && (l = (t[v] || (t[v] = {}))[e]) && l[0] === w) f = l[1];else while (p = ++h && p && p[g] || (f = h = 0) || d.pop()) {
                                    if ((a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (x && ((p[v] || (p[v] = {}))[e] = [w, f]), p === t)) break;
                                }return f -= i, f === r || 0 === f % r && f / r >= 0;
                            }
                        };
                    }, PSEUDO: function PSEUDO(e, t) {
                        var n,
                            r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);return r[v] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function (e, n) {
                            var i,
                                o = r(e, t),
                                s = o.length;while (s--) {
                                i = P.call(e, o[s]), e[i] = !(n[i] = o[s]);
                            }
                        }) : function (e) {
                            return r(e, 0, n);
                        }) : r;
                    } }, pseudos: { not: at(function (e) {
                        var t = [],
                            n = [],
                            r = a(e.replace(z, "$1"));return r[v] ? at(function (e, t, n, i) {
                            var o,
                                s = r(e, null, i, []),
                                a = e.length;while (a--) {
                                (o = s[a]) && (e[a] = !(t[a] = o));
                            }
                        }) : function (e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop();
                        };
                    }), has: at(function (e) {
                        return function (t) {
                            return ot(e, t).length > 0;
                        };
                    }), contains: at(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
                        };
                    }), lang: at(function (e) {
                        return G.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(nt, rt).toLowerCase(), function (t) {
                            var n;do {
                                if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
                        };
                    }), target: function target(t) {
                        var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
                    }, root: function root(e) {
                        return e === f;
                    }, focus: function focus(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    }, enabled: function enabled(e) {
                        return e.disabled === !1;
                    }, disabled: function disabled(e) {
                        return e.disabled === !0;
                    }, checked: function checked(e) {
                        var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
                    }, selected: function selected(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                    }, empty: function empty(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        }return !0;
                    }, parent: function parent(e) {
                        return !i.pseudos.empty(e);
                    }, header: function header(e) {
                        return et.test(e.nodeName);
                    }, input: function input(e) {
                        return Z.test(e.nodeName);
                    }, button: function button(e) {
                        var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
                    }, text: function text(e) {
                        var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
                    }, first: ht(function () {
                        return [0];
                    }), last: ht(function (e, t) {
                        return [t - 1];
                    }), eq: ht(function (e, t, n) {
                        return [0 > n ? n + t : n];
                    }), even: ht(function (e, t) {
                        var n = 0;for (; t > n; n += 2) {
                            e.push(n);
                        }return e;
                    }), odd: ht(function (e, t) {
                        var n = 1;for (; t > n; n += 2) {
                            e.push(n);
                        }return e;
                    }), lt: ht(function (e, t, n) {
                        var r = 0 > n ? n + t : n;for (; --r >= 0;) {
                            e.push(r);
                        }return e;
                    }), gt: ht(function (e, t, n) {
                        var r = 0 > n ? n + t : n;for (; t > ++r;) {
                            e.push(r);
                        }return e;
                    }) } }, i.pseudos.nth = i.pseudos.eq;for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
                i.pseudos[t] = pt(t);
            }for (t in { submit: !0, reset: !0 }) {
                i.pseudos[t] = ft(t);
            }function dt() {}dt.prototype = i.filters = i.pseudos, i.setFilters = new dt();function gt(e, t) {
                var n,
                    r,
                    o,
                    s,
                    a,
                    u,
                    l,
                    c = k[e + " "];if (c) return t ? 0 : c.slice(0);a = e, u = [], l = i.preFilter;while (a) {
                    (!n || (r = _.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), o.push({ value: n, type: r[0].replace(z, " ") }), a = a.slice(n.length));for (s in i.filter) {
                        !(r = J[s].exec(a)) || l[s] && !(r = l[s](r)) || (n = r.shift(), o.push({ value: n, type: s, matches: r }), a = a.slice(n.length));
                    }if (!n) break;
                }return t ? a.length : a ? ot.error(e) : k(e, u).slice(0);
            }function mt(e) {
                var t = 0,
                    n = e.length,
                    r = "";for (; n > t; t++) {
                    r += e[t].value;
                }return r;
            }function yt(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    s = T++;return t.first ? function (t, n, r) {
                    while (t = t[i]) {
                        if (1 === t.nodeType || o) return e(t, n, r);
                    }
                } : function (t, n, a) {
                    var u,
                        l,
                        c,
                        p = w + " " + s;if (a) {
                        while (t = t[i]) {
                            if ((1 === t.nodeType || o) && e(t, n, a)) return !0;
                        }
                    } else while (t = t[i]) {
                        if (1 === t.nodeType || o) if (c = t[v] || (t[v] = {}), (l = c[i]) && l[0] === p) {
                            if ((u = l[1]) === !0 || u === r) return u === !0;
                        } else if (l = c[i] = [p], l[1] = e(t, n, a) || r, l[1] === !0) return !0;
                    }
                };
            }function vt(e) {
                return e.length > 1 ? function (t, n, r) {
                    var i = e.length;while (i--) {
                        if (!e[i](t, n, r)) return !1;
                    }return !0;
                } : e[0];
            }function xt(e, t, n, r, i) {
                var o,
                    s = [],
                    a = 0,
                    u = e.length,
                    l = null != t;for (; u > a; a++) {
                    (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
                }return s;
            }function bt(e, t, n, r, i, o) {
                return r && !r[v] && (r = bt(r)), i && !i[v] && (i = bt(i, o)), at(function (o, s, a, u) {
                    var l,
                        c,
                        p,
                        f = [],
                        h = [],
                        d = s.length,
                        g = o || Ct(t || "*", a.nodeType ? [a] : a, []),
                        m = !e || !o && t ? g : xt(g, f, e, a, u),
                        y = n ? i || (o ? e : d || r) ? [] : s : m;if (n && n(m, y, a, u), r) {
                        l = xt(y, h), r(l, [], a, u), c = l.length;while (c--) {
                            (p = l[c]) && (y[h[c]] = !(m[h[c]] = p));
                        }
                    }if (o) {
                        if (i || e) {
                            if (i) {
                                l = [], c = y.length;while (c--) {
                                    (p = y[c]) && l.push(m[c] = p);
                                }i(null, y = [], l, u);
                            }c = y.length;while (c--) {
                                (p = y[c]) && (l = i ? P.call(o, p) : f[c]) > -1 && (o[l] = !(s[l] = p));
                            }
                        }
                    } else y = xt(y === s ? y.splice(d, y.length) : y), i ? i(null, s, y, u) : O.apply(s, y);
                });
            }function wt(e) {
                var t,
                    n,
                    r,
                    o = e.length,
                    s = i.relative[e[0].type],
                    a = s || i.relative[" "],
                    l = s ? 1 : 0,
                    c = yt(function (e) {
                    return e === t;
                }, a, !0),
                    p = yt(function (e) {
                    return P.call(t, e) > -1;
                }, a, !0),
                    f = [function (e, n, r) {
                    return !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
                }];for (; o > l; l++) {
                    if (n = i.relative[e[l].type]) f = [yt(vt(f), n)];else {
                        if (n = i.filter[e[l].type].apply(null, e[l].matches), n[v]) {
                            for (r = ++l; o > r; r++) {
                                if (i.relative[e[r].type]) break;
                            }return bt(l > 1 && vt(f), l > 1 && mt(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"), n, r > l && wt(e.slice(l, r)), o > r && wt(e = e.slice(r)), o > r && mt(e));
                        }f.push(n);
                    }
                }return vt(f);
            }function Tt(e, t) {
                var n = 0,
                    o = t.length > 0,
                    s = e.length > 0,
                    a = function a(_a, l, c, f, h) {
                    var d,
                        g,
                        m,
                        y = [],
                        v = 0,
                        x = "0",
                        b = _a && [],
                        T = null != h,
                        C = u,
                        k = _a || s && i.find.TAG("*", h && l.parentNode || l),
                        N = w += null == C ? 1 : Math.random() || .1;for (T && (u = l !== p && l, r = n); null != (d = k[x]); x++) {
                        if (s && d) {
                            g = 0;while (m = e[g++]) {
                                if (m(d, l, c)) {
                                    f.push(d);break;
                                }
                            }T && (w = N, r = ++n);
                        }o && ((d = !m && d) && v--, _a && b.push(d));
                    }if (v += x, o && x !== v) {
                        g = 0;while (m = t[g++]) {
                            m(b, y, l, c);
                        }if (_a) {
                            if (v > 0) while (x--) {
                                b[x] || y[x] || (y[x] = q.call(f));
                            }y = xt(y);
                        }O.apply(f, y), T && !_a && y.length > 0 && v + t.length > 1 && ot.uniqueSort(f);
                    }return T && (w = N, u = C), b;
                };return o ? at(a) : a;
            }a = ot.compile = function (e, t) {
                var n,
                    r = [],
                    i = [],
                    o = N[e + " "];if (!o) {
                    t || (t = gt(e)), n = t.length;while (n--) {
                        o = wt(t[n]), o[v] ? r.push(o) : i.push(o);
                    }o = N(e, Tt(i, r));
                }return o;
            };function Ct(e, t, n) {
                var r = 0,
                    i = t.length;for (; i > r; r++) {
                    ot(e, t[r], n);
                }return n;
            }function kt(e, t, r, o) {
                var s,
                    u,
                    l,
                    c,
                    p,
                    f = gt(e);if (!o && 1 === f.length) {
                    if (u = f[0] = f[0].slice(0), u.length > 2 && "ID" === (l = u[0]).type && n.getById && 9 === t.nodeType && h && i.relative[u[1].type]) {
                        if (t = (i.find.ID(l.matches[0].replace(nt, rt), t) || [])[0], !t) return r;e = e.slice(u.shift().value.length);
                    }s = J.needsContext.test(e) ? 0 : u.length;while (s--) {
                        if (l = u[s], i.relative[c = l.type]) break;if ((p = i.find[c]) && (o = p(l.matches[0].replace(nt, rt), U.test(u[0].type) && t.parentNode || t))) {
                            if (u.splice(s, 1), e = o.length && mt(u), !e) return O.apply(r, o), r;break;
                        }
                    }
                }return a(e, f)(o, t, !h, r, U.test(e)), r;
            }n.sortStable = v.split("").sort(S).join("") === v, n.detectDuplicates = E, c(), n.sortDetached = ut(function (e) {
                return 1 & e.compareDocumentPosition(p.createElement("div"));
            }), ut(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
            }) || lt("type|href|height|width", function (e, t, n) {
                return n ? undefined : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }), n.attributes && ut(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
            }) || lt("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? undefined : e.defaultValue;
            }), ut(function (e) {
                return null == e.getAttribute("disabled");
            }) || lt(R, function (e, t, n) {
                var r;return n ? undefined : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null;
            }), x.find = ot, x.expr = ot.selectors, x.expr[":"] = x.expr.pseudos, x.unique = ot.uniqueSort, x.text = ot.getText, x.isXMLDoc = ot.isXML, x.contains = ot.contains;
        }(e);var D = {};function A(e) {
            var t = D[e] = {};return x.each(e.match(w) || [], function (e, n) {
                t[n] = !0;
            }), t;
        }x.Callbacks = function (e) {
            e = "string" == typeof e ? D[e] || A(e) : x.extend({}, e);var t,
                n,
                r,
                i,
                o,
                s,
                a = [],
                u = !e.once && [],
                l = function l(p) {
                for (t = e.memory && p, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++) {
                    if (a[s].apply(p[0], p[1]) === !1 && e.stopOnFalse) {
                        t = !1;break;
                    }
                }r = !1, a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable());
            },
                c = { add: function add() {
                    if (a) {
                        var n = a.length;(function s(t) {
                            x.each(t, function (t, n) {
                                var r = x.type(n);"function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && s(n);
                            });
                        })(arguments), r ? o = a.length : t && (i = n, l(t));
                    }return this;
                }, remove: function remove() {
                    return a && x.each(arguments, function (e, t) {
                        var n;while ((n = x.inArray(t, a, n)) > -1) {
                            a.splice(n, 1), r && (o >= n && o--, s >= n && s--);
                        }
                    }), this;
                }, has: function has(e) {
                    return e ? x.inArray(e, a) > -1 : !(!a || !a.length);
                }, empty: function empty() {
                    return a = [], o = 0, this;
                }, disable: function disable() {
                    return a = u = t = undefined, this;
                }, disabled: function disabled() {
                    return !a;
                }, lock: function lock() {
                    return u = undefined, t || c.disable(), this;
                }, locked: function locked() {
                    return !u;
                }, fireWith: function fireWith(e, t) {
                    return !a || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? u.push(t) : l(t)), this;
                }, fire: function fire() {
                    return c.fireWith(this, arguments), this;
                }, fired: function fired() {
                    return !!n;
                } };return c;
        }, x.extend({ Deferred: function Deferred(e) {
                var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]],
                    n = "pending",
                    r = { state: function state() {
                        return n;
                    }, always: function always() {
                        return i.done(arguments).fail(arguments), this;
                    }, then: function then() {
                        var e = arguments;return x.Deferred(function (n) {
                            x.each(t, function (t, o) {
                                var s = o[0],
                                    a = x.isFunction(e[t]) && e[t];i[o[1]](function () {
                                    var e = a && a.apply(this, arguments);e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments);
                                });
                            }), e = null;
                        }).promise();
                    }, promise: function promise(e) {
                        return null != e ? x.extend(e, r) : r;
                    } },
                    i = {};return r.pipe = r.then, x.each(t, function (e, o) {
                    var s = o[2],
                        a = o[3];r[o[1]] = s.add, a && s.add(function () {
                        n = a;
                    }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                        return i[o[0] + "With"](this === i ? r : this, arguments), this;
                    }, i[o[0] + "With"] = s.fireWith;
                }), r.promise(i), e && e.call(i, i), i;
            }, when: function when(e) {
                var t = 0,
                    n = d.call(arguments),
                    r = n.length,
                    i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
                    o = 1 === i ? e : x.Deferred(),
                    s = function s(e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === a ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
                    };
                },
                    a,
                    u,
                    l;if (r > 1) for (a = Array(r), u = Array(r), l = Array(r); r > t; t++) {
                    n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) : --i;
                }return i || o.resolveWith(l, n), o.promise();
            } }), x.support = function (t) {
            var n = o.createElement("input"),
                r = o.createDocumentFragment(),
                i = o.createElement("div"),
                s = o.createElement("select"),
                a = s.appendChild(o.createElement("option"));return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = a.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled, n = o.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === i.style.backgroundClip, x(function () {
                var n,
                    r,
                    s = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                    a = o.getElementsByTagName("body")[0];a && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", x.swap(a, null != a.style.zoom ? { zoom: 1 } : {}, function () {
                    t.boxSizing = 4 === i.offsetWidth;
                }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || { width: "4px" }).width, r = i.appendChild(o.createElement("div")), r.style.cssText = i.style.cssText = s, r.style.marginRight = r.style.width = "0", i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), a.removeChild(n));
            }), t) : t;
        }({});var L,
            q,
            H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            O = /([A-Z])/g;function F() {
            Object.defineProperty(this.cache = {}, 0, { get: function get() {
                    return {};
                } }), this.expando = x.expando + Math.random();
        }F.uid = 1, F.accepts = function (e) {
            return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0;
        }, F.prototype = { key: function key(e) {
                if (!F.accepts(e)) return 0;var t = {},
                    n = e[this.expando];if (!n) {
                    n = F.uid++;try {
                        t[this.expando] = { value: n }, Object.defineProperties(e, t);
                    } catch (r) {
                        t[this.expando] = n, x.extend(e, t);
                    }
                }return this.cache[n] || (this.cache[n] = {}), n;
            }, set: function set(e, t, n) {
                var r,
                    i = this.key(e),
                    o = this.cache[i];if ("string" == typeof t) o[t] = n;else if (x.isEmptyObject(o)) x.extend(this.cache[i], t);else for (r in t) {
                    o[r] = t[r];
                }return o;
            }, get: function get(e, t) {
                var n = this.cache[this.key(e)];return t === undefined ? n : n[t];
            }, access: function access(e, t, n) {
                var r;return t === undefined || t && "string" == typeof t && n === undefined ? (r = this.get(e, t), r !== undefined ? r : this.get(e, x.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n : t);
            }, remove: function remove(e, t) {
                var n,
                    r,
                    i,
                    o = this.key(e),
                    s = this.cache[o];if (t === undefined) this.cache[o] = {};else {
                    x.isArray(t) ? r = t.concat(t.map(x.camelCase)) : (i = x.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(w) || [])), n = r.length;while (n--) {
                        delete s[r[n]];
                    }
                }
            }, hasData: function hasData(e) {
                return !x.isEmptyObject(this.cache[e[this.expando]] || {});
            }, discard: function discard(e) {
                e[this.expando] && delete this.cache[e[this.expando]];
            } }, L = new F(), q = new F(), x.extend({ acceptData: F.accepts, hasData: function hasData(e) {
                return L.hasData(e) || q.hasData(e);
            }, data: function data(e, t, n) {
                return L.access(e, t, n);
            }, removeData: function removeData(e, t) {
                L.remove(e, t);
            }, _data: function _data(e, t, n) {
                return q.access(e, t, n);
            }, _removeData: function _removeData(e, t) {
                q.remove(e, t);
            } }), x.fn.extend({ data: function data(e, t) {
                var n,
                    r,
                    i = this[0],
                    o = 0,
                    s = null;if (e === undefined) {
                    if (this.length && (s = L.get(i), 1 === i.nodeType && !q.get(i, "hasDataAttrs"))) {
                        for (n = i.attributes; n.length > o; o++) {
                            r = n[o].name, 0 === r.indexOf("data-") && (r = x.camelCase(r.slice(5)), P(i, r, s[r]));
                        }q.set(i, "hasDataAttrs", !0);
                    }return s;
                }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
                    L.set(this, e);
                }) : x.access(this, function (t) {
                    var n,
                        r = x.camelCase(e);if (i && t === undefined) {
                        if (n = L.get(i, e), n !== undefined) return n;if (n = L.get(i, r), n !== undefined) return n;if (n = P(i, r, undefined), n !== undefined) return n;
                    } else this.each(function () {
                        var n = L.get(this, r);L.set(this, r, t), -1 !== e.indexOf("-") && n !== undefined && L.set(this, e, t);
                    });
                }, null, t, arguments.length > 1, null, !0);
            }, removeData: function removeData(e) {
                return this.each(function () {
                    L.remove(this, e);
                });
            } });function P(e, t, n) {
            var r;if (n === undefined && 1 === e.nodeType) if (r = "data-" + t.replace(O, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : H.test(n) ? JSON.parse(n) : n;
                } catch (i) {}L.set(e, t, n);
            } else n = undefined;return n;
        }x.extend({ queue: function queue(e, t, n) {
                var r;return e ? (t = (t || "fx") + "queue", r = q.get(e, t), n && (!r || x.isArray(n) ? r = q.access(e, t, x.makeArray(n)) : r.push(n)), r || []) : undefined;
            }, dequeue: function dequeue(e, t) {
                t = t || "fx";var n = x.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = x._queueHooks(e, t),
                    s = function s() {
                    x.dequeue(e, t);
                };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire();
            }, _queueHooks: function _queueHooks(e, t) {
                var n = t + "queueHooks";return q.get(e, n) || q.access(e, n, { empty: x.Callbacks("once memory").add(function () {
                        q.remove(e, [t + "queue", n]);
                    }) });
            } }), x.fn.extend({ queue: function queue(e, t) {
                var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), n > arguments.length ? x.queue(this[0], e) : t === undefined ? this : this.each(function () {
                    var n = x.queue(this, e, t);x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e);
                });
            }, dequeue: function dequeue(e) {
                return this.each(function () {
                    x.dequeue(this, e);
                });
            }, delay: function delay(e, t) {
                return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var r = setTimeout(t, e);n.stop = function () {
                        clearTimeout(r);
                    };
                });
            }, clearQueue: function clearQueue(e) {
                return this.queue(e || "fx", []);
            }, promise: function promise(e, t) {
                var n,
                    r = 1,
                    i = x.Deferred(),
                    o = this,
                    s = this.length,
                    a = function a() {
                    --r || i.resolveWith(o, [o]);
                };"string" != typeof e && (t = e, e = undefined), e = e || "fx";while (s--) {
                    n = q.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
                }return a(), i.promise(t);
            } });var R,
            M,
            W = /[\t\r\n\f]/g,
            $ = /\r/g,
            B = /^(?:input|select|textarea|button)$/i;x.fn.extend({ attr: function attr(e, t) {
                return x.access(this, x.attr, e, t, arguments.length > 1);
            }, removeAttr: function removeAttr(e) {
                return this.each(function () {
                    x.removeAttr(this, e);
                });
            }, prop: function prop(e, t) {
                return x.access(this, x.prop, e, t, arguments.length > 1);
            }, removeProp: function removeProp(e) {
                return this.each(function () {
                    delete this[x.propFix[e] || e];
                });
            }, addClass: function addClass(e) {
                var t,
                    n,
                    r,
                    i,
                    o,
                    s = 0,
                    a = this.length,
                    u = "string" == typeof e && e;if (x.isFunction(e)) return this.each(function (t) {
                    x(this).addClass(e.call(this, t, this.className));
                });if (u) for (t = (e || "").match(w) || []; a > s; s++) {
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : " ")) {
                        o = 0;while (i = t[o++]) {
                            0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        }n.className = x.trim(r);
                    }
                }return this;
            }, removeClass: function removeClass(e) {
                var t,
                    n,
                    r,
                    i,
                    o,
                    s = 0,
                    a = this.length,
                    u = 0 === arguments.length || "string" == typeof e && e;if (x.isFunction(e)) return this.each(function (t) {
                    x(this).removeClass(e.call(this, t, this.className));
                });if (u) for (t = (e || "").match(w) || []; a > s; s++) {
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : "")) {
                        o = 0;while (i = t[o++]) {
                            while (r.indexOf(" " + i + " ") >= 0) {
                                r = r.replace(" " + i + " ", " ");
                            }
                        }n.className = e ? x.trim(r) : "";
                    }
                }return this;
            }, toggleClass: function toggleClass(e, t) {
                var n = typeof e === "undefined" ? "undefined" : _typeof(e);return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
                    x(this).toggleClass(e.call(this, n, this.className, t), t);
                }) : this.each(function () {
                    if ("string" === n) {
                        var t,
                            i = 0,
                            o = x(this),
                            s = e.match(w) || [];while (t = s[i++]) {
                            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        }
                    } else (n === r || "boolean" === n) && (this.className && q.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : q.get(this, "__className__") || "");
                });
            }, hasClass: function hasClass(e) {
                var t = " " + e + " ",
                    n = 0,
                    r = this.length;for (; r > n; n++) {
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(W, " ").indexOf(t) >= 0) return !0;
                }return !1;
            }, val: function val(e) {
                var t,
                    n,
                    r,
                    i = this[0];{
                    if (arguments.length) return r = x.isFunction(e), this.each(function (n) {
                        var i;1 === this.nodeType && (i = r ? e.call(this, n, x(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : x.isArray(i) && (i = x.map(i, function (e) {
                            return null == e ? "" : e + "";
                        })), t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, i, "value") !== undefined || (this.value = i));
                    });if (i) return t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, "string" == typeof n ? n.replace($, "") : null == n ? "" : n);
                }
            } }), x.extend({ valHooks: { option: { get: function get(e) {
                        var t = e.attributes.value;return !t || t.specified ? e.value : e.text;
                    } }, select: { get: function get(e) {
                        var t,
                            n,
                            r = e.options,
                            i = e.selectedIndex,
                            o = "select-one" === e.type || 0 > i,
                            s = o ? null : [],
                            a = o ? i + 1 : r.length,
                            u = 0 > i ? a : o ? i : 0;for (; a > u; u++) {
                            if (n = r[u], !(!n.selected && u !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                                if (t = x(n).val(), o) return t;s.push(t);
                            }
                        }return s;
                    }, set: function set(e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = x.makeArray(t),
                            s = i.length;while (s--) {
                            r = i[s], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                        }return n || (e.selectedIndex = -1), o;
                    } } }, attr: function attr(e, t, n) {
                var i,
                    o,
                    s = e.nodeType;if (e && 3 !== s && 8 !== s && 2 !== s) return _typeof(e.getAttribute) === r ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (t = t.toLowerCase(), i = x.attrHooks[t] || (x.expr.match.bool.test(t) ? M : R)), n === undefined ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = x.find.attr(e, t), null == o ? undefined : o) : null !== n ? i && "set" in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ""), n) : (x.removeAttr(e, t), undefined));
            }, removeAttr: function removeAttr(e, t) {
                var n,
                    r,
                    i = 0,
                    o = t && t.match(w);if (o && 1 === e.nodeType) while (n = o[i++]) {
                    r = x.propFix[n] || n, x.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
                }
            }, attrHooks: { type: { set: function set(e, t) {
                        if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    } } }, propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(e, t, n) {
                var r,
                    i,
                    o,
                    s = e.nodeType;if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !x.isXMLDoc(e), o && (t = x.propFix[t] || t, i = x.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
            }, propHooks: { tabIndex: { get: function get(e) {
                        return e.hasAttribute("tabindex") || B.test(e.nodeName) || e.href ? e.tabIndex : -1;
                    } } } }), M = { set: function set(e, t, n) {
                return t === !1 ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
            } }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = x.expr.attrHandle[t] || x.find.attr;x.expr.attrHandle[t] = function (e, t, r) {
                var i = x.expr.attrHandle[t],
                    o = r ? undefined : (x.expr.attrHandle[t] = undefined) != n(e, t, r) ? t.toLowerCase() : null;return x.expr.attrHandle[t] = i, o;
            };
        }), x.support.optSelected || (x.propHooks.selected = { get: function get(e) {
                var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
            } }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            x.propFix[this.toLowerCase()] = this;
        }), x.each(["radio", "checkbox"], function () {
            x.valHooks[this] = { set: function set(e, t) {
                    return x.isArray(t) ? e.checked = x.inArray(x(e).val(), t) >= 0 : undefined;
                } }, x.support.checkOn || (x.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
            });
        });var I = /^key/,
            z = /^(?:mouse|contextmenu)|click/,
            _ = /^(?:focusinfocus|focusoutblur)$/,
            X = /^([^.]*)(?:\.(.+)|)$/;function U() {
            return !0;
        }function Y() {
            return !1;
        }function V() {
            try {
                return o.activeElement;
            } catch (e) {}
        }x.event = { global: {}, add: function add(e, t, n, i, o) {
                var s,
                    a,
                    u,
                    l,
                    c,
                    p,
                    f,
                    h,
                    d,
                    g,
                    m,
                    y = q.get(e);if (y) {
                    n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = x.guid++), (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function (e) {
                        return (typeof x === "undefined" ? "undefined" : _typeof(x)) === r || e && x.event.triggered === e.type ? undefined : x.event.dispatch.apply(a.elem, arguments);
                    }, a.elem = e), t = (t || "").match(w) || [""], c = t.length;while (c--) {
                        u = X.exec(t[c]) || [], d = m = u[1], g = (u[2] || "").split(".").sort(), d && (f = x.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = x.event.special[d] || {}, p = x.extend({ type: d, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && x.expr.match.needsContext.test(o), namespace: g.join(".") }, s), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), f.add && (f.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), x.event.global[d] = !0);
                    }e = null;
                }
            }, remove: function remove(e, t, n, r, i) {
                var o,
                    s,
                    a,
                    u,
                    l,
                    c,
                    p,
                    f,
                    h,
                    d,
                    g,
                    m = q.hasData(e) && q.get(e);if (m && (u = m.events)) {
                    t = (t || "").match(w) || [""], l = t.length;while (l--) {
                        if (a = X.exec(t[l]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), h) {
                            p = x.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, f = u[h] || [], a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length;while (o--) {
                                c = f[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, p.remove && p.remove.call(e, c));
                            }s && !f.length && (p.teardown && p.teardown.call(e, d, m.handle) !== !1 || x.removeEvent(e, h, m.handle), delete u[h]);
                        } else for (h in u) {
                            x.event.remove(e, h + t[l], n, r, !0);
                        }
                    }x.isEmptyObject(u) && (delete m.handle, q.remove(e, "events"));
                }
            }, trigger: function trigger(t, n, r, i) {
                var s,
                    a,
                    u,
                    l,
                    c,
                    p,
                    f,
                    h = [r || o],
                    d = y.call(t, "type") ? t.type : t,
                    g = y.call(t, "namespace") ? t.namespace.split(".") : [];if (a = u = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !_.test(d + x.event.triggered) && (d.indexOf(".") >= 0 && (g = d.split("."), d = g.shift(), g.sort()), c = 0 > d.indexOf(":") && "on" + d, t = t[x.expando] ? t : new x.Event(d, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : x.makeArray(n, [t]), f = x.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                    if (!i && !f.noBubble && !x.isWindow(r)) {
                        for (l = f.delegateType || d, _.test(l + d) || (a = a.parentNode); a; a = a.parentNode) {
                            h.push(a), u = a;
                        }u === (r.ownerDocument || o) && h.push(u.defaultView || u.parentWindow || e);
                    }s = 0;while ((a = h[s++]) && !t.isPropagationStopped()) {
                        t.type = s > 1 ? l : f.bindType || d, p = (q.get(a, "events") || {})[t.type] && q.get(a, "handle"), p && p.apply(a, n), p = c && a[c], p && x.acceptData(a) && p.apply && p.apply(a, n) === !1 && t.preventDefault();
                    }return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !x.acceptData(r) || c && x.isFunction(r[d]) && !x.isWindow(r) && (u = r[c], u && (r[c] = null), x.event.triggered = d, r[d](), x.event.triggered = undefined, u && (r[c] = u)), t.result;
                }
            }, dispatch: function dispatch(e) {
                e = x.event.fix(e);var t,
                    n,
                    r,
                    i,
                    o,
                    s = [],
                    a = d.call(arguments),
                    u = (q.get(this, "events") || {})[e.type] || [],
                    l = x.event.special[e.type] || {};if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                    s = x.event.handlers.call(this, e, u), t = 0;while ((i = s[t++]) && !e.isPropagationStopped()) {
                        e.currentTarget = i.elem, n = 0;while ((o = i.handlers[n++]) && !e.isImmediatePropagationStopped()) {
                            (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                        }
                    }return l.postDispatch && l.postDispatch.call(this, e), e.result;
                }
            }, handlers: function handlers(e, t) {
                var n,
                    r,
                    i,
                    o,
                    s = [],
                    a = t.delegateCount,
                    u = e.target;if (a && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this) {
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; a > n; n++) {
                            o = t[n], i = o.selector + " ", r[i] === undefined && (r[i] = o.needsContext ? x(i, this).index(u) >= 0 : x.find(i, this, null, [u]).length), r[i] && r.push(o);
                        }r.length && s.push({ elem: u, handlers: r });
                    }
                }return t.length > a && s.push({ elem: this, handlers: t.slice(a) }), s;
            }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
                } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(e, t) {
                    var n,
                        r,
                        i,
                        s = t.button;return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || o, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
                } }, fix: function fix(e) {
                if (e[x.expando]) return e;var t,
                    n,
                    r,
                    i = e.type,
                    s = e,
                    a = this.fixHooks[i];a || (this.fixHooks[i] = a = z.test(i) ? this.mouseHooks : I.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new x.Event(s), t = r.length;while (t--) {
                    n = r[t], e[n] = s[n];
                }return e.target || (e.target = o), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e;
            }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
                        return this !== V() && this.focus ? (this.focus(), !1) : undefined;
                    }, delegateType: "focusin" }, blur: { trigger: function trigger() {
                        return this === V() && this.blur ? (this.blur(), !1) : undefined;
                    }, delegateType: "focusout" }, click: { trigger: function trigger() {
                        return "checkbox" === this.type && this.click && x.nodeName(this, "input") ? (this.click(), !1) : undefined;
                    }, _default: function _default(e) {
                        return x.nodeName(e.target, "a");
                    } }, beforeunload: { postDispatch: function postDispatch(e) {
                        e.result !== undefined && (e.originalEvent.returnValue = e.result);
                    } } }, simulate: function simulate(e, t, n, r) {
                var i = x.extend(new x.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
            } }, x.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1);
        }, x.Event = function (e, t) {
            return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? U : Y) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, undefined) : new x.Event(e, t);
        }, x.Event.prototype = { isDefaultPrevented: Y, isPropagationStopped: Y, isImmediatePropagationStopped: Y, preventDefault: function preventDefault() {
                var e = this.originalEvent;this.isDefaultPrevented = U, e && e.preventDefault && e.preventDefault();
            }, stopPropagation: function stopPropagation() {
                var e = this.originalEvent;this.isPropagationStopped = U, e && e.stopPropagation && e.stopPropagation();
            }, stopImmediatePropagation: function stopImmediatePropagation() {
                this.isImmediatePropagationStopped = U, this.stopPropagation();
            } }, x.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
            x.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
                    var n,
                        r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
                } };
        }), x.support.focusinBubbles || x.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = 0,
                r = function r(e) {
                x.event.simulate(t, e.target, x.event.fix(e), !0);
            };x.event.special[t] = { setup: function setup() {
                    0 === n++ && o.addEventListener(e, r, !0);
                }, teardown: function teardown() {
                    0 === --n && o.removeEventListener(e, r, !0);
                } };
        }), x.fn.extend({ on: function on(e, t, n, r, i) {
                var o, s;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
                    "string" != typeof t && (n = n || t, t = undefined);for (s in e) {
                        this.on(s, t, n, e[s], i);
                    }return this;
                }if (null == n && null == r ? (r = t, n = t = undefined) : null == r && ("string" == typeof t ? (r = n, n = undefined) : (r = n, n = t, t = undefined)), r === !1) r = Y;else if (!r) return this;return 1 === i && (o = r, r = function r(e) {
                    return x().off(e), o.apply(this, arguments);
                }, r.guid = o.guid || (o.guid = x.guid++)), this.each(function () {
                    x.event.add(this, e, r, n, t);
                });
            }, one: function one(e, t, n, r) {
                return this.on(e, t, n, r, 1);
            }, off: function off(e, t, n) {
                var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
                    for (i in e) {
                        this.off(i, t, e[i]);
                    }return this;
                }return (t === !1 || "function" == typeof t) && (n = t, t = undefined), n === !1 && (n = Y), this.each(function () {
                    x.event.remove(this, e, n, t);
                });
            }, trigger: function trigger(e, t) {
                return this.each(function () {
                    x.event.trigger(e, t, this);
                });
            }, triggerHandler: function triggerHandler(e, t) {
                var n = this[0];return n ? x.event.trigger(e, t, n, !0) : undefined;
            } });var G = /^.[^:#\[\.,]*$/,
            J = /^(?:parents|prev(?:Until|All))/,
            Q = x.expr.match.needsContext,
            K = { children: !0, contents: !0, next: !0, prev: !0 };x.fn.extend({ find: function find(e) {
                var t,
                    n = [],
                    r = this,
                    i = r.length;if ("string" != typeof e) return this.pushStack(x(e).filter(function () {
                    for (t = 0; i > t; t++) {
                        if (x.contains(r[t], this)) return !0;
                    }
                }));for (t = 0; i > t; t++) {
                    x.find(e, r[t], n);
                }return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n;
            }, has: function has(e) {
                var t = x(e, this),
                    n = t.length;return this.filter(function () {
                    var e = 0;for (; n > e; e++) {
                        if (x.contains(this, t[e])) return !0;
                    }
                });
            }, not: function not(e) {
                return this.pushStack(et(this, e || [], !0));
            }, filter: function filter(e) {
                return this.pushStack(et(this, e || [], !1));
            }, is: function is(e) {
                return !!et(this, "string" == typeof e && Q.test(e) ? x(e) : e || [], !1).length;
            }, closest: function closest(e, t) {
                var n,
                    r = 0,
                    i = this.length,
                    o = [],
                    s = Q.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;for (; i > r; r++) {
                    for (n = this[r]; n && n !== t; n = n.parentNode) {
                        if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                            n = o.push(n);break;
                        }
                    }
                }return this.pushStack(o.length > 1 ? x.unique(o) : o);
            }, index: function index(e) {
                return e ? "string" == typeof e ? g.call(x(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }, add: function add(e, t) {
                var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
                    r = x.merge(this.get(), n);return this.pushStack(x.unique(r));
            }, addBack: function addBack(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            } });function Z(e, t) {
            while ((e = e[t]) && 1 !== e.nodeType) {}return e;
        }x.each({ parent: function parent(e) {
                var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
            }, parents: function parents(e) {
                return x.dir(e, "parentNode");
            }, parentsUntil: function parentsUntil(e, t, n) {
                return x.dir(e, "parentNode", n);
            }, next: function next(e) {
                return Z(e, "nextSibling");
            }, prev: function prev(e) {
                return Z(e, "previousSibling");
            }, nextAll: function nextAll(e) {
                return x.dir(e, "nextSibling");
            }, prevAll: function prevAll(e) {
                return x.dir(e, "previousSibling");
            }, nextUntil: function nextUntil(e, t, n) {
                return x.dir(e, "nextSibling", n);
            }, prevUntil: function prevUntil(e, t, n) {
                return x.dir(e, "previousSibling", n);
            }, siblings: function siblings(e) {
                return x.sibling((e.parentNode || {}).firstChild, e);
            }, children: function children(e) {
                return x.sibling(e.firstChild);
            }, contents: function contents(e) {
                return e.contentDocument || x.merge([], e.childNodes);
            } }, function (e, t) {
            x.fn[e] = function (n, r) {
                var i = x.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (K[e] || x.unique(i), J.test(e) && i.reverse()), this.pushStack(i);
            };
        }), x.extend({ filter: function filter(e, t, n) {
                var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
                    return 1 === e.nodeType;
                }));
            }, dir: function dir(e, t, n) {
                var r = [],
                    i = n !== undefined;while ((e = e[t]) && 9 !== e.nodeType) {
                    if (1 === e.nodeType) {
                        if (i && x(e).is(n)) break;r.push(e);
                    }
                }return r;
            }, sibling: function sibling(e, t) {
                var n = [];for (; e; e = e.nextSibling) {
                    1 === e.nodeType && e !== t && n.push(e);
                }return n;
            } });function et(e, t, n) {
            if (x.isFunction(t)) return x.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
            });if (t.nodeType) return x.grep(e, function (e) {
                return e === t !== n;
            });if ("string" == typeof t) {
                if (G.test(t)) return x.filter(t, e, n);t = x.filter(t, e);
            }return x.grep(e, function (e) {
                return g.call(t, e) >= 0 !== n;
            });
        }var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            nt = /<([\w:]+)/,
            rt = /<|&#?\w+;/,
            it = /<(?:script|style|link)/i,
            ot = /^(?:checkbox|radio)$/i,
            st = /checked\s*(?:[^=]|=\s*.checked.)/i,
            at = /^$|\/(?:java|ecma)script/i,
            ut = /^true\/(.*)/,
            lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ct = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ct.optgroup = ct.option, ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead, ct.th = ct.td, x.fn.extend({ text: function text(e) {
                return x.access(this, function (e) {
                    return e === undefined ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e));
                }, null, e, arguments.length);
            }, append: function append() {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = pt(this, e);t.appendChild(e);
                    }
                });
            }, prepend: function prepend() {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = pt(this, e);t.insertBefore(e, t.firstChild);
                    }
                });
            }, before: function before() {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            }, after: function after() {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            }, remove: function remove(e, t) {
                var n,
                    r = e ? x.filter(e, this) : this,
                    i = 0;for (; null != (n = r[i]); i++) {
                    t || 1 !== n.nodeType || x.cleanData(mt(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && dt(mt(n, "script")), n.parentNode.removeChild(n));
                }return this;
            }, empty: function empty() {
                var e,
                    t = 0;for (; null != (e = this[t]); t++) {
                    1 === e.nodeType && (x.cleanData(mt(e, !1)), e.textContent = "");
                }return this;
            }, clone: function clone(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                    return x.clone(this, e, t);
                });
            }, html: function html(e) {
                return x.access(this, function (e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;if (e === undefined && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !it.test(e) && !ct[(nt.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(tt, "<$1></$2>");try {
                            for (; r > n; n++) {
                                t = this[n] || {}, 1 === t.nodeType && (x.cleanData(mt(t, !1)), t.innerHTML = e);
                            }t = 0;
                        } catch (i) {}
                    }t && this.empty().append(e);
                }, null, e, arguments.length);
            }, replaceWith: function replaceWith() {
                var e = x.map(this, function (e) {
                    return [e.nextSibling, e.parentNode];
                }),
                    t = 0;return this.domManip(arguments, function (n) {
                    var r = e[t++],
                        i = e[t++];i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r));
                }, !0), t ? this : this.remove();
            }, detach: function detach(e) {
                return this.remove(e, !0);
            }, domManip: function domManip(e, t, n) {
                e = f.apply([], e);var r,
                    i,
                    o,
                    s,
                    a,
                    u,
                    l = 0,
                    c = this.length,
                    p = this,
                    h = c - 1,
                    d = e[0],
                    g = x.isFunction(d);if (g || !(1 >= c || "string" != typeof d || x.support.checkClone) && st.test(d)) return this.each(function (r) {
                    var i = p.eq(r);g && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n);
                });if (c && (r = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
                    for (o = x.map(mt(r, "script"), ft), s = o.length; c > l; l++) {
                        a = r, l !== h && (a = x.clone(a, !0, !0), s && x.merge(o, mt(a, "script"))), t.call(this[l], a, l);
                    }if (s) for (u = o[o.length - 1].ownerDocument, x.map(o, ht), l = 0; s > l; l++) {
                        a = o[l], at.test(a.type || "") && !q.access(a, "globalEval") && x.contains(u, a) && (a.src ? x._evalUrl(a.src) : x.globalEval(a.textContent.replace(lt, "")));
                    }
                }return this;
            } }), x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            x.fn[e] = function (e) {
                var n,
                    r = [],
                    i = x(e),
                    o = i.length - 1,
                    s = 0;for (; o >= s; s++) {
                    n = s === o ? this : this.clone(!0), x(i[s])[t](n), h.apply(r, n.get());
                }return this.pushStack(r);
            };
        }), x.extend({ clone: function clone(e, t, n) {
                var r,
                    i,
                    o,
                    s,
                    a = e.cloneNode(!0),
                    u = x.contains(e.ownerDocument, e);if (!(x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (s = mt(a), o = mt(e), r = 0, i = o.length; i > r; r++) {
                    yt(o[r], s[r]);
                }if (t) if (n) for (o = o || mt(e), s = s || mt(a), r = 0, i = o.length; i > r; r++) {
                    gt(o[r], s[r]);
                } else gt(e, a);return s = mt(a, "script"), s.length > 0 && dt(s, !u && mt(e, "script")), a;
            }, buildFragment: function buildFragment(e, t, n, r) {
                var i,
                    o,
                    s,
                    a,
                    u,
                    l,
                    c = 0,
                    p = e.length,
                    f = t.createDocumentFragment(),
                    h = [];for (; p > c; c++) {
                    if (i = e[c], i || 0 === i) if ("object" === x.type(i)) x.merge(h, i.nodeType ? [i] : i);else if (rt.test(i)) {
                        o = o || f.appendChild(t.createElement("div")), s = (nt.exec(i) || ["", ""])[1].toLowerCase(), a = ct[s] || ct._default, o.innerHTML = a[1] + i.replace(tt, "<$1></$2>") + a[2], l = a[0];while (l--) {
                            o = o.lastChild;
                        }x.merge(h, o.childNodes), o = f.firstChild, o.textContent = "";
                    } else h.push(t.createTextNode(i));
                }f.textContent = "", c = 0;while (i = h[c++]) {
                    if ((!r || -1 === x.inArray(i, r)) && (u = x.contains(i.ownerDocument, i), o = mt(f.appendChild(i), "script"), u && dt(o), n)) {
                        l = 0;while (i = o[l++]) {
                            at.test(i.type || "") && n.push(i);
                        }
                    }
                }return f;
            }, cleanData: function cleanData(e) {
                var t,
                    n,
                    r,
                    i,
                    o,
                    s,
                    a = x.event.special,
                    u = 0;for (; (n = e[u]) !== undefined; u++) {
                    if (F.accepts(n) && (o = n[q.expando], o && (t = q.cache[o]))) {
                        if (r = Object.keys(t.events || {}), r.length) for (s = 0; (i = r[s]) !== undefined; s++) {
                            a[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                        }q.cache[o] && delete q.cache[o];
                    }delete L.cache[n[L.expando]];
                }
            }, _evalUrl: function _evalUrl(e) {
                return x.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
            } });function pt(e, t) {
            return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
        }function ft(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
        }function ht(e) {
            var t = ut.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
        }function dt(e, t) {
            var n = e.length,
                r = 0;for (; n > r; r++) {
                q.set(e[r], "globalEval", !t || q.get(t[r], "globalEval"));
            }
        }function gt(e, t) {
            var n, r, i, o, s, a, u, l;if (1 === t.nodeType) {
                if (q.hasData(e) && (o = q.access(e), s = q.set(t, o), l = o.events)) {
                    delete s.handle, s.events = {};for (i in l) {
                        for (n = 0, r = l[i].length; r > n; n++) {
                            x.event.add(t, i, l[i][n]);
                        }
                    }
                }L.hasData(e) && (a = L.access(e), u = x.extend({}, a), L.set(t, u));
            }
        }function mt(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];return t === undefined || t && x.nodeName(e, t) ? x.merge([e], n) : n;
        }function yt(e, t) {
            var n = t.nodeName.toLowerCase();"input" === n && ot.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
        }x.fn.extend({ wrapAll: function wrapAll(e) {
                var t;return x.isFunction(e) ? this.each(function (t) {
                    x(this).wrapAll(e.call(this, t));
                }) : (this[0] && (t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;while (e.firstElementChild) {
                        e = e.firstElementChild;
                    }return e;
                }).append(this)), this);
            }, wrapInner: function wrapInner(e) {
                return x.isFunction(e) ? this.each(function (t) {
                    x(this).wrapInner(e.call(this, t));
                }) : this.each(function () {
                    var t = x(this),
                        n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
                });
            }, wrap: function wrap(e) {
                var t = x.isFunction(e);return this.each(function (n) {
                    x(this).wrapAll(t ? e.call(this, n) : e);
                });
            }, unwrap: function unwrap() {
                return this.parent().each(function () {
                    x.nodeName(this, "body") || x(this).replaceWith(this.childNodes);
                }).end();
            } });var vt,
            xt,
            bt = /^(none|table(?!-c[ea]).+)/,
            wt = /^margin/,
            Tt = RegExp("^(" + b + ")(.*)$", "i"),
            Ct = RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"),
            kt = RegExp("^([+-])=(" + b + ")", "i"),
            Nt = { BODY: "block" },
            Et = { position: "absolute", visibility: "hidden", display: "block" },
            St = { letterSpacing: 0, fontWeight: 400 },
            jt = ["Top", "Right", "Bottom", "Left"],
            Dt = ["Webkit", "O", "Moz", "ms"];function At(e, t) {
            if (t in e) return t;var n = t.charAt(0).toUpperCase() + t.slice(1),
                r = t,
                i = Dt.length;while (i--) {
                if (t = Dt[i] + n, t in e) return t;
            }return r;
        }function Lt(e, t) {
            return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e);
        }function qt(t) {
            return e.getComputedStyle(t, null);
        }function Ht(e, t) {
            var n,
                r,
                i,
                o = [],
                s = 0,
                a = e.length;for (; a > s; s++) {
                r = e[s], r.style && (o[s] = q.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Lt(r) && (o[s] = q.access(r, "olddisplay", Rt(r.nodeName)))) : o[s] || (i = Lt(r), (n && "none" !== n || !i) && q.set(r, "olddisplay", i ? n : x.css(r, "display"))));
            }for (s = 0; a > s; s++) {
                r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
            }return e;
        }x.fn.extend({ css: function css(e, t) {
                return x.access(this, function (e, t, n) {
                    var r,
                        i,
                        o = {},
                        s = 0;if (x.isArray(t)) {
                        for (r = qt(e), i = t.length; i > s; s++) {
                            o[t[s]] = x.css(e, t[s], !1, r);
                        }return o;
                    }return n !== undefined ? x.style(e, t, n) : x.css(e, t);
                }, e, t, arguments.length > 1);
            }, show: function show() {
                return Ht(this, !0);
            }, hide: function hide() {
                return Ht(this);
            }, toggle: function toggle(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    Lt(this) ? x(this).show() : x(this).hide();
                });
            } }), x.extend({ cssHooks: { opacity: { get: function get(e, t) {
                        if (t) {
                            var n = vt(e, "opacity");return "" === n ? "1" : n;
                        }
                    } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i,
                        o,
                        s,
                        a = x.camelCase(t),
                        u = e.style;return t = x.cssProps[a] || (x.cssProps[a] = At(u, a)), s = x.cssHooks[t] || x.cssHooks[a], n === undefined ? s && "get" in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t] : (o = typeof n === "undefined" ? "undefined" : _typeof(n), "string" === o && (i = kt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(x.css(e, t)), o = "number"), null == n || "number" === o && isNaN(n) || ("number" !== o || x.cssNumber[a] || (n += "px"), x.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && (n = s.set(e, n, r)) === undefined || (u[t] = n)), undefined);
                }
            }, css: function css(e, t, n, r) {
                var i,
                    o,
                    s,
                    a = x.camelCase(t);return t = x.cssProps[a] || (x.cssProps[a] = At(e.style, a)), s = x.cssHooks[t] || x.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), i === undefined && (i = vt(e, t, r)), "normal" === i && t in St && (i = St[t]), "" === n || n ? (o = parseFloat(i), n === !0 || x.isNumeric(o) ? o || 0 : i) : i;
            } }), vt = function vt(e, t, n) {
            var r,
                i,
                o,
                s = n || qt(e),
                a = s ? s.getPropertyValue(t) || s[t] : undefined,
                u = e.style;return s && ("" !== a || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), Ct.test(a) && wt.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = s.width, u.width = r, u.minWidth = i, u.maxWidth = o)), a;
        };function Ot(e, t, n) {
            var r = Tt.exec(t);return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
        }function Ft(e, t, n, r, i) {
            var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
                s = 0;for (; 4 > o; o += 2) {
                "margin" === n && (s += x.css(e, n + jt[o], !0, i)), r ? ("content" === n && (s -= x.css(e, "padding" + jt[o], !0, i)), "margin" !== n && (s -= x.css(e, "border" + jt[o] + "Width", !0, i))) : (s += x.css(e, "padding" + jt[o], !0, i), "padding" !== n && (s += x.css(e, "border" + jt[o] + "Width", !0, i)));
            }return s;
        }function Pt(e, t, n) {
            var r = !0,
                i = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = qt(e),
                s = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);if (0 >= i || null == i) {
                if (i = vt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ct.test(i)) return i;r = s && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
            }return i + Ft(e, t, n || (s ? "border" : "content"), r, o) + "px";
        }function Rt(e) {
            var t = o,
                n = Nt[e];return n || (n = Mt(e, t), "none" !== n && n || (xt = (xt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (xt[0].contentWindow || xt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = Mt(e, t), xt.detach()), Nt[e] = n), n;
        }function Mt(e, t) {
            var n = x(t.createElement(e)).appendTo(t.body),
                r = x.css(n[0], "display");return n.remove(), r;
        }x.each(["height", "width"], function (e, t) {
            x.cssHooks[t] = { get: function get(e, n, r) {
                    return n ? 0 === e.offsetWidth && bt.test(x.css(e, "display")) ? x.swap(e, Et, function () {
                        return Pt(e, t, r);
                    }) : Pt(e, t, r) : undefined;
                }, set: function set(e, n, r) {
                    var i = r && qt(e);return Ot(e, n, r ? Ft(e, t, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0);
                } };
        }), x(function () {
            x.support.reliableMarginRight || (x.cssHooks.marginRight = { get: function get(e, t) {
                    return t ? x.swap(e, { display: "inline-block" }, vt, [e, "marginRight"]) : undefined;
                } }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, t) {
                x.cssHooks[t] = { get: function get(e, n) {
                        return n ? (n = vt(e, t), Ct.test(n) ? x(e).position()[t] + "px" : n) : undefined;
                    } };
            });
        }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
            return 0 >= e.offsetWidth && 0 >= e.offsetHeight;
        }, x.expr.filters.visible = function (e) {
            return !x.expr.filters.hidden(e);
        }), x.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            x.cssHooks[e + t] = { expand: function expand(n) {
                    var r = 0,
                        i = {},
                        o = "string" == typeof n ? n.split(" ") : [n];for (; 4 > r; r++) {
                        i[e + jt[r] + t] = o[r] || o[r - 2] || o[0];
                    }return i;
                } }, wt.test(e) || (x.cssHooks[e + t].set = Ot);
        });var Wt = /%20/g,
            $t = /\[\]$/,
            Bt = /\r?\n/g,
            It = /^(?:submit|button|image|reset|file)$/i,
            zt = /^(?:input|select|textarea|keygen)/i;x.fn.extend({ serialize: function serialize() {
                return x.param(this.serializeArray());
            }, serializeArray: function serializeArray() {
                return this.map(function () {
                    var e = x.prop(this, "elements");return e ? x.makeArray(e) : this;
                }).filter(function () {
                    var e = this.type;return this.name && !x(this).is(":disabled") && zt.test(this.nodeName) && !It.test(e) && (this.checked || !ot.test(e));
                }).map(function (e, t) {
                    var n = x(this).val();return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
                        return { name: t.name, value: e.replace(Bt, "\r\n") };
                    }) : { name: t.name, value: n.replace(Bt, "\r\n") };
                }).get();
            } }), x.param = function (e, t) {
            var n,
                r = [],
                i = function i(e, t) {
                t = x.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
            };if (t === undefined && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
                i(this.name, this.value);
            });else for (n in e) {
                _t(n, e[n], t, i);
            }return r.join("&").replace(Wt, "+");
        };function _t(e, t, n, r) {
            var i;if (x.isArray(t)) x.each(t, function (t, i) {
                n || $t.test(e) ? r(e, i) : _t(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) ? t : "") + "]", i, n, r);
            });else if (n || "object" !== x.type(t)) r(e, t);else for (i in t) {
                _t(e + "[" + i + "]", t[i], n, r);
            }
        }x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            x.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
        }), x.fn.extend({ hover: function hover(e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            }, bind: function bind(e, t, n) {
                return this.on(e, null, t, n);
            }, unbind: function unbind(e, t) {
                return this.off(e, null, t);
            }, delegate: function delegate(e, t, n, r) {
                return this.on(t, e, n, r);
            }, undelegate: function undelegate(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            } });var Xt,
            Ut,
            Yt = x.now(),
            Vt = /\?/,
            Gt = /#.*$/,
            Jt = /([?&])_=[^&]*/,
            Qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Zt = /^(?:GET|HEAD)$/,
            en = /^\/\//,
            tn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            nn = x.fn.load,
            rn = {},
            on = {},
            sn = "*/".concat("*");try {
            Ut = i.href;
        } catch (an) {
            Ut = o.createElement("a"), Ut.href = "", Ut = Ut.href;
        }Xt = tn.exec(Ut.toLowerCase()) || [];function un(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");var r,
                    i = 0,
                    o = t.toLowerCase().match(w) || [];if (x.isFunction(n)) while (r = o[i++]) {
                    "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                }
            };
        }function ln(e, t, n, r) {
            var i = {},
                o = e === on;function s(a) {
                var u;return i[a] = !0, x.each(e[a] || [], function (e, a) {
                    var l = a(t, n, r);return "string" != typeof l || o || i[l] ? o ? !(u = l) : undefined : (t.dataTypes.unshift(l), s(l), !1);
                }), u;
            }return s(t.dataTypes[0]) || !i["*"] && s("*");
        }function cn(e, t) {
            var n,
                r,
                i = x.ajaxSettings.flatOptions || {};for (n in t) {
                t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            }return r && x.extend(!0, e, r), e;
        }x.fn.load = function (e, t, n) {
            if ("string" != typeof e && nn) return nn.apply(this, arguments);var r,
                i,
                o,
                s = this,
                a = e.indexOf(" ");return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), x.isFunction(t) ? (n = t, t = undefined) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = "POST"), s.length > 0 && x.ajax({ url: e, type: i, dataType: "html", data: t }).done(function (e) {
                o = arguments, s.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e);
            }).complete(n && function (e, t) {
                s.each(n, o || [e.responseText, t, e]);
            }), this;
        }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            x.fn[t] = function (e) {
                return this.on(t, e);
            };
        }), x.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ut, type: "GET", isLocal: Kt.test(Xt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": sn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
                return t ? cn(cn(e, x.ajaxSettings), t) : cn(x.ajaxSettings, e);
            }, ajaxPrefilter: un(rn), ajaxTransport: un(on), ajax: function ajax(e, t) {
                "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (t = e, e = undefined), t = t || {};var n,
                    r,
                    i,
                    o,
                    s,
                    a,
                    u,
                    l,
                    c = x.ajaxSetup({}, t),
                    p = c.context || c,
                    f = c.context && (p.nodeType || p.jquery) ? x(p) : x.event,
                    h = x.Deferred(),
                    d = x.Callbacks("once memory"),
                    g = c.statusCode || {},
                    m = {},
                    y = {},
                    v = 0,
                    b = "canceled",
                    T = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
                        var t;if (2 === v) {
                            if (!o) {
                                o = {};while (t = Qt.exec(i)) {
                                    o[t[1].toLowerCase()] = t[2];
                                }
                            }t = o[e.toLowerCase()];
                        }return null == t ? null : t;
                    }, getAllResponseHeaders: function getAllResponseHeaders() {
                        return 2 === v ? i : null;
                    }, setRequestHeader: function setRequestHeader(e, t) {
                        var n = e.toLowerCase();return v || (e = y[n] = y[n] || e, m[e] = t), this;
                    }, overrideMimeType: function overrideMimeType(e) {
                        return v || (c.mimeType = e), this;
                    }, statusCode: function statusCode(e) {
                        var t;if (e) if (2 > v) for (t in e) {
                            g[t] = [g[t], e[t]];
                        } else T.always(e[T.status]);return this;
                    }, abort: function abort(e) {
                        var t = e || b;return n && n.abort(t), k(0, t), this;
                    } };if (h.promise(T).complete = d.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Ut) + "").replace(Gt, "").replace(en, Xt[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = x.trim(c.dataType || "*").toLowerCase().match(w) || [""], null == c.crossDomain && (a = tn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === Xt[1] && a[2] === Xt[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Xt[3] || ("http:" === Xt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = x.param(c.data, c.traditional)), ln(rn, c, t, T), 2 === v) return T;u = c.global, u && 0 === x.active++ && x.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Zt.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Vt.test(r) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Jt.test(r) ? r.replace(Jt, "$1_=" + Yt++) : r + (Vt.test(r) ? "&" : "?") + "_=" + Yt++)), c.ifModified && (x.lastModified[r] && T.setRequestHeader("If-Modified-Since", x.lastModified[r]), x.etag[r] && T.setRequestHeader("If-None-Match", x.etag[r])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", c.contentType), T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + sn + "; q=0.01" : "") : c.accepts["*"]);for (l in c.headers) {
                    T.setRequestHeader(l, c.headers[l]);
                }if (c.beforeSend && (c.beforeSend.call(p, T, c) === !1 || 2 === v)) return T.abort();b = "abort";for (l in { success: 1, error: 1, complete: 1 }) {
                    T[l](c[l]);
                }if (n = ln(on, c, t, T)) {
                    T.readyState = 1, u && f.trigger("ajaxSend", [T, c]), c.async && c.timeout > 0 && (s = setTimeout(function () {
                        T.abort("timeout");
                    }, c.timeout));try {
                        v = 1, n.send(m, k);
                    } catch (C) {
                        if (!(2 > v)) throw C;k(-1, C);
                    }
                } else k(-1, "No Transport");function k(e, t, o, a) {
                    var l,
                        m,
                        y,
                        b,
                        w,
                        C = t;2 !== v && (v = 2, s && clearTimeout(s), n = undefined, i = a || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (b = pn(c, T, o)), b = fn(c, b, T, l), l ? (c.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (x.lastModified[r] = w), w = T.getResponseHeader("etag"), w && (x.etag[r] = w)), 204 === e || "HEAD" === c.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, m = b.data, y = b.error, l = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || C) + "", l ? h.resolveWith(p, [m, C, T]) : h.rejectWith(p, [T, C, y]), T.statusCode(g), g = undefined, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [T, c, l ? m : y]), d.fireWith(p, [T, C]), u && (f.trigger("ajaxComplete", [T, c]), --x.active || x.event.trigger("ajaxStop")));
                }return T;
            }, getJSON: function getJSON(e, t, n) {
                return x.get(e, t, n, "json");
            }, getScript: function getScript(e, t) {
                return x.get(e, undefined, t, "script");
            } }), x.each(["get", "post"], function (e, t) {
            x[t] = function (e, n, r, i) {
                return x.isFunction(n) && (i = i || r, r = n, n = undefined), x.ajax({ url: e, type: t, dataType: i, data: n, success: r });
            };
        });function pn(e, t, n) {
            var r,
                i,
                o,
                s,
                a = e.contents,
                u = e.dataTypes;while ("*" === u[0]) {
                u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            }if (r) for (i in a) {
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);break;
                }
            }if (u[0] in n) o = u[0];else {
                for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                        o = i;break;
                    }s || (s = i);
                }o = o || s;
            }return o ? (o !== u[0] && u.unshift(o), n[o]) : undefined;
        }function fn(e, t, n, r) {
            var i,
                o,
                s,
                a,
                u,
                l = {},
                c = e.dataTypes.slice();if (c[1]) for (s in e.converters) {
                l[s.toLowerCase()] = e.converters[s];
            }o = c.shift();while (o) {
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
                    if (s = l[u + " " + o] || l["* " + o], !s) for (i in l) {
                        if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                            s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));break;
                        }
                    }if (s !== !0) if (s && e["throws"]) t = s(t);else try {
                        t = s(t);
                    } catch (p) {
                        return { state: "parsererror", error: s ? p : "No conversion from " + u + " to " + o };
                    }
                }
            }return { state: "success", data: t };
        }x.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(e) {
                    return x.globalEval(e), e;
                } } }), x.ajaxPrefilter("script", function (e) {
            e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }), x.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, _n;return { send: function send(r, i) {
                        t = x("<script>").prop({ async: !0, charset: e.scriptCharset, src: e.url }).on("load error", _n = function n(e) {
                            t.remove(), _n = null, e && i("error" === e.type ? 404 : 200, e.type);
                        }), o.head.appendChild(t[0]);
                    }, abort: function abort() {
                        _n && _n();
                    } };
            }
        });var hn = [],
            dn = /(=)\?(?=&|$)|\?\?/;x.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
                var e = hn.pop() || x.expando + "_" + Yt++;return this[e] = !0, e;
            } }), x.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i,
                o,
                s,
                a = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = x.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(dn, "$1" + i) : t.jsonp !== !1 && (t.url += (Vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                return s || x.error(i + " was not called"), s[0];
            }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
                s = arguments;
            }, r.always(function () {
                e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, hn.push(i)), s && x.isFunction(o) && o(s[0]), s = o = undefined;
            }), "script") : undefined;
        }), x.ajaxSettings.xhr = function () {
            try {
                return new XMLHttpRequest();
            } catch (e) {}
        };var gn = x.ajaxSettings.xhr(),
            mn = { 0: 200, 1223: 204 },
            yn = 0,
            vn = {};e.ActiveXObject && x(e).on("unload", function () {
            for (var e in vn) {
                vn[e]();
            }vn = undefined;
        }), x.support.cors = !!gn && "withCredentials" in gn, x.support.ajax = gn = !!gn, x.ajaxTransport(function (e) {
            var _t3;return x.support.cors || gn && !e.crossDomain ? { send: function send(n, r) {
                    var i,
                        o,
                        s = e.xhr();if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) {
                        s[i] = e.xhrFields[i];
                    }e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");for (i in n) {
                        s.setRequestHeader(i, n[i]);
                    }_t3 = function t(e) {
                        return function () {
                            _t3 && (delete vn[o], _t3 = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? r(s.status || 404, s.statusText) : r(mn[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? { text: s.responseText } : undefined, s.getAllResponseHeaders()));
                        };
                    }, s.onload = _t3(), s.onerror = _t3("error"), _t3 = vn[o = yn++] = _t3("abort"), s.send(e.hasContent && e.data || null);
                }, abort: function abort() {
                    _t3 && _t3();
                } } : undefined;
        });var xn,
            bn,
            wn = /^(?:toggle|show|hide)$/,
            Tn = RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"),
            Cn = /queueHooks$/,
            kn = [An],
            Nn = { "*": [function (e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Tn.exec(t),
                    o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
                    s = (x.cssNumber[e] || "px" !== o && +r) && Tn.exec(x.css(n.elem, e)),
                    a = 1,
                    u = 20;if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;do {
                        a = a || ".5", s /= a, x.style(n.elem, e, s + o);
                    } while (a !== (a = n.cur() / r) && 1 !== a && --u);
                }return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n;
            }] };function En() {
            return setTimeout(function () {
                xn = undefined;
            }), xn = x.now();
        }function Sn(e, t, n) {
            var r,
                i = (Nn[t] || []).concat(Nn["*"]),
                o = 0,
                s = i.length;for (; s > o; o++) {
                if (r = i[o].call(n, t, e)) return r;
            }
        }function jn(e, t, n) {
            var r,
                i,
                o = 0,
                s = kn.length,
                a = x.Deferred().always(function () {
                delete u.elem;
            }),
                u = function u() {
                if (i) return !1;var t = xn || En(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = n / l.duration || 0,
                    o = 1 - r,
                    s = 0,
                    u = l.tweens.length;for (; u > s; s++) {
                    l.tweens[s].run(o);
                }return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1);
            },
                l = a.promise({ elem: e, props: x.extend({}, t), opts: x.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: xn || En(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
                    var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
                }, stop: function stop(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;if (i) return this;for (i = !0; r > n; n++) {
                        l.tweens[n].run(1);
                    }return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this;
                } }),
                c = l.props;for (Dn(c, l.opts.specialEasing); s > o; o++) {
                if (r = kn[o].call(l, e, c, l.opts)) return r;
            }return x.map(c, Sn, l), x.isFunction(l.opts.start) && l.opts.start.call(e, l), x.fx.timer(x.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
        }function Dn(e, t) {
            var n, r, i, o, s;for (n in e) {
                if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = x.cssHooks[r], s && "expand" in s) {
                    o = s.expand(o), delete e[r];for (n in o) {
                        n in e || (e[n] = o[n], t[n] = i);
                    }
                } else t[r] = i;
            }
        }x.Animation = x.extend(jn, { tweener: function tweener(e, t) {
                x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");var n,
                    r = 0,
                    i = e.length;for (; i > r; r++) {
                    n = e[r], Nn[n] = Nn[n] || [], Nn[n].unshift(t);
                }
            }, prefilter: function prefilter(e, t) {
                t ? kn.unshift(e) : kn.push(e);
            } });function An(e, t, n) {
            var r,
                i,
                o,
                s,
                a,
                u,
                l = this,
                c = {},
                p = e.style,
                f = e.nodeType && Lt(e),
                h = q.get(e, "fxshow");n.queue || (a = x._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
                a.unqueued || u();
            }), a.unqueued++, l.always(function () {
                l.always(function () {
                    a.unqueued--, x.queue(e, "fx").length || a.empty.fire();
                });
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", l.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
            }));for (r in t) {
                if (i = t[r], wn.exec(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
                        if ("show" !== i || !h || h[r] === undefined) continue;f = !0;
                    }c[r] = h && h[r] || x.style(e, r);
                }
            }if (!x.isEmptyObject(c)) {
                h ? "hidden" in h && (f = h.hidden) : h = q.access(e, "fxshow", {}), o && (h.hidden = !f), f ? x(e).show() : l.done(function () {
                    x(e).hide();
                }), l.done(function () {
                    var t;q.remove(e, "fxshow");for (t in c) {
                        x.style(e, t, c[t]);
                    }
                });for (r in c) {
                    s = Sn(f ? h[r] : 0, r, l), r in h || (h[r] = s.start, f && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0));
                }
            }
        }function Ln(e, t, n, r, i) {
            return new Ln.prototype.init(e, t, n, r, i);
        }x.Tween = Ln, Ln.prototype = { constructor: Ln, init: function init(e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px");
            }, cur: function cur() {
                var e = Ln.propHooks[this.prop];return e && e.get ? e.get(this) : Ln.propHooks._default.get(this);
            }, run: function run(e) {
                var t,
                    n = Ln.propHooks[this.prop];return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ln.propHooks._default.set(this), this;
            } }, Ln.prototype.init.prototype = Ln.prototype, Ln.propHooks = { _default: { get: function get(e) {
                    var t;return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
                }, set: function set(e) {
                    x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
                } } }, Ln.propHooks.scrollTop = Ln.propHooks.scrollLeft = { set: function set(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            } }, x.each(["toggle", "show", "hide"], function (e, t) {
            var n = x.fn[t];x.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(qn(t, !0), e, r, i);
            };
        }), x.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
                return this.filter(Lt).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            }, animate: function animate(e, t, n, r) {
                var i = x.isEmptyObject(e),
                    o = x.speed(t, n, r),
                    s = function s() {
                    var t = jn(this, x.extend({}, e), o);(i || q.get(this, "finish")) && t.stop(!0);
                };return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
            }, stop: function stop(e, t, n) {
                var r = function r(e) {
                    var t = e.stop;delete e.stop, t(n);
                };return "string" != typeof e && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = x.timers,
                        s = q.get(this);if (i) s[i] && s[i].stop && r(s[i]);else for (i in s) {
                        s[i] && s[i].stop && Cn.test(i) && r(s[i]);
                    }for (i = o.length; i--;) {
                        o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    }(t || !n) && x.dequeue(this, e);
                });
            }, finish: function finish(e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t,
                        n = q.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = x.timers,
                        s = r ? r.length : 0;for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
                        o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    }for (t = 0; s > t; t++) {
                        r[t] && r[t].finish && r[t].finish.call(this);
                    }delete n.finish;
                });
            } });function qn(e, t) {
            var n,
                r = { height: e },
                i = 0;for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
                n = jt[i], r["margin" + n] = r["padding" + n] = e;
            }return t && (r.opacity = r.width = e), r;
        }x.each({ slideDown: qn("show"), slideUp: qn("hide"), slideToggle: qn("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            x.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
            };
        }), x.speed = function (e, t, n) {
            var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? x.extend({}, e) : { complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t };return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
            }, r;
        }, x.easing = { linear: function linear(e) {
                return e;
            }, swing: function swing(e) {
                return .5 - Math.cos(e * Math.PI) / 2;
            } }, x.timers = [], x.fx = Ln.prototype.init, x.fx.tick = function () {
            var e,
                t = x.timers,
                n = 0;for (xn = x.now(); t.length > n; n++) {
                e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            }t.length || x.fx.stop(), xn = undefined;
        }, x.fx.timer = function (e) {
            e() && x.timers.push(e) && x.fx.start();
        }, x.fx.interval = 13, x.fx.start = function () {
            bn || (bn = setInterval(x.fx.tick, x.fx.interval));
        }, x.fx.stop = function () {
            clearInterval(bn), bn = null;
        }, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
            return x.grep(x.timers, function (t) {
                return e === t.elem;
            }).length;
        }), x.fn.offset = function (e) {
            if (arguments.length) return e === undefined ? this : this.each(function (t) {
                x.offset.setOffset(this, e, t);
            });var t,
                n,
                i = this[0],
                o = { top: 0, left: 0 },
                s = i && i.ownerDocument;if (s) return t = s.documentElement, x.contains(t, i) ? (_typeof(i.getBoundingClientRect) !== r && (o = i.getBoundingClientRect()), n = Hn(s), { top: o.top + n.pageYOffset - t.clientTop, left: o.left + n.pageXOffset - t.clientLeft }) : o;
        }, x.offset = { setOffset: function setOffset(e, t, n) {
                var r,
                    i,
                    o,
                    s,
                    a,
                    u,
                    l,
                    c = x.css(e, "position"),
                    p = x(e),
                    f = {};"static" === c && (e.style.position = "relative"), a = p.offset(), o = x.css(e, "top"), u = x.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = p.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), x.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : p.css(f);
            } }, x.fn.extend({ position: function position() {
                if (this[0]) {
                    var e,
                        t,
                        n = this[0],
                        r = { top: 0, left: 0 };return "fixed" === x.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (r = e.offset()), r.top += x.css(e[0], "borderTopWidth", !0), r.left += x.css(e[0], "borderLeftWidth", !0)), { top: t.top - r.top - x.css(n, "marginTop", !0), left: t.left - r.left - x.css(n, "marginLeft", !0) };
                }
            }, offsetParent: function offsetParent() {
                return this.map(function () {
                    var e = this.offsetParent || s;while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) {
                        e = e.offsetParent;
                    }return e || s;
                });
            } }), x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, n) {
            var r = "pageYOffset" === n;x.fn[t] = function (i) {
                return x.access(this, function (t, i, o) {
                    var s = Hn(t);return o === undefined ? s ? s[n] : t[i] : (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o, undefined);
                }, t, i, arguments.length, null);
            };
        });function Hn(e) {
            return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
        }x.each({ Height: "height", Width: "width" }, function (e, t) {
            x.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                x.fn[r] = function (r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                        s = n || (r === !0 || i === !0 ? "margin" : "border");return x.access(this, function (t, n, r) {
                        var i;return x.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? x.css(t, n, s) : x.style(t, n, r, s);
                    }, t, o ? r : undefined, o, null);
                };
            });
        }), x.fn.size = function () {
            return this.length;
        }, x.fn.andSelf = x.fn.addBack, "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module && "object" == _typeof(module.exports) ? module.exports = x : "function" == typeof define && define.amd && define("jquery", [], function () {
            return x;
        }), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "object" == _typeof(e.document) && (e.jQuery = e.$ = x);
    })(window);

    /**
    * jQuery Wheel Color Picker
    * 
    * https://raffer.one/projects/jquery-wheelcolorpicker
    * 
    * Author : Fajar Chandra
    * Date   : 2018.02.09
    * 
    * Copyright © 2011-2018 Fajar Chandra. All rights reserved.
    * Released under MIT License.
    * http://www.opensource.org/licenses/mit-license.php
    */

    (function ($) {

        /**
         * Function: wheelColorPicker
         * 
         * The wheelColorPicker plugin wrapper. Firing all functions and 
         * setting/getting all options in this plugin should be called via 
         * this function.
         * 
         * Before that, if wheelColorPicker instance is not yet initialized, 
         * this will initialize ColorPicker widget.
         * 
         * This function will look for the options parameter passed in, and 
         * try to do something as specified in this order:
         * 1. If no argument is passed, then initialize the plugin or do nothing
         * 2. If object is passed, then call setOptions()
         * 3. If string is passed, then try to fire a method with that name
         * 4. If string is passed and no method matches the name, then try 
         *    to set/get an option with that name. If a setter/getter method 
         *    available (i.e. setSomething), it will set/get that option via that method.
         */
        $.fn.wheelColorPicker = function () {
            var returnValue = this; // Allows method chaining

            // Separate first argument and the rest..
            // First argument is used to determine function/option name
            // e.g. wheelColorPicker('setColor', { r: 0, g: 0, b: 1 })
            if (arguments.length > 0) {
                var shift = [].shift;
                var firstArg = shift.apply(arguments);
                var firstArgUc = typeof firstArg === "string" ? firstArg.charAt(0).toUpperCase() + firstArg.slice(1) : firstArg;
            } else {
                var firstArg = undefined;
                var firstArgUc = undefined;
            }
            var args = arguments;

            this.each(function () {

                // Grab ColorPicker object instance
                var instance = $(this).data('jQWCP.instance');

                // Initialize if not yet created
                if (instance == undefined || instance == null) {
                    // Get init options
                    var options = {};
                    if ((typeof firstArg === "undefined" ? "undefined" : _typeof(firstArg)) === "object") {
                        options = firstArg;
                    }

                    instance = new WCP.ColorPicker(this, options);
                    $(this).data('jQWCP.instance', instance);
                }

                /// What to do? ///

                // No arguments provided, do nothing
                // wheelColorPicker()
                if (firstArg === undefined || (typeof firstArg === "undefined" ? "undefined" : _typeof(firstArg)) === "object") {}

                // Call a method
                // wheelColorPicker('show')
                else if (typeof instance[firstArg] === "function") {
                        //console.log('method');
                        var ret = instance[firstArg].apply(instance, args);

                        // If instance is not returned, no method chaining
                        if (ret !== instance) {
                            returnValue = ret;
                            return false;
                        }
                    }

                    // Try option setter
                    // wheelColorPicker('color', '#ff00aa')
                    else if (typeof instance['set' + firstArgUc] === "function" && args.length > 0) {
                            //console.log('setter');
                            var ret = instance['set' + firstArgUc].apply(instance, args);

                            // If instance is not returned, no method chaining
                            if (ret !== instance) {
                                returnValue = ret;
                                return false;
                            }
                        }

                        // Try option getter
                        // wheelColorPicker('color')
                        else if (typeof instance['get' + firstArgUc] === "function") {
                                //console.log('getter');
                                var ret = instance['get' + firstArgUc].apply(instance, args);

                                // If instance is not returned, no method chaining
                                if (ret !== instance) {
                                    returnValue = ret;
                                    return false;
                                }
                            }

                            // Set option value
                            // wheelColorPicker('format', 'hex')
                            else if (instance.options[firstArg] !== undefined && args.length > 0) {
                                    //console.log('set option');
                                    instance.options[firstArg] = args[0];
                                }

                                // Get option value
                                // wheelColorPicker('format')
                                else if (instance.options[firstArg] !== undefined) {
                                        //console.log('get option');
                                        returnValue = instance.options[firstArg];
                                        return false;
                                    }

                                    // Nothing matches, throw error
                                    else {
                                            $.error('Method/option named ' + firstArg + ' does not exist on jQuery.wheelColorPicker');
                                        }
            });

            return returnValue;
        };

        /******************************************************************/

        /////////////////////////////////////////
        // Shorthand for $.fn.wheelColorPicker //
        /////////////////////////////////////////
        var WCP = $.fn.wheelColorPicker;
        /////////////////////////////////////////

        /**
         * Object: defaults
         * 
         * Contains default options for the wheelColorPicker plugin.
         * 
         * Member properties:
         * 
         *   format        - <string> Color naming style. See colorToRgb for all 
         *                   available formats.
         *   live          - <boolean> Enable dynamic slider gradients.
         *   preview       - <boolean> Enable live color preview on input field
         *   userinput     - (Deprecated) <boolean> Enable picking color by typing directly
         *   validate      - <boolean> When userinput is enabled, force the value to be 
         *                   a valid format. If user input an invalid color, the value 
         *                   will be reverted to last valid color.
            *   autoResize    - <boolean> Automatically resize container width.
            *                   If set to false, you could manually adjust size with CSS.
         *   autoFormat    - <boolean> Automatically convert input value to 
         *                   specified format. For example, if format is "rgb", 
         *                   "#ff0000" will automatically converted into "rgb(255,0,0)".
         *   color         - <object|string> Initial value in any of supported color 
         *                   value format or as an object. Setting this value will 
         *                   override the current input value.
         *   alpha         - (Deprecated) <boolean> Force the color picker to use alpha value 
         *                   despite its selected color format. This option is 
         *                   deprecated. Use sliders = "a" instead.
         *   inverseLabel  - (deprecated) Boolean use inverse color for 
         *                   input label instead of black/white color.
         *   preserveWheel - Boolean preserve color wheel shade when slider 
         *                   position changes. If set to true, changing 
         *                   color wheel from black will reset selectedColor.val 
         *                   (shade) to 1.
         *   interactive   - Boolean enable interactive sliders where slider bar
         *                   gradients change dynamically as user drag a slider 
         *                   handle. Set to false if this affect performance.
         *                   See also 'quality' option if you wish to keep 
         *                   interactive slider but with reduced quality.
         *   cssClass      - Object CSS Classes to be added to the color picker.
         *   layout        - String [block|popup] Layout mode.
         *   animDuration  - Number Duration for transitions such as fade-in 
         *                   and fade-out.
         *   quality       - Rendering details quality. The normal quality is 1. 
         *                   Setting less than 0.1 may make the sliders ugly, 
         *                   while setting the value too high might affect performance.
         *   sliders       - String combination of sliders. If null then the color 
         *                   picker will show default values, which is "wvp" for 
         *                   normal color or "wvap" for color with alpha value. 
         *                   Possible combinations are "whsvrgbap". 
            *                   Order of letters will affect slider positions.
         *   sliderLabel   - Boolean Show labels for each slider.
         *   sliderValue   - Boolean Show numeric value of each slider.
         *   hideKeyboard  - Boolean Keep input blurred to avoid on screen keyboard appearing. 
         *                   If this is set to true, avoid assigning handler to blur event.
         *   rounding      - Round the alpha value to N decimal digits. Default is 2.
         *                   Set -1 to disable rounding.
         *   mobile        - Display mobile-friendly layout when opened in mobile device.
            *   mobileWidth   - Max screen width to use mobile layout instead of default one.
         *   mobileAutoScroll - Automatically scroll the page if focused input element 
         *                      gets obstructed by color picker dialog.
         *   htmlOptions   - Load options from HTML attributes. 
         *                   To set options using HTML attributes, 
         *                   prefix these options with 'data-wcp-' as attribute names.
            *   snap          - Snap color wheel and slider on 0, 0.5, and 1.0
            *   snapTolerance - Snap if slider position falls within defined 
            *                   tolerance value.
         */
        WCP.defaults = {
            format: 'hex', /* 1.x */
            preview: false, /* 1.x */
            live: true, /* 2.0 */
            userinput: true, /* DEPRECATED 1.x */
            validate: true, /* 1.x */
            autoResize: true, /* 3.0 */
            autoFormat: true, /* 3.0 */
            //color: null, /* DEPRECATED 1.x */ /* OBSOLETE 3.0 */ /* Init-time only */
            //alpha: null, /* DEPRECATED 1.x */ /* OBSOLETE 3.0 */ /* See methods.alpha */
            preserveWheel: null, /* DEPRECATED 1.x */ /* Use live */
            cssClass: '', /* 2.0 */
            layout: 'popup', /* 2.0 */ /* Init-time only */
            animDuration: 200, /* 2.0 */
            quality: 1, /* 2.0 */
            sliders: null, /* 2.0 */
            //sliderLabel: true, /* 2.0 */ /* NOT IMPLEMENTED */
            //sliderValue: false, /* 2.0 */ /* NOT IMPLEMENTED */
            rounding: 2, /* 2.3 */
            mobile: true, /* 3.0 */
            mobileWidth: 480, /* 3.0 */
            hideKeyboard: false, /* 2.4 */
            htmlOptions: true, /* 2.3 */
            snap: false, /* 2.5 */
            snapTolerance: 0.05 /* 2.5 */
        };

        /******************************************************************/

        //////////////////////////////
        // STATIC OBJECTS AND FLAGS //
        //////////////////////////////

        /* 
         * Note: To determine input position (top and left), use the following:
         * WCP.ORIGIN.top + this.input.getBoundingClientRect().top
         * instead of using $(this.input).offset().top because on mobile browsers 
         * (chrome) jQuery's offset() function returns wrong value.
         */

        /// Top left of the page is not on (0,0), making window.scrollX/Y and offset() useless
        /// See WCP.ORIGIN
        WCP.BUG_RELATIVE_PAGE_ORIGIN = false;

        /// Coordinate of the top left page (mobile chrome workaround)
        WCP.ORIGIN = { left: 0, top: 0 };

        /******************************************************************/

        //////////////////////
        // HELPER FUNCTIONS //
        //////////////////////

        /**
         * Function: colorToStr
         * 
         * Since 2.0
         * 
         * Convert color object to string in specified format
         * 
         * Available formats:
         * - hex
         * - hexa
         * - css
         * - cssa
         * - rgb
         * - rgb%
         * - rgba
         * - rgba%
         * - hsv
         * - hsv%
         * - hsva
         * - hsva%
         * - hsb
         * - hsb%
         * - hsba
         * - hsba%
         */
        WCP.colorToStr = function (color, format) {
            var result = "";
            switch (format) {
                case 'css':
                    result = "#";
                case 'hex':
                    var r = Math.round(color.r * 255).toString(16);
                    if (r.length == 1) {
                        r = "0" + r;
                    }
                    var g = Math.round(color.g * 255).toString(16);
                    if (g.length == 1) {
                        g = "0" + g;
                    }
                    var b = Math.round(color.b * 255).toString(16);
                    if (b.length == 1) {
                        b = "0" + b;
                    }
                    result += r + g + b;
                    break;

                case 'cssa':
                    result = "#";
                case 'hexa':
                    var r = Math.round(color.r * 255).toString(16);
                    if (r.length == 1) {
                        r = "0" + r;
                    }
                    var g = Math.round(color.g * 255).toString(16);
                    if (g.length == 1) {
                        g = "0" + g;
                    }
                    var b = Math.round(color.b * 255).toString(16);
                    if (b.length == 1) {
                        b = "0" + b;
                    }
                    var a = Math.round(color.a * 255).toString(16);
                    if (a.length == 1) {
                        a = "0" + a;
                    }
                    result += r + g + b + a;
                    break;

                case 'rgb':
                    result = "rgb(" + Math.round(color.r * 255) + "," + Math.round(color.g * 255) + "," + Math.round(color.b * 255) + ")";
                    break;

                case 'rgb%':
                    result = "rgb(" + color.r * 100 + "%," + color.g * 100 + "%," + color.b * 100 + "%)";
                    break;

                case 'rgba':
                    result = "rgba(" + Math.round(color.r * 255) + "," + Math.round(color.g * 255) + "," + Math.round(color.b * 255) + "," + color.a + ")";
                    break;

                case 'rgba%':
                    result = "rgba(" + color.r * 100 + "%," + color.g * 100 + "%," + color.b * 100 + "%," + color.a * 100 + "%)";
                    break;

                case 'hsv':
                    result = "hsv(" + color.h * 360 + "," + color.s + "," + color.v + ")";
                    break;

                case 'hsv%':
                    result = "hsv(" + color.h * 100 + "%," + color.s * 100 + "%," + color.v * 100 + "%)";
                    break;

                case 'hsva':
                    result = "hsva(" + color.h * 360 + "," + color.s + "," + color.v + "," + color.a + ")";
                    break;

                case 'hsva%':
                    result = "hsva(" + color.h * 100 + "%," + color.s * 100 + "%," + color.v * 100 + "%," + color.a * 100 + "%)";
                    break;

                case 'hsb':
                    result = "hsb(" + color.h + "," + color.s + "," + color.v + ")";
                    break;

                case 'hsb%':
                    result = "hsb(" + color.h * 100 + "%," + color.s * 100 + "%," + color.v * 100 + "%)";
                    break;

                case 'hsba':
                    result = "hsba(" + color.h + "," + color.s + "," + color.v + "," + color.a + ")";
                    break;

                case 'hsba%':
                    result = "hsba(" + color.h * 100 + "%," + color.s * 100 + "%," + color.v * 100 + "%," + color.a * 100 + "%)";
                    break;

            }
            return result;
        };

        /**
         * Function: strToColor
         * 
         * Since 2.0
         * 
         * Convert string to color object.
         * Please note that if RGB color is supplied, the returned value 
         * will only contain RGB.
         * 
         * If invalid string is supplied, FALSE will be returned.
         */
        WCP.strToColor = function (val) {
            var color = { a: 1 };
            var tmp;
            var hasAlpha;

            // #fff
            // #ffff
            if (val.match(/^#[0-9a-f]{3}$/i) != null || val.match(/^#[0-9a-f]{4}$/i)) {
                if (isNaN(color.r = parseInt(val.substr(1, 1), 16) * 17 / 255)) {
                    return false;
                }
                if (isNaN(color.g = parseInt(val.substr(2, 1), 16) * 17 / 255)) {
                    return false;
                }
                if (isNaN(color.b = parseInt(val.substr(3, 1), 16) * 17 / 255)) {
                    return false;
                }

                // Alpha
                if (val.length == 5) {
                    if (isNaN(color.a = parseInt(val.substr(4, 1), 16) * 17 / 255)) {
                        return false;
                    }
                }
            }

            // fff
            // ffff
            else if (val.match(/^[0-9a-f]{3}$/i) != null || val.match(/^[0-9a-f]{4}$/i) != null) {
                    if (isNaN(color.r = parseInt(val.substr(0, 1), 16) * 17 / 255)) {
                        return false;
                    }
                    if (isNaN(color.g = parseInt(val.substr(1, 1), 16) * 17 / 255)) {
                        return false;
                    }
                    if (isNaN(color.b = parseInt(val.substr(2, 1), 16) * 17 / 255)) {
                        return false;
                    }

                    // Alpha
                    if (val.length == 4) {
                        if (isNaN(color.a = parseInt(val.substr(3, 1), 16) * 17 / 255)) {
                            return false;
                        }
                    }
                }

                // #ffffff
                // #ffffffff
                else if (val.match(/^#[0-9a-f]{6}$/i) != null || val.match(/^#[0-9a-f]{8}$/i) != null) {
                        if (isNaN(color.r = parseInt(val.substr(1, 2), 16) / 255)) {
                            return false;
                        }
                        if (isNaN(color.g = parseInt(val.substr(3, 2), 16) / 255)) {
                            return false;
                        }
                        if (isNaN(color.b = parseInt(val.substr(5, 2), 16) / 255)) {
                            return false;
                        }

                        // Alpha
                        if (val.length == 9) {
                            if (isNaN(color.a = parseInt(val.substr(7, 2), 16) / 255)) {
                                return false;
                            }
                        }
                    }

                    // ffffff
                    // ffffffff
                    else if (val.match(/^[0-9a-f]{6}$/i) != null || val.match(/^[0-9a-f]{8}$/i) != null) {
                            if (isNaN(color.r = parseInt(val.substr(0, 2), 16) / 255)) {
                                return false;
                            }
                            if (isNaN(color.g = parseInt(val.substr(2, 2), 16) / 255)) {
                                return false;
                            }
                            if (isNaN(color.b = parseInt(val.substr(4, 2), 16) / 255)) {
                                return false;
                            }

                            // Alpha
                            if (val.length == 8) {
                                if (isNaN(color.a = parseInt(val.substr(6, 2), 16) / 255)) {
                                    return false;
                                }
                            }
                        }

                        // rgb(100%,100%,100%)
                        // rgba(100%,100%,100%,100%)
                        // rgba(255,255,255,1)
                        // rgba(100%,1, 0.5,.2)
                        else if (val.match(/^rgba\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i) != null || val.match(/^rgb\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i) != null) {
                                if (val.match(/a/i) != null) {
                                    hasAlpha = true;
                                } else {
                                    hasAlpha = false;
                                }

                                tmp = val.substring(val.indexOf('(') + 1, val.indexOf(','));
                                if (tmp.charAt(tmp.length - 1) == '%') {
                                    if (isNaN(color.r = parseFloat(tmp) / 100)) {
                                        return false;
                                    }
                                } else {
                                    if (isNaN(color.r = parseInt(tmp) / 255)) {
                                        return false;
                                    }
                                }

                                tmp = val.substring(val.indexOf(',') + 1, val.indexOf(',', val.indexOf(',') + 1));
                                if (tmp.charAt(tmp.length - 1) == '%') {
                                    if (isNaN(color.g = parseFloat(tmp) / 100)) {
                                        return false;
                                    }
                                } else {
                                    if (isNaN(color.g = parseInt(tmp) / 255)) {
                                        return false;
                                    }
                                }

                                if (hasAlpha) {
                                    tmp = val.substring(val.indexOf(',', val.indexOf(',') + 1) + 1, val.lastIndexOf(','));
                                } else {
                                    tmp = val.substring(val.lastIndexOf(',') + 1, val.lastIndexOf(')'));
                                }
                                if (tmp.charAt(tmp.length - 1) == '%') {
                                    if (isNaN(color.b = parseFloat(tmp) / 100)) {
                                        return false;
                                    }
                                } else {
                                    if (isNaN(color.b = parseInt(tmp) / 255)) {
                                        return false;
                                    }
                                }

                                if (hasAlpha) {
                                    tmp = val.substring(val.lastIndexOf(',') + 1, val.lastIndexOf(')'));
                                    if (tmp.charAt(tmp.length - 1) == '%') {
                                        if (isNaN(color.a = parseFloat(tmp) / 100)) {
                                            return false;
                                        }
                                    } else {
                                        if (isNaN(color.a = parseFloat(tmp))) {
                                            return false;
                                        }
                                    }
                                }
                            }

                            // hsv(100%,100%,100%)
                            // hsva(100%,100%,100%,100%)
                            // hsv(360,1,1,1)
                            // hsva(360,1, 0.5,.2)
                            // hsb(100%,100%,100%)
                            // hsba(100%,100%,100%,100%)
                            // hsb(360,1,1,1)
                            // hsba(360,1, 0.5,.2)
                            else if (val.match(/^hsva\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i) != null || val.match(/^hsv\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i) != null || val.match(/^hsba\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i) != null || val.match(/^hsb\s*\(\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*,\s*([0-9\.]+%|[01]?\.?[0-9]*)\s*\)$/i) != null) {
                                    if (val.match(/a/i) != null) {
                                        hasAlpha = true;
                                    } else {
                                        hasAlpha = false;
                                    }

                                    tmp = val.substring(val.indexOf('(') + 1, val.indexOf(','));
                                    if (tmp.charAt(tmp.length - 1) == '%') {
                                        if (isNaN(color.h = parseFloat(tmp) / 100)) {
                                            return false;
                                        }
                                    } else {
                                        if (isNaN(color.h = parseFloat(tmp) / 360)) {
                                            return false;
                                        }
                                    }

                                    tmp = val.substring(val.indexOf(',') + 1, val.indexOf(',', val.indexOf(',') + 1));
                                    if (tmp.charAt(tmp.length - 1) == '%') {
                                        if (isNaN(color.s = parseFloat(tmp) / 100)) {
                                            return false;
                                        }
                                    } else {
                                        if (isNaN(color.s = parseFloat(tmp))) {
                                            return false;
                                        }
                                    }

                                    if (hasAlpha) {
                                        tmp = val.substring(val.indexOf(',', val.indexOf(',') + 1) + 1, val.lastIndexOf(','));
                                    } else {
                                        tmp = val.substring(val.lastIndexOf(',') + 1, val.lastIndexOf(')'));
                                    }
                                    if (tmp.charAt(tmp.length - 1) == '%') {
                                        if (isNaN(color.v = parseFloat(tmp) / 100)) {
                                            return false;
                                        }
                                    } else {
                                        if (isNaN(color.v = parseFloat(tmp))) {
                                            return false;
                                        }
                                    }

                                    if (hasAlpha) {
                                        tmp = val.substring(val.lastIndexOf(',') + 1, val.lastIndexOf(')'));
                                        if (tmp.charAt(tmp.length - 1) == '%') {
                                            if (isNaN(color.a = parseFloat(tmp) / 100)) {
                                                return false;
                                            }
                                        } else {
                                            if (isNaN(color.a = parseFloat(tmp))) {
                                                return false;
                                            }
                                        }
                                    }
                                } else {
                                    return false;
                                }

            return color;
        };

        /**
         * Function: hsvToRgb
         * 
         * Since 2.0
         * 
         * Perform HSV to RGB conversion
         */
        WCP.hsvToRgb = function (h, s, v) {

            // Calculate RGB from hue (1st phase)
            var cr = h <= 1 / 6 || h >= 5 / 6 ? 1 : h < 1 / 3 ? 1 - (h - 1 / 6) * 6 : h > 4 / 6 ? (h - 4 / 6) * 6 : 0;
            var cg = h >= 1 / 6 && h <= 3 / 6 ? 1 : h < 1 / 6 ? h * 6 : h < 4 / 6 ? 1 - (h - 3 / 6) * 6 : 0;
            var cb = h >= 3 / 6 && h <= 5 / 6 ? 1 : h > 2 / 6 && h < 3 / 6 ? (h - 2 / 6) * 6 : h > 5 / 6 ? 1 - (h - 5 / 6) * 6 : 0;

            //~ console.log(cr + ' ' + cg + ' ' + cb);

            // Calculate RGB with saturation & value applied
            var r = (cr + (1 - cr) * (1 - s)) * v;
            var g = (cg + (1 - cg) * (1 - s)) * v;
            var b = (cb + (1 - cb) * (1 - s)) * v;

            //~ console.log(r + ' ' + g + ' ' + b + ' ' + v);

            return { r: r, g: g, b: b };
        };

        /**
         * Function: rgbToHsv
         * 
         * Since 2.0
         * 
         * Perform RGB to HSV conversion
         */
        WCP.rgbToHsv = function (r, g, b) {

            var h;
            var s;
            var v;

            var maxColor = Math.max(r, g, b);
            var minColor = Math.min(r, g, b);
            var delta = maxColor - minColor;

            // Calculate saturation
            if (maxColor != 0) {
                s = delta / maxColor;
            } else {
                s = 0;
            }

            // Calculate hue
            // To simplify the formula, we use 0-6 range.
            if (delta == 0) {
                h = 0;
            } else if (r == maxColor) {
                h = (6 + (g - b) / delta) % 6;
            } else if (g == maxColor) {
                h = 2 + (b - r) / delta;
            } else if (b == maxColor) {
                h = 4 + (r - g) / delta;
            } else {
                h = 0;
            }
            // Then adjust the range to be 0-1
            h = h / 6;

            // Calculate value
            v = maxColor;

            //~ console.log(h + ' ' + s + ' ' + v);

            return { h: h, s: s, v: v };
        };

        /******************************************************************/

        ////////////////////////
        // COLOR PICKER CLASS //
        ////////////////////////

        /**
         * Class: ColorPicker
         * 
         * Since 3.0
         */
        WCP.ColorPicker = function (elm, options) {

            // Assign reference to input DOM element
            this.input = elm;

            // Setup selected color in the following priority:
            // 1. options.color
            // 2. input.value
            // 3. default
            this.color = { h: 0, s: 0, v: 1, r: 1, g: 1, b: 1, a: 1 };
            this.setValue(this.input.value);

            // Set options
            this.options = $.extend(true, {}, WCP.defaults);
            this.setOptions(options);

            // Check sliders option, if not defined, set default sliders
            if (this.options.sliders == null) this.options.sliders = 'wvp' + (this.options.format.indexOf('a') >= 0 ? 'a' : '');

            this.init();
        };

        ////////////////////
        // Static members //
        ////////////////////


        /**
         * Static Property: ColorPicker.widget
         * 
         * Reference to global color picker widget (popup)
         */
        WCP.ColorPicker.widget = null;

        /**
         * Property: ColorPicker.overlay
         * 
         * Reference to overlay DOM element (overlay for global popup)
         */
        WCP.ColorPicker.overlay = null;

        /**
         * Function: init
         * 
         * Since 3.0
         * 2.0 was methods.staticInit
         * 
         * Initialize wheel color picker globally.
         */
        WCP.ColorPicker.init = function () {
            // Only perform initialization once
            if (WCP.ColorPicker.init.hasInit == true) return;
            WCP.ColorPicker.init.hasInit = true;

            // Insert overlay element to handle popup closing
            // when hideKeyboard is true, hence input is always blurred
            var $overlay = $('<div class="jQWCP-overlay" style="display: none;"></div>');
            $overlay.on('click', WCP.Handler.overlay_click);
            WCP.ColorPicker.overlay = $overlay.get(0);
            $('body').append($overlay);

            // Insert CSS for color wheel
            var wheelImage = WCP.ColorPicker.getWheelDataUrl(200);
            $('head').append('<style type="text/css">' + '.jQWCP-wWheel {' + 'background-image: url(' + wheelImage + ');' + '}' + '</style>');

            // Attach events
            $('html').on('mouseup.wheelColorPicker', WCP.Handler.html_mouseup);
            $('html').on('touchend.wheelColorPicker', WCP.Handler.html_mouseup);
            $('html').on('mousemove.wheelColorPicker', WCP.Handler.html_mousemove);
            $('html').on('touchmove.wheelColorPicker', WCP.Handler.html_mousemove);
            $(window).on('resize.wheelColorPicker', WCP.Handler.window_resize);
        };

        /**
         * Function: createWidget
         * 
         * Since 3.0
         * 2.5 was private.initWidget
         * 
         * Create color picker widget.
         */
        WCP.ColorPicker.createWidget = function () {
            /// WIDGET ///
            // Notice: We won't use canvas to draw the color wheel since 
            // it may takes time and cause performance issue.
            var $widget = $("<div class='jQWCP-wWidget'>" + "<div class='jQWCP-wWheel'>" + "<div class='jQWCP-wWheelOverlay'></div>" + "<span class='jQWCP-wWheelCursor'></span>" + "</div>" + "<div class='jQWCP-wHue jQWCP-slider-wrapper'>" + "<canvas class='jQWCP-wHueSlider jQWCP-slider' width='1' height='50' title='Hue'></canvas>" + "<span class='jQWCP-wHueCursor jQWCP-scursor'></span>" + "</div>" + "<div class='jQWCP-wSat jQWCP-slider-wrapper'>" + "<canvas class='jQWCP-wSatSlider jQWCP-slider' width='1' height='50' title='Saturation'></canvas>" + "<span class='jQWCP-wSatCursor jQWCP-scursor'></span>" + "</div>" + "<div class='jQWCP-wVal jQWCP-slider-wrapper'>" + "<canvas class='jQWCP-wValSlider jQWCP-slider' width='1' height='50' title='Value'></canvas>" + "<span class='jQWCP-wValCursor jQWCP-scursor'></span>" + "</div>" + "<div class='jQWCP-wRed jQWCP-slider-wrapper'>" + "<canvas class='jQWCP-wRedSlider jQWCP-slider' width='1' height='50' title='Red'></canvas>" + "<span class='jQWCP-wRedCursor jQWCP-scursor'></span>" + "</div>" + "<div class='jQWCP-wGreen jQWCP-slider-wrapper'>" + "<canvas class='jQWCP-wGreenSlider jQWCP-slider' width='1' height='50' title='Green'></canvas>" + "<span class='jQWCP-wGreenCursor jQWCP-scursor'></span>" + "</div>" + "<div class='jQWCP-wBlue jQWCP-slider-wrapper'>" + "<canvas class='jQWCP-wBlueSlider jQWCP-slider' width='1' height='50' title='Blue'></canvas>" + "<span class='jQWCP-wBlueCursor jQWCP-scursor'></span>" + "</div>" + "<div class='jQWCP-wAlpha jQWCP-slider-wrapper'>" + "<canvas class='jQWCP-wAlphaSlider jQWCP-slider' width='1' height='50' title='Alpha'></canvas>" + "<span class='jQWCP-wAlphaCursor jQWCP-scursor'></span>" + "</div>" + "<div class='jQWCP-wPreview'>" + "<canvas class='jQWCP-wPreviewBox' width='1' height='1' title='Selected Color'></canvas>" + "</div>" + "</div>");

            // Small UI fix to disable highlighting the widget
            // Also UI fix to disable touch context menu 
            $widget.find('.jQWCP-wWheel, .jQWCP-slider-wrapper, .jQWCP-scursor, .jQWCP-slider').attr('unselectable', 'on').css('-moz-user-select', 'none').css('-webkit-user-select', 'none').css('user-select', 'none').css('-webkit-touch-callout', 'none');

            // Disable context menu on sliders
            // Workaround for touch browsers
            $widget.on('contextmenu.wheelColorPicker', function () {
                return false;
            });

            // Bind widget events
            $widget.on('mousedown.wheelColorPicker', '.jQWCP-wWheel', WCP.Handler.wheel_mousedown);
            $widget.on('touchstart.wheelColorPicker', '.jQWCP-wWheel', WCP.Handler.wheel_mousedown);
            $widget.on('mousedown.wheelColorPicker', '.jQWCP-wWheelCursor', WCP.Handler.wheelCursor_mousedown);
            $widget.on('touchstart.wheelColorPicker', '.jQWCP-wWheelCursor', WCP.Handler.wheelCursor_mousedown);
            $widget.on('mousedown.wheelColorPicker', '.jQWCP-slider', WCP.Handler.slider_mousedown);
            $widget.on('touchstart.wheelColorPicker', '.jQWCP-slider', WCP.Handler.slider_mousedown);
            $widget.on('mousedown.wheelColorPicker', '.jQWCP-scursor', WCP.Handler.sliderCursor_mousedown);
            $widget.on('touchstart.wheelColorPicker', '.jQWCP-scursor', WCP.Handler.sliderCursor_mousedown);

            return $widget.get(0);
        };

        /**
         * Function: getWheelDataUrl
         * 
         * Create color wheel image and return as base64 encoded data url.
         */
        WCP.ColorPicker.getWheelDataUrl = function (size) {
            var r = size / 2; // radius
            var center = r;
            var canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            var context = canvas.getContext('2d');

            // Fill the wheel with colors
            for (var y = 0; y < size; y++) {
                for (var x = 0; x < size; x++) {
                    // Get the offset from central position
                    var offset = Math.sqrt(Math.pow(x - center, 2) + Math.pow(y - center, 2));

                    // Skip pixels outside picture area (plus 2 pixels)
                    if (offset > r + 2) {
                        continue;
                    }

                    // Get the position in degree (hue)
                    var deg = ((x - center == 0 ? y < center ? 90 : 270 : Math.atan((center - y) / (x - center)) / Math.PI * 180) + (x < center ? 180 : 0) + 360) % 360;

                    // Relative offset (sat)
                    var sat = offset / r;

                    // Value is always 1
                    var val = 1;

                    // Calculate color
                    var cr = (Math.abs(deg + 360) + 60) % 360 < 120 ? 1 : deg > 240 ? (120 - Math.abs(deg - 360)) / 60 : deg < 120 ? (120 - deg) / 60 : 0;
                    var cg = Math.abs(deg - 120) < 60 ? 1 : Math.abs(deg - 120) < 120 ? (120 - Math.abs(deg - 120)) / 60 : 0;

                    var cb = Math.abs(deg - 240) < 60 ? 1 : Math.abs(deg - 240) < 120 ? (120 - Math.abs(deg - 240)) / 60 : 0;
                    var pr = Math.round((cr + (1 - cr) * (1 - sat)) * 255);
                    var pg = Math.round((cg + (1 - cg) * (1 - sat)) * 255);
                    var pb = Math.round((cb + (1 - cb) * (1 - sat)) * 255);

                    context.fillStyle = 'rgb(' + pr + ',' + pg + ',' + pb + ')';
                    context.fillRect(x, y, 1, 1);
                }
            }

            return canvas.toDataURL();
        };

        /////////////
        // Members //
        /////////////


        /**
         * Property: ColorPicker.options
         * 
         * Plugin options for the color picker instance, extended from WCP.defaults.
         */
        WCP.ColorPicker.prototype.options = null;

        /**
         * Property: ColorPicker.input
         * 
         * Reference to input DOM element
         */
        WCP.ColorPicker.prototype.input = null;

        /** 
         * Property: ColorPicker.widget
         * 
         * Reference to widget DOM element (global popup or private inline widget)
         */
        WCP.ColorPicker.prototype.widget = null;

        /**
         * Property: ColorPicker.color
         * 
         * Selected color object.
         */
        WCP.ColorPicker.prototype.color = null;

        /**
         * Property: ColorPicker.lastValue
         * 
         * Store last input value
         */
        WCP.ColorPicker.prototype.lastValue = null;

        /**
         * Function: ColorPicker.setOptions
         * 
         * Since 3.0
         * 
         * Set options to the color picker. If htmlOptions is set to true, 
         * options set via html attributes are also reloaded. If both html 
         * attribute and argument exists, option set via options argument 
         * gets priority.
         */
        WCP.ColorPicker.prototype.setOptions = function (options) {

            // options should be a separate object (passed by value)
            // Make a copy of options
            options = $.extend(true, {}, options);

            // Load options from HTML attributes
            if (this.options.htmlOptions) {
                for (var key in WCP.defaults) {
                    // Only if option key is valid and not set via function argument
                    if (this.input.hasAttribute('data-wcp-' + key) && options[key] === undefined) {
                        options[key] = this.input.getAttribute('data-wcp-' + key);
                        // Change true/false string to boolean
                        if (options[key] == 'true') {
                            options[key] = true;
                        } else if (options[key] == 'false') {
                            options[key] = false;
                        }
                    }
                }
            }

            // Set options
            for (var key in options) {
                // Skip undefined option key
                if (this.options[key] === undefined) continue;

                var keyUc = key.charAt(0).toUpperCase() + key.slice(1);

                // If setter is available, try setting it via setter
                if (typeof this['set' + keyUc] === "function") {
                    this['set' + keyUc](options[key]);
                }
                // Otherwise directly update options
                else {
                        this.options[key] = options[key];
                    }
            }

            return this; // Allow chaining
        };

        /**
         * Function: ColorPicker.init
         * 
         * Initialize wheel color picker widget
         */
        WCP.ColorPicker.prototype.init = function () {
            WCP.ColorPicker.init();

            // Initialization must only occur once
            if (this.hasInit == true) return;
            this.hasInit = true;

            var instance = this;
            var $input = $(this.input);
            var $widget = null;

            /// LAYOUT & BINDINGS ///
            // Setup block mode layout
            if (this.options.layout == 'block') {
                // Create widget
                this.widget = WCP.ColorPicker.createWidget();
                $widget = $(this.widget);

                // Store object instance reference
                $widget.data('jQWCP.instance', this);

                // Wrap widget around the input elm and put the input 
                // elm inside widget
                $widget.insertAfter(this.input);
                // Retain display CSS property
                if ($input.css('display') == "inline") {
                    $widget.css('display', "inline-block");
                } else {
                    $widget.css('display', $input.css('display'));
                }
                $widget.append(this.input);
                $input.hide();

                // Add tabindex attribute to make the widget focusable
                if ($input.attr('tabindex') != undefined) {
                    $widget.attr('tabindex', $input.attr('tabindex'));
                } else {
                    $widget.attr('tabindex', 0);
                }

                // Further widget adjustments based on options
                this.refreshWidget();

                // Draw shading
                this.redrawSliders(true);
                this.updateSliders();

                // Bind widget element events
                $widget.on('focus.wheelColorPicker', WCP.Handler.widget_focus_block);
                $widget.on('blur.wheelColorPicker', WCP.Handler.widget_blur_block);
            }

            // Setup popup mode layout
            else {
                    // Only need to create one widget, used globally
                    if (WCP.ColorPicker.widget == null) {
                        WCP.ColorPicker.widget = WCP.ColorPicker.createWidget();
                        $widget = $(WCP.ColorPicker.widget);

                        // Assign widget to global
                        $widget.hide();
                        $('body').append($widget);

                        // Bind popup events
                        $widget.on('mousedown.wheelColorPicker', WCP.Handler.widget_mousedown_popup);
                        //$widget.on('mouseup.wheelColorPicker', WCP.Handler.widget_mouseup_popup);
                    }
                    this.widget = WCP.ColorPicker.widget;

                    // Bind input element events
                    $input.on('focus.wheelColorPicker', WCP.Handler.input_focus_popup);
                    $input.on('blur.wheelColorPicker', WCP.Handler.input_blur_popup);
                }

            // Bind input events
            $input.on('keyup.wheelColorPicker', WCP.Handler.input_keyup);
            $input.on('change.wheelColorPicker', WCP.Handler.input_change);

            // Set color value
            // DEPRECATED by 3.0
            if (_typeof(this.options.color) == "object") {
                this.setColor(this.options.color);
                this.options.color = undefined;
            } else if (typeof this.options.color == "string") {
                this.setValue(this.options.color);
                this.options.color = undefined;
            }

            // Set readonly mode
            /* DEPRECATED */
            if (this.options.userinput) {
                $input.removeAttr('readonly');
            } else {
                $input.attr('readonly', true);
            }
        };

        /**
         * Function: destroy
         * 
         * Destroy the color picker and return it to normal element.
         */
        WCP.ColorPicker.prototype.destroy = function () {
            var $widget = $(this.widget);
            var $input = $(this.input);

            // Reset layout
            // No need to delete global popup
            if (this.options.layout == 'block') {
                // Check if active control is the same widget as destroyed widget, remove the reference if it's true
                var $control = $($('body').data('jQWCP.activeControl')); // Refers to slider wrapper or wheel
                if ($control.length) {
                    var controlWidget = $control.closest('.jQWCP-wWidget');
                    if ($widget.is(controlWidget)) {
                        $('body').data('jQWCP.activeControl', null);
                    }
                }

                $widget.before(this.input);
                $widget.remove();
                $input.show();
            }

            // Unbind events
            $input.off('focus.wheelColorPicker');
            $input.off('blur.wheelColorPicker');
            $input.off('keyup.wheelColorPicker');
            $input.off('change.wheelColorPicker');

            // Remove data
            $input.data('jQWCP.instance', null);

            // remove self
            delete this;
        };

        /**
         * Function: refreshWidget
         * 
         * Since 3.0
         * 2.5 was private.adjustWidget
         * 
         * Update widget to match current option values.
         */
        WCP.ColorPicker.prototype.refreshWidget = function () {
            var $widget = $(this.widget);
            var options = this.options;
            var mobileLayout = false;

            // Set CSS classes
            $widget.attr('class', 'jQWCP-wWidget');
            if (options.layout == 'block') {
                $widget.addClass('jQWCP-block');
            }
            $widget.addClass(options.cssClass);
            //$widget.addClass(this.input.getAttribute('class'));

            // Check whether to use mobile layout
            if (window.innerWidth <= options.mobileWidth && options.layout != 'block' && options.mobile) {
                mobileLayout = true;
                $widget.addClass('jQWCP-mobile');
            }

            // Rearrange sliders
            $widget.find('.jQWCP-wWheel, .jQWCP-slider-wrapper, .jQWCP-wPreview').hide().addClass('hidden');

            for (var i in options.sliders) {
                var $slider = null;
                switch (this.options.sliders[i]) {
                    case 'w':
                        $slider = $widget.find('.jQWCP-wWheel');break;
                    case 'h':
                        $slider = $widget.find('.jQWCP-wHue');break;
                    case 's':
                        $slider = $widget.find('.jQWCP-wSat');break;
                    case 'v':
                        $slider = $widget.find('.jQWCP-wVal');break;
                    case 'r':
                        $slider = $widget.find('.jQWCP-wRed');break;
                    case 'g':
                        $slider = $widget.find('.jQWCP-wGreen');break;
                    case 'b':
                        $slider = $widget.find('.jQWCP-wBlue');break;
                    case 'a':
                        $slider = $widget.find('.jQWCP-wAlpha');break;
                    case 'p':
                        $slider = $widget.find('.jQWCP-wPreview');break;
                }

                if ($slider != null) {
                    $slider.appendTo(this.widget);
                    $slider.show().removeClass('hidden');
                }
            }

            // If widget is hidden, show it first so we can calculate dimensions correctly
            //var widgetIsHidden = false;
            //if($widget.is(':hidden')) {
            //widgetIsHidden = true;
            //$widget.css({ opacity: '0' }).show();
            //}

            // Adjust sliders height based on quality
            var sliderHeight = options.quality * 50;
            $widget.find('.jQWCP-slider').attr('height', sliderHeight);

            var $visElms = $widget.find('.jQWCP-wWheel, .jQWCP-slider-wrapper, .jQWCP-wPreview').not('.hidden');

            // Adjust container and sliders width
            // Only if not on mobile layout (force fixed on mobile)
            if (options.autoResize && !mobileLayout) {
                // Auto resize
                var width = 0;

                // Set slider size first, then adjust container
                $visElms.css({ width: '', height: '' });

                $visElms.each(function (index, item) {
                    var $item = $(item);
                    width += parseFloat($item.css('margin-left').replace('px', '')) + parseFloat($item.css('margin-right').replace('px', '')) + $item.outerWidth();
                });
                $widget.css({ width: width + 'px' });
            } else {
                // Fixed size

                // Set container size first, then adjust sliders
                $widget.css({ width: '' });

                var $visWheel = $widget.find('.jQWCP-wWheel').not('.hidden');
                var $visSliders = $widget.find('.jQWCP-slider-wrapper, .jQWCP-wPreview').not('.hidden');
                $visWheel.css({ height: $widget.height() + 'px', width: $widget.height() });
                if ($visWheel.length > 0) {
                    var horzSpace = $widget.width() - $visWheel.outerWidth() - parseFloat($visWheel.css('margin-left').replace('px', '')) - parseFloat($visWheel.css('margin-right').replace('px', ''));
                } else {
                    var horzSpace = $widget.width();
                }
                if ($visSliders.length > 0) {
                    var sliderMargins = parseFloat($visSliders.css('margin-left').replace('px', '')) + parseFloat($visSliders.css('margin-right').replace('px', ''));
                    $visSliders.css({ height: $widget.height() + 'px', width: (horzSpace - ($visSliders.length - 1) * sliderMargins) / $visSliders.length + 'px' });
                }
            }

            // Reset visibility
            //if(widgetIsHidden) {
            //$widget.css({ opacity: '' }).hide();
            //}

            return this; // Allows method chaining
        };

        /**
         * Function: redrawSliders
         * 
         * Introduced in 2.0
         * 
         * Redraw slider gradients. Hidden sliders are not redrawn as to 
         * improve performance. If options.live is FALSE, sliders are not redrawn.
         * 
         * Parameter:
         *   force   - Boolean force redraw all sliders.
         */
        WCP.ColorPicker.prototype.redrawSliders = function (force) {

            // Skip if widget not yet initialized
            if (this.widget == null) return this;

            var $widget = $(this.widget);

            // DEPRECATED 3.0
            // In 2.0, parameters are ( sliders, force )
            if (typeof arguments[0] === "string") {
                force = arguments[1];
            }

            // No need to redraw sliders on global popup widget if not 
            // attached to the input elm in current iteration
            if (this != $widget.data('jQWCP.instance')) return this;

            var options = this.options;
            var color = this.color;

            var w = 1;
            var h = options.quality * 50;

            var A = 1;
            var R = 0;
            var G = 0;
            var B = 0;
            var H = 0;
            var S = 0;
            var V = 1;

            // Dynamic colors
            if (options.live) {
                A = color.a;
                R = Math.round(color.r * 255);
                G = Math.round(color.g * 255);
                B = Math.round(color.b * 255);
                H = color.h;
                S = color.s;
                V = color.v;
            }

            /// PREVIEW ///
            // Preview box must always be redrawn, if not hidden
            var $previewBox = $widget.find('.jQWCP-wPreviewBox');
            if (!$previewBox.hasClass('hidden')) {
                var previewBoxCtx = $previewBox.get(0).getContext('2d');
                previewBoxCtx.fillStyle = "rgba(" + R + "," + G + "," + B + "," + A + ")";
                previewBoxCtx.clearRect(0, 0, 1, 1);
                previewBoxCtx.fillRect(0, 0, 1, 1);
            }

            /// SLIDERS ///
            if (!this.options.live && !force) return this;

            /// ALPHA ///
            // The top color is (R, G, B, 1)
            // The bottom color is (R, G, B, 0)
            var $alphaSlider = $widget.find('.jQWCP-wAlphaSlider');
            if (!$alphaSlider.hasClass('hidden') || force) {
                var alphaSliderCtx = $alphaSlider.get(0).getContext('2d');
                var alphaGradient = alphaSliderCtx.createLinearGradient(0, 0, 0, h);
                alphaGradient.addColorStop(0, "rgba(" + R + "," + G + "," + B + ",1)");
                alphaGradient.addColorStop(1, "rgba(" + R + "," + G + "," + B + ",0)");
                alphaSliderCtx.fillStyle = alphaGradient;
                alphaSliderCtx.clearRect(0, 0, w, h);
                alphaSliderCtx.fillRect(0, 0, w, h);
            }

            /// RED ///
            // The top color is (255, G, B)
            // The bottom color is (0, G, B)
            var $redSlider = $widget.find('.jQWCP-wRedSlider');
            if (!$redSlider.hasClass('hidden') || force) {
                var redSliderCtx = $redSlider.get(0).getContext('2d');
                var redGradient = redSliderCtx.createLinearGradient(0, 0, 0, h);
                redGradient.addColorStop(0, "rgb(255," + G + "," + B + ")");
                redGradient.addColorStop(1, "rgb(0," + G + "," + B + ")");
                redSliderCtx.fillStyle = redGradient;
                redSliderCtx.fillRect(0, 0, w, h);
            }

            /// GREEN ///
            // The top color is (R, 255, B)
            // The bottom color is (R, 0, B)
            var $greenSlider = $widget.find('.jQWCP-wGreenSlider');
            if (!$greenSlider.hasClass('hidden') || force) {
                var greenSliderCtx = $greenSlider.get(0).getContext('2d');
                var greenGradient = greenSliderCtx.createLinearGradient(0, 0, 0, h);
                greenGradient.addColorStop(0, "rgb(" + R + ",255," + B + ")");
                greenGradient.addColorStop(1, "rgb(" + R + ",0," + B + ")");
                greenSliderCtx.fillStyle = greenGradient;
                greenSliderCtx.fillRect(0, 0, w, h);
            }

            /// BLUE ///
            // The top color is (R, G, 255)
            // The bottom color is (R, G, 0)
            var $blueSlider = $widget.find('.jQWCP-wBlueSlider');
            if (!$blueSlider.hasClass('hidden') || force) {
                var blueSliderCtx = $blueSlider.get(0).getContext('2d');
                var blueGradient = blueSliderCtx.createLinearGradient(0, 0, 0, h);
                blueGradient.addColorStop(0, "rgb(" + R + "," + G + ",255)");
                blueGradient.addColorStop(1, "rgb(" + R + "," + G + ",0)");
                blueSliderCtx.fillStyle = blueGradient;
                blueSliderCtx.fillRect(0, 0, w, h);
            }

            /// HUE ///
            // The hue slider is static.
            var $hueSlider = $widget.find('.jQWCP-wHueSlider');
            if (!$hueSlider.hasClass('hidden') || force) {
                var hueSliderCtx = $hueSlider.get(0).getContext('2d');
                var hueGradient = hueSliderCtx.createLinearGradient(0, 0, 0, h);
                hueGradient.addColorStop(0, "#f00");
                hueGradient.addColorStop(0.166666667, "#ff0");
                hueGradient.addColorStop(0.333333333, "#0f0");
                hueGradient.addColorStop(0.5, "#0ff");
                hueGradient.addColorStop(0.666666667, "#00f");
                hueGradient.addColorStop(0.833333333, "#f0f");
                hueGradient.addColorStop(1, "#f00");
                hueSliderCtx.fillStyle = hueGradient;
                hueSliderCtx.fillRect(0, 0, w, h);
            }

            /// SAT ///
            // The top color is hsv(h, 1, v)
            // The bottom color is hsv(0, 0, v)
            var $satSlider = $widget.find('.jQWCP-wSatSlider');
            if (!$satSlider.hasClass('hidden') || force) {
                var satTopRgb = $.fn.wheelColorPicker.hsvToRgb(H, 1, V);
                satTopRgb.r = Math.round(satTopRgb.r * 255);
                satTopRgb.g = Math.round(satTopRgb.g * 255);
                satTopRgb.b = Math.round(satTopRgb.b * 255);
                var satSliderCtx = $satSlider.get(0).getContext('2d');
                var satGradient = satSliderCtx.createLinearGradient(0, 0, 0, h);
                satGradient.addColorStop(0, "rgb(" + satTopRgb.r + "," + satTopRgb.g + "," + satTopRgb.b + ")");
                satGradient.addColorStop(1, "rgb(" + Math.round(V * 255) + "," + Math.round(V * 255) + "," + Math.round(V * 255) + ")");
                satSliderCtx.fillStyle = satGradient;
                satSliderCtx.fillRect(0, 0, w, h);
            }

            /// VAL ///
            // The top color is hsv(h, s, 1)
            // The bottom color is always black.
            var $valSlider = $widget.find('.jQWCP-wValSlider');
            if (!$valSlider.hasClass('hidden') || force) {
                var valTopRgb = $.fn.wheelColorPicker.hsvToRgb(H, S, 1);
                valTopRgb.r = Math.round(valTopRgb.r * 255);
                valTopRgb.g = Math.round(valTopRgb.g * 255);
                valTopRgb.b = Math.round(valTopRgb.b * 255);
                var valSliderCtx = $valSlider.get(0).getContext('2d');
                var valGradient = valSliderCtx.createLinearGradient(0, 0, 0, h);
                valGradient.addColorStop(0, "rgb(" + valTopRgb.r + "," + valTopRgb.g + "," + valTopRgb.b + ")");
                valGradient.addColorStop(1, "#000");
                valSliderCtx.fillStyle = valGradient;
                valSliderCtx.fillRect(0, 0, w, h);
            }

            return this; // Allows method chaining
        };

        /**
         * Function: updateSliders
         * 
         * Introduced in 2.0
         * 
         * Update slider cursor positions based on this.color value. 
         * Only displayed sliders are updated.
         */
        WCP.ColorPicker.prototype.updateSliders = function () {

            // Skip if not yet initialized
            if (this.widget == null) return this;

            var $widget = $(this.widget);
            var color = this.color;

            // No need to redraw sliders on global popup widget if not 
            // attached to the input elm in current iteration
            if (this != $widget.data('jQWCP.instance')) return this;

            // Wheel
            var $wheel = $widget.find('.jQWCP-wWheel');
            if (!$wheel.hasClass('hidden')) {
                var $wheelCursor = $widget.find('.jQWCP-wWheelCursor');
                var $wheelOverlay = $widget.find('.jQWCP-wWheelOverlay');
                var wheelX = Math.cos(2 * Math.PI * color.h) * color.s;
                var wheelY = Math.sin(2 * Math.PI * color.h) * color.s;
                var wheelOffsetX = $wheel.width() / 2;
                var wheelOffsetY = $wheel.height() / 2;
                $wheelCursor.css('left', wheelOffsetX + wheelX * $wheel.width() / 2 + 'px');
                $wheelCursor.css('top', wheelOffsetY - wheelY * $wheel.height() / 2 + 'px');
                // Keep shading to 1 if preserveWheel is true (DEPRECATED) or live is true
                if (this.options.preserveWheel == true || this.options.preserveWheel == null && this.options.live == false) {
                    $wheelOverlay.css('opacity', 0);
                } else {
                    $wheelOverlay.css('opacity', 1 - (color.v < 0.2 ? 0.2 : color.v));
                }
            }

            // Hue
            var $hueSlider = $widget.find('.jQWCP-wHueSlider');
            if (!$hueSlider.hasClass('hidden')) {
                var $hueCursor = $widget.find('.jQWCP-wHueCursor');
                $hueCursor.css('top', color.h * $hueSlider.height() + 'px');
            }

            // Saturation
            var $satSlider = $widget.find('.jQWCP-wSatSlider');
            if (!$satSlider.hasClass('hidden')) {
                var $satCursor = $widget.find('.jQWCP-wSatCursor');
                $satCursor.css('top', (1 - color.s) * $satSlider.height() + 'px');
            }

            // Value
            var $valSlider = $widget.find('.jQWCP-wValSlider');
            if (!$valSlider.hasClass('hidden')) {
                var $valCursor = $widget.find('.jQWCP-wValCursor');
                $valCursor.css('top', (1 - color.v) * $valSlider.height() + 'px');
            }

            // Red
            var $redSlider = $widget.find('.jQWCP-wRedSlider');
            if (!$redSlider.hasClass('hidden')) {
                var $redCursor = $widget.find('.jQWCP-wRedCursor');
                $redCursor.css('top', (1 - color.r) * $redSlider.height() + 'px');
            }

            // Green
            var $greenSlider = $widget.find('.jQWCP-wGreenSlider');
            if (!$greenSlider.hasClass('hidden')) {
                var $greenCursor = $widget.find('.jQWCP-wGreenCursor');
                $greenCursor.css('top', (1 - color.g) * $greenSlider.height() + 'px');
            }

            // Blue
            var $blueSlider = $widget.find('.jQWCP-wBlueSlider');
            if (!$blueSlider.hasClass('hidden')) {
                var $blueCursor = $widget.find('.jQWCP-wBlueCursor');
                $blueCursor.css('top', (1 - color.b) * $blueSlider.height() + 'px');
            }

            // Alpha
            var $alphaSlider = $widget.find('.jQWCP-wAlphaSlider');
            if (!$alphaSlider.hasClass('hidden')) {
                var $alphaCursor = $widget.find('.jQWCP-wAlphaCursor');
                $alphaCursor.css('top', (1 - color.a) * $alphaSlider.height() + 'px');
            }

            return this; // Allows method chaining
        };

        /**
         * Function: updateSelection
         * 
         * DEPRECATED by 2.0
         * 
         * Update color dialog selection to match current selectedColor value.
         */
        WCP.ColorPicker.prototype.updateSelection = function () {
            this.redrawSliders();
            this.updateSliders();
            return this;
        };

        /**
         * Function: updateInput
         * 
         * Since 3.0
         * 
         * Update input value and background color (if preview is on)
         */
        WCP.ColorPicker.prototype.updateInput = function () {
            // Skip if not yet initialized
            if (this.widget == null) return this;

            var $input = $(this.input);

            // #13 only update if value is different to avoid cursor repositioned to the end of text on some browsers
            if (this.input.value != this.getValue()) {
                this.input.value = this.getValue();
            }

            if (this.options.preview) {
                $input.css('background', WCP.colorToStr(this.color, 'rgba'));
                if (this.color.v > .5) {
                    $input.css('color', 'black');
                } else {
                    $input.css('color', 'white');
                }
            }
        };

        /**
         * Function: updateActiveControl
         * 
         * Move the active control.
         */
        WCP.ColorPicker.prototype.updateActiveControl = function (e) {
            var $control = $($('body').data('jQWCP.activeControl')); // Refers to slider wrapper

            if ($control.length == 0) return;

            var $input = $(this.input);
            var options = this.options;
            var color = this.color;

            // pageX and pageY wrapper for touches
            if (e.pageX == undefined && e.originalEvent.touches.length > 0) {
                e.pageX = e.originalEvent.touches[0].pageX;
                e.pageY = e.originalEvent.touches[0].pageY;
            }
            //$('#log').html(e.pageX + '/' + e.pageY);

            /// WHEEL CONTROL ///
            if ($control.hasClass('jQWCP-wWheel')) {
                var $cursor = $control.find('.jQWCP-wWheelCursor');
                var $overlay = $control.find('.jQWCP-wWheelOverlay');

                var relX = (e.pageX - $control.offset().left - $control.width() / 2) / ($control.width() / 2);
                var relY = -(e.pageY - $control.offset().top - $control.height() / 2) / ($control.height() / 2);

                // BUG_RELATIVE_PAGE_ORIGIN workaround
                if (WCP.BUG_RELATIVE_PAGE_ORIGIN) {
                    var relX = (e.pageX - ($control.get(0).getBoundingClientRect().left - WCP.ORIGIN.left) - $control.width() / 2) / ($control.width() / 2);
                    var relY = -(e.pageY - ($control.get(0).getBoundingClientRect().top - WCP.ORIGIN.top) - $control.height() / 2) / ($control.height() / 2);
                }

                //console.log(relX + ' ' + relY);

                // Sat value is calculated from the distance of the cursor from the central point
                var sat = Math.sqrt(Math.pow(relX, 2) + Math.pow(relY, 2));
                // If distance is out of bound, reset to the upper bound
                if (sat > 1) {
                    sat = 1;
                }

                // Snap to 0,0
                if (options.snap && sat < options.snapTolerance) {
                    sat = 0;
                }

                // Hue is calculated from the angle of the cursor. 0deg is set to the right, and increase counter-clockwise.
                var hue = relX == 0 && relY == 0 ? 0 : Math.atan(relY / relX) / (2 * Math.PI);
                // If hue is negative, then fix the angle value (meaning angle is in either Q2 or Q4)
                if (hue < 0) {
                    hue += 0.5;
                }
                // If y is negative, then fix the angle value (meaning angle is in either Q3 or Q4)
                if (relY < 0) {
                    hue += 0.5;
                }

                this.setHsv(hue, sat, color.v);
            }

            /// SLIDER CONTROL ///
            else if ($control.hasClass('jQWCP-slider-wrapper')) {
                    var $cursor = $control.find('.jQWCP-scursor');

                    var relY = (e.pageY - $control.offset().top) / $control.height();

                    // BUG_RELATIVE_PAGE_ORIGIN workaround
                    if (WCP.BUG_RELATIVE_PAGE_ORIGIN) {
                        var relY = (e.pageY - ($control.get(0).getBoundingClientRect().top - WCP.ORIGIN.top)) / $control.height();
                    }

                    var value = relY < 0 ? 0 : relY > 1 ? 1 : relY;

                    // Snap to 0.0, 0.5, and 1.0
                    //console.log(value);
                    if (options.snap && value < options.snapTolerance) {
                        value = 0;
                    } else if (options.snap && value > 1 - options.snapTolerance) {
                        value = 1;
                    }
                    if (options.snap && value > 0.5 - options.snapTolerance && value < 0.5 + options.snapTolerance) {
                        value = 0.5;
                    }

                    $cursor.css('top', value * $control.height() + 'px');

                    /// Update color value ///
                    // Red
                    if ($control.hasClass('jQWCP-wRed')) {
                        this.setRgb(1 - value, color.g, color.b);
                    }
                    // Green
                    if ($control.hasClass('jQWCP-wGreen')) {
                        this.setRgb(color.r, 1 - value, color.b);
                    }
                    // Blue
                    if ($control.hasClass('jQWCP-wBlue')) {
                        this.setRgb(color.r, color.g, 1 - value);
                    }
                    // Hue
                    if ($control.hasClass('jQWCP-wHue')) {
                        this.setHsv(value, color.s, color.v);
                    }
                    // Saturation
                    if ($control.hasClass('jQWCP-wSat')) {
                        this.setHsv(color.h, 1 - value, color.v);
                    }
                    // Value
                    if ($control.hasClass('jQWCP-wVal')) {
                        this.setHsv(color.h, color.s, 1 - value);
                    }
                    // Alpha
                    if ($control.hasClass('jQWCP-wAlpha')) {
                        this.setAlpha(1 - value);
                    }
                }
        };

        /**
         * Function: getColor
         * 
         * Since 2.0
         * 
         * Return color components as an object. The object consists of:
         * { 
         *   r: red
         *   g: green
         *   b: blue
         *   h: hue
         *   s: saturation
         *   v: value
         *   a: alpha
         * }
         */
        WCP.ColorPicker.prototype.getColor = function () {
            return this.color;
        };

        /**
         * Function: getValue
         * 
         * Get the color value as string.
         */
        WCP.ColorPicker.prototype.getValue = function (format) {
            var options = this.options;

            if (format == null) {
                format = options.format;
            }

            // If settings.rounding is TRUE, round alpha value to N decimal digits
            if (options.rounding >= 0) {
                this.color.a = Math.round(this.color.a * Math.pow(10, options.rounding)) / Math.pow(10, options.rounding);
            }
            return WCP.colorToStr(this.color, format);
        };

        /**
         * Function: setValue
         * 
         * Set the color value as string.
         * 
         * Parameters:
         *   value       - <string> String representation of color.
         *   updateInput - <boolean> Whether to update input text. Default is true.
         */
        WCP.ColorPicker.prototype.setValue = function (value, updateInput) {
            var color = WCP.strToColor(value);
            if (!color) return this;

            return this.setColor(color, updateInput);
        };

        /**
         * Function: setColor
         * 
         * Introduced in 2.0
         * 
         * Set color by passing an object consisting of:
         * { r, g, b, a } or
         * { h, s, v, a }
         * 
         * For consistency with options.color value, this function also 
         * accepts string value.
         * 
         * Parameters:
         *   color       - <object> Color object or string representation of color.
         *   updateInput - <boolean> Whether to update input text. Default is true.
         */
        WCP.ColorPicker.prototype.setColor = function (color, updateInput) {
            if (typeof color === "string") {
                return this.setValue(color, updateInput);
            } else if (color.r != null) {
                return this.setRgba(color.r, color.g, color.b, color.a, updateInput);
            } else if (color.h != null) {
                return this.setHsva(color.h, color.s, color.v, color.a, updateInput);
            } else if (color.a != null) {
                return this.setAlpha(color.a, updateInput);
            }
            return this;
        };

        /**
         * Function: setRgba
         * 
         * Introduced in 2.0
         * 
         * Set color using RGBA combination.
         * 
         * Parameters:
         *   r           - <number> Red component [0..1]
         *   g           - <number> Green component [0..1]
         *   b           - <number> Blue component [0..1]
         *   a           - <number> Alpha value [0..1]
         *   updateInput - <boolean> Whether to update input text. Default is true.
         */
        WCP.ColorPicker.prototype.setRgba = function (r, g, b, a, updateInput) {
            // Default value
            if (updateInput === undefined) updateInput = true;

            var color = this.color;
            color.r = r;
            color.g = g;
            color.b = b;

            if (a != null) {
                color.a = a;
            }

            var hsv = WCP.rgbToHsv(r, g, b);
            color.h = hsv.h;
            color.s = hsv.s;
            color.v = hsv.v;

            this.updateSliders();
            this.redrawSliders();
            if (updateInput) {
                this.updateInput();
            }
            return this;
        };

        /**
         * Function: setRgb
         * 
         * Introduced in 2.0
         * 
         * Set color using RGB combination.
         * 
         * Parameters:
         *   r           - <number> Red component [0..1]
         *   g           - <number> Green component [0..1]
         *   b           - <number> Blue component [0..1]
         *   updateInput - <boolean> Whether to update input text.
         */
        WCP.ColorPicker.prototype.setRgb = function (r, g, b, updateInput) {
            return this.setRgba(r, g, b, null, updateInput);
        };

        /**
         * Function: setHsva
         * 
         * Introduced in 2.0
         * 
         * Set color using HSVA combination.
         * 
         * Parameters:
         *   h           - <number> Hue component [0..1]
         *   s           - <number> Saturation component [0..1]
         *   v           - <number> Value component [0..1]
         *   a           - <number> Alpha value [0..1]
         *   updateInput - <boolean> Whether to update input text. Default is true.
         */
        WCP.ColorPicker.prototype.setHsva = function (h, s, v, a, updateInput) {
            // Default value
            if (updateInput === undefined) updateInput = true;

            var color = this.color;
            color.h = h;
            color.s = s;
            color.v = v;

            if (a != null) {
                color.a = a;
            }

            var rgb = WCP.hsvToRgb(h, s, v);
            color.r = rgb.r;
            color.g = rgb.g;
            color.b = rgb.b;

            this.updateSliders();
            this.redrawSliders();
            if (updateInput) {
                this.updateInput();
            }
            return this;
        };

        /**
         * Function: setHsv
         * 
         * Introduced in 2.0
         * 
         * Set color using HSV combination.
         * 
         * Parameters:
         *   h           - <number> Hue component [0..1]
         *   s           - <number> Saturation component [0..1]
         *   v           - <number> Value component [0..1]
         *   updateInput - <boolean> Whether to update input text.
         */
        WCP.ColorPicker.prototype.setHsv = function (h, s, v, updateInput) {
            return this.setHsva(h, s, v, null, updateInput);
        };

        /**
         * Function: setAlpha
         * 
         * Introduced in 2.0
         * 
         * Set alpha value.
         * 
         * Parameters:
         *   value       - <number> Alpha value [0..1]
         *   updateInput - <boolean> Whether to update input text. Default is true.
         */
        WCP.ColorPicker.prototype.setAlpha = function (value, updateInput) {
            // Default value
            if (updateInput === undefined) updateInput = true;

            this.color.a = value;

            this.updateSliders();
            this.redrawSliders();
            if (updateInput) {
                this.updateInput();
            }
            return this;
        };

        /**
         * Function: show
         * 
         * Show the color picker dialog. This function is only applicable to 
         * popup mode color picker layout.
         */
        WCP.ColorPicker.prototype.show = function () {
            var input = this.input;
            var $input = $(input); // Refers to input elm
            var $widget = $(this.widget);
            var options = this.options;

            // Don't do anything if not using popup layout
            if (options.layout != "popup") return;

            // Don't do anything if the popup is already shown and attached 
            // to the correct input elm
            //if( this == $widget.data('jQWCP.instance') )
            //return;

            // Attach instance to widget (because popup widget is global)
            $widget.data('jQWCP.instance', this);

            // Terminate ongoing transitions
            $widget.stop(true, true);

            // Reposition the popup window
            $widget.css({
                top: input.getBoundingClientRect().top - WCP.ORIGIN.top + $input.outerHeight() + 'px',
                left: input.getBoundingClientRect().left - WCP.ORIGIN.left + 'px'
            });

            // Refresh widget with this instance's options
            this.refreshWidget();

            // Redraw sliders
            this.redrawSliders();
            this.updateSliders();

            // Store last textfield value (to determine whether to trigger onchange event later)
            this.lastValue = input.value;

            $widget.fadeIn(options.animDuration);

            // If hideKeyboard is true, force to hide soft keyboard
            if (options.hideKeyboard) {
                $input.blur();
                $(WCP.ColorPicker.overlay).show();
            }

            // On mobile layout, autoscroll page to keep input visible
            if ($widget.hasClass('jQWCP-mobile')) {
                var scrollTop = $('html').scrollTop();
                var inputTop = input.getBoundingClientRect().top - WCP.ORIGIN.top;

                // If input is way too top
                if (inputTop < scrollTop) {
                    $('html').animate({ scrollTop: inputTop });
                }

                // If input is way too bottom
                else if (inputTop + $input.outerHeight() > scrollTop + window.innerHeight - $widget.outerHeight()) {
                        $('html').animate({ scrollTop: inputTop + $input.outerHeight() - window.innerHeight + $widget.outerHeight() });
                    }
            }
        };

        /**
         * Function: hide
         * 
         * Hide the color picker dialog. This function is only applicable to 
         * popup mode color picker layout.
         */
        WCP.ColorPicker.prototype.hide = function () {
            var $widget = $(this.widget);

            // Only hide if popup belongs to this instance
            if (this != $widget.data('jQWCP.instance')) return;

            $widget.fadeOut(this.options.animDuration);
            $(WCP.ColorPicker.overlay).hide();
        };

        ////////////////////
        // Event Handlers //
        ////////////////////

        WCP.Handler = {};

        /**
         * input.onFocus.popup
         */
        WCP.Handler.input_focus_popup = function (e) {
            var instance = $(this).data('jQWCP.instance');
            instance.show();

            // Workaround to prevent on screen keyboard from appearing
            if ($(this).attr('readonly') == null) {
                $(this).attr('readonly', true);
                setTimeout(function () {
                    $(instance.input).removeAttr('readonly');
                });

                // Firefox on Android
                if (navigator.userAgent.match(/Android .* Firefox/) != null) {
                    setTimeout(function () {
                        $(instance.input).attr('readonly', true);
                        $(instance.input).one('blur', function () {
                            $(instance.input).removeAttr('readonly');
                        });
                    });
                }
            }
        };

        /**
         * input.onBlur.popup
         * 
         * onBlur event handler for popup layout.
         */
        WCP.Handler.input_blur_popup = function (e) {
            var instance = $(this).data('jQWCP.instance');

            // If keyboard is hidden, input is always blurred so 
            // no point in hiding
            if (instance.options.hideKeyboard) return;

            instance.hide();

            // Trigger 'change' event only when it was modified by widget
            // because user typing on the textfield will automatically
            // trigger 'change' event on blur.
            if (instance.lastValue != this.value) {
                $(this).trigger('change');
            }
        };

        /**
         * input.onKeyUp
         * 
         * Update the color picker while user type in color value.
         */
        WCP.Handler.input_keyup = function (e) {
            var instance = $(this).data('jQWCP.instance');
            var color = WCP.strToColor(this.value);
            if (color) {
                instance.setColor(color, false);
            }
        };

        /**
         * input.onChange
         * 
         * Reformat the input value based on selected color and configurations.
         */
        WCP.Handler.input_change = function (e) {
            var instance = $(this).data('jQWCP.instance');
            var color = WCP.strToColor(this.value);

            // If autoFormat option is enabled, try to reformat the value if it is a valid color
            if (instance.options.autoFormat && color) {
                instance.setColor(color, true);
            }

            // If validate option is enabled, revert the value if it is not a valid color
            else if (instance.options.validate && !color && this.value != '') {
                    this.value = instance.getValue();
                }
        };

        /**
         * widget.onFocus.block
         * 
         * Prepare runtime widget data
         */
        WCP.Handler.widget_focus_block = function (e) {
            var instance = $(this).data('jQWCP.instance');
            var $input = $(instance.input);

            // Store last textfield value
            instance.lastValue = instance.input.value;

            // Trigger focus event
            $input.triggerHandler('focus');
        };

        /**
         * widget.onMouseDown.popup
         * 
         * Prevent loss focus of the input causing the dialog to be hidden
         * because of input blur event.
         */
        WCP.Handler.widget_mousedown_popup = function (e) {
            var instance = $(this).data('jQWCP.instance');
            var $input = $(instance.input);

            // Temporarily unbind blur and focus event until mouse is released
            $input.off('focus.wheelColorPicker');
            $input.off('blur.wheelColorPicker');

            // Temporarily unbind all blur events until mouse is released
            // data('events') is deprecated since jquery 1.8
            if ($input.data('events') != undefined) {
                var blurEvents = $input.data('events').blur;
            } else {
                var blurEvents = undefined;
            }
            var suspendedEvents = { blur: [] };
            //suspendedEvents.blur = blurEvents;
            //$input.off('blur');
            if (blurEvents != undefined) {
                for (var i = 0; i < blurEvents.length; i++) {
                    suspendedEvents.blur.push(blurEvents[i]);
                    //suspendedEvents.blur['blur' + (blurEvents[i].namespace != '' ? blurEvents[i].namespace : '')] = blurEvents[i].handler;
                }
            }
            $input.data('jQWCP.suspendedEvents', suspendedEvents);
            //console.log(blurEvents);
            //console.log($input.data('jQWCP.suspendedEvents'));
        };

        /**
         * widget.onMouseUp
         * 
         * Re-bind events that was unbound by widget_mousedown_popup.
         */
        /*WCP.Handler.widget_mouseup_popup = function( e ) {
        	var instance = $(this).data('jQWCP.instance');
        	var $input = $(instance.input);
        	
        	 //Input elm must always be focused, unless hideKeyboard is set to true
        	if(!instance.options.hideKeyboard) {
        		$input.trigger('focus.jQWCP_DONT_TRIGGER_EVENTS'); // This allow input to be focused without triggering events
        	}
        	
        	 //Rebind blur & focusevent
        	$input.on('focus.wheelColorPicker', WCP.Handler.input_focus_popup);
        	$input.on('blur.wheelColorPicker', WCP.Handler.input_blur_popup);
        	
        };*/

        /**
         * widget.onBlur
         * 
         * Try to trigger onChange event if value has been changed.
         */
        WCP.Handler.widget_blur_block = function (e) {
            var instance = $(this).data('jQWCP.instance');
            var $input = $(instance.input);

            // Trigger 'change' event only when it was modified by widget
            // because user typing on the textfield will automatically
            // trigger 'change' event on blur.
            if (instance.lastValue != instance.input.value) {
                $input.trigger('change');
            }

            // Trigger blur event
            $input.triggerHandler('blur');
        };

        /**
         * wheelCursor.onMouseDown
         * 
         * Begin clicking the wheel down. This will allow user to move 
         * the crosshair although the mouse is outside the wheel.
         */
        WCP.Handler.wheelCursor_mousedown = function (e) {
            var $this = $(this); // Refers to cursor
            var $widget = $this.closest('.jQWCP-wWidget');
            var instance = $widget.data('jQWCP.instance');
            var $input = $(instance.input);

            $('body').data('jQWCP.activeControl', $this.parent().get(0));

            // Trigger sliderdown event
            $input.trigger('sliderdown');
        };

        /**
         * wheel.onMouseDown
         * 
         * Begin clicking the wheel down. This will allow user to move 
         * the crosshair although the mouse is outside the wheel.
         * 
         * Basically this is the same as wheelCursor_mousedown handler
         */
        WCP.Handler.wheel_mousedown = function (e) {
            var $this = $(this); // Refers to wheel
            var $widget = $this.closest('.jQWCP-wWidget');
            var instance = $widget.data('jQWCP.instance');
            var $input = $(instance.input);

            $('body').data('jQWCP.activeControl', $this.get(0));

            // Trigger sliderdown event
            $input.trigger('sliderdown');
        };

        /**
         * slider.onMouseDown
         * 
         * Begin clicking the slider down. This will allow user to move 
         * the slider although the mouse is outside the slider.
         */
        WCP.Handler.slider_mousedown = function (e) {
            var $this = $(this); // Refers to slider
            var $widget = $this.closest('.jQWCP-wWidget');
            var instance = $widget.data('jQWCP.instance');
            var $input = $(instance.input);

            $('body').data('jQWCP.activeControl', $this.parent().get(0));

            // Trigger sliderdown event
            $input.trigger('sliderdown');
        };

        /**
         * sliderCursor.onMouseDown
         * 
         * Begin clicking the slider down. This will allow user to move 
         * the slider although the mouse is outside the slider.
         */
        WCP.Handler.sliderCursor_mousedown = function (e) {
            var $this = $(this); // Refers to slider cursor
            var $widget = $this.closest('.jQWCP-wWidget');
            var instance = $widget.data('jQWCP.instance');
            var $input = $(instance.input);

            $('body').data('jQWCP.activeControl', $this.parent().get(0));

            // Trigger sliderdown event
            $input.trigger('sliderdown');
        };

        /**
         * html.onMouseUp
         * 
         * Clear active control reference.
         * Also do cleanups after widget.onMouseDown.popup
         * 
         * Note: This event handler is also applied to touchend
         */
        WCP.Handler.html_mouseup = function (e) {
            var $control = $($('body').data('jQWCP.activeControl')); // Refers to slider wrapper or wheel

            // Do stuffs when there's active control
            if ($control.length == 0) return;

            var $widget = $control.closest('.jQWCP-wWidget');
            var instance = $widget.data('jQWCP.instance');
            var $input = $(instance.input);

            // Rebind blur and focus event to input elm which was 
            // temporarily released when popup dialog is shown
            if (instance.options.layout == 'popup') {
                // Focus first before binding event so it wont get fired
                // Input elm must always be focused, unless hideKeyboard is set to true
                if (!instance.options.hideKeyboard) {
                    $input.trigger('focus.jQWCP_DONT_TRIGGER_EVENTS'); // This allow input to be focused without triggering events
                }

                // Rebind blur & focusevent
                $input.on('focus.wheelColorPicker', WCP.Handler.input_focus_popup);
                $input.on('blur.wheelColorPicker', WCP.Handler.input_blur_popup);

                // Rebind suspended events
                var suspendedEvents = $input.data('jQWCP.suspendedEvents');
                if (suspendedEvents != undefined) {
                    var blurEvents = suspendedEvents.blur;
                    for (var i = 0; i < blurEvents.length; i++) {
                        $input.on('blur' + (blurEvents[i].namespace == '' ? '' : '.' + blurEvents[i].namespace), blurEvents[i].handler);
                    }
                }
            }

            // Update active control
            if ($control.length != 0) {
                // Last time update active control before clearing
                // Only call this function if mouse position is known
                // On touch action, touch point is not available
                if (e.pageX != undefined) {
                    instance.updateActiveControl(e);
                }

                // Clear active control reference
                $('body').data('jQWCP.activeControl', null);

                // Trigger sliderup event
                $input.trigger('sliderup');
            }
        };

        /**
         * html.onMouseMove
         * 
         * Move the active slider (when mouse click is down).
         * 
         * Note: This event handler is also applied to touchmove
         */
        WCP.Handler.html_mousemove = function (e) {
            var $control = $($('body').data('jQWCP.activeControl')); // Refers to slider wrapper or wheel

            // Do stuffs when there's active control
            if ($control.length == 0) return;

            // If active, prevent default
            e.preventDefault();

            var $widget = $control.closest('.jQWCP-wWidget');
            var instance = $widget.data('jQWCP.instance');
            var $input = $(instance.input);

            instance.updateActiveControl(e);

            // Trigger slidermove event
            $input.trigger('slidermove');

            return false;
        };

        /**
         * window.onResize
         * 
         * Adjust block widgets
         */
        WCP.Handler.window_resize = function (e) {
            var $widgets = $('body .jQWCP-wWidget.jQWCP-block');

            $widgets.each(function () {
                var instance = $(this).data('jQWCP.instance');
                instance.refreshWidget();
                instance.redrawSliders();
            });
        };

        /**
         * overlay.onClick
         * 
         * Hide colorpicker popup dialog if overlay is clicked.
         * This has the same effect as blurring input element if hideKeyboard = false.
         */
        WCP.Handler.overlay_click = function (e) {
            if (WCP.ColorPicker.widget == null) return;

            var $widget = $(WCP.ColorPicker.widget);
            var instance = $widget.data('jQWCP.instance');

            // If no instance set, do nothing
            if (instance != null) {
                var $input = $(instance.input);

                // Trigger 'change' event only when it was modified by widget
                // because user typing on the textfield will automatically
                // trigger 'change' event on blur.
                if (instance.lastValue != instance.input.value) {
                    $input.trigger('change');
                }

                instance.hide();
            }
        };

        /******************************************************************/

        ////////////////////////////////////////////////////////
        // Automatically initialize color picker on page load //
        // for elements with data-wheelcolorpicker attribute. //
        ////////////////////////////////////////////////////////

        $(document).ready(function () {
            $('[data-wheelcolorpicker]').wheelColorPicker({ htmlOptions: true });
        });

        /******************************************************************/

        //////////////////////////////////
        // Browser specific workarounds //
        //////////////////////////////////

        (function () {
            // MOZILLA //

            // Force low resolution slider canvases to improve performance
            // Note: Do not rely on $.browser since it's obsolete by jQuery 2.x
            if ($.browser != undefined && $.browser.mozilla) {
                $.fn.wheelColorPicker.defaults.quality = 0.2;
            }

            // MOBILE CHROME //

            // BUG_RELATIVE_PAGE_ORIGIN
            // Calibrate the coordinate of top left point of the page
            // On mobile chrome, the top left of the page is not always set at (0,0)
            // making window.scrollX/Y and $.offset() useless
            $(document).ready(function () {
                $('body').append('<div id="jQWCP-PageOrigin" style="position: absolute; top: 0; left: 0; height: 0; width: 0;"></div>');

                var origin = document.getElementById('jQWCP-PageOrigin').getBoundingClientRect();
                WCP.ORIGIN = origin;

                $(window).on('scroll.jQWCP_RelativePageOriginBugFix', function () {
                    var origin = document.getElementById('jQWCP-PageOrigin').getBoundingClientRect();
                    WCP.ORIGIN = origin;
                    if (origin.left != 0 || origin.top != 0) {
                        WCP.BUG_RELATIVE_PAGE_ORIGIN = true;
                    }
                });
            });
        })();
    })(jQuery);
});