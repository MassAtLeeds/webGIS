/*
 * Javascript examples - times tables
 */

function load() {
 
 
   /*
    * Create a text object containing an HTML table
    *
    * We will repeatedly concatenate strings to build up the table...
    */
    
    var myTable = "<table>";
    myTable = myTable + "<tr><th>X</th>";
    
    // The header row
    for (x=1;x<=12;x++) {
        myTable = myTable + "<th>" + x + "</th>";
    }
    myTable = myTable + "</tr>";
    
    // The main part of the table
    for (y=1;y<=12;y++) {
        myTable = myTable + "<tr>"; // Start each new row
        myTable = myTable + "<th>" + y + "</th>"; // Write the row index

        // Write the table cells
        for (x=1;x<=12;x++) {
            myTable = myTable + "<td>" + (x*y) + "</td>";
        }

        myTable = myTable + "</tr>"; // Write the row ending tag
    }
    
    myTable = myTable + "</table>"; // The table closing tag

    // Get a reference to the location where we want to add out new node
    document.getElementById('ttable').innerHTML = myTable;
    
}
