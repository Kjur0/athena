import { jsx as c, Fragment as Q, jsxs as N } from "react/jsx-runtime";
import * as a from "react";
import { forwardRef as Z } from "react";
import { c as M } from "./utils-BtlgVD4m.js";
import { P as j, u as ee, a as C, c as te } from "./index-BjfsKMCT.js";
import { u as F } from "./index-DLcqcWxM.js";
import { R as oe, c as G, A as re, P as ne, a as ae, D as se, C as ie } from "./index-DX4wqrZV.js";
import { a as le } from "./index-CVgaMPSv.js";
import { P as V } from "./index-Bxhh615u.js";
var ce = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function ue(e) {
  const o = ({ children: t }) => /* @__PURE__ */ c(Q, { children: t });
  return o.displayName = `${e}.Slottable`, o.__radixId = ce, o;
}
var pe = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), de = "VisuallyHidden", $ = a.forwardRef(
  (e, o) => /* @__PURE__ */ c(
    j.span,
    {
      ...e,
      ref: o,
      style: { ...pe, ...e.style }
    }
  )
);
$.displayName = de;
var fe = $, [D] = te("Tooltip", [
  G
]), O = G(), z = "TooltipProvider", ve = 700, A = "tooltip.open", [he, S] = D(z), B = (e) => {
  const {
    __scopeTooltip: o,
    delayDuration: t = ve,
    skipDelayDuration: r = 300,
    disableHoverableContent: n = !1,
    children: l
  } = e, i = a.useRef(!0), v = a.useRef(!1), s = a.useRef(0);
  return a.useEffect(() => {
    const p = s.current;
    return () => window.clearTimeout(p);
  }, []), /* @__PURE__ */ c(
    he,
    {
      scope: o,
      isOpenDelayedRef: i,
      delayDuration: t,
      onOpen: a.useCallback(() => {
        window.clearTimeout(s.current), i.current = !1;
      }, []),
      onClose: a.useCallback(() => {
        window.clearTimeout(s.current), s.current = window.setTimeout(
          () => i.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: v,
      onPointerInTransitChange: a.useCallback((p) => {
        v.current = p;
      }, []),
      disableHoverableContent: n,
      children: l
    }
  );
};
B.displayName = z;
var R = "Tooltip", [me, _] = D(R), Y = (e) => {
  const {
    __scopeTooltip: o,
    children: t,
    open: r,
    defaultOpen: n,
    onOpenChange: l,
    disableHoverableContent: i,
    delayDuration: v
  } = e, s = S(R, e.__scopeTooltip), p = O(o), [u, d] = a.useState(null), h = le(), f = a.useRef(0), m = i ?? s.disableHoverableContent, y = v ?? s.delayDuration, T = a.useRef(!1), [x, g] = ee({
    prop: r,
    defaultProp: n ?? !1,
    onChange: (H) => {
      H ? (s.onOpen(), document.dispatchEvent(new CustomEvent(A))) : s.onClose(), l?.(H);
    },
    caller: R
  }), w = a.useMemo(() => x ? T.current ? "delayed-open" : "instant-open" : "closed", [x]), E = a.useCallback(() => {
    window.clearTimeout(f.current), f.current = 0, T.current = !1, g(!0);
  }, [g]), P = a.useCallback(() => {
    window.clearTimeout(f.current), f.current = 0, g(!1);
  }, [g]), I = a.useCallback(() => {
    window.clearTimeout(f.current), f.current = window.setTimeout(() => {
      T.current = !0, g(!0), f.current = 0;
    }, y);
  }, [y, g]);
  return a.useEffect(() => () => {
    f.current && (window.clearTimeout(f.current), f.current = 0);
  }, []), /* @__PURE__ */ c(oe, { ...p, children: /* @__PURE__ */ c(
    me,
    {
      scope: o,
      contentId: h,
      open: x,
      stateAttribute: w,
      trigger: u,
      onTriggerChange: d,
      onTriggerEnter: a.useCallback(() => {
        s.isOpenDelayedRef.current ? I() : E();
      }, [s.isOpenDelayedRef, I, E]),
      onTriggerLeave: a.useCallback(() => {
        m ? P() : (window.clearTimeout(f.current), f.current = 0);
      }, [P, m]),
      onOpen: E,
      onClose: P,
      disableHoverableContent: m,
      children: t
    }
  ) });
};
Y.displayName = R;
var L = "TooltipTrigger", U = a.forwardRef(
  (e, o) => {
    const { __scopeTooltip: t, ...r } = e, n = _(L, t), l = S(L, t), i = O(t), v = a.useRef(null), s = F(o, v, n.onTriggerChange), p = a.useRef(!1), u = a.useRef(!1), d = a.useCallback(() => p.current = !1, []);
    return a.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ c(re, { asChild: !0, ...i, children: /* @__PURE__ */ c(
      j.button,
      {
        "aria-describedby": n.open ? n.contentId : void 0,
        "data-state": n.stateAttribute,
        ...r,
        ref: s,
        onPointerMove: C(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !u.current && !l.isPointerInTransitRef.current && (n.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: C(e.onPointerLeave, () => {
          n.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: C(e.onPointerDown, () => {
          n.open && n.onClose(), p.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: C(e.onFocus, () => {
          p.current || n.onOpen();
        }),
        onBlur: C(e.onBlur, n.onClose),
        onClick: C(e.onClick, n.onClose)
      }
    ) });
  }
);
U.displayName = L;
var k = "TooltipPortal", [Te, ye] = D(k, {
  forceMount: void 0
}), q = (e) => {
  const { __scopeTooltip: o, forceMount: t, children: r, container: n } = e, l = _(k, o);
  return /* @__PURE__ */ c(Te, { scope: o, forceMount: t, children: /* @__PURE__ */ c(V, { present: t || l.open, children: /* @__PURE__ */ c(ne, { asChild: !0, container: n, children: r }) }) });
};
q.displayName = k;
var b = "TooltipContent", W = a.forwardRef(
  (e, o) => {
    const t = ye(b, e.__scopeTooltip), { forceMount: r = t.forceMount, side: n = "top", ...l } = e, i = _(b, e.__scopeTooltip);
    return /* @__PURE__ */ c(V, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ c(X, { side: n, ...l, ref: o }) : /* @__PURE__ */ c(ge, { side: n, ...l, ref: o }) });
  }
), ge = a.forwardRef((e, o) => {
  const t = _(b, e.__scopeTooltip), r = S(b, e.__scopeTooltip), n = a.useRef(null), l = F(o, n), [i, v] = a.useState(null), { trigger: s, onClose: p } = t, u = n.current, { onPointerInTransitChange: d } = r, h = a.useCallback(() => {
    v(null), d(!1);
  }, [d]), f = a.useCallback(
    (m, y) => {
      const T = m.currentTarget, x = { x: m.clientX, y: m.clientY }, g = we(x, T.getBoundingClientRect()), w = Ee(x, g), E = Pe(y.getBoundingClientRect()), P = _e([...w, ...E]);
      v(P), d(!0);
    },
    [d]
  );
  return a.useEffect(() => () => h(), [h]), a.useEffect(() => {
    if (s && u) {
      const m = (T) => f(T, u), y = (T) => f(T, s);
      return s.addEventListener("pointerleave", m), u.addEventListener("pointerleave", y), () => {
        s.removeEventListener("pointerleave", m), u.removeEventListener("pointerleave", y);
      };
    }
  }, [s, u, f, h]), a.useEffect(() => {
    if (i) {
      const m = (y) => {
        const T = y.target, x = { x: y.clientX, y: y.clientY }, g = s?.contains(T) || u?.contains(T), w = !Re(x, i);
        g ? h() : w && (h(), p());
      };
      return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m);
    }
  }, [s, u, i, p, h]), /* @__PURE__ */ c(X, { ...e, ref: l });
}), [xe, Ce] = D(R, { isInside: !1 }), be = /* @__PURE__ */ ue("TooltipContent"), X = a.forwardRef(
  (e, o) => {
    const {
      __scopeTooltip: t,
      children: r,
      "aria-label": n,
      onEscapeKeyDown: l,
      onPointerDownOutside: i,
      ...v
    } = e, s = _(b, t), p = O(t), { onClose: u } = s;
    return a.useEffect(() => (document.addEventListener(A, u), () => document.removeEventListener(A, u)), [u]), a.useEffect(() => {
      if (s.trigger) {
        const d = (h) => {
          h.target?.contains(s.trigger) && u();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [s.trigger, u]), /* @__PURE__ */ c(
      se,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: l,
        onPointerDownOutside: i,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ N(
          ie,
          {
            "data-state": s.stateAttribute,
            ...p,
            ...v,
            ref: o,
            style: {
              ...v.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ c(be, { children: r }),
              /* @__PURE__ */ c(xe, { scope: t, isInside: !0, children: /* @__PURE__ */ c(fe, { id: s.contentId, role: "tooltip", children: n || r }) })
            ]
          }
        )
      }
    );
  }
);
W.displayName = b;
var K = "TooltipArrow", J = a.forwardRef(
  (e, o) => {
    const { __scopeTooltip: t, ...r } = e, n = O(t);
    return Ce(
      K,
      t
    ).isInside ? null : /* @__PURE__ */ c(ae, { ...n, ...r, ref: o });
  }
);
J.displayName = K;
function we(e, o) {
  const t = Math.abs(o.top - e.y), r = Math.abs(o.bottom - e.y), n = Math.abs(o.right - e.x), l = Math.abs(o.left - e.x);
  switch (Math.min(t, r, n, l)) {
    case l:
      return "left";
    case n:
      return "right";
    case t:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Ee(e, o, t = 5) {
  const r = [];
  switch (o) {
    case "top":
      r.push(
        { x: e.x - t, y: e.y + t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x + t, y: e.y - t }
      );
      break;
    case "left":
      r.push(
        { x: e.x + t, y: e.y - t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "right":
      r.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x - t, y: e.y + t }
      );
      break;
  }
  return r;
}
function Pe(e) {
  const { top: o, right: t, bottom: r, left: n } = e;
  return [
    { x: n, y: o },
    { x: t, y: o },
    { x: t, y: r },
    { x: n, y: r }
  ];
}
function Re(e, o) {
  const { x: t, y: r } = e;
  let n = !1;
  for (let l = 0, i = o.length - 1; l < o.length; i = l++) {
    const v = o[l], s = o[i], p = v.x, u = v.y, d = s.x, h = s.y;
    u > r != h > r && t < (d - p) * (r - u) / (h - u) + p && (n = !n);
  }
  return n;
}
function _e(e) {
  const o = e.slice();
  return o.sort((t, r) => t.x < r.x ? -1 : t.x > r.x ? 1 : t.y < r.y ? -1 : t.y > r.y ? 1 : 0), De(o);
}
function De(e) {
  if (e.length <= 1) return e.slice();
  const o = [];
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (; o.length >= 2; ) {
      const l = o[o.length - 1], i = o[o.length - 2];
      if ((l.x - i.x) * (n.y - i.y) >= (l.y - i.y) * (n.x - i.x)) o.pop();
      else break;
    }
    o.push(n);
  }
  o.pop();
  const t = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const n = e[r];
    for (; t.length >= 2; ) {
      const l = t[t.length - 1], i = t[t.length - 2];
      if ((l.x - i.x) * (n.y - i.y) >= (l.y - i.y) * (n.x - i.x)) t.pop();
      else break;
    }
    t.push(n);
  }
  return t.pop(), o.length === 1 && t.length === 1 && o[0].x === t[0].x && o[0].y === t[0].y ? o : o.concat(t);
}
var Oe = B, Ae = Y, Le = U, Ne = q, Se = W, ke = J;
const Ie = ({
  delayDuration: e = 0,
  ...o
}) => /* @__PURE__ */ c(Oe, { delayDuration: e, ...o }), He = Ae, Me = ({
  ...e
}) => /* @__PURE__ */ c(Le, { ...e }), je = ({
  className: e,
  sideOffset: o = 4,
  children: t,
  ...r
}) => /* @__PURE__ */ c(Ne, { children: /* @__PURE__ */ N(
  Se,
  {
    sideOffset: o,
    className: M(
      "bg-gi-primary text-white z-50 w-fit rounded-sm px-3 py-1.5 text-xs animate-in fade-in-0 zoom-in-95 duration-300 ease-in-out",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ c(ke, { className: "fill-gi-primary" })
    ]
  }
) }), Fe = Z(
  ({
    children: e,
    content: o,
    side: t = "top",
    align: r = "center",
    delay: n = 200,
    dataTestId: l,
    className: i,
    open: v,
    ...s
  }, p) => {
    const d = t === "top" || t === "bottom" ? r === "start" ? "end" : r === "end" ? "start" : "center" : r, h = r === "center" ? 0 : 12;
    return /* @__PURE__ */ c(Ie, { delayDuration: n, children: /* @__PURE__ */ N(He, { open: v, children: [
      /* @__PURE__ */ c(Me, { asChild: !0, children: /* @__PURE__ */ c(
        "span",
        {
          ref: p,
          className: M("cursor-pointer inline-block", i),
          ...s,
          children: e
        }
      ) }),
      /* @__PURE__ */ c(
        je,
        {
          side: t,
          align: d,
          alignOffset: h,
          "data-testid": l,
          children: o
        }
      )
    ] }) });
  }
);
Fe.displayName = "Tooltip";
export {
  Fe as Tooltip,
  Fe as default
};
