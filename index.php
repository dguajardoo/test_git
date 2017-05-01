<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form onsubmit="return checkFormSearch(this);" method="post" id="formulario">
        <select name="region" class="form-control" id='select1' onchange='cargarSelect2(this.value);'>
            <option value='select'>Seleccionar</option>
        </select>
        <select name="country" class="form-control media-width" id='select2' onchange='seleccinado_select2();' disabled>
            <option value='0'>Select a city.</option> 
        </select>
        <button type="submit" id="btn_enviar" class="btn btn-success btn-search">Search</button>
    </form>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
    <script src="main.js"></script>
</body>
</html>