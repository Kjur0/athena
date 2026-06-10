import * as r from "react";
import y from "react";
import { c as G, u as q, P as K, a as h } from "./index-BjfsKMCT.js";
import { c as z, u as O } from "./index-DLcqcWxM.js";
import { jsx as R } from "react/jsx-runtime";
import { u as Z, a as J } from "./index-CVgaMPSv.js";
// @__NO_SIDE_EFFECTS__
function L(e) {
  const t = /* @__PURE__ */ Q(e), n = r.forwardRef((o, s) => {
    const { children: l, ...d } = o, u = r.Children.toArray(l), g = u.find(ee);
    if (g) {
      const p = g.props.children, a = u.map((S) => S === g ? r.Children.count(p) > 1 ? r.Children.only(null) : r.isValidElement(p) ? p.props.children : null : S);
      return /* @__PURE__ */ R(t, { ...d, ref: s, children: r.isValidElement(p) ? r.cloneElement(p, void 0, a) : null });
    }
    return /* @__PURE__ */ R(t, { ...d, ref: s, children: l });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Q(e) {
  const t = r.forwardRef((n, o) => {
    const { children: s, ...l } = n;
    if (r.isValidElement(s)) {
      const d = oe(s), u = te(l, s.props);
      return s.type !== r.Fragment && (u.ref = o ? z(o, d) : d), r.cloneElement(s, u);
    }
    return r.Children.count(s) > 1 ? r.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var X = /* @__PURE__ */ Symbol("radix.slottable");
function ee(e) {
  return r.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === X;
}
function te(e, t) {
  const n = { ...t };
  for (const o in t) {
    const s = e[o], l = t[o];
    /^on[A-Z]/.test(o) ? s && l ? n[o] = (...u) => {
      const g = l(...u);
      return s(...u), g;
    } : s && (n[o] = s) : o === "style" ? n[o] = { ...s, ...l } : o === "className" && (n[o] = [s, l].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function oe(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function ne(e) {
  const t = e + "CollectionProvider", [n, o] = G(t), [s, l] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), d = (C) => {
    const { scope: c, children: m } = C, v = y.useRef(null), i = y.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ R(s, { scope: c, itemMap: i, collectionRef: v, children: m });
  };
  d.displayName = t;
  const u = e + "CollectionSlot", g = /* @__PURE__ */ L(u), p = y.forwardRef(
    (C, c) => {
      const { scope: m, children: v } = C, i = l(u, m), f = O(c, i.collectionRef);
      return /* @__PURE__ */ R(g, { ref: f, children: v });
    }
  );
  p.displayName = u;
  const a = e + "CollectionItemSlot", S = "data-radix-collection-item", F = /* @__PURE__ */ L(a), b = y.forwardRef(
    (C, c) => {
      const { scope: m, children: v, ...i } = C, f = y.useRef(null), w = O(c, f), _ = l(a, m);
      return y.useEffect(() => (_.itemMap.set(f, { ref: f, ...i }), () => {
        _.itemMap.delete(f);
      })), /* @__PURE__ */ R(F, { [S]: "", ref: w, children: v });
    }
  );
  b.displayName = a;
  function T(C) {
    const c = l(e + "CollectionConsumer", C);
    return y.useCallback(() => {
      const v = c.collectionRef.current;
      if (!v) return [];
      const i = Array.from(v.querySelectorAll(`[${S}]`));
      return Array.from(c.itemMap.values()).sort(
        (_, x) => i.indexOf(_.ref.current) - i.indexOf(x.ref.current)
      );
    }, [c.collectionRef, c.itemMap]);
  }
  return [
    { Provider: d, Slot: p, ItemSlot: b },
    T,
    o
  ];
}
var re = r.createContext(void 0);
function ce(e) {
  const t = r.useContext(re);
  return e || t || "ltr";
}
var P = "rovingFocusGroup.onEntryFocus", se = { bubbles: !1, cancelable: !0 }, A = "RovingFocusGroup", [D, k, ie] = ne(A), [le, Ee] = G(
  A,
  [ie]
), [ae, ue] = le(A), V = r.forwardRef(
  (e, t) => /* @__PURE__ */ R(D.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ R(D.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ R(fe, { ...e, ref: t }) }) })
);
V.displayName = A;
var fe = r.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: o,
    loop: s = !1,
    dir: l,
    currentTabStopId: d,
    defaultCurrentTabStopId: u,
    onCurrentTabStopIdChange: g,
    onEntryFocus: p,
    preventScrollOnEntryFocus: a = !1,
    ...S
  } = e, F = r.useRef(null), b = O(t, F), T = ce(l), [C, c] = q({
    prop: d,
    defaultProp: u ?? null,
    onChange: g,
    caller: A
  }), [m, v] = r.useState(!1), i = Z(p), f = k(n), w = r.useRef(!1), [_, x] = r.useState(0);
  return r.useEffect(() => {
    const I = F.current;
    if (I)
      return I.addEventListener(P, i), () => I.removeEventListener(P, i);
  }, [i]), /* @__PURE__ */ R(
    ae,
    {
      scope: n,
      orientation: o,
      dir: T,
      loop: s,
      currentTabStopId: C,
      onItemFocus: r.useCallback(
        (I) => c(I),
        [c]
      ),
      onItemShiftTab: r.useCallback(() => v(!0), []),
      onFocusableItemAdd: r.useCallback(
        () => x((I) => I + 1),
        []
      ),
      onFocusableItemRemove: r.useCallback(
        () => x((I) => I - 1),
        []
      ),
      children: /* @__PURE__ */ R(
        K.div,
        {
          tabIndex: m || _ === 0 ? -1 : 0,
          "data-orientation": o,
          ...S,
          ref: b,
          style: { outline: "none", ...e.style },
          onMouseDown: h(e.onMouseDown, () => {
            w.current = !0;
          }),
          onFocus: h(e.onFocus, (I) => {
            const j = !w.current;
            if (I.target === I.currentTarget && j && !m) {
              const M = new CustomEvent(P, se);
              if (I.currentTarget.dispatchEvent(M), !M.defaultPrevented) {
                const N = f().filter((E) => E.focusable), H = N.find((E) => E.active), Y = N.find((E) => E.id === C), $ = [H, Y, ...N].filter(
                  Boolean
                ).map((E) => E.ref.current);
                W($, a);
              }
            }
            w.current = !1;
          }),
          onBlur: h(e.onBlur, () => v(!1))
        }
      )
    }
  );
}), U = "RovingFocusGroupItem", B = r.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: o = !0,
      active: s = !1,
      tabStopId: l,
      children: d,
      ...u
    } = e, g = J(), p = l || g, a = ue(U, n), S = a.currentTabStopId === p, F = k(n), { onFocusableItemAdd: b, onFocusableItemRemove: T, currentTabStopId: C } = a;
    return r.useEffect(() => {
      if (o)
        return b(), () => T();
    }, [o, b, T]), /* @__PURE__ */ R(
      D.ItemSlot,
      {
        scope: n,
        id: p,
        focusable: o,
        active: s,
        children: /* @__PURE__ */ R(
          K.span,
          {
            tabIndex: S ? 0 : -1,
            "data-orientation": a.orientation,
            ...u,
            ref: t,
            onMouseDown: h(e.onMouseDown, (c) => {
              o ? a.onItemFocus(p) : c.preventDefault();
            }),
            onFocus: h(e.onFocus, () => a.onItemFocus(p)),
            onKeyDown: h(e.onKeyDown, (c) => {
              if (c.key === "Tab" && c.shiftKey) {
                a.onItemShiftTab();
                return;
              }
              if (c.target !== c.currentTarget) return;
              const m = me(c, a.orientation, a.dir);
              if (m !== void 0) {
                if (c.metaKey || c.ctrlKey || c.altKey || c.shiftKey) return;
                c.preventDefault();
                let i = F().filter((f) => f.focusable).map((f) => f.ref.current);
                if (m === "last") i.reverse();
                else if (m === "prev" || m === "next") {
                  m === "prev" && i.reverse();
                  const f = i.indexOf(c.currentTarget);
                  i = a.loop ? Ie(i, f + 1) : i.slice(f + 1);
                }
                setTimeout(() => W(i));
              }
            }),
            children: typeof d == "function" ? d({ isCurrentTabStop: S, hasTabStop: C != null }) : d
          }
        )
      }
    );
  }
);
B.displayName = U;
var de = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function pe(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function me(e, t, n) {
  const o = pe(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return de[o];
}
function W(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Ie(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var ye = V, Fe = B;
export {
  Fe as I,
  ye as R,
  ne as a,
  Ee as c,
  ce as u
};
