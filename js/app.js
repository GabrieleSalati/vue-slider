const { createApp } = Vue

createApp({
    data() {
        return {
            movie: {
                title: "Blade Runner 2049",
                category: "Sci-fi Thriller Action",
                length: "163 minutes",
                images: [
                    "img\image1.jpeg",
                    "img\image 2.jpg",
                    "img\image3.jpg",
                    "img\image4.jpg",
                    "img\image5.jpg"
                ],
            }
        }
    }
}).mount('#root')