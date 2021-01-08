$(document).ready(function() {
  // MODAL
  var modalText = {
    dsc: {
      title: 'DEEP SEE CRIME',
      tag:'An AI Based Crime Monitoring System',
      detail:
        'Trained an Anomaly detection model using 3D Convolutional Neural Networks.Built a web application for crime monitoring system using JS, Django Restful API and SqLite Database.',
      link: 'https://github.com/subhailams/MS335_CODEMONK'
    },
    symptoms: {
      title: 'Symptoms based disease prediction using decision tree and electronic health record analysis',
      tag: 'Prediction System',
      detail:
        'Using NLP (NLTK libraries - Corpus & Tokenizers) generated the summary of health records.Trained a Decision tree model to predict the disease based on the symptoms they possess.Developed a Python Django web application for managing and accessing the prediction results.',
      link: 'https://github.com/Ramiyashree/Symptoms-based-disease-prediction-using-dectree-and-ehr-analysis'
    },
    realtime: {
      title: 'Real-time spontaneous abortion prediction and detection using IoT & ML',
      tag: 'Care_me',
      detail:
        'Developed a prototype of a waist band incorporating Arduino, Pulse Sensor, Accelerometer, and Temperature sensor to get the health parameters of a pregnant woman.Trained a K-means Clustering model for prediction of miscarriage using the above health data.',
      link: 'https://github.com/Ramiyashree/care_me'
    },
    silenthorn: {
      title: 'Silent-horn',
      tag: 'A smart web app for hearing impaired people',
      detail:
        'Developed a web application for accessing information and tracking the medical records using PHP, JS, HTML, CSS and MySQL.Integrated the app with a sound sensor to alert using visual notifications when external sound is detected.',
        link: 'https://github.com/Ramiyashree/silent-horn'
    },
    atmm: {
      title: 'Atrocity Case Management and Monitoring',
      detail:
        'Developed a web application managing different user roles, profiles, uploading cases, notification of new updates and alert messages using PHP, Google Cloud Platform, JS and MySQL database.Provided a better solution to enhance the documentation, management, and monitoring of atrocity cases.',
         link: 'https://github.com/Ramiyashree/ATMM'
    }
  
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});

