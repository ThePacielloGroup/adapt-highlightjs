define([
    "core/js/adapt",
    "core/js/views/componentView",
    "core/js/models/componentModel"
], function(Adapt, ComponentView, ComponentModel) {
	var pageHighlighted = false;

	function loadScript(src, callback) {
		let head = document.querySelector('head');
		let script = document.createElement('script');
		script.src = src;
		if (callback) {
			script.onreadystatechange = callback;
			script.onload = callback;
		}
		head.appendChild(script);
	}

	function setupHljs() {
		Adapt.wait ? Adapt.wait.begin() : Adapt.trigger("plugin:beginWait");
		var config = Adapt.config.get("_mathJax");
		var src = config ? config._src : "assets/highlight.min.js";
		loadScript(src, function () {
			Adapt.wait ? Adapt.wait.end() : Adapt.trigger("plugin:endWait");
		});
	}

	function onPageViewReady(view) {
		if (window.hljs) {
			hljs.highlightAll();
		} else {
			console.log("hljs not found");
		}
		pageHighlighted = true;
	}

	function onComponentPostRender(view) {
		if (!pageHighlighted) {
			return;
		}
		view.$el.find("pre>code").each(function() {
			if ($(this).hasClass("hljs")) {
				return;
			}
			hljs.highlightElement(this);
		})

	}

	Adapt.once("app:dataReady", setupHljs).on({"pageView:ready": onPageViewReady, "componentView:postRender": onComponentPostRender});

});
