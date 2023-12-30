const work_article_information = $$(".work__articles__article__information");
const work_article_information_h2 = $$(".work__articles__article__information > h2");
const work_article_information_p = $$(".work__articles__article__information > p");
const work_articles = $$(".work__articles__article");

work_articles.forEach((work_article) => {
  work_article.addEventListener("mouseover", () => {
    const work_article_information = work_article.querySelector(
      ".work__articles__article__information"
    );
    if (work_article_information) {
      work_article_information.style.width = "30%";
      work_article_information_h2.style.color = "#666";
      work_article_information_p.style.color = "#fff";
    }
  });
});

work_articles.forEach((work_article) => {
  work_article.addEventListener("mouseout", () => {
    const work_article_information = work_article.querySelector(
      ".work__articles__article__information"
    );
    if (work_article_information) {
      work_article_information.style.width = "0%";
      work_article_information_h2.style.color = "transparent";
      work_article_information_p.style.color = "transparent";
    }
  });
});
