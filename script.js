// 餐點選項與資訊
const options = {
    main: [
        { name: '義大利麵', image: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '濃郁的番茄醬汁搭配Q彈麵條，經典義式美味。', calories: '約600大卡' },
        { name: '火鍋', image: 'https://global-blog.cpcdn.com/tw/2020/11/1326513_m.jpg', description: '熱騰騰的湯底，搭配新鮮蔬菜與肉片，溫暖身心。', calories: '約800大卡' },
        { name: '燒烤', image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '香氣撲鼻的烤肉，炭火烘烤出獨特風味。', calories: '約700大卡' },
        { name: '日式料理', image: 'https://www.gomaji.com/blog/wp-content/uploads/2021/04/IMG_8431.jpeg', description: '新鮮壽司與刺身，展現日式精緻飲食文化。', calories: '約500大卡' },
        { name: '滷肉飯', image: 'https://www.foodnext.net/dispPageBox/getFile/GetImg.aspx?FileLocation=%2fPJ-FOODNEXT%2fFiles%2f&FileName=photo-28196-i.jpg', description: '香濃滷汁淋在白飯上，台灣經典小吃。', calories: '約550大卡' },
        { name: '排骨麵', image: 'https://www.buygood.com.tw/images/n01-L.jpg', description: '軟嫩排骨搭配彈牙麵條，湯頭濃郁。', calories: '約650大卡' },
        { name: '水餃', image: 'https://cdn.cybassets.com/s/files/19302/ckeditor/pictures/content_faec420a-89a8-4403-aa08-fa651ca1462e.jpg', description: '鮮美內餡包裹在薄皮中，蒸煮皆宜。', calories: '約400大卡' },
        { name: '鍋貼', image: 'http://chichiaofoods.com/upload/web/photo/%e9%8d%8b%e8%b2%bc.jpg', description: '外皮酥脆，內餡多汁的煎餃。', calories: '約450大卡' },
        { name: '漢堡', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '多汁牛肉漢堡，搭配新鮮蔬菜與醬料。', calories: '約700大卡' },
        { name: '披薩', image: 'https://alinalife.tw/wp-content/uploads/2024/10/IMG_7211.jpg', description: '酥脆餅皮，滿滿起司與豐富配料。', calories: '約800大卡' }
    ],
    snack: [
        { name: '鬆餅', image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '鬆軟香甜的鬆餅，搭配奶油或果醬。', calories: '約400大卡' },
        { name: '雞蛋糕', image: 'https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fcdn-smiletaiwan.cw.com.tw%2Farticle%2F202107%2Farticle-61010f74371e9.jpg/?w=1600&format=webp', description: '蓬鬆可口的雞蛋糕，帶有淡淡蛋香。', calories: '約300大卡' },
        { name: '雞排', image: 'https://www.foodnext.net/dispPageBox/getFile/GetImg.aspx?FileLocation=%2fPJ-FOODNEXT%2fFiles%2f&FileName=photo-09948-i.jpg', description: '外酥內嫩的炸雞排，夜市必吃小吃。', calories: '約600大卡' },
        { name: '鹹酥雞', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/TWBC_Taiwanese_fried_chicken_20070303.jpg/1024px-TWBC_Taiwanese_fried_chicken_20070303.jpg', description: '酥脆多汁的鹹酥雞，撒上胡椒鹽。', calories: '約500大卡' },
        { name: '豆花', image: 'https://live.staticflickr.com/65535/51197802234_bcf5e5c405_c.jpg', description: '滑嫩豆花，搭配糖水或花生。', calories: '約200大卡' },
        { name: '臭豆腐', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/%E8%A5%BF%E9%95%87%E8%87%AD%E8%B1%86%E8%85%90.jpg/250px-%E8%A5%BF%E9%95%87%E8%87%AD%E8%B1%86%E8%85%90.jpg', description: '香脆外皮，獨特氣味的台灣小吃。', calories: '約350大卡' },
        { name: '花枝丸', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Food_%E6%BE%8E%E6%B9%96%E8%8A%B1%E6%9E%9D%E4%B8%B8%2C_%E6%9B%89%E7%90%B3%E9%A3%9F%E5%A0%82%2C_%E5%8F%B0%E5%8C%97_%2819814409766%29.jpg/330px-Food_%E6%BE%8E%E6%B9%96%E8%8A%B1%E6%9E%9D%E4%B8%B8%2C_%E6%9B%89%E7%90%B3%E9%A3%9F%E5%A0%82%2C_%E5%8F%B0%E5%8C%97_%2819814409766%29.jpg', description: 'Q彈的花枝丸，適合炸或煮湯。', calories: '約250大卡' },
        { name: '車輪餅', image: 'https://www.foodnext.net/dispPageBox/getFile/GetImg.aspx?FileLocation=%2fPJ-FOODNEXT%2fFiles%2f&FileName=photo-46019-i.jpg', description: '外皮酥軟，內餡紅豆或奶油。', calories: '約300大卡' },
        { name: '蔥油餅', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Spring_onion_pancake_2013.JPG/330px-Spring_onion_pancake_2013.JPG', description: '香酥蔥油餅，滿滿蔥香。', calories: '約350大卡' }
    ]
};

let currentOptions = [];
let currentAngle = 0;
let spinning = false;

// 備用圖片 URL
const fallbackImage = 'https://images.unsplash.com/photo-1490818387583-1b2a9f2b9d9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60';

// 取得畫布
const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const radius = canvas.width / 2;

// 選擇餐點類型
function selectCategory(category) {
    currentOptions = options[category];
    document.getElementById('selection').classList.add('hidden');
    document.getElementById('wheel-container').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden'); // 隱藏結果卡片
    drawWheel();
}

// 繪製轉盤
function drawWheel() {
    const numOptions = currentOptions.length;
    const arc = 2 * Math.PI / numOptions;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 繪製每個扇形
    for (let i = 0; i < numOptions; i++) {
        ctx.beginPath();
        ctx.fillStyle = `hsl(${i * 360 / numOptions}, 70%, 50%)`;
        ctx.moveTo(radius, radius);
        ctx.arc(radius, radius, radius, i * arc, (i + 1) * arc);
        ctx.fill();
        ctx.closePath();

        // 繪製文字
        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(i * arc + arc / 2);
        ctx.fillStyle = 'white';
        ctx.font = '16px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(currentOptions[i].name, radius - 20, 10);
        ctx.restore();
    }

    // 繪製指針
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.moveTo(radius, 0);
    ctx.lineTo(radius - 10, 20);
    ctx.lineTo(radius + 10, 20);
    ctx.fill();
}

// 旋轉轉盤
function spinWheel() {
    if (spinning) return;
    spinning = true;
    document.getElementById('result').classList.add('hidden'); // 轉動前隱藏結果卡片
    const spinAngle = Math.random() * 360 + 720; // 隨機旋轉2-3圈
    let startTime = null;

    function animate(time) {
        if (!startTime) startTime = time;
        const progress = (time - startTime) / 2000; // 旋轉2秒
        currentAngle = spinAngle * progress;

        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate((currentAngle * Math.PI) / 180);
        ctx.translate(-radius, -radius);
        drawWheel();
        ctx.restore();

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            spinning = false;
            showResult();
        }
    }

    requestAnimationFrame(animate);
}

// 顯示結果
function showResult() {
    const numOptions = currentOptions.length;
    const arc = 360 / numOptions;
    const normalizedAngle = ((currentAngle % 360) + 360) % 360;
    const index = Math.floor((360 - normalizedAngle) / arc) % numOptions;
    const selectedFood = currentOptions[index];
    
    // 清空舊內容
    const foodName = document.getElementById('food-name');
    const foodImage = document.getElementById('food-image');
    const foodDescription = document.getElementById('food-description');
    const foodCalories = document.getElementById('food-calories');
    
    foodName.textContent = '';
    foodImage.src = '';
    foodDescription.textContent = '';
    foodCalories.textContent = '';

    // 設置新內容
    foodName.textContent = `你今天吃：${selectedFood.name}！`;
    foodDescription.textContent = selectedFood.description;
    foodCalories.textContent = `熱量：${selectedFood.calories}`;

    // 處理圖片載入
    foodImage.src = selectedFood.image;
    foodImage.onload = () => {
        document.getElementById('result').classList.remove('hidden');
    };
    foodImage.onerror = () => {
        foodImage.src = fallbackImage;
        document.getElementById('result').classList.remove('hidden');
    };
}

// 重置到選擇畫面
function resetSelection() {
    currentOptions = [];
    currentAngle = 0;
    document.getElementById('wheel-container').classList.add('hidden');
    document.getElementById('selection').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}