(function() {
	const r = document.createElement("link").relList;
	if (r && r.supports && r.supports("modulepreload")) return;
	for (const m of document.querySelectorAll('link[rel="modulepreload"]')) o(m);
	new MutationObserver(m => {
		for (const y of m)
			if (y.type === "childList")
				for (const b of y.addedNodes) b.tagName === "LINK" && b.rel === "modulepreload" && o(b)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function d(m) {
		const y = {};
		return m.integrity && (y.integrity = m.integrity), m.referrerPolicy && (y.referrerPolicy = m.referrerPolicy), m.crossOrigin === "use-credentials" ? y.credentials = "include" : m.crossOrigin === "anonymous" ? y.credentials = "omit" : y.credentials = "same-origin", y
	}

	function o(m) {
		if (m.ep) return;
		m.ep = !0;
		const y = d(m);
		fetch(m.href, y)
	}
})();
var ws = {
		exports: {}
	},
	Dn = {};
var em;

function zy() {
	if (em) return Dn;
	em = 1;
	var i = Symbol.for("react.transitional.element"),
		r = Symbol.for("react.fragment");

	function d(o, m, y) {
		var b = null;
		if (y !== void 0 && (b = "" + y), m.key !== void 0 && (b = "" + m.key), "key" in m) {
			y = {};
			for (var _ in m) _ !== "key" && (y[_] = m[_])
		} else y = m;
		return m = y.ref, {
			$$typeof: i,
			type: o,
			key: b,
			ref: m !== void 0 ? m : null,
			props: y
		}
	}
	return Dn.Fragment = r, Dn.jsx = d, Dn.jsxs = d, Dn
}
var tm;

function Ay() {
	return tm || (tm = 1, ws.exports = zy()), ws.exports
}
var s = Ay(),
	Os = {
		exports: {}
	},
	F = {};
var lm;

function _y() {
	if (lm) return F;
	lm = 1;
	var i = Symbol.for("react.transitional.element"),
		r = Symbol.for("react.portal"),
		d = Symbol.for("react.fragment"),
		o = Symbol.for("react.strict_mode"),
		m = Symbol.for("react.profiler"),
		y = Symbol.for("react.consumer"),
		b = Symbol.for("react.context"),
		_ = Symbol.for("react.forward_ref"),
		N = Symbol.for("react.suspense"),
		p = Symbol.for("react.memo"),
		R = Symbol.for("react.lazy"),
		T = Symbol.for("react.activity"),
		B = Symbol.iterator;

	function Q(v) {
		return v === null || typeof v != "object" ? null : (v = B && v[B] || v["@@iterator"], typeof v == "function" ? v : null)
	}
	var W = {
			isMounted: function() {
				return !1
			},
			enqueueForceUpdate: function() {},
			enqueueReplaceState: function() {},
			enqueueSetState: function() {}
		},
		V = Object.assign,
		X = {};

	function k(v, C, H) {
		this.props = v, this.context = C, this.refs = X, this.updater = H || W
	}
	k.prototype.isReactComponent = {}, k.prototype.setState = function(v, C) {
		if (typeof v != "object" && typeof v != "function" && v != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, v, C, "setState")
	}, k.prototype.forceUpdate = function(v) {
		this.updater.enqueueForceUpdate(this, v, "forceUpdate")
	};

	function L() {}
	L.prototype = k.prototype;

	function J(v, C, H) {
		this.props = v, this.context = C, this.refs = X, this.updater = H || W
	}
	var Ne = J.prototype = new L;
	Ne.constructor = J, V(Ne, k.prototype), Ne.isPureReactComponent = !0;
	var Se = Array.isArray;

	function Ae() {}
	var I = {
			H: null,
			A: null,
			T: null,
			S: null
		},
		we = Object.prototype.hasOwnProperty;

	function Ge(v, C, H) {
		var Y = H.ref;
		return {
			$$typeof: i,
			type: v,
			key: C,
			ref: Y !== void 0 ? Y : null,
			props: H
		}
	}

	function gt(v, C) {
		return Ge(v.type, C, v.props)
	}

	function Rt(v) {
		return typeof v == "object" && v !== null && v.$$typeof === i
	}

	function Ie(v) {
		var C = {
			"=": "=0",
			":": "=2"
		};
		return "$" + v.replace(/[=:]/g, function(H) {
			return C[H]
		})
	}
	var Rl = /\/+/g;

	function qt(v, C) {
		return typeof v == "object" && v !== null && v.key != null ? Ie("" + v.key) : C.toString(36)
	}

	function _t(v) {
		switch (v.status) {
			case "fulfilled":
				return v.value;
			case "rejected":
				throw v.reason;
			default:
				switch (typeof v.status == "string" ? v.then(Ae, Ae) : (v.status = "pending", v.then(function(C) {
						v.status === "pending" && (v.status = "fulfilled", v.value = C)
					}, function(C) {
						v.status === "pending" && (v.status = "rejected", v.reason = C)
					})), v.status) {
					case "fulfilled":
						return v.value;
					case "rejected":
						throw v.reason
				}
		}
		throw v
	}

	function w(v, C, H, Y, P) {
		var ae = typeof v;
		(ae === "undefined" || ae === "boolean") && (v = null);
		var de = !1;
		if (v === null) de = !0;
		else switch (ae) {
			case "bigint":
			case "string":
			case "number":
				de = !0;
				break;
			case "object":
				switch (v.$$typeof) {
					case i:
					case r:
						de = !0;
						break;
					case R:
						return de = v._init, w(de(v._payload), C, H, Y, P)
				}
		}
		if (de) return P = P(v), de = Y === "" ? "." + qt(v, 0) : Y, Se(P) ? (H = "", de != null && (H = de.replace(Rl, "$&/") + "/"), w(P, C, H, "", function(La) {
			return La
		})) : P != null && (Rt(P) && (P = gt(P, H + (P.key == null || v && v.key === P.key ? "" : ("" + P.key).replace(Rl, "$&/") + "/") + de)), C.push(P)), 1;
		de = 0;
		var $e = Y === "" ? "." : Y + ":";
		if (Se(v))
			for (var Oe = 0; Oe < v.length; Oe++) Y = v[Oe], ae = $e + qt(Y, Oe), de += w(Y, C, H, ae, P);
		else if (Oe = Q(v), typeof Oe == "function")
			for (v = Oe.call(v), Oe = 0; !(Y = v.next()).done;) Y = Y.value, ae = $e + qt(Y, Oe++), de += w(Y, C, H, ae, P);
		else if (ae === "object") {
			if (typeof v.then == "function") return w(_t(v), C, H, Y, P);
			throw C = String(v), Error("Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead.")
		}
		return de
	}

	function U(v, C, H) {
		if (v == null) return v;
		var Y = [],
			P = 0;
		return w(v, Y, "", "", function(ae) {
			return C.call(H, ae, P++)
		}), Y
	}

	function $(v) {
		if (v._status === -1) {
			var C = v._result;
			C = C(), C.then(function(H) {
				(v._status === 0 || v._status === -1) && (v._status = 1, v._result = H)
			}, function(H) {
				(v._status === 0 || v._status === -1) && (v._status = 2, v._result = H)
			}), v._status === -1 && (v._status = 0, v._result = C)
		}
		if (v._status === 1) return v._result.default;
		throw v._result
	}
	var ye = typeof reportError == "function" ? reportError : function(v) {
			if (typeof window == "object" && typeof window.ErrorEvent == "function") {
				var C = new window.ErrorEvent("error", {
					bubbles: !0,
					cancelable: !0,
					message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
					error: v
				});
				if (!window.dispatchEvent(C)) return
			} else if (typeof process == "object" && typeof process.emit == "function") {
				process.emit("uncaughtException", v);
				return
			}
			console.error(v)
		},
		xe = {
			map: U,
			forEach: function(v, C, H) {
				U(v, function() {
					C.apply(this, arguments)
				}, H)
			},
			count: function(v) {
				var C = 0;
				return U(v, function() {
					C++
				}), C
			},
			toArray: function(v) {
				return U(v, function(C) {
					return C
				}) || []
			},
			only: function(v) {
				if (!Rt(v)) throw Error("React.Children.only expected to receive a single React element child.");
				return v
			}
		};
	return F.Activity = T, F.Children = xe, F.Component = k, F.Fragment = d, F.Profiler = m, F.PureComponent = J, F.StrictMode = o, F.Suspense = N, F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, F.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(v) {
			return I.H.useMemoCache(v)
		}
	}, F.cache = function(v) {
		return function() {
			return v.apply(null, arguments)
		}
	}, F.cacheSignal = function() {
		return null
	}, F.cloneElement = function(v, C, H) {
		if (v == null) throw Error("The argument must be a React element, but you passed " + v + ".");
		var Y = V({}, v.props),
			P = v.key;
		if (C != null)
			for (ae in C.key !== void 0 && (P = "" + C.key), C) !we.call(C, ae) || ae === "key" || ae === "__self" || ae === "__source" || ae === "ref" && C.ref === void 0 || (Y[ae] = C[ae]);
		var ae = arguments.length - 2;
		if (ae === 1) Y.children = H;
		else if (1 < ae) {
			for (var de = Array(ae), $e = 0; $e < ae; $e++) de[$e] = arguments[$e + 2];
			Y.children = de
		}
		return Ge(v.type, P, Y)
	}, F.createContext = function(v) {
		return v = {
			$$typeof: b,
			_currentValue: v,
			_currentValue2: v,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, v.Provider = v, v.Consumer = {
			$$typeof: y,
			_context: v
		}, v
	}, F.createElement = function(v, C, H) {
		var Y, P = {},
			ae = null;
		if (C != null)
			for (Y in C.key !== void 0 && (ae = "" + C.key), C) we.call(C, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (P[Y] = C[Y]);
		var de = arguments.length - 2;
		if (de === 1) P.children = H;
		else if (1 < de) {
			for (var $e = Array(de), Oe = 0; Oe < de; Oe++) $e[Oe] = arguments[Oe + 2];
			P.children = $e
		}
		if (v && v.defaultProps)
			for (Y in de = v.defaultProps, de) P[Y] === void 0 && (P[Y] = de[Y]);
		return Ge(v, ae, P)
	}, F.createRef = function() {
		return {
			current: null
		}
	}, F.forwardRef = function(v) {
		return {
			$$typeof: _,
			render: v
		}
	}, F.isValidElement = Rt, F.lazy = function(v) {
		return {
			$$typeof: R,
			_payload: {
				_status: -1,
				_result: v
			},
			_init: $
		}
	}, F.memo = function(v, C) {
		return {
			$$typeof: p,
			type: v,
			compare: C === void 0 ? null : C
		}
	}, F.startTransition = function(v) {
		var C = I.T,
			H = {};
		I.T = H;
		try {
			var Y = v(),
				P = I.S;
			P !== null && P(H, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(Ae, ye)
		} catch (ae) {
			ye(ae)
		} finally {
			C !== null && H.types !== null && (C.types = H.types), I.T = C
		}
	}, F.unstable_useCacheRefresh = function() {
		return I.H.useCacheRefresh()
	}, F.use = function(v) {
		return I.H.use(v)
	}, F.useActionState = function(v, C, H) {
		return I.H.useActionState(v, C, H)
	}, F.useCallback = function(v, C) {
		return I.H.useCallback(v, C)
	}, F.useContext = function(v) {
		return I.H.useContext(v)
	}, F.useDebugValue = function() {}, F.useDeferredValue = function(v, C) {
		return I.H.useDeferredValue(v, C)
	}, F.useEffect = function(v, C) {
		return I.H.useEffect(v, C)
	}, F.useEffectEvent = function(v) {
		return I.H.useEffectEvent(v)
	}, F.useId = function() {
		return I.H.useId()
	}, F.useImperativeHandle = function(v, C, H) {
		return I.H.useImperativeHandle(v, C, H)
	}, F.useInsertionEffect = function(v, C) {
		return I.H.useInsertionEffect(v, C)
	}, F.useLayoutEffect = function(v, C) {
		return I.H.useLayoutEffect(v, C)
	}, F.useMemo = function(v, C) {
		return I.H.useMemo(v, C)
	}, F.useOptimistic = function(v, C) {
		return I.H.useOptimistic(v, C)
	}, F.useReducer = function(v, C, H) {
		return I.H.useReducer(v, C, H)
	}, F.useRef = function(v) {
		return I.H.useRef(v)
	}, F.useState = function(v) {
		return I.H.useState(v)
	}, F.useSyncExternalStore = function(v, C, H) {
		return I.H.useSyncExternalStore(v, C, H)
	}, F.useTransition = function() {
		return I.H.useTransition()
	}, F.version = "19.2.4", F
}
var am;

function Vs() {
	return am || (am = 1, Os.exports = _y()), Os.exports
}
var M = Vs(),
	Rs = {
		exports: {}
	},
	Cn = {},
	Ds = {
		exports: {}
	},
	Cs = {};
var nm;

function My() {
	return nm || (nm = 1, (function(i) {
		function r(w, U) {
			var $ = w.length;
			w.push(U);
			e: for (; 0 < $;) {
				var ye = $ - 1 >>> 1,
					xe = w[ye];
				if (0 < m(xe, U)) w[ye] = U, w[$] = xe, $ = ye;
				else break e
			}
		}

		function d(w) {
			return w.length === 0 ? null : w[0]
		}

		function o(w) {
			if (w.length === 0) return null;
			var U = w[0],
				$ = w.pop();
			if ($ !== U) {
				w[0] = $;
				e: for (var ye = 0, xe = w.length, v = xe >>> 1; ye < v;) {
					var C = 2 * (ye + 1) - 1,
						H = w[C],
						Y = C + 1,
						P = w[Y];
					if (0 > m(H, $)) Y < xe && 0 > m(P, H) ? (w[ye] = P, w[Y] = $, ye = Y) : (w[ye] = H, w[C] = $, ye = C);
					else if (Y < xe && 0 > m(P, $)) w[ye] = P, w[Y] = $, ye = Y;
					else break e
				}
			}
			return U
		}

		function m(w, U) {
			var $ = w.sortIndex - U.sortIndex;
			return $ !== 0 ? $ : w.id - U.id
		}
		if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
			var y = performance;
			i.unstable_now = function() {
				return y.now()
			}
		} else {
			var b = Date,
				_ = b.now();
			i.unstable_now = function() {
				return b.now() - _
			}
		}
		var N = [],
			p = [],
			R = 1,
			T = null,
			B = 3,
			Q = !1,
			W = !1,
			V = !1,
			X = !1,
			k = typeof setTimeout == "function" ? setTimeout : null,
			L = typeof clearTimeout == "function" ? clearTimeout : null,
			J = typeof setImmediate < "u" ? setImmediate : null;

		function Ne(w) {
			for (var U = d(p); U !== null;) {
				if (U.callback === null) o(p);
				else if (U.startTime <= w) o(p), U.sortIndex = U.expirationTime, r(N, U);
				else break;
				U = d(p)
			}
		}

		function Se(w) {
			if (V = !1, Ne(w), !W)
				if (d(N) !== null) W = !0, Ae || (Ae = !0, Ie());
				else {
					var U = d(p);
					U !== null && _t(Se, U.startTime - w)
				}
		}
		var Ae = !1,
			I = -1,
			we = 5,
			Ge = -1;

		function gt() {
			return X ? !0 : !(i.unstable_now() - Ge < we)
		}

		function Rt() {
			if (X = !1, Ae) {
				var w = i.unstable_now();
				Ge = w;
				var U = !0;
				try {
					e: {
						W = !1,
						V && (V = !1, L(I), I = -1),
						Q = !0;
						var $ = B;
						try {
							t: {
								for (Ne(w), T = d(N); T !== null && !(T.expirationTime > w && gt());) {
									var ye = T.callback;
									if (typeof ye == "function") {
										T.callback = null, B = T.priorityLevel;
										var xe = ye(T.expirationTime <= w);
										if (w = i.unstable_now(), typeof xe == "function") {
											T.callback = xe, Ne(w), U = !0;
											break t
										}
										T === d(N) && o(N), Ne(w)
									} else o(N);
									T = d(N)
								}
								if (T !== null) U = !0;
								else {
									var v = d(p);
									v !== null && _t(Se, v.startTime - w), U = !1
								}
							}
							break e
						}
						finally {
							T = null, B = $, Q = !1
						}
						U = void 0
					}
				}
				finally {
					U ? Ie() : Ae = !1
				}
			}
		}
		var Ie;
		if (typeof J == "function") Ie = function() {
			J(Rt)
		};
		else if (typeof MessageChannel < "u") {
			var Rl = new MessageChannel,
				qt = Rl.port2;
			Rl.port1.onmessage = Rt, Ie = function() {
				qt.postMessage(null)
			}
		} else Ie = function() {
			k(Rt, 0)
		};

		function _t(w, U) {
			I = k(function() {
				w(i.unstable_now())
			}, U)
		}
		i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(w) {
			w.callback = null
		}, i.unstable_forceFrameRate = function(w) {
			0 > w || 125 < w ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : we = 0 < w ? Math.floor(1e3 / w) : 5
		}, i.unstable_getCurrentPriorityLevel = function() {
			return B
		}, i.unstable_next = function(w) {
			switch (B) {
				case 1:
				case 2:
				case 3:
					var U = 3;
					break;
				default:
					U = B
			}
			var $ = B;
			B = U;
			try {
				return w()
			} finally {
				B = $
			}
		}, i.unstable_requestPaint = function() {
			X = !0
		}, i.unstable_runWithPriority = function(w, U) {
			switch (w) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					w = 3
			}
			var $ = B;
			B = w;
			try {
				return U()
			} finally {
				B = $
			}
		}, i.unstable_scheduleCallback = function(w, U, $) {
			var ye = i.unstable_now();
			switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? ye + $ : ye) : $ = ye, w) {
				case 1:
					var xe = -1;
					break;
				case 2:
					xe = 250;
					break;
				case 5:
					xe = 1073741823;
					break;
				case 4:
					xe = 1e4;
					break;
				default:
					xe = 5e3
			}
			return xe = $ + xe, w = {
				id: R++,
				callback: U,
				priorityLevel: w,
				startTime: $,
				expirationTime: xe,
				sortIndex: -1
			}, $ > ye ? (w.sortIndex = $, r(p, w), d(N) === null && w === d(p) && (V ? (L(I), I = -1) : V = !0, _t(Se, $ - ye))) : (w.sortIndex = xe, r(N, w), W || Q || (W = !0, Ae || (Ae = !0, Ie()))), w
		}, i.unstable_shouldYield = gt, i.unstable_wrapCallback = function(w) {
			var U = B;
			return function() {
				var $ = B;
				B = U;
				try {
					return w.apply(this, arguments)
				} finally {
					B = $
				}
			}
		}
	})(Cs)), Cs
}
var um;

function wy() {
	return um || (um = 1, Ds.exports = My()), Ds.exports
}
var Us = {
		exports: {}
	},
	Je = {};
var im;

function Oy() {
	if (im) return Je;
	im = 1;
	var i = Vs();

	function r(N) {
		var p = "https://react.dev/errors/" + N;
		if (1 < arguments.length) {
			p += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var R = 2; R < arguments.length; R++) p += "&args[]=" + encodeURIComponent(arguments[R])
		}
		return "Minified React error #" + N + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	}

	function d() {}
	var o = {
			d: {
				f: d,
				r: function() {
					throw Error(r(522))
				},
				D: d,
				C: d,
				L: d,
				m: d,
				X: d,
				S: d,
				M: d
			},
			p: 0,
			findDOMNode: null
		},
		m = Symbol.for("react.portal");

	function y(N, p, R) {
		var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: m,
			key: T == null ? null : "" + T,
			children: N,
			containerInfo: p,
			implementation: R
		}
	}
	var b = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

	function _(N, p) {
		if (N === "font") return "";
		if (typeof p == "string") return p === "use-credentials" ? p : ""
	}
	return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Je.createPortal = function(N, p) {
		var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(r(299));
		return y(N, p, null, R)
	}, Je.flushSync = function(N) {
		var p = b.T,
			R = o.p;
		try {
			if (b.T = null, o.p = 2, N) return N()
		} finally {
			b.T = p, o.p = R, o.d.f()
		}
	}, Je.preconnect = function(N, p) {
		typeof N == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, o.d.C(N, p))
	}, Je.prefetchDNS = function(N) {
		typeof N == "string" && o.d.D(N)
	}, Je.preinit = function(N, p) {
		if (typeof N == "string" && p && typeof p.as == "string") {
			var R = p.as,
				T = _(R, p.crossOrigin),
				B = typeof p.integrity == "string" ? p.integrity : void 0,
				Q = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
			R === "style" ? o.d.S(N, typeof p.precedence == "string" ? p.precedence : void 0, {
				crossOrigin: T,
				integrity: B,
				fetchPriority: Q
			}) : R === "script" && o.d.X(N, {
				crossOrigin: T,
				integrity: B,
				fetchPriority: Q,
				nonce: typeof p.nonce == "string" ? p.nonce : void 0
			})
		}
	}, Je.preinitModule = function(N, p) {
		if (typeof N == "string")
			if (typeof p == "object" && p !== null) {
				if (p.as == null || p.as === "script") {
					var R = _(p.as, p.crossOrigin);
					o.d.M(N, {
						crossOrigin: R,
						integrity: typeof p.integrity == "string" ? p.integrity : void 0,
						nonce: typeof p.nonce == "string" ? p.nonce : void 0
					})
				}
			} else p == null && o.d.M(N)
	}, Je.preload = function(N, p) {
		if (typeof N == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
			var R = p.as,
				T = _(R, p.crossOrigin);
			o.d.L(N, R, {
				crossOrigin: T,
				integrity: typeof p.integrity == "string" ? p.integrity : void 0,
				nonce: typeof p.nonce == "string" ? p.nonce : void 0,
				type: typeof p.type == "string" ? p.type : void 0,
				fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
				referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
				imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
				imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
				media: typeof p.media == "string" ? p.media : void 0
			})
		}
	}, Je.preloadModule = function(N, p) {
		if (typeof N == "string")
			if (p) {
				var R = _(p.as, p.crossOrigin);
				o.d.m(N, {
					as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
					crossOrigin: R,
					integrity: typeof p.integrity == "string" ? p.integrity : void 0
				})
			} else o.d.m(N)
	}, Je.requestFormReset = function(N) {
		o.d.r(N)
	}, Je.unstable_batchedUpdates = function(N, p) {
		return N(p)
	}, Je.useFormState = function(N, p, R) {
		return b.H.useFormState(N, p, R)
	}, Je.useFormStatus = function() {
		return b.H.useHostTransitionStatus()
	}, Je.version = "19.2.4", Je
}
var cm;

function Ry() {
	if (cm) return Us.exports;
	cm = 1;

	function i() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
		} catch (r) {
			console.error(r)
		}
	}
	return i(), Us.exports = Oy(), Us.exports
}
var sm;

function Dy() {
	if (sm) return Cn;
	sm = 1;
	var i = wy(),
		r = Vs(),
		d = Ry();

	function o(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var l = 2; l < arguments.length; l++) t += "&args[]=" + encodeURIComponent(arguments[l])
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	}

	function m(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
	}

	function y(e) {
		var t = e,
			l = e;
		if (e.alternate)
			for (; t.return;) t = t.return;
		else {
			e = t;
			do t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return; while (e)
		}
		return t.tag === 3 ? l : null
	}

	function b(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
		}
		return null
	}

	function _(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
		}
		return null
	}

	function N(e) {
		if (y(e) !== e) throw Error(o(188))
	}

	function p(e) {
		var t = e.alternate;
		if (!t) {
			if (t = y(e), t === null) throw Error(o(188));
			return t !== e ? null : e
		}
		for (var l = e, a = t;;) {
			var n = l.return;
			if (n === null) break;
			var u = n.alternate;
			if (u === null) {
				if (a = n.return, a !== null) {
					l = a;
					continue
				}
				break
			}
			if (n.child === u.child) {
				for (u = n.child; u;) {
					if (u === l) return N(n), e;
					if (u === a) return N(n), t;
					u = u.sibling
				}
				throw Error(o(188))
			}
			if (l.return !== a.return) l = n, a = u;
			else {
				for (var c = !1, f = n.child; f;) {
					if (f === l) {
						c = !0, l = n, a = u;
						break
					}
					if (f === a) {
						c = !0, a = n, l = u;
						break
					}
					f = f.sibling
				}
				if (!c) {
					for (f = u.child; f;) {
						if (f === l) {
							c = !0, l = u, a = n;
							break
						}
						if (f === a) {
							c = !0, a = u, l = n;
							break
						}
						f = f.sibling
					}
					if (!c) throw Error(o(189))
				}
			}
			if (l.alternate !== a) throw Error(o(190))
		}
		if (l.tag !== 3) throw Error(o(188));
		return l.stateNode.current === l ? e : t
	}

	function R(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = R(e), t !== null) return t;
			e = e.sibling
		}
		return null
	}
	var T = Object.assign,
		B = Symbol.for("react.element"),
		Q = Symbol.for("react.transitional.element"),
		W = Symbol.for("react.portal"),
		V = Symbol.for("react.fragment"),
		X = Symbol.for("react.strict_mode"),
		k = Symbol.for("react.profiler"),
		L = Symbol.for("react.consumer"),
		J = Symbol.for("react.context"),
		Ne = Symbol.for("react.forward_ref"),
		Se = Symbol.for("react.suspense"),
		Ae = Symbol.for("react.suspense_list"),
		I = Symbol.for("react.memo"),
		we = Symbol.for("react.lazy"),
		Ge = Symbol.for("react.activity"),
		gt = Symbol.for("react.memo_cache_sentinel"),
		Rt = Symbol.iterator;

	function Ie(e) {
		return e === null || typeof e != "object" ? null : (e = Rt && e[Rt] || e["@@iterator"], typeof e == "function" ? e : null)
	}
	var Rl = Symbol.for("react.client.reference");

	function qt(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === Rl ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case V:
				return "Fragment";
			case k:
				return "Profiler";
			case X:
				return "StrictMode";
			case Se:
				return "Suspense";
			case Ae:
				return "SuspenseList";
			case Ge:
				return "Activity"
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case W:
				return "Portal";
			case J:
				return e.displayName || "Context";
			case L:
				return (e._context.displayName || "Context") + ".Consumer";
			case Ne:
				var t = e.render;
				return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
			case I:
				return t = e.displayName || null, t !== null ? t : qt(e.type) || "Memo";
			case we:
				t = e._payload, e = e._init;
				try {
					return qt(e(t))
				} catch {}
		}
		return null
	}
	var _t = Array.isArray,
		w = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		U = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		$ = {
			pending: !1,
			data: null,
			method: null,
			action: null
		},
		ye = [],
		xe = -1;

	function v(e) {
		return {
			current: e
		}
	}

	function C(e) {
		0 > xe || (e.current = ye[xe], ye[xe] = null, xe--)
	}

	function H(e, t) {
		xe++, ye[xe] = e.current, e.current = t
	}
	var Y = v(null),
		P = v(null),
		ae = v(null),
		de = v(null);

	function $e(e, t) {
		switch (H(ae, t), H(P, e), H(Y, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? jd(e) : 0;
				break;
			default:
				if (e = t.tagName, t = t.namespaceURI) t = jd(t), e = Ed(t, e);
				else switch (e) {
					case "svg":
						e = 1;
						break;
					case "math":
						e = 2;
						break;
					default:
						e = 0
				}
		}
		C(Y), H(Y, e)
	}

	function Oe() {
		C(Y), C(P), C(ae)
	}

	function La(e) {
		e.memoizedState !== null && H(de, e);
		var t = Y.current,
			l = Ed(t, e.type);
		t !== l && (H(P, e), H(Y, l))
	}

	function Gn(e) {
		P.current === e && (C(Y), C(P)), de.current === e && (C(de), Mn._currentValue = $)
	}
	var di, Fs;

	function Dl(e) {
		if (di === void 0) try {
			throw Error()
		} catch (l) {
			var t = l.stack.trim().match(/\n( *(at )?)/);
			di = t && t[1] || "", Fs = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
		}
		return `
` + di + e + Fs
	}
	var mi = !1;

	function hi(e, t) {
		if (!e || mi) return "";
		mi = !0;
		var l = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var a = {
				DetermineComponentFrameRoot: function() {
					try {
						if (t) {
							var D = function() {
								throw Error()
							};
							if (Object.defineProperty(D.prototype, "props", {
									set: function() {
										throw Error()
									}
								}), typeof Reflect == "object" && Reflect.construct) {
								try {
									Reflect.construct(D, [])
								} catch (z) {
									var E = z
								}
								Reflect.construct(e, [], D)
							} else {
								try {
									D.call()
								} catch (z) {
									E = z
								}
								e.call(D.prototype)
							}
						} else {
							try {
								throw Error()
							} catch (z) {
								E = z
							}(D = e()) && typeof D.catch == "function" && D.catch(function() {})
						}
					} catch (z) {
						if (z && E && typeof z.stack == "string") return [z.stack, E.stack]
					}
					return [null, null]
				}
			};
			a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
			n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
				value: "DetermineComponentFrameRoot"
			});
			var u = a.DetermineComponentFrameRoot(),
				c = u[0],
				f = u[1];
			if (c && f) {
				var h = c.split(`
`),
					j = f.split(`
`);
				for (n = a = 0; a < h.length && !h[a].includes("DetermineComponentFrameRoot");) a++;
				for (; n < j.length && !j[n].includes("DetermineComponentFrameRoot");) n++;
				if (a === h.length || n === j.length)
					for (a = h.length - 1, n = j.length - 1; 1 <= a && 0 <= n && h[a] !== j[n];) n--;
				for (; 1 <= a && 0 <= n; a--, n--)
					if (h[a] !== j[n]) {
						if (a !== 1 || n !== 1)
							do
								if (a--, n--, 0 > n || h[a] !== j[n]) {
									var A = `
` + h[a].replace(" at new ", " at ");
									return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), A
								} while (1 <= a && 0 <= n);
						break
					}
			}
		} finally {
			mi = !1, Error.prepareStackTrace = l
		}
		return (l = e ? e.displayName || e.name : "") ? Dl(l) : ""
	}

	function ah(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5:
				return Dl(e.type);
			case 16:
				return Dl("Lazy");
			case 13:
				return e.child !== t && t !== null ? Dl("Suspense Fallback") : Dl("Suspense");
			case 19:
				return Dl("SuspenseList");
			case 0:
			case 15:
				return hi(e.type, !1);
			case 11:
				return hi(e.type.render, !1);
			case 1:
				return hi(e.type, !0);
			case 31:
				return Dl("Activity");
			default:
				return ""
		}
	}

	function Is(e) {
		try {
			var t = "",
				l = null;
			do t += ah(e, l), l = e, e = e.return; while (e);
			return t
		} catch (a) {
			return `
Error generating stack: ` + a.message + `
` + a.stack
		}
	}
	var yi = Object.prototype.hasOwnProperty,
		gi = i.unstable_scheduleCallback,
		vi = i.unstable_cancelCallback,
		nh = i.unstable_shouldYield,
		uh = i.unstable_requestPaint,
		it = i.unstable_now,
		ih = i.unstable_getCurrentPriorityLevel,
		Ps = i.unstable_ImmediatePriority,
		er = i.unstable_UserBlockingPriority,
		Xn = i.unstable_NormalPriority,
		ch = i.unstable_LowPriority,
		tr = i.unstable_IdlePriority,
		sh = i.log,
		rh = i.unstable_setDisableYieldValue,
		Ya = null,
		ct = null;

	function cl(e) {
		if (typeof sh == "function" && rh(e), ct && typeof ct.setStrictMode == "function") try {
			ct.setStrictMode(Ya, e)
		} catch {}
	}
	var st = Math.clz32 ? Math.clz32 : dh,
		oh = Math.log,
		fh = Math.LN2;

	function dh(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (oh(e) / fh | 0) | 0
	}
	var Qn = 256,
		Vn = 262144,
		Zn = 4194304;

	function Cl(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
				return e & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return e & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return e
		}
	}

	function kn(e, t, l) {
		var a = e.pendingLanes;
		if (a === 0) return 0;
		var n = 0,
			u = e.suspendedLanes,
			c = e.pingedLanes;
		e = e.warmLanes;
		var f = a & 134217727;
		return f !== 0 ? (a = f & ~u, a !== 0 ? n = Cl(a) : (c &= f, c !== 0 ? n = Cl(c) : l || (l = f & ~e, l !== 0 && (n = Cl(l))))) : (f = a & ~u, f !== 0 ? n = Cl(f) : c !== 0 ? n = Cl(c) : l || (l = a & ~e, l !== 0 && (n = Cl(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : n
	}

	function Ga(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
	}

	function mh(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1
		}
	}

	function lr() {
		var e = Zn;
		return Zn <<= 1, (Zn & 62914560) === 0 && (Zn = 4194304), e
	}

	function pi(e) {
		for (var t = [], l = 0; 31 > l; l++) t.push(e);
		return t
	}

	function Xa(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
	}

	function hh(e, t, l, a, n, u) {
		var c = e.pendingLanes;
		e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
		var f = e.entanglements,
			h = e.expirationTimes,
			j = e.hiddenUpdates;
		for (l = c & ~l; 0 < l;) {
			var A = 31 - st(l),
				D = 1 << A;
			f[A] = 0, h[A] = -1;
			var E = j[A];
			if (E !== null)
				for (j[A] = null, A = 0; A < E.length; A++) {
					var z = E[A];
					z !== null && (z.lane &= -536870913)
				}
			l &= ~D
		}
		a !== 0 && ar(e, a, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t))
	}

	function ar(e, t, l) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var a = 31 - st(t);
		e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930
	}

	function nr(e, t) {
		var l = e.entangledLanes |= t;
		for (e = e.entanglements; l;) {
			var a = 31 - st(l),
				n = 1 << a;
			n & t | e[a] & t && (e[a] |= t), l &= ~n
		}
	}

	function ur(e, t) {
		var l = t & -t;
		return l = (l & 42) !== 0 ? 1 : xi(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
	}

	function xi(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default:
				e = 0
		}
		return e
	}

	function bi(e) {
		return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
	}

	function ir() {
		var e = U.p;
		return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Kd(e.type))
	}

	function cr(e, t) {
		var l = U.p;
		try {
			return U.p = e, t()
		} finally {
			U.p = l
		}
	}
	var sl = Math.random().toString(36).slice(2),
		Xe = "__reactFiber$" + sl,
		Pe = "__reactProps$" + sl,
		Il = "__reactContainer$" + sl,
		Si = "__reactEvents$" + sl,
		yh = "__reactListeners$" + sl,
		gh = "__reactHandles$" + sl,
		sr = "__reactResources$" + sl,
		Qa = "__reactMarker$" + sl;

	function Ni(e) {
		delete e[Xe], delete e[Pe], delete e[Si], delete e[yh], delete e[gh]
	}

	function Pl(e) {
		var t = e[Xe];
		if (t) return t;
		for (var l = e.parentNode; l;) {
			if (t = l[Il] || l[Xe]) {
				if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
					for (e = Od(e); e !== null;) {
						if (l = e[Xe]) return l;
						e = Od(e)
					}
				return t
			}
			e = l, l = e.parentNode
		}
		return null
	}

	function ea(e) {
		if (e = e[Xe] || e[Il]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e
		}
		return null
	}

	function Va(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(o(33))
	}

	function ta(e) {
		var t = e[sr];
		return t || (t = e[sr] = {
			hoistableStyles: new Map,
			hoistableScripts: new Map
		}), t
	}

	function Le(e) {
		e[Qa] = !0
	}
	var rr = new Set,
		or = {};

	function Ul(e, t) {
		la(e, t), la(e + "Capture", t)
	}

	function la(e, t) {
		for (or[e] = t, e = 0; e < t.length; e++) rr.add(t[e])
	}
	var vh = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
		fr = {},
		dr = {};

	function ph(e) {
		return yi.call(dr, e) ? !0 : yi.call(fr, e) ? !1 : vh.test(e) ? dr[e] = !0 : (fr[e] = !0, !1)
	}

	function Kn(e, t, l) {
		if (ph(t))
			if (l === null) e.removeAttribute(t);
			else {
				switch (typeof l) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var a = t.toLowerCase().slice(0, 5);
						if (a !== "data-" && a !== "aria-") {
							e.removeAttribute(t);
							return
						}
				}
				e.setAttribute(t, "" + l)
			}
	}

	function Jn(e, t, l) {
		if (l === null) e.removeAttribute(t);
		else {
			switch (typeof l) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return
			}
			e.setAttribute(t, "" + l)
		}
	}

	function Lt(e, t, l, a) {
		if (a === null) e.removeAttribute(l);
		else {
			switch (typeof a) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(l);
					return
			}
			e.setAttributeNS(t, l, "" + a)
		}
	}

	function vt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return e;
			case "object":
				return e;
			default:
				return ""
		}
	}

	function mr(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
	}

	function xh(e, t, l) {
		var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
			var n = a.get,
				u = a.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return n.call(this)
				},
				set: function(c) {
					l = "" + c, u.call(this, c)
				}
			}), Object.defineProperty(e, t, {
				enumerable: a.enumerable
			}), {
				getValue: function() {
					return l
				},
				setValue: function(c) {
					l = "" + c
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t]
				}
			}
		}
	}

	function ji(e) {
		if (!e._valueTracker) {
			var t = mr(e) ? "checked" : "value";
			e._valueTracker = xh(e, t, "" + e[t])
		}
	}

	function hr(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var l = t.getValue(),
			a = "";
		return e && (a = mr(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1
	}

	function $n(e) {
		if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
		try {
			return e.activeElement || e.body
		} catch {
			return e.body
		}
	}
	var bh = /[\n"\\]/g;

	function pt(e) {
		return e.replace(bh, function(t) {
			return "\\" + t.charCodeAt(0).toString(16) + " "
		})
	}

	function Ei(e, t, l, a, n, u, c, f) {
		e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + vt(t)) : e.value !== "" + vt(t) && (e.value = "" + vt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? Ti(e, c, vt(t)) : l != null ? Ti(e, c, vt(l)) : a != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + vt(f) : e.removeAttribute("name")
	}

	function yr(e, t, l, a, n, u, c, f) {
		if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
			if (!(u !== "submit" && u !== "reset" || t != null)) {
				ji(e);
				return
			}
			l = l != null ? "" + vt(l) : "", t = t != null ? "" + vt(t) : l, f || t === e.value || (e.value = t), e.defaultValue = t
		}
		a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = f ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), ji(e)
	}

	function Ti(e, t, l) {
		t === "number" && $n(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l)
	}

	function aa(e, t, l, a) {
		if (e = e.options, t) {
			t = {};
			for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
			for (l = 0; l < e.length; l++) n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0)
		} else {
			for (l = "" + vt(l), t = null, n = 0; n < e.length; n++) {
				if (e[n].value === l) {
					e[n].selected = !0, a && (e[n].defaultSelected = !0);
					return
				}
				t !== null || e[n].disabled || (t = e[n])
			}
			t !== null && (t.selected = !0)
		}
	}

	function gr(e, t, l) {
		if (t != null && (t = "" + vt(t), t !== e.value && (e.value = t), l == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return
		}
		e.defaultValue = l != null ? "" + vt(l) : ""
	}

	function vr(e, t, l, a) {
		if (t == null) {
			if (a != null) {
				if (l != null) throw Error(o(92));
				if (_t(a)) {
					if (1 < a.length) throw Error(o(93));
					a = a[0]
				}
				l = a
			}
			l == null && (l = ""), t = l
		}
		l = vt(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), ji(e)
	}

	function na(e, t) {
		if (t) {
			var l = e.firstChild;
			if (l && l === e.lastChild && l.nodeType === 3) {
				l.nodeValue = t;
				return
			}
		}
		e.textContent = t
	}
	var Sh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

	function pr(e, t, l) {
		var a = t.indexOf("--") === 0;
		l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Sh.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px"
	}

	function xr(e, t, l) {
		if (t != null && typeof t != "object") throw Error(o(62));
		if (e = e.style, l != null) {
			for (var a in l) !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
			for (var n in t) a = t[n], t.hasOwnProperty(n) && l[n] !== a && pr(e, n, a)
		} else
			for (var u in t) t.hasOwnProperty(u) && pr(e, u, t[u])
	}

	function zi(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0
		}
	}
	var Nh = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"]
		]),
		jh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

	function Wn(e) {
		return jh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
	}

	function Yt() {}
	var Ai = null;

	function _i(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
	}
	var ua = null,
		ia = null;

	function br(e) {
		var t = ea(e);
		if (t && (e = t.stateNode)) {
			var l = e[Pe] || null;
			e: switch (e = t.stateNode, t.type) {
				case "input":
					if (Ei(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
						for (l = e; l.parentNode;) l = l.parentNode;
						for (l = l.querySelectorAll('input[name="' + pt("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
							var a = l[t];
							if (a !== e && a.form === e.form) {
								var n = a[Pe] || null;
								if (!n) throw Error(o(90));
								Ei(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
							}
						}
						for (t = 0; t < l.length; t++) a = l[t], a.form === e.form && hr(a)
					}
					break e;
				case "textarea":
					gr(e, l.value, l.defaultValue);
					break e;
				case "select":
					t = l.value, t != null && aa(e, !!l.multiple, t, !1)
			}
		}
	}
	var Mi = !1;

	function Sr(e, t, l) {
		if (Mi) return e(t, l);
		Mi = !0;
		try {
			var a = e(t);
			return a
		} finally {
			if (Mi = !1, (ua !== null || ia !== null) && (Bu(), ua && (t = ua, e = ia, ia = ua = null, br(t), e)))
				for (t = 0; t < e.length; t++) br(e[t])
		}
	}

	function Za(e, t) {
		var l = e.stateNode;
		if (l === null) return null;
		var a = l[Pe] || null;
		if (a === null) return null;
		l = a[t];
		e: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
				break e;
			default:
				e = !1
		}
		if (e) return null;
		if (l && typeof l != "function") throw Error(o(231, t, typeof l));
		return l
	}
	var Gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
		wi = !1;
	if (Gt) try {
		var ka = {};
		Object.defineProperty(ka, "passive", {
			get: function() {
				wi = !0
			}
		}), window.addEventListener("test", ka, ka), window.removeEventListener("test", ka, ka)
	} catch {
		wi = !1
	}
	var rl = null,
		Oi = null,
		Fn = null;

	function Nr() {
		if (Fn) return Fn;
		var e, t = Oi,
			l = t.length,
			a, n = "value" in rl ? rl.value : rl.textContent,
			u = n.length;
		for (e = 0; e < l && t[e] === n[e]; e++);
		var c = l - e;
		for (a = 1; a <= c && t[l - a] === n[u - a]; a++);
		return Fn = n.slice(e, 1 < a ? 1 - a : void 0)
	}

	function In(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
	}

	function Pn() {
		return !0
	}

	function jr() {
		return !1
	}

	function et(e) {
		function t(l, a, n, u, c) {
			this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = c, this.currentTarget = null;
			for (var f in e) e.hasOwnProperty(f) && (l = e[f], this[f] = l ? l(u) : u[f]);
			return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Pn : jr, this.isPropagationStopped = jr, this
		}
		return T(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var l = this.nativeEvent;
				l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Pn)
			},
			stopPropagation: function() {
				var l = this.nativeEvent;
				l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Pn)
			},
			persist: function() {},
			isPersistent: Pn
		}), t
	}
	var Hl = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function(e) {
				return e.timeStamp || Date.now()
			},
			defaultPrevented: 0,
			isTrusted: 0
		},
		eu = et(Hl),
		Ka = T({}, Hl, {
			view: 0,
			detail: 0
		}),
		Eh = et(Ka),
		Ri, Di, Ja, tu = T({}, Ka, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: Ui,
			button: 0,
			buttons: 0,
			relatedTarget: function(e) {
				return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
			},
			movementX: function(e) {
				return "movementX" in e ? e.movementX : (e !== Ja && (Ja && e.type === "mousemove" ? (Ri = e.screenX - Ja.screenX, Di = e.screenY - Ja.screenY) : Di = Ri = 0, Ja = e), Ri)
			},
			movementY: function(e) {
				return "movementY" in e ? e.movementY : Di
			}
		}),
		Er = et(tu),
		Th = T({}, tu, {
			dataTransfer: 0
		}),
		zh = et(Th),
		Ah = T({}, Ka, {
			relatedTarget: 0
		}),
		Ci = et(Ah),
		_h = T({}, Hl, {
			animationName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		}),
		Mh = et(_h),
		wh = T({}, Hl, {
			clipboardData: function(e) {
				return "clipboardData" in e ? e.clipboardData : window.clipboardData
			}
		}),
		Oh = et(wh),
		Rh = T({}, Hl, {
			data: 0
		}),
		Tr = et(Rh),
		Dh = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified"
		},
		Ch = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta"
		},
		Uh = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey"
		};

	function Hh(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Uh[e]) ? !!t[e] : !1
	}

	function Ui() {
		return Hh
	}
	var Bh = T({}, Ka, {
			key: function(e) {
				if (e.key) {
					var t = Dh[e.key] || e.key;
					if (t !== "Unidentified") return t
				}
				return e.type === "keypress" ? (e = In(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ch[e.keyCode] || "Unidentified" : ""
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: Ui,
			charCode: function(e) {
				return e.type === "keypress" ? In(e) : 0
			},
			keyCode: function(e) {
				return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
			},
			which: function(e) {
				return e.type === "keypress" ? In(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
			}
		}),
		qh = et(Bh),
		Lh = T({}, tu, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0
		}),
		zr = et(Lh),
		Yh = T({}, Ka, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: Ui
		}),
		Gh = et(Yh),
		Xh = T({}, Hl, {
			propertyName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		}),
		Qh = et(Xh),
		Vh = T({}, tu, {
			deltaX: function(e) {
				return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
			},
			deltaY: function(e) {
				return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
			},
			deltaZ: 0,
			deltaMode: 0
		}),
		Zh = et(Vh),
		kh = T({}, Hl, {
			newState: 0,
			oldState: 0
		}),
		Kh = et(kh),
		Jh = [9, 13, 27, 32],
		Hi = Gt && "CompositionEvent" in window,
		$a = null;
	Gt && "documentMode" in document && ($a = document.documentMode);
	var $h = Gt && "TextEvent" in window && !$a,
		Ar = Gt && (!Hi || $a && 8 < $a && 11 >= $a),
		_r = " ",
		Mr = !1;

	function wr(e, t) {
		switch (e) {
			case "keyup":
				return Jh.indexOf(t.keyCode) !== -1;
			case "keydown":
				return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1
		}
	}

	function Or(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
	}
	var ca = !1;

	function Wh(e, t) {
		switch (e) {
			case "compositionend":
				return Or(t);
			case "keypress":
				return t.which !== 32 ? null : (Mr = !0, _r);
			case "textInput":
				return e = t.data, e === _r && Mr ? null : e;
			default:
				return null
		}
	}

	function Fh(e, t) {
		if (ca) return e === "compositionend" || !Hi && wr(e, t) ? (e = Nr(), Fn = Oi = rl = null, ca = !1, e) : null;
		switch (e) {
			case "paste":
				return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which)
				}
				return null;
			case "compositionend":
				return Ar && t.locale !== "ko" ? null : t.data;
			default:
				return null
		}
	}
	var Ih = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};

	function Rr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Ih[e.type] : t === "textarea"
	}

	function Dr(e, t, l, a) {
		ua ? ia ? ia.push(a) : ia = [a] : ua = a, t = Vu(t, "onChange"), 0 < t.length && (l = new eu("onChange", "change", null, l, a), e.push({
			event: l,
			listeners: t
		}))
	}
	var Wa = null,
		Fa = null;

	function Ph(e) {
		vd(e, 0)
	}

	function lu(e) {
		var t = Va(e);
		if (hr(t)) return e
	}

	function Cr(e, t) {
		if (e === "change") return t
	}
	var Ur = !1;
	if (Gt) {
		var Bi;
		if (Gt) {
			var qi = "oninput" in document;
			if (!qi) {
				var Hr = document.createElement("div");
				Hr.setAttribute("oninput", "return;"), qi = typeof Hr.oninput == "function"
			}
			Bi = qi
		} else Bi = !1;
		Ur = Bi && (!document.documentMode || 9 < document.documentMode)
	}

	function Br() {
		Wa && (Wa.detachEvent("onpropertychange", qr), Fa = Wa = null)
	}

	function qr(e) {
		if (e.propertyName === "value" && lu(Fa)) {
			var t = [];
			Dr(t, Fa, e, _i(e)), Sr(Ph, t)
		}
	}

	function e0(e, t, l) {
		e === "focusin" ? (Br(), Wa = t, Fa = l, Wa.attachEvent("onpropertychange", qr)) : e === "focusout" && Br()
	}

	function t0(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return lu(Fa)
	}

	function l0(e, t) {
		if (e === "click") return lu(t)
	}

	function a0(e, t) {
		if (e === "input" || e === "change") return lu(t)
	}

	function n0(e, t) {
		return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
	}
	var rt = typeof Object.is == "function" ? Object.is : n0;

	function Ia(e, t) {
		if (rt(e, t)) return !0;
		if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
		var l = Object.keys(e),
			a = Object.keys(t);
		if (l.length !== a.length) return !1;
		for (a = 0; a < l.length; a++) {
			var n = l[a];
			if (!yi.call(t, n) || !rt(e[n], t[n])) return !1
		}
		return !0
	}

	function Lr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e
	}

	function Yr(e, t) {
		var l = Lr(e);
		e = 0;
		for (var a; l;) {
			if (l.nodeType === 3) {
				if (a = e + l.textContent.length, e <= t && a >= t) return {
					node: l,
					offset: t - e
				};
				e = a
			}
			e: {
				for (; l;) {
					if (l.nextSibling) {
						l = l.nextSibling;
						break e
					}
					l = l.parentNode
				}
				l = void 0
			}
			l = Lr(l)
		}
	}

	function Gr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
	}

	function Xr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = $n(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var l = typeof t.contentWindow.location.href == "string"
			} catch {
				l = !1
			}
			if (l) e = t.contentWindow;
			else break;
			t = $n(e.document)
		}
		return t
	}

	function Li(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
	}
	var u0 = Gt && "documentMode" in document && 11 >= document.documentMode,
		sa = null,
		Yi = null,
		Pa = null,
		Gi = !1;

	function Qr(e, t, l) {
		var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
		Gi || sa == null || sa !== $n(a) || (a = sa, "selectionStart" in a && Li(a) ? a = {
			start: a.selectionStart,
			end: a.selectionEnd
		} : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
			anchorNode: a.anchorNode,
			anchorOffset: a.anchorOffset,
			focusNode: a.focusNode,
			focusOffset: a.focusOffset
		}), Pa && Ia(Pa, a) || (Pa = a, a = Vu(Yi, "onSelect"), 0 < a.length && (t = new eu("onSelect", "select", null, t, l), e.push({
			event: t,
			listeners: a
		}), t.target = sa)))
	}

	function Bl(e, t) {
		var l = {};
		return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l
	}
	var ra = {
			animationend: Bl("Animation", "AnimationEnd"),
			animationiteration: Bl("Animation", "AnimationIteration"),
			animationstart: Bl("Animation", "AnimationStart"),
			transitionrun: Bl("Transition", "TransitionRun"),
			transitionstart: Bl("Transition", "TransitionStart"),
			transitioncancel: Bl("Transition", "TransitionCancel"),
			transitionend: Bl("Transition", "TransitionEnd")
		},
		Xi = {},
		Vr = {};
	Gt && (Vr = document.createElement("div").style, "AnimationEvent" in window || (delete ra.animationend.animation, delete ra.animationiteration.animation, delete ra.animationstart.animation), "TransitionEvent" in window || delete ra.transitionend.transition);

	function ql(e) {
		if (Xi[e]) return Xi[e];
		if (!ra[e]) return e;
		var t = ra[e],
			l;
		for (l in t)
			if (t.hasOwnProperty(l) && l in Vr) return Xi[e] = t[l];
		return e
	}
	var Zr = ql("animationend"),
		kr = ql("animationiteration"),
		Kr = ql("animationstart"),
		i0 = ql("transitionrun"),
		c0 = ql("transitionstart"),
		s0 = ql("transitioncancel"),
		Jr = ql("transitionend"),
		$r = new Map,
		Qi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	Qi.push("scrollEnd");

	function Mt(e, t) {
		$r.set(e, t), Ul(t, [e])
	}
	var au = typeof reportError == "function" ? reportError : function(e) {
			if (typeof window == "object" && typeof window.ErrorEvent == "function") {
				var t = new window.ErrorEvent("error", {
					bubbles: !0,
					cancelable: !0,
					message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
					error: e
				});
				if (!window.dispatchEvent(t)) return
			} else if (typeof process == "object" && typeof process.emit == "function") {
				process.emit("uncaughtException", e);
				return
			}
			console.error(e)
		},
		xt = [],
		oa = 0,
		Vi = 0;

	function nu() {
		for (var e = oa, t = Vi = oa = 0; t < e;) {
			var l = xt[t];
			xt[t++] = null;
			var a = xt[t];
			xt[t++] = null;
			var n = xt[t];
			xt[t++] = null;
			var u = xt[t];
			if (xt[t++] = null, a !== null && n !== null) {
				var c = a.pending;
				c === null ? n.next = n : (n.next = c.next, c.next = n), a.pending = n
			}
			u !== 0 && Wr(l, n, u)
		}
	}

	function uu(e, t, l, a) {
		xt[oa++] = e, xt[oa++] = t, xt[oa++] = l, xt[oa++] = a, Vi |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a)
	}

	function Zi(e, t, l, a) {
		return uu(e, t, l, a), iu(e)
	}

	function Ll(e, t) {
		return uu(e, null, null, t), iu(e)
	}

	function Wr(e, t, l) {
		e.lanes |= l;
		var a = e.alternate;
		a !== null && (a.lanes |= l);
		for (var n = !1, u = e.return; u !== null;) u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = !0)), e = u, u = u.return;
		return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - st(l), e = u.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), u) : null
	}

	function iu(e) {
		if (50 < Nn) throw Nn = 0, es = null, Error(o(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null
	}
	var fa = {};

	function r0(e, t, l, a) {
		this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
	}

	function ot(e, t, l, a) {
		return new r0(e, t, l, a)
	}

	function ki(e) {
		return e = e.prototype, !(!e || !e.isReactComponent)
	}

	function Xt(e, t) {
		var l = e.alternate;
		return l === null ? (l = ot(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l
	}

	function Fr(e, t) {
		e.flags &= 65011714;
		var l = e.alternate;
		return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e
	}

	function cu(e, t, l, a, n, u) {
		var c = 0;
		if (a = e, typeof e == "function") ki(e) && (c = 1);
		else if (typeof e == "string") c = hy(e, l, Y.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else e: switch (e) {
			case Ge:
				return e = ot(31, l, t, n), e.elementType = Ge, e.lanes = u, e;
			case V:
				return Yl(l.children, n, u, t);
			case X:
				c = 8, n |= 24;
				break;
			case k:
				return e = ot(12, l, t, n | 2), e.elementType = k, e.lanes = u, e;
			case Se:
				return e = ot(13, l, t, n), e.elementType = Se, e.lanes = u, e;
			case Ae:
				return e = ot(19, l, t, n), e.elementType = Ae, e.lanes = u, e;
			default:
				if (typeof e == "object" && e !== null) switch (e.$$typeof) {
					case J:
						c = 10;
						break e;
					case L:
						c = 9;
						break e;
					case Ne:
						c = 11;
						break e;
					case I:
						c = 14;
						break e;
					case we:
						c = 16, a = null;
						break e
				}
				c = 29, l = Error(o(130, e === null ? "null" : typeof e, "")), a = null
		}
		return t = ot(c, l, t, n), t.elementType = e, t.type = a, t.lanes = u, t
	}

	function Yl(e, t, l, a) {
		return e = ot(7, e, a, t), e.lanes = l, e
	}

	function Ki(e, t, l) {
		return e = ot(6, e, null, t), e.lanes = l, e
	}

	function Ir(e) {
		var t = ot(18, null, null, 0);
		return t.stateNode = e, t
	}

	function Ji(e, t, l) {
		return t = ot(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t
	}
	var Pr = new WeakMap;

	function bt(e, t) {
		if (typeof e == "object" && e !== null) {
			var l = Pr.get(e);
			return l !== void 0 ? l : (t = {
				value: e,
				source: t,
				stack: Is(t)
			}, Pr.set(e, t), t)
		}
		return {
			value: e,
			source: t,
			stack: Is(t)
		}
	}
	var da = [],
		ma = 0,
		su = null,
		en = 0,
		St = [],
		Nt = 0,
		ol = null,
		Dt = 1,
		Ct = "";

	function Qt(e, t) {
		da[ma++] = en, da[ma++] = su, su = e, en = t
	}

	function eo(e, t, l) {
		St[Nt++] = Dt, St[Nt++] = Ct, St[Nt++] = ol, ol = e;
		var a = Dt;
		e = Ct;
		var n = 32 - st(a) - 1;
		a &= ~(1 << n), l += 1;
		var u = 32 - st(t) + n;
		if (30 < u) {
			var c = n - n % 5;
			u = (a & (1 << c) - 1).toString(32), a >>= c, n -= c, Dt = 1 << 32 - st(t) + n | l << n | a, Ct = u + e
		} else Dt = 1 << u | l << n | a, Ct = e
	}

	function $i(e) {
		e.return !== null && (Qt(e, 1), eo(e, 1, 0))
	}

	function Wi(e) {
		for (; e === su;) su = da[--ma], da[ma] = null, en = da[--ma], da[ma] = null;
		for (; e === ol;) ol = St[--Nt], St[Nt] = null, Ct = St[--Nt], St[Nt] = null, Dt = St[--Nt], St[Nt] = null
	}

	function to(e, t) {
		St[Nt++] = Dt, St[Nt++] = Ct, St[Nt++] = ol, Dt = t.id, Ct = t.overflow, ol = e
	}
	var Qe = null,
		je = null,
		se = !1,
		fl = null,
		jt = !1,
		Fi = Error(o(519));

	function dl(e) {
		var t = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
		throw tn(bt(t, e)), Fi
	}

	function lo(e) {
		var t = e.stateNode,
			l = e.type,
			a = e.memoizedProps;
		switch (t[Xe] = e, t[Pe] = a, l) {
			case "dialog":
				ue("cancel", t), ue("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				ue("load", t);
				break;
			case "video":
			case "audio":
				for (l = 0; l < En.length; l++) ue(En[l], t);
				break;
			case "source":
				ue("error", t);
				break;
			case "img":
			case "image":
			case "link":
				ue("error", t), ue("load", t);
				break;
			case "details":
				ue("toggle", t);
				break;
			case "input":
				ue("invalid", t), yr(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
				break;
			case "select":
				ue("invalid", t);
				break;
			case "textarea":
				ue("invalid", t), vr(t, a.value, a.defaultValue, a.children)
		}
		l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || Sd(t.textContent, l) ? (a.popover != null && (ue("beforetoggle", t), ue("toggle", t)), a.onScroll != null && ue("scroll", t), a.onScrollEnd != null && ue("scrollend", t), a.onClick != null && (t.onclick = Yt), t = !0) : t = !1, t || dl(e, !0)
	}

	function ao(e) {
		for (Qe = e.return; Qe;) switch (Qe.tag) {
			case 5:
			case 31:
			case 13:
				jt = !1;
				return;
			case 27:
			case 3:
				jt = !0;
				return;
			default:
				Qe = Qe.return
		}
	}

	function ha(e) {
		if (e !== Qe) return !1;
		if (!se) return ao(e), se = !0, !1;
		var t = e.tag,
			l;
		if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || ys(e.type, e.memoizedProps)), l = !l), l && je && dl(e), ao(e), t === 13) {
			if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
			je = wd(e)
		} else if (t === 31) {
			if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
			je = wd(e)
		} else t === 27 ? (t = je, zl(e.type) ? (e = bs, bs = null, je = e) : je = t) : je = Qe ? Tt(e.stateNode.nextSibling) : null;
		return !0
	}

	function Gl() {
		je = Qe = null, se = !1
	}

	function Ii() {
		var e = fl;
		return e !== null && (nt === null ? nt = e : nt.push.apply(nt, e), fl = null), e
	}

	function tn(e) {
		fl === null ? fl = [e] : fl.push(e)
	}
	var Pi = v(null),
		Xl = null,
		Vt = null;

	function ml(e, t, l) {
		H(Pi, t._currentValue), t._currentValue = l
	}

	function Zt(e) {
		e._currentValue = Pi.current, C(Pi)
	}

	function ec(e, t, l) {
		for (; e !== null;) {
			var a = e.alternate;
			if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
			e = e.return
		}
	}

	function tc(e, t, l, a) {
		var n = e.child;
		for (n !== null && (n.return = e); n !== null;) {
			var u = n.dependencies;
			if (u !== null) {
				var c = n.child;
				u = u.firstContext;
				e: for (; u !== null;) {
					var f = u;
					u = n;
					for (var h = 0; h < t.length; h++)
						if (f.context === t[h]) {
							u.lanes |= l, f = u.alternate, f !== null && (f.lanes |= l), ec(u.return, l, e), a || (c = null);
							break e
						} u = f.next
				}
			} else if (n.tag === 18) {
				if (c = n.return, c === null) throw Error(o(341));
				c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), ec(c, l, e), c = null
			} else c = n.child;
			if (c !== null) c.return = n;
			else
				for (c = n; c !== null;) {
					if (c === e) {
						c = null;
						break
					}
					if (n = c.sibling, n !== null) {
						n.return = c.return, c = n;
						break
					}
					c = c.return
				}
			n = c
		}
	}

	function ya(e, t, l, a) {
		e = null;
		for (var n = t, u = !1; n !== null;) {
			if (!u) {
				if ((n.flags & 524288) !== 0) u = !0;
				else if ((n.flags & 262144) !== 0) break
			}
			if (n.tag === 10) {
				var c = n.alternate;
				if (c === null) throw Error(o(387));
				if (c = c.memoizedProps, c !== null) {
					var f = n.type;
					rt(n.pendingProps.value, c.value) || (e !== null ? e.push(f) : e = [f])
				}
			} else if (n === de.current) {
				if (c = n.alternate, c === null) throw Error(o(387));
				c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Mn) : e = [Mn])
			}
			n = n.return
		}
		e !== null && tc(t, e, l, a), t.flags |= 262144
	}

	function ru(e) {
		for (e = e.firstContext; e !== null;) {
			if (!rt(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next
		}
		return !1
	}

	function Ql(e) {
		Xl = e, Vt = null, e = e.dependencies, e !== null && (e.firstContext = null)
	}

	function Ve(e) {
		return no(Xl, e)
	}

	function ou(e, t) {
		return Xl === null && Ql(e), no(e, t)
	}

	function no(e, t) {
		var l = t._currentValue;
		if (t = {
				context: t,
				memoizedValue: l,
				next: null
			}, Vt === null) {
			if (e === null) throw Error(o(308));
			Vt = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288
		} else Vt = Vt.next = t;
		return l
	}
	var o0 = typeof AbortController < "u" ? AbortController : function() {
			var e = [],
				t = this.signal = {
					aborted: !1,
					addEventListener: function(l, a) {
						e.push(a)
					}
				};
			this.abort = function() {
				t.aborted = !0, e.forEach(function(l) {
					return l()
				})
			}
		},
		f0 = i.unstable_scheduleCallback,
		d0 = i.unstable_NormalPriority,
		Ce = {
			$$typeof: J,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0
		};

	function lc() {
		return {
			controller: new o0,
			data: new Map,
			refCount: 0
		}
	}

	function ln(e) {
		e.refCount--, e.refCount === 0 && f0(d0, function() {
			e.controller.abort()
		})
	}
	var an = null,
		ac = 0,
		ga = 0,
		va = null;

	function m0(e, t) {
		if (an === null) {
			var l = an = [];
			ac = 0, ga = is(), va = {
				status: "pending",
				value: void 0,
				then: function(a) {
					l.push(a)
				}
			}
		}
		return ac++, t.then(uo, uo), t
	}

	function uo() {
		if (--ac === 0 && an !== null) {
			va !== null && (va.status = "fulfilled");
			var e = an;
			an = null, ga = 0, va = null;
			for (var t = 0; t < e.length; t++)(0, e[t])()
		}
	}

	function h0(e, t) {
		var l = [],
			a = {
				status: "pending",
				value: null,
				reason: null,
				then: function(n) {
					l.push(n)
				}
			};
		return e.then(function() {
			a.status = "fulfilled", a.value = t;
			for (var n = 0; n < l.length; n++)(0, l[n])(t)
		}, function(n) {
			for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)(0, l[n])(void 0)
		}), a
	}
	var io = w.S;
	w.S = function(e, t) {
		Zf = it(), typeof t == "object" && t !== null && typeof t.then == "function" && m0(e, t), io !== null && io(e, t)
	};
	var Vl = v(null);

	function nc() {
		var e = Vl.current;
		return e !== null ? e : be.pooledCache
	}

	function fu(e, t) {
		t === null ? H(Vl, Vl.current) : H(Vl, t.pool)
	}

	function co() {
		var e = nc();
		return e === null ? null : {
			parent: Ce._currentValue,
			pool: e
		}
	}
	var pa = Error(o(460)),
		uc = Error(o(474)),
		du = Error(o(542)),
		mu = {
			then: function() {}
		};

	function so(e) {
		return e = e.status, e === "fulfilled" || e === "rejected"
	}

	function ro(e, t, l) {
		switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Yt, Yt), t = l), t.status) {
			case "fulfilled":
				return t.value;
			case "rejected":
				throw e = t.reason, fo(e), e;
			default:
				if (typeof t.status == "string") t.then(Yt, Yt);
				else {
					if (e = be, e !== null && 100 < e.shellSuspendCounter) throw Error(o(482));
					e = t, e.status = "pending", e.then(function(a) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = a
						}
					}, function(a) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = a
						}
					})
				}
				switch (t.status) {
					case "fulfilled":
						return t.value;
					case "rejected":
						throw e = t.reason, fo(e), e
				}
				throw kl = t, pa
		}
	}

	function Zl(e) {
		try {
			var t = e._init;
			return t(e._payload)
		} catch (l) {
			throw l !== null && typeof l == "object" && typeof l.then == "function" ? (kl = l, pa) : l
		}
	}
	var kl = null;

	function oo() {
		if (kl === null) throw Error(o(459));
		var e = kl;
		return kl = null, e
	}

	function fo(e) {
		if (e === pa || e === du) throw Error(o(483))
	}
	var xa = null,
		nn = 0;

	function hu(e) {
		var t = nn;
		return nn += 1, xa === null && (xa = []), ro(xa, e, t)
	}

	function un(e, t) {
		t = t.props.ref, e.ref = t !== void 0 ? t : null
	}

	function yu(e, t) {
		throw t.$$typeof === B ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
	}

	function mo(e) {
		function t(x, g) {
			if (e) {
				var S = x.deletions;
				S === null ? (x.deletions = [g], x.flags |= 16) : S.push(g)
			}
		}

		function l(x, g) {
			if (!e) return null;
			for (; g !== null;) t(x, g), g = g.sibling;
			return null
		}

		function a(x) {
			for (var g = new Map; x !== null;) x.key !== null ? g.set(x.key, x) : g.set(x.index, x), x = x.sibling;
			return g
		}

		function n(x, g) {
			return x = Xt(x, g), x.index = 0, x.sibling = null, x
		}

		function u(x, g, S) {
			return x.index = S, e ? (S = x.alternate, S !== null ? (S = S.index, S < g ? (x.flags |= 67108866, g) : S) : (x.flags |= 67108866, g)) : (x.flags |= 1048576, g)
		}

		function c(x) {
			return e && x.alternate === null && (x.flags |= 67108866), x
		}

		function f(x, g, S, O) {
			return g === null || g.tag !== 6 ? (g = Ki(S, x.mode, O), g.return = x, g) : (g = n(g, S), g.return = x, g)
		}

		function h(x, g, S, O) {
			var Z = S.type;
			return Z === V ? A(x, g, S.props.children, O, S.key) : g !== null && (g.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === we && Zl(Z) === g.type) ? (g = n(g, S.props), un(g, S), g.return = x, g) : (g = cu(S.type, S.key, S.props, null, x.mode, O), un(g, S), g.return = x, g)
		}

		function j(x, g, S, O) {
			return g === null || g.tag !== 4 || g.stateNode.containerInfo !== S.containerInfo || g.stateNode.implementation !== S.implementation ? (g = Ji(S, x.mode, O), g.return = x, g) : (g = n(g, S.children || []), g.return = x, g)
		}

		function A(x, g, S, O, Z) {
			return g === null || g.tag !== 7 ? (g = Yl(S, x.mode, O, Z), g.return = x, g) : (g = n(g, S), g.return = x, g)
		}

		function D(x, g, S) {
			if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint") return g = Ki("" + g, x.mode, S), g.return = x, g;
			if (typeof g == "object" && g !== null) {
				switch (g.$$typeof) {
					case Q:
						return S = cu(g.type, g.key, g.props, null, x.mode, S), un(S, g), S.return = x, S;
					case W:
						return g = Ji(g, x.mode, S), g.return = x, g;
					case we:
						return g = Zl(g), D(x, g, S)
				}
				if (_t(g) || Ie(g)) return g = Yl(g, x.mode, S, null), g.return = x, g;
				if (typeof g.then == "function") return D(x, hu(g), S);
				if (g.$$typeof === J) return D(x, ou(x, g), S);
				yu(x, g)
			}
			return null
		}

		function E(x, g, S, O) {
			var Z = g !== null ? g.key : null;
			if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint") return Z !== null ? null : f(x, g, "" + S, O);
			if (typeof S == "object" && S !== null) {
				switch (S.$$typeof) {
					case Q:
						return S.key === Z ? h(x, g, S, O) : null;
					case W:
						return S.key === Z ? j(x, g, S, O) : null;
					case we:
						return S = Zl(S), E(x, g, S, O)
				}
				if (_t(S) || Ie(S)) return Z !== null ? null : A(x, g, S, O, null);
				if (typeof S.then == "function") return E(x, g, hu(S), O);
				if (S.$$typeof === J) return E(x, g, ou(x, S), O);
				yu(x, S)
			}
			return null
		}

		function z(x, g, S, O, Z) {
			if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint") return x = x.get(S) || null, f(g, x, "" + O, Z);
			if (typeof O == "object" && O !== null) {
				switch (O.$$typeof) {
					case Q:
						return x = x.get(O.key === null ? S : O.key) || null, h(g, x, O, Z);
					case W:
						return x = x.get(O.key === null ? S : O.key) || null, j(g, x, O, Z);
					case we:
						return O = Zl(O), z(x, g, S, O, Z)
				}
				if (_t(O) || Ie(O)) return x = x.get(S) || null, A(g, x, O, Z, null);
				if (typeof O.then == "function") return z(x, g, S, hu(O), Z);
				if (O.$$typeof === J) return z(x, g, S, ou(g, O), Z);
				yu(g, O)
			}
			return null
		}

		function q(x, g, S, O) {
			for (var Z = null, re = null, G = g, te = g = 0, ce = null; G !== null && te < S.length; te++) {
				G.index > te ? (ce = G, G = null) : ce = G.sibling;
				var oe = E(x, G, S[te], O);
				if (oe === null) {
					G === null && (G = ce);
					break
				}
				e && G && oe.alternate === null && t(x, G), g = u(oe, g, te), re === null ? Z = oe : re.sibling = oe, re = oe, G = ce
			}
			if (te === S.length) return l(x, G), se && Qt(x, te), Z;
			if (G === null) {
				for (; te < S.length; te++) G = D(x, S[te], O), G !== null && (g = u(G, g, te), re === null ? Z = G : re.sibling = G, re = G);
				return se && Qt(x, te), Z
			}
			for (G = a(G); te < S.length; te++) ce = z(G, x, te, S[te], O), ce !== null && (e && ce.alternate !== null && G.delete(ce.key === null ? te : ce.key), g = u(ce, g, te), re === null ? Z = ce : re.sibling = ce, re = ce);
			return e && G.forEach(function(Ol) {
				return t(x, Ol)
			}), se && Qt(x, te), Z
		}

		function K(x, g, S, O) {
			if (S == null) throw Error(o(151));
			for (var Z = null, re = null, G = g, te = g = 0, ce = null, oe = S.next(); G !== null && !oe.done; te++, oe = S.next()) {
				G.index > te ? (ce = G, G = null) : ce = G.sibling;
				var Ol = E(x, G, oe.value, O);
				if (Ol === null) {
					G === null && (G = ce);
					break
				}
				e && G && Ol.alternate === null && t(x, G), g = u(Ol, g, te), re === null ? Z = Ol : re.sibling = Ol, re = Ol, G = ce
			}
			if (oe.done) return l(x, G), se && Qt(x, te), Z;
			if (G === null) {
				for (; !oe.done; te++, oe = S.next()) oe = D(x, oe.value, O), oe !== null && (g = u(oe, g, te), re === null ? Z = oe : re.sibling = oe, re = oe);
				return se && Qt(x, te), Z
			}
			for (G = a(G); !oe.done; te++, oe = S.next()) oe = z(G, x, te, oe.value, O), oe !== null && (e && oe.alternate !== null && G.delete(oe.key === null ? te : oe.key), g = u(oe, g, te), re === null ? Z = oe : re.sibling = oe, re = oe);
			return e && G.forEach(function(Ty) {
				return t(x, Ty)
			}), se && Qt(x, te), Z
		}

		function pe(x, g, S, O) {
			if (typeof S == "object" && S !== null && S.type === V && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
				switch (S.$$typeof) {
					case Q:
						e: {
							for (var Z = S.key; g !== null;) {
								if (g.key === Z) {
									if (Z = S.type, Z === V) {
										if (g.tag === 7) {
											l(x, g.sibling), O = n(g, S.props.children), O.return = x, x = O;
											break e
										}
									} else if (g.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === we && Zl(Z) === g.type) {
										l(x, g.sibling), O = n(g, S.props), un(O, S), O.return = x, x = O;
										break e
									}
									l(x, g);
									break
								} else t(x, g);
								g = g.sibling
							}
							S.type === V ? (O = Yl(S.props.children, x.mode, O, S.key), O.return = x, x = O) : (O = cu(S.type, S.key, S.props, null, x.mode, O), un(O, S), O.return = x, x = O)
						}
						return c(x);
					case W:
						e: {
							for (Z = S.key; g !== null;) {
								if (g.key === Z)
									if (g.tag === 4 && g.stateNode.containerInfo === S.containerInfo && g.stateNode.implementation === S.implementation) {
										l(x, g.sibling), O = n(g, S.children || []), O.return = x, x = O;
										break e
									} else {
										l(x, g);
										break
									}
								else t(x, g);
								g = g.sibling
							}
							O = Ji(S, x.mode, O),
							O.return = x,
							x = O
						}
						return c(x);
					case we:
						return S = Zl(S), pe(x, g, S, O)
				}
				if (_t(S)) return q(x, g, S, O);
				if (Ie(S)) {
					if (Z = Ie(S), typeof Z != "function") throw Error(o(150));
					return S = Z.call(S), K(x, g, S, O)
				}
				if (typeof S.then == "function") return pe(x, g, hu(S), O);
				if (S.$$typeof === J) return pe(x, g, ou(x, S), O);
				yu(x, S)
			}
			return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, g !== null && g.tag === 6 ? (l(x, g.sibling), O = n(g, S), O.return = x, x = O) : (l(x, g), O = Ki(S, x.mode, O), O.return = x, x = O), c(x)) : l(x, g)
		}
		return function(x, g, S, O) {
			try {
				nn = 0;
				var Z = pe(x, g, S, O);
				return xa = null, Z
			} catch (G) {
				if (G === pa || G === du) throw G;
				var re = ot(29, G, null, x.mode);
				return re.lanes = O, re.return = x, re
			}
		}
	}
	var Kl = mo(!0),
		ho = mo(!1),
		hl = !1;

	function ic(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		}
	}

	function cc(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		})
	}

	function yl(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		}
	}

	function gl(e, t, l) {
		var a = e.updateQueue;
		if (a === null) return null;
		if (a = a.shared, (fe & 2) !== 0) {
			var n = a.pending;
			return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = iu(e), Wr(e, null, l), t
		}
		return uu(e, a, t, l), iu(e)
	}

	function cn(e, t, l) {
		if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
			var a = t.lanes;
			a &= e.pendingLanes, l |= a, t.lanes = l, nr(e, l)
		}
	}

	function sc(e, t) {
		var l = e.updateQueue,
			a = e.alternate;
		if (a !== null && (a = a.updateQueue, l === a)) {
			var n = null,
				u = null;
			if (l = l.firstBaseUpdate, l !== null) {
				do {
					var c = {
						lane: l.lane,
						tag: l.tag,
						payload: l.payload,
						callback: null,
						next: null
					};
					u === null ? n = u = c : u = u.next = c, l = l.next
				} while (l !== null);
				u === null ? n = u = t : u = u.next = t
			} else n = u = t;
			l = {
				baseState: a.baseState,
				firstBaseUpdate: n,
				lastBaseUpdate: u,
				shared: a.shared,
				callbacks: a.callbacks
			}, e.updateQueue = l;
			return
		}
		e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t
	}
	var rc = !1;

	function sn() {
		if (rc) {
			var e = va;
			if (e !== null) throw e
		}
	}

	function rn(e, t, l, a) {
		rc = !1;
		var n = e.updateQueue;
		hl = !1;
		var u = n.firstBaseUpdate,
			c = n.lastBaseUpdate,
			f = n.shared.pending;
		if (f !== null) {
			n.shared.pending = null;
			var h = f,
				j = h.next;
			h.next = null, c === null ? u = j : c.next = j, c = h;
			var A = e.alternate;
			A !== null && (A = A.updateQueue, f = A.lastBaseUpdate, f !== c && (f === null ? A.firstBaseUpdate = j : f.next = j, A.lastBaseUpdate = h))
		}
		if (u !== null) {
			var D = n.baseState;
			c = 0, A = j = h = null, f = u;
			do {
				var E = f.lane & -536870913,
					z = E !== f.lane;
				if (z ? (ie & E) === E : (a & E) === E) {
					E !== 0 && E === ga && (rc = !0), A !== null && (A = A.next = {
						lane: 0,
						tag: f.tag,
						payload: f.payload,
						callback: null,
						next: null
					});
					e: {
						var q = e,
							K = f;E = t;
						var pe = l;
						switch (K.tag) {
							case 1:
								if (q = K.payload, typeof q == "function") {
									D = q.call(pe, D, E);
									break e
								}
								D = q;
								break e;
							case 3:
								q.flags = q.flags & -65537 | 128;
							case 0:
								if (q = K.payload, E = typeof q == "function" ? q.call(pe, D, E) : q, E == null) break e;
								D = T({}, D, E);
								break e;
							case 2:
								hl = !0
						}
					}
					E = f.callback, E !== null && (e.flags |= 64, z && (e.flags |= 8192), z = n.callbacks, z === null ? n.callbacks = [E] : z.push(E))
				} else z = {
					lane: E,
					tag: f.tag,
					payload: f.payload,
					callback: f.callback,
					next: null
				}, A === null ? (j = A = z, h = D) : A = A.next = z, c |= E;
				if (f = f.next, f === null) {
					if (f = n.shared.pending, f === null) break;
					z = f, f = z.next, z.next = null, n.lastBaseUpdate = z, n.shared.pending = null
				}
			} while (!0);
			A === null && (h = D), n.baseState = h, n.firstBaseUpdate = j, n.lastBaseUpdate = A, u === null && (n.shared.lanes = 0), Sl |= c, e.lanes = c, e.memoizedState = D
		}
	}

	function yo(e, t) {
		if (typeof e != "function") throw Error(o(191, e));
		e.call(t)
	}

	function go(e, t) {
		var l = e.callbacks;
		if (l !== null)
			for (e.callbacks = null, e = 0; e < l.length; e++) yo(l[e], t)
	}
	var ba = v(null),
		gu = v(0);

	function vo(e, t) {
		e = el, H(gu, e), H(ba, t), el = e | t.baseLanes
	}

	function oc() {
		H(gu, el), H(ba, ba.current)
	}

	function fc() {
		el = gu.current, C(ba), C(gu)
	}
	var ft = v(null),
		Et = null;

	function vl(e) {
		var t = e.alternate;
		H(Re, Re.current & 1), H(ft, e), Et === null && (t === null || ba.current !== null || t.memoizedState !== null) && (Et = e)
	}

	function dc(e) {
		H(Re, Re.current), H(ft, e), Et === null && (Et = e)
	}

	function po(e) {
		e.tag === 22 ? (H(Re, Re.current), H(ft, e), Et === null && (Et = e)) : pl()
	}

	function pl() {
		H(Re, Re.current), H(ft, ft.current)
	}

	function dt(e) {
		C(ft), Et === e && (Et = null), C(Re)
	}
	var Re = v(0);

	function vu(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var l = t.memoizedState;
				if (l !== null && (l = l.dehydrated, l === null || ps(l) || xs(l))) return t
			} else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
				if ((t.flags & 128) !== 0) return t
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return
			}
			t.sibling.return = t.return, t = t.sibling
		}
		return null
	}
	var kt = 0,
		ee = null,
		ge = null,
		Ue = null,
		pu = !1,
		Sa = !1,
		Jl = !1,
		xu = 0,
		on = 0,
		Na = null,
		y0 = 0;

	function _e() {
		throw Error(o(321))
	}

	function mc(e, t) {
		if (t === null) return !1;
		for (var l = 0; l < t.length && l < e.length; l++)
			if (!rt(e[l], t[l])) return !1;
		return !0
	}

	function hc(e, t, l, a, n, u) {
		return kt = u, ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, w.H = e === null || e.memoizedState === null ? tf : Mc, Jl = !1, u = l(a, n), Jl = !1, Sa && (u = bo(t, l, a, n)), xo(e), u
	}

	function xo(e) {
		w.H = mn;
		var t = ge !== null && ge.next !== null;
		if (kt = 0, Ue = ge = ee = null, pu = !1, on = 0, Na = null, t) throw Error(o(300));
		e === null || He || (e = e.dependencies, e !== null && ru(e) && (He = !0))
	}

	function bo(e, t, l, a) {
		ee = e;
		var n = 0;
		do {
			if (Sa && (Na = null), on = 0, Sa = !1, 25 <= n) throw Error(o(301));
			if (n += 1, Ue = ge = null, e.updateQueue != null) {
				var u = e.updateQueue;
				u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0)
			}
			w.H = lf, u = t(l, a)
		} while (Sa);
		return u
	}

	function g0() {
		var e = w.H,
			t = e.useState()[0];
		return t = typeof t.then == "function" ? fn(t) : t, e = e.useState()[0], (ge !== null ? ge.memoizedState : null) !== e && (ee.flags |= 1024), t
	}

	function yc() {
		var e = xu !== 0;
		return xu = 0, e
	}

	function gc(e, t, l) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l
	}

	function vc(e) {
		if (pu) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next
			}
			pu = !1
		}
		kt = 0, Ue = ge = ee = null, Sa = !1, on = xu = 0, Na = null
	}

	function We() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Ue === null ? ee.memoizedState = Ue = e : Ue = Ue.next = e, Ue
	}

	function De() {
		if (ge === null) {
			var e = ee.alternate;
			e = e !== null ? e.memoizedState : null
		} else e = ge.next;
		var t = Ue === null ? ee.memoizedState : Ue.next;
		if (t !== null) Ue = t, ge = e;
		else {
			if (e === null) throw ee.alternate === null ? Error(o(467)) : Error(o(310));
			ge = e, e = {
				memoizedState: ge.memoizedState,
				baseState: ge.baseState,
				baseQueue: ge.baseQueue,
				queue: ge.queue,
				next: null
			}, Ue === null ? ee.memoizedState = Ue = e : Ue = Ue.next = e
		}
		return Ue
	}

	function bu() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		}
	}

	function fn(e) {
		var t = on;
		return on += 1, Na === null && (Na = []), e = ro(Na, e, t), t = ee, (Ue === null ? t.memoizedState : Ue.next) === null && (t = t.alternate, w.H = t === null || t.memoizedState === null ? tf : Mc), e
	}

	function Su(e) {
		if (e !== null && typeof e == "object") {
			if (typeof e.then == "function") return fn(e);
			if (e.$$typeof === J) return Ve(e)
		}
		throw Error(o(438, String(e)))
	}

	function pc(e) {
		var t = null,
			l = ee.updateQueue;
		if (l !== null && (t = l.memoCache), t == null) {
			var a = ee.alternate;
			a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
				data: a.data.map(function(n) {
					return n.slice()
				}),
				index: 0
			})))
		}
		if (t == null && (t = {
				data: [],
				index: 0
			}), l === null && (l = bu(), ee.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
			for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = gt;
		return t.index++, l
	}

	function Kt(e, t) {
		return typeof t == "function" ? t(e) : t
	}

	function Nu(e) {
		var t = De();
		return xc(t, ge, e)
	}

	function xc(e, t, l) {
		var a = e.queue;
		if (a === null) throw Error(o(311));
		a.lastRenderedReducer = l;
		var n = e.baseQueue,
			u = a.pending;
		if (u !== null) {
			if (n !== null) {
				var c = n.next;
				n.next = u.next, u.next = c
			}
			t.baseQueue = n = u, a.pending = null
		}
		if (u = e.baseState, n === null) e.memoizedState = u;
		else {
			t = n.next;
			var f = c = null,
				h = null,
				j = t,
				A = !1;
			do {
				var D = j.lane & -536870913;
				if (D !== j.lane ? (ie & D) === D : (kt & D) === D) {
					var E = j.revertLane;
					if (E === 0) h !== null && (h = h.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: j.action,
						hasEagerState: j.hasEagerState,
						eagerState: j.eagerState,
						next: null
					}), D === ga && (A = !0);
					else if ((kt & E) === E) {
						j = j.next, E === ga && (A = !0);
						continue
					} else D = {
						lane: 0,
						revertLane: j.revertLane,
						gesture: null,
						action: j.action,
						hasEagerState: j.hasEagerState,
						eagerState: j.eagerState,
						next: null
					}, h === null ? (f = h = D, c = u) : h = h.next = D, ee.lanes |= E, Sl |= E;
					D = j.action, Jl && l(u, D), u = j.hasEagerState ? j.eagerState : l(u, D)
				} else E = {
					lane: D,
					revertLane: j.revertLane,
					gesture: j.gesture,
					action: j.action,
					hasEagerState: j.hasEagerState,
					eagerState: j.eagerState,
					next: null
				}, h === null ? (f = h = E, c = u) : h = h.next = E, ee.lanes |= D, Sl |= D;
				j = j.next
			} while (j !== null && j !== t);
			if (h === null ? c = u : h.next = f, !rt(u, e.memoizedState) && (He = !0, A && (l = va, l !== null))) throw l;
			e.memoizedState = u, e.baseState = c, e.baseQueue = h, a.lastRenderedState = u
		}
		return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]
	}

	function bc(e) {
		var t = De(),
			l = t.queue;
		if (l === null) throw Error(o(311));
		l.lastRenderedReducer = e;
		var a = l.dispatch,
			n = l.pending,
			u = t.memoizedState;
		if (n !== null) {
			l.pending = null;
			var c = n = n.next;
			do u = e(u, c.action), c = c.next; while (c !== n);
			rt(u, t.memoizedState) || (He = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u
		}
		return [u, a]
	}

	function So(e, t, l) {
		var a = ee,
			n = De(),
			u = se;
		if (u) {
			if (l === void 0) throw Error(o(407));
			l = l()
		} else l = t();
		var c = !rt((ge || n).memoizedState, l);
		if (c && (n.memoizedState = l, He = !0), n = n.queue, jc(Eo.bind(null, a, n, e), [e]), n.getSnapshot !== t || c || Ue !== null && Ue.memoizedState.tag & 1) {
			if (a.flags |= 2048, ja(9, {
					destroy: void 0
				}, jo.bind(null, a, n, l, t), null), be === null) throw Error(o(349));
			u || (kt & 127) !== 0 || No(a, t, l)
		}
		return l
	}

	function No(e, t, l) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: l
		}, t = ee.updateQueue, t === null ? (t = bu(), ee.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e))
	}

	function jo(e, t, l, a) {
		t.value = l, t.getSnapshot = a, To(t) && zo(e)
	}

	function Eo(e, t, l) {
		return l(function() {
			To(t) && zo(e)
		})
	}

	function To(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var l = t();
			return !rt(e, l)
		} catch {
			return !0
		}
	}

	function zo(e) {
		var t = Ll(e, 2);
		t !== null && ut(t, e, 2)
	}

	function Sc(e) {
		var t = We();
		if (typeof e == "function") {
			var l = e;
			if (e = l(), Jl) {
				cl(!0);
				try {
					l()
				} finally {
					cl(!1)
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Kt,
			lastRenderedState: e
		}, t
	}

	function Ao(e, t, l, a) {
		return e.baseState = l, xc(e, ge, typeof a == "function" ? a : Kt)
	}

	function v0(e, t, l, a, n) {
		if (Tu(e)) throw Error(o(485));
		if (e = t.action, e !== null) {
			var u = {
				payload: n,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(c) {
					u.listeners.push(c)
				}
			};
			w.T !== null ? l(!0) : u.isTransition = !1, a(u), l = t.pending, l === null ? (u.next = t.pending = u, _o(t, u)) : (u.next = l.next, t.pending = l.next = u)
		}
	}

	function _o(e, t) {
		var l = t.action,
			a = t.payload,
			n = e.state;
		if (t.isTransition) {
			var u = w.T,
				c = {};
			w.T = c;
			try {
				var f = l(n, a),
					h = w.S;
				h !== null && h(c, f), Mo(e, t, f)
			} catch (j) {
				Nc(e, t, j)
			} finally {
				u !== null && c.types !== null && (u.types = c.types), w.T = u
			}
		} else try {
			u = l(n, a), Mo(e, t, u)
		} catch (j) {
			Nc(e, t, j)
		}
	}

	function Mo(e, t, l) {
		l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
			wo(e, t, a)
		}, function(a) {
			return Nc(e, t, a)
		}) : wo(e, t, l)
	}

	function wo(e, t, l) {
		t.status = "fulfilled", t.value = l, Oo(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, _o(e, l)))
	}

	function Nc(e, t, l) {
		var a = e.pending;
		if (e.pending = null, a !== null) {
			a = a.next;
			do t.status = "rejected", t.reason = l, Oo(t), t = t.next; while (t !== a)
		}
		e.action = null
	}

	function Oo(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++)(0, e[t])()
	}

	function Ro(e, t) {
		return t
	}

	function Do(e, t) {
		if (se) {
			var l = be.formState;
			if (l !== null) {
				e: {
					var a = ee;
					if (se) {
						if (je) {
							t: {
								for (var n = je, u = jt; n.nodeType !== 8;) {
									if (!u) {
										n = null;
										break t
									}
									if (n = Tt(n.nextSibling), n === null) {
										n = null;
										break t
									}
								}
								u = n.data,
								n = u === "F!" || u === "F" ? n : null
							}
							if (n) {
								je = Tt(n.nextSibling), a = n.data === "F!";
								break e
							}
						}
						dl(a)
					}
					a = !1
				}
				a && (t = l[0])
			}
		}
		return l = We(), l.memoizedState = l.baseState = t, a = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Ro,
			lastRenderedState: t
		}, l.queue = a, l = Io.bind(null, ee, a), a.dispatch = l, a = Sc(!1), u = _c.bind(null, ee, !1, a.queue), a = We(), n = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, a.queue = n, l = v0.bind(null, ee, n, u, l), n.dispatch = l, a.memoizedState = e, [t, l, !1]
	}

	function Co(e) {
		var t = De();
		return Uo(t, ge, e)
	}

	function Uo(e, t, l) {
		if (t = xc(e, t, Ro)[0], e = Nu(Kt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
			var a = fn(t)
		} catch (c) {
			throw c === pa ? du : c
		} else a = t;
		t = De();
		var n = t.queue,
			u = n.dispatch;
		return l !== t.memoizedState && (ee.flags |= 2048, ja(9, {
			destroy: void 0
		}, p0.bind(null, n, l), null)), [a, u, e]
	}

	function p0(e, t) {
		e.action = t
	}

	function Ho(e) {
		var t = De(),
			l = ge;
		if (l !== null) return Uo(t, l, e);
		De(), t = t.memoizedState, l = De();
		var a = l.queue.dispatch;
		return l.memoizedState = e, [t, a, !1]
	}

	function ja(e, t, l, a) {
		return e = {
			tag: e,
			create: l,
			deps: a,
			inst: t,
			next: null
		}, t = ee.updateQueue, t === null && (t = bu(), ee.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e
	}

	function Bo() {
		return De().memoizedState
	}

	function ju(e, t, l, a) {
		var n = We();
		ee.flags |= e, n.memoizedState = ja(1 | t, {
			destroy: void 0
		}, l, a === void 0 ? null : a)
	}

	function Eu(e, t, l, a) {
		var n = De();
		a = a === void 0 ? null : a;
		var u = n.memoizedState.inst;
		ge !== null && a !== null && mc(a, ge.memoizedState.deps) ? n.memoizedState = ja(t, u, l, a) : (ee.flags |= e, n.memoizedState = ja(1 | t, u, l, a))
	}

	function qo(e, t) {
		ju(8390656, 8, e, t)
	}

	function jc(e, t) {
		Eu(2048, 8, e, t)
	}

	function x0(e) {
		ee.flags |= 4;
		var t = ee.updateQueue;
		if (t === null) t = bu(), ee.updateQueue = t, t.events = [e];
		else {
			var l = t.events;
			l === null ? t.events = [e] : l.push(e)
		}
	}

	function Lo(e) {
		var t = De().memoizedState;
		return x0({
				ref: t,
				nextImpl: e
			}),
			function() {
				if ((fe & 2) !== 0) throw Error(o(440));
				return t.impl.apply(void 0, arguments)
			}
	}

	function Yo(e, t) {
		return Eu(4, 2, e, t)
	}

	function Go(e, t) {
		return Eu(4, 4, e, t)
	}

	function Xo(e, t) {
		if (typeof t == "function") {
			e = e();
			var l = t(e);
			return function() {
				typeof l == "function" ? l() : t(null)
			}
		}
		if (t != null) return e = e(), t.current = e,
			function() {
				t.current = null
			}
	}

	function Qo(e, t, l) {
		l = l != null ? l.concat([e]) : null, Eu(4, 4, Xo.bind(null, t, e), l)
	}

	function Ec() {}

	function Vo(e, t) {
		var l = De();
		t = t === void 0 ? null : t;
		var a = l.memoizedState;
		return t !== null && mc(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e)
	}

	function Zo(e, t) {
		var l = De();
		t = t === void 0 ? null : t;
		var a = l.memoizedState;
		if (t !== null && mc(t, a[1])) return a[0];
		if (a = e(), Jl) {
			cl(!0);
			try {
				e()
			} finally {
				cl(!1)
			}
		}
		return l.memoizedState = [a, t], a
	}

	function Tc(e, t, l) {
		return l === void 0 || (kt & 1073741824) !== 0 && (ie & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Kf(), ee.lanes |= e, Sl |= e, l)
	}

	function ko(e, t, l, a) {
		return rt(l, t) ? l : ba.current !== null ? (e = Tc(e, l, a), rt(e, t) || (He = !0), e) : (kt & 42) === 0 || (kt & 1073741824) !== 0 && (ie & 261930) === 0 ? (He = !0, e.memoizedState = l) : (e = Kf(), ee.lanes |= e, Sl |= e, t)
	}

	function Ko(e, t, l, a, n) {
		var u = U.p;
		U.p = u !== 0 && 8 > u ? u : 8;
		var c = w.T,
			f = {};
		w.T = f, _c(e, !1, t, l);
		try {
			var h = n(),
				j = w.S;
			if (j !== null && j(f, h), h !== null && typeof h == "object" && typeof h.then == "function") {
				var A = h0(h, a);
				dn(e, t, A, yt(e))
			} else dn(e, t, a, yt(e))
		} catch (D) {
			dn(e, t, {
				then: function() {},
				status: "rejected",
				reason: D
			}, yt())
		} finally {
			U.p = u, c !== null && f.types !== null && (c.types = f.types), w.T = c
		}
	}

	function b0() {}

	function zc(e, t, l, a) {
		if (e.tag !== 5) throw Error(o(476));
		var n = Jo(e).queue;
		Ko(e, n, t, $, l === null ? b0 : function() {
			return $o(e), l(a)
		})
	}

	function Jo(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: $,
			baseState: $,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Kt,
				lastRenderedState: $
			},
			next: null
		};
		var l = {};
		return t.next = {
			memoizedState: l,
			baseState: l,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Kt,
				lastRenderedState: l
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
	}

	function $o(e) {
		var t = Jo(e);
		t.next === null && (t = e.alternate.memoizedState), dn(e, t.next.queue, {}, yt())
	}

	function Ac() {
		return Ve(Mn)
	}

	function Wo() {
		return De().memoizedState
	}

	function Fo() {
		return De().memoizedState
	}

	function S0(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var l = yt();
					e = yl(l);
					var a = gl(t, e, l);
					a !== null && (ut(a, t, l), cn(a, t, l)), t = {
						cache: lc()
					}, e.payload = t;
					return
			}
			t = t.return
		}
	}

	function N0(e, t, l) {
		var a = yt();
		l = {
			lane: a,
			revertLane: 0,
			gesture: null,
			action: l,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Tu(e) ? Po(t, l) : (l = Zi(e, t, l, a), l !== null && (ut(l, e, a), ef(l, t, a)))
	}

	function Io(e, t, l) {
		var a = yt();
		dn(e, t, l, a)
	}

	function dn(e, t, l, a) {
		var n = {
			lane: a,
			revertLane: 0,
			gesture: null,
			action: l,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (Tu(e)) Po(t, n);
		else {
			var u = e.alternate;
			if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
				var c = t.lastRenderedState,
					f = u(c, l);
				if (n.hasEagerState = !0, n.eagerState = f, rt(f, c)) return uu(e, t, n, 0), be === null && nu(), !1
			} catch {}
			if (l = Zi(e, t, n, a), l !== null) return ut(l, e, a), ef(l, t, a), !0
		}
		return !1
	}

	function _c(e, t, l, a) {
		if (a = {
				lane: 2,
				revertLane: is(),
				gesture: null,
				action: a,
				hasEagerState: !1,
				eagerState: null,
				next: null
			}, Tu(e)) {
			if (t) throw Error(o(479))
		} else t = Zi(e, l, a, 2), t !== null && ut(t, e, 2)
	}

	function Tu(e) {
		var t = e.alternate;
		return e === ee || t !== null && t === ee
	}

	function Po(e, t) {
		Sa = pu = !0;
		var l = e.pending;
		l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t
	}

	function ef(e, t, l) {
		if ((l & 4194048) !== 0) {
			var a = t.lanes;
			a &= e.pendingLanes, l |= a, t.lanes = l, nr(e, l)
		}
	}
	var mn = {
		readContext: Ve,
		use: Su,
		useCallback: _e,
		useContext: _e,
		useEffect: _e,
		useImperativeHandle: _e,
		useLayoutEffect: _e,
		useInsertionEffect: _e,
		useMemo: _e,
		useReducer: _e,
		useRef: _e,
		useState: _e,
		useDebugValue: _e,
		useDeferredValue: _e,
		useTransition: _e,
		useSyncExternalStore: _e,
		useId: _e,
		useHostTransitionStatus: _e,
		useFormState: _e,
		useActionState: _e,
		useOptimistic: _e,
		useMemoCache: _e,
		useCacheRefresh: _e
	};
	mn.useEffectEvent = _e;
	var tf = {
			readContext: Ve,
			use: Su,
			useCallback: function(e, t) {
				return We().memoizedState = [e, t === void 0 ? null : t], e
			},
			useContext: Ve,
			useEffect: qo,
			useImperativeHandle: function(e, t, l) {
				l = l != null ? l.concat([e]) : null, ju(4194308, 4, Xo.bind(null, t, e), l)
			},
			useLayoutEffect: function(e, t) {
				return ju(4194308, 4, e, t)
			},
			useInsertionEffect: function(e, t) {
				ju(4, 2, e, t)
			},
			useMemo: function(e, t) {
				var l = We();
				t = t === void 0 ? null : t;
				var a = e();
				if (Jl) {
					cl(!0);
					try {
						e()
					} finally {
						cl(!1)
					}
				}
				return l.memoizedState = [a, t], a
			},
			useReducer: function(e, t, l) {
				var a = We();
				if (l !== void 0) {
					var n = l(t);
					if (Jl) {
						cl(!0);
						try {
							l(t)
						} finally {
							cl(!1)
						}
					}
				} else n = t;
				return a.memoizedState = a.baseState = n, e = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: n
				}, a.queue = e, e = e.dispatch = N0.bind(null, ee, e), [a.memoizedState, e]
			},
			useRef: function(e) {
				var t = We();
				return e = {
					current: e
				}, t.memoizedState = e
			},
			useState: function(e) {
				e = Sc(e);
				var t = e.queue,
					l = Io.bind(null, ee, t);
				return t.dispatch = l, [e.memoizedState, l]
			},
			useDebugValue: Ec,
			useDeferredValue: function(e, t) {
				var l = We();
				return Tc(l, e, t)
			},
			useTransition: function() {
				var e = Sc(!1);
				return e = Ko.bind(null, ee, e.queue, !0, !1), We().memoizedState = e, [!1, e]
			},
			useSyncExternalStore: function(e, t, l) {
				var a = ee,
					n = We();
				if (se) {
					if (l === void 0) throw Error(o(407));
					l = l()
				} else {
					if (l = t(), be === null) throw Error(o(349));
					(ie & 127) !== 0 || No(a, t, l)
				}
				n.memoizedState = l;
				var u = {
					value: l,
					getSnapshot: t
				};
				return n.queue = u, qo(Eo.bind(null, a, u, e), [e]), a.flags |= 2048, ja(9, {
					destroy: void 0
				}, jo.bind(null, a, u, l, t), null), l
			},
			useId: function() {
				var e = We(),
					t = be.identifierPrefix;
				if (se) {
					var l = Ct,
						a = Dt;
					l = (a & ~(1 << 32 - st(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = xu++, 0 < l && (t += "H" + l.toString(32)), t += "_"
				} else l = y0++, t = "_" + t + "r_" + l.toString(32) + "_";
				return e.memoizedState = t
			},
			useHostTransitionStatus: Ac,
			useFormState: Do,
			useActionState: Do,
			useOptimistic: function(e) {
				var t = We();
				t.memoizedState = t.baseState = e;
				var l = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null
				};
				return t.queue = l, t = _c.bind(null, ee, !0, l), l.dispatch = t, [e, t]
			},
			useMemoCache: pc,
			useCacheRefresh: function() {
				return We().memoizedState = S0.bind(null, ee)
			},
			useEffectEvent: function(e) {
				var t = We(),
					l = {
						impl: e
					};
				return t.memoizedState = l,
					function() {
						if ((fe & 2) !== 0) throw Error(o(440));
						return l.impl.apply(void 0, arguments)
					}
			}
		},
		Mc = {
			readContext: Ve,
			use: Su,
			useCallback: Vo,
			useContext: Ve,
			useEffect: jc,
			useImperativeHandle: Qo,
			useInsertionEffect: Yo,
			useLayoutEffect: Go,
			useMemo: Zo,
			useReducer: Nu,
			useRef: Bo,
			useState: function() {
				return Nu(Kt)
			},
			useDebugValue: Ec,
			useDeferredValue: function(e, t) {
				var l = De();
				return ko(l, ge.memoizedState, e, t)
			},
			useTransition: function() {
				var e = Nu(Kt)[0],
					t = De().memoizedState;
				return [typeof e == "boolean" ? e : fn(e), t]
			},
			useSyncExternalStore: So,
			useId: Wo,
			useHostTransitionStatus: Ac,
			useFormState: Co,
			useActionState: Co,
			useOptimistic: function(e, t) {
				var l = De();
				return Ao(l, ge, e, t)
			},
			useMemoCache: pc,
			useCacheRefresh: Fo
		};
	Mc.useEffectEvent = Lo;
	var lf = {
		readContext: Ve,
		use: Su,
		useCallback: Vo,
		useContext: Ve,
		useEffect: jc,
		useImperativeHandle: Qo,
		useInsertionEffect: Yo,
		useLayoutEffect: Go,
		useMemo: Zo,
		useReducer: bc,
		useRef: Bo,
		useState: function() {
			return bc(Kt)
		},
		useDebugValue: Ec,
		useDeferredValue: function(e, t) {
			var l = De();
			return ge === null ? Tc(l, e, t) : ko(l, ge.memoizedState, e, t)
		},
		useTransition: function() {
			var e = bc(Kt)[0],
				t = De().memoizedState;
			return [typeof e == "boolean" ? e : fn(e), t]
		},
		useSyncExternalStore: So,
		useId: Wo,
		useHostTransitionStatus: Ac,
		useFormState: Ho,
		useActionState: Ho,
		useOptimistic: function(e, t) {
			var l = De();
			return ge !== null ? Ao(l, ge, e, t) : (l.baseState = e, [e, l.queue.dispatch])
		},
		useMemoCache: pc,
		useCacheRefresh: Fo
	};
	lf.useEffectEvent = Lo;

	function wc(e, t, l, a) {
		t = e.memoizedState, l = l(a, t), l = l == null ? t : T({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l)
	}
	var Oc = {
		enqueueSetState: function(e, t, l) {
			e = e._reactInternals;
			var a = yt(),
				n = yl(a);
			n.payload = t, l != null && (n.callback = l), t = gl(e, n, a), t !== null && (ut(t, e, a), cn(t, e, a))
		},
		enqueueReplaceState: function(e, t, l) {
			e = e._reactInternals;
			var a = yt(),
				n = yl(a);
			n.tag = 1, n.payload = t, l != null && (n.callback = l), t = gl(e, n, a), t !== null && (ut(t, e, a), cn(t, e, a))
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var l = yt(),
				a = yl(l);
			a.tag = 2, t != null && (a.callback = t), t = gl(e, a, l), t !== null && (ut(t, e, l), cn(t, e, l))
		}
	};

	function af(e, t, l, a, n, u, c) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, c) : t.prototype && t.prototype.isPureReactComponent ? !Ia(l, a) || !Ia(n, u) : !0
	}

	function nf(e, t, l, a) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Oc.enqueueReplaceState(t, t.state, null)
	}

	function $l(e, t) {
		var l = t;
		if ("ref" in t) {
			l = {};
			for (var a in t) a !== "ref" && (l[a] = t[a])
		}
		if (e = e.defaultProps) {
			l === t && (l = T({}, l));
			for (var n in e) l[n] === void 0 && (l[n] = e[n])
		}
		return l
	}

	function uf(e) {
		au(e)
	}

	function cf(e) {
		console.error(e)
	}

	function sf(e) {
		au(e)
	}

	function zu(e, t) {
		try {
			var l = e.onUncaughtError;
			l(t.value, {
				componentStack: t.stack
			})
		} catch (a) {
			setTimeout(function() {
				throw a
			})
		}
	}

	function rf(e, t, l) {
		try {
			var a = e.onCaughtError;
			a(l.value, {
				componentStack: l.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			})
		} catch (n) {
			setTimeout(function() {
				throw n
			})
		}
	}

	function Rc(e, t, l) {
		return l = yl(l), l.tag = 3, l.payload = {
			element: null
		}, l.callback = function() {
			zu(e, t)
		}, l
	}

	function of(e) {
		return e = yl(e), e.tag = 3, e
	}

	function ff(e, t, l, a) {
		var n = l.type.getDerivedStateFromError;
		if (typeof n == "function") {
			var u = a.value;
			e.payload = function() {
				return n(u)
			}, e.callback = function() {
				rf(t, l, a)
			}
		}
		var c = l.stateNode;
		c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
			rf(t, l, a), typeof n != "function" && (Nl === null ? Nl = new Set([this]) : Nl.add(this));
			var f = a.stack;
			this.componentDidCatch(a.value, {
				componentStack: f !== null ? f : ""
			})
		})
	}

	function j0(e, t, l, a, n) {
		if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
			if (t = l.alternate, t !== null && ya(t, l, n, !0), l = ft.current, l !== null) {
				switch (l.tag) {
					case 31:
					case 13:
						return Et === null ? qu() : l.alternate === null && Me === 0 && (Me = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === mu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([a]) : t.add(a), as(e, a, n)), !1;
					case 22:
						return l.flags |= 65536, a === mu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
							transitions: null,
							markerInstances: null,
							retryQueue: new Set([a])
						}, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([a]) : l.add(a)), as(e, a, n)), !1
				}
				throw Error(o(435, l.tag))
			}
			return as(e, a, n), qu(), !1
		}
		if (se) return t = ft.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Fi && (e = Error(o(422), {
			cause: a
		}), tn(bt(e, l)))) : (a !== Fi && (t = Error(o(423), {
			cause: a
		}), tn(bt(t, l))), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = bt(a, l), n = Rc(e.stateNode, a, n), sc(e, n), Me !== 4 && (Me = 2)), !1;
		var u = Error(o(520), {
			cause: a
		});
		if (u = bt(u, l), Sn === null ? Sn = [u] : Sn.push(u), Me !== 4 && (Me = 2), t === null) return !0;
		a = bt(a, l), l = t;
		do {
			switch (l.tag) {
				case 3:
					return l.flags |= 65536, e = n & -n, l.lanes |= e, e = Rc(l.stateNode, a, e), sc(l, e), !1;
				case 1:
					if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Nl === null || !Nl.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = of(n), ff(n, e, l, a), sc(l, n), !1
			}
			l = l.return
		} while (l !== null);
		return !1
	}
	var Dc = Error(o(461)),
		He = !1;

	function Ze(e, t, l, a) {
		t.child = e === null ? ho(t, null, l, a) : Kl(t, e.child, l, a)
	}

	function df(e, t, l, a, n) {
		l = l.render;
		var u = t.ref;
		if ("ref" in a) {
			var c = {};
			for (var f in a) f !== "ref" && (c[f] = a[f])
		} else c = a;
		return Ql(t), a = hc(e, t, l, c, u, n), f = yc(), e !== null && !He ? (gc(e, t, n), Jt(e, t, n)) : (se && f && $i(t), t.flags |= 1, Ze(e, t, a, n), t.child)
	}

	function mf(e, t, l, a, n) {
		if (e === null) {
			var u = l.type;
			return typeof u == "function" && !ki(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, hf(e, t, u, a, n)) : (e = cu(l.type, null, a, t, t.mode, n), e.ref = t.ref, e.return = t, t.child = e)
		}
		if (u = e.child, !Gc(e, n)) {
			var c = u.memoizedProps;
			if (l = l.compare, l = l !== null ? l : Ia, l(c, a) && e.ref === t.ref) return Jt(e, t, n)
		}
		return t.flags |= 1, e = Xt(u, a), e.ref = t.ref, e.return = t, t.child = e
	}

	function hf(e, t, l, a, n) {
		if (e !== null) {
			var u = e.memoizedProps;
			if (Ia(u, a) && e.ref === t.ref)
				if (He = !1, t.pendingProps = a = u, Gc(e, n))(e.flags & 131072) !== 0 && (He = !0);
				else return t.lanes = e.lanes, Jt(e, t, n)
		}
		return Cc(e, t, l, a, n)
	}

	function yf(e, t, l, a) {
		var n = a.children,
			u = e !== null ? e.memoizedState : null;
		if (e === null && t.stateNode === null && (t.stateNode = {
				_visibility: 1,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null
			}), a.mode === "hidden") {
			if ((t.flags & 128) !== 0) {
				if (u = u !== null ? u.baseLanes | l : l, e !== null) {
					for (a = t.child = e.child, n = 0; a !== null;) n = n | a.lanes | a.childLanes, a = a.sibling;
					a = n & ~u
				} else a = 0, t.child = null;
				return gf(e, t, u, l, a)
			}
			if ((l & 536870912) !== 0) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && fu(t, u !== null ? u.cachePool : null), u !== null ? vo(t, u) : oc(), po(t);
			else return a = t.lanes = 536870912, gf(e, t, u !== null ? u.baseLanes | l : l, l, a)
		} else u !== null ? (fu(t, u.cachePool), vo(t, u), pl(), t.memoizedState = null) : (e !== null && fu(t, null), oc(), pl());
		return Ze(e, t, n, l), t.child
	}

	function hn(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling
	}

	function gf(e, t, l, a, n) {
		var u = nc();
		return u = u === null ? null : {
			parent: Ce._currentValue,
			pool: u
		}, t.memoizedState = {
			baseLanes: l,
			cachePool: u
		}, e !== null && fu(t, null), oc(), po(t), e !== null && ya(e, t, a, !0), t.childLanes = n, null
	}

	function Au(e, t) {
		return t = Mu({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t
	}

	function vf(e, t, l) {
		return Kl(t, e.child, null, l), e = Au(t, t.pendingProps), e.flags |= 2, dt(t), t.memoizedState = null, e
	}

	function E0(e, t, l) {
		var a = t.pendingProps,
			n = (t.flags & 128) !== 0;
		if (t.flags &= -129, e === null) {
			if (se) {
				if (a.mode === "hidden") return e = Au(t, a), t.lanes = 536870912, hn(null, e);
				if (dc(t), (e = je) ? (e = Md(e, jt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
						dehydrated: e,
						treeContext: ol !== null ? {
							id: Dt,
							overflow: Ct
						} : null,
						retryLane: 536870912,
						hydrationErrors: null
					}, l = Ir(e), l.return = t, t.child = l, Qe = t, je = null)) : e = null, e === null) throw dl(t);
				return t.lanes = 536870912, null
			}
			return Au(t, a)
		}
		var u = e.memoizedState;
		if (u !== null) {
			var c = u.dehydrated;
			if (dc(t), n)
				if (t.flags & 256) t.flags &= -257, t = vf(e, t, l);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
			else throw Error(o(558));
			else if (He || ya(e, t, l, !1), n = (l & e.childLanes) !== 0, He || n) {
				if (a = be, a !== null && (c = ur(a, l), c !== 0 && c !== u.retryLane)) throw u.retryLane = c, Ll(e, c), ut(a, e, c), Dc;
				qu(), t = vf(e, t, l)
			} else e = u.treeContext, je = Tt(c.nextSibling), Qe = t, se = !0, fl = null, jt = !1, e !== null && to(t, e), t = Au(t, a), t.flags |= 4096;
			return t
		}
		return e = Xt(e.child, {
			mode: a.mode,
			children: a.children
		}), e.ref = t.ref, t.child = e, e.return = t, e
	}

	function _u(e, t) {
		var l = t.ref;
		if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof l != "function" && typeof l != "object") throw Error(o(284));
			(e === null || e.ref !== l) && (t.flags |= 4194816)
		}
	}

	function Cc(e, t, l, a, n) {
		return Ql(t), l = hc(e, t, l, a, void 0, n), a = yc(), e !== null && !He ? (gc(e, t, n), Jt(e, t, n)) : (se && a && $i(t), t.flags |= 1, Ze(e, t, l, n), t.child)
	}

	function pf(e, t, l, a, n, u) {
		return Ql(t), t.updateQueue = null, l = bo(t, a, l, n), xo(e), a = yc(), e !== null && !He ? (gc(e, t, u), Jt(e, t, u)) : (se && a && $i(t), t.flags |= 1, Ze(e, t, l, u), t.child)
	}

	function xf(e, t, l, a, n) {
		if (Ql(t), t.stateNode === null) {
			var u = fa,
				c = l.contextType;
			typeof c == "object" && c !== null && (u = Ve(c)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Oc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, ic(t), c = l.contextType, u.context = typeof c == "object" && c !== null ? Ve(c) : fa, u.state = t.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (wc(t, l, c, a), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && Oc.enqueueReplaceState(u, u.state, null), rn(t, a, u, n), sn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0
		} else if (e === null) {
			u = t.stateNode;
			var f = t.memoizedProps,
				h = $l(l, f);
			u.props = h;
			var j = u.context,
				A = l.contextType;
			c = fa, typeof A == "object" && A !== null && (c = Ve(A));
			var D = l.getDerivedStateFromProps;
			A = typeof D == "function" || typeof u.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, A || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f || j !== c) && nf(t, u, a, c), hl = !1;
			var E = t.memoizedState;
			u.state = E, rn(t, a, u, n), sn(), j = t.memoizedState, f || E !== j || hl ? (typeof D == "function" && (wc(t, l, D, a), j = t.memoizedState), (h = hl || af(t, l, h, a, E, j, c)) ? (A || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = j), u.props = a, u.state = j, u.context = c, a = h) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1)
		} else {
			u = t.stateNode, cc(e, t), c = t.memoizedProps, A = $l(l, c), u.props = A, D = t.pendingProps, E = u.context, j = l.contextType, h = fa, typeof j == "object" && j !== null && (h = Ve(j)), f = l.getDerivedStateFromProps, (j = typeof f == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== D || E !== h) && nf(t, u, a, h), hl = !1, E = t.memoizedState, u.state = E, rn(t, a, u, n), sn();
			var z = t.memoizedState;
			c !== D || E !== z || hl || e !== null && e.dependencies !== null && ru(e.dependencies) ? (typeof f == "function" && (wc(t, l, f, a), z = t.memoizedState), (A = hl || af(t, l, A, a, E, z, h) || e !== null && e.dependencies !== null && ru(e.dependencies)) ? (j || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, z, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, z, h)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = z), u.props = a, u.state = z, u.context = h, a = A) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), a = !1)
		}
		return u = a, _u(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = Kl(t, e.child, null, n), t.child = Kl(t, null, l, n)) : Ze(e, t, l, n), t.memoizedState = u.state, e = t.child) : e = Jt(e, t, n), e
	}

	function bf(e, t, l, a) {
		return Gl(), t.flags |= 256, Ze(e, t, l, a), t.child
	}
	var Uc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};

	function Hc(e) {
		return {
			baseLanes: e,
			cachePool: co()
		}
	}

	function Bc(e, t, l) {
		return e = e !== null ? e.childLanes & ~l : 0, t && (e |= ht), e
	}

	function Sf(e, t, l) {
		var a = t.pendingProps,
			n = !1,
			u = (t.flags & 128) !== 0,
			c;
		if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (Re.current & 2) !== 0), c && (n = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
			if (se) {
				if (n ? vl(t) : pl(), (e = je) ? (e = Md(e, jt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
						dehydrated: e,
						treeContext: ol !== null ? {
							id: Dt,
							overflow: Ct
						} : null,
						retryLane: 536870912,
						hydrationErrors: null
					}, l = Ir(e), l.return = t, t.child = l, Qe = t, je = null)) : e = null, e === null) throw dl(t);
				return xs(e) ? t.lanes = 32 : t.lanes = 536870912, null
			}
			var f = a.children;
			return a = a.fallback, n ? (pl(), n = t.mode, f = Mu({
				mode: "hidden",
				children: f
			}, n), a = Yl(a, n, l, null), f.return = t, a.return = t, f.sibling = a, t.child = f, a = t.child, a.memoizedState = Hc(l), a.childLanes = Bc(e, c, l), t.memoizedState = Uc, hn(null, a)) : (vl(t), qc(t, f))
		}
		var h = e.memoizedState;
		if (h !== null && (f = h.dehydrated, f !== null)) {
			if (u) t.flags & 256 ? (vl(t), t.flags &= -257, t = Lc(e, t, l)) : t.memoizedState !== null ? (pl(), t.child = e.child, t.flags |= 128, t = null) : (pl(), f = a.fallback, n = t.mode, a = Mu({
				mode: "visible",
				children: a.children
			}, n), f = Yl(f, n, l, null), f.flags |= 2, a.return = t, f.return = t, a.sibling = f, t.child = a, Kl(t, e.child, null, l), a = t.child, a.memoizedState = Hc(l), a.childLanes = Bc(e, c, l), t.memoizedState = Uc, t = hn(null, a));
			else if (vl(t), xs(f)) {
				if (c = f.nextSibling && f.nextSibling.dataset, c) var j = c.dgst;
				c = j, a = Error(o(419)), a.stack = "", a.digest = c, tn({
					value: a,
					source: null,
					stack: null
				}), t = Lc(e, t, l)
			} else if (He || ya(e, t, l, !1), c = (l & e.childLanes) !== 0, He || c) {
				if (c = be, c !== null && (a = ur(c, l), a !== 0 && a !== h.retryLane)) throw h.retryLane = a, Ll(e, a), ut(c, e, a), Dc;
				ps(f) || qu(), t = Lc(e, t, l)
			} else ps(f) ? (t.flags |= 192, t.child = e.child, t = null) : (e = h.treeContext, je = Tt(f.nextSibling), Qe = t, se = !0, fl = null, jt = !1, e !== null && to(t, e), t = qc(t, a.children), t.flags |= 4096);
			return t
		}
		return n ? (pl(), f = a.fallback, n = t.mode, h = e.child, j = h.sibling, a = Xt(h, {
			mode: "hidden",
			children: a.children
		}), a.subtreeFlags = h.subtreeFlags & 65011712, j !== null ? f = Xt(j, f) : (f = Yl(f, n, l, null), f.flags |= 2), f.return = t, a.return = t, a.sibling = f, t.child = a, hn(null, a), a = t.child, f = e.child.memoizedState, f === null ? f = Hc(l) : (n = f.cachePool, n !== null ? (h = Ce._currentValue, n = n.parent !== h ? {
			parent: h,
			pool: h
		} : n) : n = co(), f = {
			baseLanes: f.baseLanes | l,
			cachePool: n
		}), a.memoizedState = f, a.childLanes = Bc(e, c, l), t.memoizedState = Uc, hn(e.child, a)) : (vl(t), l = e.child, e = l.sibling, l = Xt(l, {
			mode: "visible",
			children: a.children
		}), l.return = t, l.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = l, t.memoizedState = null, l)
	}

	function qc(e, t) {
		return t = Mu({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t
	}

	function Mu(e, t) {
		return e = ot(22, e, null, t), e.lanes = 0, e
	}

	function Lc(e, t, l) {
		return Kl(t, e.child, null, l), e = qc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
	}

	function Nf(e, t, l) {
		e.lanes |= t;
		var a = e.alternate;
		a !== null && (a.lanes |= t), ec(e.return, t, l)
	}

	function Yc(e, t, l, a, n, u) {
		var c = e.memoizedState;
		c === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: a,
			tail: l,
			tailMode: n,
			treeForkCount: u
		} : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = l, c.tailMode = n, c.treeForkCount = u)
	}

	function jf(e, t, l) {
		var a = t.pendingProps,
			n = a.revealOrder,
			u = a.tail;
		a = a.children;
		var c = Re.current,
			f = (c & 2) !== 0;
		if (f ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, H(Re, c), Ze(e, t, a, l), a = se ? en : 0, !f && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Nf(e, l, t);
			else if (e.tag === 19) Nf(e, l, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue
			}
			if (e === t) break e;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break e;
				e = e.return
			}
			e.sibling.return = e.return, e = e.sibling
		}
		switch (n) {
			case "forwards":
				for (l = t.child, n = null; l !== null;) e = l.alternate, e !== null && vu(e) === null && (n = l), l = l.sibling;
				l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), Yc(t, !1, n, l, u, a);
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				for (l = null, n = t.child, t.child = null; n !== null;) {
					if (e = n.alternate, e !== null && vu(e) === null) {
						t.child = n;
						break
					}
					e = n.sibling, n.sibling = l, l = n, n = e
				}
				Yc(t, !0, l, null, u, a);
				break;
			case "together":
				Yc(t, !1, null, null, void 0, a);
				break;
			default:
				t.memoizedState = null
		}
		return t.child
	}

	function Jt(e, t, l) {
		if (e !== null && (t.dependencies = e.dependencies), Sl |= t.lanes, (l & t.childLanes) === 0)
			if (e !== null) {
				if (ya(e, t, l, !1), (l & t.childLanes) === 0) return null
			} else return null;
		if (e !== null && t.child !== e.child) throw Error(o(153));
		if (t.child !== null) {
			for (e = t.child, l = Xt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;) e = e.sibling, l = l.sibling = Xt(e, e.pendingProps), l.return = t;
			l.sibling = null
		}
		return t.child
	}

	function Gc(e, t) {
		return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ru(e)))
	}

	function T0(e, t, l) {
		switch (t.tag) {
			case 3:
				$e(t, t.stateNode.containerInfo), ml(t, Ce, e.memoizedState.cache), Gl();
				break;
			case 27:
			case 5:
				La(t);
				break;
			case 4:
				$e(t, t.stateNode.containerInfo);
				break;
			case 10:
				ml(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, dc(t), null;
				break;
			case 13:
				var a = t.memoizedState;
				if (a !== null) return a.dehydrated !== null ? (vl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Sf(e, t, l) : (vl(t), e = Jt(e, t, l), e !== null ? e.sibling : null);
				vl(t);
				break;
			case 19:
				var n = (e.flags & 128) !== 0;
				if (a = (l & t.childLanes) !== 0, a || (ya(e, t, l, !1), a = (l & t.childLanes) !== 0), n) {
					if (a) return jf(e, t, l);
					t.flags |= 128
				}
				if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), H(Re, Re.current), a) break;
				return null;
			case 22:
				return t.lanes = 0, yf(e, t, l, t.pendingProps);
			case 24:
				ml(t, Ce, e.memoizedState.cache)
		}
		return Jt(e, t, l)
	}

	function Ef(e, t, l) {
		if (e !== null)
			if (e.memoizedProps !== t.pendingProps) He = !0;
			else {
				if (!Gc(e, l) && (t.flags & 128) === 0) return He = !1, T0(e, t, l);
				He = (e.flags & 131072) !== 0
			}
		else He = !1, se && (t.flags & 1048576) !== 0 && eo(t, en, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				e: {
					var a = t.pendingProps;
					if (e = Zl(t.elementType), t.type = e, typeof e == "function") ki(e) ? (a = $l(e, a), t.tag = 1, t = xf(null, t, e, a, l)) : (t.tag = 0, t = Cc(null, t, e, a, l));
					else {
						if (e != null) {
							var n = e.$$typeof;
							if (n === Ne) {
								t.tag = 11, t = df(null, t, e, a, l);
								break e
							} else if (n === I) {
								t.tag = 14, t = mf(null, t, e, a, l);
								break e
							}
						}
						throw t = qt(e) || e, Error(o(306, t, ""))
					}
				}
				return t;
			case 0:
				return Cc(e, t, t.type, t.pendingProps, l);
			case 1:
				return a = t.type, n = $l(a, t.pendingProps), xf(e, t, a, n, l);
			case 3:
				e: {
					if ($e(t, t.stateNode.containerInfo), e === null) throw Error(o(387));a = t.pendingProps;
					var u = t.memoizedState;n = u.element,
					cc(e, t),
					rn(t, a, null, l);
					var c = t.memoizedState;
					if (a = c.cache, ml(t, Ce, a), a !== u.cache && tc(t, [Ce], l, !0), sn(), a = c.element, u.isDehydrated)
						if (u = {
								element: a,
								isDehydrated: !1,
								cache: c.cache
							}, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
							t = bf(e, t, a, l);
							break e
						} else if (a !== n) {
						n = bt(Error(o(424)), t), tn(n), t = bf(e, t, a, l);
						break e
					} else
						for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, je = Tt(e.firstChild), Qe = t, se = !0, fl = null, jt = !0, l = ho(t, null, a, l), t.child = l; l;) l.flags = l.flags & -3 | 4096, l = l.sibling;
					else {
						if (Gl(), a === n) {
							t = Jt(e, t, l);
							break e
						}
						Ze(e, t, a, l)
					}
					t = t.child
				}
				return t;
			case 26:
				return _u(e, t), e === null ? (l = Ud(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : se || (l = t.type, e = t.pendingProps, a = Zu(ae.current).createElement(l), a[Xe] = t, a[Pe] = e, ke(a, l, e), Le(a), t.stateNode = a) : t.memoizedState = Ud(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27:
				return La(t), e === null && se && (a = t.stateNode = Rd(t.type, t.pendingProps, ae.current), Qe = t, jt = !0, n = je, zl(t.type) ? (bs = n, je = Tt(a.firstChild)) : je = n), Ze(e, t, t.pendingProps.children, l), _u(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5:
				return e === null && se && ((n = a = je) && (a = ty(a, t.type, t.pendingProps, jt), a !== null ? (t.stateNode = a, Qe = t, je = Tt(a.firstChild), jt = !1, n = !0) : n = !1), n || dl(t)), La(t), n = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = u.children, ys(n, u) ? a = null : c !== null && ys(n, c) && (t.flags |= 32), t.memoizedState !== null && (n = hc(e, t, g0, null, null, l), Mn._currentValue = n), _u(e, t), Ze(e, t, a, l), t.child;
			case 6:
				return e === null && se && ((e = l = je) && (l = ly(l, t.pendingProps, jt), l !== null ? (t.stateNode = l, Qe = t, je = null, e = !0) : e = !1), e || dl(t)), null;
			case 13:
				return Sf(e, t, l);
			case 4:
				return $e(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = Kl(t, null, a, l) : Ze(e, t, a, l), t.child;
			case 11:
				return df(e, t, t.type, t.pendingProps, l);
			case 7:
				return Ze(e, t, t.pendingProps, l), t.child;
			case 8:
				return Ze(e, t, t.pendingProps.children, l), t.child;
			case 12:
				return Ze(e, t, t.pendingProps.children, l), t.child;
			case 10:
				return a = t.pendingProps, ml(t, t.type, a.value), Ze(e, t, a.children, l), t.child;
			case 9:
				return n = t.type._context, a = t.pendingProps.children, Ql(t), n = Ve(n), a = a(n), t.flags |= 1, Ze(e, t, a, l), t.child;
			case 14:
				return mf(e, t, t.type, t.pendingProps, l);
			case 15:
				return hf(e, t, t.type, t.pendingProps, l);
			case 19:
				return jf(e, t, l);
			case 31:
				return E0(e, t, l);
			case 22:
				return yf(e, t, l, t.pendingProps);
			case 24:
				return Ql(t), a = Ve(Ce), e === null ? (n = nc(), n === null && (n = be, u = lc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), t.memoizedState = {
					parent: a,
					cache: n
				}, ic(t), ml(t, Ce, n)) : ((e.lanes & l) !== 0 && (cc(e, t), rn(t, null, null, l), sn()), n = e.memoizedState, u = t.memoizedState, n.parent !== a ? (n = {
					parent: a,
					cache: a
				}, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ml(t, Ce, a)) : (a = u.cache, ml(t, Ce, a), a !== n.cache && tc(t, [Ce], l, !0))), Ze(e, t, t.pendingProps.children, l), t.child;
			case 29:
				throw t.pendingProps
		}
		throw Error(o(156, t.tag))
	}

	function $t(e) {
		e.flags |= 4
	}

	function Xc(e, t, l, a, n) {
		if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
			if (e.flags |= 16777216, (n & 335544128) === n)
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Ff()) e.flags |= 8192;
			else throw kl = mu, uc
		} else e.flags &= -16777217
	}

	function Tf(e, t) {
		if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Yd(t))
			if (Ff()) e.flags |= 8192;
			else throw kl = mu, uc
	}

	function wu(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? lr() : 536870912, e.lanes |= t, Aa |= t)
	}

	function yn(e, t) {
		if (!se) switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var l = null; t !== null;) t.alternate !== null && (l = t), t = t.sibling;
				l === null ? e.tail = null : l.sibling = null;
				break;
			case "collapsed":
				l = e.tail;
				for (var a = null; l !== null;) l.alternate !== null && (a = l), l = l.sibling;
				a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
		}
	}

	function Ee(e) {
		var t = e.alternate !== null && e.alternate.child === e.child,
			l = 0,
			a = 0;
		if (t)
			for (var n = e.child; n !== null;) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
		else
			for (n = e.child; n !== null;) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
		return e.subtreeFlags |= a, e.childLanes = l, t
	}

	function z0(e, t, l) {
		var a = t.pendingProps;
		switch (Wi(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return Ee(t), null;
			case 1:
				return Ee(t), null;
			case 3:
				return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Zt(Ce), Oe(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (ha(t) ? $t(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ii())), Ee(t), null;
			case 26:
				var n = t.type,
					u = t.memoizedState;
				return e === null ? ($t(t), u !== null ? (Ee(t), Tf(t, u)) : (Ee(t), Xc(t, n, null, a, l))) : u ? u !== e.memoizedState ? ($t(t), Ee(t), Tf(t, u)) : (Ee(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && $t(t), Ee(t), Xc(t, n, e, a, l)), null;
			case 27:
				if (Gn(t), l = ae.current, n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && $t(t);
				else {
					if (!a) {
						if (t.stateNode === null) throw Error(o(166));
						return Ee(t), null
					}
					e = Y.current, ha(t) ? lo(t) : (e = Rd(n, a, l), t.stateNode = e, $t(t))
				}
				return Ee(t), null;
			case 5:
				if (Gn(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && $t(t);
				else {
					if (!a) {
						if (t.stateNode === null) throw Error(o(166));
						return Ee(t), null
					}
					if (u = Y.current, ha(t)) lo(t);
					else {
						var c = Zu(ae.current);
						switch (u) {
							case 1:
								u = c.createElementNS("http://www.w3.org/2000/svg", n);
								break;
							case 2:
								u = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
								break;
							default:
								switch (n) {
									case "svg":
										u = c.createElementNS("http://www.w3.org/2000/svg", n);
										break;
									case "math":
										u = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
										break;
									case "script":
										u = c.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
										break;
									case "select":
										u = typeof a.is == "string" ? c.createElement("select", {
											is: a.is
										}) : c.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
										break;
									default:
										u = typeof a.is == "string" ? c.createElement(n, {
											is: a.is
										}) : c.createElement(n)
								}
						}
						u[Xe] = t, u[Pe] = a;
						e: for (c = t.child; c !== null;) {
							if (c.tag === 5 || c.tag === 6) u.appendChild(c.stateNode);
							else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
								c.child.return = c, c = c.child;
								continue
							}
							if (c === t) break e;
							for (; c.sibling === null;) {
								if (c.return === null || c.return === t) break e;
								c = c.return
							}
							c.sibling.return = c.return, c = c.sibling
						}
						t.stateNode = u;
						e: switch (ke(u, n, a), n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								a = !!a.autoFocus;
								break e;
							case "img":
								a = !0;
								break e;
							default:
								a = !1
						}
						a && $t(t)
					}
				}
				return Ee(t), Xc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== a && $t(t);
				else {
					if (typeof a != "string" && t.stateNode === null) throw Error(o(166));
					if (e = ae.current, ha(t)) {
						if (e = t.stateNode, l = t.memoizedProps, a = null, n = Qe, n !== null) switch (n.tag) {
							case 27:
							case 5:
								a = n.memoizedProps
						}
						e[Xe] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Sd(e.nodeValue, l)), e || dl(t, !0)
					} else e = Zu(e).createTextNode(a), e[Xe] = t, t.stateNode = e
				}
				return Ee(t), null;
			case 31:
				if (l = t.memoizedState, e === null || e.memoizedState !== null) {
					if (a = ha(t), l !== null) {
						if (e === null) {
							if (!a) throw Error(o(318));
							if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
							e[Xe] = t
						} else Gl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
						Ee(t), e = !1
					} else l = Ii(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
					if (!e) return t.flags & 256 ? (dt(t), t) : (dt(t), null);
					if ((t.flags & 128) !== 0) throw Error(o(558))
				}
				return Ee(t), null;
			case 13:
				if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (n = ha(t), a !== null && a.dehydrated !== null) {
						if (e === null) {
							if (!n) throw Error(o(318));
							if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(o(317));
							n[Xe] = t
						} else Gl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
						Ee(t), n = !1
					} else n = Ii(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
					if (!n) return t.flags & 256 ? (dt(t), t) : (dt(t), null)
				}
				return dt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), wu(t, t.updateQueue), Ee(t), null);
			case 4:
				return Oe(), e === null && os(t.stateNode.containerInfo), Ee(t), null;
			case 10:
				return Zt(t.type), Ee(t), null;
			case 19:
				if (C(Re), a = t.memoizedState, a === null) return Ee(t), null;
				if (n = (t.flags & 128) !== 0, u = a.rendering, u === null)
					if (n) yn(a, !1);
					else {
						if (Me !== 0 || e !== null && (e.flags & 128) !== 0)
							for (e = t.child; e !== null;) {
								if (u = vu(e), u !== null) {
									for (t.flags |= 128, yn(a, !1), e = u.updateQueue, t.updateQueue = e, wu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;) Fr(l, e), l = l.sibling;
									return H(Re, Re.current & 1 | 2), se && Qt(t, a.treeForkCount), t.child
								}
								e = e.sibling
							}
						a.tail !== null && it() > Uu && (t.flags |= 128, n = !0, yn(a, !1), t.lanes = 4194304)
					}
				else {
					if (!n)
						if (e = vu(u), e !== null) {
							if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, wu(t, e), yn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !se) return Ee(t), null
						} else 2 * it() - a.renderingStartTime > Uu && l !== 536870912 && (t.flags |= 128, n = !0, yn(a, !1), t.lanes = 4194304);
					a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u)
				}
				return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = it(), e.sibling = null, l = Re.current, H(Re, n ? l & 1 | 2 : l & 1), se && Qt(t, a.treeForkCount), e) : (Ee(t), null);
			case 22:
			case 23:
				return dt(t), fc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ee(t), l = t.updateQueue, l !== null && wu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && C(Vl), null;
			case 24:
				return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Zt(Ce), Ee(t), null;
			case 25:
				return null;
			case 30:
				return null
		}
		throw Error(o(156, t.tag))
	}

	function A0(e, t) {
		switch (Wi(t), t.tag) {
			case 1:
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3:
				return Zt(Ce), Oe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5:
				return Gn(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (dt(t), t.alternate === null) throw Error(o(340));
					Gl()
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (dt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(o(340));
					Gl()
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19:
				return C(Re), null;
			case 4:
				return Oe(), null;
			case 10:
				return Zt(t.type), null;
			case 22:
			case 23:
				return dt(t), fc(), e !== null && C(Vl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24:
				return Zt(Ce), null;
			case 25:
				return null;
			default:
				return null
		}
	}

	function zf(e, t) {
		switch (Wi(t), t.tag) {
			case 3:
				Zt(Ce), Oe();
				break;
			case 26:
			case 27:
			case 5:
				Gn(t);
				break;
			case 4:
				Oe();
				break;
			case 31:
				t.memoizedState !== null && dt(t);
				break;
			case 13:
				dt(t);
				break;
			case 19:
				C(Re);
				break;
			case 10:
				Zt(t.type);
				break;
			case 22:
			case 23:
				dt(t), fc(), e !== null && C(Vl);
				break;
			case 24:
				Zt(Ce)
		}
	}

	function gn(e, t) {
		try {
			var l = t.updateQueue,
				a = l !== null ? l.lastEffect : null;
			if (a !== null) {
				var n = a.next;
				l = n;
				do {
					if ((l.tag & e) === e) {
						a = void 0;
						var u = l.create,
							c = l.inst;
						a = u(), c.destroy = a
					}
					l = l.next
				} while (l !== n)
			}
		} catch (f) {
			he(t, t.return, f)
		}
	}

	function xl(e, t, l) {
		try {
			var a = t.updateQueue,
				n = a !== null ? a.lastEffect : null;
			if (n !== null) {
				var u = n.next;
				a = u;
				do {
					if ((a.tag & e) === e) {
						var c = a.inst,
							f = c.destroy;
						if (f !== void 0) {
							c.destroy = void 0, n = t;
							var h = l,
								j = f;
							try {
								j()
							} catch (A) {
								he(n, h, A)
							}
						}
					}
					a = a.next
				} while (a !== u)
			}
		} catch (A) {
			he(t, t.return, A)
		}
	}

	function Af(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var l = e.stateNode;
			try {
				go(t, l)
			} catch (a) {
				he(e, e.return, a)
			}
		}
	}

	function _f(e, t, l) {
		l.props = $l(e.type, e.memoizedProps), l.state = e.memoizedState;
		try {
			l.componentWillUnmount()
		} catch (a) {
			he(e, t, a)
		}
	}

	function vn(e, t) {
		try {
			var l = e.ref;
			if (l !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var a = e.stateNode;
						break;
					case 30:
						a = e.stateNode;
						break;
					default:
						a = e.stateNode
				}
				typeof l == "function" ? e.refCleanup = l(a) : l.current = a
			}
		} catch (n) {
			he(e, t, n)
		}
	}

	function Ut(e, t) {
		var l = e.ref,
			a = e.refCleanup;
		if (l !== null)
			if (typeof a == "function") try {
				a()
			} catch (n) {
				he(e, t, n)
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
			} else if (typeof l == "function") try {
				l(null)
			} catch (n) {
				he(e, t, n)
			} else l.current = null
	}

	function Mf(e) {
		var t = e.type,
			l = e.memoizedProps,
			a = e.stateNode;
		try {
			e: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					l.autoFocus && a.focus();
					break e;
				case "img":
					l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
			}
		}
		catch (n) {
			he(e, e.return, n)
		}
	}

	function Qc(e, t, l) {
		try {
			var a = e.stateNode;
			$0(a, e.type, l, t), a[Pe] = t
		} catch (n) {
			he(e, e.return, n)
		}
	}

	function wf(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && zl(e.type) || e.tag === 4
	}

	function Vc(e) {
		e: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || wf(e.return)) return null;
				e = e.return
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && zl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
				e.child.return = e, e = e.child
			}
			if (!(e.flags & 2)) return e.stateNode
		}
	}

	function Zc(e, t, l) {
		var a = e.tag;
		if (a === 5 || a === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Yt));
		else if (a !== 4 && (a === 27 && zl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
			for (Zc(e, t, l), e = e.sibling; e !== null;) Zc(e, t, l), e = e.sibling
	}

	function Ou(e, t, l) {
		var a = e.tag;
		if (a === 5 || a === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
		else if (a !== 4 && (a === 27 && zl(e.type) && (l = e.stateNode), e = e.child, e !== null))
			for (Ou(e, t, l), e = e.sibling; e !== null;) Ou(e, t, l), e = e.sibling
	}

	function Of(e) {
		var t = e.stateNode,
			l = e.memoizedProps;
		try {
			for (var a = e.type, n = t.attributes; n.length;) t.removeAttributeNode(n[0]);
			ke(t, a, l), t[Xe] = e, t[Pe] = l
		} catch (u) {
			he(e, e.return, u)
		}
	}
	var Wt = !1,
		Be = !1,
		kc = !1,
		Rf = typeof WeakSet == "function" ? WeakSet : Set,
		Ye = null;

	function _0(e, t) {
		if (e = e.containerInfo, ms = Iu, e = Xr(e), Li(e)) {
			if ("selectionStart" in e) var l = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else e: {
				l = (l = e.ownerDocument) && l.defaultView || window;
				var a = l.getSelection && l.getSelection();
				if (a && a.rangeCount !== 0) {
					l = a.anchorNode;
					var n = a.anchorOffset,
						u = a.focusNode;
					a = a.focusOffset;
					try {
						l.nodeType, u.nodeType
					} catch {
						l = null;
						break e
					}
					var c = 0,
						f = -1,
						h = -1,
						j = 0,
						A = 0,
						D = e,
						E = null;
					t: for (;;) {
						for (var z; D !== l || n !== 0 && D.nodeType !== 3 || (f = c + n), D !== u || a !== 0 && D.nodeType !== 3 || (h = c + a), D.nodeType === 3 && (c += D.nodeValue.length), (z = D.firstChild) !== null;) E = D, D = z;
						for (;;) {
							if (D === e) break t;
							if (E === l && ++j === n && (f = c), E === u && ++A === a && (h = c), (z = D.nextSibling) !== null) break;
							D = E, E = D.parentNode
						}
						D = z
					}
					l = f === -1 || h === -1 ? null : {
						start: f,
						end: h
					}
				} else l = null
			}
			l = l || {
				start: 0,
				end: 0
			}
		} else l = null;
		for (hs = {
				focusedElem: e,
				selectionRange: l
			}, Iu = !1, Ye = t; Ye !== null;)
			if (t = Ye, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Ye = e;
			else
				for (; Ye !== null;) {
					switch (t = Ye, u = t.alternate, e = t.flags, t.tag) {
						case 0:
							if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
								for (l = 0; l < e.length; l++) n = e[l], n.ref.impl = n.nextImpl;
							break;
						case 11:
						case 15:
							break;
						case 1:
							if ((e & 1024) !== 0 && u !== null) {
								e = void 0, l = t, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
								try {
									var q = $l(l.type, n);
									e = a.getSnapshotBeforeUpdate(q, u), a.__reactInternalSnapshotBeforeUpdate = e
								} catch (K) {
									he(l, l.return, K)
								}
							}
							break;
						case 3:
							if ((e & 1024) !== 0) {
								if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) vs(e);
								else if (l === 1) switch (e.nodeName) {
									case "HEAD":
									case "HTML":
									case "BODY":
										vs(e);
										break;
									default:
										e.textContent = ""
								}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if ((e & 1024) !== 0) throw Error(o(163))
					}
					if (e = t.sibling, e !== null) {
						e.return = t.return, Ye = e;
						break
					}
					Ye = t.return
				}
	}

	function Df(e, t, l) {
		var a = l.flags;
		switch (l.tag) {
			case 0:
			case 11:
			case 15:
				It(e, l), a & 4 && gn(5, l);
				break;
			case 1:
				if (It(e, l), a & 4)
					if (e = l.stateNode, t === null) try {
						e.componentDidMount()
					} catch (c) {
						he(l, l.return, c)
					} else {
						var n = $l(l.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate)
						} catch (c) {
							he(l, l.return, c)
						}
					}
				a & 64 && Af(l), a & 512 && vn(l, l.return);
				break;
			case 3:
				if (It(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
					if (t = null, l.child !== null) switch (l.child.tag) {
						case 27:
						case 5:
							t = l.child.stateNode;
							break;
						case 1:
							t = l.child.stateNode
					}
					try {
						go(e, t)
					} catch (c) {
						he(l, l.return, c)
					}
				}
				break;
			case 27:
				t === null && a & 4 && Of(l);
			case 26:
			case 5:
				It(e, l), t === null && a & 4 && Mf(l), a & 512 && vn(l, l.return);
				break;
			case 12:
				It(e, l);
				break;
			case 31:
				It(e, l), a & 4 && Hf(e, l);
				break;
			case 13:
				It(e, l), a & 4 && Bf(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = B0.bind(null, l), ay(e, l))));
				break;
			case 22:
				if (a = l.memoizedState !== null || Wt, !a) {
					t = t !== null && t.memoizedState !== null || Be, n = Wt;
					var u = Be;
					Wt = a, (Be = t) && !u ? Pt(e, l, (l.subtreeFlags & 8772) !== 0) : It(e, l), Wt = n, Be = u
				}
				break;
			case 30:
				break;
			default:
				It(e, l)
		}
	}

	function Cf(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, Cf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ni(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
	}
	var Te = null,
		tt = !1;

	function Ft(e, t, l) {
		for (l = l.child; l !== null;) Uf(e, t, l), l = l.sibling
	}

	function Uf(e, t, l) {
		if (ct && typeof ct.onCommitFiberUnmount == "function") try {
			ct.onCommitFiberUnmount(Ya, l)
		} catch {}
		switch (l.tag) {
			case 26:
				Be || Ut(l, t), Ft(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
				break;
			case 27:
				Be || Ut(l, t);
				var a = Te,
					n = tt;
				zl(l.type) && (Te = l.stateNode, tt = !1), Ft(e, t, l), zn(l.stateNode), Te = a, tt = n;
				break;
			case 5:
				Be || Ut(l, t);
			case 6:
				if (a = Te, n = tt, Te = null, Ft(e, t, l), Te = a, tt = n, Te !== null)
					if (tt) try {
						(Te.nodeType === 9 ? Te.body : Te.nodeName === "HTML" ? Te.ownerDocument.body : Te).removeChild(l.stateNode)
					} catch (u) {
						he(l, t, u)
					} else try {
						Te.removeChild(l.stateNode)
					} catch (u) {
						he(l, t, u)
					}
				break;
			case 18:
				Te !== null && (tt ? (e = Te, Ad(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Ua(e)) : Ad(Te, l.stateNode));
				break;
			case 4:
				a = Te, n = tt, Te = l.stateNode.containerInfo, tt = !0, Ft(e, t, l), Te = a, tt = n;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				xl(2, l, t), Be || xl(4, l, t), Ft(e, t, l);
				break;
			case 1:
				Be || (Ut(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && _f(l, t, a)), Ft(e, t, l);
				break;
			case 21:
				Ft(e, t, l);
				break;
			case 22:
				Be = (a = Be) || l.memoizedState !== null, Ft(e, t, l), Be = a;
				break;
			default:
				Ft(e, t, l)
		}
	}

	function Hf(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Ua(e)
			} catch (l) {
				he(t, t.return, l)
			}
		}
	}

	function Bf(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Ua(e)
		} catch (l) {
			he(t, t.return, l)
		}
	}

	function M0(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new Rf), t;
			case 22:
				return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Rf), t;
			default:
				throw Error(o(435, e.tag))
		}
	}

	function Ru(e, t) {
		var l = M0(e);
		t.forEach(function(a) {
			if (!l.has(a)) {
				l.add(a);
				var n = q0.bind(null, e, a);
				a.then(n, n)
			}
		})
	}

	function lt(e, t) {
		var l = t.deletions;
		if (l !== null)
			for (var a = 0; a < l.length; a++) {
				var n = l[a],
					u = e,
					c = t,
					f = c;
				e: for (; f !== null;) {
					switch (f.tag) {
						case 27:
							if (zl(f.type)) {
								Te = f.stateNode, tt = !1;
								break e
							}
							break;
						case 5:
							Te = f.stateNode, tt = !1;
							break e;
						case 3:
						case 4:
							Te = f.stateNode.containerInfo, tt = !0;
							break e
					}
					f = f.return
				}
				if (Te === null) throw Error(o(160));
				Uf(u, c, n), Te = null, tt = !1, u = n.alternate, u !== null && (u.return = null), n.return = null
			}
		if (t.subtreeFlags & 13886)
			for (t = t.child; t !== null;) qf(t, e), t = t.sibling
	}
	var wt = null;

	function qf(e, t) {
		var l = e.alternate,
			a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				lt(t, e), at(e), a & 4 && (xl(3, e, e.return), gn(3, e), xl(5, e, e.return));
				break;
			case 1:
				lt(t, e), at(e), a & 512 && (Be || l === null || Ut(l, l.return)), a & 64 && Wt && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
				break;
			case 26:
				var n = wt;
				if (lt(t, e), at(e), a & 512 && (Be || l === null || Ut(l, l.return)), a & 4) {
					var u = l !== null ? l.memoizedState : null;
					if (a = e.memoizedState, l === null)
						if (a === null)
							if (e.stateNode === null) {
								e: {
									a = e.type,
									l = e.memoizedProps,
									n = n.ownerDocument || n;t: switch (a) {
										case "title":
											u = n.getElementsByTagName("title")[0], (!u || u[Qa] || u[Xe] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), ke(u, a, l), u[Xe] = e, Le(u), a = u;
											break e;
										case "link":
											var c = qd("link", "href", n).get(a + (l.href || ""));
											if (c) {
												for (var f = 0; f < c.length; f++)
													if (u = c[f], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
														c.splice(f, 1);
														break t
													}
											}
											u = n.createElement(a), ke(u, a, l), n.head.appendChild(u);
											break;
										case "meta":
											if (c = qd("meta", "content", n).get(a + (l.content || ""))) {
												for (f = 0; f < c.length; f++)
													if (u = c[f], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
														c.splice(f, 1);
														break t
													}
											}
											u = n.createElement(a), ke(u, a, l), n.head.appendChild(u);
											break;
										default:
											throw Error(o(468, a))
									}
									u[Xe] = e,
									Le(u),
									a = u
								}
								e.stateNode = a
							}
					else Ld(n, e.type, e.stateNode);
					else e.stateNode = Bd(n, a, e.memoizedProps);
					else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Ld(n, e.type, e.stateNode) : Bd(n, a, e.memoizedProps)) : a === null && e.stateNode !== null && Qc(e, e.memoizedProps, l.memoizedProps)
				}
				break;
			case 27:
				lt(t, e), at(e), a & 512 && (Be || l === null || Ut(l, l.return)), l !== null && a & 4 && Qc(e, e.memoizedProps, l.memoizedProps);
				break;
			case 5:
				if (lt(t, e), at(e), a & 512 && (Be || l === null || Ut(l, l.return)), e.flags & 32) {
					n = e.stateNode;
					try {
						na(n, "")
					} catch (q) {
						he(e, e.return, q)
					}
				}
				a & 4 && e.stateNode != null && (n = e.memoizedProps, Qc(e, n, l !== null ? l.memoizedProps : n)), a & 1024 && (kc = !0);
				break;
			case 6:
				if (lt(t, e), at(e), a & 4) {
					if (e.stateNode === null) throw Error(o(162));
					a = e.memoizedProps, l = e.stateNode;
					try {
						l.nodeValue = a
					} catch (q) {
						he(e, e.return, q)
					}
				}
				break;
			case 3:
				if (Ju = null, n = wt, wt = ku(t.containerInfo), lt(t, e), wt = n, at(e), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
					Ua(t.containerInfo)
				} catch (q) {
					he(e, e.return, q)
				}
				kc && (kc = !1, Lf(e));
				break;
			case 4:
				a = wt, wt = ku(e.stateNode.containerInfo), lt(t, e), at(e), wt = a;
				break;
			case 12:
				lt(t, e), at(e);
				break;
			case 31:
				lt(t, e), at(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ru(e, a)));
				break;
			case 13:
				lt(t, e), at(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Cu = it()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ru(e, a)));
				break;
			case 22:
				n = e.memoizedState !== null;
				var h = l !== null && l.memoizedState !== null,
					j = Wt,
					A = Be;
				if (Wt = j || n, Be = A || h, lt(t, e), Be = A, Wt = j, at(e), a & 8192) e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || h || Wt || Be || Wl(e)), l = null, t = e;;) {
					if (t.tag === 5 || t.tag === 26) {
						if (l === null) {
							h = l = t;
							try {
								if (u = h.stateNode, n) c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
								else {
									f = h.stateNode;
									var D = h.memoizedProps.style,
										E = D != null && D.hasOwnProperty("display") ? D.display : null;
									f.style.display = E == null || typeof E == "boolean" ? "" : ("" + E).trim()
								}
							} catch (q) {
								he(h, h.return, q)
							}
						}
					} else if (t.tag === 6) {
						if (l === null) {
							h = t;
							try {
								h.stateNode.nodeValue = n ? "" : h.memoizedProps
							} catch (q) {
								he(h, h.return, q)
							}
						}
					} else if (t.tag === 18) {
						if (l === null) {
							h = t;
							try {
								var z = h.stateNode;
								n ? _d(z, !0) : _d(h.stateNode, !1)
							} catch (q) {
								he(h, h.return, q)
							}
						}
					} else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
						t.child.return = t, t = t.child;
						continue
					}
					if (t === e) break e;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) break e;
						l === t && (l = null), t = t.return
					}
					l === t && (l = null), t.sibling.return = t.return, t = t.sibling
				}
				a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Ru(e, l))));
				break;
			case 19:
				lt(t, e), at(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ru(e, a)));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				lt(t, e), at(e)
		}
	}

	function at(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var l, a = e.return; a !== null;) {
					if (wf(a)) {
						l = a;
						break
					}
					a = a.return
				}
				if (l == null) throw Error(o(160));
				switch (l.tag) {
					case 27:
						var n = l.stateNode,
							u = Vc(e);
						Ou(e, u, n);
						break;
					case 5:
						var c = l.stateNode;
						l.flags & 32 && (na(c, ""), l.flags &= -33);
						var f = Vc(e);
						Ou(e, f, c);
						break;
					case 3:
					case 4:
						var h = l.stateNode.containerInfo,
							j = Vc(e);
						Zc(e, j, h);
						break;
					default:
						throw Error(o(161))
				}
			} catch (A) {
				he(e, e.return, A)
			}
			e.flags &= -3
		}
		t & 4096 && (e.flags &= -4097)
	}

	function Lf(e) {
		if (e.subtreeFlags & 1024)
			for (e = e.child; e !== null;) {
				var t = e;
				Lf(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
			}
	}

	function It(e, t) {
		if (t.subtreeFlags & 8772)
			for (t = t.child; t !== null;) Df(e, t.alternate, t), t = t.sibling
	}

	function Wl(e) {
		for (e = e.child; e !== null;) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					xl(4, t, t.return), Wl(t);
					break;
				case 1:
					Ut(t, t.return);
					var l = t.stateNode;
					typeof l.componentWillUnmount == "function" && _f(t, t.return, l), Wl(t);
					break;
				case 27:
					zn(t.stateNode);
				case 26:
				case 5:
					Ut(t, t.return), Wl(t);
					break;
				case 22:
					t.memoizedState === null && Wl(t);
					break;
				case 30:
					Wl(t);
					break;
				default:
					Wl(t)
			}
			e = e.sibling
		}
	}

	function Pt(e, t, l) {
		for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
			var a = t.alternate,
				n = e,
				u = t,
				c = u.flags;
			switch (u.tag) {
				case 0:
				case 11:
				case 15:
					Pt(n, u, l), gn(4, u);
					break;
				case 1:
					if (Pt(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
						n.componentDidMount()
					} catch (j) {
						he(a, a.return, j)
					}
					if (a = u, n = a.updateQueue, n !== null) {
						var f = a.stateNode;
						try {
							var h = n.shared.hiddenCallbacks;
							if (h !== null)
								for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++) yo(h[n], f)
						} catch (j) {
							he(a, a.return, j)
						}
					}
					l && c & 64 && Af(u), vn(u, u.return);
					break;
				case 27:
					Of(u);
				case 26:
				case 5:
					Pt(n, u, l), l && a === null && c & 4 && Mf(u), vn(u, u.return);
					break;
				case 12:
					Pt(n, u, l);
					break;
				case 31:
					Pt(n, u, l), l && c & 4 && Hf(n, u);
					break;
				case 13:
					Pt(n, u, l), l && c & 4 && Bf(n, u);
					break;
				case 22:
					u.memoizedState === null && Pt(n, u, l), vn(u, u.return);
					break;
				case 30:
					break;
				default:
					Pt(n, u, l)
			}
			t = t.sibling
		}
	}

	function Kc(e, t) {
		var l = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && ln(l))
	}

	function Jc(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ln(e))
	}

	function Ot(e, t, l, a) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null;) Yf(e, t, l, a), t = t.sibling
	}

	function Yf(e, t, l, a) {
		var n = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Ot(e, t, l, a), n & 2048 && gn(9, t);
				break;
			case 1:
				Ot(e, t, l, a);
				break;
			case 3:
				Ot(e, t, l, a), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ln(e)));
				break;
			case 12:
				if (n & 2048) {
					Ot(e, t, l, a), e = t.stateNode;
					try {
						var u = t.memoizedProps,
							c = u.id,
							f = u.onPostCommit;
						typeof f == "function" && f(c, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
					} catch (h) {
						he(t, t.return, h)
					}
				} else Ot(e, t, l, a);
				break;
			case 31:
				Ot(e, t, l, a);
				break;
			case 13:
				Ot(e, t, l, a);
				break;
			case 23:
				break;
			case 22:
				u = t.stateNode, c = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Ot(e, t, l, a) : pn(e, t) : u._visibility & 2 ? Ot(e, t, l, a) : (u._visibility |= 2, Ea(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)), n & 2048 && Kc(c, t);
				break;
			case 24:
				Ot(e, t, l, a), n & 2048 && Jc(t.alternate, t);
				break;
			default:
				Ot(e, t, l, a)
		}
	}

	function Ea(e, t, l, a, n) {
		for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;) {
			var u = e,
				c = t,
				f = l,
				h = a,
				j = c.flags;
			switch (c.tag) {
				case 0:
				case 11:
				case 15:
					Ea(u, c, f, h, n), gn(8, c);
					break;
				case 23:
					break;
				case 22:
					var A = c.stateNode;
					c.memoizedState !== null ? A._visibility & 2 ? Ea(u, c, f, h, n) : pn(u, c) : (A._visibility |= 2, Ea(u, c, f, h, n)), n && j & 2048 && Kc(c.alternate, c);
					break;
				case 24:
					Ea(u, c, f, h, n), n && j & 2048 && Jc(c.alternate, c);
					break;
				default:
					Ea(u, c, f, h, n)
			}
			t = t.sibling
		}
	}

	function pn(e, t) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null;) {
				var l = e,
					a = t,
					n = a.flags;
				switch (a.tag) {
					case 22:
						pn(l, a), n & 2048 && Kc(a.alternate, a);
						break;
					case 24:
						pn(l, a), n & 2048 && Jc(a.alternate, a);
						break;
					default:
						pn(l, a)
				}
				t = t.sibling
			}
	}
	var xn = 8192;

	function Ta(e, t, l) {
		if (e.subtreeFlags & xn)
			for (e = e.child; e !== null;) Gf(e, t, l), e = e.sibling
	}

	function Gf(e, t, l) {
		switch (e.tag) {
			case 26:
				Ta(e, t, l), e.flags & xn && e.memoizedState !== null && yy(l, wt, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				Ta(e, t, l);
				break;
			case 3:
			case 4:
				var a = wt;
				wt = ku(e.stateNode.containerInfo), Ta(e, t, l), wt = a;
				break;
			case 22:
				e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = xn, xn = 16777216, Ta(e, t, l), xn = a) : Ta(e, t, l));
				break;
			default:
				Ta(e, t, l)
		}
	}

	function Xf(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do t = e.sibling, e.sibling = null, e = t; while (e !== null)
		}
	}

	function bn(e) {
		var t = e.deletions;
		if ((e.flags & 16) !== 0) {
			if (t !== null)
				for (var l = 0; l < t.length; l++) {
					var a = t[l];
					Ye = a, Vf(a, e)
				}
			Xf(e)
		}
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null;) Qf(e), e = e.sibling
	}

	function Qf(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				bn(e), e.flags & 2048 && xl(9, e, e.return);
				break;
			case 3:
				bn(e);
				break;
			case 12:
				bn(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Du(e)) : bn(e);
				break;
			default:
				bn(e)
		}
	}

	function Du(e) {
		var t = e.deletions;
		if ((e.flags & 16) !== 0) {
			if (t !== null)
				for (var l = 0; l < t.length; l++) {
					var a = t[l];
					Ye = a, Vf(a, e)
				}
			Xf(e)
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					xl(8, t, t.return), Du(t);
					break;
				case 22:
					l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Du(t));
					break;
				default:
					Du(t)
			}
			e = e.sibling
		}
	}

	function Vf(e, t) {
		for (; Ye !== null;) {
			var l = Ye;
			switch (l.tag) {
				case 0:
				case 11:
				case 15:
					xl(8, l, t);
					break;
				case 23:
				case 22:
					if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
						var a = l.memoizedState.cachePool.pool;
						a != null && a.refCount++
					}
					break;
				case 24:
					ln(l.memoizedState.cache)
			}
			if (a = l.child, a !== null) a.return = l, Ye = a;
			else e: for (l = e; Ye !== null;) {
				a = Ye;
				var n = a.sibling,
					u = a.return;
				if (Cf(a), a === l) {
					Ye = null;
					break e
				}
				if (n !== null) {
					n.return = u, Ye = n;
					break e
				}
				Ye = u
			}
		}
	}
	var w0 = {
			getCacheForType: function(e) {
				var t = Ve(Ce),
					l = t.data.get(e);
				return l === void 0 && (l = e(), t.data.set(e, l)), l
			},
			cacheSignal: function() {
				return Ve(Ce).controller.signal
			}
		},
		O0 = typeof WeakMap == "function" ? WeakMap : Map,
		fe = 0,
		be = null,
		ne = null,
		ie = 0,
		me = 0,
		mt = null,
		bl = !1,
		za = !1,
		$c = !1,
		el = 0,
		Me = 0,
		Sl = 0,
		Fl = 0,
		Wc = 0,
		ht = 0,
		Aa = 0,
		Sn = null,
		nt = null,
		Fc = !1,
		Cu = 0,
		Zf = 0,
		Uu = 1 / 0,
		Hu = null,
		Nl = null,
		qe = 0,
		jl = null,
		_a = null,
		tl = 0,
		Ic = 0,
		Pc = null,
		kf = null,
		Nn = 0,
		es = null;

	function yt() {
		return (fe & 2) !== 0 && ie !== 0 ? ie & -ie : w.T !== null ? is() : ir()
	}

	function Kf() {
		if (ht === 0)
			if ((ie & 536870912) === 0 || se) {
				var e = Vn;
				Vn <<= 1, (Vn & 3932160) === 0 && (Vn = 262144), ht = e
			} else ht = 536870912;
		return e = ft.current, e !== null && (e.flags |= 32), ht
	}

	function ut(e, t, l) {
		(e === be && (me === 2 || me === 9) || e.cancelPendingCommit !== null) && (Ma(e, 0), El(e, ie, ht, !1)), Xa(e, l), ((fe & 2) === 0 || e !== be) && (e === be && ((fe & 2) === 0 && (Fl |= l), Me === 4 && El(e, ie, ht, !1)), Ht(e))
	}

	function Jf(e, t, l) {
		if ((fe & 6) !== 0) throw Error(o(327));
		var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ga(e, t),
			n = a ? C0(e, t) : ls(e, t, !0),
			u = a;
		do {
			if (n === 0) {
				za && !a && El(e, t, 0, !1);
				break
			} else {
				if (l = e.current.alternate, u && !R0(l)) {
					n = ls(e, t, !1), u = !1;
					continue
				}
				if (n === 2) {
					if (u = t, e.errorRecoveryDisabledLanes & u) var c = 0;
					else c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
					if (c !== 0) {
						t = c;
						e: {
							var f = e;n = Sn;
							var h = f.current.memoizedState.isDehydrated;
							if (h && (Ma(f, c).flags |= 256), c = ls(f, c, !1), c !== 2) {
								if ($c && !h) {
									f.errorRecoveryDisabledLanes |= u, Fl |= u, n = 4;
									break e
								}
								u = nt, nt = n, u !== null && (nt === null ? nt = u : nt.push.apply(nt, u))
							}
							n = c
						}
						if (u = !1, n !== 2) continue
					}
				}
				if (n === 1) {
					Ma(e, 0), El(e, t, 0, !0);
					break
				}
				e: {
					switch (a = e, u = n, u) {
						case 0:
						case 1:
							throw Error(o(345));
						case 4:
							if ((t & 4194048) !== t) break;
						case 6:
							El(a, t, ht, !bl);
							break e;
						case 2:
							nt = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(o(329))
					}
					if ((t & 62914560) === t && (n = Cu + 300 - it(), 10 < n)) {
						if (El(a, t, ht, !bl), kn(a, 0, !0) !== 0) break e;
						tl = t, a.timeoutHandle = Td($f.bind(null, a, l, nt, Hu, Fc, t, ht, Fl, Aa, bl, u, "Throttled", -0, 0), n);
						break e
					}
					$f(a, l, nt, Hu, Fc, t, ht, Fl, Aa, bl, u, null, -0, 0)
				}
			}
			break
		} while (!0);
		Ht(e)
	}

	function $f(e, t, l, a, n, u, c, f, h, j, A, D, E, z) {
		if (e.timeoutHandle = -1, D = t.subtreeFlags, D & 8192 || (D & 16785408) === 16785408) {
			D = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: Yt
			}, Gf(t, u, D);
			var q = (u & 62914560) === u ? Cu - it() : (u & 4194048) === u ? Zf - it() : 0;
			if (q = gy(D, q), q !== null) {
				tl = u, e.cancelPendingCommit = q(ad.bind(null, e, t, u, l, a, n, c, f, h, A, D, null, E, z)), El(e, u, c, !j);
				return
			}
		}
		ad(e, t, u, l, a, n, c, f, h)
	}

	function R0(e) {
		for (var t = e;;) {
			var l = t.tag;
			if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
				for (var a = 0; a < l.length; a++) {
					var n = l[a],
						u = n.getSnapshot;
					n = n.value;
					try {
						if (!rt(u(), n)) return !1
					} catch {
						return !1
					}
				}
			if (l = t.child, t.subtreeFlags & 16384 && l !== null) l.return = t, t = l;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return
				}
				t.sibling.return = t.return, t = t.sibling
			}
		}
		return !0
	}

	function El(e, t, l, a) {
		t &= ~Wc, t &= ~Fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
		for (var n = t; 0 < n;) {
			var u = 31 - st(n),
				c = 1 << u;
			a[u] = -1, n &= ~c
		}
		l !== 0 && ar(e, l, t)
	}

	function Bu() {
		return (fe & 6) === 0 ? (jn(0), !1) : !0
	}

	function ts() {
		if (ne !== null) {
			if (me === 0) var e = ne.return;
			else e = ne, Vt = Xl = null, vc(e), xa = null, nn = 0, e = ne;
			for (; e !== null;) zf(e.alternate, e), e = e.return;
			ne = null
		}
	}

	function Ma(e, t) {
		var l = e.timeoutHandle;
		l !== -1 && (e.timeoutHandle = -1, I0(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), tl = 0, ts(), be = e, ne = l = Xt(e.current, null), ie = t, me = 0, mt = null, bl = !1, za = Ga(e, t), $c = !1, Aa = ht = Wc = Fl = Sl = Me = 0, nt = Sn = null, Fc = !1, (t & 8) !== 0 && (t |= t & 32);
		var a = e.entangledLanes;
		if (a !== 0)
			for (e = e.entanglements, a &= t; 0 < a;) {
				var n = 31 - st(a),
					u = 1 << n;
				t |= e[n], a &= ~u
			}
		return el = t, nu(), l
	}

	function Wf(e, t) {
		ee = null, w.H = mn, t === pa || t === du ? (t = oo(), me = 3) : t === uc ? (t = oo(), me = 4) : me = t === Dc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, mt = t, ne === null && (Me = 1, zu(e, bt(t, e.current)))
	}

	function Ff() {
		var e = ft.current;
		return e === null ? !0 : (ie & 4194048) === ie ? Et === null : (ie & 62914560) === ie || (ie & 536870912) !== 0 ? e === Et : !1
	}

	function If() {
		var e = w.H;
		return w.H = mn, e === null ? mn : e
	}

	function Pf() {
		var e = w.A;
		return w.A = w0, e
	}

	function qu() {
		Me = 4, bl || (ie & 4194048) !== ie && ft.current !== null || (za = !0), (Sl & 134217727) === 0 && (Fl & 134217727) === 0 || be === null || El(be, ie, ht, !1)
	}

	function ls(e, t, l) {
		var a = fe;
		fe |= 2;
		var n = If(),
			u = Pf();
		(be !== e || ie !== t) && (Hu = null, Ma(e, t)), t = !1;
		var c = Me;
		e: do try {
				if (me !== 0 && ne !== null) {
					var f = ne,
						h = mt;
					switch (me) {
						case 8:
							ts(), c = 6;
							break e;
						case 3:
						case 2:
						case 9:
						case 6:
							ft.current === null && (t = !0);
							var j = me;
							if (me = 0, mt = null, wa(e, f, h, j), l && za) {
								c = 0;
								break e
							}
							break;
						default:
							j = me, me = 0, mt = null, wa(e, f, h, j)
					}
				}
				D0(), c = Me;
				break
			} catch (A) {
				Wf(e, A)
			}
			while (!0);
			return t && e.shellSuspendCounter++, Vt = Xl = null, fe = a, w.H = n, w.A = u, ne === null && (be = null, ie = 0, nu()), c
	}

	function D0() {
		for (; ne !== null;) ed(ne)
	}

	function C0(e, t) {
		var l = fe;
		fe |= 2;
		var a = If(),
			n = Pf();
		be !== e || ie !== t ? (Hu = null, Uu = it() + 500, Ma(e, t)) : za = Ga(e, t);
		e: do try {
				if (me !== 0 && ne !== null) {
					t = ne;
					var u = mt;
					t: switch (me) {
						case 1:
							me = 0, mt = null, wa(e, t, u, 1);
							break;
						case 2:
						case 9:
							if (so(u)) {
								me = 0, mt = null, td(t);
								break
							}
							t = function() {
								me !== 2 && me !== 9 || be !== e || (me = 7), Ht(e)
							}, u.then(t, t);
							break e;
						case 3:
							me = 7;
							break e;
						case 4:
							me = 5;
							break e;
						case 7:
							so(u) ? (me = 0, mt = null, td(t)) : (me = 0, mt = null, wa(e, t, u, 7));
							break;
						case 5:
							var c = null;
							switch (ne.tag) {
								case 26:
									c = ne.memoizedState;
								case 5:
								case 27:
									var f = ne;
									if (c ? Yd(c) : f.stateNode.complete) {
										me = 0, mt = null;
										var h = f.sibling;
										if (h !== null) ne = h;
										else {
											var j = f.return;
											j !== null ? (ne = j, Lu(j)) : ne = null
										}
										break t
									}
							}
							me = 0, mt = null, wa(e, t, u, 5);
							break;
						case 6:
							me = 0, mt = null, wa(e, t, u, 6);
							break;
						case 8:
							ts(), Me = 6;
							break e;
						default:
							throw Error(o(462))
					}
				}
				U0();
				break
			} catch (A) {
				Wf(e, A)
			}
			while (!0);
			return Vt = Xl = null, w.H = a, w.A = n, fe = l, ne !== null ? 0 : (be = null, ie = 0, nu(), Me)
	}

	function U0() {
		for (; ne !== null && !nh();) ed(ne)
	}

	function ed(e) {
		var t = Ef(e.alternate, e, el);
		e.memoizedProps = e.pendingProps, t === null ? Lu(e) : ne = t
	}

	function td(e) {
		var t = e,
			l = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = pf(l, t, t.pendingProps, t.type, void 0, ie);
				break;
			case 11:
				t = pf(l, t, t.pendingProps, t.type.render, t.ref, ie);
				break;
			case 5:
				vc(t);
			default:
				zf(l, t), t = ne = Fr(t, el), t = Ef(l, t, el)
		}
		e.memoizedProps = e.pendingProps, t === null ? Lu(e) : ne = t
	}

	function wa(e, t, l, a) {
		Vt = Xl = null, vc(t), xa = null, nn = 0;
		var n = t.return;
		try {
			if (j0(e, n, t, l, ie)) {
				Me = 1, zu(e, bt(l, e.current)), ne = null;
				return
			}
		} catch (u) {
			if (n !== null) throw ne = n, u;
			Me = 1, zu(e, bt(l, e.current)), ne = null;
			return
		}
		t.flags & 32768 ? (se || a === 1 ? e = !0 : za || (ie & 536870912) !== 0 ? e = !1 : (bl = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ft.current, a !== null && a.tag === 13 && (a.flags |= 16384))), ld(t, e)) : Lu(t)
	}

	function Lu(e) {
		var t = e;
		do {
			if ((t.flags & 32768) !== 0) {
				ld(t, bl);
				return
			}
			e = t.return;
			var l = z0(t.alternate, t, el);
			if (l !== null) {
				ne = l;
				return
			}
			if (t = t.sibling, t !== null) {
				ne = t;
				return
			}
			ne = t = e
		} while (t !== null);
		Me === 0 && (Me = 5)
	}

	function ld(e, t) {
		do {
			var l = A0(e.alternate, e);
			if (l !== null) {
				l.flags &= 32767, ne = l;
				return
			}
			if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
				ne = e;
				return
			}
			ne = e = l
		} while (e !== null);
		Me = 6, ne = null
	}

	function ad(e, t, l, a, n, u, c, f, h) {
		e.cancelPendingCommit = null;
		do Yu(); while (qe !== 0);
		if ((fe & 6) !== 0) throw Error(o(327));
		if (t !== null) {
			if (t === e.current) throw Error(o(177));
			if (u = t.lanes | t.childLanes, u |= Vi, hh(e, l, u, c, f, h), e === be && (ne = be = null, ie = 0), _a = t, jl = e, tl = l, Ic = u, Pc = n, kf = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, L0(Xn, function() {
					return sd(), null
				})) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
				a = w.T, w.T = null, n = U.p, U.p = 2, c = fe, fe |= 4;
				try {
					_0(e, t, l)
				} finally {
					fe = c, U.p = n, w.T = a
				}
			}
			qe = 1, nd(), ud(), id()
		}
	}

	function nd() {
		if (qe === 1) {
			qe = 0;
			var e = jl,
				t = _a,
				l = (t.flags & 13878) !== 0;
			if ((t.subtreeFlags & 13878) !== 0 || l) {
				l = w.T, w.T = null;
				var a = U.p;
				U.p = 2;
				var n = fe;
				fe |= 4;
				try {
					qf(t, e);
					var u = hs,
						c = Xr(e.containerInfo),
						f = u.focusedElem,
						h = u.selectionRange;
					if (c !== f && f && f.ownerDocument && Gr(f.ownerDocument.documentElement, f)) {
						if (h !== null && Li(f)) {
							var j = h.start,
								A = h.end;
							if (A === void 0 && (A = j), "selectionStart" in f) f.selectionStart = j, f.selectionEnd = Math.min(A, f.value.length);
							else {
								var D = f.ownerDocument || document,
									E = D && D.defaultView || window;
								if (E.getSelection) {
									var z = E.getSelection(),
										q = f.textContent.length,
										K = Math.min(h.start, q),
										pe = h.end === void 0 ? K : Math.min(h.end, q);
									!z.extend && K > pe && (c = pe, pe = K, K = c);
									var x = Yr(f, K),
										g = Yr(f, pe);
									if (x && g && (z.rangeCount !== 1 || z.anchorNode !== x.node || z.anchorOffset !== x.offset || z.focusNode !== g.node || z.focusOffset !== g.offset)) {
										var S = D.createRange();
										S.setStart(x.node, x.offset), z.removeAllRanges(), K > pe ? (z.addRange(S), z.extend(g.node, g.offset)) : (S.setEnd(g.node, g.offset), z.addRange(S))
									}
								}
							}
						}
						for (D = [], z = f; z = z.parentNode;) z.nodeType === 1 && D.push({
							element: z,
							left: z.scrollLeft,
							top: z.scrollTop
						});
						for (typeof f.focus == "function" && f.focus(), f = 0; f < D.length; f++) {
							var O = D[f];
							O.element.scrollLeft = O.left, O.element.scrollTop = O.top
						}
					}
					Iu = !!ms, hs = ms = null
				} finally {
					fe = n, U.p = a, w.T = l
				}
			}
			e.current = t, qe = 2
		}
	}

	function ud() {
		if (qe === 2) {
			qe = 0;
			var e = jl,
				t = _a,
				l = (t.flags & 8772) !== 0;
			if ((t.subtreeFlags & 8772) !== 0 || l) {
				l = w.T, w.T = null;
				var a = U.p;
				U.p = 2;
				var n = fe;
				fe |= 4;
				try {
					Df(e, t.alternate, t)
				} finally {
					fe = n, U.p = a, w.T = l
				}
			}
			qe = 3
		}
	}

	function id() {
		if (qe === 4 || qe === 3) {
			qe = 0, uh();
			var e = jl,
				t = _a,
				l = tl,
				a = kf;
			(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? qe = 5 : (qe = 0, _a = jl = null, cd(e, e.pendingLanes));
			var n = e.pendingLanes;
			if (n === 0 && (Nl = null), bi(l), t = t.stateNode, ct && typeof ct.onCommitFiberRoot == "function") try {
				ct.onCommitFiberRoot(Ya, t, void 0, (t.current.flags & 128) === 128)
			} catch {}
			if (a !== null) {
				t = w.T, n = U.p, U.p = 2, w.T = null;
				try {
					for (var u = e.onRecoverableError, c = 0; c < a.length; c++) {
						var f = a[c];
						u(f.value, {
							componentStack: f.stack
						})
					}
				} finally {
					w.T = t, U.p = n
				}
			}(tl & 3) !== 0 && Yu(), Ht(e), n = e.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? e === es ? Nn++ : (Nn = 0, es = e) : Nn = 0, jn(0)
		}
	}

	function cd(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ln(t)))
	}

	function Yu() {
		return nd(), ud(), id(), sd()
	}

	function sd() {
		if (qe !== 5) return !1;
		var e = jl,
			t = Ic;
		Ic = 0;
		var l = bi(tl),
			a = w.T,
			n = U.p;
		try {
			U.p = 32 > l ? 32 : l, w.T = null, l = Pc, Pc = null;
			var u = jl,
				c = tl;
			if (qe = 0, _a = jl = null, tl = 0, (fe & 6) !== 0) throw Error(o(331));
			var f = fe;
			if (fe |= 4, Qf(u.current), Yf(u, u.current, c, l), fe = f, jn(0, !1), ct && typeof ct.onPostCommitFiberRoot == "function") try {
				ct.onPostCommitFiberRoot(Ya, u)
			} catch {}
			return !0
		} finally {
			U.p = n, w.T = a, cd(e, t)
		}
	}

	function rd(e, t, l) {
		t = bt(l, t), t = Rc(e.stateNode, t, 2), e = gl(e, t, 2), e !== null && (Xa(e, 2), Ht(e))
	}

	function he(e, t, l) {
		if (e.tag === 3) rd(e, e, l);
		else
			for (; t !== null;) {
				if (t.tag === 3) {
					rd(t, e, l);
					break
				} else if (t.tag === 1) {
					var a = t.stateNode;
					if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Nl === null || !Nl.has(a))) {
						e = bt(l, e), l = of(2), a = gl(t, l, 2), a !== null && (ff(l, a, t, e), Xa(a, 2), Ht(a));
						break
					}
				}
				t = t.return
			}
	}

	function as(e, t, l) {
		var a = e.pingCache;
		if (a === null) {
			a = e.pingCache = new O0;
			var n = new Set;
			a.set(t, n)
		} else n = a.get(t), n === void 0 && (n = new Set, a.set(t, n));
		n.has(l) || ($c = !0, n.add(l), e = H0.bind(null, e, t, l), t.then(e, e))
	}

	function H0(e, t, l) {
		var a = e.pingCache;
		a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, be === e && (ie & l) === l && (Me === 4 || Me === 3 && (ie & 62914560) === ie && 300 > it() - Cu ? (fe & 2) === 0 && Ma(e, 0) : Wc |= l, Aa === ie && (Aa = 0)), Ht(e)
	}

	function od(e, t) {
		t === 0 && (t = lr()), e = Ll(e, t), e !== null && (Xa(e, t), Ht(e))
	}

	function B0(e) {
		var t = e.memoizedState,
			l = 0;
		t !== null && (l = t.retryLane), od(e, l)
	}

	function q0(e, t) {
		var l = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var a = e.stateNode,
					n = e.memoizedState;
				n !== null && (l = n.retryLane);
				break;
			case 19:
				a = e.stateNode;
				break;
			case 22:
				a = e.stateNode._retryCache;
				break;
			default:
				throw Error(o(314))
		}
		a !== null && a.delete(t), od(e, l)
	}

	function L0(e, t) {
		return gi(e, t)
	}
	var Gu = null,
		Oa = null,
		ns = !1,
		Xu = !1,
		us = !1,
		Tl = 0;

	function Ht(e) {
		e !== Oa && e.next === null && (Oa === null ? Gu = Oa = e : Oa = Oa.next = e), Xu = !0, ns || (ns = !0, G0())
	}

	function jn(e, t) {
		if (!us && Xu) {
			us = !0;
			do
				for (var l = !1, a = Gu; a !== null;) {
					if (e !== 0) {
						var n = a.pendingLanes;
						if (n === 0) var u = 0;
						else {
							var c = a.suspendedLanes,
								f = a.pingedLanes;
							u = (1 << 31 - st(42 | e) + 1) - 1, u &= n & ~(c & ~f), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
						}
						u !== 0 && (l = !0, hd(a, u))
					} else u = ie, u = kn(a, a === be ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Ga(a, u) || (l = !0, hd(a, u));
					a = a.next
				}
			while (l);
			us = !1
		}
	}

	function Y0() {
		fd()
	}

	function fd() {
		Xu = ns = !1;
		var e = 0;
		Tl !== 0 && F0() && (e = Tl);
		for (var t = it(), l = null, a = Gu; a !== null;) {
			var n = a.next,
				u = dd(a, t);
			u === 0 ? (a.next = null, l === null ? Gu = n : l.next = n, n === null && (Oa = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (Xu = !0)), a = n
		}
		qe !== 0 && qe !== 5 || jn(e), Tl !== 0 && (Tl = 0)
	}

	function dd(e, t) {
		for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u;) {
			var c = 31 - st(u),
				f = 1 << c,
				h = n[c];
			h === -1 ? ((f & l) === 0 || (f & a) !== 0) && (n[c] = mh(f, t)) : h <= t && (e.expiredLanes |= f), u &= ~f
		}
		if (t = be, l = ie, l = kn(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, l === 0 || e === t && (me === 2 || me === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && vi(a), e.callbackNode = null, e.callbackPriority = 0;
		if ((l & 3) === 0 || Ga(e, l)) {
			if (t = l & -l, t === e.callbackPriority) return t;
			switch (a !== null && vi(a), bi(l)) {
				case 2:
				case 8:
					l = er;
					break;
				case 32:
					l = Xn;
					break;
				case 268435456:
					l = tr;
					break;
				default:
					l = Xn
			}
			return a = md.bind(null, e), l = gi(l, a), e.callbackPriority = t, e.callbackNode = l, t
		}
		return a !== null && a !== null && vi(a), e.callbackPriority = 2, e.callbackNode = null, 2
	}

	function md(e, t) {
		if (qe !== 0 && qe !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var l = e.callbackNode;
		if (Yu() && e.callbackNode !== l) return null;
		var a = ie;
		return a = kn(e, e === be ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Jf(e, a, t), dd(e, it()), e.callbackNode != null && e.callbackNode === l ? md.bind(null, e) : null)
	}

	function hd(e, t) {
		if (Yu()) return null;
		Jf(e, t, !0)
	}

	function G0() {
		P0(function() {
			(fe & 6) !== 0 ? gi(Ps, Y0) : fd()
		})
	}

	function is() {
		if (Tl === 0) {
			var e = ga;
			e === 0 && (e = Qn, Qn <<= 1, (Qn & 261888) === 0 && (Qn = 256)), Tl = e
		}
		return Tl
	}

	function yd(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Wn("" + e)
	}

	function gd(e, t) {
		var l = t.ownerDocument.createElement("input");
		return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e
	}

	function X0(e, t, l, a, n) {
		if (t === "submit" && l && l.stateNode === n) {
			var u = yd((n[Pe] || null).action),
				c = a.submitter;
			c && (t = (t = c[Pe] || null) ? yd(t.formAction) : c.getAttribute("formAction"), t !== null && (u = t, c = null));
			var f = new eu("action", "action", null, a, n);
			e.push({
				event: f,
				listeners: [{
					instance: null,
					listener: function() {
						if (a.defaultPrevented) {
							if (Tl !== 0) {
								var h = c ? gd(n, c) : new FormData(n);
								zc(l, {
									pending: !0,
									data: h,
									method: n.method,
									action: u
								}, null, h)
							}
						} else typeof u == "function" && (f.preventDefault(), h = c ? gd(n, c) : new FormData(n), zc(l, {
							pending: !0,
							data: h,
							method: n.method,
							action: u
						}, u, h))
					},
					currentTarget: n
				}]
			})
		}
	}
	for (var cs = 0; cs < Qi.length; cs++) {
		var ss = Qi[cs],
			Q0 = ss.toLowerCase(),
			V0 = ss[0].toUpperCase() + ss.slice(1);
		Mt(Q0, "on" + V0)
	}
	Mt(Zr, "onAnimationEnd"), Mt(kr, "onAnimationIteration"), Mt(Kr, "onAnimationStart"), Mt("dblclick", "onDoubleClick"), Mt("focusin", "onFocus"), Mt("focusout", "onBlur"), Mt(i0, "onTransitionRun"), Mt(c0, "onTransitionStart"), Mt(s0, "onTransitionCancel"), Mt(Jr, "onTransitionEnd"), la("onMouseEnter", ["mouseout", "mouseover"]), la("onMouseLeave", ["mouseout", "mouseover"]), la("onPointerEnter", ["pointerout", "pointerover"]), la("onPointerLeave", ["pointerout", "pointerover"]), Ul("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ul("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ul("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ul("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ul("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ul("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var En = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
		Z0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(En));

	function vd(e, t) {
		t = (t & 4) !== 0;
		for (var l = 0; l < e.length; l++) {
			var a = e[l],
				n = a.event;
			a = a.listeners;
			e: {
				var u = void 0;
				if (t)
					for (var c = a.length - 1; 0 <= c; c--) {
						var f = a[c],
							h = f.instance,
							j = f.currentTarget;
						if (f = f.listener, h !== u && n.isPropagationStopped()) break e;
						u = f, n.currentTarget = j;
						try {
							u(n)
						} catch (A) {
							au(A)
						}
						n.currentTarget = null, u = h
					} else
						for (c = 0; c < a.length; c++) {
							if (f = a[c], h = f.instance, j = f.currentTarget, f = f.listener, h !== u && n.isPropagationStopped()) break e;
							u = f, n.currentTarget = j;
							try {
								u(n)
							} catch (A) {
								au(A)
							}
							n.currentTarget = null, u = h
						}
			}
		}
	}

	function ue(e, t) {
		var l = t[Si];
		l === void 0 && (l = t[Si] = new Set);
		var a = e + "__bubble";
		l.has(a) || (pd(t, e, 2, !1), l.add(a))
	}

	function rs(e, t, l) {
		var a = 0;
		t && (a |= 4), pd(l, e, a, t)
	}
	var Qu = "_reactListening" + Math.random().toString(36).slice(2);

	function os(e) {
		if (!e[Qu]) {
			e[Qu] = !0, rr.forEach(function(l) {
				l !== "selectionchange" && (Z0.has(l) || rs(l, !1, e), rs(l, !0, e))
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Qu] || (t[Qu] = !0, rs("selectionchange", !1, t))
		}
	}

	function pd(e, t, l, a) {
		switch (Kd(t)) {
			case 2:
				var n = xy;
				break;
			case 8:
				n = by;
				break;
			default:
				n = Ts
		}
		l = n.bind(null, t, l, e), n = void 0, !wi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
			capture: !0,
			passive: n
		}) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
			passive: n
		}) : e.addEventListener(t, l, !1)
	}

	function fs(e, t, l, a, n) {
		var u = a;
		if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for (;;) {
			if (a === null) return;
			var c = a.tag;
			if (c === 3 || c === 4) {
				var f = a.stateNode.containerInfo;
				if (f === n) break;
				if (c === 4)
					for (c = a.return; c !== null;) {
						var h = c.tag;
						if ((h === 3 || h === 4) && c.stateNode.containerInfo === n) return;
						c = c.return
					}
				for (; f !== null;) {
					if (c = Pl(f), c === null) return;
					if (h = c.tag, h === 5 || h === 6 || h === 26 || h === 27) {
						a = u = c;
						continue e
					}
					f = f.parentNode
				}
			}
			a = a.return
		}
		Sr(function() {
			var j = u,
				A = _i(l),
				D = [];
			e: {
				var E = $r.get(e);
				if (E !== void 0) {
					var z = eu,
						q = e;
					switch (e) {
						case "keypress":
							if (In(l) === 0) break e;
						case "keydown":
						case "keyup":
							z = qh;
							break;
						case "focusin":
							q = "focus", z = Ci;
							break;
						case "focusout":
							q = "blur", z = Ci;
							break;
						case "beforeblur":
						case "afterblur":
							z = Ci;
							break;
						case "click":
							if (l.button === 2) break e;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							z = Er;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							z = zh;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							z = Gh;
							break;
						case Zr:
						case kr:
						case Kr:
							z = Mh;
							break;
						case Jr:
							z = Qh;
							break;
						case "scroll":
						case "scrollend":
							z = Eh;
							break;
						case "wheel":
							z = Zh;
							break;
						case "copy":
						case "cut":
						case "paste":
							z = Oh;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							z = zr;
							break;
						case "toggle":
						case "beforetoggle":
							z = Kh
					}
					var K = (t & 4) !== 0,
						pe = !K && (e === "scroll" || e === "scrollend"),
						x = K ? E !== null ? E + "Capture" : null : E;
					K = [];
					for (var g = j, S; g !== null;) {
						var O = g;
						if (S = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || S === null || x === null || (O = Za(g, x), O != null && K.push(Tn(g, O, S))), pe) break;
						g = g.return
					}
					0 < K.length && (E = new z(E, q, null, l, A), D.push({
						event: E,
						listeners: K
					}))
				}
			}
			if ((t & 7) === 0) {
				e: {
					if (E = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", E && l !== Ai && (q = l.relatedTarget || l.fromElement) && (Pl(q) || q[Il])) break e;
					if ((z || E) && (E = A.window === A ? A : (E = A.ownerDocument) ? E.defaultView || E.parentWindow : window, z ? (q = l.relatedTarget || l.toElement, z = j, q = q ? Pl(q) : null, q !== null && (pe = y(q), K = q.tag, q !== pe || K !== 5 && K !== 27 && K !== 6) && (q = null)) : (z = null, q = j), z !== q)) {
						if (K = Er, O = "onMouseLeave", x = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (K = zr, O = "onPointerLeave", x = "onPointerEnter", g = "pointer"), pe = z == null ? E : Va(z), S = q == null ? E : Va(q), E = new K(O, g + "leave", z, l, A), E.target = pe, E.relatedTarget = S, O = null, Pl(A) === j && (K = new K(x, g + "enter", q, l, A), K.target = S, K.relatedTarget = pe, O = K), pe = O, z && q) t: {
							for (K = k0, x = z, g = q, S = 0, O = x; O; O = K(O)) S++;O = 0;
							for (var Z = g; Z; Z = K(Z)) O++;
							for (; 0 < S - O;) x = K(x),
							S--;
							for (; 0 < O - S;) g = K(g),
							O--;
							for (; S--;) {
								if (x === g || g !== null && x === g.alternate) {
									K = x;
									break t
								}
								x = K(x), g = K(g)
							}
							K = null
						}
						else K = null;
						z !== null && xd(D, E, z, K, !1), q !== null && pe !== null && xd(D, pe, q, K, !0)
					}
				}
				e: {
					if (E = j ? Va(j) : window, z = E.nodeName && E.nodeName.toLowerCase(), z === "select" || z === "input" && E.type === "file") var re = Cr;
					else if (Rr(E))
						if (Ur) re = a0;
						else {
							re = t0;
							var G = e0
						}
					else z = E.nodeName,
					!z || z.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? j && zi(j.elementType) && (re = Cr) : re = l0;
					if (re && (re = re(e, j))) {
						Dr(D, re, l, A);
						break e
					}
					G && G(e, E, j),
					e === "focusout" && j && E.type === "number" && j.memoizedProps.value != null && Ti(E, "number", E.value)
				}
				switch (G = j ? Va(j) : window, e) {
					case "focusin":
						(Rr(G) || G.contentEditable === "true") && (sa = G, Yi = j, Pa = null);
						break;
					case "focusout":
						Pa = Yi = sa = null;
						break;
					case "mousedown":
						Gi = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Gi = !1, Qr(D, l, A);
						break;
					case "selectionchange":
						if (u0) break;
					case "keydown":
					case "keyup":
						Qr(D, l, A)
				}
				var te;
				if (Hi) e: {
					switch (e) {
						case "compositionstart":
							var ce = "onCompositionStart";
							break e;
						case "compositionend":
							ce = "onCompositionEnd";
							break e;
						case "compositionupdate":
							ce = "onCompositionUpdate";
							break e
					}
					ce = void 0
				}
				else ca ? wr(e, l) && (ce = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ce = "onCompositionStart");ce && (Ar && l.locale !== "ko" && (ca || ce !== "onCompositionStart" ? ce === "onCompositionEnd" && ca && (te = Nr()) : (rl = A, Oi = "value" in rl ? rl.value : rl.textContent, ca = !0)), G = Vu(j, ce), 0 < G.length && (ce = new Tr(ce, e, null, l, A), D.push({
					event: ce,
					listeners: G
				}), te ? ce.data = te : (te = Or(l), te !== null && (ce.data = te)))),
				(te = $h ? Wh(e, l) : Fh(e, l)) && (ce = Vu(j, "onBeforeInput"), 0 < ce.length && (G = new Tr("onBeforeInput", "beforeinput", null, l, A), D.push({
					event: G,
					listeners: ce
				}), G.data = te)),
				X0(D, e, j, l, A)
			}
			vd(D, t)
		})
	}

	function Tn(e, t, l) {
		return {
			instance: e,
			listener: t,
			currentTarget: l
		}
	}

	function Vu(e, t) {
		for (var l = t + "Capture", a = []; e !== null;) {
			var n = e,
				u = n.stateNode;
			if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Za(e, l), n != null && a.unshift(Tn(e, n, u)), n = Za(e, t), n != null && a.push(Tn(e, n, u))), e.tag === 3) return a;
			e = e.return
		}
		return []
	}

	function k0(e) {
		if (e === null) return null;
		do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
		return e || null
	}

	function xd(e, t, l, a, n) {
		for (var u = t._reactName, c = []; l !== null && l !== a;) {
			var f = l,
				h = f.alternate,
				j = f.stateNode;
			if (f = f.tag, h !== null && h === a) break;
			f !== 5 && f !== 26 && f !== 27 || j === null || (h = j, n ? (j = Za(l, u), j != null && c.unshift(Tn(l, j, h))) : n || (j = Za(l, u), j != null && c.push(Tn(l, j, h)))), l = l.return
		}
		c.length !== 0 && e.push({
			event: t,
			listeners: c
		})
	}
	var K0 = /\r\n?/g,
		J0 = /\u0000|\uFFFD/g;

	function bd(e) {
		return (typeof e == "string" ? e : "" + e).replace(K0, `
`).replace(J0, "")
	}

	function Sd(e, t) {
		return t = bd(t), bd(e) === t
	}

	function ve(e, t, l, a, n, u) {
		switch (l) {
			case "children":
				typeof a == "string" ? t === "body" || t === "textarea" && a === "" || na(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && na(e, "" + a);
				break;
			case "className":
				Jn(e, "class", a);
				break;
			case "tabIndex":
				Jn(e, "tabindex", a);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Jn(e, l, a);
				break;
			case "style":
				xr(e, a, u);
				break;
			case "data":
				if (t !== "object") {
					Jn(e, "data", a);
					break
				}
			case "src":
			case "href":
				if (a === "" && (t !== "a" || l !== "href")) {
					e.removeAttribute(l);
					break
				}
				if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
					e.removeAttribute(l);
					break
				}
				a = Wn("" + a), e.setAttribute(l, a);
				break;
			case "action":
			case "formAction":
				if (typeof a == "function") {
					e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break
				} else typeof u == "function" && (l === "formAction" ? (t !== "input" && ve(e, t, "name", n.name, n, null), ve(e, t, "formEncType", n.formEncType, n, null), ve(e, t, "formMethod", n.formMethod, n, null), ve(e, t, "formTarget", n.formTarget, n, null)) : (ve(e, t, "encType", n.encType, n, null), ve(e, t, "method", n.method, n, null), ve(e, t, "target", n.target, n, null)));
				if (a == null || typeof a == "symbol" || typeof a == "boolean") {
					e.removeAttribute(l);
					break
				}
				a = Wn("" + a), e.setAttribute(l, a);
				break;
			case "onClick":
				a != null && (e.onclick = Yt);
				break;
			case "onScroll":
				a != null && ue("scroll", e);
				break;
			case "onScrollEnd":
				a != null && ue("scrollend", e);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
					if (l = a.__html, l != null) {
						if (n.children != null) throw Error(o(60));
						e.innerHTML = l
					}
				}
				break;
			case "multiple":
				e.multiple = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "muted":
				e.muted = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref":
				break;
			case "autoFocus":
				break;
			case "xlinkHref":
				if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
					e.removeAttribute("xlink:href");
					break
				}
				l = Wn("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
				break;
			case "capture":
			case "download":
				a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
				break;
			case "rowSpan":
			case "start":
				a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
				break;
			case "popover":
				ue("beforetoggle", e), ue("toggle", e), Kn(e, "popover", a);
				break;
			case "xlinkActuate":
				Lt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
				break;
			case "xlinkArcrole":
				Lt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
				break;
			case "xlinkRole":
				Lt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
				break;
			case "xlinkShow":
				Lt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
				break;
			case "xlinkTitle":
				Lt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
				break;
			case "xlinkType":
				Lt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
				break;
			case "xmlBase":
				Lt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
				break;
			case "xmlLang":
				Lt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
				break;
			case "xmlSpace":
				Lt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
				break;
			case "is":
				Kn(e, "is", a);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Nh.get(l) || l, Kn(e, l, a))
		}
	}

	function ds(e, t, l, a, n, u) {
		switch (l) {
			case "style":
				xr(e, a, u);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
					if (l = a.__html, l != null) {
						if (n.children != null) throw Error(o(60));
						e.innerHTML = l
					}
				}
				break;
			case "children":
				typeof a == "string" ? na(e, a) : (typeof a == "number" || typeof a == "bigint") && na(e, "" + a);
				break;
			case "onScroll":
				a != null && ue("scroll", e);
				break;
			case "onScrollEnd":
				a != null && ue("scrollend", e);
				break;
			case "onClick":
				a != null && (e.onclick = Yt);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref":
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				if (!or.hasOwnProperty(l)) e: {
					if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), u = e[Pe] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof a == "function")) {
						typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
						break e
					}
					l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Kn(e, l, a)
				}
		}
	}

	function ke(e, t, l) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "img":
				ue("error", e), ue("load", e);
				var a = !1,
					n = !1,
					u;
				for (u in l)
					if (l.hasOwnProperty(u)) {
						var c = l[u];
						if (c != null) switch (u) {
							case "src":
								a = !0;
								break;
							case "srcSet":
								n = !0;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(o(137, t));
							default:
								ve(e, t, u, c, l, null)
						}
					} n && ve(e, t, "srcSet", l.srcSet, l, null), a && ve(e, t, "src", l.src, l, null);
				return;
			case "input":
				ue("invalid", e);
				var f = u = c = n = null,
					h = null,
					j = null;
				for (a in l)
					if (l.hasOwnProperty(a)) {
						var A = l[a];
						if (A != null) switch (a) {
							case "name":
								n = A;
								break;
							case "type":
								c = A;
								break;
							case "checked":
								h = A;
								break;
							case "defaultChecked":
								j = A;
								break;
							case "value":
								u = A;
								break;
							case "defaultValue":
								f = A;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (A != null) throw Error(o(137, t));
								break;
							default:
								ve(e, t, a, A, l, null)
						}
					} yr(e, u, f, h, j, c, n, !1);
				return;
			case "select":
				ue("invalid", e), a = c = u = null;
				for (n in l)
					if (l.hasOwnProperty(n) && (f = l[n], f != null)) switch (n) {
						case "value":
							u = f;
							break;
						case "defaultValue":
							c = f;
							break;
						case "multiple":
							a = f;
						default:
							ve(e, t, n, f, l, null)
					}
				t = u, l = c, e.multiple = !!a, t != null ? aa(e, !!a, t, !1) : l != null && aa(e, !!a, l, !0);
				return;
			case "textarea":
				ue("invalid", e), u = n = a = null;
				for (c in l)
					if (l.hasOwnProperty(c) && (f = l[c], f != null)) switch (c) {
						case "value":
							a = f;
							break;
						case "defaultValue":
							n = f;
							break;
						case "children":
							u = f;
							break;
						case "dangerouslySetInnerHTML":
							if (f != null) throw Error(o(91));
							break;
						default:
							ve(e, t, c, f, l, null)
					}
				vr(e, a, n, u);
				return;
			case "option":
				for (h in l) l.hasOwnProperty(h) && (a = l[h], a != null) && (h === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : ve(e, t, h, a, l, null));
				return;
			case "dialog":
				ue("beforetoggle", e), ue("toggle", e), ue("cancel", e), ue("close", e);
				break;
			case "iframe":
			case "object":
				ue("load", e);
				break;
			case "video":
			case "audio":
				for (a = 0; a < En.length; a++) ue(En[a], e);
				break;
			case "image":
				ue("error", e), ue("load", e);
				break;
			case "details":
				ue("toggle", e);
				break;
			case "embed":
			case "source":
			case "link":
				ue("error", e), ue("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (j in l)
					if (l.hasOwnProperty(j) && (a = l[j], a != null)) switch (j) {
						case "children":
						case "dangerouslySetInnerHTML":
							throw Error(o(137, t));
						default:
							ve(e, t, j, a, l, null)
					}
				return;
			default:
				if (zi(t)) {
					for (A in l) l.hasOwnProperty(A) && (a = l[A], a !== void 0 && ds(e, t, A, a, l, void 0));
					return
				}
		}
		for (f in l) l.hasOwnProperty(f) && (a = l[f], a != null && ve(e, t, f, a, l, null))
	}

	function $0(e, t, l, a) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "input":
				var n = null,
					u = null,
					c = null,
					f = null,
					h = null,
					j = null,
					A = null;
				for (z in l) {
					var D = l[z];
					if (l.hasOwnProperty(z) && D != null) switch (z) {
						case "checked":
							break;
						case "value":
							break;
						case "defaultValue":
							h = D;
						default:
							a.hasOwnProperty(z) || ve(e, t, z, null, a, D)
					}
				}
				for (var E in a) {
					var z = a[E];
					if (D = l[E], a.hasOwnProperty(E) && (z != null || D != null)) switch (E) {
						case "type":
							u = z;
							break;
						case "name":
							n = z;
							break;
						case "checked":
							j = z;
							break;
						case "defaultChecked":
							A = z;
							break;
						case "value":
							c = z;
							break;
						case "defaultValue":
							f = z;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (z != null) throw Error(o(137, t));
							break;
						default:
							z !== D && ve(e, t, E, z, a, D)
					}
				}
				Ei(e, c, f, h, j, A, u, n);
				return;
			case "select":
				z = c = f = E = null;
				for (u in l)
					if (h = l[u], l.hasOwnProperty(u) && h != null) switch (u) {
						case "value":
							break;
						case "multiple":
							z = h;
						default:
							a.hasOwnProperty(u) || ve(e, t, u, null, a, h)
					}
				for (n in a)
					if (u = a[n], h = l[n], a.hasOwnProperty(n) && (u != null || h != null)) switch (n) {
						case "value":
							E = u;
							break;
						case "defaultValue":
							f = u;
							break;
						case "multiple":
							c = u;
						default:
							u !== h && ve(e, t, n, u, a, h)
					}
				t = f, l = c, a = z, E != null ? aa(e, !!l, E, !1) : !!a != !!l && (t != null ? aa(e, !!l, t, !0) : aa(e, !!l, l ? [] : "", !1));
				return;
			case "textarea":
				z = E = null;
				for (f in l)
					if (n = l[f], l.hasOwnProperty(f) && n != null && !a.hasOwnProperty(f)) switch (f) {
						case "value":
							break;
						case "children":
							break;
						default:
							ve(e, t, f, null, a, n)
					}
				for (c in a)
					if (n = a[c], u = l[c], a.hasOwnProperty(c) && (n != null || u != null)) switch (c) {
						case "value":
							E = n;
							break;
						case "defaultValue":
							z = n;
							break;
						case "children":
							break;
						case "dangerouslySetInnerHTML":
							if (n != null) throw Error(o(91));
							break;
						default:
							n !== u && ve(e, t, c, n, a, u)
					}
				gr(e, E, z);
				return;
			case "option":
				for (var q in l) E = l[q], l.hasOwnProperty(q) && E != null && !a.hasOwnProperty(q) && (q === "selected" ? e.selected = !1 : ve(e, t, q, null, a, E));
				for (h in a) E = a[h], z = l[h], a.hasOwnProperty(h) && E !== z && (E != null || z != null) && (h === "selected" ? e.selected = E && typeof E != "function" && typeof E != "symbol" : ve(e, t, h, E, a, z));
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var K in l) E = l[K], l.hasOwnProperty(K) && E != null && !a.hasOwnProperty(K) && ve(e, t, K, null, a, E);
				for (j in a)
					if (E = a[j], z = l[j], a.hasOwnProperty(j) && E !== z && (E != null || z != null)) switch (j) {
						case "children":
						case "dangerouslySetInnerHTML":
							if (E != null) throw Error(o(137, t));
							break;
						default:
							ve(e, t, j, E, a, z)
					}
				return;
			default:
				if (zi(t)) {
					for (var pe in l) E = l[pe], l.hasOwnProperty(pe) && E !== void 0 && !a.hasOwnProperty(pe) && ds(e, t, pe, void 0, a, E);
					for (A in a) E = a[A], z = l[A], !a.hasOwnProperty(A) || E === z || E === void 0 && z === void 0 || ds(e, t, A, E, a, z);
					return
				}
		}
		for (var x in l) E = l[x], l.hasOwnProperty(x) && E != null && !a.hasOwnProperty(x) && ve(e, t, x, null, a, E);
		for (D in a) E = a[D], z = l[D], !a.hasOwnProperty(D) || E === z || E == null && z == null || ve(e, t, D, E, a, z)
	}

	function Nd(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link":
				return !0;
			default:
				return !1
		}
	}

	function W0() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
				var n = l[a],
					u = n.transferSize,
					c = n.initiatorType,
					f = n.duration;
				if (u && f && Nd(c)) {
					for (c = 0, f = n.responseEnd, a += 1; a < l.length; a++) {
						var h = l[a],
							j = h.startTime;
						if (j > f) break;
						var A = h.transferSize,
							D = h.initiatorType;
						A && Nd(D) && (h = h.responseEnd, c += A * (h < f ? 1 : (f - j) / (h - j)))
					}
					if (--a, t += 8 * (u + c) / (n.duration / 1e3), e++, 10 < e) break
				}
			}
			if (0 < e) return t / e / 1e6
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5
	}
	var ms = null,
		hs = null;

	function Zu(e) {
		return e.nodeType === 9 ? e : e.ownerDocument
	}

	function jd(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0
		}
	}

	function Ed(e, t) {
		if (e === 0) switch (t) {
			case "svg":
				return 1;
			case "math":
				return 2;
			default:
				return 0
		}
		return e === 1 && t === "foreignObject" ? 0 : e
	}

	function ys(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
	}
	var gs = null;

	function F0() {
		var e = window.event;
		return e && e.type === "popstate" ? e === gs ? !1 : (gs = e, !0) : (gs = null, !1)
	}
	var Td = typeof setTimeout == "function" ? setTimeout : void 0,
		I0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
		zd = typeof Promise == "function" ? Promise : void 0,
		P0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof zd < "u" ? function(e) {
			return zd.resolve(null).then(e).catch(ey)
		} : Td;

	function ey(e) {
		setTimeout(function() {
			throw e
		})
	}

	function zl(e) {
		return e === "head"
	}

	function Ad(e, t) {
		var l = t,
			a = 0;
		do {
			var n = l.nextSibling;
			if (e.removeChild(l), n && n.nodeType === 8)
				if (l = n.data, l === "/$" || l === "/&") {
					if (a === 0) {
						e.removeChild(n), Ua(t);
						return
					}
					a--
				} else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
			else if (l === "html") zn(e.ownerDocument.documentElement);
			else if (l === "head") {
				l = e.ownerDocument.head, zn(l);
				for (var u = l.firstChild; u;) {
					var c = u.nextSibling,
						f = u.nodeName;
					u[Qa] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = c
				}
			} else l === "body" && zn(e.ownerDocument.body);
			l = n
		} while (l);
		Ua(t)
	}

	function _d(e, t) {
		var l = e;
		e = 0;
		do {
			var a = l.nextSibling;
			if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
				if (l = a.data, l === "/$") {
					if (e === 0) break;
					e--
				} else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
			l = a
		} while (l)
	}

	function vs(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var l = t;
			switch (t = t.nextSibling, l.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					vs(l), Ni(l);
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if (l.rel.toLowerCase() === "stylesheet") continue
			}
			e.removeChild(l)
		}
	}

	function ty(e, t, l, a) {
		for (; e.nodeType === 1;) {
			var n = l;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
			} else if (a) {
				if (!e[Qa]) switch (t) {
					case "meta":
						if (!e.hasAttribute("itemprop")) break;
						return e;
					case "link":
						if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence")) break;
						if (u !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title)) break;
						return e;
					case "style":
						if (e.hasAttribute("data-precedence")) break;
						return e;
					case "script":
						if (u = e.getAttribute("src"), (u !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
						return e;
					default:
						return e
				}
			} else if (t === "input" && e.type === "hidden") {
				var u = n.name == null ? null : "" + n.name;
				if (n.type === "hidden" && e.getAttribute("name") === u) return e
			} else return e;
			if (e = Tt(e.nextSibling), e === null) break
		}
		return null
	}

	function ly(e, t, l) {
		if (t === "") return null;
		for (; e.nodeType !== 3;)
			if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Tt(e.nextSibling), e === null)) return null;
		return e
	}

	function Md(e, t) {
		for (; e.nodeType !== 8;)
			if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Tt(e.nextSibling), e === null)) return null;
		return e
	}

	function ps(e) {
		return e.data === "$?" || e.data === "$~"
	}

	function xs(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
	}

	function ay(e, t) {
		var l = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || l.readyState !== "loading") t();
		else {
			var a = function() {
				t(), l.removeEventListener("DOMContentLoaded", a)
			};
			l.addEventListener("DOMContentLoaded", a), e._reactRetry = a
		}
	}

	function Tt(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null
			}
		}
		return e
	}
	var bs = null;

	function wd(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var l = e.data;
				if (l === "/$" || l === "/&") {
					if (t === 0) return Tt(e.nextSibling);
					t--
				} else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++
			}
			e = e.nextSibling
		}
		return null
	}

	function Od(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var l = e.data;
				if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
					if (t === 0) return e;
					t--
				} else l !== "/$" && l !== "/&" || t++
			}
			e = e.previousSibling
		}
		return null
	}

	function Rd(e, t, l) {
		switch (t = Zu(l), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(o(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(o(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(o(454));
				return e;
			default:
				throw Error(o(451))
		}
	}

	function zn(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		Ni(e)
	}
	var zt = new Map,
		Dd = new Set;

	function ku(e) {
		return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
	}
	var ll = U.d;
	U.d = {
		f: ny,
		r: uy,
		D: iy,
		C: cy,
		L: sy,
		m: ry,
		X: fy,
		S: oy,
		M: dy
	};

	function ny() {
		var e = ll.f(),
			t = Bu();
		return e || t
	}

	function uy(e) {
		var t = ea(e);
		t !== null && t.tag === 5 && t.type === "form" ? $o(t) : ll.r(e)
	}
	var Ra = typeof document > "u" ? null : document;

	function Cd(e, t, l) {
		var a = Ra;
		if (a && typeof t == "string" && t) {
			var n = pt(t);
			n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Dd.has(n) || (Dd.add(n), e = {
				rel: e,
				crossOrigin: l,
				href: t
			}, a.querySelector(n) === null && (t = a.createElement("link"), ke(t, "link", e), Le(t), a.head.appendChild(t)))
		}
	}

	function iy(e) {
		ll.D(e), Cd("dns-prefetch", e, null)
	}

	function cy(e, t) {
		ll.C(e, t), Cd("preconnect", e, t)
	}

	function sy(e, t, l) {
		ll.L(e, t, l);
		var a = Ra;
		if (a && e && t) {
			var n = 'link[rel="preload"][as="' + pt(t) + '"]';
			t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + pt(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + pt(l.imageSizes) + '"]')) : n += '[href="' + pt(e) + '"]';
			var u = n;
			switch (t) {
				case "style":
					u = Da(e);
					break;
				case "script":
					u = Ca(e)
			}
			zt.has(u) || (e = T({
				rel: "preload",
				href: t === "image" && l && l.imageSrcSet ? void 0 : e,
				as: t
			}, l), zt.set(u, e), a.querySelector(n) !== null || t === "style" && a.querySelector(An(u)) || t === "script" && a.querySelector(_n(u)) || (t = a.createElement("link"), ke(t, "link", e), Le(t), a.head.appendChild(t)))
		}
	}

	function ry(e, t) {
		ll.m(e, t);
		var l = Ra;
		if (l && e) {
			var a = t && typeof t.as == "string" ? t.as : "script",
				n = 'link[rel="modulepreload"][as="' + pt(a) + '"][href="' + pt(e) + '"]',
				u = n;
			switch (a) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script":
					u = Ca(e)
			}
			if (!zt.has(u) && (e = T({
					rel: "modulepreload",
					href: e
				}, t), zt.set(u, e), l.querySelector(n) === null)) {
				switch (a) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						if (l.querySelector(_n(u))) return
				}
				a = l.createElement("link"), ke(a, "link", e), Le(a), l.head.appendChild(a)
			}
		}
	}

	function oy(e, t, l) {
		ll.S(e, t, l);
		var a = Ra;
		if (a && e) {
			var n = ta(a).hoistableStyles,
				u = Da(e);
			t = t || "default";
			var c = n.get(u);
			if (!c) {
				var f = {
					loading: 0,
					preload: null
				};
				if (c = a.querySelector(An(u))) f.loading = 5;
				else {
					e = T({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, l), (l = zt.get(u)) && Ss(e, l);
					var h = c = a.createElement("link");
					Le(h), ke(h, "link", e), h._p = new Promise(function(j, A) {
						h.onload = j, h.onerror = A
					}), h.addEventListener("load", function() {
						f.loading |= 1
					}), h.addEventListener("error", function() {
						f.loading |= 2
					}), f.loading |= 4, Ku(c, t, a)
				}
				c = {
					type: "stylesheet",
					instance: c,
					count: 1,
					state: f
				}, n.set(u, c)
			}
		}
	}

	function fy(e, t) {
		ll.X(e, t);
		var l = Ra;
		if (l && e) {
			var a = ta(l).hoistableScripts,
				n = Ca(e),
				u = a.get(n);
			u || (u = l.querySelector(_n(n)), u || (e = T({
				src: e,
				async: !0
			}, t), (t = zt.get(n)) && Ns(e, t), u = l.createElement("script"), Le(u), ke(u, "link", e), l.head.appendChild(u)), u = {
				type: "script",
				instance: u,
				count: 1,
				state: null
			}, a.set(n, u))
		}
	}

	function dy(e, t) {
		ll.M(e, t);
		var l = Ra;
		if (l && e) {
			var a = ta(l).hoistableScripts,
				n = Ca(e),
				u = a.get(n);
			u || (u = l.querySelector(_n(n)), u || (e = T({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = zt.get(n)) && Ns(e, t), u = l.createElement("script"), Le(u), ke(u, "link", e), l.head.appendChild(u)), u = {
				type: "script",
				instance: u,
				count: 1,
				state: null
			}, a.set(n, u))
		}
	}

	function Ud(e, t, l, a) {
		var n = (n = ae.current) ? ku(n) : null;
		if (!n) throw Error(o(446));
		switch (e) {
			case "meta":
			case "title":
				return null;
			case "style":
				return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Da(l.href), l = ta(n).hoistableStyles, a = l.get(t), a || (a = {
					type: "style",
					instance: null,
					count: 0,
					state: null
				}, l.set(t, a)), a) : {
					type: "void",
					instance: null,
					count: 0,
					state: null
				};
			case "link":
				if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
					e = Da(l.href);
					var u = ta(n).hoistableStyles,
						c = u.get(e);
					if (c || (n = n.ownerDocument || n, c = {
							type: "stylesheet",
							instance: null,
							count: 0,
							state: {
								loading: 0,
								preload: null
							}
						}, u.set(e, c), (u = n.querySelector(An(e))) && !u._p && (c.instance = u, c.state.loading = 5), zt.has(e) || (l = {
							rel: "preload",
							as: "style",
							href: l.href,
							crossOrigin: l.crossOrigin,
							integrity: l.integrity,
							media: l.media,
							hrefLang: l.hrefLang,
							referrerPolicy: l.referrerPolicy
						}, zt.set(e, l), u || my(n, e, l, c.state))), t && a === null) throw Error(o(528, ""));
					return c
				}
				if (t && a !== null) throw Error(o(529, ""));
				return null;
			case "script":
				return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ca(l), l = ta(n).hoistableScripts, a = l.get(t), a || (a = {
					type: "script",
					instance: null,
					count: 0,
					state: null
				}, l.set(t, a)), a) : {
					type: "void",
					instance: null,
					count: 0,
					state: null
				};
			default:
				throw Error(o(444, e))
		}
	}

	function Da(e) {
		return 'href="' + pt(e) + '"'
	}

	function An(e) {
		return 'link[rel="stylesheet"][' + e + "]"
	}

	function Hd(e) {
		return T({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		})
	}

	function my(e, t, l, a) {
		e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
			return a.loading |= 1
		}), t.addEventListener("error", function() {
			return a.loading |= 2
		}), ke(t, "link", l), Le(t), e.head.appendChild(t))
	}

	function Ca(e) {
		return '[src="' + pt(e) + '"]'
	}

	function _n(e) {
		return "script[async]" + e
	}

	function Bd(e, t, l) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var a = e.querySelector('style[data-href~="' + pt(l.href) + '"]');
				if (a) return t.instance = a, Le(a), a;
				var n = T({}, l, {
					"data-href": l.href,
					"data-precedence": l.precedence,
					href: null,
					precedence: null
				});
				return a = (e.ownerDocument || e).createElement("style"), Le(a), ke(a, "style", n), Ku(a, l.precedence, e), t.instance = a;
			case "stylesheet":
				n = Da(l.href);
				var u = e.querySelector(An(n));
				if (u) return t.state.loading |= 4, t.instance = u, Le(u), u;
				a = Hd(l), (n = zt.get(n)) && Ss(a, n), u = (e.ownerDocument || e).createElement("link"), Le(u);
				var c = u;
				return c._p = new Promise(function(f, h) {
					c.onload = f, c.onerror = h
				}), ke(u, "link", a), t.state.loading |= 4, Ku(u, l.precedence, e), t.instance = u;
			case "script":
				return u = Ca(l.src), (n = e.querySelector(_n(u))) ? (t.instance = n, Le(n), n) : (a = l, (n = zt.get(u)) && (a = T({}, l), Ns(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), Le(n), ke(n, "link", a), e.head.appendChild(n), t.instance = n);
			case "void":
				return null;
			default:
				throw Error(o(443, t.type))
		} else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Ku(a, l.precedence, e));
		return t.instance
	}

	function Ku(e, t, l) {
		for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, c = 0; c < a.length; c++) {
			var f = a[c];
			if (f.dataset.precedence === t) u = f;
			else if (u !== n) break
		}
		u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild))
	}

	function Ss(e, t) {
		e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
	}

	function Ns(e, t) {
		e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
	}
	var Ju = null;

	function qd(e, t, l) {
		if (Ju === null) {
			var a = new Map,
				n = Ju = new Map;
			n.set(l, a)
		} else n = Ju, a = n.get(l), a || (a = new Map, n.set(l, a));
		if (a.has(e)) return a;
		for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
			var u = l[n];
			if (!(u[Qa] || u[Xe] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
				var c = u.getAttribute(t) || "";
				c = e + c;
				var f = a.get(c);
				f ? f.push(u) : a.set(c, [u])
			}
		}
		return a
	}

	function Ld(e, t, l) {
		e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null)
	}

	function hy(e, t, l) {
		if (l === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title":
				return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
			case "script":
				if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
		}
		return !1
	}

	function Yd(e) {
		return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
	}

	function yy(e, t, l, a) {
		if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
			if (l.instance === null) {
				var n = Da(a.href),
					u = t.querySelector(An(n));
				if (u) {
					t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = $u.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, Le(u);
					return
				}
				u = t.ownerDocument || t, a = Hd(a), (n = zt.get(n)) && Ss(a, n), u = u.createElement("link"), Le(u);
				var c = u;
				c._p = new Promise(function(f, h) {
					c.onload = f, c.onerror = h
				}), ke(u, "link", a), l.instance = u
			}
			e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = $u.bind(e), t.addEventListener("load", l), t.addEventListener("error", l))
		}
	}
	var js = 0;

	function gy(e, t) {
		return e.stylesheets && e.count === 0 && Fu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
			var a = setTimeout(function() {
				if (e.stylesheets && Fu(e, e.stylesheets), e.unsuspend) {
					var u = e.unsuspend;
					e.unsuspend = null, u()
				}
			}, 6e4 + t);
			0 < e.imgBytes && js === 0 && (js = 62500 * W0());
			var n = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Fu(e, e.stylesheets), e.unsuspend)) {
					var u = e.unsuspend;
					e.unsuspend = null, u()
				}
			}, (e.imgBytes > js ? 50 : 800) + t);
			return e.unsuspend = l,
				function() {
					e.unsuspend = null, clearTimeout(a), clearTimeout(n)
				}
		} : null
	}

	function $u() {
		if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
			if (this.stylesheets) Fu(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				this.unsuspend = null, e()
			}
		}
	}
	var Wu = null;

	function Fu(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, Wu = new Map, t.forEach(vy, e), Wu = null, $u.call(e))
	}

	function vy(e, t) {
		if (!(t.state.loading & 4)) {
			var l = Wu.get(e);
			if (l) var a = l.get(null);
			else {
				l = new Map, Wu.set(e, l);
				for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
					var c = n[u];
					(c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), a = c)
				}
				a && l.set(null, a)
			}
			n = t.instance, c = n.getAttribute("data-precedence"), u = l.get(c) || a, u === a && l.set(null, n), l.set(c, n), this.count++, a = $u.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4
		}
	}
	var Mn = {
		$$typeof: J,
		Provider: null,
		Consumer: null,
		_currentValue: $,
		_currentValue2: $,
		_threadCount: 0
	};

	function py(e, t, l, a, n, u, c, f, h) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = pi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pi(0), this.hiddenUpdates = pi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = new Map
	}

	function Gd(e, t, l, a, n, u, c, f, h, j, A, D) {
		return e = new py(e, t, l, c, h, j, A, D, f), t = 1, u === !0 && (t |= 24), u = ot(3, null, null, t), e.current = u, u.stateNode = e, t = lc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
			element: a,
			isDehydrated: l,
			cache: t
		}, ic(u), e
	}

	function Xd(e) {
		return e ? (e = fa, e) : fa
	}

	function Qd(e, t, l, a, n, u) {
		n = Xd(n), a.context === null ? a.context = n : a.pendingContext = n, a = yl(t), a.payload = {
			element: l
		}, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = gl(e, a, t), l !== null && (ut(l, e, t), cn(l, e, t))
	}

	function Vd(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var l = e.retryLane;
			e.retryLane = l !== 0 && l < t ? l : t
		}
	}

	function Es(e, t) {
		Vd(e, t), (e = e.alternate) && Vd(e, t)
	}

	function Zd(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Ll(e, 67108864);
			t !== null && ut(t, e, 67108864), Es(e, 67108864)
		}
	}

	function kd(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = yt();
			t = xi(t);
			var l = Ll(e, t);
			l !== null && ut(l, e, t), Es(e, t)
		}
	}
	var Iu = !0;

	function xy(e, t, l, a) {
		var n = w.T;
		w.T = null;
		var u = U.p;
		try {
			U.p = 2, Ts(e, t, l, a)
		} finally {
			U.p = u, w.T = n
		}
	}

	function by(e, t, l, a) {
		var n = w.T;
		w.T = null;
		var u = U.p;
		try {
			U.p = 8, Ts(e, t, l, a)
		} finally {
			U.p = u, w.T = n
		}
	}

	function Ts(e, t, l, a) {
		if (Iu) {
			var n = zs(a);
			if (n === null) fs(e, t, a, Pu, l), Jd(e, a);
			else if (Ny(n, e, t, l, a)) a.stopPropagation();
			else if (Jd(e, a), t & 4 && -1 < Sy.indexOf(e)) {
				for (; n !== null;) {
					var u = ea(n);
					if (u !== null) switch (u.tag) {
						case 3:
							if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
								var c = Cl(u.pendingLanes);
								if (c !== 0) {
									var f = u;
									for (f.pendingLanes |= 2, f.entangledLanes |= 2; c;) {
										var h = 1 << 31 - st(c);
										f.entanglements[1] |= h, c &= ~h
									}
									Ht(u), (fe & 6) === 0 && (Uu = it() + 500, jn(0))
								}
							}
							break;
						case 31:
						case 13:
							f = Ll(u, 2), f !== null && ut(f, u, 2), Bu(), Es(u, 2)
					}
					if (u = zs(a), u === null && fs(e, t, a, Pu, l), u === n) break;
					n = u
				}
				n !== null && a.stopPropagation()
			} else fs(e, t, a, null, l)
		}
	}

	function zs(e) {
		return e = _i(e), As(e)
	}
	var Pu = null;

	function As(e) {
		if (Pu = null, e = Pl(e), e !== null) {
			var t = y(e);
			if (t === null) e = null;
			else {
				var l = t.tag;
				if (l === 13) {
					if (e = b(t), e !== null) return e;
					e = null
				} else if (l === 31) {
					if (e = _(t), e !== null) return e;
					e = null
				} else if (l === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null
				} else t !== e && (e = null)
			}
		}
		return Pu = e, null
	}

	function Kd(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 8;
			case "message":
				switch (ih()) {
					case Ps:
						return 2;
					case er:
						return 8;
					case Xn:
					case ch:
						return 32;
					case tr:
						return 268435456;
					default:
						return 32
				}
			default:
				return 32
		}
	}
	var _s = !1,
		Al = null,
		_l = null,
		Ml = null,
		wn = new Map,
		On = new Map,
		wl = [],
		Sy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

	function Jd(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Al = null;
				break;
			case "dragenter":
			case "dragleave":
				_l = null;
				break;
			case "mouseover":
			case "mouseout":
				Ml = null;
				break;
			case "pointerover":
			case "pointerout":
				wn.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				On.delete(t.pointerId)
		}
	}

	function Rn(e, t, l, a, n, u) {
		return e === null || e.nativeEvent !== u ? (e = {
			blockedOn: t,
			domEventName: l,
			eventSystemFlags: a,
			nativeEvent: u,
			targetContainers: [n]
		}, t !== null && (t = ea(t), t !== null && Zd(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e)
	}

	function Ny(e, t, l, a, n) {
		switch (t) {
			case "focusin":
				return Al = Rn(Al, e, t, l, a, n), !0;
			case "dragenter":
				return _l = Rn(_l, e, t, l, a, n), !0;
			case "mouseover":
				return Ml = Rn(Ml, e, t, l, a, n), !0;
			case "pointerover":
				var u = n.pointerId;
				return wn.set(u, Rn(wn.get(u) || null, e, t, l, a, n)), !0;
			case "gotpointercapture":
				return u = n.pointerId, On.set(u, Rn(On.get(u) || null, e, t, l, a, n)), !0
		}
		return !1
	}

	function $d(e) {
		var t = Pl(e.target);
		if (t !== null) {
			var l = y(t);
			if (l !== null) {
				if (t = l.tag, t === 13) {
					if (t = b(l), t !== null) {
						e.blockedOn = t, cr(e.priority, function() {
							kd(l)
						});
						return
					}
				} else if (t === 31) {
					if (t = _(l), t !== null) {
						e.blockedOn = t, cr(e.priority, function() {
							kd(l)
						});
						return
					}
				} else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
					return
				}
			}
		}
		e.blockedOn = null
	}

	function ei(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var l = zs(e.nativeEvent);
			if (l === null) {
				l = e.nativeEvent;
				var a = new l.constructor(l.type, l);
				Ai = a, l.target.dispatchEvent(a), Ai = null
			} else return t = ea(l), t !== null && Zd(t), e.blockedOn = l, !1;
			t.shift()
		}
		return !0
	}

	function Wd(e, t, l) {
		ei(e) && l.delete(t)
	}

	function jy() {
		_s = !1, Al !== null && ei(Al) && (Al = null), _l !== null && ei(_l) && (_l = null), Ml !== null && ei(Ml) && (Ml = null), wn.forEach(Wd), On.forEach(Wd)
	}

	function ti(e, t) {
		e.blockedOn === t && (e.blockedOn = null, _s || (_s = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, jy)))
	}
	var li = null;

	function Fd(e) {
		li !== e && (li = e, i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
			li === e && (li = null);
			for (var t = 0; t < e.length; t += 3) {
				var l = e[t],
					a = e[t + 1],
					n = e[t + 2];
				if (typeof a != "function") {
					if (As(a || l) === null) continue;
					break
				}
				var u = ea(l);
				u !== null && (e.splice(t, 3), t -= 3, zc(u, {
					pending: !0,
					data: n,
					method: l.method,
					action: a
				}, a, n))
			}
		}))
	}

	function Ua(e) {
		function t(h) {
			return ti(h, e)
		}
		Al !== null && ti(Al, e), _l !== null && ti(_l, e), Ml !== null && ti(Ml, e), wn.forEach(t), On.forEach(t);
		for (var l = 0; l < wl.length; l++) {
			var a = wl[l];
			a.blockedOn === e && (a.blockedOn = null)
		}
		for (; 0 < wl.length && (l = wl[0], l.blockedOn === null);) $d(l), l.blockedOn === null && wl.shift();
		if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
			for (a = 0; a < l.length; a += 3) {
				var n = l[a],
					u = l[a + 1],
					c = n[Pe] || null;
				if (typeof u == "function") c || Fd(l);
				else if (c) {
					var f = null;
					if (u && u.hasAttribute("formAction")) {
						if (n = u, c = u[Pe] || null) f = c.formAction;
						else if (As(n) !== null) continue
					} else f = c.action;
					typeof f == "function" ? l[a + 1] = f : (l.splice(a, 3), a -= 3), Fd(l)
				}
			}
	}

	function Id() {
		function e(u) {
			u.canIntercept && u.info === "react-transition" && u.intercept({
				handler: function() {
					return new Promise(function(c) {
						return n = c
					})
				},
				focusReset: "manual",
				scroll: "manual"
			})
		}

		function t() {
			n !== null && (n(), n = null), a || setTimeout(l, 20)
		}

		function l() {
			if (!a && !navigation.transition) {
				var u = navigation.currentEntry;
				u && u.url != null && navigation.navigate(u.url, {
					state: u.getState(),
					info: "react-transition",
					history: "replace"
				})
			}
		}
		if (typeof navigation == "object") {
			var a = !1,
				n = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100),
				function() {
					a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null)
				}
		}
	}

	function Ms(e) {
		this._internalRoot = e
	}
	ai.prototype.render = Ms.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(o(409));
		var l = t.current,
			a = yt();
		Qd(l, a, e, t, null, null)
	}, ai.prototype.unmount = Ms.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			Qd(e.current, 2, null, e, null, null), Bu(), t[Il] = null
		}
	};

	function ai(e) {
		this._internalRoot = e
	}
	ai.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = ir();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var l = 0; l < wl.length && t !== 0 && t < wl[l].priority; l++);
			wl.splice(l, 0, e), l === 0 && $d(e)
		}
	};
	var Pd = r.version;
	if (Pd !== "19.2.4") throw Error(o(527, Pd, "19.2.4"));
	U.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
		return e = p(t), e = e !== null ? R(e) : null, e = e === null ? null : e.stateNode, e
	};
	var Ey = {
		bundleType: 0,
		version: "19.2.4",
		rendererPackageName: "react-dom",
		currentDispatcherRef: w,
		reconcilerVersion: "19.2.4"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!ni.isDisabled && ni.supportsFiber) try {
			Ya = ni.inject(Ey), ct = ni
		} catch {}
	}
	return Cn.createRoot = function(e, t) {
		if (!m(e)) throw Error(o(299));
		var l = !1,
			a = "",
			n = uf,
			u = cf,
			c = sf;
		return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = Gd(e, 1, !1, null, null, l, a, null, n, u, c, Id), e[Il] = t.current, os(e), new Ms(t)
	}, Cn.hydrateRoot = function(e, t, l) {
		if (!m(e)) throw Error(o(299));
		var a = !1,
			n = "",
			u = uf,
			c = cf,
			f = sf,
			h = null;
		return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (f = l.onRecoverableError), l.formState !== void 0 && (h = l.formState)), t = Gd(e, 1, !0, t, l ?? null, a, n, h, u, c, f, Id), t.context = Xd(null), l = t.current, a = yt(), a = xi(a), n = yl(a), n.callback = null, gl(l, n, a), l = a, t.current.lanes = l, Xa(t, l), Ht(t), e[Il] = t.current, os(e), new ai(t)
	}, Cn.version = "19.2.4", Cn
}
var rm;

function Cy() {
	if (rm) return Rs.exports;
	rm = 1;

	function i() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
		} catch (r) {
			console.error(r)
		}
	}
	return i(), Rs.exports = Dy(), Rs.exports
}
var Uy = Cy();
const Sm = (...i) => i.filter((r, d, o) => !!r && r.trim() !== "" && o.indexOf(r) === d).join(" ").trim();
const Hy = i => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const By = i => i.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, d, o) => o ? o.toUpperCase() : d.toLowerCase());
const om = i => {
	const r = By(i);
	return r.charAt(0).toUpperCase() + r.slice(1)
};
var qy = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
const Ly = i => {
	for (const r in i)
		if (r.startsWith("aria-") || r === "role" || r === "title") return !0;
	return !1
};
const Yy = M.forwardRef(({
	color: i = "currentColor",
	size: r = 24,
	strokeWidth: d = 2,
	absoluteStrokeWidth: o,
	className: m = "",
	children: y,
	iconNode: b,
	..._
}, N) => M.createElement("svg", {
	ref: N,
	...qy,
	width: r,
	height: r,
	stroke: i,
	strokeWidth: o ? Number(d) * 24 / Number(r) : d,
	className: Sm("lucide", m),
	...!y && !Ly(_) && {
		"aria-hidden": "true"
	},
	..._
}, [...b.map(([p, R]) => M.createElement(p, R)), ...Array.isArray(y) ? y : [y]]));
const le = (i, r) => {
	const d = M.forwardRef(({
		className: o,
		...m
	}, y) => M.createElement(Yy, {
		ref: y,
		iconNode: r,
		className: Sm(`lucide-${Hy(om(i))}`, `lucide-${i}`, o),
		...m
	}));
	return d.displayName = om(i), d
};
const Gy = [
		["path", {
			d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
			key: "169zse"
		}]
	],
	fm = le("activity", Gy);
const Xy = [
		["path", {
			d: "M5 12h14",
			key: "1ays0h"
		}],
		["path", {
			d: "m12 5 7 7-7 7",
			key: "xquz4c"
		}]
	],
	Nm = le("arrow-right", Xy);
const Qy = [
		["path", {
			d: "M7 7h10v10",
			key: "1tivn9"
		}],
		["path", {
			d: "M7 17 17 7",
			key: "1vkiza"
		}]
	],
	dm = le("arrow-up-right", Qy);
const Vy = [
		["path", {
			d: "M12 18V5",
			key: "adv99a"
		}],
		["path", {
			d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",
			key: "1e3is1"
		}],
		["path", {
			d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",
			key: "1gqd8o"
		}],
		["path", {
			d: "M17.997 5.125a4 4 0 0 1 2.526 5.77",
			key: "iwvgf7"
		}],
		["path", {
			d: "M18 18a4 4 0 0 0 2-7.464",
			key: "efp6ie"
		}],
		["path", {
			d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",
			key: "1gq6am"
		}],
		["path", {
			d: "M6 18a4 4 0 0 1-2-7.464",
			key: "k1g0md"
		}],
		["path", {
			d: "M6.003 5.125a4 4 0 0 0-2.526 5.77",
			key: "q97ue3"
		}]
	],
	Gs = le("brain", Vy);
const Zy = [
		["path", {
			d: "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z",
			key: "trhst0"
		}],
		["path", {
			d: "M17 21v-2",
			key: "ds4u3f"
		}],
		["path", {
			d: "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10",
			key: "1mo9zo"
		}],
		["path", {
			d: "M21 21v-2",
			key: "eo0ou"
		}],
		["path", {
			d: "M3 5V3",
			key: "1k5hjh"
		}],
		["path", {
			d: "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z",
			key: "1dd30t"
		}],
		["path", {
			d: "M7 5V3",
			key: "1t1388"
		}]
	],
	ky = le("cable", Zy);
const Ky = [
		["path", {
			d: "M20 6 9 17l-5-5",
			key: "1gmf2c"
		}]
	],
	Hs = le("check", Ky);
const Jy = [
		["path", {
			d: "M21.801 10A10 10 0 1 1 17 3.335",
			key: "yps3ct"
		}],
		["path", {
			d: "m9 11 3 3L22 4",
			key: "1pflzl"
		}]
	],
	Bs = le("circle-check-big", Jy);
const $y = [
		["path", {
			d: "M12 6v6l4 2",
			key: "mmk7yg"
		}],
		["circle", {
			cx: "12",
			cy: "12",
			r: "10",
			key: "1mglay"
		}]
	],
	Wy = le("clock", $y);
const Fy = [
		["path", {
			d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
			key: "p7xjir"
		}]
	],
	Iy = le("cloud", Fy);
const Py = [
		["path", {
			d: "m18 16 4-4-4-4",
			key: "1inbqp"
		}],
		["path", {
			d: "m6 8-4 4 4 4",
			key: "15zrgr"
		}],
		["path", {
			d: "m14.5 4-5 16",
			key: "e7oirm"
		}]
	],
	e1 = le("code-xml", Py);
const t1 = [
		["ellipse", {
			cx: "12",
			cy: "5",
			rx: "9",
			ry: "3",
			key: "msslwz"
		}],
		["path", {
			d: "M3 5V19A9 3 0 0 0 21 19V5",
			key: "1wlel7"
		}],
		["path", {
			d: "M3 12A9 3 0 0 0 21 12",
			key: "mv7ke4"
		}]
	],
	l1 = le("database", t1);
const a1 = [
		["path", {
			d: "M12 15V3",
			key: "m9g1x1"
		}],
		["path", {
			d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
			key: "ih7n3h"
		}],
		["path", {
			d: "m7 10 5 5 5-5",
			key: "brsn70"
		}]
	],
	n1 = le("download", a1);
const u1 = [
		["path", {
			d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
			key: "1nclc0"
		}],
		["circle", {
			cx: "12",
			cy: "12",
			r: "3",
			key: "1v7zrd"
		}]
	],
	i1 = le("eye", u1);
const c1 = [
		["path", {
			d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
			key: "1jg4f8"
		}]
	],
	s1 = le("facebook", c1);
const r1 = [
		["line", {
			x1: "6",
			x2: "6",
			y1: "3",
			y2: "15",
			key: "17qcm7"
		}],
		["circle", {
			cx: "18",
			cy: "6",
			r: "3",
			key: "1h7g24"
		}],
		["circle", {
			cx: "6",
			cy: "18",
			r: "3",
			key: "fqmcym"
		}],
		["path", {
			d: "M18 9a9 9 0 0 1-9 9",
			key: "n2h4wq"
		}]
	],
	o1 = le("git-branch", r1);
const f1 = [
		["path", {
			d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",
			key: "12oyoe"
		}],
		["path", {
			d: "M21 16v2a4 4 0 0 1-4 4h-5",
			key: "1x7m43"
		}]
	],
	d1 = le("headset", f1);
const m1 = [
		["path", {
			d: "m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49",
			key: "wg5jx"
		}],
		["path", {
			d: "M15 15h6",
			key: "1u4692"
		}],
		["path", {
			d: "M18 12v6",
			key: "1houu1"
		}]
	],
	h1 = le("heart-plus", m1);
const y1 = [
		["rect", {
			width: "20",
			height: "20",
			x: "2",
			y: "2",
			rx: "5",
			ry: "5",
			key: "2e1cvw"
		}],
		["path", {
			d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
			key: "9exkf1"
		}],
		["line", {
			x1: "17.5",
			x2: "17.51",
			y1: "6.5",
			y2: "6.5",
			key: "r4j83e"
		}]
	],
	g1 = le("instagram", y1);
const v1 = [
		["path", {
			d: "M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z",
			key: "sb8slu"
		}],
		["path", {
			d: "m14.207 4.793-3.414 3.414",
			key: "m2x3oj"
		}],
		["path", {
			d: "M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z",
			key: "8b3myj"
		}],
		["path", {
			d: "m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18",
			key: "43s6cu"
		}]
	],
	p1 = le("lamp-desk", v1);
const x1 = [
		["path", {
			d: "M10 18v-7",
			key: "wt116b"
		}],
		["path", {
			d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",
			key: "1m329m"
		}],
		["path", {
			d: "M14 18v-7",
			key: "vav6t3"
		}],
		["path", {
			d: "M18 18v-7",
			key: "aexdmj"
		}],
		["path", {
			d: "M3 22h18",
			key: "8prr45"
		}],
		["path", {
			d: "M6 18v-7",
			key: "1ivflk"
		}]
	],
	b1 = le("landmark", x1);
const S1 = [
		["path", {
			d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
			key: "1gvzjb"
		}],
		["path", {
			d: "M9 18h6",
			key: "x1upvd"
		}],
		["path", {
			d: "M10 22h4",
			key: "ceow96"
		}]
	],
	N1 = le("lightbulb", S1);
const j1 = [
		["path", {
			d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
			key: "c2jq9f"
		}],
		["rect", {
			width: "4",
			height: "12",
			x: "2",
			y: "9",
			key: "mk3on5"
		}],
		["circle", {
			cx: "4",
			cy: "4",
			r: "2",
			key: "bt5ra8"
		}]
	],
	E1 = le("linkedin", j1);
const T1 = [
		["path", {
			d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
			key: "132q7q"
		}],
		["rect", {
			x: "2",
			y: "4",
			width: "20",
			height: "16",
			rx: "2",
			key: "izxlao"
		}]
	],
	jm = le("mail", T1);
const z1 = [
		["path", {
			d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
			key: "1r0f0z"
		}],
		["circle", {
			cx: "12",
			cy: "10",
			r: "3",
			key: "ilqhr7"
		}]
	],
	Em = le("map-pin", z1);
const A1 = [
		["path", {
			d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
			key: "q8bfy3"
		}],
		["path", {
			d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",
			key: "1853fq"
		}],
		["path", {
			d: "M8 6v8",
			key: "15ugcq"
		}]
	],
	_1 = le("megaphone", A1);
const M1 = [
		["path", {
			d: "M4 5h16",
			key: "1tepv9"
		}],
		["path", {
			d: "M4 12h16",
			key: "1lakjw"
		}],
		["path", {
			d: "M4 19h16",
			key: "1djgab"
		}]
	],
	w1 = le("menu", M1);
const O1 = [
		["path", {
			d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
			key: "1sd12s"
		}]
	],
	Tm = le("message-circle", O1);
const R1 = [
		["path", {
			d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",
			key: "re6nr2"
		}],
		["path", {
			d: "M2 6h4",
			key: "aawbzj"
		}],
		["path", {
			d: "M2 10h4",
			key: "l0bgd4"
		}],
		["path", {
			d: "M2 14h4",
			key: "1gsvsf"
		}],
		["path", {
			d: "M2 18h4",
			key: "1bu2t1"
		}],
		["path", {
			d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
			key: "pqwjuv"
		}]
	],
	zm = le("notebook-pen", R1);
const D1 = [
		["path", {
			d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
			key: "9njp5v"
		}]
	],
	si = le("phone", D1);
const C1 = [
		["path", {
			d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
			key: "1ffxy3"
		}],
		["path", {
			d: "m21.854 2.147-10.94 10.939",
			key: "12cjpa"
		}]
	],
	U1 = le("send", C1);
const H1 = [
		["rect", {
			width: "20",
			height: "8",
			x: "2",
			y: "2",
			rx: "2",
			ry: "2",
			key: "ngkwjq"
		}],
		["rect", {
			width: "20",
			height: "8",
			x: "2",
			y: "14",
			rx: "2",
			ry: "2",
			key: "iecqi9"
		}],
		["line", {
			x1: "6",
			x2: "6.01",
			y1: "6",
			y2: "6",
			key: "16zg32"
		}],
		["line", {
			x1: "6",
			x2: "6.01",
			y1: "18",
			y2: "18",
			key: "nzw8ys"
		}]
	],
	B1 = le("server", H1);
const q1 = [
		["path", {
			d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
			key: "1i5ecw"
		}],
		["circle", {
			cx: "12",
			cy: "12",
			r: "3",
			key: "1v7zrd"
		}]
	],
	Am = le("settings", q1);
const L1 = [
		["path", {
			d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
			key: "oel41y"
		}],
		["path", {
			d: "m9 12 2 2 4-4",
			key: "dzmm74"
		}]
	],
	_m = le("shield-check", L1);
const Y1 = [
		["path", {
			d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
			key: "oel41y"
		}]
	],
	G1 = le("shield", Y1);
const X1 = [
		["circle", {
			cx: "12",
			cy: "12",
			r: "10",
			key: "1mglay"
		}],
		["circle", {
			cx: "12",
			cy: "12",
			r: "6",
			key: "1vlfrh"
		}],
		["circle", {
			cx: "12",
			cy: "12",
			r: "2",
			key: "1c9p78"
		}]
	],
	mm = le("target", X1);
const Q1 = [
		["path", {
			d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",
			key: "k4qptu"
		}],
		["path", {
			d: "m13.56 11.747 4.332-.924",
			key: "19l80z"
		}],
		["path", {
			d: "m16 21-3.105-6.21",
			key: "7oh9d"
		}],
		["path", {
			d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",
			key: "m7xp4m"
		}],
		["path", {
			d: "m6.158 8.633 1.114 4.456",
			key: "74o979"
		}],
		["path", {
			d: "m8 21 3.105-6.21",
			key: "1fvxut"
		}],
		["circle", {
			cx: "12",
			cy: "13",
			r: "2",
			key: "1c1ljs"
		}]
	],
	V1 = le("telescope", Q1);
const Z1 = [
		["path", {
			d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",
			key: "125lnx"
		}],
		["path", {
			d: "M8.5 2h7",
			key: "csnxdl"
		}],
		["path", {
			d: "M14.5 16h-5",
			key: "1ox875"
		}]
	],
	k1 = le("test-tube", Z1);
const K1 = [
		["path", {
			d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
			key: "1yyitq"
		}],
		["path", {
			d: "M16 3.128a4 4 0 0 1 0 7.744",
			key: "16gr8j"
		}],
		["path", {
			d: "M22 21v-2a4 4 0 0 0-3-3.87",
			key: "kshegd"
		}],
		["circle", {
			cx: "9",
			cy: "7",
			r: "4",
			key: "nufk8"
		}]
	],
	Mm = le("users", K1);
const J1 = [
		["path", {
			d: "m10.586 5.414-5.172 5.172",
			key: "4mc350"
		}],
		["path", {
			d: "m18.586 13.414-5.172 5.172",
			key: "8c96vv"
		}],
		["path", {
			d: "M6 12h12",
			key: "8npq4p"
		}],
		["circle", {
			cx: "12",
			cy: "20",
			r: "2",
			key: "144qzu"
		}],
		["circle", {
			cx: "12",
			cy: "4",
			r: "2",
			key: "muu5ef"
		}],
		["circle", {
			cx: "20",
			cy: "12",
			r: "2",
			key: "1xzzfp"
		}],
		["circle", {
			cx: "4",
			cy: "12",
			r: "2",
			key: "1hvhnz"
		}]
	],
	$1 = le("waypoints", J1);
const W1 = [
		["path", {
			d: "M18 6 6 18",
			key: "1bl5f8"
		}],
		["path", {
			d: "m6 6 12 12",
			key: "d8bk6v"
		}]
	],
	F1 = le("x", W1);
var hm = "popstate";

function I1(i = {}) {
	function r(o, m) {
		let {
			pathname: y,
			search: b,
			hash: _
		} = o.location;
		return Xs("", {
			pathname: y,
			search: b,
			hash: _
		}, m.state && m.state.usr || null, m.state && m.state.key || "default")
	}

	function d(o, m) {
		return typeof m == "string" ? m : Hn(m)
	}
	return eg(r, d, null, i)
}

function ze(i, r) {
	if (i === !1 || i === null || typeof i > "u") throw new Error(r)
}

function Bt(i, r) {
	if (!i) {
		typeof console < "u" && console.warn(r);
		try {
			throw new Error(r)
		} catch {}
	}
}

function P1() {
	return Math.random().toString(36).substring(2, 10)
}

function ym(i, r) {
	return {
		usr: i.state,
		key: i.key,
		idx: r
	}
}

function Xs(i, r, d = null, o) {
	return {
		pathname: typeof i == "string" ? i : i.pathname,
		search: "",
		hash: "",
		...typeof r == "string" ? Ba(r) : r,
		state: d,
		key: r && r.key || o || P1()
	}
}

function Hn({
	pathname: i = "/",
	search: r = "",
	hash: d = ""
}) {
	return r && r !== "?" && (i += r.charAt(0) === "?" ? r : "?" + r), d && d !== "#" && (i += d.charAt(0) === "#" ? d : "#" + d), i
}

function Ba(i) {
	let r = {};
	if (i) {
		let d = i.indexOf("#");
		d >= 0 && (r.hash = i.substring(d), i = i.substring(0, d));
		let o = i.indexOf("?");
		o >= 0 && (r.search = i.substring(o), i = i.substring(0, o)), i && (r.pathname = i)
	}
	return r
}

function eg(i, r, d, o = {}) {
	let {
		window: m = document.defaultView,
		v5Compat: y = !1
	} = o, b = m.history, _ = "POP", N = null, p = R();
	p == null && (p = 0, b.replaceState({
		...b.state,
		idx: p
	}, ""));

	function R() {
		return (b.state || {
			idx: null
		}).idx
	}

	function T() {
		_ = "POP";
		let X = R(),
			k = X == null ? null : X - p;
		p = X, N && N({
			action: _,
			location: V.location,
			delta: k
		})
	}

	function B(X, k) {
		_ = "PUSH";
		let L = Xs(V.location, X, k);
		p = R() + 1;
		let J = ym(L, p),
			Ne = V.createHref(L);
		try {
			b.pushState(J, "", Ne)
		} catch (Se) {
			if (Se instanceof DOMException && Se.name === "DataCloneError") throw Se;
			m.location.assign(Ne)
		}
		y && N && N({
			action: _,
			location: V.location,
			delta: 1
		})
	}

	function Q(X, k) {
		_ = "REPLACE";
		let L = Xs(V.location, X, k);
		p = R();
		let J = ym(L, p),
			Ne = V.createHref(L);
		b.replaceState(J, "", Ne), y && N && N({
			action: _,
			location: V.location,
			delta: 0
		})
	}

	function W(X) {
		return tg(X)
	}
	let V = {
		get action() {
			return _
		},
		get location() {
			return i(m, b)
		},
		listen(X) {
			if (N) throw new Error("A history only accepts one active listener");
			return m.addEventListener(hm, T), N = X, () => {
				m.removeEventListener(hm, T), N = null
			}
		},
		createHref(X) {
			return r(m, X)
		},
		createURL: W,
		encodeLocation(X) {
			let k = W(X);
			return {
				pathname: k.pathname,
				search: k.search,
				hash: k.hash
			}
		},
		push: B,
		replace: Q,
		go(X) {
			return b.go(X)
		}
	};
	return V
}

function tg(i, r = !1) {
	let d = "http://localhost";
	typeof window < "u" && (d = window.location.origin !== "null" ? window.location.origin : window.location.href), ze(d, "No window.location.(origin|href) available to create URL");
	let o = typeof i == "string" ? i : Hn(i);
	return o = o.replace(/ $/, "%20"), !r && o.startsWith("//") && (o = d + o), new URL(o, d)
}

function wm(i, r, d = "/") {
	return lg(i, r, d, !1)
}

function lg(i, r, d, o) {
	let m = typeof r == "string" ? Ba(r) : r,
		y = nl(m.pathname || "/", d);
	if (y == null) return null;
	let b = Om(i);
	ag(b);
	let _ = null;
	for (let N = 0; _ == null && N < b.length; ++N) {
		let p = hg(y);
		_ = dg(b[N], p, o)
	}
	return _
}

function Om(i, r = [], d = [], o = "", m = !1) {
	let y = (b, _, N = m, p) => {
		let R = {
			relativePath: p === void 0 ? b.path || "" : p,
			caseSensitive: b.caseSensitive === !0,
			childrenIndex: _,
			route: b
		};
		if (R.relativePath.startsWith("/")) {
			if (!R.relativePath.startsWith(o) && N) return;
			ze(R.relativePath.startsWith(o), `Absolute route path "${R.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), R.relativePath = R.relativePath.slice(o.length)
		}
		let T = al([o, R.relativePath]),
			B = d.concat(R);
		b.children && b.children.length > 0 && (ze(b.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${T}".`), Om(b.children, r, B, T, N)), !(b.path == null && !b.index) && r.push({
			path: T,
			score: og(T, b.index),
			routesMeta: B
		})
	};
	return i.forEach((b, _) => {
		if (b.path === "" || !b.path?.includes("?")) y(b, _);
		else
			for (let N of Rm(b.path)) y(b, _, !0, N)
	}), r
}

function Rm(i) {
	let r = i.split("/");
	if (r.length === 0) return [];
	let [d, ...o] = r, m = d.endsWith("?"), y = d.replace(/\?$/, "");
	if (o.length === 0) return m ? [y, ""] : [y];
	let b = Rm(o.join("/")),
		_ = [];
	return _.push(...b.map(N => N === "" ? y : [y, N].join("/"))), m && _.push(...b), _.map(N => i.startsWith("/") && N === "" ? "/" : N)
}

function ag(i) {
	i.sort((r, d) => r.score !== d.score ? d.score - r.score : fg(r.routesMeta.map(o => o.childrenIndex), d.routesMeta.map(o => o.childrenIndex)))
}
var ng = /^:[\w-]+$/,
	ug = 3,
	ig = 2,
	cg = 1,
	sg = 10,
	rg = -2,
	gm = i => i === "*";

function og(i, r) {
	let d = i.split("/"),
		o = d.length;
	return d.some(gm) && (o += rg), r && (o += ig), d.filter(m => !gm(m)).reduce((m, y) => m + (ng.test(y) ? ug : y === "" ? cg : sg), o)
}

function fg(i, r) {
	return i.length === r.length && i.slice(0, -1).every((o, m) => o === r[m]) ? i[i.length - 1] - r[r.length - 1] : 0
}

function dg(i, r, d = !1) {
	let {
		routesMeta: o
	} = i, m = {}, y = "/", b = [];
	for (let _ = 0; _ < o.length; ++_) {
		let N = o[_],
			p = _ === o.length - 1,
			R = y === "/" ? r : r.slice(y.length) || "/",
			T = ri({
				path: N.relativePath,
				caseSensitive: N.caseSensitive,
				end: p
			}, R),
			B = N.route;
		if (!T && p && d && !o[o.length - 1].route.index && (T = ri({
				path: N.relativePath,
				caseSensitive: N.caseSensitive,
				end: !1
			}, R)), !T) return null;
		Object.assign(m, T.params), b.push({
			params: m,
			pathname: al([y, T.pathname]),
			pathnameBase: pg(al([y, T.pathnameBase])),
			route: B
		}), T.pathnameBase !== "/" && (y = al([y, T.pathnameBase]))
	}
	return b
}

function ri(i, r) {
	typeof i == "string" && (i = {
		path: i,
		caseSensitive: !1,
		end: !0
	});
	let [d, o] = mg(i.path, i.caseSensitive, i.end), m = r.match(d);
	if (!m) return null;
	let y = m[0],
		b = y.replace(/(.)\/+$/, "$1"),
		_ = m.slice(1);
	return {
		params: o.reduce((p, {
			paramName: R,
			isOptional: T
		}, B) => {
			if (R === "*") {
				let W = _[B] || "";
				b = y.slice(0, y.length - W.length).replace(/(.)\/+$/, "$1")
			}
			const Q = _[B];
			return T && !Q ? p[R] = void 0 : p[R] = (Q || "").replace(/%2F/g, "/"), p
		}, {}),
		pathname: y,
		pathnameBase: b,
		pattern: i
	}
}

function mg(i, r = !1, d = !0) {
	Bt(i === "*" || !i.endsWith("*") || i.endsWith("/*"), `Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);
	let o = [],
		m = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (b, _, N) => (o.push({
			paramName: _,
			isOptional: N != null
		}), N ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
	return i.endsWith("*") ? (o.push({
		paramName: "*"
	}), m += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : d ? m += "\\/*$" : i !== "" && i !== "/" && (m += "(?:(?=\\/|$))"), [new RegExp(m, r ? void 0 : "i"), o]
}

function hg(i) {
	try {
		return i.split("/").map(r => decodeURIComponent(r).replace(/\//g, "%2F")).join("/")
	} catch (r) {
		return Bt(!1, `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`), i
	}
}

function nl(i, r) {
	if (r === "/") return i;
	if (!i.toLowerCase().startsWith(r.toLowerCase())) return null;
	let d = r.endsWith("/") ? r.length - 1 : r.length,
		o = i.charAt(d);
	return o && o !== "/" ? null : i.slice(d) || "/"
}
var yg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

function gg(i, r = "/") {
	let {
		pathname: d,
		search: o = "",
		hash: m = ""
	} = typeof i == "string" ? Ba(i) : i, y;
	return d ? (d = d.replace(/\/\/+/g, "/"), d.startsWith("/") ? y = vm(d.substring(1), "/") : y = vm(d, r)) : y = r, {
		pathname: y,
		search: xg(o),
		hash: bg(m)
	}
}

function vm(i, r) {
	let d = r.replace(/\/+$/, "").split("/");
	return i.split("/").forEach(m => {
		m === ".." ? d.length > 1 && d.pop() : m !== "." && d.push(m)
	}), d.length > 1 ? d.join("/") : "/"
}

function qs(i, r, d, o) {
	return `Cannot include a '${i}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function vg(i) {
	return i.filter((r, d) => d === 0 || r.route.path && r.route.path.length > 0)
}

function Dm(i) {
	let r = vg(i);
	return r.map((d, o) => o === r.length - 1 ? d.pathname : d.pathnameBase)
}

function Cm(i, r, d, o = !1) {
	let m;
	typeof i == "string" ? m = Ba(i) : (m = {
		...i
	}, ze(!m.pathname || !m.pathname.includes("?"), qs("?", "pathname", "search", m)), ze(!m.pathname || !m.pathname.includes("#"), qs("#", "pathname", "hash", m)), ze(!m.search || !m.search.includes("#"), qs("#", "search", "hash", m)));
	let y = i === "" || m.pathname === "",
		b = y ? "/" : m.pathname,
		_;
	if (b == null) _ = d;
	else {
		let T = r.length - 1;
		if (!o && b.startsWith("..")) {
			let B = b.split("/");
			for (; B[0] === "..";) B.shift(), T -= 1;
			m.pathname = B.join("/")
		}
		_ = T >= 0 ? r[T] : "/"
	}
	let N = gg(m, _),
		p = b && b !== "/" && b.endsWith("/"),
		R = (y || b === ".") && d.endsWith("/");
	return !N.pathname.endsWith("/") && (p || R) && (N.pathname += "/"), N
}
var al = i => i.join("/").replace(/\/\/+/g, "/"),
	pg = i => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
	xg = i => !i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i,
	bg = i => !i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i,
	Sg = class {
		constructor(i, r, d, o = !1) {
			this.status = i, this.statusText = r || "", this.internal = o, d instanceof Error ? (this.data = d.toString(), this.error = d) : this.data = d
		}
	};

function Ng(i) {
	return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data" in i
}

function jg(i) {
	return i.map(r => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/"
}
var Um = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";

function Hm(i, r) {
	let d = i;
	if (typeof d != "string" || !yg.test(d)) return {
		absoluteURL: void 0,
		isExternal: !1,
		to: d
	};
	let o = d,
		m = !1;
	if (Um) try {
		let y = new URL(window.location.href),
			b = d.startsWith("//") ? new URL(y.protocol + d) : new URL(d),
			_ = nl(b.pathname, r);
		b.origin === y.origin && _ != null ? d = _ + b.search + b.hash : m = !0
	} catch {
		Bt(!1, `<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
	}
	return {
		absoluteURL: o,
		isExternal: m,
		to: d
	}
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Bm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Bm);
var Eg = ["GET", ...Bm];
new Set(Eg);
var qa = M.createContext(null);
qa.displayName = "DataRouter";
var oi = M.createContext(null);
oi.displayName = "DataRouterState";
var Tg = M.createContext(!1),
	qm = M.createContext({
		isTransitioning: !1
	});
qm.displayName = "ViewTransition";
var zg = M.createContext(new Map);
zg.displayName = "Fetchers";
var Ag = M.createContext(null);
Ag.displayName = "Await";
var At = M.createContext(null);
At.displayName = "Navigation";
var Bn = M.createContext(null);
Bn.displayName = "Location";
var ul = M.createContext({
	outlet: null,
	matches: [],
	isDataRoute: !1
});
ul.displayName = "Route";
var Zs = M.createContext(null);
Zs.displayName = "RouteError";
var Lm = "REACT_ROUTER_ERROR",
	_g = "REDIRECT",
	Mg = "ROUTE_ERROR_RESPONSE";

function wg(i) {
	if (i.startsWith(`${Lm}:${_g}:{`)) try {
		let r = JSON.parse(i.slice(28));
		if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean") return r
	} catch {}
}

function Og(i) {
	if (i.startsWith(`${Lm}:${Mg}:{`)) try {
		let r = JSON.parse(i.slice(40));
		if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string") return new Sg(r.status, r.statusText, r.data)
	} catch {}
}

function Rg(i, {
	relative: r
} = {}) {
	ze(qn(), "useHref() may be used only in the context of a <Router> component.");
	let {
		basename: d,
		navigator: o
	} = M.useContext(At), {
		hash: m,
		pathname: y,
		search: b
	} = Ln(i, {
		relative: r
	}), _ = y;
	return d !== "/" && (_ = y === "/" ? d : al([d, y])), o.createHref({
		pathname: _,
		search: b,
		hash: m
	})
}

function qn() {
	return M.useContext(Bn) != null
}

function il() {
	return ze(qn(), "useLocation() may be used only in the context of a <Router> component."), M.useContext(Bn).location
}
var Ym = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function Gm(i) {
	M.useContext(At).static || M.useLayoutEffect(i)
}

function Dg() {
	let {
		isDataRoute: i
	} = M.useContext(ul);
	return i ? kg() : Cg()
}

function Cg() {
	ze(qn(), "useNavigate() may be used only in the context of a <Router> component.");
	let i = M.useContext(qa),
		{
			basename: r,
			navigator: d
		} = M.useContext(At),
		{
			matches: o
		} = M.useContext(ul),
		{
			pathname: m
		} = il(),
		y = JSON.stringify(Dm(o)),
		b = M.useRef(!1);
	return Gm(() => {
		b.current = !0
	}), M.useCallback((N, p = {}) => {
		if (Bt(b.current, Ym), !b.current) return;
		if (typeof N == "number") {
			d.go(N);
			return
		}
		let R = Cm(N, JSON.parse(y), m, p.relative === "path");
		i == null && r !== "/" && (R.pathname = R.pathname === "/" ? r : al([r, R.pathname])), (p.replace ? d.replace : d.push)(R, p.state, p)
	}, [r, d, y, m, i])
}
M.createContext(null);

function Ln(i, {
	relative: r
} = {}) {
	let {
		matches: d
	} = M.useContext(ul), {
		pathname: o
	} = il(), m = JSON.stringify(Dm(d));
	return M.useMemo(() => Cm(i, JSON.parse(m), o, r === "path"), [i, m, o, r])
}

function Ug(i, r) {
	return Xm(i, r)
}

function Xm(i, r, d, o, m) {
	ze(qn(), "useRoutes() may be used only in the context of a <Router> component.");
	let {
		navigator: y
	} = M.useContext(At), {
		matches: b
	} = M.useContext(ul), _ = b[b.length - 1], N = _ ? _.params : {}, p = _ ? _.pathname : "/", R = _ ? _.pathnameBase : "/", T = _ && _.route;
	{
		let L = T && T.path || "";
		Vm(p, !T || L.endsWith("*") || L.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)
	}
	let B = il(),
		Q;
	if (r) {
		let L = typeof r == "string" ? Ba(r) : r;
		ze(R === "/" || L.pathname?.startsWith(R), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${R}" but pathname "${L.pathname}" was given in the \`location\` prop.`), Q = L
	} else Q = B;
	let W = Q.pathname || "/",
		V = W;
	if (R !== "/") {
		let L = R.replace(/^\//, "").split("/");
		V = "/" + W.replace(/^\//, "").split("/").slice(L.length).join("/")
	}
	let X = wm(i, {
		pathname: V
	});
	Bt(T || X != null, `No routes matched location "${Q.pathname}${Q.search}${Q.hash}" `), Bt(X == null || X[X.length - 1].route.element !== void 0 || X[X.length - 1].route.Component !== void 0 || X[X.length - 1].route.lazy !== void 0, `Matched leaf route at location "${Q.pathname}${Q.search}${Q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
	let k = Yg(X && X.map(L => Object.assign({}, L, {
		params: Object.assign({}, N, L.params),
		pathname: al([R, y.encodeLocation ? y.encodeLocation(L.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : L.pathname]),
		pathnameBase: L.pathnameBase === "/" ? R : al([R, y.encodeLocation ? y.encodeLocation(L.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : L.pathnameBase])
	})), b, d, o, m);
	return r && k ? M.createElement(Bn.Provider, {
		value: {
			location: {
				pathname: "/",
				search: "",
				hash: "",
				state: null,
				key: "default",
				...Q
			},
			navigationType: "POP"
		}
	}, k) : k
}

function Hg() {
	let i = Zg(),
		r = Ng(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i),
		d = i instanceof Error ? i.stack : null,
		o = "rgba(200,200,200, 0.5)",
		m = {
			padding: "0.5rem",
			backgroundColor: o
		},
		y = {
			padding: "2px 4px",
			backgroundColor: o
		},
		b = null;
	return console.error("Error handled by React Router default ErrorBoundary:", i), b = M.createElement(M.Fragment, null, M.createElement("p", null, "💿 Hey developer 👋"), M.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", M.createElement("code", {
		style: y
	}, "ErrorBoundary"), " or", " ", M.createElement("code", {
		style: y
	}, "errorElement"), " prop on your route.")), M.createElement(M.Fragment, null, M.createElement("h2", null, "Unexpected Application Error!"), M.createElement("h3", {
		style: {
			fontStyle: "italic"
		}
	}, r), d ? M.createElement("pre", {
		style: m
	}, d) : null, b)
}
var Bg = M.createElement(Hg, null),
	Qm = class extends M.Component {
		constructor(i) {
			super(i), this.state = {
				location: i.location,
				revalidation: i.revalidation,
				error: i.error
			}
		}
		static getDerivedStateFromError(i) {
			return {
				error: i
			}
		}
		static getDerivedStateFromProps(i, r) {
			return r.location !== i.location || r.revalidation !== "idle" && i.revalidation === "idle" ? {
				error: i.error,
				location: i.location,
				revalidation: i.revalidation
			} : {
				error: i.error !== void 0 ? i.error : r.error,
				location: r.location,
				revalidation: i.revalidation || r.revalidation
			}
		}
		componentDidCatch(i, r) {
			this.props.onError ? this.props.onError(i, r) : console.error("React Router caught the following error during render", i)
		}
		render() {
			let i = this.state.error;
			if (this.context && typeof i == "object" && i && "digest" in i && typeof i.digest == "string") {
				const d = Og(i.digest);
				d && (i = d)
			}
			let r = i !== void 0 ? M.createElement(ul.Provider, {
				value: this.props.routeContext
			}, M.createElement(Zs.Provider, {
				value: i,
				children: this.props.component
			})) : this.props.children;
			return this.context ? M.createElement(qg, {
				error: i
			}, r) : r
		}
	};
Qm.contextType = Tg;
var Ls = new WeakMap;

function qg({
	children: i,
	error: r
}) {
	let {
		basename: d
	} = M.useContext(At);
	if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
		let o = wg(r.digest);
		if (o) {
			let m = Ls.get(r);
			if (m) throw m;
			let y = Hm(o.location, d);
			if (Um && !Ls.get(r))
				if (y.isExternal || o.reloadDocument) window.location.href = y.absoluteURL || y.to;
				else {
					const b = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(y.to, {
						replace: o.replace
					}));
					throw Ls.set(r, b), b
				} return M.createElement("meta", {
				httpEquiv: "refresh",
				content: `0;url=${y.absoluteURL||y.to}`
			})
		}
	}
	return i
}

function Lg({
	routeContext: i,
	match: r,
	children: d
}) {
	let o = M.useContext(qa);
	return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), M.createElement(ul.Provider, {
		value: i
	}, d)
}

function Yg(i, r = [], d = null, o = null, m = null) {
	if (i == null) {
		if (!d) return null;
		if (d.errors) i = d.matches;
		else if (r.length === 0 && !d.initialized && d.matches.length > 0) i = d.matches;
		else return null
	}
	let y = i,
		b = d?.errors;
	if (b != null) {
		let R = y.findIndex(T => T.route.id && b?.[T.route.id] !== void 0);
		ze(R >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(b).join(",")}`), y = y.slice(0, Math.min(y.length, R + 1))
	}
	let _ = !1,
		N = -1;
	if (d)
		for (let R = 0; R < y.length; R++) {
			let T = y[R];
			if ((T.route.HydrateFallback || T.route.hydrateFallbackElement) && (N = R), T.route.id) {
				let {
					loaderData: B,
					errors: Q
				} = d, W = T.route.loader && !B.hasOwnProperty(T.route.id) && (!Q || Q[T.route.id] === void 0);
				if (T.route.lazy || W) {
					_ = !0, N >= 0 ? y = y.slice(0, N + 1) : y = [y[0]];
					break
				}
			}
		}
	let p = d && o ? (R, T) => {
		o(R, {
			location: d.location,
			params: d.matches?.[0]?.params ?? {},
			unstable_pattern: jg(d.matches),
			errorInfo: T
		})
	} : void 0;
	return y.reduceRight((R, T, B) => {
		let Q, W = !1,
			V = null,
			X = null;
		d && (Q = b && T.route.id ? b[T.route.id] : void 0, V = T.route.errorElement || Bg, _ && (N < 0 && B === 0 ? (Vm("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), W = !0, X = null) : N === B && (W = !0, X = T.route.hydrateFallbackElement || null)));
		let k = r.concat(y.slice(0, B + 1)),
			L = () => {
				let J;
				return Q ? J = V : W ? J = X : T.route.Component ? J = M.createElement(T.route.Component, null) : T.route.element ? J = T.route.element : J = R, M.createElement(Lg, {
					match: T,
					routeContext: {
						outlet: R,
						matches: k,
						isDataRoute: d != null
					},
					children: J
				})
			};
		return d && (T.route.ErrorBoundary || T.route.errorElement || B === 0) ? M.createElement(Qm, {
			location: d.location,
			revalidation: d.revalidation,
			component: V,
			error: Q,
			children: L(),
			routeContext: {
				outlet: null,
				matches: k,
				isDataRoute: !0
			},
			onError: p
		}) : L()
	}, null)
}

function ks(i) {
	return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function Gg(i) {
	let r = M.useContext(qa);
	return ze(r, ks(i)), r
}

function Xg(i) {
	let r = M.useContext(oi);
	return ze(r, ks(i)), r
}

function Qg(i) {
	let r = M.useContext(ul);
	return ze(r, ks(i)), r
}

function Ks(i) {
	let r = Qg(i),
		d = r.matches[r.matches.length - 1];
	return ze(d.route.id, `${i} can only be used on routes that contain a unique "id"`), d.route.id
}

function Vg() {
	return Ks("useRouteId")
}

function Zg() {
	let i = M.useContext(Zs),
		r = Xg("useRouteError"),
		d = Ks("useRouteError");
	return i !== void 0 ? i : r.errors?.[d]
}

function kg() {
	let {
		router: i
	} = Gg("useNavigate"), r = Ks("useNavigate"), d = M.useRef(!1);
	return Gm(() => {
		d.current = !0
	}), M.useCallback(async (m, y = {}) => {
		Bt(d.current, Ym), d.current && (typeof m == "number" ? await i.navigate(m) : await i.navigate(m, {
			fromRouteId: r,
			...y
		}))
	}, [i, r])
}
var pm = {};

function Vm(i, r, d) {
	!r && !pm[i] && (pm[i] = !0, Bt(!1, d))
}
M.memo(Kg);

function Kg({
	routes: i,
	future: r,
	state: d,
	onError: o
}) {
	return Xm(i, void 0, d, o, r)
}

function Ha(i) {
	ze(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}

function Jg({
	basename: i = "/",
	children: r = null,
	location: d,
	navigationType: o = "POP",
	navigator: m,
	static: y = !1,
	unstable_useTransitions: b
}) {
	ze(!qn(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
	let _ = i.replace(/^\/*/, "/"),
		N = M.useMemo(() => ({
			basename: _,
			navigator: m,
			static: y,
			unstable_useTransitions: b,
			future: {}
		}), [_, m, y, b]);
	typeof d == "string" && (d = Ba(d));
	let {
		pathname: p = "/",
		search: R = "",
		hash: T = "",
		state: B = null,
		key: Q = "default"
	} = d, W = M.useMemo(() => {
		let V = nl(p, _);
		return V == null ? null : {
			location: {
				pathname: V,
				search: R,
				hash: T,
				state: B,
				key: Q
			},
			navigationType: o
		}
	}, [_, p, R, T, B, Q, o]);
	return Bt(W != null, `<Router basename="${_}"> is not able to match the URL "${p}${R}${T}" because it does not start with the basename, so the <Router> won't render anything.`), W == null ? null : M.createElement(At.Provider, {
		value: N
	}, M.createElement(Bn.Provider, {
		children: r,
		value: W
	}))
}

function $g({
	children: i,
	location: r
}) {
	return Ug(Qs(i), r)
}

function Qs(i, r = []) {
	let d = [];
	return M.Children.forEach(i, (o, m) => {
		if (!M.isValidElement(o)) return;
		let y = [...r, m];
		if (o.type === M.Fragment) {
			d.push.apply(d, Qs(o.props.children, y));
			return
		}
		ze(o.type === Ha, `[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), ze(!o.props.index || !o.props.children, "An index route cannot have child routes.");
		let b = {
			id: o.props.id || y.join("-"),
			caseSensitive: o.props.caseSensitive,
			element: o.props.element,
			Component: o.props.Component,
			index: o.props.index,
			path: o.props.path,
			middleware: o.props.middleware,
			loader: o.props.loader,
			action: o.props.action,
			hydrateFallbackElement: o.props.hydrateFallbackElement,
			HydrateFallback: o.props.HydrateFallback,
			errorElement: o.props.errorElement,
			ErrorBoundary: o.props.ErrorBoundary,
			hasErrorBoundary: o.props.hasErrorBoundary === !0 || o.props.ErrorBoundary != null || o.props.errorElement != null,
			shouldRevalidate: o.props.shouldRevalidate,
			handle: o.props.handle,
			lazy: o.props.lazy
		};
		o.props.children && (b.children = Qs(o.props.children, y)), d.push(b)
	}), d
}
var ii = "get",
	ci = "application/x-www-form-urlencoded";

function fi(i) {
	return typeof HTMLElement < "u" && i instanceof HTMLElement
}

function Wg(i) {
	return fi(i) && i.tagName.toLowerCase() === "button"
}

function Fg(i) {
	return fi(i) && i.tagName.toLowerCase() === "form"
}

function Ig(i) {
	return fi(i) && i.tagName.toLowerCase() === "input"
}

function Pg(i) {
	return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey)
}

function ev(i, r) {
	return i.button === 0 && (!r || r === "_self") && !Pg(i)
}
var ui = null;

function tv() {
	if (ui === null) try {
		new FormData(document.createElement("form"), 0), ui = !1
	} catch {
		ui = !0
	}
	return ui
}
var lv = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function Ys(i) {
	return i != null && !lv.has(i) ? (Bt(!1, `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ci}"`), null) : i
}

function av(i, r) {
	let d, o, m, y, b;
	if (Fg(i)) {
		let _ = i.getAttribute("action");
		o = _ ? nl(_, r) : null, d = i.getAttribute("method") || ii, m = Ys(i.getAttribute("enctype")) || ci, y = new FormData(i)
	} else if (Wg(i) || Ig(i) && (i.type === "submit" || i.type === "image")) {
		let _ = i.form;
		if (_ == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
		let N = i.getAttribute("formaction") || _.getAttribute("action");
		if (o = N ? nl(N, r) : null, d = i.getAttribute("formmethod") || _.getAttribute("method") || ii, m = Ys(i.getAttribute("formenctype")) || Ys(_.getAttribute("enctype")) || ci, y = new FormData(_, i), !tv()) {
			let {
				name: p,
				type: R,
				value: T
			} = i;
			if (R === "image") {
				let B = p ? `${p}.` : "";
				y.append(`${B}x`, "0"), y.append(`${B}y`, "0")
			} else p && y.append(p, T)
		}
	} else {
		if (fi(i)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
		d = ii, o = null, m = ci, b = i
	}
	return y && m === "text/plain" && (b = y, y = void 0), {
		action: o,
		method: d.toLowerCase(),
		encType: m,
		formData: y,
		body: b
	}
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");

function Js(i, r) {
	if (i === !1 || i === null || typeof i > "u") throw new Error(r)
}

function nv(i, r, d, o) {
	let m = typeof i == "string" ? new URL(i, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : i;
	return d ? m.pathname.endsWith("/") ? m.pathname = `${m.pathname}_.${o}` : m.pathname = `${m.pathname}.${o}` : m.pathname === "/" ? m.pathname = `_root.${o}` : r && nl(m.pathname, r) === "/" ? m.pathname = `${r.replace(/\/$/,"")}/_root.${o}` : m.pathname = `${m.pathname.replace(/\/$/,"")}.${o}`, m
}
async function uv(i, r) {
	if (i.id in r) return r[i.id];
	try {
		let d = await import(i.module);
		return r[i.id] = d, d
	} catch (d) {
		return console.error(`Error loading route module \`${i.module}\`, reloading page...`), console.error(d), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
	}
}

function iv(i) {
	return i == null ? !1 : i.href == null ? i.rel === "preload" && typeof i.imageSrcSet == "string" && typeof i.imageSizes == "string" : typeof i.rel == "string" && typeof i.href == "string"
}
async function cv(i, r, d) {
	let o = await Promise.all(i.map(async m => {
		let y = r.routes[m.route.id];
		if (y) {
			let b = await uv(y, d);
			return b.links ? b.links() : []
		}
		return []
	}));
	return fv(o.flat(1).filter(iv).filter(m => m.rel === "stylesheet" || m.rel === "preload").map(m => m.rel === "stylesheet" ? {
		...m,
		rel: "prefetch",
		as: "style"
	} : {
		...m,
		rel: "prefetch"
	}))
}

function xm(i, r, d, o, m, y) {
	let b = (N, p) => d[p] ? N.route.id !== d[p].route.id : !0,
		_ = (N, p) => d[p].pathname !== N.pathname || d[p].route.path?.endsWith("*") && d[p].params["*"] !== N.params["*"];
	return y === "assets" ? r.filter((N, p) => b(N, p) || _(N, p)) : y === "data" ? r.filter((N, p) => {
		let R = o.routes[N.route.id];
		if (!R || !R.hasLoader) return !1;
		if (b(N, p) || _(N, p)) return !0;
		if (N.route.shouldRevalidate) {
			let T = N.route.shouldRevalidate({
				currentUrl: new URL(m.pathname + m.search + m.hash, window.origin),
				currentParams: d[0]?.params || {},
				nextUrl: new URL(i, window.origin),
				nextParams: N.params,
				defaultShouldRevalidate: !0
			});
			if (typeof T == "boolean") return T
		}
		return !0
	}) : []
}

function sv(i, r, {
	includeHydrateFallback: d
} = {}) {
	return rv(i.map(o => {
		let m = r.routes[o.route.id];
		if (!m) return [];
		let y = [m.module];
		return m.clientActionModule && (y = y.concat(m.clientActionModule)), m.clientLoaderModule && (y = y.concat(m.clientLoaderModule)), d && m.hydrateFallbackModule && (y = y.concat(m.hydrateFallbackModule)), m.imports && (y = y.concat(m.imports)), y
	}).flat(1))
}

function rv(i) {
	return [...new Set(i)]
}

function ov(i) {
	let r = {},
		d = Object.keys(i).sort();
	for (let o of d) r[o] = i[o];
	return r
}

function fv(i, r) {
	let d = new Set;
	return new Set(r), i.reduce((o, m) => {
		let y = JSON.stringify(ov(m));
		return d.has(y) || (d.add(y), o.push({
			key: y,
			link: m
		})), o
	}, [])
}

function Zm() {
	let i = M.useContext(qa);
	return Js(i, "You must render this element inside a <DataRouterContext.Provider> element"), i
}

function dv() {
	let i = M.useContext(oi);
	return Js(i, "You must render this element inside a <DataRouterStateContext.Provider> element"), i
}
var $s = M.createContext(void 0);
$s.displayName = "FrameworkContext";

function km() {
	let i = M.useContext($s);
	return Js(i, "You must render this element inside a <HydratedRouter> element"), i
}

function mv(i, r) {
	let d = M.useContext($s),
		[o, m] = M.useState(!1),
		[y, b] = M.useState(!1),
		{
			onFocus: _,
			onBlur: N,
			onMouseEnter: p,
			onMouseLeave: R,
			onTouchStart: T
		} = r,
		B = M.useRef(null);
	M.useEffect(() => {
		if (i === "render" && b(!0), i === "viewport") {
			let V = k => {
					k.forEach(L => {
						b(L.isIntersecting)
					})
				},
				X = new IntersectionObserver(V, {
					threshold: .5
				});
			return B.current && X.observe(B.current), () => {
				X.disconnect()
			}
		}
	}, [i]), M.useEffect(() => {
		if (o) {
			let V = setTimeout(() => {
				b(!0)
			}, 100);
			return () => {
				clearTimeout(V)
			}
		}
	}, [o]);
	let Q = () => {
			m(!0)
		},
		W = () => {
			m(!1), b(!1)
		};
	return d ? i !== "intent" ? [y, B, {}] : [y, B, {
		onFocus: Un(_, Q),
		onBlur: Un(N, W),
		onMouseEnter: Un(p, Q),
		onMouseLeave: Un(R, W),
		onTouchStart: Un(T, Q)
	}] : [!1, B, {}]
}

function Un(i, r) {
	return d => {
		i && i(d), d.defaultPrevented || r(d)
	}
}

function hv({
	page: i,
	...r
}) {
	let {
		router: d
	} = Zm(), o = M.useMemo(() => wm(d.routes, i, d.basename), [d.routes, i, d.basename]);
	return o ? M.createElement(gv, {
		page: i,
		matches: o,
		...r
	}) : null
}

function yv(i) {
	let {
		manifest: r,
		routeModules: d
	} = km(), [o, m] = M.useState([]);
	return M.useEffect(() => {
		let y = !1;
		return cv(i, r, d).then(b => {
			y || m(b)
		}), () => {
			y = !0
		}
	}, [i, r, d]), o
}

function gv({
	page: i,
	matches: r,
	...d
}) {
	let o = il(),
		{
			future: m,
			manifest: y,
			routeModules: b
		} = km(),
		{
			basename: _
		} = Zm(),
		{
			loaderData: N,
			matches: p
		} = dv(),
		R = M.useMemo(() => xm(i, r, p, y, o, "data"), [i, r, p, y, o]),
		T = M.useMemo(() => xm(i, r, p, y, o, "assets"), [i, r, p, y, o]),
		B = M.useMemo(() => {
			if (i === o.pathname + o.search + o.hash) return [];
			let V = new Set,
				X = !1;
			if (r.forEach(L => {
					let J = y.routes[L.route.id];
					!J || !J.hasLoader || (!R.some(Ne => Ne.route.id === L.route.id) && L.route.id in N && b[L.route.id]?.shouldRevalidate || J.hasClientLoader ? X = !0 : V.add(L.route.id))
				}), V.size === 0) return [];
			let k = nv(i, _, m.unstable_trailingSlashAwareDataRequests, "data");
			return X && V.size > 0 && k.searchParams.set("_routes", r.filter(L => V.has(L.route.id)).map(L => L.route.id).join(",")), [k.pathname + k.search]
		}, [_, m.unstable_trailingSlashAwareDataRequests, N, o, y, R, r, i, b]),
		Q = M.useMemo(() => sv(T, y), [T, y]),
		W = yv(T);
	return M.createElement(M.Fragment, null, B.map(V => M.createElement("link", {
		key: V,
		rel: "prefetch",
		as: "fetch",
		href: V,
		...d
	})), Q.map(V => M.createElement("link", {
		key: V,
		rel: "modulepreload",
		href: V,
		...d
	})), W.map(({
		key: V,
		link: X
	}) => M.createElement("link", {
		key: V,
		nonce: d.nonce,
		...X,
		crossOrigin: X.crossOrigin ?? d.crossOrigin
	})))
}

function vv(...i) {
	return r => {
		i.forEach(d => {
			typeof d == "function" ? d(r) : d != null && (d.current = r)
		})
	}
}
var pv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
	pv && (window.__reactRouterVersion = "7.13.0")
} catch {}

function xv({
	basename: i,
	children: r,
	unstable_useTransitions: d,
	window: o
}) {
	let m = M.useRef();
	m.current == null && (m.current = I1({
		window: o,
		v5Compat: !0
	}));
	let y = m.current,
		[b, _] = M.useState({
			action: y.action,
			location: y.location
		}),
		N = M.useCallback(p => {
			d === !1 ? _(p) : M.startTransition(() => _(p))
		}, [d]);
	return M.useLayoutEffect(() => y.listen(N), [y, N]), M.createElement(Jg, {
		basename: i,
		children: r,
		location: b.location,
		navigationType: b.action,
		navigator: y,
		unstable_useTransitions: d
	})
}
var Km = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	Fe = M.forwardRef(function({
		onClick: r,
		discover: d = "render",
		prefetch: o = "none",
		relative: m,
		reloadDocument: y,
		replace: b,
		state: _,
		target: N,
		to: p,
		preventScrollReset: R,
		viewTransition: T,
		unstable_defaultShouldRevalidate: B,
		...Q
	}, W) {
		let {
			basename: V,
			unstable_useTransitions: X
		} = M.useContext(At), k = typeof p == "string" && Km.test(p), L = Hm(p, V);
		p = L.to;
		let J = Rg(p, {
				relative: m
			}),
			[Ne, Se, Ae] = mv(o, Q),
			I = jv(p, {
				replace: b,
				state: _,
				target: N,
				preventScrollReset: R,
				relative: m,
				viewTransition: T,
				unstable_defaultShouldRevalidate: B,
				unstable_useTransitions: X
			});

		function we(gt) {
			r && r(gt), gt.defaultPrevented || I(gt)
		}
		let Ge = M.createElement("a", {
			...Q,
			...Ae,
			href: L.absoluteURL || J,
			onClick: L.isExternal || y ? r : we,
			ref: vv(W, Se),
			target: N,
			"data-discover": !k && d === "render" ? "true" : void 0
		});
		return Ne && !k ? M.createElement(M.Fragment, null, Ge, M.createElement(hv, {
			page: J
		})) : Ge
	});
Fe.displayName = "Link";
var bv = M.forwardRef(function({
	"aria-current": r = "page",
	caseSensitive: d = !1,
	className: o = "",
	end: m = !1,
	style: y,
	to: b,
	viewTransition: _,
	children: N,
	...p
}, R) {
	let T = Ln(b, {
			relative: p.relative
		}),
		B = il(),
		Q = M.useContext(oi),
		{
			navigator: W,
			basename: V
		} = M.useContext(At),
		X = Q != null && _v(T) && _ === !0,
		k = W.encodeLocation ? W.encodeLocation(T).pathname : T.pathname,
		L = B.pathname,
		J = Q && Q.navigation && Q.navigation.location ? Q.navigation.location.pathname : null;
	d || (L = L.toLowerCase(), J = J ? J.toLowerCase() : null, k = k.toLowerCase()), J && V && (J = nl(J, V) || J);
	const Ne = k !== "/" && k.endsWith("/") ? k.length - 1 : k.length;
	let Se = L === k || !m && L.startsWith(k) && L.charAt(Ne) === "/",
		Ae = J != null && (J === k || !m && J.startsWith(k) && J.charAt(k.length) === "/"),
		I = {
			isActive: Se,
			isPending: Ae,
			isTransitioning: X
		},
		we = Se ? r : void 0,
		Ge;
	typeof o == "function" ? Ge = o(I) : Ge = [o, Se ? "active" : null, Ae ? "pending" : null, X ? "transitioning" : null].filter(Boolean).join(" ");
	let gt = typeof y == "function" ? y(I) : y;
	return M.createElement(Fe, {
		...p,
		"aria-current": we,
		className: Ge,
		ref: R,
		style: gt,
		to: b,
		viewTransition: _
	}, typeof N == "function" ? N(I) : N)
});
bv.displayName = "NavLink";
var Sv = M.forwardRef(({
	discover: i = "render",
	fetcherKey: r,
	navigate: d,
	reloadDocument: o,
	replace: m,
	state: y,
	method: b = ii,
	action: _,
	onSubmit: N,
	relative: p,
	preventScrollReset: R,
	viewTransition: T,
	unstable_defaultShouldRevalidate: B,
	...Q
}, W) => {
	let {
		unstable_useTransitions: V
	} = M.useContext(At), X = zv(), k = Av(_, {
		relative: p
	}), L = b.toLowerCase() === "get" ? "get" : "post", J = typeof _ == "string" && Km.test(_), Ne = Se => {
		if (N && N(Se), Se.defaultPrevented) return;
		Se.preventDefault();
		let Ae = Se.nativeEvent.submitter,
			I = Ae?.getAttribute("formmethod") || b,
			we = () => X(Ae || Se.currentTarget, {
				fetcherKey: r,
				method: I,
				navigate: d,
				replace: m,
				state: y,
				relative: p,
				preventScrollReset: R,
				viewTransition: T,
				unstable_defaultShouldRevalidate: B
			});
		V && d !== !1 ? M.startTransition(() => we()) : we()
	};
	return M.createElement("form", {
		ref: W,
		method: L,
		action: k,
		onSubmit: o ? N : Ne,
		...Q,
		"data-discover": !J && i === "render" ? "true" : void 0
	})
});
Sv.displayName = "Form";

function Nv(i) {
	return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function Jm(i) {
	let r = M.useContext(qa);
	return ze(r, Nv(i)), r
}

function jv(i, {
	target: r,
	replace: d,
	state: o,
	preventScrollReset: m,
	relative: y,
	viewTransition: b,
	unstable_defaultShouldRevalidate: _,
	unstable_useTransitions: N
} = {}) {
	let p = Dg(),
		R = il(),
		T = Ln(i, {
			relative: y
		});
	return M.useCallback(B => {
		if (ev(B, r)) {
			B.preventDefault();
			let Q = d !== void 0 ? d : Hn(R) === Hn(T),
				W = () => p(i, {
					replace: Q,
					state: o,
					preventScrollReset: m,
					relative: y,
					viewTransition: b,
					unstable_defaultShouldRevalidate: _
				});
			N ? M.startTransition(() => W()) : W()
		}
	}, [R, p, T, d, o, r, i, m, y, b, _, N])
}
var Ev = 0,
	Tv = () => `__${String(++Ev)}__`;

function zv() {
	let {
		router: i
	} = Jm("useSubmit"), {
		basename: r
	} = M.useContext(At), d = Vg(), o = i.fetch, m = i.navigate;
	return M.useCallback(async (y, b = {}) => {
		let {
			action: _,
			method: N,
			encType: p,
			formData: R,
			body: T
		} = av(y, r);
		if (b.navigate === !1) {
			let B = b.fetcherKey || Tv();
			await o(B, d, b.action || _, {
				unstable_defaultShouldRevalidate: b.unstable_defaultShouldRevalidate,
				preventScrollReset: b.preventScrollReset,
				formData: R,
				body: T,
				formMethod: b.method || N,
				formEncType: b.encType || p,
				flushSync: b.flushSync
			})
		} else await m(b.action || _, {
			unstable_defaultShouldRevalidate: b.unstable_defaultShouldRevalidate,
			preventScrollReset: b.preventScrollReset,
			formData: R,
			body: T,
			formMethod: b.method || N,
			formEncType: b.encType || p,
			replace: b.replace,
			state: b.state,
			fromRouteId: d,
			flushSync: b.flushSync,
			viewTransition: b.viewTransition
		})
	}, [o, m, r, d])
}

function Av(i, {
	relative: r
} = {}) {
	let {
		basename: d
	} = M.useContext(At), o = M.useContext(ul);
	ze(o, "useFormAction must be used inside a RouteContext");
	let [m] = o.matches.slice(-1), y = {
		...Ln(i || ".", {
			relative: r
		})
	}, b = il();
	if (i == null) {
		y.search = b.search;
		let _ = new URLSearchParams(y.search),
			N = _.getAll("index");
		if (N.some(R => R === "")) {
			_.delete("index"), N.filter(T => T).forEach(T => _.append("index", T));
			let R = _.toString();
			y.search = R ? `?${R}` : ""
		}
	}
	return (!i || i === ".") && m.route.index && (y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index"), d !== "/" && (y.pathname = y.pathname === "/" ? d : al([d, y.pathname])), Hn(y)
}

function _v(i, {
	relative: r
} = {}) {
	let d = M.useContext(qm);
	ze(d != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let {
		basename: o
	} = Jm("useViewTransitionState"), m = Ln(i, {
		relative: r
	});
	if (!d.isTransitioning) return !1;
	let y = nl(d.currentLocation.pathname, o) || d.currentLocation.pathname,
		b = nl(d.nextLocation.pathname, o) || d.nextLocation.pathname;
	return ri(m.pathname, b) != null || ri(m.pathname, y) != null
}
const bm = [{
		link: "/",
		Name: "Home"
	}, {
		link: "/it-technologies",
		Name: "IT Technologies"
	}, {
		link: "/about",
		Name: "About Us"
	}, {
		link: "/contact",
		Name: "Contact Us"
	}],
	Mv = () => {
		const [i, r] = M.useState(!1), o = il().pathname;
		return s.jsxs(s.Fragment, {
			children: [s.jsx("nav", {
				className: "w-[95%] left-2 bg-blue-700/80 text-white backdrop-blur-lg shadow h-[7vh] fixed md:max-w-[70%] rounded-full top-5 md:left-[15%] z-50 ",
				children: s.jsxs("div", {
					className: "md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto flex items-center justify-between h-full px-5",
					children: [s.jsx(Fe, {
						to: "/",
						className: "h-[70%] flex items-center",
						children: s.jsx("img", {
							src: "/Techyvibez.webp",
							alt: "Logo",
							className: "h-full object-contain"
						})
					}), s.jsx("ul", {
						className: "hidden lg:flex gap-8 items-center",
						children: bm.map((m, y) => {
							const b = o === m.link;
							return s.jsx(Fe, {
								to: m.link,
								children: s.jsx("li", {
									className: `transition ${b?"text-blue-500 ":"hover:text-blue-500"}font-medium text-lg `,
									children: m.Name
								})
							}, y)
						})
					}), s.jsxs("div", {
						className: "flex items-center gap-5",
						children: [s.jsx("a", {
							href: "tel:+919187337635",
							className: "flex items-center py-1 gap-1 w-20 justify-center md:p-1 rounded-lg font-semibold text-white bg-blue-500 transition shadow-lg hover:shadow-[#650076]/40",
							children: s.jsx(si, {
								className: "h-4 w-4"
							})
						}), s.jsx(w1, {
							className: "block lg:hidden cursor-pointer",
							onClick: () => r(!0)
						})]
					})]
				})
			}), i && s.jsx("div", {
				className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
				onClick: () => r(!1),
				children: s.jsxs("div", {
					className: "h-full w-[80%] max-w-xl bg-white shadow-xl",
					onClick: m => m.stopPropagation(),
					children: [s.jsxs("div", {
						className: "h-20 flex items-center justify-between px-4 border-b",
						children: [s.jsx("img", {
							src: "Techyvibez.webp",
							alt: "Logo",
							className: "h-12 object-contain"
						}), s.jsx(F1, {
							className: "cursor-pointer text-gray-600 hover:text-blue-500",
							onClick: () => r(!1)
						})]
					}), s.jsx("ul", {
						className: "flex flex-col gap-6 mt-8 px-8 font-medium text-sm",
						children: bm.map((m, y) => {
							const b = o === m.link;
							return s.jsx(Fe, {
								to: m.link,
								onClick: () => r(!1),
								className: "group",
								children: s.jsxs("li", {
									className: `flex items-center gap-3 transition  ${b?"text-blue-600 font-semibold ":"text-gray-700 group-hover:text-blue-500"}`,
									children: [s.jsx("span", {
										className: `h-2 w-2 rounded-full bg-blue-500 transition ${b?"opacity-100":"opacity-0 group-hover:opacity-100"}`
									}), m.Name]
								})
							}, y)
						})
					}), s.jsxs("div", {
						className: "mt-10 px-6 space-y-3",
						children: [s.jsxs("a", {
							href: "tel:+919187337635",
							className: "flex items-center justify-center gap-2 w-full py-2 rounded-full text-white bg-blue-500 shadow hover:shadow-blue-500/40 transition",
							children: [s.jsx(si, {
								className: "h-4 w-4"
							}), "Call Now"]
						}), s.jsxs("a", {
							href: "https://wa.me/919187337635",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-center justify-center gap-2 w-full py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition",
							children: [s.jsx(Tm, {
								className: "w-4 h-4"
							}), "WhatsApp"]
						})]
					})]
				})
			})]
		})
	},
	wv = () => s.jsx("section", {
		className: "py-16 bg-linear-to-br from-purple-50 via-blue-50 to-cyan-50",
		children: s.jsxs("div", {
			className: "max-w-7xl mx-auto px-6",
			children: [s.jsxs("div", {
				className: "text-center mb-14",
				children: [s.jsxs("h2", {
					className: "text-4xl font-bold text-gray-900",
					children: ["Our ", s.jsx("span", {
						className: "text-blue-500",
						children: "Services"
					})]
				}), s.jsx("p", {
					className: "mt-5 text-gray-600 max-w-3xl mx-auto leading-relaxed",
					children: "We provide advanced IT solutions that help businesses scale securely and operate more efficiently. Our technology services focus on innovation, security, and long-term digital growth."
				})]
			}), s.jsxs("div", {
				className: "grid md:grid-cols-2 gap-12 items-center",
				children: [s.jsxs("div", {
					children: [s.jsx("div", {
						className: "flex items-center gap-4 mb-6",
						children: s.jsxs("div", {
							children: [s.jsx("h3", {
								className: "text-2xl font-semibold text-gray-800",
								children: "IT Solutions"
							}), s.jsx("p", {
								className: "text-blue-600 text-sm",
								children: "Technology Services & Consulting"
							})]
						})
					}), s.jsx("p", {
						className: "text-gray-600 leading-relaxed mb-6",
						children: "We empower businesses with innovative IT solutions and advanced technology services designed to modernize digital infrastructure and improve operational efficiency. From custom software and application development to cloud platforms, cybersecurity systems, and data-driven technologies, our team builds reliable and scalable solutions that enhance performance, strengthen security, and enable organizations to grow confidently in an evolving digital landscape."
					}), s.jsx(Fe, {
						to: "/it-technologies",
						className: "px-6 py-3 rounded-lg bg-blue-500 to-cyan-500 text-white font-medium hover:scale-105 transition",
						children: "Explore Services →"
					})]
				}), s.jsx("div", {
					className: "grid sm:grid-cols-2 gap-4 text-sm",
					children: ["Custom Software & App Development", "Cloud Migration & Managed Services", "End-to-End Cybersecurity Solutions", "Data Analytics & Business Intelligence", "ERP & CRM Implementation", "IT Consulting & Digital Transformation"].map((i, r) => s.jsxs("div", {
						className: "flex items-start gap-3 p-3 bg-white/70 rounded-lg hover:bg-white transition",
						children: [s.jsx("span", {
							className: "w-2 h-2 mt-2 bg-blue-500 rounded-full"
						}), s.jsx("p", {
							className: "text-gray-700",
							children: i
						})]
					}, r))
				})]
			})]
		})
	}),
	Ov = () => s.jsxs("div", {
		children: [s.jsx("div", {
			className: "w-full h-full lg:min-h-[70vh] flex items-center bg-linear-to-br from-black via-gray-900 to-blue-900",
			children: s.jsx("div", {
				className: "mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-7xl flex items-center justify-center h-full p-10 mt-10 lg:mt-10",
				children: s.jsxs("div", {
					className: "flex flex-col lg:flex-row gap-10",
					children: [s.jsxs("div", {
						className: "w-full h-full text-white flex flex-col gap-8 justify-center",
						children: [s.jsxs("h1", {
							className: " text-2xl md:text-4xl lg:text-6xl text-white font-bold text-center lg:text-left ",
							children: ["Transform Your ", s.jsx("span", {
								className: "text-white",
								children: "Business"
							}), " Operations"]
						}), s.jsx("p", {
							className: "text-[15px] leading-relaxed  text-gray-400",
							children: "Techyvibez delivers end-to-end IT solutions designed to empower businesses through innovation, secure digital infrastructure, and scalable technology services. From custom software development to cloud engineering and enterprise-grade cybersecurity, we help organizations streamline operations and accelerate sustainable growth. Partner with us to transform your digital future."
						}), s.jsxs("div", {
							className: "flex gap-5",
							children: [s.jsxs("div", {
								className: "flex gap-2 items-center ",
								children: [s.jsx(Bs, {
									className: "h-5 w-5 text-green-500"
								}), s.jsx("p", {
									className: "text-sm",
									children: "24/7 Support"
								})]
							}), s.jsxs("div", {
								className: "flex gap-2 items-center",
								children: [s.jsx(Bs, {
									className: "h-5 w-5 text-green-500"
								}), s.jsx("p", {
									className: "text-sm",
									children: "98% Success Rate"
								})]
							}), s.jsxs("div", {
								className: "flex gap-2 items-center",
								children: [s.jsx(Bs, {
									className: "h-5 w-5 text-green-500"
								}), s.jsx("p", {
									className: "text-sm",
									children: "Global Reach"
								})]
							})]
						}), s.jsx("div", {
							className: "flex items-center gap-2 max-w-3xl",
							children: s.jsx(Fe, {
								to: "/it-technologies",
								className: "w-full",
								children: s.jsxs("button", {
									className: "bg-white rounded-md px-2 py-3 w-full flex items-center justify-center gap-2 text-blue-500 font-semibold hover:bg-white\/80 transition cursor-pointer",
									children: [s.jsx("p", {
										children: "Explore Services"
									}), s.jsx(Nm, {
										className: "h-4 w-4"
									})]
								})
							})
						})]
					}), s.jsx("div", {
						className: "w-full h-full",
						children: s.jsx("img", {
							src: "https://media.istockphoto.com/id/540525954/photo/this-is-the-start-of-great-things.jpg?s=612x612&w=0&k=20&c=4AcELe-c2CrSxsZSzFdJWaR25rddyl9FvtjMyx8UNaU=",
							className: " object-contain rounded-lg"
						})
					})]
				})
			})
		}), s.jsx(wv, {})]
	}),
	Rv = () => s.jsx("div", {
		children: s.jsx(Ov, {})
	}),
	Dv = () => s.jsxs("div", {
		className: "font-sans text-gray-800",
		children: [s.jsx("section", {
			className: "w-full min-h-[50vh] flex items-center bg-linear-to-br from-black via-gray-900 to-blue-900 text-white text-center py-20 px-6",
			children: s.jsxs("div", {
				className: "flex items-center justify-center flex-col w-full",
				children: [s.jsxs("h1", {
					className: "text-2xl md:text-7xl font-bold mb-4 red-rose",
					children: ["About ", s.jsx("span", {
						className: "text-white red-rose",
						children: "Techyvibez"
					}), " Pvt Ltd"]
				}), s.jsx("p", {
					className: "max-w-2xl mx-auto text-gray-200 text-sm md:text-lg",
					children: "Your trusted partner in IT solutions. We empower businesses and students through innovation and excellence."
				})]
			})
		}), s.jsxs("section", {
			className: "py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center",
			children: [s.jsxs("div", {
				children: [s.jsxs("h2", {
					className: "text-4xl font-bold mb-4 red-rose",
					children: ["Our ", s.jsx("span", {
						className: "text-blue-500 red-rose",
						children: "Story"
					})]
				}), s.jsx("p", {
					className: "text-gray-600 mb-4",
					children: "Founded in 2026, TechyVibez began with a bold vision: to empower businesses through innovative technology solutions and digital transformation."
				}), s.jsx("p", {
					className: "text-gray-600 mb-4",
					children: "Over the years, we have evolved into a trusted IT solutions partner, delivering custom software development, cloud engineering, cybersecurity, AI-driven systems, and scalable enterprise technology services. Our growth is built on technical excellence, strategic innovation, and an unwavering commitment to client success."
				}), s.jsx("p", {
					className: "text-gray-600 mb-4",
					children: "Today, we proudly serve clients across industries, helping them navigate complex digital challenges, modernize infrastructure, and achieve sustainable growth in an increasingly technology-driven world."
				}), s.jsx("p", {
					className: "text-gray-600 mb-4",
					children: "Partner with TechyVibez to build smarter, secure, and future-ready digital solutions."
				}), s.jsx(Fe, {
					to: "/contact",
					children: s.jsx("button", {
						className: "bg-blue-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition",
						children: "Partner With Us →"
					})
				})]
			}), s.jsx("img", {
				src: "https://media.istockphoto.com/id/1185858776/photo/explaining-his-vision-to-a-colleague.jpg?s=612x612&w=0&k=20&c=pNM8Qr8NqOwFLqNz1cq8Xek2MoXlOE4vini94mlb2_w=",
				alt: "Team",
				className: "rounded-xl shadow-lg"
			})]
		}), s.jsx("section", {
			className: "bg-gray-50 py-12 px-6",
			children: s.jsx("div", {
				className: "max-w-6xl mx-auto grid md:grid-cols-4 text-center gap-8",
				children: [{
					number: "15+",
					label: "Years Experience"
				}, {
					number: "500+",
					label: "Happy Clients"
				}, {
					number: "1000+",
					label: "Projects Delivered"
				}, {
					number: "200+",
					label: "Industry Experts"
				}].map((i, r) => s.jsxs("div", {
					children: [s.jsx("h3", {
						className: "text-3xl font-bold text-blue-600",
						children: i.number
					}), s.jsx("p", {
						className: "text-gray-600",
						children: i.label
					})]
				}, r))
			})
		}), s.jsxs("section", {
			className: "py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8",
			children: [s.jsxs("div", {
				className: "bg-white p-8 rounded-xl shadow-md",
				children: [s.jsx(mm, {
					className: "text-blue-600 mb-4",
					size: 40
				}), s.jsxs("h3", {
					className: "text-xl md:text-2xl font-semibold mb-2 red-rose",
					children: ["Our ", s.jsx("span", {
						className: "text-blue-500 red-rose",
						children: "Mission"
					})]
				}), s.jsx("p", {
					className: "text-gray-600 leading-relaxed md:text-justify",
					children: "To empower businesses with innovative, secure, and scalable IT solutions that drive digital transformation, operational efficiency, and long-term growth. We are committed to delivering cutting-edge technology services with excellence, reliability, and measurable impact."
				})]
			}), s.jsxs("div", {
				className: "bg-white p-8 rounded-xl shadow-md",
				children: [s.jsx(i1, {
					className: "text-blue-600 mb-4",
					size: 40
				}), s.jsxs("h3", {
					className: "text-xl md:text-2xl font-semibold mb-2 red-rose",
					children: ["Our ", s.jsx("span", {
						className: "text-blue-500 red-rose",
						children: "Vision"
					})]
				}), s.jsx("p", {
					className: "text-gray-600 leading-relaxed md:text-justify",
					children: "To become a globally trusted IT solutions partner, recognized for technological innovation, engineering excellence, and our unwavering commitment to client success. We envision a future where businesses of all sizes leverage advanced technology to scale smarter, operate securely, and lead confidently in the digital era."
				})]
			})]
		}), s.jsxs("section", {
			className: "bg-gray-50 py-16 px-6 text-center",
			children: [s.jsxs("h2", {
				className: "text-2xl md:text-4xl font-bold mb-10 red-rose",
				children: ["Our Core ", s.jsx("span", {
					className: "text-blue-500 red-rose",
					children: "Values"
				})]
			}), s.jsx("div", {
				className: "grid md:grid-cols-4 gap-6 max-w-6xl mx-auto",
				children: [{
					icon: s.jsx(_m, {}),
					title: "Excellence",
					paragraph: "We strive for engineering excellence in every solution we build, delivering secure, scalable, and high-performance IT systems that exceed client expectations."
				}, {
					icon: s.jsx(N1, {}),
					title: "Innovation",
					paragraph: "We embrace continuous innovation, leveraging modern technologies such as cloud computing, AI, automation, and advanced software engineering to solve complex digital challenges."
				}, {
					icon: s.jsx(Mm, {}),
					title: "Integrity",
					paragraph: "We operate with transparency, accountability, and strong ethical standards — ensuring trust, data security, and long-term partnerships with every client."
				}, {
					icon: s.jsx(mm, {}),
					title: "Collaboration",
					paragraph: "We work closely with our clients as strategic technology partners, aligning our expertise with their business goals to deliver impactful and future-ready digital solutions."
				}].map((i, r) => s.jsxs("div", {
					className: "bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition",
					children: [s.jsx("div", {
						className: "text-blue-600 mb-4 flex justify-center",
						children: i.icon
					}), s.jsx("h3", {
						className: "font-semibold text-xl red-rose",
						children: i.title
					}), s.jsx("p", {
						className: "text-sm text-gray-400 mt-2 leading-relaxed text-justify",
						children: i.paragraph
					})]
				}, r))
			})]
		}), s.jsxs("section", {
			className: "py-16 px-6 text-center",
			children: [s.jsxs("h2", {
				className: "text-2xl md:text-4xl font-bold mb-10 red-rose",
				children: ["Meet Our Leadership ", s.jsx("span", {
					className: "text-blue-500 red-rose",
					children: "Team"
				})]
			}), s.jsxs("div", {
				className: "max-w-md mx-auto bg-white p-6 rounded-xl shadow-md",
				children: [s.jsx("h3", {
					className: "font-semibold text-lg",
					children: "Manu M"
				}), s.jsx("p", {
					className: "text-blue-600 text-sm mb-2 font-medium",
					children: "Founder & Director"
				}), s.jsx("p", {
					className: "text-gray-600 text-sm",
					children: "7+ years of experience in business strategy and growth planning."
				})]
			})]
		}), s.jsxs("section", {
			className: "bg-gray-50 py-16 px-6 text-center",
			children: [s.jsxs("h2", {
				className: "text-2xl md:text-4xl font-bold mb-8 red-rose",
				children: ["Why Businesses ", s.jsx("span", {
					className: "text-blue-500 red-rose",
					children: "Choose Us"
				})]
			}), s.jsx("div", {
				className: "grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left",
				children: ["Customized IT Solutions", "Deep Technology Expertise", "Proven Technical Excellence", "Transparent Project Execution", "Dedicated Support & 24/7 Reliability", "Flexible & Scalable Engagement Models", "Knowledge Transfer & Enablement", "Long-Term Technology Partnership"].map((i, r) => s.jsxs("p", {
					className: "text-gray-600",
					children: ["✔ ", i]
				}, r))
			})]
		}), s.jsxs("section", {
			className: "bg-linear-to-r from-blue-900 via-gray-900 to-black text-white text-center py-16 px-6",
			children: [s.jsx("h2", {
				className: "text-3xl font-bold mb-4 red-rose",
				children: "Ready to Partner With Us?"
			}), s.jsx("p", {
				className: "mb-6 text-gray-200",
				children: "Let’s discuss how our expertise can accelerate your growth."
			}), s.jsx(Fe, {
				to: "/contact",
				children: s.jsx("button", {
					className: "bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition",
					children: "Get In Touch →"
				})
			})]
		})]
	}),
	Cv = () => s.jsx("div", {
		children: s.jsx(Dv, {})
	}),
	Uv = () => s.jsx("div", {
		className: "font-sans text-gray-800",
		children: s.jsxs("div", {
			className: "",
			children: [s.jsx("section", {
				className: "min-h-[50vh] flex flex-col justify-center bg-linear-to-br from-black via-gray-900 to-blue-900 text-white text-center py-20 px-6 ",
				children: s.jsxs("div", {
					className: "mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-7xl flex flex-col gap-5 justify-center",
					children: [s.jsxs("h1", {
						className: "text-4xl md:text-4xl lg:text-7xl text-white font-bold text-center red-rose",
						children: [s.jsx("span", {
							className: "text-blue-500 red-rose",
							children: "BPO"
						}), " Services"]
					}), s.jsx("h2", {
						className: "text-sm md:text-xl font-medium",
						children: "Business Process Outsourcing"
					}), s.jsxs("button", {
						className: "bg-white text-blue-700 py-2 rounded-lg font-semibold hover:scale-105 transition max-w-xs mx-auto w-full",
						children: ["Get Started", s.jsx(Nm, {
							className: "inline-block ml-2",
							size: 16
						})]
					})]
				})
			}), s.jsx("section", {
				className: "py-16 px-6 bg-gray-50 text-center   ",
				children: s.jsxs("div", {
					className: "mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-7xl",
					children: [s.jsxs("h2", {
						className: "text-2xl md:text-5xl font-bold mb-4 red-rose",
						children: ["Our ", s.jsx("span", {
							className: "text-blue-500 red-rose",
							children: "BPO"
						}), " Services"]
					}), s.jsx("p", {
						className: "max-w-2xl mx-auto text-gray-600 mb-12",
						children: "We offer end-to-end IT solutions designed to streamline your digital operations and enhance system performance."
					}), s.jsx("div", {
						className: "grid md:grid-cols-4 gap-6",
						children: [{
							icon: s.jsx(fm, {
								size: 24
							}),
							title: "Customer Support",
							paragraph: "Custom web, mobile, and enterprise applications built with modern technologies to power your digital growth."
						}, {
							icon: s.jsx(h1, {
								size: 24
							}),
							title: "Healthcare & Ecommerce",
							paragraph: "Secure cloud infrastructure setup, deployment automation, and scalable DevOps practices for high-performance systems."
						}, {
							icon: s.jsx(b1, {
								size: 24
							}),
							title: "Finance & Accounting",
							paragraph: "Advanced security solutions to safeguard your applications, networks, and business-critical data."
						}, {
							icon: s.jsx(p1, {
								size: 24
							}),
							title: "Back Office Operations",
							paragraph: "Reliable system architecture, server management, monitoring, and end-to-end technical support for smooth operations."
						}].map((i, r) => s.jsxs("div", {
							className: "bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition",
							children: [s.jsx("div", {
								className: "w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold",
								children: i.icon
							}), s.jsx("h3", {
								className: "font-semibold mb-2 text-lg",
								children: i.title
							}), s.jsx("p", {
								className: "text-sm text-gray-500 leading-relaxed",
								children: i.paragraph
							})]
						}, r))
					})]
				})
			}), s.jsxs("section", {
				className: "py-16 px-6 mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-7xl grid md:grid-cols-2 gap-10 items-center",
				children: [s.jsxs("div", {
					children: [s.jsxs("h2", {
						className: "text-2xl md:text-5xl font-bold mb-6 text-center md:text-left red-rose",
						children: ["Benefits of Our ", s.jsx("span", {
							className: "text-blue-500 red-rose",
							children: "BPO"
						}), " Services"]
					}), s.jsxs("ul", {
						className: "space-y-3 text-gray-600 ",
						children: [s.jsx("li", {
							className: "hover:text-black transition-all duration-200 hover:scale-101",
							children: "✔ Operational cost reduction"
						}), s.jsx("li", {
							className: "hover:text-black transition-all duration-200 hover:scale-101",
							children: "✔ 24/7 customer support"
						}), s.jsx("li", {
							className: "hover:text-black transition-all duration-200 hover:scale-101",
							children: "✔ Scalable outsourcing solutions"
						}), s.jsx("li", {
							className: "hover:text-black transition-all duration-200 hover:scale-101",
							children: "✔ Advanced security compliance"
						}), s.jsx("li", {
							className: "hover:text-black transition-all duration-200 hover:scale-101",
							children: "✔ Improved service quality"
						}), s.jsx("li", {
							className: "hover:text-black transition-all duration-200 hover:scale-101",
							children: "✔ Faster turnaround time"
						})]
					})]
				}), s.jsx("img", {
					src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
					alt: "BPO",
					className: "rounded-xl shadow-lg"
				})]
			}), s.jsxs("section", {
				className: "py-16 bg-gray-50 px-6 text-center",
				children: [s.jsxs("h2", {
					className: "text-2xl md:text-5xl font-bold mb-10 red-rose",
					children: ["Why Choose Our ", s.jsx("span", {
						className: "text-blue-500 red-rose",
						children: "BPO"
					}), " Services?"]
				}), s.jsxs("div", {
					className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",
					children: [s.jsxs("div", {
						className: "bg-white p-8 rounded-xl shadow-md",
						children: [s.jsx(_m, {
							className: "mx-auto text-blue-600 mb-4",
							size: 40
						}), s.jsx("h3", {
							className: "font-semibold mb-2 text-lg",
							children: "Security & Compliance"
						}), s.jsx("p", {
							className: "text-sm text-gray-500 leading-relaxed",
							children: "Enterprise-grade cybersecurity practices with secure architecture design, data encryption, and compliance-ready frameworks aligned with global standards."
						})]
					}), s.jsxs("div", {
						className: "bg-white p-8 rounded-xl shadow-md",
						children: [s.jsx(Wy, {
							className: "mx-auto text-blue-600 mb-4",
							size: 40
						}), s.jsx("h3", {
							className: "font-semibold mb-2 text-lg",
							children: "24/7 Operations"
						}), s.jsx("p", {
							className: "text-sm text-gray-500 leading-relaxed",
							children: "Continuous system monitoring, proactive issue resolution, and round-the-clock technical support to ensure uninterrupted digital operations."
						})]
					}), s.jsxs("div", {
						className: "bg-white p-8 rounded-xl shadow-md",
						children: [s.jsx(Mm, {
							className: "mx-auto text-blue-600 mb-4",
							size: 40
						}), s.jsx("h3", {
							className: "font-semibold mb-2 text-lg",
							children: "Skilled Workforce"
						}), s.jsx("p", {
							className: "text-sm text-gray-500 leading-relaxed",
							children: "Flexible, cloud-enabled solutions built to scale seamlessly as your business grows and technology evolves."
						})]
					})]
				})]
			}), s.jsxs("section", {
				className: "py-16 px-6 text-center",
				children: [s.jsxs("h2", {
					className: "text-2xl md:text-5xl font-bold mb-12 red-rose",
					children: ["Our ", s.jsx("span", {
						className: "text-blue-500 red-rose",
						children: "BPO"
					}), " Process"]
				}), s.jsx("div", {
					className: "grid md:grid-cols-4 gap-8 max-w-6xl mx-auto",
					children: [{
						icon: s.jsx($1, {
							size: 24
						}),
						title: "Discovery & Analysis",
						para: "In-depth evaluation of your existing IT infrastructure, systems, and technical requirements."
					}, {
						icon: s.jsx(zm, {
							size: 24
						}),
						title: "Strategy & Architecture Design",
						para: "Designing scalable technology solutions and system architecture aligned with your business objectives."
					}, {
						icon: s.jsx(fm, {
							size: 24
						}),
						title: "Development & Deployment",
						para: "Agile development, rigorous testing, and seamless deployment of secure IT solutions."
					}, {
						icon: s.jsx(ky, {
							size: 24
						}),
						title: "Optimization & Continuous Support",
						para: "Performance monitoring, system enhancements, security updates, and ongoing technical support for long-term growth."
					}].map((i, r) => s.jsxs("div", {
						children: [s.jsx("div", {
							className: "w-15 h-15 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4",
							children: i.icon
						}), s.jsx("h3", {
							className: "font-semibold",
							children: i.title
						}), s.jsx("p", {
							className: "text-sm text-gray-500 mt-2 leading-relaxed",
							children: i.para
						})]
					}, r))
				})]
			}), s.jsxs("section", {
				className: "bg-linear-to-r from-black via-gray-900 to-blue-900 text-white text-center py-16 px-6",
				children: [s.jsxs("h2", {
					className: "text-2xl md:text-5xl font-bold mb-4 red-rose",
					children: ["Ready to Elevate Your ", s.jsx("span", {
						className: "text-blue-500 red-rose",
						children: "Business?"
					})]
				}), s.jsx("p", {
					className: "mb-6 text-gray-200",
					children: "Let’s discuss how our IT services can drive measurable growth."
				}), s.jsx("div", {
					className: "space-x-4",
					children: s.jsx("button", {
						className: "bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition cursor-pointer duration-200",
						children: "Let’s Talk"
					})
				})]
			})]
		})
	}),
	Hv = () => s.jsx("div", {
		children: s.jsx(Uv, {})
	}),
	Bv = [{
		icon: Iy,
		title: "Cloud Solutions",
		description: "End-to-end cloud strategy, migration, deployment, and optimization services to modernize and future-proof your infrastructure.",
		who: "Businesses aiming to enhance scalability, improve performance, and adopt secure cloud-native architectures.",
		why: "Cloud infrastructure increases agility, reduces operational overhead, and ensures high availability.",
		features: ["Cloud Migration & Modernization", "Secure Infrastructure Setup", "Performance & Cost Optimization"]
	}, {
		icon: G1,
		title: "Cybersecurity",
		description: "Advanced cybersecurity frameworks designed to protect applications, networks, and critical business data.",
		who: "Organizations requiring strong data protection and proactive risk management.",
		why: "Robust security safeguards digital assets and prevents operational disruption.",
		features: ["Threat Detection & Monitoring", "Vulnerability Assessment", "Security Architecture Design"]
	}, {
		icon: l1,
		title: "Data Analytics",
		description: "Transform raw data into strategic insights using advanced analytics and intelligent reporting systems.",
		who: "Organizations seeking data-driven decision-making and operational intelligence.",
		why: "Actionable insights help optimize performance and identify growth opportunities.",
		features: ["Business Intelligence Dashboards", "Data Warehousing", "Predictive Analytics"]
	}, {
		icon: e1,
		title: "Software Development",
		description: "Custom-built web, mobile, and enterprise applications engineered for scalability and performance.",
		who: "Businesses requiring tailored digital platforms and automation systems.",
		why: "Well-architected software enhances efficiency and competitive advantage.",
		features: ["Web & Mobile Applications", "API Development", "Enterprise Solutions"]
	}, {
		icon: B1,
		title: "IT Infrastructure Management",
		description: "Reliable IT infrastructure setup, optimization, and monitoring for seamless business continuity.",
		who: "Companies needing stable and secure IT environments.",
		why: "Strong infrastructure guarantees uptime and operational reliability.",
		features: ["Network & Server Management", "System Monitoring", "Disaster Recovery"]
	}, {
		icon: Gs,
		title: "AI & Machine Learning",
		description: "AI-powered solutions that automate processes and enhance intelligent decision-making.",
		who: "Organizations seeking innovation and advanced data intelligence.",
		why: "AI enables smarter workflows and predictive insights.",
		features: ["Predictive Modeling", "NLP Solutions", "Intelligent Automation"]
	}, {
		icon: o1,
		title: "DevOps & Automation",
		description: "Modern DevOps practices to accelerate software delivery through automation.",
		who: "Development teams focused on faster deployment cycles.",
		why: "DevOps ensures rapid, reliable, and error-free releases.",
		features: ["CI/CD Pipelines", "Docker & Kubernetes", "Workflow Automation"]
	}, {
		icon: _1,
		title: "Digital Marketing Solutions",
		description: "Data-driven digital strategies to enhance brand visibility and engagement.",
		who: "Businesses aiming to expand their digital presence.",
		why: "Strategic marketing drives qualified traffic and measurable growth.",
		features: ["SEO & SEM", "Social Media Strategy", "Campaign Analytics"]
	}, {
		icon: Am,
		title: "SAP Enterprise Solutions",
		description: "Enterprise-grade ERP implementation and integration services.",
		who: "Organizations seeking operational transparency and scalable systems.",
		why: "Integrated ERP systems improve efficiency and decision-making.",
		features: ["ERP Implementation", "Process Automation", "System Integration"]
	}];

function qv() {
	return s.jsx("section", {
		id: "service-section",
		className: "",
		children: s.jsxs("div", {
			className: "max-w-7xl mx-auto px-6",
			children: [s.jsx("div", {
				className: "text-center mb-14",
				children: s.jsx("p", {
					className: "text-gray-600 max-w-2xl mx-auto",
					children: "Tailored IT solutions designed to accelerate digital transformation and drive sustainable business growth."
				})
			}), s.jsx("div", {
				className: "grid md:grid-cols-2 gap-8",
				children: Bv.map((i, r) => {
					const d = i.icon;
					return s.jsxs("div", {
						className: "bg-white border border-white-600 rounded-2xl shadow-md p-8 hover:bg-white\/80 transition duration-300 space-y-3",
						children: [s.jsx("div", {
							className: "w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full",
							children: s.jsx(d, {
								className: "text-blue-500",
								size: 28
							})
						}), s.jsx("h3", {
							className: "text-xl font-semibold text-blue-500",
							children: i.title
						}), s.jsx("p", {
							className: "text-gray-400 text-sm md:text-lg",
							children: i.description
						}), s.jsxs("div", {
							className: "space-y-1",
							children: [s.jsx("h4", {
								className: "font-semibold text-blue-500",
								children: "Who It’s For:"
							}), s.jsx("p", {
								className: "text-gray-400 text-sm",
								children: i.who
							})]
						}), s.jsxs("div", {
							className: "space-y-1",
							children: [s.jsx("h4", {
								className: "font-semibold text-blue-500",
								children: "Why It Matters:"
							}), s.jsx("p", {
								className: "text-gray-400 text-sm",
								children: i.why
							})]
						}), s.jsxs("div", {
							className: "space-y-1",
							children: [s.jsx("h4", {
								className: "font-semibold text-blue-500",
								children: "Key Features:"
							}), s.jsx("ul", {
								className: "space-y-1",
								children: i.features.map((o, m) => s.jsxs("li", {
									className: "text-sm text-gray-400 flex items-center",
									children: [s.jsx("span", {
										className: "w-2 h-2 bg-blue-600 rounded-full mr-2"
									}), o]
								}, m))
							})]
						})]
					}, r)
				})
			})]
		})
	})
}

function Lv() {
	return s.jsxs("div", {
		className: "w-full bg-black text-white",
		children: [s.jsx("section", {
			className: "w-full  min-h-[70vh] md:min-h-[50vh] flex flex-col justify-center bg-linear-to-br from-black via-gray-900 to-blue-900",
			children: s.jsxs("div", {
				className: "mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-7xl px-4 text-center",
				children: [s.jsxs("h1", {
					className: "text-2xl md:text-6xl font-bold mb-6 red-rose",
					children: ["IT Solutions ", s.jsx("span", {
						className: "text-white red-rose",
						children: "Empower Your Business"
					})]
				}), s.jsx("p", {
					className: "text-gray-300 max-w-2xl text-sm md:text-lg mx-auto mb-8",
					children: "Comprehensive IT solutions designed to drive innovation, enhance security, and accelerate your business growth."
				}), s.jsx("div", {
					className: "flex justify-center gap-4 flex-wrap font-semibold",
					children: s.jsx(Fe, {
						to: "/contact",
						children: s.jsxs("button", {
							className: "bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition cursor-pointer ",
							children: ["Start Service", s.jsx(dm, {
								className: "inline-block ml-2",
								size: 16
							})]
						})
					})
				})]
			})
		}), s.jsx("section", {
			className: "w-full bg-white py-15",
			children: s.jsxs("div", {
				className: "mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-7xl px-4 flex flex-col gap-10",
				children: [s.jsxs("div", {
					className: "flex flex-col items-center justify-center mb-4 gap-4",
					children: [s.jsxs("h1", {
						className: "text-2xl text-blue-500 md:text-4xl text-center font-bold red-rose",
						children: ["Trusted by Businesses Worldwide"]
					}), s.jsx("p", {
						className: "text-sm text-gray-500 text-center",
						children: "Our track record speaks for itself with consistent delivery of exceptional IT solutions."
					})]
				}), s.jsx("div", {
					className: "grid md:grid-cols-4 gap-4 text-center",
					children: [{
						number: "500+",
						label: "Projects Delivered"
					}, {
						number: "98%",
						label: "Client Retention"
					}, {
						number: "10+",
						label: "Industries Served"
					}, {
						number: "24/7",
						label: "Support"
					}].map((i, r) => s.jsxs("div", {
						className: "bg-gray-900 p-6 rounded-xl border border-gray-800",
						children: [s.jsx("h3", {
							className: "text-3xl font-bold text-white-500",
							children: i.number
						}), s.jsx("p", {
							className: "text-gray-400 mt-2",
							children: i.label
						})]
					}, r))
				})]
			})
		}), s.jsx("section", {
			className: "w-full bg-white py-10",
			children: s.jsxs("div", {
				className: "mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-7xl px-4",
				children: [s.jsx("div", {
					className: "text-center ",
					children: s.jsxs("h2", {
						className: "text-3xl text-blue-500 md:text-4xl font-bold red-rose",
						children: ["Our ", s.jsx("span", {
							className: "text-blue-500 red-rose",
							children: "IT Solutions"
						})]
					})
				}), s.jsx(qv, {})]
			})
		}), s.jsx("section", {
			className: "w-full bg-white py-10",
			children: s.jsxs("div", {
				className: "mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-7xl px-4",
				children: [s.jsxs("div", {
					className: "text-center mb-14",
					children: [s.jsxs("h2", {
						className: "text-3xl text-blue-500 font-bold red-rose",
						children: ["Our ", s.jsx("span", {
							className: "text-blue-500 red-rose",
							children: "Technology Stack"
						})]
					}), s.jsx("p", {
						className: "text-gray-400 mt-4",
						children: "We leverage cutting-edge technologies to build scalable and future-ready solutions."
					})]
				}), s.jsx("div", {
					className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4",
					children: ["AWS", "Azure", "Google Cloud", "React", "Node.js", "Python", "Kubernetes", "Docker", "MySQL", "MongoDB", "Firebase", "Next.js"].map((i, r) => s.jsx("div", {
						className: "bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500 transition",
						children: s.jsx("p", {
							className: "text-white  font-semibold",
							children: i
						})
					}, r))
				})]
			})
		}), s.jsx("section", {
			className: "w-full bg-white py-20",
			children: s.jsxs("div", {
				className: "mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-7xl px-4",
				children: [s.jsxs("div", {
					className: "text-center mb-16",
					children: [s.jsxs("h2", {
						className: "text-3xl text-blue-500 font-bold red-rose",
						children: ["Our ", s.jsx("span", {
							className: "text-blue-500 red-rose",
							children: "Approach"
						})]
					}), s.jsx("p", {
						className: "text-gray-400 mt-4",
						children: "A structured methodology ensuring successful project delivery."
					})]
				}), s.jsx("div", {
					className: "grid md:grid-cols-4 gap-8 text-center",
					children: [{
						step: s.jsx(V1, {}),
						title: "Technical Discovery",
						para: "We analyze your existing IT infrastructure, system architecture, business objectives, and digital challenges to define the right technology direction."
					}, {
						step: s.jsx(Gs, {}),
						title: "Strategy & Solution Architecture",
						para: "We design a scalable, secure, and performance-driven technology roadmap tailored to your operational and growth requirements."
					}, {
						step: s.jsx(k1, {}),
						title: "Agile Development & Deployment",
						para: "Our engineering team builds, tests, and deploys robust IT solutions using agile methodologies with transparent progress tracking."
					}, {
						step: s.jsx(Am, {}),
						title: "Continuous Optimization & Support",
						para: "We provide proactive monitoring, security updates, performance tuning, and long-term technical support to ensure sustainable digital growth."
					}].map((i, r) => s.jsxs("div", {
						className: "relative",
						children: [s.jsx("div", {
							className: "w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white font-bold mb-4",
							children: i.step
						}), s.jsx("h3", {
							className: "text-lg font-semibold text-blue-500 mb-2",
							children: i.title
						}), s.jsx("p", {
							className: "text-gray-400 text-sm max-w-xs mx-auto",
							children: i.para
						})]
					}, r))
				})]
			})
		}), s.jsx("section", {
			className: "w-full bg-white py-20",
			children: s.jsxs("div", {
				className: "mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-7xl px-4",
				children: [s.jsxs("div", {
					className: "text-center mb-14",
					children: [s.jsxs("h2", {
						className: "text-4xl text-blue-500 font-bold red-rose",
						children: ["Free ", s.jsx("span", {
							className: "text-blue-500 red-rose",
							children: "Resources"
						})]
					}), s.jsx("p", {
						className: "text-gray-400 mt-4",
						children: "Access our curated resources to stay ahead in the digital landscape."
					})]
				}), s.jsx("div", {
					className: "grid md:grid-cols-3 gap-8",
					children: [{
						icon: s.jsx(n1, {}),
						title: "Technical Whitepapers",
						para: "Access our in-depth research, industry insights, and best practices on cloud computing, cybersecurity, AI, DevOps, and enterprise IT solutions."
					}, {
						icon: s.jsx(zm, {}),
						title: "Tech Webinars & Workshops",
						para: "Join our live technical sessions or explore recorded webinars covering emerging technologies, architecture strategies, and digital transformation trends."
					}, {
						icon: s.jsx(Gs, {}),
						title: "Developer Knowledge Base",
						para: "Explore technical guides, implementation tutorials, FAQs, and expert insights to help you build, deploy, and scale modern IT systems."
					}].map((i, r) => s.jsxs("div", {
						className: "bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-500 transition cursor-pointer",
						children: [i.icon && s.jsx("div", {
							className: "w-14 h-14 flex items-center justify-center bg-blue-200 rounded-full mb-4 text-blue-500",
							children: i.icon
						}), s.jsx("h3", {
							className: "text-xl font-semibold text-whitemb-4",
							children: i.title
						}), s.jsx("p", {
							className: "text-white\/60 mb-6",
							children: i.para || "Explore our upcoming webinars on emerging IT trends, best practices, and real-world case studies to enhance your technical knowledge and stay ahead in the industry."
						})]
					}, r))
				})]
			})
		}), s.jsx("section", {
			className: "w-full bg-white py-14",
			children: s.jsxs("div", {
				className: "mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-7xl px-4",
				children: [s.jsxs("div", {
					className: "text-center mb-16",
					children: [s.jsxs("h2", {
						className: "text-2xl text-blue-500 md:text-4xl font-bold red-rose",
						children: ["Our ", s.jsx("span", {
							className: "text-blue-500 red-rose",
							children: "Service Packages"
						})]
					}), s.jsx("p", {
						className: "text-gray-400 mt-4",
						children: "Flexible solutions designed for every stage of business growth."
					})]
				}), s.jsxs("div", {
					className: "grid md:grid-cols-3 gap-10",
					children: [s.jsxs("div", {
						className: "bg-gray-900/80 backdrop-blur border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300",
						children: [s.jsx("h3", {
							className: "text-2xl font-semibold mb-2",
							children: "Starter Package"
						}), s.jsx("p", {
							className: "text-gray-400 mb-6",
							children: "Ideal for startups & small teams"
						}), s.jsx("h4", {
							className: "text-xl font-bold text-blue-500 mb-6",
							children: "Custom Quote"
						}), s.jsx("ul", {
							className: "space-y-4 mb-8",
							children: ["Basic Application Development", "6 Months Support", "Standard Security", "Basic Documentation"].map((i, r) => s.jsxs("li", {
								className: "flex items-center gap-3 text-gray-300",
								children: [s.jsx(Hs, {
									className: "text-blue-500 w-5 h-5"
								}), i]
							}, r))
						})]
					}), s.jsxs("div", {
						className: "bg-gray-900/90 backdrop-blur border-2 border-blue-500 rounded-2xl p-10 shadow-2xl shadow-blue-500/20 scale-105",
						children: [s.jsx("div", {
							className: "mb-4",
							children: s.jsx("span", {
								className: "bg-blue-600 text-white text-xs px-3 py-1 rounded-full",
								children: "Most Popular"
							})
						}), s.jsx("h3", {
							className: "text-2xl font-semibold mb-2",
							children: "Business Package"
						}), s.jsx("p", {
							className: "text-gray-400 mb-6",
							children: "For growing businesses with advanced needs"
						}), s.jsx("h4", {
							className: "text-xl font-bold text-blue-500 mb-6",
							children: "Custom Quote"
						}), s.jsx("ul", {
							className: "space-y-4 mb-8",
							children: ["Custom Software Development", "12 Months Support", "Enhanced Security", "Full Documentation", "Basic Training"].map((i, r) => s.jsxs("li", {
								className: "flex items-center gap-3 text-gray-300",
								children: [s.jsx(Hs, {
									className: "text-blue-500 w-5 h-5"
								}), i]
							}, r))
						})]
					}), s.jsxs("div", {
						className: "bg-gray-900/80 backdrop-blur border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300",
						children: [s.jsx("h3", {
							className: "text-2xl font-semibold mb-2",
							children: "Enterprise Package"
						}), s.jsx("p", {
							className: "text-gray-400 mb-6",
							children: "Comprehensive solutions for large organizations"
						}), s.jsx("h4", {
							className: "text-xl font-bold text-blue-500 mb-6",
							children: "Custom Quote"
						}), s.jsx("ul", {
							className: "space-y-4 mb-8",
							children: ["Enterprise-grade Solutions", "24/7 Support", "Advanced Security", "Extensive Training", "Dedicated Account Manager"].map((i, r) => s.jsxs("li", {
								className: "flex items-center gap-3 text-gray-300",
								children: [s.jsx(Hs, {
									className: "text-blue-500 w-5 h-5"
								}), i]
							}, r))
						})]
					})]
				})]
			})
		}), s.jsx("section", {
			className: "w-full bg-white py-20",
			children: s.jsxs("div", {
				className: "mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-7xl px-4 text-center",
				children: [s.jsxs("h2", {
					className: "text-2xl text-blue-500  md:text-4xl font-bold mb-6 red-rose",
					children: ["Ready to Transform Your ", s.jsx("span", {
						className: "text-blue-500 red-rose",
						children: "Business?"
					})]
				}), s.jsx(Fe, {
					to: "/contact",
					children: s.jsxs("button", {
						className: "bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium",
						children: ["Book Free Consultation", s.jsx(dm, {
							className: "inline-block ml-2",
							size: 16
						})]
					})
				})]
			})
		})]
	})
}
const Yv = () => s.jsx("div", {
	children: s.jsx(Lv, {})
});
class Yn {
	constructor(r = 0, d = "Network Error") {
		this.status = r, this.text = d
	}
}
const Gv = () => {
		if (!(typeof localStorage > "u")) return {
			get: i => Promise.resolve(localStorage.getItem(i)),
			set: (i, r) => Promise.resolve(localStorage.setItem(i, r)),
			remove: i => Promise.resolve(localStorage.removeItem(i))
		}
	},
	Ke = {
		origin: "https://api.emailjs.com",
		blockHeadless: !1,
		storageProvider: Gv()
	},
	Ws = i => i ? typeof i == "string" ? {
		publicKey: i
	} : i.toString() === "[object Object]" ? i : {} : {},
	Xv = (i, r = "https://api.emailjs.com") => {
		if (!i) return;
		const d = Ws(i);
		Ke.publicKey = d.publicKey, Ke.blockHeadless = d.blockHeadless, Ke.storageProvider = d.storageProvider, Ke.blockList = d.blockList, Ke.limitRate = d.limitRate, Ke.origin = d.origin || r
	},
	$m = async (i, r, d = {}) => {
		const o = await fetch(Ke.origin + i, {
				method: "POST",
				headers: d,
				body: r
			}),
			m = await o.text(),
			y = new Yn(o.status, m);
		if (o.ok) return y;
		throw y
	}, Wm = (i, r, d) => {
		if (!i || typeof i != "string") throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
		if (!r || typeof r != "string") throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
		if (!d || typeof d != "string") throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"
	}, Qv = i => {
		if (i && i.toString() !== "[object Object]") throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"
	}, Fm = i => i.webdriver || !i.languages || i.languages.length === 0, Im = () => new Yn(451, "Unavailable For Headless Browser"), Vv = (i, r) => {
		if (!Array.isArray(i)) throw "The BlockList list has to be an array";
		if (typeof r != "string") throw "The BlockList watchVariable has to be a string"
	}, Zv = i => !i.list?.length || !i.watchVariable, kv = (i, r) => i instanceof FormData ? i.get(r) : i[r], Pm = (i, r) => {
		if (Zv(i)) return !1;
		Vv(i.list, i.watchVariable);
		const d = kv(r, i.watchVariable);
		return typeof d != "string" ? !1 : i.list.includes(d)
	}, eh = () => new Yn(403, "Forbidden"), Kv = (i, r) => {
		if (typeof i != "number" || i < 0) throw "The LimitRate throttle has to be a positive number";
		if (r && typeof r != "string") throw "The LimitRate ID has to be a non-empty string"
	}, Jv = async (i, r, d) => {
		const o = Number(await d.get(i) || 0);
		return r - Date.now() + o
	}, th = async (i, r, d) => {
		if (!r.throttle || !d) return !1;
		Kv(r.throttle, r.id);
		const o = r.id || i;
		return await Jv(o, r.throttle, d) > 0 ? !0 : (await d.set(o, Date.now().toString()), !1)
	}, lh = () => new Yn(429, "Too Many Requests"), $v = async (i, r, d, o) => {
		const m = Ws(o),
			y = m.publicKey || Ke.publicKey,
			b = m.blockHeadless || Ke.blockHeadless,
			_ = m.storageProvider || Ke.storageProvider,
			N = {
				...Ke.blockList,
				...m.blockList
			},
			p = {
				...Ke.limitRate,
				...m.limitRate
			};
		return b && Fm(navigator) ? Promise.reject(Im()) : (Wm(y, i, r), Qv(d), d && Pm(N, d) ? Promise.reject(eh()) : await th(location.pathname, p, _) ? Promise.reject(lh()) : $m("/api/v1.0/email/send", JSON.stringify({
			lib_version: "4.4.1",
			user_id: y,
			service_id: i,
			template_id: r,
			template_params: d
		}), {
			"Content-type": "application/json"
		}))
	}, Wv = i => {
		if (!i || i.nodeName !== "FORM") throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form"
	}, Fv = i => typeof i == "string" ? document.querySelector(i) : i, Iv = async (i, r, d, o) => {
		const m = Ws(o),
			y = m.publicKey || Ke.publicKey,
			b = m.blockHeadless || Ke.blockHeadless,
			_ = Ke.storageProvider || m.storageProvider,
			N = {
				...Ke.blockList,
				...m.blockList
			},
			p = {
				...Ke.limitRate,
				...m.limitRate
			};
		if (b && Fm(navigator)) return Promise.reject(Im());
		const R = Fv(d);
		Wm(y, i, r), Wv(R);
		const T = new FormData(R);
		return Pm(N, T) ? Promise.reject(eh()) : await th(location.pathname, p, _) ? Promise.reject(lh()) : (T.append("lib_version", "4.4.1"), T.append("service_id", i), T.append("template_id", r), T.append("user_id", y), $m("/api/v1.0/email/send-form", T))
	}, Pv = {
		init: Xv,
		send: $v,
		sendForm: Iv,
		EmailJSResponseStatus: Yn
	}, ep = () => {
		const i = M.useRef(),
			r = d => {
				d.preventDefault(), Pv.sendForm("service_cnp7jg9", "template_98t9ng9", i.current, "iiuxOZLUxTCOpdxHP").then(() => {
					alert("Message sent successfully 🚀"), d.target.reset()
				}).catch(() => {
					alert("Something went wrong ❌")
				})
			};
		return s.jsx("section", {
			className: "min-h-screen bg-white py-24 p-6",
			children: s.jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [s.jsxs("div", {
					className: "text-center mb-10 flex items-center flex-col",
					children: [s.jsxs("h1", {
						className: "text-2xl text-blue-500  md:text-4xl lg:text-6xl font-bold mb-4 red-rose",
						children: ["Let’s ", s.jsx("span", {
							className: "text-blue-500 red-rose",
							children: "Connect"
						})]
					}), s.jsx("p", {
						className: "We look forward to hearing from you",
						children: "We look forward to hearing from you"
					}), s.jsx("p", {
						className: "bg-blue-500 border border-white/10 px-2 text-center py-1 w-fit rounded-full text-white text-sm md:text-lg",
						children: "Our IT Service branches and teams operate worldwide."
					})]
				}), s.jsx("div", {
					children: s.jsx("img", {
						src: "map.webp",
						alt: "World Map",
						className: "mx-auto bg-blue-100 mt-10 opacity-90 md:max-w-2xl w-full object-contain"
					})
				}), s.jsxs("div", {
					className: "bg-blue-500 text-white py-1 px-2 flex items-center justify-center md:gap-5 gap-2 rounded-2xl max-w-5xl mx-auto my-10",
					children: [s.jsx(d1, {
						className: "h-15 w-15 text-white"
					}), s.jsx("p", {
						className: "text-white text-sm md:text-lg",
						children: "Have questions about courses, internships, or career support? Our team is here to help you."
					})]
				}), s.jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-14",
					children: [s.jsxs("div", {
						className: "space-y-6",
						children: [s.jsxs("div", {
							className: "bg-white border border-white-600 rounded-2xl shadow-md p-8 hover:bg-white\/80 transition duration-300 space-y-3",
							children: [s.jsx(si, {
								className: "text-blue-500"
							}), s.jsxs("div", {
								children: [s.jsx("p", {
									className: "text-lg font-semibold mb-2 text-blue-500",
									children: "Phone"
								}), s.jsxs("p", {
									className: "text-gray-600 text-sm md:text-lg",
									children: ["+91 ", s.jsx("span", {
										className: "tracking-wider",
										children: "9187337635"
									}), " "]
								})]
							})]
						}), s.jsxs("div", {
							className: "bg-white border border-white-600 rounded-2xl shadow-md p-8 hover:bg-white\/80 transition duration-300 space-y-3",
							children: [s.jsx(jm, {
								className: "text-blue-500 h-10 w-10 hidden md:block"
							}), s.jsx("div", {
								children: s.jsxs("ul", {
									children: [s.jsx("p", {
										className: "mb-2 text-blue-500 font-semibold",
										children: "Email"
									}), s.jsx("p", {
										className: "text-gray-600 text-sm md:text-lg",
										children: "info@techyvibez.com"
									}), s.jsx("p", {
										className: "text-gray-600 text-sm md:text-lg",
										children: "Support@techyvibez.com"
									}), s.jsx("p", {
										className: "text-gray-600 text-sm md:text-lg",
										children: "Helpdeskstudents@techyvibez.com"
									}), s.jsx("p", {
										className: "text-gray-600 text-sm md:text-lg",
										children: "Career@techyvibez.com"
									})]
								})
							})]
						}), s.jsxs("div", {
							className: "bg-white border border-white-600 rounded-2xl shadow-md p-8 hover:bg-white\/80 transition duration-300 space-y-3",
							children: [s.jsx(Em, {
								className: "text-blue-500 hidden md:block"
							}), s.jsxs("div", {
								children: [s.jsx("p", {
									className: "mb-2 text-blue-500 font-semibold",
									children: "Location"
								}), s.jsx("p", {
									className: "text-gray-600 text-sm md:text-lg",
									children: "Govinda Chetty Colony, Vasanth Nagar, Bengaluru, Karnataka-560051."
								})]
							})]
						}), s.jsx("p", {
							className: "text-sm text-center text-gray-500",
							children: "⏱ We usually respond within 24 hours"
						})]
					}), s.jsxs("form", {
						ref: i,
						onSubmit: r,
						className: "bg-white border border-white-600 rounded-2xl shadow-md p-8 hover:bg-white\/80 transition duration-300 space-y-3",
						children: [s.jsx("h2", {
							className: "text-2xl text-blue-500 text-center font-red_rose mb-4",
							children: "Send us a Message"
						}), s.jsx("input", {
							type: "text",
							name: "fullName",
							placeholder: "Full Name",
							required: !0,
							className: "w-full bg-blue/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
						}), s.jsx("input", {
							type: "text",
							name: "lastName",
							placeholder: "Last Name",
							required: !0,
							className: "w-full bg-blue/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
						}), s.jsx("input", {
							type: "email",
							name: "email",
							placeholder: "Your Email Id",
							required: !0,
							className: "w-full bg-blue/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
						}), s.jsx("input", {
							type: "text",
							name: "phone",
							placeholder: "Phone Number",
							className: "w-full bg-blue/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
						}), s.jsx("textarea", {
							name: "message",
							rows: "4",
							placeholder: "Your Message",
							required: !0,
							className: "w-full bg-blue/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
						}), s.jsxs("button", {
							type: "submit",
							className: "w-full flex text-white items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold",
							children: ["Send Message ", s.jsx(U1, {
								size: 18
							})]
						})]
					})]
				})]
			})
		})
	}, tp = () => s.jsxs("footer", {
		className: "relative w-full bg-linear-to-br from-[#050B1F] via-black to-[#020617] text-white/70",
		children: [s.jsx("div", {
			className: "absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-600 to-transparent"
		}), s.jsxs("div", {
			className: "max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12",
			children: [s.jsxs("div", {
				className: "flex flex-col gap-4 text-sm",
				children: [s.jsx("img", {
					src: "/Techyvibez.webp",
					className: "h-20 w-fit"
				}), s.jsx("p", {
					className: "leading-relaxed",
					children: "Delivering innovative and scalable IT solutions that empower businesses to grow, optimize operations, and lead confidently in the digital era since 2026."
				}), s.jsxs("div", {
					className: "flex flex-col gap-2",
					children: [s.jsxs("p", {
						className: "flex items-center gap-2",
						children: [s.jsx(si, {
							className: "w-4 h-4 text-blue-400"
						}), "+91 ", s.jsx("span", {
							className: "tracking-wider",
							children: "9187337635"
						})]
					}), s.jsxs("p", {
						className: "flex items-center gap-2",
						children: [s.jsx(jm, {
							className: "w-4 h-4 text-blue-400"
						}), "info@techyvibez.com"]
					}), s.jsxs("p", {
						className: "flex items-center gap-2",
						children: [s.jsx(Em, {
							className: "w-4 h-4 text-blue-400"
						}), "Govinda Chetty Colony, Vasanth Nagar, Bengaluru, Karnataka -  560051"]
					})]
				})]
			}), s.jsxs("div", {
				className: "flex flex-col gap-3 text-sm",
				children: [s.jsx("p", {
					className: "text-lg font-semibold text-white",
					children: "Quick Links"
				}), s.jsx(Fe, {
					to: "/",
					className: "hover:text-blue-400 transition w-fit",
					children: "Home"
				}), s.jsx(Fe, {
					to: "/it-technologies",
					className: "hover:text-blue-400 transition w-fit",
					children: "IT Technologies"
				}), s.jsx(Fe, {
					to: "/about",
					className: "hover:text-blue-400 transition w-fit",
					children: "About Us"
				}), s.jsx(Fe, {
					to: "/contact",
					className: "hover:text-blue-400 transition w-fit",
					children: "Contact Us"
				})]
			}), s.jsxs("div", {
				className: "flex flex-col gap-5 text-sm",
				children: [s.jsx("p", {
					className: "text-lg font-semibold text-white",
					children: "Connect With Us"
				}), s.jsx("p", {
					children: "Follow us on social media for the latest updates and career insights."
				}), s.jsxs("div", {
					className: "flex gap-4",
					children: [s.jsx("div", {
						className: "w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-whitehover:shadow-[0_0_20px_rgba(37,99,235,0.6)]transition cursor-pointer",
						children: s.jsx("a", {
							href: "https://www.instagram.com/techyvibez.official",
							children: s.jsx(g1, {
								size: 18
							})
						})
					}), s.jsx("div", {
						className: "w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-whitehover:shadow-[0_0_20px_rgba(37,99,235,0.6)]transition cursor-pointer",
						children: s.jsx("a", {
							href: "https://www.linkedin.com/company/techyvibez/",
							children: s.jsx(E1, {
								size: 18
							})
						})
					}), s.jsx("div", {
						className: "w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-whitehover:shadow-[0_0_20px_rgba(37,99,235,0.6)]transition cursor-pointer",
						children: s.jsx("a", {
							href: "",
							children: s.jsx(s1, {
								size: 18
							})
						})
					}), s.jsx("div", {
						className: "w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-whitehover:shadow-[0_0_20px_rgba(37,99,235,0.6)]transition cursor-pointer",
						children: s.jsx("a", {
							href: "https://wa.me/919187337635",
							children: s.jsx(Tm, {
								size: 18
							})
						})
					})]
				}), s.jsxs("div", {
					className: "bg-white/5 border border-white/10 rounded-xl p-4",
					children: [s.jsx("p", {
						className: "text-white font-medium mb-1",
						children: "Business Hours"
					}), s.jsx("p", {
						className: "text-xs",
						children: "Monday – Saturday"
					}), s.jsx("p", {
						className: "text-xs",
						children: "9:00 AM – 6:00 PM IST"
					})]
				})]
			})]
		}), s.jsx("div", {
			className: "border-t border-white/10",
			children: s.jsx("div", {
				className: "max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-3 text-xs",
				children: s.jsx("p", {
					children: "© 2026 Techyvibez. All Rights Reserved."
				})
			})
		})]
	});

function lp() {
	const {
		pathname: i
	} = il();
	return M.useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		})
	}, [i]), null
}
const ap = () => s.jsxs("div", {
	className: "",
	children: [s.jsx(Mv, {}), s.jsx(lp, {}), s.jsxs($g, {
		children: [s.jsx(Ha, {
			path: "/",
			element: s.jsx(Rv, {})
		}), s.jsx(Ha, {
			path: "/about",
			element: s.jsx(Cv, {})
		}), s.jsx(Ha, {
			path: "/bpo",
			element: s.jsx(Hv, {})
		}), s.jsx(Ha, {
			path: "/it-technologies",
			element: s.jsx(Yv, {})
		}), s.jsx(Ha, {
			path: "/contact",
			element: s.jsx(ep, {})
		})]
	}), s.jsx(tp, {})]
});
Uy.createRoot(document.getElementById("root")).render(s.jsx(xv, {
	children: s.jsx(ap, {})
}));