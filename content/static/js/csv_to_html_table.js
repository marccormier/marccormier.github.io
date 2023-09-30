CsvToHtmlTable.init({

csv_path: “static/data/table.csv”,

element: “table-container”,

datatables_options: {

paging: false

},

custom_formatting: [

[4, format_link]

]

});