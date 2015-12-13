// Compiled by ClojureScript 1.7.107 {:target :nodejs}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__37479 = cljs.core._EQ_;
var expr__37480 = (function (){var or__31282__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__31282__auto__)){
return or__31282__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__37479.call(null,"true",expr__37480))){
return true;
} else {
if(cljs.core.truth_(pred__37479.call(null,"false",expr__37480))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37480)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__32347__auto__ = [];
var len__32340__auto___37483 = arguments.length;
var i__32341__auto___37484 = (0);
while(true){
if((i__32341__auto___37484 < len__32340__auto___37483)){
args__32347__auto__.push((arguments[i__32341__auto___37484]));

var G__37485 = (i__32341__auto___37484 + (1));
i__32341__auto___37484 = G__37485;
continue;
} else {
}
break;
}

var argseq__32348__auto__ = ((((0) < args__32347__auto__.length))?(new cljs.core.IndexedSeq(args__32347__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__32348__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq37482){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37482));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37486){
var map__37489 = p__37486;
var map__37489__$1 = ((((!((map__37489 == null)))?((((map__37489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37489):map__37489);
var message = cljs.core.get.call(null,map__37489__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37489__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__31282__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__31282__auto__)){
return or__31282__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__31270__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__31270__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__31270__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33365__auto___37651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___37651,ch){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___37651,ch){
return (function (state_37620){
var state_val_37621 = (state_37620[(1)]);
if((state_val_37621 === (7))){
var inst_37616 = (state_37620[(2)]);
var state_37620__$1 = state_37620;
var statearr_37622_37652 = state_37620__$1;
(statearr_37622_37652[(2)] = inst_37616);

(statearr_37622_37652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (1))){
var state_37620__$1 = state_37620;
var statearr_37623_37653 = state_37620__$1;
(statearr_37623_37653[(2)] = null);

(statearr_37623_37653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (4))){
var inst_37573 = (state_37620[(7)]);
var inst_37573__$1 = (state_37620[(2)]);
var state_37620__$1 = (function (){var statearr_37624 = state_37620;
(statearr_37624[(7)] = inst_37573__$1);

return statearr_37624;
})();
if(cljs.core.truth_(inst_37573__$1)){
var statearr_37625_37654 = state_37620__$1;
(statearr_37625_37654[(1)] = (5));

} else {
var statearr_37626_37655 = state_37620__$1;
(statearr_37626_37655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (15))){
var inst_37580 = (state_37620[(8)]);
var inst_37595 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37580);
var inst_37596 = cljs.core.first.call(null,inst_37595);
var inst_37597 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37596);
var inst_37598 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37597)].join('');
var inst_37599 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37598);
var state_37620__$1 = state_37620;
var statearr_37627_37656 = state_37620__$1;
(statearr_37627_37656[(2)] = inst_37599);

(statearr_37627_37656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (13))){
var inst_37604 = (state_37620[(2)]);
var state_37620__$1 = state_37620;
var statearr_37628_37657 = state_37620__$1;
(statearr_37628_37657[(2)] = inst_37604);

(statearr_37628_37657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (6))){
var state_37620__$1 = state_37620;
var statearr_37629_37658 = state_37620__$1;
(statearr_37629_37658[(2)] = null);

(statearr_37629_37658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (17))){
var inst_37602 = (state_37620[(2)]);
var state_37620__$1 = state_37620;
var statearr_37630_37659 = state_37620__$1;
(statearr_37630_37659[(2)] = inst_37602);

(statearr_37630_37659[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (3))){
var inst_37618 = (state_37620[(2)]);
var state_37620__$1 = state_37620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37620__$1,inst_37618);
} else {
if((state_val_37621 === (12))){
var inst_37579 = (state_37620[(9)]);
var inst_37593 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37579,opts);
var state_37620__$1 = state_37620;
if(cljs.core.truth_(inst_37593)){
var statearr_37631_37660 = state_37620__$1;
(statearr_37631_37660[(1)] = (15));

} else {
var statearr_37632_37661 = state_37620__$1;
(statearr_37632_37661[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (2))){
var state_37620__$1 = state_37620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37620__$1,(4),ch);
} else {
if((state_val_37621 === (11))){
var inst_37580 = (state_37620[(8)]);
var inst_37585 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37586 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37580);
var inst_37587 = cljs.core.async.timeout.call(null,(1000));
var inst_37588 = [inst_37586,inst_37587];
var inst_37589 = (new cljs.core.PersistentVector(null,2,(5),inst_37585,inst_37588,null));
var state_37620__$1 = state_37620;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37620__$1,(14),inst_37589);
} else {
if((state_val_37621 === (9))){
var inst_37580 = (state_37620[(8)]);
var inst_37606 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37607 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37580);
var inst_37608 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37607);
var inst_37609 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37608)].join('');
var inst_37610 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37609);
var state_37620__$1 = (function (){var statearr_37633 = state_37620;
(statearr_37633[(10)] = inst_37606);

return statearr_37633;
})();
var statearr_37634_37662 = state_37620__$1;
(statearr_37634_37662[(2)] = inst_37610);

(statearr_37634_37662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (5))){
var inst_37573 = (state_37620[(7)]);
var inst_37575 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37576 = (new cljs.core.PersistentArrayMap(null,2,inst_37575,null));
var inst_37577 = (new cljs.core.PersistentHashSet(null,inst_37576,null));
var inst_37578 = figwheel.client.focus_msgs.call(null,inst_37577,inst_37573);
var inst_37579 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37578);
var inst_37580 = cljs.core.first.call(null,inst_37578);
var inst_37581 = figwheel.client.autoload_QMARK_.call(null);
var state_37620__$1 = (function (){var statearr_37635 = state_37620;
(statearr_37635[(9)] = inst_37579);

(statearr_37635[(8)] = inst_37580);

return statearr_37635;
})();
if(cljs.core.truth_(inst_37581)){
var statearr_37636_37663 = state_37620__$1;
(statearr_37636_37663[(1)] = (8));

} else {
var statearr_37637_37664 = state_37620__$1;
(statearr_37637_37664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (14))){
var inst_37591 = (state_37620[(2)]);
var state_37620__$1 = state_37620;
var statearr_37638_37665 = state_37620__$1;
(statearr_37638_37665[(2)] = inst_37591);

(statearr_37638_37665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (16))){
var state_37620__$1 = state_37620;
var statearr_37639_37666 = state_37620__$1;
(statearr_37639_37666[(2)] = null);

(statearr_37639_37666[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (10))){
var inst_37612 = (state_37620[(2)]);
var state_37620__$1 = (function (){var statearr_37640 = state_37620;
(statearr_37640[(11)] = inst_37612);

return statearr_37640;
})();
var statearr_37641_37667 = state_37620__$1;
(statearr_37641_37667[(2)] = null);

(statearr_37641_37667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (8))){
var inst_37579 = (state_37620[(9)]);
var inst_37583 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37579,opts);
var state_37620__$1 = state_37620;
if(cljs.core.truth_(inst_37583)){
var statearr_37642_37668 = state_37620__$1;
(statearr_37642_37668[(1)] = (11));

} else {
var statearr_37643_37669 = state_37620__$1;
(statearr_37643_37669[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto___37651,ch))
;
return ((function (switch__33300__auto__,c__33365__auto___37651,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33301__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33301__auto____0 = (function (){
var statearr_37647 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37647[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33301__auto__);

(statearr_37647[(1)] = (1));

return statearr_37647;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33301__auto____1 = (function (state_37620){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_37620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e37648){if((e37648 instanceof Object)){
var ex__33304__auto__ = e37648;
var statearr_37649_37670 = state_37620;
(statearr_37649_37670[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37671 = state_37620;
state_37620 = G__37671;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33301__auto__ = function(state_37620){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33301__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33301__auto____1.call(this,state_37620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33301__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33301__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___37651,ch))
})();
var state__33367__auto__ = (function (){var statearr_37650 = f__33366__auto__.call(null);
(statearr_37650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___37651);

return statearr_37650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___37651,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37672_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37672_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37679 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37679){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_37677 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_37678 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37678;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37677;
}}catch (e37676){if((e37676 instanceof Error)){
var e = e37676;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37679], null));
} else {
var e = e37676;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37679))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37680){
var map__37687 = p__37680;
var map__37687__$1 = ((((!((map__37687 == null)))?((((map__37687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37687):map__37687);
var opts = map__37687__$1;
var build_id = cljs.core.get.call(null,map__37687__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37687,map__37687__$1,opts,build_id){
return (function (p__37689){
var vec__37690 = p__37689;
var map__37691 = cljs.core.nth.call(null,vec__37690,(0),null);
var map__37691__$1 = ((((!((map__37691 == null)))?((((map__37691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37691):map__37691);
var msg = map__37691__$1;
var msg_name = cljs.core.get.call(null,map__37691__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37690,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37690,map__37691,map__37691__$1,msg,msg_name,_,map__37687,map__37687__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37690,map__37691,map__37691__$1,msg,msg_name,_,map__37687,map__37687__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37687,map__37687__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37697){
var vec__37698 = p__37697;
var map__37699 = cljs.core.nth.call(null,vec__37698,(0),null);
var map__37699__$1 = ((((!((map__37699 == null)))?((((map__37699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37699):map__37699);
var msg = map__37699__$1;
var msg_name = cljs.core.get.call(null,map__37699__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37698,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37701){
var map__37711 = p__37701;
var map__37711__$1 = ((((!((map__37711 == null)))?((((map__37711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37711):map__37711);
var on_compile_warning = cljs.core.get.call(null,map__37711__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37711__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37711,map__37711__$1,on_compile_warning,on_compile_fail){
return (function (p__37713){
var vec__37714 = p__37713;
var map__37715 = cljs.core.nth.call(null,vec__37714,(0),null);
var map__37715__$1 = ((((!((map__37715 == null)))?((((map__37715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37715):map__37715);
var msg = map__37715__$1;
var msg_name = cljs.core.get.call(null,map__37715__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37714,(1));
var pred__37717 = cljs.core._EQ_;
var expr__37718 = msg_name;
if(cljs.core.truth_(pred__37717.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37718))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37717.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37718))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37711,map__37711__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33365__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto__,msg_hist,msg_names,msg){
return (function (state_37934){
var state_val_37935 = (state_37934[(1)]);
if((state_val_37935 === (7))){
var inst_37858 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
if(cljs.core.truth_(inst_37858)){
var statearr_37936_37982 = state_37934__$1;
(statearr_37936_37982[(1)] = (8));

} else {
var statearr_37937_37983 = state_37934__$1;
(statearr_37937_37983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (20))){
var inst_37928 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37938_37984 = state_37934__$1;
(statearr_37938_37984[(2)] = inst_37928);

(statearr_37938_37984[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (27))){
var inst_37924 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37939_37985 = state_37934__$1;
(statearr_37939_37985[(2)] = inst_37924);

(statearr_37939_37985[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (1))){
var inst_37851 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37934__$1 = state_37934;
if(cljs.core.truth_(inst_37851)){
var statearr_37940_37986 = state_37934__$1;
(statearr_37940_37986[(1)] = (2));

} else {
var statearr_37941_37987 = state_37934__$1;
(statearr_37941_37987[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (24))){
var inst_37926 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37942_37988 = state_37934__$1;
(statearr_37942_37988[(2)] = inst_37926);

(statearr_37942_37988[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (4))){
var inst_37932 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37934__$1,inst_37932);
} else {
if((state_val_37935 === (15))){
var inst_37930 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37943_37989 = state_37934__$1;
(statearr_37943_37989[(2)] = inst_37930);

(statearr_37943_37989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (21))){
var inst_37889 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37944_37990 = state_37934__$1;
(statearr_37944_37990[(2)] = inst_37889);

(statearr_37944_37990[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (31))){
var inst_37913 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37934__$1 = state_37934;
if(cljs.core.truth_(inst_37913)){
var statearr_37945_37991 = state_37934__$1;
(statearr_37945_37991[(1)] = (34));

} else {
var statearr_37946_37992 = state_37934__$1;
(statearr_37946_37992[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (32))){
var inst_37922 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37947_37993 = state_37934__$1;
(statearr_37947_37993[(2)] = inst_37922);

(statearr_37947_37993[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (33))){
var inst_37911 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37948_37994 = state_37934__$1;
(statearr_37948_37994[(2)] = inst_37911);

(statearr_37948_37994[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (13))){
var inst_37872 = figwheel.client.heads_up.clear.call(null);
var state_37934__$1 = state_37934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37934__$1,(16),inst_37872);
} else {
if((state_val_37935 === (22))){
var inst_37893 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37894 = figwheel.client.heads_up.append_message.call(null,inst_37893);
var state_37934__$1 = state_37934;
var statearr_37949_37995 = state_37934__$1;
(statearr_37949_37995[(2)] = inst_37894);

(statearr_37949_37995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (36))){
var inst_37920 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37950_37996 = state_37934__$1;
(statearr_37950_37996[(2)] = inst_37920);

(statearr_37950_37996[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (29))){
var inst_37904 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37951_37997 = state_37934__$1;
(statearr_37951_37997[(2)] = inst_37904);

(statearr_37951_37997[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (6))){
var inst_37853 = (state_37934[(7)]);
var state_37934__$1 = state_37934;
var statearr_37952_37998 = state_37934__$1;
(statearr_37952_37998[(2)] = inst_37853);

(statearr_37952_37998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (28))){
var inst_37900 = (state_37934[(2)]);
var inst_37901 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37902 = figwheel.client.heads_up.display_warning.call(null,inst_37901);
var state_37934__$1 = (function (){var statearr_37953 = state_37934;
(statearr_37953[(8)] = inst_37900);

return statearr_37953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37934__$1,(29),inst_37902);
} else {
if((state_val_37935 === (25))){
var inst_37898 = figwheel.client.heads_up.clear.call(null);
var state_37934__$1 = state_37934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37934__$1,(28),inst_37898);
} else {
if((state_val_37935 === (34))){
var inst_37915 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37934__$1 = state_37934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37934__$1,(37),inst_37915);
} else {
if((state_val_37935 === (17))){
var inst_37880 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37954_37999 = state_37934__$1;
(statearr_37954_37999[(2)] = inst_37880);

(statearr_37954_37999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (3))){
var inst_37870 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37934__$1 = state_37934;
if(cljs.core.truth_(inst_37870)){
var statearr_37955_38000 = state_37934__$1;
(statearr_37955_38000[(1)] = (13));

} else {
var statearr_37956_38001 = state_37934__$1;
(statearr_37956_38001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (12))){
var inst_37866 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37957_38002 = state_37934__$1;
(statearr_37957_38002[(2)] = inst_37866);

(statearr_37957_38002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (2))){
var inst_37853 = (state_37934[(7)]);
var inst_37853__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37934__$1 = (function (){var statearr_37958 = state_37934;
(statearr_37958[(7)] = inst_37853__$1);

return statearr_37958;
})();
if(cljs.core.truth_(inst_37853__$1)){
var statearr_37959_38003 = state_37934__$1;
(statearr_37959_38003[(1)] = (5));

} else {
var statearr_37960_38004 = state_37934__$1;
(statearr_37960_38004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (23))){
var inst_37896 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37934__$1 = state_37934;
if(cljs.core.truth_(inst_37896)){
var statearr_37961_38005 = state_37934__$1;
(statearr_37961_38005[(1)] = (25));

} else {
var statearr_37962_38006 = state_37934__$1;
(statearr_37962_38006[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (35))){
var state_37934__$1 = state_37934;
var statearr_37963_38007 = state_37934__$1;
(statearr_37963_38007[(2)] = null);

(statearr_37963_38007[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (19))){
var inst_37891 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37934__$1 = state_37934;
if(cljs.core.truth_(inst_37891)){
var statearr_37964_38008 = state_37934__$1;
(statearr_37964_38008[(1)] = (22));

} else {
var statearr_37965_38009 = state_37934__$1;
(statearr_37965_38009[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (11))){
var inst_37862 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37966_38010 = state_37934__$1;
(statearr_37966_38010[(2)] = inst_37862);

(statearr_37966_38010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (9))){
var inst_37864 = figwheel.client.heads_up.clear.call(null);
var state_37934__$1 = state_37934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37934__$1,(12),inst_37864);
} else {
if((state_val_37935 === (5))){
var inst_37855 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37934__$1 = state_37934;
var statearr_37967_38011 = state_37934__$1;
(statearr_37967_38011[(2)] = inst_37855);

(statearr_37967_38011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (14))){
var inst_37882 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37934__$1 = state_37934;
if(cljs.core.truth_(inst_37882)){
var statearr_37968_38012 = state_37934__$1;
(statearr_37968_38012[(1)] = (18));

} else {
var statearr_37969_38013 = state_37934__$1;
(statearr_37969_38013[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (26))){
var inst_37906 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37934__$1 = state_37934;
if(cljs.core.truth_(inst_37906)){
var statearr_37970_38014 = state_37934__$1;
(statearr_37970_38014[(1)] = (30));

} else {
var statearr_37971_38015 = state_37934__$1;
(statearr_37971_38015[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (16))){
var inst_37874 = (state_37934[(2)]);
var inst_37875 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37876 = figwheel.client.format_messages.call(null,inst_37875);
var inst_37877 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37878 = figwheel.client.heads_up.display_error.call(null,inst_37876,inst_37877);
var state_37934__$1 = (function (){var statearr_37972 = state_37934;
(statearr_37972[(9)] = inst_37874);

return statearr_37972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37934__$1,(17),inst_37878);
} else {
if((state_val_37935 === (30))){
var inst_37908 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37909 = figwheel.client.heads_up.display_warning.call(null,inst_37908);
var state_37934__$1 = state_37934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37934__$1,(33),inst_37909);
} else {
if((state_val_37935 === (10))){
var inst_37868 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37973_38016 = state_37934__$1;
(statearr_37973_38016[(2)] = inst_37868);

(statearr_37973_38016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (18))){
var inst_37884 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37885 = figwheel.client.format_messages.call(null,inst_37884);
var inst_37886 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37887 = figwheel.client.heads_up.display_error.call(null,inst_37885,inst_37886);
var state_37934__$1 = state_37934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37934__$1,(21),inst_37887);
} else {
if((state_val_37935 === (37))){
var inst_37917 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37974_38017 = state_37934__$1;
(statearr_37974_38017[(2)] = inst_37917);

(statearr_37974_38017[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (8))){
var inst_37860 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37934__$1 = state_37934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37934__$1,(11),inst_37860);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33300__auto__,c__33365__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33301__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33301__auto____0 = (function (){
var statearr_37978 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37978[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33301__auto__);

(statearr_37978[(1)] = (1));

return statearr_37978;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33301__auto____1 = (function (state_37934){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_37934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e37979){if((e37979 instanceof Object)){
var ex__33304__auto__ = e37979;
var statearr_37980_38018 = state_37934;
(statearr_37980_38018[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38019 = state_37934;
state_37934 = G__38019;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33301__auto__ = function(state_37934){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33301__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33301__auto____1.call(this,state_37934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33301__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33301__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto__,msg_hist,msg_names,msg))
})();
var state__33367__auto__ = (function (){var statearr_37981 = f__33366__auto__.call(null);
(statearr_37981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto__);

return statearr_37981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto__,msg_hist,msg_names,msg))
);

return c__33365__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33365__auto___38082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___38082,ch){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___38082,ch){
return (function (state_38065){
var state_val_38066 = (state_38065[(1)]);
if((state_val_38066 === (1))){
var state_38065__$1 = state_38065;
var statearr_38067_38083 = state_38065__$1;
(statearr_38067_38083[(2)] = null);

(statearr_38067_38083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38066 === (2))){
var state_38065__$1 = state_38065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38065__$1,(4),ch);
} else {
if((state_val_38066 === (3))){
var inst_38063 = (state_38065[(2)]);
var state_38065__$1 = state_38065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38065__$1,inst_38063);
} else {
if((state_val_38066 === (4))){
var inst_38053 = (state_38065[(7)]);
var inst_38053__$1 = (state_38065[(2)]);
var state_38065__$1 = (function (){var statearr_38068 = state_38065;
(statearr_38068[(7)] = inst_38053__$1);

return statearr_38068;
})();
if(cljs.core.truth_(inst_38053__$1)){
var statearr_38069_38084 = state_38065__$1;
(statearr_38069_38084[(1)] = (5));

} else {
var statearr_38070_38085 = state_38065__$1;
(statearr_38070_38085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38066 === (5))){
var inst_38053 = (state_38065[(7)]);
var inst_38055 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38053);
var state_38065__$1 = state_38065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38065__$1,(8),inst_38055);
} else {
if((state_val_38066 === (6))){
var state_38065__$1 = state_38065;
var statearr_38071_38086 = state_38065__$1;
(statearr_38071_38086[(2)] = null);

(statearr_38071_38086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38066 === (7))){
var inst_38061 = (state_38065[(2)]);
var state_38065__$1 = state_38065;
var statearr_38072_38087 = state_38065__$1;
(statearr_38072_38087[(2)] = inst_38061);

(statearr_38072_38087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38066 === (8))){
var inst_38057 = (state_38065[(2)]);
var state_38065__$1 = (function (){var statearr_38073 = state_38065;
(statearr_38073[(8)] = inst_38057);

return statearr_38073;
})();
var statearr_38074_38088 = state_38065__$1;
(statearr_38074_38088[(2)] = null);

(statearr_38074_38088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__33365__auto___38082,ch))
;
return ((function (switch__33300__auto__,c__33365__auto___38082,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33301__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33301__auto____0 = (function (){
var statearr_38078 = [null,null,null,null,null,null,null,null,null];
(statearr_38078[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33301__auto__);

(statearr_38078[(1)] = (1));

return statearr_38078;
});
var figwheel$client$heads_up_plugin_$_state_machine__33301__auto____1 = (function (state_38065){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_38065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e38079){if((e38079 instanceof Object)){
var ex__33304__auto__ = e38079;
var statearr_38080_38089 = state_38065;
(statearr_38080_38089[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38090 = state_38065;
state_38065 = G__38090;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33301__auto__ = function(state_38065){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33301__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33301__auto____1.call(this,state_38065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33301__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33301__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___38082,ch))
})();
var state__33367__auto__ = (function (){var statearr_38081 = f__33366__auto__.call(null);
(statearr_38081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___38082);

return statearr_38081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___38082,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33365__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto__){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto__){
return (function (state_38111){
var state_val_38112 = (state_38111[(1)]);
if((state_val_38112 === (1))){
var inst_38106 = cljs.core.async.timeout.call(null,(3000));
var state_38111__$1 = state_38111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38111__$1,(2),inst_38106);
} else {
if((state_val_38112 === (2))){
var inst_38108 = (state_38111[(2)]);
var inst_38109 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38111__$1 = (function (){var statearr_38113 = state_38111;
(statearr_38113[(7)] = inst_38108);

return statearr_38113;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38111__$1,inst_38109);
} else {
return null;
}
}
});})(c__33365__auto__))
;
return ((function (switch__33300__auto__,c__33365__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33301__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33301__auto____0 = (function (){
var statearr_38117 = [null,null,null,null,null,null,null,null];
(statearr_38117[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33301__auto__);

(statearr_38117[(1)] = (1));

return statearr_38117;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33301__auto____1 = (function (state_38111){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_38111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e38118){if((e38118 instanceof Object)){
var ex__33304__auto__ = e38118;
var statearr_38119_38121 = state_38111;
(statearr_38119_38121[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38122 = state_38111;
state_38111 = G__38122;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33301__auto__ = function(state_38111){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33301__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33301__auto____1.call(this,state_38111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33301__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33301__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto__))
})();
var state__33367__auto__ = (function (){var statearr_38120 = f__33366__auto__.call(null);
(statearr_38120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto__);

return statearr_38120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto__))
);

return c__33365__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38123){
var map__38130 = p__38123;
var map__38130__$1 = ((((!((map__38130 == null)))?((((map__38130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38130):map__38130);
var ed = map__38130__$1;
var formatted_exception = cljs.core.get.call(null,map__38130__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38130__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38130__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38132_38136 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38133_38137 = null;
var count__38134_38138 = (0);
var i__38135_38139 = (0);
while(true){
if((i__38135_38139 < count__38134_38138)){
var msg_38140 = cljs.core._nth.call(null,chunk__38133_38137,i__38135_38139);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38140);

var G__38141 = seq__38132_38136;
var G__38142 = chunk__38133_38137;
var G__38143 = count__38134_38138;
var G__38144 = (i__38135_38139 + (1));
seq__38132_38136 = G__38141;
chunk__38133_38137 = G__38142;
count__38134_38138 = G__38143;
i__38135_38139 = G__38144;
continue;
} else {
var temp__4425__auto___38145 = cljs.core.seq.call(null,seq__38132_38136);
if(temp__4425__auto___38145){
var seq__38132_38146__$1 = temp__4425__auto___38145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38132_38146__$1)){
var c__32085__auto___38147 = cljs.core.chunk_first.call(null,seq__38132_38146__$1);
var G__38148 = cljs.core.chunk_rest.call(null,seq__38132_38146__$1);
var G__38149 = c__32085__auto___38147;
var G__38150 = cljs.core.count.call(null,c__32085__auto___38147);
var G__38151 = (0);
seq__38132_38136 = G__38148;
chunk__38133_38137 = G__38149;
count__38134_38138 = G__38150;
i__38135_38139 = G__38151;
continue;
} else {
var msg_38152 = cljs.core.first.call(null,seq__38132_38146__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38152);

var G__38153 = cljs.core.next.call(null,seq__38132_38146__$1);
var G__38154 = null;
var G__38155 = (0);
var G__38156 = (0);
seq__38132_38136 = G__38153;
chunk__38133_38137 = G__38154;
count__38134_38138 = G__38155;
i__38135_38139 = G__38156;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38157){
var map__38160 = p__38157;
var map__38160__$1 = ((((!((map__38160 == null)))?((((map__38160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38160):map__38160);
var w = map__38160__$1;
var message = cljs.core.get.call(null,map__38160__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__31270__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__31270__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__31270__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38168 = cljs.core.seq.call(null,plugins);
var chunk__38169 = null;
var count__38170 = (0);
var i__38171 = (0);
while(true){
if((i__38171 < count__38170)){
var vec__38172 = cljs.core._nth.call(null,chunk__38169,i__38171);
var k = cljs.core.nth.call(null,vec__38172,(0),null);
var plugin = cljs.core.nth.call(null,vec__38172,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38174 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38168,chunk__38169,count__38170,i__38171,pl_38174,vec__38172,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38174.call(null,msg_hist);
});})(seq__38168,chunk__38169,count__38170,i__38171,pl_38174,vec__38172,k,plugin))
);
} else {
}

var G__38175 = seq__38168;
var G__38176 = chunk__38169;
var G__38177 = count__38170;
var G__38178 = (i__38171 + (1));
seq__38168 = G__38175;
chunk__38169 = G__38176;
count__38170 = G__38177;
i__38171 = G__38178;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38168);
if(temp__4425__auto__){
var seq__38168__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38168__$1)){
var c__32085__auto__ = cljs.core.chunk_first.call(null,seq__38168__$1);
var G__38179 = cljs.core.chunk_rest.call(null,seq__38168__$1);
var G__38180 = c__32085__auto__;
var G__38181 = cljs.core.count.call(null,c__32085__auto__);
var G__38182 = (0);
seq__38168 = G__38179;
chunk__38169 = G__38180;
count__38170 = G__38181;
i__38171 = G__38182;
continue;
} else {
var vec__38173 = cljs.core.first.call(null,seq__38168__$1);
var k = cljs.core.nth.call(null,vec__38173,(0),null);
var plugin = cljs.core.nth.call(null,vec__38173,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38183 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38168,chunk__38169,count__38170,i__38171,pl_38183,vec__38173,k,plugin,seq__38168__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38183.call(null,msg_hist);
});})(seq__38168,chunk__38169,count__38170,i__38171,pl_38183,vec__38173,k,plugin,seq__38168__$1,temp__4425__auto__))
);
} else {
}

var G__38184 = cljs.core.next.call(null,seq__38168__$1);
var G__38185 = null;
var G__38186 = (0);
var G__38187 = (0);
seq__38168 = G__38184;
chunk__38169 = G__38185;
count__38170 = G__38186;
i__38171 = G__38187;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args38188 = [];
var len__32340__auto___38191 = arguments.length;
var i__32341__auto___38192 = (0);
while(true){
if((i__32341__auto___38192 < len__32340__auto___38191)){
args38188.push((arguments[i__32341__auto___38192]));

var G__38193 = (i__32341__auto___38192 + (1));
i__32341__auto___38192 = G__38193;
continue;
} else {
}
break;
}

var G__38190 = args38188.length;
switch (G__38190) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38188.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__32347__auto__ = [];
var len__32340__auto___38199 = arguments.length;
var i__32341__auto___38200 = (0);
while(true){
if((i__32341__auto___38200 < len__32340__auto___38199)){
args__32347__auto__.push((arguments[i__32341__auto___38200]));

var G__38201 = (i__32341__auto___38200 + (1));
i__32341__auto___38200 = G__38201;
continue;
} else {
}
break;
}

var argseq__32348__auto__ = ((((0) < args__32347__auto__.length))?(new cljs.core.IndexedSeq(args__32347__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__32348__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38196){
var map__38197 = p__38196;
var map__38197__$1 = ((((!((map__38197 == null)))?((((map__38197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38197):map__38197);
var opts = map__38197__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38195){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38195));
});

//# sourceMappingURL=client.js.map