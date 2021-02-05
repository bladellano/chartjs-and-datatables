<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" rel="stylesheet" >
    <link href="https://cdn.datatables.net/1.10.23/css/jquery.dataTables.min.css" rel="stylesheet" >
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>ChartJS</title>
</head>

<body>

    <div class="container">

        <h4>Chart Relatório </h4>

        <h5><a href="index.php">Refresh</a></h5>

        <div class="row">
            <div class="col-sm-6">
                <select name="select_type_chart" id="select_type_chart" class="form-control change_select">
                    <option value="line">LINE</option>
                    <option value="bar" selected>BAR</option>
                    <option value="pie">PIE</option>
                    <option value="table">TABLE</option>
                </select>
            </div>
            <div class="col-sm-6">
                <select name="select_period_chart" id="select_period_chart" class="form-control change_select">
                    <option value="">SELECIONE</option>
                    <option value="2021-02">02/2021</option>
                    <option value="2021-01">01/2021</option>
                    <option value="2020-12">12/2020</option>
                    <option value="2020-11">11/2020</option>
                    <option value="2020-10">10/2020</option>
                </select>
            </div>
        </div>

        <div class="content">
            <canvas id="chart_content"></canvas>
            <div id="table_content"></div>
        </div>

    </div> <!--container-->

    <script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
    <script src="js/jquery.dataTables.min.js"></script>
    <script src="js/Chart.min.js"></script>
    <script src="js/script.js"></script>

</body>

</html>