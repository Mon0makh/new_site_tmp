var vm = {
    name : ko.observable(""),
    email : ko.observable(""),
    phone : ko.observable(""),
    subject : ko.observable(""),
      step : ko.observable(1),
      prev : function(){
          var step = vm.step()-1;
           if(step >= 1){
               vm.step(step);
               $('.progress-bar').animate({
                   width: step * 20 + '%'
               });
           }
      },
      next : function(){
          var step = vm.step()+1;
      if(step <= 5){
               vm.step(step);
               $('.progress-bar').animate({
                   width: step * 10 + '%'
               });
           }
      }
  }
  
  ko.bindingHandlers.fadeVisible = {
      init: function(element, valueAccessor) {
          // Initially set the element to be instantly visible/hidden depending on the value
          var value = valueAccessor();
          $(element).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
      },
      update: function(element, valueAccessor) {
          // Whenever the value subsequently changes, slowly fade the element in or out
          var value = valueAccessor();
          ko.unwrap(value) ? $(element).fadeIn() : $(element).hide();
      }
  };
  
  
  ko.applyBindings(vm);
  
  
  let HubLabels1 = document.querySelector('.lab1');
      let HubImages1 = document.querySelector('.hub_img1');
      
  HubLabels1.addEventListener('click', ()=>{
      HubImages1.classList.toggle('hub_img_active');
  });
  
  let HubLabels2 = document.querySelector('.lab2');
      let HubImages2 = document.querySelector('.hub_img2');
     
  HubLabels2.addEventListener('click', ()=>{
      HubImages2.classList.toggle('hub_img_active');
  });
  
  let HubLabels3 = document.querySelector('.lab3');
      let HubImages3 = document.querySelector('.hub_img3');
     
  HubLabels3.addEventListener('click', ()=>{
      HubImages3.classList.toggle('hub_img_active');
  });
  
  let HubLabels4 = document.querySelector('.lab4');
      let HubImages4 = document.querySelector('.hub_img4');
     
  HubLabels4.addEventListener('click', ()=>{
      HubImages4.classList.toggle('hub_img_active');
  });
  
  let HubLabels5 = document.querySelector('.lab5');
      let HubImages5 = document.querySelector('.hub_img5');
     
  HubLabels5.addEventListener('click', ()=>{
      HubImages5.classList.toggle('hub_img_active');
  });
  
  
  