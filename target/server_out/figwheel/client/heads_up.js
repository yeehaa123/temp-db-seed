// Compiled by ClojureScript 1.7.107 {:target :nodejs}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__32347__auto__ = [];
var len__32340__auto___38339 = arguments.length;
var i__32341__auto___38340 = (0);
while(true){
if((i__32341__auto___38340 < len__32340__auto___38339)){
args__32347__auto__.push((arguments[i__32341__auto___38340]));

var G__38341 = (i__32341__auto___38340 + (1));
i__32341__auto___38340 = G__38341;
continue;
} else {
}
break;
}

var argseq__32348__auto__ = ((((2) < args__32347__auto__.length))?(new cljs.core.IndexedSeq(args__32347__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32348__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__38331_38342 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__38332_38343 = null;
var count__38333_38344 = (0);
var i__38334_38345 = (0);
while(true){
if((i__38334_38345 < count__38333_38344)){
var k_38346 = cljs.core._nth.call(null,chunk__38332_38343,i__38334_38345);
e.setAttribute(cljs.core.name.call(null,k_38346),cljs.core.get.call(null,attrs,k_38346));

var G__38347 = seq__38331_38342;
var G__38348 = chunk__38332_38343;
var G__38349 = count__38333_38344;
var G__38350 = (i__38334_38345 + (1));
seq__38331_38342 = G__38347;
chunk__38332_38343 = G__38348;
count__38333_38344 = G__38349;
i__38334_38345 = G__38350;
continue;
} else {
var temp__4425__auto___38351 = cljs.core.seq.call(null,seq__38331_38342);
if(temp__4425__auto___38351){
var seq__38331_38352__$1 = temp__4425__auto___38351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38331_38352__$1)){
var c__32085__auto___38353 = cljs.core.chunk_first.call(null,seq__38331_38352__$1);
var G__38354 = cljs.core.chunk_rest.call(null,seq__38331_38352__$1);
var G__38355 = c__32085__auto___38353;
var G__38356 = cljs.core.count.call(null,c__32085__auto___38353);
var G__38357 = (0);
seq__38331_38342 = G__38354;
chunk__38332_38343 = G__38355;
count__38333_38344 = G__38356;
i__38334_38345 = G__38357;
continue;
} else {
var k_38358 = cljs.core.first.call(null,seq__38331_38352__$1);
e.setAttribute(cljs.core.name.call(null,k_38358),cljs.core.get.call(null,attrs,k_38358));

var G__38359 = cljs.core.next.call(null,seq__38331_38352__$1);
var G__38360 = null;
var G__38361 = (0);
var G__38362 = (0);
seq__38331_38342 = G__38359;
chunk__38332_38343 = G__38360;
count__38333_38344 = G__38361;
i__38334_38345 = G__38362;
continue;
}
} else {
}
}
break;
}

var seq__38335_38363 = cljs.core.seq.call(null,children);
var chunk__38336_38364 = null;
var count__38337_38365 = (0);
var i__38338_38366 = (0);
while(true){
if((i__38338_38366 < count__38337_38365)){
var ch_38367 = cljs.core._nth.call(null,chunk__38336_38364,i__38338_38366);
e.appendChild(ch_38367);

var G__38368 = seq__38335_38363;
var G__38369 = chunk__38336_38364;
var G__38370 = count__38337_38365;
var G__38371 = (i__38338_38366 + (1));
seq__38335_38363 = G__38368;
chunk__38336_38364 = G__38369;
count__38337_38365 = G__38370;
i__38338_38366 = G__38371;
continue;
} else {
var temp__4425__auto___38372 = cljs.core.seq.call(null,seq__38335_38363);
if(temp__4425__auto___38372){
var seq__38335_38373__$1 = temp__4425__auto___38372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38335_38373__$1)){
var c__32085__auto___38374 = cljs.core.chunk_first.call(null,seq__38335_38373__$1);
var G__38375 = cljs.core.chunk_rest.call(null,seq__38335_38373__$1);
var G__38376 = c__32085__auto___38374;
var G__38377 = cljs.core.count.call(null,c__32085__auto___38374);
var G__38378 = (0);
seq__38335_38363 = G__38375;
chunk__38336_38364 = G__38376;
count__38337_38365 = G__38377;
i__38338_38366 = G__38378;
continue;
} else {
var ch_38379 = cljs.core.first.call(null,seq__38335_38373__$1);
e.appendChild(ch_38379);

var G__38380 = cljs.core.next.call(null,seq__38335_38373__$1);
var G__38381 = null;
var G__38382 = (0);
var G__38383 = (0);
seq__38335_38363 = G__38380;
chunk__38336_38364 = G__38381;
count__38337_38365 = G__38382;
i__38338_38366 = G__38383;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq38328){
var G__38329 = cljs.core.first.call(null,seq38328);
var seq38328__$1 = cljs.core.next.call(null,seq38328);
var G__38330 = cljs.core.first.call(null,seq38328__$1);
var seq38328__$2 = cljs.core.next.call(null,seq38328__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__38329,G__38330,seq38328__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__32195__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__32196__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__32197__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__32198__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__32199__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__32195__auto__,prefer_table__32196__auto__,method_cache__32197__auto__,cached_hierarchy__32198__auto__,hierarchy__32199__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__32195__auto__,prefer_table__32196__auto__,method_cache__32197__auto__,cached_hierarchy__32198__auto__,hierarchy__32199__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__32199__auto__,method_table__32195__auto__,prefer_table__32196__auto__,method_cache__32197__auto__,cached_hierarchy__32198__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_38384 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_38384.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_38384.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_38384.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_38384);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__38385,st_map){
var map__38390 = p__38385;
var map__38390__$1 = ((((!((map__38390 == null)))?((((map__38390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38390):map__38390);
var container_el = cljs.core.get.call(null,map__38390__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__38390,map__38390__$1,container_el){
return (function (p__38392){
var vec__38393 = p__38392;
var k = cljs.core.nth.call(null,vec__38393,(0),null);
var v = cljs.core.nth.call(null,vec__38393,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__38390,map__38390__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__38394,dom_str){
var map__38397 = p__38394;
var map__38397__$1 = ((((!((map__38397 == null)))?((((map__38397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38397):map__38397);
var c = map__38397__$1;
var content_area_el = cljs.core.get.call(null,map__38397__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__38399){
var map__38402 = p__38399;
var map__38402__$1 = ((((!((map__38402 == null)))?((((map__38402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38402):map__38402);
var content_area_el = cljs.core.get.call(null,map__38402__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__33365__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto__){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto__){
return (function (state_38445){
var state_val_38446 = (state_38445[(1)]);
if((state_val_38446 === (1))){
var inst_38430 = (state_38445[(7)]);
var inst_38430__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_38431 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_38432 = ["10px","10px","100%","68px","1.0"];
var inst_38433 = cljs.core.PersistentHashMap.fromArrays(inst_38431,inst_38432);
var inst_38434 = cljs.core.merge.call(null,inst_38433,style);
var inst_38435 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38430__$1,inst_38434);
var inst_38436 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_38430__$1,msg);
var inst_38437 = cljs.core.async.timeout.call(null,(300));
var state_38445__$1 = (function (){var statearr_38447 = state_38445;
(statearr_38447[(7)] = inst_38430__$1);

(statearr_38447[(8)] = inst_38435);

(statearr_38447[(9)] = inst_38436);

return statearr_38447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38445__$1,(2),inst_38437);
} else {
if((state_val_38446 === (2))){
var inst_38430 = (state_38445[(7)]);
var inst_38439 = (state_38445[(2)]);
var inst_38440 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_38441 = ["auto"];
var inst_38442 = cljs.core.PersistentHashMap.fromArrays(inst_38440,inst_38441);
var inst_38443 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38430,inst_38442);
var state_38445__$1 = (function (){var statearr_38448 = state_38445;
(statearr_38448[(10)] = inst_38439);

return statearr_38448;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38445__$1,inst_38443);
} else {
return null;
}
}
});})(c__33365__auto__))
;
return ((function (switch__33300__auto__,c__33365__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__33301__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__33301__auto____0 = (function (){
var statearr_38452 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38452[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__33301__auto__);

(statearr_38452[(1)] = (1));

return statearr_38452;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__33301__auto____1 = (function (state_38445){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_38445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e38453){if((e38453 instanceof Object)){
var ex__33304__auto__ = e38453;
var statearr_38454_38456 = state_38445;
(statearr_38454_38456[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38457 = state_38445;
state_38445 = G__38457;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__33301__auto__ = function(state_38445){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__33301__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__33301__auto____1.call(this,state_38445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__33301__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__33301__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto__))
})();
var state__33367__auto__ = (function (){var statearr_38455 = f__33366__auto__.call(null);
(statearr_38455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto__);

return statearr_38455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto__))
);

return c__33365__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__38459 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__38459,(0),null);
var ln = cljs.core.nth.call(null,vec__38459,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__38462 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__38462,(0),null);
var file_line = cljs.core.nth.call(null,vec__38462,(1),null);
var file_column = cljs.core.nth.call(null,vec__38462,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__38462,file_name,file_line,file_column){
return (function (p1__38460_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__38460_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__38462,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__31282__auto__ = file_line;
if(cljs.core.truth_(or__31282__auto__)){
return or__31282__auto__;
} else {
var and__31270__auto__ = cause;
if(cljs.core.truth_(and__31270__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__31270__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__38465 = figwheel.client.heads_up.ensure_container.call(null);
var map__38465__$1 = ((((!((map__38465 == null)))?((((map__38465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38465):map__38465);
var content_area_el = cljs.core.get.call(null,map__38465__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__33365__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto__){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto__){
return (function (state_38513){
var state_val_38514 = (state_38513[(1)]);
if((state_val_38514 === (1))){
var inst_38496 = (state_38513[(7)]);
var inst_38496__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_38497 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_38498 = ["0.0"];
var inst_38499 = cljs.core.PersistentHashMap.fromArrays(inst_38497,inst_38498);
var inst_38500 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38496__$1,inst_38499);
var inst_38501 = cljs.core.async.timeout.call(null,(300));
var state_38513__$1 = (function (){var statearr_38515 = state_38513;
(statearr_38515[(7)] = inst_38496__$1);

(statearr_38515[(8)] = inst_38500);

return statearr_38515;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38513__$1,(2),inst_38501);
} else {
if((state_val_38514 === (2))){
var inst_38496 = (state_38513[(7)]);
var inst_38503 = (state_38513[(2)]);
var inst_38504 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_38505 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_38506 = cljs.core.PersistentHashMap.fromArrays(inst_38504,inst_38505);
var inst_38507 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38496,inst_38506);
var inst_38508 = cljs.core.async.timeout.call(null,(200));
var state_38513__$1 = (function (){var statearr_38516 = state_38513;
(statearr_38516[(9)] = inst_38503);

(statearr_38516[(10)] = inst_38507);

return statearr_38516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38513__$1,(3),inst_38508);
} else {
if((state_val_38514 === (3))){
var inst_38496 = (state_38513[(7)]);
var inst_38510 = (state_38513[(2)]);
var inst_38511 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_38496,"");
var state_38513__$1 = (function (){var statearr_38517 = state_38513;
(statearr_38517[(11)] = inst_38510);

return statearr_38517;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38513__$1,inst_38511);
} else {
return null;
}
}
}
});})(c__33365__auto__))
;
return ((function (switch__33300__auto__,c__33365__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__33301__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__33301__auto____0 = (function (){
var statearr_38521 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38521[(0)] = figwheel$client$heads_up$clear_$_state_machine__33301__auto__);

(statearr_38521[(1)] = (1));

return statearr_38521;
});
var figwheel$client$heads_up$clear_$_state_machine__33301__auto____1 = (function (state_38513){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_38513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e38522){if((e38522 instanceof Object)){
var ex__33304__auto__ = e38522;
var statearr_38523_38525 = state_38513;
(statearr_38523_38525[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38526 = state_38513;
state_38513 = G__38526;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__33301__auto__ = function(state_38513){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__33301__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__33301__auto____1.call(this,state_38513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__33301__auto____0;
figwheel$client$heads_up$clear_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__33301__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto__))
})();
var state__33367__auto__ = (function (){var statearr_38524 = f__33366__auto__.call(null);
(statearr_38524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto__);

return statearr_38524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto__))
);

return c__33365__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__33365__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto__){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto__){
return (function (state_38558){
var state_val_38559 = (state_38558[(1)]);
if((state_val_38559 === (1))){
var inst_38548 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_38558__$1 = state_38558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38558__$1,(2),inst_38548);
} else {
if((state_val_38559 === (2))){
var inst_38550 = (state_38558[(2)]);
var inst_38551 = cljs.core.async.timeout.call(null,(400));
var state_38558__$1 = (function (){var statearr_38560 = state_38558;
(statearr_38560[(7)] = inst_38550);

return statearr_38560;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38558__$1,(3),inst_38551);
} else {
if((state_val_38559 === (3))){
var inst_38553 = (state_38558[(2)]);
var inst_38554 = figwheel.client.heads_up.clear.call(null);
var state_38558__$1 = (function (){var statearr_38561 = state_38558;
(statearr_38561[(8)] = inst_38553);

return statearr_38561;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38558__$1,(4),inst_38554);
} else {
if((state_val_38559 === (4))){
var inst_38556 = (state_38558[(2)]);
var state_38558__$1 = state_38558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38558__$1,inst_38556);
} else {
return null;
}
}
}
}
});})(c__33365__auto__))
;
return ((function (switch__33300__auto__,c__33365__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__33301__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__33301__auto____0 = (function (){
var statearr_38565 = [null,null,null,null,null,null,null,null,null];
(statearr_38565[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__33301__auto__);

(statearr_38565[(1)] = (1));

return statearr_38565;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__33301__auto____1 = (function (state_38558){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_38558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e38566){if((e38566 instanceof Object)){
var ex__33304__auto__ = e38566;
var statearr_38567_38569 = state_38558;
(statearr_38567_38569[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38570 = state_38558;
state_38558 = G__38570;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__33301__auto__ = function(state_38558){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__33301__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__33301__auto____1.call(this,state_38558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__33301__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__33301__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto__))
})();
var state__33367__auto__ = (function (){var statearr_38568 = f__33366__auto__.call(null);
(statearr_38568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto__);

return statearr_38568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto__))
);

return c__33365__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map