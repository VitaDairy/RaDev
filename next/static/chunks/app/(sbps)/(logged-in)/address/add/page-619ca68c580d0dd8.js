(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[633],{5741:function(e,t,n){Promise.resolve().then(n.bind(n,6340))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return r.a}});var o=n(5601),r=n.n(o)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},getImageProps:function(){return l}});let o=n(9920),r=n(497),a=n(8173),i=o._(n(1241));function l(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let s=a.Image},6340:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var o=n(7437),r=n(2970),a=n(3056),i=n(3874),l=n(6463),s=n(2265);function u(){let e=(0,l.useRouter)(),{actionGetProvinces:t}=(0,a.Z)(),{phone:n,otp:u}=(0,a.Z)(),[c,h]=(0,s.useState)(null),[p,v]=(0,s.useState)(""),[m,g]=(0,s.useState)(""),[f,b]=(0,s.useState)(!0),[x,y]=(0,s.useState)({}),[w,N]=(0,s.useState)({name:"",phoneNumber:"",provinceId:0,districtId:0,wardId:0,address:"",errors:{}});return(0,s.useEffect)(()=>{t().then(e=>{h((null==e?void 0:e.provinces)||null),N(t=>{var n;return{...t,provinceId:null==e?void 0:null===(n=e.provinces[0])||void 0===n?void 0:n.id}})})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Z,{title:"Th\xeam địa chỉ",inputSearch:!1,showPoint:!1,showBack:!0}),(0,o.jsx)("div",{className:"flex flex-col pt-2 text-center"}),(0,o.jsx)(d,{handleChange:e=>{let{name:t,value:n,type:o,checked:r}=e.target;console.log("\uD83D\uDE80 ~ handleChange ~ name, value, type, checked:",t,n,o,r),"provinceId"===t&&(n=Number(n),i.ZP.getWardsAndDistricts({code:Number(n)}).then(e=>{var t,n,o;v((null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.provinces)||null);let r=null==e?void 0:null===(o=e.response)||void 0===o?void 0:null===(n=o.provinces[0])||void 0===n?void 0:n.id;i.ZP.getWardsAndDistricts({code:r}).then(e=>{var t;g((null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.provinces)||null),N(t=>{var n,o;return{...t,districtId:r,wardId:null==e?void 0:null===(o=e.response)||void 0===o?void 0:null===(n=o.provinces[0])||void 0===n?void 0:n.id}})})})),"districtId"===t&&(n=Number(n),i.ZP.getWardsAndDistricts({code:Number(n)}).then(e=>{var t,n,o;g((null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.provinces)||null);let r=null==e?void 0:null===(o=e.response)||void 0===o?void 0:null===(n=o.provinces[0])||void 0===n?void 0:n.id;N(e=>({...e,wardId:r}))})),"wardId"===t&&(n=Number(n)),N(e=>({...e,[t]:"checkbox"===o?r:n})),console.log("\uD83D\uDE80 ~ handleChange ~ ",!(""!==w.name&&""!==w.address&&0!==w.provinceId&&0!==w.districtId&&0!==w.wardId)),b(!(""!==w.name&&""!==w.address&&0!==w.provinceId&&0!==w.districtId&&0!==w.wardId))},district:p,formData:w,handleSubmit:t=>{w.phoneNumber=n,w.otp=u,i.ZP.addAddress(w).then(t=>{var n;(null==t?void 0:null===(n=t.meta)||void 0===n?void 0:n.status)===1e3&&e.push("/address")})},provinces:c,ward:m,isDisableButton:f},"123")]})}let d=e=>{let{handleChange:t,formData:n,provinces:r,district:a,ward:i,handleSubmit:l,isDisableButton:s}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"mt-15 w-full bg-white",children:[(0,o.jsxs)("div",{className:"pl-5 pr-5 bg-white",children:[(0,o.jsx)("label",{className:"block mb-2 text-sm font-medium text-neutral900 dark:text-neutral900 text-xs",children:"Nhập th\xf4ng tin địa chỉ:"}),(0,o.jsx)("label",{className:"block mb-2 text-sm font-normal text-neutral700 dark:text-neutral700 text-xs",children:"Vui l\xf2ng kiểm tra c\xe1c th\xf4ng tin ch\xednh x\xe1c trước khi bấm Lưu địa chỉ:"})]}),(0,o.jsx)("div",{}),(0,o.jsxs)("div",{className:"p-5",children:[(0,o.jsx)("div",{className:"",children:(0,o.jsx)("input",{type:"text",name:"name",className:"border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral text-xs font-normal pb-2",placeholder:"T\xean người nhận",onChange:t})}),(0,o.jsx)("div",{children:(0,o.jsx)("input",{type:"tel",name:"phoneNumber",value:n.password,onChange:t,className:"border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral text-xs pb-2",placeholder:"Số điện thoại"})}),(0,o.jsx)("div",{children:(0,o.jsxs)("select",{name:"provinceId",value:n.provinceId,onChange:t,className:"border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral text-xs font-normal pb-2",required:!0,children:[(0,o.jsx)("option",{value:"0",children:"Tỉnh/Th\xe0nh phố"}),r&&(null==r?void 0:r.filter(e=>e.id<100).map(e=>(0,o.jsx)("option",{value:e.id,children:e.name})))]})}),(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsxs)("select",{name:"districtId",value:n.districtId,onChange:t,className:"border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral text-xs font-normal pb-2",required:!0,children:[(0,o.jsx)("option",{value:"0",disabled:!0,children:"Quận/huyện"}),a&&(null==a?void 0:a.map(e=>(0,o.jsx)("option",{value:e.id,children:e.name})))]}),(0,o.jsxs)("select",{name:"wardId",value:n.wardId,onChange:t,className:"border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral text-xs font-normal pb-2",required:!0,children:[(0,o.jsx)("option",{value:"",disabled:!0,children:"X\xe3/Phường"}),i&&(null==i?void 0:i.map(e=>(0,o.jsx)("option",{value:e.id,children:e.name})))]})]}),(0,o.jsx)("div",{children:(0,o.jsx)("input",{name:"address",type:"text",value:n.address,className:"border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral text-xs pb-2",placeholder:"Địa chỉ cụ thể",onChange:t})}),(0,o.jsx)("button",{className:" ".concat(s?"bg-disabled opacity-50 cursor-not-allowed":"bg-gradient-button opacity-100"," font-bold py-2 px-4 rounded-full transition duration-300 min-w-full mt-5 bottom-0 left-0"),disabled:s,onClick:()=>{l()},children:"HO\xc0N TẤT"})]})]})})}},2970:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(7437),r=n(6514),a=n(2265);let i=a.forwardRef(function(e,t){let{title:n,titleId:o,...r}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},r),n?a.createElement("title",{id:o},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});var l=n(6648),s=n(6463),u=e=>{let{title:t,inputSearch:n=!0,showPoint:a=!0,showBack:u=!1,backUrl:d="",showInputVoucher:c=!1}=e,h=(0,s.useRouter)(),p=(0,s.usePathname)();return console.log("\uD83D\uDE80 ~ HeaderWithSearch ~ pathName:",p,p.startsWith("/noti")),(0,o.jsxs)("header",{className:"".concat(p.startsWith("/noti")?"bg-[#2CB6A3]":"bg-gradient-button","  p-4 relative"),children:[(0,o.jsx)("div",{className:"flex justify-between items-center"}),(0,o.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,o.jsxs)("h1",{className:"text-white text-[18px] font-semibold pt-1 flex",children:[u&&(0,o.jsx)(r.Z,{className:"w-6 h-6 text-white mt-1 mr-2 cursor-pointer",strokeWidth:2,onClick:()=>{if(d){h.push(d);return}h.back()}}),t]}),a&&(0,o.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,o.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,o.jsx)(l.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]}),c&&(0,o.jsx)("div",{className:"absolute right-4 px-2 py-1 flex items-center ",children:(0,o.jsx)("button",{onClick:()=>{h.push("/qr/detail")},children:(0,o.jsx)(l.default,{src:"/static/sbps/icons/input_voucher.svg",alt:"Notification",width:24,height:24})})})]}),n&&(0,o.jsx)("div",{className:"mt-6",children:(0,o.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,o.jsx)(i,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,o.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},3056:function(e,t,n){"use strict";var o=n(9099),r=n(9291),a=n(3874);let i=(0,o.Ue)()((0,r.tJ)((e,t)=>({user:null,auth:null,phone:null,otp:null,address:null,token:null,verifyPhone:null,source:null,isLoggedIn:!1,loginError:null,provinces:null,districts:null,wards:null,authorization:null,actionGetProvinces:async()=>{var n;if(t().provinces)return{provinces:t().provinces};let[o]=await Promise.all([a.ZP.getProvinces()]);return(null==o?void 0:null===(n=o.meta)||void 0===n?void 0:n.status)!==1e3?{provinces:null}:(e({provinces:o.response.provinces}),{provinces:o.response.provinces})},actionVerifyPhoneNumber:async t=>{let n=await a.ZP.verifyPhoneNumber(t);return e({verifyPhone:n,phone:t,source:n?"LOGIN":"REGISTER"}),{verifyPhone:n,phone:t,source:n?"LOGIN":"REGISTER"}},actionLogin:async(t,n)=>{try{var o,r;let i=await a.ZP.verifyPhoneNumber(t);if(console.log("\uD83D\uDE80 ~ actionLogin: ~ verifyPhoneNumber:",i),!i)return e({user:null,token:null,isLoggedIn:!1,loginError:"verify phone number false",phone:t,otp:n}),{user:null,token:null,isLoggedIn:!1,loginError:"verify phone number false"};let l=await a.ZP.login(t,n);if(console.log("\uD83D\uDE80 ~ actionLogin: ~ loginResp:",l),(null==l?void 0:null===(o=l.meta)||void 0===o?void 0:o.status)!==1e3)return e({user:null,token:null,isLoggedIn:!1,loginError:"Login failed",phone:t,otp:n}),{user:null,token:null,isLoggedIn:!1,loginError:"Login failed"};let{user:s,auth:u}=(null==l?void 0:l.response)||{};localStorage.setItem("token",u.accessToken);let d="Bearer ".concat(u.accessToken);e({user:s,token:u.accessToken,isLoggedIn:!0,loginError:null,auth:u,authorization:d});let[c]=await Promise.all([a.ZP.getAddress({auth:d})]),h=(null==c?void 0:null===(r=c.response)||void 0===r?void 0:r.recipientInfoList)||[];return e({address:h}),{user:s,token:t,isLoggedIn:!0,loginError:null}}catch(o){return console.log("\uD83D\uDE80 ~ login: ~ error:",o),e({user:null,token:null,isLoggedIn:!1,loginError:o.message||"Login failed",phone:t,otp:n}),{user:null,token:null,isLoggedIn:!1,loginError:o.message||"Login failed"}}},logout:()=>{localStorage.removeItem("login-storage"),console.log("\uD83D\uDE80 ~ logout: ~ localStorage:",localStorage),e({user:null,token:null,isLoggedIn:!1,loginError:null})}}),{name:"login-storage",storage:(0,r.FL)(()=>localStorage)}));t.Z=i},3874:function(e,t,n){"use strict";n.d(t,{ZP:function(){return s}});let o=async e=>{let{url:t,method:n,body:o,authorization:r,headers:a={}}=e;try{let e={"Content-Type":"application/json",...a};r&&(e.Authorization=r),("GET"===n||"DELETE"===n)&&(t="".concat(t,"?").concat(new URLSearchParams(o).toString()),o=void 0);let i=o?JSON.stringify(o):void 0,l=await fetch(t,{method:n,headers:e,body:i});return null==l?void 0:l.json()}catch(e){return console.log(e),{error:e,status:500}}},r="https://api-sandbox.vitadairyvietnam.vn",a=()=>{try{var e,t;let n=(null===(e=localStorage)||void 0===e?void 0:e.getItem("login-storage"))||"{}",o=JSON.parse(n);return(null==o?void 0:null===(t=o.state)||void 0===t?void 0:t.authorization)||""}catch(e){return null}},i=["2024_SBPS_OTO","2024_SBPS_IPHONE","2024_SBPS_10TR","2024_SBPS_5TR","2024_SBPS_THE20K","2024_SBPS_THE10K","2024_SBPS_CHUCMAYMAN","2024_SBPS_HETGIAI","SBPS_QR_USED"],l=0;var s={getUser:async()=>await o({url:"".concat(r,"/api-v3/loyalty/v1/user"),method:"GET",authorization:a()}),getNotificationUnread:async()=>await o({url:"".concat(r,"/api-v3/loyalty/v1/user/notification/unread-count"),method:"GET",authorization:a()}),getMyRewards:async()=>await o({url:"".concat(r,"/v4/gs/user-gifts"),method:"GET",authorization:a()}),sendOTP:async(e,t)=>"LOGIN"===t?(t="REGISTER",await o({url:"".concat(r,"/api/user/send-otp"),method:"POST",headers:{appversioncode:12,appversionname:"3.2.27"},body:{phoneNumber:e,type:"log_in_calosure"}})):await o({url:"".concat(r,"/api-v3/loyalty/send-zalo"),method:"POST",body:{phone:e,source:t},authorization:a()}),verifyOTP:async(e,t)=>await o({url:"".concat(r,"/api-v3/loyalty/verify-otp"),method:"POST",body:{phone:e,otp:t},authorization:a()}),getNotifications:async e=>{let{page:t=1,size:n=20}=e,i=await o({url:"".concat(r,"/api-v3/noti/user/noti"),method:"GET",authorization:a(),body:{page:t,size:n}});return console.log("\uD83D\uDE80 ~ getNotifications ~ response:",i),i},getDetailNotifications:async e=>{let{id:t,page:n=1,size:i=20}=e;return await o({url:"".concat(r,"/api-v3/noti/user/noti/").concat(t),method:"GET",authorization:a()})},readDetailNotifications:async e=>{let{id:t}=e;return await o({url:"".concat(r,"/api-v3/noti/user/noti/").concat(t,"/read"),method:"POST",authorization:a(),body:{id:t}})},getAddress:async e=>{let{auth:t}=e;return await o({url:"".concat(r,"/api/recipient/me"),method:"GET",authorization:t||a()})},logout:async()=>await o({url:"".concat(r,"/api/user/logout"),method:"POST",authorization:a()}),verifyPhoneNumber:async e=>await o({url:"".concat(r,"/api-v3/loyalty/v1/user/auth/check-phone-number"),method:"GET",authorization:a(),body:{phoneNumber:e}}),getProvinces:async()=>await o({url:"".concat(r,"/api/province/vn"),method:"GET",authorization:a()}),getWardsAndDistricts:async e=>{let{code:t}=e;return await o({url:"".concat(r,"/api/province/parent/").concat(t),method:"GET",authorization:a()})},register:async e=>await o({url:"".concat(r,"/api/user/register"),method:"POST",body:e,headers:{appversioncode:12,appversionname:"3.1.2",webapp_name:"SBPS"}}),login:async(e,t)=>await o({url:"".concat(r,"/api/user/login-calosure"),method:"POST",body:{phoneNumber:e,otp:t},headers:{appversioncode:2,appversionname:"3.2.10"}}),verifyBlockedScan:async()=>await o({url:"".concat(r,"/api-v3/loyalty/v1/user/blocked-scan"),method:"GET",authorization:a()}),getQrCode:async e=>{let{qrCode:t}=e;return await o({url:"".concat(r,"/api-v3/loyalty/v1/user/qr-code/qr-information"),method:"GET",authorization:a(),body:{qrCode:t}})},validateProduct:async e=>{let{qrCode:t,sku:n,mock:s=!0}=e;return s?((l+=1)>=i.length&&(l=0),{response:null,meta:{status:1e3},notification:{code:i[l]}}):await o({url:"".concat(r,"/api-v3/loyalty/v1/user/qr-code/scan-product/SBPS"),method:"POST",authorization:a(),body:{qrCode:t,sku:n}})}}},6514:function(e,t,n){"use strict";var o=n(2265);let r=o.forwardRef(function(e,t){let{title:n,titleId:r,...a}=e;return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},a),n?o.createElement("title",{id:r},n):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=r}},function(e){e.O(0,[173,461,971,23,744],function(){return e(e.s=5741)}),_N_E=e.O()}]);