(function(shopify) {
    (() => {
        var ue = Object.defineProperty;
        var ae = Object.getOwnPropertySymbols;
        var me = Object.prototype.hasOwnProperty,
            pe = Object.prototype.propertyIsEnumerable;
        var re = (n, s, f) => s in n ? ue(n, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: f
            }) : n[s] = f,
            Y = (n, s) => {
                for (var f in s || (s = {})) me.call(s, f) && re(n, f, s[f]);
                if (ae)
                    for (var f of ae(s)) pe.call(s, f) && re(n, f, s[f]);
                return n
            };
        var ie = "WebPixel::Render";
        var H = n => shopify.extend(ie, n);
        var fe = "developer_id.dYmNjMT",
            A = "dNzYwYj";

        function le(n) {
            let s = n.init.customerPrivacy;
            if (s === void 0 || s.marketingAllowed || s.analyticsProcessingAllowed) oe(n, s);
            else {
                let f = !1;
                n.customerPrivacy.subscribe("visitorConsentCollected", w => {
                    let v = w.customerPrivacy;
                    !f && (v.marketingAllowed || v.analyticsProcessingAllowed) && (oe(n, v), f = !0)
                })
            }
        }

        function oe(n, s) {
            var Z, B, J, M, x, K, L, Q, h, k, V, ee;
            let f = window.dataLayer = window.dataLayer || [],
                w = JSON.parse(n.settings.config),
                v = w.pixel_id,
                c = window.gtag = window.gtag || function() {
                    f.push(arguments)
                };
            s && (c("consent", "default", de(s)), c("set", se(s))), N(n) && c("set", {
                ignore_referrer: "true"
            }), c("policy", "detect_click_events", () => !1), c("policy", "detect_element_visibility_events", () => !1), c("policy", "detect_history_change_events", () => !1), c("policy", "detect_link_click_events", () => !1), c("policy", "detect_timer_events", () => !1), c("policy", "detect_youtube_activity_events", () => !1), c("policy", "detect_scroll_events", () => !1), c("policy", "detect_form_submit_events", () => !1), c("policy", "detect_form_interaction_events", () => !1), c("policy", "internal_sw_allowed", () => !1), c("set", fe, !0), c("js", new Date);
            let S = document.createElement("script");
            S.src = `https://www.googletagmanager.com/gtag/js?id=${v}`, document.body.appendChild(S);
            let X = {
                send_page_view: !1
            };
            N(n) && (X.ignore_referrer = "true"), c("config", v, X);
            let C = w.gtag_events,
                P = e => {
                    var a;
                    return "shopify_" + (w.target_country || "US") + "_" + String((a = e == null ? void 0 : e.product) == null ? void 0 : a.id) + "_" + String(e == null ? void 0 : e.id)
                },
                E = e => {
                    let a = e == null ? void 0 : e.title;
                    return ["default", "title", "default title", ""].includes(String(a).toLowerCase()) ? null : a
                },
                $ = (e, a) => a ? `${e} - ${a}` : e,
                ce = (e, a) => {
                    var i;
                    if (e === "/search") {
                        let d = (i = document.querySelector("link[rel='canonical']")) == null ? void 0 : i.getAttribute("href");
                        if (d) return d
                    }
                    return a
                },
                _e = (e, a, i) => e && e.endsWith("thank_you") ? $(a, i) : a,
                W = e => {
                    var a, i, d, u, o, p, g;
                    return {
                        email: e == null ? void 0 : e.email,
                        phone_number: e == null ? void 0 : e.phone,
                        address: {
                            first_name: (a = e == null ? void 0 : e.billingAddress) == null ? void 0 : a.firstName,
                            last_name: (i = e == null ? void 0 : e.billingAddress) == null ? void 0 : i.lastName,
                            street: (d = e == null ? void 0 : e.billingAddress) == null ? void 0 : d.address1,
                            city: (u = e == null ? void 0 : e.billingAddress) == null ? void 0 : u.city,
                            region: (o = e == null ? void 0 : e.billingAddress) == null ? void 0 : o.province,
                            postal_code: (p = e == null ? void 0 : e.billingAddress) == null ? void 0 : p.zip,
                            country: (g = e == null ? void 0 : e.billingAddress) == null ? void 0 : g.country
                        }
                    }
                },
                j = {
                    email: (J = (B = (Z = n.init) == null ? void 0 : Z.data) == null ? void 0 : B.customer) == null ? void 0 : J.email,
                    phone_number: (K = (x = (M = n.init) == null ? void 0 : M.data) == null ? void 0 : x.customer) == null ? void 0 : K.phone,
                    address: {
                        first_name: (h = (Q = (L = n.init) == null ? void 0 : L.data) == null ? void 0 : Q.customer) == null ? void 0 : h.firstName,
                        last_name: (ee = (V = (k = n.init) == null ? void 0 : k.data) == null ? void 0 : V.customer) == null ? void 0 : ee.lastName
                    }
                };
            n.analytics.subscribe("page_viewed", e => {
                var i, d, u, o, p, g, r, y;
                let a = C.find(t => t.type === "page_view");
                if (a && a.action_label) {
                    let t = (u = (d = (i = e.context) == null ? void 0 : i.window) == null ? void 0 : d.location) == null ? void 0 : u.pathname,
                        b = Y({
                            send_to: a.action_label,
                            developer_id: {
                                [A]: !0
                            },
                            page_path: t,
                            page_title: ge((p = (o = e.context) == null ? void 0 : o.document) == null ? void 0 : p.title, t),
                            page_location: ce(t, (y = (r = (g = e.context) == null ? void 0 : g.window) == null ? void 0 : r.location) == null ? void 0 : y.href),
                            user_data: j
                        }, N(n) && {
                            ignore_referrer: "true"
                        });
                    c("event", "page_view", b)
                }
            }), n.analytics.subscribe("product_viewed", e => {
                var i, d, u, o, p, g;
                let a = C.find(r => r.type === "view_item");
                if (a && a.action_label) {
                    let r = (i = e.data) == null ? void 0 : i.productVariant;
                    c("event", "view_item", {
                        send_to: a.action_label,
                        developer_id: {
                            [A]: !0
                        },
                        ecomm_prodid: [P(r)],
                        ecomm_totalvalue: (d = r == null ? void 0 : r.price) == null ? void 0 : d.amount,
                        ecomm_pagetype: "product",
                        items: [{
                            id: P(r),
                            name: $((u = r == null ? void 0 : r.product) == null ? void 0 : u.title, E(r)),
                            brand: (o = r == null ? void 0 : r.product) == null ? void 0 : o.vendor,
                            category: (p = r == null ? void 0 : r.product) == null ? void 0 : p.type,
                            price: (g = r == null ? void 0 : r.price) == null ? void 0 : g.amount,
                            variant: E(r)
                        }],
                        user_data: j
                    })
                }
            }), n.analytics.subscribe("product_added_to_cart", e => {
                var i, d, u, o, p, g, r, y, t, b, _;
                let a = C.find(l => l.type === "add_to_cart");
                if (a && a.action_label) {
                    let l = (i = e.data) == null ? void 0 : i.cartLine,
                        m = l == null ? void 0 : l.merchandise;
                    c("event", "add_to_cart", {
                        send_to: a.action_label,
                        developer_id: {
                            [A]: !0
                        },
                        ecomm_prodid: [P(l == null ? void 0 : l.merchandise)],
                        ecomm_totalvalue: (u = (d = l == null ? void 0 : l.cost) == null ? void 0 : d.totalAmount) == null ? void 0 : u.amount,
                        ecomm_pagetype: "cart",
                        value: (p = (o = l == null ? void 0 : l.cost) == null ? void 0 : o.totalAmount) == null ? void 0 : p.amount,
                        currency: ((r = (g = l == null ? void 0 : l.cost) == null ? void 0 : g.totalAmount) == null ? void 0 : r.currencyCode) || "USD",
                        items: [{
                            id: P(m),
                            name: $((y = m == null ? void 0 : m.product) == null ? void 0 : y.title, E(m)),
                            brand: (t = m == null ? void 0 : m.product) == null ? void 0 : t.vendor,
                            category: (b = m == null ? void 0 : m.product) == null ? void 0 : b.type,
                            price: (_ = m == null ? void 0 : m.price) == null ? void 0 : _.amount,
                            quantity: l == null ? void 0 : l.quantity,
                            variant: E(m)
                        }],
                        user_data: j
                    })
                }
            }), n.analytics.subscribe("checkout_completed", e => {
                var i, d, u, o, p, g, r, y;
                let a = C.find(t => t.type === "purchase");
                if (a && a.action_label) {
                    let t = (i = e.data) == null ? void 0 : i.checkout,
                        b = Y({
                            send_to: a.action_label,
                            developer_id: {
                                [A]: !0
                            },
                            transaction_id: (d = t == null ? void 0 : t.order) == null ? void 0 : d.id,
                            value: (u = t == null ? void 0 : t.subtotalPrice) == null ? void 0 : u.amount,
                            currency: ((o = t == null ? void 0 : t.subtotalPrice) == null ? void 0 : o.currencyCode) || "USD",
                            tax: (p = t == null ? void 0 : t.totalTax) == null ? void 0 : p.amount,
                            shipping: (r = (g = t == null ? void 0 : t.shippingLine) == null ? void 0 : g.price) == null ? void 0 : r.amount,
                            items: (y = t == null ? void 0 : t.lineItems) == null ? void 0 : y.map(_ => {
                                var l, m, D, z, I, T, O, R, q, G, U, F, te, ne;
                                return {
                                    id: P(_.variant),
                                    name: _e((D = (m = (l = e.context) == null ? void 0 : l.window) == null ? void 0 : m.location) == null ? void 0 : D.pathname, (I = (z = _.variant) == null ? void 0 : z.product) == null ? void 0 : I.title, E(_.variant)),
                                    brand: (O = (T = _.variant) == null ? void 0 : T.product) == null ? void 0 : O.vendor,
                                    category: (q = (R = _.variant) == null ? void 0 : R.product) == null ? void 0 : q.type,
                                    coupon: (F = (U = (G = _.discountAllocations) == null ? void 0 : G[0]) == null ? void 0 : U.discountApplication) == null ? void 0 : F.title,
                                    price: (ne = (te = _.variant) == null ? void 0 : te.price) == null ? void 0 : ne.amount,
                                    quantity: _.quantity,
                                    variant: E(_.variant)
                                }
                            }),
                            user_data: W(t)
                        }, N(n) && {
                            ignore_referrer: "true"
                        });
                    c("event", "purchase", b)
                }
            }), n.analytics.subscribe("checkout_started", e => {
                var i, d, u, o, p, g, r, y;
                let a = C.find(t => t.type === "begin_checkout");
                if (a && a.action_label) {
                    let t = (i = e.data) == null ? void 0 : i.checkout,
                        b = Y({
                            send_to: a.action_label,
                            developer_id: {
                                [A]: !0
                            },
                            ecomm_prodid: (d = t == null ? void 0 : t.lineItems) == null ? void 0 : d.map(_ => P(_.variant)),
                            ecomm_totalvalue: (u = t == null ? void 0 : t.subtotalPrice) == null ? void 0 : u.amount,
                            ecomm_pagetype: "cart",
                            value: (o = t == null ? void 0 : t.subtotalPrice) == null ? void 0 : o.amount,
                            currency: ((p = t == null ? void 0 : t.subtotalPrice) == null ? void 0 : p.currencyCode) || "USD",
                            coupon: (r = (g = t == null ? void 0 : t.discountApplications) == null ? void 0 : g[0]) == null ? void 0 : r.title,
                            items: (y = t == null ? void 0 : t.lineItems) == null ? void 0 : y.map(_ => {
                                var l, m, D, z, I, T, O, R, q, G, U, F;
                                return {
                                    id: P(_.variant),
                                    name: (m = (l = _.variant) == null ? void 0 : l.product) == null ? void 0 : m.title,
                                    brand: (z = (D = _.variant) == null ? void 0 : D.product) == null ? void 0 : z.vendor,
                                    category: (T = (I = _.variant) == null ? void 0 : I.product) == null ? void 0 : T.type,
                                    coupon: (q = (R = (O = _.discountAllocations) == null ? void 0 : O[0]) == null ? void 0 : R.discountApplication) == null ? void 0 : q.title,
                                    price: (U = (G = _.variant) == null ? void 0 : G.price) == null ? void 0 : U.amount,
                                    quantity: _.quantity,
                                    variant: (F = _.variant) == null ? void 0 : F.title
                                }
                            }),
                            user_data: W(t)
                        }, N(n) && {
                            ignore_referrer: "true"
                        });
                    c("event", "begin_checkout", b)
                }
            }), n.analytics.subscribe("search_submitted", e => {
                var i, d;
                let a = C.find(u => u.type === "search");
                a && a.action_label && c("event", "search", {
                    send_to: a.action_label,
                    developer_id: {
                        [A]: !0
                    },
                    search_term: (d = (i = e.data) == null ? void 0 : i.searchResult) == null ? void 0 : d.query,
                    user_data: j
                })
            }), n.analytics.subscribe("payment_info_submitted", e => {
                var i, d, u;
                let a = C.find(o => o.type === "add_payment_info");
                if (a && a.action_label) {
                    let o = (i = e.data) == null ? void 0 : i.checkout,
                        p = Y({
                            send_to: a.action_label,
                            developer_id: {
                                [A]: !0
                            },
                            currency: ((d = o == null ? void 0 : o.totalPrice) == null ? void 0 : d.currencyCode) || "USD",
                            total: (u = o == null ? void 0 : o.totalPrice) == null ? void 0 : u.amount,
                            user_data: W(o)
                        }, N(n) && {
                            ignore_referrer: "true"
                        });
                    c("event", "add_payment_info", p)
                }
            }), n.customerPrivacy.subscribe("visitorConsentCollected", e => {
                let a = e.customerPrivacy;
                c("consent", "update", de(a)), c("set", se(a))
            })
        }

        function se(n) {
            return {
                restricted_data_processing: !n.saleOfDataAllowed
            }
        }

        function de(n) {
            return {
                ad_storage: n.marketingAllowed ? "granted" : "denied",
                ad_user_data: n.marketingAllowed ? "granted" : "denied",
                ad_personalization: n.marketingAllowed ? "granted" : "denied",
                analytics_storage: n.analyticsProcessingAllowed ? "granted" : "denied"
            }
        }

        function N(n) {
            var s;
            return ((s = n == null ? void 0 : n._pixelInfo) == null ? void 0 : s.surfaceNext) === "checkout"
        }

        function ge(n, s) {
            if (!s) return n;
            let f = [
                ["/information", "Checkout - Contact Information"],
                ["/shipping", "Checkout - Shipping"],
                ["/payment", "Checkout - Payment"],
                ["/review", "Checkout - Review"],
                ["/processing", "Checkout - Processing"],
                ["/thank-you", "Checkout - Receipt"],
                ["/stock-problems", "Checkout - Stock problems"],
                ["/error", "Checkout - Error"]
            ];
            for (let [w, v] of f)
                if (s.endsWith(w)) return v;
            return /^\/checkouts\/[A-Za-z0-9]+\/[A-Za-z0-9]+$/.test(s) ? "Checkout - Contact Information" : n
        }
        H(le);
    })();

})(self.webPixelsManager.createShopifyExtend('845578547', 'app'));