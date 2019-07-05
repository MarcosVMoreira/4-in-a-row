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
            <div id="board" class="pt-5">
                <div class="row pt-3 ml-2">
                    <div class="pl-3">
                        <img id="img00" onclick="makeAMove('0')" />
                    </div>
                    <div class="pl-2">
                        <img id="img01" onclick="makeAMove('1')" />
                    </div>
                    <div class="pl-2">
                        <img id="img02" onclick="makeAMove('2')" />
                    </div>
                    <div class="pl-1">
                        <img id="img03" onclick="makeAMove('3')" />
                    </div>
                    <div class="pl-1">
                        <img id="img04" onclick="makeAMove('4')" />
                    </div>
                    <div class="pl-2">
                        <img id="img05" onclick="makeAMove('5')" />
                    </div>
                    <div class="pl-1">
                        <img id="img06" onclick="makeAMove('6')" />
                    </div>
                </div>
                <div class="row pt-3 ml-2">
                    <div class="pl-3 pt-1">
                        <img id="img10" onclick="makeAMove('0')" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img id="img11" onclick="makeAMove('1')" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img id="img12" onclick="makeAMove('2')" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img id="img13" onclick="makeAMove('3')" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img id="img14" onclick="makeAMove('4')" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img id="img15" onclick="makeAMove('5')" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img id="img16" onclick="makeAMove('6')" />
                    </div>
                </div>
                <div class="row pt-3 ml-2">
                    <div class="pl-3 pt-1">
                        <img id="img20" onclick="makeAMove('0')" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img id="img21" onclick="makeAMove('1')" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img id="img22" onclick="makeAMove('2')" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img id="img23" onclick="makeAMove('3')" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img id="img24" onclick="makeAMove('4')" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img id="img25" onclick="makeAMove('5')" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img id="img26" onclick="makeAMove('6')" />
                    </div>
                </div>
                <div class="row pt-3 ml-2">
                    <div class="pl-3 pt-1">
                        <img id="img30" onclick="makeAMove('0')" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img id="img31" onclick="makeAMove('1')" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img id="img32" onclick="makeAMove('2')" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img id="img33" onclick="makeAMove('3')" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img id="img34" onclick="makeAMove('4')" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img id="img35" onclick="makeAMove('5')" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img id="img36" onclick="makeAMove('6')" />
                    </div>
                </div>
                <div class="row pt-3 ml-2">
                    <div class="pl-3 pt-2">
                        <img id="img40" onclick="makeAMove('0')" />
                    </div>
                    <div class="pt-2 pl-2">
                        <img id="img41" onclick="makeAMove('1')" />
                    </div>
                    <div class="pt-2 pl-2">
                        <img id="img42" onclick="makeAMove('2')" />
                    </div>
                    <div class="pt-2 pl-1">
                        <img id="img43" onclick="makeAMove('3')" />
                    </div>
                    <div class="pt-2 pl-1">
                        <img id="img44" onclick="makeAMove('4')" />
                    </div>
                    <div class="pt-2 pl-2">
                        <img id="img45" onclick="makeAMove('5')" />
                    </div>
                    <div class="pt-2 pl-1">
                        <img id="img46" onclick="makeAMove('6')" />
                    </div>
                </div>
                <div class="row pt-3 ml-2">
                    <div class="pl-3 pt-1">
                        <img id="img50" onclick="makeAMove('0')" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img id="img51" onclick="makeAMove('1')" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img id="img52" onclick="makeAMove('2')" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img id="img53" onclick="makeAMove('3')" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img id="img54" onclick="makeAMove('4')" />
                    </div>
                    <div class="pt-1 pl-2">
                        <img id="img55" onclick="makeAMove('5')" />
                    </div>
                    <div class="pt-1 pl-1">
                        <img id="img56" onclick="makeAMove('6')" />
                    </div>
                </div>
                <br> <br> <br>
            </div>
        </div>
        <div class="col pt-5">
            <img src="img/human.png">
            <label for="difficultySelect" style="margin-top: 10px; color: white;">Dificuldade</label>
            <select id="difficultySelect" style="width: 100%;">
                <option value="1" selected>Fácil</option>
                <option value="4">Médio</option>
                <option value="7">Difícil</option>
            </select>
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
<script src="controller/miniMaxController.js"></script>
<script src="model/boardModel.js"></script>
<script src="main.js"></script>

<!-- scripts import end -->