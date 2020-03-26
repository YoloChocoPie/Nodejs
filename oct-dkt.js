// Bài 1 

// Hãy viết chương trình in ra chuỗi "Hello World @ Code Online".

console.log("Hello World @ Code Online");

// Bài 2

//  Đề bài: Cho 2 số nguyên a, b. Tính tổng 2 số.
// Đầu vào: Một dòng chứa 2 số nguyên cách nhau bởi dấu cách.
// Đầu ra: Một số nguyên duy nhất là tổng của 2 số đã cho.
// Ví dụ:
// input:
// 2 3
// output:
// 5

process.stdin.once("data", (input ) =>
{
    var inp = input.toString();
    var item = inp.split(' ')
    var n1 = parseInt(item[0]);
    var n2 = parseInt(item[1]);
    console.log(n1 + n2);
    process.exit();
}
);

// Bài 3
// Đề bài: Viết chương trình đọc và 2 số nguyên và in ra kết quả của phép cộng (+), phép trừ (-), phép nhân (*), phép chia (/). Kết quả phép chia làm tròn đến 2 chữ số thập phân.
// Đầu vào: Một dòng gồm 2 số nguyên a, b (b khác 0) cách nhau bởi dấu cách.
// Đầu ra: 2 dòng, dòng đầu ghi tổng, hiệu của 2 số, dòng sau ghi tích thương của 2 số. Các số trên cùng một dòng cách nhau bởi dấu cách.
// Ví dụ:
// input:
// 9 3
// output:
// 12 6
// 27 3.00

process.stdin.once("data", (input ) =>
{
    var inp = input.toString();
    var item = inp.split(' ');
    var n1 = parseInt(item[0]);
    var n2 = parseInt(item[1]);
    console.log((n1 + n2) + " " + (n1-n2));
    console.log((n1 * n2) + " " + (n1/n2).toFixed(2));
    process.exit();
}
);

//Bài 4

// Đề bài: Nhập vào một số nguyên a (a <= 100). Tính và in ra giá trị của a^2, a^3, a^4.
// Đầu vào: Một số nguyên duy nhất a.
// Đầu ra: Ba số a^2, a^3, a^4 mỗi số cách nhau bởi dấu cách.
// Ví dụ:
// input:
// 3
// output:
// 9 27 81

process.stdin.once("data", (input ) =>
{
    var inp = input.toString().split(' '); // javascript hút cần cmnr
    
    var n1 = parseInt(inp[0]);
 
    console.log( (n1**2) + " " + (n1**3) + " " + (n1**4) );
    
    process.exit();
}
);
//Bài 5

// Đề bài: Cho 2 số nguyên rất lớn a, b. Tính tổng 2 số đó biết (|a| và |b| <= 10 tỷ).
// Đầu vào: Một dòng chứa 2 số cách nhau bởi dấu cách.
// Đầu ra: Một số duy nhất là tổng của 2 số.
// Ví dụ:
// input:
// 2 3
// output:
// 5

process.stdin.once("data", (input) =>
{
    var inp = input.toString().split(' ');
    var n1 = parseFloat(inp[0]);	
  	var n2 = parseFloat(inp[1]);	
    console.log( (n1+n2) );
    process.exit();
}
);

//Bài 6
// Đề bài: Nhập vào 2 số nguyên dương là 2 cạnh a, b của hình chữ nhật (0 < a, b <= 100000). Tính chu vi, diện tích HCN.
// Đầu vào: Một dòng gồm 2 số cách nhau bởi dấu cách.
// Đầu ra: Một dòng gồm 2 số là chu vi, diện tích của hcn cách nhau bởi dấu cách.
// Ví dụ:
// input:
// 10 7
// output:
// 34 70

process.stdin.once("data", (input) =>
{
    var inp = input.toString().split(' ');
    var n1 = parseFloat(inp[0]);	
  	var n2 = parseFloat(inp[1]);	
    console.log( (n1+n2)*2 + " " + (n1*n2) );
    process.exit();
}
);

//Bài 7
// Đề bài: Viết chương trình nhập vào bán kính hình cầu, tính và in ra diện tích, thể tích của hình cầu đó. Biết công thức tính diện tích và thể tích lần lượt là: S = 4πR^2 và V = (4/3)πR^3. Lấy π = 3.14
// Đầu vào: Một số là bán kính hình cầu.
// Đầu ra: Hai số cách nhau bởi dấu cách là diện tích và thể tích hình cầu, kết quả làm tròn đến 2 chữ số thập phân.
// Ví dụ:
// input:
// 4
// output:
// 200.96 267.95

