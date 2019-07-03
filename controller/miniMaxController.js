class MiniMaxController {

    constructor(stateParam) {

        this.state = stateParam;
        this.beginningTime = Date.now();
    }

    bestMove() {
        this.beginningTime = Date.now();
        let movimento = this.minimax(this.state);
        console.log("Melhor jogada: " + movimento);
        return movimento;
    }

    minimax(stateParamMinimax) {
        var bestMove = this.max(stateParamMinimax, nivelNaArvore);
        bestMove.printMatrix();
        return bestMove.getBestMove();
    }

    max(stateParamMax, nivel) {
        nivel++;
        // console.log("Nivel: "+nivel);
        var possibleWinner = stateParamMax.findWinner();

        if (possibleWinner != noWinner) {
            stateParamMax.setMiniMax(possibleWinner);
            return stateParamMax;
        }
        
        var newStates = [];
        newStates = stateParamMax.getChild(ai);

        var max = Number.MIN_SAFE_INTEGER;
        var bestOne = new StateController();

        var elapsedTime = Date.now() - this.beginningTime;
        if(elapsedTime > 600) {

            var highestDangerForHuman = -1;
            var highestDangerState;

            for(let child of newStates) {
                child.findWinner(); // only to find danger values
                console.log("Perigo: " + child.getDangerForAI());
                if(child.getDangerForHuman() > highestDangerForHuman) {
                    highestDangerForHuman = child.getDangerForHuman();
                    highestDangerState = child;
                }
            }

            bestOne = highestDangerState;
            stateParamMax.setBestMove(bestOne.getMove());
            if(stateParamMax.getDangerForHuman() >= stateParamMax.getDangerForAI()) {
                stateParamMax.setMiniMax(ai);
            } else {
                stateParamMax.setMiniMax(human);
            }
            return stateParamMax;
        }

        for (let child of newStates) {
            var possibleBestMax = new StateController();
            possibleBestMax = this.min(child, nivel);
            if (possibleBestMax.getMiniMax() > max) {
                bestOne = possibleBestMax;
                max = possibleBestMax.getMiniMax();
            }
        }

        stateParamMax.setBestMove(bestOne.getMove());
        stateParamMax.setMiniMax(max);
        return stateParamMax;
    }

    min(stateParamMin, nivel) {
        nivel++;
        //console.log("Nivel: "+nivel);
        var possibleWinner = stateParamMin.findWinner();

        if (possibleWinner != noWinner) {
            stateParamMin.setMiniMax(possibleWinner);
            return stateParamMin
        }

        var newStatesMin = [];
        newStatesMin = stateParamMin.getChild(human);

        var min = Number.MAX_SAFE_INTEGER;
        var bestOne = new StateController();

        var elapsedTime = Date.now() - this.beginningTime;
        if(elapsedTime > 600) {

            let lowestDangerForAI = 2;
            let lowestDangerState;

            for(let child of newStatesMin) {
                child.findWinner(); // only to find danger values
                if(child.getDangerForAI() < lowestDangerForAI) {
                    lowestDangerForAI = child.getDangerForAI();
                    lowestDangerState = child;
                }
            }

            bestOne = lowestDangerState;
            stateParamMin.setBestMove(bestOne.getMove());
            if(stateParamMin.getDangerForAI() <= stateParamMin.getDangerForHuman()) {
                stateParamMin.setMiniMax(ai);
            } else {
                stateParamMin.setMiniMax(human);
            }
            return stateParamMin;
        }

        for (let child of newStatesMin) {
            var possibleBestMin = new StateController();
            possibleBestMin = this.max(child, nivel);
            if (possibleBestMin.getMiniMax() < min) {
                bestOne = possibleBestMin;
                min = possibleBestMin.getMiniMax();
            }
        }

        stateParamMin.setBestMove(bestOne.getMove());
        stateParamMin.setMiniMax(min);
        return stateParamMin;

    }

}

function exit(status) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brettz9.blogspot.com)
    // +      input by: Paul
    // +   bugfixed by: Hyam Singer (http://www.impact-computing.com/)
    // +   improved by: Philip Peterson
    // +   bugfixed by: Brett Zamir (http://brettz9.blogspot.com)
    // %        note 1: Should be considered expirimental. Please comment on this function.
    // *     example 1: exit();
    // *     returns 1: null

    var i;

    if (typeof status === 'string') {
        alert(status);
    }

    window.addEventListener('error', function (e) {
        e.preventDefault();
        e.stopPropagation();
    }, false);

    var handlers = [
        'copy', 'cut', 'paste',
        'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
        'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
        'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
    ];

    function stopPropagation(e) {
        e.stopPropagation();
        // e.preventDefault(); // Stop for the form controls, etc., too?
    }

    for (i = 0; i < handlers.length; i++) {
        window.addEventListener(handlers[i], function (e) {
            stopPropagation(e);
        }, true);
    }

    if (window.stop) {
        window.stop();
    }

    throw '';
}