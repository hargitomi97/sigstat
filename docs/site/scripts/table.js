$(function () {
  $.ajax({
    type: 'GET',
    //url: 'https://api.myjson.com/bins/m4k2e', // - full
    url: 'https://api.myjson.com/bins/tgm8m', // test
    //url: 'https://api.myjson.com/bins/1f3pb2', // simplified
    //url: 'https://raw.githubusercontent.com/hargitomi97/sigstat/master/docs/site/scripts/FullSigStat.json', // from GH
    dataType: 'json',
    success: function (data) {
      var length = Object.keys(data.databases).length;
      var th = "<th class=\"rotate\">";
      var th_end = "</th>";

      $("#asd").append("<th class=\"align-middle\">" + "Verifier's" + "<br>"+ "Name" + th_end);
      $("#asd").append("<th class=\"align-middle\">" + "Average" + th_end);
      $("#asd").append("<th class=\"align-middle\">" + "Average" + "<br>" + "Core" + th_end);
      for (var i = 0; i < length; i++) {
        $("#asd").append(th + "<div>" + "<span>" + data.databases[i].Name + "</div>" + "</span>" + th_end);
      }
      //for (var i = 0; i < length; i++) {
      //$("#asd2").append("<th><em>" + "AER" + "</em></th>");
      //$("#asd2").append("<th><em>" + "FAR" + "</em></th>");
      //$("#asd2").append("<th><em>" + "FRR" + "</em></th>");
      //}

      var res_length = Object.keys(data.results).length;

      var databaseNames = Object.keys(data.results[0]);
      databaseNames.splice(0, 3);

      var dynamic = "";

      for (var i = 0; i < res_length; i++) {
        dynamic += "<tr>" + "<td>" + data.results[i].verifierName + "</td>";
        dynamic += "<td>" + "<p class=\"summary\">" + data.results[i]["Average"].AER + "%"+ "</p>" + "</td>";
        dynamic += "<td>" + "<p class=\"summary\">" + data.results[i]["Average Core"].AER + "%"+ "</p>" + "</td>";
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
        var test = "";

        for (var i = 1; i <= 5; i++) {
          test += Object.keys(first)[i] + sep + first[Object.keys(first)[i]] + eol
        }
        test += Object.keys(first)[6] + sep + "<a href=" + first[Object.keys(first)[i]] + " target=\"_blank\">" + first[Object.keys(first)[i]] + "</a>";

        //test = "<a href=http://index.hu target=\"blank\">http://index.hu </a>";

        tooltipInstance = $(this).tooltipster({
          contentAsHTML: true,
          content: test,
          delay: 100,
          theme: 'tooltipster-light',
          interactive: true
        })

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

      $("body").on('mouseover', 'p:not(.tooltipstered)', function () {
        var rowData = ($(this).parent().parent().find('td:first').text());
        var currentColumnIndex = $(this).parent().index();
        console.log(currentColumnIndex);
        //var db = data.databases[currentColumnIndex];
        //var final = db[Object.keys(db)[0]];
        //console.log(rowData);
        var temp = data.results.find(asd => asd.verifierName === rowData);
        var almost = "";
        if(currentColumnIndex === 1){
          almost = temp[Object.keys(temp)[Object.keys(temp).length-2]];
        }
        if(currentColumnIndex === 2){
          almost = temp[Object.keys(temp)[Object.keys(temp).length-1]];
        }
        //console.log(almost);


        //var first = data.databases.find(asd => asd.Name === temp);
        //var count = Object.keys(first).length - 1;
        var test = "";

        for (var i = 0; i <= 2; i++) {
          test += Object.keys(almost)[i] + ": " + almost[Object.keys(almost)[i]].toFixed(2) + "%" + "<br>";
        }
        console.log(test);

        //test = "<a href=http://index.hu target=\"blank\">http://index.hu </a>";

        tooltipInstance = $(this).tooltipster({
          contentAsHTML: true,
          content: test,
          delay: 0,
          theme: 'tooltipster-light',
        })

        tooltipInstance.tooltipster('open');
      })

      $("body").on('mouseover', 'em:not(.tooltipstered)', function () {
        var rowData = ($(this).parent().parent().find('td:first').text());
        var currentColumnIndex = $(this).parent().index() - 3;
        var db = data.databases[currentColumnIndex];
        var final = db[Object.keys(db)[0]];

        var temp = data.results.find(asd => asd.verifierName === rowData);
        var almost = temp[Object.keys(temp)[currentColumnIndex + 3]];
        //console.log(Object.keys(almost)[0] + ": " + almost[Object.keys(almost)[0]]);


        var tooltipInstance = null;
        var content = null;


        var row = data.results.find(asd => asd.verifierName === rowData);
        var test = "";

        test += Object.keys(row)[0] + ": " + row[Object.keys(row)[0]] + "<br>";
        test += "databaseName: " + final + "<br>";
        for (var i = 0; i <= 2; i++) {
          test += Object.keys(almost)[i] + ": " + almost[Object.keys(almost)[i]].toFixed(2) + "%" + "<br>";
        }
        //console.log(almost[Object.keys(almost)[1]].toFixed(2));


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