!(function (e) {
  var t,
    n,
    o,
    i,
    a,
    c,
    d =
      '<svg><symbol id="icon-money" viewBox="0 0 1024 1024"><path d="M460.05333333 988.05333333V789.44H209.92v-82.66666667h250.13333333v-85.86666666H209.92v-89.06666667H413.86666667L170.13333333 102.4h121.28L466.13333333 414.50666667c19.41333333 35.62666667 34.56 66.56 45.54666667 92.69333333 9.6-21.12 26.24-53.86666667 49.92-98.24L727.36 102.4h128.85333333L611.73333333 531.84h205.76v89.06666667H568.42666667v85.86666666h249.06666666v82.66666667H568.42666667v198.61333333H460.05333333z"  ></path></symbol><symbol id="icon-tag" viewBox="0 0 1024 1024"><path d="M1002.682182 616.820364a80.058182 80.058182 0 0 0-23.133091-52.922182L457.681455 37.236364a53.061818 53.061818 0 0 0-37.655273-15.732364h-316.974546c-44.962909 0-81.454545 36.026182-81.454545 80.523636v325.352728c0 3.444364 0.372364 6.842182 1.024 10.100363l0.558545 2.513455a50.641455 50.641455 0 0 0 13.824 24.110545l260.654546 257.442909 260.608 257.489455c6.004364 5.864727 12.660364 10.705455 19.735273 14.382545a82.478545 82.478545 0 0 0 95.418181-14.429091l305.477819-301.940363a84.805818 84.805818 0 0 0 11.170909-13.730909 73.867636 73.867636 0 0 0 5.864727-11.031273 77.730909 77.730909 0 0 0 6.749091-35.467636zM240.779636 322.839273a77.730909 77.730909 0 1 1 0.093091-155.415273 77.730909 77.730909 0 0 1-0.093091 155.415273z"  ></path></symbol><symbol id="icon-chart" viewBox="0 0 1024 1024"><path d="M170.66666667 853.33333333h750.93333333v68.26666667H102.4V102.4h68.26666667v750.93333333z m456.20266666-275.18293333l-139.264-139.264-190.0992 190.10026667-48.24213333-48.26453334 238.3648-238.3872 137.056 137.056 220.22933333-240.75306666 50.3808 46.08L626.86933333 578.1504z"  ></path></symbol></svg>',
    l = (l = document.getElementsByTagName('script'))[l.length - 1].getAttribute('data-injectcss')
  if (l && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0
    try {
      document.write('<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>')
    } catch (e) {
      console && console.log(e)
    }
  }
  function s() {
    a || ((a = !0), o())
  }
  ;(t = function () {
    var e, t, n, o
    ;((o = document.createElement('div')).innerHTML = d), (d = null), (n = o.getElementsByTagName('svg')[0]) && (n.setAttribute('aria-hidden', 'true'), (n.style.position = 'absolute'), (n.style.width = 0), (n.style.height = 0), (n.style.overflow = 'hidden'), (e = n), (t = document.body).firstChild ? ((o = e), (n = t.firstChild).parentNode.insertBefore(o, n)) : t.appendChild(e))
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener('DOMContentLoaded', n, !1), t()
          }),
          document.addEventListener('DOMContentLoaded', n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (a = !1),
        (c = function () {
          try {
            i.documentElement.doScroll('left')
          } catch (e) {
            return void setTimeout(c, 50)
          }
          s()
        })(),
        (i.onreadystatechange = function () {
          'complete' == i.readyState && ((i.onreadystatechange = null), s())
        }))
})(window)
