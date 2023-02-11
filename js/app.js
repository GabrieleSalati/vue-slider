const { createApp } = Vue

createApp({
    data() {
        return {
            movie: {
                title: "Blade Runner 2049",
                category: "Sci-fi Thriller Action",
                length: 163,
                images: [
                    "img/image1.jpeg",
                    "img/image 2.jpg",
                    "img/image3.jpg",
                    "img/image4.jpg",
                    "img/image5.jpg"
                ],

                activeImage: 0
            }
        }
    },

    methods: {
        previous() {
            if (this.movie.activeImage - 1 < 0) {
                this.movie.activeImage = this.movie.images.length - 1;
            }
            else {
                this.movie.activeImage--;
            }
        },

        next() {
            if (this.movie.activeImage + 1 >= this.movie.images.length) {
                this.movie.activeImage = this.movie.activeImage = 0;
            }
            else {
                this.movie.activeImage++;
            }
        },

        switchActive(index) {
            this.movie.activeImage = index;
        }
    }
}).mount('#root')