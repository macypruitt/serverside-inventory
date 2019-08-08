$(document).ready(init);

function init() {
    $('#js-form-add-inventory').on('submit', submitInventory);

    getInventory();
}

function submitInventory(event) {
    event.preventDefault();

    const dataForServer = {
        name: $('#js-form-name').val(),
        description: $('#js-form-description').val(),
    };

    $.ajax({
        type: 'POST',
        url: '/inventory',
        data: dataForServer,
    }).then(function(response) {
        getInventory();
    });
}

function getInventory() {
    $.ajax({
        type: 'GET',
        url: '/inventory',
    }).then(function(response) {
       render(response);
    });
}

function render(response) {
    const listOfInventory = response;
    $('js-inventoryTableBody').empty();
    for (let inventory of listOfInventory) {
        $('#js-inventoryTableBody').append(`
         <tr>
            <td>${inventory.name}</td>
            <td>${inventory.description}</td>
         </tr>`);
    }
}