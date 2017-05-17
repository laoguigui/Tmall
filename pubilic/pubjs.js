/**
 * Created by Administrator on 2017/5/17 0017.
 */
$(function(){
    //猫耳朵出现消失
    $("div.right-nav span").mouseenter(function(){
        var left = $(this).position().left;
        var top = $(this).position().top;
        console.log(top);
        var width = $(this).css("width");
        var destLeft = parseInt(left)+parseInt(width)/2;
        $("img#catear").css("left",destLeft-10);
        $("img#catear").css("top",top+157);
        $("img#catear").fadeIn(500);
    });
    $("div.right-nav span").mouseleave(function(){
        $("img#catear").hide();
    });
    //产品列表
    $("div.eachCategory").mouseover(function(){
        var cid = $(this).attr("cid");
        $("div.eachCategory[cid="+cid+"] a").css("color","#87CEFA");
        $("div.productsAsideCategorys[cid="+cid+"]").show();
    });
    $("div.eachCategory").mouseleave(function () {
        var cid = $(this).attr("cid");
        $("div.eachCategory[cid="+cid+"] a").css("color","#000");
        $("div.productsAsideCategorys[cid="+cid+"]").hide();
    });

});