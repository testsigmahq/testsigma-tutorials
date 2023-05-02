import React, { Component } from 'react';
import './Footer.scss';
import SubscribeButton from "../components/SubscribeButton"
import FeedbackButtons from "../components/FeedbackButtons"
import { useLocation } from "@reach/router";

const Footer = ()=> {
    const { pathname } = useLocation();
    const pathRoute = pathname.slice(0, -1);
    return (
        <>
            <FeedbackButtons />
            <SubscribeButton />
            <div className="footer_greyBox">
                    <svg width="109" height="26" viewBox="0 0 109 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M34.7403 10.1386L34.5569 11.218C34.5324 11.3156 34.4774 11.401 34.3918 11.4741C34.3062 11.5473 34.2145 11.5839 34.1167 11.5839H32.4661L31.4574 17.3284C31.3962 17.6333 31.3657 17.8467 31.3657 17.9687C31.3657 18.1395 31.4115 18.2462 31.5032 18.2889C31.5949 18.3315 31.7569 18.3529 31.9892 18.3529H32.9613C33.0469 18.3529 33.1233 18.3651 33.1905 18.3895C33.2578 18.4139 33.2914 18.4749 33.2914 18.5724V18.6273L33.0897 19.7799C33.053 19.9628 32.9185 20.0726 32.6862 20.1092C32.4539 20.1458 32.2368 20.1762 32.0351 20.2006C31.8333 20.225 31.6285 20.2372 31.4207 20.2372C30.6137 20.2372 29.9962 20.0848 29.5683 19.7799C29.1403 19.475 28.9264 18.9566 28.9264 18.2248C28.9264 18.0907 28.9355 17.9504 28.9539 17.8041C28.9722 17.6577 28.9936 17.4991 29.0181 17.3284L30.0268 11.5839L28.3395 11.3278C28.1438 11.3034 28.046 11.1997 28.046 11.0168V10.9619L28.1928 10.1386C28.2172 10.0411 28.2692 9.9557 28.3487 9.88252C28.4281 9.80934 28.5168 9.77275 28.6146 9.77275H30.3386L30.6137 8.2726C30.6382 8.17503 30.6901 8.09575 30.7696 8.03477C30.8491 7.97379 30.9377 7.9311 31.0355 7.90671L32.7962 7.614H32.8696C33.0407 7.614 33.1263 7.68717 33.1263 7.83353V7.88841L32.7779 9.77275H34.4285C34.6364 9.77275 34.7403 9.87642 34.7403 10.0838V10.1386ZM43.9048 13.3951C43.9048 13.5658 43.8957 13.7396 43.8773 13.9165C43.859 14.0933 43.8376 14.2671 43.8131 14.4379L43.6664 15.316C43.6053 15.6209 43.4585 15.7734 43.2262 15.7734H37.2472C37.2228 15.9075 37.2014 16.0325 37.1831 16.1484C37.1647 16.2643 37.1555 16.3893 37.1555 16.5234C37.1555 17.0235 37.2962 17.4229 37.5774 17.7217C37.8586 18.0205 38.3415 18.1699 39.0263 18.1699C39.6987 18.1699 40.3345 18.1456 40.9337 18.0968C41.5328 18.048 42.028 18.0053 42.4192 17.9687H42.4926C42.566 17.9687 42.6302 17.9809 42.6852 18.0053C42.7402 18.0297 42.7677 18.0846 42.7677 18.1699V18.2431L42.5476 19.4506C42.5232 19.5969 42.4834 19.7067 42.4284 19.7799C42.3734 19.853 42.2603 19.9018 42.0891 19.9262C41.7834 19.975 41.4961 20.0207 41.2271 20.0634C40.9581 20.1061 40.683 20.1397 40.4018 20.1641C40.1206 20.1884 39.821 20.2067 39.5031 20.2189C39.1852 20.2311 38.8184 20.2372 38.4027 20.2372C37.9992 20.2372 37.5835 20.1762 37.1555 20.0543C36.7276 19.9323 36.3394 19.728 35.9909 19.4414C35.6425 19.1548 35.3551 18.7767 35.1289 18.3072C34.9027 17.8376 34.7896 17.2552 34.7896 16.56C34.7896 16.3893 34.7957 16.2124 34.808 16.0295C34.8202 15.8465 34.8446 15.6575 34.8813 15.4624L35.0831 14.3281C35.2298 13.4743 35.456 12.7487 35.7617 12.151C36.0673 11.5534 36.4403 11.0686 36.8804 10.6966C37.3206 10.3246 37.828 10.0563 38.4027 9.89167C38.9774 9.72701 39.6132 9.64469 40.3101 9.64469C40.9214 9.64469 41.4533 9.73921 41.9057 9.92826C42.3581 10.1173 42.731 10.3795 43.0245 10.7149C43.3179 11.0503 43.538 11.4467 43.6847 11.9041C43.8315 12.3614 43.9048 12.8584 43.9048 13.3951ZM41.5206 13.3585C41.5206 12.8218 41.3861 12.4163 41.1171 12.1419C40.8481 11.8675 40.4568 11.7303 39.9433 11.7303C39.2097 11.7303 38.6595 11.9498 38.2926 12.3889C37.9258 12.8279 37.6813 13.3829 37.559 14.0537H41.4472C41.4717 13.9317 41.49 13.8158 41.5022 13.7061C41.5145 13.5963 41.5206 13.4804 41.5206 13.3585ZM52.9043 10.4497L52.7209 11.4924C52.6842 11.7242 52.568 11.84 52.3724 11.84H52.299C52.1768 11.8156 52.0056 11.7913 51.7855 11.7669C51.5654 11.7425 51.3239 11.7211 51.0611 11.7028C50.7982 11.6845 50.52 11.6662 50.2266 11.6479C49.9331 11.6296 49.658 11.6205 49.4013 11.6205C49.2545 11.6205 49.0986 11.6296 48.9336 11.6479C48.7685 11.6662 48.6157 11.7028 48.4751 11.7577C48.3345 11.8126 48.2183 11.8949 48.1266 12.0047C48.0349 12.1145 47.989 12.2669 47.989 12.462C47.989 12.706 48.1724 12.956 48.5393 13.2121L50.6851 14.6757C51.2353 15.0538 51.5991 15.4319 51.7763 15.8099C51.9536 16.188 52.0423 16.5783 52.0423 16.9808C52.0423 17.554 51.9322 18.0449 51.7122 18.4535C51.4921 18.8621 51.1986 19.2005 50.8318 19.4689C50.465 19.7372 50.0371 19.9323 49.548 20.0543C49.0589 20.1762 48.5393 20.2372 47.989 20.2372C47.8423 20.2372 47.6375 20.2342 47.3746 20.2281C47.1118 20.222 46.8305 20.2037 46.531 20.1732C46.2314 20.1427 45.9196 20.1031 45.5956 20.0543C45.2716 20.0055 44.969 19.9445 44.6878 19.8713C44.5044 19.8104 44.4127 19.7006 44.4127 19.542V19.4506L44.6144 18.3529C44.6389 18.2553 44.6847 18.1821 44.752 18.1334C44.8192 18.0846 44.9017 18.0602 44.9996 18.0602H45.0546C45.2747 18.0846 45.5253 18.109 45.8065 18.1334C46.0878 18.1578 46.3659 18.1791 46.641 18.1974C46.9161 18.2157 47.176 18.2309 47.4205 18.2431C47.665 18.2553 47.8545 18.2614 47.989 18.2614C48.4414 18.2614 48.8174 18.1974 49.117 18.0693C49.4165 17.9413 49.5663 17.6638 49.5663 17.2369C49.5663 17.0906 49.5205 16.9473 49.4288 16.807C49.3371 16.6667 49.1812 16.5173 48.9611 16.3588L46.7236 14.822C46.369 14.5781 46.0816 14.2641 45.8616 13.8799C45.6415 13.4957 45.5314 13.0841 45.5314 12.645C45.5314 12.0352 45.6506 11.5382 45.8891 11.154C46.1275 10.7698 46.4332 10.4649 46.8061 10.2393C47.179 10.0136 47.5947 9.85813 48.0532 9.77275C48.5118 9.68738 48.9611 9.64469 49.4013 9.64469C49.9515 9.64469 50.5017 9.67518 51.0519 9.73616C51.6021 9.79715 52.134 9.89472 52.6475 10.0289C52.8187 10.0777 52.9043 10.1874 52.9043 10.3582V10.4497ZM60.7116 10.1386L60.5282 11.218C60.5038 11.3156 60.4487 11.401 60.3632 11.4741C60.2776 11.5473 60.1859 11.5839 60.088 11.5839H58.4374L57.4287 17.3284C57.3675 17.6333 57.337 17.8467 57.337 17.9687C57.337 18.1395 57.3828 18.2462 57.4745 18.2889C57.5662 18.3315 57.7282 18.3529 57.9606 18.3529H58.9326C59.0182 18.3529 59.0946 18.3651 59.1619 18.3895C59.2291 18.4139 59.2627 18.4749 59.2627 18.5724V18.6273L59.061 19.7799C59.0243 19.9628 58.8898 20.0726 58.6575 20.1092C58.4252 20.1458 58.2081 20.1762 58.0064 20.2006C57.8047 20.225 57.5999 20.2372 57.392 20.2372C56.585 20.2372 55.9676 20.0848 55.5396 19.7799C55.1117 19.475 54.8977 18.9566 54.8977 18.2248C54.8977 18.0907 54.9069 17.9504 54.9252 17.8041C54.9436 17.6577 54.9649 17.4991 54.9894 17.3284L55.9981 11.5839L54.3108 11.3278C54.1152 11.3034 54.0174 11.1997 54.0174 11.0168V10.9619L54.1641 10.1386C54.1885 10.0411 54.2405 9.9557 54.32 9.88252C54.3995 9.80934 54.4881 9.77275 54.5859 9.77275H56.3099L56.585 8.2726C56.6095 8.17503 56.6614 8.09575 56.7409 8.03477C56.8204 7.97379 56.909 7.9311 57.0069 7.90671L58.7675 7.614H58.8409C59.0121 7.614 59.0977 7.68717 59.0977 7.83353V7.88841L58.7492 9.77275H60.3998C60.6077 9.77275 60.7116 9.87642 60.7116 10.0838V10.1386ZM68.6657 10.4497L68.4823 11.4924C68.4456 11.7242 68.3294 11.84 68.1338 11.84H68.0604C67.9382 11.8156 67.767 11.7913 67.5469 11.7669C67.3268 11.7425 67.0853 11.7211 66.8225 11.7028C66.5596 11.6845 66.2814 11.6662 65.988 11.6479C65.6945 11.6296 65.4194 11.6205 65.1627 11.6205C65.0159 11.6205 64.86 11.6296 64.695 11.6479C64.5299 11.6662 64.3771 11.7028 64.2365 11.7577C64.0959 11.8126 63.9797 11.8949 63.888 12.0047C63.7963 12.1145 63.7504 12.2669 63.7504 12.462C63.7504 12.706 63.9338 12.956 64.3007 13.2121L66.4465 14.6757C66.9967 15.0538 67.3605 15.4319 67.5377 15.8099C67.715 16.188 67.8037 16.5783 67.8037 16.9808C67.8037 17.554 67.6936 18.0449 67.4735 18.4535C67.2535 18.8621 66.96 19.2005 66.5932 19.4689C66.2264 19.7372 65.7985 19.9323 65.3094 20.0543C64.8203 20.1762 64.3007 20.2372 63.7504 20.2372C63.6037 20.2372 63.3989 20.2342 63.136 20.2281C62.8732 20.222 62.5919 20.2037 62.2924 20.1732C61.9928 20.1427 61.681 20.1031 61.357 20.0543C61.033 20.0055 60.7304 19.9445 60.4492 19.8713C60.2658 19.8104 60.1741 19.7006 60.1741 19.542V19.4506L60.3758 18.3529C60.4003 18.2553 60.4461 18.1821 60.5134 18.1334C60.5806 18.0846 60.6631 18.0602 60.761 18.0602H60.816C61.0361 18.0846 61.2867 18.109 61.5679 18.1334C61.8491 18.1578 62.1273 18.1791 62.4024 18.1974C62.6775 18.2157 62.9373 18.2309 63.1819 18.2431C63.4264 18.2553 63.6159 18.2614 63.7504 18.2614C64.2028 18.2614 64.5788 18.1974 64.8784 18.0693C65.1779 17.9413 65.3277 17.6638 65.3277 17.2369C65.3277 17.0906 65.2819 16.9473 65.1902 16.807C65.0985 16.6667 64.9426 16.5173 64.7225 16.3588L62.485 14.822C62.1304 14.5781 61.843 14.2641 61.6229 13.8799C61.4029 13.4957 61.2928 13.0841 61.2928 12.645C61.2928 12.0352 61.412 11.5382 61.6505 11.154C61.8889 10.7698 62.1946 10.4649 62.5675 10.2393C62.9404 10.0136 63.3561 9.85813 63.8146 9.77275C64.2731 9.68738 64.7225 9.64469 65.1627 9.64469C65.7129 9.64469 66.2631 9.67518 66.8133 9.73616C67.3635 9.79715 67.8954 9.89472 68.4089 10.0289C68.5801 10.0777 68.6657 10.1874 68.6657 10.3582V10.4497ZM73.942 6.42485L73.6486 8.03477C73.6241 8.13234 73.5722 8.21772 73.4927 8.29089C73.4132 8.36407 73.3246 8.40066 73.2268 8.40066H71.4477C71.3499 8.40066 71.2704 8.37322 71.2093 8.31834C71.1482 8.26345 71.1176 8.18723 71.1176 8.08965V8.03477L71.4111 6.42485C71.4355 6.32728 71.4905 6.24191 71.5761 6.16873C71.6617 6.09555 71.7534 6.05896 71.8512 6.05896H73.6302C73.8381 6.05896 73.942 6.16263 73.942 6.36997V6.42485ZM73.2268 10.1386L71.5394 19.7067C71.515 19.8043 71.46 19.8927 71.3744 19.972C71.2888 20.0512 71.1971 20.0909 71.0993 20.0909H69.4119C69.3141 20.0909 69.2408 20.0604 69.1919 19.9994C69.143 19.9384 69.1185 19.8652 69.1185 19.7799V19.7067L70.8058 10.1386C70.8303 10.0411 70.8822 9.9557 70.9617 9.88252C71.0412 9.80934 71.1298 9.77275 71.2276 9.77275H72.915C73.1228 9.77275 73.2268 9.87642 73.2268 10.0838V10.1386ZM83.4734 10.4862C83.4734 10.5106 83.4703 10.532 83.4642 10.5503C83.4581 10.5686 83.455 10.5899 83.455 10.6143L81.786 20.0543C81.6638 20.7251 81.4987 21.2953 81.2909 21.7648C81.083 22.2344 80.7957 22.6155 80.4289 22.9082C80.062 23.2009 79.6005 23.4144 79.0442 23.5485C78.4878 23.6827 77.8123 23.7498 77.0175 23.7498C76.125 23.7498 75.3975 23.6949 74.835 23.5851C74.2726 23.4754 73.8813 23.3839 73.6612 23.3107C73.5634 23.2741 73.487 23.2345 73.432 23.1918C73.377 23.1491 73.3494 23.079 73.3494 22.9814C73.3494 22.9692 73.3525 22.954 73.3586 22.9357C73.3647 22.9174 73.3678 22.896 73.3678 22.8716L73.5512 21.902C73.5879 21.6947 73.7224 21.591 73.9547 21.591H73.9914C74.1992 21.6154 74.4499 21.6398 74.7433 21.6642C75.0368 21.6886 75.3424 21.7099 75.6603 21.7282C75.9782 21.7465 76.287 21.7648 76.5865 21.7831C76.8861 21.8014 77.1398 21.8106 77.3477 21.8106C78.0446 21.8106 78.5367 21.6916 78.8241 21.4538C79.1114 21.216 79.2917 20.7922 79.3651 20.1823L79.3834 20.036C79.1022 20.097 78.821 20.1427 78.5398 20.1732C78.2586 20.2037 77.9835 20.2189 77.7145 20.2189C77.1887 20.2189 76.6935 20.1549 76.2289 20.0268C75.7643 19.8988 75.3608 19.6945 75.0184 19.414C74.6761 19.1335 74.4071 18.7767 74.2114 18.3437C74.0158 17.9108 73.918 17.3833 73.918 16.7613C73.918 16.5905 73.9241 16.4137 73.9363 16.2307C73.9486 16.0478 73.973 15.8526 74.0097 15.6453L74.2481 14.2366C74.3949 13.3829 74.6088 12.6633 74.89 12.0779C75.1713 11.4924 75.5289 11.0198 75.963 10.66C76.397 10.3002 76.9044 10.0411 77.4852 9.88252C78.066 9.72397 78.7232 9.64469 79.4568 9.64469C80.0437 9.64469 80.6673 9.69043 81.3275 9.7819C81.9878 9.87337 82.5625 9.98619 83.0515 10.1203C83.186 10.1569 83.29 10.1996 83.3633 10.2484C83.4367 10.2972 83.4734 10.3765 83.4734 10.4862ZM80.8323 11.7852C80.6612 11.7486 80.4136 11.712 80.0896 11.6754C79.7655 11.6388 79.4385 11.6205 79.1083 11.6205C78.3503 11.6205 77.7909 11.837 77.4302 12.27C77.0695 12.7029 76.8158 13.3585 76.6691 14.2366L76.4306 15.6453C76.394 15.8648 76.3634 16.0691 76.3389 16.2582C76.3145 16.4472 76.3023 16.6271 76.3023 16.7979C76.3023 17.2857 76.4184 17.6516 76.6507 17.8955C76.883 18.1395 77.311 18.2614 77.9346 18.2614C78.1546 18.2614 78.4389 18.2462 78.7874 18.2157C79.1359 18.1852 79.4446 18.1517 79.7136 18.1151L80.8323 11.7852ZM98.3051 12.3157C98.3051 12.6694 98.2684 13.0597 98.195 13.4865L97.0946 19.7067C97.0702 19.8043 97.0151 19.8927 96.9296 19.972C96.844 20.0512 96.7523 20.0909 96.6544 20.0909H94.9671C94.8693 20.0909 94.7959 20.0604 94.747 19.9994C94.6981 19.9384 94.6737 19.8652 94.6737 19.7799V19.7067L95.7741 13.4865C95.7986 13.3158 95.82 13.1603 95.8383 13.02C95.8566 12.8798 95.8658 12.7548 95.8658 12.645C95.8658 12.2913 95.7802 12.0474 95.609 11.9132C95.4379 11.7791 95.1566 11.712 94.7654 11.712C94.5942 11.712 94.3344 11.7455 93.9859 11.8126C93.6374 11.8797 93.2798 11.9986 92.913 12.1693C92.9008 12.3767 92.8916 12.5901 92.8855 12.8096C92.8794 13.0292 92.858 13.2548 92.8213 13.4865L91.7209 19.7067C91.6964 19.8043 91.6414 19.8927 91.5558 19.972C91.4702 20.0512 91.3785 20.0909 91.2807 20.0909H89.5934C89.4956 20.0909 89.4222 20.0604 89.3733 19.9994C89.3244 19.9384 89.2999 19.8652 89.2999 19.7799V19.7067L90.4004 13.4865C90.437 13.3036 90.4615 13.1389 90.4737 12.9926C90.486 12.8462 90.4921 12.7121 90.4921 12.5901C90.4921 12.2486 90.4126 12.0169 90.2536 11.8949C90.0947 11.773 89.8257 11.712 89.4467 11.712C89.0798 11.712 88.4807 11.9132 87.6493 12.3157L86.3471 19.7067C86.3227 19.8043 86.2677 19.8927 86.1821 19.972C86.0965 20.0512 86.0048 20.0909 85.907 20.0909H84.2196C84.1218 20.0909 84.0485 20.0604 83.9996 19.9994C83.9506 19.9384 83.9262 19.8652 83.9262 19.7799V19.7067L85.6135 10.1386C85.638 10.0411 85.6899 9.9557 85.7694 9.88252C85.8489 9.80934 85.9375 9.77275 86.0353 9.77275H87.631C87.8388 9.77275 87.9427 9.87642 87.9427 10.0838V10.1386L87.8694 10.5228C88.2973 10.2789 88.7192 10.0716 89.1349 9.90081C89.5506 9.73006 90.0336 9.64469 90.5838 9.64469C91.1095 9.64469 91.5283 9.73311 91.8401 9.90996C92.1519 10.0868 92.3872 10.2972 92.5462 10.5411C93.0108 10.2362 93.506 10.0106 94.0318 9.86422C94.5575 9.71787 95.1383 9.64469 95.7741 9.64469C96.6544 9.64469 97.2964 9.88252 97.6999 10.3582C98.1033 10.8338 98.3051 11.4863 98.3051 12.3157ZM108.863 10.4679C108.863 10.5289 108.857 10.5777 108.845 10.6143L107.25 19.725C107.225 19.8226 107.17 19.9079 107.084 19.9811C106.999 20.0543 106.907 20.0909 106.809 20.0909H105.342C105.146 20.0909 105.049 19.9872 105.049 19.7799V19.725L105.122 19.1944C104.608 19.5847 104.119 19.8561 103.655 20.0085C103.19 20.161 102.732 20.2372 102.279 20.2372C101.864 20.2372 101.472 20.1671 101.105 20.0268C100.739 19.8866 100.418 19.6762 100.143 19.3957C99.8675 19.1152 99.6535 18.7706 99.5007 18.362C99.3479 17.9535 99.2714 17.4748 99.2714 16.9259C99.2714 16.7552 99.2776 16.5753 99.2898 16.3862C99.302 16.1972 99.3265 16.0112 99.3631 15.8282C99.3876 15.6453 99.4182 15.4624 99.4548 15.2794C99.4793 15.1209 99.5099 14.9501 99.5466 14.7672C99.5832 14.5842 99.6138 14.4074 99.6383 14.2366C99.895 12.7974 100.457 11.6723 101.326 10.8613C102.194 10.0502 103.367 9.64469 104.847 9.64469C105.434 9.64469 106.042 9.68738 106.672 9.77275C107.301 9.85813 107.891 9.97399 108.442 10.1203C108.576 10.1569 108.68 10.1966 108.753 10.2393C108.827 10.2819 108.863 10.3582 108.863 10.4679ZM106.222 11.7486C106.051 11.712 105.804 11.6815 105.48 11.6571C105.156 11.6327 104.829 11.6205 104.498 11.6205C104.107 11.6205 103.771 11.6876 103.49 11.8217C103.209 11.9559 102.973 12.1388 102.784 12.3706C102.594 12.6023 102.441 12.8767 102.325 13.1938C102.209 13.5109 102.12 13.8585 102.059 14.2366L101.729 16.121C101.705 16.2551 101.686 16.3862 101.674 16.5143C101.662 16.6424 101.656 16.7613 101.656 16.871C101.656 17.3955 101.778 17.7583 102.023 17.9596C102.267 18.1608 102.567 18.2614 102.921 18.2614C103.276 18.2614 103.643 18.1943 104.022 18.0602C104.401 17.926 104.798 17.737 105.214 17.493L106.222 11.7486Z"
                            fill="#2D4A60"/>
                        <path
                            d="M25.5298 9.76322C25.2845 9.39565 24.937 9.18224 24.5053 9.12618C24.3028 9.10134 24.0914 9.06694 23.8914 9.03509C23.6353 8.99623 23.3721 8.95482 23.1128 8.92679C22.4211 8.85672 21.9969 8.56941 21.7408 8.00627C21.5652 7.6215 21.5441 7.27814 21.6769 6.93924L21.7759 6.68378C21.9471 6.23977 22.126 5.77728 22.3157 5.32945C22.4984 4.89562 22.4843 4.46881 22.2742 4.05601C21.8884 3.29985 21.2816 2.77493 20.4748 2.49846C20.0181 2.34111 19.5653 2.40035 19.1552 2.66982C18.9591 2.79595 18.7554 2.91826 18.5561 3.03739C18.2782 3.20557 17.9908 3.38011 17.7206 3.56931C17.5315 3.70182 17.2927 3.77189 17.0327 3.77189C16.3837 3.77189 15.7552 3.34508 15.6013 2.80296C15.5208 2.51247 15.4224 2.2258 15.3273 1.94933C15.2436 1.7149 15.1625 1.47028 15.0884 1.23203C14.9376 0.724947 14.6042 0.374577 14.0958 0.1892C13.9489 0.136963 13.7975 0.0949184 13.6499 0.0598814C13.5905 0.0426814 13.5241 0.0248444 13.4641 0.0070074L13.4328 0H12.5941L12.5622 0.0108296C12.5449 0.0146518 12.5309 0.0216592 12.5136 0.0280296C12.4926 0.035037 12.4708 0.0420444 12.4472 0.0458666C11.5913 0.200029 11.079 0.633851 10.8887 1.38237C10.805 1.71172 10.6862 2.04361 10.5738 2.36213C10.5138 2.53413 10.4537 2.70549 10.3981 2.87686C10.2295 3.38776 9.62272 3.79037 9.01528 3.79037C8.77384 3.79037 8.54517 3.72411 8.35994 3.59416C8.01949 3.36291 7.66563 3.14632 7.32135 2.93992C7.15656 2.83863 6.99177 2.74053 6.83017 2.63924C6.5108 2.43985 6.16013 2.37997 5.8133 2.46788C4.87052 2.69785 4.18005 3.27182 3.75529 4.17131C3.5873 4.53188 3.57964 4.92684 3.74124 5.31862C3.81469 5.49699 3.88495 5.67599 3.95522 5.85755C4.06061 6.13402 4.16919 6.4175 4.29183 6.69398C4.54413 7.26094 4.51666 7.76165 4.19666 8.26172C3.97949 8.60509 3.69525 8.80766 3.3267 8.87774C2.79655 8.97966 2.22871 9.06694 1.63597 9.13701C1.13392 9.19307 0.74429 9.44151 0.474743 9.87534C0.110025 10.4633 -0.0445489 11.1316 0.0110211 11.8559C0.0640362 12.535 0.39043 13.021 0.979983 13.3013C1.19396 13.4032 1.4041 13.5256 1.61169 13.6409C1.83908 13.7702 2.07158 13.9033 2.31686 14.0186C2.66816 14.1792 2.93068 14.5505 3.015 15.0016C3.1025 15.4711 2.9837 15.9469 2.69882 16.2368C2.30217 16.6496 1.91318 17.0942 1.54463 17.5561C1.376 17.7625 1.25656 18.0218 1.21057 18.2702C1.03939 19.2461 1.86016 20.6916 2.77994 21.0343C3.00733 21.1184 3.2954 21.1426 3.55856 21.1037C4.05294 21.0267 4.56585 20.9254 5.12346 20.789C5.69577 20.6489 6.13778 20.7674 6.5619 21.1846C6.88063 21.4993 7.02498 21.8389 7.01412 22.2619C7.00071 22.8046 6.98666 23.3856 6.96174 23.9736C6.94067 24.4176 7.09524 24.803 7.41461 25.1145C7.92368 25.6114 8.56242 25.9057 9.31932 25.986C9.40427 25.9968 9.48411 26 9.56523 26C10.1407 26 10.607 25.7547 10.9411 25.2719C11.0739 25.0859 11.2183 24.9113 11.3722 24.7259C11.5306 24.5335 11.6916 24.338 11.8391 24.1277C12.0806 23.771 12.5264 23.5576 13.0246 23.5576C13.5126 23.5576 13.9546 23.7678 14.2037 24.1144C14.4075 24.401 14.6317 24.6775 14.8463 24.9438C14.9792 25.105 15.1127 25.2693 15.2391 25.4369C15.4844 25.7554 15.8178 25.9408 16.1934 25.9758C17.1055 26.0599 17.9231 25.7796 18.6174 25.1464C18.9502 24.8419 19.1086 24.4501 19.0837 23.978C19.0703 23.7716 19.0664 23.5544 19.0626 23.348C19.0562 23.0747 19.0485 22.7951 19.0275 22.5186C18.9789 21.8675 19.1827 21.3987 19.663 21.0451C19.9817 20.8139 20.2941 20.7298 20.6345 20.7859C21.2484 20.8871 21.7964 20.9993 22.3118 21.1292C22.8446 21.2585 23.3364 21.1362 23.7637 20.7578C24.3009 20.289 24.6515 19.6908 24.8023 18.9837C24.9287 18.3925 24.7882 17.8816 24.3845 17.465C24.2261 17.3006 24.0722 17.1223 23.9247 16.9509C23.7771 16.7764 23.6232 16.5973 23.4609 16.4292C23.0196 15.975 22.8969 15.5055 23.0617 14.9111C23.1741 14.4945 23.3805 14.2148 23.7037 14.0326C24.2332 13.7313 24.7275 13.4619 25.2194 13.207C25.6122 13.0006 25.8645 12.6821 25.9661 12.2591C26.1864 11.3692 26.0389 10.5296 25.5298 9.76322Z"
                            fill="#03A973"/>
                        <path
                            d="M12.9728 9.95616L12.9764 9.90368L13.0132 8.97575C13.0064 8.93351 13.023 8.7684 13.023 8.74345C13.0266 8.24812 13.053 8.28332 13.094 7.34066C13.0964 7.26707 13.0671 7.19347 13.0101 7.14356C12.9562 7.09428 12.8815 7.08084 12.8111 7.09812C12.418 7.19987 11.93 7.30867 11.3617 7.4213C11.2539 7.44242 11.1829 7.53713 11.1731 7.64656C11.1058 8.51498 11.1156 8.31148 11.0831 8.71849L10.9919 9.87552C10.9919 9.87552 10.9919 9.87872 10.9919 9.88256L10.9343 10.9756L10.8112 13.3518L10.7671 14.1952C10.7096 15.2819 10.6796 15.8969 10.6734 16.0792C10.6661 16.2591 10.663 16.3883 10.663 16.4664C10.663 17.0501 10.7635 17.5281 10.9625 17.8826C11.1676 18.2442 11.4634 18.5117 11.8436 18.6736C12.2037 18.8323 12.6776 18.9091 13.2532 18.9091C13.4785 18.9091 13.7241 18.895 13.9764 18.8701C14.2317 18.8419 14.5752 18.7754 15.002 18.673C15.0927 18.648 15.1637 18.5712 15.1772 18.4759C15.2108 18.2436 15.2482 17.9556 15.2788 17.6779C15.3186 17.3406 15.359 16.9925 15.3964 16.8267C15.4166 16.7352 15.3829 16.6398 15.3125 16.5842C15.2414 16.5279 15.1472 16.5176 15.0675 16.5599C14.6536 16.7781 14.4215 16.8657 14.045 16.9393C13.9133 16.9675 13.7988 16.9675 13.6745 16.9675H13.6145C13.4394 16.9675 13.2067 16.908 13.0187 16.8126C12.8472 16.7243 12.8068 16.693 12.7762 16.5458C12.7223 16.268 12.7223 16.2085 12.7223 15.8783V15.7343L12.7327 15.326L12.8674 12.324L12.9728 9.95616Z"
                            fill="white"/>
                        <path
                            d="M17.7153 10.0823L17.3115 9.20649C17.2445 9.06429 17.1241 8.95133 16.9791 8.90017C16.8342 8.84502 16.6751 8.85233 16.5335 8.9221L13.5476 10.3966L13.5514 10.3421L11.4035 11.4551L10.1411 12.079L9.65679 11.0245C9.59238 10.8823 9.47259 10.7726 9.32767 10.7175C9.18276 10.663 9.02367 10.6703 8.88198 10.7401L8.0331 11.1554C7.74328 11.2976 7.61962 11.6557 7.75745 11.9547L8.89293 14.4299C8.95991 14.5721 9.07713 14.685 9.22205 14.7362C9.28645 14.7621 9.35344 14.7727 9.41655 14.7727C9.50479 14.7727 9.59045 14.7548 9.66774 14.7143L11.274 13.9222L13.4368 12.8551L17.4416 10.8803C17.7295 10.7394 17.8531 10.3813 17.7153 10.0823Z"
                            fill="white"/>
                    </svg>
                    <p>
                        Want to contribute or report missing content?
                    </p>
                    <div className="p_flex">
                        <p className="right_border"><a href={`https://github.com/testsigmahq/testsigma-tutorials/blob/dev/src/pages${pathRoute}.md`} target="_blank">edit this page on github </a></p>
                        <p className="right_border"><a
                            href="https://github.com/testsigmahq/testsigma-tutorials/blob/dev/CONTRIBUTING.md" target="_blank">contributing
                            guidelines </a></p>
                        <p><a href="https://github.com/testsigmahq/testsigma-tutorials/issues/new/choose" target="_blank">report an
                            issue</a></p>
                    </div>
                    <p className="p_0"><a href="https://github.com/testsigmahq/testsigma" target="_blank"> Testsigma </a> is
                        open source. <a href="https://github.com/testsigmahq/testsigma/blob/main/LICENSE"
                                        className="link_underline" target="_blank">See license</a></p>
                </div>
                <div className="footer_text">
                    <div className="flex_item">
                        <p>
                            <a href="https://testsigma.com/" target="_blank"> www.testsigma.com </a>
                        </p>
                    </div>
                    <div className="flex_item">
                        <p className="text_end">
                            ©2022 Copyright , Testsigma Technologies Inc
                        </p>
                    </div>
                </div>
            </>
        );
    }


export default Footer;
