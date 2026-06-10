import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { c as p } from "./index-BKG9JlYH.js";
import "react";
import { c as h } from "./utils-BtlgVD4m.js";
import { Badge as W } from "./badge.js";
import { Checkbox as C } from "./checkbox.js";
import { Pagination as j } from "./pagination.js";
const V = p(
  "w-full bg-transparent overflow-x-auto scroll-smooth @container",
  {
    variants: {
      isMobileScrollable: {
        true: "snap-x snap-mandatory scroll-p-0",
        false: "overflow-hidden"
      }
    },
    defaultVariants: {
      isMobileScrollable: !0
    }
  }
), i = p(
  "px-4 py-5 transition-colors duration-300 ease font-bold whitespace-nowrap snap-start snap-always",
  {
    variants: {
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right"
      },
      variant: {
        header: "text-gi-primary first:rounded-l-[16px] last:rounded-r-[16px]",
        body: "text-gi-primary font-bold"
      },
      mobileFullWidth: {
        true: "min-w-[100cqw] w-[100cqw] sm:min-w-0 sm:w-auto",
        false: "min-w-fit"
      }
    },
    defaultVariants: {
      align: "left",
      variant: "body",
      mobileFullWidth: !1
    }
  }
);
function A({
  columns: f,
  data: m,
  getRowKey: u,
  isSelectable: c = !1,
  selectedRowKeys: o = [],
  onSelectedRowKeysChange: b,
  actions: g,
  pagination: s,
  emptyState: x,
  isMobileScrollable: d = !0,
  dataTestId: y,
  className: v,
  ...N
}) {
  const w = (e, n) => {
    b && b(n ? [...o, e] : o.filter((l) => l !== e));
  }, k = s?.totalElements ?? m.length;
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "table-root",
      "data-testid": y || "table-root",
      className: h("flex flex-col w-full gap-4", v),
      ...N,
      children: [
        /* @__PURE__ */ a("div", { className: V({ isMobileScrollable: d }), children: /* @__PURE__ */ t("table", { className: "w-max min-w-full border-separate border-spacing-y-0 text-sm", children: [
          /* @__PURE__ */ t("thead", { children: [
            /* @__PURE__ */ t("tr", { className: "bg-gi-ash", children: [
              c && /* @__PURE__ */ a(
                "th",
                {
                  className: i({
                    variant: "header",
                    mobileFullWidth: !1
                  })
                }
              ),
              f.map((e) => /* @__PURE__ */ a(
                "th",
                {
                  style: { width: e.width },
                  className: i({
                    align: e.align,
                    variant: "header",
                    mobileFullWidth: d
                  }),
                  children: e.header
                },
                e.key
              )),
              g && /* @__PURE__ */ a(
                "th",
                {
                  className: i({
                    align: "right",
                    variant: "header",
                    mobileFullWidth: d
                  })
                }
              )
            ] }),
            /* @__PURE__ */ a("tr", { className: "h-4", "aria-hidden": "true", children: /* @__PURE__ */ a("td", { colSpan: 100 }) })
          ] }),
          /* @__PURE__ */ a("tbody", { className: "bg-white", children: m.length === 0 ? /* @__PURE__ */ a("tr", { children: /* @__PURE__ */ a(
            "td",
            {
              colSpan: 100,
              className: "p-12 text-center text-gi-gray italic border-y border-gi-dark-ash",
              children: x || "No data available"
            }
          ) }) : m.map((e, n) => {
            const l = u(e), F = o.includes(l);
            return /* @__PURE__ */ t(
              "tr",
              {
                className: "transition-colors duration-300 ease group hover:bg-gi-ash/10",
                children: [
                  c && /* @__PURE__ */ a(
                    "td",
                    {
                      className: h(
                        i({
                          mobileFullWidth: !1
                        }),
                        "px-4 py-5 border-b border-gi-dark-ash",
                        n === 0 && "border-t border-gi-dark-ash"
                      ),
                      children: /* @__PURE__ */ a(
                        C,
                        {
                          label: "",
                          checked: F,
                          onCheckedChange: (r) => w(l, r === !0)
                        }
                      )
                    }
                  ),
                  f.map((r) => /* @__PURE__ */ a(
                    "td",
                    {
                      className: h(
                        i({
                          align: r.align,
                          variant: "body",
                          mobileFullWidth: d
                        }),
                        "border-b border-gi-dark-ash",
                        n === 0 && "border-t border-gi-dark-ash"
                      ),
                      children: r.render ? r.render(e) : e[r.key]
                    },
                    `${l}-${r.key}`
                  )),
                  g && /* @__PURE__ */ a(
                    "td",
                    {
                      className: h(
                        i({
                          align: "right",
                          variant: "body",
                          mobileFullWidth: d
                        }),
                        "px-4 py-5 border-b border-gi-dark-ash font-medium text-gi-primary",
                        n === 0 && "border-t border-gi-dark-ash"
                      ),
                      children: g(e)
                    }
                  )
                ]
              },
              l
            );
          }) })
        ] }) }),
        /* @__PURE__ */ t("div", { className: "flex flex-row items-start justify-between w-full mt-2 px-1", children: [
          /* @__PURE__ */ a("div", { className: "flex items-start", children: c && /* @__PURE__ */ t(
            W,
            {
              type: "success",
              variant: "primary",
              className: "flex items-center justify-center py-1 px-3 bg-gi-ash/40 border-none text-gi-primary font-bold rounded-lg leading-none",
              children: [
                o.length,
                "/",
                k
              ]
            }
          ) }),
          /* @__PURE__ */ a("div", { className: "flex items-start", children: s && /* @__PURE__ */ a(
            j,
            {
              page: s.page,
              totalPages: s.totalPages,
              onChange: s.onChange
            }
          ) })
        ] })
      ]
    }
  );
}
export {
  A as Table,
  A as default
};
