function showNumberWithAnimation(i,j,randNumber){  /*��ʾ��ֵ*/
	
	var numberCell=$('#number-cell-'+i+"-"+j);
	
	numberCell.css("background-color",getNumberBackgroundColor(randNumber))
	numberCell.css("color",getNumberColor(randNumber))
	numberCell.text(getNumberText( randNumber ))
	
	numberCell.animate({ /*�ӳ���Ϊ0������Ϊcell��С��ʱ��Ϊ50ms*/
		width:cellSideLength,
		height:cellSideLength,
		top:getPosTop(i,j),
		left:getPosLeft(i,j)	
	},50);
}

function showMoveAnimation( fromx , fromy , tox, toy ){
	 var numberCell = $('#number-cell-' + fromx + '-' + fromy );
	numberCell.animate({
		top:getPosTop(tox,toy),
		left:getPosLeft(tox,toy)
	},200)
}

function updateScore(score){
	$("#score").text(score)
}
$(function(){

	$("#bot").click(function(){
		updateScore(0)	
	})
})