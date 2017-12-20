document.getElementById('SiustiDuomenis').addEventListener('click', function (event) {
    event.preventDefault();

    var vardas = document.forms['myForm']['Vardas'].value;
    var pavarde = document.forms['myForm']['Pavarde'].value;
    var elPastas = document.forms['myForm']['ElPastas'].value;


    if(vardas.trim() == ''){
        document.forms['myForm']['Vardas'].value = '';
        document.forms['myForm']['Pavarde'].value = '';
        document.forms['myForm']['ElPastas'].value = '';
        alert('neivesti privalomi duomenys');
        return;
    }

    if(pavarde.trim() == ''){
        document.forms['myForm']['Vardas'].value = '';
        document.forms['myForm']['Pavarde'].value = '';
        document.forms['myForm']['ElPastas'].value = '';
        alert('neivesti privalomi duomenys');
        return;
    }

    if(elPastas.trim() == ''){
        document.forms['myForm']['Vardas'].value = '';
        document.forms['myForm']['Pavarde'].value = '';
        document.forms['myForm']['ElPastas'].value = '';
        alert('neivesti privalomi duomenys');
        return;
    }
});

var Contacts = [
    [document.forms['myForm']['Vardas'].value],
    [document.forms['myForm']['Pavarde'].value],
    [document.forms['myForm']['GimimoMetai'].value],
    [document.forms['myForm']['TelNumeris'].value],
    [document.forms['myForm']['ElPastas'].value],
    [document.forms['myForm']['Adresas'].value]
];

var headerContacts = ['Vardas', 'Pavarde', 'Gimimo metai', 'Telefono numeris', 'El pastas', 'Adresas'];
createTable(auto,headerAuto,);
function createTable(Contacts, headerContacts) {

}






/* senas lenteles kurimo bandymas
function myFunction( {
    var table = document.createElement("table");
    var row = table.insertRow();
    var vardas = row.insertCell(0);
    var pavarde = row.insertCell(1);
    var gimimoMetai = row.insertCell(2);
    var telNumeris = row.insertCell(3);
    var elPastas = row.insertCell(4);
    var adresas = row.insertCell(5);
    vardas.innerHTML = document.forms['myForm']['Vardas'];
    pavarde.innerHTML = document.forms['myForm']['Pavarde'];
    gimimoMetai.innerHTML = document.forms['myForm']['GimimoMetai'];
    telNumeris.innerHTML = document.forms['myForm']['TelNumeris'];
    elPastas.innerHTML = document.forms['myForm']['ElPastas'];
    adresas.innerHTML = document.forms['myForm']['Adresas'];
});
*/




