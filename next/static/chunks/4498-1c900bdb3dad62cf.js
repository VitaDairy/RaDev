"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4498],{6981:function(e,t,n){n.d(t,{As:function(){return y},CA:function(){return c},Le:function(){return h},Ny:function(){return u},Oy:function(){return v},QO:function(){return _},QV:function(){return l},R2:function(){return m},SO:function(){return d},U7:function(){return p},hy:function(){return S},iM:function(){return g},lm:function(){return s},rf:function(){return f},vP:function(){return w},xb:function(){return P}});var o=n(3056),r=n(2826);let a={},i=e=>{if(window.gtag){let n=e.event;try{var t;if(a[n])return;a[n]=!0;let r=null===o.Z||void 0===o.Z?void 0:null===(t=o.Z.getState())||void 0===t?void 0:t.user,i=r&&r.id||null;e.pr_user_id=i||null;let{event:l,...s}=e;console.log("\uD83D\uDE80 ~ sendCustomerEvent ~ props:",e),window.gtag("event",l,s)}catch(e){console.log("\uD83D\uDE80 ~ sendCustomerEvent ~ error",e)}finally{setTimeout(()=>{a[n]=!1},1e3)}}},l=()=>{i({event:"ev_account_click_join_now_wa",pr_event_group:"account",pr_start_time:(0,r.e)()})},s=e=>{let{phone:t}=e;i({event:"ev_account_registration_potential_phone_wa",pr_event_group:"account",pr_start_time:(0,r.e)(),pr_registration_method:"SMS",pr_registration_potential_phone:t})},u=e=>{let{phone:t,startTime:n=new Date,endDate:o=new Date}=e;i({event:"ev_account_complete_registration_wa",pr_event_group:"account",pr_start_time:(0,r.e)(),pr_phone_number:t,pr_end_registration_time:(0,r.e)(),pr_event_total_registration_time:(o-n)/1e3,pr_registration_method:"SMS",pr_registration_value:""})},c=e=>{let{phone:t,reason:n,startTime:o=new Date}=e,a=new Date;i({event:"ev_account_failed_registration_wa",pr_event_group:"account",pr_start_time:(0,r.e)(o),pr_end_registration_time:(0,r.e)(a),pr_event_total_registration_time:(a-o)/1e3,pr_registration_method:"SMS",pr_registration_value:t,pr_reason_message:n})},_=e=>{let{startTime:t=new Date,phone:n,provinceId:o,districtId:a,wardId:l,address:s}=e;i({event:"ev_account_submit_save_address_wa",pr_event_group:"content",pr_start_time:(0,r.e)(t),pr_user_sdt:n,pr_province_id:o,pr_district_id:a,pr_ward_id:l,pr_address:s,pr_json_data:JSON.stringify({phone:n,provinceId:o,districtId:a,wardId:l,address:s})})},d=e=>{let{phone:t}=e;i({event:"ev_account_complete_join_now_wa",pr_event_group:"account",pr_start_time:(0,r.e)(),pr_login_method:"SMS",pr_json_data:JSON.stringify({phone:t})})},p=e=>{let{phone:t,reason:n}=e;i({event:"ev_account_failed_join_now_wa",pr_event_group:"account",pr_start_time:(0,r.e)(),pr_login_method:"SMS",pr_login_failed_value:t,pr_reason_message_error:n})},v=()=>{i({event:"ev_account_sign_out_wa",pr_event_group:"account",pr_start_time:(0,r.e)()})},g=e=>{let{qrCode:t}=e;i({event:"ev_product_verify_powdered_ready_made_milk_wa",pr_event_group:"product",pr_start_time:(0,r.e)(),pr_qr_type:"qrSuaBotPhaSan",pr_qr_code:t})},h=e=>{let{qrCode:t,startTime:n=new Date,endTime:o=new Date}=e;i({event:"ev_product_verify_powdered_ready_made_milk_success_wa",pr_event_group:"gift",pr_start_time:(0,r.e)(n),pr_qr_type:"qrSuaBotPhaSan",pr_qr_code:t,pr_total_verify_time:(o-n)/1e3,pr_end_verify_time:(0,r.e)(o)})},m=e=>{let{qrCode:t,reason:n,startTime:o=new Date,endTime:a=new Date}=e;i({event:"ev_product_verify_powdered_ready_made_milk_failed_wa",pr_event_group:"gift",pr_start_time:(0,r.e)(o),pr_qr_type:"qrSuaBotPhaSan",pr_qr_code:t,pr_end_verify_time:(0,r.e)(a),pr_total_verify_time:(a-o)/1e3,pr_verify_reason_fail:n})},y=()=>{i({event:"ev_content_click_notification_wa",pr_event_group:"content",pr_start_time:(0,r.e)()})},S=()=>{i({event:"ev_content_click_open_instruct_wa",pr_event_group:"content",pr_start_time:(0,r.e)(),pr_title_content_web:"",pr_url_web_view:""})},f=()=>{i({event:"ev_content_click_rules_wa",pr_event_group:"content",pr_start_time:(0,r.e)(),pr_title_content_web:"",pr_url_web_view:""})},w=()=>{console.log("\uD83D\uDE80 ~ sendEventClickHotline ~ sendEventClickHotline"),i({event:"ev_content_click_hotiline_wa",pr_event_group:"content",pr_start_time:(0,r.e)()})},P=()=>{i({event:"ev_content_click_chat",pr_event_group:"content",pr_start_time:(0,r.e)()})}},3056:function(e,t,n){var o=n(9099),r=n(9291),a=n(6981),i=n(3874);let l=(0,o.Ue)()((0,r.tJ)((e,t)=>({user:null,auth:null,phone:null,otp:null,address:null,token:null,verifyPhone:null,source:null,isLoggedIn:!1,loginError:null,provinces:null,districts:null,wards:null,authorization:null,isShowPopupGuideScanQR:!1,listNotis:[],actionSetShowPopupGuideScanQR:t=>{e({isShowPopupGuideScanQR:t})},actionReset:()=>{e({user:null,auth:null,phone:null,otp:null,address:null,token:null,verifyPhone:null,source:null,isLoggedIn:!1,loginError:null,provinces:null,districts:null,wards:null,authorization:null,isShowPopupGuideScanQR:!1})},actionPrefetchUser:async()=>{i.ZP.getUser().then(t=>{var n;e({user:null==t?void 0:null===(n=t.response)||void 0===n?void 0:n.user})})},actionPrefetchData:async e=>{let{}=e;i.ZP.getNotificationUnread().then(()=>{}),i.ZP.getGifts().then(()=>{}),i.ZP.getVouchers().then(()=>{}),i.ZP.getEvents().then(()=>{})},getDataNotis:async t=>{let{page:n}=t;i.ZP.getNotifications({page:n}).then(t=>{e({listNotis:null==t?void 0:t.response})})},actionGetProvinces:async()=>{var n;if(t().provinces)return{provinces:t().provinces};let[o]=await Promise.all([i.ZP.getProvinces()]);return(null==o?void 0:null===(n=o.meta)||void 0===n?void 0:n.status)!==1e3?{provinces:null}:(e({provinces:o.response.provinces}),{provinces:o.response.provinces})},actionVerifyPhoneNumber:async t=>{let n=await i.ZP.verifyPhoneNumber(t);return e({verifyPhone:n,phone:t,source:n?"LOGIN":"REGISTER"}),{verifyPhone:n,phone:t,source:n?"LOGIN":"REGISTER"}},actionReloadDataUser:async()=>{var n;let o="".concat(t().authorization),[r,a]=await Promise.all([i.ZP.getAddress({auth:o}),i.ZP.getUser()]),l=(null==r?void 0:null===(n=r.response)||void 0===n?void 0:n.recipientInfoList)||[],s=(null==a?void 0:a.response.user)||{};return e({user:s,isLoggedIn:!0,loginError:null,address:l}),{user:s,isLoggedIn:!0,loginError:null,address:l}},actionLogin:async(t,n)=>{try{var o,r,l,s,u;if(!await i.ZP.verifyPhoneNumber(t))return e({user:null,token:null,isLoggedIn:!1,loginError:"verify phone number false",phone:t,otp:n}),{user:null,token:null,isLoggedIn:!1,loginError:"verify phone number false"};let c=await i.ZP.login(t,n);if((null==c?void 0:null===(o=c.meta)||void 0===o?void 0:o.status)!==1e3)return(0,a.U7)({phone:t,reason:null==c?void 0:null===(l=c.meta)||void 0===l?void 0:l.msg}),e({user:null,token:null,isLoggedIn:!1,loginError:null==c?void 0:null===(s=c.meta)||void 0===s?void 0:s.msg,phone:t,otp:n}),{user:null,token:null,isLoggedIn:!1,loginError:null==c?void 0:null===(u=c.meta)||void 0===u?void 0:u.msg};let{user:_,auth:d}=(null==c?void 0:c.response)||{};(0,a.SO)({phone:t}),localStorage.setItem("token",d.accessToken);let p="Bearer ".concat(d.accessToken);e({user:_,token:d.accessToken,isLoggedIn:!0,loginError:null,auth:d,authorization:p});let[v]=await Promise.all([i.ZP.getAddress({auth:p})]),g=(null==v?void 0:null===(r=v.response)||void 0===r?void 0:r.recipientInfoList)||[];return e({address:g}),{user:_,token:t,isLoggedIn:!0,loginError:null}}catch(o){return e({user:null,token:null,isLoggedIn:!1,loginError:o.message||"Login failed",phone:t,otp:n}),{user:null,token:null,isLoggedIn:!1,loginError:o.message||"Login failed"}}},actionRegister:async t=>{try{var n,o;if((null==t?void 0:null===(n=t.meta)||void 0===n?void 0:n.status)!==1e3)return{user:null,token:null,isLoggedIn:!1,loginError:"Register failed"};let{user:r,auth:a}=(null==t?void 0:t.response)||{};localStorage.setItem("token",a.accessToken);let l="Bearer ".concat(a.accessToken);e({user:r,token:a.accessToken,isLoggedIn:!0,loginError:null,auth:a,authorization:l});let[s]=await Promise.all([i.ZP.getAddress({auth:l})]),u=(null==s?void 0:null===(o=s.response)||void 0===o?void 0:o.recipientInfoList)||[];return e({address:u}),{user:r,isLoggedIn:!0,loginError:null}}catch(t){return e({user:null,token:null,isLoggedIn:!1,loginError:t.message||"Login failed"}),{user:null,token:null,isLoggedIn:!1,loginError:t.message||"Login failed"}}},logout:()=>{localStorage.removeItem("login-storage"),t().actionReset()}}),{name:"login-storage",storage:(0,r.FL)(()=>localStorage)}));t.Z=l},3874:function(e,t,n){n.d(t,{ZP:function(){return c}});let o=new Map,r=async e=>{let{url:t,method:n,body:a,authorization:i,headers:l={},isGetCache:s=!1,isUpdateCache:u=!1,ttl:c=9e4}=e;try{let e={"Content-Type":"application/json",...l};i&&(e.Authorization=i),u&&(e.Priority="low");let _=t;("GET"===n||"DELETE"===n)&&(a&&Object.keys(a).length>0&&(_="".concat(t,"?").concat(new URLSearchParams(a).toString())),a=void 0);let d=a?JSON.stringify(a):void 0,p=Date.now();if(s&&o.has(t)){let{response:e,timestamp:s}=o.get(t),u=p-s;if(u<c)return console.log("Serving cached response for ".concat(t)),u>6e4&&r({url:t,method:n,body:a,authorization:i,headers:l,isGetCache:!1,isUpdateCache:!0}),e}let v=await fetch(_,{method:n,headers:e,body:d});return u&&o.set(_,{response:v,timestamp:p}),null==v?void 0:v.json()}catch(e){return console.log(e),{error:e,status:500}}},a="https://api-sandbox.vitadairyvietnam.vn",i=()=>{try{var e,t;let n=(null===(e=localStorage)||void 0===e?void 0:e.getItem("login-storage"))||"{}",o=JSON.parse(n);return(null==o?void 0:null===(t=o.state)||void 0===t?void 0:t.authorization)||""}catch(e){return null}},l=["2024_SBPS_OTO","2024_SBPS_IPHONE","2024_SBPS_10TR","2024_SBPS_5TR","2024_SBPS_THE20K","2024_SBPS_THE10K","2024_SBPS_CHUCMAYMAN","2024_SBPS_HETGIAI","SBPS_QR_USED"],s=0,u=async e=>{var t,n,o,l;let{page:s=0,size:u=10,body:c}=e,_=await r({url:"".concat(a,"/v4/gs/user-gifts"),method:"GET",authorization:i(),body:{page:0,size:u,...c}}),d=null==_?void 0:null===(n=_.response)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.data,p=[];for(let e=1;e<=(null==_?void 0:null===(l=_.response)||void 0===l?void 0:null===(o=l.data)||void 0===o?void 0:o.total);e+=1)p.push(r({url:"".concat(a,"/v4/gs/user-gifts"),method:"GET",authorization:i(),body:{page:e,size:10,...c},isGetCache:!0,isUpdateCache:!0}).then(e=>{var t,n;d=d.concat(null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.data)}));return await Promise.all(p),d&&(_.response.data.data=d),_};var c={getUser:async()=>await r({url:"".concat(a,"/api-v3/loyalty/v1/user"),method:"GET",authorization:i(),isGetCache:!0,isUpdateCache:!0}),getNotificationUnread:async()=>await r({url:"".concat(a,"/api-v3/loyalty/v1/user/notification/unread-count"),method:"GET",authorization:i(),isGetCache:!0,isUpdateCache:!0}),getMyRewards:async()=>await r({url:"".concat(a,"/v4/gs/user-gifts"),method:"GET",authorization:i(),isGetCache:!0,isUpdateCache:!0}),sendOTP:async(e,t)=>"LOGIN"===t?await r({url:"".concat(a,"/api-v3/loyalty/send-zalo"),method:"POST",headers:{appversioncode:12,appversionname:"3.2.27"},body:{phone:e,source:"LOGIN_WA"}}):await r({url:"".concat(a,"/api-v3/loyalty/send-zalo"),method:"POST",body:{phone:e,source:t},authorization:i()}),verifyOTP:async(e,t)=>await r({url:"".concat(a,"/api-v3/loyalty/verify-otp"),method:"POST",body:{phone:e,otp:t},authorization:i()}),getNotifications:async e=>{let{page:t=1,size:n=20}=e;return await r({url:"".concat(a,"/api-v3/noti/user/noti"),method:"GET",authorization:i(),body:{page:t,size:n},isGetCache:!0,isUpdateCache:!0})},getDetailNotifications:async e=>{let{id:t,page:n=1,size:o=20}=e;return await r({url:"".concat(a,"/api-v3/noti/user/noti/").concat(t),method:"GET",authorization:i(),isGetCache:!0,isUpdateCache:!0})},readDetailNotifications:async e=>{let{id:t}=e;return await r({url:"".concat(a,"/api-v3/noti/user/noti/").concat(t,"/read"),method:"POST",authorization:i(),body:{id:t}})},getAddress:async e=>{let{auth:t}=e;return await r({url:"".concat(a,"/api/recipient/me"),method:"GET",authorization:t||i(),isGetCache:!0,isUpdateCache:!0})},logout:async()=>await r({url:"".concat(a,"/api/user/logout"),method:"POST",authorization:i()}),verifyPhoneNumber:async e=>await r({url:"".concat(a,"/api-v3/loyalty/v1/user/auth/check-phone-number"),method:"GET",authorization:i(),body:{phoneNumber:e}}),getProvinces:async()=>await r({url:"".concat(a,"/api/province/vn"),method:"GET",authorization:i(),isGetCache:!0,isUpdateCache:!0}),getWardsAndDistricts:async e=>{let{code:t}=e;return await r({url:"".concat(a,"/api/province/parent/").concat(t),method:"GET",authorization:i(),isGetCache:!0,isUpdateCache:!0})},register:async e=>await r({url:"".concat(a,"/api/user/register"),method:"POST",body:e,headers:{webappname:"WA_SBPS_24",appversioncode:12,appversionname:"3.1.2"}}),login:async(e,t)=>await r({url:"".concat(a,"/api/user/login-calosure"),method:"POST",body:{phoneNumber:e,otp:t,otpType:"LOGIN_WA"},headers:{appversioncode:2,appversionname:"3.2.10"}}),verifyBlockedScan:async()=>await r({url:"".concat(a,"/api-v3/loyalty/v1/user/blocked-scan"),method:"GET",authorization:i()}),getQrCode:async e=>{let{qrCode:t}=e;return await r({url:"".concat(a,"/api-v3/loyalty/v1/user/qr-code/qr-information"),method:"GET",authorization:i(),body:{qrCode:t},headers:{appversioncode:12,appversionname:"3.1.2",webappname:"WA_SBPS_24"},isGetCache:!0,isUpdateCache:!0})},validateProduct:async e=>{let{qrCode:t,sku:n,mock:o=!0}=e;return o?((s+=1)>=l.length&&(s=0),{response:null,meta:{status:1e3},notification:{code:l[s]}}):await r({url:"".concat(a,"/api-v3/loyalty/v1/user/qr-code/scan-product/SBPS"),method:"POST",authorization:i(),body:{qrCode:t,sku:n},headers:{Accept:"application/json",appversionname:"3.2.23",webappname:"WA_SBPS_24"}})},getGifts:async()=>await u({page:0,size:15,body:{giftTypes:"GIFT",statuses:"PENDING,EXCHANGED"}}),getVouchers:async()=>u({page:0,size:15,body:{giftTypes:"E_VOUCHER,E_VOUCHER_SHOP,E_VOUCHER_SHOP_BKIDS,EV_VITA_CODE"}}),getAlls:u,orderGift:async e=>{let{recipientSnapshot:t,userGiftSnapshot:n,userId:o}=e;return await r({url:"".concat(a,"/v4/os/orders"),method:"POST",body:{recipientSnapshot:t,userGiftSnapshot:n,userId:o},authorization:i()})},getEvents:async()=>await r({url:"".concat(a,"/api/system-feature"),method:"GET",body:{group:"WHEEL"},authorization:i(),headers:{appversioncode:1,appversionname:"3.0.21",webappname:"WA_SBPS_24"},isGetCache:!0,isUpdateCache:!0}),updateProfile:async e=>await r({url:"".concat(a,"/api/user/update-profile"),method:"PUT",body:e,authorization:i(),headers:{appversioncode:1,appversionname:"3.0.21",webappname:"WA_SBPS_24"}}),useVoucher:async e=>{let{userGiftId:t}=e;return await r({url:"".concat(a,"/v4/gs/user-gifts/reuse"),method:"POST",authorization:i(),body:{userGiftId:t}})},reSendSMS:async(e,t)=>await r({url:"".concat(a,"api-v3/loyalty/send-sms"),method:"POST",body:{phone:e,source:"REGISTER"===t?"REGISTER":"CHANGE_PASSWORD"},authorization:i(),headers:{appversioncode:12,appversionname:"3.2.27"}})}},2826:function(e,t,n){function o(e){let t=new Date(e),n=String(t.getDate()).padStart(2,"0"),o=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();return"".concat(n,"/").concat(o,"/").concat(r)}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear(),r=String(e.getHours()).padStart(2,"0"),a=String(e.getMinutes()).padStart(2,"0"),i=String(e.getSeconds()).padStart(2,"0");return"".concat(t,"/").concat(n,"/").concat(o," - ").concat(r,":").concat(a,":").concat(i)}n.d(t,{e:function(){return r},p:function(){return o}})}}]);