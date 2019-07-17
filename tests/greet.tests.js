describe("The greet factory functions", function(){
    it("should able to greet the input name", function(){
    
        let greet = greetBack();

        greet.setName('Anna');
        assert.equal('Anna', greet.getName());

        let greet2 = greetBack();

        greet2.setName('John');
        assert.equal('John', greet2.getName());
    })
});