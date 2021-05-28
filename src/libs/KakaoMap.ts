interface initKakoMapArgs {
  id: string;
  options: any;
}

const { kakao }: any = window; // resolve tsc and eslint error

export class KakaoMap {
  map: any;

  geocoder: any;

  markers: Array<any>;

  constructor({ id, options }: initKakoMapArgs) {
    const mapDiv = document.getElementById(id) || "null";
    this.map = new kakao.maps.Map(mapDiv, options);
    this.geocoder = new kakao.maps.services.Geocoder();
    this.markers = [];

    kakao.maps.event.addListener(this.map, "click", (e: any) => {
      const latlng = e.latLng;
      console.log(latlng.getLat(), latlng.getLng());
    });
  }

  searchAddress(address: string) {
    this.geocoder.addressSearch(address, (result: any, status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        this.map.setCenter(coords);
        console.log(coords);
        return result;
      }
      return null;
    });
    return null;
  }

  moveLocation({ lat, lng }: Coords) {
    const coords = new kakao.maps.LatLng(lat, lng);
    this.map.setCenter(coords);
    return coords;
  }

  makeMarkers(stores: Array<Store>) {
    stores.forEach((store: Store) => {
      if (store.coords) {
        const [lat, lng] = store.coords;
        const markerPosition = new kakao.maps.LatLng(lat, lng);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(this.map);
        this.markers.push(marker);
      }
    });
  }

  removeMarkers() {
    if (this.markers.length > 0) {
      this.markers.forEach((marker: any) => {
        marker.setMap(null);
      });
    }
    this.markers = [];
  }
}

const kakaoMaps = {
  KakaoMap,
};

export default kakaoMaps;
