import{b as it}from"./chunk-UGTOWRM5.js";import{a as At}from"./chunk-R44WBVIN.js";import{a as Ct,b as P,c as z,d as f,e as E,j as Nt,n as Pt,o as zt}from"./chunk-EKAIK5Q3.js";import{C as m,F as rt,G as tt,H as St,I as et,O as b,U as Mt,b as Et,c as K,e as xt,f as X,g as Lt,ga as Bt,ha as T,n as wt,na as N,o as _t,q as W,x as Ot,y as It,z as Dt}from"./chunk-CGMQ4HOW.js";import{$a as r,Ab as Tt,Da as O,Eb as M,Fa as mt,I as L,Ia as I,J as w,Ja as D,Ka as ft,Kb as C,L as _,Ma as q,N as h,Na as S,Nb as yt,Oa as u,Rb as j,S as Z,T as U,Ua as y,Vb as B,Wb as A,Z as pt,_ as ct,a as k,ab as c,bb as d,ca as dt,cb as Q,fa as nt,ha as v,ib as $,jb as Y,lb as H,mb as p,nb as G,ob as J,pb as gt,rb as V,sa as ht,sb as R,tb as ot,ua as ut,va as l,vb as vt,xb as g,yb as F,zb as bt}from"./chunk-FJFKM6NH.js";var kt=`
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`;var Xt=["start"],te=["end"],ee=["center"],ie=["*"];function ne(e,s){e&1&&$(0)}function oe(e,s){if(e&1&&(c(0,"div",1),u(1,ne,1,0,"ng-container",2),d()),e&2){let t=p();g(t.cx("start")),r("pBind",t.ptm("start")),l(),r("ngTemplateOutlet",t.startTemplate||t._startTemplate)}}function re(e,s){e&1&&$(0)}function ae(e,s){if(e&1&&(c(0,"div",1),u(1,re,1,0,"ng-container",2),d()),e&2){let t=p();g(t.cx("center")),r("pBind",t.ptm("center")),l(),r("ngTemplateOutlet",t.centerTemplate||t._centerTemplate)}}function se(e,s){e&1&&$(0)}function le(e,s){if(e&1&&(c(0,"div",1),u(1,se,1,0,"ng-container",2),d()),e&2){let t=p();g(t.cx("end")),r("pBind",t.ptm("end")),l(),r("ngTemplateOutlet",t.endTemplate||t._endTemplate)}}var pe={root:()=>["p-toolbar p-component"],start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},Ht=(()=>{class e extends N{name="toolbar";style=kt;classes=pe;static \u0275fac=(()=>{let t;return function(n){return(t||(t=v(e)))(n||e)}})();static \u0275prov=L({token:e,factory:e.\u0275fac})}return e})();var Vt=new _("TOOLBAR_INSTANCE"),st=(()=>{class e extends z{componentName="Toolbar";$pcToolbar=h(Vt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(f,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;ariaLabelledBy;_componentStyle=h(Ht);getBlockableElement(){return this.el.nativeElement.children[0]}startTemplate;endTemplate;centerTemplate;templates;_startTemplate;_endTemplate;_centerTemplate;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"start":case"left":this._startTemplate=t.template;break;case"end":case"right":this._endTemplate=t.template;break;case"center":this._centerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=v(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["p-toolbar"]],contentQueries:function(i,n,o){if(i&1&&gt(o,Xt,4)(o,te,4)(o,ee,4)(o,Bt,4),i&2){let a;V(a=R())&&(n.startTemplate=a.first),V(a=R())&&(n.endTemplate=a.first),V(a=R())&&(n.centerTemplate=a.first),V(a=R())&&(n.templates=a)}},hostAttrs:["role","toolbar"],hostVars:3,hostBindings:function(i,n){i&2&&(y("aria-labelledby",n.ariaLabelledBy),g(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},features:[M([Ht,{provide:Vt,useExisting:e},{provide:P,useExisting:e}]),q([f]),S],ngContentSelectors:ie,decls:4,vars:3,consts:[[3,"class","pBind",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(G(),J(0),u(1,oe,2,4,"div",0)(2,ae,2,4,"div",0)(3,le,2,4,"div",0)),i&2&&(l(),r("ngIf",n.startTemplate||n._startTemplate),l(),r("ngIf",n.centerTemplate||n._centerTemplate),l(),r("ngIf",n.endTemplate||n._endTemplate))},dependencies:[X,K,xt,T,E,f],encapsulation:2,changeDetection:0})}return e})(),Rt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=D({type:e});static \u0275inj=w({imports:[st,T,E,T,E]})}return e})();var Ft=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var de=["*"];function he(e,s){if(e&1&&(c(0,"span",3),F(1),d()),e&2){let t=p();g(t.cx("label")),r("pBind",t.ptm("label")),y("data-p",t.dataP),l(),bt(t.label)}}function ue(e,s){if(e&1&&Q(0,"span",5),e&2){let t=p(2);g(t.icon),r("pBind",t.ptm("icon"))("ngClass",t.cx("icon")),y("data-p",t.dataP)}}function me(e,s){if(e&1&&u(0,ue,1,5,"span",4),e&2){let t=p(),i=ot(5);r("ngIf",t.icon)("ngIfElse",i)}}function fe(e,s){if(e&1){let t=Y();c(0,"img",7),H("error",function(n){Z(t);let o=p(2);return U(o.imageError(n))}),d()}if(e&2){let t=p(2);r("pBind",t.ptm("image"))("src",t.image,ht),y("aria-label",t.ariaLabel)("data-p",t.dataP)}}function ge(e,s){if(e&1&&u(0,fe,1,4,"img",6),e&2){let t=p();r("ngIf",t.image)}}var ve={root:({instance:e})=>["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},jt=(()=>{class e extends N{name="avatar";style=Ft;classes=ve;static \u0275fac=(()=>{let t;return function(n){return(t||(t=v(e)))(n||e)}})();static \u0275prov=L({token:e,factory:e.\u0275fac})}return e})();var Wt=new _("AVATAR_INSTANCE"),lt=(()=>{class e extends z{componentName="Avatar";$pcAvatar=h(Wt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(f,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new pt;_componentStyle=h(jt);imageError(t){this.onImageError.emit(t)}get dataP(){return this.cn({[this.shape]:this.shape,[this.size]:this.size})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=v(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(i,n){i&2&&(y("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy)("data-p",n.dataP),g(n.cn(n.cx("root"),n.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[M([jt,{provide:Wt,useExisting:e},{provide:P,useExisting:e}]),q([f]),S],ngContentSelectors:de,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"pBind","class",4,"ngIf","ngIfElse"],[3,"pBind"],[3,"pBind","class","ngClass",4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","src","error",4,"ngIf"],[3,"error","pBind","src"]],template:function(i,n){if(i&1&&(G(),J(0),u(1,he,2,5,"span",2)(2,me,1,2,"ng-template",null,0,C)(4,ge,1,1,"ng-template",null,1,C)),i&2){let o=ot(3);l(),r("ngIf",n.label)("ngIfElse",o)}},dependencies:[X,Et,K,T,f],encapsulation:2,changeDetection:0})}return e})(),Zt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=D({type:e});static \u0275inj=w({imports:[lt,T,T]})}return e})();var Ut=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`;var Te={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},qt=(()=>{class e extends N{name="tooltip";style=Ut;classes=Te;static \u0275fac=(()=>{let t;return function(n){return(t||(t=v(e)))(n||e)}})();static \u0275prov=L({token:e,factory:e.\u0275fac})}return e})();var Qt=new _("TOOLTIP_INSTANCE"),$t=(()=>{class e extends z{zone;viewContainer;componentName="Tooltip";$pcTooltip=h(Qt,{optional:!0,skipSelf:!0})??void 0;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;showOnEllipsis=!1;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;appendTo=j(void 0);$appendTo=yt(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,showOnEllipsis:!1,id:Ct("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;rootPTClasses="";showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;touchStartListener;touchEndListener;documentTouchListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=h(qt);interactionInProgress=!1;ptTooltip=j();pTooltipPT=j();pTooltipUnstyled=j();constructor(t,i){super(),this.zone=t,this.viewContainer=i,nt(()=>{let n=this.ptTooltip()||this.pTooltipPT();n&&this.directivePT.set(n)}),nt(()=>{this.pTooltipUnstyled()&&this.directiveUnstyled.set(this.pTooltipUnstyled())})}onAfterViewInit(){Lt(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener),this.touchStartListener=this.onTouchStart.bind(this),this.touchEndListener=this.onTouchEnd.bind(this),this.el.nativeElement.addEventListener("touchstart",this.touchStartListener,{passive:!0}),this.el.nativeElement.addEventListener("touchend",this.touchEndListener,{passive:!0})),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}onChanges(t){t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.showOnEllipsis&&this.setOption({showOnEllipsis:t.showOnEllipsis.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=k(k({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(W(t.relatedTarget,"p-tooltip")||W(t.relatedTarget,"p-tooltip-text")||W(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onTouchStart(t){!this.container&&!this.showTimeout&&(this.activate(),this.isAutoHide()||this.bindDocumentTouchListener())}onTouchEnd(t){this.isAutoHide()&&this.deactivate()}bindDocumentTouchListener(){this.documentTouchListener||(this.documentTouchListener=this.renderer.listen("document","touchstart",t=>{this.container&&!this.container.contains(t.target)&&!this.el.nativeElement.contains(t.target)&&(this.deactivate(),this.unbindDocumentTouchListener())}))}unbindDocumentTouchListener(){this.documentTouchListener&&(this.documentTouchListener(),this.documentTouchListener=null)}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}hasEllipsis(){let t=this.el.nativeElement;return t.offsetWidth<t.scrollWidth||t.offsetHeight<t.scrollHeight}activate(){if(!this.interactionInProgress){if(this.getOption("showOnEllipsis")&&!this.hasEllipsis())return;if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=tt("div",{class:this.cx("root"),"p-bind":this.ptm("root"),"data-pc-section":"root"}),this.container.setAttribute("role","tooltip");let t=tt("div",{class:this.cx("arrow"),"p-bind":this.ptm("arrow"),"data-pc-section":"arrow"});this.container.appendChild(t),this.tooltipText=tt("div",{class:this.cx("text"),"p-bind":this.ptm("text"),"data-pc-section":"text"}),this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?rt(this.container,this.el.nativeElement):rt(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),St(this.container,250),this.getOption("tooltipZIndex")==="auto"?it.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&it.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t&&typeof t.createEmbeddedView=="function"){let i=this.viewContainer.createEmbeddedView(t);i.detectChanges(),i.rootNodes.forEach(n=>this.tooltipText.appendChild(n))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),n={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[t]||[];for(let[o,a]of n.entries())if(o===0)a.call(this);else if(this.isOutOfBounds())a.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),i=t.left+It(),n=t.top+Dt();return{left:i,top:n}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?et(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,i=m(t),n=(b(t)-b(this.container))/2;this.alignTooltip(i,n);let o=this.getArrowElement();o.style.top="50%",o.style.right=null,o.style.bottom=null,o.style.left="0"}alignLeft(){this.preAlign("left");let t=this.getArrowElement(),i=m(this.container),n=(b(this.el.nativeElement)-b(this.container))/2;this.alignTooltip(-i,n),t.style.top="50%",t.style.right="0",t.style.bottom=null,t.style.left=null}alignTop(){this.preAlign("top");let t=this.getArrowElement(),i=this.getHostOffset(),n=m(this.container),o=(m(this.el.nativeElement)-m(this.container))/2,a=b(this.container);this.alignTooltip(o,-a);let x=i.left-this.getHostOffset().left+n/2;t.style.top=null,t.style.right=null,t.style.bottom="0",t.style.left=x+"px"}getArrowElement(){return et(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let t=this.getArrowElement(),i=m(this.container),n=this.getHostOffset(),o=(m(this.el.nativeElement)-m(this.container))/2,a=b(this.el.nativeElement);this.alignTooltip(o,a);let x=n.left-this.getHostOffset().left+i/2;t.style.top="0",t.style.right=null,t.style.bottom=null,t.style.left=x+"px"}alignTooltip(t,i){let n=this.getHostOffset(),o=n.left+t,a=n.top+i;this.container.style.left=o+this.getOption("positionLeft")+"px",this.container.style.top=a+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=k(k({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return W(t,"p-inputwrapper")?et(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px",this.container.className=this.cn(this.cx("root"),this.ptm("root")?.class,"p-tooltip-"+t,this.getOption("tooltipStyleClass"))}isOutOfBounds(){let t=this.container.getBoundingClientRect(),i=t.top,n=t.left,o=m(this.container),a=b(this.container),x=Ot();return n+o>x.width||n<0||i<0||i+a>x.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Nt(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener),this.el.nativeElement.removeEventListener("touchstart",this.touchStartListener),this.el.nativeElement.removeEventListener("touchend",this.touchEndListener),this.unbindDocumentTouchListener()),t==="focus"||t==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Mt(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.unbindDocumentTouchListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}onDestroy(){this.unbindEvents(),this.container&&it.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||e)(O(ct),O(mt))};static \u0275dir=ft({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",B],showDelay:[2,"showDelay","showDelay",A],hideDelay:[2,"hideDelay","hideDelay",A],life:[2,"life","life",A],positionTop:[2,"positionTop","positionTop",A],positionLeft:[2,"positionLeft","positionLeft",A],autoHide:[2,"autoHide","autoHide",B],fitContent:[2,"fitContent","fitContent",B],hideOnEscape:[2,"hideOnEscape","hideOnEscape",B],showOnEllipsis:[2,"showOnEllipsis","showOnEllipsis",B],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"],ptTooltip:[1,"ptTooltip"],pTooltipPT:[1,"pTooltipPT"],pTooltipUnstyled:[1,"pTooltipUnstyled"]},features:[M([qt,{provide:Qt,useExisting:e},{provide:P,useExisting:e}]),S]})}return e})(),Yt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=D({type:e});static \u0275inj=w({imports:[E,E]})}return e})();function Ee(e,s){e&1&&(c(0,"a",3),F(1,"hidden-questions"),d())}function xe(e,s){if(e&1){let t=Y();c(0,"div",4)(1,"span",5),F(2),d(),Q(3,"p-avatar",6)(4,"p-button",7),c(5,"p-button",8),H("click",function(){Z(t);let n=p();return U(n.logout())}),d()()}if(e&2){let t,i=p();l(2),Tt("Ol\xE1, ",i.admin==null?null:i.admin.nome),l(),r("label",(i.admin==null||i.admin.nome==null||(t=i.admin.nome.charAt(0))==null?null:t.toUpperCase())||"A"),l(),r("text",!0)("rounded",!0),l(),r("text",!0)("rounded",!0)}}var Gt=class e{constructor(s,t){this.authService=s;this.router=t}scrolled=dt(!1);get admin(){return this.authService.getAdmin()}onScroll(){this.scrolled.set(window.scrollY>8)}logout(){this.authService.logout(),this.router.navigate(["/login"])}static \u0275fac=function(t){return new(t||e)(O(At),O(wt))};static \u0275cmp=I({type:e,selectors:[["app-navbar"]],hostBindings:function(t,i){t&1&&H("scroll",function(){return i.onScroll()},ut)},decls:5,vars:2,consts:[["start",""],["end",""],[1,"app-toolbar"],["routerLink","/admin",1,"brand"],[1,"navbar-actions"],[1,"admin-greeting"],["shape","circle",3,"label"],["icon","pi pi-cog","severity","secondary","pTooltip","Configura\xE7\xF5es","routerLink","/admin/configuracoes",3,"text","rounded"],["icon","pi pi-sign-out","severity","danger","pTooltip","Sair",3,"click","text","rounded"]],template:function(t,i){t&1&&(c(0,"p-toolbar",2),u(1,Ee,2,0,"ng-template",null,0,C)(3,xe,6,6,"ng-template",null,1,C),d()),t&2&&vt("scrolled",i.scrolled())},dependencies:[_t,Rt,st,zt,Pt,Zt,lt,Yt,$t],styles:[".app-toolbar[_ngcontent-%COMP%]{background:#fff!important;border-bottom:1px solid #e5e7eb;padding:8px 24px;border-radius:0;transition:box-shadow .25s ease,border-color .25s ease;animation:hqFadeIn .3s ease both}[_nghost-%COMP%]     .app-toolbar.scrolled{box-shadow:0 2px 16px #00000014;border-bottom-color:transparent}.brand[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#111827;letter-spacing:-.5px;text-decoration:none;transition:color .2s,opacity .2s}.brand[_ngcontent-%COMP%]:hover{opacity:.75}.admin-greeting[_ngcontent-%COMP%]{font-size:13px;color:#6b7280;margin-right:8px}.navbar-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}@media(max-width:576px){.app-toolbar[_ngcontent-%COMP%]{padding:6px 16px}.brand[_ngcontent-%COMP%]{font-size:16px}.admin-greeting[_ngcontent-%COMP%]{display:none}.navbar-actions[_ngcontent-%COMP%]{gap:2px}  .navbar-actions .p-avatar{display:none}}"]})};export{Gt as a};
