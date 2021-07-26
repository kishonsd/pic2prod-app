const fs = require('fs')
const path = require('path')
const axios = require('axios')
const appRoot = require('app-root-path').path
const FileSaver = require('file-saver')
const downloadDir = path.join(appRoot, 'downloads')

if (!fs.existsSync(downloadDir)) fs.mkdirSync(downloadDir)

async function download (product) {
    if (!product.image) return false

    const [blob, filePath] = await axios.get(product.image, {
        responseType: 'arraybuffer',
    })
        .then(async (response) => {
            let headers = response.headers['content-disposition'];
            const filename = headers.split("inline; filename*=utf-8''")[1]
            const blob = Buffer.from(response.data)
            return [
                blob,
                path.join(downloadDir, filename)
            ]
        })

    fs.writeFileSync(filePath, blob)

    return [blob, filePath]
}

download({
    image: "https://firebasestorage.googleapis.com/v0/b/pic2prod-17012.appspot.com/o/products%2FVTmuvma3ZQXjn6HwsBN3VtAxQCC3%2F211298244_3519029954866838_840905221339869114_n.jpg?alt=media&token=bea2ea57-83a4-4171-88e7-dfdad2abb899"
})



module.exports = download