process.stdin.once("data", (input) =>
{
    var inp = input.toString().split(' ');
    var n1 = parseFloat(inp);	
    console.log( (4*3.14*(n1**2)).toFixed(2) + " " + ( (4/3)*3.14*(n1**3) ).toFixed(2));
    process.exit();
}
);

//Bài 8

// Đề bài: Viết chương trình đọc từ bàn phím 3 số nguyên biểu diễn ngày, tháng, năm và xuất ra màn hình dưới dạng "dd/mm/yyyy".
// Đầu vào: Một dòng gồm 3 số nguyên cách nhau bởi một dấu cách.
// Đầu ra: Một chuỗi theo định dạng ngày tháng năm: dd/mm/yyyy
// Ví dụ:
// input:
// 5 6 2018
// output:
// 05/06/2018

process.stdin.once("data",(input) =>
{
    var inp = input.toString().split(' '); // javascript hút cần cmnr
    var n1 = parseInt(inp[0]);
    var n2 = parseInt(inp[1]);
    var n3 = parseInt(inp[2]);
                     
    var dd = (n1 < 10 ) ? ("0" + n1)  : n1;
    var mm = (n2 < 10 ) ? ("0" + n2)  : n2;
    

    console.log(dd + "/" + mm + "/" + n3);
 }
);

// Bài 9

// Đề bài: Viết chương trình nhập vào số giây, đổi số giây nhập vào thành dạng "hh:mm:ss".
// Đầu vào: Một số nguyên duy nhất.
// Đầu ra: Một chuỗi định dạng như trên.
// Ví dụ:
// input:
// 7826
// output:
// 02:10:26

process.stdin.once("data", (input ) =>
{
    var inp = input.toString();
    var n = parseInt(inp);
    var h = parseInt(n / 3600);
    var m = parseInt( (n % 3600) / 60 );
    var s = n % 3600  % 60 ;

    var hh = (h < 10 ) ? ("0" + h)  : h;
    var mm = (m < 10 ) ? ("0" + m)  : m;
    var ss = (s < 10 ) ? ("0" + s)  : s;

    console.log(hh + ":" + mm + ":" + ss );
    process.exit();
}
);

//Bài 11

// Đề bài: Nhập vào 2 số nguyên, tìm và in ra số lớn nhất trong 2 số.
// Đầu vào: Một dòng chứa 2 số nguyên cách nhau bởi dấu cách.
// Đầu ra: Một số là số lớn nhất trong 2 số.
// Ví dụ:
// input:
// 4 3
// output:
// 4

process.stdin.once("data",(input) =>
{
    var inp = input.toString().split(' '); 
    var n1 = parseInt(inp[0]);
    var n2 = parseInt(inp[1]);
    
   if(n1 > n2)
    {
        console.log(n1);
    }
    else
    {
        console.log(n2);
    }
}
);

//Bài 12 + ( 13 )

// Đề bài: Nhập vào 3 + ( 4 ) số nguyên, tìm và in ra số lớn nhất trong 3 + (4) số.
// Đầu vào: Một dòng chứa 3+ (4) số nguyên cách nhau bởi dấu cách.
// Đầu ra: Một số là số lớn nhất trong 3 + (4) số.
// Ví dụ:
// input:
// 4 2 6
// output:
// 6

process.stdin.once("data",(input) =>
{
    var inp = input.toString().split(' '); 
  	var max = 0;
	max = Math.max.apply(Math, inp);
  	console.log(max);
}
);


// Bài 16

// Đề bài: Hãy nhập vào một số là 1 tháng trong năm, in ra xem tháng đó có bao nhiêu ngày. Coi như tháng 2 luôn có 28 ngày.
// Đầu vào: Một số nguyên.
// Đầu ra: Số ngày trong tháng. Nếu tháng không hợp lệ thì in ra "NOT FOUND".
// Ví dụ 1:
// input:
// 1
// output:
// 31
// Ví dụ 2:
// input:
// 13
// output:
// NOT FOUND

