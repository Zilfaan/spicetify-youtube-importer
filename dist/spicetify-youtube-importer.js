(async () => {
  for (; !Spicetify.React || !Spicetify.ReactDOM; )
    await new Promise((e) => setTimeout(e, 10));
  var e,
    t,
    l,
    o,
    i,
    n,
    r,
    s,
    d,
    c,
    u,
    A,
    a,
    f,
    p,
    m,
    y,
    C,
    N,
    M,
    _,
    O,
    b,
    g,
    T,
    h,
    v;
  function z() {
    var e = 2 * Math.PI * 23.25,
      t = 0.25 * e;
    return b.default.createElement(
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
      b.default.createElement(
        "svg",
        {
          width: 32,
          height: 32,
          viewBox: "0 0 50 50",
          style: { transform: "rotate(-90deg)" },
          "aria-hidden": "true",
        },
        b.default.createElement("circle", {
          cx: 25,
          cy: 25,
          r: 23.25,
          fill: "none",
          stroke: "rgba(255,255,255,0.08)",
          strokeWidth: 3.5,
        }),
        b.default.createElement("circle", {
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
        b.default.createElement(
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
  function w() {
    let [r, t] = (0, C.useState)(""),
      [e, o] = (0, C.useState)(null),
      [i, a] = (0, C.useState)("invalid"),
      [n, l] = (0, C.useState)(null),
      [s, d] = (0, C.useState)([]),
      [c, u] = (0, C.useState)(new Set()),
      [f, p] = (0, C.useState)(!1),
      [m, y] = (0, C.useState)(!1),
      [b, g] = (0, C.useState)(null),
      [h, v] = (0, C.useState)(0),
      [w, x] = (0, C.useState)([]),
      [E, S] =
        ((0, C.useEffect)(() => {
          if (b) {
            let e = Date.now(),
              t = setInterval(() => {
                v(Math.floor((Date.now() - e) / 1e3));
              }, 1e3);
            return () => clearInterval(t);
          }
        }, [b]),
        (0, C.useState)(null)),
      k = "https://sc-youtube-api-production.up.railway.app";
    async function L(e, l, r) {
      r = r || E;
      if (!r) throw new Error("No download directory provided");
      let t = (l || e).replace(/[\/\\?%*:|"<>]/g, "_");
      g(t), v(0);
      var o,
        i,
        n = Date.now();
      try {
        var s = await fetch(k + "/audio/" + e);
        if (!s.ok) throw new Error(`Failed to download (${s.status})`);
        let t = l || e;
        var d = (t = t.replace(/[\/\\?%*:|"<>]/g, "_")) + ` [${e}].mp3`,
          c = await s.arrayBuffer(),
          u = s.headers.get("Content-Type") || "audio/mpeg",
          f = new Blob([c], { type: u });
        (i = f),
          await (o = await (
            await (o = r).getFileHandle(d, { create: !0 })
          ).createWritable()).write(i),
          await o.close(),
          Spicetify.showNotification("Saved " + d, !1);
        let a = Math.floor((Date.now() - n) / 1e3);
        x((e) => [...e, { title: t, time: a, status: "success" }]);
      } catch (e) {
        console.error("download error", e),
          Spicetify.showNotification("Failed to save file", !0),
          x((e) => [...e, { title: t, status: "failed" }]);
      } finally {
        g(null);
      }
    }
    return (
      (0, C.useEffect)(() => {
        var e;
        o(null),
          d([]),
          u(new Set()),
          l(null),
          M(r)
            ? N(r)
              ? (a("playlist"),
                (e = O(r)) &&
                  (async (e) => {
                    let t = [];
                    try {
                      p(!0), d([]), o(null);
                      var a = await fetch(k + "/playlist/" + e);
                      if (!a.ok) throw new Error("HTTP error! " + a.status);
                      var l = await a.json(),
                        r = l.filter(
                          (e) =>
                            !(
                              5 < parseInt(e.duration.split(":")[0]) &&
                              (t.push(e.id), 1)
                            )
                        );
                      0 < t.length &&
                        o(
                          "Hid " +
                            t.length +
                            " videos which exceeded the 5 minute limit."
                        ),
                        console.log(l),
                        d(r || []);
                    } catch (e) {
                      console.error("Error fetching playlist info:", e),
                        o("Failed to fetch playlist details");
                    } finally {
                      p(!1);
                    }
                  })(e))
              : (a("video"),
                (e = _(r)) &&
                  (async (e) => {
                    try {
                      p(!0), l(null), o(null);
                      var t = await fetch(k + "/video/" + e);
                      if (!t.ok) throw new Error("HTTP error! " + t.status);
                      var a = await t.json();
                      5 < parseInt(a.duration.split(":")[0])
                        ? o("Video " + e + " is too long")
                        : l(a);
                    } catch (e) {
                      console.error("Error fetching video info:", e),
                        o("Failed to fetch video details");
                    } finally {
                      p(!1);
                    }
                  })(e))
            : a("invalid");
      }, [r]),
      (0, C.useEffect)(() => {
        u(new Set());
      }, [s]),
      Spicetify.LocalStorage.get("youtubeDLTutCompleted")
        ? 0 < w.length || b
          ? C.default.createElement(
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
              C.default.createElement(
                "p",
                { style: { marginBottom: 10 } },
                "You may close the tab, but please stay on the app as the download may fail otherwise."
              ),
              w.map((e, t) =>
                C.default.createElement(
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
              b &&
                C.default.createElement(
                  "div",
                  { style: { color: "#aaa" } },
                  "Downloading: ",
                  C.default.createElement("strong", null, b),
                  " for ",
                  h,
                  "s"
                )
            )
          : C.default.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                },
              },
              C.default.createElement(
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
              C.default.createElement("input", {
                type: "text",
                placeholder: "Paste YouTube link...",
                value: r,
                onChange: (e) => t(e.target.value),
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
              "playlist" === i
                ? f
                  ? C.default.createElement(z, null)
                  : C.default.createElement(
                      "div",
                      null,
                      s.length &&
                        C.default.createElement("h3", null, "Playlist"),
                      C.default.createElement(
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
                        s.map((e, t) => {
                          var a = c.has(e.id);
                          return C.default.createElement(
                            "li",
                            {
                              key: t,
                              onClick: () => {
                                var t;
                                (t = e.id),
                                  u((e) => {
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
                            C.default.createElement("img", {
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
                            C.default.createElement(
                              "span",
                              { style: { flex: 1, userSelect: "text" } },
                              "string" == typeof e.title
                                ? e.title
                                : (null == (t = e.title) ? void 0 : t.text) ||
                                    "Untitled"
                            ),
                            C.default.createElement(
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
                : "video" === i
                ? f
                  ? C.default.createElement(z, null)
                  : n
                  ? C.default.createElement(
                      "div",
                      {
                        style: {
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        },
                      },
                      C.default.createElement("img", {
                        src:
                          null ==
                          (R =
                            null == (R = null == n ? void 0 : n.thumbnails)
                              ? void 0
                              : R[0])
                            ? void 0
                            : R.url,
                        alt: null == n ? void 0 : n.title,
                        width: 120,
                        height: 67,
                      }),
                      C.default.createElement(
                        "div",
                        null,
                        C.default.createElement("h4", null, n.title),
                        C.default.createElement(
                          "p",
                          null,
                          "Duration: ",
                          n.duration
                        )
                      )
                    )
                  : null
                : null,
              e &&
                C.default.createElement(
                  "div",
                  { style: { color: "red", fontSize: "13px" } },
                  e
                ),
              C.default.createElement(
                "div",
                { style: { display: "flex", justifyContent: "flex-end" } },
                C.default.createElement(
                  "button",
                  {
                    type: "button",
                    disabled: !M(r),
                    onMouseOver: () => y(!0),
                    onMouseLeave: () => y(!1),
                    style: A(
                      {
                        border: "none",
                        width: "13%",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        borderRadius: "20px",
                        backgroundColor: "var(--spice-button, #1db954)",
                        color: "var(--spice-text)",
                        transition: "all",
                        cursor: n || 0 < c.size ? "pointer" : "not-allowed",
                        opacity: n || 0 < c.size ? 1 : 0.8,
                      },
                      m && (n || 0 < c.size)
                        ? { filter: "brightness(0.85)" }
                        : {}
                    ),
                    onClick: async () => {
                      if (r.trim())
                        if ("playlist" === i && 0 === c.size)
                          Spicetify.showNotification(
                            "Please select at least one video!",
                            !0
                          );
                        else {
                          let e = E;
                          if (
                            e ||
                            (e = await (async () => {
                              try {
                                var e = await window.showDirectoryPicker();
                                return S(e), e;
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
                            if ("video" === i && null != n && n.id)
                              await L(n.id, n.title, e);
                            else if ("playlist" === i) {
                              var t,
                                a,
                                l = e || E;
                              if (!l) throw new Error("No download dir");
                              for (a of s.filter((e) => c.has(e.id)))
                                await L(
                                  a.id,
                                  "string" == typeof a.title
                                    ? a.title
                                    : null == (t = a.title)
                                    ? void 0
                                    : t.text,
                                  l
                                );
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
        : C.default.createElement(T, null)
    );
    var R;
  }
  function x() {
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
    Spicetify.ReactDOM.createRoot(t).render(y.default.createElement(w, null)),
      Spicetify.PopupModal.display({
        title: "Import a Song or Playlist from Youtube",
        content: t,
        isLarge: !0,
      });
  }
  (l = Object.create),
    (o = Object.defineProperty),
    (i = Object.getOwnPropertyDescriptor),
    (n = Object.getOwnPropertyNames),
    (r = Object.getOwnPropertySymbols),
    (s = Object.getPrototypeOf),
    (d = Object.prototype.hasOwnProperty),
    (c = Object.prototype.propertyIsEnumerable),
    (u = (e, t, a) =>
      t in e
        ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
        : (e[t] = a)),
    (A = (e, t) => {
      for (var a in (t = t || {})) d.call(t, a) && u(e, a, t[a]);
      if (r) for (var a of r(t)) c.call(t, a) && u(e, a, t[a]);
      return e;
    }),
    (e = {
      "external-global-plugin:react"(e, t) {
        t.exports = Spicetify.React;
      },
    }),
    (p = (a = (e, t, a) => (
      (a = null != e ? l(s(e)) : {}),
      ((t, a, l, r) => {
        if ((a && "object" == typeof a) || "function" == typeof a)
          for (let e of n(a))
            d.call(t, e) ||
              e === l ||
              o(t, e, {
                get: () => a[e],
                enumerable: !(r = i(a, e)) || r.enumerable,
              });
        return t;
      })(
        !t && e && e.__esModule
          ? a
          : o(a, "default", { value: e, enumerable: !0 }),
        e
      )
    ))(
      (f = function () {
        return (
          t || (0, e[n(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      })()
    )),
    (m = a(f())),
    (y = a(f())),
    (C = a(f())),
    (N = (e) => {
      try {
        var t = new URL(e).searchParams.get("list");
        return t && 0 !== t.length ? !t.startsWith("RD") : !1;
      } catch (e) {
        return !1;
      }
    }),
    (M = (e) => {
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
    (_ = (e) => {
      e = e.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:[?&]|$)/);
      return e ? e[1] : null;
    }),
    (O = (e) => {
      e = e.match(/[?&]list=([a-zA-Z0-9_-]+)/);
      return e ? e[1] : null;
    }),
    (b = a(f())),
    (g = a(f())),
    (T = () =>
      g.default.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "var(--spice-text)",
          },
        },
        g.default.createElement(
          "div",
          {
            style: {
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            },
          },
          g.default.createElement(
            "p",
            {
              style: {
                lineHeight: "1.8",
                marginBottom: "2rem",
                paddingLeft: "1.5rem",
              },
            },
            "1. Paste your YouTube video or playlist link in the search bar.",
            g.default.createElement("br", null),
            "2. Click ",
            g.default.createElement("b", null, "Download"),
            " to start the process.",
            g.default.createElement("br", null),
            "3. Select a valid location to save the files to.",
            g.default.createElement("br", null),
            "4. Wait for the download(s) to finish — you'll see a notification when it's done.",
            g.default.createElement("br", null),
            "5. For playlists, you can select what videos to download, and it will sequentially download each of them."
          ),
          g.default.createElement(
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
            g.default.createElement("code", null, "NaN:NaN"),
            " for a video link, put the video into a playlist and use that playlist link instead."
          ),
          g.default.createElement(
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
          g.default.createElement(
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
          g.default.createElement(
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
    (v = () => {
      let [e, t] = (0, m.useState)(!1);
      return m.default.createElement(
        "button",
        {
          onClick: x,
          id: "spicetify-youtube-menuitem",
          className: "kLKq7fz4Llya50jObe9a",
          role: "menuitem",
          tabIndex: -1,
          onMouseOver: () => t(!0),
          onMouseLeave: () => t(!1),
          "aria-describedby": "subtitle-global-create-youtube",
        },
        m.default.createElement(
          "div",
          {
            className:
              "e-91000-box e-91000-baseline e-91000-box--naked e-91000-box--browser-default-focus e-91000-box--padding-custom e-91000-box--min-size e-91000-Box-sc-8t9c76-0 Box-group-naked-listRow-hasLeadingOrMedia-minBlockSize_56px",
            style: h,
          },
          m.default.createElement(
            "div",
            { className: "Areas__HeaderSideArea-sc-8gfrea-1 HeaderSideArea" },
            m.default.createElement(
              "div",
              {
                className:
                  "Areas__HeaderSideAreaFlexContainer-sc-8gfrea-2 HeaderSideAreaFlexContainer",
              },
              m.default.createElement(
                "div",
                {
                  className:
                    "Areas__InteractiveArea-sc-8gfrea-0 Areas__LeadingSlot-sc-8gfrea-6 bJSfgC hUkHtl",
                },
                m.default.createElement(
                  "div",
                  { className: "uKWufPQjLFxGolUWWIqH" },
                  m.default.createElement(
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
                    m.default.createElement("path", {
                      d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z",
                    })
                  )
                )
              )
            )
          ),
          m.default.createElement(
            "div",
            { className: "Areas__HeaderArea-sc-8gfrea-3 HeaderArea" },
            m.default.createElement(
              "div",
              {
                className:
                  "Areas__InteractiveArea-sc-8gfrea-0 Areas__Column-sc-8gfrea-5 bJSfgC Column-lg",
              },
              m.default.createElement(
                "p",
                {
                  className:
                    "e-91000-text encore-text-body-medium-bold ListRowTitle__ListRowText-sc-1xe2if1-1",
                  id: "listrow-title-global-create-youtube",
                },
                "Add From Youtube"
              ),
              m.default.createElement(
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
            p.default.createElement(v, null)
          ));
      }).observe(document.body, { childList: !0, subtree: !0 }),
        (Spicetify.SVGIcons.youtube = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
  </svg>
`),
        new Spicetify.ContextMenu.Item(
          "Import from YouTube",
          x,
          void 0,
          "youtube"
        ).register();
    })();
})();
