(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[208],{4949:function(e,t,n){Promise.resolve().then(n.bind(n,2295))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return r.a}});var o=n(5601),r=n.n(o)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},getImageProps:function(){return l}});let o=n(9920),r=n(497),a=n(8173),i=o._(n(1241));function l(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let s=a.Image},2295:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var o=n(7437),r=n(3056),a=n(2265);let i=a.forwardRef(function(e,t){let{title:n,titleId:o,...r}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},r),n?a.createElement("title",{id:o},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))});var l=n(6463);function s(){let{address:e}=(0,r.Z)();return(0,l.useRouter)(),(0,o.jsx)("div",{className:"max-w-lg mx-auto w-full",children:null==e?void 0:e.map(e=>(0,o.jsxs)("div",{className:"bg-white p-2 rounded-lg shadow-md space-y-2",children:[(0,o.jsxs)("div",{className:"flex justify-between items-center",children:[(0,o.jsxs)("div",{className:"",children:[(0,o.jsxs)("span",{className:"text-sm font-normal text-neutral900",children:[e.name," - ",e.phone]}),e.isDefault&&(0,o.jsx)("span",{className:"text-green-500 text-sm",children:"[Mặc định]"})]}),(0,o.jsx)("div",{className:"flex items-center space-x-2",children:(0,o.jsx)(i,{className:"w-6 h-6 text-gray-400"})})]}),(0,o.jsxs)("p",{className:"text-neutral700 font-normal text-xs text-left",children:[e.address," - ",e.wardName," - ",e.districtName," - ",e.provinceName]})]}))})}var u=n(2970);function c(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.Z,{title:"Địa chỉ của t\xf4i",inputSearch:!1,showPoint:!1,showBack:!0,backUrl:"/home"}),(0,o.jsx)("div",{className:"flex flex-col pt-2 text-center",children:(0,o.jsx)(s,{})})]})}},2970:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(7437),r=n(6514),a=n(2265);let i=a.forwardRef(function(e,t){let{title:n,titleId:o,...r}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},r),n?a.createElement("title",{id:o},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});var l=n(6648),s=n(6463),u=e=>{let{title:t,inputSearch:n=!0,showPoint:a=!0,showBack:u=!1,backUrl:c=""}=e,d=(0,s.useRouter)(),h=(0,s.usePathname)();return console.log("\uD83D\uDE80 ~ HeaderWithSearch ~ pathName:",h,h.startsWith("/noti")),(0,o.jsxs)("header",{className:"".concat(h.startsWith("/noti")?"bg-[#2CB6A3]":"bg-gradient-button","  p-4 relative"),children:[(0,o.jsx)("div",{className:"flex justify-between items-center"}),(0,o.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,o.jsxs)("h1",{className:"text-white text-[18px] font-semibold pt-1 flex",children:[u&&(0,o.jsx)(r.Z,{className:"w-6 h-6 text-white mt-1 mr-2 cursor-pointer",strokeWidth:2,onClick:()=>{if(c){d.push(c);return}d.back()}}),t]}),a&&(0,o.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,o.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,o.jsx)(l.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]})]}),n&&(0,o.jsx)("div",{className:"mt-6",children:(0,o.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,o.jsx)(i,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,o.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},3056:function(e,t,n){"use strict";var o=n(9099),r=n(9291),a=n(3874);let i=(0,o.Ue)()((0,r.tJ)((e,t)=>({user:null,phone:null,otp:null,address:null,token:null,verifyPhone:null,source:null,isLoggedIn:!1,loginError:null,provinces:null,districts:null,wards:null,actionGetProvinces:async()=>{var n;if(t().provinces)return{provinces:t().provinces};let[o]=await Promise.all([a.ZP.getProvinces()]);return(null==o?void 0:null===(n=o.meta)||void 0===n?void 0:n.status)!==1e3?{provinces:null}:(e({provinces:o.response.provinces}),{provinces:o.response.provinces})},actionVerifyPhoneNumber:async t=>{let n=await a.ZP.verifyPhoneNumber(t);return e({verifyPhone:n,phone:t,source:n?"FORGOT_PASSWORD":"REGISTER"}),{verifyPhone:n,phone:t,source:n?"FORGOT_PASSWORD":"REGISTER"}},actionLogin:async(t,n)=>{try{var o,r,i,l;let s=await a.ZP.verifyOTP(t,n);if(console.log("\uD83D\uDE80 ~ actionLogin: ~ verifyOTPResp:",s),(null==s?void 0:null===(o=s.meta)||void 0===o?void 0:o.status)!==1e3)return e({user:null,token:null,isLoggedIn:!1,loginError:"OTP verification failed",phone:t,otp:n}),{user:null,token:null,isLoggedIn:!1,loginError:"OTP verification failed"};let u=await a.ZP.verifyPhoneNumber(t);if(console.log("\uD83D\uDE80 ~ actionLogin: ~ verifyPhoneNumber:",u),!u)return e({user:null,token:null,isLoggedIn:!1,loginError:"verify phone number false",phone:t,otp:n}),{user:null,token:null,isLoggedIn:!1,loginError:"verify phone number false"};let[c,d]=await Promise.all([a.ZP.getUser(),a.ZP.getAddress()]);if((null==c?void 0:null===(r=c.meta)||void 0===r?void 0:r.status)!==1e3||(null==c?void 0:null===(i=c.response)||void 0===i?void 0:i.user)===null)return e({user:null,token:null,isLoggedIn:!1,loginError:"User not found",phone:t,otp:n}),{user:null,token:null,isLoggedIn:!1,loginError:"User not found"};let h=(null==d?void 0:null===(l=d.response)||void 0===l?void 0:l.recipientInfoList)||[],m=c.response.user;return e({user:m,token:t,address:h,isLoggedIn:!0,loginError:null,phone:t,otp:n}),{user:m,token:t,isLoggedIn:!0,loginError:null}}catch(o){return console.log("\uD83D\uDE80 ~ login: ~ error:",o),e({user:null,token:null,isLoggedIn:!1,loginError:o.message||"Login failed",phone:t,otp:n}),{user:null,token:null,isLoggedIn:!1,loginError:o.message||"Login failed"}}},logout:()=>{localStorage.removeItem("login-storage"),console.log("\uD83D\uDE80 ~ logout: ~ localStorage:",localStorage),e({user:null,token:null,isLoggedIn:!1,loginError:null})}}),{name:"login-storage",storage:(0,r.FL)(()=>localStorage)}));t.Z=i},3874:function(e,t,n){"use strict";n.d(t,{ZP:function(){return i}});let o=async e=>{let{url:t,method:n,body:o,authorization:r,headers:a={}}=e;try{let e={"Content-Type":"application/json",...a};r&&(e.Authorization=r),("GET"===n||"DELETE"===n)&&(t="".concat(t,"?").concat(new URLSearchParams(o).toString()),o=void 0);let i=o?JSON.stringify(o):void 0,l=await fetch(t,{method:n,headers:e,body:i});return null==l?void 0:l.json()}catch(e){return console.log(e),{error:e,status:500}}},r="https://api-sandbox.vitadairyvietnam.vn",a="Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzUzNDMiLCJVc2VyVHlwZSI6IlVTRVIiLCJpYXQiOjE3MjcxNTMxMTMsImV4cCI6MjA4NzE1MzExM30.sChGO98hUx0_6rsiHf5ItqeoYR-aviRkKy7ksM8Gyy6EXSUMaL6BThGl_QuDrb3tHda-poDaLck2v3CSR7J7ZQ";var i={getUser:async()=>await o({url:"".concat(r,"/api-v3/loyalty/v1/user"),method:"GET",authorization:a}),getNotificationUnread:async()=>await o({url:"".concat(r,"/api-v3/loyalty/v1/user/notification/unread-count"),method:"GET",authorization:a}),getMyRewards:async()=>await o({url:"".concat(r,"/v4/gs/user-gifts"),method:"GET",authorization:a}),sendOTP:async(e,t)=>await o({url:"".concat(r,"/api-v3/loyalty/send-zalo"),method:"POST",body:{phone:e,source:t},authorization:a}),verifyOTP:async(e,t)=>await o({url:"".concat(r,"/api-v3/loyalty/verify-otp"),method:"POST",body:{phone:e,otp:t},authorization:a}),getNotifications:async e=>{let{page:t=1,size:n=20}=e;return await o({url:"".concat(r,"/api-v3/noti/user/noti"),method:"GET",authorization:a,body:{page:t,size:n}})},getDetailNotifications:async e=>{let{id:t,page:n=1,size:i=20}=e;return await o({url:"".concat(r,"/api-v3/noti/user/noti/").concat(t),method:"GET",authorization:a})},readDetailNotifications:async e=>{let{id:t}=e;return await o({url:"".concat(r,"/api-v3/noti/user/noti/").concat(t,"/read"),method:"POST",authorization:a,body:{id:t}})},getAddress:async()=>await o({url:"".concat(r,"/api/recipient/me"),method:"GET",authorization:a}),logout:async()=>await o({url:"".concat(r,"/api/user/logout"),method:"POST",authorization:a}),verifyPhoneNumber:async e=>await o({url:"".concat(r,"/api-v3/loyalty/v1/user/auth/check-phone-number"),method:"GET",authorization:a,body:{phoneNumber:e}}),getProvinces:async()=>await o({url:"".concat(r,"/api/province/vn"),method:"GET",authorization:a}),getWardsAndDistricts:async e=>{let{code:t}=e;return await o({url:"".concat(r,"/api/province/parent/").concat(t),method:"GET",authorization:a})},register:async e=>await o({url:"".concat(r,"/api/user/register"),method:"POST",body:e,headers:{appversioncode:12,appversionname:"3.1.2",webapp_name:"SBPS"}}),login:async(e,t)=>await o({url:"".concat(r,"/api/user/login-calosure"),method:"POST",body:{phone:e,otp:t},headers:{appversioncode:2,appversionname:"3.2.10"}})}},6514:function(e,t,n){"use strict";var o=n(2265);let r=o.forwardRef(function(e,t){let{title:n,titleId:r,...a}=e;return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},a),n?o.createElement("title",{id:r},n):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=r}},function(e){e.O(0,[173,461,971,23,744],function(){return e(e.s=4949)}),_N_E=e.O()}]);