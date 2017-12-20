document.getElementById('SiustiDuomenis').addEventListener('click', function (event) {
    event.preventDefault();

    var vardas = document.forms['myForm']['Vardas'].value;
    var pavarde = document.forms['myForm']['Pavarde'].value;
    var gimimoMetai = document.forms['myForm']['GimimoMetai'].value;
    var telNumeris = document.forms['myForm']['TelNumeris'].value;
    var elPastas = document.forms['myForm']['ElPastas'].value;
    var adresas = document.forms['myForm']['Adresas'].value;

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

var table = document.getElementById("table");
var row = table.insertRow();
var vardas = row.insertCell(0);

