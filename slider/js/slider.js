jQuery(function($){

/****************DATA_SET*******************/
var SLIDER_BOX_CLASS		= ".slider_box",
	SLIDER_BOX_WIDTH  		= 1024,
	SLIDER_BOX_HEIGHT 		= 640,
	SLIDER_TYPE				= "slider",
	POINT_L_R_MARGIN		= 20,
	NUM_OF_IMG				= 3,
	IMG_SRC           		= ["img/1.jpg","img/2.jpg","img/3.jpg"],
	IMG_LINK				= ["http://www.baidu.com","http://127.0.0.1","http://www.google.com"],
	AUTO_PLAY				= true,
	SPEED					= 300,
	TIME_DELAY				= 4000,
	HOVER_STOP				= false,
	CONTENT_SHOW			= true,
	CONTENT_FONT_COLOR		= "#FFF";
/***************FUNCTION******************/
//added about
function Add_Img(slider_box_class,num,src,img_link,S_width,S_height){
	var i,addr;
	for(i=num-1;i>=0;i--)
	{
		addr = src[i];
		$('<a/>',{
			href : img_link[i],
			html : $('<img/>',{
					src   : addr,
					class : 'img_'+i,
					width : S_width,
					height: S_height
			})
		}).appendTo(slider_box_class);
	}
}

function Add_Point(num,point_l_r_margin,pointBox_height){
	var i;
	for(i=0;i<=num-1;i++)
	{
		$('<li/>',{
			class : 'slider_box_point_turnTo list_'+i,
			style : 'margin-left:'+point_l_r_margin+'px;margin-right:'+point_l_r_margin+'px;float:left;height:'+(pointBox_height*16/42)+'px;width:'+(pointBox_height*17/42)+'px;background-size:'+(pointBox_height*17/42)+'px '+(pointBox_height*32/42)+'px;'
		}).appendTo('ul.slider_box_pointBox_turnTo');
	}
}

function Add_pointBox(slider_box_class,pointBox_width,pointBox_height){
	$('<div/>',{
		class : 'slider_box_pointBox_turnTo',
		style : 'width:'+pointBox_width+'px;height:'+pointBox_height+'px;bottom:0px;',
		html  : '<div class="slider_box_left_turnTo" style="height:'+(pointBox_height/42*40)+'px;width:'+(pointBox_height/42*30)+'px;background-size:'+(pointBox_height/42*60)+'px '+(pointBox_height/42*80)+'px;"></div><ul class="slider_box_pointBox_turnTo"></ul><div class="slider_box_right_turnTo" style="height:'+(pointBox_height/42*40)+'px;width:'+(pointBox_height/42*30)+'px;background-size:'+(pointBox_height/42*60)+'px '+(pointBox_height/42*80)+'px;"></div>'
	}).appendTo(slider_box_class);
}
//
function ContentBox_Set(slider_box_class,content_show,color,S_width,S_height,pointBox_height){
	if(content_show){
		$('<div/>',{
			class : 'slider_box_content',
			style : 'color:'+color+';width:'+S_width+'px;height:'+(S_height*0.1+10)+'px;overflow:hidden;bottom:'+pointBox_height+'px;',
			html  : 'hello'
		}).appendTo(slider_box_class);
	}
}

//adjust about

function Data_Adjust(slider_box_class,S_width,S_height,num,src,img_link,point_l_r_margin,content_show,color){
	var pointBox_height = 24 + S_height/40;
	if(S_width<=300 || S_height<=200)
	{
		S_width = 1024;
		S_height = 640;
	}
	//slider box adjust
	$(slider_box_class).css({'width':S_width,'height':S_height});
	//content box adjust
	Add_Img(slider_box_class,num,src,img_link,S_width,S_height);
	Add_pointBox(slider_box_class,S_width,pointBox_height);
	Add_Point(num,point_l_r_margin,pointBox_height);
	ContentBox_Set(slider_box_class,content_show,color,S_width,S_height,pointBox_height);
}
//show about
function Point_change(i){
	$('.slider_box_point_turnTo').css({'background-position':'top'});
	$('.slider_box_point_turnTo').attr('id',"");
	$('.list_'+i).css({'background-position':'bottom'});
	$('.list_'+i).attr('id','change_point');
}

function Slider_left(slider_box_class,num,width,speed,i)
{
	$(slider_box_class).find('img').not('.img_'+i).css({'left':width+'px'});
	$(slider_box_class).find('img.img_'+i).animate({left:'-'+width+'px'},speed);
	i==num-1?i=0:i++;
	$(slider_box_class).find('img.img_'+i).animate({left:'0px'},speed);

}

function Slider_right(slider_box_class,num,width,speed,i){
	$(slider_box_class).find('img').not('.img_'+i).css({'left':'-'+width+'px'});
	$(slider_box_class).find('img.img_'+i).animate({left:width+'px'},speed);
	i==0?i=num-1:i--;
	$(slider_box_class).find('img.img_'+i).animate({left:'0px'},speed);
}

function Type_slider(slider_box_class,num,width,speed){
	var i = 0;
	$('.list_'+i).css({'background-position':'bottom'});
	$('.list_'+i).attr('id','change_point');
	var long_class;
	$(slider_box_class).find('div.slider_box_right_turnTo').live('click',function(){
		long_class =  $(slider_box_class).find('li#change_point').attr('class');
		i = long_class.substring((long_class.length)-1);
		if(!$(slider_box_class).find('img').is(':animated'))
		{
			Slider_left(slider_box_class,num,width,speed,i);
			i==num-1?i=0:i++;
			Point_change(i);
		}
	})

	$(slider_box_class).find('div.slider_box_left_turnTo').live('click',function(){
		long_class =  $(slider_box_class).find('li#change_point').attr('class');
		i = long_class.substring((long_class.length)-1);
		if(!$(slider_box_class).find('img').is(':animated'))
		{
			Slider_right(slider_box_class,num,width,speed,i);
			i==0?i=num-1:i--;
			Point_change(i);
		}
	})

	Point_click_slider(slider_box_class,width,speed);
}

function Type_fade(slider_box_class,num,speed)
{
	var i=0;
	$(slider_box_class).find('img').not('.img_'+i).hide();
	$('.list_'+i).css({'background-position':'bottom'});
	$('.list_'+i).attr('id','change_point');

	$(slider_box_class).find('div.slider_box_right_turnTo').click(function(){
		if(!$(slider_box_class).find('img').is(':animated'))
		{
			$(slider_box_class).find('img.img_'+i).fadeOut(speed,function(){
				i==num-1?i=0:i++;
				$(slider_box_class).find('img.img_'+i).fadeIn(speed);
				Point_change(i);
			});
		}
	})

	$(slider_box_class).find('div.slider_box_left_turnTo').click(function(){
		if(!$(slider_box_class).find('img').is(':animated'))
		{
			$(slider_box_class).find('img.img_'+i).fadeOut(speed,function(){
				i==0?i=num-1:i--;
				$(slider_box_class).find('img.img_'+i).fadeIn(speed);
				Point_change(i);
			});
		}
	})
	Point_click_fade(slider_box_class,num,speed);
}
//control about


function Point_click_slider(slider_box_class,width,speed){
	var i,long_class;
	$('.slider_box_point_turnTo').live('click',function(){
		var this_li = event.target;
		var P_class = $(this_li).attr('class');
		var $length = P_class.length;
		var j = P_class.substring($length-1);
		long_class =  $(slider_box_class).find('li#change_point').attr('class');
		i = long_class.substring((long_class.length)-1);
		if(j>i)
		{
			if(!$(slider_box_class).find('img').is(':animated'))
			{
				$(slider_box_class).find('img').not('.img_'+i).css({'left':width+'px'});
				$(slider_box_class).find('img.img_'+i).animate({left:'-'+width+'px'},speed);
				$(slider_box_class).find('img.img_'+j).animate({left:'0px'},speed);
				Point_change(j);
			}
		}else if(j<i)
		{
			if(!$(slider_box_class).find('img').is(':animated'))
			{
				$(slider_box_class).find('img').not('.img_'+i).css({'left':'-'+width+'px'});
				$(slider_box_class).find('img.img_'+i).animate({left:width+'px'},speed);
				$(slider_box_class).find('img.img_'+j).animate({left:'0px'},speed);
				Point_change(j);
			}
		}
	})
}

function Point_click_fade(slider_box_class,num,speed){
	var i,long_class;
	$('.slider_box_point_turnTo').live('click',function(){
		var this_li = event.target;
		var P_class = $(this_li).attr('class');
		var $length = P_class.length;
		var j = P_class.substring($length-1);
		long_class =  $(slider_box_class).find('li#change_point').attr('class');
		i = long_class.substring((long_class.length)-1);

		if(!$(slider_box_class).find('img').is(':animated'))
		{
			$(slider_box_class).find('img.img_'+i).fadeOut(speed,function(){
				$(slider_box_class).find('img.img_'+j).fadeIn(speed);
				Point_change(j);
			});
		}
	})
}

function Slider_Control(slider_box_class,num,type,width,auto,speed,circle_time,hover_stop){
	var Time_circle;
	if(type=="slider")
	Type_slider(slider_box_class,num,width,speed);
	if(type=="fade")
	Type_fade(slider_box_class,num,speed);

	if(auto)
	Time_circle = setInterval("Tri()",circle_time);

	if(hover_stop){
		$('.slider_box_pointBox_turnTo').hover(function(){
			clearInterval(Time_circle);
		},function(){
			Time_circle = setInterval("Tri()",circle_time);
		})
	}
}

Data_Adjust(SLIDER_BOX_CLASS,SLIDER_BOX_WIDTH,SLIDER_BOX_HEIGHT,NUM_OF_IMG,IMG_SRC,IMG_LINK,POINT_L_R_MARGIN,CONTENT_SHOW,CONTENT_FONT_COLOR);
Slider_Control(SLIDER_BOX_CLASS,NUM_OF_IMG,SLIDER_TYPE,SLIDER_BOX_WIDTH,AUTO_PLAY,SPEED,TIME_DELAY,HOVER_STOP);
})

function Tri(){
	$('.slider_box_right_turnTo').trigger('click');
}
