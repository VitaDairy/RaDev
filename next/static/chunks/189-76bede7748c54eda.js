"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{4196:function(e,t,n){var i=n(7437),a=n(6648),l=n(6463);let s=[{name:"Trang chủ",icon:"/static/icons/icon_home_no_active.svg",iconActive:"/static/icons/icon_home_active.svg",url:"/home"},{name:"C\xe1 nh\xe2n",icon:"/static/icons/icon_personal_no_active.svg",iconActive:"/static/icons/icon_personal_active.svg",url:"/personal"}];t.Z=()=>{let e=(0,l.useRouter)(),t=(0,l.usePathname)(),n=t=>{e.push(t)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"fixed inset-x-0 bottom-0 shadow-lg z-[999] bg-cover bg-no-repeat bg-center object-cover",style:{backgroundImage:"url('/static/bg/bg_footer.svg')",backgroundSize:"100% 100%"},children:(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{className:"absolute -top-8 left-1/2 transform -translate-x-1/2",children:(0,i.jsx)("div",{className:"w-[52px] h-[52px] bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center shadow-lg",children:(0,i.jsx)("div",{className:"relative",children:(0,i.jsx)(a.default,{src:"/static/icons/icon_scan.svg",alt:"Home",width:52,height:52})})})}),(0,i.jsx)("div",{className:"flex justify-between items-center px-10 py-6",children:null==s?void 0:s.map(e=>(0,i.jsxs)("div",{className:"flex flex-col items-center ".concat(t===e.url?"text-primary":"text-gray-500 cursor-pointer"),onClick:()=>n(e.url),children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.default,{src:t===e.url?e.iconActive:e.icon,alt:e.name,width:21,height:21})}),(0,i.jsx)("p",{className:"text-sm ".concat(e.url===t?"text-primary500":""),children:e.name})]},e.name))})]})})})}},937:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(7437),a=n(1292),l=n(1555),s=n(3056),o=n(6648),r=n(6463),c=e=>{let{src:t,alt:n}=e;return(0,i.jsx)("div",{className:"w-[48px] h-[48px] rounded-full border-2 border-white overflow-hidden",children:(0,i.jsx)(o.default,{src:t,alt:n||"Avatar",width:48,height:48,className:"object-cover"})})},u=e=>{let{MENUS:t,fullWidth:n=!1}=e,a=(0,r.useRouter)(),l=e=>{a.push(e)};return(0,i.jsx)("div",{className:"max-w-md mx-auto space-y-4 ".concat(n?"":"p-4"),children:t.map((e,t)=>{var n;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-4 space-y-4",children:[e.menus.map((t,n)=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex items-center justify-between space-x-2",onClick:()=>{if(""===t.url&&t.onClick){t.onClick();return}l((null==t?void 0:t.url)||"#")},children:[(0,i.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,i.jsx)(o.default,{src:t.icon,alt:t.text,width:40,height:40}),(0,i.jsx)("span",{className:"".concat((null==t?void 0:t.color)?t.color:"text-primary500"," font-normal "),children:t.text}),(0,i.jsx)("div",{className:"border-b border-neutral200"})]}),t.iconEnd&&(0,i.jsx)("div",{children:t.iconEnd})]},n),n!==e.menus.length-1&&(0,i.jsx)("div",{className:"border-b "})]})),(null==e?void 0:e.subMenu)&&(0,i.jsx)("div",{className:"flex justify-around",children:null==e?void 0:null===(n=e.subMenu)||void 0===n?void 0:n.map((t,n)=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex flex-col items-center space-y-2",onClick:()=>l(t.url),children:[(0,i.jsx)(o.default,{src:t.icon,alt:t.text,width:24,height:24}),(0,i.jsx)("span",{className:"text-blue-700 text-[12px] text-center pl-2 pr-2 ",children:t.text})]},n),n!==e.subMenu.length-1&&(0,i.jsx)("div",{className:"border-l border-dashed"})]}))})]},t)})})})},d=e=>{let{showSubMenu:t=!0,showProfile:n=!1}=e,{logout:d,user:g}=(0,s.Z)(),h=(0,r.useRouter)();return(0,i.jsxs)("div",{className:"relative text-white p-4 pt-10 bg-surface02",children:[(0,i.jsx)("div",{className:"absolute inset-0 bg-no-repeat bg-cover bg-center rounded-b-3xl h-[80%] w-full",style:{backgroundImage:"url('/static/bg/bg_header_2.png')"}}),(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsxs)("div",{className:"flex justify-between items-center",children:[(0,i.jsx)(l.tq,{}),(0,i.jsx)("div",{className:"flex space-x-3",children:(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsxs)("div",{className:"flex items-center flex-col",children:[(0,i.jsx)(c,{src:"/static/avatar/origin_avatar.png"}),(0,i.jsxs)("span",{className:"text-xs",children:["Xin ch\xe0o ",(null==g?void 0:g.name)||""]})]}),(0,i.jsx)("div",{className:"w-5 h-full rounded-full pt-1",children:(0,i.jsx)("button",{className:"w-5 h-5",onClick:()=>{h.push("/noti")},children:(0,i.jsx)(o.default,{src:"/static/icons/navigation.svg",alt:"Navigation",width:24,height:24})})})]})})]}),t&&(0,i.jsx)("div",{className:"mt-8 p-4 bg-white rounded-lg shadow-lg",children:(0,i.jsx)("div",{className:"flex justify-around ",children:(0,i.jsx)(a.default,{items:[{image_url:"/static/sbps/icons/spoon.svg",imag_alt:"QR Code",name:"X\xe1c thực muỗng",url:"#",key:"guide"},{image_url:"/static/sbps/icons/global.svg",imag_alt:"QR Code",name:"Đổi qu\xe0",url:"#",key:"rules"},{image_url:"/static/sbps/icons/gift.svg",imag_alt:"QR Code",name:"Qu\xe0 của t\xf4i",url:"#",key:"hotline"}]})})}),n&&(0,i.jsx)(u,{MENUS:[{menus:[{icon:"/static/personal/icon_address.svg",text:"Địa chỉ",url:"/address"}]},{menus:[{icon:"/static/personal/icon_callcenter.svg",text:"Li\xean hệ Hotline",url:"/contact"}]},{menus:[{icon:"/static/personal/icon_logout.svg",text:"Đăng xuất",color:"text-error400",url:"",onClick:()=>{d()}}]}]})]})]})}},1292:function(e,t,n){var i=n(7437),a=n(6648),l=n(6463);t.default=e=>{let{items:t=[]}=e,n=(0,l.useRouter)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"flex flex-row items-center justify-center min-w-full",children:null==t?void 0:t.map(e=>(0,i.jsxs)("div",{className:"items-center justify-center w-1/3 flex flex-col",onClick:()=>{if(console.log("onClick",e),e.url){n.push(e.url);return}e.onClick&&(console.log("\uD83D\uDE80 ~ BlockItems ~ item.onClick:",e.onClick),null==e||e.onClick())},children:[(0,i.jsx)(a.default,{src:e.image_url,alt:e.imag_alt,width:52,height:52}),(0,i.jsx)("h2",{className:"text-primary500 text-[10px]",children:e.name})]},e.key))})})}},1555:function(e,t,n){n.d(t,{$T:function(){return l},tq:function(){return s}});var i=n(7437),a=n(6648);let l=()=>(0,i.jsx)(a.default,{src:"/static/logo/logo.svg",alt:"LogoVTD",width:162,height:78}),s=()=>(0,i.jsx)(a.default,{src:"/static/logo/logo_white.svg",alt:"LogoWhiteVTD",width:78,height:78})},3056:function(e,t,n){var i=n(9099),a=n(9291),l=n(3874);let s=(0,i.Ue)()((0,a.tJ)(e=>({user:null,address:null,token:null,isLoggedIn:!1,loginError:null,actionLogin:async(t,n)=>{try{var i,a,s,o;let r=await l.ZP.verifyOTP(t,n);if((null==r?void 0:null===(i=r.meta)||void 0===i?void 0:i.status)!==1e3)return e({user:null,token:null,isLoggedIn:!1,loginError:"OTP verification failed"}),{user:null,token:null,isLoggedIn:!1,loginError:"OTP verification failed"};let[c,u]=await Promise.all([l.ZP.getUser(),l.ZP.getAddress()]);if((null==c?void 0:null===(a=c.meta)||void 0===a?void 0:a.status)!==1e3||(null==c?void 0:null===(s=c.response)||void 0===s?void 0:s.user)===null)return e({user:null,token:null,isLoggedIn:!1,loginError:"User not found"}),{user:null,token:null,isLoggedIn:!1,loginError:"User not found"};let d=(null==u?void 0:null===(o=u.response)||void 0===o?void 0:o.recipientInfoList)||[],g=c.response.user;return e({user:g,token:t,address:d,isLoggedIn:!0,loginError:null}),{user:g,token:t,isLoggedIn:!0,loginError:null}}catch(t){return console.log("\uD83D\uDE80 ~ login: ~ error:",t),e({user:null,token:null,isLoggedIn:!1,loginError:t.message||"Login failed"}),{user:null,token:null,isLoggedIn:!1,loginError:t.message||"Login failed"}}},logout:()=>{localStorage.removeItem("login-storage"),console.log("\uD83D\uDE80 ~ logout: ~ localStorage:",localStorage),e({user:null,token:null,isLoggedIn:!1,loginError:null})}}),{name:"login-storage",storage:(0,a.FL)(()=>localStorage)}));t.Z=s},3874:function(e,t,n){n.d(t,{ZP:function(){return s}});let i=async e=>{let{url:t,method:n,body:i,authorization:a}=e,l={"Content-Type":"application/json"};a&&(l.Authorization=a),("GET"===n||"DELETE"===n)&&(t="".concat(t,"?").concat(new URLSearchParams(i).toString()),i=void 0);let s=i?JSON.stringify(i):void 0;return(await fetch(t,{method:n,headers:l,body:s})).json()},a="https://api-sandbox.vitadairyvietnam.vn",l="Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzUzNDMiLCJVc2VyVHlwZSI6IlVTRVIiLCJpYXQiOjE3MjcxNTMxMTMsImV4cCI6MjA4NzE1MzExM30.sChGO98hUx0_6rsiHf5ItqeoYR-aviRkKy7ksM8Gyy6EXSUMaL6BThGl_QuDrb3tHda-poDaLck2v3CSR7J7ZQ";var s={getUser:async()=>await i({url:"".concat(a,"/api-v3/loyalty/v1/user"),method:"GET",authorization:l}),getNotificationUnread:async()=>await i({url:"".concat(a,"/api-v3/loyalty/v1/user/notification/unread-count"),method:"GET",authorization:l}),getMyRewards:async()=>await i({url:"".concat(a,"/v4/gs/user-gifts"),method:"GET",authorization:l}),sendOTP:async e=>await i({url:"".concat(a,"/api-v3/loyalty/send-zalo"),method:"POST",body:{phone:e,source:"REGISTER"},authorization:l}),verifyOTP:async(e,t)=>await i({url:"".concat(a,"/api-v3/loyalty/verify-otp"),method:"POST",body:{phone:e,otp:t},authorization:l}),getNotifications:async e=>{let{page:t=1,size:n=20}=e;return await i({url:"".concat(a,"/api-v3/noti/user/noti"),method:"GET",authorization:l,body:{page:t,size:n}})},getAddress:async()=>await i({url:"".concat(a,"/api/recipient/me"),method:"GET",authorization:l}),logout:async()=>await i({url:"".concat(a,"/api/user/logout"),method:"POST",authorization:l}),verifyPhoneNumber:async e=>await i({url:"".concat(a,"/api-v3/loyalty/v1/user/auth/check-phone-number"),method:"GET",authorization:l,body:{phoneNumber:e}}),getProvinces:async()=>await i({url:"".concat(a,"/api/province/vn"),method:"GET",authorization:l}),getWardsAndDistricts:async e=>{let{code:t}=e;return await i({url:"".concat(a,"/api/province/parent/").concat(t),method:"GET",authorization:l})}}}}]);