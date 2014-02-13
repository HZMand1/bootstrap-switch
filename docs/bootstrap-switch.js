/* ========================================================================
 * bootstrap-switch - v3.0.0
 * http://www.bootstrap-switch.org
 * ========================================================================
 * Copyright 2012-2013 Mattia Larentis
 *
 * ========================================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================================
 */

(function(){var a=[].slice;!function(b,c){"use strict";var d;return d=function(){function a(a,c){var d=this;null==c&&(c={}),this.$element=b(a),this.options=b.extend({},this.defaults,c,{state:this.$element.is(":checked"),size:this.$element.data("size"),animate:this.$element.data("animate"),disabled:this.$element.is(":disabled"),readonly:this.$element.is("[readonly]"),onColor:this.$element.data("on-color"),offColor:this.$element.data("off-color"),onText:this.$element.data("on-text"),offText:this.$element.data("off-text"),labelText:this.$element.data("label-text")}),this.$on=b("<span>",{"class":"switch-handle-on switch-"+this.options.onColor,html:this.options.onText}),this.$off=b("<span>",{"class":"switch-handle-off switch-"+this.options.offColor,html:this.options.offText}),this.$label=b("<label>",{"for":this.$element.attr("id"),html:this.options.labelText}),this.$wrapper=b("<div>",{"class":function(){var a;return a=["switch"],a.push(d.options.state?"switch-on":"switch-off"),null!=d.options.size&&a.push("switch-"+d.options.size),d.options.animate&&a.push("switch-animate"),d.options.disabled&&a.push("switch-disabled"),d.options.readonly&&a.push("switch-readonly"),d.$element.attr("id")&&a.push("switch-id-"+d.$element.attr("id")),a.join(" ")}}),this.$div=this.$element.wrap(b("<div>")).parent(),this.$wrapper=this.$div.wrap(this.$wrapper).parent(),this.$element.before(this.$on).before(this.$label).before(this.$off),this._elementHandlers(),this._handleHandlers(),this._labelHandlers(),this._formHandler()}return a.prototype.defaults={state:!0,size:null,animate:!0,disabled:!1,readonly:!1,onColor:"primary",offColor:"default",onText:"ON",offText:"OFF",labelText:"&nbsp;"},a.prototype._constructor=a,a.prototype.state=function(a,b){return"undefined"==typeof a?this.options.state:this.options.disabled||this.options.readonly?this.$element:(a=!!a,this.$element.prop("checked",a).trigger("change.bootstrapSwitch",b),this.$element)},a.prototype.toggleState=function(a){return this.options.disabled||this.options.readonly?this.$element:this.$element.prop("checked",!this.options.state).trigger("change.bootstrapSwitch",a)},a.prototype.size=function(a){return"undefined"==typeof a?this.options.size:(null!=this.options.size&&this.$wrapper.removeClass("switch-"+this.options.size),this.$wrapper.addClass("switch-"+a),this.options.size=a,this.$element)},a.prototype.animate=function(a){return"undefined"==typeof a?this.options.animate:(a=!!a,this.$wrapper[a?"addClass":"removeClass"]("switch-animate"),this.options.animate=a,this.$element)},a.prototype.disabled=function(a){return"undefined"==typeof a?this.options.disabled:(a=!!a,this.$wrapper[a?"addClass":"removeClass"]("switch-disabled"),this.$element.prop("disabled",a),this.options.disabled=a,this.$element)},a.prototype.toggleDisabled=function(){return this.$element.prop("disabled",!this.options.disabled),this.$wrapper.toggleClass("switch-disabled"),this.options.disabled=!this.options.disabled,this.$element},a.prototype.readonly=function(a){return"undefined"==typeof a?this.options.readonly:(a=!!a,this.$wrapper[a?"addClass":"removeClass"]("switch-readonly"),this.$element.prop("readonly",a),this.options.readonly=a,this.$element)},a.prototype.toggleReadonly=function(){return this.$element.prop("readonly",!this.options.readonly),this.$wrapper.toggleClass("switch-readonly"),this.options.readonly=!this.options.readonly,this.$element},a.prototype.onColor=function(a){var b;return b=this.options.onColor,"undefined"==typeof a?b:(null!=b&&this.$on.removeClass("switch-"+b),this.$on.addClass("switch-"+a),this.options.onColor=a,this.$element)},a.prototype.offColor=function(a){var b;return b=this.options.offColor,"undefined"==typeof a?b:(null!=b&&this.$off.removeClass("switch-"+b),this.$off.addClass("switch-"+a),this.options.offColor=a,this.$element)},a.prototype.onText=function(a){return"undefined"==typeof a?this.options.onText:(this.$on.html(a),this.options.onText=a,this.$element)},a.prototype.offText=function(a){return"undefined"==typeof a?this.options.offText:(this.$off.html(a),this.options.offText=a,this.$element)},a.prototype.labelText=function(a){return"undefined"==typeof a?this.options.labelText:(this.$label.html(a),this.options.labelText=a,this.$element)},a.prototype.destroy=function(){var a;return a=this.$element.closest("form"),a.length&&a.off("reset.bootstrapSwitch").removeData("bootstrap-switch"),this.$div.children().not(this.$element).remove(),this.$element.unwrap().unwrap().off(".bootstrapSwitch").removeData("bootstrap-switch"),this.$element},a.prototype._elementHandlers=function(){var a=this;return this.$element.on({"change.bootstrapSwitch":function(c,d){var e;return c.preventDefault(),c.stopPropagation(),c.stopImmediatePropagation(),e=a.$element.is(":checked"),e!==a.options.state?(a.options.state=e,a.$wrapper.removeClass(e?"switch-off":"switch-on").addClass(e?"switch-on":"switch-off"),d?void 0:(a.$element.is(":radio")&&b("[name='"+a.$element.attr("name")+"']").not(a.$element).prop("checked",!1).trigger("change.bootstrapSwitch",!0),a.$element.trigger("switchChange",{el:a.$element,value:e}))):void 0},"focus.bootstrapSwitch":function(b){return b.preventDefault(),b.stopPropagation(),b.stopImmediatePropagation(),a.$wrapper.addClass("switch-focused")},"blur.bootstrapSwitch":function(b){return b.preventDefault(),b.stopPropagation(),b.stopImmediatePropagation(),a.$wrapper.removeClass("switch-focused")},"keydown.bootstrapSwitch":function(b){if(b.which&&!a.options.disabled&&!a.options.readonly)switch(b.which){case 32:return b.preventDefault(),b.stopPropagation(),b.stopImmediatePropagation(),a.toggleState();case 37:return b.preventDefault(),b.stopPropagation(),b.stopImmediatePropagation(),a.state(!1);case 39:return b.preventDefault(),b.stopPropagation(),b.stopImmediatePropagation(),a.state(!0)}}})},a.prototype._handleHandlers=function(){var a=this;return this.$on.on("click.bootstrapSwitch",function(){return a.state(!1),a.$element.trigger("focus.bootstrapSwitch")}),this.$off.on("click.bootstrapSwitch",function(){return a.state(!0),a.$element.trigger("focus.bootstrapSwitch")})},a.prototype._labelHandlers=function(){var a=this;return this.$label.on({"mousemove.bootstrapSwitch":function(b){var c,d,e;if(a.drag)return d=(b.pageX-a.$wrapper.offset().left)/a.$wrapper.width()*100,c=25,e=75,c>d?d=c:d>e&&(d=e),a.$div.css("margin-left",""+(d-e)+"%"),a.$element.trigger("focus.bootstrapSwitch")},"mousedown.bootstrapSwitch":function(){return a.drag||a.options.disabled||a.options.readonly?void 0:(a.drag=!0,a.options.animate&&a.$wrapper.removeClass("switch-animate"),a.$element.trigger("focus.bootstrapSwitch"))},"mouseup.bootstrapSwitch":function(){return a.drag?(a.drag=!1,a.$element.prop("checked",parseInt(a.$div.css("margin-left"),10)>-25).trigger("change.bootstrapSwitch"),a.$div.css("margin-left",""),a.options.animate?a.$wrapper.addClass("switch-animate"):void 0):void 0},"click.bootstrapSwitch":function(b){return b.preventDefault(),b.stopImmediatePropagation(),a.toggleState(),a.$element.trigger("focus.bootstrapSwitch")}})},a.prototype._formHandler=function(){var a;return a=this.$element.closest("form"),a.data("bootstrap-switch")?void 0:a.on("reset.bootstrapSwitch",function(){return c.setTimeout(function(){return a.find("input").filter(function(){return b(this).data("bootstrap-switch")}).each(function(){return b(this).bootstrapSwitch("state",!1)})},1)}).data("bootstrap-switch",!0)},a}(),b.fn.extend({bootstrapSwitch:function(){var c,e,f;return e=arguments[0],c=2<=arguments.length?a.call(arguments,1):[],f=this,this.each(function(){var a,g;return a=b(this),g=a.data("bootstrap-switch"),g||a.data("bootstrap-switch",g=new d(this,e)),"string"==typeof e?f=g[e].apply(g,c):void 0}),f}}),b.fn.bootstrapSwitch.Constructor=d}(window.jQuery,window)}).call(this);