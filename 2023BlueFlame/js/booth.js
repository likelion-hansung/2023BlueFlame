function first1(){
    $('#group-wrap').show();
    $('#market-wrap').hide();
    $('#loc1-wrap').show();
    $('#loc2-wrap').hide();
    $('#loc3-wrap').hide();

    $('#first-time').css("opacity", "1");
    $('#group-info').css("opacity", "1");

    $('#second-time').css("opacity", "0.5");
    $('#market-info').css("opacity", "0.5");

    $('#location1').css("background","#3A4DEE");
    $('#location2').css("background","none");
    $('#location3').css("background","none");

    $('#location1-text').css("color"," #090B26");
    $('#location2-text').css("color"," #3A4DEE");
    $('#location3-text').css("color"," #3A4DEE");

    $('#first-tap1').css("border-bottom", "1px solid #3A4DEE");
    $('#first-tap2').css("border-bottom", "1px solid #212C8A");
}

function first2(){
    $('#loc2-wrap').show();
    $('#loc1-wrap').hide();
    $('#loc3-wrap').hide();

    $('#location1').css("background","none");
    $('#location2').css("background","#3A4DEE");
    $('#location3').css("background","none");

    $('#location1-text').css("color"," #3A4DEE");
    $('#location2-text').css("color"," #090B26");
    $('#location3-text').css("color"," #3A4DEE");
}

function first3(){
    $('#loc3-wrap').show();
    $('#loc1-wrap').hide();
    $('#loc2-wrap').hide();

    $('#location1').css("background","none");
    $('#location2').css("background","none");
    $('#location3').css("background","#3A4DEE");

    $('#location1-text').css("color"," #3A4DEE");
    $('#location2-text').css("color"," #3A4DEE");
    $('#location3-text').css("color"," #090B26");
}

function second1(){
    $('#market-wrap').show();
    $('#group-wrap').hide();
    $('#loc4-wrap').show();
    $('#loc5-wrap').hide();
    $('#loc6-wrap').hide();

    $('#first-time').css("opacity", "0.5");
    $('#group-info').css("opacity", "0.5");

    $('#second-time').css("opacity", "1");
    $('#market-info').css("opacity", "1");

    $('#location4').css("background","#3A4DEE");
    $('#location5').css("background","none");
    $('#location6').css("background","none");

    $('#location4-text').css("color"," #090B26");
    $('#location5-text').css("color"," #3A4DEE");
    $('#location6-text').css("color"," #3A4DEE");

    $('#first-tap2').css("border-bottom", "1px solid #3A4DEE");
    $('#first-tap1').css("border-bottom", "1px solid #212C8A");
}

function second2(){
    $('#loc5-wrap').show();
    $('#loc4-wrap').hide();
    $('#loc6-wrap').hide();

    $('#location4').css("background","none");
    $('#location5').css("background","#3A4DEE");
    $('#location6').css("background","none");

    $('#location4-text').css("color"," #3A4DEE");
    $('#location5-text').css("color"," #090B26");
    $('#location6-text').css("color"," #3A4DEE");
}

function second3(){
    $('#loc6-wrap').show();
    $('#loc4-wrap').hide();
    $('#loc5-wrap').hide();

    $('#location4').css("background","none");
    $('#location5').css("background","none");
    $('#location6').css("background","#3A4DEE");

    $('#location4-text').css("color"," #3A4DEE");
    $('#location5-text').css("color"," #3A4DEE");
    $('#location6-text').css("color"," #090B26");
}