process.stdin.once("data",(input) =>
{
    var n = parseInt(input.toString()); 
	switch(n)
    {
		case 1:
  			console.log("31");
		break;
  

		case 2:
  			console.log("28");
		break;

		case 3:
  			console.log("31");
		break;

		case 4:
  			console.log("30");
		break;

		case 5:
  			console.log("31");
		break;

		case 6:
  			console.log("30");
		break;

		case 7:
  			console.log("31");
		break;

		case 8:
  			console.log("31");
		break;

		case 9:
  			console.log("30");
		break;

		case 10:
  			console.log("31");
		break;

		case 11:
  			console.log("30");
		break;

		case 12:
  			console.log("31");
		break;

  	  
  default:
  console.log("NOT FOUND");        
    }
  
  

}
);

//Bài 18

// Đề bài:
// Người dùng nhập vào một số nguyên là số tiền cần rút. Điều kiện, số tiền cần rút phải <= 200 triệu và là bội số của 50.000đ. Trong cây ATM luôn bảo đảm có đủ tiền cho khách hàng rút và có không giới hạn các mệnh giá tiền 500.000, 200.000, 100.000 và 50.000.
// Yêu cầu:
// Lập trình để cây ATM nhả ra số tiền khách hàng cần rút với số lượng tờ tiền là ít nhất. VD: Nhập 2.350.000đ –> trả ra 4 tờ 500K, 1 tờ 200K, 1 tờ 100K và 1 tờ 50K.
// Input: Nhập vào một số nguyên là số tiền cần rút.
// Output:
// 1. Mỗi dòng thể hiện một mệnh giá tiền và số lượng tờ tương ứng với mệnh giá đó. Chỉ in ra những mệnh giá có số tờ > 0.
// 2. Các trường hợp vi phạm điều kiện đầu vào in ra "INVALID".
// Ví dụ:
// Input:
// 2350000
// Output:
// 500K 4
// 200K 1
// 100K 1
// 50K 

process.stdin.once("data", (input) =>
{
    var n = parseInt(input.toString());
    if ( (n > 200000000 || n % 50000 !=0) )
    {
        console.log("INVALID");
    }
    else
    {
    var x500 = 0, x200 = 0, x100 =0, x50 = 0;
     if ( n >= 500000 )
    {
        x500 = parseInt( n / 500000 );
        n= n % 500000
    }
    if ( n >= 200000 )
{
 x200 = parseInt( n / 200000 );
n= n % 200000
    }
    if ( n >= 100000 )
    {
        x100 = parseInt( n / 100000 );
        n= n % 100000
    }
    if ( n >= 50000 )
    {
        x50 = parseInt( n / 50000 );
        n= n % 50000
    }    
    if( x500 > 0 ) console.log( "500K " + x500);
    if( x200 > 0 ) console.log( "200K " + x200);
    if( x100 > 0 ) console.log( "100K " + x100);
    if( x50 > 0 ) console.log( "50K " + x50);
    }
    process.exit();
}
);

//Bài 19
// Đề bài: Nhập vào một số nguyên dương n. In ra các số từ 1 đến n.
// Đầu vào: Một số nguyên dương n duy nhất.
// Đầu ra: Một dòng gồm các số cách nhau bằng dấu cách từ 1 đến n.
// Ví dụ:
// input:
// 3
// output:
// 1 2 3

process.stdin.once("data", (input) => 
{
    var n = parseInt(input.toString());
    for(var i = 1; i <= n; i++)
    {
        process.stdout.write(i + " ");
    }
    process.exit();
 });

// Bài 20

// Đề bài: Nhập vào một số nguyên duơng n. Tinh tổng các số từ 1 đến n.
// Đầu vào: Một số nguyên dương n.
// Đầu ra: Một số nguyên là tổng các số từ 1 đến n.
// Ví dụ:
// input:
// 3
// output:
// 6

//Cách 1
process.stdin.once("data",(input) =>
{
    var inp = input.toString(); 
    
    var n1 = parseInt(inp);
  	var res = (n1 * (n1+1)) / 2;
  	console.log(res);
}
);

//Cách2
process.stdin.once("data", (input) => 
{
    var n = parseInt(input.toString());
    var total = 0;
    for(var i = 0; i <= n; i++)
    {
        total += i;
    }
    console.log(total);
    process.exit();
 });

 //Bài 21
