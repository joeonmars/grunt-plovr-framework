goog.provide('{%= namespace %}.apps.Main');

goog.require('goog.dom');
goog.require('goog.fx.anim');
goog.require('{%= namespace %}.templates.Main');


{%= namespace %}.apps.Main = function() {

	goog.fx.anim.setAnimationWindow(window);

	var helloWorld = soy.renderAsFragment({%= namespace %}.templates.Main.HelloWorld);
	goog.dom.appendChild(document.body, helloWorld);

	//console.log(TweenMax);
};