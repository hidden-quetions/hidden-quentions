import{c as A,g as j}from"./chunk-V4ZNR5DE.js";import{b as y,c as P,d as o,f as H}from"./chunk-EKAIK5Q3.js";import{f as B,ha as v,na as x}from"./chunk-CGMQ4HOW.js";import{$a as S,Eb as h,I as l,Ia as M,J as p,Ja as u,Ka as I,L as c,Ma as f,N as i,Na as g,Nb as R,Rb as s,U as T,Ua as k,Vb as m,Z as D,ab as N,bb as z,cb as w,fa as b,ha as d,lb as C,ub as F,va as E,xb as a}from"./chunk-FJFKM6NH.js";var V=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;var _=`
    ${V}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`,q={root:({instance:e})=>["p-textarea p-component",{"p-filled":e.$filled(),"p-textarea-resizable ":e.autoResize,"p-variant-filled":e.$variant()==="filled","p-textarea-fluid":e.hasFluid,"p-inputfield-sm p-textarea-sm":e.pSize==="small","p-textarea-lg p-inputfield-lg":e.pSize==="large","p-invalid":e.invalid()}]},$=(()=>{class e extends x{name="textarea";style=_;classes=q;static \u0275fac=(()=>{let t;return function(n){return(t||(t=d(e)))(n||e)}})();static \u0275prov=l({token:e,factory:e.\u0275fac})}return e})();var U=new c("TEXTAREA_INSTANCE"),ge=(()=>{class e extends j{componentName="Textarea";bindDirectiveInstance=i(o,{self:!0});$pcTextarea=i(U,{optional:!0,skipSelf:!0})??void 0;pTextareaPT=s();pTextareaUnstyled=s();autoResize;pSize;variant=s();fluid=s(void 0,{transform:m});invalid=s(void 0,{transform:m});$variant=R(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new D;ngControlSubscription;_componentStyle=i($);ngControl=i(A,{optional:!0,self:!0});pcFluid=i(H,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}constructor(){super(),b(()=>{let t=this.pTextareaPT();t&&this.directivePT.set(t)}),b(()=>{this.pTextareaUnstyled()&&this.directiveUnstyled.set(this.pTextareaUnstyled())})}onInit(){this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.autoResize&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(t){this.writeModelValue(t.target?.value),this.updateState()}resize(t){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(t||{})}updateState(){this.autoResize&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(r){return new(r||e)};static \u0275dir=I({type:e,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostVars:2,hostBindings:function(r,n){r&1&&C("input",function(W){return n.onInput(W)}),r&2&&a(n.cx("root"))},inputs:{pTextareaPT:[1,"pTextareaPT"],pTextareaUnstyled:[1,"pTextareaUnstyled"],autoResize:[2,"autoResize","autoResize",m],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},outputs:{onResize:"onResize"},features:[h([$,{provide:U,useExisting:e},{provide:y,useExisting:e}]),f([o]),g]})}return e})(),he=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=u({type:e});static \u0275inj=p({})}return e})();var L=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`;var J={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},G=(()=>{class e extends x{name="progressspinner";style=L;classes=J;static \u0275fac=(()=>{let t;return function(n){return(t||(t=d(e)))(n||e)}})();static \u0275prov=l({token:e,factory:e.\u0275fac})}return e})();var O=new c("PROGRESSSPINNER_INSTANCE"),K=(()=>{class e extends P{componentName="ProgressSpinner";$pcProgressSpinner=i(O,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=i(o,{self:!0});styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=i(G);static \u0275fac=(()=>{let t;return function(n){return(t||(t=d(e)))(n||e)}})();static \u0275cmp=M({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:5,hostBindings:function(r,n){r&2&&(k("aria-label",n.ariaLabel)("role","progressbar")("aria-busy",!0),a(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[h([G,{provide:O,useExisting:e},{provide:y,useExisting:e}]),f([o]),g],decls:2,vars:10,consts:[["viewBox","25 25 50 50",3,"pBind"],["cx","50","cy","50","r","20","stroke-miterlimit","10",3,"pBind"]],template:function(r,n){r&1&&(T(),N(0,"svg",0),w(1,"circle",1),z()),r&2&&(a(n.cx("spin")),F("animation-duration",n.animationDuration),S("pBind",n.ptm("spin")),E(),a(n.cx("circle")),S("pBind",n.ptm("circle")),k("fill",n.fill)("stroke-width",n.strokeWidth))},dependencies:[B,v,o],encapsulation:2,changeDetection:0})}return e})(),Ce=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=u({type:e});static \u0275inj=p({imports:[K,v,v]})}return e})();export{ge as a,he as b,K as c,Ce as d};
