(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[866],{8491:function(e,t,s){Promise.resolve().then(s.bind(s,4850))},6648:function(e,t,s){"use strict";s.d(t,{default:function(){return n.a}});var l=s(5601),n=s.n(l)},5601:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return o},getImageProps:function(){return a}});let l=s(9920),n=s(497),i=s(8173),r=l._(s(1241));function a(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let o=i.Image},4850:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var l=s(7437),n=s(9744),i=s(2826),r=s(6648);let a={NEED_TO_USE:{title:"Chưa sử dụng",className:"text-voucher border-voucher",isShowButtonUse:!0,isShowTel:!0},NEED_REUSE:{title:"Chưa sử dụng",className:"text-voucher border-voucher",isShowButtonUse:!0,isShowTel:!0},USED:{title:"Thẻ c\xe0o th\xe0nh c\xf4ng",className:"text-voucher border-voucher",isShowTel:!0,isShowCopy:!0,isShowExpire:!0},EXPIRED:{title:"Hết hạn",className:"text-voucher border-voucher"},FAILED:{title:"Đổi qu\xe0 thất bại",className:"text-error500 border-error500",isShowTel:!0},TOPUP_IS_PROCESSING:{title:"Đang xư l\xfd giao dịch",className:"text-error500 border-error500"},TOPUP:{title:"Nạp tiền th\xe0nh c\xf4ng",className:"text-voucher border-voucher",isShowVoucher:!1,isShowTel:!0}},o={VT:"Viettel",MB:"Mobifone",VP:"Vinaphone",VM:"Vietnamobile",BL:"Gmobile",SFone:"SFone"};function d(e){var t,s,n,d,c,u,h,x,m,f,g,v,p,b,j,N,w,y,k;let{setSelectGift:S,origin:E,pageOrder:C=!1,tab:_,card:T}=e;if("voucher"!==_)return(0,l.jsx)("div",{className:" bg-gray-50 ",children:(0,l.jsxs)("div",{className:"flex flex-col bg-sureface02 rounded-lg shadow-lg overflow-hidden",children:[!C&&(0,l.jsxs)("div",{className:"flex items-center bg-gradient-button p-4",style:{width:"55%",borderTopLeftRadius:"0.5rem",borderTopRightRadius:"2rem",height:"2rem"},children:[(0,l.jsxs)("div",{className:"flex items-center flex-1",children:[(0,l.jsx)("input",{type:"checkbox",className:"form-checkbox w-3 h-3 text-green-500"}),(0,l.jsx)("span",{className:"ml-2 text-white font-bold text-xs",children:"gift"===_?"Qu\xe0 tặng":"Qu\xe0 đổi"})]}),(0,l.jsx)("button",{className:"text-white bt-white",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"})})})]}),(0,l.jsxs)("div",{className:"flex p-4",children:[(0,l.jsxs)("div",{className:"flex-shrink-0 flex items-center",children:[!C&&(0,l.jsx)("input",{type:"checkbox",className:"form-checkbox w-3 h-3 text-green-500",onChange:e=>{e.target.checked?S([T]):S([])}}),(0,l.jsx)(r.default,{src:null==T?void 0:null===(N=T.gift)||void 0===N?void 0:N.images[0],alt:"image gift",width:80,height:80,className:"ml-2"})]}),(0,l.jsxs)("div",{className:"ml-4 flex-1",children:[(0,l.jsx)("h3",{className:"text-xs text-neutral900",children:null==T?void 0:null===(w=T.gift)||void 0===w?void 0:w.name}),(0,l.jsxs)("p",{className:"text-8 text-neutral700",children:["Ng\xe0y tr\xfang thưởng: ",(0,i.p)(T.createdAt)||"",(null==T?void 0:null===(y=T.dynamicData)||void 0===y?void 0:y.expiry_date)&&(0,l.jsxs)("span",{className:"ml-4",children:["Hết hạn: ",(0,i.p)(null==T?void 0:null===(k=T.dynamicData)||void 0===k?void 0:k.expiry_date)]})]}),(0,l.jsx)("div",{className:"border-t-2 border-dashed border-gray-300 my-2"}),(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)(r.default,{src:"/static/sbps/icons/quatang.png",alt:"image gift",width:57,height:14}),(null==T?void 0:T.quatity)&&(0,l.jsxs)("span",{className:"text-gray-500 text-sm",children:["x ",null==T?void 0:T.quatity]})]})]})]})]})});{let{status:e,telco:N,transactionCode:w,dynamicData:y={}}=T;return null==y||y.is_used,null==y||y.used_date,(0,l.jsxs)("div",{className:"flex items-center justify-between bg-white rounded-lg shadow-md mb-4 pb-2 pr-1",children:[(0,l.jsx)("div",{className:"flex-shrink-0",children:(0,l.jsx)(r.default,{src:null==T?void 0:null===(t=T.gift)||void 0===t?void 0:t.images[0],alt:"Thẻ điện thoại",className:"w-16 h-16 rounded-full",width:80,height:80})}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"ml-4 flex-1",children:[(0,l.jsx)("h3",{className:"text-xs font-semibold text-neutral900 ",children:(null==T?void 0:null===(s=T.gift)||void 0===s?void 0:s.name)||""}),(0,l.jsxs)("p",{className:"text-sm text-neutral700",children:["Gi\xe1 trị: ",null==T?void 0:null===(n=T.gift)||void 0===n?void 0:n.price,"đ"]}),(0,l.jsxs)("p",{className:"text-8 text-neutral700",children:["Ng\xe0y đổi qu\xe0: ",(0,i.p)(null==T?void 0:T.createdAt)]}),(null===(d=a[e])||void 0===d?void 0:d.isShowVoucher)&&(0,l.jsxs)("p",{className:"text-8 font-mono mt-2 text-neutral700",children:["M\xe3 thẻ c\xe0o: ",null==T?void 0:T.transactionCode]})]}),(0,l.jsxs)("div",{className:"text-right flex flex-col jutify-start",children:[(0,l.jsx)("span",{className:"inline-block px-3 py-1 rounded-sm text-8 font-normal border  ".concat((null===(c=a[e])||void 0===c?void 0:c.className)||""),children:(null===(u=a[e])||void 0===u?void 0:u.title)||""}),(null===(h=a[e])||void 0===h?void 0:h.isShowTel)&&N&&(0,l.jsxs)("p",{className:"text-8 text-neutral700 mt-1",children:["Nh\xe0 mạng: ",o[N]]}),(null===(x=a[e])||void 0===x?void 0:x.isShowExpire)&&(null==T?void 0:null===(m=T.dynamicData)||void 0===m?void 0:m.expiry_date)&&(0,l.jsxs)("p",{className:"text-8  text-neutral700",children:["Ng\xe0y hết hạn: ",(0,i.p)(null==T?void 0:null===(f=T.dynamicData)||void 0===f?void 0:f.expiry_date)]}),(null===(g=a[e])||void 0===g?void 0:g.isShowUsedDate)&&(null==T?void 0:null===(v=T.dynamicData)||void 0===v?void 0:v.used_date)&&(0,l.jsxs)("p",{className:"text-8  text-neutral700",children:["Ng\xe0y sử dụng: ",(0,i.p)(null==T?void 0:null===(p=T.dynamicData)||void 0===p?void 0:p.used_date)]}),(null===(b=a[e])||void 0===b?void 0:b.isShowCopy)&&(0,l.jsxs)("button",{className:"mt-2 bg-neutral50 text-blue-500 px-3 py-1 rounded-2xl text-xs flex items-center",children:[(0,l.jsx)(r.default,{src:"/static/sbps/icons/use.svg",alt:"Copy",width:14,height:14}),"Copy m\xe3 thẻ"]}),(null===(j=a[e])||void 0===j?void 0:j.isShowButtonUse)&&(0,l.jsx)("div",{children:(0,l.jsx)("span",{className:"inline-block px-3 py-1 rounded-lg text-8 font-normal border border-voucher text-voucher",children:"Sử dụng"})})]})]})]})}}var c=()=>(0,l.jsxs)("div",{className:"flex flex-col gap-5 justify-center items-center mt-10",children:[(0,l.jsx)(r.default,{src:"/static/sbps/gift/gift_not_found.svg",alt:"Gift not found",width:180,height:120}),(0,l.jsxs)("div",{className:"flex flex-col gap-3 justify-center items-center text-neutral700",children:[(0,l.jsx)("p",{children:"Rất tiếc, bạn chưa c\xf3 giải thưởng."}),(0,l.jsx)("p",{className:"text-center",children:'Vui l\xf2ng "X\xe1c thực m\xe3" để nhận ngay cơ hội may mắn từ chương tr\xecnh!'})]})]}),u=s(506),h=s(6463);function x(e){let{isOpen:t,togglePopup:s}=e,n=(0,h.useRouter)();return(0,l.jsx)(l.Fragment,{children:t&&(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,l.jsxs)("div",{className:"bg-white rounded-2xl shadow-lg p-6 w-80",children:[(0,l.jsx)("div",{className:"flex justify-center mb-4",children:(0,l.jsx)(r.default,{src:"./static/sbps/banner/otp_error.png",alt:"OTP Error",width:200,height:182})}),(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("p",{className:"text-error400 font-semibold text-lg",children:"Hệ thống đang bị lỗi"}),(0,l.jsx)("p",{className:"text-neutral900 text-sm mt-2 font-light",children:"Bạn vui l\xf2ng li\xean hệ lại sau!"}),(0,l.jsx)("p",{className:"text-neutral900 text-sm mt-2 font-light",children:"sẽ l\xe0 cơ sở để VitaDairy tiến h\xe0nh gửi qu\xe0 tặng."})]}),(0,l.jsx)("div",{className:"mt-6",children:(0,l.jsx)("button",{onClick:s,className:"w-full py-2 bg-gradient-button text-white rounded-lg text-sm font-bold h-10",children:"THỬ LẠI"})}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("button",{className:"w-full py-1 bg-gradient-button text-white rounded-lg font-bold text-sm h-10",onClick:()=>{n.push("/address/add")},children:"THO\xc1T"})})]})})})}var m=s(3056),f=s(3874),g=s(2265);function v(){let e=(0,h.useSearchParams)(),t=(0,h.useRouter)(),s=e.get("tab")||"gifts",[n,i]=(0,g.useState)([]),[r,a]=(0,g.useState)([]),[o,x]=(0,g.useState)([]),[m,v]=(0,g.useState)([]),[N,w]=(0,g.useState)(s);return((0,g.useEffect)(()=>{f.ZP.getGifts().then(e=>{var t,s;x((null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.data)||[])}),f.ZP.getVouchers().then(e=>{var t,s;v((null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.data)||[])})},[]),(0,g.useEffect)(()=>{let t=e.get("tab")||"gifts";t!==N&&w(t)},[t,e]),r.length>0)?(0,l.jsx)(j,{giftSelected:r}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.Z,{title:"Qu\xe0 của t\xf4i",inputSearch:!1,showPoint:!1,showBack:!0,backUrl:"/home"}),(0,l.jsx)(p,{tab:N,gifts:o,vouchers:m,onChangeTab:w}),(0,l.jsx)("div",{className:"flex flex-col pt-2 text-center"}),(0,l.jsx)("div",{className:"p-2 bg-gray-50 min-h-screen",children:"gifts"===N&&o.length>0||"voucher"===N&&m.length>0?(0,l.jsxs)("div",{className:"bg-white p-2 rounded-lg shadow-lg",children:["gifts"===N&&(null==o?void 0:o.map((e,t)=>(0,l.jsx)(d,{card:e,...e,setSelectGift:i,tab:N},t))),"voucher"===N&&(null==m?void 0:m.map((e,t)=>(0,l.jsx)(d,{card:e,...e,setSelectGift:i,tab:N},t)))]}):(0,l.jsx)(c,{})}),(0,l.jsx)(b,{giftSelected:n,setOrderGift:a}),(0,l.jsx)("div",{className:"h-40"})]})}let p=e=>{let{tab:t="gifts",gifts:s,vouchers:n,onChangeTab:i}=e,[r,a]=(0,g.useState)(t),o=(0,h.useRouter)();return(0,g.useEffect)(()=>{a(t)},[t]),(0,l.jsxs)("div",{className:"flex justify-between border-b",children:[(0,l.jsx)("div",{className:"flex items-center w-full justify-center ".concat("gifts"===r?"text-blue-500 border-b-2 border-green-400":"text-gray-400"),children:(0,l.jsxs)("button",{className:"flex text-center items-center",onClick:()=>{a("gifts"),o.push("/gift?tab=gifts"),i("gifts")},children:["Qu\xe0 tặng",(0,l.jsx)("span",{className:"inline-block bg-red-500 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center ml-2",children:(null==s?void 0:s.length)||0})]})}),(0,l.jsx)("div",{className:"flex items-center w-full justify-center ".concat("voucher"===r?"":"text-gray-400"),children:(0,l.jsxs)("button",{className:"flex text-center p-4",onClick:()=>{o.push("/gift?tab=voucher"),a("voucher"),i("voucher")},children:["E-voucher",(0,l.jsx)("span",{className:"ml-2 inline-block bg-red-500 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center",children:(null==n?void 0:n.length)||0})]})})]})},b=e=>{let{giftSelected:t=[],setOrderGift:s}=e;return(0,h.useRouter)(),(0,l.jsxs)("div",{className:"fixed bottom-0 left-0 w-full bg-white p-4 border-t flex justify-between items-center",children:[(0,l.jsxs)("div",{className:"text-gray-700",children:["Số lượng đ\xe3 chọn:"," ",(0,l.jsx)("span",{className:"text-blue-500 font-bold",children:null==t?void 0:t.length})]}),(0,l.jsx)("button",{className:"bg-gradient-button text-white px-6 py-2 rounded-lg font-semibold",onClick:()=>{s(t)},children:"GIAO H\xc0NG"})]})},j=e=>{let{giftSelected:t=[]}=e,s=(0,h.useRouter)(),{address:i,user:a}=(0,m.Z)(),o=i.find(e=>e.isDefault),[c,v]=(0,g.useState)(!1),[p,b]=(0,g.useState)(!1),j=()=>{b(!p)},N=async()=>{var e;let s=await f.ZP.orderGift({userId:a.id,userGiftSnapshot:t[0],recipientSnapshot:{districtCode:o.districtId,provinceCode:o.provinceId,recipientName:o.name,recipientPhone:o.phoneNumber,wardCode:o.wardId,districtName:o.districtName,provinceName:o.provinceName,wardName:o.wardName}});(null==s?void 0:null===(e=s.response)||void 0===e?void 0:e.code)===200?v(!0):j()};return c?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.Z,{title:"Đơn qu\xe0 của t\xf4i",inputSearch:!1,showPoint:!1,showBack:!0}),(0,l.jsxs)("div",{className:"p-4",children:[(0,l.jsx)("div",{className:"flex justify-center mb-4 rounded-lg",children:(0,l.jsx)(r.default,{src:"/static/sbps/banner/otp_error.png",alt:"OTP Error",width:300,height:182,className:"rounded-lg"})}),(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("p",{className:"text-error500 font-semibold text-lg",children:"Chỉ c\xf2n 1 bước nữa th\xf4i!"}),(0,l.jsx)("p",{className:"text-neutral900 text-sm mt-2 font-light",children:"Vui l\xf2ng chọn ‘HO\xc0N TẤT NHẬN QU\xc0’ v\xe0 cung cấp đầy đủ th\xf4ng tin cần thiết để VitaDairy c\xf3 thể ho\xe0n th\xe0nh thủ tục trao qu\xe0 đến bạn!"})]}),(0,l.jsx)("div",{className:"mt-6",children:(0,l.jsx)("button",{onClick:()=>{s.push("/chat")},className:"w-full py-2 bg-gradient-button text-white rounded-lg text-sm font-bold h-10",children:"HO\xc0N TẤT NHẬN Q\xd9A"})})]})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.Z,{title:"Th\xf4ng tin nhận qu\xe0",inputSearch:!1,showPoint:!1,showBack:!0}),(0,l.jsx)(n.Z,{}),(0,l.jsx)(d,{...t[0],card:t[0],pageOrder:!0},"order"),(0,l.jsx)("div",{className:"fixed bottom-0 left-0 w-full bg-white p-2 border-t flex justify-between items-center",children:(0,l.jsx)("button",{className:"bg-gradient-button text-white px-6 py-2 rounded-full font-semibold w-full",onClick:()=>{N()},children:"HO\xc0N TẤT"})}),p&&(0,l.jsx)(x,{isOpen:p,togglePopup:j})]})}},9744:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var l=s(7437),n=s(3056),i=s(3934),r=s(6463);function a(){let{address:e}=(0,n.Z)();return(0,r.useRouter)(),(0,l.jsx)("div",{className:"max-w-lg mx-auto w-full",children:null==e?void 0:e.map(e=>{var t;return(0,l.jsxs)("div",{className:"bg-white p-2 rounded-lg shadow-md space-y-2",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center",children:[(0,l.jsxs)("p",{className:"text-start",children:[(0,l.jsxs)("span",{className:"text-sm font-normal text-neutral900",children:[(null==e?void 0:e.name)||(null==e?void 0:null===(t=e.user)||void 0===t?void 0:t.name)," - ",e.phoneNumber]}),e.isDefault&&(0,l.jsx)("span",{className:"text-green-500 text-sm ml-2",children:"[Mặc định]"})]}),(0,l.jsx)("div",{className:"flex items-center space-x-2",children:(0,l.jsx)(i.Z,{className:"w-6 h-6 text-gray-400"})})]}),(0,l.jsxs)("p",{className:"text-neutral700 font-normal text-xs text-left",children:[e.address," - ",e.wardName," - ",e.districtName," - ",e.provinceName]})]})})})}},506:function(e,t,s){"use strict";var l=s(7437),n=s(6514),i=s(4380),r=s(6648),a=s(6463);t.Z=e=>{let{title:t,inputSearch:s=!0,showPoint:o=!0,showBack:d=!1,backUrl:c="",onClickBackURl:u=null,showInputVoucher:h=!1,onClickShowInputVoucher:x}=e,m=(0,a.useRouter)(),f=(0,a.usePathname)();return(0,l.jsxs)("header",{className:"".concat(f.startsWith("/noti")?"bg-[#2CB6A3]":"bg-gradient-button","  p-4 relative"),children:[(0,l.jsx)("div",{className:"flex justify-between items-center"}),(0,l.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,l.jsxs)("h1",{className:"text-white text-[18px] font-semibold pt-1 flex items-center",children:[d&&(0,l.jsx)(n.Z,{className:"w-6 h-6 text-white mt-1 mr-2 cursor-pointer",strokeWidth:2,onClick:()=>{if(u){u();return}if(c){m.push(c);return}m.back()}}),t]}),o&&(0,l.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,l.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,l.jsx)(r.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]}),h&&(0,l.jsx)("div",{className:"absolute right-4 px-2 py-1 flex items-center ",children:(0,l.jsx)("button",{onClick:()=>{x&&x(),m.push("/qr/detail")},children:(0,l.jsx)(r.default,{src:"/static/sbps/icons/input_voucher.svg",alt:"Notification",width:24,height:24})})})]}),s&&(0,l.jsx)("div",{className:"mt-6",children:(0,l.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,l.jsx)(i.Z,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,l.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},6514:function(e,t,s){"use strict";var l=s(2265);let n=l.forwardRef(function(e,t){let{title:s,titleId:n,...i}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},i),s?l.createElement("title",{id:n},s):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=n},3934:function(e,t,s){"use strict";var l=s(2265);let n=l.forwardRef(function(e,t){let{title:s,titleId:n,...i}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},i),s?l.createElement("title",{id:n},s):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))});t.Z=n},4380:function(e,t,s){"use strict";var l=s(2265);let n=l.forwardRef(function(e,t){let{title:s,titleId:n,...i}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},i),s?l.createElement("title",{id:n},s):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});t.Z=n}},function(e){e.O(0,[173,461,498,971,23,744],function(){return e(e.s=8491)}),_N_E=e.O()}]);