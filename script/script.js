const scale_ball = document.getElementById("scale_ball");
const scale = document.getElementById("scale");
let view_amount = 1;
let year_discount = false;
let period_toggle = document.getElementById("period_toggle");
const toggle_circle = document.getElementById("toggle_circle");
const discount_desk = document.getElementById("discount_desk");
const discount_mob = document.getElementById("discount_mob");
const period_month = document.getElementById("period_month");
const period_year = document.getElementById("period_year");
const pageviews = document.getElementById("pageviews");
const usd_price = document.getElementById("usd_price");
slider_numbers()

period_toggle.addEventListener('click', () => {
	year_discount = !year_discount;
	toggle_circle.classList.toggle('toggle_circle_right');
	if (window.innerWidth <= 380) {
   discount_mob.classList.toggle('invisible');
	}	else {
   discount_desk.classList.toggle('invisible');
	}
	period_month.classList.toggle('invisible');
	period_year.classList.toggle('invisible');
	slider_numbers()
})

scale_ball.onmousedown = function(event) {
  event.preventDefault(); // prevent selection start (browser action)
  let shiftX = event.clientX - scale_ball.getBoundingClientRect().left;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - scale.getBoundingClientRect().left;
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = scale.offsetWidth - scale_ball.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }
    if (newLeft >= 0 && newLeft <= 50) {
    	view_amount = 1;
    } else if (newLeft > 50 && newLeft <= 150) {
    	view_amount = 2;
	} else if (newLeft > 150 && newLeft <= 250) {
    	view_amount = 3;
    } else if (newLeft > 250 && newLeft <= 350) {
    	view_amount = 4;
    } else if (newLeft > 350) {
    	view_amount = 5;
    }
    scale_ball.style.left = newLeft + 'px';
  }
  function onMouseUp() {
  	if (view_amount == 1) {
		scale_ball.style.left = 0 + 'px';
	} else if (view_amount == 2) {
		scale_ball.style.left = 99 + 'px';
	} else if (view_amount == 3) {
		scale_ball.style.left = 198 + 'px';
	} else if (view_amount == 4) {
		scale_ball.style.left = 297 + 'px';
	} else if (view_amount == 5) {
		scale_ball.style.left = 396 + 'px';
	}
  	document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
    slider_numbers()
  }
};
scale_ball.ondragstart = function() {
  return false;
};

scale_ball.addEventListener("touchstart", function(event) {
  let shiftX = event.touches[0].clientX - scale_ball.getBoundingClientRect().left;
  document.addEventListener('touchmove', onTouchMove);
  document.addEventListener('touchend', onTouchUp);
  function onTouchMove(event) {
    let newLeft = event.touches[0].clientX - shiftX - scale.getBoundingClientRect().left;
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = scale.offsetWidth - scale_ball.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }
    if (newLeft >= 0 && newLeft <= 38) {
    	view_amount = 1;
    } else if (newLeft > 35 && newLeft <= 110) {
    	view_amount = 2;
	} else if (newLeft > 110 && newLeft <= 180) {
    	view_amount = 3;
    } else if (newLeft > 180 && newLeft <= 250) {
    	view_amount = 4;
    } else if (newLeft > 250) {
    	view_amount = 5;
    }
    scale_ball.style.left = newLeft + 'px';
  }
  function onTouchUp() {
  	if (view_amount == 1) {
		scale_ball.style.left = 0 + 'px';
	} else if (view_amount == 2) {
		scale_ball.style.left = 67 + 'px';
	} else if (view_amount == 3) {
		scale_ball.style.left = 135 + 'px';
	} else if (view_amount == 4) {
		scale_ball.style.left = 203 + 'px';
	} else if (view_amount == 5) {
		scale_ball.style.left = 270 + 'px';
	}
  	document.removeEventListener('touchend', onTouchUp);
    document.removeEventListener('touchmove', onTouchMove);
    slider_numbers()
  }
});

function slider_numbers () {
	if (view_amount == 1) {
		pageviews.innerHTML = "10K PAGEVIEWS";
		scale.style.background = "hsl(224, 65%, 95%)";
		if (year_discount) {
			usd_price.innerHTML = "$72.00";
		} else {
			usd_price.innerHTML = "$8.00";
		}
	} else if (view_amount == 2) {
		pageviews.innerHTML = "50K PAGEVIEWS";
		scale.style.background = "linear-gradient(to left, hsl(224, 65%, 95%) 75%, hsl(174, 77%, 80%) 25%)";
		if (year_discount) {
			usd_price.innerHTML = "$108.00";
		} else {
			usd_price.innerHTML = "$12.00"
		}
	} else if (view_amount == 3) {
		pageviews.innerHTML = "100K PAGEVIEWS";
		scale.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 50%, hsl(224, 65%, 95%) 50%)";
		if (year_discount) {
			usd_price.innerHTML = "$144.00";
		} else {
			usd_price.innerHTML = "$16.00";
		}
	} else if (view_amount == 4) {
		pageviews.innerHTML = "500K PAGEVIEWS";
		scale.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 75%, hsl(224, 65%, 95%) 25%)";
		if (year_discount) {
			usd_price.innerHTML = "$216.00";
		} else {
			usd_price.innerHTML = "$24.00";
		}
	} else if (view_amount == 5) {
		pageviews.innerHTML = "1M PAGEVIEWS";
		scale.style.background = "hsl(174, 77%, 80%)";
		if (year_discount) {
			usd_price.innerHTML = "$324.00";
		} else {
			usd_price.innerHTML = "$36.00";
		}
	}
};