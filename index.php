<?php
require_once 'config.php';
include(HEADER_TEMPLATE);
?>

<!-- stylesheets import start -->

<link rel="stylesheet" href="css/border.css">

<!-- stylesheets import start -->

<br><br>
<div class="container">
    <div class="row">
        <div class="col">
        </div>
        <div class="col pt-5">
            <img src="img/ai.png">
        </div>
        <div class="col-7">
            <div id="board" class="pt-5 pl-4">
                <div class="row pt-3 ml-4">
                    <div class="pl-3">
                        <img src="img/blue.png" id="img00" />
                    </div>
                    <div class="pl-2">
                        <img src="img/blue.png" id="img01" />
                    </div>
                    <div class="pl-2">
                        <img src="img/blue.png" id="img02" />
                    </div>
                    <div class="pl-1">
                        <img src="img/blue.png" id="img03" />
                    </div>
                    <div class="pl-1">
                        <img src="img/blue.png" id="img04" />
                    </div>
                    <div class="pl-2">
                        <img src="img/blue.png" id="img05" />
                    </div>
                </div>
                <div class="row pt-3 ml-4">
                    <div class="pl-3 pt-1">
                        <img src="img/blue.png" id="img10" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img src="img/blue.png" id="img11" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img src="img/blue.png" id="img12" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img src="img/blue.png" id="img13" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img src="img/blue.png" id="img14" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img src="img/blue.png" id="img15" />
                    </div>
                </div>
                <div class="row pt-3 ml-4">
                    <div class="pl-3 pt-1">
                        <img src="img/blue.png" id="img20" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img src="img/blue.png" id="img21" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img src="img/blue.png" id="img22" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img src="img/blue.png" id="img23" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img src="img/blue.png" id="img24" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img src="img/blue.png" id="img25" />
                    </div>
                </div>
                <div class="row pt-3 ml-4">
                    <div class="pl-3 pt-1">
                        <img src="img/blue.png" id="img30" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img src="img/blue.png" id="img31" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img src="img/blue.png" id="img32" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img src="img/blue.png" id="img33" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img src="img/blue.png" id="img34" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img src="img/blue.png" id="img35" />
                    </div>
                </div>
                <div class="row pt-3 ml-4">
                    <div class="pl-3 pt-2">
                        <img src="img/blue.png" id="img40" />
                    </div>
                    <div class="pt-2 pl-2">
                        <img src="img/blue.png" id="img41" />
                    </div>
                    <div class="pt-2 pl-2">
                        <img src="img/blue.png" id="img42" />
                    </div>
                    <div class="pt-2 pl-1">
                        <img src="img/blue.png" id="img43" />
                    </div>
                    <div class="pt-2 pl-1">
                        <img src="img/blue.png" id="img44" />
                    </div>
                    <div class="pt-2 pl-2">
                        <img src="img/blue.png" id="img45" />
                    </div>
                </div>
                <div class="row pt-3 ml-4">
                    <div class="pl-3 pt-1">
                        <img src="img/blue.png" id="img50" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img src="img/blue.png" id="img51" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img src="img/blue.png" id="img52" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img src="img/blue.png" id="img53" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img src="img/blue.png" id="img54" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img src="img/blue.png" id="img55" />
                    </div>
                </div>
                <br> <br> <br>
            </div>
        </div>
        <div class="col pt-5">
            <img src="img/human.png">
        </div>
        <div class="col">
        </div>
    </div>
</div>

<?php
include(FOOTER_TEMPLATE);
?>

<!-- scripts import start -->

<script src="controller/stateController.js"></script>
<script src="model/boardModel.js"></script>
<script src="main.js"></script>

<!-- scripts import end -->