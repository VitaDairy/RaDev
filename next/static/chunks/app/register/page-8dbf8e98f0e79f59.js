(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{9935:function(e,t,r){Promise.resolve().then(r.bind(r,8676))},8676:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(7437),s=r(3056),l=r(3874),a=r(6514),i=r(2265);let o=i.forwardRef(function(e,t){let{title:r,titleId:n,...s}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},s),r?i.createElement("title",{id:n},r):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))}),d=i.forwardRef(function(e,t){let{title:r,titleId:n,...s}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},s),r?i.createElement("title",{id:n},r):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"}))}),c=i.forwardRef(function(e,t){let{title:r,titleId:n,...s}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},s),r?i.createElement("title",{id:n},r):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"}),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))});var u=r(3934),m=r(6463);function h(){let e=(0,m.useRouter)(),{actionGetProvinces:t}=(0,s.Z)(),{phone:r,otp:o,actionRegister:d}=(0,s.Z)(),[c,u]=(0,i.useState)(null),[h,p]=(0,i.useState)(""),[v,f]=(0,i.useState)(""),[b,w]=(0,i.useState)(!0),[g,j]=(0,i.useState)({}),[N,k]=(0,i.useState)({name:"",password:"",provinceId:0,districtId:0,wardId:0,address:"",termsAccepted:!1,errors:{}});return(0,i.useEffect)(()=>{t().then(e=>{u((null==e?void 0:e.provinces)||null),k(t=>{var r;return{...t,provinceId:null==e?void 0:null===(r=e.provinces[0])||void 0===r?void 0:r.id}})})},[]),(0,i.useEffect)(()=>{w(!(""!==N.name&&""!==N.password&&""!==N.address&&0!==N.provinceId&&0!==N.districtId&&0!==N.wardId&&N.termsAccepted))},[N]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"flex flex-col items-center h-screen space-y-4 p-5 bg-white min-h-screen",children:[(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)("button",{onClick:()=>{e.push("/login")},children:(0,n.jsx)(a.Z,{className:"h-6 w-6 text-neutral dark:text-neutral ",strokeWidth:2})})}),(0,n.jsx)(x,{handleChange:e=>{let{name:t,value:r,type:n,checked:s}=e.target;console.log("\uD83D\uDE80 ~ handleChange ~ name, value, type, checked:",t,r,n,s),"provinceId"===t&&(r=Number(r),l.ZP.getWardsAndDistricts({code:Number(r)}).then(e=>{var t,r,n;p((null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.provinces)||null);let s=null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(r=n.provinces[0])||void 0===r?void 0:r.id;l.ZP.getWardsAndDistricts({code:s}).then(e=>{var t;f((null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.provinces)||null),k(t=>{var r,n;return{...t,districtId:s,wardId:null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(r=n.provinces[0])||void 0===r?void 0:r.id}})})})),"districtId"===t&&(r=Number(r),l.ZP.getWardsAndDistricts({code:Number(r)}).then(e=>{var t,r,n;f((null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.provinces)||null);let s=null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(r=n.provinces[0])||void 0===r?void 0:r.id;k(e=>({...e,wardId:s}))})),"wardId"===t&&(r=Number(r)),"confirmPassword"===t&&r!==N.password&&j(e=>({...e,confirmPassword:!0})),"password"!==t||/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(r)||j(e=>({...e,password:!0})),k(e=>({...e,[t]:"checkbox"===n?s:r}))},district:h,formData:N,handleSubmit:t=>{if(console.log("\uD83D\uDE80 ~ handleSubmit ~ formData.password:",N.password,!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(N.password)),N.password&&!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(N.password)){j(e=>({...e,errors:{password:!0}}));return}if(N.password!==N.confirmPassword){j(e=>({...e,errors:{confirmPassword:"Mật khẩu kh\xf4ng khớp"}}));return}if(!1===N.termsAccepted){j(e=>({...e,termsAccepted:"Vui l\xf2ng chấp nhận điều khoản"}));return}N.phoneNumber=r,N.otp=o,N.firstName=N.name,N.lastName=N.name,l.ZP.register(N).then(async t=>{var r;console.log("\uD83D\uDE80 ~ handleSubmit ~ res",t),(null==t?void 0:null===(r=t.meta)||void 0===r?void 0:r.status)!==1e3?e.push("/login"):(await d(t),e.push("/home"))})},provinces:c,errors:g,ward:v,isDisableButton:b},"123")]})})}let x=e=>{let{handleChange:t,formData:r,provinces:s,district:l,ward:a,handleSubmit:m,isDisableButton:h,errors:x}=e,[p,v]=(0,i.useState)(!1),[f,b]=(0,i.useState)(!1);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"mt-15 w-full",children:[(0,n.jsx)("label",{className:"block mb-2 text-sm font-medium text-primary500 dark:text-primary500 text-xs",children:"Bạn đ\xe3 x\xe1c thực số điện thoại th\xe0nh c\xf4ng, điền th\xf4ng tin để ho\xe0n tất nh\xe9"}),(0,n.jsx)("div",{children:(0,n.jsx)("input",{type:"text",name:"name",className:"border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral text-xs font-normal pb-2",placeholder:"Họ v\xe0 T\xean",onChange:t})}),(0,n.jsxs)("div",{className:"flex items-center relative",children:[(0,n.jsxs)("select",{name:"gender",value:r.gender,onChange:t,className:"appearance-none border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral text-xs font-normal pb-2",required:!0,children:[(0,n.jsx)("option",{value:"0",disabled:!0,className:"text-netral",children:"Giới t\xednh"}),(0,n.jsx)("option",{value:"male",children:"Nam"},"gender-nam"),(0,n.jsx)("option",{value:"female",children:"Nữ"},"gender-nu")]}),(0,n.jsx)(o,{className:"h-7 w-7 text-neutral700 absolute inset-y-2 right-0 pr-3 flex items-center text-lg leading-5 cursor-pointer"})]}),(0,n.jsxs)("div",{className:"flex items-center relative",children:[(0,n.jsx)("input",{type:"".concat(p?"text":"password"),name:"password",value:r.password,onChange:t,className:"appearance-none border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral text-xs pb-2",placeholder:"Mật khẩu (d\xf9ng cho ứng dụng)"}),(0,n.jsx)("button",{className:"absolute inset-y-0 right-0 pr-3 flex items-center text-lg leading-5 cursor-pointer",onClick:()=>{v(!p)},children:p?(0,n.jsx)(c,{className:"h-5 w-5 text-neutral500 "}):(0,n.jsx)(d,{className:"h-5 w-5 text-neutral500 "})})]}),x.password&&(0,n.jsxs)("div",{className:"flex items-center text-error500 text-center mt-2",children:[(0,n.jsx)(u.Z,{className:"h-4 w-4"}),(0,n.jsx)("p",{className:"text-10 ml-1",children:"Mật khẩu mới c\xf3 8 k\xed tự bảo gồm chữ c\xe1i v\xe0 số"})]}),(0,n.jsxs)("div",{className:"flex items-center relative",children:[(0,n.jsx)("input",{name:"confirmPassword",value:r.confirmPassword,type:"".concat(f?"text":"password"),onChange:t,className:"border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral text-xs pb-2",placeholder:"X\xe1c nhận lại mật khẩu"}),(0,n.jsx)("button",{className:"absolute inset-y-0 right-0 pr-3 flex items-center text-lg leading-5 cursor-pointer",onClick:()=>{b(!f)},children:f?(0,n.jsx)(c,{className:"h-5 w-5 text-neutral500 "}):(0,n.jsx)(d,{className:"h-5 w-5 text-neutral500 "})})]}),x.confirmPassword&&(0,n.jsxs)("div",{className:"flex items-center text-error500 text-center mt-2",children:[(0,n.jsx)(u.Z,{className:"h-4 w-4"}),(0,n.jsx)("p",{className:"text-10 ml-1",children:"Mật khẩu kh\xf4ng tr\xf9ng khớp"})]}),(0,n.jsxs)("div",{className:"flex items-center relative",children:[(0,n.jsxs)("select",{name:"provinceId",value:r.provinceId,onChange:t,className:"appearance-none border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral text-xs font-normal pb-2",required:!0,children:[(0,n.jsxs)("option",{value:"0",className:"text-neutral500",children:["Tỉnh/Th\xe0nh ",(0,n.jsx)("span",{className:"text-red",children:"*"})]}),s&&(null==s?void 0:s.filter(e=>e.id<100).map(e=>(0,n.jsx)("option",{value:e.id,children:e.name},"province-".concat(e.id))))]}),(0,n.jsx)(o,{className:"h-7 w-7 text-neutral700 absolute inset-y-2 right-0 pr-3 flex items-center text-lg leading-5 cursor-pointer"})]}),x.province&&(0,n.jsxs)("div",{className:"flex items-center text-error500 text-center mt-2",children:[(0,n.jsx)(u.Z,{className:"h-4 w-4"}),(0,n.jsx)("p",{className:"text-10 ml-1",children:"Vui l\xf2ng chọn Tỉnh/Th\xe0nh phố"})]}),(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsxs)("div",{className:"flex items-center relative w-[50%]",children:[(0,n.jsxs)("select",{name:"districtId",value:r.districtId,onChange:t,className:" appearance-none border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral text-xs font-normal pb-2",required:!0,children:[(0,n.jsx)("option",{value:"0",disabled:!0,children:"Quận/huyện"}),l&&(null==l?void 0:l.map(e=>(0,n.jsx)("option",{value:e.id,children:e.name},"district-".concat(e.id))))]}),(0,n.jsx)(o,{className:"h-7 w-7 text-neutral700 absolute inset-y-2 right-0 pr-3 flex items-center text-lg leading-5 cursor-pointer"})]}),(0,n.jsxs)("div",{className:"flex items-center relative w-[50%]",children:[(0,n.jsxs)("select",{name:"wardId",value:r.wardId,onChange:t,className:"appearance-none border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral text-xs font-normal pb-2",required:!0,children:[(0,n.jsx)("option",{value:"0",disabled:!0,children:"X\xe3/Phường"}),a&&(null==a?void 0:a.map(e=>(0,n.jsx)("option",{value:e.id,children:e.name},"ward-".concat(e.id))))]}),(0,n.jsx)(o,{className:"h-7 w-7 text-neutral700 absolute inset-y-2 right-0 pr-3 flex items-center text-lg leading-5 cursor-pointer"})]})]}),(0,n.jsx)("div",{children:(0,n.jsx)("input",{name:"address",type:"text",value:r.address,className:"border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral text-xs pb-2",placeholder:"Địa chỉ cụ thể",onChange:t})}),x.address&&(0,n.jsxs)("div",{className:"flex items-center text-error500 text-center mt-2",children:[(0,n.jsx)(u.Z,{className:"h-4 w-4"}),(0,n.jsx)("p",{className:"text-10 ml-1",children:"Vui l\xf2ng nhập địa chỉ"})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"flex items-center mb-4 mt-4",children:[(0,n.jsx)("input",{type:"checkbox",name:"termsAccepted",checked:r.termsAccepted,onChange:t,className:"h-4 w-4 text-gradient-button",required:!0}),(0,n.jsxs)("label",{className:"ml-2 text-neutral500 text-xs",children:["T\xf4i đồng \xfd với c\xe1c"," ",(0,n.jsx)("a",{href:"/terms-of-service",className:"text-primary500 font-medium",children:"Điều khoản dịch vụ"})," ","của VitaDairy"]})]})}),(0,n.jsx)("button",{className:" ".concat(h?"bg-disabled opacity-50 cursor-not-allowed":"bg-gradient-button opacity-100"," font-bold py-2 px-4 rounded-full transition duration-300 min-w-full mt-5 bottom-0 left-0 h-11"),disabled:h,onClick:()=>{m()},children:"HO\xc0N TẤT"})]})})}},6514:function(e,t,r){"use strict";var n=r(2265);let s=n.forwardRef(function(e,t){let{title:r,titleId:s,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},l),r?n.createElement("title",{id:s},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=s},3934:function(e,t,r){"use strict";var n=r(2265);let s=n.forwardRef(function(e,t){let{title:r,titleId:s,...l}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},l),r?n.createElement("title",{id:s},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))});t.Z=s}},function(e){e.O(0,[461,56,971,23,744],function(){return e(e.s=9935)}),_N_E=e.O()}]);