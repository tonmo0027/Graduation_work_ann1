const artworks = [
    {
        id: 1,
        title: "アウトドアの風景",
        description: "自然の中で捉えた美しい瞬間。光と影の調和が織りなす作品です。",
        image: "https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        author: "abdul rahim rangrez",
        category: "写真"
    },
    {
        id: 2,
        title: "クリエイティブセッション",
        description: "創作過程を記録したドキュメンタリー写真。",
        image: "https://images.unsplash.com/photo-1758613654472-7d0f611c1b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        author: "Vitaly Gariev",
        category: "写真"
    },
    {
        id: 3,
        title: "ポートレートレビュー",
        description: "人物の表情と感情を捉えた作品です。",
        image: "https://images.unsplash.com/photo-1758613654800-26e7f2706fbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        author: "Vitaly Gariev",
        category: "写真"
    },
    {
        id: 4,
        title: "スタジオワーク",
        description: "スタジオでの撮影風景を記録した作品。",
        image: "https://images.unsplash.com/photo-1758613653231-bae4e1131dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        author: "Vitaly Gariev",
        category: "写真"
    },
    {
        id: 5,
        title: "プロフェッショナル撮影",
        description: "プロの現場での緊張感あふれる一コマ。",
        image: "https://images.unsplash.com/photo-1758613653298-738e98658e31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        author: "Vitaly Gariev",
        category: "写真"
    },
    {
        id: 6,
        title: "タトゥーアート",
        description: "精密な線画で描かれた目のタトゥー作品。",
        image: "https://images.unsplash.com/photo-1775135436883-56af5c10a476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        author: "Haberdoedas",
        category: "アート"
    },
    {
        id: 7,
        title: "撮影現場",
        description: "撮影の舞台裏を捉えた記録写真。",
        image: "https://images.unsplash.com/photo-1758613654240-e531842faea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        author: "Vitaly Gariev",
        category: "写真"
    },
    {
        id: 8,
        title: "ボディアート制作",
        description: "タトゥーアーティストの繊細な技術を記録。",
        image: "https://images.unsplash.com/photo-1769605767701-6e5a680ef685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        author: "Bradley Andrews",
        category: "アート"
    },
    {
        id: 9,
        title: "アイデアスケッチ",
        description: "付箋に描かれた創造的なアイデアの記録。",
        image: "https://images.unsplash.com/photo-1763621569464-409a050b112e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        author: "Jakub Żerdzicki",
        category: "デザイン"
    },
    {
        id: 10,
        title: "カラフルアート",
        description: "色鉛筆を使った鮮やかな作品。",
        image: "https://images.unsplash.com/photo-1672353380618-d4f31b47b07b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        author: "Elena Mozhvilo",
        category: "イラスト"
    },
    {
        id: 11,
        title: "ペーパーアート",
        description: "紙を使った立体的な表現作品。",
        image: "https://images.unsplash.com/photo-1600585100195-381592790cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        author: "Swati H. Das",
        category: "アート"
    },
    {
        id: 12,
        title: "クリエイティブマネー",
        description: "日常の素材を使った創造的な作品。",
        image: "https://images.unsplash.com/photo-1594024561977-4774ad2e6eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        author: "Chamindu Perera",
        category: "写真"
    }
];

// グリッドに作品を表示
function renderArtworks() {
    const grid = document.getElementById('artworkGrid');

    artworks.forEach(artwork => {
        const card = document.createElement('div');
        card.className = 'artwork-card';
        card.innerHTML = `
      <div class="artwork-image-container">
        <img src="${artwork.image}" alt="${artwork.title}" class="artwork-image">
      </div>
      <div class="artwork-info">
        <h3 class="artwork-title">${artwork.title}</h3>
        <p class="artwork-meta">${artwork.category} • ${artwork.author}</p>
      </div>
    `;

        card.addEventListener('click', () => openModal(artwork));
        grid.appendChild(card);
    });
}

// モーダルを開く
function openModal(artwork) {
    const modal = document.getElementById('modal');
    document.getElementById('modalImage').src = artwork.image;
    document.getElementById('modalImage').alt = artwork.title;
    document.getElementById('modalCategory').textContent = artwork.category;
    document.getElementById('modalTitle').textContent = artwork.title;
    document.getElementById('modalAuthor').textContent = `作者：${artwork.author}`;
    document.getElementById('modalDescription').textContent = artwork.description;

    modal.classList.add('active');
}

// モーダルを閉じる
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

// イベントリスナー
document.getElementById('closeModal').addEventListener('click', closeModal);
document.querySelector('.modal-overlay').addEventListener('click', closeModal);

// 初期化
renderArtworks();