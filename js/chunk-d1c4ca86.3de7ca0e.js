(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1c4ca86"],{"2a0c":function(t,a,e){t.exports=e.p+"img/img-2.d13ce9ed.png"},"2ee4":function(t,a,e){!function(a,e){t.exports=e()}("undefined"!=typeof self&&self,(function(){return function(t){function a(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,a),s.l=!0,s.exports}var e={};return a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},a.p="",a(a.s=7)}([function(t,a){t.exports=function(t,a,e,i,s,o){var n,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(n=t,r=t.default);var v,c="function"==typeof r?r.options:r;if(a&&(c.render=a.render,c.staticRenderFns=a.staticRenderFns,c._compiled=!0),e&&(c.functional=!0),s&&(c._scopeId=s),o?(v=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=v):i&&(v=i),v){var u=c.functional,d=u?c.render:c.beforeCreate;u?(c._injectStyles=v,c.render=function(t,a){return v.call(a),d(t,a)}):c.beforeCreate=d?[].concat(d,v):[v]}return{esModule:n,exports:r,options:c}}},function(t,a,e){"use strict";var i=e(2),s=e(4),o=e(14);a.a={name:"form-wizard",components:{WizardButton:i.a,WizardStep:s.a},props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},hideButtons:{type:Boolean,default:!1},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},layout:{type:String,default:"horizontal"},stepsClasses:{type:[String,Array],default:""},stepSize:{type:String,default:"md",validator:function(t){return-1!==["xs","sm","md","lg"].indexOf(t)}},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},provide:function(){return{addTab:this.addTab,removeTab:this.removeTab}},data:function(){return{activeTabIndex:0,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{slotProps:function(){return{nextTab:this.nextTab,prevTab:this.prevTab,activeTabIndex:this.activeTabIndex,isLastStep:this.isLastStep,fillButtonStyle:this.fillButtonStyle}},tabCount:function(){return this.tabs.length},isLastStep:function(){return this.activeTabIndex===this.tabCount-1},isVertical:function(){return"vertical"===this.layout},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){return this.activeTabIndex>0?this.stepPercentage*(2*this.activeTabIndex+1):this.stepPercentage}},methods:{emitTabChange:function(t,a){this.$emit("on-change",t,a),this.$emit("update:startIndex",a)},addTab:function(t){var a=this.$slots.default.indexOf(t.$vnode);t.tabId=""+t.title.replace(/ /g,"")+a,this.tabs.splice(a,0,t),a<this.activeTabIndex+1&&(this.maxStep=a,this.changeTab(this.activeTabIndex+1,a))},removeTab:function(t){var a=this.tabs,e=a.indexOf(t);e>-1&&(e===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),e<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1,this.emitTabChange(this.activeTabIndex+1,this.activeTabIndex)),a.splice(e,1))},reset:function(){this.maxStep=0,this.tabs.forEach((function(t){t.checked=!1})),this.navigateToTab(0)},activateAll:function(){this.maxStep=this.tabs.length-1,this.tabs.forEach((function(t){t.checked=!0}))},navigateToTab:function(t){var a=this,e=t>this.activeTabIndex;if(t<=this.maxStep){var i=function i(){e&&t-a.activeTabIndex>1?(a.changeTab(a.activeTabIndex,a.activeTabIndex+1),a.beforeTabChange(a.activeTabIndex,i)):(a.changeTab(a.activeTabIndex,t),a.afterTabChange(a.activeTabIndex))};e?this.beforeTabChange(this.activeTabIndex,i):(this.setValidationError(null),i())}return t<=this.maxStep},nextTab:function(){var t=this,a=function(){t.activeTabIndex<t.tabCount-1?(t.changeTab(t.activeTabIndex,t.activeTabIndex+1),t.afterTabChange(t.activeTabIndex)):t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,a)},prevTab:function(){var t=this,a=function(){t.activeTabIndex>0&&(t.setValidationError(null),t.changeTab(t.activeTabIndex,t.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,a):a()},focusNextTab:function(){var t=Object(o.b)(this.tabs);if(-1!==t&&t<this.tabs.length-1){var a=this.tabs[t+1];a.checked&&Object(o.a)(a.tabId)}},focusPrevTab:function(){var t=Object(o.b)(this.tabs);if(-1!==t&&t>0){var a=this.tabs[t-1].tabId;Object(o.a)(a)}},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,a){var e=this;if(this.setValidationError(null),Object(o.c)(t))this.setLoading(!0),t.then((function(t){e.setLoading(!1);var i=!0===t;e.executeBeforeChange(i,a)})).catch((function(t){e.setLoading(!1),e.setValidationError(t)}));else{var i=!0===t;this.executeBeforeChange(i,a)}},executeBeforeChange:function(t,a){this.$emit("on-validate",t,this.activeTabIndex),t?a():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,a){if(!this.loading){var e=this.tabs[t];if(e&&void 0!==e.beforeChange){var i=e.beforeChange();this.validateBeforeChange(i,a)}else a()}},afterTabChange:function(t){if(!this.loading){var a=this.tabs[t];a&&void 0!==a.afterChange&&a.afterChange()}},changeTab:function(t,a){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=this.tabs[t],s=this.tabs[a];return i&&(i.active=!1),s&&(s.active=!0),e&&this.activeTabIndex!==a&&this.emitTabChange(t,a),this.activeTabIndex=a,this.activateTabAndCheckStep(this.activeTabIndex),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkRouteChange:function(t){var a=-1,e=this.tabs.find((function(e,i){var s=e.route===t;return s&&(a=i),s}));if(e&&!e.active){var i=a>this.activeTabIndex;this.navigateToTab(a,i)}},deactivateTabs:function(){this.tabs.forEach((function(t){t.active=!1}))},activateTab:function(t){this.deactivateTabs();var a=this.tabs[t];a&&(a.active=!0,a.checked=!0,this.tryChangeRoute(a))},activateTabAndCheckStep:function(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs:function(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):window.console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}},mounted:function(){this.initializeTabs()},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,a,e){"use strict";function i(t){e(10)}var s=e(3),o=e(11),n=e(0),r=i,l=n(s.a,o.a,!1,r,null,null);a.a=l.exports},function(t,a,e){"use strict";a.a={}},function(t,a,e){"use strict";function i(t){e(12)}var s=e(5),o=e(13),n=e(0),r=i,l=n(s.a,o.a,!1,r,null,null);a.a=l.exports},function(t,a,e){"use strict";a.a={name:"wizard-step",props:{tab:{type:Object,default:function(){}},transition:{type:String,default:""},index:{type:Number,default:0}},computed:{iconActiveStyle:function(){return{backgroundColor:this.tab.color}},stepCheckedStyle:function(){return{borderColor:this.tab.color}},errorStyle:function(){return{borderColor:this.tab.errorColor,backgroundColor:this.tab.errorColor}},stepTitleStyle:function(){return{color:this.tab.validationError?this.tab.errorColor:this.tab.color}},isStepSquare:function(){return"square"===this.tab.shape},isTabShape:function(){return"tab"===this.tab.shape}}}},function(t,a,e){"use strict";a.a={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function},route:{type:[String,Object]},additionalInfo:{type:Object,default:function(){}}},inject:["addTab","removeTab"],data:function(){return{active:!1,validationError:null,checked:!1,tabId:""}},computed:{shape:function(){return this.$parent.shape},color:function(){return this.$parent.color},errorColor:function(){return this.$parent.errorColor}},mounted:function(){this.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeTab(this)}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(8),s=e(16),o=e(2),n=e(4);e.d(a,"FormWizard",(function(){return i.a})),e.d(a,"TabContent",(function(){return s.a})),e.d(a,"WizardButton",(function(){return o.a})),e.d(a,"WizardStep",(function(){return n.a}));var r={install:function(t){t.component("form-wizard",i.a),t.component("tab-content",s.a),t.component("wizard-button",o.a),t.component("wizard-step",n.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),a.default=r},function(t,a,e){"use strict";function i(t){e(9)}var s=e(1),o=e(15),n=e(0),r=i,l=n(s.a,o.a,!1,r,null,null);a.a=l.exports},function(t,a){},function(t,a){},function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement;return(t._self._c||a)("button",{staticClass:"wizard-btn",attrs:{tabindex:"-1",type:"button"}},[t._t("default")],2)},s=[],o={render:i,staticRenderFns:s};a.a=o},function(t,a){},function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{class:{active:t.tab.active}},[e("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[e("div",{staticClass:"wizard-icon-circle md",class:{checked:t.tab.checked,square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.checked?t.stepCheckedStyle:{},t.tab.validationError?t.errorStyle:{}],attrs:{role:"tab",tabindex:t.tab.checked?0:"",id:"step-"+t.tab.tabId,"aria-controls":t.tab.tabId,"aria-disabled":t.tab.active,"aria-selected":t.tab.active}},[e("transition",{attrs:{name:t.transition,mode:"out-in"}},[t.tab.active?e("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.active?t.iconActiveStyle:{},t.tab.validationError?t.errorStyle:{}]},[t._t("active-step",[t.tab.icon?e("i",{staticClass:"wizard-icon",class:t.tab.icon}):e("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2):t._e(),t._v(" "),t.tab.active?t._e():t._t("default",[!t.tab.active&&t.tab.icon?e("i",{staticClass:"wizard-icon",class:t.tab.icon}):t._e(),t._v(" "),t.tab.active||t.tab.icon?t._e():e("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2)],1),t._v(" "),t._t("title",[e("span",{staticClass:"stepTitle",class:{active:t.tab.active,has_error:t.tab.validationError},style:t.tab.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(t.tab.title)+"\n      ")])])],2)])},s=[],o={render:i,staticRenderFns:s};a.a=o},function(t,a,e){"use strict";function i(){return document.activeElement.id}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=i();return t.findIndex((function(t){return t.tabId===a}))}function o(t){document.getElementById(t).focus()}function n(t){return t.then&&"function"==typeof t.then}a.b=s,a.a=o,a.c=n},function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"vue-form-wizard",class:[t.stepSize,{vertical:t.isVertical}],on:{keyup:[function(a){return"button"in a||!t._k(a.keyCode,"right",39,a.key)?"button"in a&&2!==a.button?null:void t.focusNextTab(a):null},function(a){return"button"in a||!t._k(a.keyCode,"left",37,a.key)?"button"in a&&0!==a.button?null:void t.focusPrevTab(a):null}]}},[e("div",{staticClass:"wizard-header"},[t._t("title",[e("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),e("div",{staticClass:"wizard-navigation"},[t.isVertical?t._e():e("div",{staticClass:"wizard-progress-with-circle"},[e("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),e("ul",{staticClass:"wizard-nav wizard-nav-pills",class:t.stepsClasses,attrs:{role:"tablist"}},[t._l(t.tabs,(function(a,i){return t._t("step",[e("wizard-step",{attrs:{tab:a,"step-size":t.stepSize,transition:t.transition,index:i},nativeOn:{click:function(a){t.navigateToTab(i)},keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.navigateToTab(i)}}})],{tab:a,index:i,navigateToTab:t.navigateToTab,stepSize:t.stepSize,transition:t.transition})}))],2),t._v(" "),e("div",{staticClass:"wizard-tab-content"},[t._t("default",null,null,t.slotProps)],2)]),t._v(" "),t.hideButtons?t._e():e("div",{staticClass:"wizard-card-footer clearfix"},[t._t("footer",[e("div",{staticClass:"wizard-footer-left"},[t.displayPrevButton?e("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.prevTab(a)}}},[t._t("prev",[e("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n              "+t._s(t.backButtonText)+"\n            ")])],null,t.slotProps)],2):t._e(),t._v(" "),t._t("custom-buttons-left",null,null,t.slotProps)],2),t._v(" "),e("div",{staticClass:"wizard-footer-right"},[t._t("custom-buttons-right",null,null,t.slotProps),t._v(" "),t.isLastStep?e("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.nextTab(a)}}},[t._t("finish",[e("wizard-button",{style:t.fillButtonStyle},[t._v("\n              "+t._s(t.finishButtonText)+"\n            ")])],null,t.slotProps)],2):e("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.nextTab(a)}}},[t._t("next",[e("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n            "+t._s(t.nextButtonText)+"\n           ")])],null,t.slotProps)],2)],2)],null,t.slotProps)],2)])},s=[],o={render:i,staticRenderFns:s};a.a=o},function(t,a,e){"use strict";var i=e(6),s=e(17),o=e(0),n=o(i.a,s.a,!1,null,null,null);a.a=n.exports},function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement;return(t._self._c||a)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container",attrs:{role:"tabpanel",id:t.tabId,"aria-hidden":!t.active,"aria-labelledby":"step-"+t.tabId}},[t._t("default",null,{active:t.active})],2)},s=[],o={render:i,staticRenderFns:s};a.a=o}])}))},"4eee":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("Layout",[i("PageHeader",{attrs:{title:t.title,items:t.items}}),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-8"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("form-wizard",{attrs:{color:"#5664d2"}},[i("tab-content",{attrs:{title:"Billing Info"}},[i("div",{staticClass:"tab-pane",attrs:{id:"billing-info"}},[i("h5",{staticClass:"card-title"},[t._v("Billing information")]),i("p",{staticClass:"card-title-desc"},[t._v("If several languages coalesce, the grammar of the resulting")]),i("form",[i("div",[i("div",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-4"},[i("div",{staticClass:"form-group mb-4"},[i("label",{attrs:{for:"billing-name"}},[t._v("Name")]),i("input",{staticClass:"form-control",attrs:{type:"text",id:"billing-name",placeholder:"Enter name"}})])]),i("div",{staticClass:"col-lg-4"},[i("div",{staticClass:"form-group mb-4"},[i("label",{attrs:{for:"billing-email-address"}},[t._v("Email Address")]),i("input",{staticClass:"form-control",attrs:{type:"email",id:"billing-email-address",placeholder:"Enter email"}})])]),i("div",{staticClass:"col-lg-4"},[i("div",{staticClass:"form-group mb-4"},[i("label",{attrs:{for:"billing-phone"}},[t._v("Phone")]),i("input",{staticClass:"form-control",attrs:{type:"text",id:"billing-phone",placeholder:"Enter Phone no."}})])])]),i("div",{staticClass:"form-group mb-4"},[i("label",{attrs:{for:"billing-address"}},[t._v("Address")]),i("textarea",{staticClass:"form-control",attrs:{id:"billing-address",rows:"3",placeholder:"Enter full address"}})]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-4"},[i("div",{staticClass:"form-group mb-4 mb-lg-0"},[i("label",[t._v("Country")]),i("select",{staticClass:"form-control custom-select",attrs:{title:"Country"}},[i("option",{attrs:{value:"0"}},[t._v("Select Country")]),i("option",{attrs:{value:"AF"}},[t._v("Afghanistan")]),i("option",{attrs:{value:"AL"}},[t._v("Albania")]),i("option",{attrs:{value:"DZ"}},[t._v("Algeria")]),i("option",{attrs:{value:"AS"}},[t._v("American Samoa")]),i("option",{attrs:{value:"AD"}},[t._v("Andorra")]),i("option",{attrs:{value:"AO"}},[t._v("Angola")]),i("option",{attrs:{value:"AI"}},[t._v("Anguilla")]),i("option",{attrs:{value:"AQ"}},[t._v("Antarctica")]),i("option",{attrs:{value:"AR"}},[t._v("Argentina")]),i("option",{attrs:{value:"AM"}},[t._v("Armenia")]),i("option",{attrs:{value:"AW"}},[t._v("Aruba")]),i("option",{attrs:{value:"AU"}},[t._v("Australia")]),i("option",{attrs:{value:"AT"}},[t._v("Austria")]),i("option",{attrs:{value:"AZ"}},[t._v("Azerbaijan")]),i("option",{attrs:{value:"BS"}},[t._v("Bahamas")]),i("option",{attrs:{value:"BH"}},[t._v("Bahrain")]),i("option",{attrs:{value:"BD"}},[t._v("Bangladesh")]),i("option",{attrs:{value:"BB"}},[t._v("Barbados")]),i("option",{attrs:{value:"BY"}},[t._v("Belarus")]),i("option",{attrs:{value:"BE"}},[t._v("Belgium")]),i("option",{attrs:{value:"BZ"}},[t._v("Belize")]),i("option",{attrs:{value:"BJ"}},[t._v("Benin")]),i("option",{attrs:{value:"BM"}},[t._v("Bermuda")]),i("option",{attrs:{value:"BT"}},[t._v("Bhutan")]),i("option",{attrs:{value:"BO"}},[t._v("Bolivia")]),i("option",{attrs:{value:"BW"}},[t._v("Botswana")]),i("option",{attrs:{value:"BV"}},[t._v("Bouvet Island")]),i("option",{attrs:{value:"BR"}},[t._v("Brazil")]),i("option",{attrs:{value:"BN"}},[t._v("Brunei Darussalam")]),i("option",{attrs:{value:"BG"}},[t._v("Bulgaria")]),i("option",{attrs:{value:"BF"}},[t._v("Burkina Faso")]),i("option",{attrs:{value:"BI"}},[t._v("Burundi")]),i("option",{attrs:{value:"KH"}},[t._v("Cambodia")]),i("option",{attrs:{value:"CM"}},[t._v("Cameroon")]),i("option",{attrs:{value:"CA"}},[t._v("Canada")]),i("option",{attrs:{value:"CV"}},[t._v("Cape Verde")]),i("option",{attrs:{value:"KY"}},[t._v("Cayman Islands")]),i("option",{attrs:{value:"CF"}},[t._v("Central African Republic")]),i("option",{attrs:{value:"TD"}},[t._v("Chad")]),i("option",{attrs:{value:"CL"}},[t._v("Chile")]),i("option",{attrs:{value:"CN"}},[t._v("China")]),i("option",{attrs:{value:"CX"}},[t._v("Christmas Island")]),i("option",{attrs:{value:"CC"}},[t._v("Cocos (Keeling) Islands")]),i("option",{attrs:{value:"CO"}},[t._v("Colombia")]),i("option",{attrs:{value:"KM"}},[t._v("Comoros")]),i("option",{attrs:{value:"CG"}},[t._v("Congo")]),i("option",{attrs:{value:"CK"}},[t._v("Cook Islands")]),i("option",{attrs:{value:"CR"}},[t._v("Costa Rica")]),i("option",{attrs:{value:"CI"}},[t._v("Cote d'Ivoire")]),i("option",{attrs:{value:"HR"}},[t._v("Croatia (Hrvatska)")]),i("option",{attrs:{value:"CU"}},[t._v("Cuba")]),i("option",{attrs:{value:"CY"}},[t._v("Cyprus")]),i("option",{attrs:{value:"CZ"}},[t._v("Czech Republic")]),i("option",{attrs:{value:"DK"}},[t._v("Denmark")]),i("option",{attrs:{value:"DJ"}},[t._v("Djibouti")]),i("option",{attrs:{value:"DM"}},[t._v("Dominica")]),i("option",{attrs:{value:"DO"}},[t._v("Dominican Republic")]),i("option",{attrs:{value:"EC"}},[t._v("Ecuador")]),i("option",{attrs:{value:"EG"}},[t._v("Egypt")]),i("option",{attrs:{value:"SV"}},[t._v("El Salvador")]),i("option",{attrs:{value:"GQ"}},[t._v("Equatorial Guinea")]),i("option",{attrs:{value:"ER"}},[t._v("Eritrea")]),i("option",{attrs:{value:"EE"}},[t._v("Estonia")]),i("option",{attrs:{value:"ET"}},[t._v("Ethiopia")]),i("option",{attrs:{value:"FK"}},[t._v("Falkland Islands (Malvinas)")]),i("option",{attrs:{value:"FO"}},[t._v("Faroe Islands")]),i("option",{attrs:{value:"FJ"}},[t._v("Fiji")]),i("option",{attrs:{value:"FI"}},[t._v("Finland")]),i("option",{attrs:{value:"FR"}},[t._v("France")]),i("option",{attrs:{value:"GF"}},[t._v("French Guiana")]),i("option",{attrs:{value:"PF"}},[t._v("French Polynesia")]),i("option",{attrs:{value:"GA"}},[t._v("Gabon")]),i("option",{attrs:{value:"GM"}},[t._v("Gambia")]),i("option",{attrs:{value:"GE"}},[t._v("Georgia")]),i("option",{attrs:{value:"DE"}},[t._v("Germany")]),i("option",{attrs:{value:"GH"}},[t._v("Ghana")]),i("option",{attrs:{value:"GI"}},[t._v("Gibraltar")]),i("option",{attrs:{value:"GR"}},[t._v("Greece")]),i("option",{attrs:{value:"GL"}},[t._v("Greenland")]),i("option",{attrs:{value:"GD"}},[t._v("Grenada")]),i("option",{attrs:{value:"GP"}},[t._v("Guadeloupe")]),i("option",{attrs:{value:"GU"}},[t._v("Guam")]),i("option",{attrs:{value:"GT"}},[t._v("Guatemala")]),i("option",{attrs:{value:"GN"}},[t._v("Guinea")]),i("option",{attrs:{value:"GW"}},[t._v("Guinea-Bissau")]),i("option",{attrs:{value:"GY"}},[t._v("Guyana")]),i("option",{attrs:{value:"HT"}},[t._v("Haiti")]),i("option",{attrs:{value:"HN"}},[t._v("Honduras")]),i("option",{attrs:{value:"HK"}},[t._v("Hong Kong")]),i("option",{attrs:{value:"HU"}},[t._v("Hungary")]),i("option",{attrs:{value:"IS"}},[t._v("Iceland")]),i("option",{attrs:{value:"IN"}},[t._v("India")]),i("option",{attrs:{value:"ID"}},[t._v("Indonesia")]),i("option",{attrs:{value:"IQ"}},[t._v("Iraq")]),i("option",{attrs:{value:"IE"}},[t._v("Ireland")]),i("option",{attrs:{value:"IL"}},[t._v("Israel")]),i("option",{attrs:{value:"IT"}},[t._v("Italy")]),i("option",{attrs:{value:"JM"}},[t._v("Jamaica")]),i("option",{attrs:{value:"JP"}},[t._v("Japan")]),i("option",{attrs:{value:"JO"}},[t._v("Jordan")]),i("option",{attrs:{value:"KZ"}},[t._v("Kazakhstan")]),i("option",{attrs:{value:"KE"}},[t._v("Kenya")]),i("option",{attrs:{value:"KI"}},[t._v("Kiribati")]),i("option",{attrs:{value:"KR"}},[t._v("Korea, Republic of")]),i("option",{attrs:{value:"KW"}},[t._v("Kuwait")]),i("option",{attrs:{value:"KG"}},[t._v("Kyrgyzstan")]),i("option",{attrs:{value:"LV"}},[t._v("Latvia")]),i("option",{attrs:{value:"LB"}},[t._v("Lebanon")]),i("option",{attrs:{value:"LS"}},[t._v("Lesotho")]),i("option",{attrs:{value:"LR"}},[t._v("Liberia")]),i("option",{attrs:{value:"LY"}},[t._v("Libyan Arab Jamahiriya")]),i("option",{attrs:{value:"LI"}},[t._v("Liechtenstein")]),i("option",{attrs:{value:"LT"}},[t._v("Lithuania")]),i("option",{attrs:{value:"LU"}},[t._v("Luxembourg")]),i("option",{attrs:{value:"MO"}},[t._v("Macau")]),i("option",{attrs:{value:"MG"}},[t._v("Madagascar")]),i("option",{attrs:{value:"MW"}},[t._v("Malawi")]),i("option",{attrs:{value:"MY"}},[t._v("Malaysia")]),i("option",{attrs:{value:"MV"}},[t._v("Maldives")]),i("option",{attrs:{value:"ML"}},[t._v("Mali")]),i("option",{attrs:{value:"MT"}},[t._v("Malta")]),i("option",{attrs:{value:"MH"}},[t._v("Marshall Islands")]),i("option",{attrs:{value:"MQ"}},[t._v("Martinique")]),i("option",{attrs:{value:"MR"}},[t._v("Mauritania")]),i("option",{attrs:{value:"MU"}},[t._v("Mauritius")]),i("option",{attrs:{value:"YT"}},[t._v("Mayotte")]),i("option",{attrs:{value:"MX"}},[t._v("Mexico")]),i("option",{attrs:{value:"MD"}},[t._v("Moldova, Republic of")]),i("option",{attrs:{value:"MC"}},[t._v("Monaco")]),i("option",{attrs:{value:"MN"}},[t._v("Mongolia")]),i("option",{attrs:{value:"MS"}},[t._v("Montserrat")]),i("option",{attrs:{value:"MA"}},[t._v("Morocco")]),i("option",{attrs:{value:"MZ"}},[t._v("Mozambique")]),i("option",{attrs:{value:"MM"}},[t._v("Myanmar")]),i("option",{attrs:{value:"NA"}},[t._v("Namibia")]),i("option",{attrs:{value:"NR"}},[t._v("Nauru")]),i("option",{attrs:{value:"NP"}},[t._v("Nepal")]),i("option",{attrs:{value:"NL"}},[t._v("Netherlands")]),i("option",{attrs:{value:"AN"}},[t._v("Netherlands Antilles")]),i("option",{attrs:{value:"NC"}},[t._v("New Caledonia")]),i("option",{attrs:{value:"NZ"}},[t._v("New Zealand")]),i("option",{attrs:{value:"NI"}},[t._v("Nicaragua")]),i("option",{attrs:{value:"NE"}},[t._v("Niger")]),i("option",{attrs:{value:"NG"}},[t._v("Nigeria")]),i("option",{attrs:{value:"NU"}},[t._v("Niue")]),i("option",{attrs:{value:"NF"}},[t._v("Norfolk Island")]),i("option",{attrs:{value:"MP"}},[t._v("Northern Mariana Islands")]),i("option",{attrs:{value:"NO"}},[t._v("Norway")]),i("option",{attrs:{value:"OM"}},[t._v("Oman")]),i("option",{attrs:{value:"PW"}},[t._v("Palau")]),i("option",{attrs:{value:"PA"}},[t._v("Panama")]),i("option",{attrs:{value:"PG"}},[t._v("Papua New Guinea")]),i("option",{attrs:{value:"PY"}},[t._v("Paraguay")]),i("option",{attrs:{value:"PE"}},[t._v("Peru")]),i("option",{attrs:{value:"PH"}},[t._v("Philippines")]),i("option",{attrs:{value:"PN"}},[t._v("Pitcairn")]),i("option",{attrs:{value:"PL"}},[t._v("Poland")]),i("option",{attrs:{value:"PT"}},[t._v("Portugal")]),i("option",{attrs:{value:"PR"}},[t._v("Puerto Rico")]),i("option",{attrs:{value:"QA"}},[t._v("Qatar")]),i("option",{attrs:{value:"RE"}},[t._v("Reunion")]),i("option",{attrs:{value:"RO"}},[t._v("Romania")]),i("option",{attrs:{value:"RU"}},[t._v("Russian Federation")]),i("option",{attrs:{value:"RW"}},[t._v("Rwanda")]),i("option",{attrs:{value:"KN"}},[t._v("Saint Kitts and Nevis")]),i("option",{attrs:{value:"LC"}},[t._v("Saint LUCIA")]),i("option",{attrs:{value:"WS"}},[t._v("Samoa")]),i("option",{attrs:{value:"SM"}},[t._v("San Marino")]),i("option",{attrs:{value:"ST"}},[t._v("Sao Tome and Principe")]),i("option",{attrs:{value:"SA"}},[t._v("Saudi Arabia")]),i("option",{attrs:{value:"SN"}},[t._v("Senegal")]),i("option",{attrs:{value:"SC"}},[t._v("Seychelles")]),i("option",{attrs:{value:"SL"}},[t._v("Sierra Leone")]),i("option",{attrs:{value:"SG"}},[t._v("Singapore")]),i("option",{attrs:{value:"SK"}},[t._v("Slovakia (Slovak Republic)")]),i("option",{attrs:{value:"SI"}},[t._v("Slovenia")]),i("option",{attrs:{value:"SB"}},[t._v("Solomon Islands")]),i("option",{attrs:{value:"SO"}},[t._v("Somalia")]),i("option",{attrs:{value:"ZA"}},[t._v("South Africa")]),i("option",{attrs:{value:"ES"}},[t._v("Spain")]),i("option",{attrs:{value:"LK"}},[t._v("Sri Lanka")]),i("option",{attrs:{value:"SH"}},[t._v("St. Helena")]),i("option",{attrs:{value:"PM"}},[t._v("St. Pierre and Miquelon")]),i("option",{attrs:{value:"SD"}},[t._v("Sudan")]),i("option",{attrs:{value:"SR"}},[t._v("Suriname")]),i("option",{attrs:{value:"SZ"}},[t._v("Swaziland")]),i("option",{attrs:{value:"SE"}},[t._v("Sweden")]),i("option",{attrs:{value:"CH"}},[t._v("Switzerland")]),i("option",{attrs:{value:"SY"}},[t._v("Syrian Arab Republic")]),i("option",{attrs:{value:"TW"}},[t._v("Taiwan, Province of China")]),i("option",{attrs:{value:"TJ"}},[t._v("Tajikistan")]),i("option",{attrs:{value:"TZ"}},[t._v("Tanzania, United Republic of")]),i("option",{attrs:{value:"TH"}},[t._v("Thailand")]),i("option",{attrs:{value:"TG"}},[t._v("Togo")]),i("option",{attrs:{value:"TK"}},[t._v("Tokelau")]),i("option",{attrs:{value:"TO"}},[t._v("Tonga")]),i("option",{attrs:{value:"TT"}},[t._v("Trinidad and Tobago")]),i("option",{attrs:{value:"TN"}},[t._v("Tunisia")]),i("option",{attrs:{value:"TR"}},[t._v("Turkey")]),i("option",{attrs:{value:"TM"}},[t._v("Turkmenistan")]),i("option",{attrs:{value:"TC"}},[t._v("Turks and Caicos Islands")]),i("option",{attrs:{value:"TV"}},[t._v("Tuvalu")]),i("option",{attrs:{value:"UG"}},[t._v("Uganda")]),i("option",{attrs:{value:"UA"}},[t._v("Ukraine")]),i("option",{attrs:{value:"AE"}},[t._v("United Arab Emirates")]),i("option",{attrs:{value:"GB"}},[t._v("United Kingdom")]),i("option",{attrs:{value:"US"}},[t._v("United States")]),i("option",{attrs:{value:"UY"}},[t._v("Uruguay")]),i("option",{attrs:{value:"UZ"}},[t._v("Uzbekistan")]),i("option",{attrs:{value:"VU"}},[t._v("Vanuatu")]),i("option",{attrs:{value:"VE"}},[t._v("Venezuela")]),i("option",{attrs:{value:"VN"}},[t._v("Viet Nam")]),i("option",{attrs:{value:"VG"}},[t._v("Virgin Islands (British)")]),i("option",{attrs:{value:"VI"}},[t._v("Virgin Islands (U.S.)")]),i("option",{attrs:{value:"WF"}},[t._v("Wallis and Futuna Islands")]),i("option",{attrs:{value:"EH"}},[t._v("Western Sahara")]),i("option",{attrs:{value:"YE"}},[t._v("Yemen")]),i("option",{attrs:{value:"ZM"}},[t._v("Zambia")]),i("option",{attrs:{value:"ZW"}},[t._v("Zimbabwe")])])])]),i("div",{staticClass:"col-lg-4"},[i("div",{staticClass:"form-group mb-4 mb-lg-0"},[i("label",{attrs:{for:"billing-city"}},[t._v("City")]),i("input",{staticClass:"form-control",attrs:{type:"text",id:"billing-city",placeholder:"Enter City"}})])]),i("div",{staticClass:"col-lg-4"},[i("div",{staticClass:"form-group mb-0"},[i("label",{attrs:{for:"zip-code"}},[t._v("Zip / Postal code")]),i("input",{staticClass:"form-control",attrs:{type:"text",id:"zip-code",placeholder:"Enter Postal code"}})])])])])])])])]),i("tab-content",{attrs:{title:"Shipping Info"}},[i("div",{staticClass:"tab-pane",attrs:{id:"shipping-info"}},[i("h5",{staticClass:"card-title"},[t._v("Shipping information")]),i("p",{staticClass:"card-title-desc"},[t._v("It will be as simple as occidental in fact")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-4 col-sm-6"},[i("div",{staticClass:"card border rounded active shipping-address"},[i("div",{staticClass:"card-body"},[i("a",{staticClass:"float-right ml-1",attrs:{href:"#"}},[t._v("Edit")]),i("h5",{staticClass:"font-size-14 mb-4"},[t._v("Address 1")]),i("h5",{staticClass:"font-size-14"},[t._v("Bradley McMillian")]),i("p",{staticClass:"mb-1"},[t._v("109 Clarksburg Park Road Show Low, AZ 85901")]),i("p",{staticClass:"mb-0"},[t._v("Mo. 012-345-6789")])])])]),i("div",{staticClass:"col-lg-4 col-sm-6"},[i("div",{staticClass:"card border rounded shipping-address"},[i("div",{staticClass:"card-body"},[i("a",{staticClass:"float-right ml-1",attrs:{href:"#"}},[t._v("Edit")]),i("h5",{staticClass:"font-size-14 mb-4"},[t._v("Address 2")]),i("h5",{staticClass:"font-size-14"},[t._v("Bradley McMillian")]),i("p",{staticClass:"mb-1"},[t._v("109 Clarksburg Park Road Show Low, AZ 85901")]),i("p",{staticClass:"mb-0"},[t._v("Mo. 012-345-6789")])])])])])])]),i("tab-content",{attrs:{title:"Payment Info"}},[i("div",{staticClass:"tab-pane",attrs:{id:"payment-info"}},[i("h5",{staticClass:"card-title"},[t._v("Payment information")]),i("p",{staticClass:"card-title-desc"},[t._v("It will be as simple as occidental in fact")]),i("div",[i("h5",{staticClass:"font-size-14"},[t._v("Payment method :")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-4 col-sm-6"},[i("div",[i("label",{staticClass:"card-radio-label mb-3"},[i("input",{staticClass:"card-radio-input",attrs:{type:"radio",name:"pay-method",id:"pay-methodoption1"}}),i("div",{staticClass:"card-radio"},[i("i",{staticClass:"fab fa-cc-mastercard font-size-24 align-middle mr-2"}),i("span",[t._v("Credit / Debit Card")])])])])]),i("div",{staticClass:"col-lg-4 col-sm-6"},[i("div",[i("label",{staticClass:"card-radio-label mb-3"},[i("input",{staticClass:"card-radio-input",attrs:{type:"radio",name:"pay-method",id:"pay-methodoption2"}}),i("div",{staticClass:"card-radio"},[i("i",{staticClass:"fab fa-cc-paypal font-size-24 align-middle mr-2"}),i("span",[t._v("Paypal")])])])])]),i("div",{staticClass:"col-lg-4 col-sm-6"},[i("div",[i("label",{staticClass:"card-radio-label mb-3"},[i("input",{staticClass:"card-radio-input",attrs:{type:"radio",name:"pay-method",id:"pay-methodoption3",checked:""}}),i("div",{staticClass:"card-radio"},[i("i",{staticClass:"far fa-money-bill-alt font-size-24 align-middle mr-2"}),i("span",[t._v("Cash on Delivery")])])])])])]),i("h5",{staticClass:"my-3 font-size-14"},[t._v("For card Payment")]),i("div",{staticClass:"p-4 border"},[i("form",[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"cardnameInput"}},[t._v("Name on card")]),i("input",{staticClass:"form-control",attrs:{type:"text",id:"cardnameInput",placeholder:"Name on Card"}})]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-4 col-sm-6"},[i("div",{staticClass:"form-group mb-lg-0"},[i("label",{attrs:{for:"cardnumberInput"}},[t._v("Card Number")]),i("input",{staticClass:"form-control",attrs:{type:"text",id:"cardnumberInput",placeholder:"0000 0000 0000 0000"}})])]),i("div",{staticClass:"col-lg-4 col-sm-6"},[i("div",{staticClass:"form-group mb-lg-0"},[i("label",{attrs:{for:"expirydateInput"}},[t._v("Expiry date")]),i("input",{staticClass:"form-control",attrs:{type:"text",id:"expirydateInput",placeholder:"MM/YY"}})])]),i("div",{staticClass:"col-lg-4 col-sm-6"},[i("div",{staticClass:"form-group mb-lg-0"},[i("label",{attrs:{for:"cvvcodeInput"}},[t._v("CVV Code")]),i("input",{staticClass:"form-control",attrs:{type:"text",id:"cvvcodeInput",placeholder:"Enter CVV Code"}})])])])])]),i("div",{staticClass:"mt-4 text-right"},[i("a",{staticClass:"btn btn-success",attrs:{href:"#"}},[t._v("Complete order")])])])])])],1)],1)])]),i("div",{staticClass:"col-lg-4"},[i("div",{staticClass:"card checkout-order-summary"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"p-3 bg-light mb-4"},[i("h5",{staticClass:"font-size-14 mb-0"},[t._v(" Order Summary "),i("span",{staticClass:"float-right ml-2"},[t._v("#SK2356")])])]),i("div",{staticClass:"table-responsive"},[i("table",{staticClass:"table table-centered mb-0 table-nowrap"},[i("thead",[i("tr",[i("th",{staticClass:"border-top-0",staticStyle:{width:"110px"},attrs:{scope:"col"}},[t._v("Product")]),i("th",{staticClass:"border-top-0",attrs:{scope:"col"}},[t._v("Product Desc")]),i("th",{staticClass:"border-top-0",attrs:{scope:"col"}},[t._v("Price")])])]),i("tbody",[i("tr",[i("th",{attrs:{scope:"row"}},[i("img",{staticClass:"avatar-md",attrs:{src:e("c080"),alt:"product-img",title:"product-img"}})]),i("td",[i("h5",{staticClass:"font-size-14 text-truncate"},[i("a",{staticClass:"text-dark",attrs:{href:"ecommerce-product-detail.html"}},[t._v("Full sleeve T-shirt")])]),i("p",{staticClass:"text-muted mb-0"},[t._v("$ 240 x 2")])]),i("td",[t._v("$ 480")])]),i("tr",[i("th",{attrs:{scope:"row"}},[i("img",{staticClass:"avatar-md",attrs:{src:e("2a0c"),alt:"product-img",title:"product-img"}})]),i("td",[i("h5",{staticClass:"font-size-14 text-truncate"},[i("a",{staticClass:"text-dark",attrs:{href:"ecommerce-product-detail.html"}},[t._v("Half sleeve T-shirt")])]),i("p",{staticClass:"text-muted mb-0"},[t._v("$ 225 x 1")])]),i("td",[t._v("$ 225")])]),i("tr",[i("td",{attrs:{colspan:"2"}},[i("h6",{staticClass:"m-0 text-right"},[t._v("Sub Total:")])]),i("td",[t._v("$ 705")])]),i("tr",[i("td",{attrs:{colspan:"3"}},[i("div",{staticClass:"bg-soft-primary p-3 rounded"},[i("h5",{staticClass:"font-size-14 text-primary mb-0"},[i("i",{staticClass:"fas fa-shipping-fast mr-2"}),t._v(" Shipping "),i("span",{staticClass:"float-right"},[t._v("Free")])])])])]),i("tr",[i("td",{attrs:{colspan:"2"}},[i("h6",{staticClass:"m-0 text-right"},[t._v("Total:")])]),i("td",[t._v("$ 705")])])])])])])])])])],1)},s=[],o=e("2ee4"),n=e("5658"),r=e("2579"),l={components:{Layout:n["a"],PageHeader:r["a"],FormWizard:o["FormWizard"],TabContent:o["TabContent"]},data:function(){return{title:"Checkout",items:[{text:"Ecommerce"},{text:"Checkout",active:!0}]}}},v=l,c=e("2877"),u=Object(c["a"])(v,i,s,!1,null,null,null);a["default"]=u.exports},c080:function(t,a,e){t.exports=e.p+"img/img-1.3ce3b98b.png"}}]);
//# sourceMappingURL=chunk-d1c4ca86.3de7ca0e.js.map