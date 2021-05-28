type naver = any;

interface initNaverMapArgs {
  id: string;
  settings: any;
}

export const initNaverMap = ({ id, settings }: initNaverMapArgs) => {
  const mapDiv = document.getElementById(id) || "null";
  const map = new naver.maps.Map(mapDiv, settings);
  return map;
};

const navermaps = {
  initNaverMap,
};

export default navermaps;
