(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[866],{8491:function(e,t,a){Promise.resolve().then(a.bind(a,8189))},6648:function(e,t,a){"use strict";a.d(t,{default:function(){return s.a}});var n=a(5601),s=a.n(n)},6463:function(e,t,a){"use strict";var n=a(1169);a.o(n,"usePathname")&&a.d(t,{usePathname:function(){return n.usePathname}}),a.o(n,"useRouter")&&a.d(t,{useRouter:function(){return n.useRouter}}),a.o(n,"useSearchParams")&&a.d(t,{useSearchParams:function(){return n.useSearchParams}})},5601:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return l},getImageProps:function(){return o}});let n=a(9920),s=a(497),r=a(8173),i=n._(a(1241));function o(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let l=r.Image},8189:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=a(7437),s=a(6648);function r(e){let{title:t,value:a,code:r,status:i,network:o,expiryDate:l,rewardDate:c,image:u,type:d="voucher"}=e;return(0,n.jsxs)("div",{className:"flex items-center justify-between bg-white rounded-lg shadow-md mb-4 pb-2 pr-1",children:[(0,n.jsx)("div",{className:"flex-shrink-0",children:(0,n.jsx)(s.default,{src:u,alt:"Thẻ điện thoại",className:"w-16 h-16 rounded-full",width:80,height:80})}),"voucher"===d&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"ml-4 flex-1",children:[(0,n.jsx)("h3",{className:"text-xs font-semibold text-neutral900 ",children:t}),(0,n.jsxs)("p",{className:"text-sm text-neutral700",children:["Gi\xe1 trị: ",a]}),(0,n.jsxs)("p",{className:"text-8 text-neutral700",children:["Ng\xe0y tr\xfang thưởng: ",c]}),(0,n.jsxs)("p",{className:"text-8 font-mono mt-2 text-neutral700",children:["M\xe3 thẻ c\xe0o: ",r]})]}),(0,n.jsxs)("div",{className:"text-right flex flex-col",children:[(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"inline-block px-3 py-1 rounded-sm text-8 font-normal border border-voucher ".concat("text-voucher"),children:i})}),(0,n.jsxs)("p",{className:"text-8 text-neutral700 mt-1",children:["Nh\xe0 mạng: ",o]}),(0,n.jsxs)("p",{className:"text-8  text-neutral700",children:["Ng\xe0y hết hạn: ",l]}),(0,n.jsxs)("button",{className:"mt-2 bg-neutral50 text-blue-500 px-3 py-1 rounded-lg text-xs flex items-center",children:[(0,n.jsx)(s.default,{src:"/static/sbps/icons/use.svg",alt:"Copy",width:14,height:14}),"Copy m\xe3 thẻ"]})]})]}),"gift"===d&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"ml-4 flex-1",children:[(0,n.jsx)("h3",{className:"text-xs font-semibold text-neutral900 ",children:t}),(0,n.jsxs)("p",{className:"text-sm text-neutral700",children:["Gi\xe1 trị: ",a]}),(0,n.jsxs)("p",{className:"text-8 text-neutral700",children:["Ng\xe0y tr\xfang thưởng: ",c]}),(0,n.jsxs)("p",{className:"text-8 font-mono mt-2 text-neutral700",children:["M\xe3 thẻ c\xe0o: ",r]})]}),(0,n.jsxs)("div",{className:"text-right flex flex-col",children:[(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"inline-block px-3 py-1 rounded-sm text-8 font-normal border border-voucher ".concat("text-voucher"),children:i})}),(0,n.jsxs)("p",{className:"text-8 text-neutral700 mt-1",children:["Nh\xe0 mạng: ",o]}),(0,n.jsxs)("p",{className:"text-8  text-neutral700",children:["Ng\xe0y hết hạn: ",l]}),(0,n.jsxs)("button",{className:"mt-2 bg-neutral50 text-blue-500 px-3 py-1 rounded-lg text-xs flex items-center",children:[(0,n.jsx)(s.default,{src:"/static/sbps/icons/use.svg",alt:"Copy",width:14,height:14}),"Copy m\xe3 thẻ"]})]})]})]})}var i=a(506),o=a(3874),l=a(6463),c=a(2265);function u(){let[e,t]=(0,c.useState)();(0,l.useRouter)();let a=(0,l.useSearchParams)().get("tab");return(0,c.useEffect)(()=>{o.ZP.getNotifications({page:1}).then(e=>{t(e.response)})},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{title:"Qu\xe0 của t\xf4i",inputSearch:!1,showPoint:!1,showBack:!0}),(0,n.jsx)(d,{tabs:["gifts","evoucher"],tab:a}),(0,n.jsx)("div",{className:"flex flex-col pt-2 text-center"}),(0,n.jsx)("div",{className:"p-2 bg-gray-50 min-h-screen",children:(0,n.jsx)("div",{className:"bg-white p-2 rounded-lg shadow-lg",children:[{title:"Thẻ điện thoại 20.00đ",value:"10.000đ",image:"/static/sbps/gift/20k.png",code:"012345678987654",status:"Thẻ c\xe0o th\xe0nh c\xf4ng",network:"Vinaphone",expiryDate:"12/11/2024",rewardDate:"12/11/2024"},{title:"Thẻ điện thoại 10.00đ",value:"10.000đ",image:"/static/sbps/gift/20k.png",code:"012345678987654",status:"Thẻ c\xe0o th\xe0nh c\xf4ng",network:"Vinaphone",expiryDate:"12/11/2024",rewardDate:"12/11/2024"},{title:"Thẻ điện thoại 10.00đ",value:"10.000đ",image:"/static/sbps/gift/20k.png",code:"012345678987654",status:"Chưa sử dụng",network:"Vinaphone",expiryDate:"12/11/2024",rewardDate:"12/11/2024",type:"voucher"},{title:"Thẻ điện thoại 10.00đ",value:"10.000đ",image:"/static/sbps/gift/20k.png",code:"012345678987654",status:"Chưa sử dụng",network:"Vinaphone",expiryDate:"12/11/2024",rewardDate:"12/11/2024",type:"gift"}].map((e,t)=>(0,n.jsx)(r,{...e},t))})}),(0,n.jsx)("div",{className:"h-40"})]})}let d=e=>{let{tab:t="gift"}=e,[a,s]=(0,c.useState)("gifts"),r=(0,l.useRouter)();return(0,n.jsxs)("div",{className:"flex justify-between border-b",children:[(0,n.jsxs)("button",{className:"flex-1 text-center p-4 ".concat("gifts"===a?"text-blue-500 border-b-2 border-green-400":"text-gray-400"),onClick:()=>{s("gifts"),r.push("/gift?tab=gifts")},children:["Qu\xe0 tặng",(0,n.jsx)("span",{className:"ml-2 inline-block bg-red-500 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center",children:"6"})]}),(0,n.jsxs)("button",{className:"flex-1 text-center p-4 ".concat("evoucher"===a?"text-blue-500 border-b-2 border-green-400":"text-gray-400"),onClick:()=>{r.push("/gift?tab=evoucher"),s("evoucher")},children:["E-voucher",(0,n.jsx)("span",{className:"ml-2 inline-block bg-red-500 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center",children:"2"})]})]})}},506:function(e,t,a){"use strict";var n=a(7437),s=a(6514),r=a(4380),i=a(6648),o=a(6463);t.Z=e=>{let{title:t,inputSearch:a=!0,showPoint:l=!0,showBack:c=!1,backUrl:u="",showInputVoucher:d=!1}=e,h=(0,o.useRouter)(),m=(0,o.usePathname)();return console.log("\uD83D\uDE80 ~ HeaderWithSearch ~ pathName:",m,m.startsWith("/noti")),(0,n.jsxs)("header",{className:"".concat(m.startsWith("/noti")?"bg-[#2CB6A3]":"bg-gradient-button","  p-4 relative"),children:[(0,n.jsx)("div",{className:"flex justify-between items-center"}),(0,n.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,n.jsxs)("h1",{className:"text-white text-[18px] font-semibold pt-1 flex",children:[c&&(0,n.jsx)(s.Z,{className:"w-6 h-6 text-white mt-1 mr-2 cursor-pointer",strokeWidth:2,onClick:()=>{if(u){h.push(u);return}h.back()}}),t]}),l&&(0,n.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,n.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,n.jsx)(i.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]}),d&&(0,n.jsx)("div",{className:"absolute right-4 px-2 py-1 flex items-center ",children:(0,n.jsx)("button",{onClick:()=>{h.push("/qr/detail")},children:(0,n.jsx)(i.default,{src:"/static/sbps/icons/input_voucher.svg",alt:"Notification",width:24,height:24})})})]}),a&&(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,n.jsx)(r.Z,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,n.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},3874:function(e,t,a){"use strict";a.d(t,{ZP:function(){return l}});let n=async e=>{let{url:t,method:a,body:n,authorization:s,headers:r={}}=e;try{let e={"Content-Type":"application/json",...r};s&&(e.Authorization=s),("GET"===a||"DELETE"===a)&&(t="".concat(t,"?").concat(new URLSearchParams(n).toString()),n=void 0);let i=n?JSON.stringify(n):void 0,o=await fetch(t,{method:a,headers:e,body:i});return null==o?void 0:o.json()}catch(e){return console.log(e),{error:e,status:500}}},s="https://api-sandbox.vitadairyvietnam.vn",r=()=>{try{var e,t;let a=(null===(e=localStorage)||void 0===e?void 0:e.getItem("login-storage"))||"{}",n=JSON.parse(a);return(null==n?void 0:null===(t=n.state)||void 0===t?void 0:t.authorization)||""}catch(e){return null}},i=["2024_SBPS_OTO","2024_SBPS_IPHONE","2024_SBPS_10TR","2024_SBPS_5TR","2024_SBPS_THE20K","2024_SBPS_THE10K","2024_SBPS_CHUCMAYMAN","2024_SBPS_HETGIAI","SBPS_QR_USED"],o=0;var l={getUser:async()=>await n({url:"".concat(s,"/api-v3/loyalty/v1/user"),method:"GET",authorization:r()}),getNotificationUnread:async()=>await n({url:"".concat(s,"/api-v3/loyalty/v1/user/notification/unread-count"),method:"GET",authorization:r()}),getMyRewards:async()=>await n({url:"".concat(s,"/v4/gs/user-gifts"),method:"GET",authorization:r()}),sendOTP:async(e,t)=>"LOGIN"===t?(t="REGISTER",await n({url:"".concat(s,"/api/user/send-otp"),method:"POST",headers:{appversioncode:12,appversionname:"3.2.27"},body:{phoneNumber:e,type:"log_in_calosure"}})):await n({url:"".concat(s,"/api-v3/loyalty/send-zalo"),method:"POST",body:{phone:e,source:t},authorization:r()}),verifyOTP:async(e,t)=>await n({url:"".concat(s,"/api-v3/loyalty/verify-otp"),method:"POST",body:{phone:e,otp:t},authorization:r()}),getNotifications:async e=>{let{page:t=1,size:a=20}=e,i=await n({url:"".concat(s,"/api-v3/noti/user/noti"),method:"GET",authorization:r(),body:{page:t,size:a}});return console.log("\uD83D\uDE80 ~ getNotifications ~ response:",i),i},getDetailNotifications:async e=>{let{id:t,page:a=1,size:i=20}=e;return await n({url:"".concat(s,"/api-v3/noti/user/noti/").concat(t),method:"GET",authorization:r()})},readDetailNotifications:async e=>{let{id:t}=e;return await n({url:"".concat(s,"/api-v3/noti/user/noti/").concat(t,"/read"),method:"POST",authorization:r(),body:{id:t}})},getAddress:async e=>{let{auth:t}=e;return await n({url:"".concat(s,"/api/recipient/me"),method:"GET",authorization:t||r()})},logout:async()=>await n({url:"".concat(s,"/api/user/logout"),method:"POST",authorization:r()}),verifyPhoneNumber:async e=>await n({url:"".concat(s,"/api-v3/loyalty/v1/user/auth/check-phone-number"),method:"GET",authorization:r(),body:{phoneNumber:e}}),getProvinces:async()=>await n({url:"".concat(s,"/api/province/vn"),method:"GET",authorization:r()}),getWardsAndDistricts:async e=>{let{code:t}=e;return await n({url:"".concat(s,"/api/province/parent/").concat(t),method:"GET",authorization:r()})},register:async e=>await n({url:"".concat(s,"/api/user/register"),method:"POST",body:e,headers:{appversioncode:12,appversionname:"3.1.2",webapp_name:"SBPS"}}),login:async(e,t)=>await n({url:"".concat(s,"/api/user/login-calosure"),method:"POST",body:{phoneNumber:e,otp:t},headers:{appversioncode:2,appversionname:"3.2.10"}}),verifyBlockedScan:async()=>await n({url:"".concat(s,"/api-v3/loyalty/v1/user/blocked-scan"),method:"GET",authorization:r()}),getQrCode:async e=>{let{qrCode:t}=e;return await n({url:"".concat(s,"/api-v3/loyalty/v1/user/qr-code/qr-information"),method:"GET",authorization:r(),body:{qrCode:t}})},validateProduct:async e=>{let{qrCode:t,sku:a,mock:l=!0}=e;return l?((o+=1)>=i.length&&(o=0),{response:null,meta:{status:1e3},notification:{code:i[o]}}):await n({url:"".concat(s,"/api-v3/loyalty/v1/user/qr-code/scan-product/SBPS"),method:"POST",authorization:r(),body:{qrCode:t,sku:a}})}}},6514:function(e,t,a){"use strict";var n=a(2265);let s=n.forwardRef(function(e,t){let{title:a,titleId:s,...r}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),a?n.createElement("title",{id:s},a):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=s},4380:function(e,t,a){"use strict";var n=a(2265);let s=n.forwardRef(function(e,t){let{title:a,titleId:s,...r}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),a?n.createElement("title",{id:s},a):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});t.Z=s}},function(e){e.O(0,[173,971,23,744],function(){return e(e.s=8491)}),_N_E=e.O()}]);