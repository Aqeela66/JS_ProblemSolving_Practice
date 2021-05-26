var x = 50, y = 100;

		x = y;
		document.getElementById("p1").innerHTML += x;

		x += 1;
		document.getElementById("p2").innerHTML += x;

		x -= 1;
		document.getElementById("p3").innerHTML += x;

		x *= 5;
		document.getElementById("p4").innerHTML += x;

		x /= 5;
		document.getElementById("p5").innerHTML += x;

		x %= 2;
		document.getElementById("p6").innerHTML += x;

		x **= 1;
		document.getElementById("p7").innerHTML += x;

		(x != y) && (x < y);
		document.getElementById("p8").innerHTML += (x != y) && (x < y); 

        (x > y) || (x == y);
		document.getElementById("p9").innerHTML += (x > y) || (x == y);

        (x < y) || (x == y);
		document.getElementById("p10").innerHTML += (x < y) || (x == y);

        !(x < y);
		document.getElementById("p11").innerHTML += !(x < y);

		!(x > y);
		document.getElementById("p12").innerHTML += !(x > y);