
var Links = {
  setColor: function(color){
  //   var aList = document.querySelectorAll('a');
  //   var i = 0;
  //   while(i<aList.length){
  //   aList[i].style.color=color;
  //   i += 1;
  //   }
  // }
    $('a').css('color', color);
}
}
var Body = {
  setColor: function(color){
    document.querySelector('body').style.color=color
  },
  SetBackgroundColor: function(color){
    document.querySelector('body').style.backgroundColor=color
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value==='night') {
    Body.SetBackgroundColor('black')
    Body.setColor('white');
    self.value='day';
    Links.setColor('powderblue');
  }
  else {
    Body.SetBackgroundColor('white');
    Body.setColor('black');
    self.value='night';
    Links.setColor('blue');
}
}
