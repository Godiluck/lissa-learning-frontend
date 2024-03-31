import React from 'react';

interface IProps {
    size?: number
    circuitColor?: string
}

const LogoIcon: React.FC<IProps> = ({ size = 70, circuitColor = "#f5fbfc" }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="34.9997" cy="35" rx="34.9997" ry="35" fill={circuitColor} />
            <path d="M3.00008 35C3.00004 17.3269 17.3269 3 35 3C52.6731 3 67 17.3269 67.0001 35C67.0001 52.6731 52.6733 67 35.0002 67C17.327 67 3.00012 52.6731 3.00008 35Z" fill="#212523"/>
            <path d="M8.50781 35.0074C8.50781 20.3718 20.3723 8.50739 35.0078 8.50739C49.6434 8.50739 61.5078 20.3718 61.5078 35.0074C61.5078 49.6429 49.6434 61.5074 35.0078 61.5074C20.3723 61.5074 8.50781 49.6429 8.50781 35.0074Z" fill="#212523"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M50.4968 16.2367C50.9784 16.6262 51.2944 17.2636 51.4803 18.1018C52.2753 21.6882 52.5766 24.1771 52.357 26.496C52.1373 28.817 51.399 30.9286 50.1854 33.7589C49.0088 36.5031 49.0299 39.0317 49.4932 41.0253C49.9605 43.0357 50.8702 44.474 51.4242 45.028C52.1253 45.729 52.5784 46.6055 52.8051 47.4176C53.0249 48.2046 53.0586 49.0331 52.7857 49.6015L52.6176 49.9515L52.2369 49.8754C51.8173 49.7914 51.238 49.8474 50.4685 50.0086C49.9775 50.1115 49.45 50.2473 48.8735 50.3957C48.5499 50.479 48.2109 50.5663 47.8542 50.654C45.9054 51.133 43.5611 51.5884 41.0993 51.1918L41.2583 50.2045C43.5116 50.5675 45.6918 50.1557 47.6155 49.6829C47.9455 49.6018 48.2723 49.5177 48.5913 49.4356C49.1851 49.2829 49.7521 49.1371 50.2634 49.0299C50.8625 48.9043 51.4437 48.8176 51.9677 48.8405C52.0002 48.5551 51.973 48.156 51.842 47.6865C51.6549 47.0165 51.2804 46.2984 50.7171 45.7351C50.0069 45.0249 49.0203 43.4078 48.5192 41.2517C48.0142 39.0788 47.9951 36.3297 49.2663 33.3648C50.4707 30.5559 51.157 28.5618 51.3615 26.4017C51.5662 24.2395 51.2918 21.8721 50.504 18.3183C50.3416 17.5861 50.0998 17.2018 49.8679 17.0142C49.6564 16.8431 49.3871 16.7827 49.0105 16.8633C48.6184 16.9471 48.1461 17.1794 47.612 17.5534C47.0833 17.9237 46.5223 18.4128 45.9551 18.976C44.8207 20.1023 43.6926 21.4942 42.7873 22.7412C41.8748 23.9983 41.2173 25.0689 41.0027 25.5529C40.543 26.5897 40.2352 27.5419 40.042 28.2371C39.9443 28.589 39.8761 28.874 39.8327 29.0697C39.811 29.1675 39.7955 29.2429 39.7855 29.2931C39.7805 29.3182 39.777 29.337 39.7747 29.3491L39.7723 29.3622L39.7718 29.3649L39.7717 29.3651L39.2794 29.2777L38.7871 29.1904L38.7871 29.1903L38.7872 29.1901L38.7873 29.1895L38.7875 29.1879L38.7885 29.1828L38.7918 29.1647C38.7947 29.1493 38.799 29.1271 38.8046 29.0985C38.816 29.0413 38.833 28.9585 38.8565 28.853C38.9033 28.6421 38.9756 28.3399 39.0785 27.9694C39.2815 27.2388 39.6047 26.2388 40.0885 25.1475C40.3488 24.5605 41.0605 23.4178 41.9781 22.1538C42.903 20.8796 44.066 19.4425 45.2505 18.2664C45.8427 17.6783 46.448 17.1478 47.0384 16.7343C47.6234 16.3246 48.2229 16.0091 48.8013 15.8854C49.3952 15.7584 49.9949 15.8306 50.4968 16.2367Z" fill="white"/>
            <path d="M31.4102 29.278C31.4102 29.278 31.33 28.8258 31.1293 28.1035C30.9312 27.3906 30.6157 26.4145 30.1439 25.3504C29.1943 23.2084 21.09 11.9284 19.6975 18.2103C18.1147 25.3504 18.5458 27.9229 20.9637 33.562C23.4116 39.2712 20.8831 44.1175 19.6189 45.3818C18.3546 46.646 17.9636 48.571 18.3546 49.3853C20.4617 48.9639 24.7957 51.458 29.5108 50.6984" stroke="white"/>
            <path d="M40.9001 46.4355C40.9001 46.4355 41.2521 51.315 40.196 53.9988C39.0746 56.8483 31.5633 56.8278 30.3386 53.9988C29.2824 51.559 29.6345 46.6795 29.6345 46.6795" stroke="white"/>
            <path d="M38.0077 54.0212C38.0077 55.1849 36.7813 56.1283 35.2685 56.1283C33.7557 56.1283 32.5293 55.1849 32.5293 54.0212C32.5293 52.8574 33.7557 51.9141 35.2685 51.9141C36.7813 51.9141 38.0077 52.8574 38.0077 54.0212Z" fill="white"/>
            <path d="M31.6236 44.0503C30.5663 44.0503 29.8346 44.1765 28.3402 43.2196C26.8458 42.2627 26.8334 41.3906 26.2823 40.7017C24.8542 38.9167 26.9962 40.3448 29.4953 41.4157C30.9897 42.3726 31.9425 43.5522 31.6236 44.0503Z" fill="white"/>
            <path d="M38.6421 44.0112C39.6993 44.0112 40.4311 44.1374 41.9254 43.1805C43.4198 42.2235 43.4323 41.3514 43.9834 40.6626C45.4114 38.8776 43.2694 40.3056 40.7703 41.3766C39.2759 42.3335 38.3231 43.5131 38.6421 44.0112Z" fill="white"/>
        </svg>
    );
};

export default LogoIcon;