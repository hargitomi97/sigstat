$(function () {


    var url = "Summary_short.xlsx";
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    oReq.onload = function (e) {
        var arraybuffer = oReq.response;

        /* convert data to binary string */
        var data = new Uint8Array(arraybuffer);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");

        /* Call XLSX */
        var workbook = XLSX.read(bstr, { type: "binary" });

        /* DO SOMETHING WITH workbook HERE */
        var first_sheet_name = workbook.SheetNames[0];
        /* Get worksheet */
        var worksheet = workbook.Sheets[first_sheet_name];
        var data = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        console.log(data);



        var th = "<th class=\"rotate\">";
        var th_end = "</th>";
        var a = new Array();
        for (var k in data) {
            a.push((data[k].Database));
        }
        var uniqueArray = new Array();
        uniqueArray = a.filter(onlyUnique);
        //console.log(uniqueArray.toString());
        var uniqueDatabasesCount = uniqueArray.length;
        //console.log(uniqueDatabasesCount);


        $("#header").append("<th class=\"align-middle\">" + "Verifier's" + "<br>" + "Name" + th_end);
        $("#header").append("<th class=\"align-middle\">" + "Average" + th_end);

        for (var i = 0; i < uniqueDatabasesCount; i++) {
            $("#header").append(th + "<div>" + "<span>" + uniqueArray[i] + "</div>" + "</span>" + th_end);
        }

        var Translation;
        var Scaling;
        var ResamplingTypeFilter;
        var Features;

        //1. sor

        Translation = "CogToOriginXY";
        Scaling = "None";
        ResamplingTypeFilter = "None";
        Features = "XY";

        var x = data.filter(function (el) {
            return el.Translation == Translation &&
                el.Scaling == Scaling &&
                el.ResamplingType_Filter == ResamplingTypeFilter &&
                el.Features == Features;
        });

        //console.log(x);
        var dynamic;
        var average = 0;

        for (var i = 0; i < uniqueDatabasesCount; i++) {
            average += x[i].AER * 100;
        }
        //console.log(average);
        average = (average / uniqueDatabasesCount).toFixed(2);

        dynamic += "<tr>" + "<td class=\"verName\">" + Translation.substr(0, Translation.length - 2) + ", " + Features + "</td>";
        dynamic += "<td>" + "<p class=\"summary\">" + average + "%" + "</p>" + "</td>";
        for (var i = 0; i < uniqueDatabasesCount; i++) {
            dynamic += "<td>" + "<p>" + (x[i].AER * 100).toFixed(2) + "%" + "</p>" + "</td>";
        }


        //2. sor

        Translation = "None";
        var translationAppear;
        if(Translation = "None"){
            translationAppear = "Normalization";
        }
        Scaling = "X01Y01";
        ResamplingTypeFilter = "None";
        Features = "XY";

        x = data.filter(function (el) {
            return el.Translation == Translation &&
                el.Scaling == Scaling &&
                el.ResamplingType_Filter == ResamplingTypeFilter &&
                el.Features == Features;
        });

        average = 0;
        for (var i = 0; i < uniqueDatabasesCount; i++) {
            average += x[i].AER * 100;
        }
        average = (average / uniqueDatabasesCount).toFixed(2);

        dynamic += "<tr>" + "<td class=\"verName\">" + translationAppear + ", " + Features + "</td>";
        dynamic += "<td>" + "<p class=\"summary\">" + average + "%" + "</p>" + "</td>";
        for (var i = 0; i < uniqueDatabasesCount; i++) {
            dynamic += "<td>" + "<p>" + (x[i].AER * 100).toFixed(2) + "%" + "</p>" + "</td>";
        }

        // 3. sor

        Translation = "CogToOriginXY";
        Scaling = "None";
        ResamplingTypeFilter = "None";
        Features = "XYP";

        x = data.filter(function (el) {
            return el.Translation == Translation &&
                el.Scaling == Scaling &&
                el.ResamplingType_Filter == ResamplingTypeFilter &&
                el.Features == Features;
        });

        console.log(x);

        average = 0;
        for (var i = 0; i < uniqueDatabasesCount; i++) {
            average += x[i].AER * 100;
        }
        average = (average / uniqueDatabasesCount).toFixed(2);

        dynamic += "<tr>" + "<td class=\"verName\">" + Translation.substr(0, Translation.length - 2) + ", " + Features + "</td>";
        dynamic += "<td>" + "<p class=\"summary\">" + average + "%" + "</p>" + "</td>";
        for (var i = 0; i < uniqueDatabasesCount; i++) {
            dynamic += "<td>" + "<p>" + (x[i].AER * 100).toFixed(2) + "%" + "</p>" + "</td>";
        }

        // 4. sor

        Translation = "None";
        Scaling = "X01Y01";
        ResamplingTypeFilter = "None";
        Features = "XYP";

        x = data.filter(function (el) {
            return el.Translation == Translation &&
                el.Scaling == Scaling &&
                el.ResamplingType_Filter == ResamplingTypeFilter &&
                el.Features == Features;
        });

        console.log(x);

        average = 0;
        for (var i = 0; i < uniqueDatabasesCount; i++) {
            average += x[i].AER * 100;
        }
        average = (average / uniqueDatabasesCount).toFixed(2);

        dynamic += "<tr>" + "<td class=\"verName\">" + translationAppear + ", " + Features + "</td>";
        dynamic += "<td>" + "<p class=\"summary\">" + average + "%" + "</p>" + "</td>";
        for (var i = 0; i < uniqueDatabasesCount; i++) {
            dynamic += "<td>" + "<p>" + (x[i].AER * 100).toFixed(2) + "%" + "</p>" + "</td>";
        }

        $("#content").append(dynamic);

    }

    oReq.send();

});

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}