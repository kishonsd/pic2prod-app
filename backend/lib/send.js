    async hiboutik () {
        logger.info('send hiboutik =>', this.product.name)
        // post product
        const product_ = {}
        for (let key in this.product) {
            if (key === 'name') product_['product_model'] = this.product[key]
            if (key === 'price') product_['product_price'] = this.product[key]
        }

        const form = new FormData()
        if (this.meta) Object.keys(this.meta).forEach(k => form.append(k, this.meta[k]))
        Object.keys(product_).filter(k => this.meta ? !Object.keys(this.meta).includes(k) : k).forEach(k => form.append(k, product_[k]))

        const [productId, err] = await axios({
            url: `${this.credentials.domain}/api/products`,
            method: 'POST',
            data: form,

            auth: {
                username: this.credentials.username,
                password: this.credentials.password
            }
        })
            .then(response => [response.data.product_id, false])
            .catch(err => [false, err])

        logger.info(`hiboutik product => ${productId}`)

        // upload image
        const formImage = new FormData()
        const [blob, filePath] = await download(this.product)
        formImage.append('image', blob)
        await axios.post(`${this.credentials.domain}/api/products_images/${productId}`, formImage, {
            auth: {
                username: this.credentials.username,
                password: this.credentials.password
            }
        })

        logger.info(`hiboutik image => ${filePath}`)
    }
