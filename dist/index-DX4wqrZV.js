import * as w from "react";
import { useLayoutEffect as Le } from "react";
import { P as et, a as vt, e as Te, c as Me, b as Ne, d as Ot } from "./index-BjfsKMCT.js";
import { u as ht } from "./index-DLcqcWxM.js";
import { u as pt } from "./index-CVgaMPSv.js";
import { jsx as B } from "react/jsx-runtime";
import * as Fe from "react-dom";
import We from "react-dom";
function _e(t, e = globalThis?.document) {
  const n = pt(t);
  w.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return e.addEventListener("keydown", o, { capture: !0 }), () => e.removeEventListener("keydown", o, { capture: !0 });
  }, [n, e]);
}
var ke = "DismissableLayer", Pt = "dismissableLayer.update", $e = "dismissableLayer.pointerDownOutside", Be = "dismissableLayer.focusOutside", Bt, Jt = w.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), He = w.forwardRef(
  (t, e) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: c,
      ...f
    } = t, a = w.useContext(Jt), [l, d] = w.useState(null), m = l?.ownerDocument ?? globalThis?.document, [, u] = w.useState({}), h = ht(e, (x) => d(x)), p = Array.from(a.layers), [v] = [...a.layersWithOutsidePointerEventsDisabled].slice(-1), g = p.indexOf(v), A = l ? p.indexOf(l) : -1, b = a.layersWithOutsidePointerEventsDisabled.size > 0, y = A >= g, O = Ve((x) => {
      const E = x.target, M = [...a.branches].some((C) => C.contains(E));
      !y || M || (r?.(x), s?.(x), x.defaultPrevented || c?.());
    }, m), R = Xe((x) => {
      const E = x.target;
      [...a.branches].some((C) => C.contains(E)) || (i?.(x), s?.(x), x.defaultPrevented || c?.());
    }, m);
    return _e((x) => {
      A === a.layers.size - 1 && (o?.(x), !x.defaultPrevented && c && (x.preventDefault(), c()));
    }, m), w.useEffect(() => {
      if (l)
        return n && (a.layersWithOutsidePointerEventsDisabled.size === 0 && (Bt = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), a.layersWithOutsidePointerEventsDisabled.add(l)), a.layers.add(l), Ht(), () => {
          n && a.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Bt);
        };
    }, [l, m, n, a]), w.useEffect(() => () => {
      l && (a.layers.delete(l), a.layersWithOutsidePointerEventsDisabled.delete(l), Ht());
    }, [l, a]), w.useEffect(() => {
      const x = () => u({});
      return document.addEventListener(Pt, x), () => document.removeEventListener(Pt, x);
    }, []), /* @__PURE__ */ B(
      et.div,
      {
        ...f,
        ref: h,
        style: {
          pointerEvents: b ? y ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: vt(t.onFocusCapture, R.onFocusCapture),
        onBlurCapture: vt(t.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: vt(
          t.onPointerDownCapture,
          O.onPointerDownCapture
        )
      }
    );
  }
);
He.displayName = ke;
var Ie = "DismissableLayerBranch", ze = w.forwardRef((t, e) => {
  const n = w.useContext(Jt), o = w.useRef(null), r = ht(e, o);
  return w.useEffect(() => {
    const i = o.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ B(et.div, { ...t, ref: r });
});
ze.displayName = Ie;
function Ve(t, e = globalThis?.document) {
  const n = pt(t), o = w.useRef(!1), r = w.useRef(() => {
  });
  return w.useEffect(() => {
    const i = (c) => {
      if (c.target && !o.current) {
        let f = function() {
          Qt(
            $e,
            n,
            a,
            { discrete: !0 }
          );
        };
        const a = { originalEvent: c };
        c.pointerType === "touch" ? (e.removeEventListener("click", r.current), r.current = f, e.addEventListener("click", r.current, { once: !0 })) : f();
      } else
        e.removeEventListener("click", r.current);
      o.current = !1;
    }, s = window.setTimeout(() => {
      e.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), e.removeEventListener("pointerdown", i), e.removeEventListener("click", r.current);
    };
  }, [e, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function Xe(t, e = globalThis?.document) {
  const n = pt(t), o = w.useRef(!1);
  return w.useEffect(() => {
    const r = (i) => {
      i.target && !o.current && Qt(Be, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return e.addEventListener("focusin", r), () => e.removeEventListener("focusin", r);
  }, [e, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Ht() {
  const t = new CustomEvent(Pt);
  document.dispatchEvent(t);
}
function Qt(t, e, n, { discrete: o }) {
  const r = n.originalEvent.target, i = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: n });
  e && r.addEventListener(t, e, { once: !0 }), o ? Te(r, i) : r.dispatchEvent(i);
}
const Ye = ["top", "right", "bottom", "left"], q = Math.min, k = Math.max, ft = Math.round, at = Math.floor, X = (t) => ({
  x: t,
  y: t
}), je = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Et(t, e, n) {
  return k(t, q(e, n));
}
function j(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function U(t) {
  return t.split("-")[0];
}
function nt(t) {
  return t.split("-")[1];
}
function Dt(t) {
  return t === "x" ? "y" : "x";
}
function Lt(t) {
  return t === "y" ? "height" : "width";
}
function V(t) {
  const e = t[0];
  return e === "t" || e === "b" ? "y" : "x";
}
function Tt(t) {
  return Dt(V(t));
}
function Ue(t, e, n) {
  n === void 0 && (n = !1);
  const o = nt(t), r = Tt(t), i = Lt(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = ut(s)), [s, ut(s)];
}
function Ke(t) {
  const e = ut(t);
  return [Ct(t), e, Ct(e)];
}
function Ct(t) {
  return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
const It = ["left", "right"], zt = ["right", "left"], qe = ["top", "bottom"], Ze = ["bottom", "top"];
function Ge(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? zt : It : e ? It : zt;
    case "left":
    case "right":
      return e ? qe : Ze;
    default:
      return [];
  }
}
function Je(t, e, n, o) {
  const r = nt(t);
  let i = Ge(U(t), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), e && (i = i.concat(i.map(Ct)))), i;
}
function ut(t) {
  const e = U(t);
  return je[e] + t.slice(e.length);
}
function Qe(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function te(t) {
  return typeof t != "number" ? Qe(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function dt(t) {
  const {
    x: e,
    y: n,
    width: o,
    height: r
  } = t;
  return {
    width: o,
    height: r,
    top: n,
    left: e,
    right: e + o,
    bottom: n + r,
    x: e,
    y: n
  };
}
function Vt(t, e, n) {
  let {
    reference: o,
    floating: r
  } = t;
  const i = V(e), s = Tt(e), c = Lt(s), f = U(e), a = i === "y", l = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, m = o[c] / 2 - r[c] / 2;
  let u;
  switch (f) {
    case "top":
      u = {
        x: l,
        y: o.y - r.height
      };
      break;
    case "bottom":
      u = {
        x: l,
        y: o.y + o.height
      };
      break;
    case "right":
      u = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      u = {
        x: o.x - r.width,
        y: d
      };
      break;
    default:
      u = {
        x: o.x,
        y: o.y
      };
  }
  switch (nt(e)) {
    case "start":
      u[s] -= m * (n && a ? -1 : 1);
      break;
    case "end":
      u[s] += m * (n && a ? -1 : 1);
      break;
  }
  return u;
}
async function tn(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: s,
    elements: c,
    strategy: f
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: l = "viewport",
    elementContext: d = "floating",
    altBoundary: m = !1,
    padding: u = 0
  } = j(e, t), h = te(u), v = c[m ? d === "floating" ? "reference" : "floating" : d], g = dt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: l,
    strategy: f
  })), A = d === "floating" ? {
    x: o,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), y = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = dt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: A,
    offsetParent: b,
    strategy: f
  }) : A);
  return {
    top: (g.top - O.top + h.top) / y.y,
    bottom: (O.bottom - g.bottom + h.bottom) / y.y,
    left: (g.left - O.left + h.left) / y.x,
    right: (O.right - g.right + h.right) / y.x
  };
}
const en = 50, nn = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s
  } = n, c = s.detectOverflow ? s : {
    ...s,
    detectOverflow: tn
  }, f = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let a = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: r
  }), {
    x: l,
    y: d
  } = Vt(a, o, f), m = o, u = 0;
  const h = {};
  for (let p = 0; p < i.length; p++) {
    const v = i[p];
    if (!v)
      continue;
    const {
      name: g,
      fn: A
    } = v, {
      x: b,
      y,
      data: O,
      reset: R
    } = await A({
      x: l,
      y: d,
      initialPlacement: o,
      placement: m,
      strategy: r,
      middlewareData: h,
      rects: a,
      platform: c,
      elements: {
        reference: t,
        floating: e
      }
    });
    l = b ?? l, d = y ?? d, h[g] = {
      ...h[g],
      ...O
    }, R && u < en && (u++, typeof R == "object" && (R.placement && (m = R.placement), R.rects && (a = R.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: r
    }) : R.rects), {
      x: l,
      y: d
    } = Vt(a, m, f)), p = -1);
  }
  return {
    x: l,
    y: d,
    placement: m,
    strategy: r,
    middlewareData: h
  };
}, on = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: i,
      platform: s,
      elements: c,
      middlewareData: f
    } = e, {
      element: a,
      padding: l = 0
    } = j(t, e) || {};
    if (a == null)
      return {};
    const d = te(l), m = {
      x: n,
      y: o
    }, u = Tt(r), h = Lt(u), p = await s.getDimensions(a), v = u === "y", g = v ? "top" : "left", A = v ? "bottom" : "right", b = v ? "clientHeight" : "clientWidth", y = i.reference[h] + i.reference[u] - m[u] - i.floating[h], O = m[u] - i.reference[u], R = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a));
    let x = R ? R[b] : 0;
    (!x || !await (s.isElement == null ? void 0 : s.isElement(R))) && (x = c.floating[b] || i.floating[h]);
    const E = y / 2 - O / 2, M = x / 2 - p[h] / 2 - 1, C = q(d[g], M), F = q(d[A], M), W = C, D = x - p[h] - F, S = x / 2 - p[h] / 2 + E, _ = Et(W, S, D), L = !f.arrow && nt(r) != null && S !== _ && i.reference[h] / 2 - (S < W ? C : F) - p[h] / 2 < 0, T = L ? S < W ? S - W : S - D : 0;
    return {
      [u]: m[u] + T,
      data: {
        [u]: _,
        centerOffset: S - _ - T,
        ...L && {
          alignmentOffset: T
        }
      },
      reset: L
    };
  }
}), rn = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: r,
        middlewareData: i,
        rects: s,
        initialPlacement: c,
        platform: f,
        elements: a
      } = e, {
        mainAxis: l = !0,
        crossAxis: d = !0,
        fallbackPlacements: m,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: p = !0,
        ...v
      } = j(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const g = U(r), A = V(c), b = U(c) === c, y = await (f.isRTL == null ? void 0 : f.isRTL(a.floating)), O = m || (b || !p ? [ut(c)] : Ke(c)), R = h !== "none";
      !m && R && O.push(...Je(c, p, h, y));
      const x = [c, ...O], E = await f.detectOverflow(e, v), M = [];
      let C = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (l && M.push(E[g]), d) {
        const S = Ue(r, s, y);
        M.push(E[S[0]], E[S[1]]);
      }
      if (C = [...C, {
        placement: r,
        overflows: M
      }], !M.every((S) => S <= 0)) {
        var F, W;
        const S = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1, _ = x[S];
        if (_ && (!(d === "alignment" ? A !== V(_) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        C.every((P) => V(P.placement) === A ? P.overflows[0] > 0 : !0)))
          return {
            data: {
              index: S,
              overflows: C
            },
            reset: {
              placement: _
            }
          };
        let L = (W = C.filter((T) => T.overflows[0] <= 0).sort((T, P) => T.overflows[1] - P.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!L)
          switch (u) {
            case "bestFit": {
              var D;
              const T = (D = C.filter((P) => {
                if (R) {
                  const N = V(P.placement);
                  return N === A || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  N === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((N) => N > 0).reduce((N, z) => N + z, 0)]).sort((P, N) => P[1] - N[1])[0]) == null ? void 0 : D[0];
              T && (L = T);
              break;
            }
            case "initialPlacement":
              L = c;
              break;
          }
        if (r !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
function Xt(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Yt(t) {
  return Ye.some((e) => t[e] >= 0);
}
const sn = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n,
        platform: o
      } = e, {
        strategy: r = "referenceHidden",
        ...i
      } = j(t, e);
      switch (r) {
        case "referenceHidden": {
          const s = await o.detectOverflow(e, {
            ...i,
            elementContext: "reference"
          }), c = Xt(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: c,
              referenceHidden: Yt(c)
            }
          };
        }
        case "escaped": {
          const s = await o.detectOverflow(e, {
            ...i,
            altBoundary: !0
          }), c = Xt(s, n.floating);
          return {
            data: {
              escapedOffsets: c,
              escaped: Yt(c)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, ee = /* @__PURE__ */ new Set(["left", "top"]);
async function cn(t, e) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = t, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = U(n), c = nt(n), f = V(n) === "y", a = ee.has(s) ? -1 : 1, l = i && f ? -1 : 1, d = j(e, t);
  let {
    mainAxis: m,
    crossAxis: u,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return c && typeof h == "number" && (u = c === "end" ? h * -1 : h), f ? {
    x: u * l,
    y: m * a
  } : {
    x: m * a,
    y: u * l
  };
}
const an = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: s,
        middlewareData: c
      } = e, f = await cn(e, t);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: r + f.x,
        y: i + f.y,
        data: {
          ...f,
          placement: s
        }
      };
    }
  };
}, ln = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: r,
        platform: i
      } = e, {
        mainAxis: s = !0,
        crossAxis: c = !1,
        limiter: f = {
          fn: (g) => {
            let {
              x: A,
              y: b
            } = g;
            return {
              x: A,
              y: b
            };
          }
        },
        ...a
      } = j(t, e), l = {
        x: n,
        y: o
      }, d = await i.detectOverflow(e, a), m = V(U(r)), u = Dt(m);
      let h = l[u], p = l[m];
      if (s) {
        const g = u === "y" ? "top" : "left", A = u === "y" ? "bottom" : "right", b = h + d[g], y = h - d[A];
        h = Et(b, h, y);
      }
      if (c) {
        const g = m === "y" ? "top" : "left", A = m === "y" ? "bottom" : "right", b = p + d[g], y = p - d[A];
        p = Et(b, p, y);
      }
      const v = f.fn({
        ...e,
        [u]: h,
        [m]: p
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - o,
          enabled: {
            [u]: s,
            [m]: c
          }
        }
      };
    }
  };
}, fn = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: i,
        middlewareData: s
      } = e, {
        offset: c = 0,
        mainAxis: f = !0,
        crossAxis: a = !0
      } = j(t, e), l = {
        x: n,
        y: o
      }, d = V(r), m = Dt(d);
      let u = l[m], h = l[d];
      const p = j(c, e), v = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (f) {
        const b = m === "y" ? "height" : "width", y = i.reference[m] - i.floating[b] + v.mainAxis, O = i.reference[m] + i.reference[b] - v.mainAxis;
        u < y ? u = y : u > O && (u = O);
      }
      if (a) {
        var g, A;
        const b = m === "y" ? "width" : "height", y = ee.has(U(r)), O = i.reference[d] - i.floating[b] + (y && ((g = s.offset) == null ? void 0 : g[d]) || 0) + (y ? 0 : v.crossAxis), R = i.reference[d] + i.reference[b] + (y ? 0 : ((A = s.offset) == null ? void 0 : A[d]) || 0) - (y ? v.crossAxis : 0);
        h < O ? h = O : h > R && (h = R);
      }
      return {
        [m]: u,
        [d]: h
      };
    }
  };
}, un = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: r,
        rects: i,
        platform: s,
        elements: c
      } = e, {
        apply: f = () => {
        },
        ...a
      } = j(t, e), l = await s.detectOverflow(e, a), d = U(r), m = nt(r), u = V(r) === "y", {
        width: h,
        height: p
      } = i.floating;
      let v, g;
      d === "top" || d === "bottom" ? (v = d, g = m === (await (s.isRTL == null ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (g = d, v = m === "end" ? "top" : "bottom");
      const A = p - l.top - l.bottom, b = h - l.left - l.right, y = q(p - l[v], A), O = q(h - l[g], b), R = !e.middlewareData.shift;
      let x = y, E = O;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (E = b), (o = e.middlewareData.shift) != null && o.enabled.y && (x = A), R && !m) {
        const C = k(l.left, 0), F = k(l.right, 0), W = k(l.top, 0), D = k(l.bottom, 0);
        u ? E = h - 2 * (C !== 0 || F !== 0 ? C + F : k(l.left, l.right)) : x = p - 2 * (W !== 0 || D !== 0 ? W + D : k(l.top, l.bottom));
      }
      await f({
        ...e,
        availableWidth: E,
        availableHeight: x
      });
      const M = await s.getDimensions(c.floating);
      return h !== M.width || p !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function gt() {
  return typeof window < "u";
}
function ot(t) {
  return ne(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function $(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Y(t) {
  var e;
  return (e = (ne(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function ne(t) {
  return gt() ? t instanceof Node || t instanceof $(t).Node : !1;
}
function H(t) {
  return gt() ? t instanceof Element || t instanceof $(t).Element : !1;
}
function K(t) {
  return gt() ? t instanceof HTMLElement || t instanceof $(t).HTMLElement : !1;
}
function jt(t) {
  return !gt() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof $(t).ShadowRoot;
}
function st(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: r
  } = I(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && r !== "inline" && r !== "contents";
}
function dn(t) {
  return /^(table|td|th)$/.test(ot(t));
}
function wt(t) {
  try {
    if (t.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return t.matches(":modal");
  } catch {
    return !1;
  }
}
const mn = /transform|translate|scale|rotate|perspective|filter/, hn = /paint|layout|strict|content/, G = (t) => !!t && t !== "none";
let bt;
function Mt(t) {
  const e = H(t) ? I(t) : t;
  return G(e.transform) || G(e.translate) || G(e.scale) || G(e.rotate) || G(e.perspective) || !Nt() && (G(e.backdropFilter) || G(e.filter)) || mn.test(e.willChange || "") || hn.test(e.contain || "");
}
function pn(t) {
  let e = Z(t);
  for (; K(e) && !tt(e); ) {
    if (Mt(e))
      return e;
    if (wt(e))
      return null;
    e = Z(e);
  }
  return null;
}
function Nt() {
  return bt == null && (bt = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), bt;
}
function tt(t) {
  return /^(html|body|#document)$/.test(ot(t));
}
function I(t) {
  return $(t).getComputedStyle(t);
}
function yt(t) {
  return H(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function Z(t) {
  if (ot(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    jt(t) && t.host || // Fallback.
    Y(t)
  );
  return jt(e) ? e.host : e;
}
function oe(t) {
  const e = Z(t);
  return tt(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : K(e) && st(e) ? e : oe(e);
}
function it(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const r = oe(t), i = r === ((o = t.ownerDocument) == null ? void 0 : o.body), s = $(r);
  if (i) {
    const c = St(s);
    return e.concat(s, s.visualViewport || [], st(r) ? r : [], c && n ? it(c) : []);
  } else
    return e.concat(r, it(r, [], n));
}
function St(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function re(t) {
  const e = I(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const r = K(t), i = r ? t.offsetWidth : n, s = r ? t.offsetHeight : o, c = ft(n) !== i || ft(o) !== s;
  return c && (n = i, o = s), {
    width: n,
    height: o,
    $: c
  };
}
function Ft(t) {
  return H(t) ? t : t.contextElement;
}
function Q(t) {
  const e = Ft(t);
  if (!K(e))
    return X(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = re(e);
  let s = (i ? ft(n.width) : n.width) / o, c = (i ? ft(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const gn = /* @__PURE__ */ X(0);
function ie(t) {
  const e = $(t);
  return !Nt() || !e.visualViewport ? gn : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function wn(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== $(t) ? !1 : e;
}
function J(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const r = t.getBoundingClientRect(), i = Ft(t);
  let s = X(1);
  e && (o ? H(o) && (s = Q(o)) : s = Q(t));
  const c = wn(i, n, o) ? ie(i) : X(0);
  let f = (r.left + c.x) / s.x, a = (r.top + c.y) / s.y, l = r.width / s.x, d = r.height / s.y;
  if (i) {
    const m = $(i), u = o && H(o) ? $(o) : o;
    let h = m, p = St(h);
    for (; p && o && u !== h; ) {
      const v = Q(p), g = p.getBoundingClientRect(), A = I(p), b = g.left + (p.clientLeft + parseFloat(A.paddingLeft)) * v.x, y = g.top + (p.clientTop + parseFloat(A.paddingTop)) * v.y;
      f *= v.x, a *= v.y, l *= v.x, d *= v.y, f += b, a += y, h = $(p), p = St(h);
    }
  }
  return dt({
    width: l,
    height: d,
    x: f,
    y: a
  });
}
function xt(t, e) {
  const n = yt(t).scrollLeft;
  return e ? e.left + n : J(Y(t)).left + n;
}
function se(t, e) {
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - xt(t, n), r = n.top + e.scrollTop;
  return {
    x: o,
    y: r
  };
}
function yn(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: r
  } = t;
  const i = r === "fixed", s = Y(o), c = e ? wt(e.floating) : !1;
  if (o === s || c && i)
    return n;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = X(1);
  const l = X(0), d = K(o);
  if ((d || !d && !i) && ((ot(o) !== "body" || st(s)) && (f = yt(o)), d)) {
    const u = J(o);
    a = Q(o), l.x = u.x + o.clientLeft, l.y = u.y + o.clientTop;
  }
  const m = s && !d && !i ? se(s, f) : X(0);
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - f.scrollLeft * a.x + l.x + m.x,
    y: n.y * a.y - f.scrollTop * a.y + l.y + m.y
  };
}
function xn(t) {
  return Array.from(t.getClientRects());
}
function vn(t) {
  const e = Y(t), n = yt(t), o = t.ownerDocument.body, r = k(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), i = k(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + xt(t);
  const c = -n.scrollTop;
  return I(o).direction === "rtl" && (s += k(e.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: s,
    y: c
  };
}
const Ut = 25;
function bn(t, e) {
  const n = $(t), o = Y(t), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, c = 0, f = 0;
  if (r) {
    i = r.width, s = r.height;
    const l = Nt();
    (!l || l && e === "fixed") && (c = r.offsetLeft, f = r.offsetTop);
  }
  const a = xt(o);
  if (a <= 0) {
    const l = o.ownerDocument, d = l.body, m = getComputedStyle(d), u = l.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, h = Math.abs(o.clientWidth - d.clientWidth - u);
    h <= Ut && (i -= h);
  } else a <= Ut && (i += a);
  return {
    width: i,
    height: s,
    x: c,
    y: f
  };
}
function An(t, e) {
  const n = J(t, !0, e === "fixed"), o = n.top + t.clientTop, r = n.left + t.clientLeft, i = K(t) ? Q(t) : X(1), s = t.clientWidth * i.x, c = t.clientHeight * i.y, f = r * i.x, a = o * i.y;
  return {
    width: s,
    height: c,
    x: f,
    y: a
  };
}
function Kt(t, e, n) {
  let o;
  if (e === "viewport")
    o = bn(t, n);
  else if (e === "document")
    o = vn(Y(t));
  else if (H(e))
    o = An(e, n);
  else {
    const r = ie(t);
    o = {
      x: e.x - r.x,
      y: e.y - r.y,
      width: e.width,
      height: e.height
    };
  }
  return dt(o);
}
function ce(t, e) {
  const n = Z(t);
  return n === e || !H(n) || tt(n) ? !1 : I(n).position === "fixed" || ce(n, e);
}
function Rn(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = it(t, [], !1).filter((c) => H(c) && ot(c) !== "body"), r = null;
  const i = I(t).position === "fixed";
  let s = i ? Z(t) : t;
  for (; H(s) && !tt(s); ) {
    const c = I(s), f = Mt(s);
    !f && c.position === "fixed" && (r = null), (i ? !f && !r : !f && c.position === "static" && !!r && (r.position === "absolute" || r.position === "fixed") || st(s) && !f && ce(t, s)) ? o = o.filter((l) => l !== s) : r = c, s = Z(s);
  }
  return e.set(t, o), o;
}
function On(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = t;
  const s = [...n === "clippingAncestors" ? wt(e) ? [] : Rn(e, this._c) : [].concat(n), o], c = Kt(e, s[0], r);
  let f = c.top, a = c.right, l = c.bottom, d = c.left;
  for (let m = 1; m < s.length; m++) {
    const u = Kt(e, s[m], r);
    f = k(u.top, f), a = q(u.right, a), l = q(u.bottom, l), d = k(u.left, d);
  }
  return {
    width: a - d,
    height: l - f,
    x: d,
    y: f
  };
}
function Pn(t) {
  const {
    width: e,
    height: n
  } = re(t);
  return {
    width: e,
    height: n
  };
}
function En(t, e, n) {
  const o = K(e), r = Y(e), i = n === "fixed", s = J(t, !0, i, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = X(0);
  function a() {
    f.x = xt(r);
  }
  if (o || !o && !i)
    if ((ot(e) !== "body" || st(r)) && (c = yt(e)), o) {
      const u = J(e, !0, i, e);
      f.x = u.x + e.clientLeft, f.y = u.y + e.clientTop;
    } else r && a();
  i && !o && r && a();
  const l = r && !o && !i ? se(r, c) : X(0), d = s.left + c.scrollLeft - f.x - l.x, m = s.top + c.scrollTop - f.y - l.y;
  return {
    x: d,
    y: m,
    width: s.width,
    height: s.height
  };
}
function At(t) {
  return I(t).position === "static";
}
function qt(t, e) {
  if (!K(t) || I(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return Y(t) === n && (n = n.ownerDocument.body), n;
}
function ae(t, e) {
  const n = $(t);
  if (wt(t))
    return n;
  if (!K(t)) {
    let r = Z(t);
    for (; r && !tt(r); ) {
      if (H(r) && !At(r))
        return r;
      r = Z(r);
    }
    return n;
  }
  let o = qt(t, e);
  for (; o && dn(o) && At(o); )
    o = qt(o, e);
  return o && tt(o) && At(o) && !Mt(o) ? n : o || pn(t) || n;
}
const Cn = async function(t) {
  const e = this.getOffsetParent || ae, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: En(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Sn(t) {
  return I(t).direction === "rtl";
}
const Dn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: yn,
  getDocumentElement: Y,
  getClippingRect: On,
  getOffsetParent: ae,
  getElementRects: Cn,
  getClientRects: xn,
  getDimensions: Pn,
  getScale: Q,
  isElement: H,
  isRTL: Sn
};
function le(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Ln(t, e) {
  let n = null, o;
  const r = Y(t);
  function i() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function s(c, f) {
    c === void 0 && (c = !1), f === void 0 && (f = 1), i();
    const a = t.getBoundingClientRect(), {
      left: l,
      top: d,
      width: m,
      height: u
    } = a;
    if (c || e(), !m || !u)
      return;
    const h = at(d), p = at(r.clientWidth - (l + m)), v = at(r.clientHeight - (d + u)), g = at(l), b = {
      rootMargin: -h + "px " + -p + "px " + -v + "px " + -g + "px",
      threshold: k(0, q(1, f)) || 1
    };
    let y = !0;
    function O(R) {
      const x = R[0].intersectionRatio;
      if (x !== f) {
        if (!y)
          return s();
        x ? s(!1, x) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      x === 1 && !le(a, t.getBoundingClientRect()) && s(), y = !1;
    }
    try {
      n = new IntersectionObserver(O, {
        ...b,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(O, b);
    }
    n.observe(t);
  }
  return s(!0), i;
}
function Tn(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, a = Ft(t), l = r || i ? [...a ? it(a) : [], ...e ? it(e) : []] : [];
  l.forEach((g) => {
    r && g.addEventListener("scroll", n, {
      passive: !0
    }), i && g.addEventListener("resize", n);
  });
  const d = a && c ? Ln(a, n) : null;
  let m = -1, u = null;
  s && (u = new ResizeObserver((g) => {
    let [A] = g;
    A && A.target === a && u && e && (u.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var b;
      (b = u) == null || b.observe(e);
    })), n();
  }), a && !f && u.observe(a), e && u.observe(e));
  let h, p = f ? J(t) : null;
  f && v();
  function v() {
    const g = J(t);
    p && !le(p, g) && n(), p = g, h = requestAnimationFrame(v);
  }
  return n(), () => {
    var g;
    l.forEach((A) => {
      r && A.removeEventListener("scroll", n), i && A.removeEventListener("resize", n);
    }), d?.(), (g = u) == null || g.disconnect(), u = null, f && cancelAnimationFrame(h);
  };
}
const Mn = an, Nn = ln, Fn = rn, Wn = un, _n = sn, Zt = on, kn = fn, $n = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Dn,
    ...n
  }, i = {
    ...r.platform,
    _c: o
  };
  return nn(t, e, {
    ...r,
    platform: i
  });
};
var Bn = typeof document < "u", Hn = function() {
}, lt = Bn ? Le : Hn;
function mt(t, e) {
  if (t === e)
    return !0;
  if (typeof t != typeof e)
    return !1;
  if (typeof t == "function" && t.toString() === e.toString())
    return !0;
  let n, o, r;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (n = t.length, n !== e.length) return !1;
      for (o = n; o-- !== 0; )
        if (!mt(t[o], e[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(t), n = r.length, n !== Object.keys(e).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(e, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && t.$$typeof) && !mt(t[i], e[i]))
        return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function fe(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Gt(t, e) {
  const n = fe(t);
  return Math.round(e * n) / n;
}
function Rt(t) {
  const e = w.useRef(t);
  return lt(() => {
    e.current = t;
  }), e;
}
function In(t) {
  t === void 0 && (t = {});
  const {
    placement: e = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: f,
    open: a
  } = t, [l, d] = w.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [m, u] = w.useState(o);
  mt(m, o) || u(o);
  const [h, p] = w.useState(null), [v, g] = w.useState(null), A = w.useCallback((P) => {
    P !== R.current && (R.current = P, p(P));
  }, []), b = w.useCallback((P) => {
    P !== x.current && (x.current = P, g(P));
  }, []), y = i || h, O = s || v, R = w.useRef(null), x = w.useRef(null), E = w.useRef(l), M = f != null, C = Rt(f), F = Rt(r), W = Rt(a), D = w.useCallback(() => {
    if (!R.current || !x.current)
      return;
    const P = {
      placement: e,
      strategy: n,
      middleware: m
    };
    F.current && (P.platform = F.current), $n(R.current, x.current, P).then((N) => {
      const z = {
        ...N,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: W.current !== !1
      };
      S.current && !mt(E.current, z) && (E.current = z, Fe.flushSync(() => {
        d(z);
      }));
    });
  }, [m, e, n, F, W]);
  lt(() => {
    a === !1 && E.current.isPositioned && (E.current.isPositioned = !1, d((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [a]);
  const S = w.useRef(!1);
  lt(() => (S.current = !0, () => {
    S.current = !1;
  }), []), lt(() => {
    if (y && (R.current = y), O && (x.current = O), y && O) {
      if (C.current)
        return C.current(y, O, D);
      D();
    }
  }, [y, O, D, C, M]);
  const _ = w.useMemo(() => ({
    reference: R,
    floating: x,
    setReference: A,
    setFloating: b
  }), [A, b]), L = w.useMemo(() => ({
    reference: y,
    floating: O
  }), [y, O]), T = w.useMemo(() => {
    const P = {
      position: n,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return P;
    const N = Gt(L.floating, l.x), z = Gt(L.floating, l.y);
    return c ? {
      ...P,
      transform: "translate(" + N + "px, " + z + "px)",
      ...fe(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: N,
      top: z
    };
  }, [n, c, L.floating, l.x, l.y]);
  return w.useMemo(() => ({
    ...l,
    update: D,
    refs: _,
    elements: L,
    floatingStyles: T
  }), [l, D, _, L, T]);
}
const zn = (t) => {
  function e(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: t,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof t == "function" ? t(n) : t;
      return o && e(o) ? o.current != null ? Zt({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Zt({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, Vn = (t, e) => {
  const n = Mn(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
}, Xn = (t, e) => {
  const n = Nn(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
}, Yn = (t, e) => ({
  fn: kn(t).fn,
  options: [t, e]
}), jn = (t, e) => {
  const n = Fn(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
}, Un = (t, e) => {
  const n = Wn(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
}, Kn = (t, e) => {
  const n = _n(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
}, qn = (t, e) => {
  const n = zn(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
};
var Zn = "Arrow", ue = w.forwardRef((t, e) => {
  const { children: n, width: o = 10, height: r = 5, ...i } = t;
  return /* @__PURE__ */ B(
    et.svg,
    {
      ...i,
      ref: e,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? n : /* @__PURE__ */ B("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ue.displayName = Zn;
var Gn = ue, Wt = "Popper", [de, mo] = Me(Wt), [Jn, me] = de(Wt), he = (t) => {
  const { __scopePopper: e, children: n } = t, [o, r] = w.useState(null);
  return /* @__PURE__ */ B(Jn, { scope: e, anchor: o, onAnchorChange: r, children: n });
};
he.displayName = Wt;
var pe = "PopperAnchor", ge = w.forwardRef(
  (t, e) => {
    const { __scopePopper: n, virtualRef: o, ...r } = t, i = me(pe, n), s = w.useRef(null), c = ht(e, s), f = w.useRef(null);
    return w.useEffect(() => {
      const a = f.current;
      f.current = o?.current || s.current, a !== f.current && i.onAnchorChange(f.current);
    }), o ? null : /* @__PURE__ */ B(et.div, { ...r, ref: c });
  }
);
ge.displayName = pe;
var _t = "PopperContent", [Qn, to] = de(_t), we = w.forwardRef(
  (t, e) => {
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: c = 0,
      avoidCollisions: f = !0,
      collisionBoundary: a = [],
      collisionPadding: l = 0,
      sticky: d = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: u = "optimized",
      onPlaced: h,
      ...p
    } = t, v = me(_t, n), [g, A] = w.useState(null), b = ht(e, (rt) => A(rt)), [y, O] = w.useState(null), R = Ne(y), x = R?.width ?? 0, E = R?.height ?? 0, M = o + (i !== "center" ? "-" + i : ""), C = typeof l == "number" ? l : { top: 0, right: 0, bottom: 0, left: 0, ...l }, F = Array.isArray(a) ? a : [a], W = F.length > 0, D = {
      padding: C,
      boundary: F.filter(no),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: W
    }, { refs: S, floatingStyles: _, placement: L, isPositioned: T, middlewareData: P } = In({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: M,
      whileElementsMounted: (...rt) => Tn(...rt, {
        animationFrame: u === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        Vn({ mainAxis: r + E, alignmentAxis: s }),
        f && Xn({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Yn() : void 0,
          ...D
        }),
        f && jn({ ...D }),
        Un({
          ...D,
          apply: ({ elements: rt, rects: $t, availableWidth: Ee, availableHeight: Ce }) => {
            const { width: Se, height: De } = $t.reference, ct = rt.floating.style;
            ct.setProperty("--radix-popper-available-width", `${Ee}px`), ct.setProperty("--radix-popper-available-height", `${Ce}px`), ct.setProperty("--radix-popper-anchor-width", `${Se}px`), ct.setProperty("--radix-popper-anchor-height", `${De}px`);
          }
        }),
        y && qn({ element: y, padding: c }),
        oo({ arrowWidth: x, arrowHeight: E }),
        m && Kn({ strategy: "referenceHidden", ...D })
      ]
    }), [N, z] = ve(L), kt = pt(h);
    Ot(() => {
      T && kt?.();
    }, [T, kt]);
    const be = P.arrow?.x, Ae = P.arrow?.y, Re = P.arrow?.centerOffset !== 0, [Oe, Pe] = w.useState();
    return Ot(() => {
      g && Pe(window.getComputedStyle(g).zIndex);
    }, [g]), /* @__PURE__ */ B(
      "div",
      {
        ref: S.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ..._,
          transform: T ? _.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Oe,
          "--radix-popper-transform-origin": [
            P.transformOrigin?.x,
            P.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...P.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ B(
          Qn,
          {
            scope: n,
            placedSide: N,
            onArrowChange: O,
            arrowX: be,
            arrowY: Ae,
            shouldHideArrow: Re,
            children: /* @__PURE__ */ B(
              et.div,
              {
                "data-side": N,
                "data-align": z,
                ...p,
                ref: b,
                style: {
                  ...p.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: T ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
we.displayName = _t;
var ye = "PopperArrow", eo = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, xe = w.forwardRef(function(e, n) {
  const { __scopePopper: o, ...r } = e, i = to(ye, o), s = eo[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ B(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ B(
          Gn,
          {
            ...r,
            ref: n,
            style: {
              ...r.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
xe.displayName = ye;
function no(t) {
  return t !== null;
}
var oo = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    const { placement: n, rects: o, middlewareData: r } = e, s = r.arrow?.centerOffset !== 0, c = s ? 0 : t.arrowWidth, f = s ? 0 : t.arrowHeight, [a, l] = ve(n), d = { start: "0%", center: "50%", end: "100%" }[l], m = (r.arrow?.x ?? 0) + c / 2, u = (r.arrow?.y ?? 0) + f / 2;
    let h = "", p = "";
    return a === "bottom" ? (h = s ? d : `${m}px`, p = `${-f}px`) : a === "top" ? (h = s ? d : `${m}px`, p = `${o.floating.height + f}px`) : a === "right" ? (h = `${-f}px`, p = s ? d : `${u}px`) : a === "left" && (h = `${o.floating.width + f}px`, p = s ? d : `${u}px`), { data: { x: h, y: p } };
  }
});
function ve(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
var ho = he, po = ge, go = we, wo = xe, ro = "Portal", io = w.forwardRef((t, e) => {
  const { container: n, ...o } = t, [r, i] = w.useState(!1);
  Ot(() => i(!0), []);
  const s = n || r && globalThis?.document?.body;
  return s ? We.createPortal(/* @__PURE__ */ B(et.div, { ...o, ref: e }), s) : null;
});
io.displayName = ro;
export {
  po as A,
  go as C,
  He as D,
  io as P,
  ho as R,
  wo as a,
  mo as c
};
