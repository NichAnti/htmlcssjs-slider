function leftClick() {

  var active = $("img.active");
  var prev;

  if(active.hasClass("first")) {

    prev = $("img.last");
  }
  else {

    prev = active.prev();
  }

  active.removeClass("active");
  prev.addClass("active");

  var actInd = prev.index();

  $(".dots > i.fas").removeClass("fas").addClass("far");
  $(".dots > i").eq(actInd).addClass("fas");
}

function rightClick() {

  var active = $("img.active");
  var next;

  if(active.hasClass("last")) {

    next = $("img.first");
  }
  else {

    next = $(".active").next();
  }

  active.removeClass("active");
  next.addClass("active");

  var actInd = next.index();

  $(".dots > i.fas").removeClass("fas").addClass("far");
  $(".dots > i").eq(actInd).addClass("fas");
}

function dotClick () {
  me = $(this);
  var meInd = me.index();


  $(".dots > i.fas").removeClass("fas").addClass("far");
  me.addClass("fas");

  $(".active").removeClass("active");
  $("img").eq(meInd).addClass("active");
}

function init() {
  var left = $(".left");
  var right =$(".right");
  var dot = $(".dots > i");

  left.click(leftClick);
  right.click(rightClick);
  dot.click(dotClick)
}

$(init)
