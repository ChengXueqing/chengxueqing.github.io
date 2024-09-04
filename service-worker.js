/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0ec62fbd48c93aa00267b6b5e210be43"
  },
  {
    "url": "advanced/1.html",
    "revision": "a5a9ad0b72deb93db7092dd0e832dc22"
  },
  {
    "url": "advanced/2.html",
    "revision": "7ba6e3fbc3116adf7e665ad0ddbd898c"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/1.3f0a0162.png",
    "revision": "3f0a016273feeb57cd94cc2c9c17afb5"
  },
  {
    "url": "assets/img/2.7c59bb5d.png",
    "revision": "7c59bb5dd1b751d10ba8e64a64415369"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e31a0189.js",
    "revision": "653aa27dfaa07eaec55f8ec3418d045c"
  },
  {
    "url": "assets/js/11.49873297.js",
    "revision": "fb995a824051cf593fd977f6bd1a6e64"
  },
  {
    "url": "assets/js/12.d86bd3e5.js",
    "revision": "d45592f126e960e42319ef5473c25240"
  },
  {
    "url": "assets/js/13.31296fba.js",
    "revision": "d3cf79bb24e360a407d1bce666bbf036"
  },
  {
    "url": "assets/js/14.6ca26377.js",
    "revision": "d4b8f9a4e4e998b3a69b77d17c246e6b"
  },
  {
    "url": "assets/js/15.6fb26071.js",
    "revision": "3f5a953f0d5886b18cccd60c5f3f297d"
  },
  {
    "url": "assets/js/16.e7085959.js",
    "revision": "89eaa918fd1c428aa7a9143a97be7722"
  },
  {
    "url": "assets/js/17.34110049.js",
    "revision": "a708ef1a5c095bc84688b16c9957a678"
  },
  {
    "url": "assets/js/18.a29bb537.js",
    "revision": "5c6d50a9ac35c5ed407bba207a38cb56"
  },
  {
    "url": "assets/js/19.b81132af.js",
    "revision": "3e1baafc6245af25516e7bc994932934"
  },
  {
    "url": "assets/js/2.7e31b1c9.js",
    "revision": "f2d014243e14861b89362ec4a17430f6"
  },
  {
    "url": "assets/js/20.b11d706b.js",
    "revision": "a59846ee130ca0b5014f80866a4e049c"
  },
  {
    "url": "assets/js/21.eed5b9d7.js",
    "revision": "d3905b9efb32adc3abaa2ee9ccf3b399"
  },
  {
    "url": "assets/js/22.81d40af8.js",
    "revision": "e7af2f38dd151cb4b08c9c89cd6e64e7"
  },
  {
    "url": "assets/js/23.333c1a02.js",
    "revision": "caf03d828714ffe11431bdada3953395"
  },
  {
    "url": "assets/js/24.d441e858.js",
    "revision": "25b072e36621e00d5a823e17373ef12f"
  },
  {
    "url": "assets/js/25.fb8d4a2e.js",
    "revision": "5d35fa4144eb9f831c90edf68f195d10"
  },
  {
    "url": "assets/js/26.d8e533c4.js",
    "revision": "d89729712acaf8f0071bcb06f62797a1"
  },
  {
    "url": "assets/js/27.a36b362b.js",
    "revision": "cc6afa791c22016ddaff92adfd366e65"
  },
  {
    "url": "assets/js/28.1172e6b5.js",
    "revision": "f4b7bb991b9f84a16eb18a7528014e66"
  },
  {
    "url": "assets/js/29.8d3b7ddf.js",
    "revision": "bd7ed90440ef32a22cc9a1f83462885f"
  },
  {
    "url": "assets/js/3.65188a44.js",
    "revision": "aa7adb205e8708807aa802b944eb3cd8"
  },
  {
    "url": "assets/js/30.db3fb1e9.js",
    "revision": "a4986b8361c620a2f51bfcbda922db72"
  },
  {
    "url": "assets/js/31.0ca4ed9a.js",
    "revision": "cdc41e5d783055199de9edf5c34c3baa"
  },
  {
    "url": "assets/js/32.c93c6671.js",
    "revision": "0b57ca5b372f8b9c534176d7585399af"
  },
  {
    "url": "assets/js/33.4726e068.js",
    "revision": "241c139217f4f7be548008b887798b26"
  },
  {
    "url": "assets/js/34.a609240a.js",
    "revision": "1bb6e23ce6ce23983c61331428d1765c"
  },
  {
    "url": "assets/js/4.6a2ab548.js",
    "revision": "4111e202162f31c1eec8fba83e185d8b"
  },
  {
    "url": "assets/js/5.c6f74ff3.js",
    "revision": "a1f17bb05aba566fe24c8e8b5de3bb58"
  },
  {
    "url": "assets/js/6.0cb5505c.js",
    "revision": "c50456a0d4404ce245472ac05ba28e37"
  },
  {
    "url": "assets/js/7.ceb4a4bc.js",
    "revision": "5c697268db9b51ad8399bb643459a2ce"
  },
  {
    "url": "assets/js/8.458364af.js",
    "revision": "f3670d641e2e0145cf78e03deb535d0e"
  },
  {
    "url": "assets/js/9.416cee7d.js",
    "revision": "74cebbf39ed2f3d10e93664d50a0f960"
  },
  {
    "url": "assets/js/app.f4a02d2d.js",
    "revision": "27eca69bc90afb60969dd134da86293d"
  },
  {
    "url": "basic/1.html",
    "revision": "b30f0be502ec7101a73adc67b4ccd0ec"
  },
  {
    "url": "basic/10.html",
    "revision": "fd138efa382ec9947be777bb98438af0"
  },
  {
    "url": "basic/11.html",
    "revision": "e92716d01e448c9e49d8838313bc80e3"
  },
  {
    "url": "basic/12.html",
    "revision": "139ee9a08d099fa56d130cf93dbd39c1"
  },
  {
    "url": "basic/13.html",
    "revision": "477593e7542972dd567b5f34fbd5dee0"
  },
  {
    "url": "basic/2.html",
    "revision": "d40738d8960db12a6a7bbe76bdfa7741"
  },
  {
    "url": "basic/3.html",
    "revision": "0a1af827aad2e79f6458a443211939d1"
  },
  {
    "url": "basic/4.html",
    "revision": "1a087bce39fb4c1c32941c0596df3b93"
  },
  {
    "url": "basic/5.html",
    "revision": "a68de55427cedd65a111505cea8fc373"
  },
  {
    "url": "basic/6.html",
    "revision": "242cd870e84aac3979f80e6c2c66326e"
  },
  {
    "url": "basic/7.html",
    "revision": "dc92946a3e6edd363b53bb3071ecaa94"
  },
  {
    "url": "basic/8.html",
    "revision": "75e6a7206eec63eaf6be2fa856a85cc9"
  },
  {
    "url": "basic/9.html",
    "revision": "fa52fd034ad3dd34d16bae25954193a8"
  },
  {
    "url": "engineering/规范化/commit.html",
    "revision": "d7be50ea4766db25934aad6700b94c57"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "b21768ed0290a3e8f29ce22182134437"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/engineering/demo.jpeg",
    "revision": "90da577eabcac3026c17a83e67edc073"
  },
  {
    "url": "images/engineering/example.png",
    "revision": "1ecf7a843ed31b149cf86c669ad10910"
  },
  {
    "url": "images/gitcommit.jpg",
    "revision": "40f73e9e8c183461bada9b09dd93981d"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "images/pink.jpg",
    "revision": "8dbee8cee20194743f2307bbfc5973bc"
  },
  {
    "url": "index.html",
    "revision": "9d93970b45e8fbb1f37a9638e0b843f1"
  },
  {
    "url": "interview/1.html",
    "revision": "6080628829586df3b35d7418e410e1f6"
  },
  {
    "url": "interview/2.html",
    "revision": "b5cac1d5e302ed6d3f0af7396e2699e6"
  },
  {
    "url": "interview/CSS.html",
    "revision": "8da29808b59531d2cb019f983043a45c"
  },
  {
    "url": "interview/HTML.html",
    "revision": "34467646f3661638fa82d2fdf7c8d06b"
  },
  {
    "url": "others/1.html",
    "revision": "fa5beda960b9b64002c392e430fe2fdd"
  },
  {
    "url": "others/2.html",
    "revision": "51dcc9dc28113746bda22a711a1910fd"
  },
  {
    "url": "others/3.html",
    "revision": "509a58516f404e342010540a1338c88d"
  },
  {
    "url": "others/4.html",
    "revision": "67bd69899cdfb090965a3473cd0ae1f6"
  },
  {
    "url": "others/5.html",
    "revision": "24eb77660d472758187b71ce636d0865"
  },
  {
    "url": "others/6.html",
    "revision": "a63a599613ed46107841dbc384a0e4b1"
  },
  {
    "url": "others/7.html",
    "revision": "bbaf470ec7898b7bcc55dc5b30dd3f6b"
  },
  {
    "url": "others/8.html",
    "revision": "9b206062642b6a3d3b5e351004cc0b12"
  },
  {
    "url": "others/9.html",
    "revision": "d5fe1ad76ce459b102d3ee98c4590c1d"
  },
  {
    "url": "others/guide.html",
    "revision": "0fed118c5ae865ea77080ab0d493f05d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
