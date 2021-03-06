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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "51edf264e244965e52016d2ae7e48d16"
  },
  {
    "url": "assets/css/0.styles.5898a905.css",
    "revision": "895379a1c4a5a710938deb9c337d6e69"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.5a8592ea.js",
    "revision": "42c9793b5a327065dda879d5280c1b50"
  },
  {
    "url": "assets/js/10.9e1fb0ce.js",
    "revision": "b055a023feb1ddb2add5af067b9a845c"
  },
  {
    "url": "assets/js/11.ab2ce666.js",
    "revision": "ffb7825a8c33f9534f848cf3f22e9cb0"
  },
  {
    "url": "assets/js/12.8df076ee.js",
    "revision": "a452b3817f38b62bae1778edbbf5e16f"
  },
  {
    "url": "assets/js/13.a7fdf18f.js",
    "revision": "4600eefc81a4e48c12c75559b46d867e"
  },
  {
    "url": "assets/js/14.8ae37b3e.js",
    "revision": "c1e7cb81d8848746231138eb972c82f7"
  },
  {
    "url": "assets/js/15.4cddb04d.js",
    "revision": "e22810b04ed701dc7e8aa81a89a53b1d"
  },
  {
    "url": "assets/js/16.ea30d575.js",
    "revision": "6f44cd02a58abde300317112d89d577d"
  },
  {
    "url": "assets/js/17.60a23a49.js",
    "revision": "1a7a310b1b6733e8dfeac2d591a459f3"
  },
  {
    "url": "assets/js/2.d432ce95.js",
    "revision": "a6e70d1d4f8f1776eb17ef66d378c08e"
  },
  {
    "url": "assets/js/4.cd99a441.js",
    "revision": "99caf2cd8206dea83eaef9da1668b903"
  },
  {
    "url": "assets/js/5.8fe11a68.js",
    "revision": "6dffc8181e3a9c67bf22a9ea9bc8b290"
  },
  {
    "url": "assets/js/6.580ed57c.js",
    "revision": "18beee428a6b95b28abef962ba19769d"
  },
  {
    "url": "assets/js/7.93fa3068.js",
    "revision": "5935b762f25c1acd0d5fd502ee7e1ca7"
  },
  {
    "url": "assets/js/8.04252eab.js",
    "revision": "cca495f0599885c1deedf521df559b5e"
  },
  {
    "url": "assets/js/9.924b5ed0.js",
    "revision": "14eadc5a363a4b6747b07a38a9a61b22"
  },
  {
    "url": "assets/js/app.b8d87c5e.js",
    "revision": "b25d40a450f11f942251b2328c6d482a"
  },
  {
    "url": "blogs/Efficiency/repository.html",
    "revision": "d0b9e77096d276c9bb99fbd0cacb3127"
  },
  {
    "url": "blogs/Efficiency/website.html",
    "revision": "99a60cd6d54055eb88d5acfa78f179ea"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "bf00c3643bb5b820886debcda3fd3cd7"
  },
  {
    "url": "categories/index.html",
    "revision": "33f7144c120cf0b3b6ee362e7b45d19a"
  },
  {
    "url": "categories/??????/index.html",
    "revision": "d6c37eb9666f552656aeada25cba48fd"
  },
  {
    "url": "fonts/AiDeep.otf",
    "revision": "8e59798d384f737fd23b9a2396456da1"
  },
  {
    "url": "fonts/ZhiyongWrite.ttf",
    "revision": "bbf5d756df3136022459d7d3891c1d75"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "img/avatar.jpg",
    "revision": "e5cc5dce970bcf32f388e12fb9621450"
  },
  {
    "url": "img/avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "img/blogsImg/1.jpg",
    "revision": "330db51777428236eaafe4f5ae10f9ca"
  },
  {
    "url": "img/blogsImg/10.jpg",
    "revision": "15c7fb774f38e4787b98f191fecaceda"
  },
  {
    "url": "img/blogsImg/11.jpg",
    "revision": "5d2ae4435948ff1714c9262a46b55a92"
  },
  {
    "url": "img/blogsImg/12.jpg",
    "revision": "4ff510af1ee9e43c8e00547fc9540207"
  },
  {
    "url": "img/blogsImg/13.jpg",
    "revision": "a1bfb78ba197ce2ebcacf0fd0cdd48dc"
  },
  {
    "url": "img/blogsImg/14.jpg",
    "revision": "705bc6da7a61c4aa8df8d9071c32bb3a"
  },
  {
    "url": "img/blogsImg/15.jpg",
    "revision": "122c0aeb6ae0f12b2152b7621768a99d"
  },
  {
    "url": "img/blogsImg/16.jpg",
    "revision": "6c885c568fb5e4be07a3298ae01037f3"
  },
  {
    "url": "img/blogsImg/17.jpg",
    "revision": "604265d9191fc19d9b833fabcfb9051e"
  },
  {
    "url": "img/blogsImg/18.jpg",
    "revision": "5439a30446a134ac7d91494d38033fbe"
  },
  {
    "url": "img/blogsImg/19.jpg",
    "revision": "e90e42d0062aad1bc4061e3cb8f7b884"
  },
  {
    "url": "img/blogsImg/2.jpg",
    "revision": "b24494248f92d01f26608f0bb0dce3b8"
  },
  {
    "url": "img/blogsImg/20.jpg",
    "revision": "93210d448129486ade4f93fe59ec9431"
  },
  {
    "url": "img/blogsImg/21.jpg",
    "revision": "e189b226afa0e82cdb956c914c82ed7b"
  },
  {
    "url": "img/blogsImg/22.jpg",
    "revision": "01607633331876e58aa196af9b1f80fa"
  },
  {
    "url": "img/blogsImg/23.jpg",
    "revision": "f8228f8bebdb256f5b7a8e13b0cb1553"
  },
  {
    "url": "img/blogsImg/24.jpg",
    "revision": "2786359a3723685704e938cb8c5a2407"
  },
  {
    "url": "img/blogsImg/25.jpg",
    "revision": "5b33eb8b6f2c9aebe132fbfb1e0db5ed"
  },
  {
    "url": "img/blogsImg/26.jpg",
    "revision": "655640160ca961cb99586958ef4616df"
  },
  {
    "url": "img/blogsImg/27.jpg",
    "revision": "5f84b0b0ce4b0db590104768aa78ff9b"
  },
  {
    "url": "img/blogsImg/28.jpg",
    "revision": "daafd6057dded8b44487f329c4b934b0"
  },
  {
    "url": "img/blogsImg/29.jpg",
    "revision": "141c69e582db274804df5f36ba7667ac"
  },
  {
    "url": "img/blogsImg/3.jpg",
    "revision": "e58451df89b6816e9505489d4604e457"
  },
  {
    "url": "img/blogsImg/30.jpg",
    "revision": "efe2c96182950f1e03c5877d210543a7"
  },
  {
    "url": "img/blogsImg/31.jpg",
    "revision": "b6ab230435dc177431c4e9df2da1b019"
  },
  {
    "url": "img/blogsImg/32.jpg",
    "revision": "bf4b8cb5036d0d5bdf173506b4545760"
  },
  {
    "url": "img/blogsImg/33.jpg",
    "revision": "bdb50eab4f03dcc0efca058198e2c3cf"
  },
  {
    "url": "img/blogsImg/34.jpg",
    "revision": "bc82433ede8ae2cd973a896e69327d4c"
  },
  {
    "url": "img/blogsImg/35.jpg",
    "revision": "556caa5622eec7ca4e7f1d2965d6142f"
  },
  {
    "url": "img/blogsImg/36.jpg",
    "revision": "0fdcc900bbfd0116be831b14e71455c3"
  },
  {
    "url": "img/blogsImg/37.jpg",
    "revision": "b71f92cafc823b974ed66b58c502e420"
  },
  {
    "url": "img/blogsImg/38.jpg",
    "revision": "5507df6a90f2f9cb88e468fca8e3b3f7"
  },
  {
    "url": "img/blogsImg/39.jpg",
    "revision": "71b34fe018627faf9f79ffb5d9788535"
  },
  {
    "url": "img/blogsImg/4.jpg",
    "revision": "b7eee04ac254baea0d0309f041304864"
  },
  {
    "url": "img/blogsImg/40.jpg",
    "revision": "9cdd228e57131bfc380a23b88ac0a3a2"
  },
  {
    "url": "img/blogsImg/41.jpg",
    "revision": "3b29ed1fb77df323e6cbc1ebd5e556ef"
  },
  {
    "url": "img/blogsImg/42.jpg",
    "revision": "1530b90a0af13920c684d93c4b8adb8a"
  },
  {
    "url": "img/blogsImg/43.jpg",
    "revision": "40200716149ef0f60083cb8f5135cf69"
  },
  {
    "url": "img/blogsImg/44.jpg",
    "revision": "ba6d9d8e64f89841d27b702181ab6ad5"
  },
  {
    "url": "img/blogsImg/45.jpg",
    "revision": "7b2c0697d7ab59b6b298c49dc5ed8f28"
  },
  {
    "url": "img/blogsImg/46.jpg",
    "revision": "f62ad2e7c9462bf90e7167b2f890fa17"
  },
  {
    "url": "img/blogsImg/47.jpg",
    "revision": "d80d90a3c053123dcaa46e10971a4065"
  },
  {
    "url": "img/blogsImg/48.jpg",
    "revision": "d1157e722d5593013a8d1318e2379f61"
  },
  {
    "url": "img/blogsImg/49.jpg",
    "revision": "5bf1764eed4936796714930361fea59f"
  },
  {
    "url": "img/blogsImg/5.jpg",
    "revision": "b98e850a4c89cdc8bfdc5a883196d2af"
  },
  {
    "url": "img/blogsImg/50.jpg",
    "revision": "0d4a34381ba45922bf1ace25881b35ac"
  },
  {
    "url": "img/blogsImg/51.jpg",
    "revision": "1a6208fdd8dd886c2e30e54eba43f1ed"
  },
  {
    "url": "img/blogsImg/52.jpg",
    "revision": "8d086e17c38d788b0458e7d024d2ab93"
  },
  {
    "url": "img/blogsImg/53.jpg",
    "revision": "0bdd5311734961c970057fcf76cd06f6"
  },
  {
    "url": "img/blogsImg/54.jpg",
    "revision": "b149e33413c48e39f274985ead33c472"
  },
  {
    "url": "img/blogsImg/55.jpg",
    "revision": "a94c1557d1e70ef8901c6cd367559e42"
  },
  {
    "url": "img/blogsImg/56.jpg",
    "revision": "158e3bc1d982b008cb88d42d4a6b9dac"
  },
  {
    "url": "img/blogsImg/57.jpg",
    "revision": "fc9656c471f4c436867ec7a3eca9855e"
  },
  {
    "url": "img/blogsImg/58.jpg",
    "revision": "f5442efa6e9fa025b1c9abe3ebca4e22"
  },
  {
    "url": "img/blogsImg/59.jpg",
    "revision": "7b75df1d7ac29a95c4493b933282d5f8"
  },
  {
    "url": "img/blogsImg/6.jpg",
    "revision": "5c906bcae7584980b9884f1a00544d02"
  },
  {
    "url": "img/blogsImg/60.jpg",
    "revision": "141eb38af5cd0172923176707142a948"
  },
  {
    "url": "img/blogsImg/61.jpg",
    "revision": "44af78ee9b3068cebfedf2e663d32f82"
  },
  {
    "url": "img/blogsImg/62.jpg",
    "revision": "71d79982665f324bcfac3e5e008eac3d"
  },
  {
    "url": "img/blogsImg/63.jpg",
    "revision": "4912b2e2cf726ff48650ded1fc912fc8"
  },
  {
    "url": "img/blogsImg/64.jpg",
    "revision": "924eb2bf021754a58f4d3e234de639b6"
  },
  {
    "url": "img/blogsImg/65.jpg",
    "revision": "34a7faa79f63e25f27b27f0639905c2e"
  },
  {
    "url": "img/blogsImg/7.jpg",
    "revision": "7597f05026e81b35c8433b3bc4cc8a91"
  },
  {
    "url": "img/blogsImg/8.jpg",
    "revision": "8fd9e9cac388cdea6c381e981e45b0e1"
  },
  {
    "url": "img/blogsImg/9.jpg",
    "revision": "4a3e399785fa7edbfaa15c40f7b916f0"
  },
  {
    "url": "img/cover/1.jpg",
    "revision": "7ff3390881bd85621a8eb2236c5cc3f3"
  },
  {
    "url": "img/cover/2.jpg",
    "revision": "5f663c42d10fe6c735a40b9e8bb461f0"
  },
  {
    "url": "img/cover/3.jpg",
    "revision": "ed674a3f21ac85dd67bd7ca8b67c6290"
  },
  {
    "url": "img/cover/4.jpg",
    "revision": "e55708df2c257135f18ca0a1e5e1edc2"
  },
  {
    "url": "img/cover/7.jpg",
    "revision": "73b47825f0c5357971225e65da375c4c"
  },
  {
    "url": "img/cover/8.jpg",
    "revision": "1e1372216b7c2d1477676fb3af91553f"
  },
  {
    "url": "img/cover/9.jpg",
    "revision": "bd73e82ed366a538c23c048f85b73e31"
  },
  {
    "url": "img/hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "img/logo.png",
    "revision": "d62714d89288558b052ad7bc025a7135"
  },
  {
    "url": "img/logo.svg",
    "revision": "6746bd95e38b5b6aacaf7bc6173f6c28"
  },
  {
    "url": "index.html",
    "revision": "eb3b51a17c4345d09422f2dc5a36e8da"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "c8209619f9a8260aee66ce7691c9f2ad"
  },
  {
    "url": "live2d/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "tag/index.html",
    "revision": "6c4d75b9b348aad18cf67aa8be57f72e"
  },
  {
    "url": "tag/???/index.html",
    "revision": "8662225ca0deba73764b8b0a60650dde"
  },
  {
    "url": "tag/??????/index.html",
    "revision": "f7d315e3ac12a93a2c5abffbe9022e55"
  },
  {
    "url": "timeline/index.html",
    "revision": "6ed8c72c519504edf559f9d77630ca4f"
  }
].concat(self.__precacheManifest || []);
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
