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