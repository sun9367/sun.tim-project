$(function(){
    $('#layer1').click(function(){
        $('.menu').slideDown();
        $('#layer1').css('transform', 'rotate(30deg)').css('top','0').css('left','10'+"px").css('height','0'+"px").css('opacity','0.4');
        $('#layer2').css('transform', 'rotate(-45deg)').css('top','58' +"px");
        $('#layer3').css('transform', 'rotate(45deg)');
        
    })
    $('#layer2,#layer3').click(function(){
        $('.menu').slideUp()
        $('#layer1').css('transform', 'rotate(0deg)').css('top','10' +"px").css('left','0'+"px").css('height','200'+"px").css('opacity','1');
        $('#layer2').css('transform', 'rotate(0deg)').css('top','48' +"px");
        $('#layer3').css('transform', 'rotate(0deg)');
    })
    

})