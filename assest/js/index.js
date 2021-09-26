const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const contents = [
    {
        image : "./assest/img/icons/a1.png",
        name: "Tivi"
    },

    {
        image : "./assest/img/icons/a2.png",
        name: "Ưu đãi"
    },

    {
        image : "./assest/img/icons/a3.png",
        name: "Xtra"
    },

    {
        image : "./assest/img/icons/a4.gif",
        name: "Phone"
    },

    {
        image : "./assest/img/icons/a5.gif",
        name: "Mini game"
    },

    {
        image : "./assest/img/icons/a6.png",
        name: "Xtra"
    },

    {
        image : "./assest/img/icons/a7.png",
        name: "Vip"
    },

    {
        image : "./assest/img/icons/a8.png",
        name: "Quốc tế"
    },

]

const products = [
    {
        image : "./assest/img/imgDM/dm.png",
        name: "Áo"
    },

    {
        image : "./assest/img/imgDM/dm1.png",
        name: "Điện thoại"
    },

    {
        image : "./assest/img/imgDM/dm2.png",
        name: "Ti vi"
    },

    {
        image : "./assest/img/imgDM/dm3.png",
        name: "Laptop"
    },

    {
        image : "./assest/img/imgDM/dm4.png",
        name: "Máy ảnh"
    },

    {
        image : "./assest/img/imgDM/dm5.png",
        name: "Đồng hồ"
    },

    {
        image : "./assest/img/imgDM/dm6.png",
        name: "Giày"
    },

    {
        image : "./assest/img/imgDM/dm7.png",
        name: "Ám nước"
    },

    {
        image : "./assest/img/imgDM/dm8.png",
        name: "Bóng"
    },

    {
        image : "./assest/img/imgDM/dm9.png",
        name: "Xe"
    },

    {
        image : "./assest/img/imgDM/dm10.png",
        name: "Váy"
    },

    {
        image : "./assest/img/imgDM/dm11.png",
        name: "Bàn ăn"
    },

    {
        image : "./assest/img/imgDM/dm12.png",
        name: "Nồi"
    },

    {
        image : "./assest/img/imgDM/dm13.png",
        name: "Tủ quần áo"
    },

    {
        image : "./assest/img/imgDM/dm14.png",
        name: "Y tế"
    },

    {
        image : "./assest/img/imgDM/dm15.png",
        name: "Guốc"
    },

    {
        image : "./assest/img/imgDM/dm16.png",
        name: "Túi sách"
    },

    {
        image : "./assest/img/imgDM/dm171.png",
        name: "Nhẫn"
    },

    {
        image : "./assest/img/imgDM/dm18.png",
        name: "Bánh kẹo"
    },

    {
        image : "./assest/img/imgDM/dm19.png",
        name: "Sách"
    },

    

]

const productHots = [
    {
        image : "./assest/img/imgSP/SP1.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "68.500 đ",
        sold: "Đã bán 24,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP2.jpg",
        information: "[Mã 229FMCGSALE giảm 8% đơn 500K] Sữa Rửa Mặt Cosrx Low Ph Good Morning Gel Cleanser Dịu Nhẹ, Ngăn Ngừa Mụn 150ml",
        coins: "168.500 đ",
        sold: "Đã bán 21,24k"
    }, 

    {
        image : "./assest/img/imgSP/SP3.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "120.500 đ",
        sold: "Đã bán 34,6k"
    }, 

    {
        image : "./assest/img/imgSP/SP4.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "88.500 đ",
        sold: "Đã bán 2,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP5.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "108.500 đ",
        sold: "Đã bán 1,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP6.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "58.500 đ",
        sold: "Đã bán 4,2k"
    }, 
]

