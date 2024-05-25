'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a2ec593f053627ef26cd9d2faec80ac3",
"index.html": "a37e9443ddbaa9dfb922240a239bb56f",
"/": "a37e9443ddbaa9dfb922240a239bb56f",
"main.dart.js": "bdeaaec1e45296dfb1ab3323c860fce4",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1593bdc8d3a51fd655ffe457eadebb75",
"assets/AssetManifest.json": "56b2ccee48a6c82328171665152fa21c",
"assets/NOTICES": "c1ac2cc5d7607f7ef35cbc81370c0a15",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "8cc58ef3617a4714abc139b109c81ec4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "53367e1640ba9416ba2e1426bdc2d4c7",
"assets/fonts/MaterialIcons-Regular.otf": "c06f77671a674ae8b46bafadcf2f5c53",
"assets/Assets/Bot.png": "066fa0f7ca575aa06ce83db7fc92f736",
"assets/Assets/Characters/Oars.png": "ada664502077478323dd5dab5fab7fc6",
"assets/Assets/Characters/Rayleigh.png": "1794ebd36d2e2a7e554f891541568229",
"assets/Assets/Characters/Whitebeard.png": "c0412b30b18c27ad80dc5b28b9854214",
"assets/Assets/Characters/Kuro.png": "0d393a0d55f02a432d1692d4d4ac5e2a",
"assets/Assets/Characters/Dorry.png": "80f3e96a9fdb6aca6166211c4afe71da",
"assets/Assets/Characters/Ivankov.png": "4ca4d0f90c435e9f12dbebbf0f91e4ef",
"assets/Assets/Characters/Kalifa.png": "e23c1c0392cf6a96b37846b098916499",
"assets/Assets/Characters/Wapol.png": "974185c9396b05f9e23849d770aa5212",
"assets/Assets/Characters/Robin_1.png": "986aaa99acf7671df8065270602044f2",
"assets/Assets/Characters/Gecko%2520Moria.png": "6efc099896e7cb17c4372747cbbc437b",
"assets/Assets/Characters/Arlong.png": "2124c2a6abec22ab35bbbe11640f42ab",
"assets/Assets/Characters/Alvida_1.png": "84fa5dc552e50a4b2c8cd603559303b8",
"assets/Assets/Characters/Luffy%2520Gear%25203.png": "ab31153b63d6f76e6e123996c2f6e524",
"assets/Assets/Characters/Chopper_2.png": "0b2dbb23a9e47d2cb430b78c3db7454e",
"assets/Assets/Characters/Luffy%2520Gear%25202.png": "2e0217b263209e7455d01f75183d2fe7",
"assets/Assets/Characters/Alvida_2.png": "ecb761263ffc637ab552a45125cc0aec",
"assets/Assets/Characters/Dragon.png": "ea56f339175dbffd28fdd76ca73f20c1",
"assets/Assets/Characters/Chopper_1.png": "021e3bfeca9bd197f2e138b96020bb02",
"assets/Assets/Characters/Luffy_1.png": "2c73d806ea37750ac43e73c3fa9be6fc",
"assets/Assets/Characters/Blueno.png": "9595d5615ec05f3b1087e1136ccb279c",
"assets/Assets/Characters/Ace.png": "8ba08a5023b6b1d79e71e3d061794fb7",
"assets/Assets/Characters/Absalom.png": "2b6b4e96b097abcbf3d29de453a60768",
"assets/Assets/Characters/Kumadori.png": "c44780650586001e64d32664e08d5b37",
"assets/Assets/Characters/Buggy.png": "3bf4d5aef49517e3884e173585371f6e",
"assets/Assets/Characters/Kaku_1.png": "d7d1d2d1426ddeaee91c76f87ea5c244",
"assets/Assets/Characters/Nightmare%2520Luffy.png": "d825fab61c4bbc05a35ac955172cd93a",
"assets/Assets/Characters/Garp.png": "61b0bf702f68995c518b8c2a24d64bcb",
"assets/Assets/Characters/Nami_1.png": "abccded428e6fc6e342f2232f7737c52",
"assets/Assets/Characters/Broggy.png": "17489125a351fa2cffe08649f09ee891",
"assets/Assets/Characters/Aokiji.png": "9a96cba7b75bca83bb765f978fed5947",
"assets/Assets/Characters/Brook_1.png": "33a972ef5d56f0d82f23f0c44b888bd6",
"assets/Assets/Characters/Wyper.png": "dcf19a9349d6126a8c15abd6ff28dbeb",
"assets/Assets/Characters/Little%2520Oars%2520Jr..png": "b0f769ff52aaa937f4a2ed08b723fdd3",
"assets/Assets/Characters/Kuma.png": "b5d09e6324fa7d2d15b01a852601f046",
"assets/Assets/Characters/Bon%2520Clay%2520(Mr%25202).png": "a848277f8d7260aa8f9709c177d07bca",
"assets/Assets/Characters/Shanks.png": "3cc34763934269bdb22ed98484198ed7",
"assets/Assets/Characters/Sanji_1.png": "9988517316cd42efa074f1a5bd52f998",
"assets/Assets/Characters/Marco.png": "5be06f61fc92d2c03a0e3d8efec7e690",
"assets/Assets/Characters/Jozu.png": "cad8dc03d93c73da76d33aeadc13ab2c",
"assets/Assets/Characters/Mihawk.png": "48f3fea992d907b5fff4e7df8a73c1a4",
"assets/Assets/Characters/Blackbeard_1.png": "47aefa2d60fcb574844359d0cf29e4eb",
"assets/Assets/Characters/Galdino%2520(Mr%25203).png": "4c59616c516e22b72d2801cff652e5d5",
"assets/Assets/Characters/Zoro_1.png": "634a814548f0b93005fb25cbe0bc9e59",
"assets/Assets/Characters/Fukurou.png": "f2856b30b43c605bff50bbbc9f7093bf",
"assets/Assets/Characters/Perona.png": "1831361ca97ee6b3a5acc8510e451007",
"assets/Assets/Characters/Akinu.png": "156a3c46171a0cca5e9e7ec643815dd9",
"assets/Assets/Characters/Smoker.png": "bc1f30387a69bbd0e7c39b83b82d5cb4",
"assets/Assets/Characters/Jinbe.png": "8d0abe194613f26782bcf77e72353e55",
"assets/Assets/Characters/Usopp_1.png": "abbda8ba4b077d2bb9ff2b8fb25852a7",
"assets/Assets/Characters/Paulie.png": "36f1bc077c7d21d48449c4056bdf32d4",
"assets/Assets/Characters/Jabra.png": "bf991c9558f43853704f28690969037e",
"assets/Assets/Characters/Koby_2.png": "ea357bd7ccaabff5e4ac933996274a68",
"assets/Assets/Characters/Enel.png": "a37b9a3d7dd99fcacf3dab3b1a9ad7f4",
"assets/Assets/Characters/Franky_1.png": "b8d3cf995a01dd09d862de732b35ea1f",
"assets/Assets/Characters/Boa%2520Hancock.png": "79a876db616ca03602bc7c14c59eea4f",
"assets/Assets/Characters/Kizaru.png": "e11206c429b7e518227f7032f1b58e0a",
"assets/Assets/Characters/DazBonez%2520(Mr%25201).png": "6ad69f0afc2c1e867ebf3d9adbada0e6",
"assets/Assets/Characters/Koby_1.png": "0b734998a83876462da44240dc8a7b95",
"assets/Assets/Characters/Rob%2520Lucci_1.png": "3655c4edafdf793dc8476680efefce81",
"assets/Assets/Characters/Benn%2520Beckman.png": "affe8d909447a60fd1b9ff7b92233b35",
"assets/Assets/Characters/Doflamingo.png": "de558cf6ac96a1700eae68b9a838c828",
"assets/Assets/Characters/Crocodile.png": "aba589bdfcff33bedbd7737c9285f63f",
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
