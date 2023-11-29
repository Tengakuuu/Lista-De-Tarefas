//ABAS
$(document).ready(function () {
    $('#MostrarTarefa').hide();
    $('#CriarTarefa').hide();
    $('#ShowTask').click(function(e) {
        $('#CriarTarefa').hide(200);
        $('#MostrarTarefa').show(200);
    });
    $("#Make").click(function(e) {
        $('#CriarTarefa').show(200);
        $('#MostrarTarefa').hide(200);
    });
    $('.back').click(function(){
        $('aside').hide(200);
    });
//Adicionar Tarefa
$("#btn").click(function(e) {
    const tarefa = $("#tarefa").val();
    if(tarefa == ""){
        alert('Digite uma tarefa porfavor :c');
    } else {
        $("#lista").append(`<div class="task"><span>${tarefa}</span><button class="concluir">√</button><button class="remove">X</button></div>`);
        $("#tarefa").val("");
    }
});
//Botões Das Tarefas
$("#lista").on("click", ".concluir", function() {
    $(this).closest(".task").addClass("concluido");
});
$("#lista").on("click", ".remove", function() {
    const task = $(this).closest("div");
    task.fadeOut('slow', function(){
        task.remove();
    });
});
});