$(function () {
  $.ajax({
    type: 'GET',
    url: 'https://api.myjson.com/bins/16gc1g', // - full
    //url: 'https://api.myjson.com/bins/1f3pb2', // simplified
    dataType: 'json',
    success: function (data) {
      var length = Object.keys(data.databases).length;
      var th = "<th class=\"rotate\">";
      var th_end = "</th>";
      //var rowspan2 = " rowspan=\"2\">";

      $("#asd").append("<th class=\"align-middle\">" + "Verifier's Name" + th_end);
      for (var i = 0; i < length; i++) {
        $("#asd").append(th + "<div>" + "<span>" + data.databases[i].Name + "</div>" + "</span>" + th_end);
      }
      //for (var i = 0; i < length; i++) {
      //$("#asd2").append("<th><em>" + "AER" + "</em></th>");
      //$("#asd2").append("<th><em>" + "FAR" + "</em></th>");
      //$("#asd2").append("<th><em>" + "FRR" + "</em></th>");
      //}

      var res_length = Object.keys(data.results).length;
      console.log(res_length);

      var databaseNames = Object.keys(data.results[0]);
      databaseNames.splice(0, 3);

      var dynamic = "";

      for (var i = 0; i < res_length; i++) {
        dynamic += "<tr>" + "<td>" + data.results[i].verifierName + "</td>"
        for (var j = 0; j < length; j++) {
          dynamic += "<td>" + "<em>" + (data.results[i][databaseNames[j]].AER == null ? " " : (data.results[i][databaseNames[j]].AER).toFixed(2) + "%") + "</em>" + "</td>";
          //"<td>" + (data.results[i][databaseNames[j]].FAR == null ? " " : data.results[i][databaseNames[j]].FAR) + "</td>" +
          //"<td>" + (data.results[i][databaseNames[j]].FRR == null ? " " : data.results[i][databaseNames[j]].FRR) + "</td>";
        }
        dynamic += "</tr>";

      }


      $("#content").append(dynamic);

      $("body").on('mouseover', 'span:not(.tooltipstered)', function () {
        var tooltipInstance = null;
        var temp = ($(this).html());
        var sep = ": ";
        var eol = "<br>";

        var first = data.databases.find(asd => asd.Name === temp);
        //var count = Object.keys(first).length - 1;
        //console.log(count);
        var test = "";

        for (var i = 1; i <= 6; i++) {
          test += Object.keys(first)[i] + sep + first[Object.keys(first)[i]] + eol
        }

        tooltipInstance = $(this).tooltipster({
          contentAsHTML: true,
          content: test,
          delay: 0,
          theme: 'tooltipster-light'
        });

        tooltipInstance.tooltipster('open');
      })
      $("table tbody tr td:first-child").on('mouseover', function () {
        var tooltipInstance = null;
        var temp = ($(this).html());
        var sep = ": ";
        var eol = "<br>";

        var first = data.results.find(asd => asd.verifierName === temp);
        var test = "";

        for (var i = 1; i <= 2; i++) {
          test += Object.keys(first)[i] + sep + first[Object.keys(first)[i]] + eol;
        }

        tooltipInstance = $(this).tooltipster({
          contentAsHTML: true,
          content: test,
          delay: 0,
          //theme: 'tooltipster-punk',
          multiple: true
        })
        tooltipInstance.tooltipster('open');
      })

      $("body").on('mouseover', 'em:not(.tooltipstered)', function () {
        var rowData = ($(this).parent().parent().find('td:first').text());
        var currentColumnIndex = $(this).parent().index() - 1;
        var db = data.databases[currentColumnIndex];
        var final = db[Object.keys(db)[0]];
        //console.log(rowData);
        //console.log(final);

        //var columnData = $(this).parent().parent().parent().parent().parent().parent().index();

        //console.log(Object.keys(data["results"]));
        var temp = data.results.find(asd => asd.verifierName === rowData);
        var almost = temp[Object.keys(temp)[currentColumnIndex + 3]];
        console.log(Object.keys(almost)[0] + ": " + almost[Object.keys(almost)[0]]);

        /*var dictionary = [];
        for (var i = 0; i < res_length; i++) {
          for (var j = 0; j < length; j++) {
              dictionary.push((data.databases[j].Name + "    " + (data.results[i][databaseNames[j]].AER).toFixed(2) + "%"));
          }
        }*/
        //console.log(currentColumnIndex);
        //console.log(dictionary);

        var tooltipInstance = null;
        var content = null;

        //console.log(columnData);

        // get firstelement of row

        var row = data.results.find(asd => asd.verifierName === rowData);
        //var column = 
        var test = "";

        test += Object.keys(row)[0] + ": " + row[Object.keys(row)[0]] + "<br>";
        test += "databaseName: " + final + "<br>";
        for(var i = 0; i<=2; i++){
          test += Object.keys(almost)[i] + ": " + almost[Object.keys(almost)[i]].toFixed(2) + "%" + "<br>";
        }


        tooltipInstance = $(this).tooltipster({
          contentAsHTML: true,
          content: test,
          delay: 0,
          theme: 'tooltipster-punk'

        })
        tooltipInstance.tooltipster('open');

      })
    }
  });
});