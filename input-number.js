module.exports = function(app){
    var InputNumber = Object.getPrototypeOf(app).InputNumber = new app.Component("input-number");
    //InputNumber.debug = true;
    InputNumber.createdAt      = "2.0.0";
    InputNumber.lastUpdate     = "2.0.0";
    InputNumber.version        = "1";
    // InputNumber.factoryExclude = true;
    // InputNumber.loadingMsg     = "This message will display in the console when component will be loaded.";
    // InputNumber.requires       = [];

    // InputNumber.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return InputNumber;
}