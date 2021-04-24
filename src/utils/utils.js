import { colors } from "@material-ui/core"

const getUserCardColor = (initial) => {
    let value = 500;
    switch(initial){
        case 'A':
            return colors.amber[value];
        case 'B':
            return colors.blue[value];
        case 'C':
            return colors.cyan[value];
        case 'D':
            return colors.deepOrange[value];
    }
}

export default getUserCardColor;