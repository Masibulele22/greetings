describe("The greet factory functions", function(){
    
    it("should able to greet the input name", function(){
    
        let greet = greetBack();

        greet.setName('Anna');
        assert.equal('Anna', greet.getName());

        let greet2 = greetBack();

        greet2.setName('John');
        assert.equal('John', greet2.getName());

        let greet3 = greetBack();

        greet3.setName('Jim');
        assert.equal('Jim', greet3.getName());
    })

    it("should able to return a greeting in Xhosa", function(){
    
        let greet = greetBack();

        greet.setName('Anathi');
        assert.equal('Anathi', greet.getName());

    })

    it("should able to return a greeting in Afrikaans", function(){
    
        let greet = greetBack();

        greet.setName('Anna');
        assert.equal('Anna', greet.getName());

    })

    it("should able to return a greeting in English", function(){
    
        let greet = greetBack();

        greet.setName('Anne');
        assert.equal('Anne', greet.getName());

    })

});