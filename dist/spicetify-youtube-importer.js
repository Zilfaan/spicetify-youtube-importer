(async () => {
  for (; !Spicetify.React || !Spicetify.ReactDOM; )
    await new Promise((e) => setTimeout(e, 10));
  var l,
    r,
    n,
    o,
    i,
    s,
    d,
    u,
    c,
    N,
    e,
    t,
    a,
    p,
    f,
    m,
    L,
    T,
    I,
    R,
    B,
    g,
    y,
    D,
    h,
    b,
    v,
    w,
    x,
    O;
  function P() {
    var e = 2 * Math.PI * 23.25,
      t = 0.25 * e;
    return g.default.createElement(
      "div",
      {
        role: "status",
        "aria-live": "polite",
        "aria-label": "loading",
        style: {
          display: "block",
          margin: "15px auto 0",
          width: 32,
          height: 32,
        },
      },
      g.default.createElement(
        "svg",
        {
          width: 32,
          height: 32,
          viewBox: "0 0 50 50",
          style: { transform: "rotate(-90deg)" },
          "aria-hidden": "true",
        },
        g.default.createElement("circle", {
          cx: 25,
          cy: 25,
          r: 23.25,
          fill: "none",
          stroke: "rgba(255,255,255,0.08)",
          strokeWidth: 3.5,
        }),
        g.default.createElement("circle", {
          cx: 25,
          cy: 25,
          r: 23.25,
          fill: "none",
          stroke: "var(--spice-button, #1db954)",
          strokeWidth: 3.5,
          strokeLinecap: "round",
          strokeDasharray: t + " " + (e - t),
          style: {
            transformOrigin: "50% 50%",
            animation:
              "spice-rotate 1s linear infinite, spice-dash 1.5s ease-in-out infinite",
          },
        }),
        g.default.createElement(
          "style",
          null,
          `
          @keyframes spice-rotate {
            100% { transform: rotate(360deg); }
          }
          @keyframes spice-dash {
            0% { stroke-dashoffset: 0; }
            50% { stroke-dashoffset: ${0.15 * -e}; }
            100% { stroke-dashoffset: 0; }
          }
        `
        )
      )
    );
  }
  function E() {
    let [t, a] = (0, L.useState)(""),
      [e, i] = (0, L.useState)(null),
      [s, l] = (0, L.useState)("invalid"),
      [d, r] = (0, L.useState)(null),
      [u, n] = (0, L.useState)([]),
      [c, o] = (0, L.useState)(new Set()),
      [p, f] = (0, L.useState)(!1),
      [m, g] = (0, L.useState)(!1),
      [y, h] = (0, L.useState)([]),
      [b, v] = (0, L.useState)([]),
      [, w] = (0, L.useState)(0),
      [x, E] =
        ((0, L.useEffect)(() => {
          let e = setInterval(() => {
            w((e) => e + 1);
          }, 1e3);
          return () => clearInterval(e);
        }, []),
        (0, L.useState)(null)),
      S = O.getFieldValue("backend-server"),
      k = (e) => {
        e = e.split(":");
        return 2 < e.length || 5 < parseInt(e[0]);
      };
    async function C(e, l, i) {
      var r,
        n,
        i = i || x;
      if (!i) throw new Error("No download directory provided");
      let t = (l || e).replace(/[\/\\?%*:|"<>]/g, "_"),
        o = Date.now();
      h((e) => [...e, { title: t, startTime: o }]);
      try {
        var s = await fetch(S + "/audio/" + e);
        if (!s.ok) throw new Error(`Failed to download (${s.status})`);
        let t = l || e;
        var d = (t = t.replace(/[\/\\?%*:|"<>]/g, "_")) + ` [${e}].mp3`,
          u = await s.arrayBuffer(),
          c = s.headers.get("Content-Type") || "audio/mpeg",
          p = new Blob([u], { type: c });
        (n = p),
          await (r = await (
            await (r = i).getFileHandle(d, { create: !0 })
          ).createWritable()).write(n),
          await r.close(),
          Spicetify.showNotification("Saved " + d, !1);
        let a = Math.floor((Date.now() - o) / 1e3);
        v((e) => [...e, { title: t, time: a, status: "success" }]);
      } catch (e) {
        console.error("download error", e),
          Spicetify.showNotification("Failed to save file", !0),
          v((e) => [...e, { title: t, status: "failed" }]);
      } finally {
        h((e) => e.filter((e) => e.title !== t));
      }
    }
    return (
      (0, L.useEffect)(() => {
        var e;
        i(null),
          n([]),
          o(new Set()),
          r(null),
          I(t)
            ? T(t)
              ? (l("playlist"),
                (e = B(t)) &&
                  (async (e) => {
                    let t = [];
                    try {
                      f(!0), n([]), i(null);
                      var a = await fetch(S + "/playlist/" + e);
                      if (!a.ok) throw new Error("HTTP error! " + a.status);
                      var l = (await a.json()).filter(
                        (e) => !k(e.duration) || (t.push(e.id), !1)
                      );
                      0 < t.length &&
                        i(
                          "Hid " +
                            t.length +
                            " videos which exceeded the 5 minute limit."
                        ),
                        n(l || []);
                    } catch (e) {
                      console.error("Error fetching playlist info:", e),
                        i("Failed to fetch playlist details");
                    } finally {
                      f(!1);
                    }
                  })(e))
              : (l("video"),
                (e = R(t)) &&
                  (async (e) => {
                    try {
                      f(!0), r(null), i(null);
                      var t = await fetch(S + "/video/" + e);
                      if (!t.ok) throw new Error("HTTP error! " + t.status);
                      var a = await t.json();
                      k(a.duration) ? i("Video " + e + " is too long") : r(a);
                    } catch (e) {
                      console.error("Error fetching video info:", e),
                        i("Failed to fetch video details");
                    } finally {
                      f(!1);
                    }
                  })(e))
            : l("invalid");
      }, [t]),
      (0, L.useEffect)(() => {
        o(new Set());
      }, [u]),
      Spicetify.LocalStorage.get("youtubeDLTutCompleted")
        ? 0 < b.length || 0 < y.length
          ? L.default.createElement(
              "div",
              {
                style: {
                  padding: "10px",
                  borderRadius: "8px",
                  maxHeight: "200px",
                  overflowY: "auto",
                  fontSize: "13px",
                },
              },
              L.default.createElement(
                "p",
                { style: { marginBottom: 10 } },
                "You may close the tab, but please stay on the app as the download may fail otherwise."
              ),
              b.map((e, t) =>
                L.default.createElement(
                  "div",
                  {
                    key: t,
                    style: {
                      color: "success" === e.status ? "#1db954" : "#ff4d4d",
                      marginBottom: "4px",
                    },
                  },
                  "success" === e.status
                    ? `Downloaded ${e.title} in ${e.time}s`
                    : "Failed to download " + e.title
                )
              ),
              y.map((e, t) => {
                var a = Math.floor((Date.now() - e.startTime) / 1e3);
                return L.default.createElement(
                  "div",
                  { key: "active-" + t, style: { color: "#aaa" } },
                  "Downloading: ",
                  L.default.createElement("strong", null, e.title),
                  " for ",
                  a,
                  "s"
                );
              })
            )
          : L.default.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                },
              },
              L.default.createElement(
                "label",
                {
                  style: {
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "var(--spice-text)",
                    marginBottom: "2px",
                    display: "block",
                  },
                },
                "YouTube URL:"
              ),
              L.default.createElement("input", {
                type: "text",
                placeholder: "Paste YouTube link...",
                value: t,
                onChange: (e) => a(e.target.value),
                style: {
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid var(--spice-border, #444)",
                  backgroundColor: "var(--spice-background, #222)",
                  color: "var(--spice-text, #eee)",
                  fontSize: "14px",
                  outline: "none",
                  width: "100%",
                  boxSizing: "border-box",
                },
              }),
              "playlist" === s
                ? p
                  ? L.default.createElement(P, null)
                  : L.default.createElement(
                      "div",
                      null,
                      u.length &&
                        L.default.createElement("h3", null, "Playlist"),
                      L.default.createElement(
                        "ul",
                        {
                          style: {
                            maxHeight: "200px",
                            overflowY: "auto",
                            marginTop: 15,
                            padding: 0,
                            listStyle: "none",
                          },
                        },
                        u.map((e, t) => {
                          var a = c.has(e.id);
                          return L.default.createElement(
                            "li",
                            {
                              key: t,
                              onClick: () => {
                                var t;
                                (t = e.id),
                                  o((e) => {
                                    e = new Set(e);
                                    return e.has(t) ? e.delete(t) : e.add(t), e;
                                  });
                              },
                              style: {
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                marginBottom: "8px",
                                padding: "8px 12px",
                                borderLeft: a
                                  ? "4px solid var(--spice-button, #1db954)"
                                  : "4px solid transparent",
                                color: a
                                  ? "var(--spice-text, #eee)"
                                  : "var(--spice-text-muted, #aaa)",
                                fontWeight: a ? 600 : 400,
                                transition:
                                  "border-color 0.3s ease, color 0.3s ease",
                                userSelect: "none",
                              },
                            },
                            L.default.createElement("img", {
                              src:
                                null ==
                                (a =
                                  null ==
                                  (t = null == e ? void 0 : e.thumbnails)
                                    ? void 0
                                    : t[0])
                                  ? void 0
                                  : a.url,
                              alt: null == e ? void 0 : e.title,
                              width: 80,
                              height: 45,
                              style: { borderRadius: "6px", flexShrink: 0 },
                            }),
                            L.default.createElement(
                              "span",
                              { style: { flex: 1, userSelect: "text" } },
                              "string" == typeof e.title
                                ? e.title
                                : (null == (t = e.title) ? void 0 : t.text) ||
                                    "Untitled"
                            ),
                            L.default.createElement(
                              "span",
                              {
                                style: {
                                  marginLeft: "auto",
                                  fontSize: 10,
                                  color: "#aaa",
                                },
                              },
                              e.duration || "-"
                            )
                          );
                        })
                      )
                    )
                : "video" === s
                ? p
                  ? L.default.createElement(P, null)
                  : d
                  ? L.default.createElement(
                      "div",
                      {
                        style: {
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        },
                      },
                      L.default.createElement("img", {
                        src:
                          null ==
                          (F =
                            null == (F = null == d ? void 0 : d.thumbnails)
                              ? void 0
                              : F[0])
                            ? void 0
                            : F.url,
                        alt: null == d ? void 0 : d.title,
                        width: 120,
                        height: 67,
                      }),
                      L.default.createElement(
                        "div",
                        null,
                        L.default.createElement("h4", null, d.title),
                        L.default.createElement(
                          "p",
                          null,
                          "Duration: ",
                          d.duration
                        )
                      )
                    )
                  : null
                : null,
              e &&
                L.default.createElement(
                  "div",
                  { style: { color: "red", fontSize: "13px" } },
                  e
                ),
              L.default.createElement(
                "div",
                { style: { display: "flex", justifyContent: "flex-end" } },
                L.default.createElement(
                  "button",
                  {
                    type: "button",
                    disabled: !I(t),
                    onMouseOver: () => g(!0),
                    onMouseLeave: () => g(!1),
                    style: N(
                      {
                        border: "none",
                        width: "13%",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        borderRadius: "20px",
                        backgroundColor: "var(--spice-button, #1db954)",
                        color: "var(--spice-text)",
                        transition: "all",
                        cursor: d || 0 < c.size ? "pointer" : "not-allowed",
                        opacity: d || 0 < c.size ? 1 : 0.8,
                      },
                      m && (d || 0 < c.size)
                        ? { filter: "brightness(0.85)" }
                        : {}
                    ),
                    onClick: async () => {
                      if (t.trim())
                        if ("playlist" === s && 0 === c.size)
                          Spicetify.showNotification(
                            "Please select at least one video!",
                            !0
                          );
                        else {
                          let a = x;
                          if (
                            a ||
                            (a = await (async () => {
                              try {
                                var e = await window.showDirectoryPicker();
                                return E(e), e;
                              } catch (e) {
                                return (
                                  console.warn(
                                    "Directory pick cancelled or failed",
                                    e
                                  ),
                                  null
                                );
                              }
                            })())
                          )
                            if ("video" === s && null != d && d.id)
                              await C(d.id, d.title, a);
                            else if ("playlist" === s) {
                              var l = a;
                              let e,
                                t = l || x;
                              if (!t) throw new Error("No download dir");
                              var i = u.filter((e) => c.has(e.id));
                              if (O.getFieldValue("download-parallelly")) {
                                var r = parseInt(O.getFieldValue("batch-size"));
                                for (let e = 0; e < i.length; e += r) {
                                  var n = i
                                    .slice(e, e + r)
                                    .map((e) =>
                                      C(
                                        e.id,
                                        "string" == typeof e.title
                                          ? e.title
                                          : null == (e = e.title)
                                          ? void 0
                                          : e.text,
                                        t
                                      )
                                    );
                                  await Promise.all(n);
                                }
                              } else
                                for (var o of i)
                                  await C(
                                    o.id,
                                    "string" == typeof o.title
                                      ? o.title
                                      : null == (e = o.title)
                                      ? void 0
                                      : e.text,
                                    t
                                  );
                              return void (await 0);
                            }
                        }
                      else
                        Spicetify.showNotification(
                          "Please enter a YouTube URL!",
                          !0
                        );
                    },
                  },
                  "Add"
                )
              )
            )
        : L.default.createElement(D, null)
    );
    var F;
  }
  function S() {
    var e = document.querySelector(
        'button.AIlmv6h8bR5NY5R0VceT[aria-label="Create"]'
      ),
      t =
        null ==
        (t = document.querySelector(
          '[id^="tippy-"][data-tippy-root] > #context-menu'
        ))
          ? void 0
          : t.getElementsByTagName("ul")[0],
      t =
        (t &&
          t.querySelector(
            'button[aria-describedby="subtitle-global-create-playlist"]'
          ) &&
          e instanceof HTMLElement &&
          e.click(),
        document.createElement("div"));
    Spicetify.ReactDOM.createRoot(t).render(m.default.createElement(E, null)),
      Spicetify.PopupModal.display({
        title: "Import a Song or Playlist from Youtube",
        content: t,
        isLarge: !0,
      });
  }
  (l = Object.create),
    (r = Object.defineProperty),
    (n = Object.getOwnPropertyDescriptor),
    (o = Object.getOwnPropertyNames),
    (i = Object.getOwnPropertySymbols),
    (s = Object.getPrototypeOf),
    (d = Object.prototype.hasOwnProperty),
    (u = Object.prototype.propertyIsEnumerable),
    (c = (e, t, a) =>
      t in e
        ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
        : (e[t] = a)),
    (N = (e, t) => {
      for (var a in (t = t || {})) d.call(t, a) && c(e, a, t[a]);
      if (i) for (var a of i(t)) u.call(t, a) && c(e, a, t[a]);
      return e;
    }),
    (t = (e, t, a) => (
      (a = null != e ? l(s(e)) : {}),
      ((t, a, l, i) => {
        if ((a && "object" == typeof a) || "function" == typeof a)
          for (let e of o(a))
            d.call(t, e) ||
              e === l ||
              r(t, e, {
                get: () => a[e],
                enumerable: !(i = n(a, e)) || i.enumerable,
              });
        return t;
      })(
        !t && e && e.__esModule
          ? a
          : r(a, "default", { value: e, enumerable: !0 }),
        e
      )
    )),
    (a = (e = (e, t) =>
      function () {
        return (
          t || (0, e[o(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      })({
      "external-global-plugin:react"(e, t) {
        t.exports = Spicetify.React;
      },
    })),
    (e = e({
      "external-global-plugin:react-dom"(e, t) {
        t.exports = Spicetify.ReactDOM;
      },
    })),
    (p = t(a())),
    (f = t(a())),
    (m = t(a())),
    (L = t(a())),
    (T = (e) => {
      try {
        var t = new URL(e).searchParams.get("list");
        return t && 0 !== t.length ? !t.startsWith("RD") : !1;
      } catch (e) {
        return !1;
      }
    }),
    (I = (e) => {
      try {
        var t = new URL(e),
          a = t.hostname.toLowerCase();
        if (
          "www.youtube.com" === a ||
          "youtube.com" === a ||
          "m.youtube.com" === a ||
          "youtu.be" === a
        ) {
          if (a.includes("youtube.com"))
            return t.searchParams.has("v") || t.searchParams.has("list");
          if ("youtu.be" === a) return 1 < t.pathname.length;
        }
        return !1;
      } catch (e) {
        return !1;
      }
    }),
    (R = (e) => {
      e = e.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:[?&]|$)/);
      return e ? e[1] : null;
    }),
    (B = (e) => {
      e = e.match(/[?&]list=([a-zA-Z0-9_-]+)/);
      return e ? e[1] : null;
    }),
    (g = t(a())),
    (y = t(a())),
    (D = () =>
      y.default.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "var(--spice-text)",
          },
        },
        y.default.createElement(
          "div",
          {
            style: {
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            },
          },
          y.default.createElement(
            "p",
            {
              style: {
                lineHeight: "1.8",
                marginBottom: "2rem",
                paddingLeft: "1.5rem",
              },
            },
            "1. Paste your YouTube video or playlist link in the search bar.",
            y.default.createElement("br", null),
            "2. Click ",
            y.default.createElement("b", null, "Download"),
            " to start the process.",
            y.default.createElement("br", null),
            "3. Select a valid location to save the files to.",
            y.default.createElement("br", null),
            "4. Wait for the download(s) to finish — you'll see a notification when it's done.",
            y.default.createElement("br", null),
            "5. For playlists, you can select what videos to download, and it will sequentially download each of them."
          ),
          y.default.createElement(
            "div",
            {
              style: {
                background: "rgba(255, 200, 0, 0.1)",
                borderLeft: "4px solid var(--spice-highlight)",
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "6px",
              },
            },
            "⚠️ If you get ",
            y.default.createElement("code", null, "NaN:NaN"),
            " for a video link, put the video into a playlist and use that playlist link instead."
          ),
          y.default.createElement(
            "div",
            {
              style: {
                background: "rgba(0, 200, 255, 0.1)",
                borderLeft: "4px solid var(--spice-highlight)",
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "6px",
              },
            },
            "💡 Stay tabbed in while downloading, and grant any permissions that are requested, Chromium limits file-saving without them."
          ),
          y.default.createElement(
            "div",
            {
              style: {
                background: "rgba(0, 255, 150, 0.1)",
                borderLeft: "4px solid var(--spice-success)",
                padding: "1rem",
                marginBottom: "2rem",
                borderRadius: "6px",
              },
            },
            "✅ Make sure you have manually enabled Local Files in your spotify settings and added the location your downloading the songs to."
          ),
          y.default.createElement(
            "button",
            {
              onClick: () => {
                Spicetify.LocalStorage.set("youtubeDLTutCompleted", "true");
              },
              style: {
                padding: "0.75rem 1.5rem",
                background: "var(--spice-button)",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "background 0.2s ease",
              },
              onMouseOver: (e) =>
                (e.currentTarget.style.background = "var(--spice-button)"),
              onMouseOut: (e) =>
                (e.currentTarget.style.background =
                  "var(--spice-button-active))"),
            },
            "Got it"
          )
        )
      )),
    (h = {
      "--box-padding-block-start": "2px",
      "--box-padding-block-end": "2px",
      "--box-padding-inline-start": "calc(var(--encore-spacing-tighter) - 4px)",
      "--box-padding-inline-end": "var(--encore-spacing-tighter)",
      "--box-min-block-size": "56px",
    }),
    (b = () => {
      let [e, t] = (0, f.useState)(!1);
      return f.default.createElement(
        "button",
        {
          onClick: S,
          id: "spicetify-youtube-menuitem",
          className: "kLKq7fz4Llya50jObe9a",
          role: "menuitem",
          tabIndex: -1,
          onMouseOver: () => t(!0),
          onMouseLeave: () => t(!1),
          "aria-describedby": "subtitle-global-create-youtube",
        },
        f.default.createElement(
          "div",
          {
            className:
              "e-91000-box e-91000-baseline e-91000-box--naked e-91000-box--browser-default-focus e-91000-box--padding-custom e-91000-box--min-size e-91000-Box-sc-8t9c76-0 Box-group-naked-listRow-hasLeadingOrMedia-minBlockSize_56px",
            style: h,
          },
          f.default.createElement(
            "div",
            { className: "Areas__HeaderSideArea-sc-8gfrea-1 HeaderSideArea" },
            f.default.createElement(
              "div",
              {
                className:
                  "Areas__HeaderSideAreaFlexContainer-sc-8gfrea-2 HeaderSideAreaFlexContainer",
              },
              f.default.createElement(
                "div",
                {
                  className:
                    "Areas__InteractiveArea-sc-8gfrea-0 Areas__LeadingSlot-sc-8gfrea-6 bJSfgC hUkHtl",
                },
                f.default.createElement(
                  "div",
                  { className: "uKWufPQjLFxGolUWWIqH" },
                  f.default.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "25",
                      height: "25",
                      fill: e ? "#1DB954" : "currentColor",
                      style: e
                        ? { transition: "all", transform: "rotate(5deg)" }
                        : {},
                      className: "bi bi-youtube",
                      viewBox: "0 0 16 16",
                    },
                    f.default.createElement("path", {
                      d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z",
                    })
                  )
                )
              )
            )
          ),
          f.default.createElement(
            "div",
            { className: "Areas__HeaderArea-sc-8gfrea-3 HeaderArea" },
            f.default.createElement(
              "div",
              {
                className:
                  "Areas__InteractiveArea-sc-8gfrea-0 Areas__Column-sc-8gfrea-5 bJSfgC Column-lg",
              },
              f.default.createElement(
                "p",
                {
                  className:
                    "e-91000-text encore-text-body-medium-bold ListRowTitle__ListRowText-sc-1xe2if1-1",
                  id: "listrow-title-global-create-youtube",
                },
                "Add From Youtube"
              ),
              f.default.createElement(
                "p",
                {
                  className:
                    "e-91000-text encore-text-body-small encore-internal-color-text-subdued ListRowDetails__ListRowDetailText-sc-sozu4l-0",
                  id: "subtitle-global-create-youtube",
                },
                "Add a song or playlist from youtube"
              )
            )
          )
        )
      );
    }),
    (v = t(a())),
    (w = t(e())),
    (x = class {
      constructor(e, t, a = {}) {
        (this.name = e),
          (this.settingsId = t),
          (this.initialSettingsFields = a),
          (this.settingsFields = this.initialSettingsFields),
          (this.setRerender = null),
          (this.pushSettings = async () => {
            for (
              Object.entries(this.settingsFields).forEach(([e, t]) => {
                "button" !== t.type &&
                  void 0 === this.getFieldValue(e) &&
                  this.setFieldValue(e, t.defaultValue);
              });
              !Spicetify?.Platform?.History?.listen;

            )
              await new Promise((e) => setTimeout(e, 100));
            this.stopHistoryListener && this.stopHistoryListener(),
              (this.stopHistoryListener = Spicetify.Platform.History.listen(
                (e) => {
                  "/preferences" === e.pathname && this.render();
                }
              )),
              "/preferences" === Spicetify.Platform.History.location.pathname &&
                (await this.render());
          }),
          (this.rerender = () => {
            this.setRerender && this.setRerender(Math.random());
          }),
          (this.render = async () => {
            for (
              ;
              !document.getElementById("desktop.settings.selectLanguage");

            ) {
              if (
                "/preferences" !== Spicetify.Platform.History.location.pathname
              )
                return;
              await new Promise((e) => setTimeout(e, 100));
            }
            var e = document.querySelector(
              ".main-view-container__scroll-node-child main div"
            );
            if (!e)
              return console.error(
                "[spcr-settings] settings container not found"
              );
            let t = Array.from(e.children).find(
              (e) => e.id === this.settingsId
            );
            t
              ? console.log(t)
              : (((t = document.createElement("div")).id = this.settingsId),
                e.appendChild(t)),
              w.default.render(
                v.default.createElement(this.FieldsContainer, null),
                t
              );
          }),
          (this.addButton = (e, t, a, l, i) => {
            this.settingsFields[e] = {
              type: "button",
              description: t,
              value: a,
              events: { onClick: l, ...i },
            };
          }),
          (this.addInput = (e, t, a, l, i, r) => {
            this.settingsFields[e] = {
              type: "input",
              description: t,
              defaultValue: a,
              inputType: i,
              events: { onChange: l, ...r },
            };
          }),
          (this.addHidden = (e, t) => {
            this.settingsFields[e] = { type: "hidden", defaultValue: t };
          }),
          (this.addToggle = (e, t, a, l, i) => {
            this.settingsFields[e] = {
              type: "toggle",
              description: t,
              defaultValue: a,
              events: { onChange: l, ...i },
            };
          }),
          (this.addDropDown = (e, t, a, l, i, r) => {
            this.settingsFields[e] = {
              type: "dropdown",
              description: t,
              defaultValue: a[l],
              options: a,
              events: { onSelect: i, ...r },
            };
          }),
          (this.getFieldValue = (e) =>
            JSON.parse(
              Spicetify.LocalStorage.get(this.settingsId + "." + e) || "{}"
            )?.value),
          (this.setFieldValue = (e, t) => {
            Spicetify.LocalStorage.set(
              this.settingsId + "." + e,
              JSON.stringify({ value: t })
            );
          }),
          (this.FieldsContainer = () => {
            var [e, t] = (0, v.useState)(0);
            return (
              (this.setRerender = t),
              v.default.createElement(
                "div",
                { className: "x-settings-section", key: e },
                v.default.createElement(
                  "h2",
                  { className: "TypeElement-cello-textBase-type" },
                  this.name
                ),
                Object.entries(this.settingsFields).map(([e, t]) =>
                  v.default.createElement(this.Field, { nameId: e, field: t })
                )
              )
            );
          }),
          (this.Field = (a) => {
            var e = this.settingsId + "." + a.nameId;
            let t;
            if (
              ((t =
                "button" === a.field.type
                  ? a.field.value
                  : this.getFieldValue(a.nameId)),
              "hidden" === a.field.type)
            )
              return v.default.createElement(v.default.Fragment, null);
            let [l, i] = (0, v.useState)(t),
              r = (e) => {
                void 0 !== e && (i(e), this.setFieldValue(a.nameId, e));
              };
            return v.default.createElement(
              "div",
              { className: "x-settings-row" },
              v.default.createElement(
                "div",
                { className: "x-settings-firstColumn" },
                v.default.createElement(
                  "label",
                  {
                    className: "TypeElement-viola-textSubdued-type",
                    htmlFor: e,
                  },
                  a.field.description || ""
                )
              ),
              v.default.createElement(
                "div",
                { className: "x-settings-secondColumn" },
                "input" === a.field.type
                  ? v.default.createElement("input", {
                      className: "x-settings-input",
                      id: e,
                      dir: "ltr",
                      value: l,
                      type: a.field.inputType || "text",
                      ...a.field.events,
                      onChange: (e) => {
                        r(e.currentTarget.value);
                        var t = a.field.events?.onChange;
                        t && t(e);
                      },
                    })
                  : "button" === a.field.type
                  ? v.default.createElement(
                      "span",
                      null,
                      v.default.createElement(
                        "button",
                        {
                          id: e,
                          className:
                            "Button-sc-y0gtbx-0 Button-small-buttonSecondary-useBrowserDefaultFocusStyle x-settings-button",
                          ...a.field.events,
                          onClick: (e) => {
                            r();
                            var t = a.field.events?.onClick;
                            t && t(e);
                          },
                          type: "button",
                        },
                        l
                      )
                    )
                  : "toggle" === a.field.type
                  ? v.default.createElement(
                      "label",
                      { className: "x-settings-secondColumn x-toggle-wrapper" },
                      v.default.createElement("input", {
                        id: e,
                        className: "x-toggle-input",
                        type: "checkbox",
                        checked: l,
                        ...a.field.events,
                        onClick: (e) => {
                          r(e.currentTarget.checked);
                          var t = a.field.events?.onClick;
                          t && t(e);
                        },
                      }),
                      v.default.createElement(
                        "span",
                        { className: "x-toggle-indicatorWrapper" },
                        v.default.createElement("span", {
                          className: "x-toggle-indicator",
                        })
                      )
                    )
                  : "dropdown" === a.field.type
                  ? v.default.createElement(
                      "select",
                      {
                        className: "main-dropDown-dropDown",
                        id: e,
                        ...a.field.events,
                        onChange: (e) => {
                          r(a.field.options[e.currentTarget.selectedIndex]);
                          var t = a.field.events?.onChange;
                          t && t(e);
                        },
                      },
                      a.field.options.map((e, t) =>
                        v.default.createElement(
                          "option",
                          { selected: e === l, value: t + 1 },
                          e
                        )
                      )
                    )
                  : v.default.createElement(v.default.Fragment, null)
              )
            );
          });
      }
    }),
    (O = (() => {
      let t = "https://sc-youtube-api-production.up.railway.app",
        a = new x("Youtube Importer Settings", "youtube-importer");
      return (
        a.addInput("backend-server", "Backend to get videos from", t, () => {
          var e = a.getFieldValue("backend-server");
          ("" !== e.trim() &&
            /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-./?%&=]*)?$/.test(e)) ||
            (a.setFieldValue("backend-server", t), a.rerender());
        }),
        a.addToggle(
          "download-parallelly",
          "Queue downloads parallelly instead of in a queue",
          !0
        ),
        a.addDropDown(
          "batch-size",
          "Size of batches if downloading parallelly",
          Array.from({ length: 8 }, (e, t) => (t + 1).toString()),
          4
        ),
        a.pushSettings(),
        a
      );
    })()),
    (async () => {
      new MutationObserver(() => {
        var e,
          t =
            null ==
            (t = document.querySelector(
              '[id^="tippy-"][data-tippy-root] > #context-menu'
            ))
              ? void 0
              : t.getElementsByTagName("ul")[0];
        t &&
          !document.getElementById("spicetify-youtube-menuitem") &&
          null !==
            t.querySelector(
              'button[aria-describedby="subtitle-global-create-playlist"]'
            ) &&
          (((e = document.createElement("li")).className =
            "jzMBaEByD6M9xRmS9mv8"),
          e.setAttribute("role", "presentation"),
          (e.id = "spicetify-youtube-menuitem"),
          t.appendChild(e),
          Spicetify.ReactDOM.createRoot(e).render(
            p.default.createElement(b, null)
          ));
      }).observe(document.body, { childList: !0, subtree: !0 }),
        (Spicetify.SVGIcons.youtube = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
  </svg>
`),
        new Spicetify.ContextMenu.Item(
          "Import from YouTube",
          S,
          void 0,
          "youtube"
        ).register();
    })();
})();