const productTodays = [
    {
        image : "./assest/img/imgSP/SP1.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "68.500 đ",
        sold: "Đã bán 24,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP2.jpg",
        information: "[Mã 229FMCGSALE giảm 8% đơn 500K] Sữa Rửa Mặt Cosrx Low Ph Good Morning Gel Cleanser Dịu Nhẹ, Ngăn Ngừa Mụn 150ml",
        coins: "168.500 đ",
        sold: "Đã bán 21,24k"
    }, 

    {
        image : "./assest/img/imgSP/SP3.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "120.500 đ",
        sold: "Đã bán 34,6k"
    }, 

    {
        image : "./assest/img/imgSP/SP4.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "88.500 đ",
        sold: "Đã bán 2,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP5.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "108.500 đ",
        sold: "Đã bán 1,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP6.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "58.500 đ",
        sold: "Đã bán 4,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP1.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "68.500 đ",
        sold: "Đã bán 24,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP2.jpg",
        information: "[Mã 229FMCGSALE giảm 8% đơn 500K] Sữa Rửa Mặt Cosrx Low Ph Good Morning Gel Cleanser Dịu Nhẹ, Ngăn Ngừa Mụn 150ml",
        coins: "168.500 đ",
        sold: "Đã bán 21,24k"
    }, 

    {
        image : "./assest/img/imgSP/SP3.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "120.500 đ",
        sold: "Đã bán 34,6k"
    }, 

    {
        image : "./assest/img/imgSP/SP4.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "88.500 đ",
        sold: "Đã bán 2,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP5.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "108.500 đ",
        sold: "Đã bán 1,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP6.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "58.500 đ",
        sold: "Đã bán 4,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP1.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "68.500 đ",
        sold: "Đã bán 24,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP2.jpg",
        information: "[Mã 229FMCGSALE giảm 8% đơn 500K] Sữa Rửa Mặt Cosrx Low Ph Good Morning Gel Cleanser Dịu Nhẹ, Ngăn Ngừa Mụn 150ml",
        coins: "168.500 đ",
        sold: "Đã bán 21,24k"
    }, 

    {
        image : "./assest/img/imgSP/SP3.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "120.500 đ",
        sold: "Đã bán 34,6k"
    }, 

    {
        image : "./assest/img/imgSP/SP4.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "88.500 đ",
        sold: "Đã bán 2,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP5.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "108.500 đ",
        sold: "Đã bán 1,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP6.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "58.500 đ",
        sold: "Đã bán 4,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP1.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "68.500 đ",
        sold: "Đã bán 24,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP2.jpg",
        information: "[Mã 229FMCGSALE giảm 8% đơn 500K] Sữa Rửa Mặt Cosrx Low Ph Good Morning Gel Cleanser Dịu Nhẹ, Ngăn Ngừa Mụn 150ml",
        coins: "168.500 đ",
        sold: "Đã bán 21,24k"
    }, 

    {
        image : "./assest/img/imgSP/SP3.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "120.500 đ",
        sold: "Đã bán 34,6k"
    }, 

    {
        image : "./assest/img/imgSP/SP4.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "88.500 đ",
        sold: "Đã bán 2,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP5.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "108.500 đ",
        sold: "Đã bán 1,2k"
    }, 

    {
        image : "./assest/img/imgSP/SP6.jpg",
        information: "Áo Thun Nam Cổ Tròn Form Rộng Streetwear 2s Clothing Áo Phông Unisex Basic Cotton Oversize Giá Rẻ In Phi Hành Gia TV40",
        coins: "58.500 đ",
        sold: "Đã bán 4,2k"
    }, 
]

const contentBox = $('.content--main')
const productBox = $('.list--product')
const productHotBox = $('.product--hot')
const productTodayBox = $('.product--today')
const modal = $('.modal')
const btnClose = $('.icon--close')
const btnLogin = $('#login')
const login = $('.text--register')
const register = $('.text--login')
const formLogin = $('.form--login')
const formRegister = $('form--register')

const htmlcontents = contents.map(function (content) {
    return `
        <div class="content--main-items">
            <img src="${content.image}" alt="#">
            <p>${content.name}</p>
        </div>
    `
})

contentBox.innerHTML = htmlcontents.join('')

const htmlproducts = products.map(function (product) {
    return `
        <div class="product">
            <img src="${product.image}" alt="#">
            <p>${product.name}</p>
        </div>
    `
})

productBox.innerHTML = htmlproducts.join('')

const htmlproductHots = productHots.map(function (productHot) {
    return `
        <div class="hot">
            <img src="${productHot.image}" alt="#">
            <div class="hot--content">
                <p class="hot--content-text">${productHot.information}</p>
                <div class="hot--content-main">
                    <p class="coins">${productHot.coins}</p>
                    <p class="coins--content-sold">${productHot.sold}</p>
                </div>
            </div>
        </div>
    `
})

productHotBox.innerHTML = htmlproductHots.join('')

const htmlproductTodays = productTodays.map(function (productToday) {
    return `
        <div class="today">
            <img src="${productToday.image}" alt="#">
            <div class="today--content">
                <p class="today--content-text">${productToday.information}</p>
                <div class="today--content-main">
                    <p class="coins">${productToday.coins}</p>
                    <p class="coins--content-sold">${productToday.sold}</p>
                </div>
            </div>
        </div>
    `
})

productTodayBox.innerHTML = htmlproductTodays.join('')

btnLogin.onclick = function () {
    modal.classList.add('active--modal')
}

btnClose.onclick = function () {
    modal.classList.remove('active--modal')
}

login.onclick = function () {
    alert('')
}