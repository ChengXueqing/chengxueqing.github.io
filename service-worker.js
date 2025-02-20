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
    "revision": "077fe678f2558e7c482de015c14c65cf"
  },
  {
    "url": "advanced/1.html",
    "revision": "6a56ac7664990d844836ae58b0d8e633"
  },
  {
    "url": "advanced/2.html",
    "revision": "b459dd10e3100dd3acfcdf8dc89e79dd"
  },
  {
    "url": "assets/css/0.styles.c52a38d2.css",
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
    "url": "assets/js/10.257244fa.js",
    "revision": "2ca52fbff9f68db246f2c587187eeb65"
  },
  {
    "url": "assets/js/11.0c2368d3.js",
    "revision": "183cc9dd54adc09fadda91d726f34ada"
  },
  {
    "url": "assets/js/12.60c53885.js",
    "revision": "b8d07d4e6a9252b8fe330bf11b3235b7"
  },
  {
    "url": "assets/js/13.079dfe11.js",
    "revision": "0801897ba0c46a9ad1cad34eb2954af8"
  },
  {
    "url": "assets/js/14.fe1031c0.js",
    "revision": "967fb83d49e40b3b042e0f18e1e66131"
  },
  {
    "url": "assets/js/15.d4f07e1d.js",
    "revision": "0b4ec54a3da0df38298176dc65d617ab"
  },
  {
    "url": "assets/js/16.5c47ba0f.js",
    "revision": "5a615c061cc9ca38238ab698376b6ca4"
  },
  {
    "url": "assets/js/17.d2f1cafb.js",
    "revision": "1558d07c4f2ea09b9316596b7d01b9d7"
  },
  {
    "url": "assets/js/18.78156018.js",
    "revision": "7e1f5a4018c20cc7a15dc7f528049977"
  },
  {
    "url": "assets/js/19.a4fd46b3.js",
    "revision": "93199aa8dcd38e7e86447dcc4cb97eac"
  },
  {
    "url": "assets/js/2.64682e78.js",
    "revision": "e4babb22657b6853fc4ab01ad9f40098"
  },
  {
    "url": "assets/js/20.b809451b.js",
    "revision": "2e0139c7dbe4c17ddbb7aebcc13c8085"
  },
  {
    "url": "assets/js/21.f4ec3b15.js",
    "revision": "af253e59291dce61b30768decf35bb81"
  },
  {
    "url": "assets/js/22.0b8aefee.js",
    "revision": "a0f671910d4e0929aeaa1ae37bd9ec79"
  },
  {
    "url": "assets/js/23.96642a08.js",
    "revision": "00c7f54a1669d3be9ff56bdfec8dc2e5"
  },
  {
    "url": "assets/js/24.f6e522c2.js",
    "revision": "a1aee55b96b5e5af0ae741b89e413a0a"
  },
  {
    "url": "assets/js/25.44e5383a.js",
    "revision": "3e7b8379944107d4775b8e7c94426109"
  },
  {
    "url": "assets/js/26.8cda8684.js",
    "revision": "93972a5d233143af97d17d4a212ab543"
  },
  {
    "url": "assets/js/27.d6ffa96c.js",
    "revision": "afcd586fc4fd163618d9a5e71075f353"
  },
  {
    "url": "assets/js/28.4bd2dc74.js",
    "revision": "e7b0b04b2b65c122bc09d4c8fa101c3c"
  },
  {
    "url": "assets/js/29.9ec60147.js",
    "revision": "f799a2a7206383ca65ceb19b6b321d0a"
  },
  {
    "url": "assets/js/3.a530e436.js",
    "revision": "efe0d0bb0578446af63c126ab6863b7f"
  },
  {
    "url": "assets/js/30.df449c7a.js",
    "revision": "920b056cbf9e44fb63e7b62619116741"
  },
  {
    "url": "assets/js/31.00dab5c3.js",
    "revision": "7d4e82c3be02eaf8d21da0513635bf7b"
  },
  {
    "url": "assets/js/32.86a46abd.js",
    "revision": "744b76ebbe9d230ba20f12001a24e19a"
  },
  {
    "url": "assets/js/33.711e433d.js",
    "revision": "261f0a787324774d699f7c2e5d768b8c"
  },
  {
    "url": "assets/js/34.00841d6b.js",
    "revision": "5e662f5a90a37994cff3bfe0f1cc5505"
  },
  {
    "url": "assets/js/35.bc83caa1.js",
    "revision": "5ae95638e8f3d57f1f38e592a0955a2d"
  },
  {
    "url": "assets/js/4.f37f1a26.js",
    "revision": "2162be27df6cfa23c415385a8a31ca53"
  },
  {
    "url": "assets/js/5.b88d6e3b.js",
    "revision": "3992b8f87c4095ee99242f4af67bc75c"
  },
  {
    "url": "assets/js/6.993df0d8.js",
    "revision": "1bd5e1835f11361ad6424b4f8ee657ba"
  },
  {
    "url": "assets/js/7.5ad16bef.js",
    "revision": "de934feb579d4771c08a72b7be0a5d2e"
  },
  {
    "url": "assets/js/8.38d35c49.js",
    "revision": "f2ea93d1fd2322b89567e86315b20bce"
  },
  {
    "url": "assets/js/9.4d9e3902.js",
    "revision": "2b0e1038a2ba433ee48d63a7e5ca4580"
  },
  {
    "url": "assets/js/app.34e19cc3.js",
    "revision": "3f550b3ecd0fce1b535e63e5c1143385"
  },
  {
    "url": "basic/1.html",
    "revision": "027e0725f47b0309c37a84f943ed9aaa"
  },
  {
    "url": "basic/10.html",
    "revision": "f6b69acae8636d43e72b179b2c0b7065"
  },
  {
    "url": "basic/11.html",
    "revision": "14dbe1206f22a698983596d3c0ce7ea4"
  },
  {
    "url": "basic/12.html",
    "revision": "8d354abaab0b100a2ba046a2d29dad82"
  },
  {
    "url": "basic/13.html",
    "revision": "751fe759a73f38dcc2d92de7d2364e1d"
  },
  {
    "url": "basic/2.html",
    "revision": "e78354d9c31ae12fd3da87bdffdbd36f"
  },
  {
    "url": "basic/3.html",
    "revision": "2f793300bcb5dc3cfe8360254bff81ea"
  },
  {
    "url": "basic/4.html",
    "revision": "7c2b05945e0017f5f70f7b1a54e42090"
  },
  {
    "url": "basic/5.html",
    "revision": "3bfc852e69512505c4ef21da873a76c7"
  },
  {
    "url": "basic/6.html",
    "revision": "1abc8e1d6555afe5cb70e2ba6cef2528"
  },
  {
    "url": "basic/7.html",
    "revision": "fbba6288fae7666d5f70edb5a6c2503a"
  },
  {
    "url": "basic/8.html",
    "revision": "e7b6974041f78956c73844dd9a0c89ea"
  },
  {
    "url": "basic/9.html",
    "revision": "4d7e556c753249f3eb688446ceacd0a5"
  },
  {
    "url": "engineering/规范化/commit.html",
    "revision": "f915cf292565a5c403c65529333c57cf"
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
    "url": "images/pink.jpg",
    "revision": "8dbee8cee20194743f2307bbfc5973bc"
  },
  {
    "url": "index.html",
    "revision": "71ddf1a95a6612171936dd78ed76b164"
  },
  {
    "url": "interview/1.html",
    "revision": "3ee87679a90c055c5bc7c94d250dae66"
  },
  {
    "url": "interview/2.html",
    "revision": "37217fbeb4801489e16f533745becfa6"
  },
  {
    "url": "interview/CSS.html",
    "revision": "833039391878f523bd3c78e701254d7f"
  },
  {
    "url": "interview/HTML.html",
    "revision": "f28ba291e339224c76d1c14cdd4c97ff"
  },
  {
    "url": "others/1.html",
    "revision": "d338f600c8b9f6d253c458d463618aa1"
  },
  {
    "url": "others/2.html",
    "revision": "6a1945a4551c996bba16dd79f39d245d"
  },
  {
    "url": "others/3.html",
    "revision": "7c544896bbf83a045b90c4ad2b5affae"
  },
  {
    "url": "others/4.html",
    "revision": "74aa05c8b799721f1970e948c354f27c"
  },
  {
    "url": "others/5.html",
    "revision": "640c6882dd55115f2bed6eff466bdec6"
  },
  {
    "url": "others/6.html",
    "revision": "bf0accbf1d5f0f0854eaaef5464530fb"
  },
  {
    "url": "others/7.html",
    "revision": "68bc0e31c66bfb65cdda2516ac387c41"
  },
  {
    "url": "others/8.html",
    "revision": "1d3a005e1369bb48260a468fdb78dc0d"
  },
  {
    "url": "others/guide.html",
    "revision": "3bf39221473531104e67dd0723b93a57"
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
