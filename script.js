function mixColors(color1, color2) {


    switch (color1.toLowerCase()) {
        case 'red':
            switch (color2.toLowerCase()) {
                case 'blue':

                    document.querySelector(".box").style.backgroundColor = "purple"
                    break;
                case 'yellow':
                    document.querySelector(".box").style.backgroundColor = 'orange';
                    break;
                default:
                    'Invalid color combination';
                    break;
            }
            break;
        case 'blue':
            switch (color2.toLowerCase()) {
                case 'red':
                    document.querySelector(".box").style.backgroundColor = "purple";
                    break;
                case 'yellow':
                    document.querySelector(".box").style.backgroundColor = 'green';
                    break;
                default:
                    'Invalid color combination';
                    break;
            }
            break;
        case 'yellow':
            switch (color2.toLowerCase()) {
                case 'red':
                    document.querySelector(".box").style.backgroundColor = 'orange';
                    break;
                case 'blue':
                    document.querySelector(".box").style.backgroundColor = 'green';
                    break;
                default:
                    'Invalid color combination';
                    break;
            }
            break;
        default:
            'Invalid color combination';
            break;
    }
}