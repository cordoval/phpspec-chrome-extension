document.addEventListener('DOMContentLoaded', function(){
    var storage = chrome.storage.local;
    var table = document.getElementById('table_contents');

    storage.get(null, function(keys) {

        for(var key in keys) {
            if (keys.hasOwnProperty(key)) {
                record = keys[key];

                var date = new Date(record['timestamp']);
                formatted_date = date.getFullYear() + '-';
                formatted_date += (date.getMonth() + 1) + '-';
                formatted_date += date.getDate() + ' ';
                formatted_date += date.getHours() + ':';
                formatted_date += date.getMinutes() + ':';
                formatted_date += date.getSeconds();

                var rowCount = table.rows.length;
                var row = table.insertRow(rowCount);

                var cell1 = row.insertCell(0);
                cell1.innerHTML = formatted_date;

                var cell2 = row.insertCell(1);
                cell2.innerHTML = record['url'];

                var cell3 = row.insertCell(2);
                cell3.innerHTML = record['repo_name'];

                var cell4 = row.insertCell(3);
                cell4.innerHTML = record['tab'];
            }
        }
    });
});