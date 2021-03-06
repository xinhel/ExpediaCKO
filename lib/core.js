if (!Handlebars.templates) {
    Handlebars.templates = {};
}
Handlebars.templates["uitk-calendar-template"] = Handlebars.template(function(d, k, c, j, i) {
    c = c || d.helpers;
    var g = "",
        a, f, l = this,
        h = this.escapeExpression,
        e = "function";

    function b(n, m) {
        return ' <button type="button" class="btn-paging btn-secondary prev icon icon-pageprev" ><span class="btn-label"> <span class="visuallyhidden">previous month</span> </span></button> ';
    }
    g += '<div class="cal"> ';
    a = k.prevButton;
    a = c["if"].call(k, a, {
        hash: {},
        inverse: l.noop,
        fn: l.program(1, b, i)
    });
    if (a || a === 0) {
        g += a;
    }
    g += ' <section class="cal-month"> <header> <h2>';
    f = c.month1;
    if (f) {
        a = f.call(k, {
            hash: {}
        });
    } else {
        a = k.month1;
        a = typeof a === e ? a() : a;
    }
    g += h(a) + " ";
    f = c.year1;
    if (f) {
        a = f.call(k, {
            hash: {}
        });
    } else {
        a = k.year1;
        a = typeof a === e ? a() : a;
    }
    g += h(a) + '</h2> <ul class="cal-days"> ';
    f = c.calDays;
    if (f) {
        a = f.call(k, {
            hash: {}
        });
    } else {
        a = k.calDays;
        a = typeof a === e ? a() : a;
    } if (a || a === 0) {
        g += a;
    }
    g += ' </ul> </header> <ul class="cal-dates"> ';
    f = c.calDates1;
    if (f) {
        a = f.call(k, {
            hash: {}
        });
    } else {
        a = k.calDates1;
        a = typeof a === e ? a() : a;
    } if (a || a === 0) {
        g += a;
    }
    g += ' </ul> </section> <hr class="vertical-divider"> <section class="cal-month"> <header> <h2>';
    f = c.month2;
    if (f) {
        a = f.call(k, {
            hash: {}
        });
    } else {
        a = k.month2;
        a = typeof a === e ? a() : a;
    }
    g += h(a) + " ";
    f = c.year2;
    if (f) {
        a = f.call(k, {
            hash: {}
        });
    } else {
        a = k.year2;
        a = typeof a === e ? a() : a;
    }
    g += h(a) + '</h2> <ul class="cal-days"> ';
    f = c.calDays;
    if (f) {
        a = f.call(k, {
            hash: {}
        });
    } else {
        a = k.calDays;
        a = typeof a === e ? a() : a;
    } if (a || a === 0) {
        g += a;
    }
    g += ' </ul> </header> <ul class="cal-dates"> ';
    f = c.calDates2;
    if (f) {
        a = f.call(k, {
            hash: {}
        });
    } else {
        a = k.calDates2;
        a = typeof a === e ? a() : a;
    } if (a || a === 0) {
        g += a;
    }
    g += ' </ul> </section> <button type="button" class="btn-paging btn-secondary next icon icon-pagenext" ><span class="btn-label"> <span class="visuallyhidden">next month</span> </span></button> </div>';
    return g;
});
Handlebars.templates["uitk-ta-default"] = Handlebars.template(function(d, k, c, j, i) {
    c = c || d.helpers;
    var g = "",
        a, f, l = this,
        h = this.escapeExpression,
        e = "function";

    function b(q, p) {
        var n = "",
            o, m;
        n += ' <li class="results-item"> <a href="#" class="details" data-value="';
        m = c["l"];
        if (m) {
            o = m.call(q, {
                hash: {}
            });
        } else {
            o = q["l"];
            o = typeof o === e ? o() : o;
        }
        n += h(o) + '"> <span class="icon icon-';
        m = c.icon;
        if (m) {
            o = m.call(q, {
                hash: {}
            });
        } else {
            o = q.icon;
            o = typeof o === e ? o() : o;
        }
        n += h(o) + '"></span>';
        m = c["d"];
        if (m) {
            o = m.call(q, {
                hash: {}
            });
        } else {
            o = q["d"];
            o = typeof o === e ? o() : o;
        } if (o || o === 0) {
            n += o;
        }
        n += " </a> </li> ";
        return n;
    }
    g += '<ul class="results"> ';
    a = k.results;
    a = c.each.call(k, a, {
        hash: {},
        inverse: l.noop,
        fn: l.program(1, b, i)
    });
    if (a || a === 0) {
        g += a;
    }
    g += ' </ul> <footer class="footer"> <a class="close" href="#"> ';
    f = c.closeText;
    if (f) {
        a = f.call(k, {
            hash: {}
        });
    } else {
        a = k.closeText;
        a = typeof a === e ? a() : a;
    }
    g += h(a) + '<span class="icon icon-close"></span> </a> </footer>';
    return g;
});
Handlebars.templates["uitk-ta-by-category"] = Handlebars.template(function(e, m, d, k, j) {
    d = d || e.helpers;
    var h = "",
        a, o, g, f = "function",
        i = this.escapeExpression,
        l = d.helperMissing,
        n = this;

    function c(u, s) {
        var q = "",
            r, p;
        q += ' <dt class="category-name">';
        p = d.categoryName;
        if (p) {
            r = p.call(u, {
                hash: {}
            });
        } else {
            r = u.categoryName;
            r = typeof r === f ? r() : r;
        }
        q += i(r) + '</dt> <dd class="category-results"> <ul class="results"> ';
        r = d.each.call(u, u, {
            hash: {},
            inverse: n.noop,
            fn: n.program(2, b, s)
        });
        if (r || r === 0) {
            q += r;
        }
        q += " </ul> </dd> ";
        return q;
    }

    function b(u, s) {
        var q = "",
            r, p;
        q += ' <li class="results-item"> <a href="#" data-value="';
        p = d["l"];
        if (p) {
            r = p.call(u, {
                hash: {}
            });
        } else {
            r = u["l"];
            r = typeof r === f ? r() : r;
        }
        q += i(r) + '"> <span class="details">';
        p = d["d"];
        if (p) {
            r = p.call(u, {
                hash: {}
            });
        } else {
            r = u["d"];
            r = typeof r === f ? r() : r;
        } if (r || r === 0) {
            q += r;
        }
        q += "</span> </a> </li> ";
        return q;
    }
    h += "<dl> ";
    a = m.resultsByCategory;
    o = {};
    o["key"] = "categoryName";
    g = d.each_with_key;
    a = g ? g.call(m, a, {
        hash: o,
        inverse: n.noop,
        fn: n.program(1, c, j)
    }) : l.call(m, "each_with_key", a, {
        hash: o,
        inverse: n.noop,
        fn: n.program(1, c, j)
    });
    if (a || a === 0) {
        h += a;
    }
    h += ' </dl> <footer class="footer"> <a class="close" href="#"> ';
    g = d.closeText;
    if (g) {
        a = g.call(m, {
            hash: {}
        });
    } else {
        a = m.closeText;
        a = typeof a === f ? a() : a;
    }
    h += i(a) + '<span class="icon icon-close"></span> </a> </footer>';
    return h;
});
Handlebars.templates["uitk-modal-template"] = Handlebars.template(function(d, o, m, i, u) {
    m = m || d.helpers;
    i = i || d.partials;
    var n = "",
        f, e, l = this,
        a = this.escapeExpression,
        b = "function";

    function k(w, v) {
        return " loading";
    }

    function j(z, y) {
        var w = "",
            x, v;
        w += " theme-";
        v = m.theme;
        if (v) {
            x = v.call(z, {
                hash: {}
            });
        } else {
            x = z.theme;
            x = typeof x === b ? x() : x;
        }
        w += a(x);
        return w;
    }

    function h(w, v) {
        return " modal-dismiss";
    }

    function g(z, y) {
        var w = "",
            x, v;
        w += ' aria-labelledby="';
        v = m.id;
        if (v) {
            x = v.call(z, {
                hash: {}
            });
        } else {
            x = z.id;
            x = typeof x === b ? x() : x;
        }
        w += a(x) + '-title"';
        return w;
    }

    function c(y, x) {
        var v = "",
            w;
        v += " ";
        w = y;
        w = l.invokePartial(i["uitk-modal-title"], "uitk-modal-title", w, m, i);
        if (w || w === 0) {
            v += w;
        }
        v += " ";
        return v;
    }

    function s(y, x) {
        var v = "",
            w;
        v += ' <footer class="cf modal-footer"> <button type="button" class="btn-utility btn-secondary modal-close" id="footerModalCloseButton" ><span class="btn-label">Close</span></button> ';
        w = y.optOut;
        w = m["if"].call(y, w, {
            hash: {},
            inverse: l.noop,
            fn: l.program(12, r, x)
        });
        if (w || w === 0) {
            v += w;
        }
        v += " </footer> ";
        return v;
    }

    function r(z, y) {
        var w = "",
            x, v;
        w += ' <fieldset class="opt-out"> <label class="check"><input type="checkbox" name="';
        v = m.id;
        if (v) {
            x = v.call(z, {
                hash: {}
            });
        } else {
            x = z.id;
            x = typeof x === b ? x() : x;
        }
        w += a(x) + '-opt-out" value="true" /><span class="inline-label">';
        x = z.optOutText;
        x = m["if"].call(z, x, {
            hash: {},
            inverse: l.program(15, p, y),
            fn: l.program(13, q, y)
        });
        if (x || x === 0) {
            w += x;
        }
        w += "</span></label> </fieldset> ";
        return w;
    }

    function q(y, x) {
        var w, v;
        v = m.optOutText;
        if (v) {
            w = v.call(y, {
                hash: {}
            });
        } else {
            w = y.optOutText;
            w = typeof w === b ? w() : w;
        }
        return a(w);
    }

    function p(w, v) {
        return "Don't show this again";
    }
    n += '<div id="';
    e = m.id;
    if (e) {
        f = e.call(o, {
            hash: {}
        });
    } else {
        f = o.id;
        f = typeof f === b ? f() : f;
    }
    n += a(f) + '" class="modal-wrap';
    f = o.content;
    f = m.unless.call(o, f, {
        hash: {},
        inverse: l.noop,
        fn: l.program(1, k, u)
    });
    if (f || f === 0) {
        n += f;
    }
    f = o.theme;
    f = m["if"].call(o, f, {
        hash: {},
        inverse: l.noop,
        fn: l.program(3, j, u)
    });
    if (f || f === 0) {
        n += f;
    }
    f = o.dismiss;
    f = m["if"].call(o, f, {
        hash: {},
        inverse: l.noop,
        fn: l.program(5, h, u)
    });
    if (f || f === 0) {
        n += f;
    }
    n += '" role="dialog"';
    f = o.title;
    f = m["if"].call(o, f, {
        hash: {},
        inverse: l.noop,
        fn: l.program(7, g, u)
    });
    if (f || f === 0) {
        n += f;
    }
    n += '> <div class="modal-inner"> ';
    f = o.title;
    f = m["if"].call(o, f, {
        hash: {},
        inverse: l.noop,
        fn: l.program(9, c, u)
    });
    if (f || f === 0) {
        n += f;
    }
    n += ' <div class="modal-body"> ';
    e = m.content;
    if (e) {
        f = e.call(o, {
            hash: {}
        });
    } else {
        f = o.content;
        f = typeof f === b ? f() : f;
    } if (f || f === 0) {
        n += f;
    }
    n += ' </div> <div class="modal-loader"> <p>Loading <span id="modalLoader" class="loader loader-secondary loader-light loader-animated" title="Loading..."></span> </p> </div> ';
    f = o.footer;
    f = m["if"].call(o, f, {
        hash: {},
        inverse: l.noop,
        fn: l.program(11, s, u)
    });
    if (f || f === 0) {
        n += f;
    }
    n += ' <button type="button" class="btn-close icon icon-close modal-close btn-primary " id="modalCloseButton" ><span class="btn-label"> <span class="alt">Close</span> </span></button> </div> </div>';
    return n;
});
Handlebars.templates["uitk-modal-title-template"] = Handlebars.template(function(c, j, b, i, h) {
    b = b || c.helpers;
    var f = "",
        a, e, g = this.escapeExpression,
        d = "function";
    f += '<header class="modal-header"> <h2 class="h1 modal-title" id="';
    e = b.id;
    if (e) {
        a = e.call(j, {
            hash: {}
        });
    } else {
        a = j.id;
        a = typeof a === d ? a() : a;
    }
    f += g(a) + '-title">';
    e = b.title;
    if (e) {
        a = e.call(j, {
            hash: {}
        });
    } else {
        a = j.title;
        a = typeof a === d ? a() : a;
    }
    f += g(a) + "</h2> </header>";
    return f;
});
Handlebars.templates["uitk-modal-bg-template"] = Handlebars.template(function(d, h, c, g, f) {
    c = c || d.helpers;
    var e = "",
        a, i = this;

    function b(k, j) {
        return " modal-dismiss";
    }
    e += '<div class="modal-background ';
    a = h.dismiss;
    a = c["if"].call(h, a, {
        hash: {},
        inverse: i.noop,
        fn: i.program(1, b, f)
    });
    if (a || a === 0) {
        e += a;
    }
    e += '"></div>';
    return e;
});
Handlebars.registerPartial("uitk-modal-title", Handlebars.templates["uitk-modal-title-template"]);
Handlebars.templates["uitk-map-template"] = Handlebars.template(function(f, m, e, l, k) {
    e = e || f.helpers;
    var i = "",
        b, h, q = this,
        j = this.escapeExpression,
        g = "function";

    function d(s, r) {
        return " legend";
    }

    function a(s, r) {
        return " subtitle";
    }

    function p(w, v) {
        var s = "",
            u, r;
        s += ' aria-labelledby="';
        r = e.id;
        if (r) {
            u = r.call(w, {
                hash: {}
            });
        } else {
            u = w.id;
            u = typeof u === g ? u() : u;
        }
        s += j(u) + '-title"';
        return s;
    }

    function o(w, v) {
        var s = "",
            u, r;
        s += '<h2 class="h2 map-heading" id="';
        r = e.id;
        if (r) {
            u = r.call(w, {
                hash: {}
            });
        } else {
            u = w.id;
            u = typeof u === g ? u() : u;
        }
        s += j(u) + '-title">';
        r = e.title;
        if (r) {
            u = r.call(w, {
                hash: {}
            });
        } else {
            u = w.title;
            u = typeof u === g ? u() : u;
        } if (u || u === 0) {
            s += u;
        }
        s += "</h2>";
        return s;
    }

    function n(w, v) {
        var s = "",
            u, r;
        s += '<p class="subtitle">';
        r = e.subtitle;
        if (r) {
            u = r.call(w, {
                hash: {}
            });
        } else {
            u = w.subtitle;
            u = typeof u === g ? u() : u;
        } if (u || u === 0) {
            s += u;
        }
        s += "</p>";
        return s;
    }

    function c(w, v) {
        var s = "",
            u, r;
        s += ' <div id="legend" class="legend"> ';
        r = e.legendcontent;
        if (r) {
            u = r.call(w, {
                hash: {}
            });
        } else {
            u = w.legendcontent;
            u = typeof u === g ? u() : u;
        } if (u || u === 0) {
            s += u;
        }
        s += " </div> ";
        return s;
    }
    i += '<div id="';
    h = e.id;
    if (h) {
        b = h.call(m, {
            hash: {}
        });
    } else {
        b = m.id;
        b = typeof b === g ? b() : b;
    }
    i += j(b) + '" class="map-overlay';
    b = m.legend;
    b = e["if"].call(m, b, {
        hash: {},
        inverse: q.noop,
        fn: q.program(1, d, k)
    });
    if (b || b === 0) {
        i += b;
    }
    b = m.subtitle;
    b = e["if"].call(m, b, {
        hash: {},
        inverse: q.noop,
        fn: q.program(3, a, k)
    });
    if (b || b === 0) {
        i += b;
    }
    i += '" role="dialog"';
    b = m.title;
    b = e["if"].call(m, b, {
        hash: {},
        inverse: q.noop,
        fn: q.program(5, p, k)
    });
    if (b || b === 0) {
        i += b;
    }
    i += '> <header class="map-header" id="';
    h = e.id;
    if (h) {
        b = h.call(m, {
            hash: {}
        });
    } else {
        b = m.id;
        b = typeof b === g ? b() : b;
    }
    i += j(b) + '-header"> <button type="button" class="btn-sub-action btn-secondary map-close" ><span class="btn-label">Close Map</span></button> ';
    b = m.title;
    b = e["if"].call(m, b, {
        hash: {},
        inverse: q.noop,
        fn: q.program(7, o, k)
    });
    if (b || b === 0) {
        i += b;
    }
    i += " ";
    b = m.subtitle;
    b = e["if"].call(m, b, {
        hash: {},
        inverse: q.noop,
        fn: q.program(9, n, k)
    });
    if (b || b === 0) {
        i += b;
    }
    i += " </header> ";
    b = m.legend;
    b = e["if"].call(m, b, {
        hash: {},
        inverse: q.noop,
        fn: q.program(11, c, k)
    });
    if (b || b === 0) {
        i += b;
    }
    i += ' <div id="mapCanvas" class="map-canvas"></div> </div>';
    return i;
});
Handlebars.templates["uitk-content-slider-controls-template"] = Handlebars.template(function(e, k, d, j, i) {
    d = d || e.helpers;
    var g = "",
        b, m = this,
        h = this.escapeExpression,
        f = "function";

    function c(p, o) {
        return " disabled";
    }

    function a(s, r) {
        var p = "",
            q, o;
        p += ' <li><button type="button" ';
        q = s.isCurrent;
        q = d["if"].call(s, q, {
            hash: {},
            inverse: m.noop,
            fn: m.program(4, n, r)
        });
        if (q || q === 0) {
            p += q;
        }
        p += '><span class="visuallyhidden">Page ';
        o = d.pageNum;
        if (o) {
            q = o.call(s, {
                hash: {}
            });
        } else {
            q = s.pageNum;
            q = typeof q === f ? q() : q;
        }
        p += h(q) + "</span></button></li> ";
        return p;
    }

    function n(p, o) {
        return 'class="current"';
    }

    function l(p, o) {
        return " disabled";
    }
    g += '<section class="content-slider-controls"> <button type="button" class="btn-paging prev icon icon-pageprev';
    b = k.prevIsDisabled;
    b = d["if"].call(k, b, {
        hash: {},
        inverse: m.noop,
        fn: m.program(1, c, i)
    });
    if (b || b === 0) {
        g += b;
    }
    g += '"><span class="visuallyhidden">previous page</span></button> <ul class="content-slider-nav"> ';
    b = k.pages;
    b = d.each.call(k, b, {
        hash: {},
        inverse: m.noop,
        fn: m.program(3, a, i)
    });
    if (b || b === 0) {
        g += b;
    }
    g += ' </ul> <button type="button" class="btn-paging next icon icon-pagenext';
    b = k.nextIsDisabled;
    b = d["if"].call(k, b, {
        hash: {},
        inverse: m.noop,
        fn: m.program(6, l, i)
    });
    if (b || b === 0) {
        g += b;
    }
    g += '"><span class="visuallyhidden">next page</span></button> </section>';
    return g;
});
Handlebars.templates["uitk-pagination-template"] = Handlebars.template(function(d, q, o, j, x) {
    o = o || d.helpers;
    j = j || d.partials;
    var p = "",
        g, f, n = this,
        a = this.escapeExpression,
        b = "function";

    function m(A, z) {
        return '<a class="backToTop" href="javascript:void(0);">Top of page</a>';
    }

    function l(C, B) {
        var z = "",
            A;
        z += ' <ul role="navigation" aria-labelledby="paginglabel" class="nobullet"> <li> <button type="button" class="pagination-prev"';
        A = C.onFirstPage;
        A = o["if"].call(C, A, {
            hash: {},
            inverse: n.noop,
            fn: n.program(4, k, B)
        });
        if (A || A === 0) {
            z += A;
        }
        z += "> ";
        A = C.onFirstPage;
        A = o.unless.call(C, A, {
            hash: {},
            inverse: n.noop,
            fn: n.program(6, i, B)
        });
        if (A || A === 0) {
            z += A;
        }
        z += " Prev ";
        A = C.onFirstPage;
        A = o.unless.call(C, A, {
            hash: {},
            inverse: n.noop,
            fn: n.program(8, e, B)
        });
        if (A || A === 0) {
            z += A;
        }
        z += " </button> </li> ";
        A = C.showEllipses;
        A = o["if"].call(C, A, {
            hash: {},
            inverse: n.noop,
            fn: n.program(10, y, B)
        });
        if (A || A === 0) {
            z += A;
        }
        z += " ";
        A = C.pages;
        A = o.each.call(C, A, {
            hash: {},
            inverse: n.noop,
            fn: n.program(13, v, B)
        });
        if (A || A === 0) {
            z += A;
        }
        z += " ";
        A = C.showEllipses;
        A = o["if"].call(C, A, {
            hash: {},
            inverse: n.noop,
            fn: n.program(15, u, B)
        });
        if (A || A === 0) {
            z += A;
        }
        z += ' <li> <button type="button" class="pagination-next"';
        A = C.onLastPage;
        A = o["if"].call(C, A, {
            hash: {},
            inverse: n.noop,
            fn: n.program(18, r, B)
        });
        if (A || A === 0) {
            z += A;
        }
        z += "> ";
        A = C.onLastPage;
        A = o.unless.call(C, A, {
            hash: {},
            inverse: n.noop,
            fn: n.program(20, h, B)
        });
        if (A || A === 0) {
            z += A;
        }
        z += " Next ";
        A = C.onLastPage;
        A = o.unless.call(C, A, {
            hash: {},
            inverse: n.noop,
            fn: n.program(22, c, B)
        });
        if (A || A === 0) {
            z += A;
        }
        z += " </button> </li> </ul> ";
        return z;
    }

    function k(A, z) {
        return ' disabled="disabled"';
    }

    function i(D, C) {
        var A = "",
            B, z;
        A += '<abbr title="Go to page ';
        z = o.prevPageNum;
        if (z) {
            B = z.call(D, {
                hash: {}
            });
        } else {
            B = D.prevPageNum;
            B = typeof B === b ? B() : B;
        }
        A += a(B) + '">';
        return A;
    }

    function e(A, z) {
        return "</abbr>";
    }

    function y(C, B) {
        var z = "",
            A;
        z += " ";
        A = C.firstPage;
        A = o["with"].call(C, A, {
            hash: {},
            inverse: n.noop,
            fn: n.program(11, w, B)
        });
        if (A || A === 0) {
            z += A;
        }
        z += " <li>...</li> ";
        return z;
    }

    function w(C, B) {
        var z = "",
            A;
        z += " ";
        A = C;
        A = n.invokePartial(j.page, "page", A, o, j);
        if (A || A === 0) {
            z += A;
        }
        z += " ";
        return z;
    }

    function v(C, B) {
        var z = "",
            A;
        z += " ";
        A = C;
        A = n.invokePartial(j.page, "page", A, o, j);
        if (A || A === 0) {
            z += A;
        }
        z += " ";
        return z;
    }

    function u(C, B) {
        var z = "",
            A;
        z += " <li>...</li> ";
        A = C.lastPage;
        A = o["with"].call(C, A, {
            hash: {},
            inverse: n.noop,
            fn: n.program(16, s, B)
        });
        if (A || A === 0) {
            z += A;
        }
        z += " ";
        return z;
    }

    function s(C, B) {
        var z = "",
            A;
        z += " ";
        A = C;
        A = n.invokePartial(j.page, "page", A, o, j);
        if (A || A === 0) {
            z += A;
        }
        z += " ";
        return z;
    }

    function r(A, z) {
        return ' disabled="disabled"';
    }

    function h(D, C) {
        var A = "",
            B, z;
        A += '<abbr title="Go to page ';
        z = o.nextPageNum;
        if (z) {
            B = z.call(D, {
                hash: {}
            });
        } else {
            B = D.nextPageNum;
            B = typeof B === b ? B() : B;
        }
        A += a(B) + '">';
        return A;
    }

    function c(A, z) {
        return "</abbr>";
    }
    p += '<fieldset> <legend class="visuallyhidden">Select Page</legend> ';
    g = q.topLink;
    g = o["if"].call(q, g, {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, m, x)
    });
    if (g || g === 0) {
        p += g;
    }
    p += ' <p class="showing-results">Showing Results ';
    f = o.currentFirstResult;
    if (f) {
        g = f.call(q, {
            hash: {}
        });
    } else {
        g = q.currentFirstResult;
        g = typeof g === b ? g() : g;
    }
    p += a(g) + " - ";
    f = o.currentLastResult;
    if (f) {
        g = f.call(q, {
            hash: {}
        });
    } else {
        g = q.currentLastResult;
        g = typeof g === b ? g() : g;
    }
    p += a(g) + " of ";
    f = o.totalResults;
    if (f) {
        g = f.call(q, {
            hash: {}
        });
    } else {
        g = q.totalResults;
        g = typeof g === b ? g() : g;
    }
    p += a(g) + "</p> ";
    g = q.displayPagination;
    g = o["if"].call(q, g, {
        hash: {},
        inverse: n.noop,
        fn: n.program(3, l, x)
    });
    if (g || g === 0) {
        p += g;
    }
    p += " </fieldset>";
    return p;
});
Handlebars.templates["uitk-paginationPage-template"] = Handlebars.template(function(e, l, d, k, j) {
    d = d || e.helpers;
    var h = "",
        b, g, m = this,
        i = this.escapeExpression,
        f = "function";

    function c(o, n) {
        return " selected";
    }

    function a(o, n) {
        return " checked";
    }
    h += '<li> <label class="check';
    b = l.isCurrent;
    b = d["if"].call(l, b, {
        hash: {},
        inverse: m.noop,
        fn: m.program(1, c, j)
    });
    if (b || b === 0) {
        h += b;
    }
    h += '"> <input class="masked" type="radio" name="page" value="';
    b = l.num;
    b = typeof b === f ? b() : b;
    h += i(b) + '"';
    b = l.isCurrent;
    b = d["if"].call(l, b, {
        hash: {},
        inverse: m.noop,
        fn: m.program(3, a, j)
    });
    if (b || b === 0) {
        h += b;
    }
    h += '/> <span class="pagination-label">';
    g = d.num;
    if (g) {
        b = g.call(l, {
            hash: {}
        });
    } else {
        b = l.num;
        b = typeof b === f ? b() : b;
    }
    h += i(b) + "</span> </label> </li>";
    return h;
});
Handlebars.templates["uitk-country-code-trigger-template"] = Handlebars.template(function(c, j, b, i, h) {
    b = b || c.helpers;
    var f = "",
        a, e, g = this.escapeExpression,
        d = "function";
    f += '<a href="';
    e = b.contentId;
    if (e) {
        a = e.call(j, {
            hash: {}
        });
    } else {
        a = j.contentId;
        a = typeof a === d ? a() : a;
    }
    f += g(a) + '" id="';
    e = b.id;
    if (e) {
        a = e.call(j, {
            hash: {}
        });
    } else {
        a = j.id;
        a = typeof a === d ? a() : a;
    }
    f += g(a) + '" data-control="tooltip" data-pos-offset="0" data-pos="bl" data-arrow="false" data-tooltip-id="ccodesTT" data-js-theme="country-code" class="icon icon-toggle180"><span class="cc-flag"></span></a>';
    return f;
});
Handlebars.templates["uitk-country-code-content-template"] = Handlebars.template(function(e, l, d, k, j) {
    d = d || e.helpers;
    var h = "",
        a, g, m = this,
        i = this.escapeExpression,
        f = "function";

    function c(r, q) {
        var o = "",
            p, n;
        o += " <li";
        p = r.defaultOption;
        p = d["if"].call(r, p, {
            hash: {},
            inverse: m.noop,
            fn: m.program(2, b, q)
        });
        if (p || p === 0) {
            o += p;
        }
        o += '> <a href="javascript:void(0)" class="cc-tooltip-item" data-country-code="';
        n = d.ccode;
        if (n) {
            p = n.call(r, {
                hash: {}
            });
        } else {
            p = r.ccode;
            p = typeof p === f ? p() : p;
        }
        o += i(p) + '" data-country-iso="';
        n = d.countryAbbr;
        if (n) {
            p = n.call(r, {
                hash: {}
            });
        } else {
            p = r.countryAbbr;
            p = typeof p === f ? p() : p;
        }
        o += i(p) + '"> <span class="cc-flag ';
        n = d.countryAbbr;
        if (n) {
            p = n.call(r, {
                hash: {}
            });
        } else {
            p = r.countryAbbr;
            p = typeof p === f ? p() : p;
        }
        o += i(p) + '"></span> <span class="item-text">';
        n = d.countryName;
        if (n) {
            p = n.call(r, {
                hash: {}
            });
        } else {
            p = r.countryName;
            p = typeof p === f ? p() : p;
        }
        o += i(p) + " +";
        n = d.ccode;
        if (n) {
            p = n.call(r, {
                hash: {}
            });
        } else {
            p = r.ccode;
            p = typeof p === f ? p() : p;
        }
        o += i(p) + "</span> </a> </li> ";
        return o;
    }

    function b(o, n) {
        return ' class="default"';
    }
    h += '<ul class="nobullet countries-flags" data-trigger-id="';
    g = d.triggerId;
    if (g) {
        a = g.call(l, {
            hash: {}
        });
    } else {
        a = l.triggerId;
        a = typeof a === f ? a() : a;
    }
    h += i(a) + '" data-select-id="';
    g = d.selectId;
    if (g) {
        a = g.call(l, {
            hash: {}
        });
    } else {
        a = l.selectId;
        a = typeof a === f ? a() : a;
    }
    h += i(a) + '"> ';
    a = l.options;
    a = d.each.call(l, a, {
        hash: {},
        inverse: m.noop,
        fn: m.program(1, c, j)
    });
    if (a || a === 0) {
        h += a;
    }
    h += " </ul>";
    return h;
});
if (!(window.console && console.log)) {
    (function() {
        var d = function() {};
        var b = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "markTimeline", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
        var c = b.length;
        var a = window.console = {};
        while (c--) {
            a[b[c]] = d;
        }
    }());
}(function() {
    var d = 0;
    var f = ["ms", "moz", "webkit", "o"];
    for (var e = 0; e < f.length && !window.requestAnimationFrame; ++e) {
        window.requestAnimationFrame = window[f[e] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[f[e] + "CancelAnimationFrame"] || window[f[e] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(a, i) {
            var j = new Date().getTime();
            var c = Math.max(0, 16 - (j - d));
            var b = window.setTimeout(function() {
                a(j + c);
            }, c);
            d = j + c;
            return b;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(a) {
            clearTimeout(a);
        };
    }
}());
(function(d) {
    var m = "left",
        l = "right",
        c = "up",
        s = "down",
        b = "in",
        u = "out",
        j = "none",
        o = "auto",
        i = "swipe",
        p = "pinch",
        v = "tap",
        y = "horizontal",
        q = "vertical",
        g = "all",
        e = "start",
        h = "move",
        f = "end",
        n = "cancel",
        a = "ontouchstart" in window,
        w = "TouchSwipe";
    var k = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: 25,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "button, input, select, textarea, a, .noSwipe"
    };
    d.fn.swipe = function(B) {
        var A = d(this),
            z = A.data(w);
        if (z && typeof B === "string") {
            if (z[B]) {
                return z[B].apply(this, Array.prototype.slice.call(arguments, 1));
            } else {
                d.error("Method " + B + " does not exist on jQuery.swipe");
            }
        } else {
            if (!z && (typeof B === "object" || !B)) {
                return r.apply(this, arguments);
            }
        }
        return A;
    };
    d.fn.swipe.defaults = k;
    d.fn.swipe.phases = {
        PHASE_START: e,
        PHASE_MOVE: h,
        PHASE_END: f,
        PHASE_CANCEL: n
    };
    d.fn.swipe.directions = {
        LEFT: m,
        RIGHT: l,
        UP: c,
        DOWN: s,
        IN: b,
        OUT: u
    };
    d.fn.swipe.pageScroll = {
        NONE: j,
        HORIZONTAL: y,
        VERTICAL: q,
        AUTO: o
    };
    d.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: g
    };

    function r(z) {
        if (z && (z.allowPageScroll === undefined && (z.swipe !== undefined || z.swipeStatus !== undefined))) {
            z.allowPageScroll = j;
        }
        if (z.click !== undefined && z.tap === undefined) {
            z.tap = z.click;
        }
        if (!z) {
            z = {};
        }
        z = d.extend({}, d.fn.swipe.defaults, z);
        return this.each(function() {
            var B = d(this);
            var A = B.data(w);
            if (!A) {
                A = new x(this, z);
                B.data(w, A);
            }
        });
    }

    function x(T, ah) {
        var aK = (a || !ah.fallbackToMouseEvents),
            aA = aK ? "touchstart" : "mousedown",
            V = aK ? "touchmove" : "mousemove",
            aw = aK ? "touchend" : "mouseup",
            E = aK ? null : "mouseleave",
            S = "touchcancel";
        var ae = 0,
            O = null,
            ai = 0,
            aG = 0,
            B = 0,
            ak = 1,
            aB = 0,
            aO = 0,
            aa = null;
        var I = d(T);
        var P = "start";
        var aJ = 0;
        var aj = null;
        var J = 0,
            Z = 0,
            aE = 0,
            aQ = 0;
        try {
            I.bind(aA, au);
            I.bind(S, M);
        } catch (aH) {
            d.error("events not supported " + aA + "," + S + " on jQuery.swipe");
        }
        this.enable = function() {
            I.bind(aA, au);
            I.bind(S, M);
            return I;
        };
        this.disable = function() {
            R();
            return I;
        };
        this.destroy = function() {
            R();
            I.data(w, null);
            return I;
        };
        this.option = function(aS, aR) {
            if (ah[aS] !== undefined) {
                if (aR === undefined) {
                    return ah[aS];
                } else {
                    ah[aS] = aR;
                }
            } else {
                d.error("Option " + aS + " does not exist on jQuery.swipe.options");
            }
        };

        function au(aT) {
            if (Y()) {
                return;
            }
            if (d(aT.target).closest(ah.excludedElements, I).length > 0) {
                return;
            }
            var aU = aT.originalEvent ? aT.originalEvent : aT;
            var aS, aR = a ? aU.touches[0] : aU;
            P = e;
            if (a) {
                aJ = aU.touches.length;
            } else {
                aT.preventDefault();
            }
            ae = 0;
            O = null;
            aO = null;
            ai = 0;
            aG = 0;
            B = 0;
            ak = 1;
            aB = 0;
            aj = U();
            aa = aF();
            A();
            if (!a || (aJ === ah.fingers || ah.fingers === g) || aq()) {
                aP(0, aR);
                J = C();
                if (aJ == 2) {
                    aP(1, aU.touches[1]);
                    aG = B = ab(aj[0].start, aj[1].start);
                }
                if (ah.swipeStatus || ah.pinchStatus) {
                    aS = aI(aU, P);
                }
            } else {
                aS = false;
            } if (aS === false) {
                P = n;
                aI(aU, P);
                return aS;
            } else {
                al(true);
            }
        }

        function Q(aU) {
            var aX = aU.originalEvent ? aU.originalEvent : aU;
            if (P === f || P === n || ag()) {
                return;
            }
            var aT, aS = a ? aX.touches[0] : aX;
            var aV = W(aS);
            Z = C();
            if (a) {
                aJ = aX.touches.length;
            }
            P = h;
            if (aJ == 2) {
                if (aG == 0) {
                    aP(1, aX.touches[1]);
                    aG = B = ab(aj[0].start, aj[1].start);
                } else {
                    W(aX.touches[1]);
                    B = ab(aj[0].end, aj[1].end);
                    aO = ap(aj[0].end, aj[1].end);
                }
                ak = z(aG, B);
                aB = Math.abs(aG - B);
            }
            if ((aJ === ah.fingers || ah.fingers === g) || !a || aq()) {
                O = at(aV.start, aV.end);
                D(aU, O);
                ae = H(aV.start, aV.end);
                ai = L();
                aL(O, ae);
                if (ah.swipeStatus || ah.pinchStatus) {
                    aT = aI(aX, P);
                }
                if (!ah.triggerOnTouchEnd || ah.triggerOnTouchLeave) {
                    var aR = true;
                    if (ah.triggerOnTouchLeave) {
                        var aW = av(this);
                        aR = aD(aV.end, aW);
                    }
                    if (!ah.triggerOnTouchEnd && aR) {
                        P = aN(h);
                    } else {
                        if (ah.triggerOnTouchLeave && !aR) {
                            P = aN(f);
                        }
                    } if (P == n || P == f) {
                        aI(aX, P);
                    }
                }
            } else {
                P = n;
                aI(aX, P);
            } if (aT === false) {
                P = n;
                aI(aX, P);
            }
        }

        function ac(aT) {
            var aV = aT.originalEvent;
            if (a) {
                if (aV.touches.length > 0) {
                    ax();
                    return true;
                }
            }
            if (ag()) {
                aJ = aQ;
            }
            Z = C();
            if (ah.triggerOnTouchEnd || (ah.triggerOnTouchEnd == false && P === h)) {
                P = f;
                var aS = ((aJ === ah.fingers || ah.fingers === g) || !a);
                var aR = aj[0].end.x !== 0;
                var aU = aS && aR && (ao() || aC());
                if (aU) {
                    aT.preventDefault();
                    aI(aV, P);
                } else {
                    P = n;
                    aI(aV, P);
                }
            } else {
                if (!ah.triggerOnTouchEnd && az()) {
                    aT.preventDefault();
                    P = f;
                    an(aV, P, v);
                } else {
                    if (P === h) {
                        aT.preventDefault();
                        P = n;
                        aI(aV, P);
                    }
                }
            }
            al(false);
        }

        function M() {
            aJ = 0;
            Z = 0;
            J = 0;
            aG = 0;
            B = 0;
            ak = 1;
            A();
            al(false);
        }

        function X(aR) {
            var aS = aR.originalEvent;
            if (ah.triggerOnTouchLeave) {
                P = aN(f);
                aI(aS, P);
            }
        }

        function R() {
            I.unbind(aA, au);
            I.unbind(S, M);
            I.unbind(V, Q);
            I.unbind(aw, ac);
            if (E) {
                I.unbind(E, X);
            }
            al(false);
        }

        function aN(aU) {
            var aT = aU;
            var aS = ar();
            var aR = af();
            if (!aS) {
                aT = n;
            } else {
                if (aR && aU == h && (!ah.triggerOnTouchEnd || ah.triggerOnTouchLeave)) {
                    aT = f;
                } else {
                    if (!aR && aU == f && ah.triggerOnTouchLeave) {
                        aT = n;
                    }
                }
            }
            return aT;
        }

        function aI(aT, aR) {
            var aS = undefined;
            if (ad()) {
                aS = an(aT, aR, i);
            }
            if (aq() && aS !== false) {
                aS = an(aT, aR, p);
            }
            if (az() && aS !== false) {
                aS = an(aT, aR, v);
            }
            if (aR === n) {
                M(aT);
            }
            if (aR === f) {
                if (a) {
                    if (aT.touches.length == 0) {
                        M(aT);
                    }
                } else {
                    M(aT);
                }
            }
            return aS;
        }

        function an(aU, aR, aT) {
            var aS = undefined;
            if (aT == i) {
                I.trigger("swipeStatus", [aR, O || null, ae || 0, ai || 0, aJ]);
                if (ah.swipeStatus) {
                    aS = ah.swipeStatus.call(I, aU, aR, O || null, ae || 0, ai || 0, aJ);
                    if (aS === false) {
                        return false;
                    }
                }
                if (aR == f && aC()) {
                    I.trigger("swipe", [O, ae, ai, aJ]);
                    if (ah.swipe) {
                        aS = ah.swipe.call(I, aU, O, ae, ai, aJ);
                        if (aS === false) {
                            return false;
                        }
                    }
                    switch (O) {
                        case m:
                            I.trigger("swipeLeft", [O, ae, ai, aJ]);
                            if (ah.swipeLeft) {
                                aS = ah.swipeLeft.call(I, aU, O, ae, ai, aJ);
                            }
                            break;
                        case l:
                            I.trigger("swipeRight", [O, ae, ai, aJ]);
                            if (ah.swipeRight) {
                                aS = ah.swipeRight.call(I, aU, O, ae, ai, aJ);
                            }
                            break;
                        case c:
                            I.trigger("swipeUp", [O, ae, ai, aJ]);
                            if (ah.swipeUp) {
                                aS = ah.swipeUp.call(I, aU, O, ae, ai, aJ);
                            }
                            break;
                        case s:
                            I.trigger("swipeDown", [O, ae, ai, aJ]);
                            if (ah.swipeDown) {
                                aS = ah.swipeDown.call(I, aU, O, ae, ai, aJ);
                            }
                            break;
                    }
                }
            }
            if (aT == p) {
                I.trigger("pinchStatus", [aR, aO || null, aB || 0, ai || 0, aJ, ak]);
                if (ah.pinchStatus) {
                    aS = ah.pinchStatus.call(I, aU, aR, aO || null, aB || 0, ai || 0, aJ, ak);
                    if (aS === false) {
                        return false;
                    }
                }
                if (aR == f && ao()) {
                    switch (aO) {
                        case b:
                            I.trigger("pinchIn", [aO || null, aB || 0, ai || 0, aJ, ak]);
                            if (ah.pinchIn) {
                                aS = ah.pinchIn.call(I, aU, aO || null, aB || 0, ai || 0, aJ, ak);
                            }
                            break;
                        case u:
                            I.trigger("pinchOut", [aO || null, aB || 0, ai || 0, aJ, ak]);
                            if (ah.pinchOut) {
                                aS = ah.pinchOut.call(I, aU, aO || null, aB || 0, ai || 0, aJ, ak);
                            }
                            break;
                    }
                }
            }
            if (aT == v) {
                if (aR === n || aR === f) {
                    if ((aJ === 1 || !a) && (isNaN(ae) || ae === 0)) {
                        I.trigger("tap", [aU.target]);
                        if (ah.tap) {
                            aS = ah.tap.call(I, aU, aU.target);
                        }
                    }
                }
            }
            return aS;
        }

        function af() {
            var aR = true;
            if (ah.threshold !== null) {
                aR = ae >= ah.threshold;
            }
            if (aR && ah.cancelThreshold !== null) {
                aR = (N(O) - ae) < ah.cancelThreshold;
            }
            return aR;
        }

        function am() {
            if (ah.pinchThreshold !== null) {
                return aB >= ah.pinchThreshold;
            }
            return true;
        }

        function ar() {
            var aR;
            if (ah.maxTimeThreshold) {
                if (ai >= ah.maxTimeThreshold) {
                    aR = false;
                } else {
                    aR = true;
                }
            } else {
                aR = true;
            }
            return aR;
        }

        function D(aR, aS) {
            if (ah.allowPageScroll === j || aq()) {
                aR.preventDefault();
            } else {
                var aT = ah.allowPageScroll === o;
                switch (aS) {
                    case m:
                        if ((ah.swipeLeft && aT) || (!aT && ah.allowPageScroll != y)) {
                            aR.preventDefault();
                        }
                        break;
                    case l:
                        if ((ah.swipeRight && aT) || (!aT && ah.allowPageScroll != y)) {
                            aR.preventDefault();
                        }
                        break;
                    case c:
                        if ((ah.swipeUp && aT) || (!aT && ah.allowPageScroll != q)) {
                            aR.preventDefault();
                        }
                        break;
                    case s:
                        if ((ah.swipeDown && aT) || (!aT && ah.allowPageScroll != q)) {
                            aR.preventDefault();
                        }
                        break;
                }
            }
        }

        function ao() {
            return am();
        }

        function aq() {
            return !!(ah.pinchStatus || ah.pinchIn || ah.pinchOut);
        }

        function ay() {
            return !!(ao() && aq());
        }

        function aC() {
            var aR = ar();
            var aT = af();
            var aS = aT && aR;
            return aS;
        }

        function ad() {
            return !!(ah.swipe || ah.swipeStatus || ah.swipeLeft || ah.swipeRight || ah.swipeUp || ah.swipeDown);
        }

        function F() {
            return !!(aC() && ad());
        }

        function az() {
            return !!(ah.tap);
        }

        function ax() {
            aE = C();
            aQ = event.touches.length + 1;
        }

        function A() {
            aE = 0;
            aQ = 0;
        }

        function ag() {
            var aR = false;
            if (aE) {
                var aS = C() - aE;
                if (aS <= ah.fingerReleaseThreshold) {
                    aR = true;
                }
            }
            return aR;
        }

        function Y() {
            return !!(I.data(w + "_intouch") === true);
        }

        function al(aR) {
            if (aR === true) {
                I.bind(V, Q);
                I.bind(aw, ac);
                if (E) {
                    I.bind(E, X);
                }
            } else {
                I.unbind(V, Q, false);
                I.unbind(aw, ac, false);
                if (E) {
                    I.unbind(E, X, false);
                }
            }
            I.data(w + "_intouch", aR === true);
        }

        function aP(aS, aR) {
            var aT = aR.identifier !== undefined ? aR.identifier : 0;
            aj[aS].identifier = aT;
            aj[aS].start.x = aj[aS].end.x = aR.pageX || aR.clientX;
            aj[aS].start.y = aj[aS].end.y = aR.pageY || aR.clientY;
            return aj[aS];
        }

        function W(aR) {
            var aT = aR.identifier !== undefined ? aR.identifier : 0;
            var aS = K(aT);
            aS.end.x = aR.pageX || aR.clientX;
            aS.end.y = aR.pageY || aR.clientY;
            return aS;
        }

        function K(aS) {
            for (var aR = 0; aR < aj.length; aR++) {
                if (aj[aR].identifier == aS) {
                    return aj[aR];
                }
            }
        }

        function U() {
            var aR = [];
            for (var aS = 0; aS <= 5; aS++) {
                aR.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
            }
            return aR;
        }

        function aL(aR, aS) {
            aS = Math.max(aS, N(aR));
            aa[aR].distance = aS;
        }

        function N(aR) {
            return aa[aR].distance;
        }

        function aF() {
            var aR = {};
            aR[m] = aM(m);
            aR[l] = aM(l);
            aR[c] = aM(c);
            aR[s] = aM(s);
            return aR;
        }

        function aM(aR) {
            return {
                direction: aR,
                distance: 0
            };
        }

        function L() {
            return Z - J;
        }

        function ab(aU, aT) {
            var aS = Math.abs(aU.x - aT.x);
            var aR = Math.abs(aU.y - aT.y);
            return Math.round(Math.sqrt(aS * aS + aR * aR));
        }

        function z(aR, aS) {
            var aT = (aS / aR) * 1;
            return aT.toFixed(2);
        }

        function ap() {
            if (ak < 1) {
                return u;
            } else {
                return b;
            }
        }

        function H(aS, aR) {
            return Math.round(Math.sqrt(Math.pow(aR.x - aS.x, 2) + Math.pow(aR.y - aS.y, 2)));
        }

        function G(aU, aS) {
            var aR = aU.x - aS.x;
            var aW = aS.y - aU.y;
            var aT = Math.atan2(aW, aR);
            var aV = Math.round(aT * 180 / Math.PI);
            if (aV < 0) {
                aV = 360 - Math.abs(aV);
            }
            return aV;
        }

        function at(aS, aR) {
            var aT = G(aS, aR);
            if ((aT <= 45) && (aT >= 0)) {
                return m;
            } else {
                if ((aT <= 360) && (aT >= 315)) {
                    return m;
                } else {
                    if ((aT >= 135) && (aT <= 225)) {
                        return l;
                    } else {
                        if ((aT > 45) && (aT < 135)) {
                            return s;
                        } else {
                            return c;
                        }
                    }
                }
            }
        }

        function C() {
            var aR = new Date();
            return aR.getTime();
        }

        function av(aR) {
            aR = d(aR);
            var aT = aR.offset();
            var aS = {
                left: aT.left,
                right: aT.left + aR.outerWidth(),
                top: aT.top,
                bottom: aT.top + aR.outerHeight()
            };
            return aS;
        }

        function aD(aR, aS) {
            return (aR.x > aS.left && aR.x < aS.right && aR.y > aS.top && aR.y < aS.bottom);
        }
    }
})(jQuery);
var Placeholders = (function() {
    var p = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
        g = {
            live: false,
            hideOnFocus: false,
            className: "placeholderspolyfill",
            textColor: "#999",
            styleImportant: true
        }, j = [37, 38, 39, 40],
        e, d, b = new RegExp("\\b" + g.className + "\\b");

    function n(s) {
        var r;
        if (s.createTextRange) {
            r = s.createTextRange();
            r.move("character", 0);
            r.select();
        } else {
            if (s.selectionStart) {
                s.focus();
                s.setSelectionRange(0, 0);
            }
        }
    }

    function l() {
        var r;
        if (this.value === this.getAttribute("placeholder")) {
            if (!g.hideOnFocus) {
                n(this);
            } else {
                this.className = this.className.replace(b, "");
                this.value = "";
                r = this.getAttribute("data-placeholdertype");
                if (r) {
                    this.type = r;
                }
            }
        }
    }

    function k() {
        var r;
        if (this.value === "") {
            this.className = this.className + " " + g.className;
            this.value = this.getAttribute("placeholder");
            r = this.getAttribute("data-placeholdertype");
            if (r) {
                this.type = "text";
            }
        }
    }

    function o() {
        var u = this.getElementsByTagName("input"),
            r = this.getElementsByTagName("textarea"),
            s = u.length,
            v = s + r.length,
            x, y, w;
        for (w = 0; w < v; w += 1) {
            x = (w < s) ? u[w] : r[w - s];
            y = x.getAttribute("placeholder");
            if (x.value === y) {
                x.value = "";
            }
        }
    }

    function m(r) {
        d = this.value;
        return !(d === this.getAttribute("placeholder") && j.indexOf(r.keyCode) > -1);
    }

    function a() {
        var r;
        if (this.value !== d) {
            this.className = this.className.replace(b, "");
            this.value = this.value.replace(this.getAttribute("placeholder"), "");
            r = this.getAttribute("data-placeholdertype");
            if (r) {
                this.type = r;
            }
        }
        if (this.value === "") {
            k.call(this);
            n(this);
        }
    }

    function h(r, u, s) {
        if (r.addEventListener) {
            return r.addEventListener(u, s.bind(r), false);
        }
        if (r.attachEvent) {
            return r.attachEvent("on" + u, s.bind(r));
        }
    }

    function f(r) {
        if (!g.hideOnFocus) {
            h(r, "keydown", m);
            h(r, "keyup", a);
        }
        h(r, "focus", l);
        h(r, "blur", k);
    }

    function i() {
        var y = document.getElementsByTagName("input"),
            A = document.getElementsByTagName("textarea"),
            s = y.length,
            w = s + A.length,
            u, r, v, z, x;
        for (u = 0; u < w; u += 1) {
            v = (u < s) ? y[u] : A[u - s];
            x = v.getAttribute("placeholder");
            if (p.indexOf(v.type) > -1) {
                if (x) {
                    z = v.getAttribute("data-currentplaceholder");
                    if (x !== z) {
                        if (v.value === z || v.value === x || !v.value) {
                            v.value = x;
                            v.className = v.className + " " + g.className;
                        }
                        if (!z) {
                            if (v.form) {
                                r = v.form;
                                if (!r.getAttribute("data-placeholdersubmit")) {
                                    h(r, "submit", o);
                                    r.setAttribute("data-placeholdersubmit", "true");
                                }
                            }
                            f(v);
                        }
                        v.setAttribute("data-currentplaceholder", x);
                    }
                }
            }
        }
    }

    function c() {
        var x = document.getElementsByTagName("input"),
            z = document.getElementsByTagName("textarea"),
            s = x.length,
            w = s + z.length,
            u, v, r, A;
        for (u = 0; u < w; u += 1) {
            v = (u < s) ? x[u] : z[u - s];
            A = v.getAttribute("placeholder");
            if (p.indexOf(v.type) > -1) {
                if (A) {
                    if (v.type === "password") {
                        try {
                            v.type = "text";
                            v.setAttribute("data-placeholdertype", "password");
                        } catch (y) {}
                    }
                    v.setAttribute("data-currentplaceholder", A);
                    if (v.value === "" || v.value === A) {
                        v.className = v.className + " " + g.className;
                        v.value = A;
                    }
                    if (v.form) {
                        r = v.form;
                        if (!r.getAttribute("data-placeholdersubmit")) {
                            h(r, "submit", o);
                            r.setAttribute("data-placeholdersubmit", "true");
                        }
                    }
                    f(v);
                }
            }
        }
    }

    function q(w) {
        var z = document.createElement("input"),
            v, y, u, s, r;
        if (typeof z.placeholder === "undefined") {
            for (v in w) {
                if (w.hasOwnProperty(v)) {
                    g[v] = w[v];
                }
            }
            y = document.createElement("style");
            y.type = "text/css";
            var x = (g.styleImportant) ? "!important" : "";
            u = document.createTextNode("." + g.className + " { color:" + g.textColor + x + "; }");
            if (y.styleSheet) {
                y.styleSheet.cssText = u.nodeValue;
            } else {
                y.appendChild(u);
            }
            document.getElementsByTagName("head")[0].appendChild(y);
            if (!Array.prototype.indexOf) {
                Array.prototype.indexOf = function(A, B) {
                    for (s = (B || 0), r = this.length; s < r; s += 1) {
                        if (this[s] === A) {
                            return s;
                        }
                    }
                    return -1;
                };
            }
            if (!Function.prototype.bind) {
                Function.prototype.bind = function(A) {
                    if (typeof this !== "function") {
                        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                    }
                    var E = Array.prototype.slice.call(arguments, 1),
                        D = this,
                        B = function() {}, C = function() {
                            return D.apply(this instanceof B ? this : A, E.concat(Array.prototype.slice.call(arguments)));
                        };
                    B.prototype = this.prototype;
                    C.prototype = new B();
                    return C;
                };
            }
            c();
            if (g.live) {
                e = setInterval(i, 100);
            }
            return true;
        }
        return false;
    }
    return {
        init: q,
        refresh: i
    };
}());

function onYouTubeIframeAPIReady() {
    uitk.youtubeApiDefer.resolve();
}
var uitk = (function(v) {
    var F, K = "v2.0",
        A = false,
        h = Modernizr.touch,
        g = Modernizr.win8touch,
        p = Modernizr.checkedselector,
        B = Modernizr.mediaqueries,
        L, C = Modernizr.placeholder,
        k = (h || g),
        j, l, I, y, D, o, E, w, e, q, x, z, u, b, n, m, r, G, J, a, s = v("body");
    F = function() {
        E.init();
        q();
        x();
        z.init();
        uitk.readyState = true;
    };
    w = (function() {
        var M = 0;
        return function() {
            M++;
            return "uitkId" + M;
        };
    }());
    if (g) {
        L = "uitkMSPointerUpClick";
    } else {
        L = "uitkTouchendClick";
    }
    var d, f, c, i, H;
    c = function(O) {
        if (!O.data || (O.data && !O.data.eventId)) {
            return false;
        }
        var N = O.data.eventId,
            M = O.handleObj.selector ? v(O.target).closest(O.handleObj.selector) : v(O.currentTarget),
            P = M.data("eventStorage");
        if (!P) {
            P = {};
        }
        if (!P[N]) {
            P[N] = {
                preventDoubleClick: false
            };
        }
        M.data("eventStorage", P);
        return P[N];
    };
    H = function(M) {
        clearTimeout(d);
        f = true;
        d = setTimeout(function() {
            f = false;
        }, 1000);
        clearTimeout(M.touchEventTimeout);
        M.touchEventFlag = true;
        M.touchEventTimeout = setTimeout(function() {
            M.touchEventFlag = false;
        }, 1000);
    };
    i = function(N, M) {
        N.preventDoubleClick = true;
        setTimeout(function() {
            N.preventDoubleClick = false;
        }, 200);
    };
    v.event.special.uitkTouchstart = {
        bindType: "touchstart",
        delegateType: "touchstart",
        handle: function(M) {
            var P = c(M);
            P.startPos = {};
            var O = M.data || {}, N = O.scrollDirection || "both",
                T = N !== "vertical",
                R = N !== "horizontal",
                S = {
                    x: 0,
                    y: 0
                }, U = M.originalEvent,
                Q = null;
            if (T) {
                S.x = U.touches[0].clientX;
            }
            if (R) {
                S.y = U.touches[0].clientY;
            }
            P.startPos.x = S.x;
            P.startPos.y = S.y;
            return Q;
        }
    };
    v.event.special.uitkTouchend = {
        bindType: "touchend",
        delegateType: "touchend",
        handle: function(M) {
            var S = M.handleObj,
                T = M.originalEvent,
                O = c(M),
                R = O.startPos || {
                    x: 0,
                    y: 0
                }, Q = 44,
                N = {
                    x: 0,
                    y: 0
                }, U = {
                    x: 0,
                    y: 0
                }, P = null;
            N.x = T.changedTouches[0].clientX;
            U.x = Math.abs(R.x - N.x);
            N.y = T.changedTouches[0].clientY;
            U.y = Math.abs(R.y - N.y);
            if (O.preventDoubleClick) {
                H(O);
                O.preventDefault = true;
            } else {
                if (U.x < Q && U.y < Q) {
                    if (M.data.preventDoubleClick) {
                        i(O);
                    }
                    H(O);
                    O.preventDefault = false;
                    M.preventDefault = function() {
                        O.preventDefault = true;
                        v.Event.prototype.preventDefault.call(M);
                    };
                    O.stopPropagation = false;
                    M.stopPropagation = function() {
                        O.stopPropagation = true;
                        v.Event.prototype.stopPropagation.call(M);
                    };
                    M.type = S.origType;
                    P = S.handler.apply(this, arguments);
                    M.type = S.type;
                }
            }
            return P;
        }
    };
    v.event.special.uitkMSPointerUp = {
        bindType: "MSPointerUp",
        delegateType: "MSPointerUp",
        handle: function(O) {
            var N = O.handleObj,
                P = c(O),
                M = null;
            if (P.preventDoubleClick) {
                H(P);
                P.preventDefault = true;
            } else {
                if (O.data.preventDoubleClick) {
                    i(P);
                }
                H(P);
                P.preventDefault = false;
                O.preventDefault = function() {
                    P.preventDefault = true;
                    v.Event.prototype.preventDefault.call(O);
                };
                P.stopPropagation = false;
                O.stopPropagation = function() {
                    P.stopPropagation = true;
                    v.Event.prototype.stopPropagation.call(O);
                };
                O.type = N.origType;
                M = N.handler.apply(this, arguments);
                O.type = N.type;
            }
            return M;
        }
    };
    v.event.special.uitkClick = {
        bindType: "click",
        delegateType: "click",
        handle: function(O) {
            var N = O.handleObj,
                M = null,
                P = c(O);
            if (!P.touchEventFlag) {
                if (P.preventDoubleClick) {
                    O.preventDefault();
                } else {
                    if (O.data.preventDoubleClick) {
                        i(P);
                    }
                    O.type = N.origType;
                    M = N.handler.apply(this, arguments);
                    O.type = N.type;
                }
            } else {
                if (P.preventDefault) {
                    O.preventDefault();
                }
                if (P.stopPropagation) {
                    O.stopPropagation();
                }
            }
            return M;
        }
    };
    v.event.special.uitkMouseenter = {
        bindType: "mouseover",
        delegateType: "mouseover",
        handle: function(O) {
            var M = null,
                P = c(O),
                N = P ? P.touchEventFlag : f;
            if (!N) {
                M = v.event.special.mouseenter.handle.call(this, O);
            }
            return M;
        }
    };
    v.event.special.uitkMouseleave = {
        bindType: "mouseout",
        delegateType: "mouseout",
        handle: function(O) {
            var M = null,
                P = c(O) || {}, N = P ? P.touchEventFlag : f;
            if (!N) {
                M = v.event.special.mouseleave.handle.call(this, O);
            }
            return M;
        }
    };
    v.event.special.uitkTouchendClick = {
        add: function(M) {
            var O = M.data || {}, N = M.namespace ? "." + M.namespace : "";
            if (O.eventId === undefined) {
                O.eventId = w();
            }
            v(this).on("uitkTouchstart" + N + " uitkTouchend" + N + " uitkClick" + N, M.selector, O, M.handler);
        },
        remove: function(M) {
            var N = M.namespace ? "." + M.namespace : "";
            v(this).off("uitkTouchstart" + N + " uitkTouchend" + N + " uitkClick" + N, M.selector);
        }
    };
    v.event.special.uitkMSPointerUpClick = {
        add: function(M) {
            var O = M.data || {}, N = M.namespace ? "." + M.namespace : "";
            if (O.eventId === undefined) {
                O.eventId = w();
            }
            v(this).on("uitkMSPointerUp" + N + " uitkClick" + N, M.selector, O, M.handler);
        },
        remove: function(M) {
            var N = M.namespace ? "." + M.namespace : "";
            v(this).off("uitkMSPointerUp" + N + " uitkClick" + N, M.selector);
        }
    };
    u = function(M) {
        setTimeout(function() {
            window.location.href = M;
        }, 0);
    };
    n = function(P, O) {
        var N = O.attr("href"),
            M = new Function(P).call(O[0]);
        if (M === false) {
            return false;
        } else {
            if (N && N !== "#" && N !== "") {
                uitk.redirect(N);
            }
        }
        return M;
    };
    b = function(N) {
        N.preventDefault();
        var M = v(N.target).closest("[data-onclick]");
        uitk.dataOnclick.runOnclickFunction(M.data("onclick"), M);
    };
    s.on(L + ".onclick", "[data-onclick]", b);
    y = function(O, N, P, Q, M) {
        var R = "uitk_toggle";
        s.on(L + ".toggle", O, {
            preventDoubleClick: true
        }, function(U) {
            var S = v(U.target).closest(O),
                V, T;
            U.preventDefault();
            S[R]();
            T = S.data(R).state;
            if (T === "closed") {
                if (N) {
                    N(S);
                }
                S[R]("open");
                if (P) {
                    P(S);
                }
            } else {
                if (T === "open") {
                    if (Q) {
                        Q(S);
                    }
                    if (M) {
                        V = uitk.subscribe("toggle.closed", function(W, X) {
                            if (X[0] === S[0]) {
                                M(S);
                                uitk.unsubscribe("toggle.closed", V);
                            }
                        });
                    }
                    S[R]("close");
                }
            }
        });
    };
    j = {
        topics: {},
        lastToken: 0,
        topic: function(M) {
            var N = this.topics;
            if (!N[M]) {
                N[M] = [];
            }
            return N[M];
        },
        publish: function(S, T) {
            var P = j.topics[S],
                N, U = arguments.length,
                R = [],
                M, O, V, Q;
            if (P) {
                for (Q = 0; Q < U; Q = Q + 1) {
                    R.push(arguments[Q]);
                }
                N = P.length;
                for (Q = 0; Q < N; Q = Q + 1) {
                    M = P[Q];
                    O = M.context;
                    V = M.callback;
                    if (typeof V === "function") {
                        V.apply(O, R);
                    }
                }
            }
        },
        subscribe: function(S, N, U) {
            var V = arguments.length,
                W, Q, M, T = 2,
                P = N,
                O = j.lastToken++,
                R;
            if (typeof N === "function") {
                P = null;
                T = 1;
            }
            if (arguments.length > T) {
                for (R = T; R < V; R = R + 1) {
                    W = arguments[R];
                    if (typeof W === "function") {
                        Q = j.topic(S);
                        M = Q.length;
                        Q.push({
                            context: P,
                            callback: arguments[R],
                            token: O.toString()
                        });
                    }
                }
            }
            return O.toString();
        },
        unsubscribe: function(O, N) {
            var Q = j.topics[O],
                T, S = arguments.length,
                M, P, R;
            if (S > 1 && Q) {
                for (P = 1; P < S; P = P + 1) {
                    T = Q.length;
                    M = arguments[P];
                    if (typeof M === "function") {
                        for (R = T - 1; R >= 0; R = R - 1) {
                            if (Q[R].callback === M) {
                                Q.splice(R, 1);
                            }
                        }
                    } else {
                        if (typeof M === "string") {
                            for (R = T - 1; R >= 0; R = R - 1) {
                                if (Q[R].token === M) {
                                    Q.splice(R, 1);
                                }
                            }
                        }
                    }
                }
            } else {
                if (S === 1 && Q) {
                    delete j.topics[O];
                }
            }
        }
    };
    l = function(N, Q) {
        var R = {
            transition: "fade",
            publish: true
        }, O = Q ? v.extend(true, {}, R, Q) : R,
            P, M = Modernizr.csstransitions;
        P = function() {
            if (typeof uitk.publish === "function") {
                if (O.publish) {
                    uitk.publish("remove", N);
                }
                if (O.topic) {
                    uitk.publish(O.topic, N);
                }
            }
        };
        if (O.transition === "none" || !M) {
            N.empty().remove();
            P();
        } else {
            N.addClass("remove-animated animated-fade");
            N.one("transitionEnd oTransitionEnd msTransitionEnd transitionend webkitTransitionEnd", function(S) {
                N.empty().remove();
                P();
            });
        }
    };
    s.on(L + ".remove", "[data-control=remove]", function(P) {
        var O = v(P.target).closest("[data-control=remove]"),
            N = O.data(),
            M = N.targetId ? v("#" + N.targetId) : v(this);
        P.preventDefault();
        uitk.remove(M, N);
    });
    I = function(N, O) {
        var M = O || {};
        uitk.publish("addNode", N, M);
    };
    s.on(L + ".add", "[data-control=add]", function(P) {
        var O = v(P.target).closest("[data-control=add]"),
            M = O.data(),
            N = M.templateId;
        P.preventDefault();
        uitk.addNode(N, M);
    });
    E = (function() {
        var M = {}, N = "placeholderspolyfill";
        if (typeof Placeholders != "undefined" && !C) {
            M.init = function() {
                Placeholders.init({
                    styleImportant: false,
                    hideOnFocus: true
                });
            };
            M.refresh = function() {
                Placeholders.refresh();
            };
            M.updateClass = function(O) {
                O.each(function() {
                    var P = v(this);
                    if (P.attr("placeholder") !== P.attr("value")) {
                        P.removeClass(N);
                    } else {
                        P.addClass(N);
                    }
                });
            };
            M.getInputValue = function(O) {
                return O.val() === O.attr("placeholder") ? "" : O.val();
            };
            M.updateInputValue = function(P, O) {
                if (O) {
                    P.val(O);
                    P.removeClass(N);
                } else {
                    P.val(P.attr("placeholder"));
                    P.addClass(N);
                }
            };
        } else {
            M.init = function() {};
            M.refresh = function() {};
            M.updateClass = function() {};
            M.getInputValue = function(O) {
                return O.val();
            };
            M.updateInputValue = function(P, O) {
                P.val(O);
            };
        }
        return M;
    })();
    D = {
        createCookie: function(O, Q, R) {
            var N, P, M;
            if (R) {
                N = new Date();
                N.setTime(N.getTime() + (R * 24 * 60 * 60 * 1000));
                P = N.toGMTString();
                M = "; expires=" + P;
            } else {
                M = "";
            }
            document.cookie = O + "=" + Q + M + "; path=/";
            if (R && R < 0) {
                uitk.publish("cookie.deleted", O);
            } else {
                uitk.publish("cookie.created", {
                    name: O,
                    value: Q,
                    days: R,
                    expires: P
                });
            }
        },
        readCookie: function(O) {
            var Q = O + "=",
                M = document.cookie.split(";"),
                R = M.length,
                P = 0,
                N;
            for (P = 0; P < R; P++) {
                N = M[P];
                while (N.charAt(0) === " ") {
                    N = N.substring(1, N.length);
                }
                if (N.indexOf(Q) === 0) {
                    return N.substring(Q.length, N.length);
                }
            }
            return null;
        },
        deleteCookie: function(M) {
            D.createCookie(M, "", -1);
        }
    };
    o = {
        publishState: function(O, N, P) {
            var M = "media." + O;
            uitk.publish(M, N, P);
        },
        embedVideo: function(O) {
            var M = arguments,
                N;
            switch (O) {
                case "youtube":
                    N = o.embedYoutube(M[1], M[2], M[3], M[4]);
                    break;
                default:
                    return;
            }
            return N;
        },
        loadYoutubeApi: function() {
            uitk.youtubeApiDefer = v.Deferred();
            var N = "//www.youtube.com/iframe_api",
                M = document.createElement("script"),
                O = document.getElementsByTagName("script")[0];
            M.src = "//www.youtube.com/iframe_api";
            O.parentNode.insertBefore(M, O);
        },
        embedYoutube: function(S, R, M, T) {
            var U, P, N = v.Deferred(),
                O, Q;
            if (!uitk.youtubeApiDefer) {
                o.loadYoutubeApi();
            }
            P = {
                autohide: 1,
                showinfo: 1,
                fs: 1,
                modestbranding: 1,
                rel: 0,
                theme: "light",
                enablejsapi: 1
            };
            if (R) {
                R = v.extend(true, {}, P, R);
            } else {
                R = P;
            }
            O = function(W) {
                var V = W.data;
                switch (V) {
                    case 1:
                        o.publishState("started", "youtube", S);
                        break;
                    case 0:
                        o.publishState("ended", "youtube", S);
                        break;
                    default:
                }
            };
            uitk.youtubeApiDefer.done(function() {
                U = new YT.Player(M, {
                    height: "",
                    width: "",
                    videoId: S,
                    playerVars: R,
                    events: {
                        onReady: T,
                        onStateChange: O
                    }
                });
                N.resolve(U);
            });
            return N.promise();
        },
        createVideoObject: function(M, N) {
            var O;
            switch (M) {
                case "youtube":
                    O = {
                        videoObj: N,
                        type: M,
                        playVideo: function() {
                            N.playVideo();
                        },
                        rewindVideo: function() {
                            if (N.getPlayerState() !== 5) {
                                N.seekTo(0, true);
                            }
                        },
                        pauseVideo: function() {
                            N.pauseVideo();
                        },
                        stopVideo: function() {
                            N.stopVideo();
                        }
                    };
                    break;
                default:
                    O = {};
            }
            return O;
        }
    };
    z = (function() {
        var R = Modernizr.highres,
            T = window.matchMedia || window.msMatchMedia,
            N = v(window),
            W = Modernizr.mediaqueries,
            M = Modernizr.mq,
            P = {}, O, S, Q, aa, X, V, ab, U, Z, Y;
        U = function(ac, ad) {
            return {
                mediaQuery: ac.media,
                key: ad,
                retina: R,
                screenWidth: N.width(),
                orientation: window.orientation
            };
        };
        Z = function() {
            return P;
        };
        Y = function(ac, ad) {
            P[ad] = ac;
        };
        O = function(ac) {
            uitk.publish("mediaquery.matched", ac);
        };
        S = function() {
            aa(true);
        };
        Q = function(ac, ad) {
            if (M(ac.media)) {
                O(U(ac, ad));
            }
        };
        aa = function(ag) {
            var af, ad, ae, ac = Z();
            for (af in ac) {
                if (ac.hasOwnProperty(af)) {
                    ad = ac[af];
                    ae = M(ad.media);
                    if (ae && (ad.currentMatch !== true || ag === true)) {
                        O(U(ad, af));
                        ad.currentMatch = true;
                    } else {
                        if (!ae) {
                            ad.currentMatch = false;
                        }
                    }
                }
            }
        };
        V = (function() {
            var ac;
            if (T) {
                ac = function(ah, ag) {
                    var ae, af, ai, ad = Z();
                    if (ad[ag]) {
                        ae = ad[ag];
                    } else {
                        ae = T(ah);
                        Y(ae, ag);
                    }
                    af = function() {
                        if (T(ae.media).matches) {
                            clearTimeout(ai);
                            ai = setTimeout(function() {
                                Q(ae, ag);
                            }, 100);
                        }
                    };
                    ae.addListener(af);
                    if (window.orientation !== undefined && window.addEventListener) {
                        window.addEventListener("orientationchange", af);
                    }
                    Q(ae, ag);
                };
            } else {
                if (W) {
                    j.subscribe("debounced.resize", aa);
                    ac = function(ag, af) {
                        var ae, ad = Z();
                        if (ad[af]) {
                            ae = ad[af];
                        } else {
                            ae = {
                                media: ag,
                                currentMatch: false
                            };
                            Y(ae, af);
                        }
                        Q(ae, af);
                    };
                } else {
                    ac = function(ae, ad) {};
                }
            }
            return ac;
        })();
        X = function() {
            var ae = arguments.length,
                ac = arguments[0],
                ad;
            if (ae === 2) {
                uitk.mediaquery.registerSingle(ac, arguments[1]);
            } else {
                if (ae === 1 && typeof ac === "object") {
                    for (ad in ac) {
                        if (ac.hasOwnProperty(ad)) {
                            uitk.mediaquery.registerSingle(ac[ad], ad);
                        }
                    }
                }
            }
        };
        ab = function() {
            if (W) {
                X({
                    desktop: "(min-width: 960px)",
                    tablet: "(min-width: 726px) and (max-width: 959px)",
                    smallTablet: "(max-width: 725px)"
                });
            } else {
                var ac = {};
                ac.media = "(min-width: 960px)";
                O(ac, "desktop");
            }
        };
        return {
            init: ab,
            register: X,
            registerSingle: V,
            getData: U,
            getMediaQueries: Z,
            publish: O,
            publishAgain: S
        };
    })();
    e = function(O) {
        var P = O.replace(/^#/, ""),
            M, N;
        M = Handlebars.templates[O];
        if (M) {
            return M;
        }
        M = Handlebars.templates[P];
        if (M) {
            return M;
        }
        N = v(O);
        if (N.length > 0) {
            M = Handlebars.compile(N.html());
            return M;
        }
        console.log("ERROR: No template found");
    };
    q = function() {
        var O, M;
        v(window).resize(function() {
            if (O) {
                clearTimeout(O);
            }
            O = setTimeout(function() {
                uitk.publish("debounced.resize");
            }, 100);
        });
        v(window).scroll(function() {
            if (M) {
                clearTimeout(M);
            }
            M = setTimeout(function() {
                uitk.publish("debounced.scroll");
            }, 150);
        });
        var N, Q, P;
        N = function() {
            return s.height();
        };
        P = N();
        Q = function() {
            setTimeout(function() {
                if (P !== N()) {
                    P = N();
                    uitk.publish("debounced.bodyResize");
                }
                Q();
            }, 500);
        };
        Q();
    };
    x = function() {
        var M = 'input[data-autoselect="touch"], input[data-autoselect="all"]';
        if (k) {
            s.on("focus", M, function(O) {
                var N = v(O.target).closest(M);
                if (N) {
                    setTimeout(function() {
                        N[0].setSelectionRange(0, 9999);
                    }, 50);
                }
            });
            s.on("mouseup", M, function(N) {
                N.preventDefault();
            });
        }
    };
    J = (function() {
        var O = document.querySelector && document.querySelector('meta[name="viewport"]'),
            N = navigator.userAgent,
            M = function() {
                O.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
            };
        if (O && /iPhone|iPad|iPod/.test(N) && !/Opera Mini/.test(N)) {
            O.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
            document.addEventListener("gesturestart", M, false);
        }
    })();
    a = function(N, M, O, P) {
        if (window.expClientLogging && window.expClientLogging.logMessage) {
            expClientLogging.logMessage(O + "Error", ["errorName=" + P.name, "errorMessage=" + P.message, "stackTrace=" + P.stack, "file=" + N, "module=" + M, "function=" + O]);
        }
        throw P;
    };
    return {
        init: F,
        version: K,
        readyState: A,
        redirect: u,
        dataOnclick: {
            runOnclickFunction: n,
            dataOnclickHandler: b
        },
        publish: j.publish,
        subscribe: j.subscribe,
        unsubscribe: j.unsubscribe,
        remove: l,
        addNode: I,
        createCookie: D.createCookie,
        readCookie: D.readCookie,
        deleteCookie: D.deleteCookie,
        customToggle: y,
        refreshPlaceholders: E.refresh,
        updatePlaceholderClass: E.updateClass,
        updatePlaceholderValue: E.updateInputValue,
        getPlaceholderValue: E.getInputValue,
        embedVideo: o.embedVideo,
        createVideoObject: o.createVideoObject,
        createUniqueId: w,
        isTouchDevice: k,
        getCompiledTemplate: e,
        hasTouch: h,
        clickEvent: L,
        getEventStorage: c,
        isResponsive: B,
        mediaquery: z,
        logError: a,
        modules: {}
    };
})(jQuery);
(function(c, g, e) {
    var a = "uitk_tooltip",
        i = c(g),
        m = c("body"),
        r = c(document),
        k = "active-tooltip",
        l = "fade",
        h = {
            arrow: true,
            delay: 0,
            fade: "out",
            pos: "tc",
            posClass: {
                arrow: "show-arrow",
                t: "top",
                b: "bottom",
                m: "mid",
                mTop: "mid-top",
                mBottom: "mid-bottom",
                l: "left",
                r: "right",
                c: "center"
            },
            posOffset: 3,
            template: '<div class="uitk-tooltip"><div class="tooltip-inner"></div><span class="tooltip-arrow"></span></div>',
            textAlign: "left",
            trigger: "click",
            width: 288
        }, q = {
            hover: {
                delay: 150,
                pos: "tc",
                trigger: "hover",
                width: "auto"
            },
            calendar: {
                delay: {
                    show: 0,
                    hide: 0
                },
                pos: "bl",
                posOffset: -6,
                trigger: "focus",
                width: 477
            },
            typeahead: {
                delay: {
                    show: 0,
                    hide: 0
                },
                pos: "bl",
                posOffset: -6,
                preventFlip: true,
                width: 390
            },
            "typeahead-by-category": {
                delay: {
                    show: 0,
                    hide: 0
                },
                pos: "bl",
                posOffset: -6,
                preventFlip: true,
                width: 480
            }
        }, o, f = uitk.isTouchDevice,
        b = uitk.clickEvent + "." + a,
        p = function(s, u) {
            uitk.logError("tooltip.js", a, s, u);
        };
    o = function(z) {
        var w, v = c("." + k);
        for (w = v.length - 1; w >= 0; w = w - 1) {
            var s = v.eq(w),
                x = (s.hasClass("theme-typeahead") || s.hasClass("theme-typeahead-by-category"));
            if (x) {
                continue;
            }
            if (!(z && (s[0] === z[0]))) {
                var u = s.data("trigger");
                var y = c(u).data(a);
                if (y) {
                    y.hide();
                }
            }
        }
    };
    uitk.subscribe("modal.appended", o);

    function n(u, v) {
        var x, w, s;
        this.element = c(u);
        v = v || {};
        x = this.element.data() || {};
        if (v.jsTheme) {
            w = v.jsTheme;
        } else {
            if (this.element.data("jsTheme")) {
                w = this.element.data("jsTheme");
            } else {
                w = v.trigger || x.trigger || h.trigger;
                x.jsTheme = w;
            }
        }
        s = q[w] || {};
        this.options = c.extend(true, {}, h, s, x, v);
        this.options.vPos = this.options.pos.charAt(0);
        this.options.hPos = this.options.pos.charAt(1);
        if (this.options.delay && typeof this.options.delay === "number") {
            this.options.delay = {
                show: this.options.delay,
                hide: this.options.delay
            };
        }
        this.init();
    }
    n.prototype = {
        constructor: n,
        init: function() {
            var s = this.options,
                u = s.posClass;
            this.isShowing = false;
            this.posClasses = this.getPosClasses(u);
            this.content = this.getContent();
            if (s.content) {
                this.ariaData = s.tooltipId || "tooltip" + new Date().getTime();
            }
        },
        getPosClasses: function(v) {
            var u = "";
            for (var s in v) {
                if (v.hasOwnProperty(s) && s !== "arrow") {
                    u = u + v[s] + " ";
                }
            }
            return u;
        },
        getContent: function() {
            var w, s, u, v = this.options;
            if (v.content && typeof v.content === "string") {
                w = '<p class="secondary">' + v.content + "</p>";
            } else {
                if (v.content && typeof v.content === "object") {
                    w = v.content;
                } else {
                    if (v.contentId) {
                        s = c("#" + v.contentId);
                    } else {
                        u = this.element.attr("href");
                        if (u) {
                            u = u.replace(g.location.href.split("#")[0], "");
                        }
                        s = c(u);
                    }
                    w = s.html();
                }
            }
            return w;
        },
        makeVisible: function() {
            this.tooltip.css({
                visibility: "visible"
            });
        },
        makeInvisible: function() {
            if (this.tooltip && this.tooltip.css) {
                this.tooltip.css({
                    visibility: "hidden"
                });
            }
        },
        generateTooltip: function() {
            var v = this,
                s = this.options,
                u = c(s.template),
                w = this.ariaData;
            u.find(".tooltip-inner").prepend(this.content);
            u.find(".tooltip-inner p:last").addClass("last");
            u.addClass(k).css({
                width: s.width,
                "text-align": s.textAlign,
                visibility: "hidden"
            }).data("trigger", v.element);
            if (s.jsTheme) {
                u.addClass("theme-" + s.jsTheme);
            }
            if (s.fade && (s.fade === true || s.fade === "true")) {
                u.addClass(l);
            }
            if (s.arrow) {
                u.addClass(s.posClass.arrow);
            }
            if (w) {
                v.element.attr("aria-describedby", w);
                u.attr("id", w).attr("role", "tooltip");
            } else {
                if (s.tooltipId) {
                    u.attr("id", s.tooltipId);
                }
            } if (v.options.trigger === "hover" && !f) {
                u.find(".close").remove();
            }
            return u;
        },
        show: function() {
            var u = this,
                s = this.options;
            this.isShowing = true;
            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
            }
            if (!u.tooltip || u.tooltip.closest("html").length === 0) {
                o();
                u.tooltip = u.generateTooltip();
                u.tooltipArrow = u.tooltip.find(".tooltip-arrow");
                u.tooltip.appendTo("body");
                u.setPos();
                u.checkPos(false, true);
            } else {
                o(u.tooltip);
            }
            setTimeout(function() {
                u.tooltip.addClass("on");
                if (s.fade && s.fade === "out") {
                    setTimeout(function() {
                        u.tooltip.addClass(l);
                    }, 10);
                }
            }, s.delay.show);
        },
        hide: function() {
            var s = this,
                u;
            this.isShowing = false;
            if (this.showTimeout) {
                clearTimeout(this.showTimeout);
            }
            if (this.tooltip) {
                u = this.tooltip;
                this.hideTimeout = setTimeout(function() {
                    u.removeClass("on");
                    uitk.publish("tooltip.hidden", s.element);
                    setTimeout(function() {
                        if (!u.hasClass("on") && !s.isShowing) {
                            u.remove();
                        }
                    }, 500);
                }, this.options.delay.hide);
            }
        },
        setPos: function(w, s, u) {
            var x = this.options,
                y = w || x.vPos,
                v = s || x.hPos,
                z = this.getPos(y, v);
            this.tooltip.css({
                left: z.left,
                top: z.top
            });
            this.tooltip.find(".tooltip-arrow").css({
                "margin-left": z.leftShift,
                "margin-right": z.rightShift
            });
        },
        getTopPos: function(C, s) {
            var z = s.offset(),
                v = s.outerHeight(),
                y = this.options.posOffset,
                B = this.tooltip,
                A, u = this.tooltipArrow,
                x, w;
            A = B.outerHeight();
            if (C === "t") {
                x = z.top - A - y;
            } else {
                if (C === "m") {
                    x = z.top + v / 2 - A / 2;
                } else {
                    if (C === "mTop") {
                        w = parseInt(u.css("bottom"), 10) + parseInt(u.css("border-top-width"), 10);
                        x = z.top - A + v / 2 + w;
                    } else {
                        if (C === "mBottom") {
                            w = parseInt(u.css("top"), 10) + parseInt(u.css("border-top-width"), 10);
                            x = z.top + v / 2 - w;
                        } else {
                            if (C === "b") {
                                x = z.top + v + y;
                            }
                        }
                    }
                }
            }
            return x;
        },
        getWindowWidth: function() {
            return i.width();
        },
        getLeftPos: function(C, H, s) {
            var B = s.offset(),
                w = s.outerWidth(),
                A = this.options.posOffset,
                v, x, E, F, z, D, u, G = this.tooltip,
                y;
            y = G.outerWidth();
            if (C === "c") {
                z = B.left + w / 2 - y / 2;
                D = B.left + w / 2 + y / 2;
                u = this.getWindowWidth();
                if (z < 0) {
                    x = z;
                    v = 0;
                } else {
                    if (D > u) {
                        x = D - u;
                        v = B.left + w / 2 - y / 2 - x;
                    } else {
                        v = B.left + w / 2 - y / 2;
                    }
                }
            } else {
                if (C === "r") {
                    if (H === "m" || H === "mTop" || H === "mBottom") {
                        v = B.left + w + A;
                    } else {
                        F = B.left - y + w;
                        if (F > 0) {
                            v = F;
                        } else {
                            E = -(F);
                            v = 0;
                        }
                    }
                } else {
                    if (C === "l") {
                        if (H === "m" || H === "mTop" || H === "mBottom") {
                            v = B.left - y - A;
                        } else {
                            F = y + B.left;
                            u = this.getWindowWidth();
                            if (F < u) {
                                v = B.left;
                            } else {
                                x = F - u;
                                v = B.left - x;
                            }
                        }
                    }
                }
            }
            return {
                left: v,
                leftShift: x,
                rightShift: E
            };
        },
        getPos: function(x, v) {
            var z = {}, C = this.options,
                w = C.posClass,
                B = x || C.vPos,
                y = v || C.hPos,
                u = this.element,
                A = this.tooltip,
                s;
            z.leftShift = 0;
            z.rightShift = 0;
            A.removeClass(this.posClasses);
            A.addClass(w[B] + " " + w[y]);
            z.top = this.getTopPos(B, u);
            s = this.getLeftPos(y, B, u);
            z.left = s.left;
            if (s.leftShift) {
                z.leftShift = s.leftShift;
            }
            if (s.rightShift) {
                z.rightShift = s.rightShift;
            }
            return z;
        },
        testTopPos: function(s, u, v) {
            return s + u > v;
        },
        testBottomPos: function(s, u, v, w) {
            return s - u < v + w;
        },
        testLeftPos: function(s, v, u) {
            return s + v > u;
        },
        testRightPos: function(u, w, v, s) {
            return u - w < v + s;
        },
        checkPos: function(N, y, G, D) {
            if (this.tooltip && this.tooltip instanceof jQuery) {
                var v = G || this.options.vPos,
                    u = D || this.options.hPos;
                this.makeInvisible();
                if (this.options.preventFlip) {
                    this.setPos(v, u);
                    this.makeVisible();
                    return;
                }
                var F = this.getPos(v, u),
                    w = this.tooltip;
                var J = parseInt(w.css("padding-left"), 10),
                    M = parseInt(w.css("padding-top"), 10),
                    A = F.top,
                    L = F.left,
                    s = L + w.outerWidth(),
                    B = A + w.outerHeight(),
                    x = i.scrollTop(),
                    K = i.scrollLeft(),
                    C = i.height(),
                    P = i.width(),
                    O = this.testTopPos(A, M, x),
                    I = this.testBottomPos(B, M, x, C),
                    E = this.testLeftPos(L, J, K),
                    H = this.testRightPos(s, J, K, P),
                    z = false;
                if (O && I && E && H) {
                    if (N) {
                        this.setPos(v, u);
                    }
                    this.makeVisible();
                    return;
                }
                if (v === "m") {
                    if (u === "l" && !E) {
                        u = "r";
                        z = true;
                    } else {
                        if (u === "r" && !H) {
                            u = "l";
                            z = true;
                        }
                    }
                } else {
                    if (u === "l" && !H) {
                        u = "l";
                        z = true;
                    } else {
                        if (u === "r" && !E) {
                            u = "r";
                            z = true;
                        } else {
                            if (u === "c" && (!H || !E)) {
                                u = "c";
                                z = true;
                            }
                        }
                    }
                } if (v === "t" && !O) {
                    v = "b";
                    z = true;
                } else {
                    if (v === "b" && !I) {
                        v = "t";
                        z = true;
                    } else {
                        if (v === "m") {
                            if (O && !I) {
                                v = "mTop";
                                z = true;
                            } else {
                                if (I && !O) {
                                    v = "mBottom";
                                    z = true;
                                }
                            }
                        }
                    }
                } if (z) {
                    this.setPos(v, u);
                    if (y) {
                        this.checkPos(false, false, v, u);
                    } else {
                        this.makeVisible();
                    }
                }
            }
        },
        updateContent: function(s) {
            if (s && typeof s === "string") {
                this.content = '<p class="secondary">' + s + "</p>";
            } else {
                if (s && typeof s === "object") {
                    this.content = s;
                }
            }
        }
    };
    c.fn[a] = function() {
        var v, w, s, u;
        if (typeof arguments[0] === "object") {
            v = arguments[0];
            w = arguments[1];
            s = arguments[2];
            u = arguments[3];
        } else {
            v = {};
            w = arguments[0];
            s = arguments[1];
            u = arguments[2];
        }
        return this.each(function() {
            if (!c.data(this, a)) {
                c.data(this, a, new n(this, v));
            }
            if (typeof w === "string") {
                c.data(this, a)[w](s, u);
            }
        });
    };
    var d = uitk.createUniqueId();
    m.on(b, '[data-control="tooltip"]', {
        eventId: d
    }, function(w) {
        var s = c(w.target).closest('[data-control="tooltip"]'),
            v = s.data("trigger"),
            u = q[s.data("jsTheme")];
        if ((v && v !== "hover") || (!v && u && u.trigger !== "hover") || (s.attr("href") && s.attr("href").charAt(0) === "#")) {
            s[a]("show");
            w.preventDefault();
        }
    });
    var j = function(y, w, x) {
        var s = c(y.target).closest('[data-control="tooltip"]'),
            v = s.data("trigger"),
            u = q[s.data("jsTheme")];
        if (v === w || (!v && u && u.trigger === w)) {
            y.preventDefault();
            s[a](x);
        }
    };
    m.on("uitkMouseenter." + a + " focus." + a, '[data-control="tooltip"]', {
        eventId: d
    }, function(s) {
        j(s, "hover", "show");
    });
    m.on("uitkMouseleave." + a + " blur." + a, '[data-control="tooltip"]', {
        eventId: d
    }, function(s) {
        j(s, "hover", "hide");
    });
    m.on("focus." + a, '[data-control="tooltip"]', function(s) {
        j(s, "focus", "show");
    });
    m.on("blur." + a, '[data-control="tooltip"]', function(s) {
        j(s, "focus", "hide");
    });
    m.on(b, ".active-tooltip .close", function(u) {
        var s = c(u.target).closest(".active-tooltip");
        u.preventDefault();
        s.data("trigger")[a]("hide");
    });
    r.on(b + " focusin." + a, function(u) {
        var s = c(u.target).closest('[data-control="tooltip"]');
        if (s.length <= 0) {
            s = c(u.target);
        }
        if (s.data("control") !== "tooltip" && s.data("control") !== "calendar" && !s.hasClass(k) && s.closest("." + k).length === 0) {
            o();
        }
    });
    r.on("keydown", function(s) {
        if (s.keyCode === 27) {
            o();
        }
    });
    c(g).on("scroll." + a + " resize." + a, function() {
        var u, s = c("." + k);
        for (u = s.length - 1; u >= 0; u = u - 1) {
            c(s.eq(u).data("trigger"))[a]("checkPos", true, true);
        }
    });
    uitk.modules.Tooltip = n;
}(jQuery, window));
(function(f, h, b) {
    var g = "uitk_tabs",
        e = f("body"),
        i = h.location.pathname + "_" + g,
        j = Modernizr.sessionstorage,
        k = Modernizr.hashchange,
        d = "on",
        c = {
            initialTab: 0,
            hashSuffix: "tab",
            history: false,
            tabState: true
        };

    function a(l, m) {
        var n;
        this.element = f(l);
        this.tabs = this.element.find(".tabs li");
        m = m || {};
        n = this.element.data() || {};
        this.options = f.extend({}, c, n, m);
        this.init();
    }
    a.prototype = {
        init: function() {
            var o = this,
                m, n;
            this.element.attr("data-control", "tabs");
            this.tabsContent = f();
            for (n = this.tabs.length; n > 0; n = n - 1) {
                var p = this.tabs.eq(n - 1),
                    l = o.getContentElem(p);
                p.data("content", l);
                this.tabsContent = this.tabsContent.add(l);
            }
            if (k) {
                f(h).on("hashchange." + g, function() {
                    var q = o.getNextTab();
                    if (q) {
                        o.showTab(q);
                    }
                });
            }
            m = this.getNextTab(true);
            this.showTab(m, true);
        },
        selectTab: function(l) {
            if (!k || !this.options.history) {
                this.showTab(l.closest("li"));
            } else {
                h.location.hash = l.attr("href") + "_" + this.options.hashSuffix;
            }
        },
        getContentElem: function(m) {
            var l = m.find("a").attr("href");
            return this.element.find(l);
        },
        getNextTab: function(s) {
            var q = h.location.hash,
                n = new RegExp("_" + this.options.hashSuffix + "$"),
                o = this.tabs.find('a[href="' + q.replace(n, "") + '"]'),
                u, m, r, l, p;
            if (s && j && this.options.tabState) {
                m = sessionStorage.getItem(i);
                if (m) {
                    u = JSON.parse(m);
                    for (p = u.length - 1; p >= 0; p = p - 1) {
                        r = this.tabs.find('a[href="' + u[p] + '"]');
                        if (r.length > 0) {
                            return r.parent();
                        }
                    }
                }
            }
            if (q && o.length > 0) {
                l = o.parent();
            } else {
                if (s && this.options.initialTab + 1 <= this.tabs.length) {
                    l = this.tabs.eq(this.options.initialTab);
                } else {
                    if (s) {
                        l = this.tabs.eq(0);
                    }
                }
            }
            return l;
        },
        showTab: function(m, n) {
            var l = m.data("content");
            this.tabsContent.removeClass(d);
            this.tabs.find("a").removeClass(d).attr({
                "tabindex": "-1",
                "aria-selected": "false"
            });
            m.find("a").addClass(d).attr({
                "tabindex": "0",
                "aria-selected": "true"
            });
            if (l) {
                l.addClass(d);
            }
            uitk.publish("tab.selected", m);
            if (!n) {
                this.storeState();
                m.find("a").focus();
            }
        },
        storeState: function() {
            var l, n, m;
            if (j && this.options.tabState) {
                n = [];
                l = f(".tabs a." + d);
                for (m = l.length - 1; m >= 0; m = m - 1) {
                    n.push(l.eq(m).attr("href"));
                }
                sessionStorage.setItem(i, JSON.stringify(n));
            }
        }
    };
    f.fn[g] = function() {
        var m, n, l;
        if (typeof arguments[0] === "object") {
            m = arguments[0];
            n = arguments[1];
            l = arguments[2];
        } else {
            m = {};
            n = arguments[0];
            l = arguments[1];
        }
        return this.each(function() {
            if (!f.data(this, g)) {
                f.data(this, g, new a(this, m));
            }
            if (typeof n === "string") {
                f.data(this, g)[n](l);
            }
        });
    };
    f("[data-control=tabs]")[g]();
    e.on(uitk.clickEvent + "." + g, "[data-control=tabs] .tabs a", function(m) {
        var l = f(m.target).closest("a");
        m.preventDefault();
        l.closest("[data-control=tabs]")[g]("selectTab", l);
    });
    e.on("keydown." + g, "[data-control=tabs] .tabs a", function(p) {
        var m = f(p.target),
            l = p.keyCode,
            o, n;
        if (l === 37 || l === 38) {
            o = m.parent().prev();
            if (o.length > 0) {
                o.find(">a").focus();
                if (l === 38) {
                    p.preventDefault();
                    return false;
                }
            } else {
                if (l === 37) {
                    m.closest(".tabs").find("li:last>a").focus();
                }
            }
        } else {
            if (l === 39 || l === 40) {
                n = m.parent().next();
                if (n.length > 0) {
                    n.find(">a").focus();
                    if (l === 40) {
                        p.preventDefault();
                        return false;
                    }
                } else {
                    if (l === 39) {
                        m.closest(".tabs").find("li:first>a").focus();
                    }
                }
            }
        }
    });
}(jQuery, window));
(function(g, k, d) {
    var j = "uitk_toggle",
        f = g("body"),
        i = "open",
        m = "after-open",
        a = "viewed",
        h = "toggle",
        c = "open",
        b = "closed",
        e = {
            transition: "slide"
        }, n = Modernizr.csstransitions;

    function l(o, p) {
        var q;
        this.element = g(o);
        p = p || {};
        q = this.element.data() || {};
        this.options = g.extend(true, {}, e, q, p);
        this.init();
    }
    l.prototype = {
        constructor: l,
        init: function() {
            var q = this.element,
                o = this.options,
                p = this;
            this.content = o.contentId ? g("#" + o.contentId) : g(q.attr("href"));
            this.parent = this.content.closest("." + h);
            this.options.expandText = this.options.expandText || q.html();
            this.options.collapseText = this.options.collapseText || q.html();
            if (this.parent.data("type") === "read-more") {
                this.isReadMore = true;
                this.closedHeight = this.content.height();
                this.readMoreItems = this.content.find(".rm-hide");
                this.ellipse = this.content.find(".ellipse");
                this.content.css({
                    height: this.closedHeight
                });
            } else {
                this.closedHeight = 0;
            }
            this.hasTransitions = n && (o.transition !== "none");
            if (this.hasTransitions) {
                p.parent.addClass(o.transition);
            }
            if (this.parent.hasClass(i)) {
                this.state = c;
                this.content.css({
                    visibility: "visible"
                });
            } else {
                this.state = b;
                p.content.css({
                    visibility: "hidden"
                });
            }
            this.accordion = q.closest("[data-control=accordion]");
            if (this.accordion.length > 0) {
                this.siblings = this.accordion.find('[data-control="toggle"]').not(q);
            }
            if (this.hasTransitions) {
                this.content.on("transitionEnd oTransitionEnd msTransitionEnd transitionend webkitTransitionEnd", function(r) {
                    if (p.state === c) {
                        if (p.content.hasClass(o.transition)) {
                            p.content.removeClass(o.transition).css({
                                height: "auto"
                            });
                            uitk.publish("toggle.opened", p.element);
                        }
                    } else {
                        if (p.state === b) {
                            if (p.content.hasClass(o.transition)) {
                                p.closeEnd();
                                p.content.removeClass(o.transition);
                            }
                        }
                    }
                });
            }
        },
        setOpenHeight: function() {
            var p = this.content,
                o;
            if (this.hasTransitions) {
                o = p[0].scrollHeight || 1;
            } else {
                o = "auto";
            }
            p.css({
                height: o,
                opacity: 1
            });
            if (this.isReadMore) {
                this.readMoreItems.css({
                    opacity: 1
                });
            }
        },
        open: function(q) {
            var p = this,
                o;
            if ((this.options.manual === "open" || this.options.manual === "both") && q) {
                uitk.publish("toggle.beforeOpen", p.element);
                return;
            }
            if (this.state === c) {
                return;
            }
            o = function() {
                var r = 0;
                p.state = c;
                if (p.accordion.length > 0) {
                    p.siblings.each(function() {
                        var s = g(this);
                        if (s.hasClass(i)) {
                            if (p.options.transition === "fade") {
                                r = 125;
                            }
                            s[j]("close");
                        }
                    });
                }
                setTimeout(function() {
                    p.content.css({
                        visibility: "visible"
                    }).attr("aria-expanded", "true");
                    if (p.isReadMore) {
                        p.readMoreItems.removeClass("rm-hide").addClass("rm");
                        p.ellipse.hide();
                    }
                    p.element.html(p.options.collapseText);
                    p.setOpenHeight();
                    p.element.removeClass(a).addClass(i);
                    p.content.removeClass(a).addClass(i);
                    p.parent.removeClass(a).addClass(i);
                    p.parent.next().addClass(m);
                    if (!p.hasTransitions) {
                        uitk.publish("toggle.opened", p.element);
                    }
                }, r);
            };
            this.closedHeight = this.content.height();
            if (this.state !== c) {
                if (this.isReadMore) {
                    this.content.css({
                        height: this.closedHeight
                    });
                }
                if (p.hasTransitions) {
                    setTimeout(function() {
                        p.content.addClass(p.options.transition);
                        o();
                    }, 10);
                } else {
                    o();
                }
            }
        },
        close: function(q) {
            var o = this,
                r = o.options.transition,
                p;
            if ((this.options.manual === "close" || this.options.manual === "both") && q) {
                uitk.publish("toggle.beforeClose", o.element);
                return;
            }
            p = function() {
                o.state = b;
                if (r === "fade" && !o.isReadMore) {
                    o.content.css({
                        height: o.closedHeight,
                        opacity: 0,
                        overflow: "hidden"
                    });
                } else {
                    if (r === "fade" && o.isReadMore) {
                        o.content.css({
                            height: o.closedHeight,
                            opacity: 1,
                            overflow: "hidden"
                        });
                        o.readMoreItems.css({
                            opacity: 0
                        });
                    } else {
                        if (o.isReadMore) {
                            o.content.css({
                                height: o.closedHeight,
                                opacity: 1,
                                overflow: "hidden"
                            });
                        } else {
                            o.content.css({
                                height: 0,
                                opacity: 0,
                                overflow: "hidden"
                            });
                        }
                    }
                }
                o.content.attr("aria-expanded", "false");
                o.element.removeClass(i).addClass(a);
                o.content.removeClass(i).addClass(a);
                o.parent.removeClass(i).addClass(a);
                if (r === "fade") {
                    o.closeEnd();
                }
            };
            if (o.state !== b) {
                this.setOpenHeight();
                if (o.hasTransitions) {
                    setTimeout(function() {
                        o.content.addClass(r);
                        o.element.html(o.options.expandText);
                        setTimeout(p, 10);
                    }, 10);
                } else {
                    o.element.html(o.options.expandText);
                    p();
                    o.closeEnd();
                }
            }
        },
        closeEnd: function() {
            if (this.isReadMore) {
                this.readMoreItems.removeClass("rm").addClass("rm-hide");
                this.content.css({
                    height: "auto"
                });
                this.ellipse.show();
            } else {
                this.content.css({
                    visibility: "hidden"
                });
            }
            this.parent.next().removeClass(m);
            uitk.publish("toggle.closed", this.element);
        },
        toggle: function(o) {
            if (this.state === c) {
                this.close(o);
            } else {
                this.open(o);
            }
        }
    };
    g.fn[j] = function() {
        var p, q, o;
        if (typeof arguments[0] === "object") {
            p = arguments[0];
            q = arguments[1];
            o = arguments[2];
        } else {
            p = {};
            q = arguments[0];
            o = arguments[1];
        }
        return this.each(function() {
            if (!g.data(this, j)) {
                g.data(this, j, new l(this, p));
            }
            if (typeof q === "string") {
                g.data(this, j)[q](o);
            }
        });
    };
    f.on(uitk.clickEvent, '[data-control="toggle"]', {
        preventDoubleClick: true
    }, function(p) {
        p.preventDefault();
        var o = g(p.target).closest('[data-control="toggle"]');
        o[j]("toggle", true);
    });
}(jQuery, window));
(function(g, j, d) {
    var i = "uitk_offCanvasToggle",
        f = g("body"),
        k = "off-canvas-inner",
        n = "off-canvas-outer",
        h = "off-canvas-open",
        a = g(".site-content"),
        m = "off-canvas-overlay",
        c = "open",
        b = "closed",
        e = {
            side: "left",
            maxWidth: "959"
        }, o = uitk.clickEvent + "." + i;

    function l(p, q) {
        var r;
        this.element = g(p);
        q = q || {};
        r = this.element.data() || {};
        this.options = g.extend(true, {}, e, r, q);
        this.init();
    }
    l.prototype = {
        constructor: l,
        init: function() {
            var p = this;
            if (this.options.side === "left") {
                this.wrapperClass = k;
            } else {
                this.wrapperClass = n;
            }
            this.options.maxWidth = this.options.maxWidth / 16;
            if (a.hasClass(this.openClass)) {
                this.state = c;
            } else {
                this.state = b;
            }
            this.sidebar = g(this.options.target);
            uitk.subscribe("off-canvas.close", this, this.close);
            j.onresize = function() {
                p.setPos();
            };
            if (a.children("." + m).length === 0) {
                this.overlay = g("<div />").addClass(m).appendTo(a);
            }
        },
        setPos: function() {
            if (Modernizr.mq("(max-width: " + this.options.maxWidth + "em)")) {
                this.sidebar.css({
                    "margin-top": -this.sidebar.position().top
                });
            } else {
                this.sidebar.css({
                    "margin-top": "auto"
                });
            }
        },
        open: function() {
            var p = this;
            this.setPos();
            a.addClass(p.wrapperClass);
            setTimeout(function() {
                a.addClass(h);
            }, 50);
            this.state = c;
        },
        close: function() {
            var q = this,
                p = "transitionEnd oTransitionEnd msTransitionEnd transitionend webkitTransitionEnd";
            if (this.state !== b) {
                a.removeClass(h);
                if (Modernizr.csstransitions) {
                    a.on(p, function(r) {
                        if (r.target === this) {
                            a.removeClass(q.wrapperClass);
                            q.state = b;
                            a.off(p);
                        }
                    });
                } else {
                    a.removeClass(q.wrapperClass);
                    q.state = b;
                }
            }
        },
        toggle: function() {
            if (this.state === c) {
                this.close();
            } else {
                this.open();
            }
        }
    };
    g.fn[i] = function() {
        var p, q;
        if (typeof arguments[0] === "object") {
            p = arguments[0];
            q = arguments[1];
        } else {
            p = {};
            q = arguments[0];
        }
        return this.each(function() {
            if (!g.data(this, i)) {
                g.data(this, i, new l(this, p));
            }
            if (typeof q === "string") {
                g.data(this, i)[q]();
            }
        });
    };
    f.on(o, '[data-control="off-canvas-toggle"]', function(q) {
        var p = g(q.target).closest('[data-control="off-canvas-toggle"]');
        q.preventDefault();
        p[i]("toggle");
    });
    f.on(o, "." + m, function(p) {
        p.preventDefault();
        p.stopPropagation();
        uitk.publish("off-canvas.close");
    });
    uitk.modules.OffCanvasToggle = l;
}(jQuery, window));
(function(f, h, b) {
    var g = "uitk_mediaViewer",
        c = {}, d = "current",
        a = 0,
        e = 500;

    function i(j, k) {
        var l;
        this.element = f(j);
        k = k || {};
        l = this.element.data() || {};
        this.options = f.extend(true, {}, c, l, k);
        this.init();
    }
    i.prototype = {
        constructor: i,
        init: function() {
            var m = this.element,
                k = this.options.sliderId,
                o, n, l = this,
                j;
            this.showMediaTimeout = "";
            this.mediaCarouselNum = a;
            a++;
            o = f("<figure></figure>");
            o.append("<img />").append("<figcaption />").addClass("media-wrap").find("figcaption").addClass("media-caption");
            n = f("<figure></figure>").addClass("media-wrap");
            this.imgTemplate = o;
            this.videoTemplate = n;
            f(h).resize(function() {
                l.resize(l);
            });
            if (uitk) {
                j = function(u, p, q) {
                    var y, r;
                    if (k === q) {
                        r = p.find("a");
                        y = r.data("mediaType") || "image";
                        switch (y) {
                            case "image":
                                var v = r.attr("href"),
                                    x = p.find("img").attr("alt");
                                this.showMedia("image", v, x);
                                break;
                            case "youtube":
                                var w = r.data("mediaId"),
                                    s = r.data("mediaOptions") || {};
                                this.showMedia("youtube", w, s);
                                break;
                            default:
                        }
                    }
                };
                this.subToken = uitk.subscribe("image-selected", this, j);
            }
        },
        showMedia: function(j) {
            var k = arguments,
                m = this.element,
                l = this;
            if (this.current && this.current.data("video")) {
                this.current.data("video").pauseVideo();
            }
            j = j || "image";
            m.find("." + d).removeClass(d).attr("aria-hidden", true);
            l.showMediaLoaderTimeout = setTimeout(function() {
                m.addClass("loading");
            }, e);
            clearTimeout(l.showMediaTimeout);
            switch (j) {
                case "image":
                    l.showImage(k[1], k[2]);
                    break;
                case "youtube":
                    l.showVideo(j, k[1], k[2]);
                    break;
                default:
            }
        },
        showImage: function(j, p) {
            var l = this,
                o = this.element,
                n, k, m = o.find('[src="' + j + '"]');
            m.closest(".media-wrap").css({
                "padding-top": 0
            });
            if (m.length === 0) {
                this.showMediaTimeout = setTimeout(function() {
                    n = l.imgTemplate.clone();
                    k = n.find("img").attr("src", j).attr("alt", p);
                    n.find(".media-caption").text(p);
                    o.prepend(n);
                    l.current = n;
                    k.one("load", function() {
                        if (l.current === n) {
                            clearTimeout(l.showMediaLoaderTimeout);
                            o.removeClass("loading");
                            n.addClass(d).attr("aria-hidden", false);
                            l.positionImg();
                        }
                    });
                    if (k[0].complete) {
                        k.width();
                        k.trigger("load");
                    }
                }, 10);
            } else {
                if (m[0].complete) {
                    n = m.closest(".media-wrap");
                    this.current = n;
                    clearTimeout(l.showMediaLoaderTimeout);
                    o.removeClass("loading");
                    n.addClass(d).attr("aria-hidden", false);
                    this.positionImg();
                }
            }
        },
        showVideo: function(q, p, n) {
            var o = this,
                l = this.element,
                j = "MC" + this.mediaCarouselNum + "_" + q + p,
                m, r, k = f("#" + j);
            if (k.length === 0) {
                this.showMediaTimeout = setTimeout(function() {
                    m = o.videoTemplate.clone();
                    m.prepend('<div allowTransparency="true" id="' + j + '"></div>');
                    l.prepend(m);
                    o.current = m;
                    r = uitk.embedVideo(q, p, n, j, function() {
                        r.done(function(s) {
                            m.data("video", uitk.createVideoObject(q, s));
                            if (o.current === m) {
                                clearTimeout(o.showMediaLoaderTimeout);
                                l.removeClass("loading");
                                m.addClass(d).attr("aria-hidden", false);
                            }
                        });
                    });
                    if (f("html").hasClass("lt-ie9")) {
                        m.addClass(d).attr("aria-hidden", false);
                    }
                }, 500);
            } else {
                m = k.closest(".media-wrap");
                this.current = m;
                if (m.data("video") && m.data("video").videoObj.getPlayerState() !== -1) {
                    m.data("video").rewindVideo();
                }
                clearTimeout(o.showMediaLoaderTimeout);
                l.removeClass("loading");
                m.addClass(d).attr("aria-hidden", false);
            }
        },
        positionImg: function() {
            var k = this.element,
                m = k.find("." + d),
                j = k.outerHeight(),
                n = m.find("img").height(),
                l = Math.floor((j - n) / 2);
            m.css({
                "padding-top": l
            });
        },
        resize: function() {
            this.positionImg();
        }
    };
    f.fn[g] = function() {
        var l, m, j, k;
        if (typeof arguments[0] === "object") {
            l = arguments[0];
            m = arguments[1];
            j = arguments[2];
            k = arguments[3];
        } else {
            l = {};
            m = arguments[0];
            j = arguments[1];
            k = arguments[2];
        }
        return this.each(function() {
            if (!f.data(this, g)) {
                f.data(this, g, new i(this, l));
            }
            if (typeof m === "string") {
                f.data(this, g)[m](j, k);
            }
        });
    };
    f("[data-control=media-viewer]")[g]();
}(jQuery, window));
(function(f, h, b) {
    var g = "uitk_imageSlider",
        e = f("body"),
        c = {}, d = "current",
        i = uitk.clickEvent + "." + g;

    function a(j, k) {
        var l;
        this.element = f(j);
        k = k || {};
        l = this.element.data() || {};
        this.options = f.extend(true, {}, c, l, k);
        this.init();
    }
    a.prototype = {
        constructor: a,
        init: function() {
            var k = this.element,
                j = this;
            k.attr("data-control", "image-slider");
            this.sliderId = this.options.sliderId;
            this.thumbs = k.find(".image-slider-thumbs");
            this.mask = k.find(".image-slider-mask");
            this.current = this.thumbs.find("." + d);
            this.selectThumb(this.thumbs.find("li").first(), true);
            f(h).resize(function() {
                j.resize(j);
            });
        },
        repositionThumbs: function(k, o) {
            var p = this.thumbs,
                s = p.find("li:last"),
                q = this.mask.offset().left,
                j = q + this.mask.outerWidth(),
                r = k.offset().left,
                m = r + k.outerWidth(),
                l, n;
            if (r < q || m > j || (s.offset().left + s.width()) < j) {
                l = s.position().left + s.outerWidth() - this.element.outerWidth();
                if (o) {
                    p.addClass("slide");
                } else {
                    p.removeClass("slide");
                }
                n = k.position().left;
                n = l > n ? n : l;
                n = n > 0 ? n : 0;
                p.css({
                    left: -n
                });
            }
        },
        selectThumb: function(k, j) {
            if (k && k.length > 0) {
                if (this.current) {
                    this.current.removeClass(d);
                }
                this.current = k.addClass(d);
                if (!j) {
                    this.repositionThumbs(k, true);
                }
                if (uitk) {
                    uitk.publish("image-selected", k, this.sliderId);
                }
            }
        },
        prev: function() {
            var j = this.current.prev();
            if (j.length < 1) {
                j = this.thumbs.find("li:last");
            }
            this.selectThumb(j);
        },
        next: function() {
            var j = this.current.next();
            if (j.length < 1) {
                j = this.thumbs.find("li:first");
            }
            this.selectThumb(j);
        },
        resize: function() {
            var j = this.thumbs.find("." + d);
            this.repositionThumbs(j, false);
        }
    };
    f.fn[g] = function() {
        var k, l, j;
        if (typeof arguments[0] === "object") {
            k = arguments[0];
            l = arguments[1];
            j = arguments[2];
        } else {
            k = {};
            l = arguments[0];
            j = arguments[1];
        }
        return this.each(function() {
            if (!f.data(this, g)) {
                f.data(this, g, new a(this, k));
            }
            if (typeof l === "string") {
                f.data(this, g)[l](j);
            }
        });
    };
    e.on(i, '[data-control="image-slider"] .image-slider-control', function(m) {
        var j = f(m.target),
            l = j.closest(".image-slider-control"),
            k = j.closest('[data-control="image-slider"]');
        m.preventDefault();
        if (l.hasClass("next")) {
            k[g]("next");
        } else {
            if (l.hasClass("prev")) {
                k[g]("prev");
            }
        }
    });
    e.on(i, '[data-control="image-slider"] .image-slider-thumbs a', function(l) {
        var j = f(l.target),
            m = j.closest("li"),
            k = j.closest('[data-control="image-slider"]');
        l.preventDefault();
        if (!m.hasClass("current")) {
            k[g]("selectThumb", m);
        }
    });
    e.on("focus." + g, '[data-control="image-slider"] .image-slider-thumbs a', function(l) {
        var j = f(l.target),
            m = j.closest("li"),
            k = j.closest('[data-control="image-slider"]');
        l.preventDefault();
        setTimeout(function() {
            k[g]("repositionThumbs", m, true);
        }, 100);
    });
    f("[data-control=image-slider]")[g]();
}(jQuery, window));
(function(d, f, e) {
    uitk.media = {};
    var a = "uitk_media",
        s = {
            downgrade: false
        }, g = {
            mediaOptions: {}
        }, j = 0,
        q = Modernizr.csstransitions,
        c, b, l = d(f);
    var v = l.scrollTop(),
        m, k = 1,
        h = 10,
        p, n, r = true;

    function i(w, x) {
        var y;
        this.element = d(w);
        x = x || {};
        y = this.element.data() || {};
        this.options = d.extend(true, {}, s, y, x);
        this.init();
    }
    i.prototype = {
        constructor: i,
        init: function() {
            if (this.options.lazy) {
                var w = this.options.src;
                this.lazyLoaded = false;
                this.initialAspectRatio = this.options.aspectRatio || "16-9";
                this.imgSrc = w ? this.createFullUrl(w, this.options.path) : "";
                this.currentImg = "";
                this.isContentSlider = this.element.closest('[data-control="content-slider"]').length > 0;
                if (this.options.srcset && uitk.isResponsive) {
                    this.imgSrcsetArr = this.parseSrcset(this.options.srcset, Modernizr.highres, this.options.path);
                    this.responsive = true;
                }
            }
        },
        createFullUrl: function(x, w) {
            if (x.indexOf("//") !== -1 || !w) {
                return x;
            } else {
                return w + x;
            }
        },
        parseSrc: function(C, B) {
            var A = d.trim(C).split(" "),
                x = A.length,
                y = {
                    retina: false
                }, z;
            y.url = this.createFullUrl(A[0], B);
            for (z = 1; z < x; z = z + 1) {
                var w = A[z];
                if (w[w.length - 1] === "w") {
                    y.width = parseInt(w, 10);
                } else {
                    if (w === "1-1" || w === "3-2" || w === "4-3" || w === "16-9") {
                        y.ratio = w;
                    } else {
                        if (w === "2x") {
                            y.retina = true;
                        }
                    }
                }
            }
            return y;
        },
        parseSrcset: function(z, y, F) {
            var B = this,
                w = z.split(","),
                D = z.split(",").length,
                C = [],
                x, A;
            for (A = 0; A < D; A = A + 1) {
                var E = B.parseSrc(w[A], F);
                C.push(E);
            }
            C.sort(function(J, H) {
                var K = 100000,
                    I = J.width || K,
                    G = H.width || K;
                return I - G;
            });
            x = C.length;
            for (A = x - 1; A > 0; A = A - 1) {
                if (C[A].width === C[A - 1].width) {
                    if (C[A].retina !== y) {
                        C.splice(A, 1);
                    } else {
                        C.splice(A - 1, 1);
                    }
                }
            }
            return C;
        },
        getImgToLoad: function(x, A, z) {
            var w, y;
            if (!x || !z) {
                return {
                    url: A
                };
            }
            w = x.length;
            for (y = 0; y < w; y = y + 1) {
                if (Modernizr.mq("(max-width:" + x[y].width / 16 + "em)")) {
                    return x[y];
                }
            }
            return x[w - 1];
        },
        preloadImg: function(z, w, x) {
            var y = new Image();
            y.onload = function() {
                w();
            };
            if (x) {
                y.onerror = function() {
                    x();
                };
            }
            if (!z) {
                y.onerror();
            } else {
                y.src = z;
            }
        },
        removeSmallerImages: function(y) {
            var x = this.imgSrcsetArr;
            if (x && y) {
                var w = x.length,
                    z;
                for (z = 0; z < w; z = z + 1) {
                    if (x[z].url === y) {
                        x.splice(0, z);
                        break;
                    }
                }
                return x;
            }
        },
        updateImgSrc: function(w) {
            this.image.src = w;
            this.image.removeAttribute("height");
            this.image.removeAttribute("width");
        },
        updateRatio: function(w, x) {
            var y = this;
            w.removeClass("aspect-ratio1-1 aspect-ratio3-2 aspect-ratio4-3 aspect-ratio5-4 aspect-ratio16-9");
            if (x) {
                w.addClass("aspect-ratio" + x);
            } else {
                w.addClass("aspect-ratio" + y.initialAspectRatio);
            }
        },
        embedImage: function(B, y, x, w) {
            var A = this,
                z = B.url;
            if (z && this.currentImg === z) {
                return;
            }
            this.currentImg = z;
            this.preloadImg(z, function() {
                if (A.currentImg === z) {
                    if (!A.lazyLoaded) {
                        A.lazyLoaded = true;
                        w.removeClass("no-image");
                        w.addClass("loading");
                        A.image = f.document.createElement("img");
                        A.image.alt = y;
                        A.image.className = x;
                        A.image.onload = function() {
                            setTimeout(function() {
                                w.removeClass("loading");
                            }, 10);
                        };
                        A.updateImgSrc(z);
                        w.prepend(A.image);
                    } else {
                        A.updateImgSrc(z);
                    } if (A.responsive) {
                        if (A.options.downgrade) {
                            A.updateRatio(w, B.ratio);
                        } else {
                            A.removeSmallerImages(z);
                        }
                    }
                }
            }, function() {
                if (!A.lazyLoaded) {
                    w.removeClass("loading");
                    w.addClass("no-image");
                    if (!A.responsive) {
                        A.lazyLoaded = true;
                    }
                }
            });
        },
        lazyLoad: function() {
            if (!this.lazyLoaded || this.responsive) {
                var w;
                if (this.element.css("display") === "none" || this.element.css("visibility") === "hidden") {
                    return;
                }
                if (!this.isContentSlider || (this.isContentSlider && this.element.closest(".current-tile").length > 0)) {
                    w = this.getImgToLoad(this.imgSrcsetArr, this.imgSrc, uitk.isResponsive);
                    this.embedImage(w, this.options.alt, this.options["class"], this.element);
                }
            }
        }
    };
    u.prototype = new i();
    u.prototype.constructor = u;

    function u(w, x) {
        var y;
        this.element = d(w);
        x = x || {};
        y = this.element.data() || {};
        this.options = d.extend(true, {}, s, y, x);
        this.options.lazy = true;
        this.init();
    }
    u.prototype.embedImage = function(B, y, x, w) {
        var A = this,
            z = B.url;
        if (z && this.currentImg === z) {
            return;
        }
        this.currentImg = z;
        this.preloadImg(z, function() {
            if (A.currentImg === z) {
                A.lazyLoaded = true;
                w.removeClass("no-image");
                A.updateImgSrc(z);
                w.removeClass("loading");
                if (A.responsive) {
                    if (A.options.downgrade) {
                        A.updateRatio(w, B.ratio);
                    } else {
                        A.removeSmallerImages(z);
                    }
                }
            }
        }, function() {
            if (!A.lazyLoaded) {
                w.removeClass("loading");
                w.addClass("no-image");
                if (!A.responsive) {
                    A.lazyLoaded = true;
                }
            }
        });
    };
    u.prototype.updateImgSrc = function(w) {
        this.element.css("background-image", "url(" + w + ")");
    };

    function o(w, x) {
        var y;
        this.element = d(w);
        x = x || {};
        y = this.element.data() || {};
        this.options = d.extend(true, {}, g, y, x);
        this.init();
    }
    o.prototype = {
        constructor: o,
        init: function() {
            if (!this.options.lazy) {
                this.embedVideo();
            } else {
                this.lazyLoaded = false;
                this.isContentSlider = this.element.closest('[data-control="content-slider"]').length > 0;
            }
        },
        embedVideo: function() {
            var y = this.options,
                x = y.mediaType,
                w = y.mediaOptions,
                B = y.mediaId,
                A = this.element,
                z;
            this.videoId = "M" + j + "_" + x + B;
            j++;
            A.append('<div allowTransparency="true" id="' + this.videoId + '"></div>');
            z = uitk.embedVideo(x, B, w, this.videoId, function() {
                z.done(function(C) {
                    A.removeClass("loading").data("video", uitk.createVideoObject(x, C));
                });
            });
            this.videoPlayer = z;
        },
        lazyLoad: function() {
            if (!this.lazyLoaded) {
                if (this.element.css("display") === "none" || this.element.css("visibility") === "hidden") {
                    return;
                }
                if (!this.isContentSlider || (this.isContentSlider && this.element.closest(".current-tile").length > 0)) {
                    this.embedVideo();
                    this.lazyLoaded = true;
                }
            }
        }
    };
    d.fn[a] = function() {
        var y, z, w, x;
        if (typeof arguments[0] === "object") {
            y = arguments[0];
            z = arguments[1];
            w = arguments[2];
            x = arguments[3];
        } else {
            y = {};
            z = arguments[0];
            w = arguments[1];
            x = arguments[2];
        }
        return this.each(function() {
            var A = d(this);
            if (!d.data(this, a)) {
                if (A.data("mediaType") && A.data("mediaType") === "youtube") {
                    d.data(this, a, new o(this, y));
                } else {
                    if (A.data("mediaType") && A.data("mediaType") === "background") {
                        d.data(this, a, new u(this, y));
                    } else {
                        d.data(this, a, new i(this, y));
                    }
                }
            }
            if (typeof z === "string") {
                d.data(this, a)[z](w, x);
            }
        });
    };
    d("[data-control=media]")[a]();
    uitk.subscribe("contentSlider.pageChange", function(y, A, z, w) {
        var x = "transitionEnd oTransitionEnd msTransitionEnd transitionend webkitTransitionEnd";
        A.off(x);
        if (q && !w) {
            A.on(x, function() {
                c();
                A.off(x);
            });
        } else {
            setTimeout(function() {
                c();
            }, 50);
        }
    });
    c = function() {
        var y = d('figure[data-lazy="true"], .background[data-media-type="background"]'),
            x = l.scrollTop(),
            w = x + l.height();
        y.each(function() {
            var A = d(this),
                C = uitk.media.lazyBuffer || 0,
                D = A.offset(),
                z = D.top,
                B = z + A.outerHeight();
            if (((z - C) < w) && ((B + C) > x)) {
                A[a]("lazyLoad");
            }
        });
    };
    b = function() {
        c();
        n();
    };
    n = function() {};
    if (uitk.hasTouch) {
        n = function() {
            clearTimeout(m);
            r = false;
        };
        d("body").one("touchstart", function() {
            n();
        });
        p = function() {
            m = setTimeout(function() {
                if (l.scrollTop() !== v) {
                    c();
                    return;
                }
                if (k < h) {
                    k = k + 1;
                    p();
                }
            }, 500);
        };
        if (r) {
            p();
        }
    }
    uitk.subscribe("debounced.scroll", b);
    uitk.subscribe("debounced.resize", b);
    uitk.subscribe("debounced.bodyResize", b);
    c();
    uitk.modules.MediaImage = i;
    uitk.modules.MediaBgImage = u;
}(jQuery, window));
(function(g, j, b) {
    var i = "uitk_contentSlider",
        f = g("body"),
        d = {
            infinite: false,
            controlTemplate: "#uitk-content-slider-controls-template",
            scrollTime: "0.5s"
        }, e = "current",
        h = Modernizr.touch,
        k = uitk.clickEvent,
        c = uitk.isTouchDevice;

    function a(l, m) {
        var n;
        this.element = g(l);
        m = m || {};
        n = this.element.data() || {};
        this.options = g.extend(true, {}, d, n, m);
        this.init();
    }
    a.prototype = {
        constructor: a,
        init: function() {
            var m = this.element,
                l = this;
            this.tileGrid = m.find("[class^='tile-grid']");
            this.contentMask = m.find(".content-slider-mask");
            this.numVisibleTiles = this.getNumVisibleTiles();
            this.uniqueId = this.options.modalId || uitk.createUniqueId();
            m.attr("data-unique-id", l.uniqueId);
            this.moveToPage(1, true);
            this.updateControls(true);
            if (Modernizr.mediaqueries) {
                g(j).on("resize.event" + l.uniqueId, function() {
                    l.handleResize();
                });
                g(j).on("orientationchange.event" + l.uniqueId, function() {
                    l.handleResize();
                });
            }
            if (h) {
                var n = null;
                this.contentMask.swipe({
                    swipeStatus: function(p, o, r, s, q) {
                        if (r !== "left" && r !== "right") {
                            return;
                        }
                        if (!n) {
                            n = g(p.target).closest('[data-control="content-slider"]');
                        }
                        if (o === "move") {
                            if (r === "left") {
                                n[i]("slideMove", s);
                            } else {
                                n[i]("slideMove", -s);
                            }
                        } else {
                            if (o === "end") {
                                n[i]("slideEnd", r, s);
                            } else {
                                if (o === "cancel") {
                                    n[i]("slideCancel");
                                }
                            }
                        }
                    },
                    threshold: 10,
                    allowPageScroll: "vertical",
                    excludedElements: ""
                });
            }
            if (!c) {
                this.deboucedResize = uitk.subscribe("debounced.resize", function() {
                    l.positionPage(l.currentPage);
                });
            }
        },
        addControls: function(l, o) {
            var u = {}, q = this.getCurrentPage(),
                n = this.getNumOfPages(),
                m = [],
                r = {}, p, s;
            this.updateCurrentClasses(l);
            if (n <= 1) {
                return;
            }
            if (!this.controlTemplate) {
                a.prototype.controlTemplate = uitk.getCompiledTemplate(this.options.controlTemplate);
            }
            for (p = 1; p <= n; p = p + 1) {
                r = {};
                if (p === q) {
                    r.isCurrent = true;
                    if (p === 1 && !this.options.infinite) {
                        u.prevIsDisabled = true;
                    }
                    if (p === n && !this.options.infinite) {
                        u.nextIsDisabled = true;
                    }
                }
                r.pageNum = p;
                m.push(r);
            }
            u.pages = m;
            s = this.controlTemplate(u);
            if (o) {
                this.element.find(".content-slider-controls").remove();
            }
            this.element.append(s);
        },
        updateControls: function(l) {
            this.addControls(l, true);
        },
        updateCurrentClasses: function(l) {
            var n = "current-tile",
                o = this.getCurrentPage(),
                p = this.getNumVisibleTiles(),
                m = this.tileGrid.find(".tile");
            l = l || false;
            m.removeClass(n).slice(p * (o - 1), p * o).addClass(n);
            uitk.publish("contentSlider.pageChange", this.element, o, l);
        },
        unregister: function() {
            g(j).off(".event" + this.uniqueId);
            if (this.deboucedResize) {
                uitk.unsubscribe("debounced.resize", this.deboucedResize);
            }
        },
        getPagePosition: (function() {
            var l;
            if (c) {
                l = function(n, m) {
                    var o = ((n - 1) * -100) + "%";
                    return o;
                };
            } else {
                l = function(o, n) {
                    var m, p;
                    m = this.contentMask.width();
                    p = ((o - 1) * -m) + "px";
                    return p;
                };
            }
            return l;
        })(),
        positionPage: function(m, l) {
            var n = this.getPagePosition(m),
                o = l ? "0s" : this.options.scrollTime;
            this.tileGrid.css({
                "-webkit-transition-duration": o,
                "-moz-transition-duration": o,
                "transition-duration": o
            });
            this.tileGrid.css({
                left: n
            });
        },
        moveToPage: function(m, l) {
            if (m > 0 && m <= this.getNumOfPages()) {
                this.positionPage(m, l);
                this.setCurrentPage(m);
                this.updateControls();
            }
        },
        next: function() {
            var m = this.getCurrentPage(),
                l = m + 1;
            if (l > this.getNumOfPages()) {
                if (this.options.infinite === true) {
                    this.moveToPage(1);
                } else {
                    this.moveToPage(m);
                }
            } else {
                this.moveToPage(l);
            }
        },
        prev: function() {
            var m = this.getCurrentPage(),
                l = m - 1;
            if (l < 1) {
                if (this.options.infinite === true) {
                    this.moveToPage(this.getNumOfPages());
                } else {
                    this.moveToPage(m);
                }
            } else {
                this.moveToPage(l);
            }
        },
        selectPage: function(m) {
            var l = this.element.find(".content-slider-nav button").index(m) + 1;
            this.moveToPage(l);
        },
        setCurrentPage: function(l) {
            this.currentPage = l;
            this.element.attr("data-current-page", l);
        },
        getCurrentPage: function() {
            return this.currentPage;
        },
        getNumVisibleTiles: function() {
            var l = this.contentMask,
                m = l.find(".tile"),
                o = l.width(),
                p = m.first().outerWidth(),
                n = Math.round(o / p);
            return n;
        },
        getNumOfPages: function() {
            var n = this,
                o = this.tileGrid,
                m = o.find(".tile"),
                l = m.length,
                p = Math.ceil(l / n.numVisibleTiles);
            return p;
        },
        handleViewChange: function(q) {
            if (this.uniqueId !== this.element.attr("data-unique-id") || g('[data-unique-id="' + this.uniqueId + '"]').length === 0) {
                this.unregister();
                return;
            }
            var n, s, p = this.numVisibleTiles,
                r, m, l, o = this;
            this.tileGrid.addClass("view-change");
            this.numVisibleTiles = q;
            n = this.getCurrentPage();
            s = this.getNumOfPages();
            r = p * (n - 1) + 1;
            m = p * n;
            if (p < q) {
                l = Math.ceil(m / q);
            } else {
                if (p > q) {
                    l = Math.ceil(r / q);
                } else {
                    l = n;
                }
            }
            l = l > s ? s : l;
            this.updateControls(true);
            if (n !== l) {
                setTimeout(function() {
                    o.moveToPage(l, true);
                }, 10);
            }
            setTimeout(function() {
                o.tileGrid.removeClass("view-change");
            }, 50);
        },
        handleResize: function() {
            var l = this.getNumVisibleTiles();
            if (this.numVisibleTiles !== l) {
                this.handleViewChange(l);
            }
        },
        slideMove: function(n) {
            var m = this.contentMask.width(),
                l;
            l = (((this.currentPage - 1) * m + n) / m) * -100;
            this.scrollPages(l);
        },
        slideCancel: function() {
            this.moveToPage(this.currentPage);
        },
        slideEnd: function(m, n) {
            var l = n / this.contentMask.width();
            if (l > 0.08) {
                if (m === "left") {
                    this.next();
                } else {
                    this.prev();
                }
            } else {
                this.moveToPage(this.currentPage);
            }
        },
        scrollPages: function(l) {
            this.tileGrid.css("-webkit-transition-duration", "0s");
            this.tileGrid.css("left", l + "%");
        }
    };
    g.fn[i] = function() {
        var n, o, l, m;
        if (typeof arguments[0] === "object") {
            n = arguments[0];
            o = arguments[1];
            l = arguments[2];
            m = arguments[3];
        } else {
            n = {};
            o = arguments[0];
            l = arguments[1];
            m = arguments[2];
        }
        return this.each(function() {
            if (g(this).width() > 0) {
                if (!g.data(this, i)) {
                    g.data(this, i, new a(this, n));
                }
                if (typeof o === "string") {
                    g.data(this, i)[o](l, m);
                }
            }
        });
    };
    g("[data-control=content-slider]")[i]();
    f.on(k + "." + i, '[data-control="content-slider"] .content-slider-controls button', function(n) {
        var l = g(n.target),
            m = l.closest(".content-slider-controls button"),
            o = l.closest('[data-control="content-slider"]');
        n.preventDefault();
        if (m.hasClass("next")) {
            o[i]("next");
        } else {
            if (m.hasClass("prev")) {
                o[i]("prev");
            } else {
                if (m.closest(".content-slider-nav").length > 0) {
                    o[i]("selectPage", m);
                }
            }
        }
    });
    if (c) {
        f.on("click." + i, '[data-control="content-slider"] .content-slider-controls button', function(l) {
            l.preventDefault();
        });
    }
}(jQuery, window));
(function(f, j, b) {
    var i = "uitk_calendar",
        l = "uitk_tooltip",
        d = f("body"),
        c = {
            tooltip: true,
            template: "#uitk-calendar-template",
            minBookingLength: null
        }, e = {}, h = Modernizr.touch,
        k = Modernizr.win8touch,
        m = uitk.clickEvent + "." + i,
        g, n = new Date();
    n.setHours(0, 0, 0, 0);

    function a(p, q) {
        var s, r, o;
        this.element = f(p);
        q = q || {};
        s = this.element.data() || {};
        if (q.jsTheme) {
            r = q.jsTheme;
        } else {
            if (this.element.data("jsTheme")) {
                r = this.element.data("jsTheme");
            } else {
                r = q.trigger || s.trigger || c.trigger;
                s.jsTheme = r;
            }
        }
        o = e[r] || {};
        this.options = f.extend(true, {}, c, o, s, q);
        this.init();
    }
    a.prototype = {
        constructor: a,
        monthCache: {},
        dateUpdaters: {},
        calendarObj: false,
        calendarConfig: false,
        daysHeader: false,
        init: function() {
            var p = this;
            this.dateError = {};
            if (!this.calendarObj) {
                a.prototype.calendarObj = uitk.calendarObj;
                a.prototype.calendarConfig = uitk.calendarObj.config;
            }
            this.startDay = uitk.calendarObj.getStartOfWeek();
            if (!this.calTemplate) {
                a.prototype.calTemplate = uitk.getCompiledTemplate(this.options.template);
            }
            if (!this.daysHeader) {
                a.prototype.daysHeader = this.getDaysHtml();
            }
            if (this.options.startDate || this.options.endDate) {
                if (this.options.startDate) {
                    this.startDateSelector = this.options.startDate;
                    this.startDateField = this.calendarPair = f(this.startDateSelector);
                } else {
                    this.startDateSelector = "#" + this.element.attr("id");
                    this.startDateField = this.element;
                    this.dateType = "start";
                } if (this.options.endDate) {
                    this.endDateSelector = this.options.endDate;
                    this.endDateField = this.calendarPair = f(this.endDateSelector);
                } else {
                    this.endDateSelector = "#" + this.element.attr("id");
                    this.endDateField = this.element;
                    this.dateType = "end";
                }
                this.options.defaultBookingLength = this.startDateField.data("default-booking-length");
                this.options.maxBookingLength = this.startDateField.data("max-booking-length");
                if (!this.options.lastValidDate) {
                    this.options.lastValidDate = this.startDateField.data("last-valid-date");
                }
                this.registerFields();
            } else {
                this.calendarPair = false;
                this.startDateField = this.element;
                this.dateType = "start";
            } if (this.options.firstValidDate) {
                this.options.firstValidDate = this.calendarObj.getDateFromString(this.options.firstValidDate);
            } else {
                this.options.firstValidDate = n;
            }
            this.options.lastValidDate = this.calendarObj.getDateFromString(this.options.lastValidDate);
            if (this.options.tooltip) {
                var o;
                o = uitk.subscribe("tooltip.hidden", function(q, r) {
                    p.tooltipClosed(r);
                });
            }
        },
        registerFields: function() {
            if (this.startDateSelector && this.endDateSelector) {
                var o = this.startDateSelector + "_" + this.endDateSelector;
                if (!(o in this.dateUpdaters)) {
                    this.dateUpdaters[o] = uitk.dateUpdater.register(this.startDateField[0], this.endDateField[0], this.options.minBookingLength, null, null, this.options.defaultBookingLength);
                }
            }
        },
        getDaysHtml: function(u, s) {
            var r = "",
                q, o, p;
            u = u || this.calendarConfig.getDayAbbrs();
            s = s || this.startDay;
            q = u.length;
            for (p = 0; p < q; p = p + 1) {
                o = p + s;
                if (o >= q) {
                    o = o - q;
                }
                r += "<li>" + u[o] + "</li>";
            }
            return r;
        },
        getNextMonth: function(q, p) {
            var o, r;
            if (q === this.calendarConfig.getMonths().length - 1) {
                o = 0;
                r = p + 1;
            } else {
                o = q + 1;
                r = p;
            }
            return {
                month: o,
                year: r
            };
        },
        getPrevMonth: function(r, q) {
            var p, o;
            if (r === 0) {
                p = this.calendarConfig.getMonths().length - 1;
                o = q - 1;
            } else {
                p = r - 1;
                o = q;
            }
            return {
                month: p,
                year: o
            };
        },
        getFirstDayOffset: function(p, q) {
            var o;
            q = q || this.startDay;
            o = p - q;
            if (o < 0) {
                o = 7 + o;
            }
            return o;
        },
        getMonthHtml: function(u, r) {
            var w = "",
                q, s, v, p, o;
            v = u + "-" + r;
            if (v in this.monthCache) {
                return this.monthCache[v];
            }
            s = this.calendarObj.getMonthCount(u, r);
            p = new Date(r, u, 1).getDay();
            o = this.getFirstDayOffset(p);
            for (q = 1; q <= s; q = q + 1) {
                if (q === 1 && o > 0) {
                    w += '<li class="date-offset-' + o + '"><a href="#" data-year="' + r + '" data-month="' + u + '" data-day="' + q + '">' + q + "</a></li>";
                } else {
                    w += '<li><a href="#" data-year="' + r + '" data-month="' + u + '" data-day="' + q + '">' + q + "</a></li>";
                }
            }
            this.monthCache[v] = w;
            return w;
        },
        getCalHtml: function(s, u) {
            var r = "",
                q, w, v, x, p = false,
                o;
            this.firstMonth = s;
            this.firstYear = u;
            q = this.getNextMonth(s, u);
            w = q.month;
            v = q.year;
            if (s > n.getMonth() || u > n.getFullYear()) {
                p = true;
            }
            x = {
                prevButton: p,
                calDays: this.daysHeader,
                month1: this.calendarConfig.getMonths()[s],
                year1: u,
                calDates1: this.getMonthHtml(s, u),
                month2: this.calendarConfig.getMonths()[w],
                year2: v,
                calDates2: this.getMonthHtml(w, v)
            };
            r = this.calTemplate(x);
            this.currentCal = f(r).data("calendar", this.element);
            this.currentMonth = s;
            this.currentYear = u;
            this.highlight(this.currentCal);
            if (!this.startDate || this.dateType === "start") {
                this.disableDatesBefore(this.currentCal, this.options.firstValidDate);
            } else {
                if (this.dateType === "end") {
                    this.disableDatesBefore(this.currentCal, this.startDate);
                    if (this.options.maxBookingLength) {
                        o = new Date(this.startDate.getTime() + (24 * 60 * 60 * 1000 * parseInt(this.options.maxBookingLength, 10)));
                        this.disableDatesAfter(this.currentCal, o);
                    }
                }
            } if (this.options.lastValidDate) {
                this.disableDatesAfter(this.currentCal, this.options.lastValidDate);
            }
            return this.currentCal;
        },
        nextMonth: function() {
            var p, o, q;
            p = this.getNextMonth(this.currentMonth, this.currentYear);
            o = p.month;
            q = p.year;
            this.calContainer.html(this.getCalHtml(o, q).html());
        },
        prevMonth: function() {
            var q, p, o;
            q = this.getPrevMonth(this.currentMonth, this.currentYear);
            p = q.month;
            o = q.year;
            this.calContainer.html(this.getCalHtml(p, o).html());
        },
        getDateFromField: function(q, p) {
            var r, o;
            o = q[i]("getDateError");
            if (o && o.flagged) {
                if (o.replacementDate && (o.highlight || p)) {
                    r = this.calendarObj.getDateFromString(o.replacementDate);
                } else {
                    r = false;
                }
            } else {
                r = this.calendarObj.getDateFromString(q.val());
            }
            return r;
        },
        getStartDate: function(o) {
            o = o || this.getDateFromField(this.startDateField);
            if (!o || o.valueOf() < n.valueOf()) {
                this.startDate = null;
                o = n;
            } else {
                this.startDate = o;
            }
            return o;
        },
        getInitialCal: function() {
            if (this.state !== "open") {
                var q = n.getMonth(),
                    w = n.getFullYear(),
                    r, x, A, z = this;
                this.state = "open";
                r = this.getStartDate();
                if (this.endDateField) {
                    x = this.getDateFromField(this.endDateField);
                    this.setThisEndDate(r, x);
                }
                if (this.startDate || this.endDate) {
                    if (this.dateType === "end") {
                        A = this.getDateFromField(this.endDateField, true) || x;
                    } else {
                        A = this.getDateFromField(this.startDateField, true) || r;
                    } if ((this.lastDisplayedMonth || this.lastDisplayedMonth === 0) && this.lastDisplayedYear) {
                        q = this.lastDisplayedMonth;
                        w = this.lastDisplayedYear;
                    }
                    if (A && (!this.dateError.flagged || (this.dateError.flagged && this.dateError.replacementDate))) {
                        var v = this.dateType,
                            o = A.getMonth(),
                            s = A.getFullYear(),
                            B = this.getNextMonth(q, w),
                            p = B.month,
                            y = B.year,
                            u;
                        if (!(o >= q && s >= w && o <= p && s <= y)) {
                            if (v === "start") {
                                q = o;
                                w = s;
                            } else {
                                if (v === "end") {
                                    u = this.getPrevMonth(o, s);
                                    q = u.month;
                                    w = u.year;
                                }
                            }
                        }
                    }
                }
                this.setLastDisplayed({
                    month: q,
                    year: w
                });
                this.getCalHtml(q, w);
                return this.currentCal;
            }
        },
        getDateLink: function(p, o) {
            return p.find("a[data-day=" + o.getDate() + "][data-month=" + o.getMonth() + "][data-year=" + o.getFullYear() + "]");
        },
        highlight: function(p) {
            var q = this.highlightStart(p),
                o = this.highlightEnd(p);
            this.highlightRange(p, q, o);
        },
        highlightStart: function(p) {
            var o = this.getDateFromField(this.startDateField);
            if (o) {
                return this.getDateLink(p, o).addClass("start");
            }
        },
        highlightEnd: function(p) {
            if (this.endDateField) {
                var o = this.getDateFromField(this.endDateField);
                if (o) {
                    return this.getDateLink(p, o).addClass("end");
                }
            }
        },
        highlightRange: function(o, r, u) {
            var p = o.find(".cal-dates a"),
                C = p.index(r) + 1,
                x = p.index(u),
                s = this.startDate,
                w, y = this.endDate,
                v, B = this.currentMonth,
                z = this.currentYear,
                A, q;
            p.removeClass("highlight");
            if (C > x) {
                p.filter(".end").removeClass("end");
            }
            if (r && C > 0) {
                A = 0;
            } else {
                if (s) {
                    w = s.getFullYear();
                    if ((s.getMonth() < B && w === z) || w < z) {
                        A = -1;
                    } else {
                        A = 1;
                    }
                } else {
                    return;
                }
            } if (u && x >= 0) {
                q = 0;
            } else {
                if (y) {
                    v = y.getFullYear();
                    if ((y.getMonth() < B && v === z) || v < z) {
                        q = -1;
                    } else {
                        q = 1;
                    }
                } else {
                    return;
                }
            } if ((A < 0 && q < 0) || (A > 0 && q > 0)) {
                return;
            }
            if (A < 0) {
                C = 0;
            } else {
                if (A > 0) {
                    return;
                }
            } if (q > 0) {
                x = p.length;
            } else {
                if (q < 0) {
                    return;
                }
            }
            p.slice(C, x).addClass("highlight");
        },
        tooltipClosed: function(o) {
            if (o[0] === this.element[0]) {
                o.closest("label").removeClass("focused");
                this.state = "closed";
            }
        },
        disableDatesBefore: function(s, q) {
            var p = s.find(".cal-dates a"),
                r = this.getDateLink(s, q),
                o;
            if (r.length > 0) {
                o = p.index(r);
                if (o > 0) {
                    p.slice(0, o).addClass("disabled");
                    s.find("button.prev").remove();
                }
            }
        },
        disableDatesAfter: function(p, r) {
            var q = p.find(".cal-dates a"),
                s = q.length,
                v = this.getDateLink(p, r),
                y, o, x, w, u;
            if (v.length > 0) {
                y = q.index(v);
                if (y + 1 < s) {
                    q.slice(y + 1).addClass("disabled");
                    p.find("button.next").remove();
                }
            } else {
                o = q.first();
                x = o.data("year");
                w = o.data("month");
                u = r.getFullYear();
                if (x > u) {
                    q.addClass("disabled");
                    p.find("button.next").remove();
                } else {
                    if ((w > r.getMonth()) && (x === u)) {
                        q.addClass("disabled");
                        p.find("button.next").remove();
                    }
                }
            }
        },
        selectDate: function(o) {
            var p = new Date(o.data("year"), o.data("month"), o.data("day")),
                q = this;
            setTimeout(function() {
                uitk.updatePlaceholderClass(q.startDateField);
                if (q.endDateField) {
                    uitk.updatePlaceholderClass(q.endDateField);
                }
            }, 50);
            this.setLastDisplayed();
            this.clearDateError();
            q.element.data("showCal", false);
            q.element.val(this.calendarObj.toStringFromComp(p.getDate(), p.getMonth() + 1, p.getFullYear()));
            uitk.publish("calendar.selectDate", {
                element: q.element,
                date: p
            });
            q.element.focus();
        },
        mouseenterDate: function(o) {
            if (this.dateType === "start") {
                this.calContainer.find("a.start").removeClass("start");
                this.highlightRange(this.calContainer, o, this.highlightEnd(this.calContainer));
            } else {
                if (this.dateType === "end") {
                    this.calContainer.find("a.end").removeClass("end");
                    this.highlightRange(this.calContainer, this.highlightStart(this.calContainer), o);
                }
            }
        },
        mouseleaveDate: function(o) {
            this.highlightRange(this.calContainer, this.highlightStart(this.calContainer), this.highlightEnd(this.calContainer));
        },
        setContainer: function(o) {
            this.calContainer = o;
        },
        setLastDisplayed: function(o, q) {
            var r = o && (o.month || o.month === 0) ? o.month : this.firstMonth,
                p = o && o.year ? o.year : this.firstYear;
            if (!q && q !== false && this.calendarPair) {
                q = true;
            } else {
                q = false;
            } if (q) {
                this.calendarPair[i]("setLastDisplayed", {
                    month: r,
                    year: p
                }, false);
            }
            this.lastDisplayedMonth = r;
            this.lastDisplayedYear = p;
        },
        setThisEndDate: function(o, p) {
            if (!p || p.valueOf() < o.valueOf()) {
                this.endDate = null;
            } else {
                this.endDate = p;
            }
        },
        updateOptions: function(s, p) {
            var o, q = {}, r = false;
            if (!p && p !== false && this.calendarPair) {
                p = true;
            } else {
                p = false;
            }
            for (o in s) {
                if (s.hasOwnProperty(o)) {
                    switch (o) {
                        case "firstValidDate":
                        case "lastValidDate":
                            this.options[o] = this.calendarObj.getDateFromString(s[o]);
                            break;
                        case "maxBookingLength":
                            this.options[o] = s[o];
                            q[o] = s[o];
                            break;
                        default:
                            this.options[o] = s[o];
                    }
                }
            }
            if (p === true) {
                for (o in q) {
                    if (q.hasOwnProperty(o)) {
                        r = true;
                        break;
                    }
                }
                if (r) {
                    if (this.options.startDate) {
                        this.startDateField[i]("updateOptions", q, false);
                    } else {
                        if (this.options.endDate) {
                            this.endDateField[i]("updateOptions", q, false);
                        }
                    }
                }
            }
        },
        flagDateError: function(p, o) {
            if (!o && o !== false) {
                o = true;
            } else {
                o = false;
            }
            this.dateError = {
                flagged: true,
                replacementDate: p || false,
                highlight: o
            };
        },
        clearDateError: function() {
            this.dateError = {
                flagged: false,
                replacementDate: false,
                highlight: false
            };
        },
        getDateError: function() {
            return this.dateError;
        }
    };
    f.fn[i] = function() {
        var q, s, o, p, r;
        if (typeof arguments[0] === "object") {
            q = arguments[0];
            s = arguments[1];
            o = arguments[2];
            p = arguments[3];
        } else {
            q = {};
            s = arguments[0];
            o = arguments[1];
            p = arguments[2];
        }
        this.each(function() {
            if (!f.data(this, i)) {
                f.data(this, i, new a(this, q));
            }
            if (typeof s === "string") {
                r = f.data(this, i)[s](o, p);
            }
        });
        return r;
    };
    g = function(o) {
        var q;
        try {
            if (!uitk.calendarObj) {
                throw "ERROR: The calendar control needs to be configured, please see the UI Toolkit v2 documentation for more details";
            }
        } catch (p) {
            console.log(p);
            return;
        }
        q = o[i]("getInitialCal");
        o[l]({
            jsTheme: "calendar"
        });
        o[l]("updateContent", q);
        o[l]("show");
        o[l]("checkPos", true, true);
        o[i]("setContainer", o.data(l).tooltip.find(".cal"));
        o.closest("label").addClass("focused");
        setTimeout(function() {
            o.data("showCal", true);
        }, 100);
    };
    d.on("focus." + i + " " + m, '[data-control="calendar"]', function(p) {
        var o = f(p.target).closest('[data-control="calendar"]');
        if (o.data("showCal") !== false) {
            o.data("showCal", false);
            g(o);
        } else {
            o.data("showCal", true);
        }
    });
    d.on(m, ".cal .next", {
        stopPropagation: true
    }, function(q) {
        var o = f(q.target),
            p = o.closest(".cal").data("calendar");
        q.preventDefault();
        q.stopPropagation();
        p[i]("nextMonth");
    });
    d.on(m, ".cal .prev", {
        stopPropagation: true
    }, function(q) {
        var o = f(q.target),
            p = o.closest(".cal").data("calendar");
        q.preventDefault();
        q.stopPropagation();
        p[i]("prevMonth");
    });
    d.on(m, ".cal-dates a", function(q) {
        var o = f(q.target),
            p = o.closest(".cal").data("calendar");
        q.preventDefault();
        if (!o.hasClass("disabled")) {
            p[i]("selectDate", o);
            p[l]("hide");
        }
    });
    d.on("mouseenter." + i, ".cal-dates a", function(q) {
        var o = f(q.target),
            p = o.closest(".cal").data("calendar");
        q.preventDefault();
        if (!o.hasClass("disabled")) {
            p[i]("mouseenterDate", o);
        }
    });
    d.on("mouseleave." + i, ".cal-dates a", function(q) {
        var o = f(q.target),
            p = o.closest(".cal").data("calendar");
        q.preventDefault();
        if (!o.hasClass("disabled")) {
            p[i]("mouseleaveDate", o);
        }
    });
    if (h || k) {
        f('[data-control="calendar"]').attr("readonly", "readonly");
    }
    uitk.modules.Calendar = a;
}(jQuery, window));
(function(f, i, g) {
    var a = "uitk_modal",
        k = f("body"),
        n = f(document),
        j = {
            title: false,
            background: true,
            optOut: false,
            ajax: false,
            footer: false,
            dismiss: true,
            template: "#uitk-modal-template"
        }, m = {}, q = "active",
        o = "resizing",
        r = "modal-wrap",
        b = "modal-background",
        c = "modal-close",
        l = "#uitk-modal-bg-template",
        p = Modernizr.sessionstorage,
        e = uitk.clickEvent + "." + a;
    var h = function(s) {
        var u = f("." + r + "." + q);
        u.each(function() {
            f(this).data("modal").close(s);
        });
    };

    function d(u, v) {
        var x, w, s;
        this.element = f(u);
        v = v || {};
        x = this.element.data() || {};
        if (v.jsTheme) {
            w = v.jsTheme;
        } else {
            if (this.element.data("jsTheme")) {
                w = this.element.data("jsTheme");
            }
        }
        s = m[w] || {};
        this.options = f.extend(true, {}, j, s, x, v);
        this.options.optOutStorage = this.options.optOut && p;
        this.init();
    }
    d.prototype = {
        constructor: d,
        init: function() {
            var v, u = this,
                s = this.options;
            if (s.optOutStorage) {
                this.storageKey = "modal-opt-out-" + s.modalId;
                if (sessionStorage.getItem(this.storageKey) === "true") {
                    return false;
                }
            }
            this.getContent();
            if (!this.modalTemplate) {
                d.prototype.modalTemplate = uitk.getCompiledTemplate(this.options.template);
                d.prototype.modalTitleTemplate = uitk.getCompiledTemplate("uitk-modal-title-template");
                d.prototype.modalBgTemplate = uitk.getCompiledTemplate(l);
            }
            this.modalBgHtml = f(this.modalBgTemplate({
                dismiss: s.dismiss
            }));
            this.modalBgHtml.data("modal", this);
            u.getHtml();
        },
        isHtml: function(s) {
            return s.indexOf(">") !== -1;
        },
        getContentFromJquery: function(s) {
            return f("<div></div>").append(s).html();
        },
        getContent: function() {
            var v = this.options.content,
                w = false,
                u = false,
                s = this;
            if (!v) {
                v = this.element.attr("href");
                w = true;
            }
            if (this.options.ajax) {
                s.contentRequest = f.get(v, function(x) {
                    s.updateContent(x);
                });
            } else {
                if (typeof v === "string") {
                    u = s.isHtml(v);
                    if (u) {
                        this.content = v;
                    } else {
                        if (!w) {
                            v = "#" + v;
                        }
                        this.content = f(v).html();
                    }
                } else {
                    if (v instanceof jQuery) {
                        this.content = s.getContentFromJquery(v);
                    } else {
                        this.content = "";
                    }
                }
            }
        },
        updateTitle: function(v) {
            var u = this,
                s = u.modalHtml.find(".modal-title");
            if (!v) {
                u.modalHtml.find(".modal-header").remove();
                this.options.title = false;
            } else {
                if (s.length > 0) {
                    s.html(v);
                } else {
                    this.modalHtml.find(".modal-inner").prepend(f(this.modalTitleTemplate({
                        title: v,
                        id: this.options.id
                    })));
                }
                this.options.title = v;
            }
            return this;
        },
        updateContent: function(u, v) {
            var s = this;
            if (typeof u === "string" && this.isHtml(u)) {
                s.content = u;
            } else {
                if (u instanceof jQuery) {
                    this.content = s.getContentFromJquery(u);
                } else {
                    this.content = "";
                    s.modalHtml.addClass("loading");
                }
            } if (s.modalHtml) {
                if (this.content !== "") {
                    s.modalHtml.removeClass("loading");
                }
                s.modalHtml.find(".modal-body").html(this.content);
                if (v !== g) {
                    s.updateTitle(v);
                }
                if (uitk && uitk.publish) {
                    uitk.publish("modal.appended", s);
                }
            }
            return this;
        },
        getModalData: function() {
            var u = {}, s = this.options;
            u.title = s.title;
            u.id = s.modalId;
            u.optOut = s.optOutStorage;
            u.optOutText = s.optOutText;
            u.theme = s.jsTheme;
            u.dismiss = s.dismiss && s.background;
            u.content = this.content || "";
            u.footer = s.footer || s.optOut;
            return u;
        },
        getHtml: function() {
            var s = this.getModalData();
            this.modalHtml = f(this.modalTemplate(s));
        },
        setModalFocus: function() {
            var w = this,
                x, v, u, y = -1,
                s;
            x = this.modalHtml.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(":visible:not([tabindex=-1])");
            s = x.length - 1;
            this.modalHtml.focus();
            if (x.length > 1) {
                n.on("keydown.focus", function(z) {
                    if (z.keyCode === 9) {
                        z.preventDefault();
                        if (z.shiftKey) {
                            y = w.setPrevFocus(y, s);
                        } else {
                            y = w.setNextFocus(y, s);
                        }
                        x.eq(y).focus();
                    }
                });
            }
        },
        setNextFocus: function(u, s) {
            if (u === s) {
                return 0;
            } else {
                return u + 1;
            }
        },
        setPrevFocus: function(u, s) {
            if (u <= 0) {
                return s;
            } else {
                return u - 1;
            }
        },
        removeModalFocus: function() {
            var s = this;
            n.off("keydown.focus");
            if (s.lastFocused && (k.has(s.lastFocused).length > 0)) {
                s.lastFocused.focus();
            }
        },
        appendHtml: function() {
            var s = this;
            this.modalHtml.data("modal", this);
            this.modalHtml.appendTo(k);
            uitk.refreshPlaceholders();
            if (this.content && uitk && uitk.publish) {
                uitk.publish("modal.appended", s);
            }
            setTimeout(function() {
                s.modalHtml.addClass(q);
                s.setModalFocus();
            }, 100);
        },
        open: function() {
            var s = this;
            this.lastFocused = this.element;
            if (this.options.optOutStorage) {
                if (sessionStorage.getItem(this.storageKey) === "true") {
                    return false;
                }
            }
            if (this.options.background) {
                this.modalBgHtml.appendTo(k);
                setTimeout(function() {
                    s.modalBgHtml.addClass("active");
                }, 10);
            }
            s.appendHtml();
            return this;
        },
        close: function(w) {
            var x = this,
                u, v, s = this.options;
            if ((w === "background" && !s.background) || (w === "background" && !s.dismiss) || (w === "esc" && !s.dismiss)) {
                return false;
            }
            this.removeModalFocus();
            if (this.options.optOutStorage) {
                u = this.modalHtml.find("input[name=" + this.options.modalId + "-opt-out]");
                if (u && u.attr("checked")) {
                    v = "true";
                } else {
                    v = "false";
                }
                sessionStorage.setItem(this.storageKey, v);
            }
            this.modalHtml.removeClass(q + " " + o).css({
                top: ""
            });
            this.modalBgHtml.removeClass(q);
            if (uitk && uitk.publish) {
                uitk.publish("modal.close", x);
            }
            setTimeout(function() {
                x.modalHtml.remove();
                x.modalBgHtml.remove();
            }, 600);
            return this;
        }
    };
    f.fn[a] = function() {
        var u, v, s;
        if (typeof arguments[0] === "object") {
            u = arguments[0];
            v = arguments[1];
            s = arguments[2];
        } else {
            u = {};
            v = arguments[0];
            s = arguments[1];
        }
        return this.each(function() {
            if (!f.data(this, a)) {
                f.data(this, a, new d(this, u));
            }
            if (typeof v === "string") {
                f.data(this, a)[v](s);
            }
        });
    };
    k.on(e, '[data-control="modal"]', function(u) {
        var s = f(u.target).closest('[data-control="modal"]');
        u.preventDefault();
        s[a]("open");
    });
    k.on(e, "." + b, function(s) {
        s.preventDefault();
        h("background");
    });
    k.on(e, "." + r, function(s) {
        if (f(s.target).hasClass(r)) {
            s.preventDefault();
            h("background");
        }
    });
    k.on(e, "." + c, function(s) {
        s.preventDefault();
        h("close-button");
    });
    n.on("keydown", function(s) {
        if (s.keyCode === 27) {
            h("esc");
        }
    });
    f(i).on("orientationchange", function(u) {
        var s = document.activeElement,
            v = s.tagName;
        if ((v === "INPUT" || v === "TEXTAREA") && f(s).closest(".modal-inner").length > 0) {
            f(s).blur().focus();
        }
    });
    k.on("blur", ".modal-inner input", function() {
        k.css("height", "+=10000").css("height", "-=10000");
        setTimeout(function() {
            k.css("height", "");
        }, 0);
    });
    uitk.modal = {
        create: function(s) {
            var u = new d(null, s);
            u.open();
            return u;
        },
        close: h
    };
    uitk.modules.Modal = d;
}(jQuery, window));
(function(e, c, a, h) {
    var d = "uitk_dropDown",
        g = {}, b = "[data-control=menu]";

    function f(i, j) {
        var k;
        this.element = e(i);
        j = j || {};
        k = this.element.data() || {};
        this.options = e.extend(true, {}, g, k, j);
        this.init();
    }
    f.prototype = {
        constructor: f,
        init: function() {
            var j = this.element,
                i = this.element.attr("data-target");
            if (!i) {
                i = j.attr("href");
                i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "");
            }
            this.$parent = e(i);
            this.$parent.length || (this.$parent = j.parent());
        },
        open: function() {
            this.$parent.addClass("open");
        },
        close: function() {
            this.$parent.removeClass("open");
        },
        closeAll: function() {
            e(b).parent().removeClass("open");
        },
        toggle: function() {
            var i;
            if (this.element.is(".disabled, :disabled")) {
                return;
            }
            i = this.$parent.hasClass("open");
            this.closeAll();
            if (!i) {
                this.$parent.toggleClass("open");
                this.$parent.focus();
            }
            return false;
        }
    };
    e.fn[d] = function() {
        var k, l, i, j;
        if (typeof arguments[0] === "object") {
            k = arguments[0];
            l = arguments[1];
            i = arguments[2];
        } else {
            k = {};
            l = arguments[0];
            i = arguments[1];
        }
        return this.each(function() {
            if (!e.data(this, d)) {
                e.data(this, d, new f(this, k));
            }
            if (typeof l === "string") {
                e.data(this, d)[l](i, j);
            }
        });
    };
    e("html").on(a.clickEvent + ".dropdown.data-api", {
        preventDefault: false
    }, function(k) {
        var j = e(k.target).closest(".menu"),
            i = e(k.target).closest(b);
        if (j && j.length > 0 && j.hasClass("sticky")) {
            return;
        }
        if (j && j.length > 0) {
            if (j.hasClass("sticky")) {
                return;
            } else {
                setTimeout(function() {
                    f.prototype.closeAll();
                }, 500);
            }
        } else {
            if (i.length === 0) {
                f.prototype.closeAll();
            }
        }
    });
    e("body").on(a.clickEvent + ".dropdown", ".dropdown form", function(i) {
        i.stopPropagation();
    }).on(a.clickEvent + ".dropdown.data-api", b, function(j) {
        j.preventDefault();
        var i = e(j.target).closest(b);
        i[d]("toggle");
    }).on(a.clickEvent, ".menu .close", function(j) {
        j.preventDefault();
        var i = e(j.target).closest(".menu").prev(b);
        i[d]("close");
    });
}(jQuery, window, window.uitk));
uitk.initSocial = function() {
    var a = $(".socialize"),
        b;
    if (a.length > 0) {
        b = $LAB.sandbox();
        dctk.trackActionModified = function(e, g, d, h, f, c) {
            dctk.omtr.trackExternalLinks = false;
            dctk.omtr.linkTrackVars = e;
            dctk.omtr.linkTrackEvents = g;
            dctk.omtr.prop16 = d;
            dctk.omtr.eVar28 = h;
            dctk.omtr.events = f;
            dctk.omtr.tl(true, c, "Social:Share Success");
        };
        window.twttr = (t = {
            _e: [],
            ready: function(c) {
                t._e.push(c);
            }
        });
        b.queueScript("//connect.facebook.net/en_US/all.js#xfbml=1&appId=131538103586818").queueScript("//platform.twitter.com/widgets.js").queueScript("//apis.google.com/js/plusone.js").queueScript("//assets.pinterest.com/js/pinit.js").queueWait(function() {
            a.css("visibility", "visible");
        }).runQueue();
        window.fbAsyncInit = function() {
            FB.Event.subscribe("edge.create", function(c, d) {
                dctk.trackActionModified("products,prop11,prop12,prop16,eVar18,eVar28,eVar37,eVar55,eVar56,events", "event48", "Social.Facebook.Like", "Social.Facebook.Like", "event48", "o");
            });
            FB.Event.subscribe("message.send", function(c) {
                dctk.trackActionModified("products,prop11,prop12,prop16,eVar18,eVar28,eVar37,eVar55,eVar56,events", "event48", "Social.Facebook.Send", "Social.Facebook.Send", "event48", "o");
            });
        };
        window.gplusCallback = function() {
            dctk.trackActionModified("products,prop11,prop12,prop16,eVar18,eVar28,eVar37,eVar55,eVar56,events", "event48", "Social.GPlus.Share", "Social.GPlus.Share", "event48", "o");
        };
        twttr.ready(function(c) {
            c.events.bind("tweet", function(d) {
                dctk.trackActionModified("products,prop11,prop12,prop16,eVar18,eVar28,eVar37,eVar55,eVar56,events", "event48", "Social.Twitter.Share", "Social.Twitter.Share", "event48", "o");
            });
        });
        $(".share-pinterest").on("click", function() {
            dctk.trackActionModified("products,prop11,prop12,prop16,eVar18,eVar28,eVar37,eVar55,eVar56,events", "event48", "Social.Pinterest.Share", "Social.Pinterest.Share", "event48", "e");
        });
        $(".share-email").on("click", function() {
            dctk.trackActionModified("products,prop11,prop12,prop16,eVar18,eVar28,eVar37,eVar55,eVar56,events", "event48", "Social.Email.Share", "Social.Email.Share", "event48", "e");
        });
    }
};
(function(d, a, f) {
    uitk.map = {};
    var e, c, b;
    uitk.map.loadApi = function() {
        b = uitk.map.config || {};
        e = "//maps.googleapis.com/maps/api/js?v=3&client=gme-expedia&language=en&callback=uitk.map.initPlugin";
        b.sensor = b.sensor || false;
        e = e + "&sensor=" + b.sensor;
        if (b.channel) {
            e = e + "&channel=" + b.channel;
        }
        var g = document.createElement("script");
        g.type = "text/javascript";
        g.src = e;
        document.body.appendChild(g);
    };
    uitk.map.initPlugin = function() {
        c();
    };
    c = function() {
        var h, l, p = "uitk_map",
            m = d("body"),
            j = d(document),
            k = {
                title: false,
                subtitle: false,
                center: "0,0",
                zoom: 2,
                zoomToFit: false,
                template: "#uitk-map-template",
                legend: false,
                legendContent: "",
                mapType: "ROADMAP",
                maxZIndex: 5000
            }, n = "map-overlay",
            r = "active",
            u = "map-active",
            g = "map-close",
            o = Modernizr.touch,
            s = uitk.clickEvent + "." + p;
        var q = function(v) {
            var w = d("." + n + "." + r);
            w.each(function() {
                d(this).data("map").close(v);
            });
        };

        function i(v, w) {
            var x;
            this.element = d(v);
            w = w || {};
            x = this.element.data() || {};
            this.options = d.extend(true, {}, k, x, w);
            this.getCustomParams();
            this.init();
        }
        i.prototype = {
            constructor: i,
            init: function() {
                var w = this.element,
                    v = this;
                w.attr("data-control", "map");
                if (!this.mapTemplate) {
                    this.mapTemplate = uitk.getCompiledTemplate(this.options.template);
                }
                v.getHtml();
            },
            appendHtml: function() {
                var v = this;
                this.mapHtml.data("map", this);
                this.mapHtml.appendTo(m);
                if (this.content && uitk && uitk.publish) {
                    uitk.publish("map.appended", v);
                }
                setTimeout(function() {
                    v.mapHtml.addClass(r);
                    m.addClass(u);
                    v.loadMap();
                }, 100);
            },
            getCustomParams: function() {
                var x = uitk.map.data,
                    w, v;
                if (x) {
                    w = x[this.options.configId];
                    if (typeof w === "object") {
                        v = w.customParams;
                        if (v) {
                            this.options = d.extend(true, this.options, v);
                        }
                    } else {}
                }
            },
            getHtml: function() {
                var v = this.getMapData();
                this.mapHtml = d(this.mapTemplate(v));
            },
            getMapData: function() {
                var w = {}, v = this.options;
                w.title = v.title;
                w.subtitle = v.subtitle;
                w.id = v.configId;
                w.legend = v.legend;
                w.legendcontent = v.legendContent;
                return w;
            },
            getMarkerData: function() {
                var x = uitk.map.data,
                    w, v = false;
                if (x) {
                    w = x[this.options.configId];
                    if (w) {
                        v = w.markerData;
                    }
                }
                return v;
            },
            loadMarkers: function() {
                var y = this,
                    w = this.getMarkerData(),
                    z = [];
                y.currMarkerData = null;
                if (w) {
                    d.each(w.markers, function(B, C) {
                        y.loadMarker(C);
                        var A = C.latlong.split(",");
                        z.push(new google.maps.LatLng(parseFloat(A[0]), parseFloat(A[1])));
                    });
                }
                if (y.options.zoomToFit) {
                    y.bounds = new google.maps.LatLngBounds();
                    for (var x = 0, v = z.length; x < v; x++) {
                        y.bounds.extend(z[x]);
                    }
                    h.fitBounds(y.bounds);
                }
                google.maps.event.addListener(l, "closeclick", function() {
                    y.closeMarkerInfo();
                });
            },
            loadMarker: function(z) {
                var A = this,
                    w = z.latlong.split(",");
                var y = new google.maps.LatLng(parseFloat(w[0]), parseFloat(w[1]));
                var v = A.customMarker(z["type"]);
                var B = z["name"].replace(/(<([^>]+)>)/ig, "").replace(/(\r\n|\n|\r)/gm, "");
                var x = new google.maps.Marker({
                    map: h,
                    title: B,
                    content: z["content"],
                    position: y,
                    icon: v.icon,
                    zIndex: A.options.maxZIndex
                });
                if (typeof v.shadow.url === "undefined") {
                    x.setFlat(true);
                } else {
                    x.setShadow(v.shadow);
                }
                google.maps.event.addListener(x, "click", function() {
                    A.showMarkerInfo(x, z);
                });
                A.options.maxZIndex--;
                return x;
            },
            customMarker: function(v) {
                var w = {};
                w.icon = {};
                w.shadow = {};
                switch (v) {
                    case "blue-pin":
                        w.icon.url = "http://maps.google.com/mapfiles/ms/micons/blue-dot.png";
                        w.icon.size = new google.maps.Size(32, 32);
                        w.icon.anchor = new google.maps.Point(16, 32);
                        w.shadow.url = "http://maps.google.com/mapfiles/ms/micons/msmarker.shadow.png";
                        w.shadow.size = new google.maps.Size(59, 32);
                        w.shadow.anchor = new google.maps.Point(15, 32);
                        break;
                    case "red-dot":
                        w.icon.url = "http://www.expedia.com/static/default/default/images/infosite/reddot.png";
                        w.icon.size = new google.maps.Size(10, 10);
                        w.icon.anchor = new google.maps.Point(5, 5);
                        break;
                    case "red-pin":
                        w.icon.url = "http://maps.google.com/mapfiles/ms/micons/red-dot.png";
                        w.icon.size = new google.maps.Size(32, 32);
                        w.icon.anchor = new google.maps.Point(16, 32);
                        w.shadow.url = "http://maps.google.com/mapfiles/ms/micons/msmarker.shadow.png";
                        w.shadow.size = new google.maps.Size(59, 32);
                        w.shadow.anchor = new google.maps.Point(15, 32);
                        break;
                    default:
                        w.icon.url = "http://maps.google.com/mapfiles/ms/micons/red-dot.png";
                        w.icon.size = new google.maps.Size(32, 32);
                        w.icon.anchor = new google.maps.Point(16, 32);
                        w.shadow.url = "http://maps.google.com/mapfiles/ms/micons/msmarker.shadow.png";
                        w.shadow.size = new google.maps.Size(59, 32);
                        w.shadow.anchor = new google.maps.Point(15, 32);
                }
                return w;
            },
            showMarkerInfo: function(v, w) {
                if (v) {
                    l.setContent('<h5 class="marker-title">' + w["name"] + '</h5><div class="marker-content secondary">' + w["content"] + "</div>");
                    l.open(h, v);
                    this.currMarkerData = w;
                    if (uitk && uitk.publish) {
                        uitk.publish("map.marker.opened", w);
                    }
                }
            },
            closeMarkerInfo: function() {
                l.close();
                if (uitk && uitk.publish && (this.currMarkerData != null)) {
                    uitk.publish("map.marker.closed", this.currMarkerData);
                }
                this.currMarkerData = null;
            },
            loadMap: function() {
                var z = this;
                if (uitk.isTouchDevice) {
                    var y = document.documentElement.clientWidth / a.innerWidth;
                    if (y > 1.01) {
                        uitk.map.close();
                        return false;
                    }
                }
                var v = this.options.center.split(",");
                var x = this.options;
                var w = {
                    scaleControl: true,
                    center: new google.maps.LatLng(parseFloat(v[0]), parseFloat(v[1])),
                    zoom: x.zoom,
                    mapTypeId: google.maps.MapTypeId[x.mapType]
                };
                h = new google.maps.Map(document.getElementById("mapCanvas"), w);
                l = new google.maps.InfoWindow();
                l.setOptions({
                    maxWidth: 400
                });
                this.loadMarkers();
                uitk.mapObj = h;
                google.maps.event.addDomListener(a, "resize", function() {
                    if (x.zoomToFit) {
                        h.fitBounds(z.bounds);
                    } else {
                        h.setCenter(w.center);
                    }
                });
                google.maps.event.addListener(h, "click", function() {
                    z.closeMarkerInfo();
                });
            },
            open: function() {
                var v = this;
                if (uitk.isTouchDevice) {
                    v.scrollPosition = j.scrollTop();
                }
                v.appendHtml();
            },
            close: function(w) {
                var x = this,
                    v = this.scrollPosition || 0;
                if (uitk && uitk.publish) {
                    uitk.publish("map.close", x);
                }
                m.removeClass(u);
                if (uitk.isTouchDevice) {
                    j.scrollTop(this.scrollPosition);
                }
                this.mapHtml.removeClass(r);
                setTimeout(function() {
                    x.mapHtml.remove();
                    uitk.mapObj = null;
                    delete uitk.mapObj;
                }, 600);
            }
        };
        d.fn[p] = function() {
            var w, x, v;
            if (typeof arguments[0] === "object") {
                w = arguments[0];
                x = arguments[1];
                v = arguments[2];
            } else {
                w = {};
                x = arguments[0];
                v = arguments[1];
            }
            return this.each(function() {
                if (!d.data(this, p)) {
                    d.data(this, p, new i(this, w));
                }
                if (typeof x === "string") {
                    d.data(this, p)[x](v);
                }
            });
        };
        m.on(s, '[data-control="map"]', function(w) {
            var v = d(w.target).closest('[data-control="map"]');
            w.preventDefault();
            v[p]("open");
        });
        m.on(s, "." + g, function(v) {
            v.preventDefault();
            q("close-button");
        });
        j.on("keydown", function(v) {
            if (v.keyCode === 27) {
                q("esc");
            }
        });
        uitk.map.create = function(w) {
            var v = new i(null, w);
            v.open();
            return v;
        };
        uitk.map.close = q;
        if (uitk && uitk.publish) {
            uitk.publish("mapLoaded");
        }
        uitk.modules.Map = i;
    };
}(jQuery, window));
(function(d, a, f) {
    var c = "uitk_pagination",
        b = d("body");

    function e(g, h) {
        this.DEFAULT_RESULTS_PER_PAGE = 10;
        this.DEFAULT_TOTAL_PAGES_TO_DISPLAY = 7;
        this.$element = d(g);
        this.topLink = this.$element.data("top-link") || false;
        if (typeof this.topLink != "boolean") {
            throw new TypeError("UITK Pagination: The 'data-top-link' attribute must be true or false.");
        }
        this.totalResults = this.$element.data("total-results");
        if (!this.totalResults) {
            throw new ReferenceError("UITK Pagination: The pagination control requires a 'data-total-results' attribute.");
        } else {
            if (typeof this.totalResults != "number") {
                throw new TypeError("UITK Pagination: The 'data-total-results' attribute must be a number.");
            }
        }
        this.currentFirstResult = this.$element.data("first-result");
        if (!this.currentFirstResult) {
            throw new ReferenceError("UITK Pagination: The pagination control requires a 'data-first-result' attribute.");
        } else {
            if (typeof this.currentFirstResult != "number") {
                throw new TypeError("UITK Pagination: The 'data-first-result' attribute must be a number.");
            }
        }
        this.resultsPerPage = this.$element.data("per-page");
        if (!this.resultsPerPage || this.resultsPerPage === 0) {
            this.resultsPerPage = this.DEFAULT_RESULTS_PER_PAGE;
        } else {
            if (typeof this.resultsPerPage != "number") {
                throw new TypeError("UITK Pagination: The 'data-per-page' attribute must be a number.");
            }
        }
        this.totalPagesToDisplay = this.$element.data("pages-to-display");
        if (!this.totalPagesToDisplay || this.totalPagesToDisplay === 0) {
            this.totalPagesToDisplay = this.DEFAULT_TOTAL_PAGES_TO_DISPLAY;
        } else {
            if (typeof this.totalPagesToDisplay != "number") {
                throw new TypeError("UITK Pagination: The 'data-pages-to-display' attribute must be a number.");
            }
        }
        this.totalPages = Math.ceil(this.totalResults / this.resultsPerPage);
        this.displayPagination = this.totalPages > 1;
        this.currentPageNum = Math.ceil(this.currentFirstResult / this.resultsPerPage);
        this.showEllipses = false;
        this.firstPage = {
            num: 1
        };
        this.lastPage = {
            num: this.totalPages
        };
        this.init();
    }
    e.prototype = {
        constructor: e,
        init: function() {
            var g = Handlebars.templates["uitk-paginationPage-template"];
            Handlebars.registerPartial("page", g);
            this.calculateValues();
            this.render();
        },
        calculateValues: function() {
            var h = this.calcStartPage(this.totalPages, this.totalPagesToDisplay, this.currentPageNum),
                g = Math.min(this.totalPagesToDisplay, this.totalPages);
            this.calcPageVars(this.currentPageNum, this.totalPages);
            this.currentLastResult = Math.min(this.currentFirstResult + this.resultsPerPage - 1, this.totalResults);
            this.showEllipses = this.calcShowEllipses(h, g, this.totalPages);
            if (this.showEllipses) {
                g -= 2;
                h = Math.ceil(this.currentPageNum - (g / 2));
            }
            this.pages = this.generatePages(g, h, this.currentPageNum);
        },
        calcStartPage: function(i, g, h) {
            if (i < g || h <= (g / 2)) {
                return 1;
            }
            if (h === i || h + g / 2 >= i) {
                return i - g + 1;
            }
            return Math.ceil(h - (g / 2));
        },
        calcPageVars: function(h, g) {
            this.onFirstPage = (h === 1);
            this.onLastPage = (h === g);
            this.prevPageNum = h - 1;
            this.nextPageNum = h + 1;
        },
        calcShowEllipses: function(i, g, h) {
            return (i > 1 && (i + g) <= h);
        },
        generatePages: function(h, l, k) {
            var g = [];
            for (var j = 0; j < h; j++) {
                g[j] = {
                    num: l + j
                };
                if (k === l + j) {
                    g[j].isCurrent = true;
                }
            }
            return g;
        },
        goToPage: function(g) {
            this.currentPageNum = g;
            this.currentFirstResult = (this.currentPageNum - 1) * this.resultsPerPage + 1;
            this.calculateValues();
            this.render();
            var h = {
                pageNumber: g
            };
            uitk.publish("pagination.pageChanged", h);
        },
        prevPage: function() {
            this.goToPage(this.currentPageNum - 1);
        },
        nextPage: function() {
            this.goToPage(this.currentPageNum + 1);
        },
        render: function() {
            var h = Handlebars.templates["uitk-pagination-template"],
                g = h(this);
            this.$element.html(g);
        }
    };
    d.fn[c] = function() {
        var i, j, g, h;
        if (typeof arguments[0] === "object") {
            i = arguments[0];
            j = arguments[1];
            g = arguments[2];
            h = arguments[3];
        } else {
            i = {};
            j = arguments[0];
            g = arguments[1];
            h = arguments[2];
        }
        return this.each(function() {
            if (!d.data(this, c)) {
                d.data(this, c, new e(this, i));
            }
            if (typeof j === "string") {
                d.data(this, c)[j](g, h);
            }
        });
    };
    d(".pagination[data-single-page]")[c]();
    b.on(uitk.clickEvent, ".pagination .pagination-label", function(j) {
        var h = d(j.currentTarget),
            g = h.closest(".pagination[data-single-page]"),
            k = h.prev("input"),
            i = parseInt(k.val(), 10);
        g[c]("goToPage", i);
    });
    b.on(uitk.clickEvent, ".pagination-prev, .pagination-next", function(i) {
        var h = d(i.currentTarget),
            g = h.closest(".pagination[data-single-page]");
        i.preventDefault();
        if (h.hasClass("pagination-prev")) {
            g[c]("prevPage");
        } else {
            g[c]("nextPage");
        }
    });
    b.on("keyup", ".pagination input", function(j) {
        var h = d(j.currentTarget),
            g = h.closest(".pagination");
        if (j.keyCode === 32) {
            var i = parseInt(h.val(), 10);
            g[c]("goToPage", i);
        }
    });
    b.on("click", ".backToTop", function(g) {
        a.scrollTo(0, 0);
    });
}(jQuery, window));
(function(f, h, c) {
    var a, b, i, j = Modernizr.checkedselector;
    a = f(".sort-filter-bar");
    b = a.find("label input");
    i = function(k) {
        b.removeClass("checked");
        a.find("input:checked").addClass("checked");
    };
    var e = function() {
        return a.find('input[type="radio"]:checked').val();
    }, d = function() {
            var n = [],
                l = a.find('input[type="checkbox"]');
            var m = l.length;
            for (var k = 0; k < m; k++) {
                if (l[k].checked == true) {
                    n.push(l[k].value);
                }
            }
            return n;
        };
    var g = function(m, k) {
        var l = {};
        l.sortBy = m;
        l.filterBy = k;
        uitk.publish("sortBar.changed", l);
    };
    a.on(uitk.clickEvent, "label input", function(k) {
        if (!j) {
            i();
        }
        g(e(), d());
    });
    uitk.modules.sortbar = {
        publishSortBarChange: g
    };
}(jQuery, window));
(function(c, b, e) {
    var a = c("#site-footer-wrap").find(".tablet-collapse");
    uitk.mediaquery.register("(min-width: 320px) and (max-width: 726px)", "not-desktop");
    if (a) {
        var d = function(f, g) {
            if (g.key === "not-desktop") {
                c(a).uitk_toggle("close");
            }
        };
        uitk.subscribe("mediaquery.matched", d);
        uitk.mediaquery.publishAgain();
    }
}(jQuery, window));
/*!  generated on 2013-08-22 18:15:48.307 PDT(-0700) in 204 ms  */

/*!  served in 31 ms  */