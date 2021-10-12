deployMonster(monsters);
function deployMonster(monsters) {
  const main = document.querySelector("main");
  const monster = monsters[Math.floor(Math.random() * monsters.length)];
  const {
    img,
    name,
    powers: { health = 10, defense },
    styling: { circle, imgBgd },
  } = monster;
  const monsterArticle = `<article>
                            <figure>
                            <span></span>
                            <img src="./assets/monsters/${img}.png" alt="monster" />
                            </figure>
                            <div class="info">
                            <p>Name: <strong>${name}</strong></p>
                            <p>Health: <strong>${health}HP</strong></p>
                            <p>Strength: <strong>${defense}DP</strong></p>
                            </div>
                            <div class="pictures">
                            <figure>
                                <img src="./assets/icons/sword.png" alt="strength" />
                            </figure>
                            <figure>
                                <img src="./assets//icons/shield.png" alt="defense" />
                            </figure>
                            <figure>
                                <img src="./assets/icons/escape.png" alt="strike type" />
                            </figure>
                            </div>
                        </article>`;

  main.innerHTML = monsterArticle;
  document.querySelector("span").style.border = `solid 20px ${circle}`;
  document.querySelector("article >  figure").style.background = `${imgBgd}`;
}
