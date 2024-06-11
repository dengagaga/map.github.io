const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-item-header");

  header.addEventListener("click", (e) => {
  e.target.classList.toggle('active');
  const body = e.target.nextElementSibling;
    accordionItems.forEach((accItem) => {
  
      if (accItem !== item && body.classList.contains("collapsed")) {
  
    body.classList.add("collapsed");
    body.style.height = "0";
      }
    });

    body.classList.toggle("collapsed");
    if (!body.classList.contains("collapsed")) {
      body.style.height = "0";
    } else {
      body.style.height = body.scrollHeight + "px";
    }
    });
  });

  const tooltipUsa = document.querySelector('.tooltip_usa')
  const tooltipBrazil = document.querySelector('.tooltip_brazil')
  const tooltipPortugal = document.querySelector('.tooltip_portugal')
  const tooltipTurkey = document.querySelector('.tooltip_turkey')
  const tooltipVenezuela = document.querySelector('.tooltip_venezuela')
  const tooltipDominicana = document.querySelector('.tooltip_dominicana')
  const tooltipLatvia = document.querySelector('.tooltip_latvia')
  const tooltipAfrica = document.querySelector('.tooltip_africa')
  const tooltipGb = document.querySelector('.tooltip_gb')
  const usa = document.getElementById('USA')
  const brazil = document.getElementById('brazil')
  const venezuela = document.getElementById('venezuela')
  const portugal = document.getElementById('portugal')
  const turkey = document.getElementById('turkey')  
  const dominic = document.getElementById('dominic')  
  const gb = document.getElementById('gb')  
  const latvia = document.getElementById('latvia')  
  const africa = document.getElementById('africa')  
  tooltipUsa.onmouseover = function(e) {
      usa.classList.add('animation')
  };

  tooltipUsa.onmouseout = function(event) {
    usa.classList.remove('animation')
  };
  tooltipBrazil.onmouseover = function(e) {
    brazil.classList.add('animation')
  };

  tooltipBrazil.onmouseout = function(event) {
    brazil.classList.remove('animation')
  };
  tooltipVenezuela.onmouseover = function(e) {
    venezuela.classList.add('animation')
  };

  tooltipVenezuela.onmouseout = function(event) {
    venezuela .classList.remove('animation')
  };
  tooltipPortugal.onmouseover = function(e) {
    portugal.classList.add('animation')
  };

  tooltipPortugal.onmouseout = function(event) {
    portugal .classList.remove('animation')
  };
  tooltipTurkey.onmouseover = function(e) {
    turkey.classList.add('animation')
  };

  tooltipTurkey.onmouseout = function(event) {
    turkey .classList.remove('animation')
  };
  tooltipGb.onmouseover = function(e) {
    gb.classList.add('animation')
  };

  tooltipGb.onmouseout = function(event) {
    gb .classList.remove('animation')
  };
  tooltipLatvia.onmouseover = function(e) {
    latvia.classList.add('animation')
  };

  tooltipLatvia.onmouseout = function(event) {
    latvia.classList.remove('animation')
  };
  tooltipDominicana.onmouseover = function(e) {
    dominic.classList.add('animation')
  };

  tooltipDominicana.onmouseout = function(event) {
    dominic.classList.remove('animation')
  };
  tooltipAfrica.onmouseover = function(e) {
    africa.classList.add('animation')
  };

  tooltipAfrica.onmouseout = function(event) {
    africa.classList.remove('animation')
  };