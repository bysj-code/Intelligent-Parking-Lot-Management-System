(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cheweiyuding/detail"],{"182a":function(t,e,n){"use strict";var a=n("2217"),s=n.n(a);s.a},2217:function(t,e,n){},"4cba":function(t,e,n){"use strict";(function(t){n("c085");a(n("66fd"));var e=a(n("9721"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"4d6e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,a,s,r,i){try{var u=t[r](i),o=u.value}catch(c){return void n(c)}u.done?e(o):Promise.resolve(o).then(a,s)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(a,s){var i=t.apply(e,n);function u(t){r(i,a,s,u,o,"next",t)}function o(t){r(i,a,s,u,o,"throw",t)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(t){var e=this;return i(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id,t.userid&&(e.userid=t.userid);case 2:case"end":return n.stop()}}),n)})))()},onShow:function(e){var n=this;return i(a.default.mark((function e(){var s,r;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.init(),s=t.getStorageSync("nowTable"),e.next=4,n.$api.session(s);case 4:r=e.sent,n.user=r.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","cheweiyuding"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onAcrossTap:function(e,n,a,s,r){if("是"!=n||"是"==this.detail.sfsh){if(t.setStorageSync("crossTable","cheweiyuding"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",a),t.setStorageSync("statusColumnValue",r),t.setStorageSync("tips",s),""!=a&&!a.startsWith("[")){var i=t.getStorageSync("crossObj");for(var u in i)if(u==a&&i[u]==r)return void this.$utils.msg(s)}this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))}else this.$utils.msg("请审核通过后再操作")},init:function(){var t=this;return i(a.default.mark((function e(){var n;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.info("cheweiyuding",t.id);case 2:n=e.sent,t.detail=n.data,t.swiperList=t.detail.cheweitupian?t.detail.cheweitupian.split(","):[];case 5:case"end":return e.stop()}}),e)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return i(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.endSuccess(t.size,e.hasNext);case 1:case"end":return n.stop()}}),n)})))()},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;e=n.$base.url+e,t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=this;return i(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$utils.jump("../discusscheweiyuding/add-or-update?refid=".concat(t.id));case 1:case"end":return e.stop()}}),e)})))()},onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=this;return i(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.detail.sfsh){e.next=3;break}return t.$utils.msg("请选择审核状态"),e.abrupt("return");case 3:if(t.detail.shhf){e.next=6;break}return t.$utils.msg("请填写审核回复"),e.abrupt("return");case 6:return"通过"==t.detail.sfsh&&(t.detail.sfsh="是"),"不通过"==t.detail.sfsh&&(t.detail.sfsh="否"),e.next=10,t.$api.update("cheweiyuding",t.detail);case 10:t.$utils.msg("审核成功"),t.$refs.popup.close();case 12:case"end":return e.stop()}}),e)})))()},onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=u}).call(this,n("543d")["default"])},"8d66":function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"9138"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"74e1"))}},s=function(){var t=this,e=t.$createElement,n=(t._self._c,t.isAuth("cheweiyuding","支付")),a=t.isAuthFront("cheweiyuding","支付"),s=t.isAuth("cheweiyuding","支付"),r=t.isAuth("cheweiyuding","审核"),i=t.isAuthFront("cheweiyuding","审核");t.$mp.data=Object.assign({},{$root:{m0:n,m1:a,m2:s,m3:r,m4:i}})},r=[]},9721:function(t,e,n){"use strict";n.r(e);var a=n("8d66"),s=n("d69d");for(var r in s)"default"!==r&&function(t){n.d(e,t,(function(){return s[t]}))}(r);n("182a");var i,u=n("f0c5"),o=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=o.exports},d69d:function(t,e,n){"use strict";n.r(e);var a=n("4d6e"),s=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=s.a}},[["4cba","common/runtime","common/vendor"]]]);