var htm = document.getElementById('move').innerText;

var date = {
  name : htm
}
function fun(se){
  var se1= se;
  var set = [  //座位图
    'aaaaaaaaaa',
    'aaaaaaaaaa',
    '__________',
    'aaaaaaaa__',
    'aaaaaaaaaa',
    'aaaaaaaaaa',
    'aaaaaaaaaa',
    'aaaaaaaaaa',
    'aaaaaaaaaa',
    'aa__aa__aa'
  ];
  var thisorder;
  var price = 80; //票价
  $(document).ready(function() {
  var $cart = $('#selected-seats'), //座位区
  $counter = $('#counter'), //票数
  $total = $('#total'); //总计金额

  var sc = $('#seat-map').seatCharts({
    map:set,
    naming : {
      top : false,
      getLabel : function (character, row, column) {
        return column;
      }
    },
    legend : { //定义图例
      node : $('#legend'),
      items : [
        [ 'a', 'available',   '可选座' ],
        [ 'a', 'unavailable', '已售出']
      ]
    },
    click: function () { //点击事件
      if (this.status() == 'available') { //可选座
        $('<li>'+(this.settings.row+1)+'排'+this.settings.label+'座</li>')
          .attr('id', 'cart-item-'+this.settings.id)
          .data('seatId', this.settings.id)
          .appendTo($cart);

        $counter.text(sc.find('selected').length+1);
        $total.text(recalculateTotal(sc)+price);

        return 'selected';
      } else if (this.status() == 'selected') { //已选中
          //更新数量
          $counter.text(sc.find('selected').length-1);
          //更新总计
          $total.text(recalculateTotal(sc)-price);

          //删除已预订座位
          $('#cart-item-'+this.settings.id).remove();
          //可选座
          return 'available';
      } else if (this.status() == 'unavailable') { //已售出
        return 'unavailable';
      } else {
        return this.style();
      }
    }
  });
  //已售出的座位
  var x = se.split(",");
  console.log(x);
  sc.get(x).status('unavailable');

  });
  //计算总金额
  function recalculateTotal(sc) {
  var total = 0;
  sc.find('selected').each(function () {
    total += price;
  });

  var sub = document.getElementsByClassName('checkout-button')[0];
  sub.onclick = function(){
    thisorder = '';
    var co = document.cookie;
    if(!co){
      alert("请登录");
    }
    else
    {
    se = se1;
    var buy =  $(".selected");
    for(let i =0;i<buy.length;i++)
    {
      console.log(buy[i].id);
      thisorder = thisorder + ',' +buy[i].id;
      se = se + ',' + buy[i].id;
      console.log(se);
    }
    var v = se.split(",");
    console.log("thisorder:" + thisorder );
    sc.get(v).status('unavailable');
    var co = document.cookie.slice(3);
    var sett = {
      sit : se,
      name : htm,
      user : co,
      price : 45,
      thisord : thisorder
    }
    console.log(sett);

    $.ajax({
              url: 'http://localhost:8080/process_have',
              type: 'POST',
              dataType :'JSON',
              data: sett,
              xhrFields: {
                        withCredentials: true
                },
              crossDomain: true,
              success:function(){

                     location.reload();
                    },
              error:function(err){
                      console.log("xxx");
                  }
          });
  }
}
  return total;
  }

}
console.log(date);
$.ajax({
          url: 'http://localhost:8080/process_find',
          type: 'POST',
          dataType :'JSON',
          data: date,
          xhrFields: {
                    withCredentials: true
            },
          crossDomain: true,
          success:function(data){
                  var siit = data.siting;
                  fun(siit);
                },
          error:function(err){
                  console.log("xxx");
              }
      });
