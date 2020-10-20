export default class Map {
  constructor(mapId, scriptSrc) {
    this._mapId = mapId;
    this._scriptSrc = scriptSrc;

    this._loadScript = this._loadScript.bind(this);
    this._initMap = this._initMap.bind(this);
  }

  _initMap(ymaps) {
    const map = new ymaps.Map(this._mapId, {
      center: [55.686980, 37.529654],
      zoom: 16,
      controls: ['zoomControl']
    });

    const placemark = new ymaps.Placemark(
      [55.686980, 37.529654]
    );

    map.behaviors.disable('scrollZoom');
    map.geoObjects.add(placemark);

    return map;
  }

  _loadScript() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');

      script.onload = resolve;
      script.onerror = reject;
      script.src = this._scriptSrc;

      document.body.appendChild(script);
    })
      .then(() => {
        /*eslint-disable*/
        ymaps.ready(this._initMap);
        /*eslint-enable*/
      })
    ;
  }

  init() {
    this._loadScript();
  }
}
