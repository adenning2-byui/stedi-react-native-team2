import helloBrodie from "../utils/HelloBrodie.js"

it("Should say Brodie", () =>{
    const brodieString=helloBrodie();
    console.log(brodieString);

    expect(brodieString).toBe("Brodie")
})