function checkFormSearch (form) {
    var text = form.q.value;
    text = text.trim();
    if(text == "") {
        swal("Oops...", "Search cannot be blank", "error");
        return false;
    }
    
}

function cargarSelect2(valor) {
    if(valor==0) {
        // desactivamos el segundo select 
        html = "";
        html += "<option value='0'>Select a city.</option>";
        $("#select2").html(html);
        document.getElementById("select2").disabled=true;
    } else {
        document.getElementById("select2").disabled=false;
    } 
}

function seleccinado_select2(value) {
    $("#select1 option:selected").each(function () {
        country_code = $(this).val();
    });
    $("#select2 option:selected").each(function () {
        city_name = $(this).val();
        if (country_code != 0){
            var str = city_name;
            var city_name = str.replace(/\s/g, "_");
            $(location).attr('href', 'http://oclockers.com/'+country_code+'/'+decodeURIComponent(city_name)+'/movies'); 
        }  
    });
}


$(document).ready(function(){


    $("#btn_enviar").click(function(event){

        event.preventDefault();

        var url = "comuna.php"; // El script a dónde se realizará la petición.
            $.ajax({
                type: "GET",
                url: url,
                data: $("#formulario").serialize(), // Adjuntar los campos del formulario enviado.
                success: function(data)
                {
                    alert("alert");
                    //$("#respuesta").html(data); // Mostrar la respuestas del script PHP.
                }
                });
    });
    
    $.ajax({
        type: 'GET',
        url: 'provincias.php',
        //data:
        success: function(data){
            var json = jQuery.parseJSON(data);
            //console.log(json);
            $.each(json, function(i, item){
                console.log(json[i].provincia_nombre);
                var html = "<option value=':provincia_id:'>:provincia_nombre:</option>";
                var template = html.replace(":provincia_id:", json[i].provincia_id)
                                    .replace(":provincia_nombre:", json[i].provincia_nombre);
                $("#select1").append(template);
            });                    
        },
        error: function(data) {
            console.log(data);
        }
    });                    
    
    $("#select1").change(function () {
        $("#select1 option:selected").each(function () {
            $.ajax({
                type: 'GET',
                url: 'comuna.php',
                //data:
                success: function(data){
                    var json = jQuery.parseJSON(data);
                    //console.log(json);
                    $("#select2").empty();
                    $.each(json, function(i, item){
                        //console.log(json[i].comuna_id);
                        var html = "<option value=':comuna_id:'>:comuna_nombre:</option>";
                        var template = html.replace(":comuna_id:", json[i].comuna_id).replace(":comuna_nombre:", json[i].comuna_nombre);
                        $("#select2").append(template);
                    });                    
                },
                error: function(data) {
                    console.log(data);
                }
            });                    
        });
    });
});