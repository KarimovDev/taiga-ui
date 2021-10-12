(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{OFrn:function(e,t,n){"use strict";n.r(t),n.d(t,"DialogsModule",(function(){return O}));var o=n("2kYt"),r=n("sEIs"),i=n("SVIu"),a=n("Qq0t"),s=n("dvRg"),c=n("EM62"),p=n("OZlg"),l=n("iyc4"),u=n("TLy2"),d=n("Uzur"),m=n("zV1d"),g=n("cweO");function f(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",4),c["\u0275\u0275element"](1,"tui-avatar",5),c["\u0275\u0275text"](2," \xabChoose wisely\xbb "),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("rounded",!0))}function b(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",4),c["\u0275\u0275element"](1,"tui-avatar",6),c["\u0275\u0275text"](2," \xabYou chose poorly\xbb "),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("rounded",!0))}function y(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",4),c["\u0275\u0275text"](1," \xabYou have chosen wisely\xbb "),c["\u0275\u0275element"](2,"tui-avatar",7),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("rounded",!0))}let h=(()=>{class e{constructor(e,t){this.notifications=e,this.promptService=t}onClick(e,t,n){this.promptService.open(e,{heading:"Taiga UI is the best",buttons:["Absolutely!","No way!"]}).pipe(Object(u.a)(e=>e?this.notifications.show(n,{status:"success"}):this.notifications.show(t,{status:"error"}))).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](a.TuiNotificationsService),c["\u0275\u0275directiveInject"](d.b))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-dialogs-example-1"]],decls:8,vars:0,consts:[["tuiButton","",3,"click"],["choose",""],["poorly",""],["wisely",""],[1,"wrapper"],["avatarUrl","assets/images/choose.png","size","l",1,"tui-space_right-2",3,"rounded"],["avatarUrl","assets/images/poorly.png",1,"tui-space_right-2",3,"rounded"],["avatarUrl","assets/images/wisely.png",1,"tui-space_left-1",3,"rounded"]],template:function(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"button",0),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const n=c["\u0275\u0275reference"](3),o=c["\u0275\u0275reference"](5),r=c["\u0275\u0275reference"](7);return t.onClick(n,o,r)})),c["\u0275\u0275text"](1,"Show prompt"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](2,f,3,1,"ng-template",null,1,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275template"](4,b,3,1,"ng-template",null,2,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275template"](6,y,3,1,"ng-template",null,3,c["\u0275\u0275templateRefExtractor"])}},directives:[m.a,g.a],styles:[".wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}"]}),e})();const v=["header",$localize`:␟9d6e1408c0a40d04f5eeb6f5d16b8706aded4261␟8564515230059500750:Dialogs`];var x;x=$localize`:␟a961c44abe17a269b883d349b02e8226016895fd␟3463395013752872705: You can easily create your custom dialogs by extending our abstract class and providing your own component as a dialog. `;const w=["heading",$localize`:␟bd9aa8d13320476087ef2b67437c8078fbb05a07␟2620483019814878192:Custom dialog`];let S=(()=>{class e{constructor(){this.example1={TypeScript:"import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';\nimport {TuiDialog} from '@taiga-ui/cdk';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\nimport {PromptOptions} from './prompt-options';\n\n@Component({\n    selector: 'prompt',\n    templateUrl: './prompt.template.html',\n    styleUrls: ['./prompt.style.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PromptComponent {\n    // Here you get options + content + id + observer\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT) readonly context: TuiDialog<PromptOptions, boolean>,\n    ) {}\n\n    onClick(response: boolean) {\n        this.context.completeWith(response);\n    }\n}\n",HTML:'\x3c!-- Add id for accessibility purposes --\x3e\n<h2 [id]="context.id">{{context.heading}}</h2>\n<section\n    polymorpheus-outlet\n    [content]="context.content"\n    [context]="context"\n></section>\n<p class="buttons">\n    <button tuiButton class="tui-space_right-3" (click)="onClick(true)">\n        {{context.buttons[0]}}\n    </button>\n    <button tuiButton appearance="secondary" (click)="onClick(false)">\n        {{context.buttons[1]}}\n    </button>\n</p>\n',LESS:":host {\n    display: block;\n    padding: 1.5rem;\n    margin: auto;\n    border-radius: 0 0 0.75rem 0.75rem;\n    background: var(--tui-base-01);\n    box-shadow: inset 0 4px var(--tui-accent);\n    animation: tuiReveal var(--tui-duration), tuiFadeIn var(--tui-duration);\n}\n\n.buttons {\n    display: flex;\n    justify-content: center;\n    margin: 1.5rem 0 0;\n}\n","prompt.service.ts":"import {Injectable, Provider} from '@angular/core';\nimport {AbstractTuiDialogService, TUI_DIALOGS} from '@taiga-ui/cdk';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {PromptOptions} from './prompt-options';\nimport {PromptComponent} from './prompt.component';\n\n@Injectable({\n    providedIn: 'root',\n})\nexport class PromptService extends AbstractTuiDialogService<PromptOptions> {\n    readonly defaultOptions = {\n        heading: 'Are you sure?',\n        buttons: ['Yes', 'No'],\n    } as const;\n    readonly component = new PolymorpheusComponent(PromptComponent);\n}\n\n// Add this provider to app module\nexport const PROMPT_PROVIDER: Provider = {\n    provide: TUI_DIALOGS,\n    useExisting: PromptService,\n    multi: true,\n};\n","prompt-options.ts":"export interface PromptOptions {\n    readonly heading: string;\n    readonly buttons: readonly [string, string];\n}\n"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["dialogs"]],decls:7,vars:1,consts:[[6,"header"],["id","dialog",3,"content",6,"heading"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275i18nAttributes"](1,v),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18n"](3,x),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"tui-doc-example",1),c["\u0275\u0275i18nAttributes"](5,w),c["\u0275\u0275element"](6,"tui-dialogs-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("content",t.example1))},directives:[p.a,l.a,h],encapsulation:2,changeDetection:0}),e})();var P=n("kiPw");let C=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.TuiButtonModule,P.c,o.c]]}),e})(),O=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,C,a.TuiButtonModule,s.TuiAvatarModule,i.h,r.f.forChild(Object(i.o)(S))]]}),e})()}}]);