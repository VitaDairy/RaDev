(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[975],{4098:function(e,t,n){Promise.resolve().then(n.bind(n,9532))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return r.a}});var a=n(5601),r=n.n(a)},6463:function(e,t,n){"use strict";var a=n(1169);n.o(a,"usePathname")&&n.d(t,{usePathname:function(){return a.usePathname}}),n.o(a,"useRouter")&&n.d(t,{useRouter:function(){return a.useRouter}}),n.o(a,"useSearchParams")&&n.d(t,{useSearchParams:function(){return a.useSearchParams}})},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},getImageProps:function(){return s}});let a=n(9920),r=n(497),o=n(8173),i=a._(n(1241));function s(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let l=o.Image},9532:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var a=n(7437),r=n(2970),o=n(6648),i=n(6463);function s(e){let{isOpen:t,togglePopup:n}=e,r=(0,i.useRouter)();return(0,a.jsx)(a.Fragment,{children:t&&(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,a.jsxs)("div",{className:"bg-white rounded-2xl shadow-lg p-6 w-80",children:[(0,a.jsx)("div",{className:"flex justify-center mb-4",children:(0,a.jsx)(o.default,{src:"./static/sbps/banner/otp_error.png",alt:"OTP Error",width:200,height:182})}),(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("p",{className:"text-error400 font-semibold text-lg",children:"Bạn đ\xe3 bị kho\xe1 t\xednh năng"}),(0,a.jsx)("p",{className:"text-neutral900 text-sm mt-2 font-light",children:"T\xednh năng X\xe1c thực muỗng của bạn đ\xe3 bị tạm kho\xe1."}),(0,a.jsx)("p",{className:"text-neutral900 text-sm mt-2 font-light",children:"Vui l\xf2ng li\xean hệ hotline để được hỗ trợ."})]}),(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsx)("button",{onClick:()=>{r.push("/address/add")},className:"w-full py-2 bg-gradient-button text-white rounded-lg text-sm font-bold h-10",children:"VỀ TRANG CHỦ"})}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)("button",{onClick:n,className:"w-full py-1 bg-gradient-button text-white rounded-lg font-bold text-sm h-10",children:"LI\xcaN HỆ NGAY"})})]})})})}function l(e){let{isOpen:t,togglePopup:n}=e;return(0,a.jsx)(a.Fragment,{children:t&&(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,a.jsxs)("div",{className:"bg-white rounded-2xl shadow-lg p-6 w-80",children:[(0,a.jsx)("div",{className:"flex justify-center mb-4"}),(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("p",{className:"text-neutral900 font-semibold",children:"Hướng dẫn qu\xe9t v\xe0 nhập m\xe3"}),(0,a.jsx)("p",{className:"text-neutral900 text-sm mt-2 font-light",children:'Bạn c\xf3 thể nhập "M\xe3 dự thưởng" nếu qu\xe9t "M\xe3 QR dự thưởng" kh\xf4ng th\xe0nh c\xf4ng.'})]}),(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsx)("button",{onClick:()=>{n()},className:"w-full py-2 bg-gradient-button text-white rounded-full text-sm font-bold h-10",children:"X\xe1c thực ngay"})})]})})})}var c=n(3874),d=n(2265),u=n(5994);function h(){let e=(0,i.useRouter)(),[t,n]=(0,d.useState)(null),[o,h]=(0,d.useState)(!0),[m,p]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{c.ZP.verifyBlockedScan().then(e=>{if(null==e?void 0:e.response){var t;p((null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.blockedScan)||!1)}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{title:"Qu\xe9t m\xe3 QR",inputSearch:!1,showPoint:!1,showBack:!0,showInputVoucher:!0}),(0,a.jsx)("div",{className:"flex flex-col text-center",children:(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center relative",children:[(0,a.jsxs)("div",{className:"relative w-64 h-64 mt-20%",children:[(0,a.jsx)(u.T,{delay:300,onError:e=>{console.error(e)},onScan:t=>{t&&e.push("/qr/detail?code=".concat(t))},style:{width:"100%",height:"100%"},constraints:{facingMode:{exact:"environment"}}}),(0,a.jsxs)("div",{className:"absolute inset-0 border-[8px] border-transparent rounded-lg pointer-events-none",children:[(0,a.jsx)("div",{className:"absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white"}),(0,a.jsx)("div",{className:"absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white"}),(0,a.jsx)("div",{className:"absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white"}),(0,a.jsx)("div",{className:"absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white"})]}),(0,a.jsx)("div",{className:"absolute inset-0 pointer-events-none",children:(0,a.jsx)("div",{className:"w-full h-1 bg-white opacity-75 animate-scan-line"})})]}),(0,a.jsx)("div",{className:"mt-10",children:(0,a.jsx)("button",{onClick:()=>{e.push("/qr/detail?code=B8HS6TXG57MN")},className:"w-full py-1 bg-gradient-button text-white rounded-lg font-bold text-sm h-10",children:"QR CODE TEST"})})]})}),(0,a.jsx)("div",{className:"h-40"}),o&&(0,a.jsx)(l,{isOpen:o,togglePopup:()=>{h(!o)}}),m&&(0,a.jsx)(s,{isOpen:m,togglePopup:()=>{p(!m)}})]})}},2970:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7437),r=n(6514),o=n(2265);let i=o.forwardRef(function(e,t){let{title:n,titleId:a,...r}=e;return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},r),n?o.createElement("title",{id:a},n):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});var s=n(6648),l=n(6463),c=e=>{let{title:t,inputSearch:n=!0,showPoint:o=!0,showBack:c=!1,backUrl:d="",showInputVoucher:u=!1}=e,h=(0,l.useRouter)(),m=(0,l.usePathname)();return console.log("\uD83D\uDE80 ~ HeaderWithSearch ~ pathName:",m,m.startsWith("/noti")),(0,a.jsxs)("header",{className:"".concat(m.startsWith("/noti")?"bg-[#2CB6A3]":"bg-gradient-button","  p-4 relative"),children:[(0,a.jsx)("div",{className:"flex justify-between items-center"}),(0,a.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,a.jsxs)("h1",{className:"text-white text-[18px] font-semibold pt-1 flex",children:[c&&(0,a.jsx)(r.Z,{className:"w-6 h-6 text-white mt-1 mr-2 cursor-pointer",strokeWidth:2,onClick:()=>{if(d){h.push(d);return}h.back()}}),t]}),o&&(0,a.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,a.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,a.jsx)(s.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]}),u&&(0,a.jsx)("div",{className:"absolute right-4 px-2 py-1 flex items-center ",children:(0,a.jsx)("button",{onClick:()=>{h.push("/qr/detail")},children:(0,a.jsx)(s.default,{src:"/static/sbps/icons/input_voucher.svg",alt:"Notification",width:24,height:24})})})]}),n&&(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,a.jsx)(i,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,a.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},3874:function(e,t,n){"use strict";n.d(t,{ZP:function(){return l}});let a=async e=>{let{url:t,method:n,body:a,authorization:r,headers:o={}}=e;try{let e={"Content-Type":"application/json",...o};r&&(e.Authorization=r),("GET"===n||"DELETE"===n)&&(t="".concat(t,"?").concat(new URLSearchParams(a).toString()),a=void 0);let i=a?JSON.stringify(a):void 0,s=await fetch(t,{method:n,headers:e,body:i});return null==s?void 0:s.json()}catch(e){return console.log(e),{error:e,status:500}}},r="https://api-sandbox.vitadairyvietnam.vn",o=()=>{try{var e,t;let n=(null===(e=localStorage)||void 0===e?void 0:e.getItem("login-storage"))||"{}",a=JSON.parse(n);return(null==a?void 0:null===(t=a.state)||void 0===t?void 0:t.authorization)||""}catch(e){return null}},i=["2024_SBPS_OTO","2024_SBPS_IPHONE","2024_SBPS_10TR","2024_SBPS_5TR","2024_SBPS_THE20K","2024_SBPS_THE10K","2024_SBPS_CHUCMAYMAN","2024_SBPS_HETGIAI","SBPS_QR_USED"],s=0;var l={getUser:async()=>await a({url:"".concat(r,"/api-v3/loyalty/v1/user"),method:"GET",authorization:o()}),getNotificationUnread:async()=>await a({url:"".concat(r,"/api-v3/loyalty/v1/user/notification/unread-count"),method:"GET",authorization:o()}),getMyRewards:async()=>await a({url:"".concat(r,"/v4/gs/user-gifts"),method:"GET",authorization:o()}),sendOTP:async(e,t)=>"LOGIN"===t?(t="REGISTER",await a({url:"".concat(r,"/api/user/send-otp"),method:"POST",headers:{appversioncode:12,appversionname:"3.2.27"},body:{phoneNumber:e,type:"log_in_calosure"}})):await a({url:"".concat(r,"/api-v3/loyalty/send-zalo"),method:"POST",body:{phone:e,source:t},authorization:o()}),verifyOTP:async(e,t)=>await a({url:"".concat(r,"/api-v3/loyalty/verify-otp"),method:"POST",body:{phone:e,otp:t},authorization:o()}),getNotifications:async e=>{let{page:t=1,size:n=20}=e,i=await a({url:"".concat(r,"/api-v3/noti/user/noti"),method:"GET",authorization:o(),body:{page:t,size:n}});return console.log("\uD83D\uDE80 ~ getNotifications ~ response:",i),i},getDetailNotifications:async e=>{let{id:t,page:n=1,size:i=20}=e;return await a({url:"".concat(r,"/api-v3/noti/user/noti/").concat(t),method:"GET",authorization:o()})},readDetailNotifications:async e=>{let{id:t}=e;return await a({url:"".concat(r,"/api-v3/noti/user/noti/").concat(t,"/read"),method:"POST",authorization:o(),body:{id:t}})},getAddress:async e=>{let{auth:t}=e;return await a({url:"".concat(r,"/api/recipient/me"),method:"GET",authorization:t||o()})},logout:async()=>await a({url:"".concat(r,"/api/user/logout"),method:"POST",authorization:o()}),verifyPhoneNumber:async e=>await a({url:"".concat(r,"/api-v3/loyalty/v1/user/auth/check-phone-number"),method:"GET",authorization:o(),body:{phoneNumber:e}}),getProvinces:async()=>await a({url:"".concat(r,"/api/province/vn"),method:"GET",authorization:o()}),getWardsAndDistricts:async e=>{let{code:t}=e;return await a({url:"".concat(r,"/api/province/parent/").concat(t),method:"GET",authorization:o()})},register:async e=>await a({url:"".concat(r,"/api/user/register"),method:"POST",body:e,headers:{appversioncode:12,appversionname:"3.1.2",webapp_name:"SBPS"}}),login:async(e,t)=>await a({url:"".concat(r,"/api/user/login-calosure"),method:"POST",body:{phoneNumber:e,otp:t},headers:{appversioncode:2,appversionname:"3.2.10"}}),verifyBlockedScan:async()=>await a({url:"".concat(r,"/api-v3/loyalty/v1/user/blocked-scan"),method:"GET",authorization:o()}),getQrCode:async e=>{let{qrCode:t}=e;return await a({url:"".concat(r,"/api-v3/loyalty/v1/user/qr-code/qr-information"),method:"GET",authorization:o(),body:{qrCode:t}})},validateProduct:async e=>{let{qrCode:t,sku:n,mock:l=!0}=e;return l?((s+=1)>=i.length&&(s=0),{response:null,meta:{status:1e3},notification:{code:i[s]}}):await a({url:"".concat(r,"/api-v3/loyalty/v1/user/qr-code/scan-product/SBPS"),method:"POST",authorization:o(),body:{qrCode:t,sku:n}})}}},6514:function(e,t,n){"use strict";var a=n(2265);let r=a.forwardRef(function(e,t){let{title:n,titleId:r,...o}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},o),n?a.createElement("title",{id:r},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=r}},function(e){e.O(0,[788,173,971,23,744],function(){return e(e.s=4098)}),_N_E=e.O()}]);