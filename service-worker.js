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
    "revision": "d490d7918aa00f1e5b27193fa6036f1d"
  },
  {
    "url": "advanced/1.html",
    "revision": "bc09b833e879b8dad897da6b6e14d2bf"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d3a313fb.js",
    "revision": "432f388114f29e0d17de3388ad3180be"
  },
  {
    "url": "assets/js/11.c0d21728.js",
    "revision": "35926402873d2df0a61f929392ebbfa6"
  },
  {
    "url": "assets/js/12.486a46e9.js",
    "revision": "f3a7a569bc2126765ca1bfeba1c3715a"
  },
  {
    "url": "assets/js/13.a399f6af.js",
    "revision": "a722a7175091f2b9a899d8604a5f74a1"
  },
  {
    "url": "assets/js/14.12a2ac62.js",
    "revision": "2566ed240be088460f90d29d3c9f911e"
  },
  {
    "url": "assets/js/15.94482eb6.js",
    "revision": "2b47217fa331f4b24c6a1ce054a65f96"
  },
  {
    "url": "assets/js/16.1f17a230.js",
    "revision": "c7e8e08fb3117045304bef72271cac9b"
  },
  {
    "url": "assets/js/17.76e11ea6.js",
    "revision": "81da8fd62f99b1598150455f62cbebf0"
  },
  {
    "url": "assets/js/18.14dc5a81.js",
    "revision": "31de280cc6efdfc7ba7f8bb7ca29d711"
  },
  {
    "url": "assets/js/19.d4088ef3.js",
    "revision": "5d3aa1796f754f939430cccc31b37bbf"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/20.df1f2682.js",
    "revision": "7e1dcd6af24ac06d2d04d0d0bf611fc1"
  },
  {
    "url": "assets/js/21.c17d20d4.js",
    "revision": "f484f36c110d1f5e684db1d717f6e55a"
  },
  {
    "url": "assets/js/22.e1ccbe00.js",
    "revision": "9323b2849f15ad7a67339d005f08b6e0"
  },
  {
    "url": "assets/js/23.54055e55.js",
    "revision": "e2190b08d20363f79672a25a9298a0cb"
  },
  {
    "url": "assets/js/24.03567b84.js",
    "revision": "79c02754779e0b28cf5d3feaa72c8758"
  },
  {
    "url": "assets/js/25.10f66511.js",
    "revision": "44a65d6093a112994714385e639441b5"
  },
  {
    "url": "assets/js/26.7b6df23f.js",
    "revision": "eaf5cf2ffc5f902597136cb0d7aad706"
  },
  {
    "url": "assets/js/27.4acb0c4d.js",
    "revision": "79eeb2324af365184c47781db26c9b02"
  },
  {
    "url": "assets/js/28.62ad391c.js",
    "revision": "f768f04275a6132e7e19472d8fbba848"
  },
  {
    "url": "assets/js/3.3ede1f01.js",
    "revision": "9b7caca6b3a043c92a0bb63cc1c94984"
  },
  {
    "url": "assets/js/4.1bde6b32.js",
    "revision": "1fbbee302a84e816658f5d0fcb214341"
  },
  {
    "url": "assets/js/5.dfee4534.js",
    "revision": "a347dd744a1f894b7655a3ba18054a9f"
  },
  {
    "url": "assets/js/6.8bf9bef2.js",
    "revision": "f19ce836d92ad9fd5e3fe103c36f23a9"
  },
  {
    "url": "assets/js/7.9eaa151d.js",
    "revision": "eaa6bfeb9f8d071dcae648bfc2460142"
  },
  {
    "url": "assets/js/8.833fd9f2.js",
    "revision": "b45450477279bd317c8a010d15f5d841"
  },
  {
    "url": "assets/js/9.85f6f5e8.js",
    "revision": "7694ba7cb5098ac54438c05a9c7bb652"
  },
  {
    "url": "assets/js/app.a30d06d4.js",
    "revision": "2683633ce72371ceca4fa69b78471fea"
  },
  {
    "url": "basic/1.html",
    "revision": "c09c205aa8215c83f47f2fa458a6230a"
  },
  {
    "url": "basic/10.html",
    "revision": "1621cb555cd9196bcc4dd07ce94c864e"
  },
  {
    "url": "basic/11.html",
    "revision": "c60de2fc48ce4b9a452344a89e52007b"
  },
  {
    "url": "basic/2.html",
    "revision": "19ad137fdc68f118e5ca1e46ec7b49cd"
  },
  {
    "url": "basic/3.html",
    "revision": "89c7d7debfab2bf3cf61a179836ee5eb"
  },
  {
    "url": "basic/4.html",
    "revision": "915c85f6ed94a6b91ca5e8f0d7873ae3"
  },
  {
    "url": "basic/5.html",
    "revision": "3197a2714adf1c27b11ec657aa4b9936"
  },
  {
    "url": "basic/6.html",
    "revision": "6d7fd907949bfc9b67fb040ce74f4f04"
  },
  {
    "url": "basic/7.html",
    "revision": "71b7aefb39b2fc64c2540ee8f93458f7"
  },
  {
    "url": "basic/8.html",
    "revision": "037af145a5d814fd74d95fd9dcc6903f"
  },
  {
    "url": "basic/9.html",
    "revision": "160c21d0a8fffefb170da0ffadc2015b"
  },
  {
    "url": "engineering/规范化/commit.html",
    "revision": "7dea1de6ce8d9cd5cadf3cc56db4d1f1"
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
    "revision": "7fb5efc4d559dd776355adcf82876ccf"
  },
  {
    "url": "interview/1.html",
    "revision": "65a1075f5a6cdb823c5cb058568a6591"
  },
  {
    "url": "interview/2.html",
    "revision": "9bbbdb28c9f39ba857fb597a414255c2"
  },
  {
    "url": "interview/CSS.html",
    "revision": "3b14fe62cb46716fde984887efeb778f"
  },
  {
    "url": "interview/HTML.html",
    "revision": "8c6832cf456839594b2c0ee35fecea04"
  },
  {
    "url": "others/1.html",
    "revision": "c6d26a65d44ac9a59b64d84841939a95"
  },
  {
    "url": "others/2.html",
    "revision": "54d9df6ebdbf873fd150b8779faee341"
  },
  {
    "url": "others/3.html",
    "revision": "520eebe3b564fdaff599f481309f3b53"
  },
  {
    "url": "others/4.html",
    "revision": "2292ef2e17c5571ddc6fdf0c93f210f3"
  },
  {
    "url": "others/5.html",
    "revision": "931cb0681c46e905771e5acfde9cf5ab"
  },
  {
    "url": "others/6.html",
    "revision": "001bb772746aea960091020907a9c2eb"
  },
  {
    "url": "others/guide.html",
    "revision": "d97c5d8864810994965c128c571c1a99"
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
