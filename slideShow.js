slideShow=document.createElement('style');
slideShow.innerHTML=".slideshow-container {position: relative; width: 100%; max-width: 600px; height: 400px; overflow: hidden; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.15); background-color: #FFF;} .slideshow-container img {width: 100%; height: 100%; /* object-fit: cover; */ object-fit: contain; transition: opacity 0.8s ease-in-out; opacity: 0; position: absolute; top: 0; left: 0;} .slideshow-container img.active {opacity: 1;} ";
document.head.appendChild(slideShow);
        const folderPath = 'img/informatique/';
        const images = ['Sans titre.png', 'Sans titre2.png', 'Sans titre3.png', 'Sans titre4.png', 'Sans titre5.png', 'Sans titre6.png', 'Sans titre7.png', 'Sans titre8.png', 'Sans titre9.png', '103692973_10213718725402310_616220319482507454_n.jpg', '2020-12-10-1.jpg', '20201205_130307.jpg', '20201217_123933.jpg', '20201217_123941.jpg', '20201217_123947.jpg', '20201217_123954.jpg', '20201217_124001.jpg', '20201217_124008.jpg', '20201217_124028.jpg', '20201217_124035.jpg', '20201218_102746.jpg', '20210605_154212.jpg', '49005482_10210432596931152_2475375281171333120_n.jpg', '49210930_10210432596611144_6432835173649219584_n.jpg', '502530261_10222990413948729_579010477740645728_n.jpg', '502676008_10222990414508743_6810867733056046108_n.jpg', '502744234_10222990414388740_1106133558402314364_n.jpg', '502973298_10222990412948704_8482223940161244002_n.jpg', '95935138_10213477068961050_3481464777484533760_n.jpg', 'Fotolia_25828130_S_page42.jpg', 'IMG_1967.JPG', 'IMG_1968.JPG'];
        const imgElement = document.getElementById('slideshow-image');
        let lastIndex = -1;
        function showRandomImage() {
            if (images.length === 0) return;
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * images.length);
            } while (randomIndex === lastIndex && images.length > 1);
            lastIndex = randomIndex;
            imgElement.style.opacity = 0;
            setTimeout(() => {
                imgElement.src = folderPath + images[randomIndex];
                imgElement.style.opacity = 1;
            }, 400); 
        }
        showRandomImage();
        setInterval(showRandomImage, 3000);
