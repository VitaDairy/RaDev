(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[648],{6832:function(e,t,n){Promise.resolve().then(n.bind(n,5862))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return s.a}});var l=n(5601),s=n.n(l)},7449:function(e,t){"use strict";function n(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return o},getImageProps:function(){return i}});let l=n(9920),s=n(497),a=n(8173),r=l._(n(1241));function i(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let o=a.Image},5862:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var l=n(7437),s=n(506),a=n(6648),r=n(6463);function i(e){let{isOpen:t,togglePopup:n}=e;return(0,r.useRouter)(),(0,l.jsx)(l.Fragment,{children:t&&(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,l.jsx)("div",{className:"rounded-2xl w-full",children:(0,l.jsx)("div",{className:"flex justify-center mb-4 rounded-lg w-full h-full",children:(0,l.jsx)(a.default,{src:"/static/sbps/vqmm/vqmm.gif",alt:"OTP Error",width:1080,height:1007,className:"rounded-lg"})})})})})}var o=n(7630),c=n(4191),d=n(6981),u=n(3874),m=n(7449),h=n.n(m),x=n(2265);function f(){let e=(0,r.useSearchParams)().get("code")||"";console.log("\uD83D\uDE80 ~ PageNotiDetail ~ codeParams:",e);let t=(0,r.useRouter)(),[n,m]=(0,x.useState)(e),[f,p]=(0,x.useState)(),[g,b]=(0,x.useState)(!1),[j,v]=(0,x.useState)(null),N=()=>{b(!g)},[w,y]=(0,x.useState)(!1),k=()=>{n&&u.ZP.getQrCode({qrCode:n}).then(e=>{p(e.response),1e3!==e.meta.status&&(v({code:e.meta.error}),N())})},C=(0,c.D)(e=>{t.push("?code="+e)},500),P=!1,_=()=>{try{if(P)return;P=!0;let e=new Date;(0,d.iM)({qrCode:n}),u.ZP.validateProduct({qrCode:n,sku:f.sku,mock:!1}).then(t=>{var l,s,a,r;if(1e3===t.meta.status){if((null==t?void 0:null===(l=t.notification)||void 0===l?void 0:l.code[0])&&(null==t?void 0:null===(s=t.notification)||void 0===s?void 0:s.code[0])==="SBPS_0110_WEBAPP"){v(t.notification),N(),(0,d.R2)({qrCode:n,startTime:e,reason:null==t?void 0:null===(a=t.notification)||void 0===a?void 0:a.code[0]});return}(0,d.Le)({qrCode:n,startTime:e}),y(!0),v(t.notification),E(),setTimeout(()=>{T(!1),N()},4e3)}else v(t.notification),N(),(0,d.R2)({qrCode:n,startTime:e,reason:null==t?void 0:null===(r=t.notification)||void 0===r?void 0:r.code})})}catch(e){console.error("\uD83D\uDE80 ~ file: page.tsx ~ line 158 ~ handleVerifyProduct ~ error",e)}finally{P=!1}},[O,T]=(0,x.useState)(!1),E=()=>{T(!O)},S=()=>{E()};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(h(),{children:[(0,l.jsx)("link",{rel:"preload",href:"/static/sbps/vqmm/vqmm.gif",as:"image"}),(0,l.jsx)("link",{rel:"preload",href:"/static/sbps/gift/mayman.png",as:"image"}),(0,l.jsx)("link",{rel:"preload",href:"/static/sbps/banner/banner_login.png",as:"image"}),(0,l.jsx)("link",{rel:"preload",href:"/static/sbps/banner/banner_main.jpeg",as:"image"})]}),(0,l.jsx)(s.Z,{title:w?"":"Th\xf4ng tin sản phẩm",inputSearch:!1,showPoint:!1,showBack:!0}),(0,l.jsxs)("div",{className:"flex flex-col p-2 bg-white min-h-screen text-left",children:[w?(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"flex justify-center mb-4 rounded-lg",children:(0,l.jsx)(a.default,{src:"/static/sbps/banner/otp_error.png",alt:"OTP Error",width:300,height:182,className:"rounded-lg"})}),(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("p",{className:"text-neutral900 font-semibold text-lg",children:"X\xe1c thực sản phẩm th\xe0nh c\xf4ng"}),(0,l.jsx)("p",{className:"text-neutral900 text-sm mt-2 font-light",children:"Cảm ơn bạn tham gia x\xe1c thực sản phẩm đ\xe3 sử dụng!"})]}),(0,l.jsx)("div",{className:"mt-6 mx-5",children:(0,l.jsx)("button",{onClick:()=>{S()},className:"w-full bg-gradient-button text-white rounded-full text-sm font-bold h-10",children:"TIẾP TỤC"})}),O&&(0,l.jsx)(i,{isOpen:O,togglePopup:E})]}):f?(0,l.jsxs)("div",{className:"p-3",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"font-normal text-neutral700 text-sm",children:"T\xean sản phẩm"}),(0,l.jsx)("p",{className:"font-semibold text-neutral text-sm pt-2",children:null==f?void 0:f.name})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"font-normal text-neutral700 pt-2 text-sm",children:"Khối lượng/Dung t\xedch"}),(0,l.jsxs)("p",{className:"font-semibold text-neutral text-sm pt-2",children:[null==f?void 0:f.weigh,null==f?void 0:f.weighType]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"font-normal text-neutral700 pt-2 text-sm",children:"Ng\xe0y sản xuất"}),(0,l.jsx)("p",{className:"font-semibold text-neutral text-sm pt-2",children:null==f?void 0:f.created_at})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"font-normal text-neutral700 pt-2 text-sm",children:"Ng\xe0y hết hạn"}),(0,l.jsx)("p",{className:"font-semibold text-neutral text-sm pt-2",children:null==f?void 0:f.expired_at})]})]}),(0,l.jsx)("div",{className:"border-t border-dashed border-gray-300 mt-5"}),(0,l.jsx)("div",{className:"flex",children:(0,l.jsxs)("p",{className:"font-medium text-neutral text-xs pt-2 text-center ml-12 mr-12",children:["Sau khi x\xe1c nhận th\xf4ng tin sản phẩm, h\xe3y nhấn ",(0,l.jsx)("span",{className:"font-bold text-primary500",children:"X\xc1C THỰC"})," để tiến h\xe0nh đổi muỗng."]})}),(0,l.jsx)("div",{className:"mt-3 mx-5",children:(0,l.jsx)("button",{onClick:()=>{_()},className:"w-full bg-gradient-button text-white rounded-full font-bold text-sm h-10",children:"X\xc1C THỰC"})})]}):(0,l.jsxs)("div",{className:"p-3",children:[(0,l.jsxs)("h2",{className:"font-medium text-neutral900",children:["Th\xf4ng tin ",(0,l.jsx)("span",{className:"font-semibold",children:"'M\xe3 dự thưởng'"})]}),(0,l.jsxs)("p",{className:"font-normal text-neutral700 text-sm pt-2",children:[(0,l.jsx)("span",{className:"font-semibold text-neutral500",children:"'M\xe3 dự thưởng'"})," c\xf3 thể t\xecm thấy trong thẻ c\xe0o b\xean cạnh"," ",(0,l.jsx)("span",{className:"font-semibold text-neutral500",children:"'M\xe3 QR dự thưởng'"})]}),(0,l.jsx)("input",{className:"font-normal text-neutral500 pt-5 pb-5 w-full border-none focus:border-none focus:outline-none focus:text-black",placeholder:"ABXXXXXXX",value:n,onChange:e=>{let t=e.target.value;m(t),C(t)}}),(0,l.jsx)("div",{className:"border-1 border-dashed w-full border-t border-neutral900 pb-4"}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsxs)("p",{className:"font-normal text-neutral700 text-xs",children:["Đối với c\xe1c sản phẩm c\xf3 thẻ c\xe0o chứa ",(0,l.jsx)("span",{className:"font-semibold text-neutral700",children:"‘M\xe3 thẻ c\xe0o t\xedch điểm’"})," bạn sẽ c\xf3 cơ hội t\xedch xu để đổi qu\xe0 v\xe0 01 lượt tham gia Chương tr\xecnh V\xf2ng quay may mắn."]}),(0,l.jsxs)("p",{className:"font-normal text-neutral700 text-xs pt-1",children:["Đối với c\xe1c sản phẩm c\xf3 thẻ c\xe0o chứa ",(0,l.jsx)("span",{className:"font-semibold text-neutral700",children:"‘M\xe3 dự thưởng’"})," bạn sẽ c\xf3 ngay 01 lượt tham gia Chương tr\xecnh V\xf2ng quay may mắn."]}),(0,l.jsxs)("p",{className:"font-normal text-neutral700 text-xs pt-1",children:["Thời gian diễn ra chương tr\xecnh: ",(0,l.jsx)("span",{className:"font-semibold text-neutral700",children:"01/11/2024 – 28/02/2025 "})]})]}),(0,l.jsx)("div",{className:"mt-10 mx-5",children:(0,l.jsx)("button",{onClick:()=>{k()},className:"w-full bg-gradient-button text-white rounded-full font-bold text-sm h-10",children:"KIỂM TRA TH\xd4NG TIN"})})]}),g&&(0,l.jsx)(o.Z,{isOpen:g,togglePopup:N,code:(null==j?void 0:j.code)||""})]})]})}},6514:function(e,t,n){"use strict";var l=n(2265);let s=l.forwardRef(function(e,t){let{title:n,titleId:s,...a}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},a),n?l.createElement("title",{id:s},n):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=s},4380:function(e,t,n){"use strict";var l=n(2265);let s=l.forwardRef(function(e,t){let{title:n,titleId:s,...a}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},a),n?l.createElement("title",{id:s},n):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});t.Z=s}},function(e){e.O(0,[173,461,498,343,971,23,744],function(){return e(e.s=6832)}),_N_E=e.O()}]);