kango.ui.ContextMenuItem=function(a){this.superclass.apply(this,arguments);this.init(a)};kango.ui.ContextMenuItem.prototype=kango.oop.extend(kango.ui.ContextMenuItemBase,{init:function(a){this.addItem("item1",a.caption,a.context||"all")},addItem:function(a,b,c){a={title:b,contexts:[c]};a.onclick=kango.func.bind(function(a){this.fireEvent(this.event.CLICK,{srcUrl:a.srcUrl,linkUrl:a.linkUrl})},this);a=opera.contexts.menu.createItem(a);opera.contexts.menu.addItem(a)}});
