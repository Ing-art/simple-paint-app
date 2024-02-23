
//FUNCTION: randomNum()
//DESCRIPTION: generates random int numbers in a defined range
//             Inputs with decimals will be truncated
//             NaN is returned if the calculation is not possible
//PROTOTYPE:   int randomNum(int minimum, int maximum)
//PARAMETERS:  2 int numbers (minimum and maximum)
//RETURN VALUE: random int number in a defined range (incl.) or NaN



function randomNum(minimum,maximum){
    minimum = parseInt(minimum);
    maximum = parseInt(maximum);

    if(isNaN(minimum)||isNaN(maximum)||minimum>maximum){
        throw "Error in parameters";
    }
    return Math.floor(Math.random()*(maximum-minimum+1))+minimum;
}


//FUNCTION: paint()
//DESCRIPTION: paints a background of HTML element in desired color 
//PROTOTYPE: void paint(HTMLElement, String color);
//PARAMETERS: HTML element, color
//RETURN VALUE: none

function paint(element,color){
    element.style.backgroundColor = color;
}

//FUNCTION: generateColor()
//DESCRIPTION: generates random colors in RGB format
//PROTOTYPE: string generateColor();
//PARAMETERS: none
//RETURN VALUE: string with the rgb() color (e.g. rgb(200,45,45))

function generateColor(){
    return 'rgb('+randomNum(0,255)+','+randomNum(0,255)+','+randomNum(0,255)+')';

}

//FUNCTION: getMin()
//DESCRIPTION: finds the lowest number of two given inputs
//PROTOTYPE: float getMin(float,float);
//PARAMETERS: 2 numbers
//RETURN VALUE: the lowest float number

function getMin(number1,number2){
    num1 = parseFloat(number1.value);
    num2 = parseFloat(number2.value);
    if(num1>num2){
        return num2;
    } else{
        return num1;
    }
}

//FUNCTION: getAreaT()
//DESCRIPTION: calculates the area of a triangle from b and h
//PROTOTYPE: float getAreaT(float b,float h);
//PARAMETERS: 2 float numbers
//RETURN VALUE: float (b * h)/2

function getAreaT(base,height){
    b = parseFloat(base.value);
    h = parseFloat(height.value);
    return (b*h)/2;
}

//FUNCTION:     getDiscount()
//DESCRIPTION:  calculates discounted price from a price and discount as int
//              If price<0 or 100<discount <0 returns error. 
//PROTOTYPE:    float getDiscount(float price,int discount);
//PARAMETERS:   2 numbers
//RETURN VALUE: float discounted price

function getDiscount(price,discount){
    p = parseFloat(price.value);
    d = parseFloat(discount.value);
    disc_p = d/100;
    if(p<0 || d<0 ||d>100){
        return "Error in input";
    } else{
    return p-disc_p*p;
    }
}

//FUNCTION: colorPalette()
//DESCRIPTION: generates random colors in RGB format within the parameters given
//PROTOTYPE: string generateColor();
//PARAMETERS: none
//RETURN VALUE: string with the rgb() color (e.g. rgb(200,45,45))

function colorPalette(r1,r2,g1,g2,b1,b2){
    red1 = parseInt(r1.value);
    red2 = parseInt(r2.value);
    green1 = parseInt(g1.value);
    green2 = parseInt(g2.value);
    blue1 = parseInt(b1.value);
    blue2 = parseInt(b2.value);

    if(red1<0 || red2>255 || green1<0 || green2>255 || blue1<0 || blue2>255){
        alert('Error in parameters');
    } else { 
        return 'rgb('+randomNum(red1,red2)+','+randomNum(green1,green2)+','+randomNum(blue1,blue2)+')';
    }
}

//FUNCTION: isPrime()
//DESCRIPTION: checks if a given input is a prime number
//PROTOTYPE: int isPrime();
//PARAMETERS: 1 number
//RETURN VALUE: bool (true or false)

function isPrime(num){
    var num = parseInt(num);


    if(num>0){
        for(let i=2;i<num;i++){
            if(num%i==0){
                return  false;        
            }
        }          

        return true ;   

    }else {
        return false;
    }   
}

//FUNCTION: doubleSize()
//DESCRIPTION: doubles the size of an image
//PROTOTYPE: void doubleSize(HTMLImageElement image)

function doubleSize(image){
    image.width *=2; //attribute width must be in the HTML code
}

//FUNCTION: changeSize()
//DESCRIPTION: changes the size of an image
//PROTOTYPE: void doubleSize(HTMLImageElement image, magnitude)

function changeSize(image,num){
    image.width *=num; //attribute width must be in the HTML code
}