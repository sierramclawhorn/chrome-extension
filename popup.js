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
            var photo = petfinder.pet.media.photos.photo[0]['$t'];
            photo = photo.substring(0, photo.length -7) + 'x.jpg';
            var name = petfinder.pet.name['$t'];
            var link = 'https://www.petfinder.com/petdetail/' + petfinder.pet.id['$t'];
            var infoHTML = 'Animal: ' + petfinder.pet.animal['$t'] + '\n';
            infoHTML += 'Breed: ' + petfinder.pet.breeds.breed['$t'] + '\n';
            infoHTML += 'Sex: ' + petfinder.pet.sex['$t'] + '\n';
            infoHTML += 'Age: ' + petfinder.pet.age['$t'] + '\n';
            var contactInfo = 'Phone: ' + petfinder.pet.contact.phone['$t'] + '\n';
            contactInfo += 'Email: ' + petfinder.pet.contact.email['$t'] + '\n';
            contactInfo += 'Location: ' + petfinder.pet.contact.city['$t'] + ', ' + petfinder.pet.contact.state['$t'];
            var petDescription = petfinder.pet.description['$t'];
            $('.name').html(name);
            $('#petImg').attr('src', photo);
            $('#petLink').attr('href', link)
            $('#petfinderInfo').html(infoHTML);
            $('#shelterContact').html(contactInfo);
            $('#petDesc').html(petDescription);
            console.log(link)
        }
    });
  };

  getResponse('94110');