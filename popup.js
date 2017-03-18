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
            var infoHTML = petfinder.pet.media.photos.photo[0]['$t'];
            infoHTML += 'Name: ' + petfinder.pet.name['$t'];
            infoHTML += 'Animal: ' + petfinder.pet.animal['$t'];
            infoHTML += 'Breed: ' + petfinder.pet.breeds.breed['$t'];
            infoHTML += 'Sex: ' + petfinder.pet.sex['$t'];
            infoHTML += 'Age: ' + petfinder.pet.age['$t'];
            infoHTML += 'Description: ' + petfinder.pet.description['$t'];
            infoHTML += 'Phone: ' + petfinder.pet.contact.phone['$t'];
            infoHTML += 'Email: ' + petfinder.pet.contact.email['$t'];
            infoHTML += 'Location: ' + petfinder.pet.contact.city['$t'] + ', ' + petfinder.pet.contact.state['$t'];
            $('#petfinderInfo').html(infoHTML);
            console.log(infoHTML);
            return infoHTML;
        }
    });
  };

  getResponse('94110');