//  Đề bài: Đường tăng đang rất tức giận Tôn Ngộ Không. Ông ta muốn niệm thần chú để trừng phạt với n lần. Hãy viết chương trình in ra n lần câu thần chú đó.
//  Đầu vào: Dòng đầu tiên chứa số n – số lượng lần niệm chú. Dòng thứ 2 là câu thần chú.
//  Đầu ra: n dòng câu thần chú.
//  Ví dụ:
//  input:
//  2
//  A di da phat
//  output:
//  A di da phat
//  A di da phat

 process.stdin.once("data",(input)=>
{
	var line = input.toString().split('\n');
    var n = parseInt(line[0]);
    var s = line[1];
    for( var i = 1; i<=n;i++)
    {
    console.log(s);
    }
    process.exit();
}
);

//Bài 22

// Đề bài: Nhập vào một số nguyên không âm n, và in ra n!
// Đầu vào: Một số nguyên không âm n.
// Đầu ra: Một số nguyên là giá trị của n!
// Ví dụ:
// input:
// 2
// output:
// 2


process.stdin.once("data", (input) => 
{
    var n = parseInt(input.toString());
    var total = 1;
    for(var i = 1; i <= n; i++)
    {
        total = total*i;   	
    }
    console.log(total);
    process.exit();
 });

 // Bài 24

