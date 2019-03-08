var coks = document.cookie.slice(3);
var rete = {
  name : coks,
}
function wire (movee){
var mov_src = [];
  for(var i =0;i<movee.length;i++){
    switch(movee[i].movname){
      case '厕所英雄':
      //  mov_src[index] = 'images/m1.jpg';
        mov_src.splice(i,0,"images/m1.jpg")
        break;
      case '超时空同居':
      //  mov_src[index] = 'images/m2.jpg';
        mov_src.splice(i,0,"images/m2.jpg")
        break;
      case '哆啦A梦：大雄的金银岛':
      //  mov_src[index] = 'images/m3.jpg';
        mov_src.splice(i,0,"images/m3.jpg")
        break;
      case '复仇者联盟3：无限战争':
      //  mov_src[index] = 'images/m4.jpg';
        mov_src.splice(i,0,"images/m4.jpg")
        break;
      case '寂静之地':
      //  mov_src[index] = 'images/m5.jpg';
        mov_src.splice(i,0,"images/m5.jpg")
        break;
      case '猛虫过江':
      //  mov_src[index] = 'images/m6.jpg';
        mov_src.splice(i,0,"images/m6.jpg")
        break;
      case '深海越狱':
      //  mov_src[index] = 'images/m7.jpg';
        mov_src.splice(i,0,"images/m7.jpg")
        break;
      case '完美陌生人':
      //  mov_src[index] = 'images/m8.jpg';
        mov_src.splice(i,0,"images/m8.jpg")
        break;
      case '幸福马上来':
      //  mov_src[index] = 'images/m9.jpg';
        mov_src.splice(i,0,"images/m9.jpg")
        break;
      case '侏罗纪世界2':
      //  mov_src[index] = 'images/m10.jpg';
        mov_src.splice(i,0,"images/m10.jpg")
        break;
    }
  }
  var mov_sit=[];
  var all = 0;
  var mony = 0;
  console.log(mov_src);
  for(let i =0 ;i <movee.length;i++)
  {
    var mov_name = movee[i].movname;
    var mov_price = movee[i].price;
    var mov_sit = movee[i].sit.replace(/_/g,'排');
    mov_sit = mov_sit.substr(1,movee[i].sit.length-1);
    var mov_sit1 = mov_sit.split(',')
    console.log(mov_sit1);
    for(let y =0 ;y<mov_sit1.length;y++)
    {
       all++;
       mony = mony + mov_price;
      $(function(){
      $("#lof").after('<div class="cart-header"><div class="cart-sec simpleCart_shelfItem"><div class="cart-item cyc"><img src="' + mov_src[i] + '"class="img-responsive" alt=""/></div><div class="cart-item-info"><h3>' + mov_name + '</h3><ul class="qty"><li>价格(￥)<p>45</p></li></ul><div class="delivery"><span>' + mov_sit1[y] + '号</span><div class="clearfix"></div></div></div><div class="clearfix"></div></div></div>');
      });
    }

  }
  document.getElementsByClassName('total1')[0].innerHTML = all;
  document.getElementsByClassName('all_price')[0].innerHTML = mony;
}
$.ajax({
          url: 'http://localhost:8080/process_order',
          type: 'POST',
          dataType :'JSON',
          data: rete,
          xhrFields: {
                    withCredentials: true
            },
          crossDomain: true,
          success:function(data){
                  console.log(data);
                  wire(data);
                },
          error:function(err){
                  console.log("xxx");
              }
      });
