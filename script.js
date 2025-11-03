// script.js - Netflix Clone : insérer des images dynamiquement

document.addEventListener("DOMContentLoaded", () => {
  const sections = {
    tendances: [
      "https://image.tmdb.org/t/p/w300/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
      "https://image.tmdb.org/t/p/w300/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
      "https://image.tmdb.org/t/p/w300/9O1Iy9od7uKVbwlU9Yv0Zs3XfG8.jpg",
      "https://image.tmdb.org/t/p/w300/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      "https://image.tmdb.org/t/p/w300/rTh4K5uw9HypmpGslcKd4QfHl93.jpg"
    ],
    top10: [
      "https://image.tmdb.org/t/p/w300/tlZpSxYuBRoVJBOpOrWSz5JAkOb.jpg",
      "https://image.tmdb.org/t/p/w300/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg",
      "https://image.tmdb.org/t/p/w300/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
      "https://image.tmdb.org/t/p/w300/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
      "https://image.tmdb.org/t/p/w300/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg"
    ],
    action: [
      "https://image.tmdb.org/t/p/w300/w9Z7A0GHEhIpE2cN5j3Fy0GVrFr.jpg",
      "https://image.tmdb.org/t/p/w300/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
      "https://image.tmdb.org/t/p/w300/jWg8sH5nOMAz3N9NhkQ9gZfK3HS.jpg",
      "https://image.tmdb.org/t/p/w300/xMb6fJ2HnChS6oCfC4jVj4QEkWb.jpg",
      "https://image.tmdb.org/t/p/w300/9md3QMn3DfuWJnDfShp7rY0Ec2b.jpg"
    ]
  };

  for (const [id, urls] of Object.entries(sections)) {
    const container = document.getElementById(id);
    urls.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "affiche film";
      container.appendChild(img);
    });
  }
});
