module.exports = function(){
    let InputNumber = Object.getPrototypeOf(fw).InputNumber = class InputNumber extends fw.Component{
        static {
            this.debug = false;
            this.createdAt  = "3.0.0";
            this.lastUpdate = "3.0.0";
            this.version = "2.0.0";
            this.tpl = utils.getNodeFromString(require('bundle-tpl:./input-number.html')).outerHTML;
            // this.describe();
        }
        onCreate(){
            let inputNumber = this;
            this.input = this.el;
            this.input.classList.add('input-number__input','exclude_component');
            this.input.classList.remove('input-number');
            this.el = utils.htmlToNode('<div class="input-number__wrapper"></div>');
            this.input.after(this.el);

            this.buttonsWrapper = utils.htmlToNode('<div class="input-number__buttonsWrapper"></div>');
            this.buttonPlus     = utils.htmlToNode('<div class="input-number__btn plus">+</div>');
            this.buttonMinus    = utils.htmlToNode('<div class="input-number__btn minus">-</div>');

            this.buttonsWrapper.append(this.buttonPlus,this.buttonMinus);
            this.el.append(this.input,this.buttonsWrapper);

            this.buttonPlus.addEventListener('click',function(){
                if(inputNumber.input.readOnly || inputNumber.input.disabled){
                    return;
                }
                if (inputNumber.input.step == "any") {
                    inputNumber.input.step = 1;
                    inputNumber.input.stepUp();
                    inputNumber.input.step = "any";
                } else {
                    inputNumber.input.stepUp();
                }
                inputNumber.input.trigger('change');
            });
            this.buttonMinus.addEventListener('click',function(){
                if(inputNumber.input.readOnly || inputNumber.input.disabled){
                    return;
                }
                if (inputNumber.input.step == "any") {
                    inputNumber.input.step = 1;
                    inputNumber.input.stepDown();
                    inputNumber.input.step = "any";
                } else {
                    inputNumber.input.stepDown();
                }
                inputNumber.input.trigger('change');
            });

            this.input.addEventListener('change',function(){
                if (this.value != '' && parseInt(this.value) < parseInt(this.getAttribute('min')))
                    this.value = this.getAttribute('min');
                if (this.value != '' && parseInt(this.value) > parseInt(this.getAttribute('max')))
                    this.value = this.getAttribute('max');
            });

            this.log('onCreate','',true)
        }
    }

    document.querySelectorAll('input[type="number"]:not(.custom):not(.input-number):not(.exclude_component)').forEach((el)=>{
        new fw.InputNumber(el);
    })

    return InputNumber;
}
