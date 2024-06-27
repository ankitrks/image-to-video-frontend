import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

let reportWebVitals;
reportWebVitals = onPerfEntry => {
	if (onPerfEntry && typeof onPerfEntry === 'function') {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
	}
};

export default reportWebVitals;
