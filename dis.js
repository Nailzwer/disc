alert("Введите соответствкющие коэффициенты уравнения y =  Аx^2 + Bx + C" )
        let a = Number(prompt("Введите к. А из уравнения"))
        let b = Number(prompt("Введите к. B из уравнения"))
        let c = Number(prompt("Введите к. C из уравнения"))
        if (b*b-4*a*c > 0)
        {
            alert("x1 = " + ((-b + Math.pow(b*b-4*a*c, 0.5)) /2 / a ) + "      " + "x2 = " + ((-b - Math.pow(b*b-4*a*c, 0.5)) /2 / a ))
        }    
        else if (b*b-4*a*c === 0){
            alert("x = " + ((-b + Math.pow(b*b-4*a*c, 0.5)) /2 / a ))
        }
        else{alert("Уравнение не имеет действительных корней или не являетя квадратным")}
    