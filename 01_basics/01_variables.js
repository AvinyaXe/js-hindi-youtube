const accountId = 12243
let accountEmail = "avinyaXe@google.com"
var accountPassword = "12345"
accountCity = "Kurukshetra"

// accountId = 2 // not allowed

accountEmail = "buce@wayn"

/* do not use 'var' due to problem of block scope and functional scope
*/

accountPassword = "32452"
accountCity = "Mumbai"

let accountState

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])