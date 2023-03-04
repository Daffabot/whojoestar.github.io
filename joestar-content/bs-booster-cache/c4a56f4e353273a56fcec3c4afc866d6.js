/**
 * getEmPixels
 * Author: Tyson Matanich (http://matanich.com), 2013
 * License: MIT
 **/
(function(n, t) {
	"use strict";
	var i = "!important;",
		r = "position:absolute" + i + "visibility:hidden" + i + "width:1em" + i + "font-size:1em" + i + "padding:0" + i;
	window.getEmPixels = function(u) {
		var f, e, o;
		return u || (u = f = n.createElement("body"), f.style.cssText = "font-size:1em" + i, t.insertBefore(f, n.body)), e = n.createElement("i"), e.style.cssText = r, u.appendChild(e), o = e.clientWidth, f ? t.removeChild(f) : u.removeChild(e), o
	}
})(document, document.documentElement);

/**
 * elementQuery
 * Author: Tyson Matanich (http://matanich.com), 2013
 * License: MIT
 **/
(function(n, t, i) {
	"use strict";
	var e = n.Sizzle || jQuery.find,
		r = {},
		o = function(n, t, u, o, s) {
			if (n = f(n), n != "") {
				var h;
				o || s || (h = /^([0-9]*.?[0-9]+)(px|em)$/.exec(u), h != null && (o = Number(h[1]), o + "" != "NaN" && (s = h[2]))), s && (e.compile && e.compile(n), r[n] === i && (r[n] = {}), r[n][t] === i && (r[n][t] = {}), r[n][t][u] = [o, s])
			}
		},
		h = function(n, t) {
			var i, r, f;
			for (i in n)
				for (r in n[i])
					if (typeof n[i][r] == "string") o(i, r, n[i][r]);
					else if (typeof n[i][r] == "object")
				for (f = 0; f < n[i][r].length; f++) o(i, r, n[i][r][f]);
			t == !0 && u()
		},
		f = function(n) {
			if (n == null) return "";
			var t = "".trim;
			return t && !t.call("﻿ ") ? t.call(n) : (n + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
		},
		s = function(n, t) {
			var i = n.getAttribute(t);
			return i ? (" " + i + " ").replace(/[\t\r\n]/g, " ") : " "
		},
		c = function(n, t, i) {
			var r, u;
			n.nodeType === 1 && (r = f(i), r != "" && (u = s(n, t), u.indexOf(" " + r + " ") < 0 && n.setAttribute(t, f(u + r))))
		},
		l = function(n, t, i) {
			var u, r, e;
			if (n.nodeType === 1 && (u = f(i), u != "")) {
				for (r = s(n, t), e = !1; r.indexOf(" " + u + " ") >= 0;) r = r.replace(" " + u + " ", " "), e = !0;
				e && n.setAttribute(t, f(r))
			}
		},
		u = function() {
			var o, h, i, s, a, u, f, v;
			for (o in r)
				if (a = e(o), a.length > 0)
					for (h = 0; h < a.length; h++) {
						u = a[h];
						for (i in r[o])
							for (s in r[o][i]) f = r[o][i][s][0], r[o][i][s][1] == "em" && (f = f * (n.getEmPixels ? getEmPixels(u) : 16)), i == "min-width" && u.offsetWidth >= f || i == "max-width" && u.offsetWidth <= f || i == "min-height" && u.offsetHeight >= f || i == "max-height" && u.offsetHeight <= f ? c(u, i, s) : l(u, i, s)
					}!n.addEventListener && n.attachEvent && (v = t.documentElement.className, t.documentElement.className = " " + v, t.documentElement.className = v)
		};
	n.elementQuery = function(n, t) {
		!n || typeof n != "object" || n.cssRules || n.rules ? n || t || u() : h(n, t)
	}, n.elementQuery.selectors = function() {}, n.addEventListener ? (n.addEventListener("resize", u, !1), n.addEventListener("DOMContentLoaded", u, !1), n.addEventListener("load", u, !1)) : n.attachEvent && (n.attachEvent("onresize", u), n.attachEvent("onload", u))
})(this, document, undefined);

jQuery(document).ready(function(e) {
	e(".bsp-wrapper").on("click", ".bsp-videos-items a", function(l) {
		l.preventDefault();
		var r = e(this),
			s = r.closest(".bsp-wrapper"),
			t = r.closest(".bsp-wrapper").find(".bsp-player"),
			n = e(this).data("video-id"),
			a = t.data("frame-url").replace("{video-id}", n);
		t.html('<iframe type="text/html" width="100%" height="100%"\n        src="' + a + '"\n        frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>'), r.closest("li").addClass("bsp-current-item").siblings("li").removeClass("bsp-current-item");
		var i = s.find(".bsp-current-item .bsp-video-index").html();
		s.find(".bsp-current-playing .bsp-current-index").html(i)
	}), "function" == typeof elementQuery && elementQuery({
		".bsp-wrapper": {
			"max-width": ["480px", "680px", "780px"]
		}
	})
});

var Better_Social_Counter = function() {
	"use strict";
	return {
		init: function() {
			this.fix_element_query()
		},
		fix_element_query: function() {
			"function" == typeof elementQuery && elementQuery({
				".better-social-counter": {
					"max-width": ["358px", "199px", "230px", "900px", "530px", "750px"]
				},
				".better-social-banner": {
					"max-width": ["250px"]
				}
			})
		}
	}
}(jQuery);
jQuery(function(e) {
	Better_Social_Counter.init()
});

! function(t) {
	"use strict";

	function n(t, n, i, e) {
		t.beginPath(), t.arc(n, i, e, 0, w, !1), t.fill()
	}

	function i(t, n, i, e, a) {
		t.beginPath(), t.moveTo(n, i), t.lineTo(e, a), t.stroke()
	}

	function e(t, i, e, a, o, r, s, l) {
		var h = Math.cos(i * w),
			c = Math.sin(i * w);
		l -= s, n(t, e - c * o, a + h * r + .5 * l, s + (1 - .5 * h) * l)
	}

	function a(t, n, i, a, o, r, s, l) {
		var h;
		for (h = 5; h--;) e(t, n + h / 5, i, a, o, r, s, l)
	}

	function o(t, n, i, e, o, r, s) {
		n /= 3e4;
		var l = .21 * o,
			h = .12 * o,
			c = .24 * o,
			u = .28 * o;
		t.fillStyle = s, a(t, n, i, e, l, h, c, u), t.globalCompositeOperation = "destination-out", a(t, n, i, e, l, h, c - r, u - r), t.globalCompositeOperation = "source-over"
	}

	function r(t, n, e, a, o, r, s) {
		n /= 12e4;
		var l, h, c, u, f = .25 * o - .5 * r,
			d = .32 * o + .5 * r,
			v = .5 * o - .5 * r;
		for (t.strokeStyle = s, t.lineWidth = r, t.lineCap = "round", t.lineJoin = "round", t.beginPath(), t.arc(e, a, f, 0, w, !1), t.stroke(), l = 8; l--;) h = (n + l / 8) * w, c = Math.cos(h), u = Math.sin(h), i(t, e + c * d, a + u * d, e + c * v, a + u * v)
	}

	function s(t, n, i, e, a, o, r) {
		n /= 15e3;
		var s = .29 * a - .5 * o,
			l = .05 * a,
			h = Math.cos(n * w),
			c = h * w / -16;
		t.strokeStyle = r, t.lineWidth = o, t.lineCap = "round", t.lineJoin = "round", i += h * l, t.beginPath(), t.arc(i, e, s, c + w / 8, c + 7 * w / 8, !1), t.arc(i + Math.cos(c) * s * C, e + Math.sin(c) * s * C, s, c + 5 * w / 8, c + 3 * w / 8, !0), t.closePath(), t.stroke()
	}

	function l(t, n, i, e, a, o, r) {
		n /= 1350;
		var s, l, h, c, u = .16 * a,
			f = 11 * w / 12,
			d = 7 * w / 12;
		for (t.fillStyle = r, s = 4; s--;) l = (n + s / 4) % 1, h = i + (s - 1.5) / 1.5 * (1 === s || 2 === s ? -1 : 1) * u, c = e + l * l * a, t.beginPath(), t.moveTo(h, c - 1.5 * o), t.arc(h, c, .75 * o, f, d, !1), t.fill()
	}

	function h(t, n, e, a, o, r, s) {
		n /= 750;
		var l, h, c, u, f = .1875 * o;
		for (t.strokeStyle = s, t.lineWidth = .5 * r, t.lineCap = "round", t.lineJoin = "round", l = 4; l--;) h = (n + l / 4) % 1, c = Math.floor(e + (l - 1.5) / 1.5 * (1 === l || 2 === l ? -1 : 1) * f) + .5, u = a + h * o, i(t, c, u - 1.5 * r, c, u + 1.5 * r)
	}

	function c(t, n, e, a, o, r, s) {
		n /= 3e3;
		var l, h, c, u, f = .16 * o,
			d = .75 * r,
			v = n * w * .7,
			m = Math.cos(v) * d,
			g = Math.sin(v) * d,
			M = v + w / 3,
			p = Math.cos(M) * d,
			C = Math.sin(M) * d,
			y = v + 2 * w / 3,
			b = Math.cos(y) * d,
			S = Math.sin(y) * d;
		for (t.strokeStyle = s, t.lineWidth = .5 * r, t.lineCap = "round", t.lineJoin = "round", l = 4; l--;) h = (n + l / 4) % 1, c = e + Math.sin((h + l / 4) * w) * f, u = a + h * o, i(t, c - m, u - g, c + m, u + g), i(t, c - p, u - C, c + p, u + C), i(t, c - b, u - S, c + b, u + S)
	}

	function u(t, n, i, e, o, r, s) {
		n /= 3e4;
		var l = .21 * o,
			h = .06 * o,
			c = .21 * o,
			u = .28 * o;
		t.fillStyle = s, a(t, n, i, e, l, h, c, u), t.globalCompositeOperation = "destination-out", a(t, n, i, e, l, h, c - r, u - r), t.globalCompositeOperation = "source-over"
	}

	function f(t, n, i, e, a, o, r) {
		var s = a / 8,
			l = s / 3,
			h = 2 * l,
			c = n % 1 * w,
			u = Math.cos(c),
			f = Math.sin(c);
		t.fillStyle = r, t.strokeStyle = r, t.lineWidth = o, t.lineCap = "round", t.lineJoin = "round", t.beginPath(), t.arc(i, e, s, c, c + Math.PI, !1), t.arc(i - l * u, e - l * f, h, c + Math.PI, c, !1), t.arc(i + h * u, e + h * f, l, c + Math.PI, c, !0), t.globalCompositeOperation = "destination-out", t.fill(), t.globalCompositeOperation = "source-over", t.stroke()
	}

	function d(t, n, i, e, a, o, r, s, l) {
		n /= 2500;
		var h, c, u, d, v = y[r],
			m = (n + r - b[r].start) % s,
			g = (n + r - b[r].end) % s,
			M = (n + r) % s;
		if (t.strokeStyle = l, t.lineWidth = o, t.lineCap = "round", t.lineJoin = "round", m < 1) {
			if (t.beginPath(), m *= v.length / 2 - 1, h = Math.floor(m), m -= h, h *= 2, h += 2, t.moveTo(i + (v[h - 2] * (1 - m) + v[h] * m) * a, e + (v[h - 1] * (1 - m) + v[h + 1] * m) * a), g < 1) {
				for (g *= v.length / 2 - 1, c = Math.floor(g), g -= c, c *= 2, c += 2, d = h; d !== c; d += 2) t.lineTo(i + v[d] * a, e + v[d + 1] * a);
				t.lineTo(i + (v[c - 2] * (1 - g) + v[c] * g) * a, e + (v[c - 1] * (1 - g) + v[c + 1] * g) * a)
			} else
				for (d = h; d !== v.length; d += 2) t.lineTo(i + v[d] * a, e + v[d + 1] * a);
			t.stroke()
		} else if (g < 1) {
			for (t.beginPath(), g *= v.length / 2 - 1, c = Math.floor(g), g -= c, c *= 2, c += 2, t.moveTo(i + v[0] * a, e + v[1] * a), d = 2; d !== c; d += 2) t.lineTo(i + v[d] * a, e + v[d + 1] * a);
			t.lineTo(i + (v[c - 2] * (1 - g) + v[c] * g) * a, e + (v[c - 1] * (1 - g) + v[c + 1] * g) * a), t.stroke()
		}
		M < 1 && (M *= v.length / 2 - 1, u = Math.floor(M), M -= u, u *= 2, u += 2, f(t, n, i + (v[u - 2] * (1 - M) + v[u] * M) * a, e + (v[u - 1] * (1 - M) + v[u + 1] * M) * a, a, o, l))
	}

	function v(t) {
		t.shadowColor = "rgba(0,0,0,.25)", t.shadowBlur = 0, t.lineWidth = 1, t.shadowOffsetY = 2
	}
	var m, g;
	! function() {
		var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame,
			i = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || t.msCancelAnimationFrame;
		n && i ? (m = function(t, i) {
			function e() {
				a.value = n(e), t()
			}
			var a = {
				value: null
			};
			return e(), a
		}, g = function(t) {
			i(t.value)
		}) : (m = setInterval, g = clearInterval)
	}();
	var M = 500,
		p = .08,
		w = 2 * Math.PI,
		C = 2 / Math.sqrt(2),
		y = [
			[-.75, -.18, -.7219, -.1527, -.6971, -.1225, -.6739, -.091, -.6516, -.0588, -.6298, -.0262, -.6083, .0065, -.5868, .0396, -.5643, .0731, -.5372, .1041, -.5033, .1259, -.4662, .1406, -.4275, .1493, -.3881, .153, -.3487, .1526, -.3095, .1488, -.2708, .1421, -.2319, .1342, -.1943, .1217, -.16, .1025, -.129, .0785, -.1012, .0509, -.0764, .0206, -.0547, -.012, -.0378, -.0472, -.0324, -.0857, -.0389, -.1241, -.0546, -.1599, -.0814, -.1876, -.1193, -.1964, -.1582, -.1935, -.1931, -.1769, -.2157, -.1453, -.229, -.1085, -.2327, -.0697, -.224, -.0317, -.2064, .0033, -.1853, .0362, -.1613, .0672, -.135, .0961, -.1051, .1213, -.0706, .1397, -.0332, .1512, .0053, .158, .0442, .1624, .0833, .1636, .1224, .1615, .1613, .1565, .1999, .15, .2378, .1402, .2749, .1279, .3118, .1147, .3487, .1015, .3858, .0892, .4236, .0787, .4621, .0715, .5012, .0702, .5398, .0766, .5768, .089, .6123, .1055, .6466, .1244, .6805, .144, .7147, .163, .75, .18],
			[-.75, 0, -.7033, .0195, -.6569, .0399, -.6104, .06, -.5634, .0789, -.5155, .0954, -.4667, .1089, -.4174, .1206, -.3676, .1299, -.3174, .1365, -.2669, .1398, -.2162, .1391, -.1658, .1347, -.1157, .1271, -.0661, .1169, -.017, .1046, .0316, .0903, .0791, .0728, .1259, .0534, .1723, .0331, .2188, .0129, .2656, -.0064, .3122, -.0263, .3586, -.0466, .4052, -.0665, .4525, -.0847, .5007, -.1002, .5497, -.113, .5991, -.124, .6491, -.1325, .6994, -.138, .75, -.14]
		],
		b = [{
			start: .36,
			end: .11
		}, {
			start: .56,
			end: .16
		}],
		S = function(t) {
			this.list = [], this.interval = null, this.color = t && t.color ? t.color : "black", this.dropShadow = "undefined" == typeof t.dropShadow || t.dropShadow, this.resizeClear = !(!t || !t.resizeClear)
		};
	S.CLEAR_DAY = function(t, n, i, e) {
		var a = t.canvas.width,
			o = t.canvas.height,
			s = Math.min(a, o);
		r(t, n, .5 * a, .5 * o, s, s * p, i), e && v(t)
	}, S.CLEAR_NIGHT = function(t, n, i, e) {
		var a = t.canvas.width,
			o = t.canvas.height,
			r = Math.min(a, o);
		s(t, n, .5 * a, .5 * o, r, r * p, i), e && v(t)
	}, S.PARTLY_CLOUDY_DAY = function(t, n, i, e) {
		var a = t.canvas.width,
			s = t.canvas.height,
			l = Math.min(a, s);
		r(t, n, .625 * a, .375 * s, .75 * l, l * p, i), o(t, n, .375 * a, .625 * s, .75 * l, l * p, i), e && v(t)
	}, S.PARTLY_CLOUDY_NIGHT = function(t, n, i, e) {
		var a = t.canvas.width,
			r = t.canvas.height,
			l = Math.min(a, r);
		s(t, n, .667 * a, .375 * r, .75 * l, l * p, i), o(t, n, .375 * a, .625 * r, .75 * l, l * p, i), e && v(t)
	}, S.CLOUDY = function(t, n, i, e) {
		var a = t.canvas.width,
			r = t.canvas.height,
			s = Math.min(a, r);
		o(t, n, .5 * a, .5 * r, s, s * p, i), e && v(t)
	}, S.RAIN = function(t, n, i, e) {
		var a = t.canvas.width,
			r = t.canvas.height,
			s = Math.min(a, r);
		l(t, n, .5 * a, .37 * r, .9 * s, s * p, i), o(t, n, .5 * a, .37 * r, .9 * s, s * p, i), e && v(t)
	}, S.SLEET = function(t, n, i, e) {
		var a = t.canvas.width,
			r = t.canvas.height,
			s = Math.min(a, r);
		h(t, n, .5 * a, .37 * r, .9 * s, s * p, i), o(t, n, .5 * a, .37 * r, .9 * s, s * p, i), e && v(t)
	}, S.SNOW = function(t, n, i, e) {
		var a = t.canvas.width,
			r = t.canvas.height,
			s = Math.min(a, r);
		c(t, n, .5 * a, .37 * r, .9 * s, s * p, i), o(t, n, .5 * a, .37 * r, .9 * s, s * p, i), e && v(t)
	}, S.WIND = function(t, n, i, e) {
		var a = t.canvas.width,
			o = t.canvas.height,
			r = Math.min(a, o);
		d(t, n, .5 * a, .5 * o, r, r * p, 0, 2, i), d(t, n, .5 * a, .5 * o, r, r * p, 1, 2, i), e && v(t)
	}, S.FOG = function(t, n, e, a) {
		var o = t.canvas.width,
			r = t.canvas.height,
			s = Math.min(o, r),
			l = s * p;
		u(t, n, .5 * o, .32 * r, .75 * s, l, e), n /= 5e3;
		var h = Math.cos(n * w) * s * .02,
			c = Math.cos((n + .25) * w) * s * .02,
			f = Math.cos((n + .5) * w) * s * .02,
			d = Math.cos((n + .75) * w) * s * .02,
			m = .936 * r,
			g = Math.floor(m - .5 * l) + .5,
			M = Math.floor(m - 2.5 * l) + .5;
		t.strokeStyle = e, t.lineWidth = l, t.lineCap = "round", t.lineJoin = "round", i(t, h + .2 * o + .5 * l, g, c + .8 * o - .5 * l, g), i(t, f + .2 * o + .5 * l, M, d + .8 * o - .5 * l, M), a && v(t)
	}, S.prototype = {
		_determineDrawingFunction: function(t) {
			if ("string" == typeof t) return t = t.toUpperCase().replace(/-/g, "_"), S.hasOwnProperty(t) ? S[t] : null
		},
		add: function(t, n) {
			var i;
			"string" == typeof t && (t = document.getElementById(t)), null !== t && (n = this._determineDrawingFunction(n), "function" == typeof n && (i = {
				element: t,
				context: t.getContext("2d"),
				drawing: n
			}, this.list.push(i), this.draw(i, M)))
		},
		set: function(t, n) {
			var i;
			for ("string" == typeof t && (t = document.getElementById(t)), i = this.list.length; i--;)
				if (this.list[i].element === t) return this.list[i].drawing = this._determineDrawingFunction(n), void this.draw(this.list[i], M);
			this.add(t, n)
		},
		remove: function(t) {
			var n;
			for ("string" == typeof t && (t = document.getElementById(t)), n = this.list.length; n--;)
				if (this.list[n].element === t) return void this.list.splice(n, 1)
		},
		draw: function(t, n) {
			var i = t.context.canvas;
			this.resizeClear ? i.width = i.width : t.context.clearRect(0, 0, i.width, i.height), t.drawing(t.context, n, this.color, this.dropShadow)
		},
		play: function() {
			var t = this;
			this.pause(), this.interval = m(function() {
				var n, i = Date.now();
				for (n = t.list.length; n--;) t.draw(t.list[n], i)
			}, 1e3 / 60)
		},
		pause: function() {
			this.interval && (g(this.interval), this.interval = null)
		}
	}, t.Skycons = S
}(this);

! function(e) {
	e.betterWeather = function(t, a) {
		var r = this;
		r.$el = e(t), r.el = t, r.$el.data("betterWeather", r), r.templateInitialized = !1, r.retina = window.devicePixelRatio > 1, r.init = function() {
			r.initIcons(), r.$el.hasClass("better-weather") && (r.prettifyIconSize(), e(window).resize(function() {
				r.prettifyIconSize()
			})), setTimeout(function() {
				r.helper.hideLoader()
			}, 600)
		}, r.initIcons = function() {
			if (r.$el.hasClass("animated-icons"))
				if (r.$el.hasClass("better-weather")) {
					if (r.helper.isCanvasSupported() && (r.skycons = new Skycons({
							color: r.$el.data("font-color"),
							dropShadow: !0
						})), r.$el.hasClass("style-normal")) {
						var t = "#" + r.$el.attr("id") + "-summary-icon";
						e(t).attr("height", r.helper.getCorrectSize(85)).attr("width", r.helper.getCorrectSize(85)), r.skycons.set(r.$el.attr("id") + "-summary-icon", e(t).data("icon")), r.skycons.play()
					} else {
						var t = "#" + r.$el.attr("id") + "-summary-icon";
						e(t).attr("height", r.helper.getCorrectSize(55)).attr("width", r.helper.getCorrectSize(55)), r.skycons.set(r.$el.attr("id") + "-summary-icon", e(t).data("icon")), r.skycons.play()
					}
					if (r.$el.hasClass("have-next-days")) {
						var t = "#" + r.$el.attr("id");
						e(t + "-day1-icon").attr("height", r.helper.getCorrectSize(17)).attr("width", r.helper.getCorrectSize(17)), r.skycons.set(r.$el.attr("id") + "-day1-icon", e(t + "-day1-icon").data("icon")), r.skycons.play(), e(t + "-day2-icon").attr("height", r.helper.getCorrectSize(17)).attr("width", r.helper.getCorrectSize(17)), r.skycons.set(r.$el.attr("id") + "-day2-icon", e(t + "-day2-icon").data("icon")), r.skycons.play(), e(t + "-day3-icon").attr("height", r.helper.getCorrectSize(17)).attr("width", r.helper.getCorrectSize(17)), r.skycons.set(r.$el.attr("id") + "-day3-icon", e(t + "-day3-icon").data("icon")), r.skycons.play(), e(t + "-day4-icon").attr("height", r.helper.getCorrectSize(17)).attr("width", r.helper.getCorrectSize(17)), r.skycons.set(r.$el.attr("id") + "-day4-icon", e(t + "-day4-icon").data("icon")), r.skycons.play()
					}
				} else if (r.$el.hasClass("better-weather-inline")) {
				r.helper.isCanvasSupported() && (r.skycons = new Skycons({
					color: r.$el.data("font-color"),
					dropShadow: !1
				}));
				var a = "",
					i = "";
				switch (r.$el.data("inline-size")) {
					case "small":
						i = a = 18;
						break;
					case "medium":
						i = a = 30;
						break;
					case "large":
						i = a = 55
				}
				e("#" + r.$el.attr("id") + "-summary-icon").attr("height", i).attr("width", a), r.skycons.set(r.$el.attr("id") + "-summary-icon", e("#" + r.$el.attr("id") + "-summary-icon").data("icon")), r.skycons.play()
			}
		}, r.prettifyIconSize = function() {
			var e = r.$el.width(),
				t = r.$el.find(".bw_summary .bw_icon");
			if (!t.hasClass("hw_static-icon")) switch (!0) {
				case e <= 70:
					r.helper.updateIconSize(t, 28, 28);
					break;
				case e <= 100:
					r.helper.updateIconSize(t, 35, 35);
					break;
				case e <= 200:
					r.helper.updateIconSize(t, 40, 40);
					break;
				case e <= 400:
					r.$el.hasClass("style-modern") ? r.helper.updateIconSize(t, 55, 55) : r.$el.hasClass("style-modern") && r.helper.updateIconSize(t, 70, 70);
					break;
				case e <= 1170:
					r.helper.updateIconSize(t, 35, 35)
			}
		}, r.helper = {
			getCorrectSize: function(e) {
				return r.retina ? 2 * e : e
			},
			updateIconSize: function(e, t, a) {
				e.attr("width", r.helper.getCorrectSize(t)), e.attr("height", r.helper.getCorrectSize(a)), e.css("width", t + "px"), e.css("height", a + "px")
			},
			hideLoader: function() {
				r.$el.find(".bw-loader").remove()
			},
			isCanvasSupported: function() {
				var e = document.createElement("canvas");
				return !(!e.getContext || !e.getContext("2d"))
			}
		}, "function" == typeof elementQuery && elementQuery({
			".better-weather": {
				"max-width": ["2000px", "1170px", "970px", "900px", "830px", "650px", "550px", "440px", "400px", "350px", "300px", "250px", "200px", "170px", "120px", "100px", "50px"]
			}
		}), r.init()
	}, e.fn.betterWeather = function(t) {
		return this.each(function() {
			new e.betterWeather(this, t)
		})
	}
}(jQuery),
function(e) {
	e(".better-weather, .better-weather-inline").each(function() {
		e(this).betterWeather()
	})
}(jQuery);

/*!
 hey, [be]Lazy.js - v1.8.2 - 2016.10.25
 A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
 (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
 */
! function(t, e) {
	"function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.Blazy = e()
}(this, function() {
	"use strict";

	function t(t) {
		var o = t._util;
		o.elements = v(t.options), o.count = o.elements.length, o.destroyed && (o.destroyed = !1, t.options.container && w(t.options.container, function(t) {
			h(t, "scroll", o.validateT)
		}), h(window, "resize", o.saveViewportOffsetT), h(window, "resize", o.validateT), h(window, "scroll", o.validateT)), e(t)
	}

	function e(t) {
		for (var e = t._util, n = 0; n < e.count; n++) {
			var s = e.elements[n];
			(o(s, t.options) || p(s, t.options.successClass)) && (t.load(s), e.elements.splice(n, 1), e.count--, n--)
		}
		0 === e.count && t.destroy()
	}

	function o(t, e) {
		var o = t.getBoundingClientRect();
		if (e.container && E) {
			var s = t.closest(e.containerClass);
			if (s) {
				var i = s.getBoundingClientRect();
				if (n(i, C)) {
					var r = i.top - e.offset,
						a = i.right + e.offset,
						c = i.bottom + e.offset,
						l = i.left - e.offset,
						f = {
							top: r > C.top ? r : C.top,
							right: a < C.right ? a : C.right,
							bottom: c < C.bottom ? c : C.bottom,
							left: l > C.left ? l : C.left
						};
					return n(o, f)
				}
				return !1
			}
		}
		return n(o, C)
	}

	function n(t, e) {
		return t.right >= e.left && t.bottom >= e.top && t.left <= e.right && t.top <= e.bottom
	}

	function s(t, e, o) {
		if (!p(t, o.errorClass)) {
			var n = t.offsetWidth > 0 && t.offsetHeight > 0,
				s = function() {
					return "function" == typeof o.loadInvisible ? o.loadInvisible(t, n) : o.loadInvisible
				};
			if (!p(t, o.successClass) && (e || n || s())) {
				var c = l(t, b) || l(t, o.src);
				if (c) {
					var f = c.split(o.separator),
						v = f[T && f.length > 1 ? 1 : 0],
						m = l(t, o.srcset),
						y = Publisher_Theme.parseBsSrcset(t, o.srcset, !1);
					y && (m = void 0, v = y);
					var C = u(t, "img"),
						E = t.parentNode,
						A = E && u(E, "picture");
					if (C || void 0 === t.src) {
						var D = new Image,
							I = function() {
								o.error && o.error(t, "invalid"), d(t, o.errorClass), g(D, "error", I), g(D, "load", N)
							},
							N = function() {
								C ? A || a(t, v, m) : t.style.backgroundImage = 'url("' + v + '")', i(t, o), g(D, "load", N), g(D, "error", I)
							};
						A && (D = t, w(E.getElementsByTagName("source"), function(t) {
							r(t, k, o.srcset)
						})), h(D, "error", I), h(D, "load", N), a(D, v, m)
					} else t.src = v, i(t, o)
				} else u(t, "video") ? (w(t.getElementsByTagName("source"), function(t) {
					r(t, S, o.src)
				}), t.load(), i(t, o)) : (o.error && o.error(t, "missing"), d(t, o.errorClass))
			}
		}
	}

	function i(t, e) {
		d(t, e.successClass), e.success && e.success(t), f(t, e.src), f(t, e.srcset), w(e.breakpoints, function(e) {
			f(t, e.src)
		}), "function" == typeof e.itemLoaded && e.itemLoaded.call(t, e)
	}

	function r(t, e, o) {
		var n = l(t, o);
		n && (c(t, e, n), f(t, o))
	}

	function a(t, e, o) {
		o && c(t, k, o), t.src = e
	}

	function c(t, e, o) {
		t.setAttribute(e, o)
	}

	function l(t, e) {
		return t.getAttribute(e)
	}

	function f(t, e) {
		t.removeAttribute(e)
	}

	function u(t, e) {
		return t.nodeName.toLowerCase() === e
	}

	function p(t, e) {
		return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
	}

	function d(t, e) {
		p(t, e) || (t.className += " " + e)
	}

	function v(t) {
		for (var e = [], o = t.root.querySelectorAll(t.selector), n = o.length; n--; e.unshift(o[n]));
		return e
	}

	function m(t) {
		C.bottom = (window.innerHeight || document.documentElement.clientHeight) + t, C.right = (window.innerWidth || document.documentElement.clientWidth) + t
	}

	function h(t, e, o) {
		t.attachEvent ? t.attachEvent && t.attachEvent("on" + e, o) : t.addEventListener(e, o, {
			capture: !1,
			passive: !0
		})
	}

	function g(t, e, o) {
		t.detachEvent ? t.detachEvent && t.detachEvent("on" + e, o) : t.removeEventListener(e, o, {
			capture: !1,
			passive: !0
		})
	}

	function w(t, e) {
		if (t && e)
			for (var o = t.length, n = 0; o > n && e(t[n], n) !== !1; n++);
	}

	function y(t, e, o) {
		var n = 0;
		return function() {
			var s = +new Date;
			e > s - n || (n = s, t.apply(o, arguments))
		}
	}
	var b, C, T, E, S = "src",
		k = "srcset";
	return function(o) {
		if (!document.querySelectorAll) {
			var n = document.createStyleSheet();
			document.querySelectorAll = function(t, e, o, s, i) {
				for (i = document.all, e = [], t = t.replace(/\[for\b/gi, "[htmlFor").split(","), o = t.length; o--;) {
					for (n.addRule(t[o], "k:v"), s = i.length; s--;) i[s].currentStyle.k && e.push(i[s]);
					n.removeRule(0)
				}
				return e
			}
		}
		var i = this,
			r = i._util = {};
		r.elements = [], r.destroyed = !0, i.options = o || {}, i.options.error = i.options.error || !1, i.options.offset = i.options.offset || 100, i.options.root = i.options.root || document, i.options.success = i.options.success || !1, i.options.selector = i.options.selector || ".b-lazy", i.options.separator = i.options.separator || "|", i.options.containerClass = i.options.container, i.options.container = i.options.containerClass ? document.querySelectorAll(i.options.containerClass) : !1, i.options.errorClass = i.options.errorClass || "b-error", i.options.breakpoints = i.options.breakpoints || !1, i.options.loadInvisible = i.options.loadInvisible || !1, i.options.successClass = i.options.successClass || "b-loaded", i.options.validateDelay = i.options.validateDelay || 25, i.options.saveViewportOffsetDelay = i.options.saveViewportOffsetDelay || 50, i.options.srcset = i.options.srcset || "data-srcset", i.options.src = b = i.options.src || "data-src", E = Element.prototype.closest, T = window.devicePixelRatio > 1, C = {}, C.top = 0 - i.options.offset, C.left = 0 - i.options.offset, i.revalidate = function() {
			t(i)
		}, i.load = function(t, e) {
			var o = this.options;
			t && void 0 === t.length ? s(t, e, o) : w(t, function(t) {
				s(t, e, o)
			})
		}, i.destroy = function() {
			var t = i._util;
			i.options.container && w(i.options.container, function(e) {
				g(e, "scroll", t.validateT)
			}), g(window, "scroll", t.validateT), g(window, "resize", t.validateT), g(window, "resize", t.saveViewportOffsetT), t.count = 0, t.elements.length = 0, t.destroyed = !0
		}, r.validateT = y(function() {
			e(i)
		}, i.options.validateDelay, i), r.saveViewportOffsetT = y(function() {
			m(i.options.offset)
		}, i.options.saveViewportOffsetDelay, i), m(i.options.offset), w(i.options.breakpoints, function(t) {
			return t.width >= window.screen.width ? (b = t.src, !1) : void 0
		}), setTimeout(function() {
			t(i)
		})
	}
});

/***
 *  BetterStudio Themes Core.
 *
 *  ______  _____   _____ _                           _____
 *  | ___ \/  ___| |_   _| |                         /  __ \
 *  | |_/ /\ `--.    | | | |__   ___ _ __ ___   ___  | /  \/ ___  _ __ ___
 *  | ___ \ `--. \   | | | '_ \ / _ \ '_ ` _ \ / _ \ | |    / _ \| '__/ _ \
 *  | |_/ //\__/ /   | | | | | |  __/ | | | | |  __/ | \__/\ (_) | | |  __/
 *  \____/ \____/    \_/ |_| |_|\___|_| |_| |_|\___|  \____/\___/|_|  \___|
 *
 *  Copyright © 2017 Better Studio
 *
 *
 *  Our portfolio is here: https://betterstudio.com/
 *
 *  \--> BetterStudio, 2017 <--/
 */
! function(d) {
	"use strict";
	var o = {},
		n = {};

	function l(e) {
		(e = void 0 === e || e) && d(window).scroll()
	}

	function t(e) {
		return this.prefix = "bs_ajax_paginate_", this.deferredPrefix = "bs_deferred_loading_", this.isPrevPage = !1, this.$link_el = !1, this.id = !1, this.paginationStyle = !1, this.settings = d.extend({
			afterSuccessDeferredAjax: function() {}
		}, e), this
	}
	t.prototype.init = function(e) {
		var o = this;
		d(e).on("click", ".bs-ajax-pagination a", function(e) {
			e.preventDefault();
			var a = d(this),
				t = a.parent();
			if (a.hasClass("disabled") || t.hasClass("bs-pagination-loading")) return !1;
			t.addClass("bs-pagination-loading");
			var n = a.closest(".bs-pagination");
			o.$link_el = a, o.id = a.data("id");
			try {
				if (!o.id) throw "invalid element";
				o.setNewPageNumber(), o.paginationStyle = o.getPaginationStyle();
				var i = o.getAjaxProps(),
					s = n.prevAll(".bs-pagination-wrapper"),
					r = o.cache_get(i.current_page, o.id);
				if ("object" == typeof r) s.addClass("bs-pagination-cached"), o.handle_response(r), t.removeClass("bs-pagination-loading");
				else {
					switch (s.removeClass("bs-pagination-cached"), 2 == i.current_page && o.cache_add(1, {
							output: s.html(),
							label: n.find(".bs-pagination-label").html(),
							have_next: !0,
							have_prev: !1
						}, o.id), o.paginationStyle) {
						case "next_prev":
							s.children().addClass("bs-pagination-in-loading"), s.prepend(o.getLoadingRawHtml());
							break;
						case "more_btn_infinity":
							a.find(".loaded").hide(), a.find(".loading").show(), a.removeClass("more_btn_infinity").addClass("infinity").addClass("bs-pagination-in-loading"), n.removeClass("more_btn_infinity").addClass("infinity");
							break;
						case "infinity":
						case "more_btn":
							a.addClass("bs-pagination-in-loading"), a.find(".loaded").hide(), a.find(".loading").show()
					}
					d.ajax({
						url: i.ajax_url,
						type: "POST",
						dataType: "json",
						data: i
					}).fail(function(e) {
						switch (t.removeClass("bs-pagination-loading"), o.paginationStyle) {
							case "more_btn_infinity":
							case "next_prev":
								s.find(".bs-pagin-loading-wrapper").remove(), a.addClass("bs-pagination-in-loading");
								break;
							case "infinity":
							case "more_btn":
								a.addClass("bs-pagination-in-loading"), a.find(".loaded").show(), a.find(".loading").hide()
						}
						"abort" !== e.statusText && alert("cannot load data. please check your internet connection!")
					}).done(function(e) {
						switch (o.handle_response(e), o.cacheThisStyle(o.paginationStyle) && o.cache_add(i.current_page, e, o.id), o.paginationStyle) {
							case "more_btn_infinity":
								a.removeClass("bs-pagination-in-loading"), s.find(".bs-pagin-loading-wrapper").remove();
								break;
							case "next_prev":
								a.removeClass("bs-pagination-in-loading"), s.find(".bs-pagin-loading-wrapper").remove(), s.children().removeClass("bs-pagination-in-loading");
								break;
							case "infinity":
							case "more_btn":
								a.removeClass("bs-pagination-in-loading"), a.find(".loaded").show(), a.find(".loading").hide()
						}
						t.removeClass("bs-pagination-loading")
					})
				}
			} catch (e) {
				o.debug(e)
			}
		}), "function" == typeof OnScreen && new OnScreen({
			tolerance: 0,
			debounce: 100,
			container: window
		}).on("enter", ".bs-ajax-pagination.infinity", function(e) {
			d(e).find("a").click()
		})
	}, t.prototype.filter_slider_params = function(e) {
		return void 0 !== e.autoplayspeed && (e.autoplaySpeed = e.autoplayspeed), e.dots = void 0 !== e.sliderControlDots && "off" !== e.sliderControlDots, e.autoplay = void 0 !== e.sliderAutoplay && parseInt(e.sliderAutoplay), e.speed = e.sliderAnimationSpeed, void 0 !== e.sliderControlNextPrev && "off" == e.sliderControlNextPrev && (e.appendArrows = !1), e
	}, t.prototype.handler_slider = function(e) {
		var i = this;
		d.fn.slick && (d(".bs-slider-items-container", e).each(function() {
			var e = d(this),
				a = d(document.body).hasClass("rtl");
			if (!e.hasClass("slick-ready")) {
				var t = e.data(),
					n = i.filter_slider_params(d.extend({
						sliderControlDots: "off",
						prevArrow: '<a class="btn-bs-pagination prev" rel="prev" title="Previous">\n\t\t\t<i class="fa fa-angle-' + (a ? "right" : "left") + '" aria-hidden="true"></i>\n\t\t</a>',
						nextArrow: '<a rel="next" class="btn-bs-pagination next" title="Next">\n\t\t\t<i class="fa fa-angle-' + (a ? "left" : "right") + '" aria-hidden="true"></i>\n\t\t</a>',
						rtl: a,
						slideMargin: 25,
						slide: ".bs-slider-item",
						appendArrows: e.find(".bs-slider-controls .bs-control-nav"),
						classPrefix: "bs-slider-",
						dotsClass: "bs-slider-dots",
						customPaging: function(e, a) {
							return d('<span class="bts-bs-dots-btn"></span>').text(a + 1)
						}
					}, t));
				n.sliderControlDots && t.sliderControlDots && (n.appendDots = e.find(".bs-slider-controls"), n.dotsClass += " " + n.dotsClass + "-" + t.sliderControlDots), e.slick(n), e.addClass("slick-ready")
			}
		}), d(".multi-tab").on("shown.bs.tab", 'a[data-toggle="tab"]:not([data-deferred-init])', function(e) {
			var a = d(e.target).attr("href");
			d(a).find(".bs-slider-items-container").slick("setPosition"), l()
		}))
	}, t.prototype.refreshLazyImages = function() {
		Publisher_Theme && Publisher_Theme.refreshLazyImages && Publisher_Theme.refreshLazyImages()
	}, t.prototype.bindDeferredEvents = function(e) {
		var i = 200,
			s = this,
			r = 0;
		d(".multi-tab", e).on("show.bs.tab", "a[data-deferred-init]", function(e) {
			var a = d(this).closest(".multi-tab").find(".active").attr("href");
			i = d(a).height()
		}), d(".tabs-section", e).on("show.bs.tab", "a[data-deferred-init]", function(e) {
			var a = d(this).closest(".tabs-section").find(".active:visible a").data("target"),
				t = d(a);
			i = t.height()
		}).on("show.bs.tab", "a", function() {
			s.refreshLazyImages();
			var e = d(this).closest(".tabs-section").find(".active:visible a").data("target"),
				a = d(e),
				t = a.outerHeight();
			if (t) {
				var n = a.closest(".tab-content");
				if (n.length) {
					var i = Math.max(t, parseInt(n.outerHeight()));
					i = Math.max(i, r), n.css("min-height", i).data("bs-height", i), r = i
				}
			}
		}), d("a[data-deferred-init]", e).each(function(e) {
			var a = d(this),
				t = a.data("deferred-event") || "click";
			0 < a.closest(".deferred-block-exclude").length || a.on(t, function(e) {
				var a = d(this).data("deferred-init"),
					t = d("#bsd_" + a),
					n = t.closest(".bs-deferred-container");
				t.hasClass("bs-deferred-load-wrapper") && (t.hasClass("bs-deferred-loaded") ? l(!t.closest(".bs-pinning-block.pinned").length) : (n.removeClass("bs-tab-animated"), s.handleDeferredElements(t, {
					loadingHeight: i || void 0
				}, function() {
					n.addClass("bs-tab-animated"), t.addClass("bs-deferred-loaded");
					var e = n.find(".bs-pagination");
					!i || e.length && !e.hasClass("next_prev") || n.css("min-height", i), i = void 0
				})))
			})
		})
	}, t.prototype.handleDeferredElements = function(e, i, s) {
		var r = this;
		e.hasClass("bs-deferred-load-wrapper") || (e = e.find(".bs-deferred-load-wrapper")), e.each(function() {
			var a = d(this);
			if (!a.hasClass("deferred-html-exists")) {
				if (i = d.extend({
						loadingHeight: 100,
						loadingMinHeight: 0
					}, i), !a.find(".deferred-loading-container").length) {
					var e = d("<div></div>", {
							class: "deferred-loading-container",
							height: i.loadingHeight
						}),
						t = a.find(".bs-pagination");
					!i.loadingMinHeight || t && t.hasClass("more_btn") || e.css("min-height", i.loadingMinHeight), e.append(r.getLoadingRawHtml()), e.appendTo(a)
				}
				r.id = a.attr("id");
				var n = r.getAjaxProps("deferred");
				"object" == typeof o[r.id] && o[r.id].abort(), o[r.id] = d.ajax({
					url: n.ajax_url,
					type: "POST",
					dataType: "json",
					data: n
				}).done(function(e) {
					a.find(".deferred-loading-container").remove(), delete o[r.id], a.addClass("deferred-html-exists").append(e.output), r.handler_slider(a), s && s.call(a, e), l(!a.closest(".bs-pinning-block.pinned").length), r.settings.afterSuccessDeferredAjax.call(r, a, e)
				})
			}
		})
	}, t.prototype.getLoadingRawHtml = function() {
		return '<div class="bs-pagin-loading-wrapper">' + bs_pagination_loc.loading + "</div>"
	}, t.prototype.getAjaxProps = function(e) {
		var a, t = ("deferred" === (e = e || "pagination") ? this.deferredPrefix : this.prefix) + this.id;
		if (void 0 === window[t]) throw "pagination settings not set";
		switch ((a = jQuery.parseJSON(window[t]))._data = a.data, e.toLowerCase()) {
			case "pagination":
				a.action = "pagination_ajax", a.current_page = this.$link_el.parent().data("current-page") || 1, a.pagin_type = this.paginationStyle;
				break;
			case "deferred":
				a.action = "deferred_loading", a.current_page = 1
		}
		if (this.$link_el) {
			var n = this.$link_el.closest(".bs-pagination").data("bs-pagin-data");
			n && (a._data = n)
		}
		return a
	}, t.prototype.setNewPageNumber = function() {
		var e = this.$link_el.parent(),
			a = e.data("current-page") || 1;
		if (this.isPrevPage = this.$link_el.hasClass("prev"), this.isPrevPage) {
			if (a < 2) throw "Wrong page number!";
			a--
		} else a++;
		e.data("current-page", a)
	}, t.prototype.debug = function(e) {
		console.error(e)
	}, t.prototype.cacheThisStyle = function(e) {
		return "next_prev" === e
	}, t.prototype.getPaginationStyle = function() {
		for (var e, a = ["next_prev", "more_btn", "more_btn_infinity", "infinity"], t = this.$link_el.closest(".bs-pagination"), n = 0; n < a.length; n++)
			if (e = a[n], t.hasClass(e)) return e;
		return ""
	}, t.prototype.cache_get = function(e, a) {
		if (void 0 !== n[a] && void 0 !== n[a][e]) return n[a][e]
	}, t.prototype.cache_add = function(e, a, t) {
		void 0 === n[t] && (n[t] = {}), n[t][e] = a
	}, t.prototype.handle_event = function(e, a) {
		if ("object" != typeof e.events) return !1;
		if ("string" == typeof e.events[a]) {
			var t = e.events[a];
			"function" == typeof window[t] && window[t].call(this, e, a)
		}
	}, t.prototype.handle_response = function(e) {
		if (null !== e && "string" != typeof e.error) {
			var a = this.$link_el.closest(".bs-pagination"),
				t = a.prevAll(".bs-pagination-wrapper");
			e.data && a.data("bs-pagin-data", e.data);
			var n = a.closest(".bs-pinning-block.pinned").length;
			switch (this.handle_event(e, "before_append"), this.paginationStyle) {
				case "next_prev":
					t.html(e.output), this.handle_event(e, "after_append"), t.addClass("bs-animate").addClass(this.isPrevPage ? "bs-fadeInLeft" : "bs-fadeInRight").delay(400).queue(function(e) {
						d(this).removeClass("bs-animate bs-fadeInRight bs-fadeInLeft"), e()
					}), l(!n), void 0 !== e.label && a.find(".bs-pagination-label").html(e.label), a.find(".next")[e.have_next ? "removeClass" : "addClass"]("disabled"), a.find(".prev")[e.have_prev ? "removeClass" : "addClass"]("disabled");
					break;
				case "more_btn":
				case "more_btn_infinity":
				case "infinity":
					if ("string" == typeof e["add-to"]) {
						var i = d(e.output);
						"prepend" == e["add-type"] ? t.find(e["add-to"]).prepend(i) : t.find(e["add-to"]).append(i)
					} else i = t.append(e.output).children(":last");
					l(!n), this.handle_event(e, "after_append"), i.addClass("bs-animate bs-fadeInUp").delay(400).queue(function(e) {
						d(this).removeClass("bs-animate bs-fadeInUp"), e()
					}), "infinity" === this.paginationStyle ? e.have_next || this.$link_el.unbind("inview").remove() : e.have_next ? this.$link_el.removeClass("disabled") : (this.$link_el.addClass("disabled"), this.$link_el.find(".loaded").remove(), this.$link_el.find(".no-more").show()), setTimeout(function() {
						if (d.fn.hcSticky)
							for (var e = t[0], a = 0; a <= 8 && (e && e.parentElement); a++) {
								if (e.parentElement.classList.contains("wrapper-sticky")) {
									d(e).hcSticky("reinit");
									break
								}
								e = e.parentElement
							}
					}), t.closest("")
			}
			this.refreshLazyImages(), this.handle_event(e, "after_response")
		} else null === e ? this.debug("Error!") : this.debug(e.error)
	}, d.fn.Better_Ajax_Pagination = function(e) {
		return new t(e).handler_slider(), this.each(function() {
			(new t).init(this)
		})
	}, d.fn.Better_Deferred_Loading = function(e) {
		var a = new t(e);
		return a.bindDeferredEvents(e.context), a
	}
}(jQuery);

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
! function(a) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
	"use strict";
	var b = window.Slick || {};
	b = function() {
		function c(c, d) {
			var f, e = this;
			e.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: a(c),
				appendDots: a(c),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function(b, c) {
					return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnFocus: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3,
				slideMargin: 0,
				classPrefix: "slick-"
			}, e.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
		}
		var b = 0;
		return c
	}(), b.prototype.activateADA = function() {
		var a = this;
		a.$slideTrack.find("." + a.options.classPrefix + "active").attr({
			"aria-hidden": "false"
		}).find("a, input, button, select").attr({
			tabindex: "0"
		})
	}, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
		var e = this;
		if ("boolean" == typeof c) d = c, c = null;
		else if (c < 0 || c >= e.slideCount) return !1;
		e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
			a(c).attr("data-" + e.options.classPrefix + "index", b)
		}), e.$slidesCache = e.$slides, e.reinit()
	}, b.prototype.animateHeight = function() {
		var a = this;
		if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
			a.$list.animate({
				height: b
			}, a.options.speed)
		}
	}, b.prototype.animateSlide = function(b, c) {
		var d = {},
			e = this;
		if (e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1) e.options.vertical === !1 ? e.$slideTrack.animate({
			left: b
		}, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
			top: b
		}, e.options.speed, e.options.easing, c);
		else if (e.cssTransitions === !1) e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
			animStart: e.currentLeft
		}).animate({
			animStart: b
		}, {
			duration: e.options.speed,
			easing: e.options.easing,
			step: function(a) {
				a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
			},
			complete: function() {
				c && c.call()
			}
		});
		else {
			e.applyTransition();
			var f = e.options.rtl === !0 ? 1 : -1;
			b = Math.ceil(b + e.options.slideMargin * f), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
				e.disableTransition(), c.call()
			}, e.options.speed)
		}
	}, b.prototype.getNavTarget = function() {
		var b = this,
			c = b.options.asNavFor;
		return c && null !== c && (c = a(c).not(b.$slider)), c
	}, b.prototype.asNavFor = function(b) {
		var c = this,
			d = c.getNavTarget();
		null !== d && "object" == typeof d && d.each(function() {
			var c = a(this).slick("getSlick");
			c.unslicked || c.slideHandler(b, !0)
		})
	}, b.prototype.applyTransition = function(a) {
		var b = this,
			c = {};
		b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
	}, b.prototype.autoPlay = function() {
		var a = this;
		a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
	}, b.prototype.autoPlayClear = function() {
		var a = this;
		a.autoPlayTimer && clearInterval(a.autoPlayTimer)
	}, b.prototype.autoPlayIterator = function() {
		var a = this,
			b = a.currentSlide + a.options.slidesToScroll;
		a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
	}, b.prototype.buildArrows = function() {
		var b = this;
		b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass(b.options.classPrefix + "arrow"), b.$nextArrow = a(b.options.nextArrow).addClass(b.options.classPrefix + "arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass(b.options.classPrefix + "hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass(b.options.classPrefix + "hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass(b.options.classPrefix + "disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass(b.options.classPrefix + "hidden").attr({
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, b.prototype.buildDots = function() {
		var c, d, b = this;
		if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
			for (b.$slider.addClass(b.options.classPrefix + "dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
			b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass(b.options.classPrefix + "active").attr("aria-hidden", "false")
		}
	}, b.prototype.buildOut = function() {
		var b = this;
		if (b.$slides = b.$slider.children(b.options.slide + ":not(." + b.options.classPrefix + "cloned)").addClass(b.options.classPrefix + "slide"), b.options.slideMargin) {
			var c = b.options.rtl === !0 ? "right" : "left";
			b.$slides.css("margin-" + c, b.options.slideMargin)
		}
		b.slideCount = b.$slides.length, b.$slides.each(function(c, d) {
			a(d).attr("data-" + b.options.classPrefix + "index", c).data("originalStyling", a(d).attr("style") || "")
		}), b.$slider.addClass(b.options.classPrefix + "slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="' + b.options.classPrefix + 'track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="' + b.options.classPrefix + 'track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="' + b.options.classPrefix + 'list"/>').parent(), b.$slideTrack.css("opacity", 0), b.options.centerMode !== !0 && b.options.swipeToSlide !== !0 || (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass(b.options.classPrefix + "loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
	}, b.prototype.buildRows = function() {
		var b, c, d, e, f, g, h, a = this;
		if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
			for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; b < f; b++) {
				var i = document.createElement("div");
				for (c = 0; c < a.options.rows; c++) {
					var j = document.createElement("div");
					for (d = 0; d < a.options.slidesPerRow; d++) {
						var k = b * h + (c * a.options.slidesPerRow + d);
						g.get(k) && j.appendChild(g.get(k))
					}
					i.appendChild(j)
				}
				e.appendChild(i)
			}
			a.$slider.empty().append(e), a.$slider.children().children().children().css({
				width: 100 / a.options.slidesPerRow + "%",
				display: "inline-block"
			})
		}
	}, b.prototype.checkResponsive = function(b, c) {
		var e, f, g, d = this,
			h = !1,
			i = d.$slider.width(),
			j = window.innerWidth || a(window).width();
		if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
			f = null;
			for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
			null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
		}
	}, b.prototype.changeSlide = function(b, c) {
		var f, g, h, d = this,
			e = a(b.currentTarget);
		switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
			case "previous":
				g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
				break;
			case "next":
				g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
				break;
			case "index":
				var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
				d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
				break;
			default:
				return
		}
	}, b.prototype.checkNavigable = function(a) {
		var c, d, b = this;
		if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
		else
			for (var e in c) {
				if (a < c[e]) {
					a = d;
					break
				}
				d = c[e]
			}
		return a
	}, b.prototype.cleanUpEvents = function() {
		var b = this;
		b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
	}, b.prototype.cleanUpSlideEvents = function() {
		var b = this;
		b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
	}, b.prototype.cleanUpRows = function() {
		var b, a = this;
		a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
	}, b.prototype.clickHandler = function(a) {
		var b = this;
		b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
	}, b.prototype.destroy = function(b) {
		var c = this;
		c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a("." + c.options.classPrefix + "cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass(c.options.classPrefix + "disabled " + c.options.classPrefix + "arrow " + c.options.classPrefix + "hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass(c.options.classPrefix + "disabled " + c.options.classPrefix + "arrow " + c.options.classPrefix + "hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass(c.options.classPrefix + "slide " + c.options.classPrefix + "active " + c.options.classPrefix + "center " + c.options.classPrefix + "visible " + c.options.classPrefix + "current").removeAttr("aria-hidden").removeAttr("data-" + c.options.classPrefix + "index").each(function() {
			a(this).attr("style", a(this).data("originalStyling"))
		}), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass(c.options.classPrefix + "slider"), c.$slider.removeClass(c.options.classPrefix + "initialized"), c.$slider.removeClass(c.options.classPrefix + "dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
	}, b.prototype.disableTransition = function(a) {
		var b = this,
			c = {};
		c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
	}, b.prototype.fadeSlide = function(a, b) {
		var c = this;
		c.cssTransitions === !1 ? (c.$slides.eq(a).css({
			zIndex: c.options.zIndex
		}), c.$slides.eq(a).animate({
			opacity: 1
		}, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
			opacity: 1,
			zIndex: c.options.zIndex
		}), b && setTimeout(function() {
			c.disableTransition(a), b.call()
		}, c.options.speed))
	}, b.prototype.fadeSlideOut = function(a) {
		var b = this;
		b.cssTransitions === !1 ? b.$slides.eq(a).animate({
			opacity: 0,
			zIndex: b.options.zIndex - 2
		}, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
			opacity: 0,
			zIndex: b.options.zIndex - 2
		}))
	}, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
		var b = this;
		null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
	}, b.prototype.focusHandler = function() {
		var b = this;
		b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(." + b.options.classPrefix + "arrow)", function(c) {
			c.stopImmediatePropagation();
			var d = a(this);
			setTimeout(function() {
				b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
			}, 0)
		})
	}, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
		var a = this;
		return a.currentSlide
	}, b.prototype.getDotCount = function() {
		var a = this,
			b = 0,
			c = 0,
			d = 0;
		if (a.options.infinite === !0)
			for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		else if (a.options.centerMode === !0) d = a.slideCount;
		else if (a.options.asNavFor)
			for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
		return d - 1
	}, b.prototype.getLeft = function(a) {
		var c, d, f, b = this,
			e = 0;
		return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children("." + b.options.classPrefix + "slide").eq(a) : b.$slideTrack.children("." + b.options.classPrefix + "slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? (b.$slideTrack.width() - f[0].offsetLeft - f.width()) * -1 : 0 : f[0] ? f[0].offsetLeft * -1 : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children("." + b.options.classPrefix + "slide").eq(a) : b.$slideTrack.children("." + b.options.classPrefix + "slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? (b.$slideTrack.width() - f[0].offsetLeft - f.width()) * -1 : 0 : f[0] ? f[0].offsetLeft * -1 : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
	}, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
		var b = this;
		return b.options[a]
	}, b.prototype.getNavigableIndexes = function() {
		var e, a = this,
			b = 0,
			c = 0,
			d = [];
		for (a.options.infinite === !1 ? e = a.slideCount : (b = a.options.slidesToScroll * -1, c = a.options.slidesToScroll * -1, e = 2 * a.slideCount); b < e;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		return d
	}, b.prototype.getSlick = function() {
		return this
	}, b.prototype.getSlideCount = function() {
		var c, d, e, b = this;
		return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find("." + b.options.classPrefix + "slide").each(function(c, f) {
			if (f.offsetLeft - e + a(f).outerWidth() / 2 > b.swipeLeft * -1) return d = f, !1
		}), c = Math.abs(a(d).attr("data-" + b.options.classPrefix + "index") - b.currentSlide) || 1) : b.options.slidesToScroll
	}, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
		var c = this;
		c.changeSlide({
			data: {
				message: "index",
				index: parseInt(a)
			}
		}, b)
	}, b.prototype.init = function(b) {
		var c = this;
		a(c.$slider).hasClass(c.options.classPrefix + "initialized") || (a(c.$slider).addClass(c.options.classPrefix + "initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
	}, b.prototype.initADA = function() {
		var b = this;
		b.$slides.add(b.$slideTrack.find("." + b.options.classPrefix + "cloned")).attr({
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr({
			tabindex: "-1"
		}), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find("." + b.options.classPrefix + "cloned")).each(function(c) {
			a(this).attr("role", "option");
			var d = b.options.centerMode ? c : Math.floor(c / b.options.slidesToShow);
			b.options.dots === !0 && a(this).attr("aria-describedby", b.options.classPrefix + "-slide" + b.instanceUid + d)
		}), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
			a(this).attr({
				role: "presentation",
				"aria-selected": "false",
				"aria-controls": "navigation" + b.instanceUid + c,
				id: b.options.classPrefix + "-slide" + b.instanceUid + c
			})
		}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
	}, b.prototype.initArrowEvents = function() {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
			message: "previous"
		}, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
			message: "next"
		}, a.changeSlide))
	}, b.prototype.initDotEvents = function() {
		var b = this;
		b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
			message: "index"
		}, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
	}, b.prototype.initSlideEvents = function() {
		var b = this;
		b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
	}, b.prototype.initializeEvents = function() {
		var b = this;
		b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
			action: "start"
		}, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
			action: "move"
		}, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
			action: "end"
		}, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
			action: "end"
		}, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
	}, b.prototype.initUI = function() {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
	}, b.prototype.keyHandler = function(a) {
		var b = this;
		a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
			data: {
				message: b.options.rtl === !0 ? "next" : "previous"
			}
		}) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
			data: {
				message: b.options.rtl === !0 ? "previous" : "next"
			}
		}))
	}, b.prototype.lazyLoad = function() {
		function g(c) {
			a("img[data-lazy]", c).each(function() {
				var c = a(this),
					d = a(this).attr("data-lazy"),
					e = document.createElement("img");
				e.onload = function() {
					c.animate({
						opacity: 0
					}, 100, function() {
						c.attr("src", d).animate({
							opacity: 1
						}, 200, function() {
							c.removeAttr("data-lazy").removeClass(b.options.classPrefix + "loading")
						}), b.$slider.trigger("lazyLoaded", [b, c, d])
					})
				}, e.onerror = function() {
					c.removeAttr("data-lazy").removeClass(b.options.classPrefix + "loading").addClass(b.options.classPrefix + "lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
				}, e.src = d
			})
		}
		var c, d, e, f, b = this;
		b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find("." + b.options.classPrefix + "slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find("." + b.options.classPrefix + "slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find("." + b.options.classPrefix + "cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find("." + b.options.classPrefix + "cloned").slice(b.options.slidesToShow * -1), g(d))
	}, b.prototype.loadSlider = function() {
		var a = this;
		a.setPosition(), a.$slideTrack.css({
			opacity: 1
		}), a.$slider.removeClass(a.options.classPrefix + "loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
	}, b.prototype.next = b.prototype.slickNext = function() {
		var a = this;
		a.changeSlide({
			data: {
				message: "next"
			}
		})
	}, b.prototype.orientationChange = function() {
		var a = this;
		a.checkResponsive(), a.setPosition()
	}, b.prototype.pause = b.prototype.slickPause = function() {
		var a = this;
		a.autoPlayClear(), a.paused = !0
	}, b.prototype.play = b.prototype.slickPlay = function() {
		var a = this;
		a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
	}, b.prototype.postSlide = function(a) {
		var b = this;
		b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
	}, b.prototype.prev = b.prototype.slickPrev = function() {
		var a = this;
		a.changeSlide({
			data: {
				message: "previous"
			}
		})
	}, b.prototype.preventDefault = function(a) {
		a.preventDefault()
	}, b.prototype.progressiveLazyLoad = function(b) {
		b = b || 1;
		var e, f, g, c = this,
			d = a("img[data-lazy]", c.$slider);
		d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function() {
			e.attr("src", f).removeAttr("data-lazy").removeClass(c.options.classPrefix + "loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
		}, g.onerror = function() {
			b < 3 ? setTimeout(function() {
				c.progressiveLazyLoad(b + 1)
			}, 500) : (e.removeAttr("data-lazy").removeClass(c.options.classPrefix + "loading").addClass(c.options.classPrefix + "lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
		}, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
	}, b.prototype.refresh = function(b) {
		var d, e, c = this;
		e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
			currentSlide: d
		}), c.init(), b || c.changeSlide({
			data: {
				message: "index",
				index: d
			}
		}, !1)
	}, b.prototype.registerBreakpoints = function() {
		var c, d, e, b = this,
			f = b.options.responsive || null;
		if ("array" === a.type(f) && f.length) {
			b.respondTo = b.options.respondTo || "window";
			for (c in f)
				if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
					for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
					b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
				} b.breakpoints.sort(function(a, c) {
				return b.options.mobileFirst ? a - c : c - a
			})
		}
	}, b.prototype.reinit = function() {
		var b = this;
		if (b.$slides = b.$slideTrack.children(b.options.slide).addClass(b.options.classPrefix + "slide"), b.options.slideMargin) {
			var c = b.options.rtl === !0 ? "right" : "left";
			b.$slides.css("margin-" + c, b.options.slideMargin)
		}
		b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
	}, b.prototype.resize = function() {
		var b = this;
		a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
			b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
		}, 50))
	}, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
		var d = this;
		return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, !(d.slideCount < 1 || a < 0 || a > d.slideCount - 1) && (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
	}, b.prototype.setCSS = function(a) {
		var d, e, b = this,
			c = {};
		b.options.rtl === !0 && (a = -a);
		var f = b.options.rtl === !0 ? 1 : -1;
		d = "left" == b.positionProp ? Math.ceil(a + b.options.slideMargin * f) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
	}, b.prototype.setDimensions = function() {
		var a = this;
		a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
			padding: "0px " + a.options.centerPadding
		}) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
			padding: a.options.centerPadding + " 0px"
		})), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.slideWidth += a.options.slideMargin, a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children("." + a.options.classPrefix + "slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children("." + a.options.classPrefix + "slide").length)));
		var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
		a.options.variableWidth === !1 && a.$slideTrack.children("." + a.options.classPrefix + "slide").width(a.slideWidth - b)
	}, b.prototype.setFade = function() {
		var c, b = this;
		b.$slides.each(function(d, e) {
			c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
				position: "relative",
				right: c,
				top: 0,
				zIndex: b.options.zIndex - 2,
				opacity: 0
			}) : a(e).css({
				position: "relative",
				left: c,
				top: 0,
				zIndex: b.options.zIndex - 2,
				opacity: 0
			})
		}), b.$slides.eq(b.currentSlide).css({
			zIndex: b.options.zIndex - 1,
			opacity: 1
		})
	}, b.prototype.setHeight = function() {
		var a = this;
		if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
			a.$list.css("height", b)
		}
	}, b.prototype.setOption = b.prototype.slickSetOption = function() {
		var c, d, e, f, h, b = this,
			g = !1;
		if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
		else if ("multiple" === h) a.each(e, function(a, c) {
			b.options[a] = c
		});
		else if ("responsive" === h)
			for (d in f)
				if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
				else {
					for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
					b.options.responsive.push(f[d])
				} g && (b.unload(), b.reinit())
	}, b.prototype.setPosition = function() {
		var a = this;
		a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
	}, b.prototype.setProps = function() {
		var a = this,
			b = document.body.style;
		a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass(a.options.classPrefix + "vertical") : a.$slider.removeClass(a.options.classPrefix + "vertical"),
			void 0 === b.WebkitTransition && void 0 === b.MozTransition && void 0 === b.msTransition || a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
	}, b.prototype.setSlideClasses = function(a) {
		var c, d, e, f, b = this;
		d = b.$slider.find("." + b.options.classPrefix + "slide").removeClass(b.options.classPrefix + "active " + b.options.classPrefix + "center " + b.options.classPrefix + "current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass(b.options.classPrefix + "current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass(b.options.classPrefix + "active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass(b.options.classPrefix + "active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass(b.options.classPrefix + "center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass(b.options.classPrefix + "center")), b.$slides.eq(a).addClass(b.options.classPrefix + "center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass(b.options.classPrefix + "active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass(b.options.classPrefix + "active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass(b.options.classPrefix + "active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass(b.options.classPrefix + "active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
	}, b.prototype.setupInfinite = function() {
		var c, d, e, b = this;
		if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
			for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-" + b.options.classPrefix + "index", d - b.slideCount).prependTo(b.$slideTrack).addClass(b.options.classPrefix + "cloned");
			for (c = 0; c < e; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-" + b.options.classPrefix + "index", d + b.slideCount).appendTo(b.$slideTrack).addClass(b.options.classPrefix + "cloned");
			b.$slideTrack.find("." + b.options.classPrefix + "cloned").find("[id]").each(function() {
				a(this).attr("id", "")
			})
		}
	}, b.prototype.interrupt = function(a) {
		var b = this;
		a || b.autoPlay(), b.interrupted = a
	}, b.prototype.selectHandler = function(b) {
		var c = this,
			d = a(b.target).is("." + c.options.classPrefix + "slide") ? a(b.target) : a(b.target).parents("." + c.options.classPrefix + "slide"),
			e = parseInt(d.attr("data-" + c.options.classPrefix + "index"));
		return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
	}, b.prototype.slideHandler = function(a, b, c) {
		var d, e, f, g, j, h = null,
			i = this;
		if (b = b || !1, (i.animating !== !0 || i.options.waitForAnimate !== !0) && !(i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow)) return b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (a < 0 || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
			i.postSlide(d)
		}) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (a < 0 || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
			i.postSlide(d)
		}) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = d < 0 ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
			i.postSlide(e)
		})) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
			i.postSlide(e)
		}) : i.postSlide(e)))
	}, b.prototype.startLoad = function() {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass(a.options.classPrefix + "loading")
	}, b.prototype.swipeDirection = function() {
		var a, b, c, d, e = this;
		return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), d < 0 && (d = 360 - Math.abs(d)), d <= 45 && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : d <= 360 && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && d <= 225 ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && d <= 135 ? "down" : "up" : "vertical"
	}, b.prototype.swipeEnd = function(a) {
		var c, d, b = this;
		if (b.dragging = !1, b.interrupted = !1, b.shouldClick = !(b.touchObject.swipeLength > 10), void 0 === b.touchObject.curX) return !1;
		if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
			switch (d = b.swipeDirection()) {
				case "left":
				case "down":
					c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
					break;
				case "right":
				case "up":
					c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
			}
			"vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
		} else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
	}, b.prototype.swipeHandler = function(a) {
		var b = this;
		if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && a.type.indexOf("mouse") !== -1)) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
			case "start":
				b.swipeStart(a);
				break;
			case "move":
				b.swipeMove(a);
				break;
			case "end":
				b.swipeEnd(a)
		}
	}, b.prototype.swipeMove = function(a) {
		var d, e, f, g, h, b = this;
		return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !(!b.dragging || h && 1 !== h.length) && (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade !== !0 && b.options.touchMove !== !1 && (b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft))) : void 0)
	}, b.prototype.swipeStart = function(a) {
		var c, b = this;
		return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
	}, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
		var a = this;
		null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
	}, b.prototype.unload = function() {
		var b = this;
		a("." + b.options.classPrefix + "cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass(b.options.classPrefix + "slide " + b.options.classPrefix + "active " + b.options.classPrefix + "visible " + b.options.classPrefix + "current").attr("aria-hidden", "true").css("width", "")
	}, b.prototype.unslick = function(a) {
		var b = this;
		b.$slider.trigger("unslick", [b, a]), b.destroy()
	}, b.prototype.updateArrows = function() {
		var b, a = this;
		b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass(a.options.classPrefix + "disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass(a.options.classPrefix + "disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass(a.options.classPrefix + "disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass(a.options.classPrefix + "disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass(a.options.classPrefix + "disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass(a.options.classPrefix + "disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass(a.options.classPrefix + "disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass(a.options.classPrefix + "disabled").attr("aria-disabled", "false")))
	}, b.prototype.updateDots = function() {
		var a = this;
		null !== a.$dots && (a.$dots.find("li").removeClass(a.options.classPrefix + "active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass(a.options.classPrefix + "active").attr("aria-hidden", "false"))
	}, b.prototype.visibility = function() {
		var a = this;
		a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
	}, a.fn.slick = function() {
		var f, g, a = this,
			c = arguments[0],
			d = Array.prototype.slice.call(arguments, 1),
			e = a.length;
		for (f = 0; f < e; f++)
			if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
		return a
	}
});

jQuery(function(e) {
	function t(e) {
		return a().indexOf(e.toString()) > -1
	}

	function a() {
		var e = s.getItem("better-review-user-rating");
		return e ? e.split(",") : []
	}

	function n(e) {
		var t = a();
		t.push(e.toString());
		s.setItem("better-review-user-rating", t, 217728e3, betterReviewsLoc.cp)
	}
	var s = {
			getItem: function(e) {
				return e ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null
			},
			setItem: function(e, t, a, n, s, r) {
				if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
				var i = "";
				if (a) switch (a.constructor) {
					case Number:
						i = a === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + a;
						break;
					case String:
						i = "; expires=" + a;
						break;
					case Date:
						i = "; expires=" + a.toUTCString()
				}
				return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + i + (s ? "; domain=" + s : "") + (n ? "; path=" + n : "") + (r ? "; secure" : ""), !0
			},
			removeItem: function(e, t, a) {
				return !!this.hasItem(e) && (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (a ? "; domain=" + a : "") + (t ? "; path=" + t : ""), !0)
			},
			hasItem: function(e) {
				return !!e && new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
			},
			keys: function() {
				for (var e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), t = e.length, a = 0; a < t; a++) e[a] = decodeURIComponent(e[a]);
				return e
			}
		},
		r = e("body").hasClass("rtl");
	e(".readers-ratings").on("mousemove", ".rating-stars:not(.disable)", function(t) {
		var a = e(this),
			n = (a.width() - 2) / 100,
			s = Math.ceil(r ? e(this).offset().left + e(this).width() - t.pageX : t.pageX - e(this).offset().left),
			i = Math.min(100, Math.ceil(s / n));
		a.children("span").width(i + "%").data("rate", i)
	}).on("click", ".rating-stars:not(.disable)", function() {
		var t = e(this),
			a = t.closest(".betterstudio-review");
		t.addClass("disable"), t.fadeOut(150, function() {
			t.parent().append('<i class="fa fa-spinner fa-spin loading" style="margin: 0 50px;"></i>')
		}), e.ajax({
			url: betterReviewsLoc.ajax_url,
			type: "POST",
			dataType: "json",
			data: {
				action: "better-review-rating",
				post_id: t.data("post-id"),
				rating: t.children("span").data("rate")
			}
		}).done(function(s) {
			if (s.success) n(t.data("post-id")), t.children("span").width(s.data.vote + "%").data("rate", s.data.vote), e(".ratings-results .number", a).html(s.data.vote + "%"), t.fadeIn(150), e(".total-votes .number", a).html(s.data.votes_count);
			else {
				var r = e("<span />", {
					class: "error-message"
				}).html(s.data.message);
				r.appendTo(t.parent()), r.delay(4e3).fadeOut(150, function() {
					t.fadeIn(150), t.removeClass("disable")
				})
			}
		}).always(function() {
			t.parent().find(".loading").remove()
		})
	}), e(".readers-ratings .rating-stars:not(.disable)").each(function() {
		var a = e(this);
		t(a.data("post-id")) && a.addClass("disable")
	})
});

jQuery(function(s) {
	var l = s(document.body).hasClass("rtl");
	s(".bs-smart-list.bssl-style-1 .bssl-items").each(function(a, i) {
		s(i).slick({
			sliderControlDots: "off",
			prevArrow: '<a rel="prev" class="bssl-nav-btn-big prev"><i class="fa fa-angle-' + (l ? "right" : "left") + '" aria-hidden="true"></i> ' + bs_smart_lists_loc.translations.nav_prev + "</a>",
			nextArrow: '<a rel="next" class="bssl-nav-btn-big next">' + bs_smart_lists_loc.translations.nav_next + ' <i class="fa fa-angle-' + (l ? "left" : "right") + '" aria-hidden="true"></i></a>',
			rtl: l,
			slideMargin: 25,
			slide: ".bs-slider-item",
			appendArrows: s(i).siblings(".bssl-control-nav"),
			classPrefix: "bs-slider-",
			adaptiveHeight: !0,
			accessibility: !1
		})
	}), s(".bs-smart-list.bssl-style-2 .bssl-items").each(function(a, i) {
		s(i).slick({
			sliderControlDots: "off",
			prevArrow: '<a rel="prev" class="bssl-nav-btn-big prev"><i class="fa fa-angle-' + (l ? "right" : "left") + '" aria-hidden="true"></i> ' + bs_smart_lists_loc.translations.nav_prev + "</a>",
			nextArrow: '<a rel="next" class="bssl-nav-btn-big next">' + bs_smart_lists_loc.translations.nav_next + ' <i class="fa fa-angle-' + (l ? "left" : "right") + '" aria-hidden="true"></i></a>',
			rtl: l,
			slideMargin: 25,
			slide: ".bs-slider-item",
			appendArrows: s(i).siblings(".bssl-control-nav"),
			classPrefix: "bs-slider-",
			adaptiveHeight: !0,
			accessibility: !1
		})
	}), s(".bs-smart-list.bssl-style-3 .bssl-items").each(function(a, i) {
		s(i).slick({
			sliderControlDots: "off",
			prevArrow: '<a rel="prev" class="bssl-nav-btn-big prev"><i class="fa fa-angle-' + (l ? "right" : "left") + '" aria-hidden="true"></i> ' + bs_smart_lists_loc.translations.nav_prev + "</a>",
			nextArrow: '<a rel="next" class="bssl-nav-btn-big next">' + bs_smart_lists_loc.translations.nav_next + ' <i class="fa fa-angle-' + (l ? "left" : "right") + '" aria-hidden="true"></i></a>',
			rtl: l,
			slideMargin: 25,
			slide: ".bs-slider-item",
			appendArrows: s(i).siblings(".bssl-control-nav"),
			classPrefix: "bs-slider-",
			adaptiveHeight: !0,
			accessibility: !1
		})
	}), s(".bs-smart-list.bssl-style-4 .bssl-items").each(function(a, i) {
		s(i).slick({
			sliderControlDots: "off",
			prevArrow: '<a rel="prev" class="bssl-outline bssl-nav-btn-big prev"><i class="fa fa-angle-' + (l ? "right" : "left") + '" aria-hidden="true"></i> ' + bs_smart_lists_loc.translations.nav_prev + "</a>",
			nextArrow: '<a rel="next" class="bssl-outline bssl-nav-btn-big next">' + bs_smart_lists_loc.translations.nav_next + ' <i class="fa fa-angle-' + (l ? "left" : "right") + '" aria-hidden="true"></i></a>',
			rtl: l,
			slideMargin: 25,
			slide: ".bs-slider-item",
			appendArrows: s(i).siblings(".bssl-control-nav"),
			classPrefix: "bs-slider-",
			adaptiveHeight: !0,
			accessibility: !1
		})
	}), s(".bs-smart-list.bssl-style-5 .bssl-items").each(function(a, i) {
		s(i).slick({
			sliderControlDots: "off",
			prevArrow: '<a rel="prev" class="bssl-nav-btn-big prev"><i class="fa fa-angle-' + (l ? "right" : "left") + '" aria-hidden="true"></i></a>',
			nextArrow: '<a rel="next" class="bssl-nav-btn-big next"><i class="fa fa-angle-' + (l ? "left" : "right") + '" aria-hidden="true"></i></a>',
			rtl: l,
			slideMargin: 25,
			slide: ".bs-slider-item",
			appendArrows: s(i).siblings(".bssl-control-nav"),
			classPrefix: "bs-slider-",
			adaptiveHeight: !0,
			accessibility: !1
		})
	}), s(".bs-smart-list.bssl-style-15 .bssl-items").each(function(a, i) {
		s(i).slick({
			sliderControlDots: "off",
			prevArrow: '<a rel="prev" class="bssl-nav-btn-big prev"><i class="fa fa-angle-' + (l ? "right" : "left") + '" aria-hidden="true"></i> ' + bs_smart_lists_loc.translations.nav_prev + "</a>",
			nextArrow: '<a rel="next" class="bssl-nav-btn-big next">' + bs_smart_lists_loc.translations.nav_next + ' <i class="fa fa-angle-' + (l ? "left" : "right") + '" aria-hidden="true"></i></a>',
			rtl: l,
			slideMargin: 25,
			slide: ".bs-slider-item",
			appendArrows: s(i).siblings(".bssl-control-nav"),
			classPrefix: "bs-slider-",
			adaptiveHeight: !0,
			accessibility: !1
		})
	}), s(".bs-smart-list.bssl-style-16 .bssl-control-nav select").on("change", function() {
		window.location = s(this).val()
	}), s(".bs-smart-list.bssl-style-17 .bssl-control-nav .bssl-select").on("click", function() {
		s(this).toggleClass("open")
	}), s(".bs-smart-list.bssl-style-17 .bssl-control-nav .bssl-select li").on("click", function(l) {
		l.preventDefault(), window.location = s(this).data("url")
	}), s(".bs-smart-list.bssl-style-18 .bssl-items").each(function(a, i) {
		s(i).slick({
			sliderControlDots: "off",
			prevArrow: '<a rel="prev" class="bssl-nav-btn-big prev"><i class="fa fa-angle-' + (l ? "right" : "left") + '" aria-hidden="true"></i></a>',
			nextArrow: '<a rel="next" class="bssl-nav-btn-big next"><i class="fa fa-angle-' + (l ? "left" : "right") + '" aria-hidden="true"></i></a>',
			rtl: l,
			slide: ".bs-slider-item",
			appendArrows: s(i).siblings(".bssl-control-nav"),
			classPrefix: "bs-slider-",
			adaptiveHeight: !0,
			accessibility: !1,
			fade: !0
		}), s(i).on("afterChange", function(l, a, i) {
			var t = bs_smart_lists_loc.translations.trans_x_of_y,
				e = s(this).closest(".bs-smart-list").find(".bssl-items-title .bssl-count");
			t = (t = t.replace("%1$s", i + 1)).replace("%2$s", e.data("all")), e.html(t)
		})
	}), s(".bs-smart-list.bssl-style-19 .bssl-big-items").each(function(a, i) {
		s(i).slick({
			sliderControlDots: "off",
			prevArrow: '<a rel="prev" class="bssl-nav-btn-big prev"><i class="fa fa-angle-' + (l ? "right" : "left") + '" aria-hidden="true"></i></a>',
			nextArrow: '<a rel="next" class="bssl-nav-btn-big next"><i class="fa fa-angle-' + (l ? "left" : "right") + '" aria-hidden="true"></i></a>',
			rtl: l,
			slide: ".bs-slider-item",
			appendArrows: s(i).siblings(".bssl-control-nav"),
			classPrefix: "bs-slider-",
			adaptiveHeight: !0,
			accessibility: !1,
			fade: !0
		})
	}), s(".bs-smart-list.bssl-style-20 .bssl-big-items").each(function(a, i) {
		s(i).slick({
			sliderControlDots: "off",
			prevArrow: '<a rel="prev" class="bssl-nav-btn-big prev"><i class="fa fa-angle-' + (l ? "right" : "left") + '" aria-hidden="true"></i></a>',
			nextArrow: '<a rel="next" class="bssl-nav-btn-big next"><i class="fa fa-angle-' + (l ? "left" : "right") + '" aria-hidden="true"></i></a>',
			rtl: l,
			slide: ".bs-slider-item",
			appendArrows: s(i).siblings(".bssl-control-nav"),
			classPrefix: "bs-slider-",
			adaptiveHeight: !0,
			accessibility: !1,
			fade: !0
		})
	})
});

(function defineMustache(global, factory) {
	if (typeof exports === "object" && exports && typeof exports.nodeName !== "string") {
		factory(exports)
	} else if (typeof define === "function" && define.amd) {
		define(["exports"], factory)
	} else {
		global.Mustache = {};
		factory(global.Mustache)
	}
})(this, function mustacheFactory(mustache) {
	var objectToString = Object.prototype.toString;
	var isArray = Array.isArray || function isArrayPolyfill(object) {
		return objectToString.call(object) === "[object Array]"
	};

	function isFunction(object) {
		return typeof object === "function"
	}

	function typeStr(obj) {
		return isArray(obj) ? "array" : typeof obj
	}

	function escapeRegExp(string) {
		return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
	}

	function hasProperty(obj, propName) {
		return obj != null && typeof obj === "object" && propName in obj
	}
	var regExpTest = RegExp.prototype.test;

	function testRegExp(re, string) {
		return regExpTest.call(re, string)
	}
	var nonSpaceRe = /\S/;

	function isWhitespace(string) {
		return !testRegExp(nonSpaceRe, string)
	}
	var entityMap = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#39;",
		"/": "&#x2F;",
		"`": "&#x60;",
		"=": "&#x3D;"
	};

	function escapeHtml(string) {
		return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
			return entityMap[s]
		})
	}
	var whiteRe = /\s*/;
	var spaceRe = /\s+/;
	var equalsRe = /\s*=/;
	var curlyRe = /\s*\}/;
	var tagRe = /#|\^|\/|>|\{|&|=|!/;

	function parseTemplate(template, tags) {
		if (!template) return [];
		var sections = [];
		var tokens = [];
		var spaces = [];
		var hasTag = false;
		var nonSpace = false;

		function stripSpace() {
			if (hasTag && !nonSpace) {
				while (spaces.length) delete tokens[spaces.pop()]
			} else {
				spaces = []
			}
			hasTag = false;
			nonSpace = false
		}
		var openingTagRe, closingTagRe, closingCurlyRe;

		function compileTags(tagsToCompile) {
			if (typeof tagsToCompile === "string") tagsToCompile = tagsToCompile.split(spaceRe, 2);
			if (!isArray(tagsToCompile) || tagsToCompile.length !== 2) throw new Error("Invalid tags: " + tagsToCompile);
			openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*");
			closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1]));
			closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]))
		}
		compileTags(tags || mustache.tags);
		var scanner = new Scanner(template);
		var start, type, value, chr, token, openSection;
		while (!scanner.eos()) {
			start = scanner.pos;
			value = scanner.scanUntil(openingTagRe);
			if (value) {
				for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
					chr = value.charAt(i);
					if (isWhitespace(chr)) {
						spaces.push(tokens.length)
					} else {
						nonSpace = true
					}
					tokens.push(["text", chr, start, start + 1]);
					start += 1;
					if (chr === "\n") stripSpace()
				}
			}
			if (!scanner.scan(openingTagRe)) break;
			hasTag = true;
			type = scanner.scan(tagRe) || "name";
			scanner.scan(whiteRe);
			if (type === "=") {
				value = scanner.scanUntil(equalsRe);
				scanner.scan(equalsRe);
				scanner.scanUntil(closingTagRe)
			} else if (type === "{") {
				value = scanner.scanUntil(closingCurlyRe);
				scanner.scan(curlyRe);
				scanner.scanUntil(closingTagRe);
				type = "&"
			} else {
				value = scanner.scanUntil(closingTagRe)
			}
			if (!scanner.scan(closingTagRe)) throw new Error("Unclosed tag at " + scanner.pos);
			token = [type, value, start, scanner.pos];
			tokens.push(token);
			if (type === "#" || type === "^") {
				sections.push(token)
			} else if (type === "/") {
				openSection = sections.pop();
				if (!openSection) throw new Error('Unopened section "' + value + '" at ' + start);
				if (openSection[1] !== value) throw new Error('Unclosed section "' + openSection[1] + '" at ' + start)
			} else if (type === "name" || type === "{" || type === "&") {
				nonSpace = true
			} else if (type === "=") {
				compileTags(value)
			}
		}
		openSection = sections.pop();
		if (openSection) throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
		return nestTokens(squashTokens(tokens))
	}

	function squashTokens(tokens) {
		var squashedTokens = [];
		var token, lastToken;
		for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
			token = tokens[i];
			if (token) {
				if (token[0] === "text" && lastToken && lastToken[0] === "text") {
					lastToken[1] += token[1];
					lastToken[3] = token[3]
				} else {
					squashedTokens.push(token);
					lastToken = token
				}
			}
		}
		return squashedTokens
	}

	function nestTokens(tokens) {
		var nestedTokens = [];
		var collector = nestedTokens;
		var sections = [];
		var token, section;
		for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
			token = tokens[i];
			switch (token[0]) {
				case "#":
				case "^":
					collector.push(token);
					sections.push(token);
					collector = token[4] = [];
					break;
				case "/":
					section = sections.pop();
					section[5] = token[2];
					collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
					break;
				default:
					collector.push(token)
			}
		}
		return nestedTokens
	}

	function Scanner(string) {
		this.string = string;
		this.tail = string;
		this.pos = 0
	}
	Scanner.prototype.eos = function eos() {
		return this.tail === ""
	};
	Scanner.prototype.scan = function scan(re) {
		var match = this.tail.match(re);
		if (!match || match.index !== 0) return "";
		var string = match[0];
		this.tail = this.tail.substring(string.length);
		this.pos += string.length;
		return string
	};
	Scanner.prototype.scanUntil = function scanUntil(re) {
		var index = this.tail.search(re),
			match;
		switch (index) {
			case -1:
				match = this.tail;
				this.tail = "";
				break;
			case 0:
				match = "";
				break;
			default:
				match = this.tail.substring(0, index);
				this.tail = this.tail.substring(index)
		}
		this.pos += match.length;
		return match
	};

	function Context(view, parentContext) {
		this.view = view;
		this.cache = {
			".": this.view
		};
		this.parent = parentContext
	}
	Context.prototype.push = function push(view) {
		return new Context(view, this)
	};
	Context.prototype.lookup = function lookup(name) {
		var cache = this.cache;
		var value;
		if (cache.hasOwnProperty(name)) {
			value = cache[name]
		} else {
			var context = this,
				names, index, lookupHit = false;
			while (context) {
				if (name.indexOf(".") > 0) {
					value = context.view;
					names = name.split(".");
					index = 0;
					while (value != null && index < names.length) {
						if (index === names.length - 1) lookupHit = hasProperty(value, names[index]);
						value = value[names[index++]]
					}
				} else {
					value = context.view[name];
					lookupHit = hasProperty(context.view, name)
				}
				if (lookupHit) break;
				context = context.parent
			}
			cache[name] = value
		}
		if (isFunction(value)) value = value.call(this.view);
		return value
	};

	function Writer() {
		this.cache = {}
	}
	Writer.prototype.clearCache = function clearCache() {
		this.cache = {}
	};
	Writer.prototype.parse = function parse(template, tags) {
		var cache = this.cache;
		var tokens = cache[template];
		if (tokens == null) tokens = cache[template] = parseTemplate(template, tags);
		return tokens
	};
	Writer.prototype.render = function render(template, view, partials) {
		var tokens = this.parse(template);
		var context = view instanceof Context ? view : new Context(view);
		return this.renderTokens(tokens, context, partials, template)
	};
	Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate) {
		var buffer = "";
		var token, symbol, value;
		for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
			value = undefined;
			token = tokens[i];
			symbol = token[0];
			if (symbol === "#") value = this.renderSection(token, context, partials, originalTemplate);
			else if (symbol === "^") value = this.renderInverted(token, context, partials, originalTemplate);
			else if (symbol === ">") value = this.renderPartial(token, context, partials, originalTemplate);
			else if (symbol === "&") value = this.unescapedValue(token, context);
			else if (symbol === "name") value = this.escapedValue(token, context);
			else if (symbol === "text") value = this.rawValue(token);
			if (value !== undefined) buffer += value
		}
		return buffer
	};
	Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate) {
		var self = this;
		var buffer = "";
		var value = context.lookup(token[1]);

		function subRender(template) {
			return self.render(template, context, partials)
		}
		if (!value) return;
		if (isArray(value)) {
			for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
				buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate)
			}
		} else if (typeof value === "object" || typeof value === "string" || typeof value === "number") {
			buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate)
		} else if (isFunction(value)) {
			if (typeof originalTemplate !== "string") throw new Error("Cannot use higher-order sections without the original template");
			value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
			if (value != null) buffer += value
		} else {
			buffer += this.renderTokens(token[4], context, partials, originalTemplate)
		}
		return buffer
	};
	Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate) {
		var value = context.lookup(token[1]);
		if (!value || isArray(value) && value.length === 0) return this.renderTokens(token[4], context, partials, originalTemplate)
	};
	Writer.prototype.renderPartial = function renderPartial(token, context, partials) {
		if (!partials) return;
		var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
		if (value != null) return this.renderTokens(this.parse(value), context, partials, value)
	};
	Writer.prototype.unescapedValue = function unescapedValue(token, context) {
		var value = context.lookup(token[1]);
		if (value != null) return value
	};
	Writer.prototype.escapedValue = function escapedValue(token, context) {
		var value = context.lookup(token[1]);
		if (value != null) return mustache.escape(value)
	};
	Writer.prototype.rawValue = function rawValue(token) {
		return token[1]
	};
	mustache.name = "mustache.js";
	mustache.version = "2.2.1";
	mustache.tags = ["{{", "}}"];
	var defaultWriter = new Writer;
	mustache.clearCache = function clearCache() {
		return defaultWriter.clearCache()
	};
	mustache.parse = function parse(template, tags) {
		return defaultWriter.parse(template, tags)
	};
	mustache.render = function render(template, view, partials) {
		if (typeof template !== "string") {
			throw new TypeError('Invalid template! Template should be a "string" ' + 'but "' + typeStr(template) + '" was given as the first ' + "argument for mustache#render(template, view, partials)")
		}
		return defaultWriter.render(template, view, partials)
	};
	mustache.to_html = function to_html(template, view, partials, send) {
		var result = mustache.render(template, view, partials);
		if (isFunction(send)) {
			send(result)
		} else {
			return result
		}
	};
	mustache.escape = escapeHtml;
	mustache.Scanner = Scanner;
	mustache.Context = Context;
	mustache.Writer = Writer
});


/***
 *  BetterFramework is BetterStudio framework for themes and plugins.
 *
 *  ______      _   _             ______                                           _
 *  | ___ \    | | | |            |  ___|                                         | |
 *  | |_/ / ___| |_| |_ ___ _ __  | |_ _ __ __ _ _ __ ___   _____      _____  _ __| | __
 *  | ___ \/ _ \ __| __/ _ \ '__| |  _| '__/ _` | '_ ` _ \ / _ \ \ /\ / / _ \| '__| |/ /
 *  | |_/ /  __/ |_| ||  __/ |    | | | | | (_| | | | | | |  __/\ V  V / (_) | |  |   <
 *  \____/ \___|\__|\__\___|_|    \_| |_|  \__,_|_| |_| |_|\___| \_/\_/ \___/|_|  |_|\_\
 *
 *  Copyright © 2017 Better Studio
 *
 *
 *  Our portfolio is here: https://betterstudio.com/
 *
 *  \--> BetterStudio, 2017 <--/
 */
! function(t) {
	"use strict";
	var n = 0,
		s = [],
		e = function(n) {
			function s() {
				return !0
			}
			this.options = t.extend(!0, {
				template: "default",
				skin: "skin-1",
				initialZIndex: 0,
				show: !0,
				content: {},
				close_button: !0,
				button_position: "right",
				animations: {
					delay: 600,
					open: "bs-animate bs-fadeInDown",
					close: "bs-animate bs-fadeOutUp"
				},
				buttons: {},
				events: {
					before_click: s,
					clicked: s,
					handle_keyup: function(t, n, s) {
						return s
					}
				},
				styles: {
					modal: "",
					container: ""
				},
				modalId: "modal-" + Math.floor(999 * Math.random()),
				modalClass: "",
				destroyHtml: !0,
				is_vertical_center: !0
			}, n), this.$modal = !1, this.$overlay = !1, this.timerTimeouts = [], this.$document = !1, this.modalID = !1, this.visible = !1, this.init()
		};
	e.prototype = {
		templates: {
			"default": '\n<div class="bs-modal-default"  {{#inline_style}} style="{{inline_style}}" {{/inline_style}}>\n    {{#close_button}}\n    <a href="#" class="bs-close-modal">\n        <i class="fa fa-times" aria-hidden="true"></i>\n    </a>\n    {{/close_button}}\n    <div class="bs-modal-header-wrapper bs-modal-clearfix">\n        <h2 class="bs-modal-header">\n            {{#icon}}\n            <i class="fa {{icon}}"></i>\n            {{/icon}}\n\n            {{header}}\n        </h2>\n    </div>\n\n    <div class="bs-modal-body">\n        {{{bs_body}}}\n    </div>\n\n    {{#bs_buttons}}\n    <div class="bs-modal-bottom bs-modal-buttons-{{btn_position}} bs-modal-clearfix">\n        {{{bs_buttons}}}\n    </div>\n    {{/bs_buttons}}\n</div>',
			single_image: '\n<div class="bs-modal-default" {{#inline_style}} style="{{inline_style}}" {{/inline_style}}>\n    {{#close_button}}\n    <a href="#" class="bs-close-modal">\n        <i class="fa fa-times" aria-hidden="true"></i>\n    </a>\n    {{/close_button}}\n    <div class="bs-modal-header-wrapper bs-modal-clearfix">\n        <h2 class="bs-modal-header">\n            {{#icon}}\n            <i class="fa {{icon}}"></i>\n            {{/icon}}\n\n            {{header}}\n        </h2>\n    </div>\n\n    <div class="bs-modal-body bf-clearfix">\n        \n        <div class="bs-modal-image bf-clearfix" {{#image_align}} style="float:{{image_align}}"{{/image_align}}>\n\n            <img src="{{image_src}}" {{#image_style}} style="{{image_style}}"{{/image_style}}/>\n            \n            {{#image_caption}}\n            <div class="bs-modal-image-caption">\n                {{image_caption}}\n            </div>\n            {{/image_caption}}\n        </div>\n        {{{bs_body}}}\n    </div>\n\n    {{#bs_buttons}}\n    <div class="bs-modal-bottom bs-modal-buttons-left bs-modal-clearfix">\n        {{{bs_buttons}}}\n        \n        {{#checkbox}}\n        <div class="bs-modal-checkbox">\n            <input type="checkbox" name="include_content" class="toggle-content" value="1" checked="checked"> <label class="checkbox-label">{{checkbox_label}}</label>\n        </div>\n        {{/checkbox}}\n    </div>\n    {{/bs_buttons}}\n</div>'
		},
		skins: {
			"skin-1": '<div class="bs-modal-description">\n   {{#title}} <h3 class="bs-modal-title">{{title}}</h3>\n   {{/title}} \n    {{{body}}}\n</div>',
			loading: ' <div class="bs-modal-loading bs-modal-loading-1">\n    <img src="data:image/false;base64,R0lGODlhIAAIAPEAALy8vHh4eP///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hhPcHRpbWl6ZWQgd2l0aCBlemdpZi5jb20AIfkEBQsAAQAsAAAAACAACAAAAiGEb6GBuNyiWxK8Wq/UuHFPdaCSheLxTeSJmiPEWq4KNwUAIfkEBQsAAAAsAAAAAAgACAAAAgaMj6nL7V0AIfkEBQsAAgAsAAAAABQACAAAAhuEb6IS7Y3QYs/FM6u9IOvAdcsHcp4WnlU6fgUAIfkEBQsAAgAsDAAAABQACAAAAhuEb6IS7Y3QYs/FM6u9IOvAdcsHcp4WnlU6fgUAOw==" />\n\n     <div class="bs-modal-loading-heading">\n         <h4>{{loading_heading}}</h4>\n     </div>\n </div>\n',
			"loading-2": ' <div class="bs-modal-loading">\n     <div class="la-line-scale-pulse-out-rapid la-2x">\n         <div></div>\n         <div></div>\n         <div></div>\n         <div></div>\n         <div></div>\n     </div>\n     \n     <div class="bs-modal-loading-heading">\n         <h4>{{loading_heading}}</h4>\n     </div>\n</div>\n',
			success: ' <div class="bs-modal-success">\n     \n     <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>\n     \n     <div class="bs-modal-bs-modal-success-heading">\n         <h4>{{success_heading}}</h4>\n     </div>\n</div>\n'
		},
		button_struct: '<a {{#href}}href="{{href}}"{{/href}} {{#btn_classes}}class="{{btn_classes}}"{{/btn_classes}} id="{{id}}">{{{label}}}</a>',
		debug: function(t) {
			console.error(t)
		},
		get_html: function(n, s, e) {
			if ("undefined" == typeof this.templates[n]) return this.debug("invalid template name"), !1;
			if ("undefined" == typeof this.skins[s]) return this.debug("invalid skin"), !1;
			Mustache.parse(this.templates[n]);
			Mustache.parse(this.skins[s]);
			var i = Mustache.render(this.skins[s], e),
				o = {
					bs_body: i,
					bs_buttons: this.generate_buttons(),
					close_button: this.options.close_button,
					inline_style: this.options.styles.modal,
					btn_position: this.options.button_position
				};
			return this.handle_event("prepare_html", this, n, s, e), Mustache.render(this.templates[n], t.extend(e, o))
		},
		before_append_html: function(t) {
			this.handle_event("before_append_html", this, t)
		},
		after_append_html: function(t) {
			this.options.is_vertical_center && this.make_vertical_center(), this.$modal.focus(), this.handle_event("after_append_html", this, t)
		},
		after_close_modal: function() {
			t(window).off("resize.bs-modal"), s.pop()
		},
		has_button: function() {
			return "object" == typeof this.options.buttons
		},
		append_html: function() {
			this.before_append_html("modal");
			var t = this.get_html(this.options.template, this.options.skin, this.options.content);
			return "string" != typeof t ? t : (this.$modal.html(t), this.after_append_html("modal"), !0)
		},
		generate_buttons: function() {
			if (!this.has_button()) return "";
			Mustache.parse(this.button_struct);
			var t = "";
			for (var n in this.options.buttons) t += "\n", t += Mustache.render(this.button_struct, this.get_button_replacement_object(n));
			return t
		},
		get_button_replacement_object: function(n) {
			if ("object" != typeof this.options.buttons[n]) return this.debug("invalid button id"), {};
			var s = t.extend({
				focus: !1
			}, this.options.buttons[n]);
			return delete s.clicked, s.id = n, "string" != typeof s.btn_classes && (s.btn_classes = ""), -1 !== t.inArray(s.type, ["primary", "secondary"]) && (s.btn_classes += " bs-modal-btn-" + s.type), s.focus && (s.btn_classes += " bs-modal-btn-focus"), s
		},
		close_modal: function(t) {
			this.visible = !1;
			var n = this,
				t = t || "callback";
			n.handle_event("modal_close", this, t);
			for (var s = 0; s < this.timerTimeouts.length; s++) clearTimeout(this.timerTimeouts[s]);
			n.$modal.removeClass(this.options.animations.open).addClass(this.options.animations.close).delay(this.options.animations.delay).queue(function(t) {
				n.$modal.hide().removeClass(n.options.animations.close), n.options.destroyHtml ? n.$modal.remove() : n.$modal.clearQueue(), t()
			}), n.$overlay.fadeOut(this.options.animations.delay, function() {
				n.options.destroyHtml && n.find().remove(), n.$document.removeClass("modal-open").removeClass("modal-open-vc"), n.keyup_unbind(), n.handle_event("modal_closed", this, t)
			}), n.after_close_modal()
		},
		keyup_unbind: function() {
			this.options.destroyHtml && this.$document.off("keyup.bs-modal-" + this.getModalID())
		},
		handle_event: function(t, n) {
			var s = Array.prototype.slice.call(arguments, 2);
			return "function" == typeof this.options.events[t] ? this.options.events[t].apply(this, [n, this.options].concat(s)) : void 0
		},
		handle_timer: function(t) {
			var n = this;
			this.timerTimeouts.push(setTimeout(function() {
				t.callback.call(n, n.option)
			}, t.delay))
		},
		change_skin: function(s, e) {
			e = "boolean" == typeof e ? e : !0;
			var i = t.extend(e, {
				template: this.options.template,
				skin: this.options.skin,
				content: this.options.content,
				animations: {
					open: !1,
					body: !1,
					delay: 20
				},
				buttons: {},
				styles: {}
			}, s);
			if (this.options.buttons = i.buttons, i.styles.container) {
				var o = {
						inline_style: i.styles.container
					},
					a = Mustache.render('<div class="bs-modal" {{#inline_style}} style="{{inline_style}}" {{/inline_style}}></div>\n', o);
				this.$modal[0].outerHTML = a, this.$modal = this.find(".bs-modal").css("z-index", n + 1).show(), this.afterWrapperHtmlGenerated()
			}
			var l = this.get_html(i.template, i.skin, i.content);
			return "string" != typeof l ? l : (this.$modal.html(l).removeClass(this.options.animations.open).delay(20).queue(function(n) {
				i.animations.open && t(this).addClass(i.animations.open), n()
			}).removeClass(function(t, n) {
				return (n.match(/(^|\s)skin-\S+/g) || []).join(" ")
			}).addClass("skin-" + i.skin).find(".bs-modal-body").addClass(i.animations.body), "object" == typeof i.timer && this.handle_timer(i.timer), this.after_append_html("change_skin"), void this.handle_event("modal_loaded", this))
		},
		make_vertical_center: function() {
			var n = this;
			t(window).on("resize.bs-modal", function() {
				if (!n.isModalLast()) return !1;
				var t = n.$modal.innerHeight(),
					s = window.innerHeight;
				if (s > t) var e = Math.ceil((s - t) / 2);
				else var e = 35;
				n.$modal.css("top", e)
			}).trigger("resize.bs-modal")
		},
		getModalID: function() {
			return this.modalID
		},
		setModalID: function(t) {
			this.modalID = t
		},
		setActiveModalId: function(t) {
			s.push(t)
		},
		getActiveModalId: function() {
			return s.length ? s[s.length - 1] : 0
		},
		isModalLast: function() {
			return this.getActiveModalId() === this.getModalID()
		},
		find: function(n) {
			var s = this.$document.find("#" + this.getModalID());
			return n ? t(n, s) : s
		},
		_fixModalZindex: function() {},
		show: function() {
			var t = this;
			t.$document.find(".vc_ui-panel.vc_active .vc_ui-panel-window-inner").length && t.$document.addClass("modal-alongside-vc-panel"), this.$overlay.fadeIn(this.options.animations.open, function() {
				t.$document.addClass("modal-open")
			}), this.$modal.addClass(t.options.animations.open).addClass("skin-" + t.options.skin).show().delay(t.options.animations.delay).queue(function(n) {
				"object" == typeof t.options.timer && t.handle_timer(t.options.timer), n()
			}), this.setActiveModalId(this.getModalID()), this.visible = !0, this.handle_event("modal_show", this)
		},
		init: function() {
			this.$document = t(document.body);
			var s = this;
			this.setModalID(this.options.modalId), this.setActiveModalId(this.getModalID());
			var e = 0 === this.find().length;
			if (e) {
				var i = {
					inline_style: this.options.styles.container,
					modal_id: this.getModalID(),
					modal_class: this.options.modalClass
				};
				this.$document.append(Mustache.render('<div id="{{modal_id}}"{{#modal_class}} class="{{modal_class}}"{{/modal_class}}>\n    <div class="bs-modal-overlay"></div>\n        <div class="bs-modal" {{#inline_style}} style="{{inline_style}}" {{/inline_style}}>\n    </div>\n</div>', i))
			}
			this.$modal = this.find(".bs-modal"), this.$overlay = this.find(".bs-modal-overlay"), n ? (n = Math.max(n, this.options.initialZIndex), n++, this.$overlay.css("z-index", n), this.$modal.css("z-index", n + 1)) : this.options.initialZIndex ? (this.$overlay.css("z-index", this.options.initialZIndex), this.$modal.css("z-index", this.options.initialZIndex + 1), n = this.options.initialZIndex) : n = parseInt(this.$modal.css("z-index")), e && s.afterWrapperHtmlGenerated(), this.options.close_button && this.$document.on("keyup.bs-modal-" + this.getModalID(), function(n) {
				if (!s.handle_event("handle_keyup", n, s.isModalLast())) return !1;
				if ("TEXTAREA" === n.target.tagName) return !1;
				if (s.options.close_button && 27 === n.which) s.close_modal("esc");
				else if (13 === n.which) {
					if (s.has_button()) {
						var e = s.$modal.find(".bs-modal-bottom"),
							i = t(".bs-modal-btn-focus", e);
						i.length || (i = t(".bs-modal-btn-primary", e)), i.trigger("click")
					}
					s.keyup_unbind()
				}
			}), this.options.show && s.show(), e && s.append_html(), this.handle_event("modal_loaded", this)
		},
		afterWrapperHtmlGenerated: function() {
			var n = this;
			this.$modal.on("click", "a", function(s) {
				if (n.handle_event("before_click", this)) {
					var e = t(this),
						i = e.attr("id");
					if (e.hasClass("bs-close-modal")) s.preventDefault(), n.close_modal("btn");
					else if (i && "object" == typeof n.options.buttons[i]) {
						var o = n.options.buttons[i];
						switch (o.action) {
							case "close":
								n.close_modal("link")
						}
						"function" == typeof o.clicked && o.clicked.call(n)
					}
					n.handle_event("clicked", this)
				}
			})
		}
	}, t.bs_modal = function(t) {
		return new e(t)
	}, t.bs_modal_template = function(t, n) {
		return n ? void(e.prototype.templates[t] = n) : e.prototype.templates[t]
	}
}(jQuery);

({
	activeKeys: {
		cmd: !1,
		ctrl: !1,
		alt: !1,
		shift: !1
	},
	setup: function() {
		this.loc("opt-1.0") && this.disableImageRightClick(), this.loc("opt-1.1") && this.disableImageDragDrop(), this.loc("opt-2.1") && this.disableRightClick(), this.loc("opt-2.0") && this.addText2Copy(), this.loc("opt-2.4") && this.disableShortcuts(), this.loc("opt-3.0") && this.disableIframeLoad(), this.loc("opt-2.5") && this.disableTextSelection(), this.loc("opt-2.6") && this.disableCopy()
	},
	disableImageDragDrop: function() {
		this.attachEvent("dragstart", this.returnFalse)
	},
	disableImageRightClick: function() {
		this.attachEvent("contextmenu", function(t) {
			if ("IMG" === t.target.tagName) return t.preventDefault(), !1
		})
	},
	disableRightClick: function() {
		var o = this;
		this.attachEvent("contextmenu", function(t) {
			if (!o.loc("opt-2.2") || "A" !== t.target.tagName) return t.preventDefault(), o.rightClickAlert(), !1;
			var e = o.getHost(t.target.href),
				i = o.loc("opt-2.7");
			return e && i ? -1 === i.indexOf(e) ? (t.preventDefault(), o.rightClickAlert(), !1) : void 0 : (t.preventDefault(), o.rightClickAlert(), !1)
		})
	},
	disableTextSelection: function() {
		this.attachEvent("selectstart", this.returnFalse)
	},
	disableCopy: function() {
		this.attachEvent("copy", this.returnFalse), this.attachEvent("cut", this.returnFalse)
	},
	addText2Copy: function() {
		var o = this,
			t = function(t) {
				var e = t.clipboardData || window.clipboardData;
				if (e) {
					var i = window.getSelection().toString();
					0 < o.loc("opt-2.8") && i.length > o.loc("opt-2.8") && (i = i.substring(0, o.loc("opt-2.8")) + "..."), t.preventDefault(), i = (i = (i = i + "\n" + o.loc("opt-2.0")).replace("%POSTLINK%", window.location.href)).replace("%SITELINK%", window.location.origin), e.setData("Text", i)
				}
			};
		this.attachEvent("copy", t), this.attachEvent("cut", t)
	},
	disableShortcuts: function() {
		var a = this;
		this.attachEvent("keydown", function(t) {
			var e = t.keyCode ? t.keyCode : t.which;
			if (16 === e) a.activeKeys.shift = !0;
			else if (17 === e) a.activeKeys.ctrl = !0;
			else if (18 === e) a.activeKeys.alt = !0;
			else if (91 === e) a.activeKeys.cmd = !0;
			else {
				var i, o = "";
				for (i in a.activeKeys) a.activeKeys[i] && (o += i, o += "_");
				if (o = (o += String.fromCharCode(e)).toLowerCase(), -1 !== a.loc("opt-2.4").indexOf(o)) return t.preventDefault(), !1
			}
			return !0
		}), this.attachEvent("keyup", function(t) {
			var e = t.keyCode ? t.keyCode : t.which;
			16 === e && (a.activeKeys.shift = !1), 17 === e && (a.activeKeys.ctrl = !1), 18 === e && (a.activeKeys.alt = !1), 91 === e && (a.activeKeys.cmd = !1)
		})
	},
	rightClickAlert: function() {
		var t = this.loc("opt-2.3");
		t && this.alert(t)
	},
	disableIframeLoad: function() {
		if (this.isIframe()) {
			try {
				if (this.getHost(window.parent.location.href) === this.getHost(window.location.href)) return
			} catch (t) {}
			var t = this.loc("opt-3.2"),
				e = this.loc("opt-3.1");
			if ("redirect" === this.loc("opt-3.0") && t) {
				if (window.location.href !== t) return void(window.location = t)
			} else document.write("<h1>" + e + "</h1>"), this.attachEvent("DOMContentLoaded", function() {
				document.write("<h1>" + e + "</h1>")
			})
		}
	},
	attachEvent: function(t, e) {
		window.addEventListener ? window.addEventListener(t, e, !1) : window.attachEvent && window.attachEvent("on" + t, e)
	},
	returnFalse: function(t) {
		return t && t.preventDefault && t.preventDefault(), !1
	},
	alert: function(t) {
		alert(t)
	},
	loc: function(t) {
		if (t && cpp_loc) {
			if (-1 == t.indexOf(".")) return cpp_loc[t];
			var e = t.split("."),
				i = cpp_loc[e[0]];
			if (void 0 !== i) {
				for (var o = (e = e.splice(1)).length - 1, a = 0; a <= o; a++) {
					if ("object" != typeof i[e[a]] && a !== o) return;
					i = i[e[a]]
				}
				return i
			}
		}
	},
	isIframe: function() {
		return window.parent !== window.self
	},
	getHost: function(t) {
		var e = t.match(/^https?\:\/\/(?:w{3}\.)?([^\/?#]+)(?:[\/?#]|$)/i);
		if (e) return e[1]
	}
}).setup();

if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function() {
	var t = jQuery.fn.jquery.split(" ")[0].split(".");
	if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(),
function(a) {
	"use strict";

	function s(t) {
		a(t).on("click", e, this.close)
	}
	var e = '[data-dismiss="alert"]';
	s.VERSION = "3.3.0", s.TRANSITION_DURATION = 150, s.prototype.close = function(t) {
		function e() {
			o.detach().trigger("closed.bs.alert").remove()
		}
		var i = a(this),
			n = i.attr("data-target");
		n || (n = (n = i.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, ""));
		var o = a(n);
		t && t.preventDefault(), o.length || (o = i.closest(".alert")), o.trigger(t = a.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), a.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", e).emulateTransitionEnd(s.TRANSITION_DURATION) : e())
	};
	var t = a.fn.alert;
	a.fn.alert = function(i) {
		return this.each(function() {
			var t = a(this),
				e = t.data("bs.alert");
			e || t.data("bs.alert", e = new s(this)), "string" == typeof i && e[i].call(t)
		})
	}, a.fn.alert.Constructor = s, a.fn.alert.noConflict = function() {
		return a.fn.alert = t, this
	}, a(document).on("click.bs.alert.data-api", e, s.prototype.close)
}(jQuery),
function(a) {
	"use strict";

	function i(n) {
		return this.each(function() {
			var t = a(this),
				e = t.data("bs.button"),
				i = "object" == typeof n && n;
			e || t.data("bs.button", e = new o(this, i)), "toggle" == n ? e.toggle() : n && e.setState(n)
		})
	}
	var o = function(t, e) {
		this.$element = a(t), this.options = a.extend({}, o.DEFAULTS, e), this.isLoading = !1
	};
	o.VERSION = "3.3.0", o.DEFAULTS = {
		loadingText: "loading..."
	}, o.prototype.setState = function(t) {
		var e = "disabled",
			i = this.$element,
			n = i.is("input") ? "val" : "html",
			o = i.data();
		t += "Text", null == o.resetText && i.data("resetText", i[n]()), setTimeout(a.proxy(function() {
			i[n](null == o[t] ? this.options[t] : o[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(e).attr(e, e)) : this.isLoading && (this.isLoading = !1, i.removeClass(e).removeAttr(e))
		}, this), 0)
	}, o.prototype.toggle = function() {
		var t = !0,
			e = this.$element.closest('[data-toggle="buttons"]');
		if (e.length) {
			var i = this.$element.find("input");
			"radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
		t && this.$element.toggleClass("active")
	};
	var t = a.fn.button;
	a.fn.button = i, a.fn.button.Constructor = o, a.fn.button.noConflict = function() {
		return a.fn.button = t, this
	}, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
		var e = a(t.target);
		e.hasClass("btn") || (e = e.closest(".btn")), i.call(e, "toggle"), t.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
		a(t.target).closest(".btn").toggleClass("focus", "focus" == t.type)
	})
}(jQuery),
function(r) {
	"use strict";

	function a(n) {
		n && 3 === n.which || (r(".dropdown-backdrop").remove(), r(c).each(function() {
			var t = r(this),
				e = l(t),
				i = {
					relatedTarget: this
				};
			e.hasClass("open") && (e.trigger(n = r.Event("hide.bs.dropdown", i)), n.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", i)))
		}))
	}

	function l(t) {
		var e = t.attr("data-target");
		e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
		var i = e && r(e);
		return i && i.length ? i : t.parent()
	}

	function n(t) {
		r(t).on("click.bs.dropdown", this.toggle)
	}
	var c = '[data-toggle="dropdown"]';
	n.VERSION = "3.3.0", n.prototype.toggle = function(t) {
		var e = r(this);
		if (!e.is(".disabled, :disabled")) {
			var i = l(e),
				n = i.hasClass("open");
			if (a(), !n) {
				"ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && r('<div class="dropdown-backdrop"/>').insertAfter(r(this)).on("click", a);
				var o = {
					relatedTarget: this
				};
				if (i.trigger(t = r.Event("show.bs.dropdown", o)), t.isDefaultPrevented()) return;
				e.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger("shown.bs.dropdown", o)
			}
			return !1
		}
	}, n.prototype.keydown = function(t) {
		if (/(38|40|27|32)/.test(t.which)) {
			var e = r(this);
			if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
				var i = l(e),
					n = i.hasClass("open");
				if (!n && 27 != t.which || n && 27 == t.which) return 27 == t.which && i.find(c).trigger("focus"), e.trigger("click");
				var o = " li:not(.divider):visible a",
					a = i.find('[role="menu"]' + o + ', [role="listbox"]' + o);
				if (a.length) {
					var s = a.index(t.target);
					38 == t.which && 0 < s && s--, 40 == t.which && s < a.length - 1 && s++, ~s || (s = 0), a.eq(s).trigger("focus")
				}
			}
		}
	};
	var t = r.fn.dropdown;
	r.fn.dropdown = function(i) {
		return this.each(function() {
			var t = r(this),
				e = t.data("bs.dropdown");
			e || t.data("bs.dropdown", e = new n(this)), "string" == typeof i && e[i].call(t)
		})
	}, r.fn.dropdown.Constructor = n, r.fn.dropdown.noConflict = function() {
		return r.fn.dropdown = t, this
	}, r(document).on("click.bs.dropdown.data-api", a).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
		t.stopPropagation()
	}).on("click.bs.dropdown.data-api", c, n.prototype.toggle).on("keydown.bs.dropdown.data-api", c, n.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', n.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', n.prototype.keydown)
}(jQuery),
function(a) {
	"use strict";

	function s(n, o) {
		return this.each(function() {
			var t = a(this),
				e = t.data("bs.modal"),
				i = a.extend({}, r.DEFAULTS, t.data(), "object" == typeof n && n);
			e || t.data("bs.modal", e = new r(this, i)), "string" == typeof n ? e[n](o) : i.show && e.show(o)
		})
	}

	function r(t, e) {
		this.options = e, this.$body = a(document.body), this.$element = a(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	}
	r.VERSION = "3.3.0", r.TRANSITION_DURATION = 300, r.BACKDROP_TRANSITION_DURATION = 150, r.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, r.prototype.toggle = function(t) {
		return this.isShown ? this.hide() : this.show(t)
	}, r.prototype.show = function(i) {
		var n = this,
			t = a.Event("show.bs.modal", {
				relatedTarget: i
			});
		this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
			var t = a.support.transition && n.$element.hasClass("fade");
			n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), t && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
			var e = a.Event("shown.bs.modal", {
				relatedTarget: i
			});
			t ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
				n.$element.trigger("focus").trigger(e)
			}).emulateTransitionEnd(r.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(e)
		}))
	}, r.prototype.hide = function(t) {
		t && t.preventDefault(), t = a.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : this.hideModal())
	}, r.prototype.enforceFocus = function() {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(t) {
			this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
		}, this))
	}, r.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(t) {
			27 == t.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, r.prototype.hideModal = function() {
		var t = this;
		this.$element.hide(), this.backdrop(function() {
			t.$body.removeClass("modal-open"), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
		})
	}, r.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, r.prototype.backdrop = function(t) {
		var e = this,
			i = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var n = a.support.transition && i;
			if (this.$backdrop = a('<div class="modal-backdrop ' + i + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", a.proxy(function(t) {
					t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
				}, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
			n ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION) : t()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var o = function() {
				e.removeBackdrop(), t && t()
			};
			a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION) : o()
		} else t && t()
	}, r.prototype.checkScrollbar = function() {
		this.scrollbarWidth = this.measureScrollbar()
	}, r.prototype.setScrollbar = function() {
		var t = parseInt(this.$body.css("padding-right") || 0, 10);
		this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
	}, r.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", "")
	}, r.prototype.measureScrollbar = function() {
		if (document.body.clientWidth >= window.innerWidth) return 0;
		var t = document.createElement("div");
		t.className = "modal-scrollbar-measure", this.$body.append(t);
		var e = t.offsetWidth - t.clientWidth;
		return this.$body[0].removeChild(t), e
	};
	var t = a.fn.modal;
	a.fn.modal = s, a.fn.modal.Constructor = r, a.fn.modal.noConflict = function() {
		return a.fn.modal = t, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
		var e = a(this),
			i = e.attr("href"),
			n = a(e.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
			o = n.data("bs.modal") ? "toggle" : a.extend({
				remote: !/#/.test(i) && i
			}, n.data(), e.data());
		e.is("a") && t.preventDefault(), n.one("show.bs.modal", function(t) {
			t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
				e.is(":visible") && e.trigger("focus")
			})
		}), s.call(n, o, this)
	})
}(jQuery),
function(v) {
	"use strict";

	function g(t, e) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
	}
	g.VERSION = "3.3.0", g.TRANSITION_DURATION = 150, g.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, g.prototype.init = function(t, e, i) {
		this.enabled = !0, this.type = t, this.$element = v(e), this.options = this.getOptions(i), this.$viewport = this.options.viewport && v(this.options.viewport.selector || this.options.viewport);
		for (var n = this.options.trigger.split(" "), o = n.length; o--;) {
			var a = n[o];
			if ("click" == a) this.$element.on("click." + this.type, this.options.selector, v.proxy(this.toggle, this));
			else if ("manual" != a) {
				var s = "hover" == a ? "mouseenter" : "focusin",
					r = "hover" == a ? "mouseleave" : "focusout";
				this.$element.on(s + "." + this.type, this.options.selector, v.proxy(this.enter, this)), this.$element.on(r + "." + this.type, this.options.selector, v.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = v.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, g.prototype.getDefaults = function() {
		return g.DEFAULTS
	}, g.prototype.getOptions = function(t) {
		return (t = v.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
			show: t.delay,
			hide: t.delay
		}), t
	}, g.prototype.getDelegateOptions = function() {
		var i = {},
			n = this.getDefaults();
		return this._options && v.each(this._options, function(t, e) {
			n[t] != e && (i[t] = e)
		}), i
	}, g.prototype.enter = function(t) {
		var e = t instanceof this.constructor ? t : v(t.currentTarget).data("bs." + this.type);
		return e && e.$tip && e.$tip.is(":visible") ? void(e.hoverState = "in") : (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), v(t.currentTarget).data("bs." + this.type, e)), clearTimeout(e.timeout), e.hoverState = "in", e.options.delay && e.options.delay.show ? void(e.timeout = setTimeout(function() {
			"in" == e.hoverState && e.show()
		}, e.options.delay.show)) : e.show())
	}, g.prototype.leave = function(t) {
		var e = t instanceof this.constructor ? t : v(t.currentTarget).data("bs." + this.type);
		return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), v(t.currentTarget).data("bs." + this.type, e)), clearTimeout(e.timeout), e.hoverState = "out", e.options.delay && e.options.delay.hide ? void(e.timeout = setTimeout(function() {
			"out" == e.hoverState && e.hide()
		}, e.options.delay.hide)) : e.hide()
	}, g.prototype.show = function() {
		var t = v.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(t);
			var e = v.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (t.isDefaultPrevented() || !e) return;
			var i = this,
				n = this.tip(),
				o = this.getUID(this.type);
			this.setContent(), n.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && n.addClass("fade");
			var a = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
				s = /\s?auto?\s?/i,
				r = s.test(a);
			r && (a = a.replace(s, "") || "top"), n.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(a).data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
			var l = this.getPosition(),
				c = n[0].offsetWidth,
				d = n[0].offsetHeight;
			if (r) {
				var u = a,
					h = this.options.container ? v(this.options.container) : this.$element.parent(),
					p = this.getPosition(h);
				a = "bottom" == a && l.bottom + d > p.bottom ? "top" : "top" == a && l.top - d < p.top ? "bottom" : "right" == a && l.right + c > p.width ? "left" : "left" == a && l.left - c < p.left ? "right" : a, n.removeClass(u).addClass(a)
			}
			var f = this.getCalculatedOffset(a, l, c, d);
			this.applyPlacement(f, a);
			var m = function() {
				var t = i.hoverState;
				i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
			};
			v.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", m).emulateTransitionEnd(g.TRANSITION_DURATION) : m()
		}
	}, g.prototype.applyPlacement = function(t, e) {
		var i = this.tip(),
			n = i[0].offsetWidth,
			o = i[0].offsetHeight,
			a = parseInt(i.css("margin-top"), 10),
			s = parseInt(i.css("margin-left"), 10);
		isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top = t.top + a, t.left = t.left + s, v.offset.setOffset(i[0], v.extend({
			using: function(t) {
				i.css({
					top: Math.round(t.top),
					left: Math.round(t.left)
				})
			}
		}, t), 0), i.addClass("in");
		var r = i[0].offsetWidth,
			l = i[0].offsetHeight;
		"top" == e && l != o && (t.top = t.top + o - l);
		var c = this.getViewportAdjustedDelta(e, t, r, l);
		c.left ? t.left += c.left : t.top += c.top;
		var d = /top|bottom/.test(e),
			u = d ? 2 * c.left - n + r : 2 * c.top - o + l,
			h = d ? "offsetWidth" : "offsetHeight";
		i.offset(t), this.replaceArrow(u, i[0][h], d)
	}, g.prototype.replaceArrow = function(t, e, i) {
		this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
	}, g.prototype.setContent = function() {
		var t = this.tip(),
			e = this.getTitle();
		t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
	}, g.prototype.hide = function(t) {
		function e() {
			"in" != i.hoverState && n.detach(), i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), t && t()
		}
		var i = this,
			n = this.tip(),
			o = v.Event("hide.bs." + this.type);
		return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (n.removeClass("in"), v.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", e).emulateTransitionEnd(g.TRANSITION_DURATION) : e(), this.hoverState = null, this)
	}, g.prototype.fixTitle = function() {
		var t = this.$element;
		!t.attr("title") && "string" == typeof t.attr("data-original-title") || t.attr("data-original-title", t.attr("title") || "").attr("title", "")
	}, g.prototype.hasContent = function() {
		return this.getTitle()
	}, g.prototype.getPosition = function(t) {
		var e = (t = t || this.$element)[0],
			i = "BODY" == e.tagName,
			n = e.getBoundingClientRect();
		null == n.width && (n = v.extend({}, n, {
			width: n.right - n.left,
			height: n.bottom - n.top
		}));
		var o = i ? {
				top: 0,
				left: 0
			} : t.offset(),
			a = {
				scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
			},
			s = i ? {
				width: v(window).width(),
				height: v(window).height()
			} : null;
		return v.extend({}, n, a, s, o)
	}, g.prototype.getCalculatedOffset = function(t, e, i, n) {
		return "bottom" == t ? {
			top: e.top + e.height,
			left: e.left + e.width / 2 - i / 2
		} : "top" == t ? {
			top: e.top - n,
			left: e.left + e.width / 2 - i / 2
		} : "left" == t ? {
			top: e.top + e.height / 2 - n / 2,
			left: e.left - i
		} : {
			top: e.top + e.height / 2 - n / 2,
			left: e.left + e.width
		}
	}, g.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
		var o = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return o;
		var a = this.options.viewport && this.options.viewport.padding || 0,
			s = this.getPosition(this.$viewport);
		if (/right|left/.test(t)) {
			var r = e.top - a - s.scroll,
				l = e.top + a - s.scroll + n;
			r < s.top ? o.top = s.top - r : l > s.top + s.height && (o.top = s.top + s.height - l)
		} else {
			var c = e.left - a,
				d = e.left + a + i;
			c < s.left ? o.left = s.left - c : d > s.width && (o.left = s.left + s.width - d)
		}
		return o
	}, g.prototype.getTitle = function() {
		var t = this.$element,
			e = this.options;
		return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
	}, g.prototype.getUID = function(t) {
		for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
		return t
	}, g.prototype.tip = function() {
		return this.$tip = this.$tip || v(this.options.template)
	}, g.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, g.prototype.enable = function() {
		this.enabled = !0
	}, g.prototype.disable = function() {
		this.enabled = !1
	}, g.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, g.prototype.toggle = function(t) {
		var e = this;
		t && ((e = v(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), v(t.currentTarget).data("bs." + this.type, e))), e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
	}, g.prototype.destroy = function() {
		var t = this;
		clearTimeout(this.timeout), this.hide(function() {
			t.$element.off("." + t.type).removeData("bs." + t.type)
		})
	};
	var t = v.fn.tooltip;
	v.fn.tooltip = function(o) {
		return this.each(function() {
			var t = v(this),
				e = t.data("bs.tooltip"),
				i = "object" == typeof o && o,
				n = i && i.selector;
			!e && "destroy" == o || (n ? (e || t.data("bs.tooltip", e = {}), e[n] || (e[n] = new g(this, i))) : e || t.data("bs.tooltip", e = new g(this, i)), "string" == typeof o && e[o]())
		})
	}, v.fn.tooltip.Constructor = g, v.fn.tooltip.noConflict = function() {
		return v.fn.tooltip = t, this
	}
}(jQuery),
function(a) {
	"use strict";

	function s(t, e) {
		this.init("popover", t, e)
	}
	if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	s.VERSION = "3.3.0", s.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), ((s.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)).constructor = s).prototype.getDefaults = function() {
		return s.DEFAULTS
	}, s.prototype.setContent = function() {
		var t = this.tip(),
			e = this.getTitle(),
			i = this.getContent();
		t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
	}, s.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, s.prototype.getContent = function() {
		var t = this.$element,
			e = this.options;
		return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
	}, s.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	}, s.prototype.tip = function() {
		return this.$tip || (this.$tip = a(this.options.template)), this.$tip
	};
	var t = a.fn.popover;
	a.fn.popover = function(o) {
		return this.each(function() {
			var t = a(this),
				e = t.data("bs.popover"),
				i = "object" == typeof o && o,
				n = i && i.selector;
			!e && "destroy" == o || (n ? (e || t.data("bs.popover", e = {}), e[n] || (e[n] = new s(this, i))) : e || t.data("bs.popover", e = new s(this, i)), "string" == typeof o && e[o]())
		})
	}, a.fn.popover.Constructor = s, a.fn.popover.noConflict = function() {
		return a.fn.popover = t, this
	}
}(jQuery),
function(r) {
	"use strict";

	function e(i) {
		return this.each(function() {
			var t = r(this),
				e = t.data("bs.tab");
			e || t.data("bs.tab", e = new s(this)), "string" == typeof i && e[i]()
		})
	}

	function s(t) {
		this.element = r(t)
	}
	s.VERSION = "3.3.0", s.TRANSITION_DURATION = 150, s.prototype.show = function() {
		var t = this.element,
			e = t.closest("ul:not(.dropdown-menu)"),
			i = t.data("target");
		if (i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
			var n = e.find(".active:last a"),
				o = r.Event("hide.bs.tab", {
					relatedTarget: t[0]
				}),
				a = r.Event("show.bs.tab", {
					relatedTarget: n[0]
				});
			if (n.trigger(o), t.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
				var s = r(i);
				this.activate(t.closest("li"), e), this.activate(s, s.parent(), function() {
					n.trigger({
						type: "hidden.bs.tab",
						relatedTarget: t[0]
					}), t.trigger({
						type: "shown.bs.tab",
						relatedTarget: n[0]
					})
				})
			}
		}
	}, s.prototype.activate = function(t, e, i) {
		function n() {
			o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
		}
		var o = e.find("> .active"),
			a = i && r.support.transition && (o.length && o.hasClass("fade") || !!e.find("> .fade").length);
		o.length && a ? o.one("bsTransitionEnd", n).emulateTransitionEnd(s.TRANSITION_DURATION) : n(), o.removeClass("in")
	};
	var t = r.fn.tab;
	r.fn.tab = e, r.fn.tab.Constructor = s, r.fn.tab.noConflict = function() {
		return r.fn.tab = t, this
	};

	function i(t) {
		t.preventDefault(), e.call(r(this), "show")
	}
	r(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
function(s) {
	"use strict";

	function o(t) {
		var e, i = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
		return s(i)
	}

	function r(n) {
		return this.each(function() {
			var t = s(this),
				e = t.data("bs.collapse"),
				i = s.extend({}, l.DEFAULTS, t.data(), "object" == typeof n && n);
			!e && i.toggle && "show" == n && (i.toggle = !1), e || t.data("bs.collapse", e = new l(this, i)), "string" == typeof n && e[n]()
		})
	}
	var l = function(t, e) {
		this.$element = s(t), this.options = s.extend({}, l.DEFAULTS, e), this.$trigger = s(this.options.trigger).filter('[href="#' + t.id + '"], [data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	l.VERSION = "3.3.0", l.TRANSITION_DURATION = 350, l.DEFAULTS = {
		toggle: !0,
		trigger: '[data-toggle="collapse"]'
	}, l.prototype.dimension = function() {
		return this.$element.hasClass("width") ? "width" : "height"
	}, l.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var t, e = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
			if (!(e && e.length && ((t = e.data("bs.collapse")) && t.transitioning))) {
				var i = s.Event("show.bs.collapse");
				if (this.$element.trigger(i), !i.isDefaultPrevented()) {
					e && e.length && (r.call(e, "hide"), t || e.data("bs.collapse", null));
					var n = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[n](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var o = function() {
						this.$element.removeClass("collapsing").addClass("collapse in")[n](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!s.support.transition) return o.call(this);
					var a = s.camelCase(["scroll", n].join("-"));
					this.$element.one("bsTransitionEnd", s.proxy(o, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[n](this.$element[0][a])
				}
			}
		}
	}, l.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var t = s.Event("hide.bs.collapse");
			if (this.$element.trigger(t), !t.isDefaultPrevented()) {
				var e = this.dimension();
				this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var i = function() {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return s.support.transition ? void this.$element[e](0).one("bsTransitionEnd", s.proxy(i, this)).emulateTransitionEnd(l.TRANSITION_DURATION) : i.call(this)
			}
		}
	}, l.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, l.prototype.getParent = function() {
		return s(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(s.proxy(function(t, e) {
			var i = s(e);
			this.addAriaAndCollapsedClass(o(i), i)
		}, this)).end()
	}, l.prototype.addAriaAndCollapsedClass = function(t, e) {
		var i = t.hasClass("in");
		t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
	};
	var t = s.fn.collapse;
	s.fn.collapse = r, s.fn.collapse.Constructor = l, s.fn.collapse.noConflict = function() {
		return s.fn.collapse = t, this
	}, s(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
		var e = s(this);
		e.attr("data-target") || t.preventDefault();
		var i = o(e),
			n = i.data("bs.collapse") ? "toggle" : s.extend({}, e.data(), {
				trigger: this
			});
		r.call(i, n)
	})
}(jQuery),
function(n) {
	"use strict";
	n.fn.emulateTransitionEnd = function(t) {
		var e = !1,
			i = this;
		n(this).one("bsTransitionEnd", function() {
			e = !0
		});
		return setTimeout(function() {
			e || n(i).trigger(n.support.transition.end)
		}, t), this
	}, n(function() {
		n.support.transition = function() {
			var t = document.createElement("bootstrap"),
				e = {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd otransitionend",
					transition: "transitionend"
				};
			for (var i in e)
				if (void 0 !== t.style[i]) return {
					end: e[i]
				};
			return !1
		}(), n.support.transition && (n.event.special.bsTransitionEnd = {
			bindType: n.support.transition.end,
			delegateType: n.support.transition.end,
			handle: function(t) {
				return n(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery),
function(x) {
	x.flexslider = function(p, t) {
		var f = x(p);
		f.vars = x.extend({}, x.flexslider.defaults, t);
		var e, d = f.vars.namespace,
			m = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
			u = ("ontouchstart" in window || m || window.DocumentTouch && document instanceof DocumentTouch) && f.vars.touch,
			s = "click touchend MSPointerUp",
			r = "",
			v = "vertical" === f.vars.direction,
			g = f.vars.reverse,
			b = 0 < f.vars.itemWidth,
			y = "fade" === f.vars.animation,
			h = "" !== f.vars.asNavFor,
			w = {};
		x.data(p, "flexslider", f), w = {
			init: function() {
				f.animating = !1, f.currentSlide = parseInt(f.vars.startAt ? f.vars.startAt : 0, 10), isNaN(f.currentSlide) && (f.currentSlide = 0), f.animatingTo = f.currentSlide, f.atEnd = 0 === f.currentSlide || f.currentSlide === f.last, f.containerSelector = f.vars.selector.substr(0, f.vars.selector.search(" ")), f.slides = x(f.vars.selector, f), f.container = x(f.containerSelector, f), f.count = f.slides.length, f.syncExists = 0 < x(f.vars.sync).length, "slide" === f.vars.animation && (f.vars.animation = "swing"), f.prop = v ? "top" : "marginLeft", f.args = {}, f.manualPause = !1, f.stopped = !1, f.started = !1, f.startTimeout = null, f.transitions = !f.vars.video && !y && f.vars.useCSS && function() {
					var t = document.createElement("div"),
						e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
					for (var i in e)
						if (void 0 !== t.style[e[i]]) return f.pfx = e[i].replace("Perspective", "").toLowerCase(), f.prop = "-" + f.pfx + "-transform", !0;
					return !1
				}(), (f.ensureAnimationEnd = "") !== f.vars.controlsContainer && (f.controlsContainer = 0 < x(f.vars.controlsContainer).length && x(f.vars.controlsContainer)), "" !== f.vars.manualControls && (f.manualControls = 0 < x(f.vars.manualControls).length && x(f.vars.manualControls)), f.vars.randomize && (f.slides.sort(function() {
					return Math.round(Math.random()) - .5
				}), f.container.empty().append(f.slides)), f.doMath(), f.setup("init"), f.vars.controlNav && w.controlNav.setup(), f.vars.directionNav && w.directionNav.setup(), f.vars.keyboard && (1 === x(f.containerSelector).length || f.vars.multipleKeyboard) && x(document).bind("keyup", function(t) {
					var e = t.keyCode;
					if (!f.animating && (39 === e || 37 === e)) {
						var i = 39 === e ? f.getTarget("next") : 37 === e && f.getTarget("prev");
						f.flexAnimate(i, f.vars.pauseOnAction)
					}
				}), f.vars.mousewheel && f.bind("mousewheel", function(t, e) {
					t.preventDefault();
					var i = e < 0 ? f.getTarget("next") : f.getTarget("prev");
					f.flexAnimate(i, f.vars.pauseOnAction)
				}), f.vars.pausePlay && w.pausePlay.setup(), f.vars.slideshow && f.vars.pauseInvisible && w.pauseInvisible.init(), f.vars.slideshow && (f.vars.pauseOnHover && f.hover(function() {
					f.manualPlay || f.manualPause || f.pause()
				}, function() {
					f.manualPause || f.manualPlay || f.stopped || f.play()
				}), f.vars.pauseInvisible && w.pauseInvisible.isHidden() || (0 < f.vars.initDelay ? f.startTimeout = setTimeout(f.play, f.vars.initDelay) : f.play())), h && w.asNav.setup(), u && f.vars.touch && w.touch(), (!y || y && f.vars.smoothHeight) && x(window).bind("resize orientationchange focus", w.resize), f.find("img").attr("draggable", "false"), setTimeout(function() {
					f.vars.start(f)
				}, 200)
			},
			asNav: {
				setup: function() {
					f.asNav = !0, f.animatingTo = Math.floor(f.currentSlide / f.move), f.currentItem = f.currentSlide, f.slides.removeClass(d + "active-slide").eq(f.currentItem).addClass(d + "active-slide"), m ? (p._slider = f).slides.each(function() {
						var t = this;
						t._gesture = new MSGesture, (t._gesture.target = t).addEventListener("MSPointerDown", function(t) {
							t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
						}, !1), t.addEventListener("MSGestureTap", function(t) {
							t.preventDefault();
							var e = x(this),
								i = e.index();
							x(f.vars.asNavFor).data("flexslider").animating || e.hasClass("active") || (f.direction = f.currentItem < i ? "next" : "prev", f.flexAnimate(i, f.vars.pauseOnAction, !1, !0, !0))
						})
					}) : f.slides.on(s, function(t) {
						t.preventDefault();
						var e = x(this),
							i = e.index();
						e.offset().left - x(f).scrollLeft() <= 0 && e.hasClass(d + "active-slide") ? f.flexAnimate(f.getTarget("prev"), !0) : x(f.vars.asNavFor).data("flexslider").animating || e.hasClass(d + "active-slide") || (f.direction = f.currentItem < i ? "next" : "prev", f.flexAnimate(i, f.vars.pauseOnAction, !1, !0, !0))
					})
				}
			},
			controlNav: {
				setup: function() {
					f.manualControls ? w.controlNav.setupManual() : w.controlNav.setupPaging()
				},
				setupPaging: function() {
					var t, e, i = "thumbnails" === f.vars.controlNav ? "control-thumbs" : "control-paging",
						n = 1;
					if (f.controlNavScaffold = x('<ol class="' + d + "control-nav " + d + i + '"></ol>'), 1 < f.pagingCount)
						for (var o = 0; o < f.pagingCount; o++) {
							if (e = f.slides.eq(o), t = "thumbnails" === f.vars.controlNav ? '<img src="' + e.attr("data-thumb") + '"/>' : "<a>" + n + "</a>", "thumbnails" === f.vars.controlNav && !0 === f.vars.thumbCaptions) {
								var a = e.attr("data-thumbcaption");
								"" != a && null != a && (t += '<span class="' + d + 'caption">' + a + "</span>")
							}
							f.controlNavScaffold.append("<li>" + t + "</li>"), n++
						}
					f.controlsContainer ? x(f.controlsContainer).append(f.controlNavScaffold) : f.append(f.controlNavScaffold), w.controlNav.set(), w.controlNav.active(), f.controlNavScaffold.delegate("a, img", s, function(t) {
						if (t.preventDefault(), "" === r || r === t.type) {
							var e = x(this),
								i = f.controlNav.index(e);
							e.hasClass(d + "active") || (f.direction = i > f.currentSlide ? "next" : "prev", f.flexAnimate(i, f.vars.pauseOnAction))
						}
						"" === r && (r = t.type), w.setToClearWatchedEvent()
					})
				},
				setupManual: function() {
					f.controlNav = f.manualControls, w.controlNav.active(), f.controlNav.bind(s, function(t) {
						if (t.preventDefault(), "" === r || r === t.type) {
							var e = x(this),
								i = f.controlNav.index(e);
							e.hasClass(d + "active") || (f.direction = i > f.currentSlide ? "next" : "prev", f.flexAnimate(i, f.vars.pauseOnAction))
						}
						"" === r && (r = t.type), w.setToClearWatchedEvent()
					})
				},
				set: function() {
					var t = "thumbnails" === f.vars.controlNav ? "img" : "a";
					f.controlNav = x("." + d + "control-nav li " + t, f.controlsContainer ? f.controlsContainer : f)
				},
				active: function() {
					f.controlNav.removeClass(d + "active").eq(f.animatingTo).addClass(d + "active")
				},
				update: function(t, e) {
					1 < f.pagingCount && "add" === t ? f.controlNavScaffold.append(x("<li><a>" + f.count + "</a></li>")) : 1 === f.pagingCount ? f.controlNavScaffold.find("li").remove() : f.controlNav.eq(e).closest("li").remove(), w.controlNav.set(), 1 < f.pagingCount && f.pagingCount !== f.controlNav.length ? f.update(e, t) : w.controlNav.active()
				}
			},
			directionNav: {
				setup: function() {
					var t = x('<ul class="' + d + 'direction-nav"><li><a class="' + d + 'prev" href="#">' + f.vars.prevText + '</a></li><li><a class="' + d + 'next" href="#">' + f.vars.nextText + "</a></li></ul>");
					f.controlsContainer ? (x(f.controlsContainer).append(t), f.directionNav = x("." + d + "direction-nav li a", f.controlsContainer)) : (f.append(t), f.directionNav = x("." + d + "direction-nav li a", f)), w.directionNav.update(), f.directionNav.bind(s, function(t) {
						var e;
						t.preventDefault(), "" !== r && r !== t.type || (e = x(this).hasClass(d + "next") ? f.getTarget("next") : f.getTarget("prev"), f.flexAnimate(e, f.vars.pauseOnAction)), "" === r && (r = t.type), w.setToClearWatchedEvent()
					})
				},
				update: function() {
					var t = d + "disabled";
					1 === f.pagingCount ? f.directionNav.addClass(t).attr("tabindex", "-1") : f.vars.animationLoop ? f.directionNav.removeClass(t).removeAttr("tabindex") : 0 === f.animatingTo ? f.directionNav.removeClass(t).filter("." + d + "prev").addClass(t).attr("tabindex", "-1") : f.animatingTo === f.last ? f.directionNav.removeClass(t).filter("." + d + "next").addClass(t).attr("tabindex", "-1") : f.directionNav.removeClass(t).removeAttr("tabindex")
				}
			},
			pausePlay: {
				setup: function() {
					var t = x('<div class="' + d + 'pauseplay"><a></a></div>');
					f.controlsContainer ? (f.controlsContainer.append(t), f.pausePlay = x("." + d + "pauseplay a", f.controlsContainer)) : (f.append(t), f.pausePlay = x("." + d + "pauseplay a", f)), w.pausePlay.update(f.vars.slideshow ? d + "pause" : d + "play"), f.pausePlay.bind(s, function(t) {
						t.preventDefault(), "" !== r && r !== t.type || (x(this).hasClass(d + "pause") ? (f.manualPause = !0, f.manualPlay = !1, f.pause()) : (f.manualPause = !1, f.manualPlay = !0, f.play())), "" === r && (r = t.type), w.setToClearWatchedEvent()
					})
				},
				update: function(t) {
					"play" === t ? f.pausePlay.removeClass(d + "pause").addClass(d + "play").html(f.vars.playText) : f.pausePlay.removeClass(d + "play").addClass(d + "pause").html(f.vars.pauseText)
				}
			},
			touch: function() {
				function i(t) {
					e = t.touches[0].pageX, u = t.touches[0].pageY, l = v ? o - u : o - e;
					(!(d = v ? Math.abs(l) < Math.abs(e - a) : Math.abs(l) < Math.abs(u - a)) || 500 < Number(new Date) - c) && (t.preventDefault(), !y && f.transitions && (f.vars.animationLoop || (l /= 0 === f.currentSlide && l < 0 || f.currentSlide === f.last && 0 < l ? Math.abs(l) / r + 2 : 1), f.setProps(s + l, "setTouch")))
				}

				function n() {
					if (p.removeEventListener("touchmove", i, !1), f.animatingTo === f.currentSlide && !d && null !== l) {
						var t = g ? -l : l,
							e = 0 < t ? f.getTarget("next") : f.getTarget("prev");
						f.canAdvance(e) && (Number(new Date) - c < 550 && 50 < Math.abs(t) || Math.abs(t) > r / 2) ? f.flexAnimate(e, f.vars.pauseOnAction) : y || f.flexAnimate(f.currentSlide, f.vars.pauseOnAction, !0)
					}
					p.removeEventListener("touchend", n, !1), s = l = a = o = null
				}
				var o, a, s, r, l, c, d = !1,
					e = 0,
					u = 0,
					h = 0;
				m ? (p.style.msTouchAction = "none", p._gesture = new MSGesture, (p._gesture.target = p).addEventListener("MSPointerDown", function(t) {
					t.stopPropagation(), f.animating ? t.preventDefault() : (f.pause(), p._gesture.addPointer(t.pointerId), h = 0, r = v ? f.h : f.w, c = Number(new Date), s = b && g && f.animatingTo === f.last ? 0 : b && g ? f.limit - (f.itemW + f.vars.itemMargin) * f.move * f.animatingTo : b && f.currentSlide === f.last ? f.limit : b ? (f.itemW + f.vars.itemMargin) * f.move * f.currentSlide : g ? (f.last - f.currentSlide + f.cloneOffset) * r : (f.currentSlide + f.cloneOffset) * r)
				}, !1), p._slider = f, p.addEventListener("MSGestureChange", function(t) {
					t.stopPropagation();
					var e = t.target._slider;
					if (e) {
						var i = -t.translationX,
							n = -t.translationY;
						return l = h += v ? n : i, d = v ? Math.abs(h) < Math.abs(-i) : Math.abs(h) < Math.abs(-n), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
							p._gesture.stop()
						}) : void((!d || 500 < Number(new Date) - c) && (t.preventDefault(), !y && e.transitions && (e.vars.animationLoop || (l = h / (0 === e.currentSlide && h < 0 || e.currentSlide === e.last && 0 < h ? Math.abs(h) / r + 2 : 1)), e.setProps(s + l, "setTouch"))))
					}
				}, !1), p.addEventListener("MSGestureEnd", function(t) {
					t.stopPropagation();
					var e = t.target._slider;
					if (e) {
						if (e.animatingTo === e.currentSlide && !d && null !== l) {
							var i = g ? -l : l,
								n = 0 < i ? e.getTarget("next") : e.getTarget("prev");
							e.canAdvance(n) && (Number(new Date) - c < 550 && 50 < Math.abs(i) || Math.abs(i) > r / 2) ? e.flexAnimate(n, e.vars.pauseOnAction) : y || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
						}
						s = l = a = o = null, h = 0
					}
				}, !1)) : p.addEventListener("touchstart", function(t) {
					f.animating ? t.preventDefault() : !window.navigator.msPointerEnabled && 1 !== t.touches.length || (f.pause(), r = v ? f.h : f.w, c = Number(new Date), e = t.touches[0].pageX, u = t.touches[0].pageY, s = b && g && f.animatingTo === f.last ? 0 : b && g ? f.limit - (f.itemW + f.vars.itemMargin) * f.move * f.animatingTo : b && f.currentSlide === f.last ? f.limit : b ? (f.itemW + f.vars.itemMargin) * f.move * f.currentSlide : g ? (f.last - f.currentSlide + f.cloneOffset) * r : (f.currentSlide + f.cloneOffset) * r, o = v ? u : e, a = v ? e : u, p.addEventListener("touchmove", i, !1), p.addEventListener("touchend", n, !1))
				}, !1)
			},
			resize: function() {
				!f.animating && f.is(":visible") && (b || f.doMath(), y ? w.smoothHeight() : b ? (f.slides.width(f.computedW), f.update(f.pagingCount), f.setProps()) : v ? (f.viewport.height(f.h), f.setProps(f.h, "setTotal")) : (f.vars.smoothHeight && w.smoothHeight(), f.newSlides.width(f.computedW), f.setProps(f.computedW, "setTotal")))
			},
			smoothHeight: function(t) {
				if (!v || y) {
					var e = y ? f : f.viewport;
					t ? e.animate({
						height: f.slides.eq(f.animatingTo).height()
					}, t) : e.height(f.slides.eq(f.animatingTo).height())
				}
			},
			sync: function(t) {
				var e = x(f.vars.sync).data("flexslider"),
					i = f.animatingTo;
				switch (t) {
					case "animate":
						e.flexAnimate(i, f.vars.pauseOnAction, !1, !0);
						break;
					case "play":
						e.playing || e.asNav || e.play();
						break;
					case "pause":
						e.pause()
				}
			},
			uniqueID: function(t) {
				return t.find("[id]").each(function() {
					var t = x(this);
					t.attr("id", t.attr("id") + "_clone")
				}), t
			},
			pauseInvisible: {
				visProp: null,
				init: function() {
					var t = ["webkit", "moz", "ms", "o"];
					if ("hidden" in document) return "hidden";
					for (var e = 0; e < t.length; e++) t[e] + "Hidden" in document && (w.pauseInvisible.visProp = t[e] + "Hidden");
					if (w.pauseInvisible.visProp) {
						var i = w.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
						document.addEventListener(i, function() {
							w.pauseInvisible.isHidden() ? f.startTimeout ? clearTimeout(f.startTimeout) : f.pause() : !f.started && 0 < f.vars.initDelay ? setTimeout(f.play, f.vars.initDelay) : f.play()
						})
					}
				},
				isHidden: function() {
					return document[w.pauseInvisible.visProp] || !1
				}
			},
			setToClearWatchedEvent: function() {
				clearTimeout(e), e = setTimeout(function() {
					r = ""
				}, 3e3)
			}
		}, f.flexAnimate = function(t, e, i, n, o) {
			if (f.vars.animationLoop || t === f.currentSlide || (f.direction = t > f.currentSlide ? "next" : "prev"), h && 1 === f.pagingCount && (f.direction = f.currentItem < t ? "next" : "prev"), !f.animating && (f.canAdvance(t, o) || i) && f.is(":visible")) {
				if (h && n) {
					var a = x(f.vars.asNavFor).data("flexslider");
					if (f.atEnd = 0 === t || t === f.count - 1, a.flexAnimate(t, !0, !1, !0, o), f.direction = f.currentItem < t ? "next" : "prev", a.direction = f.direction, Math.ceil((t + 1) / f.visible) - 1 === f.currentSlide || 0 === t) return f.currentItem = t, f.slides.removeClass(d + "active-slide").eq(t).addClass(d + "active-slide"), !1;
					f.currentItem = t, f.slides.removeClass(d + "active-slide").eq(t).addClass(d + "active-slide"), t = Math.floor(t / f.visible)
				}
				if (f.animating = !0, f.animatingTo = t, e && f.pause(), f.vars.before(f), f.syncExists && !o && w.sync("animate"), f.vars.controlNav && w.controlNav.active(), b || f.slides.removeClass(d + "active-slide").eq(t).addClass(d + "active-slide"), f.atEnd = 0 === t || t === f.last, f.vars.directionNav && w.directionNav.update(), t === f.last && (f.vars.end(f), f.vars.animationLoop || f.pause()), y) u ? (f.slides.eq(f.currentSlide).css({
					opacity: 0,
					zIndex: 1
				}), f.slides.eq(t).css({
					opacity: 1,
					zIndex: 2
				}), f.wrapup(c)) : (f.slides.eq(f.currentSlide).css({
					zIndex: 1
				}).animate({
					opacity: 0
				}, f.vars.animationSpeed, f.vars.easing), f.slides.eq(t).css({
					zIndex: 2
				}).animate({
					opacity: 1
				}, f.vars.animationSpeed, f.vars.easing, f.wrapup));
				else {
					var s, r, l, c = v ? f.slides.filter(":first").height() : f.computedW;
					r = b ? (s = f.vars.itemMargin, (l = (f.itemW + s) * f.move * f.animatingTo) > f.limit && 1 !== f.visible ? f.limit : l) : 0 === f.currentSlide && t === f.count - 1 && f.vars.animationLoop && "next" !== f.direction ? g ? (f.count + f.cloneOffset) * c : 0 : f.currentSlide === f.last && 0 === t && f.vars.animationLoop && "prev" !== f.direction ? g ? 0 : (f.count + 1) * c : g ? (f.count - 1 - t + f.cloneOffset) * c : (t + f.cloneOffset) * c, f.setProps(r, "", f.vars.animationSpeed), f.transitions ? (f.vars.animationLoop && f.atEnd || (f.animating = !1, f.currentSlide = f.animatingTo), f.container.unbind("webkitTransitionEnd transitionend"), f.container.bind("webkitTransitionEnd transitionend", function() {
						clearTimeout(f.ensureAnimationEnd), f.wrapup(c)
					}), clearTimeout(f.ensureAnimationEnd), f.ensureAnimationEnd = setTimeout(function() {
						f.wrapup(c)
					}, f.vars.animationSpeed + 100)) : f.container.animate(f.args, f.vars.animationSpeed, f.vars.easing, function() {
						f.wrapup(c)
					})
				}
				f.vars.smoothHeight && w.smoothHeight(f.vars.animationSpeed)
			}
		}, f.wrapup = function(t) {
			y || b || (0 === f.currentSlide && f.animatingTo === f.last && f.vars.animationLoop ? f.setProps(t, "jumpEnd") : f.currentSlide === f.last && 0 === f.animatingTo && f.vars.animationLoop && f.setProps(t, "jumpStart")), f.animating = !1, f.currentSlide = f.animatingTo, f.vars.after(f)
		}, f.animateSlides = function() {
			f.animating || f.flexAnimate(f.getTarget("next"))
		}, f.pause = function() {
			clearInterval(f.animatedSlides), f.animatedSlides = null, f.playing = !1, f.vars.pausePlay && w.pausePlay.update("play"), f.syncExists && w.sync("pause")
		}, f.play = function() {
			f.playing && clearInterval(f.animatedSlides), f.animatedSlides = f.animatedSlides || setInterval(f.animateSlides, f.vars.slideshowSpeed), f.started = f.playing = !0, f.vars.pausePlay && w.pausePlay.update("pause"), f.syncExists && w.sync("play")
		}, f.stop = function() {
			f.pause(), f.stopped = !0
		}, f.canAdvance = function(t, e) {
			var i = h ? f.pagingCount - 1 : f.last;
			return !!e || (h && f.currentItem === f.count - 1 && 0 === t && "prev" === f.direction || (!h || 0 !== f.currentItem || t !== f.pagingCount - 1 || "next" === f.direction) && ((t !== f.currentSlide || h) && (!!f.vars.animationLoop || (!f.atEnd || 0 !== f.currentSlide || t !== i || "next" === f.direction) && (!f.atEnd || f.currentSlide !== i || 0 !== t || "next" !== f.direction))))
		}, f.getTarget = function(t) {
			return "next" === (f.direction = t) ? f.currentSlide === f.last ? 0 : f.currentSlide + 1 : 0 === f.currentSlide ? f.last : f.currentSlide - 1
		}, f.setProps = function(t, e, i) {
			var n, o = (n = t || (f.itemW + f.vars.itemMargin) * f.move * f.animatingTo, -1 * function() {
				if (b) return "setTouch" === e ? t : g && f.animatingTo === f.last ? 0 : g ? f.limit - (f.itemW + f.vars.itemMargin) * f.move * f.animatingTo : f.animatingTo === f.last ? f.limit : n;
				switch (e) {
					case "setTotal":
						return g ? (f.count - 1 - f.currentSlide + f.cloneOffset) * t : (f.currentSlide + f.cloneOffset) * t;
					case "setTouch":
						return t;
					case "jumpEnd":
						return g ? t : f.count * t;
					case "jumpStart":
						return g ? f.count * t : t;
					default:
						return t
				}
			}() + "px");
			f.transitions && (o = v ? "translate3d(0," + o + ",0)" : "translate3d(" + o + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", f.container.css("-" + f.pfx + "-transition-duration", i), f.container.css("transition-duration", i)), f.args[f.prop] = o, !f.transitions && void 0 !== i || f.container.css(f.args), f.container.css("transform", o)
		}, f.setup = function(t) {
			var e, i;
			y ? (f.slides.css({
				width: "100%",
				float: "left",
				marginRight: "-100%",
				position: "relative"
			}), "init" === t && (u ? f.slides.css({
				opacity: 0,
				display: "block",
				webkitTransition: "opacity " + f.vars.animationSpeed / 1e3 + "s ease",
				zIndex: 1
			}).eq(f.currentSlide).css({
				opacity: 1,
				zIndex: 2
			}) : f.slides.css({
				opacity: 0,
				display: "block",
				zIndex: 1
			}).eq(f.currentSlide).css({
				zIndex: 2
			}).animate({
				opacity: 1
			}, f.vars.animationSpeed, f.vars.easing)), f.vars.smoothHeight && w.smoothHeight()) : ("init" === t && (f.viewport = x('<div class="' + d + 'viewport"></div>').css({
				overflow: "hidden",
				position: "relative"
			}).appendTo(f).append(f.container), f.cloneCount = 0, f.cloneOffset = 0, g && (i = x.makeArray(f.slides).reverse(), f.slides = x(i), f.container.empty().append(f.slides))), f.vars.animationLoop && !b && (f.cloneCount = 2, f.cloneOffset = 1, "init" !== t && f.container.find(".clone").remove(), w.uniqueID(f.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).appendTo(f.container), w.uniqueID(f.slides.last().clone().addClass("clone").attr("aria-hidden", "true")).prependTo(f.container)), f.newSlides = x(f.vars.selector, f), e = g ? f.count - 1 - f.currentSlide + f.cloneOffset : f.currentSlide + f.cloneOffset, v && !b ? (f.container.height(200 * (f.count + f.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
				f.newSlides.css({
					display: "block"
				}), f.doMath(), f.viewport.height(f.h), f.setProps(e * f.h, "init")
			}, "init" === t ? 100 : 0)) : (f.container.width(200 * (f.count + f.cloneCount) + "%"), f.setProps(e * f.computedW, "init"), setTimeout(function() {
				f.doMath(), f.newSlides.css({
					width: f.computedW,
					float: "left",
					display: "block"
				}), f.vars.smoothHeight && w.smoothHeight()
			}, "init" === t ? 100 : 0)));
			b || f.slides.removeClass(d + "active-slide").eq(f.currentSlide).addClass(d + "active-slide"), f.vars.init(f)
		}, f.doMath = function() {
			var t = f.slides.first(),
				e = f.vars.itemMargin,
				i = f.vars.minItems,
				n = f.vars.maxItems;
			f.w = void 0 === f.viewport ? f.width() : f.viewport.width(), f.h = t.height(), f.boxPadding = t.outerWidth() - t.width(), b ? (f.itemT = f.vars.itemWidth + e, f.minW = i ? i * f.itemT : f.w, f.maxW = n ? n * f.itemT - e : f.w, f.itemW = f.minW > f.w ? (f.w - e * (i - 1)) / i : f.maxW < f.w ? (f.w - e * (n - 1)) / n : f.vars.itemWidth > f.w ? f.w : f.vars.itemWidth, f.visible = Math.floor(f.w / f.itemW), f.move = 0 < f.vars.move && f.vars.move < f.visible ? f.vars.move : f.visible, f.pagingCount = Math.ceil((f.count - f.visible) / f.move + 1), f.last = f.pagingCount - 1, f.limit = 1 === f.pagingCount ? 0 : f.vars.itemWidth > f.w ? f.itemW * (f.count - 1) + e * (f.count - 1) : (f.itemW + e) * f.count - f.w - e) : (f.itemW = f.w, f.pagingCount = f.count, f.last = f.count - 1), f.computedW = f.itemW - f.boxPadding
		}, f.update = function(t, e) {
			f.doMath(), b || (t < f.currentSlide ? f.currentSlide += 1 : t <= f.currentSlide && 0 !== t && --f.currentSlide, f.animatingTo = f.currentSlide), f.vars.controlNav && !f.manualControls && ("add" === e && !b || f.pagingCount > f.controlNav.length ? w.controlNav.update("add") : ("remove" === e && !b || f.pagingCount < f.controlNav.length) && (b && f.currentSlide > f.last && (--f.currentSlide, --f.animatingTo), w.controlNav.update("remove", f.last))), f.vars.directionNav && w.directionNav.update()
		}, f.addSlide = function(t, e) {
			var i = x(t);
			f.count += 1, f.last = f.count - 1, v && g ? void 0 !== e ? f.slides.eq(f.count - e).after(i) : f.container.prepend(i) : void 0 !== e ? f.slides.eq(e).before(i) : f.container.append(i), f.update(e, "add"), f.slides = x(f.vars.selector + ":not(.clone)", f), f.setup(), f.vars.added(f)
		}, f.removeSlide = function(t) {
			var e = isNaN(t) ? f.slides.index(x(t)) : t;
			--f.count, f.last = f.count - 1, isNaN(t) ? x(t, f.slides).remove() : v && g ? f.slides.eq(f.last).remove() : f.slides.eq(t).remove(), f.doMath(), f.update(e, "remove"), f.slides = x(f.vars.selector + ":not(.clone)", f), f.setup(), f.vars.removed(f)
		}, w.init()
	}, x(window).blur(function() {
		focused = !1
	}).focus(function() {
		focused = !0
	}), x.flexslider.defaults = {
		namespace: "flex-",
		selector: ".slides > li",
		animation: "fade",
		easing: "swing",
		direction: "horizontal",
		reverse: !1,
		animationLoop: !0,
		smoothHeight: !1,
		startAt: 0,
		slideshow: !0,
		slideshowSpeed: 7e3,
		animationSpeed: 600,
		initDelay: 0,
		randomize: !1,
		thumbCaptions: !1,
		pauseOnAction: !0,
		pauseOnHover: !1,
		pauseInvisible: !0,
		useCSS: !0,
		touch: !0,
		video: !1,
		controlNav: !0,
		directionNav: !0,
		prevText: "Previous",
		nextText: "Next",
		keyboard: !0,
		multipleKeyboard: !1,
		mousewheel: !1,
		pausePlay: !1,
		pauseText: "Pause",
		playText: "Play",
		controlsContainer: "",
		manualControls: "",
		sync: "",
		asNavFor: "",
		itemWidth: 0,
		itemMargin: 0,
		minItems: 1,
		maxItems: 0,
		move: 0,
		allowOneSlide: !0,
		start: function() {},
		before: function() {},
		after: function() {},
		end: function() {},
		added: function() {},
		removed: function() {},
		init: function() {}
	}, x.fn.flexslider = function(n) {
		if (void 0 === n && (n = {}), "object" == typeof n) return this.each(function() {
			var t = x(this),
				e = n.selector ? n.selector : ".slides > li",
				i = t.find(e);
			1 === i.length && !0 === n.allowOneSlide || 0 === i.length ? (i.fadeIn(400), n.start && n.start(t)) : void 0 === t.data("flexslider") && new x.flexslider(this, n)
		});
		var t = x(this).data("flexslider");
		switch (n) {
			case "play":
				t.play();
				break;
			case "pause":
				t.pause();
				break;
			case "stop":
				t.stop();
				break;
			case "next":
				t.flexAnimate(t.getTarget("next"), !0);
				break;
			case "prev":
			case "previous":
				t.flexAnimate(t.getTarget("prev"), !0);
				break;
			default:
				"number" == typeof n && t.flexAnimate(n, !0)
		}
	}
}(jQuery),
function(o) {
	"use strict";
	o.fn.fitVids = function(t) {
		var i = {
			customSelector: null,
			ignore: null
		};
		if (!document.getElementById("fit-vids-style")) {
			var e = document.head || document.getElementsByTagName("head")[0],
				n = document.createElement("div");
			n.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', e.appendChild(n.childNodes[1])
		}
		return t && o.extend(i, t), this.each(function() {
			var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
			i.customSelector && t.push(i.customSelector);
			var n = ".fitvidsignore";
			i.ignore && (n = n + ", " + i.ignore);
			var e = o(this).find(t.join(","));
			(e = (e = e.not("object object")).not(n)).each(function() {
				var t = o(this);
				if (!(0 < t.parents(n).length || "embed" === this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
					1 == (t.css("width") && t.css("width").indexOf("%") || t.css("height") && t.css("height").indexOf("%")) && t.removeAttr("width").removeAttr("height"), t.css("height") || t.css("width") || !isNaN(t.attr("height")) && !isNaN(t.attr("width")) || (t.attr("height", 9), t.attr("width", 16));
					var e = ("object" === this.tagName.toLowerCase() || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height()) / (isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10));
					if (!t.attr("name")) {
						var i = "fitvid" + o.fn.fitVids._count;
						t.attr("name", i), o.fn.fitVids._count++
					}
					t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * e + "%"), t.removeAttr("height").removeAttr("width")
				}
			})
		})
	}, o.fn.fitVids._count = 0
}(window.jQuery || window.Zepto),
function(d) {
	function e() {
		var t, e, i, o = d(),
			n = 0;
		if (d.each(p, function(t, e) {
				var i = e.data.selector,
					n = e.$element;
				o = o.add(i ? n.find(i) : n)
			}), t = o.length)
			for (u = u || (i = e = void 0, (i = {
					height: m.innerHeight,
					width: m.innerWidth
				}).height || !(e = f.compatMode) && d.support.boxModel || (i = {
					height: (e = "CSS1Compat" === e ? v : f.body).clientHeight,
					width: e.clientWidth
				}), i), h = h || {
					top: m.pageYOffset || v.scrollTop || f.body.scrollTop,
					left: m.pageXOffset || v.scrollLeft || f.body.scrollLeft
				}; n < t; n++)
				if (d.contains(v, o[n])) {
					var a = d(o[n]),
						s = a.height(),
						r = a.width(),
						l = a.offset(),
						c = a.data("inview");
					if (!h || !u) break;
					l.top + s > h.top && l.top < h.top + u.height && l.left + r > h.left && l.left < h.left + u.width ? (l = (r = h.left > l.left ? "right" : h.left + u.width < l.left + r ? "left" : "both") + "-" + (s = h.top > l.top ? "bottom" : h.top + u.height < l.top + s ? "top" : "both"), c && c === l || a.data("inview", l).trigger("inview", [!0, r, s])) : c && a.data("inview", !1).trigger("inview", [!1])
				}
	}
	var u, h, i, p = {},
		f = document,
		m = window,
		v = f.documentElement,
		n = d.expando;
	d.event.special.inview = {
		add: function(t) {
			p[t.guid + "-" + this[n]] = {
				data: t,
				$element: d(this)
			}, i || d.isEmptyObject(p) || (i = setInterval(e, 250))
		},
		remove: function(t) {
			try {
				delete p[t.guid + "-" + this[n]]
			} catch (t) {}
			d.isEmptyObject(p) && (clearInterval(i), i = null)
		}
	}, d(m).bind("scroll resize", function() {
		u = h = null
	}), !v.addEventListener && v.attachEvent && v.attachEvent("onfocusin", function() {
		h = null
	})
}(jQuery),
function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.OnScreen = e()
}(this, function() {
	"use strict";

	function a(t) {
		var e = arguments.length <= 1 || void 0 === arguments[1] ? {
			tolerance: 0,
			container: window
		} : arguments[1];
		if (!t) return !1;
		"string" == typeof t && (t = document.querySelector(t)), "string" == typeof e && (e = {
			container: document.querySelector(e)
		});
		var i = void 0,
			n = t.getBoundingClientRect();
		if (e.container === window) i = 0 < n.bottom - e.tolerance && 0 < n.right - e.tolerance && n.left + e.tolerance < (window.innerWidth || document.documentElement.clientWidth) && n.top + e.tolerance < (window.innerHeight || document.documentElement.clientHeight);
		else {
			var o = e.container.getBoundingClientRect();
			i = t.offsetTop + t.clientHeight - e.tolerance > e.container.scrollTop && t.offsetLeft + t.clientWidth - e.tolerance > e.container.scrollLeft && t.offsetLeft + e.tolerance < o.width + e.container.scrollLeft && t.offsetTop + e.tolerance < o.height + e.container.scrollTop
		}
		return i
	}

	function t() {
		var t, e, i, n, o = this,
			a = arguments.length <= 0 || void 0 === arguments[0] ? {
				tolerance: 0,
				debounce: 100,
				container: window
			} : arguments[0];
		this.options = {}, this.trackedElements = {}, Object.defineProperties(this.options, {
			container: {
				configurable: !1,
				enumerable: !1,
				get: function() {
					var t = void 0;
					return "string" == typeof a.container ? t = document.querySelector(a.container) : a.container instanceof HTMLElement && (t = a.container), t || window
				},
				set: function(t) {
					a.container = t
				}
			},
			debounce: {
				get: function() {
					return parseInt(a.debounce, 10) || 100
				},
				set: function(t) {
					a.debounce = t
				}
			},
			tolerance: {
				get: function() {
					return parseInt(a.tolerance, 10) || 0
				},
				set: function(t) {
					a.tolerance = t
				}
			}
		}), Object.defineProperty(this, "_scroll", {
			enumerable: !1,
			configurable: !1,
			writable: !1,
			value: this._debouncedScroll.call(this)
		}), t = document.querySelector("body"), e = function() {
			Object.keys(o.trackedElements).forEach(function(t) {
				o.on("enter", t), o.on("leave", t)
			})
		}, i = window.MutationObserver || window.WebKitMutationObserver, n = window.addEventListener, i ? new i(function(t) {
			(t[0].addedNodes.length || t[0].removedNodes.length) && e()
		}).observe(t, {
			childList: !0,
			subtree: !0
		}) : n && (t.addEventListener("DOMNodeInserted", e, !1), t.addEventListener("DOMNodeRemoved", e, !1)), this.attach()
	}
	return Object.defineProperties(t.prototype, {
		_debouncedScroll: {
			configurable: !1,
			writable: !1,
			enumerable: !1,
			value: function() {
				var t = this,
					e = void 0;
				return function() {
					clearTimeout(e), e = setTimeout(function() {
						! function(t, e) {
							var i = arguments.length <= 0 || void 0 === t ? {} : t,
								n = arguments.length <= 1 || void 0 === e ? {
									tolerance: 0
								} : e,
								o = Object.keys(i);
							o.length && o.forEach(function(e) {
								i[e].nodes.forEach(function(t) {
									a(t.node, n) ? (t.wasVisible = t.isVisible, t.isVisible = !0) : (t.wasVisible = t.isVisible, t.isVisible = !1), !0 === t.isVisible && !1 === t.wasVisible && "function" == typeof i[e].enter && i[e].enter(t.node), !1 === t.isVisible && !0 === t.wasVisible && "function" == typeof i[e].leave && i[e].leave(t.node)
								})
							})
						}(t.trackedElements, t.options)
					}, t.options.throttle)
				}
			}
		},
		attach: {
			configurable: !1,
			writable: !1,
			enumerable: !1,
			value: function() {
				var t = this.options.container;
				t instanceof HTMLElement && "static" === window.getComputedStyle(t).position && (t.style.position = "relative"), t.addEventListener("scroll", this._scroll), window.addEventListener("resize", this._scroll), this._scroll(), this.attached = !0
			}
		},
		destroy: {
			configurable: !1,
			writable: !1,
			enumerable: !1,
			value: function() {
				this.options.container.removeEventListener("scroll", this._scroll), window.removeEventListener("resize", this._scroll), this.attached = !1
			}
		},
		off: {
			configurable: !1,
			writable: !1,
			enumerable: !1,
			value: function(t, e) {
				this.trackedElements.hasOwnProperty(e) && this.trackedElements[e][t] && delete this.trackedElements[e][t], this.trackedElements[e].enter || this.trackedElements[e].leave || delete this.trackedElements[e]
			}
		},
		on: {
			configurable: !1,
			writable: !1,
			enumerable: !1,
			value: function(t, e, i) {
				if (!t) throw new Error("No event given. Choose either enter or leave");
				if (!e) throw new Error("No selector to track");
				if (["enter", "leave"].indexOf(t) < 0) throw new Error(t + " event is not supported");
				this.trackedElements.hasOwnProperty(e) || (this.trackedElements[e] = {}), this.trackedElements[e].nodes = [];
				for (var n = 0; n < document.querySelectorAll(e).length; n++) {
					var o = {
						isVisible: !1,
						wasVisible: !1,
						node: document.querySelectorAll(e)[n]
					};
					this.trackedElements[e].nodes.push(o)
				}
				"function" == typeof i && (this.trackedElements[e][t] = i)
			}
		}
	}), t.check = a, t
}),
function(t, e, o) {
	var i, n, a = "[object OperaMini]" == Object.prototype.toString.call(t.operamini),
		s = "placeholder" in e.createElement("input") && !a,
		r = "placeholder" in e.createElement("textarea") && !a,
		l = o.fn,
		c = o.valHooks,
		d = o.propHooks;

	function u(t, e) {
		var i = this,
			n = o(i);
		if (i.value == n.attr("placeholder") && n.hasClass("placeholder"))
			if (n.data("placeholder-password")) {
				if (n = n.hide().next().show().attr("id", n.removeAttr("id").data("placeholder-id")), !0 === t) return n[0].value = e;
				n.focus()
			} else i.value = "", n.removeClass("placeholder"), i == p() && i.select()
	}

	function h() {
		var e, t = o(this),
			i = this.id;
		if ("" == this.value) {
			if ("password" == this.type) {
				if (!t.data("placeholder-textinput")) {
					try {
						e = t.clone().attr({
							type: "text"
						})
					} catch (t) {
						e = o("<input>").attr(o.extend(function(t) {
							var i = {},
								n = /^jQuery\d+$/;
							return o.each(t.attributes, function(t, e) {
								e.specified && !n.test(e.name) && (i[e.name] = e.value)
							}), i
						}(this), {
							type: "text"
						}))
					}
					e.removeAttr("name").data({
						"placeholder-password": t,
						"placeholder-id": i
					}).bind("focus.placeholder", u), t.data({
						"placeholder-textinput": e,
						"placeholder-id": i
					}).before(e)
				}
				t = t.removeAttr("id").hide().prev().attr("id", i).show()
			}
			t.addClass("placeholder"), t[0].value = t.attr("placeholder")
		} else t.removeClass("placeholder")
	}

	function p() {
		try {
			return e.activeElement
		} catch (t) {}
	}
	s && r ? (n = l.placeholder = function() {
		return this
	}).input = n.textarea = !0 : ((n = l.placeholder = function() {
		return this.filter((s ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
			"focus.placeholder": u,
			"blur.placeholder": h
		}).data("placeholder-enabled", !0).trigger("blur.placeholder"), this
	}).input = s, n.textarea = r, i = {
		get: function(t) {
			var e = o(t),
				i = e.data("placeholder-password");
			return i ? i[0].value : e.data("placeholder-enabled") && e.hasClass("placeholder") ? "" : t.value
		},
		set: function(t, e) {
			var i = o(t),
				n = i.data("placeholder-password");
			return n ? n[0].value = e : i.data("placeholder-enabled") ? ("" == e ? (t.value = e, t != p() && h.call(t)) : i.hasClass("placeholder") && u.call(t, !0, e) || (t.value = e), i) : t.value = e
		}
	}, s || (c.input = i, d.value = i), r || (c.textarea = i, d.value = i), o(function() {
		o(e).delegate("form", "submit.placeholder", function() {
			var t = o(".placeholder", this).each(u);
			setTimeout(function() {
				t.each(h)
			}, 10)
		})
	}), o(t).bind("beforeunload.placeholder", function() {
		o(".placeholder").each(function() {
			this.value = ""
		})
	}))
}(this, document, jQuery), blockFotoramaData = !0, fotoramaVersion = "4.6.2",
	function(a, ye, we, xe, l) {
		"use strict";

		function Ce() {}

		function Te(t, e, i) {
			return Math.max(isNaN(e) ? -1 / 0 : e, Math.min(isNaN(i) ? 1 / 0 : i, t))
		}

		function Se(t) {
			var e = {};
			return Fi ? e.transform = "translate3d(" + t + "px,0,0)" : e.left = t, e
		}

		function ke(t) {
			return {
				"transition-duration": t + "ms"
			}
		}

		function n(t, e) {
			return isNaN(t) ? e : t
		}

		function Ee(t, e) {
			return n(+String(t).replace(e || "px", ""))
		}

		function $e(t, e) {
			return n((/%$/.test(i = t) ? Ee(i, "%") : l) / 100 * e, Ee(t));
			var i
		}

		function _e(t) {
			return (!isNaN(Ee(t)) || !isNaN(Ee(t, "%"))) && t
		}

		function Me(t, e, i, n) {
			return (t - (n || 0)) * (e + (i || 0))
		}

		function s(t, e, i, n) {
			var o, a = t.data();
			a && (a.onEndFn = function() {
				o || (o = !0, clearTimeout(a.tT), i())
			}, a.tProp = e, clearTimeout(a.tT), a.tT = setTimeout(function() {
				a.onEndFn()
			}, 1.5 * n), function(t) {
				var e = t.data();
				if (!e.tEnd) {
					Ue(t[0], {
						WebkitTransition: "webkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "oTransitionEnd otransitionend",
						msTransition: "MSTransitionEnd",
						transition: "transitionend"
					} [c.prefixed("transition")], function(t) {
						e.tProp && t.propertyName.match(e.tProp) && e.onEndFn()
					}), e.tEnd = !0
				}
			}(t))
		}

		function Ne(i, t) {
			if (i.length) {
				var e = i.data();
				Fi ? (i.css(ke(0)), e.onEndFn = Ce, clearTimeout(e.tT)) : i.stop();
				var n = Ae(t, function() {
					return t = i, Fi ? +((e = t.css("transform")).match(/ma/) && e.match(/-?\d+(?!d)/g)[e.match(/3d/) ? 12 : 4]) : +t.css("left").replace("px", "");
					var t, e
				});
				return i.css(Se(n)), n
			}
		}

		function Ae() {
			for (var t, e = 0, i = arguments.length; e < i && "number" != typeof(t = e ? arguments[e]() : arguments[e]); e++);
			return t
		}

		function r(t, e) {
			return Math.round(t + (e - t) / 1.5)
		}

		function Ie() {
			return Ie.p = Ie.p || ("https:" === we.protocol ? "https://" : "http://")
		}

		function Pe(t, e) {
			if ("string" != typeof t) return t;
			var i, n, o, a;
			if (i = t, (n = ye.createElement("a")).href = i, (t = n).host.match(/youtube\.com/) && t.search) {
				if (o = t.search.split("v=")[1]) {
					var s = o.indexOf("&"); - 1 !== s && (o = o.substring(0, s)), a = "youtube"
				}
			} else t.host.match(/youtube\.com|youtu\.be/) ? (o = t.pathname.replace(/^\/(embed\/|v\/)?/, "").replace(/\/.*/, ""), a = "youtube") : t.host.match(/vimeo\.com/) && (a = "vimeo", o = t.pathname.replace(/^\/(video\/)?/, "").replace(/\/.*/, ""));
			return o && a || !e || (o = t.href, a = "custom"), !!o && {
				id: o,
				type: a,
				s: t.search.replace(/^\?/, ""),
				p: Ie()
			}
		}

		function Oe(t, e, i, n) {
			for (var o = 0, a = t.length; o < a; o++) {
				var s = t[o];
				if (s.i === i && s.thumbsReady) {
					var r = {
						videoReady: !0
					};
					r[Ui] = r[Ki] = r[Qi] = !1, n.splice(o, 1, xe.extend({}, s, r, e));
					break
				}
			}
		}

		function Le(t) {
			function u(t, e, i) {
				var n = i.thumb && i.img !== i.thumb,
					o = Ee(i.width || t.attr("width")),
					a = Ee(i.height || t.attr("height"));
				xe.extend(i, {
					width: o,
					height: a,
					thumbratio: Ve(i.thumbratio || Ee(i.thumbwidth || e && e.attr("width") || n || o) / Ee(i.thumbheight || e && e.attr("height") || n || a))
				})
			}
			var h = [];
			return t.children().each(function() {
				var t, e, i, n, o, a, s, r, l, c = xe(this),
					d = Be(xe.extend(c.data(), {
						id: c.attr("id")
					}));
				if (c.is("a, img")) e = d, i = !0, n = (t = c).children("img").eq(0), o = t.attr("href"), a = t.attr("src"), s = n.attr("src"), r = e.video, (l = !!i && Pe(o, !0 === r)) ? o = !1 : l = r, u(t, n, xe.extend(e, {
					video: l,
					img: e.img || o || a || s,
					thumb: e.thumb || s || a || o
				}));
				else {
					if (c.is(":empty")) return;
					u(c, null, xe.extend(d, {
						html: this,
						_html: c.html()
					}))
				}
				h.push(d)
			}), h
		}

		function je(t, e, i, n) {
			return je.i || (je.i = 1, je.ii = [!0]), void 0 === je.ii[n = n || je.i] && (je.ii[n] = !0), t() ? e() : je.ii[n] && setTimeout(function() {
				je.ii[n] && je(t, e, i, n)
			}, i || 100), je.i++
		}

		function De(t, e, i, n) {
			var o, a = t.data(),
				s = a.measures;
			if (s && (!a.l || a.l.W !== s.width || a.l.H !== s.height || a.l.r !== s.ratio || a.l.w !== e.w || a.l.h !== e.h || a.l.m !== i || a.l.p !== n)) {
				var r = s.width,
					l = s.height,
					c = e.w / e.h,
					d = s.ratio >= c,
					u = "scaledown" === i,
					h = "contain" === i,
					p = "cover" === i,
					f = {
						x: _e((o = ((o = n) + "").split(/\s+/))[0]) || T,
						y: _e(o[1]) || T
					};
				d && (u || h) || !d && p ? l = (r = Te(e.w, 0, u ? r : 1 / 0)) / s.ratio : (d && p || !d && (u || h)) && (r = (l = Te(e.h, 0, u ? l : 1 / 0)) * s.ratio), t.css({
					width: Math.ceil(r),
					height: Math.ceil(l),
					left: Math.floor($e(f.x, e.w - r)),
					top: Math.floor($e(f.y, e.h - l))
				}), a.l = {
					W: s.width,
					H: s.height,
					r: s.ratio,
					w: e.w,
					h: e.h,
					m: i,
					p: n
				}
			}
			return !0
		}

		function We(t, e, i) {
			return e !== i && (t <= e ? "left" : i <= t ? "right" : "left right")
		}

		function Fe(t, e, i, n) {
			if (!i) return !1;
			if (!isNaN(t)) return t - (n ? 0 : 1);
			for (var o, a = 0, s = e.length; a < s; a++) {
				if (e[a].id === t) {
					o = a;
					break
				}
			}
			return o
		}

		function Re(t, e) {
			return '<div class="' + t + '">' + (e || "") + "</div>"
		}

		function qe(t) {
			for (var e = t.length; e;) {
				var i = Math.floor(Math.random() * e--),
					n = t[e];
				t[e] = t[i], t[i] = n
			}
			return t
		}

		function ze(t) {
			return "[object Array]" == Object.prototype.toString.call(t) && xe.map(t, function(t) {
				return xe.extend({}, t)
			})
		}

		function He(t, e, i) {
			t.scrollLeft(e || 0).scrollTop(i || 0)
		}

		function Be(t) {
			if (t) {
				var i = {};
				return xe.each(t, function(t, e) {
					i[t.toLowerCase()] = e
				}), i
			}
		}

		function Ve(t) {
			if (t) {
				var e = +t;
				return isNaN(e) ? (e = t.split("/"))[0] / e[1] || l : e
			}
		}

		function Ue(t, e, i, n) {
			e && (t.addEventListener ? t.addEventListener(e, i, !!n) : t.attachEvent("on" + e, i))
		}

		function Qe(t) {
			return {
				tabindex: -1 * t + "",
				disabled: t
			}
		}

		function Ke(e, i) {
			Ue(e, "keyup", function(t) {
				e.getAttribute("disabled") || 13 == t.keyCode && i.call(e, t)
			})
		}

		function Ye(e, i) {
			Ue(e, "focus", e.onfocusin = function(t) {
				i.call(e, t)
			}, !0)
		}

		function Xe(t, e) {
			t.preventDefault ? t.preventDefault() : t.returnValue = !1, e && t.stopPropagation && t.stopPropagation()
		}

		function Ge(t) {
			return t ? ">" : "<"
		}

		function Je(t, e) {
			var i = t.data(),
				n = Math.round(e.pos),
				o = function() {
					i.sliding = !1, (e.onEnd || Ce)()
				};
			void 0 !== e.overPos && e.overPos !== e.pos && (n = e.overPos, o = function() {
				Je(t, xe.extend({}, e, {
					overPos: e.pos,
					time: Math.max(Vi, e.time / 2)
				}))
			});
			var a = xe.extend(Se(n), e.width && {
				width: e.width
			});
			i.sliding = !0, Fi ? (t.css(xe.extend(ke(e.time), a)), 10 < e.time ? s(t, "transform", o, e.time) : o()) : t.stop().animate(a, e.time, C, o)
		}

		function g(t) {
			var e = (t.touches || [])[0] || t;
			t._x = e.pageX, t._y = e.clientY, t._now = xe.now()
		}

		function Ze(t, s) {
			function e(t) {
				return o = xe(t.target), v.checked = u = h = f = !1, l || v.flow || t.touches && 1 < t.touches.length || 1 < t.which || b && b.type !== t.type && w || (u = s.select && o.is(s.select, m)) ? u : (d = "touchstart" === t.type, h = o.is("a, a *", m), a = v.control, p = v.noMove || v.noSwipe || a ? 16 : v.snap ? 0 : 4, g(t), c = b = t, y = t.type.replace(/down|start/, "move").replace(/Down/, "Move"), (s.onStart || Ce).call(m, t, {
					control: a,
					$target: o
				}), l = v.flow = !0, void(d && !v.go || Xe(t)))
			}

			function i(t) {
				if (t.touches && 1 < t.touches.length || Hi && !t.isPrimary || y !== t.type || !l) return l && r(), void(s.onTouchEnd || Ce)();
				g(t);
				var e = Math.abs(t._x - c._x),
					i = Math.abs(t._y - c._y),
					n = e - i,
					o = (v.go || v.x || 0 <= n) && !v.noSwipe,
					a = n < 0;
				d && !v.checked ? (l = o) && Xe(t) : (Xe(t), (s.onMove || Ce).call(m, t, {
					touch: d
				})), !f && Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) > p && (f = !0), v.checked = v.checked || o || a
			}

			function r(t) {
				(s.onTouchEnd || Ce)();
				var e = l;
				v.control = l = !1, e && (v.flow = !1), !e || h && !v.checked || (t && Xe(t), w = !0, clearTimeout(x), x = setTimeout(function() {
					w = !1
				}, 1e3), (s.onEnd || Ce).call(m, {
					moved: f,
					$target: o,
					control: a,
					touch: d,
					startEvent: c,
					aborted: !t || "MSPointerCancel" === t.type
				}))
			}

			function n() {
				v.flow && setTimeout(function() {
					v.flow = !1
				}, Bi)
			}
			var l, c, o, a, d, u, h, p, f, m = t[0],
				v = {};
			return Hi ? (Ue(m, "MSPointerDown", e), Ue(ye, "MSPointerMove", i), Ue(ye, "MSPointerCancel", r), Ue(ye, "MSPointerUp", r)) : (Ue(m, "touchstart", e), Ue(m, "touchmove", i), Ue(m, "touchend", r), Ue(ye, "touchstart", function() {
				v.flow || setTimeout(function() {
					v.flow = !0
				}, 10)
			}), Ue(ye, "touchend", n), Ue(ye, "touchcancel", n), Di.on("scroll", n), t.on("mousedown", e), Wi.on("mousemove", i).on("mouseup", r)), t.on("click", "a", function(t) {
				v.checked && Xe(t)
			}), v
		}

		function ti(w, x) {
			function C(t, e) {
				I = !0, i = T = t._x, o = t._now, E = [
					[o, i]
				], S = k = O.noMove || e ? 0 : Ne(w, (x.getPos || Ce)()), (x.onStart || Ce).call(P, t)
			}
			var i, T, S, k, n, E, o, $, _, M, N, A, a, I, P = w[0],
				s = w.data(),
				O = {};
			return O = xe.extend(Ze(x.$wrap, xe.extend({}, x, {
				onStart: function(t, e) {
					_ = O.min, M = O.max, N = O.snap, A = t.altKey, I = a = !1, e.control || s.sliding || C(t)
				},
				onMove: function(t, e) {
					O.noSwipe || (I || C(t), T = t._x, E.push([t._now, T]), n = We(k = S - (i - T), _, M), k <= _ ? k = r(k, _) : M <= k && (k = r(k, M)), O.noMove || (w.css(Se(k)), a || (a = !0, e.touch || Hi || w.addClass(L)), (x.onMove || Ce).call(P, t, {
						pos: k,
						edge: n
					})))
				},
				onEnd: function(t) {
					if (!O.noSwipe || !t.moved) {
						I || C(t.startEvent, !0), t.touch || Hi || w.removeClass(L);
						for (var e, i, n, o, a, s, r, l, c, d = ($ = xe.now()) - Bi, u = null, h = Vi, p = x.friction, f = E.length - 1; 0 <= f; f--) {
							if (e = E[f][0], i = Math.abs(e - d), null === u || i < n) u = e, o = E[f][1];
							else if (u === d || n < i) break;
							n = i
						}
						r = Te(k, _, M);
						var m = o - T,
							v = 0 <= m,
							g = $ - u,
							b = Bi < g,
							y = !b && k !== S && r === k;
						N && (r = Te(Math[y ? v ? "floor" : "ceil" : "round"](k / N) * N, _, M), _ = M = r), y && (N || r === k) && (c = -m / g, h *= Te(Math.abs(c), x.timeLow, x.timeHigh), a = Math.round(k + c * h / p), N || (r = a), (!v && M < a || v && a < _) && (s = v ? _ : M, N || (r = s), l = Te(r + .03 * (l = a - s), s - 50, s + 50), h = Math.abs((k - l) / (c / p)))), h *= A ? 10 : 1, (x.onEnd || Ce).call(P, xe.extend(t, {
							moved: t.moved || b && N,
							pos: k,
							newPos: r,
							overPos: l,
							time: h
						}))
					}
				}
			})), O)
		}

		function ei(t, l) {
			var c, d, u, e = t[0],
				h = {
					prevent: {}
				};
			return Ue(e, m, function(t) {
				var e = t.wheelDeltaY || -1 * t.deltaY || 0,
					i = t.wheelDeltaX || -1 * t.deltaX || 0,
					n = Math.abs(i) && !Math.abs(e),
					o = Ge(i < 0),
					a = d === o,
					s = xe.now(),
					r = s - u < Bi;
				d = o, u = s, n && h.ok && (!h.prevent[o] || c) && (Xe(t, !0), c && a && r || (l.shift && (c = !0, clearTimeout(h.t), h.t = setTimeout(function() {
					c = !1
				}, v)), (l.onEnd || Ce)(t, l.shift ? o : i)))
			}), h
		}

		function ii() {
			xe.each(xe.Fotorama.instances, function(t, e) {
				e.index = t
			})
		}
		var ni = "fotorama",
			oi = "fullscreen",
			ai = ni + "__wrap",
			si = ai + "--video",
			ri = ai + "--no-controls",
			li = ai + "--only-active",
			ci = ni + "__stage",
			di = ci + "__frame",
			ui = ni + "__grab",
			hi = ni + "__arr",
			pi = hi + "--disabled",
			fi = ni + "__nav",
			mi = fi + "--dots",
			vi = fi + "--thumbs",
			gi = fi + "__frame",
			t = ni + "__fade",
			bi = t + "-front",
			yi = t + "-rear",
			wi = "fotorama__shadows",
			xi = ni + "__active",
			Ci = ni + "__select",
			Ti = ni + "--fullscreen",
			Si = ni + "__error",
			ki = ni + "__loading",
			Ei = ni + "__loaded",
			L = ni + "__grabbing",
			$i = ni + "__img",
			_i = ni + "__thumb",
			e = ni + "__video",
			Mi = e + "-play",
			Ni = '" tabindex="0" role="button',
			i = xe && xe.fn.jquery.split(".");
		if (!i || i[0] < 1 || 1 == i[0] && i[1] < 8) throw "Fotorama requires jQuery 1.8 or later and will not run without it.";
		var c = function(u, a) {
				function s(t, e) {
					return typeof t === e
				}

				function r(t, e) {
					for (var i in t) {
						var n = t[i];
						if (!~("" + n).indexOf("-") && c[n] !== a) return "pfx" != e || n
					}
					return !1
				}

				function n(t, e, i) {
					var n = t.charAt(0).toUpperCase() + t.slice(1),
						o = (t + " " + m.join(n + " ") + n).split(" ");
					return s(e, "string") || s(e, "undefined") ? r(o, e) : function(t, e, i) {
						for (var n in t) {
							var o = e[t[n]];
							if (o !== a) return !1 === i ? t[n] : s(o, "function") ? o.bind(i || e) : o
						}
						return !1
					}(o = (t + " " + v.join(n + " ") + n).split(" "), e, i)
				}
				var t, o, e, l = {},
					h = u.documentElement,
					p = "modernizr",
					i = u.createElement(p),
					c = i.style,
					d = " -webkit- -moz- -o- -ms- ".split(" "),
					f = "Webkit Moz O ms",
					m = f.split(" "),
					v = f.toLowerCase().split(" "),
					g = {},
					b = [],
					y = b.slice,
					w = {}.hasOwnProperty;
				for (var x in o = s(w, "undefined") || s(w.call, "undefined") ? function(t, e) {
						return e in t && s(t.constructor.prototype[e], "undefined")
					} : function(t, e) {
						return w.call(t, e)
					}, Function.prototype.bind || (Function.prototype.bind = function(n) {
						var o = this;
						if ("function" != typeof o) throw new TypeError;
						var a = y.call(arguments, 1),
							s = function() {
								if (this instanceof s) {
									var t = function() {};
									t.prototype = o.prototype;
									var e = new t,
										i = o.apply(e, a.concat(y.call(arguments)));
									return Object(i) === i ? i : e
								}
								return o.apply(n, a.concat(y.call(arguments)))
							};
						return s
					}), g.csstransforms3d = function() {
						return !!n("perspective")
					}, g) o(g, x) && (t = x.toLowerCase(), l[t] = g[x](), b.push((l[t] ? "" : "no-") + t));
				return l.addTest = function(t, e) {
					if ("object" == typeof t)
						for (var i in t) o(t, i) && l.addTest(i, t[i]);
					else {
						if (t = t.toLowerCase(), l[t] !== a) return l;
						e = "function" == typeof e ? e() : e, "undefined" != typeof enableClasses && enableClasses && (h.className += " " + (e ? "" : "no-") + t), l[t] = e
					}
					return l
				}, e = "", c.cssText = e, i = null, l._version = "2.6.2", l._prefixes = d, l._domPrefixes = v, l._cssomPrefixes = m, l.testProp = function(t) {
					return r([t])
				}, l.testAllProps = n, l.testStyles = function(t, e, i, n) {
					var o, a, s, r, l = u.createElement("div"),
						c = u.body,
						d = c || u.createElement("body");
					if (parseInt(i, 10))
						for (; i--;)(s = u.createElement("div")).id = n ? n[i] : p + (i + 1), l.appendChild(s);
					return o = ["&#173;", '<style id="s', p, '">', t, "</style>"].join(""), l.id = p, (c ? l : d).innerHTML += o, d.appendChild(l), c || (d.style.background = "", d.style.overflow = "hidden", r = h.style.overflow, h.style.overflow = "hidden", h.appendChild(d)), a = e(l, t), c ? l.parentNode.removeChild(l) : (d.parentNode.removeChild(d), h.style.overflow = r), !!a
				}, l.prefixed = function(t, e, i) {
					return e ? n(t, e, i) : n(t, "pfx")
				}, l
			}(ye),
			Ai = {
				ok: !1,
				is: function() {
					return !1
				},
				request: function() {},
				cancel: function() {},
				event: "",
				prefix: ""
			},
			o = "webkit moz o ms khtml".split(" ");
		if (void 0 !== ye.cancelFullScreen) Ai.ok = !0;
		else
			for (var d = 0, u = o.length; d < u; d++)
				if (Ai.prefix = o[d], void 0 !== ye[Ai.prefix + "CancelFullScreen"]) {
					Ai.ok = !0;
					break
				} Ai.ok && (Ai.event = Ai.prefix + "fullscreenchange", Ai.is = function() {
			switch (this.prefix) {
				case "":
					return ye.fullScreen;
				case "webkit":
					return ye.webkitIsFullScreen;
				default:
					return ye[this.prefix + "FullScreen"]
			}
		}, Ai.request = function(t) {
			return "" === this.prefix ? t.requestFullScreen() : t[this.prefix + "RequestFullScreen"]()
		}, Ai.cancel = function() {
			return "" === this.prefix ? ye.cancelFullScreen() : ye[this.prefix + "CancelFullScreen"]()
		});
		var Ii, Pi = {
				lines: 12,
				length: 5,
				width: 2,
				radius: 7,
				corners: 1,
				rotate: 15,
				color: "rgba(128, 128, 128, .75)",
				hwaccel: !0
			},
			Oi = {
				top: "auto",
				left: "auto",
				className: ""
			};
		Ii = function() {
			function f(t, e) {
				var i, n = ye.createElement(t || "div");
				for (i in e) n[i] = e[i];
				return n
			}

			function d(t) {
				for (var e = 1, i = arguments.length; i > e; e++) t.appendChild(arguments[e]);
				return t
			}

			function s(t, e, i, n) {
				var o = ["opacity", e, ~~(100 * t), i, n].join("-"),
					a = .01 + i / n * 100,
					s = Math.max(1 - (1 - t) / e * (100 - a), t),
					r = g.substring(0, g.indexOf("Animation")).toLowerCase(),
					l = r && "-" + r + "-" || "";
				return c[o] || (h.insertRule("@" + l + "keyframes " + o + "{0%{opacity:" + s + "}" + a + "%{opacity:" + t + "}" + (a + .01) + "%{opacity:1}" + (a + e) % 100 + "%{opacity:" + t + "}100%{opacity:" + s + "}}", h.cssRules.length), c[o] = 1), o
			}

			function n(t, e) {
				var i, n, o = t.style;
				for (e = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < a.length; n++)
					if (i = a[n] + e, o[i] !== l) return i;
				return o[e] !== l ? e : void 0
			}

			function m(t, e) {
				for (var i in e) t.style[n(t, i) || i] = e[i];
				return t
			}

			function e(t) {
				for (var e = 1; e < arguments.length; e++) {
					var i = arguments[e];
					for (var n in i) t[n] === l && (t[n] = i[n])
				}
				return t
			}

			function v(t) {
				for (var e = {
						x: t.offsetLeft,
						y: t.offsetTop
					}; t = t.offsetParent;) e.x += t.offsetLeft, e.y += t.offsetTop;
				return e
			}

			function u(t, e) {
				return "string" == typeof t ? t : t[e % t.length]
			}

			function i(t) {
				return "undefined" == typeof this ? new i(t) : void(this.opts = e(t || {}, i.defaults, o))
			}

			function t() {
				function c(t, e) {
					return f("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', e)
				}
				h.addRule(".spin-vml", "behavior:url(#default#VML)"), i.prototype.lines = function(t, n) {
					function o() {
						return m(c("group", {
							coordsize: s + " " + s,
							coordorigin: -a + " " + -a
						}), {
							width: s,
							height: s
						})
					}

					function e(t, e, i) {
						d(l, d(m(o(), {
							rotation: 360 / n.lines * t + "deg",
							left: ~~e
						}), d(m(c("roundrect", {
							arcsize: n.corners
						}), {
							width: a,
							height: n.width,
							left: n.radius,
							top: -n.width >> 1,
							filter: i
						}), c("fill", {
							color: u(n.color, t),
							opacity: n.opacity
						}), c("stroke", {
							opacity: 0
						}))))
					}
					var i, a = n.length + n.width,
						s = 2 * a,
						r = 2 * -(n.width + n.length) + "px",
						l = m(o(), {
							position: "absolute",
							top: r,
							left: r
						});
					if (n.shadow)
						for (i = 1; i <= n.lines; i++) e(i, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
					for (i = 1; i <= n.lines; i++) e(i);
					return d(t, l)
				}, i.prototype.opacity = function(t, e, i, n) {
					var o = t.firstChild;
					n = n.shadow && n.lines || 0, o && e + n < o.childNodes.length && (o = o.childNodes[e + n], o = o && o.firstChild, o = o && o.firstChild, o && (o.opacity = i))
				}
			}
			var g, a = ["webkit", "Moz", "ms", "O"],
				c = {},
				h = function() {
					var t = f("style", {
						type: "text/css"
					});
					return d(ye.getElementsByTagName("head")[0], t), t.sheet || t.styleSheet
				}(),
				o = {
					lines: 12,
					length: 7,
					width: 5,
					radius: 10,
					rotate: 0,
					corners: 1,
					color: "#000",
					direction: 1,
					speed: 1,
					trail: 100,
					opacity: .25,
					fps: 20,
					zIndex: 2e9,
					className: "spinner",
					top: "auto",
					left: "auto",
					position: "relative"
				};
			i.defaults = {}, e(i.prototype, {
				spin: function(t) {
					this.stop();
					var e, i, n = this,
						o = n.opts,
						a = n.el = m(f(0, {
							className: o.className
						}), {
							position: o.position,
							width: 0,
							zIndex: o.zIndex
						}),
						s = o.radius + o.length + o.width;
					if (t && (t.insertBefore(a, t.firstChild || null), i = v(t), e = v(a), m(a, {
							left: ("auto" == o.left ? i.x - e.x + (t.offsetWidth >> 1) : parseInt(o.left, 10) + s) + "px",
							top: ("auto" == o.top ? i.y - e.y + (t.offsetHeight >> 1) : parseInt(o.top, 10) + s) + "px"
						})), a.setAttribute("role", "progressbar"), n.lines(a, n.opts), !g) {
						var r, l = 0,
							c = (o.lines - 1) * (1 - o.direction) / 2,
							d = o.fps,
							u = d / o.speed,
							h = (1 - o.opacity) / (u * o.trail / 100),
							p = u / o.lines;
						! function t() {
							l++;
							for (var e = 0; e < o.lines; e++) r = Math.max(1 - (l + (o.lines - e) * p) % u * h, o.opacity), n.opacity(a, e * o.direction + c, r, o);
							n.timeout = n.el && setTimeout(t, ~~(1e3 / d))
						}()
					}
					return n
				},
				stop: function() {
					var t = this.el;
					return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = l), this
				},
				lines: function(t, i) {
					function e(t, e) {
						return m(f(), {
							position: "absolute",
							width: i.length + i.width + "px",
							height: i.width + "px",
							background: t,
							boxShadow: e,
							transformOrigin: "left",
							transform: "rotate(" + ~~(360 / i.lines * o + i.rotate) + "deg) translate(" + i.radius + "px,0)",
							borderRadius: (i.corners * i.width >> 1) + "px"
						})
					}
					for (var n, o = 0, a = (i.lines - 1) * (1 - i.direction) / 2; o < i.lines; o++) n = m(f(), {
						position: "absolute",
						top: 1 + ~(i.width / 2) + "px",
						transform: i.hwaccel ? "translate3d(0,0,0)" : "",
						opacity: i.opacity,
						animation: g && s(i.opacity, i.trail, a + o * i.direction, i.lines) + " " + 1 / i.speed + "s linear infinite"
					}), i.shadow && d(n, m(e("#000", "0 0 4px #000"), {
						top: "2px"
					})), d(t, d(n, e(u(i.color, o), "0 0 1px rgba(0,0,0,.1)")));
					return t
				},
				opacity: function(t, e, i) {
					e < t.childNodes.length && (t.childNodes[e].style.opacity = i)
				}
			});
			var r = m(f("group"), {
				behavior: "url(#default#VML)"
			});
			return !n(r, "transform") && r.adj ? t() : g = n(r, "animation"), i
		}();
		var Li, ji, b, y, w, x, Di = xe(a),
			Wi = xe(ye),
			h = "quirks" === we.hash.replace("#", ""),
			p = c.csstransforms3d,
			Fi = p && !h,
			Ri = p || "CSS1Compat" === ye.compatMode,
			qi = Ai.ok,
			f = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),
			zi = !Fi || f,
			Hi = navigator.msPointerEnabled,
			m = "onwheel" in ye.createElement("div") ? "wheel" : ye.onmousewheel !== l ? "mousewheel" : "DOMMouseScroll",
			Bi = 250,
			Vi = 300,
			v = 1400,
			Ui = "$stageFrame",
			Qi = "$navDotFrame",
			Ki = "$navThumbFrame",
			C = function(a) {
				var t = "bez_" + xe.makeArray(arguments).join("_").replace(".", "p");
				if ("function" != typeof xe.easing[t]) {
					var s = function(i, n) {
						function a(t, e) {
							return l[e] = 3 * i[e], r[e] = 3 * (n[e] - i[e]) - l[e], s[e] = 1 - l[e] - r[e], t * (l[e] + t * (r[e] + t * s[e]))
						}
						var s = [null, null],
							r = [null, null],
							l = [null, null];
						return function(t) {
							return a(function(t) {
								for (var e, i = t, n = 0; ++n < 14 && (e = a(i, 0) - t, !(Math.abs(e) < .001));) i -= e / (o = i, l[0] + o * (2 * r[0] + 3 * s[0] * o));
								var o;
								return i
							}(t), 1)
						}
					};
					xe.easing[t] = function(t, e, i, n, o) {
						return n * s([a[0], a[1]], [a[2], a[3]])(e / o) + i
					}
				}
				return t
			}([.1, 0, .25, 1]),
			T = "50%",
			S = {
				width: null,
				minwidth: null,
				maxwidth: "100%",
				height: null,
				minheight: null,
				maxheight: null,
				ratio: null,
				margin: 2,
				glimpse: 0,
				fit: "contain",
				position: T,
				thumbposition: T,
				nav: "dots",
				navposition: "bottom",
				navwidth: null,
				thumbwidth: 64,
				thumbheight: 64,
				thumbmargin: 2,
				thumbborderwidth: 2,
				thumbfit: "cover",
				allowfullscreen: !1,
				transition: "slide",
				clicktransition: null,
				transitionduration: Vi,
				captions: !0,
				hash: !1,
				startindex: 0,
				loop: !1,
				autoplay: !1,
				stopautoplayontouch: !0,
				keyboard: !1,
				arrows: !0,
				click: !0,
				swipe: !0,
				trackpad: !1,
				enableifsingleframe: !1,
				controlsonstart: !0,
				shuffle: !1,
				direction: "ltr",
				shadows: !0,
				spinner: null
			},
			Yi = {
				left: !0,
				right: !0,
				down: !1,
				up: !1,
				space: !1,
				home: !1,
				end: !1
			};
		je.stop = function(t) {
			je.ii[t] = !1
		}, jQuery.Fotorama = function(r, x) {
			function e() {
				xe.each(G, function(t, e) {
					if (!e.i) {
						e.i = qt++;
						var i = Pe(e.video, !0);
						if (i) {
							var n = {};
							e.video = i, e.img || e.thumb ? e.thumbsReady = !0 : (a = G, s = Dt, "youtube" === (c = (o = e).video).type ? (r = (l = Ie() + "img.youtube.com/vi/" + c.id + "/default.jpg").replace(/\/default.jpg$/, "/hqdefault.jpg"), o.thumbsReady = !0) : "vimeo" === c.type ? xe.ajax({
								url: Ie() + "vimeo.com/api/v2/video/" + c.id + ".json",
								dataType: "jsonp",
								success: function(t) {
									o.thumbsReady = !0, Oe(a, {
										img: t[0].thumbnail_large,
										thumb: t[0].thumbnail_small
									}, o.i, s)
								}
							}) : o.thumbsReady = !0, n = {
								img: r,
								thumb: l
							}), Oe(G, {
								img: n.img,
								thumb: n.thumb
							}, e.i, Dt)
						}
					}
					var o, a, s, r, l, c
				})
			}

			function l(t) {
				return St[t] || Dt.fullScreen
			}

			function c(t) {
				var e, i, n, o, a, s;
				t !== c.f && (t ? (r.html("").addClass(ni + " " + Ft).append(Vt).before(Ht).before(Bt), s = Dt, xe.Fotorama.instances.push(s), ii()) : (Vt.detach(), Ht.detach(), Bt.detach(), r.html(zt.urtext).removeClass(Ft), a = Dt, xe.Fotorama.instances.splice(a.index, 1), ii()), e = "keydown." + ni, n = "keydown." + (i = ni + Wt), o = "resize." + i + " orientationchange." + i, t ? (Wi.on(n, function(t) {
					var e, i;
					et && 27 === t.keyCode ? q(et, e = !0, !0) : (Dt.fullScreen || x.keyboard && !Dt.index) && (27 === t.keyCode ? (e = !0, Dt.cancelFullScreen()) : t.shiftKey && 32 === t.keyCode && l("space") || 37 === t.keyCode && l("left") || 38 === t.keyCode && l("up") ? i = "<" : 32 === t.keyCode && l("space") || 39 === t.keyCode && l("right") || 40 === t.keyCode && l("down") ? i = ">" : 36 === t.keyCode && l("home") ? i = "<<" : 35 === t.keyCode && l("end") && (i = ">>")), (e || i) && Xe(t), i && Dt.show({
						index: i,
						slow: t.altKey,
						user: !0
					})
				}), Dt.index || Wi.off(e).on(e, "textarea, input, select", function(t) {
					ji.hasClass(oi) || t.stopPropagation()
				}), Di.on(o, Dt.resize)) : (Wi.off(n), Di.off(o)), c.f = t)
			}

			function a() {
				var t = J < 2 && !x.enableifsingleframe || et;
				ue.noMove = t || gt, ue.noSwipe = t || !x.swipe, xt || Qt.toggleClass(ui, !x.click && !ue.noMove && !ue.noSwipe), Hi && Vt.toggleClass("fotorama__wrap--pan-y", !ue.noSwipe)
			}

			function s(t) {
				!0 === t && (t = ""), x.autoplay = Math.max(+t || 5e3, 1.5 * wt)
			}

			function C(t) {
				return t < 0 ? (J + t % J) % J : J <= t ? t % J : t
			}

			function d(t) {
				return Te(t, 0, J - 1)
			}

			function u(t) {
				return (ut ? C : d)(t)
			}

			function h(t) {
				return !!(0 < t || ut) && t - 1
			}

			function p(t) {
				return !!(t < J - 1 || ut) && t + 1
			}

			function i(t, a, s) {
				if ("number" == typeof t) {
					t = new Array(t);
					var r = !0
				}
				return xe.each(t, function(t, e) {
					if (r && (e = t), "number" == typeof e) {
						var i = G[C(e)];
						if (i) {
							var n = "$" + a + "Frame",
								o = i[n];
							s.call(this, t, e, i, o, n, o && o.data())
						}
					}
				})
			}

			function T(t, e, i, n) {
				kt && ("*" !== kt || n !== dt) || (t = _e(x.width) || _e(t) || 500, e = _e(x.height) || _e(e) || 333, Dt.resize({
					width: t,
					ratio: x.ratio || i || t / e
				}, 0, n !== dt && "*"))
			}

			function S(t, v, g, b, y, w) {
				i(t, v, function(t, i, e, n, o, a) {
					function s(t) {
						var e = C(i);
						L(t, {
							index: e,
							src: f,
							frame: G[e]
						})
					}

					function r() {
						u.remove(), xe.Fotorama.cache[f] = "error", e.html && "stage" === v || !m || m === f ? (!f || e.html || c ? "stage" === v && (n.trigger("f:load").removeClass(ki + " " + Si).addClass(Ei), s("load"), T()) : (n.trigger("f:error").removeClass(ki).addClass(Si), s("error")), a.state = "error", !(1 < J && G[i] === e) || e.html || e.deleted || e.video || c || (e.deleted = !0, Dt.splice(i, 1))) : (e[p] = f = m, S([i], v, g, b, y, !0))
					}

					function l() {
						var t = 10;
						je(function() {
							return !It || !t-- && !zi
						}, function() {
							xe.Fotorama.measures[f] = h.measures = xe.Fotorama.measures[f] || {
								width: d.width,
								height: d.height,
								ratio: d.width / d.height
							}, T(h.measures.width, h.measures.height, h.measures.ratio, i), u.off("load error").addClass($i + (c ? " fotorama__img--full" : "")).prependTo(n), De(u, (xe.isFunction(g) ? g() : g) || de, b || e.fit || x.fit, y || e.position || x.position), xe.Fotorama.cache[f] = a.state = "loaded", setTimeout(function() {
								n.trigger("f:load").removeClass(ki + " " + Si).addClass(Ei + " " + (c ? "fotorama__loaded--full" : "fotorama__loaded--img")), "stage" === v ? s("load") : "auto" !== e.thumbratio && (e.thumbratio || "auto" !== x.thumbratio) || (e.thumbratio = h.measures.ratio, Y())
							}, 0)
						})
					}
					if (n) {
						var c = Dt.fullScreen && e.full && e.full !== e.img && !a.$full && "stage" === v;
						if (!a.$img || w || c) {
							var d = new Image,
								u = xe(d),
								h = u.data();
							a[c ? "$full" : "$img"] = u;
							var p = "stage" === v ? c ? "full" : "img" : "thumb",
								f = e[p],
								m = c ? null : e["stage" === v ? "thumb" : "img"];
							if ("navThumb" === v && (n = a.$wrap), !f) return void r();
							xe.Fotorama.cache[f] ? function t() {
								"error" === xe.Fotorama.cache[f] ? r() : "loaded" === xe.Fotorama.cache[f] ? setTimeout(l, 0) : setTimeout(t, 100)
							}() : (xe.Fotorama.cache[f] = "*", u.on("load", l).on("error", r)), a.state = "", d.src = f
						}
					}
				})
			}

			function f() {
				le.detach(), tt && tt.stop()
			}

			function m() {
				var t, e = it[Ui];
				e && !e.data().state && (t = e, le.append(tt.spin().el).appendTo(t), e.on("f:load f:error", function() {
					e.off("f:load f:error"), f()
				}))
			}

			function v(t) {
				Ke(t, U), Ye(t, function() {
					setTimeout(function() {
						He(Zt)
					}, 0), A({
						time: wt,
						guessIndex: xe(this).data().eq,
						minMax: pe
					})
				})
			}

			function g(t, r) {
				i(t, r, function(t, e, i, n, o, a) {
					if (!n) {
						n = i[o] = Vt[o].clone(), (a = n.data()).data = i;
						var s = n[0];
						"stage" === r ? (i.html && xe('<div class="fotorama__html"></div>').append(i._html ? xe(i.html).removeAttr("id").html(i._html) : i.html).appendTo(n), i.caption && xe(Re("fotorama__caption", Re("fotorama__caption__wrap", i.caption))).appendTo(n), i.video && n.addClass("fotorama__stage__frame--video").append(se.clone()), Ye(s, function() {
							setTimeout(function() {
								He(Ut)
							}, 0), B({
								index: a.eq,
								user: !0
							})
						}), Kt = Kt.add(n)) : "navDot" === r ? (v(s), ee = ee.add(n)) : "navThumb" === r && (v(s), a.$wrap = n.children(":first"), ie = ie.add(n), i.video && a.$wrap.append(se.clone()))
					}
				})
			}

			function b(t, e, i, n) {
				return t && t.length && De(t, e, i, n)
			}

			function y(t) {
				i(t, "stage", function(t, e, i, n, o, a) {
					if (n) {
						var s = C(e),
							r = i.fit || x.fit,
							l = i.position || x.position;
						a.eq = s, ve[Ui][s] = n.css(xe.extend({
							left: gt ? 0 : Me(e, de.w, x.margin, ot)
						}, gt && ke(0))), c = n[0], xe.contains(ye.documentElement, c) || (n.appendTo(Qt), q(i.$video)), b(a.$img, de, r, l), b(a.$full, de, r, l)
					}
					var c
				})
			}

			function w(t, r) {
				if ("thumbs" === ht && !isNaN(t)) {
					var l = -t,
						c = -t + de.nw;
					ie.each(function() {
						function t() {
							return {
								h: yt,
								w: e.w
							}
						}
						var e = xe(this).data(),
							i = e.eq,
							n = t(),
							o = G[i] || {},
							a = o.thumbfit || x.thumbfit,
							s = o.thumbposition || x.thumbposition;
						n.w = e.w, e.l + e.w < l || e.l > c || b(e.$img, n, a, s) || r && S([i], "navThumb", t, a, s)
					})
				}
			}

			function k(t, e, i) {
				if (!k[i]) {
					var n = "nav" === i && pt,
						o = 0;
					e.append(t.filter(function() {
						for (var t, e = xe(this), i = e.data(), n = 0, o = G.length; n < o; n++)
							if (i.data === G[n]) {
								t = !0, i.eq = n;
								break
							} return t || e.remove() && !1
					}).sort(function(t, e) {
						return xe(t).data().eq - xe(e).data().eq
					}).each(function() {
						if (n) {
							var t = xe(this),
								e = t.data(),
								i = Math.round(yt * e.data.thumbratio) || bt;
							e.l = o, e.w = i, t.css({
								width: i
							}), o += i + x.thumbmargin
						}
					})), k[i] = !0
				}
			}

			function E(t) {
				return t - ge > de.w / 3
			}

			function n(t) {
				return !(ut || ce + t && ce - J + t || et)
			}

			function $() {
				var t = n(0),
					e = n(1);
				Yt.toggleClass(pi, t).attr(Qe(t)), Xt.toggleClass(pi, e).attr(Qe(e))
			}

			function _() {
				he.ok && (he.prevent = {
					"<": n(0),
					">": n(1)
				})
			}

			function M(t) {
				var e, i, n = t.data();
				return i = pt ? (e = n.l, n.w) : (e = t.position().left, t.width()), {
					c: e + i / 2,
					min: -e + 10 * x.thumbmargin,
					max: -e + de.w - i - 10 * x.thumbmargin
				}
			}

			function N(t) {
				var e = it[Ot].data();
				Je(ne, {
					time: 1.2 * t,
					pos: e.l,
					width: e.w - 2 * x.thumbborderwidth
				})
			}

			function A(t) {
				var e = G[t.guessIndex][Ot];
				if (e) {
					var i = pe.min !== pe.max,
						n = t.minMax || i && M(it[Ot]),
						o = i && (t.keep && A.l ? A.l : Te((t.coo || de.nw / 2) - M(e).c, n.min, n.max)),
						a = i && Te(o, pe.min, pe.max),
						s = 1.1 * t.time;
					Je(te, {
						time: s,
						pos: a || 0,
						onEnd: function() {
							w(a, !0)
						}
					}), R(Zt, We(a, pe.min, pe.max)), A.l = o
				}
			}

			function I(t) {
				for (var e = me[t]; e.length;) e.shift().removeClass(xi)
			}

			function o(t) {
				var i = ve[t];
				xe.each(nt, function(t, e) {
					delete i[C(e)]
				}), xe.each(i, function(t, e) {
					delete i[t], e.detach()
				})
			}

			function P(t) {
				ot = at = ce;
				var e = it[Ui];
				e && (I(Ui), me[Ui].push(e.addClass(xi)), t || Dt.show.onEnd(!0), Ne(Qt, 0), o(Ui), y(nt), ue.min = ut ? -1 / 0 : -Me(J - 1, de.w, x.margin, ot), ue.max = ut ? 1 / 0 : -Me(0, de.w, x.margin, ot), ue.snap = de.w + x.margin, pe.min = Math.min(0, de.nw - te.width()), pe.max = 0, te.toggleClass(ui, !(pe.noMove = pe.min === pe.max)))
			}

			function O(i, t) {
				i && xe.each(t, function(t, e) {
					e && xe.extend(e, {
						width: i.width || e.width,
						height: i.height,
						minwidth: i.minwidth,
						maxwidth: i.maxwidth,
						minheight: i.minheight,
						maxheight: i.maxheight,
						ratio: Ve(i.ratio)
					})
				})
			}

			function L(t, e) {
				r.trigger(ni + ":" + t, [Dt, e])
			}

			function j() {
				clearTimeout(D.t), It = 1, x.stopautoplayontouch ? Dt.stopAutoplay() : Mt = !0
			}

			function D() {
				x.stopautoplayontouch || (W(), F()), D.t = setTimeout(function() {
					It = 0
				}, Vi + Bi)
			}

			function W() {
				Mt = !(!et && !Nt)
			}

			function F() {
				if (clearTimeout(F.t), je.stop(F.w), x.autoplay && !Mt) {
					Dt.autoplay || (Dt.autoplay = !0, L("startautoplay"));
					var i = ce,
						t = it[Ui].data();
					F.w = je(function() {
						return t.state || i !== ce
					}, function() {
						F.t = setTimeout(function() {
							if (!Mt && i === ce) {
								var t = ct,
									e = G[t][Ui].data();
								F.w = je(function() {
									return e.state || t !== ct
								}, function() {
									Mt || t !== ct || Dt.show(ut ? Ge(!Tt) : ct)
								})
							}
						}, x.autoplay)
					})
				} else Dt.autoplay && (Dt.autoplay = !1, L("stopautoplay"))
			}

			function t() {
				Dt.fullScreen && (Dt.fullScreen = !1, qi && Ai.cancel(Rt), ji.removeClass(oi), Li.removeClass(oi), r.removeClass(Ti).insertAfter(Bt), de = xe.extend({}, At), q(et, !0, !0), V("x", !1), Dt.resize(), S(nt, "stage"), He(Di, $t, Et), L("fullscreenexit"))
			}

			function R(t, e) {
				Ct && (t.removeClass("fotorama__shadows--left fotorama__shadows--right"), e && !et && t.addClass(e.replace(/^|\s/g, " " + wi + "--")))
			}

			function q(t, e, i) {
				e && (Vt.removeClass(si), et = !1, a()), t && t !== et && (t.remove(), L("unloadvideo")), i && (W(), F())
			}

			function z(t) {
				Vt.toggleClass(ri, t)
			}

			function H(t) {
				if (!ue.flow) {
					var e = t ? t.pageX : H.x,
						i = e && !n(E(e)) && x.click;
					H.p !== i && Ut.toggleClass("fotorama__pointer", i) && (H.p = i, H.x = e)
				}
			}

			function B(e) {
				clearTimeout(B.t), x.clicktransition && x.clicktransition !== x.transition ? setTimeout(function() {
					var t = x.transition;
					Dt.setOptions({
						transition: x.clicktransition
					}), xt = t, B.t = setTimeout(function() {
						Dt.show(e)
					}, 10)
				}, 0) : Dt.show(e)
			}

			function V(t, e) {
				ue[t] = pe[t] = e
			}

			function U(t) {
				B({
					index: xe(this).data().eq,
					slow: t.altKey,
					user: !0,
					coo: t._x - Zt.offset().left
				})
			}

			function Q(t) {
				B({
					index: Gt.index(this) ? ">" : "<",
					slow: t.altKey,
					user: !0
				})
			}

			function K(t) {
				Ye(t, function() {
					setTimeout(function() {
						He(Ut)
					}, 0), z(!1)
				})
			}

			function Y() {
				if (G = Dt.data = G || ze(x.data) || Le(r), J = Dt.size = G.length, !X.ok && x.shuffle && qe(G), e(), ce = d(ce), J && c(!0), function() {
						function t(t, e) {
							o[t ? "add" : "remove"].push(e)
						}
						Dt.options = x = Be(x), gt = "crossfade" === x.transition || "dissolve" === x.transition, ut = x.loop && (2 < J || gt && (!xt || "slide" !== xt)), wt = +x.transitionduration || Vi, Tt = "rtl" === x.direction, St = xe.extend({}, x.keyboard && Yi, x.keyboard);
						var e, i, n, o = {
							add: [],
							remove: []
						};
						1 < J || x.enableifsingleframe ? (ht = x.nav, ft = "top" === x.navposition, o.remove.push(Ci), Gt.toggle(!!x.arrows)) : (ht = !1, Gt.hide()), f(), tt = new Ii(xe.extend(Pi, x.spinner, Oi, {
							direction: Tt ? -1 : 1
						})), $(), _(), x.autoplay && s(x.autoplay), bt = Ee(x.thumbwidth) || 64, yt = Ee(x.thumbheight) || 64, he.ok = fe.ok = x.trackpad && !zi, a(), O(x, [de]), (pt = "thumbs" === ht) ? (g(J, "navThumb"), Z = ie, Ot = Ki, e = Ht, i = xe.Fotorama.jst.style({
							w: bt,
							h: yt,
							b: x.thumbborderwidth,
							m: x.thumbmargin,
							s: Wt,
							q: !Ri
						}), (n = e[0]).styleSheet ? n.styleSheet.cssText = i : e.html(i), Zt.addClass(vi).removeClass(mi)) : "dots" === ht ? (g(J, "navDot"), Z = ee, Ot = Qi, Zt.addClass(mi).removeClass(vi)) : (ht = !1, Zt.removeClass(vi + " " + mi)), ht && (ft ? Jt.insertBefore(Ut) : Jt.insertAfter(Ut), k.nav = !1, k(Z, te, "nav")), mt = x.allowfullscreen, vt = mt ? (oe.prependTo(Ut), qi && "native" === mt) : (oe.detach(), !1), t(gt, "fotorama__wrap--fade"), t(!gt, "fotorama__wrap--slide"), t(!x.captions, "fotorama__wrap--no-captions"), t(Tt, "fotorama__wrap--rtl"), t("always" !== x.arrows, "fotorama__wrap--toggle-arrows"), t(!(Ct = x.shadows && !zi), "fotorama__wrap--no-shadows"), Vt.addClass(o.add.join(" ")).removeClass(o.remove.join(" ")), xe.extend({}, x)
					}(), !Y.i) {
					Y.i = !0;
					var t = x.startindex;
					(t || x.hash && we.hash) && (dt = Fe(t || we.hash.replace(/^#/, ""), G, 0 === Dt.index || t, t)), ce = ot = at = st = dt = u(dt) || 0
				}
				if (J) {
					if (function t() {
							return !t.f === Tt ? (t.f = Tt, ce = J - 1 - ce, Dt.reverse(), !0) : void 0
						}()) return;
					et && q(et, !0), nt = [], o(Ui), Y.ok = !0, Dt.show({
						index: ce,
						time: 0
					}), Dt.resize()
				} else Dt.destroy()
			}

			function X() {
				X.ok || (X.ok = !0, L("ready"))
			}
			Li = xe("html"), ji = xe("body");
			var G, J, Z, tt, et, it, nt, ot, at, st, rt, lt, ct, dt, ut, ht, pt, ft, mt, vt, gt, bt, yt, wt, xt, Ct, Tt, St, kt, Et, $t, _t, Mt, Nt, At, It, Pt, Ot, Lt, jt, Dt = this,
				Wt = xe.now(),
				Ft = ni + Wt,
				Rt = r[0],
				qt = 1,
				zt = r.data(),
				Ht = xe("<style></style>"),
				Bt = xe(Re("fotorama--hidden")),
				Vt = xe(Re(ai)),
				Ut = xe(Re(ci)).appendTo(Vt),
				Qt = (Ut[0], xe(Re("fotorama__stage__shaft")).appendTo(Ut)),
				Kt = xe(),
				Yt = xe(Re(hi + " fotorama__arr--prev" + Ni)),
				Xt = xe(Re(hi + " fotorama__arr--next" + Ni)),
				Gt = Yt.add(Xt).appendTo(Ut),
				Jt = xe(Re("fotorama__nav-wrap")),
				Zt = xe(Re(fi)).appendTo(Jt),
				te = xe(Re("fotorama__nav__shaft")).appendTo(Zt),
				ee = xe(),
				ie = xe(),
				ne = (Qt.data(), te.data(), xe(Re("fotorama__thumb-border")).appendTo(te)),
				oe = xe(Re("fotorama__fullscreen-icon" + Ni)),
				ae = oe[0],
				se = xe(Re(Mi)),
				re = xe(Re("fotorama__video-close")).appendTo(Ut)[0],
				le = xe(Re("fotorama__spinner")),
				ce = !1,
				de = {},
				ue = {},
				he = {},
				pe = {},
				fe = {},
				me = {},
				ve = {},
				ge = 0,
				be = [];
			Vt[Ui] = xe(Re(di)), Vt[Ki] = xe(Re(gi + " fotorama__nav__frame--thumb" + Ni, Re(_i))), Vt[Qi] = xe(Re(gi + " fotorama__nav__frame--dot" + Ni, Re("fotorama__dot"))), me[Ui] = [], me[Ki] = [], me[Qi] = [], ve[Ui] = {}, Vt.addClass(Fi ? "fotorama__wrap--css3" : "fotorama__wrap--css2").toggleClass(ri, !x.controlsonstart), zt.fotorama = this, Dt.startAutoplay = function(t) {
				return Dt.autoplay || (Mt = Nt = !1, s(t || x.autoplay), F()), this
			}, Dt.stopAutoplay = function() {
				return Dt.autoplay && (Mt = Nt = !0, F()), this
			}, Dt.show = function(e) {
				var t;
				"object" != typeof e ? (t = e, e = {}) : t = e.index, t = ">" === t ? at + 1 : "<" === t ? at - 1 : "<<" === t ? 0 : ">>" === t ? J - 1 : t, t = void 0 === (t = isNaN(t) ? Fe(t, G, !0) : t) ? ce || 0 : t, Dt.activeIndex = ce = u(t), rt = h(ce), lt = p(ce), ct = C(ce + (Tt ? -1 : 1)), nt = [ce, rt, lt], at = ut ? t : ce;
				var i = Math.abs(st - at),
					n = Ae(e.time, function() {
						return Math.min(wt * (1 + (i - 1) / 12), 2 * wt)
					}),
					o = e.overPos;
				e.slow && (n *= 10);
				var a = it;
				Dt.activeFrame = it = G[ce];
				var s = a === it && !e.user;
				q(et, it.i !== G[C(ot)].i), g(nt, "stage"), y(zi ? [at] : [at, h(at), p(at)]), V("go", !0), s || L("show", {
					user: e.user,
					time: n
				}), Mt = !0;
				var r, l = Dt.show.onEnd = function(t) {
					if (!l.ok) {
						if (l.ok = !0, t || P(!0), s || L("showend", {
								user: e.user
							}), !t && xt && xt !== x.transition) return Dt.setOptions({
							transition: xt
						}), void(xt = !1);
						m(), S(nt, "stage"), V("go", !1), _(), H(), W(), F()
					}
				};
				gt ? function e(t, i, n, o, a, s) {
					var r = void 0 !== s;
					if (r || (a.push(arguments), Array.prototype.push.call(arguments, a.length), !(1 < a.length))) {
						t = t || xe(t), i = i || xe(i);
						var l = t[0],
							c = i[0],
							d = "crossfade" === o.method,
							u = function() {
								if (!u.done) {
									u.done = !0;
									var t = (r || a.shift()) && a.shift();
									t && e.apply(this, t), (o.onEnd || Ce)(!!t)
								}
							},
							h = o.time / (s || 1);
						n.removeClass(yi + " " + bi), t.stop().addClass(yi), i.stop().addClass(bi), d && c && t.fadeTo(0, 0), t.fadeTo(d ? h : 0, 1, d && u), i.fadeTo(h, 0, u), l && d || c || u()
					}
				}(it[Ui], ce !== st ? G[st][Ui] : null, Kt, {
					time: n,
					method: x.transition,
					onEnd: l
				}, be) : Je(Qt, {
					pos: -Me(at, de.w, x.margin, ot),
					overPos: o,
					time: n,
					onEnd: l
				});
				if ($(), ht) {
					I(Ot), me[Ot].push(it[Ot].addClass(xi));
					var c = d(ce + Te(at - st, -1, 1));
					A({
						time: n,
						coo: c !== ce && e.coo,
						guessIndex: void 0 !== e.coo ? c : ce,
						keep: s
					}), pt && N(n)
				}
				return _t = void 0 !== st && st !== ce, st = ce, x.hash && _t && !Dt.eq && (r = it.id || ce + 1, we.replace(we.protocol + "//" + we.host + we.pathname.replace(/^\/?/, "/") + we.search + "#" + r)), this
			}, Dt.requestFullScreen = function() {
				return mt && !Dt.fullScreen && (Et = Di.scrollTop(), $t = Di.scrollLeft(), He(Di), V("x", !0), At = xe.extend({}, de), r.addClass(Ti).appendTo(ji.addClass(oi)), Li.addClass(oi), q(et, !0, !0), Dt.fullScreen = !0, vt && Ai.request(Rt), Dt.resize(), S(nt, "stage"), m(), L("fullscreenenter")), this
			}, Dt.cancelFullScreen = function() {
				return vt && Ai.is() ? Ai.cancel(ye) : t(), this
			}, Dt.toggleFullScreen = function() {
				return Dt[(Dt.fullScreen ? "cancel" : "request") + "FullScreen"]()
			}, Ue(ye, Ai.event, function() {
				!G || Ai.is() || et || t()
			}), Dt.resize = function(t) {
				if (!G) return this;
				var e = arguments[1] || 0,
					i = arguments[2];
				O(Dt.fullScreen ? {
					width: "100%",
					maxwidth: null,
					minwidth: null,
					height: "100%",
					maxheight: null,
					minheight: null
				} : Be(t), [de, i || Dt.fullScreen || x]);
				var n = de.width,
					o = de.height,
					a = de.ratio,
					s = Di.height() - (ht ? Zt.height() : 0);
				return _e(n) && (Vt.addClass(li).css({
					width: n,
					minWidth: de.minwidth || 0,
					maxWidth: de.maxwidth || 99999
				}), n = de.W = de.w = Vt.width(), de.nw = ht && $e(x.navwidth, n) || n, x.glimpse && (de.w -= Math.round(2 * ($e(x.glimpse, n) || 0))), Qt.css({
					width: de.w,
					marginLeft: (de.W - de.w) / 2
				}), (o = (o = $e(o, s)) || a && n / a) && (n = Math.round(n), o = de.h = Math.round(Te(o, $e(de.minheight, s), $e(de.maxheight, s))), Ut.stop().animate({
					width: n,
					height: o
				}, e, function() {
					Vt.removeClass(li)
				}), P(), ht && (Zt.stop().animate({
					width: de.nw
				}, e), A({
					guessIndex: ce,
					time: e,
					keep: !0
				}), pt && k.nav && N(e)), kt = i || !0, X())), ge = Ut.offset().left, this
			}, Dt.setOptions = function(t) {
				return xe.extend(x, t), Y(), this
			}, Dt.shuffle = function() {
				return G && qe(G) && Y(), this
			}, Dt.destroy = function() {
				return Dt.cancelFullScreen(), Dt.stopAutoplay(), G = Dt.data = null, c(), nt = [], o(Ui), Y.ok = !1, this
			}, Dt.playVideo = function() {
				var t = it,
					e = t.video,
					i = ce;
				return "object" == typeof e && t.videoReady && (vt && Dt.fullScreen && Dt.cancelFullScreen(), je(function() {
					return !Ai.is() || i !== ce
				}, function() {
					i === ce && (t.$video = t.$video || xe(xe.Fotorama.jst.video(e)), t.$video.appendTo(t[Ui]), Vt.addClass(si), et = t.$video, a(), Gt.blur(), oe.blur(), L("loadvideo"))
				})), this
			}, Dt.stopVideo = function() {
				return q(et, !0, !0), this
			}, Ut.on("mousemove", H), ue = ti(Qt, {
				onStart: j,
				onMove: function(t, e) {
					R(Ut, e.edge)
				},
				onTouchEnd: D,
				onEnd: function(t) {
					R(Ut);
					var e, i, n, o, a, s, r, l = (Hi && !Pt || t.touch) && x.arrows && "always" !== x.arrows;
					if (t.moved || l && t.pos !== t.newPos && !t.control) {
						var c = (o = t.newPos, a = de.w, s = x.margin, r = ot, -Math.round(o / (a + (s || 0)) - (r || 0)));
						Dt.show({
							index: c,
							time: gt ? wt : t.time,
							overPos: t.overPos,
							user: !0
						})
					} else t.aborted || t.control || (e = t.startEvent, i = l, n = e.target, xe(n).hasClass(Mi) ? Dt.playVideo() : n === ae ? Dt.toggleFullScreen() : et ? n === re && q(et, !0, !0) : i ? z() : x.click && B({
						index: e.shiftKey || Ge(E(e._x)),
						slow: e.altKey,
						user: !0
					}))
				},
				timeLow: 1,
				timeHigh: 1,
				friction: 2,
				select: "." + Ci + ", ." + Ci + " *",
				$wrap: Ut
			}), pe = ti(te, {
				onStart: j,
				onMove: function(t, e) {
					R(Zt, e.edge)
				},
				onTouchEnd: D,
				onEnd: function(t) {
					function e() {
						A.l = t.newPos, W(), F(), w(t.newPos, !0)
					}
					if (t.moved) t.pos !== t.newPos ? (Mt = !0, Je(te, {
						time: t.time,
						pos: t.newPos,
						overPos: t.overPos,
						onEnd: e
					}), w(t.newPos), Ct && R(Zt, We(t.newPos, pe.min, pe.max))) : e();
					else {
						var i = t.$target.closest("." + gi, te)[0];
						i && U.call(i, t.startEvent)
					}
				},
				timeLow: .5,
				timeHigh: 2,
				friction: 5,
				$wrap: Zt
			}), he = ei(Ut, {
				shift: !0,
				onEnd: function(t, e) {
					j(), D(), Dt.show({
						index: e,
						slow: t.altKey
					})
				}
			}), fe = ei(Zt, {
				onEnd: function(t, e) {
					j(), D();
					var i = Ne(te) + .25 * e;
					te.css(Se(Te(i, pe.min, pe.max))), Ct && R(Zt, We(i, pe.min, pe.max)), fe.prevent = {
						"<": i >= pe.max,
						">": i <= pe.min
					}, clearTimeout(fe.t), fe.t = setTimeout(function() {
						w(A.l = i, !0)
					}, Bi), w(i)
				}
			}), Vt.hover(function() {
				setTimeout(function() {
					It || z(!(Pt = !0))
				}, 0)
			}, function() {
				Pt && z(!(Pt = !1))
			}), Lt = function(t) {
				Xe(t), Q.call(this, t)
			}, jt = (jt = {
				onStart: function() {
					j(), ue.control = !0
				},
				onTouchEnd: D
			}) || {}, Gt.each(function() {
				var e, t = xe(this),
					i = t.data();
				i.clickOn || (i.clickOn = !0, xe.extend(Ze(t, {
					onStart: function(t) {
						e = t, (jt.onStart || Ce).call(this, t)
					},
					onMove: jt.onMove || Ce,
					onTouchEnd: jt.onTouchEnd || Ce,
					onEnd: function(t) {
						t.moved || Lt.call(this, e)
					}
				}), {
					noMove: !0
				}))
			}), Gt.each(function() {
				Ke(this, function(t) {
					Q.call(this, t)
				}), K(this)
			}), Ke(ae, Dt.toggleFullScreen), K(ae), xe.each("load push pop shift unshift reverse sort splice".split(" "), function(t, e) {
				Dt[e] = function() {
					return G = G || [], "load" !== e ? Array.prototype[e].apply(G, arguments) : arguments[0] && "object" == typeof arguments[0] && arguments[0].length && (G = ze(arguments[0])), Y(), Dt
				}
			}), Y()
		}, xe.fn.fotorama = function(o) {
			return this.each(function() {
				var e = this,
					t = xe(this),
					i = t.data(),
					n = i.fotorama;
				n ? n.setOptions(o, !0) : je(function() {
					return !(0 === (t = e).offsetWidth && 0 === t.offsetHeight);
					var t
				}, function() {
					i.urtext = t.html(), new xe.Fotorama(t, xe.extend({}, S, a.fotoramaDefaults, o, i))
				})
			})
		}, xe.Fotorama.instances = [], xe.Fotorama.cache = {}, xe.Fotorama.measures = {}, (xe = xe || {}).Fotorama = xe.Fotorama || {}, xe.Fotorama.jst = xe.Fotorama.jst || {}, xe.Fotorama.jst.style = function(t) {
			var e;
			return "" + (".fotorama" + (null == (e = t.s) ? "" : e) + " .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:" + (null == (e = t.m) ? "" : e) + "px;\nheight:" + (null == (e = t.h) ? "" : e) + "px}\n.fotorama" + (null == (e = t.s) ? "" : e) + " .fotorama__thumb-border{\nheight:" + (null == (e = t.h - t.b * (t.q ? 0 : 2)) ? "" : e) + "px;\nborder-width:" + (null == (e = t.b) ? "" : e) + "px;\nmargin-top:" + (null == (e = t.m) ? "" : e)) + "px}"
		}, xe.Fotorama.jst.video = function(t) {
			var e = "",
				i = Array.prototype.join;
			return e += '<div class="fotorama__video"><iframe src="',
				function() {
					e += i.call(arguments, "")
				}(("youtube" == t.type ? t.p + "youtube.com/embed/" + t.id + "?autoplay=1" : "vimeo" == t.type ? t.p + "player.vimeo.com/video/" + t.id + "?autoplay=1&badge=0" : t.id) + (t.s && "custom" != t.type ? "&" + t.s : "")), e += '" frameborder="0" allowfullscreen></iframe></div>\n'
		}, xe(function() {
			xe("." + ni + ':not([data-auto="false"])').fotorama(), "http://" === Ie() && we.host.match(/\./) && !a.blockFotoramaData && xe("body").append('<iframe src="http://data.fotorama.io/?version=' + fotoramaVersion + '" style="display: none;"></iframe>')
		})
	}(window, document, location, "undefined" != typeof jQuery && jQuery),
	function(e) {
		"function" == typeof define && define.amd ? define(["jquery"], function(t) {
			e(t)
		}) : "object" == typeof module && "object" == typeof module.exports ? module.exports = e(require("jquery")) : e(jQuery)
	}(function(t) {
		"use strict";
		var e, i;
		if (t.uaMatch = function(t) {
				t = t.toLowerCase();
				var e = /(edge)\/([\w.]+)/.exec(t) || /(opr)[\/]([\w.]+)/.exec(t) || /(chrome)[ \/]([\w.]+)/.exec(t) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || 0 <= t.indexOf("trident") && /(rv)(?::| )([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [],
					i = /(ipad)/.exec(t) || /(ipod)/.exec(t) || /(iphone)/.exec(t) || /(kindle)/.exec(t) || /(silk)/.exec(t) || /(android)/.exec(t) || /(windows phone)/.exec(t) || /(win)/.exec(t) || /(mac)/.exec(t) || /(linux)/.exec(t) || /(cros)/.exec(t) || /(playbook)/.exec(t) || /(bb)/.exec(t) || /(blackberry)/.exec(t) || [];
				return {
					browser: e[5] || e[3] || e[1] || "",
					version: e[2] || e[4] || "0",
					versionNumber: e[4] || e[2] || "0",
					platform: i[0] || ""
				}
			}, i = {}, (e = t.uaMatch(window.navigator.userAgent)).browser && (i[e.browser] = !0, i.version = e.version, i.versionNumber = parseInt(e.versionNumber, 10)), e.platform && (i[e.platform] = !0), (i.android || i.bb || i.blackberry || i.ipad || i.iphone || i.ipod || i.kindle || i.playbook || i.silk || i["windows phone"]) && (i.mobile = !0), (i.cros || i.mac || i.linux || i.win) && (i.desktop = !0), (i.chrome || i.opr || i.safari) && (i.webkit = !0), i.rv || i.edge) {
			e.browser = "msie", i.msie = !0
		}
		if (i.safari && i.blackberry) {
			var n = "blackberry";
			i[e.browser = n] = !0
		}
		if (i.safari && i.playbook) {
			var o = "playbook";
			i[e.browser = o] = !0
		}
		if (i.bb) {
			var a = "blackberry";
			i[e.browser = a] = !0
		}
		if (i.opr) {
			e.browser = "opera", i.opera = !0
		}
		if (i.safari && i.android) {
			var s = "android";
			i[e.browser = s] = !0
		}
		if (i.safari && i.kindle) {
			e.browser = "kindle", i.kindle = !0
		}
		if (i.safari && i.silk) {
			e.browser = "silk", i.silk = !0
		}
		return i.name = e.browser, i.platform = e.platform, t.browser = i
	}),
	function(d) {
		d.fn.addBack = d.fn.addBack || d.fn.andSelf, d.fn.extend({
			actual: function(t, e) {
				if (!this[t]) throw '$.actual => The jQuery method "' + t + '" you called does not exist';
				var i, n, o = d.extend({
						absolute: !1,
						clone: !1,
						includeMargin: !1
					}, e),
					a = this.eq(0);
				if (!0 === o.clone) i = function() {
					a = a.clone().attr("style", "position: absolute !important; top: -1000 !important; ").appendTo("body")
				}, n = function() {
					a.remove()
				};
				else {
					var s, r = [],
						l = "";
					i = function() {
						s = a.parents().addBack().filter(":hidden"), l += "visibility: hidden !important; display: block !important; ", !0 === o.absolute && (l += "position: absolute !important; "), s.each(function() {
							var t = d(this),
								e = t.attr("style");
							r.push(e), t.attr("style", e ? e + ";" + l : l)
						})
					}, n = function() {
						s.each(function(t) {
							var e = d(this),
								i = r[t];
							void 0 === i ? e.removeAttr("style") : e.attr("style", i)
						})
					}
				}
				i();
				var c = /(outer)/.test(t) ? a[t](o.includeMargin) : a[t]();
				return n(), c
			}
		})
	}(jQuery),
	function(a) {
		a.fn.bsPinning = function(t) {
			var e = {
					smart: !0,
					onPin: function() {},
					onTop: a.noop,
					onUnpin: function() {},
					onNormal: function() {},
					wrapper_class: "",
					offset: 0
				},
				i = a.extend({}, e, t),
				n = {
					lastScrollTop: a(window).scrollTop(),
					status: ""
				},
				o = {
					isNormal: function() {
						return "normal" === n.status
					},
					isUnpinned: function() {
						return "unpinned" === n.status
					},
					isPinned: function() {
						return "pinned" === n.status
					},
					prepare: function() {
						n.target.addClass("bs-pinning-block"), i.smart && n.target.addClass("smart"), n.wrapper_height = n.target.actual("outerHeight"), n.wrapper.css("height", n.wrapper_height), i.wrapper_class && n.wrapper.addClass(i.wrapper_class), o.pinHandler()
					},
					pin: function() {
						n.status = "pinned", n.target.removeClass("unpinned normal unpinned-no-transition").addClass("pinned"), i.onPin.call(n.target), a("body").hasClass("admin-bar") && 600 < window.innerWidth && n.target.css("top", a("#wpadminbar").actual("outerHeight"))
					},
					unpin: function() {
						n.status = "unpinned", n.target.removeClass("pinned top normal").addClass("unpinned"), i.onUnpin.call(n.target)
					},
					top: function() {
						n.status = "top", i.onTop.call(n.target)
					},
					normal: function() {
						n.status = "normal", n.target.removeClass("pinned top unpinned").addClass("normal unpinned-no-transition"), i.onNormal.call(n.target), a("body").hasClass("admin-bar") && n.target.css("top", "")
					},
					fire: function(t) {
						if (this.prevMethodName === t) return !1;
						if ("function" != typeof this[t]) return !1;
						this.prevMethodName = t;
						var e = Array.prototype.slice.call(arguments, 1);
						return this[t].apply(this, e)
					},
					pinHandler: function() {
						var t = a(window).scrollTop(),
							e = n.wrapper.offset().top - i.offset;
						i.smart && !n.wrapper.hasClass("stop-smarty-pinning") ? t <= 0 ? (o.fire("top"), o.fire("normal")) : t >= n.lastScrollTop && e + n.wrapper_height >= t || t < n.lastScrollTop && t <= e ? o.fire("normal") : t >= n.lastScrollTop ? o.fire("unpin") : o.fire("pin") : 0 === t ? (o.fire("top"), o.fire("normal")) : 1 + e < t ? o.fire("pin") : t < e && o.fire("normal"), n.lastScrollTop = t
					}
				};
			return this.each(function() {
				a(this).wrap("<div class='bs-pinning-wrapper'></div>"), n.wrapper = a(this).closest(".bs-pinning-wrapper"), n.target = a(this), o.prepare(), a(window).on("scroll", o.pinHandler)
			})
		}
	}(jQuery),
	function(t, e) {
		"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
	}(this, function() {
		function t() {}
		var e = t.prototype;
		return e.on = function(t, e) {
			if (t && e) {
				var i = this._events = this._events || {},
					n = i[t] = i[t] || [];
				return -1 == n.indexOf(e) && n.push(e), this
			}
		}, e.once = function(t, e) {
			if (t && e) {
				this.on(t, e);
				var i = this._onceEvents = this._onceEvents || {};
				return (i[t] = i[t] || [])[e] = !0, this
			}
		}, e.off = function(t, e) {
			var i = this._events && this._events[t];
			if (i && i.length) {
				var n = i.indexOf(e);
				return -1 != n && i.splice(n, 1), this
			}
		}, e.emitEvent = function(t, e) {
			var i = this._events && this._events[t];
			if (i && i.length) {
				var n = 0,
					o = i[n];
				e = e || [];
				for (var a = this._onceEvents && this._onceEvents[t]; o;) {
					var s = a && a[o];
					s && (this.off(t, o), delete a[o]), o.apply(this, e), o = i[n += s ? 0 : 1]
				}
				return this
			}
		}, t
	}),
	function(e, i) {
		"use strict";
		"function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(t) {
			return i(e, t)
		}) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter)
	}(window, function(e, t) {
		function n(t, e) {
			for (var i in e) t[i] = e[i];
			return t
		}

		function o(t, e, i) {
			return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = function(t) {
				var e = [];
				if (Array.isArray(t)) e = t;
				else if ("number" == typeof t.length)
					for (var i = 0; i < t.length; i++) e.push(t[i]);
				else e.push(t);
				return e
			}(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), s && (this.jqDeferred = new s.Deferred), void setTimeout(function() {
				this.check()
			}.bind(this))) : new o(t, e, i)
		}

		function i(t) {
			this.img = t
		}

		function a(t, e) {
			this.url = t, this.element = e, this.img = new Image
		}
		var s = e.jQuery,
			r = e.console;
		(o.prototype = Object.create(t.prototype)).options = {}, o.prototype.getImages = function() {
			this.images = [], this.elements.forEach(this.addElementImages, this)
		}, o.prototype.addElementImages = function(t) {
			"IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
			var e = t.nodeType;
			if (e && l[e]) {
				for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
					var o = i[n];
					this.addImage(o)
				}
				if ("string" == typeof this.options.background) {
					var a = t.querySelectorAll(this.options.background);
					for (n = 0; n < a.length; n++) {
						var s = a[n];
						this.addElementBackgroundImages(s)
					}
				}
			}
		};
		var l = {
			1: !0,
			9: !0,
			11: !0
		};
		return o.prototype.addElementBackgroundImages = function(t) {
			var e = getComputedStyle(t);
			if (e)
				for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
					var o = n && n[2];
					o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
				}
		}, o.prototype.addImage = function(t) {
			var e = new i(t);
			this.images.push(e)
		}, o.prototype.addBackground = function(t, e) {
			var i = new a(t, e);
			this.images.push(i)
		}, o.prototype.check = function() {
			function e(t, e, i) {
				setTimeout(function() {
					n.progress(t, e, i)
				})
			}
			var n = this;
			return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
				t.once("progress", e), t.check()
			}) : void this.complete()
		}, o.prototype.progress = function(t, e, i) {
			this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && r && r.log("progress: " + i, t, e)
		}, o.prototype.complete = function() {
			var t = this.hasAnyBroken ? "fail" : "done";
			if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
				var e = this.hasAnyBroken ? "reject" : "resolve";
				this.jqDeferred[e](this)
			}
		}, (i.prototype = Object.create(t.prototype)).check = function() {
			return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
		}, i.prototype.getIsImageComplete = function() {
			return this.img.complete && void 0 !== this.img.naturalWidth
		}, i.prototype.confirm = function(t, e) {
			this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
		}, i.prototype.handleEvent = function(t) {
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, i.prototype.onload = function() {
			this.confirm(!0, "onload"), this.unbindEvents()
		}, i.prototype.onerror = function() {
			this.confirm(!1, "onerror"), this.unbindEvents()
		}, i.prototype.unbindEvents = function() {
			this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
		}, (a.prototype = Object.create(i.prototype)).check = function() {
			this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
		}, a.prototype.unbindEvents = function() {
			this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
		}, a.prototype.confirm = function(t, e) {
			this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
		}, (o.makeJQueryPlugin = function(t) {
			(t = t || e.jQuery) && ((s = t).fn.imagesLoaded = function(t, e) {
				return new o(this, t, e).jqDeferred.promise(s(this))
			})
		})(), o
	}),
	function(n) {
		n.betterNewsticker = function(t, e) {
			var i = this;
			i.$el = n(t), i.el = t, i.$el.data("betterNewsticker", i), i.init = function() {
				i.options = n.extend({}, n.betterNewsticker.defaultOptions, e), void 0 !== i.$el.data("speed") && (i.options.speed = i.$el.data("speed")), i.$el.find("li.active").length || i.$el.find("li:first").addClass("active"), window.setInterval(function() {
					i.next()
				}, i.options.speed), i.options.control_nav && (i.$el.append('<div class="control-nav"><span class="prev">' + i.options.prev_label + '</span><span class="next">' + i.options.next_label + "</span></div>"), i.$el.on("click", ".control-nav .prev", function() {
					i.prev()
				}), i.$el.on("click", ".control-nav .next", function() {
					i.next()
				}))
			}, i.next = function() {
				var t = i.$el.find("li.active").next();
				t.length || (t = i.$el.find("li:first")), i.$el.find("li.active").removeClass("active"), t.addClass("active").fadeIn()
			}, i.prev = function() {
				var t = i.$el.find("li.active").prev();
				t.length || (t = i.$el.find("li:last")), i.$el.find("li.active").removeClass("active"), t.addClass("active").fadeIn()
			}, i.init()
		}, n.betterNewsticker.defaultOptions = {
			speed: 8e3,
			control_nav: !1,
			prev_label: '<i class="fa fa-angle-left"></i>',
			next_label: '<i class="fa fa-angle-right"></i>'
		}, n.fn.betterNewsticker = function(t) {
			return this.each(function() {
				new n.betterNewsticker(this, t)
			})
		}
	}(jQuery),
	function(s, a) {
		var r = {
			customClass: "simply-scroll",
			frameRate: 24,
			speed: 1,
			orientation: "horizontal",
			auto: !0,
			autoMode: "loop",
			manualMode: "end",
			direction: "forwards",
			pauseOnHover: !0,
			pauseOnTouch: !0,
			pauseButton: !(s.fn.simplyScroll = function(t) {
				return this.each(function() {
					new s.simplyScroll(this, t)
				})
			}),
			startOnLoad: !1
		};
		s.simplyScroll = function(t, e) {
			var i = this;
			this.o = s.extend({}, r, e || {}), this.isAuto = !1 !== this.o.auto && null !== this.o.autoMode.match(/^loop|bounce$/), this.isRTL = (this.isHorizontal = null !== this.o.orientation.match(/^horizontal|vertical$/) && this.o.orientation == r.orientation) && "rtl" == s("html").attr("dir"), this.isForwards = !this.isAuto || this.isAuto && null !== this.o.direction.match(/^forwards|backwards$/) && this.o.direction == r.direction && !this.isRTL, this.isLoop = this.isAuto && "loop" == this.o.autoMode || !this.isAuto && "loop" == this.o.manualMode, this.events = (this.supportsTouch = "createTouch" in document) ? {
				start: "touchstart MozTouchDown",
				move: "touchmove MozTouchMove",
				end: "touchend touchcancel MozTouchRelease"
			} : {
				start: "mouseenter",
				end: "mouseleave"
			}, this.$list = s(t);
			var n = this.$list.children();
			if (this.$list.addClass("simply-scroll-list").wrap('<div class="simply-scroll-clip"></div>').parent().wrap('<div class="' + this.o.customClass + ' simply-scroll-container"></div>'), this.isAuto ? this.o.pauseButton && (this.$list.parent().parent().prepend('<div class="simply-scroll-btn simply-scroll-btn-pause"></div>'), this.o.pauseOnHover = !1) : this.$list.parent().parent().prepend('<div class="simply-scroll-forward"></div>').prepend('<div class="simply-scroll-back"></div>'), 1 < n.length) {
				var o = 0;
				(this.isHorizontal ? (n.each(function() {
					o += s(this).outerWidth(!0)
				}), n.eq(0).outerWidth(!0) * n.length !== o) : (n.each(function() {
					o += s(this).outerHeight(!0)
				}), n.eq(0).outerHeight(!0) * n.length !== o)) && (this.$list = this.$list.wrap("<div></div>").parent().addClass("simply-scroll-list"), this.isHorizontal ? this.$list.children().css({
					float: "left",
					width: o + "px"
				}) : this.$list.children().css({
					height: o + "px"
				}))
			}
			this.o.startOnLoad ? s(a).load(function() {
				i.init()
			}) : this.init()
		}, s.simplyScroll.fn = s.simplyScroll.prototype = {}, s.simplyScroll.fn.extend = s.simplyScroll.extend = s.extend, s.simplyScroll.fn.extend({
			init: function() {
				this.$items = this.$list.children(), this.$clip = this.$list.parent(), this.$container = this.$clip.parent(), this.$btnBack = s(".simply-scroll-back", this.$container), this.$btnForward = s(".simply-scroll-forward", this.$container), this.isHorizontal ? (this.itemMax = this.$items.eq(0).outerWidth(!0), this.clipMax = this.$clip.width(), this.dimension = "width", this.moveBackClass = "simply-scroll-btn-left", this.moveForwardClass = "simply-scroll-btn-right", this.scrollPos = "Left") : (this.itemMax = this.$items.eq(0).outerHeight(!0), this.clipMax = this.$clip.height(), this.dimension = "height", this.moveBackClass = "simply-scroll-btn-up", this.moveForwardClass = "simply-scroll-btn-down", this.scrollPos = "Top"), this.posMin = 0, this.posMax = this.$items.length * this.itemMax;
				var t = Math.ceil(this.clipMax / this.itemMax);
				if (this.isAuto && "loop" == this.o.autoMode) this.$list.css(this.dimension, this.posMax + this.itemMax * t + "px"), this.posMax += this.clipMax - this.o.speed, this.isForwards ? (this.$items.slice(0, t).clone(!0).appendTo(this.$list), this.resetPosition = 0) : (this.$items.slice(-t).clone(!0).prependTo(this.$list), this.resetPosition = this.$items.length * this.itemMax, this.isRTL && (this.$clip[0].dir = "ltr", this.$items.css("float", "right")));
				else if (this.isAuto || "loop" != this.o.manualMode) this.$list.css(this.dimension, this.posMax + "px"), this.isForwards ? this.resetPosition = 0 : (this.resetPosition = this.$items.length * this.itemMax, this.isRTL && (this.$clip[0].dir = "ltr", this.$items.css("float", "right")));
				else {
					this.posMax += this.itemMax * t, this.$list.css(this.dimension, this.posMax + this.itemMax * t + "px"), this.posMax += this.clipMax - this.o.speed, this.$items.slice(0, t).clone(!0).appendTo(this.$list), this.$items.slice(-t).clone(!0).prependTo(this.$list), this.resetPositionForwards = this.resetPosition = t * this.itemMax, this.resetPositionBackwards = this.$items.length * this.itemMax;
					var i = this;
					this.$btnBack.bind(this.events.start, function() {
						i.isForwards = !1, i.resetPosition = i.resetPositionBackwards
					}), this.$btnForward.bind(this.events.start, function() {
						i.isForwards = !0, i.resetPosition = i.resetPositionForwards
					})
				}
				if (this.resetPos(), this.interval = null, this.intervalDelay = Math.floor(1e3 / this.o.frameRate), this.isAuto || "end" != this.o.manualMode)
					for (; 0 != this.itemMax % this.o.speed;)
						if (this.o.speed--, 0 === this.o.speed) {
							this.o.speed = 1;
							break
						} if ((i = this).trigger = null, this.funcMoveBack = function(t) {
						void 0 !== t && t.preventDefault(), i.trigger = i.isAuto || "end" != i.o.manualMode ? null : this, !i.isAuto || i.isForwards ? i.moveBack() : i.moveForward()
					}, this.funcMoveForward = function(t) {
						void 0 !== t && t.preventDefault(), i.trigger = i.isAuto || "end" != i.o.manualMode ? null : this, !i.isAuto || i.isForwards ? i.moveForward() : i.moveBack()
					}, this.funcMovePause = function() {
						i.movePause()
					}, this.funcMoveStop = function() {
						i.moveStop()
					}, this.funcMoveResume = function() {
						i.moveResume()
					}, this.isAuto) {
					this.paused = !1;

					function n() {
						return !1 === i.paused ? (i.paused = !0, i.funcMovePause()) : (i.paused = !1, i.funcMoveResume()), i.paused
					}
					if (this.supportsTouch && this.$items.find("a").length && (this.supportsTouch = !1), this.isAuto && this.o.pauseOnHover && !this.supportsTouch) this.$clip.bind(this.events.start, this.funcMovePause).bind(this.events.end, this.funcMoveResume);
					else if (this.isAuto && this.o.pauseOnTouch && !this.o.pauseButton && this.supportsTouch) {
						var o, a;
						this.$clip.bind(this.events.start, function(t) {
							n();
							var e = t.originalEvent.touches[0];
							o = i.isHorizontal ? e.pageX : e.pageY, a = i.$clip[0]["scroll" + i.scrollPos], t.stopPropagation(), t.preventDefault()
						}).bind(this.events.move, function(t) {
							t.stopPropagation(), t.preventDefault(), t = t.originalEvent.touches[0], (t = o - (i.isHorizontal ? t.pageX : t.pageY) + a) < 0 ? t = 0 : t > i.posMax && (t = i.posMax), i.$clip[0]["scroll" + i.scrollPos] = t, i.funcMovePause(), i.paused = !0
						})
					} else this.o.pauseButton && (this.$btnPause = s(".simply-scroll-btn-pause", this.$container).bind("click", function(t) {
						t.preventDefault(), n() ? s(this).addClass("active") : s(this).removeClass("active")
					}));
					this.funcMoveForward()
				} else this.$btnBack.addClass("simply-scroll-btn " + this.moveBackClass).bind(this.events.start, this.funcMoveBack).bind(this.events.end, this.funcMoveStop), this.$btnForward.addClass("simply-scroll-btn " + this.moveForwardClass).bind(this.events.start, this.funcMoveForward).bind(this.events.end, this.funcMoveStop), "end" == this.o.manualMode && (this.isRTL ? this.$btnForward.addClass("disabled") : this.$btnBack.addClass("disabled"))
			},
			moveForward: function() {
				var t = this;
				this.movement = "forward", null !== this.trigger && this.$btnBack.removeClass("disabled"), t.interval = setInterval(function() {
					t.$clip[0]["scroll" + t.scrollPos] < t.posMax - t.clipMax ? t.$clip[0]["scroll" + t.scrollPos] += t.o.speed : t.isLoop ? t.resetPos() : t.moveStop(t.movement)
				}, t.intervalDelay)
			},
			moveBack: function() {
				var t = this;
				this.movement = "back", null !== this.trigger && this.$btnForward.removeClass("disabled"), t.interval = setInterval(function() {
					t.$clip[0]["scroll" + t.scrollPos] > t.posMin ? t.$clip[0]["scroll" + t.scrollPos] -= t.o.speed : t.isLoop ? t.resetPos() : t.moveStop(t.movement)
				}, t.intervalDelay)
			},
			movePause: function() {
				clearInterval(this.interval)
			},
			moveStop: function(t) {
				this.movePause(), null !== this.trigger && (void 0 !== t && s(this.trigger).addClass("disabled"), this.trigger = null), this.isAuto && "bounce" == this.o.autoMode && ("forward" == t ? this.moveBack() : this.moveForward())
			},
			moveResume: function() {
				"forward" == this.movement ? this.moveForward() : this.moveBack()
			},
			resetPos: function() {
				this.$clip[0]["scroll" + this.scrollPos] = this.resetPosition
			}
		})
	}(jQuery, window),
	function(t, e) {
		if ("object" == typeof module && "object" == typeof module.exports) {
			if (!t.document) throw new Error("HC-Sticky requires a browser to run.");
			module.exports = e(t)
		} else "function" == typeof define && define.amd ? define("hcSticky", [], e(t)) : e(t)
	}("undefined" != typeof window ? window : this, function(H) {
		function B(t, e, i) {
			console.warn("%cHC Sticky:%c " + i + "%c '" + t + "'%c is now deprecated and will be removed. Use%c '" + e + "'%c instead.", "color: #fa253b", "color: default", "color: #5595c6", "color: default", "color: #5595c6", "color: default")
		}
		var V = H.document,
			U = {
				top: 0,
				bottom: 0,
				bottomEnd: 0,
				innerTop: 0,
				innerSticker: null,
				stickyClass: "sticky",
				stickTo: null,
				followScroll: !0,
				responsive: null,
				mobileFirst: !1,
				onStart: null,
				onStop: null,
				onBeforeResize: null,
				onResize: null,
				resizeDebounce: 100,
				disable: !1
			},
			Q = function(o, c) {
				var i = this;
				if (c = c || {}, "string" == typeof o && (o = V.querySelector(o)), !o) return !1;
				c.queries && B("queries", "responsive", "option"), c.queryFlow && B("queryFlow", "mobileFirst", "option");
				var d = {},
					u = Q.Helpers,
					a = o.parentNode;

				function h(t) {
					t = t || {}, u.isEmptyObject(t) && !u.isEmptyObject(d) || (d = Object.assign({}, U, d, t))
				}

				function t() {
					return d.disable
				}

				function e() {
					var t = d.responsive || d.queries;
					if (t) {
						var e = H.innerWidth;
						if ((d = Object.assign({}, U, c || {})).mobileFirst)
							for (var i in t) i <= e && !u.isEmptyObject(t[i]) && h(t[i]);
						else {
							var n = [];
							for (var o in t) {
								var a = {};
								a[o] = t[o], n.push(a)
							}
							for (var s = n.length - 1; 0 <= s; s--) {
								var r = n[s],
									l = Object.keys(r)[0];
								e <= l && !u.isEmptyObject(r[l]) && h(r[l])
							}
						}
					}
				}

				function s() {
					A = O(), w = P(), M = x + w - S - $, N = T < A;
					var t, e = H.pageYOffset || V.documentElement.scrollTop,
						i = u.offset(o).top,
						n = i - e;
					L = e < W ? "up" : "down", F = e - W, _ < (W = e) ? M + S + (N ? k : 0) - (d.followScroll && N ? 0 : S) <= e + A - E - (T - (_ - E) < A - E && d.followScroll && 0 < (t = A - T - E) ? t : 0) ? j.release({
						position: "absolute",
						bottom: C + a.offsetHeight - M - S
					}) : N && d.followScroll ? "down" == L ? n + A + k <= T + .9 ? j.stick({
						bottom: k
					}) : "fixed" === j.position && j.release({
						position: "absolute",
						top: i - S - _ - F + E
					}) : Math.ceil(n + E) < 0 && "fixed" === j.position ? j.release({
						position: "absolute",
						top: i - S - _ + E - F
					}) : e + S - E <= i && j.stick({
						top: S - E
					}) : j.stick({
						top: S - E
					}) : j.release({
						stop: !0
					})
				}

				function r() {
					R && (H.removeEventListener("scroll", s, u.supportsPassive), R = !1)
				}

				function n() {
					var t, e, i, n;
					null !== o.offsetParent && "none" !== u.getStyle(o, "display") ? (j.css = (t = o, e = u.getCascadedStyle(t), i = u.getStyle(t), n = {
						height: t.offsetHeight + "px",
						left: e.left,
						right: e.right,
						top: e.top,
						bottom: e.bottom,
						position: i.position,
						display: i.display,
						verticalAlign: i.verticalAlign,
						boxSizing: i.boxSizing,
						marginLeft: e.marginLeft,
						marginRight: e.marginRight,
						marginTop: e.marginTop,
						marginBottom: e.marginBottom,
						paddingLeft: e.paddingLeft,
						paddingRight: e.paddingRight
					}, e.float && (n.float = e.float || "none"), e.cssFloat && (n.cssFloat = e.cssFloat || "none"), i.MozBoxSizing && (n.MozBoxSizing = i.MozBoxSizing), n.width = "auto" !== e.width ? e.width : "border-box" === n.boxSizing || "border-box" === n.MozBoxSizing ? t.offsetWidth + "px" : i.width, n), D.init(), g = !(!d.stickTo || !("document" === d.stickTo || d.stickTo.nodeType && 9 === d.stickTo.nodeType || "object" == typeof d.stickTo && d.stickTo instanceof("undefined" != typeof HTMLDocument ? HTMLDocument : Document))), b = d.stickTo ? g ? V : "string" == typeof d.stickTo ? V.querySelector(d.stickTo) : d.stickTo : a, A = (O = function() {
						var t = o.offsetHeight + (parseInt(j.css.marginTop) || 0) + (parseInt(j.css.marginBottom) || 0),
							e = (A || 0) - t;
						return -1 <= e && e <= 1 ? A : t
					})(), w = (P = function() {
						return g ? Math.max(V.documentElement.clientHeight, V.body.scrollHeight, V.documentElement.scrollHeight, V.body.offsetHeight, V.documentElement.offsetHeight) : b.offsetHeight
					})(), x = g ? 0 : u.offset(b).top, C = d.stickTo ? g ? 0 : u.offset(a).top : x, T = H.innerHeight, I = o.offsetTop - (parseInt(j.css.marginTop) || 0), y = d.innerSticker ? "string" == typeof d.innerSticker ? V.querySelector(d.innerSticker) : d.innerSticker : null, S = isNaN(d.top) && -1 < d.top.indexOf("%") ? parseFloat(d.top) / 100 * T : d.top, k = isNaN(d.bottom) && -1 < d.bottom.indexOf("%") ? parseFloat(d.bottom) / 100 * T : d.bottom, E = y ? y.offsetTop : d.innerTop ? d.innerTop : 0, $ = isNaN(d.bottomEnd) && -1 < d.bottomEnd.indexOf("%") ? parseFloat(d.bottomEnd) / 100 * T : d.bottomEnd, _ = x - S + E + I, w < A ? r() : (s(), R || (H.addEventListener("scroll", s, u.supportsPassive), R = !0))) : r()
				}

				function l() {
					o.style.position = "", o.style.left = "", o.style.top = "", o.style.bottom = "", o.style.width = "", o.classList ? o.classList.remove(d.stickyClass) : o.className = o.className.replace(new RegExp("(^|\\b)" + d.stickyClass.split(" ").join("|") + "(\\b|$)", "gi"), " "), j.css = {}, !(j.position = null) === D.isAttached && D.detach()
				}

				function p() {
					l(), e(), (t() ? r : n)()
				}

				function f() {
					d.onBeforeResize && d.onBeforeResize.call(o, Object.assign({}, d)), p(), d.onResize && d.onResize.call(o, Object.assign({}, d))
				}

				function m() {
					q && (H.removeEventListener("resize", z, u.supportsPassive), q = !1), r()
				}

				function v() {
					q || (H.addEventListener("resize", z, u.supportsPassive), q = !0), e(), (t() ? r : n)()
				}
				"static" === u.getStyle(a, "position") && (a.style.position = "relative");
				var g, b, y, w, x, C, T, S, k, E, $, _, M, N, A, I, P, O, L, j = {
						css: {},
						position: null,
						stick: function(t) {
							t = t || {}, u.hasClass(o, d.stickyClass) || (!1 === D.isAttached && D.attach(), j.position = "fixed", o.style.position = "fixed", o.style.left = D.offsetLeft + "px", o.style.width = D.width, void 0 === t.bottom ? o.style.bottom = "auto" : o.style.bottom = t.bottom + "px", void 0 === t.top ? o.style.top = "auto" : o.style.top = t.top + "px", o.classList ? o.classList.add(d.stickyClass) : o.className += " " + d.stickyClass, d.onStart && d.onStart.call(o, Object.assign({}, d)))
						},
						release: function(t) {
							if ((t = t || {}).stop = t.stop || !1, !0 === t.stop || "fixed" === j.position || null === j.position || !(void 0 === t.top && void 0 === t.bottom || void 0 !== t.top && (parseInt(u.getStyle(o, "top")) || 0) === t.top || void 0 !== t.bottom && (parseInt(u.getStyle(o, "bottom")) || 0) === t.bottom)) {
								!0 === t.stop ? !0 === D.isAttached && D.detach() : !1 === D.isAttached && D.attach();
								var e = t.position || j.css.position;
								j.position = e, o.style.position = e, o.style.left = !0 === t.stop ? j.css.left : D.positionLeft + "px", o.style.width = "absolute" !== e ? j.css.width : D.width, void 0 === t.bottom ? o.style.bottom = !0 === t.stop ? "" : "auto" : o.style.bottom = t.bottom + "px", void 0 === t.top ? o.style.top = !0 === t.stop ? "" : "auto" : o.style.top = t.top + "px", o.classList ? o.classList.remove(d.stickyClass) : o.className = o.className.replace(new RegExp("(^|\\b)" + d.stickyClass.split(" ").join("|") + "(\\b|$)", "gi"), " "), d.onStop && d.onStop.call(o, Object.assign({}, d))
							}
						}
					},
					D = {
						el: V.createElement("div"),
						offsetLeft: null,
						positionLeft: null,
						width: null,
						isAttached: !1,
						init: function() {
							for (var t in D.el.className = "sticky-spacer", j.css) D.el.style[t] = j.css[t];
							D.el.style["z-index"] = "-1";
							var e = u.getStyle(o);
							D.offsetLeft = u.offset(o).left - (parseInt(e.marginLeft) || 0), D.positionLeft = u.position(o).left, D.width = u.getStyle(o, "width")
						},
						attach: function() {
							a.insertBefore(D.el, o), D.isAttached = !0
						},
						detach: function() {
							D.el = a.removeChild(D.el), D.isAttached = !1
						}
					},
					W = H.pageYOffset || V.documentElement.scrollTop,
					F = 0,
					R = !1,
					q = !1,
					z = d.resizeDebounce ? u.debounce(f, d.resizeDebounce) : f;
				this.options = function(t) {
					return t ? d[t] : Object.assign({}, d)
				}, this.refresh = p, this.update = function(t) {
					h(t), c = Object.assign({}, c, t || {}), p()
				}, this.attach = v, this.detach = m, this.destroy = function() {
					m(), l()
				}, this.triggerMethod = function(t, e) {
					"function" == typeof i[t] && i[t](e)
				}, this.reinit = function() {
					B("reinit", "refresh", "method"), p()
				}, h(c), v(), H.addEventListener("load", p)
			};
		if (void 0 !== H.jQuery) {
			var n = H.jQuery,
				o = "hcSticky";
			n.fn.extend({
				hcSticky: function(e, i) {
					return this.length ? "options" === e ? n.data(this.get(0), o).options() : this.each(function() {
						var t = n.data(this, o);
						t ? t.triggerMethod(e, i) : (t = new Q(this, e), n.data(this, o, t))
					}) : this
				}
			})
		}
		return H.hcSticky = H.hcSticky || Q, Q
	}),
	function(c) {
		var t = c.hcSticky,
			d = c.document;
		"function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
			value: function(t, e) {
				if (null == t) throw new TypeError("Cannot convert undefined or null to object");
				for (var i = Object(t), n = 1; n < arguments.length; n++) {
					var o = arguments[n];
					if (null != o)
						for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (i[a] = o[a])
				}
				return i
			},
			writable: !0,
			configurable: !0
		}), Array.prototype.forEach || (Array.prototype.forEach = function(t) {
			var e, i;
			if (null == this) throw new TypeError("this is null or not defined");
			var n = Object(this),
				o = n.length >>> 0;
			if ("function" != typeof t) throw new TypeError(t + " is not a function");
			for (1 < arguments.length && (e = arguments[1]), i = 0; i < o;) {
				var a;
				i in n && (a = n[i], t.call(e, a, i, n)), i++
			}
		});
		var e = !1;
		try {
			var i = Object.defineProperty({}, "passive", {
				get: function() {
					e = {
						passive: !1
					}
				}
			});
			c.addEventListener("testPassive", null, i), c.removeEventListener("testPassive", null, i)
		} catch (t) {}

		function s(t, e) {
			return c.getComputedStyle ? e ? d.defaultView.getComputedStyle(t, null).getPropertyValue(e) : d.defaultView.getComputedStyle(t, null) : t.currentStyle ? e ? t.currentStyle[e.replace(/-\w/g, function(t) {
				return t.toUpperCase().replace("-", "")
			})] : t.currentStyle : void 0
		}

		function r(t) {
			var e = t.getBoundingClientRect(),
				i = c.pageYOffset || d.documentElement.scrollTop,
				n = c.pageXOffset || d.documentElement.scrollLeft;
			return {
				top: e.top + i,
				left: e.left + n
			}
		}
		t.Helpers = {
			supportsPassive: e,
			isEmptyObject: function(t) {
				for (var e in t) return !1;
				return !0
			},
			debounce: function(n, o, a) {
				var s;
				return function() {
					var t = this,
						e = arguments,
						i = a && !s;
					clearTimeout(s), s = setTimeout(function() {
						s = null, a || n.apply(t, e)
					}, o), i && n.apply(t, e)
				}
			},
			hasClass: function(t, e) {
				return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
			},
			offset: r,
			position: function(t) {
				var e = t.offsetParent,
					i = r(e),
					n = r(t),
					o = s(e),
					a = s(t);
				return i.top += parseInt(o.borderTopWidth) || 0, i.left += parseInt(o.borderLeftWidth) || 0, {
					top: n.top - i.top - (parseInt(a.marginTop) || 0),
					left: n.left - i.left - (parseInt(a.marginLeft) || 0)
				}
			},
			getStyle: s,
			getCascadedStyle: function(t) {
				var e, i = t.cloneNode(!0);
				i.style.display = "none", Array.prototype.slice.call(i.querySelectorAll('input[type="radio"]')).forEach(function(t) {
					t.removeAttribute("name")
				}), t.parentNode.insertBefore(i, t.nextSibling), i.currentStyle ? e = i.currentStyle : c.getComputedStyle && (e = d.defaultView.getComputedStyle(i, null));
				var n = {};
				for (var o in e) !isNaN(o) || "string" != typeof e[o] && "number" != typeof e[o] || (n[o] = e[o]);
				if (Object.keys(n).length < 3)
					for (var a in n = {}, e) isNaN(a) || (n[e[a].replace(/-\w/g, function(t) {
						return t.toUpperCase().replace("-", "")
					})] = e.getPropertyValue(e[a]));
				if (n.margin || "auto" !== n.marginLeft ? n.margin || n.marginLeft !== n.marginRight || n.marginLeft !== n.marginTop || n.marginLeft !== n.marginBottom || (n.margin = n.marginLeft) : n.margin = "auto", !n.margin && "0px" === n.marginLeft && "0px" === n.marginRight) {
					var s = t.offsetLeft - t.parentNode.offsetLeft,
						r = s - (parseInt(n.left) || 0) - (parseInt(n.right) || 0),
						l = t.parentNode.offsetWidth - t.offsetWidth - s - (parseInt(n.right) || 0) + (parseInt(n.left) || 0) - r;
					0 != l && 1 != l || (n.margin = "auto")
				}
				return i.parentNode.removeChild(i), i = null, n
			}
		}
	}(window),
	function() {
		function o(t, e) {
			this.element = t[0], this.$element = t, this.overflowElements = [], this.elementsWidth = 0, this.lastExecutedBR = 0, this.handleBR = !1, this.enable = !0, this.options = c.extend({
				childClass: !1,
				mustDisplayClass: !1,
				menuContainerTag: "div",
				menuContainerClass: "bs-pretty-tabs-container",
				menuContainerPosition: "beginning",
				itemsWrapperSelector: !1,
				moreContainer: '<a href="#" class="bs-pretty-tabs-more">More <i class="fa fa-angle-down" aria-hidden="true"></i></a><div class="bs-pretty-tabs-elements"></div>',
				getContainerWidth: function(t) {
					return t
				},
				initWrapperContainer: function(t) {
					return t
				},
				styleChangesAt: []
			}, e), this.options.styleChangesAt.length && (this.handleBR = !0, this.options.styleChangesAt = this.options.styleChangesAt.sort(function(t, e) {
				return e < t
			})), this.init()
		}
		var c;
		(c = jQuery).extend(o.prototype, {
			init: function() {
				var e = this;

				function t() {
					if (e.handleBR && e.enable) {
						var t = e.getCurrentBR();
						t !== e.lastExecutedBR && (e.retrieveElements(!0), e.getItems().each(function() {
							var t = c(this);
							e._updateElementWidth(t)
						}), e.lastExecutedBR = t)
					}
					e.handlePrettyTabs()
				}
				c(window).on("resize.bsPrettyTabs", t), e.$element.addClass("bs-pretty-tabs bs-pretty-tabs-initialized"), t()
			},
			getItemsWrapper: function() {
				return this.options.itemsWrapperSelector ? this.$element.find(this.options.itemsWrapperSelector) : this.$element
			},
			getItems: function(t) {
				return this.getItemsWrapper().children(t)
			},
			getCurrentBR: function() {
				var t = 0;
				for (i = 0; i < this.options.styleChangesAt.length; i++)
					if (this.options.styleChangesAt[i] >= window.outerWidth) {
						t = this.options.styleChangesAt[i];
						break
					} return t
			},
			handlePrettyTabs: function() {
				var e = this;
				if (e.enable) {
					e.collectOverflowElements(), e.overflowElements.length ? e.overflowElements.forEach(function(t) {
						e.moveToInvisibleContainer(t)
					}) : e.retrieveElements();
					var t = this._getTotalWidth(),
						i = this._getMenuLinkWidth(),
						n = this._getMenuContainer();
					if (t < i) n.hide();
					else {
						var o = t;
						e._getVisibleElement().each(function() {
							o -= e._getElementWidth(c(this))
						}), n[i <= o && e._getInvisibleElements().length ? "show" : "hide"]()
					}
					this.$element.trigger("after-pretty-tabs", [this])
				}
			},
			retrieveElements: function(t) {
				var e = this.options.getContainerWidth.call(this, this.$element.width()),
					i = this.elementsWidth,
					n = this;
				if (n._getInvisibleElements().length) {
					for (var o = this.getInvisibleElementsContainer().children(), a = !1, s = 0; s < o.length; s++) {
						var r = c(o[s]),
							l = i + n._getElementWidth(r);
						if (!(t || l < e)) break;
						i = l, n.moveToVisibleContainer(r), a = !0
					}
					1 !== o.length || a || l - n._getMenuLinkWidth() < e && (n.moveToVisibleContainer(o), n._getMenuContainer().remove())
				} else this._getMenuContainer().remove()
			},
			_getInvisibleElements: function() {
				var t = this.options.menuContainerClass;
				return this.$element.find("." + t + " .bs-pretty-tabs-elements").children()
			},
			_updateElementWidth: function(t) {
				var e = t.outerWidth(!0) + 1;
				return "hidden" !== t.data("bs-visibility") && (t.data("bs-width", e), e)
			},
			_getElementWidth: function(t) {
				return "hidden" === t.data("bs-visibility") ? t.data("bs-width") : this._updateElementWidth(t)
			},
			_getVisibleElement: function() {
				var t = this.options.menuContainerClass;
				return this.getItems(":not(." + t + "):last")
			},
			_getMenuContainer: function() {
				var t = this.$element.find("." + this.options.menuContainerClass);
				return t.length ? t : this._setMenuContainer()
			},
			_setMenuContainer: function() {
				var t = c("<" + this.options.menuContainerTag + "/>", {
					class: this.options.menuContainerClass
				});
				return (t = this.options.initWrapperContainer.call(this, t)).append(this.options.moreContainer), "end" === this.options.menuContainerPosition ? t.appendTo(this.getItemsWrapper()) : t.prependTo(this.getItemsWrapper()), t.on("mouseover", function() {
					c(this).addClass("display-more-items")
				}).on("mouseout", function() {
					c(this).removeClass("display-more-items")
				}).on("click", function() {
					c(this).toggleClass("display-more-items")
				}), t
			},
			_getMenuLinkWidth: function(t) {
				var e = this.options.menuContainerClass,
					i = this.$element.find("." + e + " .bs-pretty-tabs-more");
				t = t || !1;
				return i.length || t ? this._getElementWidth(i) || 0 : (this._setMenuContainer(), this._getMenuLinkWidth(!0))
			},
			_getTotalWidth: function() {
				return this.options.getContainerWidth.call(this, this.$element.width())
			},
			getInvisibleElementsContainer: function() {
				return c(".bs-pretty-tabs-elements", this._getMenuContainer())
			},
			moveToInvisibleContainer: function(t) {
				var e = this.getInvisibleElementsContainer(),
					i = c(t);
				i.data("bs-visibility", "hidden"), i.prependTo(e)
			},
			moveToVisibleContainer: function(t) {
				var e = this._getMenuContainer();
				t.data("bs-visibility", "visible"), "end" === this.options.menuContainerPosition ? t.insertBefore(this._getMenuContainer()) : t.appendTo(e.parent())
			},
			collectOverflowElements: function() {
				var e = this._getTotalWidth(),
					i = this;
				this.overflowElements = [], this.elementsWidth = i._getMenuLinkWidth();
				var n = 0;
				this.getItems().each(function() {
					var t = c(this);
					t.hasClass(i.options.menuContainerClass) || (n = i._getElementWidth(t), i.elementsWidth += n, i.elementsWidth > e && (t.hasClass(i.options.menuContainerClass) || i.options.mustDisplayClass && t.hasClass(i.options.mustDisplayClass) || i.overflowElements.push(t)))
				}), 1 === i.overflowElements.length && i.elementsWidth - i._getMenuLinkWidth() + n < e && i.overflowElements.pop(), i.overflowElements = i.overflowElements.reverse()
			},
			changeState: function(t) {
				this.enable = "start" === t
			}
		}), c.fn.bsPrettyTabs = function(n) {
			return this.each(function() {
				var t = c(this);
				if ("string" == typeof n) {
					var e = t.data("bs-pretty-tabs");
					e && e.changeState && e.changeState(n)
				} else if (!t.data("bs-pretty-tabs")) {
					var i = new o(t, n);
					t.data("bs-pretty-tabs", i)
				}
			})
		}
	}(),
	function() {
		function i(t) {
			return Array.prototype.slice.call(t)
		}

		function s(e, i) {
			var n = e.nodeName.toLowerCase(),
				t = document.createElement("img");
			t.addEventListener("load", function() {
				var t;
				"img" === n ? ((t = e).hasAttribute("data-no-resize") || (0 === t.offsetWidth && 0 === t.offsetHeight ? (t.setAttribute("width", t.naturalWidth), t.setAttribute("height", t.naturalHeight)) : (t.setAttribute("width", t.offsetWidth), t.setAttribute("height", t.offsetHeight))), t.setAttribute("src", i)) : e.style.backgroundImage = "url(" + i + ")"
			}), t.setAttribute("src", i), e.setAttribute(d, !0)
		}

		function r(t, e, i) {
			var n, o = (n = parseInt(arguments.length <= 2 || void 0 === i ? 1 : i, 10), l < n ? l : n);
			e && 1 < o && s(t, e.replace(a, "@" + o + "x$1"))
		}

		function t(t) {
			var e;
			((e = t) ? "function" == typeof e.forEach ? e : i(e) : "undefined" != typeof document ? i(document.querySelectorAll(n)) : []).forEach(function(t) {
				if (!t.getAttribute(d)) {
					var e = "img" === t.nodeName.toLowerCase() ? t.getAttribute("src") : t.style.backgroundImage.replace(c, "$2"),
						i = t.getAttribute("data-bsrjs"),
						n = !isNaN(parseInt(i, 10));
					if (null === i) return;
					n ? r(t, e, i) : (o = t, a = i, 1 < l && s(o, a))
				}
				var o, a
			})
		}
		var e = "undefined" != typeof window,
			l = e && window.devicePixelRatio || 1,
			a = /(\.[A-z]{3,4}\/?(\?.*)?)$/,
			c = /url\(('|")?([^\)'"]+)('|")?\)/i,
			n = "[data-bsrjs]",
			d = "data-bsrjs-processed";
		e && (window.addEventListener("load", t), window.bsrj_retinajs = t)
	}(),
	function() {
		var e = jQuery.fn.addClass;
		jQuery.fn.addClass = function() {
			var t = e.apply(this, arguments);
			return jQuery(this).trigger("cssClassChanged"), t
		}
	}(), String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
		return e = e || 0, this.indexOf(t, e) === e
	});

var $bs_sticky_sidebars, docCookies = {
		getItem: function(e) {
			return e && decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
		},
		setItem: function(e, t, a, s, n, i) {
			if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
			var o = "";
			if (a) switch (a.constructor) {
				case Number:
					o = a === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + a;
					break;
				case String:
					o = "; expires=" + a;
					break;
				case Date:
					o = "; expires=" + a.toUTCString()
			}
			return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + o + (n ? "; domain=" + n : "") + (s ? "; path=" + s : "") + (i ? "; secure" : ""), !0
		},
		removeItem: function(e, t, a) {
			return !!this.hasItem(e) && (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (a ? "; domain=" + a : "") + (t ? "; path=" + t : ""), !0)
		},
		hasItem: function(e) {
			return !!e && new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
		},
		keys: function() {
			for (var e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), t = e.length, a = 0; a < t; a++) e[a] = decodeURIComponent(e[a]);
			return e
		}
	},
	Publisher_UI = function(t) {
		return {
			is_blocked: function(e) {
				return !!e.data("publisher-el-blocked")
			},
			block: function(e) {
				this.is_blocked(e) || (e.data("publisher-el-blocked", !0), e.prepend('<div class="publisher-block-overlay" style="z-index:10;display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0;display:none;position: absolute;background:rgba(255,255,255,0.4)"></div>'), t(".publisher-block-overlay").fadeIn())
			},
			unblock: function(e) {
				this.is_blocked(e) && (e.data("publisher-el-blocked", !1), t(".publisher-block-overlay").fadeOut(function() {
					t(this).remove()
				}))
			}
		}
	}(jQuery),
	Publisher_Theme = function(p) {
		"use strict";
		var l = !1;
		return {
			init: function() {
				this.initWhiteSpaceBlock(), p(window).on("resize", this.initWhiteSpaceBlock), this.prettyPhotoSettings = {
					social_tools: !1,
					show_title: !1,
					deeplinking: !1,
					markup: '<div class="pp_pic_holder"> <div class="ppt"></div> <div class="pp_content_container"> <div class="pp_content"> <div class="pp_loaderIcon"></div> <div class="pp_fade"> <a href="#" class="pp_expand" title="' + publisher_theme_global_loc.translations.lightbox_expand + '"></a> <a class="pp_close" href="#" title="' + publisher_theme_global_loc.translations.lightbox_close + '"></a> <div class="pp_hoverContainer"> <a class="pp_next" href="#"><i class="fa fa-chevron-right"></i></a> <a class="pp_previous" href="#"><i class="fa fa-chevron-left"></i></a> </div> <div id="pp_full_res"></div> <div class="pp_details"> <div class="pp_nav"> <a href="#" class="pp_arrow_previous"><i class="fa fa-backward"></i></a> <p class="currentTextHolder">0/0</p> <a href="#" class="pp_arrow_next"><i class="fa fa-forward"></i></a> </div> <p class="pp_description"></p> </div> </div> </div> </div> </div> <div class="pp_overlay"></div>',
					gallery_markup: '<div class="pp_gallery"> <a href="#" class="pp_arrow_previous"><i class="fa fa-chevron-left"></i></a> <div> <ul> {gallery} </ul> </div> <a href="#" class="pp_arrow_next"><i class="fa fa-chevron-right"></i></a> </div>'
				}, this.setup_responsive_header(), this.back_to_top(), this.handleAjaxifiedComments(), this.setup_post(), this.setup_menu(), this.setup_css_vars(), this.setup_sticky(), this.small_style_fixes();
				var e = p(document.body).attr("class").toString().match(/\bpostid\-(\d+)\b/i);
				e && this.handleInfinitySinglePostLoading(e[1]), this.woo_commerce(), this.visual_composer(), this.init_off_canvas_menu(), this.init_more_stories(), this.init_continue_reading(), this.init_push_notification(), this.print_style_fix(), this.init_gdpr()
			},
			initWhiteSpaceBlock: function() {
				var e, t, a = document.getElementsByClassName("bs-white-space");
				e = 992 <= window.innerWidth ? "desktop" : 768 <= window.innerWidth ? "tablet" : "mobile";
				for (var s = 0; s < a.length; s++)(t = a[s].getAttribute("data-" + e + "-ws")) && (a[s].style.height = t + "px")
			},
			fix_element_query: function() {
				"function" == typeof elementQuery && elementQuery({
					".listing-attachment-sibling": {
						"max-width": ["450px", "560px", "900px"]
					},
					".bs-shortcode-row": {
						"max-width": ["450px", "600px", "700px"]
					}
				})
			},
			is_rtl: function() {
				return p("body").hasClass("rtl")
			},
			setup_responsive_header: function() {
				if (p(".rh-header .menu-container .menu-handler").click(function(e) {
						e.preventDefault(), p("body").toggleClass("open-rh").toggleClass("close-rh"), setTimeout(function() {
							p(".rh-cover").removeClass("noscroll"), p("body").addClass("noscroll")
						}, 640)
					}), p(".rh-cover > .rh-close").click(function(e) {
						e.preventDefault(), p("body").toggleClass("open-rh").toggleClass("close-rh"), p(".rh-cover").addClass("noscroll"), p("body").removeClass("noscroll")
					}), p(".rh-cover .rh-c-m").is(":empty") && p(".rh-cover .rh-c-m").html(p(".main-menu.menu").clone().removeClass("main-menu").addClass("resp-menu").prop("id", "resp-navigation")), !p(".rh-cover").hasClass("no-top-nav") && 0 < p(".topbar ul.top-menu").length) {
					var e = p(".topbar ul.top-menu").clone();
					e.find("li#topbar-date").remove(), e.removeAttr("id").removeClass("top-menu"), p(".rh-cover .rh-c-m").append(e.addClass("resp-menu"))
				}
				if (!p(".rh-cover").hasClass("no-social-icon") && 0 < p(".topbar .better-social-counter").length && 0 == p(".rh-cover .rh-pm .better-social-counter").length) {
					var t = p(".topbar .better-social-counter").clone();
					p(".rh-cover .rh-pm .rh-p-b").append(t)
				}
				p(".rh-cover .rh-c-m .mega-menu.mega-grid-posts").remove(), p(".rh-cover .resp-menu li > a").each(function() {
					var e = p(this).parent();
					if (e.hasClass("menu-item-mega-tabbed-grid-posts")) {
						e.find(".tab-content").remove();
						var t = e.find(".tabs-section").removeClass("tabs-section").addClass("sub-menu");
						e.find(".mega-menu.tabbed-grid-posts").remove(), t.find("li a").removeAttr("data-target").removeAttr("data-deferred-init").removeAttr("data-toggle").removeAttr("data-deferred-event").removeAttr("class"), t.find(".fa").remove(), t.find("li:first-child").remove(), e.append(t)
					}
					if (e.hasClass("menu-item-mega-link-2-column") || e.hasClass("menu-item-mega-link-3-column") || e.hasClass("menu-item-mega-link-4-column") || e.hasClass("menu-item-mega-link-5-column") || e.hasClass("menu-item-mega-link-list")) {
						var a = e.find(".mega-links").removeAttr("class").addClass("sub-menu");
						e.find(".mega-menu").replaceWith(a), e = p(this).parent()
					}!e.hasClass("menu-item-mega-grid-posts") && 0 < e.children("ul,.mega-menu").length && e.append('<span class="children-button"></span>')
				}), p(".rh-cover .resp-menu .children-button").click(function(e) {
					e.preventDefault(), p(this).closest("li").toggleClass("open-sub"), p(this).siblings("ul").slideToggle()
				}), p(".rh-cover .rh-p-h .user-login").click(function(e) {
					e.preventDefault(), p(".rh-cover .rh-panel.rh-pm").fadeOut(400), setTimeout(function() {
						p(".rh-cover .rh-panel.rh-p-u").fadeIn(400)
					}, 400)
				}), p(".rh-cover .rh-p-h .rh-back-menu").click(function(e) {
					e.preventDefault();
					var t = p(this);
					t.addClass("abtn"), p(".rh-cover .rh-panel.rh-p-u").fadeOut(400), setTimeout(function() {
						p(".rh-cover .rh-panel.rh-pm").fadeIn(400), t.removeClass("abtn")
					}, 400)
				}), p(".rh-container").bsPinning(), p(".better-newsticker").betterNewsticker({
					control_nav: !0
				})
			},
			refreshLazyImages: function() {
				Publisher_Theme.betterLazyLoad && Publisher_Theme.betterLazyLoad.isActive() ? Publisher_Theme.betterLazyLoad.refresh() : "object" == typeof Publisher_Theme.bsLazy && Publisher_Theme.bsLazy.revalidate()
			},
			get_header_sticky_classes: function() {
				return " .site-header .main-menu-wrapper, .site-header.header-style-5.full-width > .content-wrap, .site-header.header-style-5.boxed > .content-wrap > .container, .site-header.header-style-6.full-width > .content-wrap, .site-header.header-style-6.boxed > .content-wrap > .container, .site-header.header-style-8.full-width > .content-wrap, .site-header.header-style-8.boxed > .content-wrap > .container"
			},
			updateHcStickySettings: function(e, t) {
				if (e.length) {
					var a = e.data("hcSticky");
					a && a.options && (a.options = p.extend(a.options, t), e.data("hcSticky", a))
				}
			},
			setup_menu: function() {
				var a = this;
				p("ul.menu.bsm-pure").addClass("bsm-initialized").removeClass("bsm-pure"), p(".menu.bsm-initialized li.menu-item-has-children").each(function() {
					var e = p(this);
					e.is(":hover") ? e.addClass("bsm-enter") : e.addClass("bsm-leave")
				}), p(document).on("mouseenter", "li.menu-item-has-children", function(e) {
					var t = p(this);
					t.siblings("li").stop().clearQueue().removeClass("bsm-enter").addClass("bsm-leave"), t.stop().clearQueue().removeClass("bsm-leave").addClass("bsm-enter"), a.refreshLazyImages()
				}).on("mouseleave", "li.menu-item-has-children", function() {
					p(this).stop().delay(450).queue(function(e) {
						p(this).removeClass("bsm-enter"), e()
					}).delay(200).queue(function(e) {
						p(this).addClass("bsm-leave"), e()
					})
				}).on("afterChange", ".bs-slider-items-container", function() {
					a.refreshLazyImages()
				});
				var e = Publisher_Theme.get_header_sticky_classes(),
					t = p(".site-header").attr("class");
				if (t) {
					if (t = t.match(/header-style-[\w-]*\b/), publisher_theme_global_loc.skyscraper.sticky) {
						var s = p("#wpadminbar"),
							n = 0 < s.length ? s.outerHeight() : 0;
						publisher_theme_global_loc.skyscraper.sticky && "after-header" === publisher_theme_global_loc.skyscraper.position && "boxed" !== publisher_theme_global_loc.page.boxed && "boxed" !== publisher_theme_global_loc.header.boxed && (p(e).outerHeight(), publisher_theme_global_loc.skyscraper.sticky_gap)
					}
					var i = {
						smart: !0,
						wrapper_class: "bspw-" + t[0],
						onUnpin: function() {
							var e = "boxed" === publisher_theme_global_loc.header.boxed ? "boxed" : "full";
							document.body.classList.remove(e + "-menu-pined"), document.body.classList.remove("menu-pined")
						},
						onPin: function() {
							var e = "boxed" === publisher_theme_global_loc.header.boxed ? "boxed" : "full";
							document.body.classList.add(e + "-menu-pined"), document.body.classList.add("menu-pined")
						}
					};
					i.offset = jQuery("#wpadminbar").height() || 0, p("body").hasClass("main-menu-sticky-smart") ? p(e).bsPinning(i) : p("body").hasClass("main-menu-sticky") && (i.smart = !1, i.wrapper_class = "bspw-header bspw-" + t[0], p(e).bsPinning(i))
				}
				var o = [
						["#top-navigation", 270],
						["#main-navigation", 210]
					],
					d = "ul.sub-menu",
					h = p(document.body).hasClass("rtl");

				function r(e, t, a, s) {
					var n, i, o = window.innerWidth - Math.ceil((a || e).offset().left);
					if (n = o > window.innerWidth / 2, i = h, n && !i || !n && i) return 1;
					var r = Math.floor(o / t);
					s && (r -= s);
					for (var l = [], c = 0; c <= r; c++) l.push(d);
					return 0 === p(l.join(" "), e).length
				}

				function l() {
					o.forEach(function(e) {
						var t = p(e[0]),
							a = e[1];
						t.children("li.menu-item").each(function() {
							var e = p(this);
							e[r(e, a) ? "removeClass" : "addClass"]("bs-flip-children")
						});
						var s = p("li.bs-pretty-tabs-container", t);
						if (s.length) {
							for (var n = p(".bs-pretty-tabs-elements>li.menu-item", s), i = !1, o = 0; o < n.length; o++) {
								if (!r(p(n[o]), a, s, 1)) {
									i = !0;
									break
								}
							}
							s[i ? "addClass" : "removeClass"]("bs-flip-children")
						}
					})
				}
				jQuery(window).resize(l), setTimeout(l)
			},
			setup_css_vars: function() {
				var e;
				(e = document.getElementById("wpadminbar")) && document.documentElement.style.setProperty("--wp-adminbar-height", e.offsetHeight + "px"), (e = document.getElementById("menu-main")) && document.documentElement.style.setProperty("--publisher-menu-height", e.offsetHeight + "px")
			},
			setup_sticky: function() {
				setTimeout(function() {
					"after-header" === publisher_theme_global_loc.skyscraper.position && p(".bs-sks .bs-sksin2").css("margin-top", p("#header").height())
				})
			},
			init_sticky_columns: function() {
				if (p.fn.hcSticky && !(window.innerWidth <= 780)) {
					var e = {
							stickyClass: "sticked-sidebar",
							top: null != document.getElementById("wpadminbar") ? document.getElementById("wpadminbar").offsetHeight : 0
						},
						t = p("body");
					$bs_sticky_sidebars = p([]), (t.hasClass("main-menu-sticky-smart") || t.hasClass("main-menu-sticky")) && (e.top += p(Publisher_Theme.get_header_sticky_classes()).first().height()), t.hasClass("active-sticky-sidebar") && ($bs_sticky_sidebars = ($bs_sticky_sidebars = $bs_sticky_sidebars.add(p(".wpb_widgetised_column").closest(".wpb_column").not(".sticky-column"))).add(p(".sidebar-column"))), ($bs_sticky_sidebars = $bs_sticky_sidebars.add(p(".wpb_column.sticky-column"))).hcSticky(e), 1 == publisher_theme_global_loc.refresh_googletagads && "object" == typeof googletag && "function" == typeof googletag.pubads && "function" == typeof googletag.pubads().refresh && googletag.pubads().refresh()
				}
			},
			setup_sliders: function() {
				p.fn.flexslider && (p(".gallery-slider .better-slider").flexslider({
					namespace: "better-",
					animation: "fade",
					controlNav: !1,
					smoothHeight: !0,
					animationSpeed: "200"
				}).find(".better-control-nav").addClass("square"), p(".bs-shortcode.bs-slider > .better-slider, .bs-shortcode.bs-instagram > .better-slider, .bs-shortcode.bs-dribbble > .better-slider, .bs-shortcode.bs-flickr > .better-slider").each(function() {
					var e = p(this);
					e.flexslider({
						namespace: "better-",
						animation: e.data("animation"),
						slideshowSpeed: e.data("slideshowspeed"),
						animationSpeed: e.data("animationspeed"),
						controlNav: void 0 === e.data("controlnav") || e.data("controlnav"),
						animationLoop: !0,
						directionNav: !0,
						pauseOnHover: !0,
						start: function(e) {
							jQuery(e).find(".better-active-slide").addClass("slider-content-shown")
						},
						before: function(e) {
							jQuery(e).find(".slider-content-shown").removeClass("slider-content-shown")
						},
						after: function(e) {
							jQuery(e).find(".better-active-slide").addClass("slider-content-shown")
						}
					}).find(".better-control-nav").addClass("circle")
				}))
			},
			setup_video_players: function() {
				p(".single-featured, .the-content, .sidebar, .post, .bs-embed, .entry-content").fitVids({
					ignore: ".bsp-player > iframe"
				})
			},
			small_style_fixes: function() {
				p(".site-header .search-container .search-handler").click(function() {
					p(this).closest(".main-menu-container").toggleClass("search-open").toggleClass("search-close");
					var e = p(this).closest(".search-container");
					e.toggleClass("open").toggleClass("close"), e.hasClass("open") ? (p(this).find(".fa").removeClass("fa-search").addClass("fa-close"), e.find(".search-field").focus()) : (p(this).find(".fa").addClass("fa-search").removeClass("fa-close"), e.find(".search-field").focusout())
				}), p(document).on("keyup", function(e) {
					if (27 == e.keyCode && 0 < p(".search-container.open").length) {
						var t = p(".site-header .search-container"),
							a = t.find(".search-handler");
						t.removeClass("open").addClass("close"), p(".main-menu-container.search-open").removeClass("search-open").addClass("search-close"), t.hasClass("open") ? (a.find(".fa").removeClass("fa-search").addClass("fa-close"), t.find(".search-field").focus()) : (a.find(".fa").addClass("fa-search").removeClass("fa-close"), t.find(".search-field").focusout())
					}
				}), p(".site-header .shop-cart-container").hover(function(e) {
					e.preventDefault(), p(this).closest(".main-menu-container").toggleClass("cart-open").toggleClass("cart-close"), p(this).toggleClass("open").toggleClass("close")
				}), p(".widget.widget_calendar table td a").each(function() {
					p(this).parent().addClass("active-day")
				}), p.browser.msie && 10 == p.browser.version && p("html").addClass("ie ie10"), p('.section-heading.multi-tab a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
					if (p(this).hasClass("active")) e.preventDefault();
					else {
						if (void 0 === p(e.target).parent().attr("class")) return !0;
						var a = p(e.target).closest(".section-heading");
						if (!p(this).hasClass("ncpt")) {
							var t = p(e.target).find(".h-text").attr("class").split(" "),
								s = "";
							jQuery.each(t, function(e, t) {
								if (t.match(/main-term-/)) return s = t, !1
							}), jQuery.each(a.attr("class").split(" "), function(e, t) {
								t.startsWith("main-term") && a.removeClass(t)
							}), a.addClass(s)
						}
						a.find("a.active").removeClass("active"), p(this).addClass("active")
					}
				}), p(".bs-accordion-shortcode .panel-heading a").on("click", function(e) {
					p(this).closest(".panel-heading").hasClass("active") || p(this).closest(".panel").addClass("open")
				}), p(".panel-collapse").on("hide.bs.collapse", function(e) {
					p(e.target).closest(".panel").removeClass("open")
				}), p('.bs-listing a[data-toggle="tab"]').on("show.bs.tab", function(e) {
					var t = p(p(this).attr("href"));
					t.hasClass("active") || (p(this).closest(".bs-listing").find(".tab-pane").removeClass("bs-tab-animated"), t.addClass("bs-tab-animated"))
				}), p(".tabbed-grid-posts .tabs-section > li > a").click(function() {
					"#" != p(this).attr("href") && (window.location = p(this).attr("href"))
				}).hover(function() {
					p(this).tab("show")
				}), p('.tabbed-grid-posts .tabs-section > li > a[data-toggle="tab"]').on("show.bs.tab", function(e) {
					var t = p(p(this).data("target"));
					t.hasClass("active") || (p(this).closest(".tabbed-grid-posts").find(".tab-pane").removeClass("bs-tab-animated"), t.addClass("bs-tab-animated"))
				}), p(".move-to-content .fa").click(function() {
					p("body,html").animate({
						scrollTop: p(".content-column").offset().top - 25
					}, 700)
				}), p(".post-tp-4-header,.post-tp-5-header").each(function() {
					var a = p(this),
						s = p(this).find(".post-header-title");
					jQuery(window).scroll(function() {
						var e = jQuery(window).scrollTop(),
							t = a.height();
						e < a.offset().top || e > a.offset().bottom ? s.css({
							"-webkit-transform": "translate3d(0px, 0px, 0px)"
						}).css({
							transform: "translate3d(0px, 0px, 0px)"
						}).css({
							opacity: "1"
						}) : s.css({
							"-webkit-transform": "translate3d(0px, " + Math.ceil((e - a.offset().top) / 5.3) + "px, 0px)"
						}).css({
							transform: "translate3d(0px, " + Math.ceil((e - a.offset().top) / 5.3) + "px, 0px)"
						}).css({
							opacity: (e - t) / 333.333 * -1
						})
					})
				}), p(".footer-instagram-3 .bs-instagram-photos").simplyScroll({
					frameRate: 70
				}), p(".remember-label").on("click", function() {
					p(this).siblings("input[type=checkbox]").click()
				}), p(".bs-login").css({
					display: "block",
					visibility: "visible"
				}), p(".bs-login .go-login-panel, .bs-login .go-reset-panel").click(function(e) {
					e.preventDefault();
					var t = p(this).closest(".bs-login"),
						a = p(this).closest(".bs-login-panel"),
						s = a.siblings(".bs-login-panel");
					t.hasClass("inmove") || t.addClass("inmove").height(t.find(".bs-login-panel:first-child").outerHeight()), a.removeClass("bs-current-login-panel"), s.addClass("bs-current-login-panel")
				}), p(".single-post-share .post-share-btn-comments").click(function() {
					var e;
					e = 0 < p("form.comment-form").length ? p("form.comment-form") : p("#respond"), p("body,html").animate({
						scrollTop: e.offset().top - 100
					}, 1e3)
				}), p("#bsLoginModal").on("shown.bs.modal", function() {
					p("#bsLoginModal #user_login").focus()
				})
			},
			betterstudio_editor_shortcodes: function() {
				p(".bs-accordion-shortcode").on("show.bs.collapse", function(e) {
					p(e.target).prev(".panel-heading").addClass("active")
				}).on("hide.bs.collapse", function(e) {
					p(e.target).prev(".panel-heading").removeClass("active")
				})
			},
			back_to_top: function() {
				var e = p(".back-top");
				0 != e.length && (e.click(function() {
					p("body,html").animate({
						scrollTop: 0
					}, 700)
				}), p(window).scroll(function() {
					switch (300 < p(this).scrollTop() ? e.addClass("is-visible") : e.removeClass("is-visible fade-out1 fade-out2 fade-out3 fade-out4"), !0) {
						case 2400 < p(this).scrollTop():
							e.addClass("fade-out4");
							break;
						case 1700 < p(this).scrollTop():
							e.removeClass("fade-out3").addClass("fade-out3");
							break;
						case 1e3 < p(this).scrollTop():
							e.removeClass("fade-out4 fade-out3").addClass("fade-out2");
							break;
						case 500 < p(this).scrollTop():
							e.removeClass("fade-out4 fade-out3 fade-out2").addClass("fade-out1")
					}
				}))
			},
			popup: function() {
				if (p("body").hasClass("active-light-box") && p.fn.prettyPhoto && !(p(window).width() < 700)) {
					var e = publisher_theme_global_loc.lightbox.not_classes.split(" "),
						t = function() {
							var a = p(this);
							if (!a.attr("href")) return !1;
							if (void 0 !== a.data("not-rel")) return !1;
							var s = !1;
							return 0 < e.length && e.forEach(function(e, t) {
								"" != e && a.hasClass(e) && (s = !0)
							}), !s && a.attr("href").match(/\.(jp?g|png|bmp|jpeg|gif)((\?.+$)|$)/)
						};
					p(".entry-content a,.single-featured a.open-lightbox").has("img").filter(t).attr("rel", "prettyPhoto");
					var a = 1;
					p(".entry-content .gallery,.entry-content .tiled-gallery").each(function() {
						p(this).find("a").has("img").filter(t).attr("rel", "prettyPhoto[gallery_" + a + "]"), a++
					}), p("a[rel^='prettyPhoto']").prettyPhoto(Publisher_Theme.prettyPhotoSettings)
				}
			},
			gallery: function() {
				if (p.fn.fotorama) {
					jQuery(".fotorama").fotorama({
						width: "100%",
						loop: !0,
						margin: 10,
						thumbwidth: 85,
						thumbheight: 62,
						thumbmargin: 9,
						transitionduration: 800,
						arrows: !1,
						click: !1,
						swipe: !0
					}).on("fotorama:show", function(e, t, a) {
						var s = p(this).closest(".better-gallery"),
							n = new Intl.NumberFormat(publisher_theme_global_loc.get_locale).format(t.activeFrame.i);
						s.find(".count .current").html(n)
					});
					(p("body").hasClass("active-light-box") && p.fn.prettyPhoto || p(window).width() < 700) && jQuery(".better-gallery").on("click", ".slide-link", function() {
						event.preventDefault();
						var e = p(this).closest(".better-gallery").data("gallery-id"),
							t = Publisher_Theme.prettyPhotoSettings;
						return t.changepicturecallback = function() {
							p("#gallery-" + e).find(".fotorama").data("fotorama").show(p(".pp_gallery").find("li").index(p(".selected")))
						}, p.fn.prettyPhoto(t), p.prettyPhoto.open(window["prt_gal_img_" + e], window["prt_gal_cap_" + e], window["prt_gal_cap_" + e]), p.prettyPhoto.changePage(p("#gallery-" + e).find(".fotorama").data("fotorama").activeFrame.i - 1), !1
					}), jQuery(".better-gallery .gallery-title .next").click(function() {
						p(this).closest(".better-gallery").find(".fotorama").data("fotorama").show(">")
					}), jQuery(".better-gallery .gallery-title .prev").click(function() {
						p(this).closest(".better-gallery").find(".fotorama").data("fotorama").show("<")
					})
				}
			},
			bsPrettyTabs: function() {
				if (publisher_theme_global_loc.share.more) {
					var t = ".share-handler-wrap";
					p(t).on("click", ".bs-pretty-tabs-more", function() {
						var e = p(this).next(".bs-pretty-tabs-elements");
						e.closest(t).bsPrettyTabs("stop"), e.closest(".bs-pretty-tabs-container").replaceWith(e.html())
					}).on("after-pretty-tabs", function(e, t) {
						var a = t.$element.children(".social-item");
						a.removeClass("first last"), a.filter(":first").addClass("first"), a.filter(":last").addClass("last")
					}).bsPrettyTabs({
						menuContainerPosition: "end",
						menuContainerTag: "span",
						getContainerWidth: function(e) {
							return 540 < window.innerWidth && (e -= Math.floor(.1 * e)), e
						},
						moreContainer: '<a class="bs-pretty-tabs-more post-share-btn"><i class="bf-icon fa fa-plus"></i></a><ul class="bs-pretty-tabs-elements"></ul>'
					})
				}
				if ("enable" === publisher_theme_global_loc.main_menu.more_menu) {
					var a = p("#header").hasClass("header-style-6"),
						e = '<a href="#" class="bs-pretty-tabs-more">';
					a && (e += '<i class="bf-icon fa fa-bars" aria-hidden="true"></i>'), e += publisher_theme_global_loc.translations.tabs_more + '</a><ul class="sub-menu bs-pretty-tabs-elements"></ul>', p("#main-navigation").parent().bsPrettyTabs({
						menuContainerPosition: "end",
						menuContainerTag: "li",
						itemsWrapperSelector: "#main-navigation",
						moreContainer: e,
						initWrapperContainer: function(e) {
							return e.addClass("menu-item-has-children menu-item better-anim-fade"), a && e.addClass("menu-have-icon menu-icon-type-fontawesome"), e
						},
						styleChangesAt: [992, 780]
					})
				}
				"enable" === publisher_theme_global_loc.top_menu.more_menu && p("#top-navigation").bsPrettyTabs({
					menuContainerPosition: "end",
					menuContainerTag: "li",
					moreContainer: '<a href="#" class="bs-pretty-tabs-more">' + publisher_theme_global_loc.translations.tabs_more + ' <i class="fa fa-angle-down" aria-hidden="true"></i></a><ul class="bs-pretty-tabs-elements sub-menu"></ul>',
					getContainerWidth: function(e) {
						return .9 * e
					}
				}), p(".section-heading.multi-tab").bsPrettyTabs({
					moreContainer: '<a href="#" class="bs-pretty-tabs-more other-link"><span class="h-text">' + publisher_theme_global_loc.translations.tabs_all + ' <i class="fa fa-angle-down" aria-hidden="true"></i></span></a><div class="bs-pretty-tabs-elements"></div>',
					mustDisplayClass: "main-link",
					getContainerWidth: function(e) {
						return .8 * e
					}
				}), p(".topbar").addClass("use-pretty-tabs")
			},
			bsPagination: function(e) {
				if (p.fn.Better_Ajax_Pagination) {
					p(".bs-ajax-pagination", e).parent().Better_Ajax_Pagination({
						after_response: function() {}
					})
				}
			},
			isRetinaDisplay: function() {
				if (window.matchMedia) {
					var e = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
					return e && e.matches || 1 < window.devicePixelRatio
				}
			},
			parseBsSrcset: function(e, t, a) {
				var s = e.getAttribute(t);
				if (!s) return a;
				if (!(s = JSON.parse(s)) || !s.sizes) return a;
				var n, i, o = void 0 !== s.webp_sizes && l ? s.webp_sizes : s.sizes,
					r = void 0 !== s.webp_baseurl && l ? s.webp_baseurl : s.baseurl;
				for (i in n = e.hasAttribute("width") ? parseInt(e.getAttribute("width")) : e.offsetWidth, this.isRetinaDisplay() && (n *= 2), o)
					if (parseInt(i) >= n) return r + o[i];
				return parseInt(i) < n ? r + o[i] : a
			},
			betterLazyLoad: {
				observer: null,
				options: {},
				init: function(e) {
					var a = this;
					a.options = p.extend(!0, {
						rootMargin: "0px",
						threshold: 0,
						src: "data-src",
						srcset: "data-bs-srcset",
						errorClass: "b-error",
						successClass: "b-loaded",
						readyClass: "b-load-ready",
						itemLoaded: p.noop
					}, e);
					var t = {
						root: null,
						rootMargin: a.options.rootMargin,
						threshold: a.options.threshold
					};
					return a.observer = new IntersectionObserver(function(e, t) {
						e.forEach(function(e) {
							e.target.classList.contains(a.options.successClass) || e.intersectionRatio > t.thresholds[0] && a.loadElement(e.target)
						})
					}, t), document.querySelectorAll(a.options.selector).forEach(function(e) {
						a.observer.observe(e)
					}), this
				},
				checkWebPFeature: function(t, a) {
					var s = new Image;
					s.onload = function() {
						var e = 0 < s.width && 0 < s.height;
						a(t, e)
					}, s.onerror = function() {
						a(t, !1)
					}, s.src = "data:image/webp;base64," + {
						lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
						lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
						alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
						animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
					} [t]
				},
				refresh: function() {
					return this.init(this.options)
				},
				isActive: function() {
					return "function" == typeof IntersectionObserver && "function" == typeof Promise
				},
				loadElement: function(a) {
					var e = this.getSrc(a),
						s = this;
					return !!e && (s.loadUrl(a).then(function(e) {
						var t = a.tagName.toLowerCase();
						s.elementLoadedCompletely(a), -1 < ["img", "iframe"].indexOf(t) ? a.src = e : a.style.backgroundImage = 'url("' + e + '")', a.removeAttribute(s.options.src), s.options.itemLoaded.call(s, a, e)
					}).catch(function(e) {
						s.ElementLoadFailed(a)
					}), !0)
				},
				loadUrl: function(n) {
					var i = this;
					return new Promise(function(e, t) {
						var a = i.getSrc(n);
						if ("iframe" !== n.tagName.toLowerCase()) {
							var s = new Image;
							s.onload = function() {
								e(a)
							}, s.onerror = function() {
								t(a)
							}, s.src = a
						} else e(a)
					})
				},
				getSrc: function(e) {
					return Publisher_Theme.parseBsSrcset(e, this.options.srcset, e.getAttribute(this.options.src))
				},
				ElementLoadFailed: function(e) {
					this.observer.unobserve && this.observer.unobserve(e), e.classList.add(this.options.errorClass)
				},
				elementLoadedCompletely: function(e) {
					var t = this;
					t.observer.unobserve && this.observer.unobserve(e), e.classList.add(t.options.readyClass), setTimeout(function() {
						e.classList.remove(t.options.readyClass), e.classList.add(t.options.successClass)
					}, 100)
				}
			},
			initLazyLoad: function() {
				var a = {
						selector: ".img-holder,.img-cont,.bs-lazy,img[data-src],iframe[data-src]",
						srcset: "data-bs-srcset",
						itemLoaded: function(e, t) {
							"iframe" === e.tagName.toLowerCase() && p.fn.fitVids && p(e.parentNode).fitVids()
						}
					},
					s = this;
				Publisher_Theme.betterLazyLoad.checkWebPFeature("lossy", function(e, t) {
					l = t, s.betterLazyLoad.isActive() ? s.betterLazyLoad.init(a) : "function" == typeof Blazy && s.BLazyLoad(a)
				}), s.likeBoxLazyLoad()
			},
			BLazyLoad: function(e) {
				"function" == typeof Blazy && (Publisher_Theme.bsLazy = new Blazy({
					selector: e.selector,
					srcset: e.srcset,
					loadInvisible: function(e, t) {
						if (!t)
							for (; e = e.parentElement;)
								if (e.className.match(/\bmega-menu\b/i)) return !1;
						return !0
					},
					successClass: " ",
					success: function(e) {
						e.className = e.className + " b-load-ready", setTimeout(function() {
							e.className = e.className.replace("b-load-ready", "") + " b-loaded"
						}, 100)
					},
					itemLoaded: function() {
						p.fn.fitVids && p(this.parentNode).fitVids()
					}
				}))
			},
			likeBoxLazyLoad: function() {
				function t(e) {
					var t, a, s, n;
					e = e || "en_US", t = document, a = "facebook-jssdk", n = t.getElementsByTagName("script")[0], t.getElementById(a) || ((s = t.createElement("script")).id = a, s.src = "//connect.facebook.net/" + e + "/sdk.js#xfbml=1&version=v2.4", n.parentNode.insertBefore(s, n))
				}

				function a(e) {
					"" !== e && (window.___gcfg = {
							lang: e
						}),
						function() {
							var e = document.createElement("script");
							e.type = "text/javascript", e.async = !0, e.src = "https://apis.google.com/js/plusone.js";
							var t = document.getElementsByTagName("script")[0];
							t.parentNode.insertBefore(e, t)
						}()
				}
				var e = p("#fb-root").length,
					s = p(".google-plus-block");
				if ("function" == typeof OnScreen) {
					var n = new OnScreen({
						tolerance: -100,
						container: window
					});
					e && n.on("enter", ".fb-page", function(e) {
						t(e.getAttribute("data-locale")), n.off("enter", ".fb-page")
					}), s.length && n.on("enter", ".google-plus-block", function(e) {
						a(e.getAttribute("data-locale")), n.off("enter", ".google-plus-block")
					})
				} else e && t(p(".fb-page").data("locale")), s.length && a(s.data("locale"))
			},
			initDeferredElements: function() {
				if (p.fn.Better_Deferred_Loading) {
					var t = this;
					p.fn.Better_Deferred_Loading({
						afterSuccessDeferredAjax: function(e) {
							t.bsPagination(e), t.refreshLazyImages()
						}
					})
				}
			},
			handleAjaxifiedComments: function() {
				p(document).on("click", ".comment-ajaxified-placeholder", function(e) {
					e.preventDefault();
					var t = p(this),
						s = t.closest(".comments-template"),
						n = (t.closest(".ajaxified-respond"), t.closest("#ajaxified-comments"), t.closest(".ajaxified-comments-container"));
					t.hide();
					var i = p("<div></div>", {
						class: "deferred-loading-container",
						height: 40
					});
					i.append('<div class="bs-pagin-loading-wrapper">' + publisher_theme_global_loc.loading + "</div>"), i.appendTo(s), p(document).trigger("ajaxified-comments-before-load", [s, t]), p.ajax({
						url: publisher_theme_global_loc.ajax_url,
						type: "post",
						dataType: "json",
						data: p.extend(t.data(), {
							action: "ajaxified-comments"
						})
					}).done(function(e) {
						i.remove(), n.hide();
						var t = n[0].outerHTML,
							a = s.parent();
						s.replaceWith(e.rawHTML + t), p(".deferred-loading-container", s).remove(), p(document).trigger("ajaxified-comments-loaded", [s, e]), p.fn.Better_Deferred_Loading && p.fn.Better_Deferred_Loading({
							context: a.find(".bs-comments-wrapper")
						})
					})
				})
			},
			handleInfinitySinglePostLoading: function(s) {
				var o = {
					config: {},
					util: {
						pathname: function(e) {
							return p("<a></a>", {
								href: e
							})[0].pathname
						}
					},
					GA: {
						available: function() {
							return "function" == typeof ga
						},
						send: function() {
							return ga("send", "pageview", o.util.pathname(o.config.permalink)), !0
						}
					},
					gTag: {
						available: function() {
							return "function" == typeof gtag && "object" == typeof dataLayer && dataLayer.forEach
						},
						send: function() {
							return gtag("config", this.gaID(), {
								page_title: o.config.title,
								page_path: o.util.pathname(o.config.permalink)
							}), !0
						},
						gaID: function() {
							return void 0 === o.config.gaID && (o.config.gaID = "", dataLayer.forEach(function(e) {
								"config" === e[0] && "UA-" === e[1].substr(0, 3) && (o.config.gaID = e[1])
							})), o.config.gaID
						}
					},
					send: function(e) {
						this.config = e;
						var t = !1;
						return this.gTag.available() && (t = this.gTag.send()), !t && this.GA.available() && (t = this.GA.send()), t
					}
				};
				if (p("body").hasClass("single") && p("body").hasClass("infinity-related-post") && "function" == typeof OnScreen) {
					var n, r, i = "infinity-single-post-loading",
						e = p(".content-column"),
						t = e.find(".single-post-content"),
						l = [parseInt(t.attr("id").replace(/[^0-9\.]/g, ""))],
						c = this,
						d = new OnScreen({
							tolerance: -1500,
							container: window
						}),
						h = new OnScreen({
							tolerance: 100,
							container: window
						});
					p(i).length || p("<div></div>", {
						id: i
					}).appendTo(e), u(), m({
						permalink: window.location.href,
						post_id: s,
						post_title: document.title
					})
				}

				function m(e) {
					var t = ".content-column .post.post-" + e.post_id,
						a = p(t);
					a.data("post-permalink", e.permalink), a.data("post-title", e.post_title), a.data("post-id", e.post_id), a.data("post-count-calc", e.counter), h.on("enter", t, function(e) {
						var t = p(e),
							a = t.data("post-id"),
							s = t.data("post-count-calc"),
							n = t.data("post-title"),
							i = t.data("post-permalink");
						if (r === a) return !1;
						i && history.pushState({}, void 0, i), n && (document.title = Publisher_Theme.decodeHtml(n)), s && (o.send({
							permalink: i,
							title: n
						}), t.data("post-count-calc", !1)), r = a
					})
				}

				function a(e) {
					d.off("enter", "#" + i);
					var t = p(e),
						a = p("<div></div>", {
							class: "deferred-loading-container",
							height: 200
						});
					a.append('<div class="bs-pagin-loading-wrapper">' + publisher_theme_global_loc.loading + "</div>"), a.appendTo(t), n && n.abort(), n = p.ajax({
						url: document.URL,
						type: "GET",
						dataType: "json",
						data: {
							action: "ajax-get-post",
							post_ID: s,
							loaded_posts: l
						}
					}).done(function(e) {
						p(".deferred-loading-container", t).remove(), e.rawHTML && t.before(e.rawHTML), e.loaded_posts && (l = l.concat(e.loaded_posts)), e.haveNext && u(), c.ajax_setup_post(), e.posts_info && e.posts_info.forEach(function(e) {
							m({
								permalink: e.link,
								post_id: e.id,
								counter: !0,
								post_title: e.title
							})
						})
					})
				}

				function u() {
					d.on("enter", "#" + i, a)
				}
			},
			setup_post: function() {
				this.initLazyLoad(), this.gallery(), this.setup_sliders(), this.setup_video_players(), this.init_sticky_columns(), this.betterstudio_editor_shortcodes(), this.popup(), this.fix_element_query(), this.bsPrettyTabs(), this.bsPagination(), this.initDeferredElements()
			},
			ajax_setup_post: function() {
				this.setup_post(), this.ajax_setup_post_compatibility()
			},
			ajax_setup_post_compatibility: function() {
				p.fn.glossaryTooltip && p(document).trigger("glossaryTooltipReady")
			},
			woo_commerce: function() {
				var e = !1;
				p(".woocommerce div.product .woocommerce-tabs ul.tabs li").bind("cssClassChanged", function() {
					1 != e && (e = !0, p(this).hasClass("active") && (p(this).closest("ul.tabs").find("a.active").removeClass("active"), p(this).find("a").addClass("active")), e = !1)
				}), p(window).on("added_to_cart", function(e, t, a) {
					void 0 !== t["total-items-in-cart"] && 1 <= p(".main-menu-container .shop-cart-container").length && (p(".main-menu-container .shop-cart-container .cart-handler .cart-count").length < 1 ? p(".main-menu-container .shop-cart-container .cart-handler").append('<span class="cart-count">' + t["total-items-in-cart"] + "</span>") : p(".main-menu-container .shop-cart-container .cart-handler .cart-count").html(t["total-items-in-cart"]))
				})
			},
			visual_composer: function() {
				this.is_rtl()
			},
			init_off_canvas_menu: function() {
				var t = this;

				function a(e) {
					var t = "close" === e;
					p(".off-canvas-overlay")[t ? "fadeOut" : "fadeIn"](600), p(document.body)[t ? "removeClass" : "addClass"]("off-canvas-menu-open"), t ? (p(".off-canvas-container").addClass("closing"), p(".site-header.header-style-6.full-width .bs-pinning-block.pinned").css("right", "0"), setTimeout(function() {
						p("body").css("padding-right", "inherit"), p(".off-canvas-container").removeClass("closing"), p(document.body).removeClass("off-canvas-scroll")
					}, 510)) : setTimeout(function() {
						var e = jQuery(document).innerWidth();
						p(document.body).addClass("off-canvas-scroll"), e = jQuery(document).width() - e, p("body").css("padding-right", e + "px"), p(".site-header.header-style-6.full-width .bs-pinning-block.pinned").css("right", e + "px")
					}, 610)
				}! function() {
					var e = p(".off-canvas-menu-fallback");
					if (0 !== e.length) {
						var t = p("#main-navigation").clone();
						t.removeAttr("id").removeAttr("class").addClass("menu clearfix bsm-initialized"), t.find(".mega-menu").each(function() {
							var e = p(this);
							if (e.hasClass("mega-type-link")) e.replaceWith(e.find(".content-wrap > ul.mega-links").removeAttr("class").addClass("sub-menu"));
							else if (e.hasClass("mega-type-link-list")) e.replaceWith(e.find("ul.mega-links").removeAttr("class").addClass("sub-menu"));
							else if (e.hasClass("tabbed-grid-posts")) {
								var t = e.find(".tabs-section");
								t.removeAttr("class").addClass("sub-menu").find("li:first-child").remove(), t.find("a").removeAttr("data-target").removeAttr("data-deferred-init").removeAttr("data-toggle").removeAttr("data-deferred-event"), t.find(".fa").remove(), e.replaceWith(t)
							} else e.closest("li").removeClass("menu-item-has-children"), e.remove()
						}), t.find("li.bs-pretty-tabs-container").remove(), e.replaceWith(t)
					}
				}(), p(".off-canvas-menu-icon, .off-canvas-inner .canvas-close").on("click", function() {
					if (p(document.body).hasClass("off-canvas-menu-open")) {
						if (a("close"), p(this).hasClass("canvas-close")) {
							var e = p(this).addClass("open");
							setTimeout(function() {
								e.removeClass("open")
							}, 800)
						}
					} else t.refreshLazyImages(), a("open")
				}), p(".off-canvas-container").on("click", function(e) {
					if (!p(e.target).hasClass("off-canvas-container")) return !0;
					a("close")
				})
			},
			init_more_stories: function() {
				if ("yes" !== docCookies.getItem("hide-more-stories")) {
					var o = p(".more-stories"),
						a = this;
					if (0 !== o.length) {
						var r = p(window),
							t = parseInt(o.data("scroll-top")) || 450;
						r.on("scroll.more-stories", function() {
							var e = r.scrollTop() > t;
							e !== o.hasClass("active") && l(e)
						}), o.on("click", ".more-stories-close", function() {
							r.off("scroll.more-stories"), l(!1);
							var e = o.data("close-settings").split(";"),
								t = e[0],
								a = e[1] || "/";
							if (t && "always" != t) {
								var s = 0,
									n = 0;
								if ("session" !== t) {
									var i = t.substr(-1).toUpperCase();
									switch (n = t.substr(0, t.length - 1), i) {
										case "H":
											s = 3600;
											break;
										case "D":
											s = 86400;
											break;
										case "W":
											s = 604800;
											break;
										case "M":
											s = 18144e3
									}
								}
								docCookies.setItem("hide-more-stories", "yes", n * s, a)
							}
							return !1
						})
					}
				}

				function l(e) {
					var t = {};
					t[o.hasClass("left") ? "left" : "right"] = e ? 0 : -1 * o.outerWidth(), o.show().animate(t, 400, function() {
						e && a.refreshLazyImages()
					}), o[e ? "addClass" : "removeClass"]("active")
				}
			},
			init_continue_reading: function() {
				p(".continue-reading-btn").on("click", function(e) {
					var t = p(".continue-reading-content"),
						a = p(".continue-reading-container"),
						s = 0;
					a.remove().fadeOut(), t.children().each(function() {
						s += p(this).outerHeight(!0)
					}), e.preventDefault(), t.css("max-height", s + "px").delay(750).queue(function(e) {
						t.removeClass("close"), t.css("max-height", "none"), e()
					})
				})
			},
			print_style_fix: function() {
				function t() {
					!p("body").hasClass("fixed-for-print") && p("body").hasClass("bs-ll-a") && (p("img").each(function() {
						void 0 === p(this).attr("src") && void 0 !== p(this).data("src") && p(this).attr("src", p(this).data("src"))
					}), p("body").addClass("fixed-for-print"))
				}
				if (p(".post-share").on("click", ".social-item.print", function(e) {
						t(), window.print(), e.preventDefault()
					}), p("body").hasClass("bs-ll-a")) {
					if (jQuery(document).bind("keydown", function(e) {
							80 == e.keyCode && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && t()
						}), window.matchMedia) window.matchMedia("print").addListener(function(e) {
						e.matches && t()
					});
					window.onbeforeprint = t
				}
			},
			init_gdpr: function() {
				p(".bs-gdpr-accept, .bs-gdpr-show").length <= 0 || ("hide" == docCookies.getItem("bs_law_confirmation") ? p(".bs-wrap-gdpr-law").addClass("bs-wrap-gdpr-law-close").removeClass("bs-wrap-gdpr-law-open") : p(".bs-wrap-gdpr-law").removeClass("bs-wrap-gdpr-law-close").addClass("bs-wrap-gdpr-law-open"), p(".bs-gdpr-accept, .bs-gdpr-show").on("click", function(e) {
					e.preventDefault();
					var t = p(this),
						a = publisher_theme_global_loc.ajax_url;
					t.closest(".bs-wrap-gdpr-law").toggleClass("bs-wrap-gdpr-law-close"), jQuery.ajax({
						type: "post",
						url: a,
						data: "action=bs_gdpr&data=" + t.data("cookie")
					}), p(".bs-gdpr-accept, .bs-gdpr-show").attr("data-cookie", "show" == t.data("cookie") ? "hide" : "show")
				}))
			},
			init_push_notification: function() {
				if ("undefined" != typeof OneSignal && "function" == typeof OneSignal.push) {
					var s = ".bs-push-noti";
					Publisher_UI.block(p(s));
					var t = function(t) {
						var a = publisher_theme_global_loc.notification || {};
						p(s).each(function() {
							var e = p(this);
							p(".bs-push-noti-message", e).html(t ? a.subscribed_msg : a.subscribe_msg), p(".bs-push-noti-button", e).html(t ? a.subscribed_btn : a.subscribe_btn), p(".bs-push-noti-message", e).addClass(t ? "subscribed" : "subscribe").removeClass(t ? "subscribe" : "subscribed"), Publisher_UI.unblock(e)
						})
					};
					OneSignal.push(function() {
						OneSignal.on("subscriptionChange", t)
					}), p(document).on("click", ".bs-push-noti-button", function() {
						var e = p(this).closest(s);
						return Publisher_UI.block(e), OneSignal.isPushNotificationsEnabled(function(e) {
							e ? OneSignal.push(["setSubscription", !1]) : OneSignal.push(function() {
								OneSignal.registerForPushNotifications()
							})
						}), !1
					}), p(document).ready(function() {
						setTimeout(function() {
							OneSignal.isPushNotificationsEnabled(function(e) {
								t(e)
							})
						}, 500)
					})
				}
			},
			decodeHtml: function(e) {
				var t = document.createElement("textarea");
				return t.innerHTML = e, t.value
			}
		}
	}(jQuery);
jQuery(document).ready(function() {
	function e() {
		var i, e = {
			wrapperSelector: ".main-menu-container .search-container",
			$wrapper: !1,
			_xhr: !1,
			prevSearchQuery: !1,
			_doingAjax: !1,
			localize: (i = jQuery).extend({
				ajax_url: !1,
				previewMarkup: !1
			}, "object" == typeof publisher_theme_ajax_search_loc ? publisher_theme_ajax_search_loc : {}),
			ajaxRequestDelay: 300,
			EL: {
				INPUT: "search-field",
				PREVIEW: "search-preview",
				LOADING: "ajax-search-loading"
			},
			init: function() {
				this.$wrapper = i(this.wrapperSelector), this.prepareMarkup(), this.bindEvents()
			},
			prepareMarkup: function() {
				var e = this.findElements(this.EL.PREVIEW);
				e.length || (e = i("<div/>", {
					class: this.EL.PREVIEW
				}).appendTo(this.$wrapper), this.localize.previewMarkup && e.html(this.localize.previewMarkup)), this.findElements(this.EL.LOADING).length || (this._createLoadingELement().appendTo(this.$wrapper.find(".search-handler")).hide(), this._addLoadingInPreview())
			},
			_createLoadingELement: function() {
				return i("<i/>", {
					class: "fa fa-refresh fa-spin fa-fw ajax-loading-icon"
				})
			},
			_addLoadingInPreview: function() {
				if (!this._doingAjax) {
					var e, t = i("<span/>", {
							class: this.EL.LOADING
						}),
						a = this.findSections(this.EL.PREVIEW);
					for (e in t.html('<i class="fa fa-refresh fa-spin fa-fw ajax-loading-icon"></i>'), a) a[e].html(" "), t.clone().appendTo(a[e])
				}
			},
			_ajax: function(e, t, a) {
				var s = this,
					n = i.extend({
						url: this.localize.ajax_url,
						data: i.extend({
							action: "ajaxified-search"
						}, t)
					}, a);
				return s._doingAjax = !0, i.ajax({
					url: n.url,
					type: "POST",
					dataType: "json",
					data: n.data
				}).done(function() {
					s._doingAjax = !1, e.apply(this, arguments)
				})
			},
			findElements: function(e) {
				return this.$wrapper.find("." + e)
			},
			findSections: function(e) {
				var t;
				if (t = e ? this.findElements(e) : this.$wrapper) {
					var a = {};
					return i("[data-section-name]", t).each(function() {
						var e = i(this),
							t = e.data("section-name");
						t && (a[t] = e)
					}), a
				}
				return !1
			},
			listSections: function() {
				var e = this.findSections();
				return e ? Object.keys(e) : []
			},
			bindEvents: function() {
				var a = this;
				a.findElements(this.EL.INPUT).on("keyup.ajax-search", function(e) {
					if (!e.ctrlKey && !e.metaKey) {
						var t = i.trim(this.value);
						t !== a.prevSearchQuery && (a.handleUserSearch.call(a, this), a.prevSearchQuery = t)
					}
				})
			},
			hidePreviewSection: function() {
				i(".bs-pinning-wrapper").removeClass("stop-smarty-pinning");
				var e = i("#header .bs-pinning-block");
				e.hasClass("pinned") && e.removeClass("pinned top normal").addClass("unpinned")
			},
			showPreviewSection: function() {
				i(".bs-pinning-wrapper").addClass("stop-smarty-pinning")
			},
			handleUserSearch: function(e) {
				var t = e.value,
					a = this;
				t ? (a.triggerLoading("on"), a._xhr && a._xhr.abort(), a.$wrapper.finish().delay(a.ajaxRequestDelay).queue(function() {
					a._xhr = a._ajax(function(e) {
						a.appendHTML(e), a.triggerLoading("off"), Publisher_Theme.refreshLazyImages()
					}, {
						s: t,
						sections: a.listSections(),
						full_width: a.localize.full_width
					})
				})) : (a.triggerEmpty(), a.hidePreviewSection())
			},
			bindCloseEvent: function() {
				i(document);
				var t = this;
				this.findElements(this.EL.PREVIEW).on("click.ajax-search", function(e) {
					e.stopPropagation()
				}), i(".search-container .search-handler").on("click", function(e) {
					i(".search-container").hasClass("open") || t.$wrapper.hasClass("result-results-exist") && t.showPreviewSection()
				})
			},
			appendHTML: function(e) {
				if ("object" == typeof e.sections) {
					var t = this.findSections(this.EL.PREVIEW);
					if (t) {
						var a;
						for (a in t) "string" == typeof e.sections[a] && t[a].html(e.sections[a]);
						this.$wrapper.addClass("result-results-exist")
					}
				}
				this.bindCloseEvent()
			},
			triggerLoading: function(e) {
				var t = "on" === e;
				this.findElements(this.EL.LOADING)[t ? "show" : "hide"]();
				var a = i(".ajax-loading-icon", this.$wrapper);
				a[t ? "show" : "hide"](), a.siblings()[t ? "hide" : "show"](), t && (this.showPreviewSection(), this._addLoadingInPreview())
			},
			triggerEmpty: function() {
				if (!this._doingAjax) {
					var e, t = this.findSections(this.EL.PREVIEW);
					for (e in t) t[e].html(" ")
				}
			}
		};
		Publisher_Theme.init(), jQuery("body").hasClass("active-ajax-search") && e.init()
	}
	window.self === window.top ? e() : setTimeout(e)
}), "function" == typeof OnScreen && (bsrj_retinajs(document.querySelectorAll(".site-header img#site-logo")), bsrj_retinajs(document.querySelectorAll(".rh-header .logo-container img")), bsrj_retinajs(document.querySelectorAll(".bs-subscribe-newsletter .powered-by img")), bsrj_retinajs(document.querySelectorAll("body.bs-ll-d .img-holder")), bsrj_retinajs(document.querySelectorAll("body.bs-ll-d .img-cont")));