function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
((e) => {
  var t, o, a;
  "function" == typeof define && define.amd && (define(e), (t = !0)),
    "object" ===
      ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
      ((module.exports = e()), (t = !0)),
    t ||
      ((o = window.Cookies),
      ((a = window.Cookies = e()).noConflict = function () {
        return (window.Cookies = o), a;
      }));
})(function () {
  function s() {
    for (var e = 0, t = {}; e < arguments.length; e++) {
      var o,
        a = arguments[e];
      for (o in a) t[o] = a[o];
    }
    return t;
  }
  function l(e) {
    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }
  return (function e(d) {
    function r() {}
    function o(e, t, o) {
      if ("undefined" != typeof document) {
        "number" == typeof (o = s({ path: "/" }, r.defaults, o)).expires &&
          (o.expires = new Date(+new Date() + 864e5 * o.expires)),
          (o.expires = o.expires ? o.expires.toUTCString() : "");
        try {
          var a = JSON.stringify(t);
          /^[\{\[]/.test(a) && (t = a);
        } catch (e) {}
        (t = d.write
          ? d.write(t, e)
          : encodeURIComponent(String(t)).replace(
              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
              decodeURIComponent
            )),
          (e = encodeURIComponent(String(e))
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
            .replace(/[\(\)]/g, escape));
        var i,
          n = "";
        for (i in o)
          o[i] &&
            ((n += "; " + i), !0 !== o[i]) &&
            (n += "=" + o[i].split(";")[0]);
        return (document.cookie = e + "=" + t + n);
      }
    }
    function t(e, t) {
      if ("undefined" != typeof document) {
        for (
          var o = {},
            a = document.cookie ? document.cookie.split("; ") : [],
            i = 0;
          i < a.length;
          i++
        ) {
          var n = a[i].split("="),
            r = n.slice(1).join("=");
          t || '"' !== r.charAt(0) || (r = r.slice(1, -1));
          try {
            var s = l(n[0]),
              r = (d.read || d)(r, s) || l(r);
            if (t)
              try {
                r = JSON.parse(r);
              } catch (e) {}
            if (((o[s] = r), e === s)) break;
          } catch (e) {}
        }
        return e ? o[e] : o;
      }
    }
    return (
      (r.set = o),
      (r.get = function (e) {
        return t(e, !1);
      }),
      (r.getJSON = function (e) {
        return t(e, !0);
      }),
      (r.remove = function (e, t) {
        o(e, "", s(t, { expires: -1 }));
      }),
      (r.defaults = {}),
      (r.withConverter = e),
      r
    );
  })(function () {});
}),
  ((r, s) => {
    var d = s("body"),
      l = s("head"),
      m = "#skin-theme",
      u = ".nk-sidebar",
      c = ".nk-header",
      f = ["demo2", "ecommerce", "lms"],
      n = ["style", "aside", "header", "skin", "mode"],
      i = "light-mode",
      p = "dark-mode",
      h = ".nk-opt-item",
      v = ".nk-opt-list",
      y = {
        demo2: { aside: "is-light", header: "is-light", style: "ui-default" },
        ecommerce: {
          aside: "is-light",
          header: "is-light",
          style: "ui-default",
        },
        lms: { aside: "is-light", header: "is-light", style: "ui-default" },
      };
    (r.Demo = {
      save: function (e, t) {
        Cookies.set(r.Demo.apps(e), t);
      },
      remove: function (e) {
        Cookies.remove(r.Demo.apps(e));
      },
      current: function (e) {
        return Cookies.get(r.Demo.apps(e));
      },
      apps: function (e) {
        for (
          var t,
            o = window.location.pathname.split("/").map(function (e, t, o) {
              return e.replace("-", "");
            }),
            a = 0,
            i = f;
          a < i.length;
          a++
        ) {
          var n = i[a];
          0 <= o.indexOf(n) && (t = n);
        }
        return e ? e + "_" + t : t;
      },
      style: function (e, t) {
        var o = {
          mode: i + " " + p,
          style: "ui-default ui-bordered",
          aside: "is-light is-default is-theme is-dark",
          header: "is-light is-default is-theme is-dark",
        };
        return "all" === e
          ? o[t] || ""
          : "any" === e
          ? o.mode + " " + o.style + " " + o.aside + " " + o.header
          : "body" === e
          ? o.mode + " " + o.style
          : "is-default" === e || "ui-default" === e
          ? ""
          : e;
      },
      skins: function (e) {
        return !e || "default" === e ? "theme" : "theme-" + e;
      },
      defs: function (e) {
        var t = r.Demo.apps(),
          t = y[t][e] || "";
        return r.Demo.current(e) ? r.Demo.current(e) : t;
      },
      apply: function () {
        r.Demo.apps();
        for (var e = 0, t = n; e < t.length; e++) {
          var o,
            a,
            i = t[e];
          ("aside" !== i && "header" !== i && "style" !== i) ||
            ((o = r.Demo.defs(i)),
            s((a = "aside" === i ? u : "header" === i ? c : d)).removeClass(
              r.Demo.style("all", i)
            ),
            "ui-default" !== o && "is-default" !== o && s(a).addClass(o)),
            "mode" === i && r.Demo.update(i, r.Demo.current("mode")),
            "skin" === i && r.Demo.update(i, r.Demo.current("skin"));
        }
        r.Demo.update("dir", r.Demo.current("dir"));
      },
      locked: function (e) {
        !0 === e
          ? (s(h + "[data-key=aside]")
              .add(h + "[data-key=header]")
              .add(h + "[data-key=skin]")
              .addClass("disabled"),
            r.Demo.update("skin", "default", !0),
            s(h + "[data-key=skin]").removeClass("active"),
            s(h + "[data-key=skin][data-update=default]").addClass("active"))
          : s(h + "[data-key=aside]")
              .add(h + "[data-key=header]")
              .add(h + "[data-key=skin]")
              .removeClass("disabled");
      },
      update: function (e, t, o) {
        var a,
          i = r.Demo.style(t, e),
          n = r.Demo.style("all", e);
        r.Demo.apps();
        ("aside" !== e && "header" !== e) ||
          (s((a = "header" == e ? c : u)).removeClass(n), s(a).addClass(i)),
          "mode" === e &&
            (d.removeClass(n).removeAttr("theme"),
            i === p
              ? (d.addClass(i).attr("theme", "dark"), r.Demo.locked(!0))
              : (d.addClass(i).removeAttr("theme"), r.Demo.locked(!1))),
          "style" === e && (d.removeClass(n), d.addClass(i)),
          "skin" === e &&
            ((a = r.Demo.skins(i)),
            (n = s("#skin-default")
              .attr("href")
              .replace("theme", "skins/" + a)),
            "theme" === a
              ? s(m).remove()
              : 0 < s(m).length
              ? s(m).attr("href", n)
              : l.append(
                  '<link id="skin-theme" rel="stylesheet" href="' + n + '">'
                )),
          !0 === o && r.Demo.save(e, t);
      },
      reset: function () {
        var t = r.Demo.apps();
        d.removeClass(r.Demo.style("body")).removeAttr("theme"),
          s(h).removeClass("active"),
          s(m).remove(),
          s(u).removeClass(r.Demo.style("all", "aside")),
          s(c).removeClass(r.Demo.style("all", "header"));
        for (var e = 0, o = n; e < o.length; e++) {
          var a = o[e];
          s("[data-key='" + a + "']").each(function () {
            var e = s(this).data("update");
            ("aside" !== a && "header" !== a && "style" !== a) ||
              (e === y[t][a] && s(this).addClass("active")),
              ("mode" !== a && "skin" !== a) ||
                (e !== i && "default" !== e) ||
                s(this).addClass("active");
          }),
            r.Demo.remove(a);
        }
        s("[data-key='dir']").each(function () {
          s(this).data("update") === r.Demo.current("dir") &&
            s(this).addClass("active");
        }),
          r.Demo.apply();
      },
      load: function () {
        r.Demo.apply(),
          0 < s(h).length &&
            s(h).each(function () {
              var e = s(this).data("update"),
                t = s(this).data("key");
              ("aside" !== t && "header" !== t && "style" !== t) ||
                (e === r.Demo.defs(t) &&
                  (s(this).parent(v).find(h).removeClass("active"),
                  s(this).addClass("active"))),
                ("mode" !== t && "skin" !== t && "dir" !== t) ||
                  (e != r.Demo.current("skin") &&
                    e != r.Demo.current("mode") &&
                    e != r.Demo.current("dir")) ||
                  (s(this).parent(v).find(h).removeClass("active"),
                  s(this).addClass("active"));
            });
      },
      trigger: function () {
        s(h).on("click", function (e) {
          e.preventDefault();
          var e = s(this),
            t = e.parent(v),
            o = e.data("update"),
            a = e.data("key");
          r.Demo.update(a, o, !0),
            t.find(h).removeClass("active"),
            e.addClass("active"),
            "dir" == a &&
              setTimeout(function () {
                window.location.reload();
              }, 100);
        }),
          s(".nk-opt-reset > a").on("click", function (e) {
            e.preventDefault(), r.Demo.reset();
          });
      },
      init: function (e) {
        r.Demo.load(), r.Demo.trigger();
      },
    }),
      r.coms.docReady.push(r.Demo.init),
      (r.Promo = function () {
        var t = s(".pmo-st"),
          o = s(".pmo-lv"),
          e = s(".pmo-close");
        0 < e.length &&
          e.on("click", function () {
            var e = Cookies.get("intm-offer");
            return (
              o.removeClass("active"),
              t.addClass("active"),
              null == e &&
                Cookies.set("intm-offer", "true", { expires: 1, path: "" }),
              !1
            );
          }),
          s(window).on("load", function () {
            (null == Cookies.get("intm-offer") ? o : t).addClass("active");
          });
      }),
      r.coms.docReady.push(r.Promo);
  })(NioApp, jQuery);
