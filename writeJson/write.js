/**
 * Das Problem bei dieser Klasse ist, dass ich nicht weiss wie ich eine ganze Klasse aufrufe, damit
 * es funktioniert. Das Problem liegt dabei, dass es sonst eine function in einer function ist.
 * fs.writeFile ist eine function, daher funktioniert dies nicht. In dem Directory writeJsonCorrect
 * habe ich eine Klasse erstellt, die in ein JSON-File schriebt. Dies funktioniert, da ich die
 * Klasse niergends aufrufe und daher auch keine function in einer function ist. Hier habe ich es
 * nicht geschafft, die function richtig aufzurufen, wenn ich den Registrieren Button drücke.
 */
function writeJson() {
    const fs = require('fs')
    const customer = {
        name: "Newbie Co.",
        order_count: 0,
        address: "Po Box City",
    }
    writeInToFile(JSON.stringify(customer, fs))
}

function writeInToFile(data, fs) {
    console.log("writing in file")
    try{
        fs.writeFile('./user.json', data, (err) => {

            // In case of a error throw err.
            if (err) throw err;
        })
    }catch (e) {
        console.log(e)
    }

}