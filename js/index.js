/*
* @Author: 杨梦翔
* @Date:   2017-06-18 09:39:32
* @Last Modified by:   杨梦翔
* @Last Modified time: 2017-06-18 16:05:56
*/

'use strict';

$(function(){
	$('.container li').mouseover(function() {
		for(var i=0;i<$('.container li').length;i++){
			if($(this).index()>=i){
				$('.container li').eq(i).stop().animate({left:i*100},300);
			}else{
				$('.container li').eq(i).stop().animate({left:i*100+400},300);
			}
		}
	});
});