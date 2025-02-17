(() => {
    var Q = Object.create;
    var y = Object.defineProperty,
        Y = Object.defineProperties,
        z = Object.getOwnPropertyDescriptor,
        X = Object.getOwnPropertyDescriptors,
        Z = Object.getOwnPropertyNames,
        I = Object.getOwnPropertySymbols,
        ee = Object.getPrototypeOf,
        A = Object.prototype.hasOwnProperty,
        te = Object.prototype.propertyIsEnumerable;
    var g = (e, t, o) => t in e ? y(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o,
        h = (e, t) => {
            for (var o in t || (t = {})) A.call(t, o) && g(e, o, t[o]);
            if (I)
                for (var o of I(t)) te.call(t, o) && g(e, o, t[o]);
            return e
        },
        S = (e, t) => Y(e, X(t));
    var l = (e, t) => () => (e && (t = e(e = 0)), t);
    var oe = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var re = (e, t, o, c) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let n of Z(t)) !A.call(e, n) && n !== o && y(e, n, {
                get: () => t[n],
                enumerable: !(c = z(t, n)) || c.enumerable
            });
        return e
    };
    var ie = (e, t, o) => (o = e != null ? Q(ee(e)) : {}, re(t || !e || !e.__esModule ? y(o, "default", {
        value: e,
        enumerable: !0
    }) : o, e));
    var C = (e, t, o) => new Promise((c, n) => {
        var u = i => {
                try {
                    a(o.next(i))
                } catch (p) {
                    n(p)
                }
            },
            d = i => {
                try {
                    a(o.throw(i))
                } catch (p) {
                    n(p)
                }
            },
            a = i => i.done ? c(i.value) : Promise.resolve(i.value).then(u, d);
        a((o = o.apply(e, t)).next())
    });
    var x, R = l(() => {
        x = "WebPixel::Render"
    });
    var V, U = l(() => {
        R();
        V = e => shopify.extend(x, e)
    });
    var b = l(() => {
        U()
    });
    var k = l(() => {
        b()
    });
    var r, M, W, D = l(() => {
        r = {
            PAGE_VIEWED: "page_viewed",
            COLLECTION_VIEWED: "collection_viewed",
            SEARCH_SUBMITTED: "search_submitted",
            PRODUCT_VIEWED: "product_viewed",
            PRODUCT_ADDED_TO_CART: "product_added_to_cart",
            PRODUCT_REMOVED_FROM_CART: "product_removed_from_cart",
            CART_VIEWED: "cart_viewed",
            CHECKOUT_STARTED: "checkout_started",
            CHECKOUT_CONTACT_INFO_SUBMITTED: "checkout_contact_info_submitted",
            CHECKOUT_ADDRESS_INFO_SUBMITTED: "checkout_address_info_submitted",
            CHECKOUT_SHIPPING_INFO_SUBMITTED: "checkout_shipping_info_submitted",
            PAYMENT_INFO_SUBMITTED: "payment_info_submitted",
            CHECKOUT_COMPLETED: "checkout_completed",
            ALL_EVENTS: "all_events"
        }, M = {
            [r.PAGE_VIEWED]: "shopify.pageViewed",
            [r.COLLECTION_VIEWED]: "shopify.collectionViewed",
            [r.SEARCH_SUBMITTED]: "shopify.searchSubmitted",
            [r.PRODUCT_VIEWED]: "shopify.productViewed",
            [r.PRODUCT_ADDED_TO_CART]: "shopify.productAddedToCart",
            [r.PRODUCT_REMOVED_FROM_CART]: "shopify.productRemovedFromCart",
            [r.CART_VIEWED]: "shopify.cartViewed",
            [r.CHECKOUT_STARTED]: "shopify.checkoutStarted",
            [r.CHECKOUT_CONTACT_INFO_SUBMITTED]: "shopify.checkoutContactInfoSubmitted",
            [r.CHECKOUT_ADDRESS_INFO_SUBMITTED]: "shopify.checkoutAddressInfoSubmitted",
            [r.CHECKOUT_SHIPPING_INFO_SUBMITTED]: "shopify.checkoutShippingInfoSubmitted",
            [r.PAYMENT_INFO_SUBMITTED]: "shopify.paymentInfoSubmitted",
            [r.CHECKOUT_COMPLETED]: "shopify.purchase",
            SHOPIFY_PRODUCT_PURCHASE: "shopify.productPurchase"
        }, W = {
            [r.PAGE_VIEWED]: "pv",
            [r.PRODUCT_VIEWED]: "prv",
            [r.PRODUCT_ADDED_TO_CART]: "patc",
            [r.PRODUCT_REMOVED_FROM_CART]: "prfc",
            [r.CART_VIEWED]: "cv",
            [r.CHECKOUT_STARTED]: "cs",
            [r.CHECKOUT_COMPLETED]: "cc"
        }
    });
    var ne, ce, N, de, ae, ue, w, H = l(() => {
        D();
        ne = function(e) {
            return {}
        }, ce = function(e) {
            var t;
            return {
                variantId: e.productVariant.id,
                price: e.productVariant.price.amount,
                currency: e.productVariant.price.currencyCode,
                productId: e.productVariant.product.id,
                productTitle: e.productVariant.product.title,
                productUrl: e.productVariant.product.url,
                productVendor: e.productVariant.product.vendor,
                productType: (t = e.productVariant.product.type) != null ? t : ""
            }
        }, N = function(e) {
            var t, o, c, n, u, d, a, i, p;
            return {
                totalAmount: ((t = e.cartLine) == null ? void 0 : t.cost.totalAmount.amount) || 0,
                currency: ((o = e.cartLine) == null ? void 0 : o.cost.totalAmount.currencyCode) || "",
                productId: ((c = e.cartLine) == null ? void 0 : c.merchandise.product.id) || "",
                productTitle: ((n = e.cartLine) == null ? void 0 : n.merchandise.product.title) || "",
                productUrl: ((u = e.cartLine) == null ? void 0 : u.merchandise.product.url) || "",
                productVendor: ((d = e.cartLine) == null ? void 0 : d.merchandise.product.vendor) || "",
                productType: ((a = e.cartLine) == null ? void 0 : a.merchandise.product.type) || "",
                quantity: ((i = e.cartLine) == null ? void 0 : i.quantity) || 0,
                variantId: ((p = e.cartLine) == null ? void 0 : p.merchandise.id) || ""
            }
        }, de = function(e) {
            var t, o, c;
            return {
                totalAmount: ((t = e.cart) == null ? void 0 : t.cost.totalAmount.amount) || 0,
                currency: ((o = e.cart) == null ? void 0 : o.cost.totalAmount.currencyCode) || "",
                quantity: ((c = e.cart) == null ? void 0 : c.totalQuantity) || 0
            }
        }, ae = function(e) {
            return {
                totalAmount: e.checkout.totalPrice.amount,
                currency: e.checkout.totalPrice.currencyCode,
                totalTax: e.checkout.totalTax.amount
            }
        }, ue = function(e) {
            var p, m, _;
            let t = e.checkout.lineItems || [],
                o = ((p = t[0].variant) == null ? void 0 : p.price.currencyCode) || "",
                c = 0,
                n = [],
                u = [],
                d = [],
                a = [],
                i = [];
            return t.forEach(s => {
                var f, P, E, T;
                s.discountAllocations.forEach(J => {
                    c += J.amount.amount
                }), n.push(((f = s.variant) == null ? void 0 : f.product.id) || ""), u.push(((P = s.variant) == null ? void 0 : P.id) || ""), d.push(((E = s.variant) == null ? void 0 : E.price.amount) || 0), a.push(s.quantity || 0), i.push(((T = s.variant) == null ? void 0 : T.sku) || "")
            }), {
                productCurrency: o,
                productId: n.join(","),
                productVariant: u.join(","),
                productSku: i.join(","),
                productPrice: d.join(","),
                productQuantity: a.join(","),
                orderId: ((m = e.checkout.order) == null ? void 0 : m.id) || "",
                totalPrice: e.checkout.totalPrice.amount,
                shippingPrice: ((_ = e.checkout.shippingLine) == null ? void 0 : _.price.amount) || 0,
                currencyCode: e.checkout.totalPrice.currencyCode,
                totalTax: e.checkout.totalTax.amount,
                totalDiscount: c
            }
        }, w = {
            [r.PAGE_VIEWED]: ne,
            [r.PRODUCT_VIEWED]: ce,
            [r.PRODUCT_ADDED_TO_CART]: N,
            [r.PRODUCT_REMOVED_FROM_CART]: N,
            [r.CART_VIEWED]: de,
            [r.CHECKOUT_STARTED]: ae,
            [r.CHECKOUT_COMPLETED]: ue
        }
    });
    var se, pe, le, O, L = l(() => {
        se = function(e) {
            return {
                url: e.location.href,
                referrerUrl: e.referrer,
                title: e.title
            }
        }, pe = function(e, t, o, c, n, u) {
            let d = new Date().valueOf(),
                a = Math.floor(d / 1e3),
                i = `https://dev.visualwebsiteoptimizer.com/events/t?en=${t}&a=${e}`;
            return u && (i = `https://${u}/events/t?en=${t}&a=${e}`), {
                url: i,
                payload: {
                    d: {
                        msgId: `${o}-${a}`,
                        visId: o,
                        event: {
                            props: S(h({
                                page: c
                            }, n), {
                                vwoMeta: {
                                    source: "shopify"
                                }
                            }),
                            name: t,
                            time: d
                        },
                        sessionId: a
                    }
                }
            }
        }, le = function(e) {
            return !(!e || !e.hasOwnProperty("name"))
        }, O = {
            getVWOEventPayload: pe,
            getPageObject: se,
            isValidPayload: le
        }
    });
    var v, F, K, j = l(() => {
        v = [], F = {};
        F.addShopifyMiddleware = e => {
            v.push(e)
        };
        K = function(e) {
            return C(this, null, function*() {
                v = [];
                try {
                    new Function("vwo", e)(F)
                } catch (t) {
                    console.log(t), console.error("Error while executing custom code, Please check if the provided custom code is correct or not")
                }
            })
        }
    });
    var B, G = l(() => {
        H();
        L();
        D();
        j();
        B = function(e, t, o, c, n, u) {
            return C(this, null, function*() {
                let d = o.name,
                    a = W[d];
                if (!c[a]) return;
                let i = w[d];
                if (!i) {
                    console.info(`Event ${d} is not supported by VWO at the moment`);
                    return
                }
                let p = i(o.data),
                    m = O.getPageObject(o.context.document),
                    _ = M[d];
                u.customCodeEnabled && K(u.customCode);
                let s = {
                    name: _,
                    props: h({}, p)
                };
                v.forEach(E => {
                    let T = E(s);
                    O.isValidPayload(T) && (s = T)
                });
                let {
                    url: f,
                    payload: P
                } = O.getVWOEventPayload(e, s.name, t, m, s.props ? s.props : {}, n);
                if ((e == 897227 || e == 907442) && P.d.event.name == "shopify.purchase") {
                    let E = "https://dev.visualwebsiteoptimizer.com/e.gif?a=" + e + "&s=int&e=integration debug&url=" + encodeURIComponent(m.url) + "&vwo_uuid=" + t;
                    yield fetch(E, {
                        mode: "no-cors",
                        method: "GET"
                    })
                }
                yield fetch(f, {
                    method: "POST",
                    body: JSON.stringify(P)
                })
            })
        }
    });
    var q = oe($ => {
        k();
        G();
        V(({
            analytics: e,
            browser: t,
            settings: o
        }) => {
            e.subscribe("all_events", c => C($, null, function*() {
                let n = Number(o.vwoAccountId),
                    u = o.dataUri || "",
                    d = JSON.parse(o.eventConfiguration),
                    a = yield t.cookie.get("_vwo_uuid"), i = JSON.parse(o.customCodeConfig);
                yield B(n, a, c, d, u, i)
            }))
        })
    });
    var we = ie(q());
})();