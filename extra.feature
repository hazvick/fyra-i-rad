    
    Scenario: Testa om boten plaserar brickan varje gång i samma ordning.
        Given att spelet startas med en dumbot
        And jag alltid placerar mina brickor i kolumn 0,1,2,3 
        When jag spelar spelet likadant två gånger
        Then ska dumbot placerat brickorna olika i båda spelen

