var getResponse = function(location) {
  var url = 'http://api.petfinder.com/pet.getRandom?key=' + 'fe1c3608eef3a014392be43230072267' + '&location=' + location + '&output=basic' + '&format=json' ;
    $.ajax({
        type : 'GET',
        data : {},
        url : url,
        dataType: 'json',
        success : function(data) {              
            var result = '';
            var petfinder = data.petfinder;
            var infoHTML = '<ul>';
            infoHTML += '<li>';
            infoHTML += '<strong>Description</strong><br>';
            infoHTML += petfinder.pet.description['$t'];
            infoHTML += '</li>';
            infoHTML += '</li>';
            infoHTML += '</ul>';
            // return infoHTML;
            $('#petfinderInfo').html(infoHTML);
            // $('#petfinderInfo').html(petfinder.pet.description['$t']);
            console.log(petfinder);
        }
    });
  };

  getResponse('94110');