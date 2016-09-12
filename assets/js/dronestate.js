/**
 * Created by benoit on 2016-09-07.
 */

var modals = [];

function fetchAPI() {
    // TODO fetch api then append TR
    var drones = [
        {
            name: "Niki",
            state: "running",
            stateDescription: "Prête pour tout",
            stateInfo: []
        },
        {
            name: "Viki",
            state: "",
            stateDescription: "Non-assemblé",
            stateInfo: ["Replugger les cables", "Réparer 2 hélices", "manque de redbull"]
        },
        {
            name: "V8",
            state: "running",
            stateDescription: "Prête pour les test",
            stateInfo: []
        },
        {
            name: "V7",
            state: "",
            stateDescription: "Dead!",
            stateInfo: ["Replugger les cables", "Réparer 2 hélices", "manque de redbull"]
        },
        {
            name: "V7 (2)",
            state: "",
            stateDescription: "Non-assemblé",
            stateInfo: ["Replugger les cables", "Réparer 2 hélices", "manque de redbull"]
        }
    ];

    var html;
    var names = [];
    var running = 0;

    html = genereateHeader();

    drones.forEach(function (drone) {
        // TODO for each drone
        var name = drone.name;
        var state = drone.state;
        var stateDescription = drone.stateDescription;
        var stateInfo = drone.stateInfo;
        names.push(name);
        if (state == 'running') {
            running += 1;
        }

        // build the tr
        html += generateTR(name, state, stateDescription, stateInfo);
    })

    // happend to tbody
    document.getElementById('drone-state').innerHTML = html;

    // add the modal
    names.forEach(function (name) {
        modals.push(document.getElementById(name + '_modal'));
    });

    updateNumberOfRunningDrones(running);
}

// TODO integreate dashboard.js to this
fetchAPI();

function genereateHeader() {
    var header =
        '<tr>' +
        '<th class="text-center">Nom</th>' +
        '<th class="text-center">État</th>' +
        '</tr>';

    return header;
}

function updateNumberOfRunningDrones(nb) {
    var tDrones = 'drones';
    if (nb < 2) {
        tDrones = 'drone'
    }
    document.getElementById('running-drones').innerHTML = nb + ' ' + tDrones + ' prêt à voler';
}

function generateTR(name, state, stateDescription, stateInfo) {
    var id = name + '_btn';
    var css = '';

    if (state == 'running') {
        css = 'navbar-ct-green';
    } else {
        css = 'navbar-ct-red mPointer';
    }

    var tr =
        '<tr id="' + id + '" class="' + css + '" onclick="openModal(\'' + name + '\')">' +
        '<td class="text-center ' + css + '">' +
        name +
        '</td>' +
        '<td class="text-center ' + css + '">' +
        stateDescription;

    if (state != 'running') {
        tr += generateModal(name, stateInfo);
    }

    tr +=
        '</td>' +
        '</tr>';
    return tr;
}

function generateModal(name, stateInfo) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    var today = dd + '-' + mm + '-' + yyyy;

    var modal =
        '<!-- Taken from w3schools -->' +
        '<!-- Modal Begin-->' +
        '<div id="' + name + '_modal" class="modal">' +
        '<!-- Modal content -->' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<span class="close-modal" onclick="closeModal(\'' + name + '\')">×</span>' +
        '<h2>' + name + '</h2>' +
        '</div>' +
        '<div class="modal-body">';

    //TODO for each stateInfo
    stateInfo.forEach(function (info) {
        modal += '<p class="drone-state-info">' + info + '</p>';
    });

    modal +=
        '</div>' +
        '<div class="modal-footer">' +
        '<h3>Dernière modification : ' + today + '</h3>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<!-- Modal end -->';

    return modal;
}

var show = true;

function openModal(name) {
    var modal = document.getElementById(name + '_modal');
    if (show)
        modal.style.display = "block";
    show = true;
}

function closeModal(name) {
    var modal = document.getElementById(name + '_modal');
    modal.style.display = "none";
    show = false;
}

// When the user clicks anywhere outside of the modal, close it
// TODO make it work
window.onclick = function (event) {
    // check if targe is in the list of modal

    modals.forEach(function (modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

/*
 <div class="card">
 <div class="header">
 <h4 class="title">État des drones</h4>
 TODO number of drone ready to fly
 <p class="category">3 drones prêt à voler</p>
 </div>
 <div class="content">
 <div class="table-full-width">
 <table class="table dropdown-droneinfo">
 <tbody>
 <tr>
 <th class="text-center ">Nom</th>
 <th class="text-center">État</th>
 </tr>
 TODO Display TD's and if state!=running display modal and link modal to TR
 <tr>
 <td class="text-center navbar-ct-green">Drone 1</td>
 <td class="text-center navbar-ct-green">Prêt à voler</td>
 </tr>
 <tr>
 <td class="text-center navbar-ct-green">Drone 2</td>
 <td class="text-center navbar-ct-green">Prêt à voler</td>
 </tr>
 <tr id="myBtn">
 <td class="text-center navbar-ct-red">Drone 3</td>
 <td class="text-center navbar-ct-red">Réparation
 <!-- Taken from w3schools -->

 <!-- The Modal -->
 <div id="myModal" class="modal">

 <!-- Modal content -->
 <div class="modal-content">
 <div class="modal-header">
 <span class="close-modal">×</span>
 <h2>Drone 3</h2>
 </div>
 <div class="modal-body">
 <p class="drone-state-info">Élice 3 brisée</p>
 <p class="drone-state-info">Batterie perdue</p>
 </div>
 <div class="modal-footer">
 <h3>Dernière modification : 31-05-2016</h3>
 </div>
 </div>
 </div>
 <!-- Modal end -->
 </td>
 </tr>
 <tr>
 <td class="text-center navbar-ct-green">Drone 4</td>
 <td class="text-center navbar-ct-green">Prêt à voler</td>
 </tr>
 <tr>
 <td class="text-center navbar-ct-red">Drone 5</td>
 <td class="text-center navbar-ct-red">Mort</td>
 </tr>
 </tbody>
 </table>
 </div>

 </div>
 </div>
 */