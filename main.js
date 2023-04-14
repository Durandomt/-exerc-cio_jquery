$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        
        const checkList = $('#check-list').val();
        const novoItem = $('<li style = "list-style:circle";) ></li>');
        
        $('ul').click(function(){
            $('li').css('text-decoration', 'line-through')
        })
        
        $(`<li>${checkList}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#check-list').val('');

        })
})