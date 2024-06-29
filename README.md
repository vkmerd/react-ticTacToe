# Tic Tac Toe

Bu proje, iki oyunculu klasik bir Tic Tac Toe oyununu web tarayıcısında oynayabileceğiniz bir React uygulamasıdır. Oyun, modern bir tasarım için Material-UI bileşenlerini kullanmaktadır.

## Özellikler

- Oyuncu ve AI sırasıyla oynaması
- Basit ve sezgisel kullanıcı arayüzü
- Kazananın belirlenmesi ve berabere durumunun kontrolü
- Oyun tahtasını sıfırlama özelliği

## Kullanılan Teknolojiler

- React
- Material-UI

## Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. Depoyu klonlayın:
    ```bash
    git clone https://github.com/vkmerd/react-ticTacToe/
    ```

2. Proje dizinine gidin:
    ```bash
    cd tic-tac-toe
    ```

3. Gerekli paketleri yükleyin:
    ```bash
    npm install
    ```

4. Uygulamayı başlatın:
    ```bash
    npm start
    ```

## Kullanım

1. İlk oyuncu adını girerek oyuna başlayın.
2. Oyun tahtasında tıklayarak hamle yapın. AI otomatik olarak sıradaki hamleyi yapacaktır.
3. Oyun bittiğinde kazanan belirlenir veya oyun berabere kalır.
4. Oyun tahtasını sıfırlamak için "Reset Game" butonuna tıklayın.

## Proje Yapısı

- `App.js`: Ana uygulama bileşeni.
- `components/GameForm.js`: Oyuncu adı formunu içeren bileşen.
- `components/GameScreen.js`: Oyun tahtasını ve kontrol düğmelerini içeren bileşen.
- `components/GameFunctions.js`: Oyun mantığını içeren fonksiyonlar.
- `App.css`: Uygulama stili.
- `package.json`: Proje bağımlılıkları ve script'ler.
