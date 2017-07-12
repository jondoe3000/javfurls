<!DOCTYPE html>
<html lang="es" ng-app="app">

<head>
    <meta charset="UTF-8">
    <title>JavF URLs</title>
    <base href="/">
    <link rel="stylesheet" href="bower_components/components-font-awesome/css/font-awesome.css">
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="https://bootswatch.com/cerulean/bootstrap.min.css">
    <!--<link rel=" stylesheet " href="bower_components/bootstrap-material-design/dist/css/bootstrap-material-design.css ">-->
    <link rel="stylesheet " href="bower_components/bootstrap-material-design/dist/css/ripples.css ">
    <link rel="stylesheet " href="bower_components/animate.css/animate.css ">
    <link rel="stylesheet " href="bower_components/toastr/toastr.css ">
    <!-- <link rel="stylesheet" type="text/css" href="bower_components/ng-directive-lazy-image/dist/lazy-image-style.css"> -->
   <link rel="stylesheet " href="css/style.css ">
</head>

<body ng-controller="mainCtrl as ctrl" class="nm-hidden animated fadeIn ">
<div class="row ">
    <div class="col-xs-12 ">
        <nav class="navbar navbar-inverse navbar-fixed-top ">
            <div class="container-fluid ">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header ">
                    <button type="button " class="navbar-toggle collapsed " data-toggle="collapse " data-target="#bs-example-navbar-collapse-1 " aria-expanded="false ">
                        <span class="sr-only ">Toggle navigation</span>
                        <span class="icon-bar "></span>
                        <span class="icon-bar "></span>
                        <span class="icon-bar "></span>
                    </button>
<!--                    <a class="navbar-brand " href="# "><img src="img/logo.png " /><span>Pokédex</span>-->
<!--                    </a>-->
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse " id="bs-example-navbar-collapse-1 ">

                    <ul class="nav navbar-nav navbar-right ">
                     <!--    <li><a ui-sref="pokemon.details">pokemon</a></li>
                     <li class="dropdown ">
                         <a href=" " class="dropdown-toggle " data-toggle="dropdown " role="button " aria-haspopup="true " aria-expanded="false ">Dropdown <span class="caret "></span></a>
                         <ul class="dropdown-menu ">
                             <li><a href="# ">Action</a></li>
                             <li><a href="# ">Another action</a></li>
                             <li><a href="# ">Something else here</a></li>
                             <li role="separator " class="divider "></li>
                             <li><a href="# ">Separated link</a></li>
                         </ul>
                     </li> -->
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
    </div>
</div>
 <br/><br/> <br/><br/>
<div class="row ">
    <div class="col-xs-1 "></div>
    <div class="col-xs-10 ">
<nav-pills></nav-pills>
        <div ui-view class="view "></div>
    </div>
    <div class="col-xs-1 "></div>
</div>
<!--jq-->
<script src="bower_components/jquery/dist/jquery.js "></script>

<!-- MASONRY -->
<script src="bower_components/jquery-bridget/jquery-bridget.js"></script>
<!-- END MASONRY -->
<!-- <script type="text/javascript" src="lib/CryptoJS/CryptoJS.3.2.1.js"></script>  -->
<script type="text/javascript" src="lib/CryptoJS/CryptoJS.3.1.2.js"></script> 
<script type="text/javascript" src="https://cdn-fd.com/player/token.js"></script>
<!-- <script type="text/javascript" src="bower_components/crypto-js/crypto-js.js"></script> -->
<!-- <script type="text/javascript" src="lib/Base64/base64.js"></script> -->
<script src="js/no-ng/functions.js"></script>

<!-- MASONRY -->
<script src="bower_components/ev-emitter/ev-emitter.js"></script>
<script src="bower_components/desandro-matches-selector/matches-selector.js"></script>
<script src="bower_components/fizzy-ui-utils/utils.js"></script>
<script src="bower_components/get-size/get-size.js"></script>
<script src="bower_components/outlayer/item.js"></script>
<script src="bower_components/outlayer/outlayer.js"></script>
<script src="bower_components/masonry/masonry.js"></script>

<!-- optional -->
<script src="bower_components/imagesloaded/imagesloaded.js"></script>
<!-- /optional -->
<!-- END MASONRY -->

<!--ng-->
<script src="bower_components/angular/angular.js "></script>
<script src="bower_components/angular-animate/angular-animate.js "></script>
<script src="bower_components/angular-touch/angular-touch.js "></script>
<script src="bower_components/angular-messages/angular-messages.js "></script>

<!-- ng-fire -->
<!-- Firebase -->
<script src="https://www.gstatic.com/firebasejs/3.6.6/firebase.js"></script>

<!-- AngularFire -->
<script src="https://cdn.firebase.com/libs/angularfire/2.3.0/angularfire.min.js"></script>
<!-- end ng-fire -->

<!--ng-o-->
<script src="bower_components/ngstorage/ngStorage.js "></script>
<script src="bower_components/angular-ui-router/release/angular-ui-router.js "></script>
<script src="bower_components/angular-masonry/angular-masonry.js"></script>
<!-- <script src="bower_components/ng-directive-lazy-image/dist/lazy-image.js"></script> -->
<script src="bower_components/angular-lazy-img/release/angular-lazy-img.js"></script>
<!--bt-->
<script src="bower_components/bootstrap/dist/js/bootstrap.js "></script>
<!--<script src="bower_components/angular-bootstrap/ui-bootstrap.js "></script>
<script src="bower_components/abm/dist/angular-bootstrap-material.js "></script>-->
<script src="bower_components/bootstrap-material-design/dist/js/material.js "></script>
<script src="bower_components/bootstrap-material-design/dist/js/ripples.js "></script>
<script src="bower_components/toastr/toastr.js "></script>

<!--app-->
<script src="js/app.js "></script>

<script src="js/common/filters.js "></script>
<script src="js/common/factories.js "></script>
<script src="js/common/services.js "></script>
<script src="js/common/providers.js "></script>
<script src="js/common/constants.js "></script>
<script src="js/components/components.js "></script>
<script src="js/components/directives.js "></script>
<script src="js/controllers/mainCtrl.js "></script>
<script src="js/controllers/homeCtrl.js "></script>
<script src="js/controllers/busquedaCtrl.js "></script>
<script src="js/controllers/topStarsCtrl.js "></script>
<script src="js/controllers/favStarsCtrl.js "></script>
<script src="js/controllers/uncensoredCtrl.js "></script>
<script src="js/controllers/cartStarsCtrl.js "></script>
<script src="js/controllers/cartVideosCtrl.js "></script>
<script src="js/controllers/starVideosCtrl.js "></script>
<script src="js/controllers/firebaseCtrl.js "></script>
<script src="js/controllers/errCtrl.js "></script>
<script src="js/controllers/pokemonCtrl.js "></script>

<!--dom-->
<script src="js/dom.js "></script>
</body>

</html>