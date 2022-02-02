// const app = new Vue({
//     el: '#app',
//     data: {
//         product: 'Socks',
//         description: 'Made with love by Ulala comapny using the best cotton in the world',
//         image: './assets/images/socks_green.jpg',
//         alt: 'Picture of green socks'
//     }
// })

const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            description: 'Made with love by Ulala comapny using the best cotton in the world',
            image: './assets/images/socks_green.jpg',
            alt: 'Picture of green socks',
            href: 'https://www.vuemastery.com/',
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S','M','L'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ]
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})
