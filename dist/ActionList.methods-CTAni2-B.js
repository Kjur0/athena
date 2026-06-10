import { jsx as d } from "react/jsx-runtime";
import * as a from "react";
import { useState as Ht } from "react";
import { P as k, a as C, c as qe, e as Xt, u as Yt } from "./index-BjfsKMCT.js";
import { u as X, c as Ie } from "./index-DLcqcWxM.js";
import { c as Qe, I as zt, a as Zt, u as qt, R as Qt } from "./index-DcQzjOqd.js";
import { c as Je, R as Jt, A as en, P as tn, D as nn, C as rn, a as on } from "./index-DX4wqrZV.js";
import { u as ue, a as Ge } from "./index-CVgaMPSv.js";
import { P as de } from "./index-Bxhh615u.js";
import { c as et } from "./utils-BtlgVD4m.js";
var ye = 0;
function an() {
  a.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Be()), document.body.insertAdjacentElement("beforeend", e[1] ?? Be()), ye++, () => {
      ye === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ye--;
    };
  }, []);
}
function Be() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Me = "focusScope.autoFocusOnMount", Ce = "focusScope.autoFocusOnUnmount", Ue = { bubbles: !1, cancelable: !0 }, cn = "FocusScope", tt = a.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: c,
    ...s
  } = e, [i, m] = a.useState(null), v = ue(o), f = ue(c), u = a.useRef(null), p = X(t, (l) => m(l)), w = a.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  a.useEffect(() => {
    if (r) {
      let l = function(b) {
        if (w.paused || !i) return;
        const S = b.target;
        i.contains(S) ? u.current = S : T(u.current, { select: !0 });
      }, g = function(b) {
        if (w.paused || !i) return;
        const S = b.relatedTarget;
        S !== null && (i.contains(S) || T(u.current, { select: !0 }));
      }, y = function(b) {
        if (document.activeElement === document.body)
          for (const R of b)
            R.removedNodes.length > 0 && T(i);
      };
      document.addEventListener("focusin", l), document.addEventListener("focusout", g);
      const E = new MutationObserver(y);
      return i && E.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", l), document.removeEventListener("focusout", g), E.disconnect();
      };
    }
  }, [r, i, w.paused]), a.useEffect(() => {
    if (i) {
      Ve.add(w);
      const l = document.activeElement;
      if (!i.contains(l)) {
        const y = new CustomEvent(Me, Ue);
        i.addEventListener(Me, v), i.dispatchEvent(y), y.defaultPrevented || (un(pn(nt(i)), { select: !0 }), document.activeElement === l && T(i));
      }
      return () => {
        i.removeEventListener(Me, v), setTimeout(() => {
          const y = new CustomEvent(Ce, Ue);
          i.addEventListener(Ce, f), i.dispatchEvent(y), y.defaultPrevented || T(l ?? document.body, { select: !0 }), i.removeEventListener(Ce, f), Ve.remove(w);
        }, 0);
      };
    }
  }, [i, v, f, w]);
  const M = a.useCallback(
    (l) => {
      if (!n && !r || w.paused) return;
      const g = l.key === "Tab" && !l.altKey && !l.ctrlKey && !l.metaKey, y = document.activeElement;
      if (g && y) {
        const E = l.currentTarget, [b, S] = sn(E);
        b && S ? !l.shiftKey && y === S ? (l.preventDefault(), n && T(b, { select: !0 })) : l.shiftKey && y === b && (l.preventDefault(), n && T(S, { select: !0 })) : y === E && l.preventDefault();
      }
    },
    [n, r, w.paused]
  );
  return /* @__PURE__ */ d(k.div, { tabIndex: -1, ...s, ref: p, onKeyDown: M });
});
tt.displayName = cn;
function un(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (T(r, { select: t }), document.activeElement !== n) return;
}
function sn(e) {
  const t = nt(e), n = We(t, e), r = We(t.reverse(), e);
  return [n, r];
}
function nt(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function We(e, t) {
  for (const n of e)
    if (!ln(n, { upTo: t })) return n;
}
function ln(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function dn(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function T(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && dn(e) && t && e.select();
  }
}
var Ve = fn();
function fn() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = $e(e, t), e.unshift(t);
    },
    remove(t) {
      e = $e(e, t), e[0]?.resume();
    }
  };
}
function $e(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function pn(e) {
  return e.filter((t) => t.tagName !== "A");
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
  const t = /* @__PURE__ */ mn(e), n = a.forwardRef((r, o) => {
    const { children: c, ...s } = r, i = a.Children.toArray(c), m = i.find(gn);
    if (m) {
      const v = m.props.children, f = i.map((u) => u === m ? a.Children.count(v) > 1 ? a.Children.only(null) : a.isValidElement(v) ? v.props.children : null : u);
      return /* @__PURE__ */ d(t, { ...s, ref: o, children: a.isValidElement(v) ? a.cloneElement(v, void 0, f) : null });
    }
    return /* @__PURE__ */ d(t, { ...s, ref: o, children: c });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function mn(e) {
  const t = a.forwardRef((n, r) => {
    const { children: o, ...c } = n;
    if (a.isValidElement(o)) {
      const s = yn(o), i = wn(c, o.props);
      return o.type !== a.Fragment && (i.ref = r ? Ie(r, s) : s), a.cloneElement(o, i);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var hn = /* @__PURE__ */ Symbol("radix.slottable");
function gn(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === hn;
}
function wn(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], c = t[r];
    /^on[A-Z]/.test(r) ? o && c ? n[r] = (...i) => {
      const m = c(...i);
      return o(...i), m;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...c } : r === "className" && (n[r] = [o, c].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function yn(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Mn = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, V = /* @__PURE__ */ new WeakMap(), ne = /* @__PURE__ */ new WeakMap(), re = {}, Ee = 0, rt = function(e) {
  return e && (e.host || rt(e.parentNode));
}, Cn = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = rt(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, En = function(e, t, n, r) {
  var o = Cn(t, Array.isArray(e) ? e : [e]);
  re[n] || (re[n] = /* @__PURE__ */ new WeakMap());
  var c = re[n], s = [], i = /* @__PURE__ */ new Set(), m = new Set(o), v = function(u) {
    !u || i.has(u) || (i.add(u), v(u.parentNode));
  };
  o.forEach(v);
  var f = function(u) {
    !u || m.has(u) || Array.prototype.forEach.call(u.children, function(p) {
      if (i.has(p))
        f(p);
      else
        try {
          var w = p.getAttribute(r), M = w !== null && w !== "false", l = (V.get(p) || 0) + 1, g = (c.get(p) || 0) + 1;
          V.set(p, l), c.set(p, g), s.push(p), l === 1 && M && ne.set(p, !0), g === 1 && p.setAttribute(n, "true"), M || p.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", p, y);
        }
    });
  };
  return f(t), i.clear(), Ee++, function() {
    s.forEach(function(u) {
      var p = V.get(u) - 1, w = c.get(u) - 1;
      V.set(u, p), c.set(u, w), p || (ne.has(u) || u.removeAttribute(r), ne.delete(u)), w || u.removeAttribute(n);
    }), Ee--, Ee || (V = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ new WeakMap(), ne = /* @__PURE__ */ new WeakMap(), re = {});
  };
}, bn = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Mn(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), En(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, A = function() {
  return A = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (t[c] = n[c]);
    }
    return t;
  }, A.apply(this, arguments);
};
function ot(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Sn(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, c; r < o; r++)
    (c || !(r in t)) && (c || (c = Array.prototype.slice.call(t, 0, r)), c[r] = t[r]);
  return e.concat(c || Array.prototype.slice.call(t));
}
var ce = "right-scroll-bar-position", ie = "width-before-scroll-bar", Rn = "with-scroll-bars-hidden", _n = "--removed-body-scroll-bar-size";
function be(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Pn(e, t) {
  var n = Ht(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var In = typeof window < "u" ? a.useLayoutEffect : a.useEffect, je = /* @__PURE__ */ new WeakMap();
function xn(e, t) {
  var n = Pn(null, function(r) {
    return e.forEach(function(o) {
      return be(o, r);
    });
  });
  return In(function() {
    var r = je.get(n);
    if (r) {
      var o = new Set(r), c = new Set(e), s = n.current;
      o.forEach(function(i) {
        c.has(i) || be(i, null);
      }), c.forEach(function(i) {
        o.has(i) || be(i, s);
      });
    }
    je.set(n, e);
  }, [e]), n;
}
function Dn(e) {
  return e;
}
function An(e, t) {
  t === void 0 && (t = Dn);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(c) {
      var s = t(c, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(c) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(c);
      }
      n = {
        push: function(i) {
          return c(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(c) {
      r = !0;
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(c), s = n;
      }
      var m = function() {
        var f = s;
        s = [], f.forEach(c);
      }, v = function() {
        return Promise.resolve().then(m);
      };
      v(), n = {
        push: function(f) {
          s.push(f), v();
        },
        filter: function(f) {
          return s = s.filter(f), n;
        }
      };
    }
  };
  return o;
}
function Nn(e) {
  e === void 0 && (e = {});
  var t = An(null);
  return t.options = A({ async: !0, ssr: !1 }, e), t;
}
var at = function(e) {
  var t = e.sideCar, n = ot(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return a.createElement(r, A({}, n));
};
at.isSideCarExport = !0;
function Tn(e, t) {
  return e.useMedium(t), at;
}
var ct = Nn(), Se = function() {
}, fe = a.forwardRef(function(e, t) {
  var n = a.useRef(null), r = a.useState({
    onScrollCapture: Se,
    onWheelCapture: Se,
    onTouchMoveCapture: Se
  }), o = r[0], c = r[1], s = e.forwardProps, i = e.children, m = e.className, v = e.removeScrollBar, f = e.enabled, u = e.shards, p = e.sideCar, w = e.noRelative, M = e.noIsolation, l = e.inert, g = e.allowPinchZoom, y = e.as, E = y === void 0 ? "div" : y, b = e.gapMode, S = ot(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = p, D = xn([n, t]), P = A(A({}, S), o);
  return a.createElement(
    a.Fragment,
    null,
    f && a.createElement(R, { sideCar: ct, removeScrollBar: v, shards: u, noRelative: w, noIsolation: M, inert: l, setCallbacks: c, allowPinchZoom: !!g, lockRef: n, gapMode: b }),
    s ? a.cloneElement(a.Children.only(i), A(A({}, P), { ref: D })) : a.createElement(E, A({}, P, { className: m, ref: D }), i)
  );
});
fe.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
fe.classNames = {
  fullWidth: ie,
  zeroRight: ce
};
var On = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function kn() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = On();
  return t && e.setAttribute("nonce", t), e;
}
function Ln(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Fn(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Kn = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = kn()) && (Ln(t, n), Fn(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Gn = function() {
  var e = Kn();
  return function(t, n) {
    a.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, it = function() {
  var e = Gn(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Bn = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Re = function(e) {
  return parseInt(e || "", 10) || 0;
}, Un = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Re(n), Re(r), Re(o)];
}, Wn = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Bn;
  var t = Un(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Vn = it(), H = "data-scroll-locked", $n = function(e, t, n, r) {
  var o = e.left, c = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Rn, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(H, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(c, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ce, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ie, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ce, " .").concat(ce, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ie, " .").concat(ie, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(H, `] {
    `).concat(_n, ": ").concat(i, `px;
  }
`);
}, He = function() {
  var e = parseInt(document.body.getAttribute(H) || "0", 10);
  return isFinite(e) ? e : 0;
}, jn = function() {
  a.useEffect(function() {
    return document.body.setAttribute(H, (He() + 1).toString()), function() {
      var e = He() - 1;
      e <= 0 ? document.body.removeAttribute(H) : document.body.setAttribute(H, e.toString());
    };
  }, []);
}, Hn = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  jn();
  var c = a.useMemo(function() {
    return Wn(o);
  }, [o]);
  return a.createElement(Vn, { styles: $n(c, !t, o, n ? "" : "!important") });
}, _e = !1;
if (typeof window < "u")
  try {
    var oe = Object.defineProperty({}, "passive", {
      get: function() {
        return _e = !0, !0;
      }
    });
    window.addEventListener("test", oe, oe), window.removeEventListener("test", oe, oe);
  } catch {
    _e = !1;
  }
var $ = _e ? { passive: !1 } : !1, Xn = function(e) {
  return e.tagName === "TEXTAREA";
}, ut = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Xn(e) && n[t] === "visible")
  );
}, Yn = function(e) {
  return ut(e, "overflowY");
}, zn = function(e) {
  return ut(e, "overflowX");
}, Xe = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = st(e, r);
    if (o) {
      var c = lt(e, r), s = c[1], i = c[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Zn = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, qn = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, st = function(e, t) {
  return e === "v" ? Yn(t) : zn(t);
}, lt = function(e, t) {
  return e === "v" ? Zn(t) : qn(t);
}, Qn = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Jn = function(e, t, n, r, o) {
  var c = Qn(e, window.getComputedStyle(t).direction), s = c * r, i = n.target, m = t.contains(i), v = !1, f = s > 0, u = 0, p = 0;
  do {
    if (!i)
      break;
    var w = lt(e, i), M = w[0], l = w[1], g = w[2], y = l - g - c * M;
    (M || y) && st(e, i) && (u += y, p += M);
    var E = i.parentNode;
    i = E && E.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? E.host : E;
  } while (
    // portaled content
    !m && i !== document.body || // self content
    m && (t.contains(i) || t === i)
  );
  return (f && Math.abs(u) < 1 || !f && Math.abs(p) < 1) && (v = !0), v;
}, ae = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ye = function(e) {
  return [e.deltaX, e.deltaY];
}, ze = function(e) {
  return e && "current" in e ? e.current : e;
}, er = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, tr = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, nr = 0, j = [];
function rr(e) {
  var t = a.useRef([]), n = a.useRef([0, 0]), r = a.useRef(), o = a.useState(nr++)[0], c = a.useState(it)[0], s = a.useRef(e);
  a.useEffect(function() {
    s.current = e;
  }, [e]), a.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var l = Sn([e.lockRef.current], (e.shards || []).map(ze), !0).filter(Boolean);
      return l.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), l.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = a.useCallback(function(l, g) {
    if ("touches" in l && l.touches.length === 2 || l.type === "wheel" && l.ctrlKey)
      return !s.current.allowPinchZoom;
    var y = ae(l), E = n.current, b = "deltaX" in l ? l.deltaX : E[0] - y[0], S = "deltaY" in l ? l.deltaY : E[1] - y[1], R, D = l.target, P = Math.abs(b) > Math.abs(S) ? "h" : "v";
    if ("touches" in l && P === "h" && D.type === "range")
      return !1;
    var te = window.getSelection(), N = te && te.anchorNode, K = N ? N === D || N.contains(D) : !1;
    if (K)
      return !1;
    var G = Xe(P, D);
    if (!G)
      return !0;
    if (G ? R = P : (R = P === "v" ? "h" : "v", G = Xe(P, D)), !G)
      return !1;
    if (!r.current && "changedTouches" in l && (b || S) && (r.current = R), !R)
      return !0;
    var B = r.current || R;
    return Jn(B, g, l, B === "h" ? b : S);
  }, []), m = a.useCallback(function(l) {
    var g = l;
    if (!(!j.length || j[j.length - 1] !== c)) {
      var y = "deltaY" in g ? Ye(g) : ae(g), E = t.current.filter(function(R) {
        return R.name === g.type && (R.target === g.target || g.target === R.shadowParent) && er(R.delta, y);
      })[0];
      if (E && E.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!E) {
        var b = (s.current.shards || []).map(ze).filter(Boolean).filter(function(R) {
          return R.contains(g.target);
        }), S = b.length > 0 ? i(g, b[0]) : !s.current.noIsolation;
        S && g.cancelable && g.preventDefault();
      }
    }
  }, []), v = a.useCallback(function(l, g, y, E) {
    var b = { name: l, delta: g, target: y, should: E, shadowParent: or(y) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== b;
      });
    }, 1);
  }, []), f = a.useCallback(function(l) {
    n.current = ae(l), r.current = void 0;
  }, []), u = a.useCallback(function(l) {
    v(l.type, Ye(l), l.target, i(l, e.lockRef.current));
  }, []), p = a.useCallback(function(l) {
    v(l.type, ae(l), l.target, i(l, e.lockRef.current));
  }, []);
  a.useEffect(function() {
    return j.push(c), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", m, $), document.addEventListener("touchmove", m, $), document.addEventListener("touchstart", f, $), function() {
      j = j.filter(function(l) {
        return l !== c;
      }), document.removeEventListener("wheel", m, $), document.removeEventListener("touchmove", m, $), document.removeEventListener("touchstart", f, $);
    };
  }, []);
  var w = e.removeScrollBar, M = e.inert;
  return a.createElement(
    a.Fragment,
    null,
    M ? a.createElement(c, { styles: tr(o) }) : null,
    w ? a.createElement(Hn, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function or(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const ar = Tn(ct, rr);
var dt = a.forwardRef(function(e, t) {
  return a.createElement(fe, A({}, e, { ref: t, sideCar: ar }));
});
dt.classNames = fe.classNames;
var Pe = ["Enter", " "], cr = ["ArrowDown", "PageUp", "Home"], ft = ["ArrowUp", "PageDown", "End"], ir = [...cr, ...ft], ur = {
  ltr: [...Pe, "ArrowRight"],
  rtl: [...Pe, "ArrowLeft"]
}, sr = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, J = "Menu", [q, lr, dr] = Zt(J), [L, pt] = qe(J, [
  dr,
  Je,
  Qe
]), pe = Je(), vt = Qe(), [fr, F] = L(J), [pr, ee] = L(J), mt = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: c, modal: s = !0 } = e, i = pe(t), [m, v] = a.useState(null), f = a.useRef(!1), u = ue(c), p = qt(o);
  return a.useEffect(() => {
    const w = () => {
      f.current = !0, document.addEventListener("pointerdown", M, { capture: !0, once: !0 }), document.addEventListener("pointermove", M, { capture: !0, once: !0 });
    }, M = () => f.current = !1;
    return document.addEventListener("keydown", w, { capture: !0 }), () => {
      document.removeEventListener("keydown", w, { capture: !0 }), document.removeEventListener("pointerdown", M, { capture: !0 }), document.removeEventListener("pointermove", M, { capture: !0 });
    };
  }, []), /* @__PURE__ */ d(Jt, { ...i, children: /* @__PURE__ */ d(
    fr,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: m,
      onContentChange: v,
      children: /* @__PURE__ */ d(
        pr,
        {
          scope: t,
          onClose: a.useCallback(() => u(!1), [u]),
          isUsingKeyboardRef: f,
          dir: p,
          modal: s,
          children: r
        }
      )
    }
  ) });
};
mt.displayName = J;
var vr = "MenuAnchor", xe = a.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = pe(n);
    return /* @__PURE__ */ d(en, { ...o, ...r, ref: t });
  }
);
xe.displayName = vr;
var De = "MenuPortal", [mr, ht] = L(De, {
  forceMount: void 0
}), gt = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, c = F(De, t);
  return /* @__PURE__ */ d(mr, { scope: t, forceMount: n, children: /* @__PURE__ */ d(de, { present: n || c.open, children: /* @__PURE__ */ d(tn, { asChild: !0, container: o, children: r }) }) });
};
gt.displayName = De;
var x = "MenuContent", [hr, Ae] = L(x), wt = a.forwardRef(
  (e, t) => {
    const n = ht(x, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, c = F(x, e.__scopeMenu), s = ee(x, e.__scopeMenu);
    return /* @__PURE__ */ d(q.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d(de, { present: r || c.open, children: /* @__PURE__ */ d(q.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ d(gr, { ...o, ref: t }) : /* @__PURE__ */ d(wr, { ...o, ref: t }) }) }) });
  }
), gr = a.forwardRef(
  (e, t) => {
    const n = F(x, e.__scopeMenu), r = a.useRef(null), o = X(t, r);
    return a.useEffect(() => {
      const c = r.current;
      if (c) return bn(c);
    }, []), /* @__PURE__ */ d(
      Ne,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: C(
          e.onFocusOutside,
          (c) => c.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), wr = a.forwardRef((e, t) => {
  const n = F(x, e.__scopeMenu);
  return /* @__PURE__ */ d(
    Ne,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), yr = /* @__PURE__ */ vn("MenuContent.ScrollLock"), Ne = a.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: c,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: i,
      onEntryFocus: m,
      onEscapeKeyDown: v,
      onPointerDownOutside: f,
      onFocusOutside: u,
      onInteractOutside: p,
      onDismiss: w,
      disableOutsideScroll: M,
      ...l
    } = e, g = F(x, n), y = ee(x, n), E = pe(n), b = vt(n), S = lr(n), [R, D] = a.useState(null), P = a.useRef(null), te = X(t, P, g.onContentChange), N = a.useRef(0), K = a.useRef(""), G = a.useRef(0), B = a.useRef(null), Le = a.useRef("right"), he = a.useRef(0), Vt = M ? dt : a.Fragment, $t = M ? { as: yr, allowPinchZoom: !0 } : void 0, jt = (h) => {
      const W = K.current + h, O = S().filter((I) => !I.disabled), Y = document.activeElement, ge = O.find((I) => I.ref.current === Y)?.textValue, we = O.map((I) => I.textValue), Fe = Ar(we, W, ge), z = O.find((I) => I.textValue === Fe)?.ref.current;
      (function I(Ke) {
        K.current = Ke, window.clearTimeout(N.current), Ke !== "" && (N.current = window.setTimeout(() => I(""), 1e3));
      })(W), z && setTimeout(() => z.focus());
    };
    a.useEffect(() => () => window.clearTimeout(N.current), []), an();
    const U = a.useCallback((h) => Le.current === B.current?.side && Tr(h, B.current?.area), []);
    return /* @__PURE__ */ d(
      hr,
      {
        scope: n,
        searchRef: K,
        onItemEnter: a.useCallback(
          (h) => {
            U(h) && h.preventDefault();
          },
          [U]
        ),
        onItemLeave: a.useCallback(
          (h) => {
            U(h) || (P.current?.focus(), D(null));
          },
          [U]
        ),
        onTriggerLeave: a.useCallback(
          (h) => {
            U(h) && h.preventDefault();
          },
          [U]
        ),
        pointerGraceTimerRef: G,
        onPointerGraceIntentChange: a.useCallback((h) => {
          B.current = h;
        }, []),
        children: /* @__PURE__ */ d(Vt, { ...$t, children: /* @__PURE__ */ d(
          tt,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: C(c, (h) => {
              h.preventDefault(), P.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ d(
              nn,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: v,
                onPointerDownOutside: f,
                onFocusOutside: u,
                onInteractOutside: p,
                onDismiss: w,
                children: /* @__PURE__ */ d(
                  Qt,
                  {
                    asChild: !0,
                    ...b,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: R,
                    onCurrentTabStopIdChange: D,
                    onEntryFocus: C(m, (h) => {
                      y.isUsingKeyboardRef.current || h.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ d(
                      rn,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ot(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...E,
                        ...l,
                        ref: te,
                        style: { outline: "none", ...l.style },
                        onKeyDown: C(l.onKeyDown, (h) => {
                          const O = h.target.closest("[data-radix-menu-content]") === h.currentTarget, Y = h.ctrlKey || h.altKey || h.metaKey, ge = h.key.length === 1;
                          O && (h.key === "Tab" && h.preventDefault(), !Y && ge && jt(h.key));
                          const we = P.current;
                          if (h.target !== we || !ir.includes(h.key)) return;
                          h.preventDefault();
                          const z = S().filter((I) => !I.disabled).map((I) => I.ref.current);
                          ft.includes(h.key) && z.reverse(), xr(z);
                        }),
                        onBlur: C(e.onBlur, (h) => {
                          h.currentTarget.contains(h.target) || (window.clearTimeout(N.current), K.current = "");
                        }),
                        onPointerMove: C(
                          e.onPointerMove,
                          Q((h) => {
                            const W = h.target, O = he.current !== h.clientX;
                            if (h.currentTarget.contains(W) && O) {
                              const Y = h.clientX > he.current ? "right" : "left";
                              Le.current = Y, he.current = h.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
wt.displayName = x;
var Mr = "MenuGroup", Te = a.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d(k.div, { role: "group", ...r, ref: t });
  }
);
Te.displayName = Mr;
var Cr = "MenuLabel", yt = a.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d(k.div, { ...r, ref: t });
  }
);
yt.displayName = Cr;
var se = "MenuItem", Ze = "menu.itemSelect", ve = a.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, c = a.useRef(null), s = ee(se, e.__scopeMenu), i = Ae(se, e.__scopeMenu), m = X(t, c), v = a.useRef(!1), f = () => {
      const u = c.current;
      if (!n && u) {
        const p = new CustomEvent(Ze, { bubbles: !0, cancelable: !0 });
        u.addEventListener(Ze, (w) => r?.(w), { once: !0 }), Xt(u, p), p.defaultPrevented ? v.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ d(
      Mt,
      {
        ...o,
        ref: m,
        disabled: n,
        onClick: C(e.onClick, f),
        onPointerDown: (u) => {
          e.onPointerDown?.(u), v.current = !0;
        },
        onPointerUp: C(e.onPointerUp, (u) => {
          v.current || u.currentTarget?.click();
        }),
        onKeyDown: C(e.onKeyDown, (u) => {
          const p = i.searchRef.current !== "";
          n || p && u.key === " " || Pe.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
ve.displayName = se;
var Mt = a.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...c } = e, s = Ae(se, n), i = vt(n), m = a.useRef(null), v = X(t, m), [f, u] = a.useState(!1), [p, w] = a.useState("");
    return a.useEffect(() => {
      const M = m.current;
      M && w((M.textContent ?? "").trim());
    }, [c.children]), /* @__PURE__ */ d(
      q.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ d(zt, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ d(
          k.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...c,
            ref: v,
            onPointerMove: C(
              e.onPointerMove,
              Q((M) => {
                r ? s.onItemLeave(M) : (s.onItemEnter(M), M.defaultPrevented || M.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: C(
              e.onPointerLeave,
              Q((M) => s.onItemLeave(M))
            ),
            onFocus: C(e.onFocus, () => u(!0)),
            onBlur: C(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), Er = "MenuCheckboxItem", Ct = a.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ d(_t, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ d(
      ve,
      {
        role: "menuitemcheckbox",
        "aria-checked": le(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": ke(n),
        onSelect: C(
          o.onSelect,
          () => r?.(le(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ct.displayName = Er;
var Et = "MenuRadioGroup", [br, Sr] = L(
  Et,
  { value: void 0, onValueChange: () => {
  } }
), bt = a.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, c = ue(r);
    return /* @__PURE__ */ d(br, { scope: e.__scopeMenu, value: n, onValueChange: c, children: /* @__PURE__ */ d(Te, { ...o, ref: t }) });
  }
);
bt.displayName = Et;
var St = "MenuRadioItem", Rt = a.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Sr(St, e.__scopeMenu), c = n === o.value;
    return /* @__PURE__ */ d(_t, { scope: e.__scopeMenu, checked: c, children: /* @__PURE__ */ d(
      ve,
      {
        role: "menuitemradio",
        "aria-checked": c,
        ...r,
        ref: t,
        "data-state": ke(c),
        onSelect: C(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Rt.displayName = St;
var Oe = "MenuItemIndicator", [_t, Rr] = L(
  Oe,
  { checked: !1 }
), Pt = a.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, c = Rr(Oe, n);
    return /* @__PURE__ */ d(
      de,
      {
        present: r || le(c.checked) || c.checked === !0,
        children: /* @__PURE__ */ d(
          k.span,
          {
            ...o,
            ref: t,
            "data-state": ke(c.checked)
          }
        )
      }
    );
  }
);
Pt.displayName = Oe;
var _r = "MenuSeparator", It = a.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d(
      k.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
It.displayName = _r;
var Pr = "MenuArrow", xt = a.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = pe(n);
    return /* @__PURE__ */ d(on, { ...o, ...r, ref: t });
  }
);
xt.displayName = Pr;
var Ir = "MenuSub", [Oo, Dt] = L(Ir), Z = "MenuSubTrigger", At = a.forwardRef(
  (e, t) => {
    const n = F(Z, e.__scopeMenu), r = ee(Z, e.__scopeMenu), o = Dt(Z, e.__scopeMenu), c = Ae(Z, e.__scopeMenu), s = a.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: m } = c, v = { __scopeMenu: e.__scopeMenu }, f = a.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return a.useEffect(() => f, [f]), a.useEffect(() => {
      const u = i.current;
      return () => {
        window.clearTimeout(u), m(null);
      };
    }, [i, m]), /* @__PURE__ */ d(xe, { asChild: !0, ...v, children: /* @__PURE__ */ d(
      Mt,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Ot(n.open),
        ...e,
        ref: Ie(t, o.onTriggerChange),
        onClick: (u) => {
          e.onClick?.(u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: C(
          e.onPointerMove,
          Q((u) => {
            c.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !s.current && (c.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: C(
          e.onPointerLeave,
          Q((u) => {
            f();
            const p = n.content?.getBoundingClientRect();
            if (p) {
              const w = n.content?.dataset.side, M = w === "right", l = M ? -5 : 5, g = p[M ? "left" : "right"], y = p[M ? "right" : "left"];
              c.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: u.clientX + l, y: u.clientY },
                  { x: g, y: p.top },
                  { x: y, y: p.top },
                  { x: y, y: p.bottom },
                  { x: g, y: p.bottom }
                ],
                side: w
              }), window.clearTimeout(i.current), i.current = window.setTimeout(
                () => c.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (c.onTriggerLeave(u), u.defaultPrevented) return;
              c.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: C(e.onKeyDown, (u) => {
          const p = c.searchRef.current !== "";
          e.disabled || p && u.key === " " || ur[r.dir].includes(u.key) && (n.onOpenChange(!0), n.content?.focus(), u.preventDefault());
        })
      }
    ) });
  }
);
At.displayName = Z;
var Nt = "MenuSubContent", Tt = a.forwardRef(
  (e, t) => {
    const n = ht(x, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, c = F(x, e.__scopeMenu), s = ee(x, e.__scopeMenu), i = Dt(Nt, e.__scopeMenu), m = a.useRef(null), v = X(t, m);
    return /* @__PURE__ */ d(q.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d(de, { present: r || c.open, children: /* @__PURE__ */ d(q.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ d(
      Ne,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...o,
        ref: v,
        align: "start",
        side: s.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          s.isUsingKeyboardRef.current && m.current?.focus(), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: C(e.onFocusOutside, (f) => {
          f.target !== i.trigger && c.onOpenChange(!1);
        }),
        onEscapeKeyDown: C(e.onEscapeKeyDown, (f) => {
          s.onClose(), f.preventDefault();
        }),
        onKeyDown: C(e.onKeyDown, (f) => {
          const u = f.currentTarget.contains(f.target), p = sr[s.dir].includes(f.key);
          u && p && (c.onOpenChange(!1), i.trigger?.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Tt.displayName = Nt;
function Ot(e) {
  return e ? "open" : "closed";
}
function le(e) {
  return e === "indeterminate";
}
function ke(e) {
  return le(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function xr(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Dr(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Ar(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((v) => v === t[0]) ? t[0] : t, c = n ? e.indexOf(n) : -1;
  let s = Dr(e, Math.max(c, 0));
  o.length === 1 && (s = s.filter((v) => v !== n));
  const m = s.find(
    (v) => v.toLowerCase().startsWith(o.toLowerCase())
  );
  return m !== n ? m : void 0;
}
function Nr(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let c = 0, s = t.length - 1; c < t.length; s = c++) {
    const i = t[c], m = t[s], v = i.x, f = i.y, u = m.x, p = m.y;
    f > r != p > r && n < (u - v) * (r - f) / (p - f) + v && (o = !o);
  }
  return o;
}
function Tr(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Nr(n, t);
}
function Q(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Or = mt, kr = xe, Lr = gt, Fr = wt, Kr = Te, Gr = yt, Br = ve, Ur = Ct, Wr = bt, Vr = Rt, $r = Pt, jr = It, Hr = xt, Xr = At, Yr = Tt, me = "DropdownMenu", [zr] = qe(
  me,
  [pt]
), _ = pt(), [Zr, kt] = zr(me), Lt = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: c,
    onOpenChange: s,
    modal: i = !0
  } = e, m = _(t), v = a.useRef(null), [f, u] = Yt({
    prop: o,
    defaultProp: c ?? !1,
    onChange: s,
    caller: me
  });
  return /* @__PURE__ */ d(
    Zr,
    {
      scope: t,
      triggerId: Ge(),
      triggerRef: v,
      contentId: Ge(),
      open: f,
      onOpenChange: u,
      onOpenToggle: a.useCallback(() => u((p) => !p), [u]),
      modal: i,
      children: /* @__PURE__ */ d(Or, { ...m, open: f, onOpenChange: u, dir: r, modal: i, children: n })
    }
  );
};
Lt.displayName = me;
var Ft = "DropdownMenuTrigger", Kt = a.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, c = kt(Ft, n), s = _(n);
    return /* @__PURE__ */ d(kr, { asChild: !0, ...s, children: /* @__PURE__ */ d(
      k.button,
      {
        type: "button",
        id: c.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": c.open,
        "aria-controls": c.open ? c.contentId : void 0,
        "data-state": c.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Ie(t, c.triggerRef),
        onPointerDown: C(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (c.onOpenToggle(), c.open || i.preventDefault());
        }),
        onKeyDown: C(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && c.onOpenToggle(), i.key === "ArrowDown" && c.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
Kt.displayName = Ft;
var qr = "DropdownMenuPortal", Gt = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = _(t);
  return /* @__PURE__ */ d(Lr, { ...r, ...n });
};
Gt.displayName = qr;
var Bt = "DropdownMenuContent", Ut = a.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = kt(Bt, n), c = _(n), s = a.useRef(!1);
    return /* @__PURE__ */ d(
      Fr,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...c,
        ...r,
        ref: t,
        onCloseAutoFocus: C(e.onCloseAutoFocus, (i) => {
          s.current || o.triggerRef.current?.focus(), s.current = !1, i.preventDefault();
        }),
        onInteractOutside: C(e.onInteractOutside, (i) => {
          const m = i.detail.originalEvent, v = m.button === 0 && m.ctrlKey === !0, f = m.button === 2 || v;
          (!o.modal || f) && (s.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Ut.displayName = Bt;
var Qr = "DropdownMenuGroup", Jr = a.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = _(n);
    return /* @__PURE__ */ d(Kr, { ...o, ...r, ref: t });
  }
);
Jr.displayName = Qr;
var eo = "DropdownMenuLabel", to = a.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = _(n);
    return /* @__PURE__ */ d(Gr, { ...o, ...r, ref: t });
  }
);
to.displayName = eo;
var no = "DropdownMenuItem", Wt = a.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = _(n);
    return /* @__PURE__ */ d(Br, { ...o, ...r, ref: t });
  }
);
Wt.displayName = no;
var ro = "DropdownMenuCheckboxItem", oo = a.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _(n);
  return /* @__PURE__ */ d(Ur, { ...o, ...r, ref: t });
});
oo.displayName = ro;
var ao = "DropdownMenuRadioGroup", co = a.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _(n);
  return /* @__PURE__ */ d(Wr, { ...o, ...r, ref: t });
});
co.displayName = ao;
var io = "DropdownMenuRadioItem", uo = a.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _(n);
  return /* @__PURE__ */ d(Vr, { ...o, ...r, ref: t });
});
uo.displayName = io;
var so = "DropdownMenuItemIndicator", lo = a.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _(n);
  return /* @__PURE__ */ d($r, { ...o, ...r, ref: t });
});
lo.displayName = so;
var fo = "DropdownMenuSeparator", po = a.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _(n);
  return /* @__PURE__ */ d(jr, { ...o, ...r, ref: t });
});
po.displayName = fo;
var vo = "DropdownMenuArrow", mo = a.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = _(n);
    return /* @__PURE__ */ d(Hr, { ...o, ...r, ref: t });
  }
);
mo.displayName = vo;
var ho = "DropdownMenuSubTrigger", go = a.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _(n);
  return /* @__PURE__ */ d(Xr, { ...o, ...r, ref: t });
});
go.displayName = ho;
var wo = "DropdownMenuSubContent", yo = a.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _(n);
  return /* @__PURE__ */ d(
    Yr,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
yo.displayName = wo;
var Mo = Lt, Co = Kt, Eo = Gt, bo = Ut, So = Wt;
function ko({ ...e }) {
  return /* @__PURE__ */ d(Mo, { "data-slot": "dropdown-menu", ...e });
}
function Lo({
  ...e
}) {
  return /* @__PURE__ */ d(Co, { "data-slot": "dropdown-menu-trigger", ...e });
}
function Fo({
  className: e,
  sideOffset: t = 4,
  align: n = "end",
  ...r
}) {
  return /* @__PURE__ */ d(Eo, { children: /* @__PURE__ */ d(
    bo,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      align: n,
      className: et(
        "z-50 max-h-(--radix-dropdown-menu-content-available-height) origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-2xl border border-gi-dark-ash bg-white p-1.5 text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "w-40",
        e
      ),
      ...r
    }
  ) });
}
function Ko({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ d(
    So,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: et(
        "relative flex cursor-pointer items-center gap-1 rounded-lg px-3 py-1.5 text-sm outline-none select-none transition-colors text-gi-primary",
        "data-[highlighted]:bg-gi-ash data-[highlighted]:text-gi-primary",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8",
        n === "danger" && "text-gi-red data-[highlighted]:bg-red-50 data-[highlighted]:text-gi-red",
        e
      ),
      ...r
    }
  );
}
export {
  Ko as D,
  ko as a,
  Lo as b,
  Fo as c
};
