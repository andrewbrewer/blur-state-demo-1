function addToList() {
    event.preventDefault();

    var $myList = $('.still-to-do');
    var $newToDo = $('#newToDo');
    var $newListItem = $('<li>' + $newToDo.val() + ' <i class="fa fa-trash delete-item"></i> <i class="fa fa-check-square-o done-item"></i></li>');
        
    $myList.append($newListItem);

    watchDeleteItems();
    markAsDone();

    $newToDo.val('');
}

function watchDeleteItems() {
    var $deleteItems = $('.delete-item');

    $deleteItems.off('click');
    $deleteItems.on('click', function() {

        var reallyDelete = confirm('Do you REALLY want to delete this item?');
        if (reallyDelete == true) {
            $(this).parent().remove();
        }
    });
}

function markAsDone() {
    var $doneItems = $('.done-item');

    $doneItems.off('click');
    $doneItems.on('click', function() {

        var reallyDone = confirm('Are you REALLY done with this item?');
        if (reallyDone == true) {
            var $doneItem = $(this).parent();
            var $doneList = $('.done');

            $(this).parent().remove();

            $doneItem.children('.done-item').remove();

            $doneList.append($doneItem);
        }
    });
}

function deleteAll() {
    var $allItems = $('.still-to-do li, .done li');
    for (var i = 0; i < $allItems.length; i++) {
        $allItems[i].remove();
    }
}

watchDeleteItems();
markAsDone();
$('.js-delete-all').on('click', deleteAll);




