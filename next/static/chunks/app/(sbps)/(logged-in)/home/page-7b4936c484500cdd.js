(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{3065:function(e,t,n){Promise.resolve().then(n.bind(n,5515))},5515:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var s=n(7437),l=n(6648),a=n(6463),i=n(9795);function r(e){let{isOpen:t,togglePopup:n}=e,r=(0,a.useRouter)();return(0,s.jsx)(s.Fragment,{children:t&&(0,s.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,s.jsxs)("div",{className:"bg-white rounded-2xl shadow-lg p-6 w-80",children:[(0,s.jsx)("div",{className:"flex justify-center mb-4",children:(0,s.jsx)(l.default,{src:"./static/sbps/banner/otp_error.png",alt:"OTP Error",width:200,height:182})}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"text-error400 font-semibold text-lg",children:"Bạn chưa c\xf3 địa chỉ mặc định"}),(0,s.jsx)("p",{className:"text-neutral900 text-sm mt-2 font-light",children:"Để việc nhận qu\xe0 từ chương tr\xecnh diễn ra thuận lợi, qu\xfd kh\xe1ch vui l\xf2ng điền địa chỉ giao nhận đầy đủ v\xe0 ch\xednh x\xe1c."}),(0,s.jsx)("p",{className:"text-neutral900 text-sm mt-2 font-light",children:"sẽ l\xe0 cơ sở để VitaDairy tiến h\xe0nh gửi qu\xe0 tặng."})]}),(0,s.jsx)("div",{className:"mt-6",children:(0,s.jsx)("button",{onClick:()=>{r.push("/address/add")},className:"w-full py-2 bg-gradient-button text-white rounded-lg text-sm font-bold h-10",children:"NHẬP ĐỊA CHỈ"})}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsx)(i.O,{onClick:n,name:"LI\xcaN HỆ NGAY"})})]})})})}var c=n(1847),u=n(4196),o=n(937),d=n(795);n(3034),n(3435),n(4885),n(7322);var h=n(3267),m=n(6341),x=e=>{let{items:t=[]}=e,n=(0,a.useRouter)();return(0,s.jsx)("div",{className:"w-full pt-5",children:(0,s.jsx)(h.tq,{spaceBetween:10,slidesPerView:4,freeMode:!0,modules:[m.Rv],children:null==t?void 0:t.map(e=>(0,s.jsx)(h.o5,{children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center cursor-pointer",onClick:()=>{if(e.url){n.push(e.url);return}e.onClick&&(null==e||e.onClick())},children:[(0,s.jsx)(l.default,{src:e.image_url,alt:e.image_alt||"Image",width:44,height:44,className:"object-cover"}),(0,s.jsx)("h2",{className:"text-primary500 text-[10px] mt-2",children:e.name})]})},e.key))})})},g=n(3056),p=n(2265);let b={image_url:"/static/sbps/banner/banner_main.jpeg",image_alt:"Banner",width:343,height:180,key:"banner-join"};function f(){var e;let{address:t}=(0,g.Z)(),[n,l]=(0,p.useState)(!1),a=()=>{l(!n)};(0,p.useEffect)(()=>{},[]);let i=[{image_url:"/static/sbps/icons/medal.svg",imag_alt:"QR Code",name:"Hướng dẫn",url:"/instruct",key:"guide"},{image_url:"/static/sbps/icons/earth.svg",imag_alt:"QR Code",name:"Thể lệ",url:"/rules",key:"rules"},{image_url:"/static/sbps/icons/call.svg",imag_alt:"QR Code",name:"Hotline",url:"",onClick:a,key:"hotline"},{image_url:"/static/sbps/icons/chat.svg",imag_alt:"QR Code",name:"Nhắn tin",url:"/chat",key:"hotline"}],[h,m]=(0,p.useState)((null==t?void 0:t.length)===0||t&&(null===(e=t[0])||void 0===e?void 0:e.provinceId)===null);return(0,s.jsxs)("div",{className:"bg-surface02",children:[(0,s.jsx)(o.Z,{showProfile:!1}),(0,s.jsx)("div",{className:"flex justify-between pl-5",children:(0,s.jsx)(x,{items:i})}),(0,s.jsx)("div",{className:"flex justify-center mt-8",children:(0,s.jsx)(d.Z,{banner:b})}),(0,s.jsx)("div",{className:"h-40"}),(0,s.jsx)(u.Z,{}),h&&(0,s.jsx)(r,{togglePopup:()=>{m(!h)},isOpen:h}),n&&(0,s.jsx)(c.Z,{isOpen:n,togglePopup:a,pagePersonal:!1})]})}},9795:function(e,t,n){"use strict";n.d(t,{I:function(){return l},O:function(){return a}});var s=n(7437);let l=e=>{let{name:t,onClick:n}=e;return(0,s.jsxs)("button",{className:"relative inline-block px-8 py-2 font-bold text-transparent border-transparent rounded-full hover:opacity-80 transition duration-300 ease-in-out",onClick:n,children:[(0,s.jsx)("span",{className:"absolute inset-0 rounded-full bg-white bg-clip-padding"}),(0,s.jsx)("span",{className:"relative text-transparent bg-clip-text bg-gradient-button",children:t})]})},a=e=>{let{name:t,onClick:n}=e;return(0,s.jsxs)("button",{className:"relative inline-block px-8 py-2 font-bold text-transparent bg-gradient-button border-0 border-transparent rounded-full hover:opacity-80 transition duration-300 ease-in-out w-full h-10",onClick:n,children:[(0,s.jsx)("span",{className:"absolute inset-0 rounded-full border border-transparent bg-white bg-clip-padding"}),(0,s.jsx)("span",{className:"relative text-transparent bg-clip-text bg-gradient-button",children:t})]})}},795:function(e,t,n){"use strict";var s=n(7437),l=n(6648);t.Z=e=>{let{banner:t}=e;return(0,s.jsx)(l.default,{src:t.image_url,alt:t.image_alt,width:t.width,height:t.height,className:"rounded-xl"})}}},function(e){e.O(0,[904,173,461,169,56,189,971,23,744],function(){return e(e.s=3065)}),_N_E=e.O()}]);