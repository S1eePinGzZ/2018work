var cook = document.cookie.slice(3);
var out = document.getElementById('out');
var mypro = document.getElementById('mypro');
mypro.onclick = function(){
    return false;
  }

if(cook){
var use = document.getElementById('us');
use.innerHTML = cook;
out.style.display = 'inline'
use.onclick = function(){
  return false;
  }
  mypro.onclick = function(){
  }
}

else{
  mypro.onclick = function(){
  alert('请登录');
  return false;
  }
}
out.onclick = function(){
  use.innerHTML = '登录';
  use.onclick = function(){

  };
  out.style.display = 'none';
  $.ajax({
            url: 'http://localhost:8080/process_clear',
            type: 'POST',
            dataType :'JSON',
            data:'',
            xhrFields: {
                      withCredentials: true
              },
            crossDomain: true,
            success:function(data){
                    console.log(data);
                    if(data.status == 1){
                           window.location.href="index.html";
                        }
                    if(data.status == 2){
                      alert("密码错误");
                    }
                  },
            error:function(err){
                    console.log("xxx");
                }
        });
}
