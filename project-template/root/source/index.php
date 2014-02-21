<?php include "php/path.php"; ?>

<?php
	// Compilation mode, which must be one of "RAW", "WHITESPACE", "SIMPLE", or "ADVANCED".
	// The default value is "SIMPLE".
	$COMPILE_MODE = isset( $_GET['mode'] ) ? $_GET['mode'] : 'SIMPLE';

	$USE_COMPILE_JS = false;
	if (strpos(URLADDR,'dev.') == false && strpos(URLADDR,'local.') == false) {
    $USE_COMPILE_JS = true;
	}
	if (isset($_GET['compile'])) {
		$USE_COMPILE_JS = true;
	}

	if($USE_COMPILE_JS == true) {
		$PATH_TO_JS = 'assets/js/project/{%= namespace %}-compiled.js';
	}else {
		$PATH_TO_JS = 'http://localhost:9810/compile?id={%= namespace %}&mode='.$COMPILE_MODE;
	}
?>

<!DOCTYPE html>
<html>

	<head>
		<title>{%= title %}</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1">
	  <meta name="keywords" content="">
	  <meta name="description" content="">

		<meta content="" property="og:url">
		<meta content="" property="og:title">
		<meta content="" property="og:description">
		<meta content="assets/images/misc/facebook.png" property="og:image">

	 	<script>(function(w){var dpr=((w.devicePixelRatio===undefined)?1:w.devicePixelRatio);if(!!w.navigator.standalone){var r=new XMLHttpRequest();r.open('GET','php/retinaimages.php?devicePixelRatio='+dpr,false);r.send()}else{document.cookie='devicePixelRatio='+dpr+'; path=/'}})(window)</script>

	  <link rel="apple-touch-icon" href="assets/images/misc/icon-iphone.png">
		<link rel="apple-touch-icon" sizes="72x72" href="assets/images/misc/icon-ipad.png">
		<link rel="apple-touch-icon" sizes="114x114" href="assets/images/misc/icon-iphone4.png">
		<link rel="apple-touch-icon" sizes="144x144" href="assets/images/misc/icon-ipad3.png">
	  <link rel="shortcut icon" href="assets/images/misc/favicon.ico">
	  <link rel="stylesheet" href="styles/css/main.css" media="screen">
	</head>

	<body>
		<!-- third-party -->
		<script src="assets/js/thirdparty/createjs/easeljs-0.7.1.min.js"></script>
		<script src="assets/js/thirdparty/createjs/preloadjs-0.4.1.min.js"></script>
		<script src="assets/js/thirdparty/greensock/TweenMax.min.js"></script>
		<script src="assets/js/thirdparty/greensock/plugins/CSSPlugin.min.js"></script>
		<script src="assets/js/thirdparty/greensock/plugins/ScrollToPlugin.min.js"></script>
		<script src="assets/js/thirdparty/greensock/plugins/ThrowPropsPlugin.min.js"></script>
		<script src="assets/js/thirdparty/greensock/utils/Draggable.min.js"></script>

		<!-- project js -->
		<script src="<?php echo $PATH_TO_JS ?>"></script>

		<!-- execute the main js-->
		<script>
			var config = {
				basePath: '<?php echo URLADDR; ?>'
			};

			fengshui.main( config );
		</script>
	</body>
	

</html>