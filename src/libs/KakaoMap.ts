interface initKakoMapArgs {
  id: string;
  options: any;
  setCards: React.Dispatch<React.SetStateAction<Store[]>>;
}

const { kakao }: any = window; // resolve tsc and eslint error

interface Marker {
  store: Store;
  marker: any;
}

export class KakaoMap {
  map: any;

  geocoder: any;

  markers: Array<Marker>;

  cardShown: boolean;

  clickMarker: (stores: Store[]) => void;

  constructor({ id, options, setCards }: initKakoMapArgs) {
    const mapDiv = document.getElementById(id) || "null";
    this.map = new kakao.maps.Map(mapDiv, options);
    this.geocoder = new kakao.maps.services.Geocoder();
    this.markers = [];
    this.cardShown = false;
    this.clickMarker = (stores: Store[]) => {
      setCards(stores);
    };

    kakao.maps.event.addListener(this.map, "click", () => {
      if (this.cardShown) {
        setCards([]);
      }
    });
  }

  searchAddress(address: string) {
    this.geocoder.addressSearch(address, (result: any, status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        this.map.setCenter(coords);
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

        kakao.maps.event.addListener(marker, "click", () => {
          const exacts = this.markers.filter(
            (target: Marker) => target.marker === marker,
          );
          if (exacts) {
            const result = exacts.map((exact: Marker) => exact.store);
            this.cardShown = true;
            this.clickMarker(result);
          }
        });
        marker.setMap(this.map);
        this.markers.push({ store, marker });
      }
    });
  }

  removeMarkers() {
    if (this.markers.length > 0) {
      this.markers.forEach(({ marker }: any) => {
        kakao.maps.event.addListener(marker, "click", null);
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
