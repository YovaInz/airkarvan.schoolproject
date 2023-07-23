function getData() {
        
    $.get( "http://localhost:81/api_airkarvan/public/productos", function(data){
        $("#productos").empty();
        data.forEach(element => {
            $("#productos").append('<li class="ui-li-has-thumb" onclick="getDetail('+element.id+')" ui-first-child"><a href="#producto" data-transition="flip" class="ui-btn ui-btn-icon-right ui-icon-carat-r"> <img src="'+element.img+'" class="ropa" alt="" srcset=""> <h3>'+element.nombre+'</h3><p>Precio: '+element.precio+' $MXN</p><p>Categoría: '+element.categoria+'</p><p>Talla: '+element.talla+'</p></a> </li> ')
            
        });
    });

}
function getDetail(id){
    $('#content').empty();
    $.get( "http://localhost:81/api_airkarvan/public/producto/"+id, function(data, status){
        $("#content").append('<h3 class="content">Información detallada</h3><hr><p style="text-align:center;"><img src="'+data.img+'" width="50%"></p><h4 class="content"><b>'+data.nombre+'</b></h4><br><p><b>Descripción:</b> '+data.descripcion+'. <br><br> <b>Talla:</b> '+data.talla+' <br> <b>Precio:</b> '+data.precio+' $MXN <br> <b>Categoría:</b> '+data.categoria+'</p> <div class="ui-btn ui-input-btn ui-corner-all ui-shadow"><input type="submit" data-tap-toggle="false" value="Comprar">Comprar</div>');
    }); 

}
function getUser(id){
    $('#name').empty();
    $('#email').empty();
    $('#password').empty();
    $('#data_img').empty();
    $.get( "http://localhost:81/api_airkarvan/public/user/"+id, function(data, status){
        $("#name").append('Nombre de usuario <input type="text" required name="textinput-hide" id="textinput-hide" placeholder="Nombre de usuario" value="'+data.username+'">');
        $("#email").append('Email <input type="text" required name="textinput-hide" id="textinput-hide" placeholder="Email" value="'+data.email+'">');
        $("#password").append('Contraseña <input type="password" required name="textinput-hide" id="textinput-hide" placeholder="Password" value="'+data.password+'">');
        $("#data_img").append('<img width="100%" src="'+data.img+'" alt="" srcset="">');
    });
}