function rectangle(length,width) {
    this.length=length;
    this.width=width;

    this.import=function () {
        length = +prompt("Nhap chieu dai: ");
        width = +prompt("Nhap chieu rong: ");
    }
    this.area=function () {
        area=length * width;
        document.write("Dien tich hinh chu nhat la: " +area+ "<br/>");
    }
    this.perimeter=function () {
        let perimeter=(length+width)/2;
        document.write("Chu vi hinh chu nhat la: " +perimeter+ "<br/>");
    }
}
let abc =new rectangle(4,5);
abc.area();
abc.perimeter();
abc.import();
document.write("chieu dai la: " +abc.length+ "<br/>");
document.write("Chieu rong la: " +abc.width);