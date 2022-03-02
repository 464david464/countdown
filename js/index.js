let time = new Date();
time.setHours(0);
time.setMinutes(0);
time.setSeconds(0);

let clicked = false;

function formatNumber(num) {
  return String(num).padStart(2, "0");
}

function render() {
  document.querySelector(".hours").innerHTML = formatNumber(time.getHours());
  document.querySelector(".minutes").innerHTML = formatNumber(
    time.getMinutes()
  );
  document.querySelector(".secends").innerHTML = formatNumber(
    time.getSeconds()
  );
}

document.querySelectorAll(".btn-up").forEach(function (btn) {
  btn.addEventListener("click", () => {
    if(!clicked) {
      if (btn.id == "hours-up") {
        time.setHours(time.getHours() + 1);
      } else if (btn.id == "minutes-up") {
        time.setMinutes(time.getMinutes() + 1);
      } else {
        time.setSeconds(time.getSeconds() + 1);
      }
      render();
    }
  });
});

document.querySelectorAll(".btn-down").forEach(function (btn) {
  btn.addEventListener("click", () => {
    if(!clicked) {
      if (btn.id == "hours-down") {
        time.setHours(time.getHours() - 1);
      } else if (btn.id == "minutes-down") {
        time.setMinutes(time.getMinutes() - 1);
      } else {
        time.setSeconds(time.getSeconds() - 1);
      }
      render();
    }
  });
});

document.querySelector("#start").addEventListener("click", () => {
  if (!clicked) {
      clicked = true;
    const startTimer = setInterval(function () {
      if (
        time.getHours() == 0 &&
        time.getMinutes() == 0 &&
        time.getSeconds() == 0
      ) {
        document.querySelectorAll('.arow').forEach(function (btn) {
          btn.classList.add('if-cliced')
        })
        clearInterval(startTimer);
        clicked = false;
      } else {
        document.querySelectorAll('.arow').forEach(function (btn) {
          btn.classList.remove('if-cliced')
        })
        time.setSeconds(time.getSeconds() - 1);
      }

      document.querySelector("#stop").addEventListener("click", function () {
        document.querySelectorAll('.arow').forEach(function (btn) {
          btn.classList.add('if-cliced')
        })
        clicked = false;
        clearInterval(startTimer);
      });

      document.querySelector("#reaset").addEventListener("click", function () {
        time.setHours(0);
        time.setMinutes(0);
        time.setSeconds(0);

        document.querySelectorAll('.arow').forEach(function (btn) {
          btn.classList.add('if-cliced')
        })

        clicked = false;
        render();
        clearInterval(startTimer);
      });

      render();
    }, 1000);
  }
});

document.querySelector("#reaset").addEventListener("click", function () {
    time.setHours(0);
    time.setMinutes(0);
    time.setSeconds(0);
    clicked = false;

    document.querySelectorAll('.arow').forEach(function (btn) {
      btn.classList.add('if-cliced')
    })

    render();
  });
