import * as s from "react";
import { jsx as h } from "react/jsx-runtime";
import * as C from "react-dom";
import { c as g } from "./index-DLcqcWxM.js";
function W(e, t = []) {
  let n = [];
  function i(c, u) {
    const r = s.createContext(u), l = n.length;
    n = [...n, u];
    const f = (a) => {
      const { scope: m, children: v, ...p } = a, y = m?.[e]?.[l] || r, b = s.useMemo(() => p, Object.values(p));
      return /* @__PURE__ */ h(y.Provider, { value: b, children: v });
    };
    f.displayName = c + "Provider";
    function d(a, m) {
      const v = m?.[e]?.[l] || r, p = s.useContext(v);
      if (p) return p;
      if (u !== void 0) return u;
      throw new Error(`\`${a}\` must be used within \`${c}\``);
    }
    return [f, d];
  }
  const o = () => {
    const c = n.map((u) => s.createContext(u));
    return function(r) {
      const l = r?.[e] || c;
      return s.useMemo(
        () => ({ [`__scope${e}`]: { ...r, [e]: l } }),
        [r, l]
      );
    };
  };
  return o.scopeName = e, [i, E(o, ...t)];
}
function E(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const i = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(c) {
      const u = i.reduce((r, { useScope: l, scopeName: f }) => {
        const a = l(c)[`__scope${f}`];
        return { ...r, ...a };
      }, {});
      return s.useMemo(() => ({ [`__scope${t.scopeName}`]: u }), [u]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function H(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var S = globalThis?.document ? s.useLayoutEffect : () => {
}, x = s[" useInsertionEffect ".trim().toString()] || S;
function V({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: i
}) {
  const [o, c, u] = R({
    defaultProp: t,
    onChange: n
  }), r = e !== void 0, l = r ? e : o;
  {
    const d = s.useRef(e !== void 0);
    s.useEffect(() => {
      const a = d.current;
      a !== r && console.warn(
        `${i} is changing from ${a ? "controlled" : "uncontrolled"} to ${r ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = r;
    }, [r, i]);
  }
  const f = s.useCallback(
    (d) => {
      if (r) {
        const a = w(d) ? d(e) : d;
        a !== e && u.current?.(a);
      } else
        c(d);
    },
    [r, e, c, u]
  );
  return [l, f];
}
function R({
  defaultProp: e,
  onChange: t
}) {
  const [n, i] = s.useState(e), o = s.useRef(n), c = s.useRef(t);
  return x(() => {
    c.current = t;
  }, [t]), s.useEffect(() => {
    o.current !== n && (c.current?.(n), o.current = n);
  }, [n, o]), [n, i, c];
}
function w(e) {
  return typeof e == "function";
}
function j(e) {
  const [t, n] = s.useState(void 0);
  return S(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const i = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const c = o[0];
        let u, r;
        if ("borderBoxSize" in c) {
          const l = c.borderBoxSize, f = Array.isArray(l) ? l[0] : l;
          u = f.inlineSize, r = f.blockSize;
        } else
          u = e.offsetWidth, r = e.offsetHeight;
        n({ width: u, height: r });
      });
      return i.observe(e, { box: "border-box" }), () => i.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
// @__NO_SIDE_EFFECTS__
function P(e) {
  const t = /* @__PURE__ */ $(e), n = s.forwardRef((i, o) => {
    const { children: c, ...u } = i, r = s.Children.toArray(c), l = r.find(_);
    if (l) {
      const f = l.props.children, d = r.map((a) => a === l ? s.Children.count(f) > 1 ? s.Children.only(null) : s.isValidElement(f) ? f.props.children : null : a);
      return /* @__PURE__ */ h(t, { ...u, ref: o, children: s.isValidElement(f) ? s.cloneElement(f, void 0, d) : null });
    }
    return /* @__PURE__ */ h(t, { ...u, ref: o, children: c });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function $(e) {
  const t = s.forwardRef((n, i) => {
    const { children: o, ...c } = n;
    if (s.isValidElement(o)) {
      const u = A(o), r = O(c, o.props);
      return o.type !== s.Fragment && (r.ref = i ? g(i, u) : u), s.cloneElement(o, r);
    }
    return s.Children.count(o) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var z = /* @__PURE__ */ Symbol("radix.slottable");
function _(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === z;
}
function O(e, t) {
  const n = { ...t };
  for (const i in t) {
    const o = e[i], c = t[i];
    /^on[A-Z]/.test(i) ? o && c ? n[i] = (...r) => {
      const l = c(...r);
      return o(...r), l;
    } : o && (n[i] = o) : i === "style" ? n[i] = { ...o, ...c } : i === "className" && (n[i] = [o, c].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function A(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var N = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], B = N.reduce((e, t) => {
  const n = /* @__PURE__ */ P(`Primitive.${t}`), i = s.forwardRef((o, c) => {
    const { asChild: u, ...r } = o, l = u ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ h(l, { ...r, ref: c });
  });
  return i.displayName = `Primitive.${t}`, { ...e, [t]: i };
}, {});
function L(e, t) {
  e && C.flushSync(() => e.dispatchEvent(t));
}
export {
  B as P,
  H as a,
  j as b,
  W as c,
  S as d,
  L as e,
  V as u
};
