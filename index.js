const shareBtn = document.querySelector(".article-card__button")
const shareFooter = document.querySelector(".article-card__socials")

shareBtn.addEventListener("click", () => {
  shareFooter.classList.toggle("active")
  shareBtn.classList.toggle("active")
  console.log("clicked")
})
