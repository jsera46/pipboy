$(document).ready(function(){
    var weapons = [{
        "name": "44_pistol",
        "damage": 48,
        "fire_rate": 6,
        "range": 119,
        "accuracy": 66,
        "weight": 4.2,
        "value": 99
    },
    {
        "name": "10mm_pistol",
        "damage": 18,
        "fire_rate": 46,
        "range": 119,
        "accuracy": 61,
        "weight": 4.2,
        "value": 53
    },
    {
        "name": "assault_rifle",
        "damage": 30,
        "fire_rate": 40,
        "range": 119,
        "accuracy": 72,
        "weight": 13.1,
        "value": 144
    }
  ];
// INV
        $('.item-list a').on('click', function(e){
            $('.item-list a').removeClass('active');
            $(e.currentTarget).addClass('active');
        });

    $('.item-list a').on('mouseenter', function(e){
        var current_item = $(e.currentTarget).attr('class');
        
        for(item in weapons){
          if(weapons[item].name == current_item){
            console.log(weapons[item]);

            var container = $('.item-stats');
            container.find('.damage').html(weapons[item].damage);
            container.find('.fire_rate').html(weapons[item].fire_rate);
            container.find('.accuracy').html(weapons[item].accuracy);
            container.find('.range').html(weapons[item].range);
            container.find('.weight').html(weapons[item].weight);
            container.find('.value').html(weapons[item].value);
          }
        };
      });
      // INV

  // index image

          var descri = [{
              "name": "vb_strength",
              "dess": "Strength is a measure of your raw physical power. It affects how much you can carry, and the damage of all melee attacks."
            },
            {
              "name": "perception",
              "dess": "Perception is your environmental awareness and sixth sense, and affects weapon accuracy in V.A.T.S."
            },
            {
              "name": "endurance",
              "dess": "Perception is your environmental awareness and sixth sense, and affects weapon accuracy in V.A.T.S."
            },
            {
              "name": "charisma",
              "dess": "Perception is your environmental awareness and sixth sense, and affects weapon accuracy in V.A.T.S."
            },
            {
              "name": "intelligence",
              "dess": "Perception is your environmental awareness and sixth sense, and affects weapon accuracy in V.A.T.S."
            },
            {
              "name": "agility",
              "dess": "Perception is your environmental awareness and sixth sense, and affects weapon accuracy in V.A.T.S."
            },
            {
              "name": "luck",
              "dess": "Perception is your environmental awareness and sixth sense, and affects weapon accuracy in V.A.T.S."
            }
          ];

          $('.stat-list a').on('mouseenter', function(e){
            var current_item1 = $(e.currentTarget).attr('class');

            for(item in descri){
              if(descri[item].name == current_item1){
                console.log(descri[item]);

              var sd = $('.stat-description li a');
                sd.find('.dess').html(descri[item].dess);
              }
            };
          });





    $('.vb_strength').mouseover(function(){
        $('.stats_imgg').attr('src', 'assets/images/vbstrength.png');
      });
    $('.perception').mouseover(function(){
        $('.stats_imgg').attr('src', 'assets/images/vbperception.png');

    });
    $('.endurance').mouseover(function(){
        $('.stats_imgg').attr('src', 'assets/images/vbendurance.png');
    });
    $('.charisma').mouseover(function(){
        $('.stats_imgg').attr('src', 'assets/images/vbcharisma.png');
    });
    $('.intelligence').mouseover(function(){
        $('.stats_imgg').attr('src', 'assets/images/vbintelligence.png');
    });
    $('.agility').mouseover(function(){
        $('.stats_imgg').attr('src', 'assets/images/vbagility.png');
    });
    $('.luck').mouseover(function(){
        $('.stats_imgg').attr('src', 'assets/images/vbluck.png');
    });

    //
    $('.item-list li a').on('mouseenter', function(e){
      $('.stats_imgg').css('visibility', 'visible');
    });
    $('.item-list li a').on('mouseout', function(e){
      $('.stats_imgg').css('visibility', 'hidden');
    });
    //

    // description
    $('.stat-list').on('mouseenter', function(e){
      $('.stat-description').css('visibility', 'visible');
    });
    $('.stat-list').on('mouseout', function(e){
      $('.stat-description').css('visibility', 'hidden');
    });
    //
    // Nav-tabs
    $('#st1').click(function(){
      $('.nav-tabs').css('margin-left', '140px');
      $('.st').css('opacity', '1');
      $('#spcel').css('opacity', '0.5');
      $('#prk1').css('opacity', '0.5');
    });

    $('#spcel').click(function(){
      $('.nav-tabs').css('margin-left', '40px');
      $('.st').css('opacity', '0.5');
      $('#spcel').css('opacity', '1');
      $('#prk1').css('opacity', '0.5');
    });

    $('#prk1').click(function(){
      $('.nav-tabs').css('margin-left', '-65px');
      $('.st').css('opacity', '0.5');
      $('#spcel').css('opacity', '0.5');
      $('#prk1').css('opacity', '1');
    });
    //
//Index

});
