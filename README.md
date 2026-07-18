# Pokebook 📘

Bu proje, popüler **PokeAPI** servisini kullanarak Pokémon bilgilerini listeleyen, filtreleyen ve detaylarını gösteren modern ve dinamik bir web uygulamasıdır. Proje tamamen Türkçe'ye yerelleştirilmiş ve Dockerize edilmiştir.

## Özellikler 🌟

*   **Türkçe Yerelleştirme**: Tüm kullanıcı arayüzü, Pokémon istatistikleri, türleri (Ateş, Su, Çimen vb.) ve yetenek/açıklama bilgileri dinamik olarak Türkçe'ye çevrilir.
*   **Özel Türkçe Yazım Kuralları**: Dotted `İ` ve dotless `I` gibi Türkçe karakter kuralları (örn. `İvysaur`) başarıyla desteklenmektedir.
*   **Kolay Kurulum (Docker)**: Uygulama Docker ve Docker Compose ile saniyeler içinde ayağa kaldırılabilir.
*   **Canlı Güncelleme**: Yerel geliştirme yaparken yaptığınız değişiklikler (volume mounting sayesinde) anında tarayıcıya yansır.
*   **Dinamik Çeviri**: Pokémon detaylarındaki İngilizce açıklamalar ve yetenekler Google Translate API entegrasyonu sayesinde anlık olarak Türkçe'ye çevrilir.

## Kurulum ve Çalıştırma 🚀

Projenin yerelinizde çalışabilmesi için sisteminizde **Docker Desktop** kurulu olmalıdır.

1.  Proje klasörüne gidin.
2.  Aşağıdaki komutu çalıştırarak uygulamayı arka planda başlatın:
    ```bash
    docker compose up -d
    ```
3.  Tarayıcınızdan şu adrese gidin:
    👉 **[http://localhost:8080](http://localhost:8080)**

## Teknolojiler 🛠️

*   **Front-end**: HTML5, Vanilla CSS3, JavaScript (ES6+)
*   **API**: [PokeAPI](https://pokeapi.co/)
*   **Konteynerleştirme**: Docker, Docker Compose, Nginx (Alpine)

## Lisans ve Teşekkür 💖

*   Bu proje pratik yapmak amacıyla geliştirilmiştir.
