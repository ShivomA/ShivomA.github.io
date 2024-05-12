'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a2ec593f053627ef26cd9d2faec80ac3",
"index.html": "58eaf334582797c397f7347dc4f8be25",
"/": "58eaf334582797c397f7347dc4f8be25",
"main.dart.js": "455eb6446495113161012372395fedfd",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1593bdc8d3a51fd655ffe457eadebb75",
"assets/AssetManifest.json": "df0efb90847f3f565bbab519a79a54fb",
"assets/NOTICES": "c1ac2cc5d7607f7ef35cbc81370c0a15",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b46d256f62b89c32402683372609cc18",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4935aef178676dafcef0a01eff579fdf",
"assets/fonts/MaterialIcons-Regular.otf": "68ff62d68622ef21695019bc7f0500e4",
"assets/Assets/Bot.png": "066fa0f7ca575aa06ce83db7fc92f736",
"assets/Assets/Characters/Rayleigh.png": "1794ebd36d2e2a7e554f891541568229",
"assets/Assets/Characters/Whitebeard.png": "44004b3552fba993f78f32e9f0f751d1",
"assets/Assets/Characters/Kuro.png": "0d393a0d55f02a432d1692d4d4ac5e2a",
"assets/Assets/Characters/Dorry.png": "80f3e96a9fdb6aca6166211c4afe71da",
"assets/Assets/Characters/Kalifa.png": "e23c1c0392cf6a96b37846b098916499",
"assets/Assets/Characters/Wapol.png": "974185c9396b05f9e23849d770aa5212",
"assets/Assets/Characters/Robin_1.png": "986aaa99acf7671df8065270602044f2",
"assets/Assets/Characters/Arlong.png": "2124c2a6abec22ab35bbbe11640f42ab",
"assets/Assets/Characters/Koza.png": "35d12853df22416e27fb2dbfd85c1380",
"assets/Assets/Characters/Ohm.png": "3cb8a6003202fad7475dc1b66f0b96fb",
"assets/Assets/Characters/Shura.png": "5199c642a1dbeaabba850ce85125ec74",
"assets/Assets/Characters/Gan%2520Fall.png": "919ec3023aa090f0cbff9043e95f950b",
"assets/Assets/Characters/Alvida_1.png": "84fa5dc552e50a4b2c8cd603559303b8",
"assets/Assets/Characters/Chopper_3.png": "65f6de6c0ea0585cec0db722b92f4d5e",
"assets/Assets/Characters/Chopper_2.png": "0b2dbb23a9e47d2cb430b78c3db7454e",
"assets/Assets/Characters/Pell.png": "994ae7a675fd40c8b6001866021c4845",
"assets/Assets/Characters/Dragon.png": "ea56f339175dbffd28fdd76ca73f20c1",
"assets/Assets/Characters/Chopper_1.png": "021e3bfeca9bd197f2e138b96020bb02",
"assets/Assets/Characters/Gedatsu.png": "91ae7f1ad7bf10d5c37c31d8e19766c7",
"assets/Assets/Characters/Luffy_1.png": "2c73d806ea37750ac43e73c3fa9be6fc",
"assets/Assets/Characters/Blueno.png": "9595d5615ec05f3b1087e1136ccb279c",
"assets/Assets/Characters/Ace.png": "8ba08a5023b6b1d79e71e3d061794fb7",
"assets/Assets/Characters/Kaku_2.png": "a134b2f71b6297bd1b55bcaf856b895f",
"assets/Assets/Characters/Luffy_4.png": "e8711cf4541a35d8973931c4910a5a07",
"assets/Assets/Characters/Chaka.png": "c004f3c7b4d206af8d802e0a0a3a0053",
"assets/Assets/Characters/Kumadori.png": "c44780650586001e64d32664e08d5b37",
"assets/Assets/Characters/Buggy.png": "3bf4d5aef49517e3884e173585371f6e",
"assets/Assets/Characters/Kaku_1.png": "d7d1d2d1426ddeaee91c76f87ea5c244",
"assets/Assets/Characters/Garp.png": "61b0bf702f68995c518b8c2a24d64bcb",
"assets/Assets/Characters/Foxy.png": "8d69bb91442b85e739bfc33db12ec2c1",
"assets/Assets/Characters/Blackbeard.png": "ebdd0035ca1b3cf2e0327c73b98b95b7",
"assets/Assets/Characters/Hina.png": "ef48ea8bc9fa7868c8f1d5ea280c3982",
"assets/Assets/Characters/Nami_1.png": "abccded428e6fc6e342f2232f7737c52",
"assets/Assets/Characters/Broggy.png": "17489125a351fa2cffe08649f09ee891",
"assets/Assets/Characters/Aokiji.png": "9a96cba7b75bca83bb765f978fed5947",
"assets/Assets/Characters/Satori.png": "272717ad8239fce5b25727a9ea6030ba",
"assets/Assets/Characters/Wyper.png": "dcf19a9349d6126a8c15abd6ff28dbeb",
"assets/Assets/Characters/Dalton.png": "b560e1d39dff2f355ceda2ec6b2a2ddb",
"assets/Assets/Characters/Kuma.png": "b5d09e6324fa7d2d15b01a852601f046",
"assets/Assets/Characters/Bon%2520Clay%2520(Mr%25202).png": "a848277f8d7260aa8f9709c177d07bca",
"assets/Assets/Characters/Shanks.png": "3cc34763934269bdb22ed98484198ed7",
"assets/Assets/Characters/Sanji_1.png": "9988517316cd42efa074f1a5bd52f998",
"assets/Assets/Characters/Marco.png": "5be06f61fc92d2c03a0e3d8efec7e690",
"assets/Assets/Characters/Jozu.png": "cad8dc03d93c73da76d33aeadc13ab2c",
"assets/Assets/Characters/Mihawk.png": "48f3fea992d907b5fff4e7df8a73c1a4",
"assets/Assets/Characters/Galdino%2520(Mr%25203).png": "4c59616c516e22b72d2801cff652e5d5",
"assets/Assets/Characters/Zoro_1.png": "634a814548f0b93005fb25cbe0bc9e59",
"assets/Assets/Characters/Morgan.png": "0d529e763fc32c44eab31a1090dc3f04",
"assets/Assets/Characters/Fukurou.png": "f2856b30b43c605bff50bbbc9f7093bf",
"assets/Assets/Characters/Akinu.png": "156a3c46171a0cca5e9e7ec643815dd9",
"assets/Assets/Characters/Smoker.png": "bc1f30387a69bbd0e7c39b83b82d5cb4",
"assets/Assets/Characters/Usopp_1.png": "abbda8ba4b077d2bb9ff2b8fb25852a7",
"assets/Assets/Characters/Paulie.png": "36f1bc077c7d21d48449c4056bdf32d4",
"assets/Assets/Characters/Jabra.png": "bf991c9558f43853704f28690969037e",
"assets/Assets/Characters/Rob%2520Lucci_2.png": "78292c2f3361d4126aae2d81a8bb971e",
"assets/Assets/Characters/Enel.png": "a37b9a3d7dd99fcacf3dab3b1a9ad7f4",
"assets/Assets/Characters/Daz%2520Bonez%2520(Mr%25201).png": "6ad69f0afc2c1e867ebf3d9adbada0e6",
"assets/Assets/Characters/Franky_1.png": "b8d3cf995a01dd09d862de732b35ea1f",
"assets/Assets/Characters/Koby_1.png": "0b734998a83876462da44240dc8a7b95",
"assets/Assets/Characters/Rob%2520Lucci_1.png": "3655c4edafdf793dc8476680efefce81",
"assets/Assets/Characters/Benn%2520Beckman.png": "affe8d909447a60fd1b9ff7b92233b35",
"assets/Assets/Characters/Franky_2.png": "9a6670c0c69a63a238b7dfd5ba34d3ff",
"assets/Assets/Characters/Doflamingo.png": "4f1c94ee23c20222f96bef0fe53458ed",
"assets/Assets/Characters/Crocodile.png": "005ffc681a5a06395ca0bc6db928f3f7",
"assets/Assets/Characters/Jesus%2520Burgess.png": "493023e5e446592c5e75ee87c7824e5d",
"assets/Assets/BotWhite.png": "9063b0874f8ee623801ad3da263f8498",
"assets/Assets/CB.png": "562fbab204e6e321de22dd5eb31f263c",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
