(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2648],{6832:function(e,t,n){Promise.resolve().then(n.bind(n,5862))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return l.a}});var s=n(5601),l=n.n(s)},7449:function(e,t){"use strict";function n(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return o},getImageProps:function(){return i}});let s=n(9920),l=n(497),r=n(8173),a=s._(n(1241));function i(e){let{props:t}=(0,l.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let o=r.Image},5862:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var s=n(7437),l=n(506),r=n(6648),a=n(6463);function i(e){let{isOpen:t,togglePopup:n}=e;return(0,a.useRouter)(),(0,s.jsx)(s.Fragment,{children:t&&(0,s.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,s.jsx)("div",{className:"rounded-2xl w-full",children:(0,s.jsx)("div",{className:"flex justify-center mb-4 rounded-lg w-full h-full",children:(0,s.jsx)(r.default,{src:"/static/sbps/vqmm/vqmm.gif",alt:"OTP Error",width:1080,height:1007,className:"rounded-lg"})})})})})}var o=n(7630),c=n(4088),d=n(4191),u=n(6981),m=n(3874),h=n(7449),x=n.n(h),f=n(2265);function p(){let e=(0,a.useSearchParams)().get("code")||"",t=(0,a.useRouter)(),[n,h]=(0,f.useState)(e),[p,g]=(0,f.useState)(),[j,b]=(0,f.useState)(!1),[v,N]=(0,f.useState)(null),[w,y]=(0,f.useState)(!1),[k,P]=(0,f.useState)(!1),C=()=>{b(!j)},[_,S]=(0,f.useState)(!1),O=()=>{if(!k&&n)try{m.ZP.getQrCode({qrCode:n}).then(e=>{if(g(e.response),1e3!==e.meta.status){let t={code:e.meta.error};N(t),C()}P(!1)})}catch(e){console.error("\uD83D\uDE80 ~ file: page.tsx ~ line 77 ~ handleGetProductDetail ~ error",e)}},T=(0,d.D)(e=>{t.push("?code="+e)},500),E=!1,M=()=>{try{if(E||w)return;E=!0;let e=new Date;(0,u.iM)({qrCode:n}),m.ZP.validateProduct({qrCode:n,sku:p.sku,mock:!1}).then(t=>{var s,l,r,a;if(1e3===t.meta.status){if((null==t?void 0:null===(s=t.notification)||void 0===s?void 0:s.code[0])&&(null==t?void 0:null===(l=t.notification)||void 0===l?void 0:l.code[0])==="SBPS_0110_WEBAPP"){N(t.notification),C(),(0,u.R2)({qrCode:n,startTime:e,reason:null==t?void 0:null===(r=t.notification)||void 0===r?void 0:r.code[0]});return}(0,u.Le)({qrCode:n,startTime:e}),S(!0),N(t.notification),X(),setTimeout(()=>{D(!1),C()},4e3)}else N(t.notification),C(),(0,u.R2)({qrCode:n,startTime:e,reason:null==t?void 0:null===(a=t.notification)||void 0===a?void 0:a.code})})}catch(e){console.error("\uD83D\uDE80 ~ file: page.tsx ~ line 158 ~ handleVerifyProduct ~ error",e)}},[q,D]=(0,f.useState)(!1),X=()=>{D(!q)},L=()=>{X()};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(x(),{children:[(0,s.jsx)("link",{rel:"preload",href:"/static/sbps/vqmm/vqmm.gif",as:"image"}),(0,s.jsx)("link",{rel:"preload",href:"/static/sbps/gift/mayman.png",as:"image"}),(0,s.jsx)("link",{rel:"preload",href:"/static/sbps/banner/banner_login.png",as:"image"}),(0,s.jsx)("link",{rel:"preload",href:"/static/sbps/banner/banner_main.jpeg",as:"image"})]}),(0,s.jsx)(l.Z,{title:_?"":"Th\xf4ng tin sản phẩm",inputSearch:!1,showPoint:!1,showBack:!0}),(0,s.jsxs)("div",{className:"flex flex-col p-2 bg-white min-h-screen text-left",children:[_?(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"flex justify-center mb-4 rounded-lg",children:(0,s.jsx)(r.default,{src:"/static/sbps/banner/otp_error.png",alt:"OTP Error",width:300,height:182,className:"rounded-lg"})}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"text-neutral900 font-semibold text-lg",children:"X\xe1c thực sản phẩm th\xe0nh c\xf4ng"}),(0,s.jsx)("p",{className:"text-neutral900 text-sm mt-2 font-light",children:"Cảm ơn bạn tham gia x\xe1c thực sản phẩm đ\xe3 sử dụng!"})]}),(0,s.jsx)("div",{className:"mt-6 mx-5",children:(0,s.jsx)("button",{onClick:()=>{L()},className:"w-full bg-gradient-button text-white rounded-full text-sm font-bold h-10",children:"TIẾP TỤC"})}),q&&(0,s.jsx)(i,{isOpen:q,togglePopup:X})]}):p?(0,s.jsxs)("div",{className:"p-3",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"font-normal text-neutral700 text-sm",children:"T\xean sản phẩm"}),(0,s.jsx)("p",{className:"font-semibold text-neutral text-sm pt-2",children:null==p?void 0:p.name})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"font-normal text-neutral700 pt-2 text-sm",children:"Khối lượng/Dung t\xedch"}),(0,s.jsxs)("p",{className:"font-semibold text-neutral text-sm pt-2",children:[null==p?void 0:p.weigh,null==p?void 0:p.weighType]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"font-normal text-neutral700 pt-2 text-sm",children:"Ng\xe0y sản xuất"}),(0,s.jsx)("p",{className:"font-semibold text-neutral text-sm pt-2",children:null==p?void 0:p.created_at})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"font-normal text-neutral700 pt-2 text-sm",children:"Ng\xe0y hết hạn"}),(0,s.jsx)("p",{className:"font-semibold text-neutral text-sm pt-2",children:null==p?void 0:p.expired_at})]})]}),(0,s.jsx)("div",{className:"border-t border-dashed border-gray-300 mt-5"}),(0,s.jsx)("div",{className:"flex",children:(0,s.jsxs)("p",{className:"font-medium text-neutral text-xs pt-2 text-center ml-12 mr-12",children:["Sau khi x\xe1c nhận th\xf4ng tin sản phẩm, h\xe3y nhấn ",(0,s.jsx)("span",{className:"font-bold text-primary500",children:"X\xc1C THỰC"})," để tiến h\xe0nh đổi muỗng."]})}),(0,s.jsx)("div",{className:"mt-3 mx-5",children:(0,s.jsxs)("button",{onClick:()=>{y(!0),M()},className:"w-full bg-gradient-button text-white rounded-full font-bold text-sm h-10 flex justify-center items-center gap-2",disabled:w,children:[w&&(0,s.jsx)(c.P.spinner,{className:"animate-spin h-5 w-5 text-white"}),"X\xc1C THỰC"]})})]}):(0,s.jsxs)("div",{className:"p-3",children:[(0,s.jsxs)("h2",{className:"font-medium text-neutral900",children:["Th\xf4ng tin ",(0,s.jsx)("span",{className:"font-semibold",children:"'M\xe3 dự thưởng'"})]}),(0,s.jsxs)("p",{className:"font-normal text-neutral700 text-sm pt-2",children:[(0,s.jsx)("span",{className:"font-semibold text-neutral500",children:"'M\xe3 dự thưởng'"})," c\xf3 thể t\xecm thấy trong thẻ c\xe0o b\xean cạnh"," ",(0,s.jsx)("span",{className:"font-semibold text-neutral500",children:"'M\xe3 QR dự thưởng'"})]}),(0,s.jsx)("input",{className:"font-normal text-neutral500 pt-5 pb-5 w-full border-none focus:border-none focus:outline-none focus:text-black",placeholder:"ABXXXXXXX",value:n,onChange:e=>{let t=e.target.value;h(t),T(t)}}),(0,s.jsx)("div",{className:"border-1 border-dashed w-full border-t border-neutral900 pb-4"}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsxs)("p",{className:"font-normal text-neutral700 text-xs",children:["Đối với c\xe1c sản phẩm c\xf3 thẻ c\xe0o chứa ",(0,s.jsx)("span",{className:"font-semibold text-neutral700",children:"‘M\xe3 thẻ c\xe0o t\xedch điểm’"})," bạn sẽ c\xf3 cơ hội t\xedch xu để đổi qu\xe0 v\xe0 01 lượt tham gia Chương tr\xecnh V\xf2ng quay may mắn."]}),(0,s.jsxs)("p",{className:"font-normal text-neutral700 text-xs pt-1",children:["Đối với c\xe1c sản phẩm c\xf3 thẻ c\xe0o chứa ",(0,s.jsx)("span",{className:"font-semibold text-neutral700",children:"‘M\xe3 dự thưởng’"})," bạn sẽ c\xf3 ngay 01 lượt tham gia Chương tr\xecnh V\xf2ng quay may mắn."]}),(0,s.jsxs)("p",{className:"font-normal text-neutral700 text-xs pt-1",children:["Thời gian diễn ra chương tr\xecnh: ",(0,s.jsx)("span",{className:"font-semibold text-neutral700",children:"01/11/2024 – 28/02/2025 "})]})]}),(0,s.jsx)("div",{className:"mt-10 mx-5",children:(0,s.jsxs)("button",{onClick:()=>{P(!0),O()},className:"w-full bg-gradient-button text-white rounded-full font-bold text-sm h-10 flex justify-center items-center gap-2",disabled:k,children:[k&&(0,s.jsx)(c.P.spinner,{className:"animate-spin h-5 w-5 text-white"}),"KIỂM TRA TH\xd4NG TIN"]})})]}),j&&(0,s.jsx)(o.Z,{isOpen:j,togglePopup:C,code:(null==v?void 0:v.code)||"",productDetail:p})]})]})}},4088:function(e,t,n){"use strict";n.d(t,{P:function(){return l}});var s=n(7437);let l={spinner:e=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,s.jsx)("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})})}},6514:function(e,t,n){"use strict";var s=n(2265);let l=s.forwardRef(function(e,t){let{title:n,titleId:l,...r}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":l},r),n?s.createElement("title",{id:l},n):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=l},4380:function(e,t,n){"use strict";var s=n(2265);let l=s.forwardRef(function(e,t){let{title:n,titleId:l,...r}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":l},r),n?s.createElement("title",{id:l},n):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});t.Z=l}},function(e){e.O(0,[8173,8461,4498,4343,2971,7023,1744],function(){return e(e.s=6832)}),_N_E=e.O()}]);