(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{jpvk:function(t,r,n){"use strict";n.r(r),n.d(r,"Subscript",(function(){return e}));var u=n("jgtz"),e=u.Mark.create({name:"subscript",defaultOptions:{HTMLAttributes:{}},parseHTML:function(){return[{tag:"sub"},{style:"vertical-align",getAttrs:function(t){if("sub"!==t)return!1}}]},renderHTML:function(t){var r=t.HTMLAttributes;return["sub",Object(u.mergeAttributes)(this.options.HTMLAttributes,r),0]},addCommands:function(){return{setSubscript:function(){return function(t){return t.commands.setMark("subscript")}},toggleSubscript:function(){return function(t){return t.commands.toggleMark("subscript")}},unsetSubscript:function(){return function(t){return t.commands.unsetMark("subscript")}}}},addKeyboardShortcuts:function(){var t=this;return{"Mod-,":function(){return t.editor.commands.toggleSubscript()}}}});r.default=e}}]);