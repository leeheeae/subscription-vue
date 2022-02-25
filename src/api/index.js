import axios from 'axios';

const config = {
  corsUrl: import.meta.env.VITE_CORS_URL,
  baseUrl: import.meta.env.VITE_API_URL,
  serviceKey: import.meta.env.VITE_SERVICE_KEY,
};

//API 분양정보 조회
const getLttotPblancList = () => {
  return axios.get(`${config.corsUrl}${config.baseUrl}getLttotPblancList`, {
    params: {
      serviceKey: config.serviceKey,
      startmonth: '202101',
      endmonth: '202103',
    },
  });
};

//오피스텔/도시형/(공공지원)민간임대 분양정보 조회
const getNotAPTLttotPblancList = () => {
  return axios.get(
    `${config.corsUrl}${config.baseUrl}getNotAPTLttotPblancList`,
    {
      params: {
        serviceKey: config.serviceKey,
        startmonth: '202101',                 
        endmonth: '202103',
      },
    }
  );
};

//APT무순위/취소후재공급 분양정보 조회
const getRemndrLttotPblancList = () => {
  return axios.get(
    `${config.corsUrl}${config.baseUrl}getRemndrLttotPblancList`,
    {
      params: {
        serviceKey: config.serviceKey,
        startmonth: '202101',
        endmonth: '202103',
      },
    }
  );
};

//APT 분양정보 상세 조회
const getAPTLttotPblancDetail = () => {
  return axios.get(
    `${config.corsUrl}${config.baseUrl}getAPTLttotPblancDetail`,
    {
      params: {
        serviceKey: config.serviceKey,
        houseManageNo: '2020000010',
        pblancNo: '2020000010',
      },
    }
  );
};

//오피스텔/도시형/(공공지원)민간임대 분양정보 상세 조회
const getUrbtyOfctlLttotPblancDetail = () => {
  return axios.get(
    `${config.corsUrl}${config.baseUrl}getUrbtyOfctlLttotPblancDetail`,
    {
      params: {
        serviceKey: config.serviceKey,
        houseManageNo: '2020950003',
        pblancNo: '2020950003',
      },
    }
  );
};

//APT무순위/취소후재공급 분양정보 상세 조회
const getRemndrLttotPblancDetail = () => {
  return axios.get(
    `${config.corsUrl}${config.baseUrl}getRemndrLttotPblancDetail`,
    {
      params: {
        serviceKey: config.serviceKey,
        houseManageNo: '2020910026',
        pblancNo: '2020910026',
      },
    }
  );
};

//APT 분양정보 주택형별 상세 조회
const getAPTLttotPblancMdl = () => {
  return axios.get(`${config.corsUrl}${config.baseUrl}getAPTLttotPblancMdl`, {
    params: {
      serviceKey: config.serviceKey,
      houseManageNo: '2020000632',
      pblancNo: '2020000632',
    },
  });
};

//오피스텔/도시형/(공공지원)민간임대 분양정보 주택형별 상세 조회
const getUrbtyOfctlLttotPblancMdl = () => {
  return axios.get(
    `${config.corsUrl}${config.baseUrl}getUrbtyOfctlLttotPblancMdl`,
    {
      params: {
        serviceKey: config.serviceKey,
        houseManageNo: '2020950007',
        pblancNo: '2020950007',
      },
    }
  );
};

//APT무순위/취소후재공급 분양정보 주택형별 상세 조회
const getRemndrLttotPblancMdl = () => {
  return axios.get(
    `${config.corsUrl}${config.baseUrl}getRemndrLttotPblancMdl`,
    {
      params: {
        serviceKey: config.serviceKey,
        houseManageNo: '2021930001',
        pblancNo: '2021930001',
      },
    }
  );
};

export {
  getLttotPblancList,
  getNotAPTLttotPblancList,
  getRemndrLttotPblancList,
  getAPTLttotPblancDetail,
  getUrbtyOfctlLttotPblancDetail,
  getRemndrLttotPblancDetail,
  getAPTLttotPblancMdl,
  getUrbtyOfctlLttotPblancMdl,
  getRemndrLttotPblancMdl,
};
