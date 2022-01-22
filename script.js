    // RECUPERATION DES DONNEES JSON
    let productData = "";
$(document).ready(function(){
      $.getJSON("productsman.json", function(data){
          
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
          $('#sortman').append(productData);
      });
    });


$(document).ready(function(){
      $.getJSON("productswomen.json", function(data){
          
          $.each(data, function hi(key, value){
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

    document.getElementById("srh").addEventListener("keyup", function(event) {
      let searchQuery = event.target.value
      console.log(searchQuery)
       
      
      for (let counter = 0; counter < productData.length; counter++) {
          const currentName = productData[counter].textContent
          
          if (currentName.includes(searchQuery)) {
            productData[counter].style.display = "block";
          } else {
            productData[counter].style.display = "none";
          }
      }
  });