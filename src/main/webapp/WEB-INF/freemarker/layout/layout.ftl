<#macro simplelayout title="" pageid="" pageclass="">
    <#assign domain = rc.getContextPath() />
    <#assign staticPath = domain + "/static/" />
    <#assign cssPath = staticPath + "css/" />
    <#assign scriptPath = staticPath + "script/" />
    <#assign jTablePath = staticPath + "script/jtable.2.4.0/" />
    <#assign images = staticPath + "images/" />
<!DOCTYPE html>


<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> ${title} </title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
    <!-- Optional theme -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">

    <link rel="stylesheet" media="all" href="${cssPath}global.css">
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css"/>
    <link rel="stylesheet" href="${jTablePath}themes/basic/jtable_basic.css">
</head>

<body id="${pageid}">
<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">External extract</a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
            </ul>
        </div>
        <!--/.nav-collapse -->
    </div>
</div>
<div class="container">
    <div class="starter-template">
        <#nested/>
    </div>
</div>

<script type="text/javascript">
    var BASE_URL = "${rc.getContextPath()}";
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script defer src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
<script defer src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
<script defer src="${jTablePath}jquery.jtable.min.js"></script>
<script defer src="${scriptPath}page_index.js"></script>

</body>
</html>
</#macro>


