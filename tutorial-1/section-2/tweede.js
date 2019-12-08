let log = {
    information  : function(info){
        console.log("information: " + info )
    },
    fault : function() {
        console.log("Fault : " + fault)
    }
};
module.exports= log // bu modülü log ismiyle dışarı çıkar.
// Bunu yapmazsak diğer dosyalar log modulünü kullanamaz.