var coconut = 50;
var banana = 30;
var apple = 120;

var Acc_balance = 150;
function checkbalance(amt) {
    if (Acc_balance - amt > 0) {
        //console.log("heeeeeeeee")
        return true
    } else {
        console.log("Insuffifient Funds")
        return false
    }
}

function coconutprice() {
    if (checkbalance(coconut)) {
        Acc_balance = Acc_balance - coconut;
        console.log("Enjoy coconut")

    }
    console.log("\n Balance", Acc_balance.toFixed(2))

}
coconutprice()

function bananaprice() {
    if (checkbalance(banana)) {
        Acc_balance = Acc_balance - banana;
        console.log(Acc_balance)
    } console.log("\n Balance", Acc_balance.toFixed(2))


}
bananaprice()

function appleprice() {
    if (checkbalance(apple)) {
        Acc_balance = Acc_balance - apple;
        console.log(Acc_balance)
    } console.log("\n Balance", Acc_balance.toFixed(2))

}
appleprice()


// function all(mlist) {
//     for (var i = 0, num = mlist.length; i < num; i++) {
//         mlist[i]();
//     }
// }
// all()