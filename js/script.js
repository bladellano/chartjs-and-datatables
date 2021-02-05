$(function () {
    /**
     * Exibe o chart inicialmente.
     */
    showChart();

    /**
     * Trata a troca dos selects no chart.
     */
    $('.change_select').change(function (e) {

        var type = $('#select_type_chart').val();
        var period = $('#select_period_chart').val();

        if (type == 'table') {
            
            removeElements();

            var data = queryDataTable().raw;

            var html = "";

            data.forEach((e) => {
                html += `<tr><td>${e.date}</td>`;
                html += `<td>${e.value}</td></tr>\n`;
            });

            $('#table_content').load("tabela.php");

            setTimeout(() => {

                $('.table-chart tbody').html(html);

                $('.table-chart').DataTable(configDataTable);

            }, 25);

            return false;
        }

        showChart(type, period);
    });

});//End

/* Objeto que guarda os resultados da consulta na tabela */
var oData = new Object();

/**
 * Ajax que retorna consulta da tabela
 */
const queryDataTable = (period = "Últimos 12 meses") => {

    var query = "";

    $.ajax({
        type: "post",
        async: false,
        url: "consulta.php",
        data: { period },
        dataType: "json",
        success: function (json) {
            query = json;
        }
    });

    var dates = [];
    var values = [];

    query.data.forEach(function (e) {
        dates.push(e.date);
        values.push(e.value);
    });

    var colors = [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(255, 206, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)',
        'rgba(153, 102, 255, 0.4)',
        'rgba(255, 159, 64, 0.4)'
    ];

    var borders = [
        'rgba(100, 100, 100, 0.4)',
    ];

    var oDataColors = [];
    var oDataBorders = [];

    for (var i = 0; i <= values.length; i++) {
        var aleatorio = Math.floor(Math.random() * borders.length);
        oDataBorders.push(borders[aleatorio]);
    }

    for (var i = 0; i <= values.length; i++) {
        var aleatorio = Math.floor(Math.random() * colors.length);
        oDataColors.push(colors[aleatorio]);
    }
    oData.raw = query.data;
    oData.label = query.label;
    oData.dates = dates;
    oData.values = values;
    oData.backgroundColor = oDataColors;
    oData.borderColor = oDataBorders;

    return oData;
};

/**
 * Remove elementos (wrap´s content)
 */
function removeElements() {
    $('#chart_content, #table_content').remove();
    $("body").append("<div id='table_content'></div>");
    $("body").append("<canvas id='chart_content'></canvas>");
}

/**
 * Exibe Chart
 */
function showChart(type = 'bar', period = "") {

    removeElements();

    queryDataTable(period);

    var ctx = document.getElementById('chart_content');

    var myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: oData.dates,
            datasets: [{
                label: [oData.label],
                data: oData.values,
                backgroundColor: oData.backgroundColor,
                borderColor: oData.borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

const configDataTable = {

    "order": [[1, "desc"]],
    "pageLength": 6,
    responsive: true,
    searching: false,
    info: false,
    bDestroy: true,
    "language": {
        "decimal": ",",
        "thousands": ".",
        "lengthMenu": "Mostrar _MENU_ resultados",
        "zeroRecords": "Nenhum resultado encontrado.",
        "info": "Página _PAGE_ de _PAGES_",
        "infoEmpty": "Não existem registros.",
        "infoFiltered": "",
        "search": "<i class='fa fa-search'></i>",
        "paginate": {
            "previous": "Anterior",
            "next": "Próximo"
        }
    },
    "columnDefs": [{
        "targets": 'no-sort',
        "orderable": false
    }],
    "bLengthChange": false 
}