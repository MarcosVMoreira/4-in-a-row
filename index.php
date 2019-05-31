<?php
require_once 'config.php';
include(HEADER_TEMPLATE);
?>

<!-- stylesheets import start -->

<link rel="stylesheet" href="css/border.css">

<!-- stylesheets import start -->

<br><br>

<div class="offset-3 col-6">
    <div  id="board" class="offset-md-1 offset-2">
        <div class="pt-4 col-2 pr-1">
            <div class="pt-2">
                <img src="img/blue.png" id="img00" />
            </div>
        </div>
        <img src="img/blue.png" id="img01" />
        <img src="img/blue.png" id="img02" />
        <img src="img/blue.png" id="img03" />
        <img src="img/blue.png" id="img04" />
        <img src="img/blue.png" id="img05" />
        <img src="img/red.png" id="img10" />
        <img src="img/red.png" id="img11" />
        <img src="img/red.png" id="img12" />
        <img src="img/red.png" id="img13" />
        <img src="img/red.png" id="img14" />
        <img src="img/red.png" id="img15" />
        <br><br>
        <img src="img/blue.png" id="img20" />
        <img src="img/blue.png" id="img21" />
        <img src="img/blue.png" id="img22" />
        <img src="img/blue.png" id="img23" />
        <img src="img/blue.png" id="img24" />
        <img src="img/blue.png" id="img25" />
        <br><br>
        <img src="img/blue.png" id="img30" />
        <img src="img/blue.png" id="img31" />
        <img src="img/blue.png" id="img32" />
        <img src="img/blue.png" id="img33" />
        <img src="img/blue.png" id="img34" />
        <img src="img/blue.png" id="img35" />
        <br><br>
        <img src="img/blue.png" id="img40" />
        <img src="img/blue.png" id="img41" />
        <img src="img/blue.png" id="img42" />
        <img src="img/blue.png" id="img43" />
        <img src="img/blue.png" id="img44" />
        <img src="img/blue.png" id="img45" />
        <br><br>
        <img src="img/blue.png" id="img50" />
        <img src="img/blue.png" id="img51" />
        <img src="img/blue.png" id="img52" />
        <img src="img/blue.png" id="img53" />
        <img src="img/blue.png" id="img54" />
        <img src="img/blue.png" id="img55" />
        <br><br>
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