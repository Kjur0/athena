import * as t from "react";
import { d as a } from "./index-BjfsKMCT.js";
var o = t[" useId ".trim().toString()] || (() => {
}), n = 0;
function f(r) {
  const [e, u] = t.useState(o());
  return a(() => {
    u((s) => s ?? String(n++));
  }, [r]), e ? `radix-${e}` : "";
}
function i(r) {
  const e = t.useRef(r);
  return t.useEffect(() => {
    e.current = r;
  }), t.useMemo(() => (...u) => e.current?.(...u), []);
}
export {
  f as a,
  i as u
};
