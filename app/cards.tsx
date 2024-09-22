export default function card() {
    return(
        <>
        <section className="box">
<img src="./pic1.png" alt="Pikachu" />
<div className="profile">
    <h3><u>Pikachu</u></h3>
    <p>I am a Pokémon.</p>
    {/* <button id="button1">Read more</button> */}
</div>
</section>

<section className="box">
<img src="./pic2.png" alt="Toy Doll" />
<div className="profile">
    <h3><u>Doll</u></h3>
    <p>I am a toy doll.</p>
    {/* <button id="button2">Read more</button> */}
</div>
</section>

<section className="box">
<img src="./pic3.png" alt="Goku" />
<div className="profile">
    <h3><u>Goku</u></h3>
    <p>I am a Fighter.</p>
    {/* <button id="button3">Read more</button> */}
</div>
</section>

        </>
    )
}