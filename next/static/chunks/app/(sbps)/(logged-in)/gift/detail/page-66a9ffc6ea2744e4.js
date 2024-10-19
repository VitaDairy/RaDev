(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65],{1553:function(t,e,a){Promise.resolve().then(a.bind(a,4307))},6648:function(t,e,a){"use strict";a.d(e,{default:function(){return o.a}});var n=a(5601),o=a.n(n)},6463:function(t,e,a){"use strict";var n=a(1169);a.o(n,"usePathname")&&a.d(e,{usePathname:function(){return n.usePathname}}),a.o(n,"useRouter")&&a.d(e,{useRouter:function(){return n.useRouter}}),a.o(n,"useSearchParams")&&a.d(e,{useSearchParams:function(){return n.useSearchParams}})},5601:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var a in e)Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}(e,{default:function(){return c},getImageProps:function(){return s}});let n=a(9920),o=a(497),r=a(8173),i=n._(a(1241));function s(t){let{props:e}=(0,o.getImgProps)(t,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[t,a]of Object.entries(e))void 0===a&&delete e[t];return{props:e}}let c=r.Image},4307:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return c}});var n=a(7437),o=a(506),r=a(3874),i=a(6463),s=a(2265);function c(){let t=(0,i.useSearchParams)().get("id"),[e,a]=(0,s.useState)();return(0,s.useEffect)(()=>{r.ZP.getDetailNotifications({id:t}).then(e=>{var n;(null==e?void 0:null===(n=e.response)||void 0===n?void 0:n.readAt)||r.ZP.readDetailNotifications({id:t}),a(e.response)})},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{title:null==e?void 0:e.title,inputSearch:!1,showPoint:!1,showBack:!0}),(0,n.jsx)("div",{className:"flex flex-col p-2 text-center",children:(0,n.jsx)("div",{className:"text-sm text-black font-light block text-left",children:null==e?void 0:e.content})})]})}},506:function(t,e,a){"use strict";var n=a(7437),o=a(6514),r=a(4380),i=a(6648),s=a(6463);e.Z=t=>{let{title:e,inputSearch:a=!0,showPoint:c=!0,showBack:l=!1,backUrl:u="",showInputVoucher:d=!1}=t,h=(0,s.useRouter)(),m=(0,s.usePathname)();return(0,n.jsxs)("header",{className:"".concat(m.startsWith("/noti")?"bg-[#2CB6A3]":"bg-gradient-button","  p-4 relative"),children:[(0,n.jsx)("div",{className:"flex justify-between items-center"}),(0,n.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,n.jsxs)("h1",{className:"text-white text-[18px] font-semibold pt-1 flex",children:[l&&(0,n.jsx)(o.Z,{className:"w-6 h-6 text-white mt-1 mr-2 cursor-pointer",strokeWidth:2,onClick:()=>{if(u){h.push(u);return}h.back()}}),e]}),c&&(0,n.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,n.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,n.jsx)(i.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]}),d&&(0,n.jsx)("div",{className:"absolute right-4 px-2 py-1 flex items-center ",children:(0,n.jsx)("button",{onClick:()=>{h.push("/qr/detail")},children:(0,n.jsx)(i.default,{src:"/static/sbps/icons/input_voucher.svg",alt:"Notification",width:24,height:24})})})]}),a&&(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,n.jsx)(r.Z,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,n.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},3874:function(t,e,a){"use strict";a.d(e,{ZP:function(){return c}});let n=async t=>{let{url:e,method:a,body:n,authorization:o,headers:r={}}=t;try{let t={"Content-Type":"application/json",...r};o&&(t.Authorization=o),("GET"===a||"DELETE"===a)&&(e="".concat(e,"?").concat(new URLSearchParams(n).toString()),n=void 0);let i=n?JSON.stringify(n):void 0,s=await fetch(e,{method:a,headers:t,body:i});return null==s?void 0:s.json()}catch(t){return console.log(t),{error:t,status:500}}},o="https://api-sandbox.vitadairyvietnam.vn",r=()=>{try{var t,e;let a=(null===(t=localStorage)||void 0===t?void 0:t.getItem("login-storage"))||"{}",n=JSON.parse(a);return(null==n?void 0:null===(e=n.state)||void 0===e?void 0:e.authorization)||""}catch(t){return null}},i=["2024_SBPS_OTO","2024_SBPS_IPHONE","2024_SBPS_10TR","2024_SBPS_5TR","2024_SBPS_THE20K","2024_SBPS_THE10K","2024_SBPS_CHUCMAYMAN","2024_SBPS_HETGIAI","SBPS_QR_USED"],s=0;var c={getUser:async()=>await n({url:"".concat(o,"/api-v3/loyalty/v1/user"),method:"GET",authorization:r()}),getNotificationUnread:async()=>await n({url:"".concat(o,"/api-v3/loyalty/v1/user/notification/unread-count"),method:"GET",authorization:r()}),getMyRewards:async()=>await n({url:"".concat(o,"/v4/gs/user-gifts"),method:"GET",authorization:r()}),sendOTP:async(t,e)=>"LOGIN"===e?(e="REGISTER",await n({url:"".concat(o,"/api/user/send-otp"),method:"POST",headers:{appversioncode:12,appversionname:"3.2.27"},body:{phoneNumber:t,type:"log_in_calosure"}})):await n({url:"".concat(o,"/api-v3/loyalty/send-zalo"),method:"POST",body:{phone:t,source:e},authorization:r()}),verifyOTP:async(t,e)=>await n({url:"".concat(o,"/api-v3/loyalty/verify-otp"),method:"POST",body:{phone:t,otp:e},authorization:r()}),getNotifications:async t=>{let{page:e=1,size:a=20}=t,i=await n({url:"".concat(o,"/api-v3/noti/user/noti"),method:"GET",authorization:r(),body:{page:e,size:a}});return console.log("\uD83D\uDE80 ~ getNotifications ~ response:",i),i},getDetailNotifications:async t=>{let{id:e,page:a=1,size:i=20}=t;return await n({url:"".concat(o,"/api-v3/noti/user/noti/").concat(e),method:"GET",authorization:r()})},readDetailNotifications:async t=>{let{id:e}=t;return await n({url:"".concat(o,"/api-v3/noti/user/noti/").concat(e,"/read"),method:"POST",authorization:r(),body:{id:e}})},getAddress:async t=>{let{auth:e}=t;return await n({url:"".concat(o,"/api/recipient/me"),method:"GET",authorization:e||r()})},logout:async()=>await n({url:"".concat(o,"/api/user/logout"),method:"POST",authorization:r()}),verifyPhoneNumber:async t=>await n({url:"".concat(o,"/api-v3/loyalty/v1/user/auth/check-phone-number"),method:"GET",authorization:r(),body:{phoneNumber:t}}),getProvinces:async()=>await n({url:"".concat(o,"/api/province/vn"),method:"GET",authorization:r()}),getWardsAndDistricts:async t=>{let{code:e}=t;return await n({url:"".concat(o,"/api/province/parent/").concat(e),method:"GET",authorization:r()})},register:async t=>await n({url:"".concat(o,"/api/user/register"),method:"POST",body:t,headers:{appversioncode:12,appversionname:"3.1.2",webapp_name:"SBPS"}}),login:async(t,e)=>await n({url:"".concat(o,"/api/user/login-calosure"),method:"POST",body:{phoneNumber:t,otp:e},headers:{appversioncode:2,appversionname:"3.2.10"}}),verifyBlockedScan:async()=>await n({url:"".concat(o,"/api-v3/loyalty/v1/user/blocked-scan"),method:"GET",authorization:r()}),getQrCode:async t=>{let{qrCode:e}=t;return await n({url:"".concat(o,"/api-v3/loyalty/v1/user/qr-code/qr-information"),method:"GET",authorization:r(),body:{qrCode:e}})},validateProduct:async t=>{let{qrCode:e,sku:a,mock:c=!0}=t;return c?((s+=1)>=i.length&&(s=0),{response:null,meta:{status:1e3},notification:{code:i[s]}}):await n({url:"".concat(o,"/api-v3/loyalty/v1/user/qr-code/scan-product/SBPS"),method:"POST",authorization:r(),body:{qrCode:e,sku:a}})}}},6514:function(t,e,a){"use strict";var n=a(2265);let o=n.forwardRef(function(t,e){let{title:a,titleId:o,...r}=t;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":o},r),a?n.createElement("title",{id:o},a):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});e.Z=o},4380:function(t,e,a){"use strict";var n=a(2265);let o=n.forwardRef(function(t,e){let{title:a,titleId:o,...r}=t;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":o},r),a?n.createElement("title",{id:o},a):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});e.Z=o}},function(t){t.O(0,[173,971,23,744],function(){return t(t.s=1553)}),_N_E=t.O()}]);