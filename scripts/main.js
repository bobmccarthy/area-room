'use strict';
var $ = require ('jquery');
window.$ = require('jquery');
window.jQuery = $;

$(document).on('ready', function(){
	var length = 0;
	var width = 0;
	var units;
	var otherUnits;
	var area = 0;
	$('.select').on('click', function(){
		$('.length').val('');
		$('.lengthTotal').html('Length:');
		$('.width').val('');
		$('.widthTotal').html('Width:');
		$('.area').html('Area:');
		$('.otherArea').html('');
	})
	$('.length').keyup(function(){
		length = $('.length').val();
		if ($('.select').val()=='US'){
			units = 'ft';
		}
		if ($('.select').val()=='Metric'){
			units = 'm';
		}
		$('.lengthTotal').html('Length: '+length+' '+units);
		area=length*width;
		$('.area').html('Area: '+area+' '+units+'&#178');
		if ($('.select').val()=='US'){
			otherUnits = 'm&#178';
			$('.otherArea').html('Area in Meters: '+(area/10.764).toFixed(1)+' '+otherUnits);
		}
		if ($('.select').val()=='Metric'){
			otherUnits = 'ft&#178';
			$('.otherArea').html('Area in Feet: '+(area*10.764).toFixed(1)+' '+otherUnits);
		}
	})
	$('.width').keyup(function(){
		width = $('.width').val();
		if ($('.select').val()=='US'){
			units = 'ft';
		}
		if ($('.select').val()=='Metric'){
			units = 'm';
		}
		$('.widthTotal').html('Width: '+width+' '+units);
		area=length*width;
		$('.area').html('Area: '+area+' '+units+'&#178');
		if ($('.select').val()=='US'){
			otherUnits = 'm&#178';
			$('.otherArea').html('Area in Meters: '+(area/10.764).toFixed(1)+' '+otherUnits);
		}
		if ($('.select').val()=='Metric'){
			otherUnits = 'ft&#178';
			$('.otherArea').html('Area in Feet: '+(area*10.764).toFixed(1)+' '+otherUnits);
		}
	})
	
	
	
	
	


})

