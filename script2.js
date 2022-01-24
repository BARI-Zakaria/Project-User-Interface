    // RECUPERATION DES DONNEES JSON
    let productData = ""
$(document).ready(function(){
      $.getJSON("productswomen.json", function(data){
          
          $.each(data, function(key, value){
            productData += '<tr>';
            productData += '<td>'+ value.ID + '</td>';
            productData += '<td>'+ value.Name + '</td>';
            productData += '<td>'+ value.Catégorie + '</td>';
            productData += '<td>'+ value.Disponibilité + '</td>';
            productData += '<td>'+value.Fournisseur.Ads + " " + value.Fournisseur.RS+'</td>',
            productData += '<td>'+ value.Prix + '</td>';
            productData += "</tr>";
          })
          $('#sortWomen').append(productData);
      });
    });
        // METHOD RECHERCHE

    $(document).ready(function(){
      $("#srh").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    }); 


        // SORT METHOD

    function sortTable(column, type) {

      //Get and set order
      //Use -data to store wheater it will be sorted ascending or descending
      var order = $('#sortWomen thead tr>th:eq(' + column + ')').data('order');
      order = order === 'ASC' ? 'DESC' : 'ASC';
      $('#sortWomen thead tr>th:eq(' + column + ')').data('order', order);
  
  
      $('#myTable tr').sort(function(a, b) {
  
        a = $(a).find('td:eq(' + column + ')').text();
        b = $(b).find('td:eq(' + column + ')').text();
        switch (type) {
          case 'text':
            return order === 'ASC' ? a.localeCompare(b) : b.localeCompare(a);
            break;
          case 'number':
            return order === 'ASC' ? a - b : b - a;
            break;
  
        }
  
      }).appendTo('#sortWomen tbody');
    }
    $('#id').click(function() {
      sortTable(0, 'text');
    });
    $('#DES').click(function() {
      sortTable(1, 'text');
    });
    $('#PRX').click(function() {
      sortTable(2, 'text');
    });
    $('#CAT').click(function() {
      sortTable(3, 'text');
    });
    $('#DISP').click(function() {
      sortTable(4, 'text');
    });
    $('#FOUR').click(function() {
      sortTable(5, 'text');
    });
    