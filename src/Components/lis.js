const regex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i


    function tes() {
    try {
        const res =  fetch('https://cdn.fakercloud.com/avatars/laasli_128.jpg')
        if (res.status === 200) {
            console.log(res)
        }
        else {
            return false
        }
    }
    catch (err) {
        return false
    }
}
console.log('https://cdn.fakercloud.com/avatars/laasli_128.jpg'.includes('cdn'))