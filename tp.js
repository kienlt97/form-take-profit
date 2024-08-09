function Calc() {
    var opt = document.getElementById("opt").value;
    var entry_price = document.getElementById("entry_price").value;
    var stop_price = document.getElementById("stop_price").value;
   
    var lever = document.getElementById("lever").value;
    var limit_cut_loss = document.getElementById("limit_cut_loss").value;
    var invest_money = document.getElementById("invest_money").value;
    var fee = document.getElementById("fee").value;
    
    if (entry_price == "" || stop_price == "" || invest_money == "" || lever == "" || limit_cut_loss == "" || fee == "") {
        alert("Thiếu dữ liệu. Kiểm tra lại !!!");
        return false;
    }

    var profit = 0
    if (opt === 'SHORT') {
        profit =(entry_price-stop_price)/entry_price*lever*invest_money + fee*((entry_price-stop_price)/entry_price*lever*invest_money)
        var cut_loss = entry_price-(limit_cut_loss*entry_price/(100*lever))
        document.getElementById("profit").value = profit.toFixed(2);
        document.getElementById("cut_loss").value = cut_loss.toFixed(2);
     } else {
        profit =(stop_price-entry_price)/entry_price*lever*invest_money - fee*((stop_price-entry_price)/entry_price*lever*invest_money)
        var cut_loss = entry_price*(limit_cut_loss/(100*lever)+1)
        document.getElementById("profit").value = profit.toFixed(2);
        document.getElementById("cut_loss").value = cut_loss.toFixed(2);
    }
    if (profit < 0) {
        profit = profit.toFixed(2);
    } else {
        profit = (Math.round(profit * 100) / 100).toFixed(2);
    }

    var profit_percent = (profit/invest_money*100).toFixed(2) + ' %'
    document.getElementById("profit_percent").value = profit_percent;

    document.getElementById("profit_percent").style.backgroundColor = profit > 0 ? "green" : "red";
    document.getElementById("profit").style.backgroundColor = profit > 0 ? "green" : "red";
    document.getElementById("profit_percent").style.color = "white";
    document.getElementById("profit").style.color = "white";

    var volume = invest_money*lever
    document.getElementById("volume").value = volume;


    var ans = eval(val1 + opt + val2);
    document.getElementById("ans").value = ans;
}