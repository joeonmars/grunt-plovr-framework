goog.provide('{%= namespace %}');

goog.require('{%= namespace %}.apps.Main');


{%= namespace %}.Config = {};


{%= namespace %}.init = function( config ) {

	{%= namespace %}.Config = config;
	
	switch({%= namespace %}.Config['app']) {
		case 'main':
		{%= namespace %}.apps.Main();
		break;
	};
};

goog.exportProperty(window, '{%= namespace %}', {%= namespace %});
goog.exportProperty({%= namespace %}, 'init', {%= namespace %}.init);