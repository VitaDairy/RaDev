"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56],{6981:function(e,o,n){n.d(o,{x:function(){return t}});let t=e=>{let{event:o,eventCategory:n,eventLabel:t,...a}=e;window.gtag&&window.gtag("event",o,{event_category:n,event_label:t,...a})}},3056:function(e,o,n){var t=n(9099),a=n(9291),r=n(6981),i=n(3874),l=n(2826);let s=(0,t.Ue)()((0,a.tJ)((e,o)=>({user:null,auth:null,phone:null,otp:null,address:null,token:null,verifyPhone:null,source:null,isLoggedIn:!1,loginError:null,provinces:null,districts:null,wards:null,authorization:null,isShowPopupGuideScanQR:!1,actionSetShowPopupGuideScanQR:o=>{e({isShowPopupGuideScanQR:o})},actionReset:()=>{e({user:null,auth:null,phone:null,otp:null,address:null,token:null,verifyPhone:null,source:null,isLoggedIn:!1,loginError:null,provinces:null,districts:null,wards:null,authorization:null,isShowPopupGuideScanQR:!1})},actionGetProvinces:async()=>{var n;if(o().provinces)return{provinces:o().provinces};let[t]=await Promise.all([i.ZP.getProvinces()]);return(null==t?void 0:null===(n=t.meta)||void 0===n?void 0:n.status)!==1e3?{provinces:null}:(e({provinces:t.response.provinces}),{provinces:t.response.provinces})},actionVerifyPhoneNumber:async o=>{let n=await i.ZP.verifyPhoneNumber(o);return e({verifyPhone:n,phone:o,source:n?"LOGIN":"REGISTER"}),{verifyPhone:n,phone:o,source:n?"LOGIN":"REGISTER"}},actionReloadDataUser:async()=>{var n;let t="".concat(o().authorization),[a,r]=await Promise.all([i.ZP.getAddress({auth:t}),i.ZP.getUser()]);console.log("\uD83D\uDE80 ~ actionReloadDataUser: ~ addressResp:",a),console.log("\uD83D\uDE80 ~ actionReloadDataUser: ~ userResp:",r);let l=(null==a?void 0:null===(n=a.response)||void 0===n?void 0:n.recipientInfoList)||[],s=(null==r?void 0:r.response)||{};return e({user:s,isLoggedIn:!0,loginError:null,address:l}),{user:s,isLoggedIn:!0,loginError:null,address:l}},actionLogin:async(o,n)=>{try{var t,a,s;if(!await i.ZP.verifyPhoneNumber(o))return e({user:null,token:null,isLoggedIn:!1,loginError:"verify phone number false",phone:o,otp:n}),{user:null,token:null,isLoggedIn:!1,loginError:"verify phone number false"};let u=await i.ZP.login(o,n);if((null==u?void 0:null===(t=u.meta)||void 0===t?void 0:t.status)!==1e3)return(0,r.x)({event:"ev_account_failed_join_now_wa",pr_event_group:"account",pr_start_time:(0,l.e)(),pr_login_method:"SMS",pr_login_failed_value:o,pr_reason_message_error:null==u?void 0:null===(s=u.meta)||void 0===s?void 0:s.msg}),e({user:null,token:null,isLoggedIn:!1,loginError:"Login failed",phone:o,otp:n}),{user:null,token:null,isLoggedIn:!1,loginError:"Login failed"};let{user:c,auth:d}=(null==u?void 0:u.response)||{};(0,r.x)({event:"ev_account_complete_join_now_wa",pr_event_group:"account",pr_start_time:(0,l.e)(),pr_login_method:"SMS",pr_json_data:JSON.stringify({phone:o,id:c.id})}),localStorage.setItem("token",d.accessToken);let p="Bearer ".concat(d.accessToken);e({user:c,token:d.accessToken,isLoggedIn:!0,loginError:null,auth:d,authorization:p});let[g]=await Promise.all([i.ZP.getAddress({auth:p})]),v=(null==g?void 0:null===(a=g.response)||void 0===a?void 0:a.recipientInfoList)||[];return e({address:v}),{user:c,token:o,isLoggedIn:!0,loginError:null}}catch(t){return e({user:null,token:null,isLoggedIn:!1,loginError:t.message||"Login failed",phone:o,otp:n}),{user:null,token:null,isLoggedIn:!1,loginError:t.message||"Login failed"}}},actionRegister:async o=>{try{var n,t;if((null==o?void 0:null===(n=o.meta)||void 0===n?void 0:n.status)!==1e3)return{user:null,token:null,isLoggedIn:!1,loginError:"Register failed"};let{user:a,auth:r}=(null==o?void 0:o.response)||{};localStorage.setItem("token",r.accessToken);let l="Bearer ".concat(r.accessToken);e({user:a,token:r.accessToken,isLoggedIn:!0,loginError:null,auth:r,authorization:l});let[s]=await Promise.all([i.ZP.getAddress({auth:l})]),u=(null==s?void 0:null===(t=s.response)||void 0===t?void 0:t.recipientInfoList)||[];return e({address:u}),{user:a,isLoggedIn:!0,loginError:null}}catch(o){return e({user:null,token:null,isLoggedIn:!1,loginError:o.message||"Login failed"}),{user:null,token:null,isLoggedIn:!1,loginError:o.message||"Login failed"}}},logout:()=>{localStorage.removeItem("login-storage"),o().actionReset()}}),{name:"login-storage",storage:(0,a.FL)(()=>localStorage)}));o.Z=s},3874:function(e,o,n){n.d(o,{ZP:function(){return u}});let t=async e=>{let{url:o,method:n,body:t,authorization:a,headers:r={}}=e;try{let e={"Content-Type":"application/json",...r};a&&(e.Authorization=a),("GET"===n||"DELETE"===n)&&(o="".concat(o,"?").concat(new URLSearchParams(t).toString()),t=void 0);let i=t?JSON.stringify(t):void 0,l=await fetch(o,{method:n,headers:e,body:i});return null==l?void 0:l.json()}catch(e){return console.log(e),{error:e,status:500}}},a="https://api-stg-v2.vitadairyvietnam.vn",r=()=>{try{var e,o;let n=(null===(e=localStorage)||void 0===e?void 0:e.getItem("login-storage"))||"{}",t=JSON.parse(n);return(null==t?void 0:null===(o=t.state)||void 0===o?void 0:o.authorization)||""}catch(e){return null}},i=["2024_SBPS_OTO","2024_SBPS_IPHONE","2024_SBPS_10TR","2024_SBPS_5TR","2024_SBPS_THE20K","2024_SBPS_THE10K","2024_SBPS_CHUCMAYMAN","2024_SBPS_HETGIAI","SBPS_QR_USED"],l=0,s=async e=>{var o,n,i,l;let{page:s=0,size:u=10,body:c}=e,d=await t({url:"".concat(a,"/v4/gs/user-gifts"),method:"GET",authorization:r(),body:{page:0,size:u,...c}}),p=null==d?void 0:null===(n=d.response)||void 0===n?void 0:null===(o=n.data)||void 0===o?void 0:o.data,g=[];for(let e=1;e<=(null==d?void 0:null===(l=d.response)||void 0===l?void 0:null===(i=l.data)||void 0===i?void 0:i.total);e+=1)g.push(t({url:"".concat(a,"/v4/gs/user-gifts"),method:"GET",authorization:r(),body:{page:e,size:10,...c}}).then(e=>{var o,n;p=p.concat(null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(o=n.data)||void 0===o?void 0:o.data)}));return await Promise.all(g),d.response.data.data=p,d};var u={getUser:async()=>await t({url:"".concat(a,"/api-v3/loyalty/v1/user"),method:"GET",authorization:r()}),getNotificationUnread:async()=>await t({url:"".concat(a,"/api-v3/loyalty/v1/user/notification/unread-count"),method:"GET",authorization:r()}),getMyRewards:async()=>await t({url:"".concat(a,"/v4/gs/user-gifts"),method:"GET",authorization:r()}),sendOTP:async(e,o)=>"LOGIN"===o?(o="REGISTER",await t({url:"".concat(a,"/api/user/send-otp"),method:"POST",headers:{appversioncode:12,appversionname:"3.2.27"},body:{phoneNumber:e,type:"log_in_calosure"}})):await t({url:"".concat(a,"/api-v3/loyalty/send-zalo"),method:"POST",body:{phone:e,source:o},authorization:r()}),verifyOTP:async(e,o)=>await t({url:"".concat(a,"/api-v3/loyalty/verify-otp"),method:"POST",body:{phone:e,otp:o},authorization:r()}),getNotifications:async e=>{let{page:o=1,size:n=20}=e;return await t({url:"".concat(a,"/api-v3/noti/user/noti"),method:"GET",authorization:r(),body:{page:o,size:n}})},getDetailNotifications:async e=>{let{id:o,page:n=1,size:i=20}=e;return await t({url:"".concat(a,"/api-v3/noti/user/noti/").concat(o),method:"GET",authorization:r()})},readDetailNotifications:async e=>{let{id:o}=e;return await t({url:"".concat(a,"/api-v3/noti/user/noti/").concat(o,"/read"),method:"POST",authorization:r(),body:{id:o}})},getAddress:async e=>{let{auth:o}=e;return await t({url:"".concat(a,"/api/recipient/me"),method:"GET",authorization:o||r()})},logout:async()=>await t({url:"".concat(a,"/api/user/logout"),method:"POST",authorization:r()}),verifyPhoneNumber:async e=>await t({url:"".concat(a,"/api-v3/loyalty/v1/user/auth/check-phone-number"),method:"GET",authorization:r(),body:{phoneNumber:e}}),getProvinces:async()=>await t({url:"".concat(a,"/api/province/vn"),method:"GET",authorization:r()}),getWardsAndDistricts:async e=>{let{code:o}=e;return await t({url:"".concat(a,"/api/province/parent/").concat(o),method:"GET",authorization:r()})},register:async e=>await t({url:"".concat(a,"/api/user/register"),method:"POST",body:e,headers:{webappname:"WA_SBPS_24",appversioncode:12,appversionname:"3.1.2"}}),login:async(e,o)=>await t({url:"".concat(a,"/api/user/login-calosure"),method:"POST",body:{phoneNumber:e,otp:o},headers:{appversioncode:2,appversionname:"3.2.10"}}),verifyBlockedScan:async()=>await t({url:"".concat(a,"/api-v3/loyalty/v1/user/blocked-scan"),method:"GET",authorization:r()}),getQrCode:async e=>{let{qrCode:o}=e;return await t({url:"".concat(a,"/api-v3/loyalty/v1/user/qr-code/qr-information"),method:"GET",authorization:r(),body:{qrCode:o},headers:{appversioncode:12,appversionname:"3.1.2",webappname:"WA_SBPS_24"}})},validateProduct:async e=>{let{qrCode:o,sku:n,mock:s=!0}=e;return s?((l+=1)>=i.length&&(l=0),{response:null,meta:{status:1e3},notification:{code:i[l]}}):await t({url:"".concat(a,"/api-v3/loyalty/v1/user/qr-code/scan-product/SBPS"),method:"POST",authorization:r(),body:{qrCode:o,sku:n},headers:{Accept:"application/json",appversionname:"3.2.23",webappname:"WA_SBPS_24"}})},getGifts:async()=>await s({page:0,size:15,body:{giftTypes:"GIFT",statuses:"PENDING,EXCHANGED"}}),getVouchers:async()=>s({page:0,size:15,body:{giftTypes:"E_VOUCHER,E_VOUCHER_SHOP,E_VOUCHER_SHOP_BKIDS,EV_VITA_CODE"}}),getAlls:s,orderGift:async e=>{let{recipientSnapshot:o,userGiftSnapshot:n,userId:i}=e;return await t({url:"".concat(a,"/v4/os/orders"),method:"POST",body:{recipientSnapshot:o,userGiftSnapshot:n,userId:i},authorization:r()})},getEvents:async()=>await t({url:"".concat(a,"/api/system-feature"),method:"GET",body:{group:"WHEEL"},authorization:r(),headers:{appversioncode:1,appversionname:"3.0.21",webappname:"WA_SBPS_24"}}),updateProfile:async e=>await t({url:"".concat(a,"/api/user/update-profile"),method:"PUT",body:e,authorization:r(),headers:{appversioncode:1,appversionname:"3.0.21",webappname:"WA_SBPS_24"}})}},2826:function(e,o,n){function t(e){let o=new Date(e),n=String(o.getDate()).padStart(2,"0"),t=String(o.getMonth()+1).padStart(2,"0"),a=o.getFullYear();return"".concat(n,"/").concat(t,"/").concat(a)}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,o=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),t=e.getFullYear(),a=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0"),i=String(e.getSeconds()).padStart(2,"0");return"".concat(o,"/").concat(n,"/").concat(t," - ").concat(a,":").concat(r,":").concat(i)}n.d(o,{e:function(){return a},p:function(){return t}})}}]);