//  Đề bài: Viết chương trình nhập vào chiều cao, chiều ngang của hình chữ nhật. Vẽ hình chữ nhật đặc dấu sao (*) có kích thước đã nhập.
//  Đầu vào: Một dòng gồm 2 số nguyên dương cách nhau bởi dấu cách lần lượt là chiều cao và chiều ngang.
//  Đầu ra: HCN dấu sao.
//  Ví dụ:
//  input:
//  2 3
//  output:
//  ***
//  ***

 process.stdin.once("data", (input)=>
{
	var items = input.toString().split(' ');
    var a = parseInt(items[0]);
    var b = parseInt(items[1]);
    
    for (var i = 1; i <= a; i++)
    {
    	for(var j = 1; j <=b; j++)
        {
        	process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
    process.exit();
});

// Bài 25

// Đề bài: Nhập vào một số nguyên x. Vẽ hình tam giác dấu (*) có dạng như ví dụ dưới đây.
// Đầu vào: Một số nguyên
// Đầu ra: Hình tam giác
// Ví dụ:
// input:
// 3
// output:
// ***
// **
// *

process.stdin.once("data", (input)=>
{
	var n = parseInt(input.toString());
    
    for (var i = 0; i <= n; i++)
    {
    	for(var j = n -1 ; j >= i; j--)
        {
        	process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
    process.exit();
});


//Bài 26

// Đề bài: Viết chương trình nhập vào chiều cao, chiều ngang của hình chữ nhật. Vẽ hình chữ nhật rỗng dấu sao (*) có kích thước đã nhập.
// Đầu vào: Một dòng gồm 2 số nguyên dương n, m cách nhau bởi dấu cách lần lượt là chiều cao và chiều ngang. (2 < n,m)
// Đầu ra: HCN dấu sao.
// Ví dụ:
// input:
// 3 3
// output:
// ***
// * *
// ***

process.stdin.once("data",(input)=>
{
	var n = input.toString().split(' ');
    var rong = parseInt(n[0]);
    var cao = parseInt(n[1]);
    
    for( var i =1; i<=rong; i++ )
    {
    	for( var j =1; j <=cao; j++)
        {
        	if ( i==1 || j == 1 || i == rong || j == cao)
            {
            	process.stdout.write("*");
            }
            else
            {
        		process.stdout.write(" ");
        	}
         }
         process.stdout.write("\n");
    }    
    	process.exit();
});

//Bài 27 ( javaweed cmnr)

// Đề bài: Viết chương trình kiểm tra 1 số có là số nguyên tố không? Số nguyên tố là số nguyên dương có duy nhất 2 ước là 1 và chính nó. Ví dụ số 2,3,5,…
// Đầu vào: Một số nguyên duy nhất.
// Đầu ra: "TRUE" nếu đó là số nguyên tố, "FALSE" nếu ngược lại
// Ví dụ:
// input:
// 3
// output:
// TRUE

function isPrime(num)
{
  for(var i = 2; i < num; i++)
  if(num % i === 0) return false;
  return num > 1;
}
process.stdin.once("data",(input)=>
{
	var lines = input.toString().split('\n');
    var n = parseInt(lines[0]);
	var cnt =0;

    	if(isPrime(n))
        {
			console.log("TRUE");
            cnt++;
        }
    	if( cnt == 0)
    	{
    	console.log("FALSE");
    	}

    process.exit();
}
);

//Bài 28

// Đề bài: Viết chương trình kiểm tra 1 số có là số hoàn hảo không? Số hoàn hảo là số nguyên dương có tổng các ước dương bằng 2 lần nó. Ví dụ số 6 có các ước 1, 2, 3, 6 và tổng 1 + 2 + 3 + 6 = 12 (bằng 2 lần 6).
// Đầu vào: Một số nguyên duy nhất.
// Đầu ra: "TRUE" nếu đó là số hoàn hảo, "FALSE" nếu ngược lại
// Ví dụ:
// input:
// 6
// output:
// TRUE

process.stdin.once("data",(input)=>
{
	var lines = input.toString().split('\n');
    var n = parseInt(lines);
    var sum =0;
    for(var i = 1; i < n; i++)
    {
    	if( n % i == 0)
        {
        sum += i;
        }
     }
     	if( sum == n )
        {
        console.log('TRUE');
        }
        else
        {
        console.log('FALSE');
        }
    process.exit();
});

 // Bài 29
//  Đề bài: Viết chương trình tính số thứ n của dãy fibonacci biết dãy f(n) = f(n-1) + f(n-2), n > 2 và f(1) = 1, f(2) = 1.
// Đầu vào: Một số nguyên dương duy nhất n (0 < n <= 50).
// Đầu ra: Một số nguyên duy nhất là f(n).
// Ví dụ:
// input:
// 3
// output:
// 2

function fibo2(n)
    {
        var a = 0, b=1, c = a + b;
        if(n ==0) return a;
        for (var i = 2; i <= n ; i++)
    {
    c = a + b;;
    a = b;
    b = c;  
    }
        return b;
    }

process.stdin.once("data",(input) =>
                   {
                     var n = parseInt(input.toString());
                     var f2 = fibo2(n);
                     console.log(f2);
                     process.exit();
                   }
                   );

// Bài 30

// Đề bài: Nhập vào một số nguyên n (0 < n <= 10 tỷ). In ra số đảo ngược của số n.
// Đầu vào: Một số n.
// Đầu ra: Một số là số đảo ngược của n.
// Ví dụ:
// input:
// 123
// output:
// 321

process.stdin.once("data",(input)=>
{
	var inp = input.toString().split("").reverse().join('');
	var n1 = parseFloat(inp);
    var n2 = n1 * Math.sign(inp)

    console.log(n2);
}
);

//Bài 31

// Đề bài: Nhập vào một số nguyên dương n. Tìm chữ số lớn nhất trong các chữ số mà n có.
// Đầu vào: Một số n.
// Đầu ra: Một số là chữ số lớn nhất có trong n.
// Ví dụ:
// input:
// 123
// output:
// 3

process.stdin.once("data",(input)=>
{
	var n = input.toString().split('');
    var max = Math.max.apply(Math,n);
    console.log(max);
}
);

// Bài 32

// Đề bài: Nhập vào một số nguyên dương n. Tính tổng của n và số đảo ngược của nó.
// Đầu vào: Một số n.
// Đầu ra: Tổng cần tính.
// Ví dụ:
// input:
// 123
// output:
// 444


process.stdin.once("data",(input)=>
{
	var imp = input.toString();
    var m1 = parseFloat(imp);
    
	var inp = input.toString().split("").reverse().join('');
	var n1 = parseFloat(inp);
    var n2 = n1 * Math.sign(inp)
	
    var kq = m1 + n2; 
    console.log(kq);
}
);

//Bài 39

// Đề bài: Nhập vào mảng gồm n số nguyên. Tìm số lớn nhất và nhỏ nhất trong mảng.
// Đầu vào: Dòng đầu tiên là số nguyên n. Dòng thứ 2 là mảng n số nguyên, các số cách nhau bởi dấu cách.
// Đầu ra: Một dòng gồm 2 số là số lớn nhất và nhỏ nhất trong mảng cách nhau bởi dấu cách.
// Ví dụ:
// input:
// 3
// 1 2 3
// output:
// 3 1

function findMin(a)
{
  var min = a[0];
  for( var x of a)
  {
    if( x < min )
    {
      min = x;
    }
  }
  return min;
}

function findMax(a)
{
  var max = a[0];
  for( var x of a)
  {
    if( x > max )
    {
      max= x;
    }
  }
  return max;
}

process.stdin.once("data",(input)=>
{
	var lines = input.toString().split('\n');
    var n = parseInt(lines[0]);
    var a = lines[1].split(' ').map(Number);
    var min = findMin(a);
    var max = findMax(a);
    console.log(max + " " + min);
    process.exit();
}
);

// Bài 42

// Đề bài: Cho một mảng n số nguyên. Tính trung bình các số nguyên tố trong mảng.
// Đầu vào: Dòng đầu tiên là số nguyên n. Dòng thứ 2 là mảng n số nguyên, các số cách nhau bởi dấu cách.
// Đầu ra: Một số là trung bình các số nguyên tố. Kết quả làm tròn đến 2 chữ số thập phân. Nếu dãy không có số nguyên tố, in ra "NOT FOUND"
// Ví dụ:
// input:
// 3
// 4 3 2
// output:
// 2.50

function isPrime(n)
{
  if ( n < 2 ) return false;
  for (var i = 2; i <= Math.sqrt(n); i++)
  {
    if ( n % i == 0 )
      return false;
  }
  return true;
  
}

process.stdin.once("data",(input)=>
{
	var lines = input.toString().split('\n');
    var m = parseInt(lines);
    var n = parseInt(lines[0]);
    var a = lines[1].split(' ').map(Number);
    var sum = 0;
    var cnt = 0;
    for( var x of a)
    {
    	if (isPrime(x))
    	{
        	sum += x;
            cnt++;
    	}
        
    }
    if( cnt == 0)
    {
    console.log("NOT FOUND");    
    }
    else
    {
    	var kq = sum / cnt;
        console.log(kq.toFixed(2))
    }
    process.exit();
});


//Bài 43 + 44 (tính tổng)

// Đề bài: Cho một mảng n số nguyên. Tìm và in ra các số nguyên tố trong mảng.
// Đầu vào: Dòng đầu tiên là số nguyên n. Dòng thứ 2 là mảng n số nguyên, các số cách nhau bởi dấu cách.
// Đầu ra: Một dòng gồm nhiều số cách nhau bởi dấu cách là các số nguyên tố trong mảng. Các số này theo thứ tự như thứ tự trong mảng ban đầu. Nếu dãy không có số nguyên tố, in ra "NOT FOUND"
// Ví dụ:
// input:
// 3
// 4 3 2
// output:
// 3 2

function isPrime(n)
{
  if ( n < 2 ) return false;
  for ( var  i = 2; i <= Math.sqrt(n); i++)
  {
    if ( n % i == 0 )
      return false;
  }
  return true;
}

process.stdin.once("data",(input)=>
{
	var lines = input.toString().split('\n');
    var n = parseInt(lines[0]);
    var a = lines[1].split(' ').map(Number);
    //var sum =0;
    var cnt =0;
    for ( var x of a)
    {
    	if(isPrime(x))
        {
            process.stdout.write(x + " " ); // bài 44 thì bỏ này
            // Bài 44
            //sum += x
            cnt++;
        }
    }
    if( cnt == 0)
    {
    	console.log("NOT FOUND");
    }
    // else
    // {
    // var avg = sum / cnt;
    // console.log(avg.toFixed(2));
    // }
    process.exit();
}
);

// Bài 45

// Đề bài: Cho một mảng n số nguyên. Tìm và in ra các số chính phương trong mảng.
// Đầu vào: Dòng đầu tiên là số nguyên n. Dòng thứ 2 là mảng n số nguyên, các số cách nhau bởi dấu cách.
// Đầu ra: Một dòng gồm nhiều số cách nhau bởi dấu cách là các số chính phương trong mảng. Các số này theo thứ tự như thứ tự trong mảng ban đầu. Nếu dãy không có số chính phương, in ra "NOT FOUND"
// Ví dụ:
// input:
// 3
// 4 3 2
// output:
// 4

function isPrefect(n)
{
  if( n < 0) return false;
  var x = parseInt(Math.sqrt(n));
  if (x*x ==n) return true;
  return false;
}

process.stdin.once("data",(input)=>
{
	var line = input.toString().split('\n');
    var a = line[1].split(' ').map(Number);
    
    var cnt = 0
    for( var x of a)
    {
    	if(isPrefect(x))
        {
        	process.stdout.write(x + ' ' );
            cnt++;
        }
    }
    if(cnt ==0) console.log("NOT FOUND");
    process.exit();
}
);