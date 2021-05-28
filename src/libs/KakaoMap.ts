interface initKakoMapArgs {
  id: string;
  options: any;
}

const { kakao }: any = window; // resolve tsc and eslint error

export const clickEvent = (e: any) => {
  const latlng = e.latLng;
  console.log(latlng.getLat(), latlng.getLng());
};

export class KakaoMap {
  map: any;

  geocoder: any;

  constructor({ id, options }: initKakoMapArgs) {
    const mapDiv = document.getElementById(id) || "null";
    this.map = new kakao.maps.Map(mapDiv, options);
    this.geocoder = new kakao.maps.services.Geocoder();

    // kakao.maps.event.addListener(this.map, "click", clickEvent);
    kakao.maps.event.addListener(this.map, "click", (e: any) => {
      const latlng = e.latLng;
      console.log(latlng.getLat(), latlng.getLng());
      console.log(this.map);
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
}

export const test = () => {
  console.log("naver");
};

const kakaoMaps = {
  KakaoMap,
  test,
};

export default kakaoMaps;
