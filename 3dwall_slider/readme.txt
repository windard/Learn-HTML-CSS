功能：
1、除了鼠标之外，点击放大图像后能够用键盘 左右方向键控制 ESC键退出放大图像。
2、ie6下面部分功能不完整，比方点击放大图像后背景不透明，无法加载上一页、下一页等，但基础功能可以用。
3、由于images\001\目录图像尺寸是100_100px，所以图片墙图像大点则被拉变形，需要自行调整尺寸。
4、无法播放优酷等的视频，视频播放链接可以直接填写图片，<a href=""></a>外围需要设置高宽，否则图片会非常小。
5、点击放大图像之后，会自动停止，需要点击滚动条才能重新自动播放。
6、点击放大图像之后，再点击右上角继续放大，如果再点击上一张或下一张，则图像自动缩小至放大尺寸。
7、点击放大图像之后，播放当中如果遇到flash，则自动适应尺寸，图像无变化。
8、放大播放第一轮图像会显示缩略图，连续第二轮重新播放则不显示缩略图，重新点击放大图像之后则又显示缩略图，同样第二轮重新播放则不显示。播放flash之后，则不再显示缩略图，重新打开则显示。
9、原图像尺寸不要超过屏幕，如超出原图像尺寸会撑出x,y滚动条。



使用方法：


<!-- 3dwall_001 begin -->
这之间的代码为一整个区块，高 502px 宽随区块增加而自动延伸，可以自己调整尺寸，但要加在一起等于区块尺寸，如果要扩展区块，直接连注释代码一起复制，扩展区块后图像需要新增或用原图像。原图像名称定义 images/002/001.jpg 缩略图像名称定义 images/002/001a.jpg
<!-- 3dwall_001 end -->

<a class="image-icon" rel="gallery[modal]" title="html6game" href="images/002/001.jpg">    //图片类型 class="image-icon" "video-icon" "article-icon" || 鼠标放上显示的标题 title="html6game" || 原图像链接地址 href="images/002/001.jpg"
<a class="video-icon" rel="gallery[modal]" title="html6game" href="http://www.youtube.com/watch?v=DDgoDooApwM">    //播放类型 视频播放格式 http://www.youtube.com/watch?v=DDgoDooApwM&width=960&height=500 &width=宽度 &height=高度 需要连写。
<a class="article-icon" title="前端开发网" href="#">    //阅读类型 href="#" 可以替换成 href="http://html6game.com/" 还可以加 target="_blank" 在新建窗口打开链接。
<strong>html6game 3dwall 001</strong>    //标题
</strong>html53d墙图片。。 &#187;</em>    //摘要
<img height="298" width="318" src="images/001/001.jpg" alt="请查看图片">    //缩略图高宽 图像链接地址
