document.addEventListener('DOMContentLoaded', function () {
    // build color options
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    colors.forEach(element => {
        var getCont2 = document.querySelector('.colors');
        var createBx2 = document.createElement('div');
        createBx2.style.backgroundColor = element
        // createBx2.className = element;
        getCont2.append(createBx2)
    });

    // set color to color clicked
    var theColorIs = document.querySelectorAll('.colors div')
    var yep;
    theColorIs.forEach(element => {
        element.addEventListener('click', function () {
            yep = this.style.backgroundColor
        })
    });

    // build art blocks
    for (let i = 0; i < 1012; i++) {
        var getCont = document.querySelector('.container');
        var createBx = document.createElement('div');
        createBx.className = 'boxes'
        getCont.append(createBx)
    }

    // change color of art block to color clicks
    var boxList = document.querySelectorAll('.boxes')
    boxList.forEach(element => {
        element.addEventListener('click', function () {
            if (this.style.backgroundColor === yep) {
                this.style.backgroundColor = 'rgba(227, 231, 227, 0.653)'
            } else {
            this.style.backgroundColor = yep
            }
        })
    });
})