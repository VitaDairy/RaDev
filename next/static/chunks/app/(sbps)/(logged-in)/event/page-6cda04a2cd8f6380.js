(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[867],{5777:function(e,t,a){Promise.resolve().then(a.bind(a,9690))},6648:function(e,t,a){"use strict";a.d(t,{default:function(){return o.a}});var n=a(5601),o=a.n(n)},6463:function(e,t,a){"use strict";var n=a(1169);a.o(n,"usePathname")&&a.d(t,{usePathname:function(){return n.usePathname}}),a.o(n,"useRouter")&&a.d(t,{useRouter:function(){return n.useRouter}}),a.o(n,"useSearchParams")&&a.d(t,{useSearchParams:function(){return n.useSearchParams}})},5601:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return l},getImageProps:function(){return s}});let n=a(9920),o=a(497),r=a(8173),i=n._(a(1241));function s(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let l=r.Image},9690:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=a(7437),o=a(2265);let r=o.forwardRef(function(e,t){let{title:a,titleId:n,...r}=e;return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},r),a?o.createElement("title",{id:n},a):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))});var i=a(6648);function s(e){let{image:t,name:a,link:o,code:s,onClick:l}=e;return(0,n.jsx)("div",{className:" bg-gray-50 ",children:(0,n.jsx)("div",{className:"flex flex-col bg-sureface02 rounded-lg shadow-lg overflow-hidden",children:(0,n.jsxs)("div",{className:"flex p-4 items-center",onClick:l,children:[(0,n.jsx)("div",{className:"flex-shrink-0 flex items-center",children:(0,n.jsx)(i.default,{src:t,alt:"image gift",width:44,height:44,className:"ml-2 rounded-full"})}),(0,n.jsxs)("div",{className:"ml-4 flex justify-between w-full items-center",children:[a&&(0,n.jsx)("p",{className:"font-medium text-xs text-neutral900",children:a}),(0,n.jsx)(r,{className:"h-4 w-4 text-neutral500 dark:text-neutral500 ",strokeWidth:2})]})]})})})}var l=a(506),c=a(3874),u=a(6463);function d(){let e=(0,u.useRouter)(),[t,a]=(0,o.useState)([]);return(0,o.useEffect)(()=>{c.ZP.getEvents().then(e=>{console.log("\uD83D\uDE80 ~ loyaltyService.getEvents ~ res:",e),a(e.response)})},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{title:"Giải tr\xed",inputSearch:!1,showPoint:!1,showBack:!0,backUrl:"/home"}),(0,n.jsx)("div",{className:"flex flex-col pt-2 text-center",children:(0,n.jsx)(s,{name:"RINH \xd4 T\xd4 RƯỚC IPHONE VỀ NH\xc0",image:"./static/sbps/banner/banner_event.jpeg",onClick:()=>{e.push("/event/detail")}})}),(0,n.jsx)("div",{className:"h-40"})]})}},506:function(e,t,a){"use strict";var n=a(7437),o=a(6514),r=a(4380),i=a(6648),s=a(6463);t.Z=e=>{let{title:t,inputSearch:a=!0,showPoint:l=!0,showBack:c=!1,backUrl:u="",showInputVoucher:d=!1,onClickShowInputVoucher:h}=e,m=(0,s.useRouter)(),p=(0,s.usePathname)();return(0,n.jsxs)("header",{className:"".concat(p.startsWith("/noti")?"bg-[#2CB6A3]":"bg-gradient-button","  p-4 relative"),children:[(0,n.jsx)("div",{className:"flex justify-between items-center"}),(0,n.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,n.jsxs)("h1",{className:"text-white text-[18px] font-semibold pt-1 flex items-center",children:[c&&(0,n.jsx)(o.Z,{className:"w-6 h-6 text-white mt-1 mr-2 cursor-pointer",strokeWidth:2,onClick:()=>{if(u){m.push(u);return}m.back()}}),t]}),l&&(0,n.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,n.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,n.jsx)(i.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]}),d&&(0,n.jsx)("div",{className:"absolute right-4 px-2 py-1 flex items-center ",children:(0,n.jsx)("button",{onClick:()=>{h&&h(),m.push("/qr/detail")},children:(0,n.jsx)(i.default,{src:"/static/sbps/icons/input_voucher.svg",alt:"Notification",width:24,height:24})})})]}),a&&(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,n.jsx)(r.Z,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,n.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},3874:function(e,t,a){"use strict";a.d(t,{ZP:function(){return c}});let n=async e=>{let{url:t,method:a,body:n,authorization:o,headers:r={}}=e;try{let e={"Content-Type":"application/json",...r};o&&(e.Authorization=o),("GET"===a||"DELETE"===a)&&(t="".concat(t,"?").concat(new URLSearchParams(n).toString()),n=void 0);let i=n?JSON.stringify(n):void 0,s=await fetch(t,{method:a,headers:e,body:i});return null==s?void 0:s.json()}catch(e){return console.log(e),{error:e,status:500}}},o="https://api-sandbox.vitadairyvietnam.vn",r=()=>{try{var e,t;let a=(null===(e=localStorage)||void 0===e?void 0:e.getItem("login-storage"))||"{}",n=JSON.parse(a);return(null==n?void 0:null===(t=n.state)||void 0===t?void 0:t.authorization)||""}catch(e){return null}},i=["2024_SBPS_OTO","2024_SBPS_IPHONE","2024_SBPS_10TR","2024_SBPS_5TR","2024_SBPS_THE20K","2024_SBPS_THE10K","2024_SBPS_CHUCMAYMAN","2024_SBPS_HETGIAI","SBPS_QR_USED"],s=0,l=async e=>{var t,a,i,s;let{page:l=0,size:c=10,body:u}=e,d=await n({url:"".concat(o,"/v4/gs/user-gifts"),method:"GET",authorization:r(),body:{page:0,size:c,...u}}),h=null==d?void 0:null===(a=d.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.data,m=[];for(let e=1;e<=(null==d?void 0:null===(s=d.response)||void 0===s?void 0:null===(i=s.data)||void 0===i?void 0:i.total);e+=1)m.push(n({url:"".concat(o,"/v4/gs/user-gifts"),method:"GET",authorization:r(),body:{page:e,size:10,...u}}).then(e=>{var t,a;h=h.concat(null==e?void 0:null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.data)}));return await Promise.all(m),d.response.data.data=h,d};var c={getUser:async()=>await n({url:"".concat(o,"/api-v3/loyalty/v1/user"),method:"GET",authorization:r()}),getNotificationUnread:async()=>await n({url:"".concat(o,"/api-v3/loyalty/v1/user/notification/unread-count"),method:"GET",authorization:r()}),getMyRewards:async()=>await n({url:"".concat(o,"/v4/gs/user-gifts"),method:"GET",authorization:r()}),sendOTP:async(e,t)=>"LOGIN"===t?(t="REGISTER",await n({url:"".concat(o,"/api/user/send-otp"),method:"POST",headers:{appversioncode:12,appversionname:"3.2.27"},body:{phoneNumber:e,type:"log_in_calosure"}})):await n({url:"".concat(o,"/api-v3/loyalty/send-zalo"),method:"POST",body:{phone:e,source:t},authorization:r()}),verifyOTP:async(e,t)=>await n({url:"".concat(o,"/api-v3/loyalty/verify-otp"),method:"POST",body:{phone:e,otp:t},authorization:r()}),getNotifications:async e=>{let{page:t=1,size:a=20}=e;return await n({url:"".concat(o,"/api-v3/noti/user/noti"),method:"GET",authorization:r(),body:{page:t,size:a}})},getDetailNotifications:async e=>{let{id:t,page:a=1,size:i=20}=e;return await n({url:"".concat(o,"/api-v3/noti/user/noti/").concat(t),method:"GET",authorization:r()})},readDetailNotifications:async e=>{let{id:t}=e;return await n({url:"".concat(o,"/api-v3/noti/user/noti/").concat(t,"/read"),method:"POST",authorization:r(),body:{id:t}})},getAddress:async e=>{let{auth:t}=e;return await n({url:"".concat(o,"/api/recipient/me"),method:"GET",authorization:t||r()})},logout:async()=>await n({url:"".concat(o,"/api/user/logout"),method:"POST",authorization:r()}),verifyPhoneNumber:async e=>await n({url:"".concat(o,"/api-v3/loyalty/v1/user/auth/check-phone-number"),method:"GET",authorization:r(),body:{phoneNumber:e}}),getProvinces:async()=>await n({url:"".concat(o,"/api/province/vn"),method:"GET",authorization:r()}),getWardsAndDistricts:async e=>{let{code:t}=e;return await n({url:"".concat(o,"/api/province/parent/").concat(t),method:"GET",authorization:r()})},register:async e=>await n({url:"".concat(o,"/api/user/register"),method:"POST",body:e,headers:{webappname:"WA_SBPS_24",appversioncode:12,appversionname:"3.1.2"}}),login:async(e,t)=>await n({url:"".concat(o,"/api/user/login-calosure"),method:"POST",body:{phoneNumber:e,otp:t},headers:{appversioncode:2,appversionname:"3.2.10"}}),verifyBlockedScan:async()=>await n({url:"".concat(o,"/api-v3/loyalty/v1/user/blocked-scan"),method:"GET",authorization:r()}),getQrCode:async e=>{let{qrCode:t}=e;return await n({url:"".concat(o,"/api-v3/loyalty/v1/user/qr-code/qr-information"),method:"GET",authorization:r(),body:{qrCode:t},headers:{appversioncode:12,appversionname:"3.1.2",webappname:"WA_SBPS_24"}})},validateProduct:async e=>{let{qrCode:t,sku:a,mock:l=!0}=e;return l?((s+=1)>=i.length&&(s=0),{response:null,meta:{status:1e3},notification:{code:i[s]}}):await n({url:"".concat(o,"/api-v3/loyalty/v1/user/qr-code/scan-product/SBPS"),method:"POST",authorization:r(),body:{qrCode:t,sku:a},headers:{Accept:"application/json",appversionname:"3.2.23",webappname:"WA_SBPS_24"}})},getGifts:async()=>await l({page:0,size:15,body:{giftTypes:"GIFT",statuses:"PENDING,EXCHANGED"}}),getVouchers:async()=>l({page:0,size:15,body:{giftTypes:"E_VOUCHER,E_VOUCHER_SHOP,E_VOUCHER_SHOP_BKIDS,EV_VITA_CODE"}}),getAlls:l,orderGift:async e=>{let{recipientSnapshot:t,userGiftSnapshot:a,userId:i}=e;return await n({url:"".concat(o,"/v4/os/orders"),method:"POST",body:{recipientSnapshot:t,userGiftSnapshot:a,userId:i},authorization:r()})},getEvents:async()=>await n({url:"".concat(o,"/api/system-feature"),method:"GET",body:{group:"WHEEL"},authorization:r(),headers:{appversioncode:1,appversionname:"3.0.21",webappname:"WA_SBPS_24"}})}},6514:function(e,t,a){"use strict";var n=a(2265);let o=n.forwardRef(function(e,t){let{title:a,titleId:o,...r}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},r),a?n.createElement("title",{id:o},a):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=o},4380:function(e,t,a){"use strict";var n=a(2265);let o=n.forwardRef(function(e,t){let{title:a,titleId:o,...r}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},r),a?n.createElement("title",{id:o},a):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});t.Z=o}},function(e){e.O(0,[173,971,23,744],function(){return e(e.s=5777)}),_N_E=e.O()}]);