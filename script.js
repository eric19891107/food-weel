// 餐點選項與資訊
const options = {
    main: [
        { name: '義大利麵', image: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '濃郁的番茄醬汁搭配Q彈麵條，經典義式美味。', calories: '約600大卡' },
        { name: '火鍋', image: 'https://images.unsplash.com/photo-1617093727343-374a7c76b286?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '熱騰騰的湯底，搭配新鮮蔬菜與肉片，溫暖身心。', calories: '約800大卡' },
        { name: '燒烤', image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '香氣撲鼻的烤肉，炭火烘烤出獨特風味。', calories: '約700大卡' },
        { name: '日式料理', image: 'https://images.unsplash.com/photo-1574482621810-486ad1db1b83?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '新鮮壽司與刺身，展現日式精緻飲食文化。', calories: '約500大卡' },
        { name: '滷肉飯', image: 'https://images.unsplash.com/photo-1628243524516-b17e86f1248f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '香濃滷汁淋在白飯上，台灣經典小吃。', calories: '約550大卡' },
        { name: '排骨麵', image: 'https://images.unsplash.com/photo-1612929633738-8f7c0e4c3176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '軟嫩排骨搭配彈牙麵條，湯頭濃郁。', calories: '約650大卡' },
        { name: '水餃', image: 'https://images.unsplash.com/photo-1610451662113-5c79d6f8f589?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '鮮美內餡包裹在薄皮中，蒸煮皆宜。', calories: '約400大卡' },
        { name: '鍋貼', image: 'https://images.unsplash.com/photo-1618166893741-2a2b430426fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '外皮酥脆，內餡多汁的煎餃。', calories: '約450大卡' },
        { name: '漢堡', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '多汁牛肉漢堡，搭配新鮮蔬菜與醬料。', calories: '約700大卡' },
        { name: '披薩', image: 'https://images.unsplash.com/photo-1571066811602-716837d8802b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '酥脆餅皮，滿滿起司與豐富配料。', calories: '約800大卡' }
    ],
    snack: [
        { name: '鬆餅', image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '鬆軟香甜的鬆餅，搭配奶油或果醬。', calories: '約400大卡' },
        { name: '雞蛋糕', image: 'https://images.unsplash.com/photo-1626082910497-b2987b6a567f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '蓬鬆可口的雞蛋糕，帶有淡淡蛋香。', calories: '約300大卡' },
        { name: '雞排', image: 'https://images.unsplash.com/photo-1601924994987-8f8e83e38d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '外酥內嫩的炸雞排，夜市必吃小吃。', calories: '約600大卡' },
        { name: '鹹酥雞', image: 'https://images.unsplash.com/photo-1626082927389-6cd7b82f27bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '酥脆多汁的鹹酥雞，撒上胡椒鹽。', calories: '約500大卡' },
        { name: '豆花', image: 'https://images.unsplash.com/photo-1626082910404-6d6e4f9c7704?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '滑嫩豆花，搭配糖水或花生。', calories: '約200大卡' },
        { name: '臭豆腐', image: 'https://images.unsplash.com/photo-1626082911101-6a7b3f1b5a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '香脆外皮，獨特氣味的台灣小吃。', calories: '約350大卡' },
        { name: '花枝丸', image: 'https://images.unsplash.com/photo-1626082911302-6b4c2e7b7502?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: 'Q彈的花枝丸，適合炸或煮湯。', calories: '約250大卡' },
        { name: '車輪餅', image: 'https://images.unsplash.com/photo-1626082911503-6c5d3f8b7603?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '外皮酥軟，內餡紅豆或奶油。', calories: '約300大卡' },
        { name: '蔥油餅', image: 'https://images.unsplash.com/photo-1626082911704-6d6e4f9c7704?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', description: '香酥蔥油餅，滿滿蔥香。', calories: '約350大卡' }
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
    
    // 設置結果文字
    document.getElementById('food-name').textContent = `你今天吃：${selectedFood.name}！`;
    document.getElementById('food-description').textContent = selectedFood.description;
    document.getElementById('food-calories').textContent = `熱量：${selectedFood.calories}`;

    // 處理圖片載入
    const foodImage = document.getElementById('food-image');
    foodImage.src = ''; // 清空當前 src 避免殞留舊圖片
    foodImage.src = selectedFood.image;

    // 圖片載入成功後顯示結果
    foodImage.onload = () => {
        document.getElementById('result').classList.remove('hidden');
    };

    // 圖片載入失敗時使用備用圖片
    foodImage.onerror = () => {
        foodImage.src = fallbackImage;
        document.getElementById('result').classList.remove('hidden');
    };
}