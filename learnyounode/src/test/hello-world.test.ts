// import "../hello-world" -> No podemos llamar aqui porque sino se llama dos veces

test("deberia imprimir 'HELLO WORLD' en consola", ()=>{
    console.log = jest.fn()

    require("../hello-world")

    expect(console.log).toHaveBeenCalledWith("HELLO WORLD")
})